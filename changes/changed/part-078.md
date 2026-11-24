# Changed — Bundle Modifications Report (Part 078 / 137)

- **Updated at**: `2026-11-25T07:51 JST`
- **Part**: `78 / 137` (**392** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 077](part-077.md) · [Part 079 →](part-079.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/77.js` (7zvlu.7df130a9 → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/77.js` (4621 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45)

#### 1327. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L10978-L10980` → after: `L10142-L10144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10142-L10144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10142-L10144) · [Before (L10978-L10980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L10978-L10980)

```diff
-         super(BB, jB, zB, nB), this.breakingItem = void 0, this.firing = void 0, this.burstRemaining = void 0, this.burstSchedule = void 0, this.wasFiringLastTick = void 0, this.didShootLastTick = void 0, this.attemptAiming = void 0, this.aiming = void 0, this.fireSchedule = void … [truncated]
-         const dB = this.ur.pm.aY();
-         if (this.heldItemState.VY === this.ur.zV) {
+         super(BB, IB, ZB, JB), this.breakingItem = void 0, this.firing = void 0, this.burstRemaining = void 0, this.burstSchedule = void 0, this.wasFiringLastTick = void 0, this.didShootLastTick = void 0, this.attemptAiming = void 0, this.aiming = void 0, this.fireSchedule = void … [truncated]
+         const oB = this.Nz.Ig.JR();
+         if (this.heldItemState.bR === this.Nz.Jm) {
```

#### 1328. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L10984` → after: `L10148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10148) · [Before (L10984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L10984)

```diff
-             ny: dB,
+             lg: oB,
```

#### 1329. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L10992` → after: `L10156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10156) · [Before (L10992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L10992)

```diff
-           }).mirror, this.bulletBlockedBillboardPlane = (0, Wj.l)(BB.pm, "bulletBlockedBillboardPlane", (0, ej.f)({
+           }).mirror, this.bulletBlockedBillboardPlane = (0, uI.n)(BB.Ig, "bulletBlockedBillboardPlane", (0, fI.f)({
```

#### 1330. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L10995` → after: `L10159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10159) · [Before (L10995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L10995)

```diff
-           })), this.bulletBlockedBillboardPlane.material = this.bulletBlockedBillboardMat, this.bulletBlockedBillboardPlane.mH(!1), BB.pm.py(this.bulletBlockedBillboardPlane, !1), this.ticksSinceAttackBlockedBillboardUpdate = 0
+           })), this.bulletBlockedBillboardPlane.material = this.bulletBlockedBillboardMat, this.bulletBlockedBillboardPlane.qY(!1), BB.Ig.xg(this.bulletBlockedBillboardPlane, !1), this.ticksSinceAttackBlockedBillboardUpdate = 0
```

#### 1331. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11001-L11002` → after: `L10165-L10166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10165-L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10165-L10166) · [Before (L11001-L11002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11001-L11002)

```diff
-         super.selected(BB), this.breakingItem.reset(), this.breakingItem.selected(BB), this.gunTypeObj = BB, this.gunStats = new hj(this.ur, BB, this.heldItemState.VY), this.firing = !1, this.burstRemaining = 0, this.burstSchedule = new qj(ij), this.aiming = !1, this.attemptAimin … [truncated]
-         const zB = cB.c.get("isTouchScreen"),
+         super.selected(BB), this.breakingItem.reset(), this.breakingItem.selected(BB), this.gunTypeObj = BB, this.gunStats = new RI(this.Nz, BB, this.heldItemState.bR), this.firing = !1, this.burstRemaining = 0, this.burstSchedule = new YI(OI), this.aiming = !1, this.attemptAimin … [truncated]
+         const ZB = EB.d.get("isTouchScreen"),
```

#### 1332. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11004` → after: `L10168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10168) · [Before (L11004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11004)

```diff
-           nB = (null !== (jB = this.lastShots.get(this.gunTypeObj.name)) && void 0 !== jB ? jB : -1 / 0) + this.gunStats.getIntervalMs(zB) / 1.2 + Ej,
+           JB = (null !== (IB = this.lastShots.get(this.gunTypeObj.name)) && void 0 !== IB ? IB : -1 / 0) + this.gunStats.getIntervalMs(ZB) / 1.2 + wI,
```

#### 1333. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11006` → after: `L10170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10170) · [Before (L11006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11006)

```diff
-         this.fireSchedule = new qj(ij), this.pressedAt = 0, this.wasDueLastTick = !1, this.fireSchedule.arm(dB), this.soundLastRoundFired = QB.soundLastRoundFired, this.aimChangeTime = 0, this.reloadStartTime = 0, this.firstPersonGunMeshScaling = .055, this.smallMuzzleFlashScale  … [truncated]
+         this.fireSchedule = new YI(OI), this.pressedAt = 0, this.wasDueLastTick = !1, this.fireSchedule.arm(oB), this.soundLastRoundFired = TB.soundLastRoundFired, this.aimChangeTime = 0, this.reloadStartTime = 0, this.firstPersonGunMeshScaling = .055, this.smallMuzzleFlashScale  … [truncated]
```

#### 1334. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11011` → after: `L10175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10175) · [Before (L11011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11011)

```diff
-         })), this.cachedZoomLevel = this.ur.camera.Xw, this.inaccuracyCalculator = null, this.heldItemState.VY === this.ur.zV && (this.inaccuracyCalculator = new Tj(this.ur, BB, this.gunStats), this.ur.camera.Ow.Av(this.gunStats.getStat("kickbackDecreaseRate"))), this.lastGunShot … [truncated]
+         })), this.cachedZoomLevel = this.Nz.camera.NK, this.inaccuracyCalculator = null, this.heldItemState.bR === this.Nz.Jm && (this.inaccuracyCalculator = new LI(this.Nz, BB, this.gunStats), this.Nz.camera.iK.J_(this.gunStats.getStat("kickbackDecreaseRate"))), this.lastGunShot … [truncated]
```

#### 1335. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11015` → after: `L10179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10179) · [Before (L11015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11015)

```diff
-         this.muzzleParticleEmitter && !this.muzzleParticleEmitter.aE() || (null === (BB = this.muzzleParticleSystem) || void 0 === BB || BB.dispose(), this.createMuzzleEmitter())
+         this.muzzleParticleEmitter && !this.muzzleParticleEmitter.mC() || (null === (BB = this.muzzleParticleSystem) || void 0 === BB || BB.dispose(), this.createMuzzleEmitter())
```

#### 1336. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11055` → after: `L10219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10219) · [Before (L11055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11055)

```diff
-           blendMode: fj.d.Standard
+           blendMode: iI.g.Standard
```

#### 1337. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11061-L11062` → after: `L10225-L10226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10225-L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10225-L10226) · [Before (L11061-L11062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11061-L11062)

```diff
-         (super.reset(), this.aiming && this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel), this.firing = !1, this.burstRemaining = 0, this.burstSchedule = new qj(ij), this.aiming = !1, this.attemptAiming = !1, this.fireSchedule = new qj(ij), this.p … [truncated]
-         rB.n.unsubscribe(this.networkedPlayerShotSub), null === (BB = this.bulletBlockedBillboardPlane) || void 0 === BB || BB.mH(!1);
+         (super.reset(), this.aiming && this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel), this.firing = !1, this.burstRemaining = 0, this.burstSchedule = new YI(OI), this.aiming = !1, this.attemptAiming = !1, this.fireSchedule = new YI(OI), this.p … [truncated]
+         zB.l.unsubscribe(this.networkedPlayerShotSub), null === (BB = this.bulletBlockedBillboardPlane) || void 0 === BB || BB.qY(!1);
```

#### 1338. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11071` → after: `L10235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10235) · [Before (L11071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11071)

```diff
-         null !== BB && this.muzzleParticleEmitter && this.ur.pm.JY.detachTransformNodeIfFound(this.muzzleParticleEmitter, BB, 0), super.releaseThirdPersonThinObject()
+         null !== BB && this.muzzleParticleEmitter && this.Nz.Ig.kR.detachTransformNodeIfFound(this.muzzleParticleEmitter, BB, 0), super.releaseThirdPersonThinObject()
```

#### 1339. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11077` → after: `L10241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10241) · [Before (L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11077)

```diff
-       XzB() {
+       cTB() {
```

#### 1340. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11083-L11084` → after: `L10247-L10248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10247-L10248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10247-L10248) · [Before (L11083-L11084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11083-L11084)

```diff
-       YzB() {
-         return this.breakingItem.YzB(), this.firing = !1, {
+       GTB() {
+         return this.breakingItem.GTB(), this.firing = !1, {
```

#### 1341. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11089` → after: `L10253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10253) · [Before (L11089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11089)

```diff
-       rUB() {
+       ecB() {
```

#### 1342. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11096` → after: `L10260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10260) · [Before (L11096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11096)

```diff
-       DzB() {
+       oTB() {
```

#### 1343. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11117-L11118` → after: `L10281-L10282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10281-L10282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10281-L10282) · [Before (L11117-L11118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11117-L11118)

```diff
-       VzB() {
-         return this.breakingItem.VzB(), !0
+       vTB() {
+         return this.breakingItem.vTB(), !0
```

#### 1344. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11124` → after: `L10288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10288) · [Before (L11124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11124)

```diff
-         const zB = cB.c.get("isTouchScreen");
+         const ZB = EB.d.get("isTouchScreen");
```

#### 1345. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11143` → after: `L10307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10307) · [Before (L11143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11143)

```diff
-         QB && this.lastShots.set(this.gunTypeObj.name, jB), !this.firing || this.gunStats.getStat("autoFireWithMouse") || zB || (this.firing = !1), this.heldItemState.VY === this.ur.zV && (0 !== this.ur.camera.Kw ? this.updateAttackBlockedBillboard() : this.bulletBlockedBillboard … [truncated]
+         TB && this.lastShots.set(this.gunTypeObj.name, IB), !this.firing || this.gunStats.getStat("autoFireWithMouse") || ZB || (this.firing = !1), this.heldItemState.bR === this.Nz.Jm && (0 !== this.Nz.camera.WK ? this.updateAttackBlockedBillboard() : this.bulletBlockedBillboard … [truncated]
```

#### 1346. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11151` → after: `L10315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10315) · [Before (L11151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11151)

```diff
-         QB > 0 ? "sniper" === nB && Yj.f.setMultiplierType("sniperScope", 1 / (1 + 5 * QB)) : "sniper" === nB && Yj.f.removeMultiplier("sniperScope");
+         TB > 0 ? "sniper" === JB && jI.d.setMultiplierType("sniperScope", 1 / (1 + 5 * TB)) : "sniper" === JB && jI.d.removeMultiplier("sniperScope");
```

#### 1347. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11155` → after: `L10319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10319) · [Before (L11155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11155)

```diff
-           this.ur.pm.bNB(this.mesh, !BB && this.heldItemState._visible)
+           this.Nz.Ig.dkB(this.mesh, !BB && this.heldItemState._visible)
```

#### 1348. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11160` → after: `L10324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10324) · [Before (L11160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11160)

```diff
-         this.aimChangeTime = performance.now(), rB.n.Ly("aimingOverlay", this.gunStats.getStat("scopeType")), this.ur.vG.ejB().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !1), this.cachedZoomLevel = this.bloxd.client.cameraController.getZoomDistance(), this.bloxd.cl … [truncated]
+         this.aimChangeTime = performance.now(), zB.l.Gq("aimingOverlay", this.gunStats.getStat("scopeType")), this.Nz.zW.UZB().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !1), this.cachedZoomLevel = this.bloxd.client.cameraController.getZoomDistance(), this.bloxd.cl … [truncated]
```

#### 1349. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11163` → after: `L10327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10327) · [Before (L11163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11163)

```diff
-         this.aimChangeTime = performance.now(), rB.n.Ly("aimingOverlay", "none"), this.ur.vG.ejB().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !0), this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel)
+         this.aimChangeTime = performance.now(), zB.l.Gq("aimingOverlay", "none"), this.Nz.zW.UZB().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !0), this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel)
```

#### 1350. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11172` → after: `L10336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10336) · [Before (L11172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11172)

```diff
-         if (this.updateMuzzleFlashFromRenderTick(), !this.ur.pm.Rm) return;
+         if (this.updateMuzzleFlashFromRenderTick(), !this.Nz.Ig.Xg) return;
```

#### 1351. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11174` → after: `L10338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10338) · [Before (L11174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11174)

```diff
-         null !== jB && this.ur.pm.JY.getActuallyVisible(jB) && this._updateHeldMeshLighting()
+         null !== IB && this.Nz.Ig.kR.getActuallyVisible(IB) && this._updateHeldMeshLighting()
```

#### 1352. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11180` → after: `L10344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10344) · [Before (L11180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11180)

```diff
-         this.muzzleParticleEmitter && !(0, lj.e)(this.muzzleParticleEmitter) && null !== this.liveThirdPersonThinObjectId() && (this.muzzleParticleEmitter.position._isDirty = !0)
+         this.muzzleParticleEmitter && !(0, lI.d)(this.muzzleParticleEmitter) && null !== this.liveThirdPersonThinObjectId() && (this.muzzleParticleEmitter.position._isDirty = !0)
```

#### 1353. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11185` → after: `L10349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10349) · [Before (L11185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11185)

```diff
-       aUB() {
+       XcB() {
```

#### 1354. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11189` → after: `L10353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10353) · [Before (L11189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11189)

```diff
-           return this.mesh.pp.set(BB, BB, BB), this.mesh.rotation.set(0, .5 * Math.PI, 0), this.mesh.parent = this.ur.pm.camera, (0, kB.k)(this.mesh, 0, 0, 0), this.ensureMuzzleEmitter(), this.muzzleParticleEmitter.parent = this.mesh, this.placeMuzzleEmitter(BB, BB, BB), void thi … [truncated]
+           return this.mesh.ek.set(BB, BB, BB), this.mesh.rotation.set(0, .5 * Math.PI, 0), this.mesh.parent = this.Nz.Ig.camera, (0, yB.q)(this.mesh, 0, 0, 0), this.ensureMuzzleEmitter(), this.muzzleParticleEmitter.parent = this.mesh, this.placeMuzzleEmitter(BB, BB, BB), void thi … [truncated]
```

#### 1355. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11191` → after: `L10355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10355) · [Before (L11191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11191)

```diff
-         this.ur.pm.bNB(this.mesh, !1);
+         this.Nz.Ig.dkB(this.mesh, !1);
```

#### 1356. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11195` → after: `L10359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10359) · [Before (L11195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11195)

```diff
-           return void(null !== BB && this.ur.pm.JY.setVisibility(BB, !1))
+           return void(null !== BB && this.Nz.Ig.kR.setVisibility(BB, !1))
```

#### 1357. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11205` → after: `L10369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10369) · [Before (L11205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11205)

```diff
-         if ("arm" === BB) return void(0, GB.f)(this.typeObj, jB.itemOffset, this.thirdPersonPose);
+         if ("arm" === BB) return void(0, UB.d)(this.typeObj, IB.itemOffset, this.thirdPersonPose);
```

#### 1358. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11209` → after: `L10373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10373) · [Before (L11209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11209)

```diff
-           pp: NB
+           ek: vB
```

#### 1359. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11211` → after: `L10375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10375) · [Before (L11211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11211)

```diff
-         this.thirdPersonPose.usesQuaternion = !1, NB.jH(cj);
+         this.thirdPersonPose.usesQuaternion = !1, vB.TY(EI);
```

#### 1360. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11213-L11215` → after: `L10377-L10379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10377-L10379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10377-L10379) · [Before (L11213-L11215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11213-L11215)

```diff
-           UB = Kj.x + (null !== (zB = null === uB || void 0 === uB ? void 0 : uB[0]) && void 0 !== zB ? zB : 0),
-           aB = Kj.y + (null !== (QB = null === uB || void 0 === uB ? void 0 : uB[1]) && void 0 !== QB ? QB : 0),
-           pB = Kj.z + (null !== (nB = null === uB || void 0 === uB ? void 0 : uB[2]) && void 0 !== nB ? nB : 0),
+           cB = bI.x + (null !== (ZB = null === kB || void 0 === kB ? void 0 : kB[0]) && void 0 !== ZB ? ZB : 0),
+           nB = bI.y + (null !== (TB = null === kB || void 0 === kB ? void 0 : kB[1]) && void 0 !== TB ? TB : 0),
+           hB = bI.z + (null !== (JB = null === kB || void 0 === kB ? void 0 : kB[2]) && void 0 !== JB ? JB : 0),
```

#### 1361. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11219-L11220` → after: `L10383-L10384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10383-L10384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10383-L10384) · [Before (L11219-L11220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11219-L11220)

```diff
-           yB.KJ.TransformCoordinatesFromFloatsToRef(UB, aB, pB, BB, dB), IB.U3(Cj.x + rB[0], Cj.y + rB[1], Cj.z + rB[2])
-         } else dB.U3(UB, aB, pB), IB.U3(Cj.x, Cj.y, Cj.z)
+           qB.rN.TransformCoordinatesFromFloatsToRef(cB, nB, hB, BB, oB), GB.cBB(xI.x + zB[0], xI.y + zB[1], xI.z + zB[2])
+         } else oB.cBB(cB, nB, hB), GB.cBB(xI.x, xI.y, xI.z)
```

#### 1362. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11226` → after: `L10390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10390) · [Before (L11226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11226)

```diff
-         const jB = this.ur.pm.JY;
+         const IB = this.Nz.Ig.kR;
```

#### 1363. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11229` → after: `L10393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10393) · [Before (L11229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11229)

```diff
-           pp: zB
+           ek: ZB
```

#### 1364. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11240` → after: `L10404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10404) · [Before (L11240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11240)

```diff
-         nB.pp.set(IB / Math.abs(BB), IB / Math.abs(jB), IB / Math.abs(zB))
+         JB.ek.set(GB / Math.abs(BB), GB / Math.abs(IB), GB / Math.abs(ZB))
```

#### 1365. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11247` → after: `L10411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10411) · [Before (L11247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11247)

```diff
-         if (console.assert(this.heldItemState.VY === this.ur.zV, "fireBulletLocal should only be called for local player."), this.reloading) return !1;
+         if (console.assert(this.heldItemState.bR === this.Nz.Jm, "fireBulletLocal should only be called for local player."), this.reloading) return !1;
```

#### 1366. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11249` → after: `L10413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10413) · [Before (L11249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11249)

```diff
-         const zB = this.ur.vG.yjB(this.ur.zV),
+         const ZB = this.Nz.zW.lIB(this.Nz.Jm),
```

#### 1367. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11251-L11252` → after: `L10415-L10416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10415-L10416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10415-L10416) · [Before (L11251-L11252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11251-L11252)

```diff
-           nB = (0, sB.c)().client.inventoryPrediction.predict(aj.b.shoot(zB.getSelectedSlotIndex(), QB.name)),
-           dB = null !== (jB = this.gunStats.getStat("shotPelletCount")) && void 0 !== jB ? jB : 1;
+           JB = (0, FB.d)().client.inventoryPrediction.predict(nI.b.shoot(ZB.getSelectedSlotIndex(), TB.name)),
+           oB = null !== (IB = this.gunStats.getStat("shotPelletCount")) && void 0 !== IB ? IB : 1;
```

#### 1368. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11268` → after: `L10432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10432) · [Before (L11268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11268)

```diff
-               cI: pB,
+               eG: hB,
```

#### 1369. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11273` → after: `L10437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10437) · [Before (L11273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11273)

```diff
-             gB = null !== (GB = tj.e.lifeformMeshToBodyPart[sB]) && void 0 !== GB ? GB : rB;
+             dB = null !== (UB = CI.f.lifeformMeshToBodyPart[FB]) && void 0 !== UB ? UB : zB;
```

#### 1370. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11275` → after: `L10439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10439) · [Before (L11275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11275)

```diff
-           const tB = QB === Hj.b.HIT_ENTITY && (null === (LB = this.ur.RY[this.ur.zV][nB]) || void 0 === LB ? void 0 : LB.canAttack) && !this.ur.RY[this.ur.zV][nB]._invincible;
+           const CB = TB === aI.c.HIT_ENTITY && (null === (WB = this.Nz.Tm[this.Nz.Jm][JB]) || void 0 === WB ? void 0 : WB.canAttack) && !this.Nz.Tm[this.Nz.Jm][JB]._invincible;
```

#### 1371. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11277-L11278` → after: `L10441-L10442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10441-L10442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10441-L10442) · [Before (L11277-L11278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11277-L11278)

```diff
-             cI: pB,
-             bI: NB,
+             eG: hB,
+             uG: vB,
```

#### 1372. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11280-L11281` → after: `L10444-L10445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10444-L10445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10444-L10445) · [Before (L11280-L11281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11280-L11281)

```diff
-               PQ: nB,
-               vI: gB
+               rT: JB,
+               fG: dB
```

#### 1373. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11283-L11284` → after: `L10447-L10448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10447-L10448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10447-L10448) · [Before (L11283-L11284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11283-L11284)

```diff
-               PQ: null,
-               vI: null
+               rT: null,
+               fG: null
```

#### 1374. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11287` → after: `L10451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10451) · [Before (L11287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11287)

```diff
-         }(0, sB.c)().client.gameRecorder.recordBulletShot(this.heldItemState.VY, uB);
+         }(0, FB.d)().client.gameRecorder.recordBulletShot(this.heldItemState.bR, kB);
```

#### 1375. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11289-L11293` → after: `L10453-L10457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10453-L10457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10453-L10457) · [Before (L11289-L11293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11289-L11293)

```diff
-           lI: QB.name,
-           wI: (0, sB.c)().client.getMsgHandler().LzB.state.tickCounter,
-           xI: aB,
-           KI: IB,
-           RI: nB
+           PG: TB.name,
+           rG: (0, FB.d)().client.getMsgHandler().xZB.state.tickCounter,
+           mG: nB,
+           XG: GB,
+           lG: JB
```

#### 1376. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11295` → after: `L10459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10459) · [Before (L11295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11295)

```diff
-         if ((0, NB.sendColyMessage)(KB.Kj, gB), JB) {
+         if ((0, vB.sendColyMessage)(bB.sj, dB), NB) {
```

#### 1377. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11297-L11303` → after: `L10461-L10467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10461-L10467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10461-L10467) · [Before (L11297-L11303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11297-L11303)

```diff
-           const BB = this.ur.wG,
-             jB = (0, sB.c)().client,
-             zB = null !== (tB = null === (SB = QB.attributes.customAttributes) || void 0 === SB ? void 0 : SB.enchantments) && void 0 !== tB ? tB : {},
-             nB = jB.getEffectLevel(this.ur.zV, "Damage"),
-             dB = jB.getEffectLevel(this.ur.zV, "Rested Damage"),
-             NB = null !== (MB = zB.Damage) && void 0 !== MB ? MB : 0,
-             uB = null !== (EB = zB["Critical Damage"]) && void 0 !== EB ? EB : 0;
+           const BB = this.Nz.vW,
+             IB = (0, FB.d)().client,
+             ZB = null !== (CB = null === (QB = TB.attributes.customAttributes) || void 0 === QB ? void 0 : QB.enchantments) && void 0 !== CB ? CB : {},
+             JB = IB.getEffectLevel(this.Nz.Jm, "Damage"),
+             oB = IB.getEffectLevel(this.Nz.Jm, "Rested Damage"),
+             vB = null !== (sB = ZB.Damage) && void 0 !== sB ? sB : 0,
+             kB = null !== (wB = ZB["Critical Damage"]) && void 0 !== wB ? wB : 0;
```

#### 1378. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11305-L11306` → after: `L10469-L10470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10469-L10470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10469-L10470) · [Before (L11305-L11306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11305-L11306)

```diff
-               PQ: QB,
-               vI: aB
+               rT: TB,
+               fG: nB
```

#### 1379. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11310` → after: `L10474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10474) · [Before (L11310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11310)

```diff
-             const zB = this.ur.RY[this.ur.zV][QB];
+             const ZB = this.Nz.Tm[this.Nz.Jm][TB];
```

#### 1380. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11315` → after: `L10479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10479) · [Before (L11315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11315)

```diff
-             sB = (0, pB.k)(sB, nB, dB, NB), "Head" === aB && uB > 0 && (sB *= 1 + .08 * uB);
+             FB = (0, hB.w)(FB, JB, oB, vB), "Head" === nB && kB > 0 && (FB *= 1 + .08 * kB);
```

#### 1381. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11317` → after: `L10481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10481) · [Before (L11317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11317)

```diff
-               mB = (0, pB.L)(zB._armourReductionSum, zB._protectionEnchantSum, jB.getEffectLevel(QB, "Damage Reduction"), jB.getEffectLevel(QB, "Weakness"), zB._receivingDamageMultiplier),
+               gB = (0, hB.U)(ZB._armourReductionSum, ZB._protectionEnchantSum, IB.getEffectLevel(TB, "Damage Reduction"), IB.getEffectLevel(TB, "Weakness"), ZB._receivingDamageMultiplier),
```

#### 1382. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11319` → after: `L10483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10483) · [Before (L11319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11319)

```diff
-             rB.n.Ly("shotPlayer", {
+             zB.l.Gq("shotPlayer", {
```

#### 1383. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11326-L11327` → after: `L10490-L10491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10490-L10491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10490-L10491) · [Before (L11326-L11327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11326-L11327)

```diff
-           rB.n.Ly("localGunHitmarker", {
-             Wj: mB
+           zB.l.Gq("localGunHitmarker", {
+             uI: gB
```

#### 1384. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11330` → after: `L10494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10494) · [Before (L11330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11330)

```diff
-         rB.n.Ly("localPlayerNewShotsLeft", QB.attributes.customAttributes.shotsLeft);
+         zB.l.Gq("localPlayerNewShotsLeft", TB.attributes.customAttributes.shotsLeft);
```

#### 1385. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11336` → after: `L10500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10500) · [Before (L11336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11336)

```diff
-         return this.inaccuracyCalculator.shot(BB), this.ur.camera.Ow.add(HB), 0 === this.getShotsLeftCount() && this.reload(BB), !0
+         return this.inaccuracyCalculator.shot(BB), this.Nz.camera.iK.add(aB), 0 === this.getShotsLeftCount() && this.reload(BB), !0
```

#### 1386. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11348-L11349` → after: `L10512-L10513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10512-L10513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10512-L10513) · [Before (L11348-L11349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11348-L11349)

```diff
-           vG: NB
-         } = this.ur, uB = this.bloxd.iK(this.heldItemState.VY), UB = this.pickActionHelper.pickWeaponRaycast(BB, jB, this.bulletReachDistance, {
+           zW: vB
+         } = this.Nz, kB = this.bloxd.sV(this.heldItemState.bR), cB = this.pickActionHelper.pickWeaponRaycast(BB, IB, this.bulletReachDistance, {
```

#### 1387. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11355` → after: `L10519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10519) · [Before (L11355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11355)

```diff
-           uZ: sB,
+           Eu: FB,
```

#### 1388. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11357-L11358` → after: `L10521-L10522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10521-L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10521-L10522) · [Before (L11357-L11358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11357-L11358)

```diff
-         } = UB, mB = null !== (dB = UB.globalRayOrigin) && void 0 !== dB ? dB : nB().copy(wj, this.bloxd.getLifeformEyePos(this.heldItemState.VY, !1)), yB = null !== (IB = UB.distanceTravelled) && void 0 !== IB ? IB : this.bulletReachDistance, kB = nB().gd(xj, mB, jB, 2.5 * uB),  … [truncated]
-         NB.hY(GB, "hidingMeshManager", {
+         } = cB, gB = null !== (oB = cB.globalRayOrigin) && void 0 !== oB ? oB : JB().copy(AI, this.bloxd.getLifeformEyePos(this.heldItemState.bR, !1)), qB = null !== (GB = cB.distanceTravelled) && void 0 !== GB ? GB : this.bulletReachDistance, yB = JB().io(tI, gB, IB, 2.5 * kB),  … [truncated]
+         vB.xR(UB, "hidingMeshManager", {
```

#### 1389. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11361` → after: `L10525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10525) · [Before (L11361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11361)

```diff
-             NB.hY(GB, NB.names.mesh, {
+             vB.xR(UB, vB.names.mesh, {
```

#### 1390. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11363` → after: `L10527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10527) · [Before (L11363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11363)

```diff
-               vIB: !0
+               svB: !0
```

#### 1391. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11367` → after: `L10531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10531) · [Before (L11367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11367)

```diff
-             NB.ZY(GB, NB.names.mesh)
+             vB.Qr(UB, vB.names.mesh)
```

#### 1392. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11372-L11373` → after: `L10536-L10537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10536-L10537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10536-L10537) · [Before (L11372-L11373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11372-L11373)

```diff
-           ju: "bullet"
-         }), NB.hY(GB, "bullet", {
+           Ev: "bullet"
+         }), vB.xR(UB, "bullet", {
```

#### 1393. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11375` → after: `L10539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10539) · [Before (L11375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11375)

```diff
-             aB === Hj.b.HIT_BLOCK && this.makeBulletHole(rB, sB, zB)
+             nB === aI.c.HIT_BLOCK && this.makeBulletHole(zB, FB, ZB)
```

#### 1394. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11388` → after: `L10552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10552) · [Before (L11388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11388)

```diff
-           cI: gB,
+           eG: dB,
```

#### 1395. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11393` → after: `L10557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10557) · [Before (L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11393)

```diff
-         return "head" === this.ur.wG.gunshotOrigin ? "head" : "default"
+         return "head" === this.Nz.vW.gunshotOrigin ? "head" : "default"
```

#### 1396. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11396` → after: `L10560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10560) · [Before (L11396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11396)

```diff
-         return this.heldItemState.VY === this.ur.zV && !0 === cB.c.get("clientEscMenuOptions").showWeaponRaycasts
+         return this.heldItemState.bR === this.Nz.Jm && !0 === EB.d.get("clientEscMenuOptions").showWeaponRaycasts
```

#### 1397. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11400` → after: `L10564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10564) · [Before (L11400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11400)

```diff
-         const zB = this.heldItemState.VY === this.ur.zV,
+         const ZB = this.heldItemState.bR === this.Nz.Jm,
```

#### 1398. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11404` → after: `L10568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10568) · [Before (L11404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11404)

```diff
-           if (QB && null === this.ur.vG.yjB(this.ur.zV).findItem("Ammo")) return
+           if (TB && null === this.Nz.zW.lIB(this.Nz.Jm).findItem("Ammo")) return
```

#### 1399. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11408-L11410` → after: `L10572-L10574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10572-L10574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10572-L10574) · [Before (L11408-L11410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11408-L11410)

```diff
-           const BB = (0, sB.c)().client.inventoryPrediction.predict(QB ? aj.b.takeFirst("Ammo") : null);
-           (0, NB.sendColyMessage)(KB.yj, {
-             RI: BB
+           const BB = (0, FB.d)().client.inventoryPrediction.predict(TB ? nI.b.takeFirst("Ammo") : null);
+           (0, vB.sendColyMessage)(bB.Ui, {
+             lG: BB
```

#### 1400. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11414` → after: `L10578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10578) · [Before (L11414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11414)

```diff
-         this.heldItemState.VY === this.ur.zV && rB.n.Ly("middleScreenBarInitiate", {
+         this.heldItemState.bR === this.Nz.Jm && zB.l.Gq("middleScreenBarInitiate", {
```

#### 1401. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11416` → after: `L10580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10580) · [Before (L11416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11416)

```diff
-           Tn: !0,
+           pJ: !0,
```

#### 1402. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11419` → after: `L10583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10583) · [Before (L11419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11419)

```diff
-           this.reloading = !1, this.numBulletsReloading = 0, this.reloadTimeouts = [], this.heldItemState.VY === this.ur.zV && (this.setShotsLeft(this.gunStats.getStat("clipSize")), rB.n.Ly("localPlayerNewShotsLeft", this.getShotsLeftCount()))
+           this.reloading = !1, this.numBulletsReloading = 0, this.reloadTimeouts = [], this.heldItemState.bR === this.Nz.Jm && (this.setShotsLeft(this.gunStats.getStat("clipSize")), zB.l.Gq("localPlayerNewShotsLeft", this.getShotsLeftCount()))
```

#### 1403. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11421` → after: `L10585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10585) · [Before (L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11421)

```diff
-         const dB = this.heldItemState.VY === this.ur.zV ? oj.f.firstPersonReload : oj.f.thirdPersonReload,
+         const oB = this.heldItemState.bR === this.Nz.Jm ? pI.c.firstPersonReload : pI.c.thirdPersonReload,
```

#### 1404. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11424` → after: `L10588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10588) · [Before (L11424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11424)

```diff
-             void 0 !== jB && sj.e.play(jB, dB, this.heldItemState.VY, void 0, void 0)
+             void 0 !== IB && FI.d.play(IB, oB, this.heldItemState.bR, void 0, void 0)
```

#### 1405. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11431` → after: `L10595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10595) · [Before (L11431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11431)

```diff
-           IB(`${uB}_load_bullet_`);
+           GB(`${kB}_load_bullet_`);
```

#### 1406. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11433` → after: `L10597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10597) · [Before (L11433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11433)

```diff
-             IB(`${uB}_load_bullet_`)
+             GB(`${kB}_load_bullet_`)
```

#### 1407. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11436` → after: `L10600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10600) · [Before (L11436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11436)

```diff
-             IB(`${uB}_cock_`)
+             GB(`${kB}_cock_`)
```

#### 1408. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11440-L11441` → after: `L10604-L10605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10604-L10605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10604-L10605) · [Before (L11440-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11440-L11441)

```diff
-           IB(`${uB}_magazine_unload_`), this.reloadTimeouts.push(setTimeout((() => {
-             IB(`${uB}_magazine_load_`)
+           GB(`${kB}_magazine_unload_`), this.reloadTimeouts.push(setTimeout((() => {
+             GB(`${kB}_magazine_load_`)
```

#### 1409. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11443` → after: `L10607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10607) · [Before (L11443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11443)

```diff
-             IB(`${uB}_cock_`)
+             GB(`${kB}_cock_`)
```

#### 1410. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11461` → after: `L10625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10625) · [Before (L11461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11461)

```diff
-           return jB < zB ? jB / zB : jB > BB - zB ? 1 - (jB - (BB - zB)) / zB : 1
+           return IB < ZB ? IB / ZB : IB > BB - ZB ? 1 - (IB - (BB - ZB)) / ZB : 1
```

#### 1411. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11469-L11470` → after: `L10633-L10634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10633-L10634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10633-L10634) · [Before (L11469-L11470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11469-L11470)

```diff
-         const jB = this.ur.vG.yjB(this.heldItemState.VY).getItemAtSelectedSlot().attributes.customAttributes;
-         jB.shotsLeft = BB, this.ur.vG.yjB(this.heldItemState.VY).getItemAtSelectedSlot().attributes.customAttributes = jB
+         const IB = this.Nz.zW.lIB(this.heldItemState.bR).getItemAtSelectedSlot().attributes.customAttributes;
+         IB.shotsLeft = BB, this.Nz.zW.lIB(this.heldItemState.bR).getItemAtSelectedSlot().attributes.customAttributes = IB
```

#### 1412. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11474` → after: `L10638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10638) · [Before (L11474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11474)

```diff
-         return null === (BB = this.ur.vG.yjB(this.heldItemState.VY).getItemAtSelectedSlot().attributes.customAttributes) || void 0 === BB ? void 0 : BB.shotsLeft
+         return null === (BB = this.Nz.zW.lIB(this.heldItemState.bR).getItemAtSelectedSlot().attributes.customAttributes) || void 0 === BB ? void 0 : BB.shotsLeft
```

#### 1413. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11485-L11486` → after: `L10649-L10650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10649-L10650) · [Before (L11485-L11486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11485-L11486)

```diff
-         this.ur.WK([BB, jB, zB], QB);
-         const nB = this.ur.vG.add(QB, .1, .1, this.gunTypeObj.getBulletCasingMesh(), null, !0),
+         this.Nz.HV([BB, IB, ZB], TB);
+         const JB = this.Nz.zW.add(TB, .1, .1, this.gunTypeObj.getBulletCasingMesh(), null, !0),
```

#### 1414. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11490-L11491` → after: `L10654-L10655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10654-L10655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10654-L10655) · [Before (L11490-L11491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11490-L11491)

```diff
-         NB = this.aimsAsLocalPlayer() ? xB.b.getAimHeading(this.ur) : this.ur.vG.JjB(this.heldItemState.VY).heading, this.ur.vG.pT(nB).applyImpulse([Math.cos(NB) * IB, dB, -Math.sin(NB) * IB]), setTimeout((() => {
-           this.ur.vG.deleteEntity(nB)
+         vB = this.aimsAsLocalPlayer() ? tB.c.getAimHeading(this.Nz) : this.Nz.zW.uIB(this.heldItemState.bR).heading, this.Nz.zW.vx(JB).applyImpulse([Math.cos(vB) * GB, oB, -Math.sin(vB) * GB]), setTimeout((() => {
+           this.Nz.zW.deleteEntity(JB)
```

#### 1415. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11497-L11502` → after: `L10661-L10666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10661-L10666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10661-L10666) · [Before (L11497-L11502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11497-L11502)

```diff
-           IB = this.ur.IjB(BB, null, wj),
-           NB = new yB.KJ(IB[0] + jB[0] * dB, IB[1] + jB[1] * dB, IB[2] + jB[2] * dB),
-           uB = new yB.KJ(IB[0] - jB[0], IB[1] - jB[1], IB[2] - jB[2]);
-         QB.position = NB, (0, kB.j)(QB, uB.x - NB.x, uB.y - NB.y, uB.z - NB.z), QB.Ny = !1;
-         const UB = nB().gd(xj, BB, jB, dB);
-         this.ur.pm.py(QB, !1, UB), setTimeout((() => {
+           GB = this.Nz.jIB(BB, null, AI),
+           vB = new qB.rN(GB[0] + IB[0] * oB, GB[1] + IB[1] * oB, GB[2] + IB[2] * oB),
+           kB = new qB.rN(GB[0] - IB[0], GB[1] - IB[1], GB[2] - IB[2]);
+         TB.position = vB, (0, yB.o)(TB, kB.x - vB.x, kB.y - vB.y, kB.z - vB.z), TB.tg = !1;
+         const cB = JB().io(tI, BB, IB, oB);
+         this.Nz.Ig.xg(TB, !1, cB), setTimeout((() => {
```

#### 1416. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11511` → after: `L10675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10675) · [Before (L11511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11511)

```diff
-           (0, kB.k)(this.mesh, QB, nB + dB, .4)
+           (0, yB.q)(this.mesh, TB, JB + oB, .4)
```

#### 1417. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11516-L11517` → after: `L10680-L10681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10680-L10681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10680-L10681) · [Before (L11516-L11517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11516-L11517)

```diff
-         const zB = 1 - .25 * BB * (null !== (jB = this.gunStats.getStat("aimZoomFactor")) && void 0 !== jB ? jB : 1);
-         this.ur.vG.getState(this.ur.zV, "playerCameraAdjustment").fovMultiplier.setMultiplierType("aimingGunZoom", zB)
+         const ZB = 1 - .25 * BB * (null !== (IB = this.gunStats.getStat("aimZoomFactor")) && void 0 !== IB ? IB : 1);
+         this.Nz.zW.getState(this.Nz.Jm, "playerCameraAdjustment").fovMultiplier.setMultiplierType("aimingGunZoom", ZB)
```

#### 1418. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11528` → after: `L10692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10692) · [Before (L11528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11528)

```diff
-           nB().gd(jB, jB, zB, .001);
+           JB().io(IB, IB, ZB, .001);
```

#### 1419. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11530` → after: `L10694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10694) · [Before (L11530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11530)

```diff
-           (0, kB.k)(this.bulletBlockedBillboardPlane, QB, dB, IB), nB().gd(jB, jB, zB, -1), (0, kB.j)(this.bulletBlockedBillboardPlane, jB[0] - QB, jB[1] - dB, jB[2] - IB)
+           (0, yB.q)(this.bulletBlockedBillboardPlane, TB, oB, GB), JB().io(IB, IB, ZB, -1), (0, yB.o)(this.bulletBlockedBillboardPlane, IB[0] - TB, IB[1] - oB, IB[2] - GB)
```

#### 1420. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11532` → after: `L10696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10696) · [Before (L11532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11532)

```diff
-         this.ur.pm.bNB(this.bulletBlockedBillboardPlane, null !== BB)
+         this.Nz.Ig.dkB(this.bulletBlockedBillboardPlane, null !== BB)
```

#### 1421. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11544` → after: `L10708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10708) · [Before (L11544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11544)

```diff
-         if (BB - this.soundLastRoundFired > 3 * jB && (0, Dj.n)(zB, `${QB}_first_shot_01`)) this.lastGunShotTail = sj.e.play(`${QB}_first_shot_01`, oj.f.gunShot, this.heldItemState.VY, 75, 10);
+         if (BB - this.soundLastRoundFired > 3 * IB && (0, HI.m)(ZB, `${TB}_first_shot_01`)) this.lastGunShotTail = FI.d.play(`${TB}_first_shot_01`, pI.c.gunShot, this.heldItemState.bR, 75, 10);
```

#### 1422. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11546-L11548` → after: `L10710-L10712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10710-L10712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10710-L10712) · [Before (L11546-L11548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11546-L11548)

```diff
-           const BB = (0, Dj.f)(`${QB}_shot_`);
-           this.lastGunShotTail = sj.e.play(BB, oj.f.gunShot, this.heldItemState.VY, 75, 10)
-         }(0, Dj.n)(zB, `${QB}_tail_only_shot_01`) && (this.lastGunShotTail = sj.e.play(`${QB}_tail_only_shot_01`, oj.f.gunShot, this.heldItemState.VY, 75, 10))
+           const BB = (0, HI.f)(`${TB}_shot_`);
+           this.lastGunShotTail = FI.d.play(BB, pI.c.gunShot, this.heldItemState.bR, 75, 10)
+         }(0, HI.m)(ZB, `${TB}_tail_only_shot_01`) && (this.lastGunShotTail = FI.d.play(`${TB}_tail_only_shot_01`, pI.c.gunShot, this.heldItemState.bR, 75, 10))
```

#### 1423. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11551` → after: `L10715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10715) · [Before (L11551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11551)

```diff
-         sj.e.play((0, Dj.f)("headshot_"), oj.f.gunHeadshot)
+         FI.d.play((0, HI.f)("headshot_"), pI.c.gunHeadshot)
```

#### 1424. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11556` → after: `L10720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10720) · [Before (L11556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11556)

```diff
-           sj.e.play((0, Dj.f)("bullet_shell_bounce_general_"), oj.f.bulletShellBounce)
+           FI.d.play((0, HI.f)("bullet_shell_bounce_general_"), pI.c.bulletShellBounce)
```

#### 1425. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11560-L11562` → after: `L10724-L10726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10724-L10726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10724-L10726) · [Before (L11560-L11562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11560-L11562)

```diff
-     var vj = zB(38307),
-       Rj = zB(38524),
-       Oj = zB(37504);
+     var KI = ZB(38287),
+       VI = ZB(38483),
+       SI = ZB(37436);
```

#### 1426. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11565` → after: `L10729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10729) · [Before (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11565)

```diff
-         super(BB, jB, zB, QB, nB), this.inputs = void 0, this.schedule = void 0, this.readyOffset = void 0, this.firingOffset = void 0, this.fireInterval = void 0, this.inputs = 0, this.schedule = new qj(50), this.readyOffset = this.firstPersonPosOffset, this.firingOffset = new y … [truncated]
+         super(BB, IB, ZB, TB, JB), this.inputs = void 0, this.schedule = void 0, this.readyOffset = void 0, this.firingOffset = void 0, this.fireInterval = void 0, this.inputs = 0, this.schedule = new YI(50), this.readyOffset = this.firstPersonPosOffset, this.firingOffset = new q … [truncated]
```

#### 1427. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11574` → after: `L10738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10738) · [Before (L11574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11574)

```diff
-         jB ? this.schedule.fired(BB, QB, !0) : this.schedule.arm(BB + QB), rB.n.Ly("middleScreenBarInitiate", {
+         IB ? this.schedule.fired(BB, TB, !0) : this.schedule.arm(BB + TB), zB.l.Gq("middleScreenBarInitiate", {
```

#### 1428. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11576` → after: `L10740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10740) · [Before (L11576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11576)

```diff
-           Tn: !0,
+           pJ: !0,
```

#### 1429. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11582` → after: `L10746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10746) · [Before (L11582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11582)

```diff
-         if (!vj.d.includes(nB)) return this._performAltAction();
+         if (!KI.b.includes(JB)) return this._performAltAction();
```

#### 1430. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11584-L11586` → after: `L10748-L10750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10748-L10750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10748-L10750) · [Before (L11584-L11586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11584-L11586)

```diff
-           ur: dB
-         } = this, IB = null === (zB = dB.vG.mjB(dB.zV)) || void 0 === zB ? void 0 : zB.inventory, NB = null === IB || void 0 === IB ? void 0 : IB.getSelectedSlotIndex();
-         return (0, Vj.I)(NB) ? (console.error("Failed to get selected slot"), {
+           Nz: oB
+         } = this, GB = null === (ZB = oB.zW.fIB(oB.Jm)) || void 0 === ZB ? void 0 : ZB.inventory, vB = null === GB || void 0 === GB ? void 0 : GB.getSelectedSlotIndex();
+         return (0, PI.L)(vB) ? (console.error("Failed to get selected slot"), {
```

#### 1431. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11589` → after: `L10753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10753) · [Before (L11589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11589)

```diff
-         }) : (new Rj.d(this.bloxd, "", nB).initClientPredicted(NB), {
+         }) : (new VI.b(this.bloxd, "", JB).initClientPredicted(vB), {
```

#### 1432. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11603` → after: `L10767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10767) · [Before (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11603)

```diff
-         null === this.fireInterval && (this.fireInterval = null !== (BB = this.bloxd.getItemStat(this.ur.zV, this.typeObj.name, "fireInterval")) && void 0 !== BB ? BB : 0);
+         null === this.fireInterval && (this.fireInterval = null !== (BB = this.bloxd.getItemStat(this.Nz.Jm, this.typeObj.name, "fireInterval")) && void 0 !== BB ? BB : 0);
```

#### 1433. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11612` → after: `L10776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10776) · [Before (L11612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11612)

```diff
-       XzB() {
+       cTB() {
```

#### 1434. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11615` → after: `L10779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10779) · [Before (L11615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11615)

```diff
-       YzB() {
+       GTB() {
```

#### 1435. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11621` → after: `L10785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10785) · [Before (L11621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11621)

```diff
-       rUB() {
+       ecB() {
```

#### 1436. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11624` → after: `L10788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10788) · [Before (L11624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11624)

```diff
-       DzB() {
+       oTB() {
```

#### 1437. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11627` → after: `L10791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10791) · [Before (L11627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11627)

```diff
-       pUB() {
+       LcB() {
```

#### 1438. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11645-L11646` → after: `L10809-L10810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10809-L10810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10809-L10810) · [Before (L11645-L11646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11645-L11646)

```diff
-       ZzB() {
-         return null !== (0, Oj.j)(this.pickActionHelper) ? this._performAltAction() : this.fire(Date.now(), !1)
+       nTB() {
+         return null !== (0, SI.i)(this.pickActionHelper) ? this._performAltAction() : this.fire(Date.now(), !1)
```

#### 1439. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11649` → after: `L10813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10813) · [Before (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11649)

```diff
-         super.vp(BB, jB), this.inputs > 0 && this.getFireInterval() && this.fire(jB, !0)
+         super.Iz(BB, IB), this.inputs > 0 && this.getFireInterval() && this.fire(IB, !0)
```

#### 1440. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11653` → after: `L10817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10817) · [Before (L11653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11653)

```diff
-         this.firstPersonPosOffset = yB.KJ.Lerp(this.firingOffset, this.readyOffset, zB), super.renderTickLocalPlayer(BB, jB)
+         this.firstPersonPosOffset = qB.rN.Lerp(this.firingOffset, this.readyOffset, ZB), super.renderTickLocalPlayer(BB, IB)
```

#### 1441. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11659` → after: `L10823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10823) · [Before (L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11659)

```diff
-     var jz = zB(38539);
+     var IZ = ZB(38493);
```

#### 1442. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11662-L11664` → after: `L10826-L10828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10826-L10828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10826-L10828) · [Before (L11662-L11664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11662-L11664)

```diff
-       const BB = (0, sB.g)(),
-         jB = BB.vG.XjB(BB.zV);
-       (0, sB.c)().updateHeldVehicleStatus(), uz(BB, jB)
+       const BB = (0, FB.h)(),
+         IB = BB.zW.zZB(BB.Jm);
+       (0, FB.d)().updateHeldVehicleStatus(), kZ(BB, IB)
```

#### 1443. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11675` → after: `L10839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10839) · [Before (L11675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11675)

```diff
-       return rB.n.subscribe("updatedInventory", (() => {
+       return zB.l.subscribe("updatedInventory", (() => {
```

#### 1444. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11678` → after: `L10842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10842) · [Before (L11678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11678)

```diff
-         name: "kS",
+         name: "JC",
```

#### 1445. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11681` → after: `L10845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10845) · [Before (L11681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11681)

```diff
-           kS: null,
+           JC: null,
```

#### 1446. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11703` → after: `L10867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10867) · [Before (L11703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11703)

```diff
-         xG: function(jB, zB) {
+         cW: function(IB, ZB) {
```

#### 1447. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11706-L11708` → after: `L10870-L10872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10870-L10872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10870-L10872) · [Before (L11706-L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11706-L11708)

```diff
-             dB = new aB.c(BB, jB);
-           zB.fistItem = new mB.e(BB, zB, QB, dB), zB.kS = zB.fistItem, zB.heldType = "Fist", zB._standardItem = new FB(BB, zB, QB, zB.fistItem, dB), zB._blockItem = new rj(BB, zB, QB, zB.fistItem, dB), zB._chargeableItem = new Gj(BB, zB, QB, zB.fistItem, dB), zB._gunItem = new bj … [truncated]
-             zB.kS.UUB()
+             oB = new nB.b(BB, IB);
+           ZB.fistItem = new gB.c(BB, ZB, TB, oB), ZB.JC = ZB.fistItem, ZB.heldType = "Fist", ZB._standardItem = new MB(BB, ZB, TB, ZB.fistItem, oB), ZB._blockItem = new zI(BB, ZB, TB, ZB.fistItem, oB), ZB._chargeableItem = new UI(BB, ZB, TB, ZB.fistItem, oB), ZB._gunItem = new DI … [truncated]
+             ZB.JC.mcB()
```

#### 1448. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11710-L11712` → after: `L10874-L10876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10874-L10876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10874-L10876) · [Before (L11710-L11712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11710-L11712)

```diff
-             zB.kS !== zB.fistItem && (zB.kS.reset(), zB.kS = zB.fistItem, zB.heldType = "Fist", zB.heldItemName = null, zB._heldLightTintFloor = null, zB.fistItem.selected(), rB.n.Ly("newLocalPlayerHeldItem", zB.kS)), zB._gunItem.forgetLastShots()
-           }))), zB._playerInvisSub = rB.n.subscribe(`otherEntitySettingsClientifiedEId|${zB.VY}|_invisibleEffect`, (jB => {
-             zB.VY !== BB.zV && (zB._visible = !jB, zB.kS && zB.kS.UUB())
+             ZB.JC !== ZB.fistItem && (ZB.JC.reset(), ZB.JC = ZB.fistItem, ZB.heldType = "Fist", ZB.heldItemName = null, ZB._heldLightTintFloor = null, ZB.fistItem.selected(), zB.l.Gq("newLocalPlayerHeldItem", ZB.JC)), ZB._gunItem.forgetLastShots()
+           }))), ZB._playerInvisSub = zB.l.subscribe(`otherEntitySettingsClientifiedEId|${ZB.bR}|_invisibleEffect`, (IB => {
+             ZB.bR !== BB.Jm && (ZB._visible = !IB, ZB.JC && ZB.JC.mcB())
```

#### 1449. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11715-L11718` → after: `L10879-L10882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10879-L10882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10879-L10882) · [Before (L11715-L11718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11715-L11718)

```diff
-         ZD: function(BB, jB) {
-           for (const zB in jB) jB[zB] instanceof JB.c && jB[zB].reset();
-           for (const zB in jB) jB[zB] instanceof JB.c && jB[zB].destroy();
-           rB.n.unsubscribe(jB._playerVisSub), rB.n.unsubscribe(jB._playerInvisSub)
+         nH: function(BB, IB) {
+           for (const ZB in IB) IB[ZB] instanceof NB.e && IB[ZB].reset();
+           for (const ZB in IB) IB[ZB] instanceof NB.e && IB[ZB].destroy();
+           zB.l.unsubscribe(IB._playerVisSub), zB.l.unsubscribe(IB._playerInvisSub)
```

#### 1450. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11722` → after: `L10886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10886) · [Before (L11722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11722)

```diff
-           for (const nB of zB) uz(BB, nB), nB.kS ? nB.kS.vp(jB, QB) : console.error(new Error(`state.helditem for player ${nB.VY} is falsy - ${nB.kS}`))
+           for (const JB of ZB) kZ(BB, JB), JB.JC ? JB.JC.Iz(IB, TB) : console.error(new Error(`state.helditem for player ${JB.bR} is falsy - ${JB.JC}`))
```

#### 1451. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11724` → after: `L10888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10888) · [Before (L11724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11724)

```diff
-         dL: function(jB, zB) {
+         FW: function(IB, ZB) {
```

#### 1452. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11726-L11727` → after: `L10890-L10891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10890-L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10890-L10891) · [Before (L11726-L11727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11726-L11727)

```diff
-             nB = (0, jz.k)();
-           for (const dB of zB) dB.kS ? dB.VY === BB.zV || (0, jz.o)(dB.VY, nB) ? dB.kS.renderTickLocalPlayer(jB, QB) : dB.kS.renderTickNetworkedPlayer(jB, QB) : console.error(new Error(`state.helditem for player ${dB.VY} is falsy - ${dB.kS}`))
+             JB = (0, IZ.i)();
+           for (const oB of ZB) oB.JC ? oB.bR === BB.Jm || (0, IZ.l)(oB.bR, JB) ? oB.JC.renderTickLocalPlayer(IB, TB) : oB.JC.renderTickNetworkedPlayer(IB, TB) : console.error(new Error(`state.helditem for player ${oB.bR} is falsy - ${oB.JC}`))
```

#### 1453. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11735-L11736` → after: `L10899-L10900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10899-L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10899-L10900) · [Before (L11735-L11736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11735-L11736)

```diff
-       const kB = BB.vG.hjB(jB.VY),
-         GB = BB.vG.GjB(jB.VY),
+       const yB = BB.zW.hZB(IB.bR),
+         UB = BB.zW.bIB(IB.bR),
```

#### 1454. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11741-L11743` → after: `L10905-L10907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10905-L10907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10905-L10907) · [Before (L11741-L11743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11741-L11743)

```diff
-           const zB = BB.vG.mjB(jB.VY).selectedItem;
-           mB = null === zB || void 0 === zB ? void 0 : zB.typeObj, yB = null !== (gB = null === zB || void 0 === zB || null === (tB = zB.attributes) || void 0 === tB || null === (SB = tB.customAttributes) || void 0 === SB ? void 0 : SB.enchantmentTier) && void 0 !== gB ? gB : nul … [truncated]
-         } else jB.networkedHeldItemName && (mB = dB.t[jB.networkedHeldItemName], yB = jB.networkedHeldItemEnchantmentTier);
+           const ZB = BB.zW.fIB(IB.bR).selectedItem;
+           gB = null === ZB || void 0 === ZB ? void 0 : ZB.typeObj, qB = null !== (dB = null === ZB || void 0 === ZB || null === (CB = ZB.attributes) || void 0 === CB || null === (QB = CB.customAttributes) || void 0 === QB ? void 0 : QB.enchantmentTier) && void 0 !== dB ? dB : nul … [truncated]
+         } else IB.networkedHeldItemName && (gB = oB.A[IB.networkedHeldItemName], qB = IB.networkedHeldItemEnchantmentTier);
```

#### 1455. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11745` → after: `L10909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10909) · [Before (L11745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11745)

```diff
-       const MB = GB && BB.vG.yjB(jB.VY).getSelectedSlotIndex() !== jB._lastInvenIdx,
+       const sB = UB && BB.zW.lIB(IB.bR).getSelectedSlotIndex() !== IB._lastInvenIdx,
```

#### 1456. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11748-L11753` → after: `L10912-L10917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10912-L10917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10912-L10917) · [Before (L11748-L11753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11748-L11753)

```diff
-       (((null === (zB = mB) || void 0 === zB ? void 0 : zB.name) || null) !== jB.heldItemName || MB || EB) && (jB.kS !== jB.fistItem && ((null === (iB = mB) || void 0 === iB ? void 0 : iB.meta.rootId) !== BB.bloxd.getMetaInfo(jB.heldItemName).rootId || MB || EB) && jB.kS.reset(), … [truncated]
-       GB && (jB._lastInvenIdx = BB.vG.yjB(jB.VY).getSelectedSlotIndex()), jB.heldItemName = null !== (QB = null === (NB = mB) || void 0 === NB ? void 0 : NB.name) && void 0 !== QB ? QB : null, jB.heldItemEnchantmentTier = yB;
-       const hB = mB && !(0, dB.p)(mB.type) ? mB.AJ : void 0,
-         XB = LB ? (0, VB.p)(jB.VY) : null,
-         ZB = XB ? dB.t[XB].AJ : void 0,
-         AB = LB && null !== (uB = null === (UB = BB.RY[BB.zV]) || void 0 === UB || null === (aB = UB[jB.VY]) || void 0 === aB ? void 0 : aB._glowingEffect) && void 0 !== uB && uB ? YB.GLOWING_EFFECT_EMISSION : void 0;
+       (((null === (ZB = gB) || void 0 === ZB ? void 0 : ZB.name) || null) !== IB.heldItemName || sB || wB) && (IB.JC !== IB.fistItem && ((null === (OB = gB) || void 0 === OB ? void 0 : OB.meta.rootId) !== BB.bloxd.getMetaInfo(IB.heldItemName).rootId || sB || wB) && IB.JC.reset(), … [truncated]
+       UB && (IB._lastInvenIdx = BB.zW.lIB(IB.bR).getSelectedSlotIndex()), IB.heldItemName = null !== (TB = null === (vB = gB) || void 0 === vB ? void 0 : vB.name) && void 0 !== TB ? TB : null, IB.heldItemEnchantmentTier = qB;
+       const RB = gB && !(0, oB.x)(gB.type) ? gB.iN : void 0,
+         rB = WB ? (0, PB.l)(IB.bR) : null,
+         mB = rB ? oB.A[rB].iN : void 0,
+         XB = WB && null !== (kB = null === (cB = BB.Tm[BB.Jm]) || void 0 === cB || null === (nB = cB[IB.bR]) || void 0 === nB ? void 0 : nB._glowingEffect) && void 0 !== kB && kB ? jB.GLOWING_EFFECT_EMISSION : void 0;
```

#### 1457. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11755-L11756` → after: `L10919-L10920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10919-L10920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10919-L10920) · [Before (L11755-L11756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11755-L11756)

```diff
-       const TB = null !== (sB = null === (JB = BB.vG.HjB(jB.VY)) || void 0 === JB ? void 0 : JB.isReplayLocalPlayer) && void 0 !== sB && sB;
-       if (jB.VY === BB.zV || TB) {
+       const LB = null !== (FB = null === (NB = BB.zW.oZB(IB.bR)) || void 0 === NB ? void 0 : NB.isReplayLocalPlayer) && void 0 !== FB && FB;
+       if (IB.bR === BB.Jm || LB) {
```

#### 1458. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11758-L11759` → after: `L10922-L10923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10922-L10923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10922-L10923) · [Before (L11758-L11759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11758-L11759)

```diff
-           xQB: zB
-         } = BB.pm, {
+           WJB: ZB
+         } = BB.Ig, {
```

#### 1459. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11763-L11767` → after: `L10927-L10931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10927-L10931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10927-L10931) · [Before (L11763-L11767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11763-L11767)

```diff
-         } = BB.wG;
-         nB().copy(BB.pm.FNB, null !== AB && void 0 !== AB ? AB : nB().ZERO);
-         const uB = LB ? QB : null,
-           UB = LB && "number" === typeof IB ? IB : null,
-           aB = LB && "number" === typeof NB ? NB : null,
+         } = BB.vW;
+         JB().copy(BB.Ig.okB, null !== XB && void 0 !== XB ? XB : JB().ZERO);
+         const kB = WB ? TB : null,
+           cB = WB && "number" === typeof GB ? GB : null,
+           nB = WB && "number" === typeof vB ? vB : null,
```

#### 1460. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11769-L11771` → after: `L10933-L10935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10933-L10935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10933-L10935) · [Before (L11769-L11771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11769-L11771)

```diff
-             const zB = jB && !(0, dB.p)(jB.type) ? az(jB) : null,
-               QB = (0, VB.p)(BB),
-               IB = QB ? az(dB.t[QB]) : null;
+             const ZB = IB && !(0, oB.x)(IB.type) ? nZ(IB) : null,
+               TB = (0, PB.l)(BB),
+               GB = TB ? nZ(oB.A[TB]) : null;
```

#### 1461. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11779-L11780` → after: `L10943-L10944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10943-L10944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10943-L10944) · [Before (L11779-L11780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11779-L11780)

```diff
-           }(jB.VY, mB) : null;
-         if (rB ? (BB.pm.YNB = null !== UB && void 0 !== UB ? UB : rB.range, BB.pm.DNB = null !== aB ? Iz(aB) : rB.coneCos) : (BB.pm.YNB = null !== UB && void 0 !== UB ? UB : 0, BB.pm.DNB = 0), uB) nB().scale(zB, (0, pB.S)(uB), 15);
+           }(IB.bR, gB) : null;
+         if (zB ? (BB.Ig.GkB = null !== cB && void 0 !== cB ? cB : zB.range, BB.Ig.JkB = null !== nB ? GZ(nB) : zB.coneCos) : (BB.Ig.GkB = null !== cB && void 0 !== cB ? cB : 0, BB.Ig.JkB = 0), kB) JB().scale(ZB, (0, hB.$)(kB), 15);
```

#### 1462. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11784-L11785` → after: `L10948-L10949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10948-L10949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10948-L10949) · [Before (L11784-L11785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11784-L11785)

```diff
-             FNB: jB
-           } = BB.pm;
+             okB: IB
+           } = BB.Ig;
```

#### 1463. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11793` → after: `L10957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10957) · [Before (L11793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11793)

```diff
-       if (!BB || void 0 === BB.spotlightRange || !BB.AJ) return null;
+       if (!BB || void 0 === BB.spotlightRange || !BB.iN) return null;
```

#### 1464. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11796` → after: `L10960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10960) · [Before (L11796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11796)

```diff
-         colour: BB.AJ,
+         colour: BB.iN,
```

#### 1465. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11802` → after: `L10966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10966) · [Before (L11802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11802)

```diff
-   38470: (BB, jB, zB) => {
+   38431: (BB, IB, ZB) => {
```

#### 1466. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11804-L11805` → after: `L10968-L10969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10968-L10969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10968-L10969) · [Before (L11804-L11805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11804-L11805)

```diff
-       e: () => qB,
-       i: () => fB
+       c: () => YB,
+       g: () => iB
```

#### 1467. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11807-L11812` → after: `L10971-L10976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10971-L10976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10971-L10976) · [Before (L11807-L11812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11807-L11812)

```diff
-     var QB = zB(38139),
-       nB = zB(37879),
-       dB = zB(37960),
-       IB = zB(3798),
-       NB = zB(214),
-       uB = zB(386),
+     var TB = ZB(38118),
+       JB = ZB(37840),
+       oB = ZB(37933),
+       GB = ZB(3854),
+       vB = ZB(201),
+       kB = ZB(364),
```

#### 1468. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11814-L11825` → after: `L10978-L10989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10978-L10989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10978-L10989) · [Before (L11814-L11825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11814-L11825)

```diff
-       aB = zB(38107),
-       pB = zB(36830),
-       rB = zB(36828),
-       sB = zB(37999),
-       JB = zB(376),
-       mB = zB(31),
-       yB = zB(2863),
-       kB = zB(38076),
-       GB = zB(38247),
-       LB = zB(38242),
-       gB = zB(3849),
-       tB = zB(1263);
+       nB = ZB(38080),
+       hB = ZB(36783),
+       zB = ZB(36780),
+       FB = ZB(37975),
+       NB = ZB(360),
+       gB = ZB(24),
+       qB = ZB(2912),
+       yB = ZB(38048),
+       UB = ZB(38239),
+       WB = ZB(38233),
+       dB = ZB(3911),
+       CB = ZB(1281);
```

#### 1469. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11827` → after: `L10991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10991) · [Before (L11827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11827)

```diff
-     const MB = ["length", 1, 0, 2, 3, 236, 106, 228, "b", "h", 64, 6, "d", "e", 11, "i", 10, 18, void 0, 150, 50, 38, 5, 190, 1023, "c", 61, 65536, 12, 55296, 56320, 63, 128, 188, "a", 192, 4, "Invalid byte index", 109, 165, 255, 224, 45, 31, "Invalid continuation byte", 240, 33, … [truncated]
+     const sB = ["length", 0, 2, 244, 66, null, 1, 155, void 0, "a", "b", "c", 7, 3, "e"];
```

#### 1470. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11834-L11881` → after: `L10998-L10999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R10998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L10998-L10999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L10998-L10999) · [Before (L11834-L11881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11834-L11881)

```diff
-     "cXtfq_" + MB[25] in EB && function(...BB) {
-       BB[MB[0]] = MB[2];
-       const jB = require("big-integer");
-       iB(BB[-MB[6]] = class {
-         static randomPrime(BB) {
-           const zB = jB.one.shiftLeft(BB - MB[1]),
-             QB = jB.one.shiftLeft(BB).prev();
-           for (;;) {
-             let BB = jB.randBetween(zB, QB);
-             if (BB.isProbablePrime(256)) return BB
-           }
-         }
-         static generate(...BB) {
-           BB[MB[0]] = MB[1];
-           const zB = jB(65537);
-           let QB, nB;
- ... (32 more removed lines; see GitHub link above)
+     "mnGXgb" in wB && function(...BB) {
+       BB[sB[0]] = sB[1]
```

#### 1471. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11883-L11951` → after: `L11001-L11010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11001-L11010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11001-L11010) · [Before (L11883-L11951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11883-L11951)

```diff
-       BB[MB[0]] = MB[36], "n6ONftj" in EB && function() {
-         ! function(...BB) {
-           function jB(...BB) {
-             for (iB(BB[MB[0]] = MB[1], BB[-MB[23]] = [], BB[MB[19]] = MB[2], BB[-MB[20]] = BB[MB[2]].length, BB[-MB[21]] = MB[18], BB[MB[22]] = MB[18]); BB[MB[19]] < BB[-MB[20]];) iB(BB[-MB[21]] = BB[MB[2]].charCodeAt(BB[MB[19]]++), BB[-MB[21]] >= MB[29] && BB[-MB[21]] <= 56319 & … [truncated]
-             return BB[-MB[23]]
-           }
- 
-           function zB(...jB) {
-             for (iB(jB[MB[0]] = MB[1], jB[MB[26]] = jB[MB[2]].length, jB[MB[8]] = -MB[1], jB[MB[25]] = MB[18], jB[-MB[28]] = ""); ++jB[MB[8]] < jB[MB[26]];) jB[MB[25]] = jB[MB[2]][jB[MB[8]]], jB[MB[25]] > 65535 && iB(jB[MB[25]] -= MB[27], jB[-MB[28]] += BB[MB[1]](jB[MB[25]] >>> M … [truncated]
-             return jB[-MB[28]]
-           }
- 
-           function QB(...BB) {
-             if (BB[MB[0]] = MB[1], BB[MB[2]] >= MB[29] && BB[MB[2]] <= 57343) throw Error("Lone surrogate U+" + BB[MB[2]].toString(16).toUpperCase() + " is not a scalar value")
-           }
- 
- ... (53 more removed lines; see GitHub link above)
+       OB(BB[sB[0]] = 4, BB[sB[9]] = sB[8], BB[sB[10]] = sB[8], BB[sB[11]] = sB[8], BB[sB[12]] = sB[8], BB[sB[14]] = sB[8]);
+       const IB = (0, qB.d)().client.getMsgHandler().xZB.state.tickCounter;
+       (0, GB.sendColyMessage)(dB.vh, {
+         iG: BB[sB[1]],
+         pG: (BB[sB[9]] = vB.f.lifeformMeshToBodyPart[BB[sB[6]] === sB[5] || void 0 === BB[sB[6]] || (BB[sB[10]] = BB[sB[6]].split("|")) === sB[5] || void 0 === BB[sB[10]] ? void 0 : BB[sB[10]][sB[1]]]) !== sB[5] && void 0 !== BB[sB[9]] ? BB[sB[9]] : sB[5],
+         GG: BB[sB[2]],
+         aG: (BB[sB[11]] = (BB[sB[12]] = BB[sB[13]].zW.fIB(BB[sB[13]].Jm)) === sB[5] || void 0 === BB[sB[12]] || (BB[sB[14]] = BB[sB[12]].inventory.getItemAtSelectedSlot()) === sB[5] || void 0 === BB[sB[14]] ? void 0 : BB[sB[14]].name) !== sB[5] && void 0 !== BB[sB[11]] ? BB[sB[11 … [truncated]
+         HG: CB.w,
+         MG: IB,
+         jG: pB
```

#### 1472. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11954` → after: `L11013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11013) · [Before (L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11954)

```diff
-     class qB extends LB.c {
+     class YB extends WB.e {
```

#### 1473. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11956` → after: `L11015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11015) · [Before (L11956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11956)

```diff
-         super(BB, jB, zB, QB), this.toolType = null, this.toolHarvestLevel = null, this.toolMultiplier = 1, this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, this.anyBreakingStartTim … [truncated]
+         super(BB, IB, ZB, TB), this.toolType = null, this.toolHarvestLevel = null, this.toolMultiplier = 1, this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, this.anyBreakingStartTim … [truncated]
```

#### 1474. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11966` → after: `L11025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11025) · [Before (L11966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11966)

```diff
-         super.reset(), this.heldItemState.VY === this.ur.zV && this.breakingParticles.vp(!1), this.resetTargetedBlock(Date.now()), this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, t … [truncated]
+         super.reset(), this.heldItemState.bR === this.Nz.Jm && this.breakingParticles.Iz(!1), this.resetTargetedBlock(Date.now()), this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, t … [truncated]
```

#### 1475. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11968` → after: `L11027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11027) · [Before (L11968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11968)

```diff
-       XzB() {
+       cTB() {
```

#### 1476. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11970` → after: `L11029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11029) · [Before (L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11970)

```diff
-         const nB = super.XzB(),
+         const JB = super.cTB(),
```

#### 1477. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11975-L11977` → after: `L11034-L11036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11034-L11036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11034-L11036) · [Before (L11975-L11977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11975-L11977)

```diff
-             FX: uB
-           } = this.sUB();
-         if (IB && !nB.preventAttack) return this.tnB(dB, IB, NB, uB), this.JUB(dB, IB), {
+             Xu: kB
+           } = this.ucB();
+         if (GB && !JB.preventAttack) return this.DJB(oB, GB, vB, kB), this.fcB(oB, GB), {
```

#### 1478. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11981-L11984` → after: `L11040-L11043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11040-L11043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11040-L11043) · [Before (L11981-L11984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11981-L11984)

```diff
-         const UB = null !== (BB = null === (jB = this.ur.mBB) || void 0 === jB ? void 0 : jB.position) && void 0 !== BB ? BB : null,
-           aB = null !== (zB = null === (QB = this.ur.mBB) || void 0 === QB ? void 0 : QB.JR) && void 0 !== zB ? zB : null,
-           pB = this.ur.vG.mjB(this.ur.zV);
-         if (!pB || !this.ur.wG.canAltAction) return {
+         const cB = null !== (BB = null === (IB = this.Nz.lBB) || void 0 === IB ? void 0 : IB.position) && void 0 !== BB ? BB : null,
+           nB = null !== (ZB = null === (TB = this.Nz.lBB) || void 0 === TB ? void 0 : TB.n_) && void 0 !== ZB ? ZB : null,
+           hB = this.Nz.zW.fIB(this.Nz.Jm);
+         if (!hB || !this.Nz.vW.canAltAction) return {
```

#### 1479. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11989` → after: `L11048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11048) · [Before (L11989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11989)

```diff
-           sB = new GB.c(this, null, null, UB, aB, rB).performPrimaryFire();
+           FB = new UB.e(this, null, null, cB, nB, zB).performPrimaryFire();
```

#### 1480. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11992` → after: `L11051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11051) · [Before (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11992)

```diff
-       ZzB() {
+       nTB() {
```

#### 1481. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L11997-L11999` → after: `L11056-L11058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11056-L11058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11056-L11058) · [Before (L11997-L11999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L11997-L11999)

```diff
-           FX: QB
-         } = this.sUB(), nB = super.ZzB();
-         return jB && !nB.preventAttack && (this.tnB(BB, jB, zB, QB), this.ur.vG.JjB(this.heldItemState.VY).setArmsAreSwinging()), nB
+           Xu: TB
+         } = this.ucB(), JB = super.nTB();
+         return IB && !JB.preventAttack && (this.DJB(BB, IB, ZB, TB), this.Nz.zW.uIB(this.heldItemState.bR).setArmsAreSwinging()), JB
```

#### 1482. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12001` → after: `L11060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11060) · [Before (L12001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12001)

```diff
-       VzB() {
+       vTB() {
```

#### 1483. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12005-L12006` → after: `L11064-L11065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11064-L11065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11064-L11065) · [Before (L12005-L12006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12005-L12006)

```diff
-         } = this.sUB();
-         return jB ? this.JUB(BB, jB) : this.breakingStart(), !0
+         } = this.ucB();
+         return IB ? this.fcB(BB, IB) : this.breakingStart(), !0
```

#### 1484. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12013-L12015` → after: `L11072-L11074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11072-L11074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11072-L11074) · [Before (L12013-L12015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12013-L12015)

```diff
-           FX: QB
-         } = this.sUB();
-         return !(!jB || !this.canAttack(jB)) && (this.ur.vG.JjB(this.heldItemState.VY).setArmsAreSwinging(), this.tnB(BB, jB, zB, QB), !0)
+           Xu: TB
+         } = this.ucB();
+         return !(!IB || !this.canAttack(IB)) && (this.Nz.zW.uIB(this.heldItemState.bR).setArmsAreSwinging(), this.DJB(BB, IB, ZB, TB), !0)
```

#### 1485. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12020` → after: `L11079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11079) · [Before (L12020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12020)

```diff
-           ur: QB
+           Nz: TB
```

#### 1486. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12022` → after: `L11081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11081) · [Before (L12022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12022)

```diff
-         return null !== (jB = null === (zB = QB.RY[QB.zV][BB]) || void 0 === zB ? void 0 : zB.canAttack) && void 0 !== jB && jB
+         return null !== (IB = null === (ZB = TB.Tm[TB.Jm][BB]) || void 0 === ZB ? void 0 : ZB.canAttack) && void 0 !== IB && IB
```

#### 1487. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12024` → after: `L11083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11083) · [Before (L12024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12024)

```diff
-       tnB(BB, jB, zB, QB) {
+       DJB(BB, IB, ZB, TB) {
```

#### 1488. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12026` → after: `L11085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11085) · [Before (L12026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12026)

```diff
-           ur: nB
+           Nz: JB
```

#### 1489. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12028` → after: `L11087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11087) · [Before (L12028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12028)

```diff
-         this.canAttack(jB) && (SB(jB, zB, BB, nB), this.bloxd.client.triggerGameCallback("onPlayerAttackEntity", nB.zV, jB, [QB[0], QB[1], QB[2]]))
+         this.canAttack(IB) && (QB(IB, ZB, BB, JB), this.bloxd.client.triggerGameCallback("onPlayerAttackEntity", JB.Jm, IB, [TB[0], TB[1], TB[2]]))
```

#### 1490. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12030` → after: `L11089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11089) · [Before (L12030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12030)

```diff
-       sUB() {
+       ucB() {
```

#### 1491. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12032-L12034` → after: `L11091-L11093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11091-L11093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11091-L11093) · [Before (L12032-L12034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12032-L12034)

```diff
-         const QB = null !== (BB = this.ur.VBB) && void 0 !== BB ? BB : this.ur.camera.nC(),
-           nB = null !== (jB = null === (zB = this.ur.vG.mjB(this.ur.zV)) || void 0 === zB ? void 0 : zB.inventory.getItemAtSelectedSlot()) && void 0 !== jB ? jB : null,
-           dB = this.bloxd.getAttackRangeFromHeldItem(this.ur.zV, nB),
+         const TB = null !== (BB = this.Nz.kIB) && void 0 !== BB ? BB : this.Nz.camera.XV(),
+           JB = null !== (IB = null === (ZB = this.Nz.zW.fIB(this.Nz.Jm)) || void 0 === ZB ? void 0 : ZB.inventory.getItemAtSelectedSlot()) && void 0 !== IB ? IB : null,
+           oB = this.bloxd.getAttackRangeFromHeldItem(this.Nz.Jm, JB),
```

#### 1492. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12041` → after: `L11100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11100) · [Before (L12041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12041)

```diff
-         return IB === aB.b.HIT_ENTITY ? {
+         return GB === nB.c.HIT_ENTITY ? {
```

#### 1493. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12045` → after: `L11104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11104) · [Before (L12045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12045)

```diff
-           FX: uB
+           Xu: kB
```

#### 1494. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12050` → after: `L11109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11109) · [Before (L12050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12050)

```diff
-           FX: null
+           Xu: null
```

#### 1495. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12053` → after: `L11112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11112) · [Before (L12053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12053)

```diff
-       JUB(BB, jB) {
+       fcB(BB, IB) {
```

#### 1496. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12056` → after: `L11115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11115) · [Before (L12056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12056)

```diff
-           ur: dB
+           Nz: oB
```

#### 1497. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12058-L12061` → after: `L11117-L11120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11117-L11120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11117-L11120) · [Before (L12058-L12061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12058-L12061)

```diff
-         (0, IB.sendColyMessage)(gB.vg, {
-           xa: jB,
-           JI: BB,
-           AI: null !== (zB = null === (QB = dB.vG.mjB(dB.zV)) || void 0 === QB || null === (nB = QB.inventory.getItemAtSelectedSlot()) || void 0 === nB ? void 0 : nB.name) && void 0 !== zB ? zB : null
+         (0, GB.sendColyMessage)(dB.ig, {
+           Kn: IB,
+           GG: BB,
+           aG: null !== (ZB = null === (TB = oB.zW.fIB(oB.Jm)) || void 0 === TB || null === (JB = TB.inventory.getItemAtSelectedSlot()) || void 0 === JB ? void 0 : JB.name) && void 0 !== ZB ? ZB : null
```

#### 1498. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12065-L12067` → after: `L11124-L11126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11124-L11126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11124-L11126) · [Before (L12065-L12067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12065-L12067)

```diff
-         const BB = this.ur.LBB;
-         BB && !(0, yB.c)().posSatisfiesModifyConstraints(this.ur.zV, BB.position[0], BB.position[1], BB.position[2]) && (this.ur.wG.canChange || this.ur.wG.cantBreakError || "You cannot modify this block" !== this.ur.wG.cantChangeError) && mB.n.Ly("showBottomMessage", {
-           message: this.ur.wG.cantBreakError || this.ur.wG.cantChangeError,
+         const BB = this.Nz.xBB;
+         BB && !(0, qB.d)().posSatisfiesModifyConstraints(this.Nz.Jm, BB.position[0], BB.position[1], BB.position[2]) && (this.Nz.vW.canChange || this.Nz.vW.cantBreakError || "You cannot modify this block" !== this.Nz.vW.cantChangeError) && gB.l.Gq("showBottomMessage", {
+           message: this.Nz.vW.cantBreakError || this.Nz.vW.cantChangeError,
```

#### 1499. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12072` → after: `L11131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11131) · [Before (L12072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12072)

```diff
-         if (this.heldItemState.VY !== this.ur.zV) return !1;
+         if (this.heldItemState.bR !== this.Nz.Jm) return !1;
```

#### 1500. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12074` → after: `L11133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11133) · [Before (L12074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12074)

```diff
-         return this.attemptingToBreak && (zB = this.breakBlock(jB)), this.breakingParticles.vp(zB), this.successfullyBreakingBlockLastTick = zB, zB
+         return this.attemptingToBreak && (ZB = this.breakBlock(IB)), this.breakingParticles.Iz(ZB), this.successfullyBreakingBlockLastTick = ZB, ZB
```

#### 1501. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12077` → after: `L11136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11136) · [Before (L12077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12077)

```diff
-         super.renderTickLocalPlayer(BB, jB), this.successfullyBreakingBlockLastTick ? this.momentumFrac = Math.min(this.momentumFrac + BB / JB.c.timeTillMaxMomentum, 1) : this.momentumFrac = Math.max(this.momentumFrac - BB / 1500, 0)
+         super.renderTickLocalPlayer(BB, IB), this.successfullyBreakingBlockLastTick ? this.momentumFrac = Math.min(this.momentumFrac + BB / NB.i.timeTillMaxMomentum, 1) : this.momentumFrac = Math.max(this.momentumFrac - BB / 1500, 0)
```

#### 1502. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12079-L12080` → after: `L11138-L11139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11138-L11139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11138-L11139) · [Before (L12079-L12080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12079-L12080)

```diff
-       YzB() {
-         super.YzB();
+       GTB() {
+         super.GTB();
```

#### 1503. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12088` → after: `L11147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11147) · [Before (L12088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12088)

```diff
-         this.targetedPosition = null, this.targetedStartTime = BB, this.lastBreakingSoundTime = Math.min(BB - 150, this.lastBreakingSoundTime), this.currBreakingStage = -1, this.currBreakingMesh && (this.currBreakingMesh.mH(!1), this.currBreakingMesh = null)
+         this.targetedPosition = null, this.targetedStartTime = BB, this.lastBreakingSoundTime = Math.min(BB - 150, this.lastBreakingSoundTime), this.currBreakingStage = -1, this.currBreakingMesh && (this.currBreakingMesh.qY(!1), this.currBreakingMesh = null)
```

#### 1504. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12092` → after: `L11151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11151) · [Before (L12092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12092)

```diff
-         const zB = (0, yB.c)().getInvenHeldItem(this.ur.zV);
+         const ZB = (0, qB.d)().getInvenHeldItem(this.Nz.Jm);
```

#### 1505. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12094-L12100` → after: `L11153-L11159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11153-L11159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11153-L11159) · [Before (L12094-L12100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12094-L12100)

```diff
-         const NB = null === (jB = this.ur.LBB) || void 0 === jB ? void 0 : jB.position;
-         if (!NB || !(0, yB.c)().posSatisfiesModifyConstraints(this.ur.zV, NB[0], NB[1], NB[2])) return this.resetTargetedBlock(BB), !1;
-         if (this.ur.vG.JjB(this.heldItemState.VY).setArmsAreSwinging(), !this.targetedPosition !== !NB || !UB().exactEquals(this.targetedPosition, NB)) return this.resetTargetedBlock(BB), this.targetedPosition = UB().copy(this._targetedPosition, NB), (0, IB.sendColyMessage)(gB.Oj … [truncated]
-         const uB = (0, yB.c)().getMetaInfo(this.ur.JG(this.targetedPosition)).rootId;
-         let aB = nB.t[uB].ttb;
-         if (this.ur.wG.creative) {
-           if (this.ur.wG.creative) {
+         const vB = null === (IB = this.Nz.xBB) || void 0 === IB ? void 0 : IB.position;
+         if (!vB || !(0, qB.d)().posSatisfiesModifyConstraints(this.Nz.Jm, vB[0], vB[1], vB[2])) return this.resetTargetedBlock(BB), !1;
+         if (this.Nz.zW.uIB(this.heldItemState.bR).setArmsAreSwinging(), !this.targetedPosition !== !vB || !cB().exactEquals(this.targetedPosition, vB)) return this.resetTargetedBlock(BB), this.targetedPosition = cB().copy(this._targetedPosition, vB), (0, GB.sendColyMessage)(dB.vj … [truncated]
+         const kB = (0, qB.d)().getMetaInfo(this.Nz.WU(this.targetedPosition)).rootId;
+         let nB = JB.A[kB].ttb;
+         if (this.Nz.vW.creative) {
+           if (this.Nz.vW.creative) {
```

#### 1506. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12102` → after: `L11161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11161) · [Before (L12102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12102)

```diff
-             jB > 20 * dB.e ? aB *= 1 / 6 : jB > 6 * dB.e ? aB *= 1 / 3 : jB > 4 * dB.e ? aB *= .5 : jB > 2 * dB.e && (aB *= 2 / 3)
+             IB > 20 * oB.f ? nB *= 1 / 6 : IB > 6 * oB.f ? nB *= 1 / 3 : IB > 4 * oB.f ? nB *= .5 : IB > 2 * oB.f && (nB *= 2 / 3)
```

#### 1507. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12105-L12107` → after: `L11164-L11166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11164-L11166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11164-L11166) · [Before (L12105-L12107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12105-L12107)

```diff
-           const BB = (0, yB.c)().getBlockTypeIsHarvestable(this.ur.zV, uB);
-           BB || (aB *= 2.5), this.toolType === this.bloxd.getItemStat(this.ur.zV, uB, "harvestType") && BB && (aB *= 1 / this.toolMultiplier);
-           aB *= JB.c.getBreakSpeedMultiplier(zB) * JB.c.getMomentumMultiplier(zB, this.momentumFrac)
+           const BB = (0, qB.d)().getBlockTypeIsHarvestable(this.Nz.Jm, kB);
+           BB || (nB *= 2.5), this.toolType === this.bloxd.getItemStat(this.Nz.Jm, kB, "harvestType") && BB && (nB *= 1 / this.toolMultiplier);
+           nB *= NB.i.getBreakSpeedMultiplier(ZB) * NB.i.getMomentumMultiplier(ZB, this.momentumFrac)
```

#### 1508. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12113-L12114` → after: `L11172-L11173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11172-L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11172-L11173) · [Before (L12113-L12114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12113-L12114)

```diff
-           const jB = (0, pB.f)(`step_${(0,kB.d)(uB,!1)}`);
-           rB.e.play(jB, .3).rate(.5)
+           const IB = (0, hB.f)(`step_${(0,yB.b)(kB,!1)}`);
+           zB.d.play(IB, .3).rate(.5)
```

#### 1509. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12116` → after: `L11175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11175) · [Before (L12116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12116)

```diff
-         return this.currBreakingMesh && mB === this.currBreakingStage || (this.currBreakingMesh && this.currBreakingMesh.mH(!1), mB < 10 ? (this.currBreakingMesh = (0, QB.e)(this.ur, this.targetedPosition, mB), this.currBreakingStage = mB) : ((0, nB.f)(NB), this.resetTargetedBloc … [truncated]
+         return this.currBreakingMesh && gB === this.currBreakingStage || (this.currBreakingMesh && this.currBreakingMesh.qY(!1), gB < 10 ? (this.currBreakingMesh = (0, TB.c)(this.Nz, this.targetedPosition, gB), this.currBreakingStage = gB) : ((0, JB.j)(vB), this.resetTargetedBloc … [truncated]
```

#### 1510. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12128` → after: `L11187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11187) · [Before (L12128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12128)

```diff
-   38242: (BB, jB, zB) => {
+   38233: (BB, IB, ZB) => {
```

#### 1511. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12130` → after: `L11189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11189) · [Before (L12130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12130)

```diff
-       c: () => SB
+       e: () => QB
```

#### 1512. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12132-L12149` → after: `L11191-L11208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11191-L11208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11191-L11208) · [Before (L12132-L12149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12132-L12149)

```diff
-     var QB = zB(38289),
-       nB = zB(1263),
-       dB = zB(38298),
-       IB = zB(9297),
-       NB = zB(9266),
-       uB = zB(214),
-       UB = zB(37526),
-       aB = zB(38247),
-       pB = zB(37518),
-       rB = zB(31),
-       sB = zB(2863),
-       JB = zB(1357),
-       mB = zB(38278),
-       yB = zB(37725),
-       kB = zB(37510),
-       GB = zB(38455),
- ... (2 more removed lines; see GitHub link above)
+     var TB = ZB(38268),
+       JB = ZB(1281),
+       oB = ZB(38277),
+       GB = ZB(9328),
+       vB = ZB(9296),
+       kB = ZB(201),
+       cB = ZB(37462),
+       nB = ZB(38239),
+       hB = ZB(37448),
+       zB = ZB(24),
+       FB = ZB(2912),
+       NB = ZB(1382),
+       gB = ZB(38263),
+       qB = ZB(37680),
+       yB = ZB(37441),
+       UB = ZB(38425),
+ ... (2 more added lines; see GitHub link above)
```

#### 1513. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12153` → after: `L11212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11212) · [Before (L12153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12153)

```diff
-         this.ur = void 0, this.heldItemState = void 0, this.itemZoomer = void 0, this.bloxd = (0, sB.c)(), this.pickActionHelper = void 0, this.typeObj = null, this.DBB = !0, this._doneFirstMeshSetup = !1, this._modelLoadedSub = null, this._newBloxdSub = null, this.thirdPersonThi … [truncated]
+         this.Nz = void 0, this.heldItemState = void 0, this.itemZoomer = void 0, this.bloxd = (0, FB.d)(), this.pickActionHelper = void 0, this.typeObj = null, this.JIB = !0, this._doneFirstMeshSetup = !1, this._modelLoadedSub = null, this._newBloxdSub = null, this.thirdPersonThi … [truncated]
```

#### 1514. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12158` → after: `L11217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11217) · [Before (L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12158)

```diff
-         this.ur.GBB(!0), this.typeObj = BB, this.enchantmentTier = jB
+         this.Nz.bBB(!0), this.typeObj = BB, this.enchantmentTier = IB
```

#### 1515. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12160` → after: `L11219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11219) · [Before (L12160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12160)

```diff
-       UUB() {
+       mcB() {
```

#### 1516. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12163` → after: `L11222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11222) · [Before (L12163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12163)

```diff
-       aUB() {}
+       XcB() {}
```

#### 1517. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12171` → after: `L11230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11230) · [Before (L12171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12171)

```diff
-         return void 0 !== this.heldItemState.replayUseFirstPersonMesh ? this.heldItemState.replayUseFirstPersonMesh : this.heldItemState.VY === this.ur.zV && this.ur.camera.Xw <= 1 && !pB.b.isCameraDetachedFromPlayer(this.ur)
+         return void 0 !== this.heldItemState.replayUseFirstPersonMesh ? this.heldItemState.replayUseFirstPersonMesh : this.heldItemState.bR === this.Nz.Jm && this.Nz.camera.NK <= 1 && !hB.c.isCameraDetachedFromPlayer(this.Nz)
```

#### 1518. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12174` → after: `L11233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11233) · [Before (L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12174)

```diff
-         return this.isFirstPersonLocalPlayer() || this.heldItemState.VY === this.ur.zV && pB.b.isCameraDetachedFromPlayer(this.ur)
+         return this.isFirstPersonLocalPlayer() || this.heldItemState.bR === this.Nz.Jm && hB.c.isCameraDetachedFromPlayer(this.Nz)
```

#### 1519. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12176-L12177` → after: `L11235-L11236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11235-L11236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11235-L11236) · [Before (L12176-L12177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12176-L12177)

```diff
-       XzB() {
-         return SB.clearSecondaryDownFireTimeout(), this.ur.vG.JjB(this.heldItemState.VY).setArmsAreSwinging(), {
+       cTB() {
+         return QB.clearSecondaryDownFireTimeout(), this.Nz.zW.uIB(this.heldItemState.bR).setArmsAreSwinging(), {
```

#### 1520. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12185` → after: `L11244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11244) · [Before (L12185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12185)

```diff
-       YzB() {
+       GTB() {
```

#### 1521. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12191` → after: `L11250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11250) · [Before (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12191)

```diff
-       rUB() {
+       ecB() {
```

#### 1522. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12197` → after: `L11256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11256) · [Before (L12197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12197)

```diff
-               this.pUB().once || jB()
+               this.LcB().once || IB()
```

#### 1523. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12201` → after: `L11260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11260) · [Before (L12201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12201)

```diff
-         const zB = this.pUB();
+         const ZB = this.LcB();
```

#### 1524. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12204` → after: `L11263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11263) · [Before (L12204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12204)

```diff
-       pUB() {
+       LcB() {
```

#### 1525. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12207` → after: `L11266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11266) · [Before (L12207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12207)

```diff
-       DzB() {
+       oTB() {
```

#### 1526. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12216-L12218` → after: `L11275-L11277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11275-L11277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11275-L11277) · [Before (L12216-L12218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12216-L12218)

```diff
-           ur: zB
-         } = this, dB = zB.wG.canUseDevCreativeItems, IB = null === (jB = this.bloxd.getItemStat(zB.zV, BB, "showInCreativeInven")) || void 0 === jB || jB;
-         return !(0, QB.i)(BB, (0, nB.E)((0, JB.d)().lobbyName), IB, dB)
+           Nz: ZB
+         } = this, oB = ZB.vW.canUseDevCreativeItems, GB = null === (IB = this.bloxd.getItemStat(ZB.Jm, BB, "showInCreativeInven")) || void 0 === IB || IB;
+         return !(0, TB.h)(BB, (0, JB.G)((0, NB.c)().lobbyName), GB, oB)
```

#### 1527. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12220` → after: `L11279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11279) · [Before (L12220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12220)

```diff
-       mUB() {
+       lcB() {
```

#### 1528. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12223` → after: `L11282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11282) · [Before (L12223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12223)

```diff
-           ur: BB
+           Nz: BB
```

#### 1529. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12225-L12227` → after: `L11284-L11286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11284-L11286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11284-L11286) · [Before (L12225-L12227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12225-L12227)

```diff
-         if (BB.wG.creative && BB.wG.canPickBlocks && BB.vG.HBB(BB.zV, "inventory") && null !== BB.mBB) {
-           const zB = BB.mBB.JR,
-             nB = (0, dB.h)(zB) ? IB.o : this.bloxd.getMetaInfo(zB).rootName,
+         if (BB.vW.creative && BB.vW.canPickBlocks && BB.zW.TIB(BB.Jm, "inventory") && null !== BB.lBB) {
+           const ZB = BB.lBB.n_,
+             JB = (0, oB.h)(ZB) ? GB.n : this.bloxd.getMetaInfo(ZB).rootName,
```

#### 1530. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12230` → after: `L11289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11289) · [Before (L12230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12230)

```diff
-             const zB = BB.vG.kjB(BB.zV),
+             const ZB = BB.zW.tIB(BB.Jm),
```

#### 1531. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12232` → after: `L11291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11291) · [Before (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12232)

```diff
-               dB = this.ur.vG.mjB(this.ur.zV);
+               oB = this.Nz.zW.fIB(this.Nz.Jm);
```

#### 1532. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12237` → after: `L11296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11296) · [Before (L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12237)

```diff
-               if ((null === (jB = IB[BB]) || void 0 === jB ? void 0 : jB.name) === nB) return rB.n.Ly("setSelectedInventorySlotI", BB, !0), !0
+               if ((null === (IB = GB[BB]) || void 0 === IB ? void 0 : IB.name) === JB) return zB.l.Gq("setSelectedInventorySlotI", BB, !0), !0
```

#### 1533. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12239` → after: `L11298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11298) · [Before (L12239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12239)

```diff
-             return mB.d.swapPosClient(zB, zB.playerInventory.getSelectedSlotIndex(), QB), !0
+             return gB.c.swapPosClient(ZB, ZB.playerInventory.getSelectedSlotIndex(), TB), !0
```

#### 1534. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12248` → after: `L11307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11307) · [Before (L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12248)

```diff
-       ZzB() {
+       nTB() {
```

#### 1535. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12250` → after: `L11309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11309) · [Before (L12250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12250)

```diff
-         return this.ur.vG.JjB(this.heldItemState.VY).setArmsAreSwinging(), BB
+         return this.Nz.zW.uIB(this.heldItemState.bR).setArmsAreSwinging(), BB
```

#### 1536. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12253-L12254` → after: `L11312-L11313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11312-L11313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11312-L11313) · [Before (L12253-L12254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12253-L12254)

```diff
-         const BB = this.fzB();
-         return BB.tookAction && this.ur.vG.JjB(this.heldItemState.VY).setArmsAreSwinging(), BB
+         const BB = this.ZTB();
+         return BB.tookAction && this.Nz.zW.uIB(this.heldItemState.bR).setArmsAreSwinging(), BB
```

#### 1537. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12257-L12258` → after: `L11316-L11317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11316-L11317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11316-L11317) · [Before (L12257-L12258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12257-L12258)

```diff
-         const BB = this.ur.vG.mjB(this.ur.zV);
-         if (!BB || !this.ur.wG.canAltAction) return {
+         const BB = this.Nz.zW.fIB(this.Nz.Jm);
+         if (!BB || !this.Nz.vW.canAltAction) return {
```

#### 1538. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12262-L12263` → after: `L11321-L11322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11321-L11322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11321-L11322) · [Before (L12262-L12263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12262-L12263)

```diff
-         const jB = this.ur.mBB;
-         if ("preventAction" === this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.ur.zV, null === jB || void 0 === jB ? void 0 : jB.position[0], null === jB || void 0 === jB ? void 0 : jB.position[1], null === jB || void 0 === jB ? void 0 : jB.position[2], jB … [truncated]
+         const IB = this.Nz.lBB;
+         if ("preventAction" === this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.Nz.Jm, null === IB || void 0 === IB ? void 0 : IB.position[0], null === IB || void 0 === IB ? void 0 : IB.position[1], null === IB || void 0 === IB ? void 0 : IB.position[2], IB … [truncated]
```

#### 1539. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12267-L12268` → after: `L11326-L11327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11326-L11327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11326-L11327) · [Before (L12267-L12268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12267-L12268)

```diff
-         const zB = new aB.c(this, null, null, null, null, BB.selectedItem).performGliderBoost();
-         return zB.tookAction && this.ur.vG.JjB(this.heldItemState.VY).setArmsAreSwinging(), zB
+         const ZB = new nB.e(this, null, null, null, null, BB.selectedItem).performGliderBoost();
+         return ZB.tookAction && this.Nz.zW.uIB(this.heldItemState.bR).setArmsAreSwinging(), ZB
```

#### 1540. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12272-L12274` → after: `L11331-L11333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11331-L11333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11331-L11333) · [Before (L12272-L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12272-L12274)

```diff
-         if (!this.ur.mBB) return !1;
-         const jB = this.ur.mBB.JR;
-         return null !== (BB = NB.i[jB].canBePlacedOver) && void 0 !== BB && BB
+         if (!this.Nz.lBB) return !1;
+         const IB = this.Nz.lBB.n_;
+         return null !== (BB = vB.f[IB].canBePlacedOver) && void 0 !== BB && BB
```

#### 1541. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12276` → after: `L11335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11335) · [Before (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12276)

```diff
-       fzB() {
+       ZTB() {
```

#### 1542. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12278-L12279` → after: `L11337-L11338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11337-L11338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11337-L11338) · [Before (L12278-L12279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12278-L12279)

```diff
-         const QB = this.ur.vG.mjB(this.ur.zV);
-         if (!QB || !this.ur.wG.canAltAction) return {
+         const TB = this.Nz.zW.fIB(this.Nz.Jm);
+         if (!TB || !this.Nz.vW.canAltAction) return {
```

#### 1543. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12283` → after: `L11342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11342) · [Before (L12283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12283)

```diff
-         if (QB.opWrapper.hd) return rB.n.Ly("toggleMenu", "inventory"), {
+         if (TB.opWrapper.Qo) return zB.l.Gq("toggleMenu", "inventory"), {
```

#### 1544. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12289` → after: `L11348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11348) · [Before (L12289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12289)

```diff
-         if ((0, gB.c)(null === nB || void 0 === nB ? void 0 : nB.typeObj.type) && this.ur.vG.JjB(this.heldItemState.VY).crouching) return {
+         if ((0, dB.f)(null === JB || void 0 === JB ? void 0 : JB.typeObj.type) && this.Nz.zW.uIB(this.heldItemState.bR).crouching) return {
```

#### 1545. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12293` → after: `L11352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11352) · [Before (L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12293)

```diff
-         const dB = null !== (BB = this.ur.VBB) && void 0 !== BB ? BB : this.ur.camera.nC(),
+         const oB = null !== (BB = this.Nz.kIB) && void 0 !== BB ? BB : this.Nz.camera.XV(),
```

#### 1546. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12298` → after: `L11357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11357) · [Before (L12298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12298)

```diff
-             uZ: sB,
+             Eu: FB,
```

#### 1547. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12300-L12304` → after: `L11359-L11363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11359-L11363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11359-L11363) · [Before (L12300-L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12300-L12304)

```diff
-           } = this.pickActionHelper.doPickAction(dB, uB.e.entityInteractReach),
-           mB = null === (jB = this.ur.mBB) || void 0 === jB ? void 0 : jB.JR,
-           yB = null === (zB = this.ur.mBB) || void 0 === zB ? void 0 : zB.position,
-           kB = null !== IB && void 0 !== IB ? IB : null,
-           GB = this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.ur.zV, null === yB || void 0 === yB ? void 0 : yB[0], null === yB || void 0 === yB ? void 0 : yB[1], null === yB || void 0 === yB ? void 0 : yB[2], mB ? (0, NB.g)(mB) : "Air", kB);
+           } = this.pickActionHelper.doPickAction(oB, kB.f.entityInteractReach),
+           gB = null === (IB = this.Nz.lBB) || void 0 === IB ? void 0 : IB.n_,
+           qB = null === (ZB = this.Nz.lBB) || void 0 === ZB ? void 0 : ZB.position,
+           yB = null !== GB && void 0 !== GB ? GB : null,
+           UB = this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.Nz.Jm, null === qB || void 0 === qB ? void 0 : qB[0], null === qB || void 0 === qB ? void 0 : qB[1], null === qB || void 0 === qB ? void 0 : qB[2], gB ? (0, vB.e)(gB) : "Air", yB);
```

#### 1548. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12310` → after: `L11369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11369) · [Before (L12310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12310)

```diff
-           tB = new aB.c(this, kB, UB, yB, mB, nB).performAltAction(!LB);
+           CB = new nB.e(this, yB, cB, qB, gB, JB).performAltAction(!WB);
```

#### 1549. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12316` → after: `L11375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11375) · [Before (L12316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12316)

```diff
-       VzB() {
+       vTB() {
```

#### 1550. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12325` → after: `L11384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11384) · [Before (L12325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12325)

```diff
-         jB <= 1.2 && BB > 1.2 ? (this.ur.camera.Kw = 0, this.ur.camera.Xw = 0, this.itemZoomer.forceXyOffsetToZero(), this.UUB()) : 0 === jB && (this.itemZoomer.forceXyOffsetToZero(), this.UUB()), jB > .001 && BB < .001 && (this.ur.camera.Kw = 1.2, this.UUB())
+         IB <= 1.2 && BB > 1.2 ? (this.Nz.camera.WK = 0, this.Nz.camera.NK = 0, this.itemZoomer.forceXyOffsetToZero(), this.mcB()) : 0 === IB && (this.itemZoomer.forceXyOffsetToZero(), this.mcB()), IB > .001 && BB < .001 && (this.Nz.camera.WK = 1.2, this.mcB())
```

#### 1551. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12341` → after: `L11400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11400) · [Before (L12341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12341)

```diff
-         rB.n.unsubscribe(this._modelLoadedSub), this.heldItemState.VY === this.ur.zV && SB.clearSecondaryDownFireTimeout(), this._doneFirstMeshSetup = void 0 !== this.ur.vG.ujB(this.heldItemState.VY)
+         zB.l.unsubscribe(this._modelLoadedSub), this.heldItemState.bR === this.Nz.Jm && QB.clearSecondaryDownFireTimeout(), this._doneFirstMeshSetup = void 0 !== this.Nz.zW.RIB(this.heldItemState.bR)
```

#### 1552. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12344` → after: `L11403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11403) · [Before (L12344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12344)

```diff
-         rB.n.unsubscribe(this._newBloxdSub)
+         zB.l.unsubscribe(this._newBloxdSub)
```

#### 1553. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12347` → after: `L11406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11406) · [Before (L12347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12347)

```diff
-         if (this.aUB(), this._doneFirstMeshSetup) return;
+         if (this.XcB(), this._doneFirstMeshSetup) return;
```

#### 1554. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12349-L12351` → after: `L11408-L11410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11408-L11410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11408-L11410) · [Before (L12349-L12351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12349-L12351)

```diff
-         const BB = this.heldItemState.VY;
-         this.ur.vG.ujB(BB) || (this._modelLoadedSub = rB.n.subscribe(`lifeformSetupFinished|${BB}`, (() => {
-           this.aUB()
+         const BB = this.heldItemState.bR;
+         this.Nz.zW.RIB(BB) || (this._modelLoadedSub = zB.l.subscribe(`lifeformSetupFinished|${BB}`, (() => {
+           this.XcB()
```

#### 1555. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12362` → after: `L11421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11421) · [Before (L12362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12362)

```diff
-         return null === BB || this.ur.pm.JY.has(BB) ? BB : (this.thirdPersonThinObjectId = null, null)
+         return null === BB || this.Nz.Ig.kR.has(BB) ? BB : (this.thirdPersonThinObjectId = null, null)
```

#### 1556. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12366-L12369` → after: `L11425-L11428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11425-L11428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11425-L11428) · [Before (L12366-L12369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12366-L12369)

```diff
-           pp: jB
-         } = this.thirdPersonPose, zB = jB.x * this.heldPoseScaleY() * jB.z < 0, QB = BB.thinInstMgr.getNodeWorldMatrix(BB.mY, BB.nodeIndex).determinant() < 0, nB = (0, yB.e)(zB, QB);
-         if (this.thirdPersonFlippedWinding === nB && this.thirdPersonAttachedToId === BB.mY && this.thirdPersonAttachedToNode === BB.nodeIndex && (null === this.thirdPersonThinObjectId || null !== this.liveThirdPersonThinObjectId())) return void this.applyThirdPersonPose();
-         this.releaseThirdPersonThinObject(), this.thirdPersonFlippedWinding = nB, this.thirdPersonAttachedToId = BB.mY, this.thirdPersonAttachedToNode = BB.nodeIndex;
+           ek: IB
+         } = this.thirdPersonPose, ZB = IB.x * this.heldPoseScaleY() * IB.z < 0, TB = BB.thinInstMgr.getNodeWorldMatrix(BB.gR, BB.nodeIndex).determinant() < 0, JB = (0, qB.d)(ZB, TB);
+         if (this.thirdPersonFlippedWinding === JB && this.thirdPersonAttachedToId === BB.gR && this.thirdPersonAttachedToNode === BB.nodeIndex && (null === this.thirdPersonThinObjectId || null !== this.liveThirdPersonThinObjectId())) return void this.applyThirdPersonPose();
+         this.releaseThirdPersonThinObject(), this.thirdPersonFlippedWinding = JB, this.thirdPersonAttachedToId = BB.gR, this.thirdPersonAttachedToNode = BB.nodeIndex;
```

#### 1557. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12372` → after: `L11431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11431) · [Before (L12372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12372)

```diff
-           DN: !0,
+           sv: !0,
```

#### 1558. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12375-L12376` → after: `L11434-L11435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11434-L11435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11434-L11435) · [Before (L12375-L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12375-L12376)

```diff
-           const zB = this.ur.pm.JY;
-           dB === this.thirdPersonRequestId && zB.has(BB.mY) ? (this.thirdPersonThinObjectId = jB, zB.attachThinObject(jB, BB.mY, BB.nodeIndex), zB.set(jB, "aOpacity", (0, kB.holderAttachmentOpacity)(this.ur, this.heldItemState.VY)), (0, kB.invalidateAttachmentProximityFade)(this. … [truncated]
+           const ZB = this.Nz.Ig.kR;
+           oB === this.thirdPersonRequestId && ZB.has(BB.gR) ? (this.thirdPersonThinObjectId = IB, ZB.attachThinObject(IB, BB.gR, BB.nodeIndex), ZB.set(IB, "aOpacity", (0, yB.holderAttachmentOpacity)(this.Nz, this.heldItemState.bR)), (0, yB.invalidateAttachmentProximityFade)(this. … [truncated]
```

#### 1559. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12380` → after: `L11439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11439) · [Before (L12380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12380)

```diff
-         return yB.c * this.thirdPersonPose.pp.y
+         return qB.c * this.thirdPersonPose.ek.y
```

#### 1560. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12386` → after: `L11445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11445) · [Before (L12386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12386)

```diff
-         const jB = this.ur.pm.JY,
+         const IB = this.Nz.Ig.kR,
```

#### 1561. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12390` → after: `L11449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11449) · [Before (L12390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12390)

```diff
-             pp: nB,
+             ek: JB,
```

#### 1562. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12399` → after: `L11458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11458) · [Before (L12399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12399)

```diff
-           } = (0, GB.c)(zB, IB ? dB : QB, NB, this.typeObj.heldModelOffsetY());
+           } = (0, UB.c)(ZB, GB ? oB : TB, vB, this.typeObj.heldModelOffsetY());
```

#### 1563. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12405` → after: `L11464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11464) · [Before (L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12405)

```diff
-         null !== BB && (this.ur.pm.JY.delete(BB), this.thirdPersonThinObjectId = null)
+         null !== BB && (this.Nz.Ig.kR.delete(BB), this.thirdPersonThinObjectId = null)
```

#### 1564. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12409` → after: `L11468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11468) · [Before (L12409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12409)

```diff
-           ur: BB,
+           Nz: BB,
```

#### 1565. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12412-L12414` → after: `L11471-L11473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11471-L11473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11471-L11473) · [Before (L12412-L12414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12412-L12414)

```diff
-         if (!BB.vG.HBB(jB.VY, "humanoidMesh")) return null;
-         const zB = BB.vG.TjB(jB.VY),
-           QB = BB.pm.JY,
+         if (!BB.zW.TIB(IB.bR, "humanoidMesh")) return null;
+         const ZB = BB.zW.gZB(IB.bR),
+           TB = BB.Ig.kR,
```

#### 1566. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12416` → after: `L11475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11475) · [Before (L12416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12416)

```diff
-             mY: nB
+             gR: JB
```

#### 1567. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12423` → after: `L11482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11482) · [Before (L12423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12423)

```diff
-           mY: nB,
+           gR: JB,
```

#### 1568. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12432` → after: `L11491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11491) · [Before (L12432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12432)

```diff
-           mY: BB.mY,
+           gR: BB.gR,
```

#### 1569. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12437` → after: `L11496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11496) · [Before (L12437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12437)

```diff
-           ur: jB,
+           Nz: IB,
```

#### 1570. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12440-L12442` → after: `L11499-L11501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11499-L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11499-L11501) · [Before (L12440-L12442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12440-L12442)

```diff
-         if (!jB.vG.HBB(zB.VY, "fourLeggedMesh")) return null;
-         const QB = jB.vG.PjB(zB.VY),
-           nB = jB.pm.JY,
+         if (!IB.zW.TIB(ZB.bR, "fourLeggedMesh")) return null;
+         const TB = IB.zW.qZB(ZB.bR),
+           JB = IB.Ig.kR,
```

#### 1571. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12444` → after: `L11503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11503) · [Before (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12444)

```diff
-             mY: dB
+             gR: oB
```

#### 1572. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12451` → after: `L11510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11510) · [Before (L12451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12451)

```diff
-           mY: dB,
+           gR: oB,
```

#### 1573. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12457` → after: `L11516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11516) · [Before (L12457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12457)

```diff
-         if (!this.ur.pm.Rm) return;
+         if (!this.Nz.Ig.Xg) return;
```

#### 1574. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12459` → after: `L11518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11518) · [Before (L12459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12459)

```diff
-         if (null !== BB) return void this.ur.pm.JY.set(BB, "aLightLevels", this.heldItemLightLevels());
+         if (null !== BB) return void this.Nz.Ig.kR.set(BB, "aLightLevels", this.heldItemLightLevels());
```

#### 1575. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12462-L12464` → after: `L11521-L11523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11521-L11523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11521-L11523) · [Before (L12462-L12464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12462-L12464)

```diff
-         if (this.lightTargetsForMesh !== jB && (this.lightTargetsForMesh = jB, this.RIB = [], this.lightTargetsBuilt = !1), !this.lightTargetsBuilt) {
-           const BB = (0, UB.i)(jB);
-           for (const jB of BB) jB.vY && "aLightLevels" in jB.vY && this.RIB.push(jB);
+         if (this.lightTargetsForMesh !== IB && (this.lightTargetsForMesh = IB, this.wvB = [], this.lightTargetsBuilt = !1), !this.lightTargetsBuilt) {
+           const BB = (0, cB.h)(IB);
+           for (const IB of BB) IB.Zm && "aLightLevels" in IB.Zm && this.wvB.push(IB);
```

#### 1576. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12467` → after: `L11526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11526) · [Before (L12467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12467)

```diff
-         if (0 === this.RIB.length) return;
+         if (0 === this.wvB.length) return;
```

#### 1577. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12469` → after: `L11528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11528) · [Before (L12469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12469)

```diff
-         for (const QB of this.RIB)(0, UB.l)(QB, zB)
+         for (const TB of this.wvB)(0, cB.n)(TB, ZB)
```

#### 1578. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12472` → after: `L11531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11531) · [Before (L12472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12472)

```diff
-         return this.ur.vG.HjB(this.heldItemState.VY)._lightLevels
+         return this.Nz.zW.oZB(this.heldItemState.bR)._lightLevels
```

#### 1579. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12476` → after: `L11535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11535) · [Before (L12476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12476)

```diff
-   38463: (BB, jB, zB) => {
+   38429: (BB, IB, ZB) => {
```

#### 1580. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12478-L12480` → after: `L11537-L11539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11537-L11539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11537-L11539) · [Before (L12478-L12480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12478-L12480)

```diff
-       b: () => JB,
-       f: () => mB,
-       j: () => sB,
+       c: () => NB,
+       d: () => gB,
+       g: () => FB,
```

#### 1581. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12483-L12485` → after: `L11542-L11544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11542-L11544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11542-L11544) · [Before (L12483-L12485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12483-L12485)

```diff
-     var QB = zB(37166),
-       nB = zB(37694),
-       dB = zB(4597);
+     var TB = ZB(37113),
+       JB = ZB(37659),
+       oB = ZB(4665);
```

#### 1582. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12489-L12491` → after: `L11548-L11550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11548-L11550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11548-L11550) · [Before (L12489-L12491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12489-L12491)

```diff
-         position: new QB.KJ,
-         rotation: new QB.KJ,
-         pp: new QB.KJ,
+         position: new TB.rN,
+         rotation: new TB.rN,
+         ek: new TB.rN,
```

#### 1583. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12496-L12498` → after: `L11555-L11557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11555-L11557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11555-L11557) · [Before (L12496-L12498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12496-L12498)

```diff
-     const NB = new QB.KJ(-.18, -.66, .48),
-       uB = new QB.KJ(.4, 1.25, Math.PI + .9),
-       UB = new QB.KJ(-.12, .12, .12),
+     const vB = new TB.rN(-.18, -.66, .48),
+       kB = new TB.rN(.4, 1.25, Math.PI + .9),
+       cB = new TB.rN(-.12, .12, .12),
```

#### 1584. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12516` → after: `L11575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11575) · [Before (L12516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12516)

```diff
-         pp: IB
+         ek: GB
```

#### 1585. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12518-L12520` → after: `L11577-L11579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11577-L11579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11577-L11579) · [Before (L12518-L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12518-L12520)

```diff
-       if (zB.usesQuaternion = !1, "Gun" === BB.type) return QB.jH(NB), nB.jH(uB), void IB.jH(UB);
-       const [aB, pB, rB] = null !== jB && void 0 !== jB ? jB : [0, 0, 0], sB = (0, dB.b)(BB.type), mB = sB ? 2.25 : 1.35, yB = sB ? 0 : .08;
-       if ("TwoDTool" === BB.type || BB.holdAsAiming) QB.U3(aB, -.48 + pB, .24 + rB + yB), IB.U3(.19 * mB, -.19 * mB, .19 * mB), BB.holdAsAiming ? nB.U3(.4 + Math.PI, 1.25, Math.PI / 2) : nB.U3(Math.PI, Math.PI / 2, .35 * Math.PI);
+       if (ZB.usesQuaternion = !1, "Gun" === BB.type) return TB.TY(vB), JB.TY(kB), void GB.TY(cB);
+       const [nB, hB, zB] = null !== IB && void 0 !== IB ? IB : [0, 0, 0], FB = (0, oB.d)(BB.type), gB = FB ? 2.25 : 1.35, qB = FB ? 0 : .08;
+       if ("TwoDTool" === BB.type || BB.holdAsAiming) TB.cBB(nB, -.48 + hB, .24 + zB + qB), GB.cBB(.19 * gB, -.19 * gB, .19 * gB), BB.holdAsAiming ? JB.cBB(.4 + Math.PI, 1.25, Math.PI / 2) : JB.cBB(Math.PI, Math.PI / 2, .35 * Math.PI);
```

#### 1586. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12522` → after: `L11581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11581) · [Before (L12522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12522)

```diff
-         QB.U3(aB, -.72 + pB, .18 + rB + yB);
+         TB.cBB(nB, -.72 + hB, .18 + zB + qB);
```

#### 1587. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12524` → after: `L11583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11583) · [Before (L12524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12524)

```diff
-         IB.U3(BB, BB, BB), nB.U3(sB ? 0 : Math.PI, Math.PI / 2, -Math.PI / 2)
+         GB.cBB(BB, BB, BB), JB.cBB(FB ? 0 : Math.PI, Math.PI / 2, -Math.PI / 2)
```

#### 1588. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12529` → after: `L11588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11588) · [Before (L12529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12529)

```diff
-   38455: (BB, jB, zB) => {
+   38425: (BB, IB, ZB) => {
```

#### 1589. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12533` → after: `L11592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11592) · [Before (L12533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12533)

```diff
-     var QB = zB(37166);
+     var TB = ZB(37113);
```

#### 1590. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12535` → after: `L11594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11594) · [Before (L12535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12535)

```diff
-       dB = new QB.KJ;
+       oB = new TB.rN;
```

#### 1591. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12539` → after: `L11598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11598) · [Before (L12539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12539)

```diff
-       const NB = jB instanceof QB.Quaternion ? jB : QB.Quaternion.RotationYawPitchRollToRef(jB.y, jB.x, jB.z, nB);
+       const vB = IB instanceof TB.Quaternion ? IB : TB.Quaternion.RotationYawPitchRollToRef(IB.y, IB.x, IB.z, JB);
```

#### 1592. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12543` → after: `L11602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11602) · [Before (L12543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12543)

```diff
-   37155: (BB, jB, zB) => {
+   37105: (BB, IB, ZB) => {
```

#### 1593. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12553-L12557` → after: `L11612-L11616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11612-L11616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11612-L11616) · [Before (L12553-L12557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12553-L12557)

```diff
-     var QB = zB(37158),
-       nB = zB(2863),
-       dB = zB(658),
-       IB = zB(1263),
-       NB = zB(31);
+     var TB = ZB(37108),
+       JB = ZB(2912),
+       oB = ZB(665),
+       GB = ZB(1281),
+       vB = ZB(24);
```

#### 1594. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12572` → after: `L11631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11631) · [Before (L12572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12572)

```diff
-         if (null !== nB.mY)
+         if (null !== JB.gR)
```

#### 1595. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12581` → after: `L11640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11640) · [Before (L12581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12581)

```diff
-         if (null === nB.mY || null === (QB = nB.hideOnArmourPartsEquip) || void 0 === QB || !QB.length) continue;
+         if (null === JB.gR || null === (TB = JB.hideOnArmourPartsEquip) || void 0 === TB || !TB.length) continue;
```

#### 1596. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12583` → after: `L11642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11642) · [Before (L12583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12583)

```diff
-         BB.setVisibility(nB.mY, !dB)
+         BB.setVisibility(JB.gR, !oB)
```

#### 1597. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12586-L12596` → after: `L11645-L11655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11645-L11655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11645-L11655) · [Before (L12586-L12596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12586-L12596)

```diff
-     var pB = zB(37526),
-       rB = zB(37300),
-       sB = zB(37551),
-       JB = zB(37528),
-       mB = zB(376),
-       yB = zB(37271),
-       kB = zB(37324),
-       GB = zB(37333),
-       LB = zB(37434),
-       gB = zB(37504),
-       tB = zB(37510);
+     var hB = ZB(37462),
+       zB = ZB(37243),
+       FB = ZB(37495),
+       NB = ZB(37469),
+       gB = ZB(360),
+       qB = ZB(37212),
+       yB = ZB(37255),
+       UB = ZB(37261),
+       WB = ZB(37366),
+       dB = ZB(37436),
+       CB = ZB(37441);
```

#### 1598. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12601` → after: `L11660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11660) · [Before (L12601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12601)

```diff
-         this.attachments = [], this.animatedAttachments = [], this.zIndexSub = void 0, this.personFullBody = !1, this.VY = void 0
+         this.attachments = [], this.animatedAttachments = [], this.zIndexSub = void 0, this.personFullBody = !1, this.bR = void 0
```

#### 1599. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12609` → after: `L11668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11668) · [Before (L12609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12609)

```diff
-       } = QB, NB = (0, GB.f)(dB, IB);
+       } = TB, vB = (0, UB.e)(oB, GB);
```

#### 1600. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12613` → after: `L11672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11672) · [Before (L12613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12613)

```diff
-       } else SB[NB] = null, (0, GB.h)(dB, BB.pm.ny).then((BB => {
+       } else QB[vB] = null, (0, UB.f)(oB, BB.Ig.lg).then((BB => {
```

#### 1601. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12615` → after: `L11674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11674) · [Before (L12615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12615)

```diff
-           const dB = (0, nB.g)(),
+           const oB = (0, JB.h)(),
```

#### 1602. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12617-L12621` → after: `L11676-L11680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11676-L11680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11676-L11680) · [Before (L12617-L12621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12617-L12621)

```diff
-               ny: IB
-             } = dB.pm,
-             NB = (0, GB.f)(jB, zB),
-             uB = (0, GB.c)(null !== zB && void 0 !== zB ? zB : jB, IB, (BB => {
-               (0, rB.s)(BB, kB.d), (0, JB.b)(BB, dB.pm), (0, yB.b)(BB), (0, rB.M)(BB)
+               lg: GB
+             } = oB.Ig,
+             vB = (0, UB.e)(IB, ZB),
+             kB = (0, UB.b)(null !== ZB && void 0 !== ZB ? ZB : IB, GB, (BB => {
+               (0, zB.r)(BB, yB.c), (0, NB.c)(BB, oB.Ig), (0, qB.e)(BB), (0, zB.K)(BB)
```

#### 1603. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12627` → after: `L11686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11686) · [Before (L12627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12627)

```diff
-               (0, sB.e)(BB) || BB.aY().qY(BB)
+               (0, FB.d)(BB) || BB.JR().jR(BB)
```

#### 1604. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12634` → after: `L11693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11693) · [Before (L12634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12634)

```diff
-           for (const nB of UB)(0, GB.k)(nB);
+           for (const JB of cB)(0, UB.j)(JB);
```

#### 1605. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12636-L12637` → after: `L11695-L11696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11695-L11696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11695-L11696) · [Before (L12636-L12637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12636-L12637)

```diff
-           const mB = dB.pm.JY,
-             LB = dB.vG.FY(dB.vG.names.meshAttachments);
+           const gB = oB.Ig.kR,
+             WB = oB.zW.fR(oB.zW.names.meshAttachments);
```

#### 1606. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12640` → after: `L11699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11699) · [Before (L12640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12640)

```diff
-             const BB = null !== (gB = null === (tB = dB.vG.ujB(nB.VY)) || void 0 === tB ? void 0 : tB.mY) && void 0 !== gB ? gB : null;
+             const BB = null !== (dB = null === (CB = oB.zW.RIB(JB.bR)) || void 0 === CB ? void 0 : CB.gR) && void 0 !== dB ? dB : null;
```

#### 1607. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12642` → after: `L11701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11701) · [Before (L12642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12642)

```diff
-               for (const QB of nB.attachments) QB.modelGlb === jB && QB.texture === zB && null === QB.mY && qB(nB, BB, pB, QB);
+               for (const TB of JB.attachments) TB.modelGlb === IB && TB.texture === ZB && null === TB.gR && YB(JB, BB, hB, TB);
```

#### 1608. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12644` → after: `L11703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11703) · [Before (L12644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12644)

```diff
-             } else console.error(`Loaded ${NB} but theres no thinObjectId ${BB} for parent entity ${nB.VY}`)
+             } else console.error(`Loaded ${vB} but theres no thinObjectId ${BB} for parent entity ${JB.bR}`)
```

#### 1609. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12648` → after: `L11707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11707) · [Before (L12648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12648)

```diff
-         console.error(`Failed to load ${dB}:`, BB.stack)
+         console.error(`Failed to load ${oB}:`, BB.stack)
```

#### 1610. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12654-L12656` → after: `L11713-L11715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11713-L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11713-L11715) · [Before (L12654-L12656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12654-L12656)

```diff
-       const NB = (0, nB.g)(),
-         uB = NB.pm.JY,
-         UB = `${(0,GB.f)(QB.modelGlb,QB.texture)}|${QB.modelNode}`;
+       const vB = (0, JB.h)(),
+         kB = vB.Ig.kR,
+         cB = `${(0,UB.e)(TB.modelGlb,TB.texture)}|${TB.modelNode}`;
```

#### 1611. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12659` → after: `L11718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11718) · [Before (L12659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12659)

```diff
-         if (!BB) return void console.error(`Node ${QB.modelNode} not found in container ${QB.modelGlb}`);
+         if (!BB) return void console.error(`Node ${TB.modelNode} not found in container ${TB.modelGlb}`);
```

#### 1612. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12661` → after: `L11720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11720) · [Before (L12661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12661)

```diff
-           Ep: 4,
+           ah: 4,
```

#### 1613. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12670-L12671` → after: `L11729-L11730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11729-L11730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11729-L11730) · [Before (L12670-L12671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12670-L12671)

```diff
-         }), void 0 !== QB.animation && (0, GB.o)(zB), uB.setPickableForType(UB, !0);
-         for (const jB of [BB, ...BB.getChildMeshes()]) jB.material && NB.pm.fY(jB)
+         }), void 0 !== TB.animation && (0, UB.m)(ZB), kB.setPickableForType(cB, !0);
+         for (const IB of [BB, ...BB.getChildMeshes()]) IB.material && vB.Ig.uR(IB)
```

#### 1614. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12677-L12680` → after: `L11736-L11739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11736-L11739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11736-L11739) · [Before (L12677-L12680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12677-L12680)

```diff
-       uB.setEntityId(aB, sB), uB.setPickable(aB, BB.personFullBody && (0, gB.h)(sB)), uB.set(aB, "aOpacity", (0, tB.holderAttachmentOpacity)(NB, sB));
-       const JB = NB.RY[NB.zV][sB];
-       if (uB.setRenderingGroupId(aB, null !== (dB = null === JB || void 0 === JB ? void 0 : JB.zIndex) && void 0 !== dB ? dB : 0), null !== JB && void 0 !== JB && JB.overlayColour) {
-         const [BB, jB, zB] = (0, mB.W)(JB.overlayColour);
+       kB.setEntityId(nB, FB), kB.setPickable(nB, BB.personFullBody && (0, dB.f)(FB)), kB.set(nB, "aOpacity", (0, CB.holderAttachmentOpacity)(vB, FB));
+       const NB = vB.Tm[vB.Jm][FB];
+       if (kB.setRenderingGroupId(nB, null !== (oB = null === NB || void 0 === NB ? void 0 : NB.zIndex) && void 0 !== oB ? oB : 0), null !== NB && void 0 !== NB && NB.overlayColour) {
+         const [BB, IB, ZB] = (0, gB.cb)(NB.overlayColour);
```

#### 1615. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12683-L12684` → after: `L11742-L11743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11742-L11743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11742-L11743) · [Before (L12683-L12684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12683-L12684)

```diff
-       const yB = NB.vG.HjB(sB);
-       if (uB.set(aB, "aLightLevels", null !== (IB = null === yB || void 0 === yB ? void 0 : yB._lightLevels) && void 0 !== IB ? IB : pB.d), QB.overlayColour) {
+       const qB = vB.zW.oZB(FB);
+       if (kB.set(nB, "aLightLevels", null !== (GB = null === qB || void 0 === qB ? void 0 : qB._lightLevels) && void 0 !== GB ? GB : hB.b), TB.overlayColour) {
```

#### 1616. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12688` → after: `L11747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11747) · [Before (L12688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12688)

```diff
-       if (QB.mY = aB, void 0 !== QB.animation) {
+       if (TB.gR = nB, void 0 !== TB.animation) {
```

#### 1617. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12695` → after: `L11754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11754) · [Before (L12695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12695)

```diff
-       const QB = BB.vG.getState(jB, BB.vG.names.meshAttachments);
+       const TB = BB.zW.getState(IB, BB.zW.names.meshAttachments);
```

#### 1618. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12697` → after: `L11756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11756) · [Before (L12697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12697)

```diff
-         for (const nB of QB.attachments) null !== nB.mY && BB.pm.JY.setPickable(nB.mY, zB)
+         for (const JB of TB.attachments) null !== JB.gR && BB.Ig.kR.setPickable(JB.gR, ZB)
```

#### 1619. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12705-L12707` → after: `L11764-L11766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11764-L11766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11764-L11766) · [Before (L12705-L12707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12705-L12707)

```diff
-         xG: function(jB, zB) {
-           zB.zIndexSub = NB.n.subscribe(`otherEntitySettingsClientifiedEId|${jB}|zIndex`, (jB => {
-             for (const QB of zB.attachments) null !== QB.mY && BB.pm.JY.setRenderingGroupId(QB.mY, jB)
+         cW: function(IB, ZB) {
+           ZB.zIndexSub = vB.l.subscribe(`otherEntitySettingsClientifiedEId|${IB}|zIndex`, (IB => {
+             for (const TB of ZB.attachments) null !== TB.gR && BB.Ig.kR.setRenderingGroupId(TB.gR, IB)
```

#### 1620. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12710-L12712` → after: `L11769-L11771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11769-L11771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11769-L11771) · [Before (L12710-L12712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12710-L12712)

```diff
-         ZD: function(jB, zB) {
-           NB.n.unsubscribe(zB.zIndexSub);
-           const QB = BB.pm.JY;
+         nH: function(IB, ZB) {
+           vB.l.unsubscribe(ZB.zIndexSub);
+           const TB = BB.Ig.kR;
```

#### 1621. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12714-L12715` → after: `L11773-L11774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11773-L11774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11773-L11774) · [Before (L12714-L12715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12714-L12715)

```diff
-             if (null !== BB.mY && QB.has(BB.mY)) try {
-               QB.delete(BB.mY)
+             if (null !== BB.gR && TB.has(BB.gR)) try {
+               TB.delete(BB.gR)
```

#### 1622. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12717` → after: `L11776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11776) · [Before (L12717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12717)

```diff
-               console.error(`Failed to cleanup attachment ${BB.mY} of entity ${jB}:`, nB.stack)
+               console.error(`Failed to cleanup attachment ${BB.gR} of entity ${IB}:`, JB.stack)
```

#### 1623. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12721` → after: `L11780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11780) · [Before (L12721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12721)

```diff
-         dL: function(jB, zB) {
+         FW: function(IB, ZB) {
```

#### 1624. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12725-L12726` → after: `L11784-L11785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11784-L11785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11784-L11785) · [Before (L12725-L12726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12725-L12726)

```diff
-             const jB = null !== (nB = null === (dB = BB.vG.ujB(IB.VY)) || void 0 === dB ? void 0 : dB.mY) && void 0 !== nB ? nB : null;
-             null === jB || (0, QB.pausesOutOfView)(BB, IB.VY, jB) || DB(BB, IB)
+             const IB = null !== (JB = null === (oB = BB.zW.RIB(GB.bR)) || void 0 === oB ? void 0 : oB.gR) && void 0 !== JB ? JB : null;
+             null === IB || (0, TB.pausesOutOfView)(BB, GB.bR, IB) || HB(BB, GB)
```

#### 1625. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12733` → after: `L11792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11792) · [Before (L12733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12733)

```diff
-       const zB = BB.vG.getState(jB, BB.vG.names.meshAttachments);
+       const ZB = BB.zW.getState(IB, BB.zW.names.meshAttachments);
```

#### 1626. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12738-L12740` → after: `L11797-L11799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11797-L11799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11797-L11799) · [Before (L12738-L12740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12738-L12740)

```diff
-       const zB = BB.pm.JY,
-         QB = BB.dBB / 1e3;
-       for (const nB of jB.animatedAttachments) nB.clipPose.write(zB, nB.mY, QB)
+       const ZB = BB.Ig.kR,
+         TB = BB.MBB / 1e3;
+       for (const JB of IB.animatedAttachments) JB.clipPose.write(ZB, JB.gR, TB)
```

#### 1627. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12744` → after: `L11803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11803) · [Before (L12744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12744)

```diff
-       const QB = BB.vG.getState(jB, BB.vG.names.meshAttachments);
+       const TB = BB.zW.getState(IB, BB.zW.names.meshAttachments);
```

#### 1628. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12747` → after: `L11806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11806) · [Before (L12747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12747)

```diff
-           if (nB.mY === zB) return !0;
+           if (JB.gR === ZB) return !0;
```

#### 1629. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12753` → after: `L11812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11812) · [Before (L12753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12753)

```diff
-       return hB(BB, jB, null !== (QB = zB.attachments) && void 0 !== QB ? QB : [])
+       return RB(BB, IB, null !== (TB = ZB.attachments) && void 0 !== TB ? TB : [])
```

#### 1630. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12762-L12764` → after: `L11821-L11823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11821-L11823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11821-L11823) · [Before (L12762-L12764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12762-L12764)

```diff
-       if ((0, dB.I)(BB)) return console.error("Cannot update mesh attachments for invalid eId", BB), QB;
-       const NB = (0, nB.g)(),
-         uB = NB.vG.ujB(BB);
+       if ((0, oB.L)(BB)) return console.error("Cannot update mesh attachments for invalid eId", BB), TB;
+       const vB = (0, JB.h)(),
+         kB = vB.zW.RIB(BB);
```

#### 1631. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12767` → after: `L11826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11826) · [Before (L12767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12767)

```diff
-         mY: UB
+         gR: cB
```

#### 1632. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12770` → after: `L11829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11829) · [Before (L12770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12770)

```diff
-       const pB = NB.vG.getState(BB, NB.vG.names.meshAttachments);
+       const hB = vB.zW.getState(BB, vB.zW.names.meshAttachments);
```

#### 1633. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12772` → after: `L11831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11831) · [Before (L12772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12772)

```diff
-       for (const nB of pB.attachments)(0, IB.Z)(nB.owners, jB);
+       for (const JB of hB.attachments)(0, GB.db)(JB.owners, IB);
```

#### 1634. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12779` → after: `L11838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11838) · [Before (L12779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12779)

```diff
-               QB.owners.push(zB), ZB(BB, QB.mY, IB.overlayColour), nB = !0;
+               TB.owners.push(ZB), mB(BB, TB.gR, GB.overlayColour), JB = !0;
```

#### 1635. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12785` → after: `L11844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11844) · [Before (L12785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12785)

```diff
-             mY: null,
+             gR: null,
```

#### 1636. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12790` → after: `L11849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11849) · [Before (L12790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12790)

```diff
-         return aB(BB.pm.JY, QB, jB.attachments), dB
+         return nB(BB.Ig.kR, TB, IB.attachments), oB
```

#### 1637. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12792` → after: `L11851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11851) · [Before (L12792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12792)

```diff
-       const rB = NB.pm.JY;
+       const zB = vB.Ig.kR;
```

#### 1638. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12795` → after: `L11854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11854) · [Before (L12795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12795)

```diff
-         0 === BB.owners.length && (null !== BB.mY && rB.delete(BB.mY), (0, IB.Z)(pB.attachments, BB), null !== BB.clipPose && (0, IB.Z)(pB.animatedAttachments, BB), nB--)
+         0 === BB.owners.length && (null !== BB.gR && zB.delete(BB.gR), (0, GB.db)(hB.attachments, BB), null !== BB.clipPose && (0, GB.db)(hB.animatedAttachments, BB), JB--)
```

#### 1639. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12802-L12803` → after: `L11861-L11862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11861-L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11861-L11862) · [Before (L12802-L12803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12802-L12803)

```diff
-       const zB = (0, nB.g)(),
-         QB = zB.vG.getState(BB, zB.vG.names.meshAttachments);
+       const ZB = (0, JB.h)(),
+         TB = ZB.zW.getState(BB, ZB.zW.names.meshAttachments);
```

#### 1640. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12805-L12806` → after: `L11864-L11865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11864-L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11864-L11865) · [Before (L12805-L12806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12805-L12806)

```diff
-       const IB = null === (jB = zB.vG.ujB(BB)) || void 0 === jB ? void 0 : jB.mY;
-       (0, dB.I)(IB) || aB(zB.pm.JY, IB, QB.attachments)
+       const GB = null === (IB = ZB.zW.RIB(BB)) || void 0 === IB ? void 0 : IB.gR;
+       (0, oB.L)(GB) || nB(ZB.Ig.kR, GB, TB.attachments)
```

#### 1641. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12811` → after: `L11870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11870) · [Before (L12811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12811)

```diff
-       const QB = BB.pm.JY;
+       const TB = BB.Ig.kR;
```

#### 1642. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12818` → after: `L11877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11877) · [Before (L12818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12818)

```diff
-   37735: (BB, jB, zB) => {
+   37685: (BB, IB, ZB) => {
```

#### 1643. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12826-L12831` → after: `L11885-L11890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11885-L11890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11885-L11890) · [Before (L12826-L12831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12826-L12831)

```diff
-     var QB = zB(2863),
-       nB = zB(1948),
-       dB = zB(376),
-       IB = zB(37746),
-       NB = zB(37743),
-       uB = zB(386),
+     var TB = ZB(2912),
+       JB = ZB(1956),
+       oB = ZB(360),
+       GB = ZB(37696),
+       vB = ZB(37693),
+       kB = ZB(364),
```

#### 1644. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12833-L12835` → after: `L11892-L11894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11892-L11894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11892-L11894) · [Before (L12833-L12835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12833-L12835)

```diff
-       aB = zB(37518),
-       pB = zB(37158),
-       rB = zB(37739);
+       nB = ZB(37448),
+       hB = ZB(37108),
+       zB = ZB(37687);
```

#### 1645. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12839` → after: `L11898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11898) · [Before (L12839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12839)

```diff
-         this.isServerControlled = !1, this.defaultRotationsPerSecond = 5, this.childrenNodeParams = [], this.playerControlledRotationSoftTolerance = null, this.playerControlledRotationHardTolerance = null, this.modelYRotationOffset = 0, this.renderRotation = null, this.serverSetR … [truncated]
+         this.isServerControlled = !1, this.defaultRotationsPerSecond = 5, this.childrenNodeParams = [], this.playerControlledRotationSoftTolerance = null, this.playerControlledRotationHardTolerance = null, this.modelYRotationOffset = 0, this.renderRotation = null, this.serverSetR … [truncated]
```

#### 1646. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12848` → after: `L11907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11907) · [Before (L12848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12848)

```diff
-         xG: function(BB, jB) {
+         cW: function(BB, IB) {
```

#### 1647. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12856-L12857` → after: `L11915-L11916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11915-L11916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11915-L11916) · [Before (L12856-L12857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12856-L12857)

```diff
-         ZD: null,
-         dL: function(jB, zB) {
+         nH: null,
+         FW: function(IB, ZB) {
```

#### 1648. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12861` → after: `L11920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11920) · [Before (L12861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12861)

```diff
-             const zB = BB.vG.ujB(dB.VY);
+             const ZB = BB.zW.RIB(oB.bR);
```

#### 1649. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12863` → after: `L11922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11922) · [Before (L12863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12863)

```diff
-               dB.qL = !1;
+               oB.iW = !1;
```

#### 1650. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12867` → after: `L11926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11926) · [Before (L12867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12867)

```diff
-               EzB: IB
+               SZB: GB
```

#### 1651. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12869-L12870` → after: `L11928-L11929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11928-L11929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11928-L11929) · [Before (L12869-L12870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12869-L12870)

```diff
-             if (!(null !== (QB = null === IB || void 0 === IB ? void 0 : IB.izB) && void 0 !== QB ? QB : null === (nB = zB.mesh) || void 0 === nB ? void 0 : nB.isEnabled())) {
-               dB.qL = !1;
+             if (!(null !== (TB = null === GB || void 0 === GB ? void 0 : GB.BTB) && void 0 !== TB ? TB : null === (JB = ZB.mesh) || void 0 === JB ? void 0 : JB.isEnabled())) {
+               oB.iW = !1;
```

#### 1652. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12874` → after: `L11933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11933) · [Before (L12874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12874)

```diff
-               mY: NB
+               gR: vB
```

#### 1653. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12876` → after: `L11935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11935) · [Before (L12876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12876)

```diff
-             IB ? dB._thinObjectId !== NB && gB(dB, NB) : dB._rootMesh !== zB.mesh && tB(dB, zB.mesh), IB && (0, pB.pausesOutOfView)(BB, dB.VY, NB) ? dB.qL = !0 : LB(BB, dB)
+             GB ? oB._thinObjectId !== vB && dB(oB, vB) : oB._rootMesh !== ZB.mesh && CB(oB, ZB.mesh), GB && (0, hB.pausesOutOfView)(BB, oB.bR, vB) ? oB.iW = !0 : WB(BB, oB)
```

#### 1654. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12883` → after: `L11942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11942) · [Before (L12883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12883)

```diff
-       jB.qL && null !== jB._thinObjectId && BB.pm.JY.has(jB._thinObjectId) && LB(BB, jB)
+       IB.iW && null !== IB._thinObjectId && BB.Ig.kR.has(IB._thinObjectId) && WB(BB, IB)
```

#### 1655. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12887` → after: `L11946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11946) · [Before (L12887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12887)

```diff
-       const zB = jB.isServerControlled ? jB.serverSetRotation[1] : BB.vG.JjB(jB.VY).heading;
+       const ZB = IB.isServerControlled ? IB.serverSetRotation[1] : BB.zW.uIB(IB.bR).heading;
```

#### 1656. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12892` → after: `L11951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11951) · [Before (L12892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12892)

```diff
-       const zB = BB.vG.getState(jB, "meshRotation");
+       const ZB = BB.zW.getState(IB, "meshRotation");
```

#### 1657. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12898-L12904` → after: `L11957-L11963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11957-L11963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11957-L11963) · [Before (L12898-L12904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12898-L12904)

```diff
-       jB.qL = !1;
-       const kB = BB.vG.CBB(BB.zV),
-         GB = BB.vG.RjB(jB.VY),
-         LB = jB.VY === BB.zV,
-         gB = (0, rB.c)(BB, jB.VY, GB),
-         tB = BB.vG.JjB(BB.zV),
-         SB = BB.vG.JjB(jB.VY),
+       IB.iW = !1;
+       const yB = BB.zW.dIB(BB.Jm),
+         UB = BB.zW.YZB(IB.bR),
+         WB = IB.bR === BB.Jm,
+         dB = (0, zB.b)(BB, IB.bR, UB),
+         CB = BB.zW.uIB(BB.Jm),
+         QB = BB.zW.uIB(IB.bR),
```

#### 1658. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12907-L12908` → after: `L11966-L11967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11966-L11967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11966-L11967) · [Before (L12907-L12908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12907-L12908)

```diff
-         const zB = BB.bloxd.getResolvedPhysicsSettings(BB.zV, kB.physicsState);
-         null === zB.fixedHeading && zB.steering && kB._steeringActiveLastTick ? iB[1] = (0, NB.k)(BB, kB) : iB[1] = (0, IB.t)(zB, kB.steeringHeading, jB.baseRenderRotation[1] + aB.b.getPlayerFacingHeading(BB))
+         const ZB = BB.bloxd.getResolvedPhysicsSettings(BB.Jm, yB.physicsState);
+         null === ZB.fixedHeading && ZB.steering && yB._steeringActiveLastTick ? OB[1] = (0, vB.j)(BB, yB) : OB[1] = (0, GB.u)(ZB, yB.steeringHeading, IB.baseRenderRotation[1] + nB.c.getPlayerFacingHeading(BB))
```

#### 1659. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12911-L12913` → after: `L11970-L11972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11970-L11972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11970-L11972) · [Before (L12911-L12913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12911-L12913)

```diff
-         if ((null === GB || void 0 === GB ? void 0 : GB.OjB) && BB.bloxd.getRiddenVehicleEId(GB.SJ) === jB.VY && null === BB.bloxd.getLifeformType(jB.VY)) {
-           const BB = nB.d.lerpWeight(sB * jB._accumulatedDt);
-           iB[1] = jB.renderRotation[1] + dB.b.computeShortestRotation(jB.renderRotation[1], iB[1]) * BB
+         if ((null === UB || void 0 === UB ? void 0 : UB.iZB) && BB.bloxd.getRiddenVehicleEId(UB.zN) === IB.bR && null === BB.bloxd.getLifeformType(IB.bR)) {
+           const BB = JB.c.lerpWeight(FB * IB._accumulatedDt);
+           OB[1] = IB.renderRotation[1] + oB.e.computeShortestRotation(IB.renderRotation[1], OB[1]) * BB
```

#### 1660. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12916-L12917` → after: `L11975-L11976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11975-L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11975-L11976) · [Before (L12916-L12917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12916-L12917)

```diff
-       const qB = gB ? null !== (zB = null === tB || void 0 === tB ? void 0 : tB.speed) && void 0 !== zB ? zB : 0 : null !== (QB = null === SB || void 0 === SB ? void 0 : SB.speed) && void 0 !== QB ? QB : 0,
-         fB = null !== (uB = null === SB || void 0 === SB ? void 0 : SB.pose) && void 0 !== uB ? uB : "standing",
+       const YB = dB ? null !== (ZB = null === CB || void 0 === CB ? void 0 : CB.speed) && void 0 !== ZB ? ZB : 0 : null !== (TB = null === QB || void 0 === QB ? void 0 : QB.speed) && void 0 !== TB ? TB : 0,
+         iB = null !== (kB = null === QB || void 0 === QB ? void 0 : QB.pose) && void 0 !== kB ? kB : "standing",
```

#### 1661. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12922-L12923` → after: `L11981-L11982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11981-L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11981-L11982) · [Before (L12922-L12923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12922-L12923)

```diff
-         YB = !(gB && !LB) && !0 === (null === (pB = BB.RY) || void 0 === pB || null === (JB = pB[BB.zV]) || void 0 === JB || null === (mB = JB[jB.VY]) || void 0 === mB ? void 0 : mB.lockHeadToBody),
-         VB = null !== (yB = BB.vG.getState(jB.VY, "animator")) && void 0 !== yB ? yB : null;
+         jB = !(dB && !WB) && !0 === (null === (hB = BB.Tm) || void 0 === hB || null === (NB = hB[BB.Jm]) || void 0 === NB || null === (gB = NB[IB.bR]) || void 0 === gB ? void 0 : gB.lockHeadToBody),
+         PB = null !== (qB = BB.zW.getState(IB.bR, "animator")) && void 0 !== qB ? qB : null;
```

#### 1662. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12932` → after: `L11991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R11991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L11991) · [Before (L12932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12932)

```diff
-       const dB = (0, QB.g)().pm.JY.getNodeNames(jB),
+       const oB = (0, TB.h)().Ig.kR.getNodeNames(IB),
```

#### 1663. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12976` → after: `L12035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12035) · [Before (L12976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12976)

```diff
-       let iB = rB ? 0 : null !== uB && void 0 !== uB ? uB : 0,
+       let OB = zB ? 0 : null !== kB && void 0 !== kB ? kB : 0,
```

#### 1664. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12984` → after: `L12043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12043) · [Before (L12984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12984)

```diff
-           HB = Math.max(HB, null !== (DB = mB[QB].rotationsPerSecond) && void 0 !== DB ? DB : yB)
+           aB = Math.max(aB, null !== (HB = gB[TB].rotationsPerSecond) && void 0 !== HB ? HB : qB)
```

#### 1665. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12990-L12991` → after: `L12049-L12050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12049-L12050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12049-L12050) · [Before (L12990-L12991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12990-L12991)

```diff
-           zB = rB ? 0 : null !== uB && void 0 !== uB ? uB : BB.softTolerance,
-           IB = rB ? null : null !== aB && void 0 !== aB ? aB : BB.hardTolerance,
+           ZB = zB ? 0 : null !== kB && void 0 !== kB ? kB : BB.softTolerance,
+           GB = zB ? null : null !== nB && void 0 !== nB ? nB : BB.hardTolerance,
```

#### 1666. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L12995` → after: `L12054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12054) · [Before (L12995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L12995)

```diff
-         const pB = rB ? HB : null !== (FB = BB.rotationsPerSecond) && void 0 !== FB ? FB : yB,
+         const hB = zB ? aB : null !== (MB = BB.rotationsPerSecond) && void 0 !== MB ? MB : qB,
```

#### 1667. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13000-L13001` → after: `L12059-L12060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12059-L12060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12059-L12060) · [Before (L13000-L13001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13000-L13001)

```diff
-             zB = dB.b.computeShortestRotation(EB[QB], NB[QB]);
-           zB < -iB ? NB[QB] = EB[QB] - iB : zB > iB && (NB[QB] = EB[QB] + iB);
+             ZB = oB.e.computeShortestRotation(wB[TB], vB[TB]);
+           ZB < -OB ? vB[TB] = wB[TB] - OB : ZB > OB && (vB[TB] = wB[TB] + OB);
```

#### 1668. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13004` → after: `L12063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12063) · [Before (L13004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13004)

```diff
-             const BB = dB.b.computeShortestRotation(EB[QB], UB[QB]),
+             const BB = oB.e.computeShortestRotation(wB[TB], cB[TB]),
```

#### 1669. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13008` → after: `L12067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12067) · [Before (L13008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13008)

```diff
-           nB || (UB[QB] = dB.b.applyRotation(UB[QB], NB[QB], sB)), NB[QB] === BB && UB[QB] === jB || (MB = !0)
+           JB || (cB[TB] = oB.e.applyRotation(cB[TB], vB[TB], FB)), vB[TB] === BB && cB[TB] === IB || (sB = !0)
```

#### 1670. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13013` → after: `L12072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12072) · [Before (L13013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13013)

```diff
-       const YB = (0, QB.g)().pm.JY,
+       const jB = (0, TB.h)().Ig.kR,
```

#### 1671. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13022` → after: `L12081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12081) · [Before (L13022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13022)

```diff
-         const nB = dB.b.computeShortestRotation(zB[1], EB[1]);
+         const JB = oB.e.computeShortestRotation(ZB[1], wB[1]);
```

#### 1672. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13034` → after: `L12093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12093) · [Before (L13034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13034)

```diff
-   37759: (BB, jB, zB) => {
+   37713: (BB, IB, ZB) => {
```

#### 1673. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13039-L13042` → after: `L12098-L12101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12098-L12101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12098-L12101) · [Before (L13039-L13042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13039-L13042)

```diff
-     var QB = zB(37782),
-       nB = zB(214),
-       dB = zB(6428),
-       IB = zB(386),
+     var TB = ZB(37741),
+       JB = ZB(201),
+       oB = ZB(6635),
+       GB = ZB(364),
```

#### 1674. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13044-L13050` → after: `L12103-L12109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12103-L12109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12103-L12109) · [Before (L13044-L13050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13044-L13050)

```diff
-       uB = zB(37767),
-       UB = zB(9266),
-       aB = zB(37746),
-       pB = zB(37748),
-       rB = zB(37756);
-     var sB = zB(1948),
-       JB = zB(376);
+       kB = ZB(37722),
+       cB = ZB(9296),
+       nB = ZB(37696),
+       hB = ZB(37705),
+       zB = ZB(37710);
+     var FB = ZB(1956),
+       NB = ZB(360);
```

#### 1675. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13055` → after: `L12114-L12129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12114-L12129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12114-L12129) · [Before (L13055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13055)

```diff
-     const gB = [162, 0, 1, 214, 3, 233, 167, 7, 5, 6, "d", 8, 255, "length", 27, 2, "a", 241, "undefined", void 0, 195, "b", 63, "fromCodePoint", 12, "push", 234, 69, 9, "g", 91, 210, "f", 8191, 88, 13, 14, 31, "c", 95, 82, 4, "i", 61, 123, 20, 34, 70, null, "h", 171, 81, 60, 66, … [truncated]
+     const dB = [18, 0, 1, "h", 3, "a", "i", 7, 23, 6, 4, 8, 255, "length", "b", "c", 68, 65, "undefined", void 0, 112, 187, 149, 63, "fromCodePoint", 12, "push", 164, 100, 157, 91, 248, 241, 8191, 88, 13, 14, 2, 9, 5, "f", 163, null, 214, 92, "g", 127, 60, 128, 162, 142, "d", "zq … [truncated]
+ 
+     function CB(...BB) {
+       return BB[dB[13]] = dB[2], typeof UB[BB[dB[1]]] === dB[18] ? UB[BB[dB[1]]] = function(...BB) {
+         for (wB(BB[dB[13]] = dB[2], BB[dB[5]] = 'wnIkXFDRdLUHbPTEoZMy@x1$7}+?]/)^86#J&,vS~:q=CmWNhB2cu>f(V3zl!.ar0gOK;iQ"GAp%*t_Y|s`ej{95[<4', BB[-dB[0]] = "" + (BB[dB[1]] || ""), BB[dB[4]] = BB[-dB[0]].length, BB[dB[10]] = [], BB[-dB[8]] = dB[1], BB[dB[9]] = dB[1], BB[dB[7]] = - … [truncated]
+           if (BB[dB[6]] = BB[dB[5]].indexOf(BB[-dB[0]][BB[dB[3]]]), BB[dB[6]] !== -dB[2])
+             if (BB[dB[7]] < dB[1]) BB[dB[7]] = BB[dB[6]];
+             else {
+               wB(BB[dB[7]] += BB[dB[6]] * dB[30], BB[-dB[8]] |= BB[dB[7]] << BB[dB[9]], BB[dB[9]] += (BB[dB[7]] & dB[33]) > dB[34] ? dB[35] : dB[36]);
+               do {
+                 wB(BB[dB[10]].push(BB[-dB[8]] & dB[12]), BB[-dB[8]] >>= dB[11], BB[dB[9]] -= dB[11])
+               } while (BB[dB[9]] > dB[7]);
+               BB[dB[7]] = -dB[2]
+             } return BB[dB[7]] > -dB[2] && BB[dB[10]].push((BB[-dB[8]] | BB[dB[7]] << BB[dB[9]]) & dB[12]), QB(BB[dB[10]])
+       }(WB[BB[dB[1]]]) : UB[BB[dB[1]]]
+     }
```

#### 1676. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13066-L13067` → after: `L12140-L12141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12140-L12141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12140-L12141) · [Before (L13066-L13067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13066-L13067)

```diff
-     MB(GB = {}, LB = ['"an^:Wh:gi3Zh+f2X8U&quGfimoN;?N4G#c0s;n`+IL0|7?%Rw5G_.!r9qB', '7$zx?(29[nb<3+,S@8="CDrb>=M', "H.;frUJW!T!qkKzF8.ZW&Sq~~:Tr_zpP/kTU6,M=cph", "L&|tvBvk[#OW[Ko3/MlFLMdD+w&>cKsq#$iXhK)", "1G2GYr?~I#F>#hMsv4;f?(d:>k;", "o&3G){qO", "[wA#Yz^JAIts!Q~/ixn#HK~k/{3x*C … [truncated]
-       MB(BB[gB[13]] = gB[1], BB[gB[16]] = [function() {
+     wB(UB = {}, WB = ["nO;t8_*uN!&YKTW+Gf*+GY0WCZ,AUs_+a~JtUiERbgrA*?^ZrfI", "~k^A~;$JL(f*cvR^cL]/8lR:;LD,l`sSn3.Rf,[;]ajQ$?a)vf!/b", '4Zsc^"v)IrUUg&<:_Q^*0G7u_lk.n', 'qb2?Z"w7Yr#Yw"}:aAADm|4bPlaX3oGv*T,^S,Z>Ybl', "Na8f>VPy8!fXaP{?<>BDT2{PwxIc/or7c3~f.#my3ZB|$`F,[SPR", 'umL_7v~ut … [truncated]
+       wB(BB[dB[13]] = dB[1], BB[-dB[16]] = [function() {
```

#### 1677. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13077` → after: `L12151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12151) · [Before (L13077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13077)

```diff
-         MB(BB[gB[14]] = Object, BB[gB[15]][gB[25]]("".__proto__.constructor.name))
+         wB(BB[dB[14]] = Object, BB[dB[15]][dB[26]]("".__proto__.constructor.name))
```

#### 1678. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13079-L13081` → after: `L12153-L12155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12153-L12155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12153-L12155) · [Before (L13079-L13081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13079-L13081)

```diff
-       BB: for (BB[gB[4]] = gB[1]; BB[gB[4]] < BB[gB[16]][gB[13]]; BB[gB[4]]++) try {
-         for (BB[gB[14]] = BB[gB[16]][BB[gB[4]]](), BB[-gB[17]] = gB[1]; BB[-gB[17]] < BB[gB[15]][gB[13]]; BB[-gB[17]]++)
-           if (typeof BB[gB[14]][BB[gB[15]][BB[-gB[17]]]] === gB[18]) continue BB;
+       BB: for (BB[dB[4]] = dB[1]; BB[dB[4]] < BB[-dB[16]][dB[13]]; BB[dB[4]]++) try {
+         for (BB[dB[14]] = BB[-dB[16]][BB[dB[4]]](), BB[dB[17]] = dB[1]; BB[dB[17]] < BB[dB[15]][dB[13]]; BB[dB[17]]++)
+           if (typeof BB[dB[14]][BB[dB[15]][BB[dB[17]]]] === dB[18]) continue BB;
```

#### 1679. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13085-L13087` → after: `L12159-L12160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12159-L12160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12159-L12160) · [Before (L13085-L13087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13085-L13087)

```diff
-     }() || {}, ZB = XB.TextDecoder, AB = XB.Uint8Array, TB = XB.oJ, PB = XB.String || String, WB = XB.Array || Array, eB = function() {
-       var BB, jB, zB = new WB(gB[92]);
-       return MB(BB = PB[gB[23]] || PB.fromCharCode, jB = []),
+     }() || {}, XB = mB.TextDecoder, LB = mB.Uint8Array, eB = mB.UN, uB = mB.String || String, fB = mB.Array || Array, lB = function(...BB) {
+       return wB(BB[dB[13]] = dB[1], BB[dB[5]] = new fB(dB[48]), BB[dB[2]] = uB[dB[24]] || uB.fromCharCode, BB[dB[15]] = []),
```

#### 1680. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13089-L13090` → after: `L12162-L12163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12162-L12163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12162-L12163) · [Before (L13089-L13090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13089-L13090)

```diff
-           for (MB(QB[gB[13]] = gB[2], QB[gB[16]] = gB[19], QB[gB[21]] = gB[19], QB[gB[4]] = QB[gB[1]][gB[13]], jB[gB[13]] = gB[1]), QB[-gB[20]] = gB[1]; QB[-gB[20]] < QB[gB[4]];) MB(QB[gB[21]] = QB[gB[1]][QB[-gB[20]]++], QB[gB[21]] <= gB[91] ? QB[gB[16]] = QB[gB[21]] : QB[gB[21]] … [truncated]
-           return jB.join("")
+           for (wB(IB[dB[13]] = dB[2], IB[dB[5]] = dB[19], IB[-dB[22]] = dB[19], IB[dB[21]] = IB[dB[1]][dB[13]], BB[dB[15]][dB[13]] = dB[1]), IB[-dB[20]] = dB[1]; IB[-dB[20]] < IB[dB[21]];) wB(IB[-dB[22]] = IB[dB[1]][IB[-dB[20]]++], IB[-dB[22]] <= dB[46] ? IB[dB[5]] = IB[-dB[22]]  … [truncated]
+           return BB[dB[15]].join("")
```

#### 1681. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13095-L13097` → after: `L12168-L12170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12168-L12170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12168-L12170) · [Before (L13095-L13097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13095-L13097)

```diff
-           for (MB(BB[gB[13]] = gB[2], BB[gB[16]] = 'I:bqpArPv3#J2N?iE!Y_wD@|9mCyHl("zsB%6e17/[4L<X}ta+`g;.V5hOjkx*u,=~>MKS0^]&)U8${doZncGQWfTRF', BB[gB[21]] = "" + (BB[gB[1]] || ""), BB[gB[4]] = BB[gB[21]].length, BB[gB[10]] = [], BB[-gB[47]] = gB[1], BB[gB[9]] = gB[1], BB[gB[7]] … [truncated]
-             if (BB[-gB[46]] = BB[gB[16]].indexOf(BB[gB[21]][BB[gB[45]]]), BB[-gB[46]] !== -gB[2])
-               if (BB[gB[7]] < gB[1]) BB[gB[7]] = BB[-gB[46]];
+           for (wB(BB[dB[13]] = dB[2], BB[dB[5]] = 'e/FJUAZlNqDdsCgrbjSkRX1i5mtVL`%oTfBn~230GW8Y^QIHu6;_K$}Pp]M?hc#>(+[,vx!{yE<a7:|@)Ow*9&"4z.=', BB[dB[14]] = "" + (BB[dB[1]] || ""), BB[-dB[28]] = BB[dB[14]].length, BB[dB[10]] = [], BB[dB[31]] = dB[1], BB[-dB[32]] = dB[1], BB[dB[7 … [truncated]
+             if (BB[-dB[29]] = BB[dB[5]].indexOf(BB[dB[14]][BB[-dB[27]]]), BB[-dB[29]] !== -dB[2])
+               if (BB[dB[7]] < dB[1]) BB[dB[7]] = BB[-dB[29]];
```

#### 1682. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13099` → after: `L12172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12172) · [Before (L13099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13099)

```diff
-                 MB(BB[gB[7]] += BB[-gB[46]] * gB[30], BB[-gB[47]] |= BB[gB[7]] << BB[gB[9]], BB[gB[9]] += (BB[gB[7]] & gB[33]) > gB[34] ? gB[35] : gB[36]);
+                 wB(BB[dB[7]] += BB[-dB[29]] * dB[30], BB[dB[31]] |= BB[dB[7]] << BB[-dB[32]], BB[-dB[32]] += (BB[dB[7]] & dB[33]) > dB[34] ? dB[35] : dB[36]);
```

#### 1683. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13101-L13102` → after: `L12174-L12175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12174-L12175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12174-L12175) · [Before (L13101-L13102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13101-L13102)

```diff
-                   MB(BB[gB[10]].push(BB[-gB[47]] & gB[12]), BB[-gB[47]] >>= gB[11], BB[gB[9]] -= gB[11])
-                 } while (BB[gB[9]] > gB[7]);
+                   wB(BB[dB[10]].push(BB[dB[31]] & dB[12]), BB[dB[31]] >>= dB[11], BB[-dB[32]] -= dB[11])
+                 } while (BB[-dB[32]] > dB[7]);
```

#### 1684. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13104` → after: `L12177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12177) · [Before (L13104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13104)

```diff
-               } return BB[gB[7]] > -gB[2] && BB[gB[10]].push((BB[-gB[47]] | BB[gB[7]] << BB[gB[9]]) & gB[12]), tB(BB[gB[10]])
+               } return BB[dB[7]] > -dB[2] && BB[dB[10]].push((BB[dB[31]] | BB[dB[7]] << BB[-dB[32]]) & dB[12]), QB(BB[dB[10]])
```

#### 1685. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13107-L13109` → after: `L12180-L12182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12180-L12182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12180-L12182) · [Before (L13107-L13109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13107-L13109)

```diff
-       BB[gB[13]] = gB[28];
-       const zB = BB[gB[1]][jB(gB[61]) + jB(gB[39]) + jB(96)];
-       if (zB === gB[48]) {
+       BB[dB[13]] = dB[38];
+       const ZB = BB[dB[1]][CB(122) + IB(123) + IB(124)];
+       if (ZB === dB[42]) {
```

#### 1686. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13111-L13113` → after: `L12184-L12186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12184-L12186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12184-L12186) · [Before (L13111-L13113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13111-L13113)

```diff
-           for (MB(BB[gB[13]] = gB[2], BB[gB[2]] = 'n|YfND;(}`1kd:>x@!trT]wEZB2S~,VJW?UG3IRm&ze+7l6_qL.=aO{jsF5p0^AQ"voM/Xhci4C%Hu$b8g9*)Ky#[<P', BB[gB[15]] = "" + (BB[gB[1]] || ""), BB[-gB[50]] = BB[gB[15]].length, BB[gB[51]] = [], BB[gB[8]] = gB[1], BB[gB[9]] = gB[1], BB[gB[7]]  … [truncated]
-             if (BB[gB[42]] = BB[gB[2]].indexOf(BB[gB[15]][BB[gB[49]]]), BB[gB[42]] !== -gB[2])
-               if (BB[gB[7]] < gB[1]) BB[gB[7]] = BB[gB[42]];
+           for (wB(BB[dB[13]] = dB[2], BB[dB[2]] = 'WUlGHFATYJ$<iXua/8:24g@B=R([v%6b;!hZIdV}Ofj]MwL)xtCozSp.Qe|?,`+9m&{^>Kyks#5~cN3r1ED"nqP7*0_', BB[dB[37]] = "" + (BB[dB[1]] || ""), BB[dB[15]] = BB[dB[37]].length, BB[-dB[41]] = [], BB[dB[39]] = dB[1], BB[dB[40]] = dB[1], BB[dB[7] … [truncated]
+             if (BB[dB[38]] = BB[dB[2]].indexOf(BB[dB[37]][BB[dB[3]]]), BB[dB[38]] !== -dB[2])
+               if (BB[dB[7]] < dB[1]) BB[dB[7]] = BB[dB[38]];
```

#### 1687. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13115` → after: `L12188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12188) · [Before (L13115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13115)

```diff
-                 MB(BB[gB[7]] += BB[gB[42]] * gB[30], BB[gB[8]] |= BB[gB[7]] << BB[gB[9]], BB[gB[9]] += (BB[gB[7]] & gB[33]) > gB[34] ? gB[35] : gB[36]);
+                 wB(BB[dB[7]] += BB[dB[38]] * dB[30], BB[dB[39]] |= BB[dB[7]] << BB[dB[40]], BB[dB[40]] += (BB[dB[7]] & dB[33]) > dB[34] ? dB[35] : dB[36]);
```

#### 1688. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13117-L13118` → after: `L12190-L12191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12190-L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12190-L12191) · [Before (L13117-L13118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13117-L13118)

```diff
-                   MB(BB[gB[51]].push(BB[gB[8]] & gB[12]), BB[gB[8]] >>= gB[11], BB[gB[9]] -= gB[11])
-                 } while (BB[gB[9]] > gB[7]);
+                   wB(BB[-dB[41]].push(BB[dB[39]] & dB[12]), BB[dB[39]] >>= dB[11], BB[dB[40]] -= dB[11])
+                 } while (BB[dB[40]] > dB[7]);
```

#### 1689. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13120` → after: `L12193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12193) · [Before (L13120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13120)

```diff
-               } return BB[gB[7]] > -gB[2] && BB[gB[51]].push((BB[gB[8]] | BB[gB[7]] << BB[gB[9]]) & gB[12]), tB(BB[gB[51]])
+               } return BB[dB[7]] > -dB[2] && BB[-dB[41]].push((BB[dB[39]] | BB[dB[7]] << BB[dB[40]]) & dB[12]), QB(BB[-dB[41]])
```

#### 1690. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13130` → after: `L12203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12203) · [Before (L13130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13130)

```diff
-         return void(pB(97) in SB && kB())
+         return void(hB(dB[53]) in sB && yB())
```

#### 1691. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13132` → after: `L12205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12205) · [Before (L13132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13132)

```diff
-       if ("heading" === zB[jB(100)]) {
+       if ("heading" === ZB[IB(126)]) {
```

#### 1692. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13134-L13136` → after: `L12207-L12209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12207-L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12207-L12209) · [Before (L13134-L13136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13134-L13136)

```diff
-           for (MB(BB[gB[13]] = gB[2], BB[-gB[27]] = 'AxIoKL*WfOwV)c^r<e?B:Xka@7d;lS![vy9iu42Rt{s=8ZC/%D}>]5H&En0.jhJ$6b_#pMGz|T+P,F(NQ3`Ugq1Y"m~', BB[gB[15]] = "" + (BB[gB[1]] || ""), BB[gB[38]] = BB[gB[15]].length, BB[gB[10]] = [], BB[-gB[59]] = gB[1], BB[gB[60]] = gB[1], BB[-gB … [truncated]
-             if (BB[gB[28]] = BB[-gB[27]].indexOf(BB[gB[15]][BB[gB[11]]]), BB[gB[28]] !== -gB[2])
-               if (BB[-gB[58]] < gB[1]) BB[-gB[58]] = BB[gB[28]];
+           for (wB(BB[dB[13]] = dB[2], BB[dB[5]] = 'Z71$_|?x(E*H4"FWJhVyb+]<nrQ9Tf~eA@mUN}BjzC0:IL>RdpkGDl^Y=KSO!oX&`gs%6)53{u;[M#qc/i.8va,Pwt2', BB[dB[37]] = "" + (BB[dB[1]] || ""), BB[dB[43]] = BB[dB[37]].length, BB[dB[10]] = [], BB[dB[39]] = dB[1], BB[dB[9]] = dB[1], BB[dB[45]] … [truncated]
+             if (BB[dB[44]] = BB[dB[5]].indexOf(BB[dB[37]][BB[dB[3]]]), BB[dB[44]] !== -dB[2])
+               if (BB[dB[45]] < dB[1]) BB[dB[45]] = BB[dB[44]];
```

#### 1693. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13138` → after: `L12211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12211) · [Before (L13138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13138)

```diff
-                 MB(BB[-gB[58]] += BB[gB[28]] * gB[30], BB[-gB[59]] |= BB[-gB[58]] << BB[gB[60]], BB[gB[60]] += (BB[-gB[58]] & gB[33]) > gB[34] ? gB[35] : gB[36]);
+                 wB(BB[dB[45]] += BB[dB[44]] * dB[30], BB[dB[39]] |= BB[dB[45]] << BB[dB[9]], BB[dB[9]] += (BB[dB[45]] & dB[33]) > dB[34] ? dB[35] : dB[36]);
```

#### 1694. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13140-L13143` → after: `L12213-L12216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12213-L12216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12213-L12216) · [Before (L13140-L13143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13140-L13143)

```diff
-                   MB(BB[gB[10]].push(BB[-gB[59]] & gB[12]), BB[-gB[59]] >>= gB[11], BB[gB[60]] -= gB[11])
-                 } while (BB[gB[60]] > gB[7]);
-                 BB[-gB[58]] = -gB[2]
-               } return BB[-gB[58]] > -gB[2] && BB[gB[10]].push((BB[-gB[59]] | BB[-gB[58]] << BB[gB[60]]) & gB[12]), tB(BB[gB[10]])
+                   wB(BB[dB[10]].push(BB[dB[39]] & dB[12]), BB[dB[39]] >>= dB[11], BB[dB[9]] -= dB[11])
+                 } while (BB[dB[9]] > dB[7]);
+                 BB[dB[45]] = -dB[2]
+               } return BB[dB[45]] > -dB[2] && BB[dB[10]].push((BB[dB[39]] | BB[dB[45]] << BB[dB[9]]) & dB[12]), QB(BB[dB[10]])
```

#### 1695. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13149` → after: `L12222-L12226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12222-L12226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12222-L12226) · [Before (L13149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13149)

```diff
-         return void MB((0, rB[gB[54]])(BB[gB[2]], BB[gB[15]], BB[gB[4]], BB[gB[41]], BB[gB[8]], BB[gB[9]], BB[gB[1]]), function(BB, jB, zB, QB) {
+ 
+         function iB(...BB) {
+           BB[dB[13]] = dB[1]
+         }
+         return IB(dB[46]) in sB && iB(), void wB((0, zB[dB[15]])(BB[dB[2]], BB[dB[37]], BB[dB[4]], BB[dB[10]], BB[dB[39]], BB[dB[9]], BB[dB[1]]), function(BB, IB, ZB, TB) {
```

#### 1696. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13151` → after: `L12228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12228) · [Before (L13151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13151)

```diff
-           if (zB.Hy[1] < -BB.maxFallSpeed) {
+           if (ZB.zq[1] < -BB.maxFallSpeed) {
```

#### 1697. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13153` → after: `L12230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12230) · [Before (L13153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13153)

```diff
-               dB = (sB.d.lerpWeight(nB / BB.slowDownSeconds) * (-BB.maxFallSpeed - zB.Hy[1]) - (BB.compensateGravity ? jB.physics.gravity[1] * zB.gravityMultiplier * nB : 0)) * zB.fN / nB;
+               oB = (FB.c.lerpWeight(JB / BB.slowDownSeconds) * (-BB.maxFallSpeed - ZB.zq[1]) - (BB.compensateGravity ? IB.physics.gravity[1] * ZB.gravityMultiplier * JB : 0)) * ZB.Wv / JB;
```

#### 1698. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13156` → after: `L12233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12233) · [Before (L13156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13156)

```diff
-         }(BB[gB[1]][jB(gB[61]) + jB(101) + jB(gB[64]) + iB(gB[101])], BB[gB[2]], BB[gB[8]], BB[gB[7]]))
+         }(BB[dB[1]][YB(130) + YB(dB[69]) + YB(132) + YB(133)], BB[dB[2]], BB[dB[39]], BB[dB[7]]))
```

#### 1699. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13158-L13165` → after: `L12235-L12239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12235-L12239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12235-L12239) · [Before (L13158-L13165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13158-L13165)

```diff
-       if (BB[gB[11]]) MB(BB[gB[4]][gB[75]] = NB()[jB(gB[109])](BB[gB[8]][gB[62]]), NB()[jB(gB[112])](BB[gB[4]][gB[67]], BB[gB[8]][gB[62]]));
-       else {
-         function qB(BB) {
-           var jB, zB, QB, nB, dB, IB, NB;
-           for (MB(jB = "" + (BB || ""), zB = jB.length, QB = [], nB = gB[1], dB = gB[1], IB = -gB[2]), NB = gB[1]; NB < zB; NB++) {
-             var uB = 'W|J}xk<dDawo"h[36/ZpV4S^At!N+1Yc?yFjQR,.Ub~vg:C&$l{78e29n=fzuLKH);%PB0>(EOq*Im5r_#@s]X`MTiG'.indexOf(jB[NB]);
-             if (uB !== -gB[2])
-               if (IB < gB[1]) IB = uB;
+       if (BB[dB[11]]) {
+         function pB(...BB) {
+           for (wB(BB[dB[13]] = dB[2], BB[dB[5]] = 'hJQ]GaecXxm>d1=)p_2{!5KIwg8i3WPs"O6vkjb[z4YNS&qH9A%uo`(#,n</.VM?CUy;FTLf@D|l}Z0:E~$Br+Rt*^7', BB[dB[37]] = "" + (BB[dB[1]] || ""), BB[-dB[50]] = BB[dB[37]].length, BB[dB[51]] = [], BB[dB[39]] = dB[1], BB[dB[40]] = dB[1], BB[dB[7] … [truncated]
+             if (BB[dB[38]] = BB[dB[5]].indexOf(BB[dB[37]][BB[dB[11]]]), BB[dB[38]] !== -dB[2])
+               if (BB[dB[7]] < dB[1]) BB[dB[7]] = BB[dB[38]];
```

#### 1700. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13167` → after: `L12241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12241) · [Before (L13167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13167)

```diff
-                 MB(IB += uB * gB[30], nB |= IB << dB, dB += (IB & gB[33]) > gB[34] ? gB[35] : gB[36]);
+                 wB(BB[dB[7]] += BB[dB[38]] * dB[30], BB[dB[39]] |= BB[dB[7]] << BB[dB[40]], BB[dB[40]] += (BB[dB[7]] & dB[33]) > dB[34] ? dB[35] : dB[36]);
```

#### 1701. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13169-L13174` → after: `L12243-L12264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12243-L12264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12243-L12264) · [Before (L13169-L13174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13169-L13174)

```diff
-                   MB(QB.push(nB & gB[12]), nB >>= gB[11], dB -= gB[11])
-                 } while (dB > gB[7]);
-                 IB = -gB[2]
-               }
-           }
-           return IB > -gB[2] && QB.push((nB | IB << dB) & gB[12]), tB(QB)
+                   wB(BB[dB[51]].push(BB[dB[39]] & dB[12]), BB[dB[39]] >>= dB[11], BB[dB[40]] -= dB[11])
+                 } while (BB[dB[40]] > dB[7]);
+                 BB[dB[7]] = -dB[2]
+               } return BB[dB[7]] > -dB[2] && BB[dB[51]].push((BB[dB[39]] | BB[dB[7]] << BB[dB[40]]) & dB[12]), QB(BB[dB[51]])
+         }
+ 
+         function aB(...BB) {
+           return BB[dB[13]] = dB[2], typeof UB[BB[dB[1]]] === dB[18] ? UB[BB[dB[1]]] = pB(WB[BB[dB[1]]]) : UB[BB[dB[1]]]
+         }
+         wB(BB[dB[4]][dB[67]] = vB()[aB(dB[68])](BB[dB[39]][dB[52]]), vB()[aB(135)](BB[dB[4]][dB[61]], BB[dB[39]][dB[52]]))
+       } else {
+         function HB(...BB) {
+           for (wB(BB[dB[13]] = dB[2], BB[-dB[56]] = ':RAfW7j6x@Hz;b)L%Vo`9rF.Jy!=+iU51gMB/"X~YTI]D,h*wmlQp0>[Cd{c2s}anKN&EtO(v48#_kS^uP?$|Z3G<qe', BB[dB[37]] = "" + (BB[dB[1]] || ""), BB[dB[55]] = BB[dB[37]].length, BB[dB[51]] = [], BB[dB[9]] = dB[1], BB[dB[40]] = dB[1], BB[dB[53 … [truncated]
+             if (BB[dB[38]] = BB[-dB[56]].indexOf(BB[dB[37]][BB[-dB[54]]]), BB[dB[38]] !== -dB[2])
+               if (BB[dB[53]] < dB[1]) BB[dB[53]] = BB[dB[38]];
+               else {
+ ... (6 more added lines; see GitHub link above)
```

#### 1702. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13180` → after: `L12270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12270) · [Before (L13180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13180)

```diff
-         if (!(BB[gB[8]][fB(gB[63]) + gB[29]][gB[1]] !== gB[1] || BB[gB[8]][fB(gB[63]) + gB[29]][gB[2]] !== gB[1] || BB[gB[8]][fB(gB[63]) + gB[29]][gB[15]] !== gB[1])) {
+         if (!(BB[dB[39]][MB(dB[57]) + dB[45]][dB[1]] !== dB[1] || BB[dB[39]][MB(dB[57]) + dB[45]][dB[2]] !== dB[1] || BB[dB[39]][MB(dB[57]) + dB[45]][dB[37]] !== dB[1])) {
```

#### 1703. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13182-L13184` → after: `L12272-L12274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12272-L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12272-L12274) · [Before (L13182-L13184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13182-L13184)

```diff
-             for (MB(BB[gB[13]] = gB[2], BB[gB[66]] = '$P%D}hO1H=T6!LCWcF&VEN93i(Uv+lJYB|"?0t.4<QgR`:#Gx]S_u/kdMeIX8z@jw7s~bnro2*)>;^m5aqyZAp[{,fK', BB[gB[15]] = "" + (BB[gB[1]] || ""), BB[gB[38]] = BB[gB[15]].length, BB[-gB[64]] = [], BB[-gB[65]] = gB[1], BB[gB[32]] = gB[1], BB[g … [truncated]
-               if (BB[-gB[52]] = BB[gB[66]].indexOf(BB[gB[15]][BB[gB[11]]]), BB[-gB[52]] !== -gB[2])
-                 if (BB[gB[7]] < gB[1]) BB[gB[7]] = BB[-gB[52]];
+             for (wB(BB[dB[13]] = dB[2], BB[dB[5]] = '8OPQCbiokVWG{a3]>`x,9p)RKY~m&$t#n=BvDer}:12;/jw<4y*U5"6l|zNH%JSdhfZu(?@!.ET_^0XcIF[LAg+s7Mq', BB[dB[14]] = "" + (BB[dB[1]] || ""), BB[dB[15]] = BB[dB[14]].length, BB[dB[30]] = [], BB[dB[59]] = dB[1], BB[-dB[60]] = dB[1], BB[dB[ … [truncated]
+               if (BB[dB[6]] = BB[dB[5]].indexOf(BB[dB[14]][BB[dB[58]]]), BB[dB[6]] !== -dB[2])
+                 if (BB[dB[45]] < dB[1]) BB[dB[45]] = BB[dB[6]];
```

#### 1704. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13186` → after: `L12276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12276) · [Before (L13186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13186)

```diff
-                   MB(BB[gB[7]] += BB[-gB[52]] * gB[30], BB[-gB[65]] |= BB[gB[7]] << BB[gB[32]], BB[gB[32]] += (BB[gB[7]] & gB[33]) > gB[34] ? gB[35] : gB[36]);
+                   wB(BB[dB[45]] += BB[dB[6]] * dB[30], BB[dB[59]] |= BB[dB[45]] << BB[-dB[60]], BB[-dB[60]] += (BB[dB[45]] & dB[33]) > dB[34] ? dB[35] : dB[36]);
```

#### 1705. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13188-L13191` → after: `L12278-L12281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12278-L12281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12278-L12281) · [Before (L13188-L13191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13188-L13191)

```diff
-                     MB(BB[-gB[64]].push(BB[-gB[65]] & gB[12]), BB[-gB[65]] >>= gB[11], BB[gB[32]] -= gB[11])
-                   } while (BB[gB[32]] > gB[7]);
-                   BB[gB[7]] = -gB[2]
-                 } return BB[gB[7]] > -gB[2] && BB[-gB[64]].push((BB[-gB[65]] | BB[gB[7]] << BB[gB[32]]) & gB[12]), tB(BB[-gB[64]])
+                     wB(BB[dB[30]].push(BB[dB[59]] & dB[12]), BB[dB[59]] >>= dB[11], BB[-dB[60]] -= dB[11])
+                   } while (BB[-dB[60]] > dB[7]);
+                   BB[dB[45]] = -dB[2]
+                 } return BB[dB[45]] > -dB[2] && BB[dB[30]].push((BB[dB[59]] | BB[dB[45]] << BB[-dB[60]]) & dB[12]), QB(BB[dB[30]])
```

#### 1706. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13197-L13211` → after: `L12287-L12288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12287-L12288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12287-L12288) · [Before (L13197-L13211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13197-L13211)

```diff
- 
-           function DB(...BB) {
-             MB(BB[gB[13]] = gB[1], BB[gB[21]] = function(BB) {
-               var jB, zB, QB, nB, dB, IB, NB = gB[1];
-               for (MB(jB = {}, zB = gB[1], QB = gB[1], nB = gB[1], dB = BB.length), IB = gB[1]; IB < dB; IB++) {
-                 var uB;
-                 for (MB(jB = {}, zB = gB[1], QB = gB[2]), uB = IB + gB[2]; uB < dB; uB++) BB[IB].x !== BB[uB].x || BB[IB].y !== BB[uB].y ? (jB[nB = BB[IB].y === BB[uB].y ? Number.MAX_SAFE_INTEGER : (BB[IB].x - BB[uB].x) / (BB[IB].y - BB[uB].y)] || (jB[nB] = gB[1]), MB(jB[nB]++, z … [truncated]
-                 MB(zB += QB, NB = Math.max(NB, zB))
-               }
-               return NB
-             }, console.log(BB[gB[21]]))
-           }
-           HB(107) + "8" in SB && DB();
-           const FB = NB()[HB(108) + "t"](BB[gB[8]][gB[62]], BB[gB[4]][gB[67]]);
-           if (FB > gB[41] * zB[HB(gB[68]) + HB(gB[69]) + gB[54]] * zB[HB(gB[68]) + HB(gB[69]) + gB[54]]) {
+           const RB = vB()[MB(137) + dB[71]](BB[dB[39]][dB[52]], BB[dB[4]][dB[61]]);
+           if (RB > dB[10] * ZB[PB(dB[62]) + PB(dB[63]) + dB[59]] * ZB[PB(dB[62]) + PB(dB[63]) + dB[59]]) {
```

#### 1707. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13213-L13215` → after: `L12290-L12292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12290-L12292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12290-L12292) · [Before (L13213-L13215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13213-L13215)

```diff
-               for (MB(BB[gB[13]] = gB[2], BB[gB[73]] = '1+)/%x9_:$(2&|wfYEHW`"NL@vXDR[Q]l*Se7#b?J~V0M}td,{6<s5ICa;kPGgc8yjnhUpurTqzBAZK.4i^m=o3!>FO', BB[gB[70]] = "" + (BB[gB[1]] || ""), BB[-gB[46]] = BB[gB[70]].length, BB[-gB[74]] = [], BB[gB[54]] = gB[1], BB[gB[32]] = gB[1], BB … [truncated]
-                 if (BB[gB[72]] = BB[gB[73]].indexOf(BB[gB[70]][BB[gB[71]]]), BB[gB[72]] !== -gB[2])
-                   if (BB[gB[7]] < gB[1]) BB[gB[7]] = BB[gB[72]];
+               for (wB(BB[dB[13]] = dB[2], BB[dB[5]] = '/3{O^4nrd*z@heCW}lI9fTauKDb,>Ls?26<;H5(1jXckYv.A)U&~R_NwiVZ8gy+"P#BJ:t7|%o[q]Gp0SxQE$=m`!FM', BB[-dB[64]] = "" + (BB[dB[1]] || ""), BB[dB[4]] = BB[-dB[64]].length, BB[dB[51]] = [], BB[-dB[66]] = dB[1], BB[dB[40]] = dB[1], BB[ … [truncated]
+                 if (BB[-dB[65]] = BB[dB[5]].indexOf(BB[-dB[64]][BB[dB[11]]]), BB[-dB[65]] !== -dB[2])
+                   if (BB[dB[7]] < dB[1]) BB[dB[7]] = BB[-dB[65]];
```

#### 1708. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13217` → after: `L12294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12294) · [Before (L13217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13217)

```diff
-                     MB(BB[gB[7]] += BB[gB[72]] * gB[30], BB[gB[54]] |= BB[gB[7]] << BB[gB[32]], BB[gB[32]] += (BB[gB[7]] & gB[33]) > gB[34] ? gB[35] : gB[36]);
+                     wB(BB[dB[7]] += BB[-dB[65]] * dB[30], BB[-dB[66]] |= BB[dB[7]] << BB[dB[40]], BB[dB[40]] += (BB[dB[7]] & dB[33]) > dB[34] ? dB[35] : dB[36]);
```

#### 1709. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13219-L13220` → after: `L12296-L12297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12296-L12297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12296-L12297) · [Before (L13219-L13220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13219-L13220)

```diff
-                       MB(BB[-gB[74]].push(BB[gB[54]] & gB[12]), BB[gB[54]] >>= gB[11], BB[gB[32]] -= gB[11])
-                     } while (BB[gB[32]] > gB[7]);
+                       wB(BB[dB[51]].push(BB[-dB[66]] & dB[12]), BB[-dB[66]] >>= dB[11], BB[dB[40]] -= dB[11])
+                     } while (BB[dB[40]] > dB[7]);
```

#### 1710. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13222` → after: `L12299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12299) · [Before (L13222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13222)

```diff
-                   } return BB[gB[7]] > -gB[2] && BB[-gB[74]].push((BB[gB[54]] | BB[gB[7]] << BB[gB[32]]) & gB[12]), tB(BB[-gB[74]])
+                   } return BB[dB[7]] > -dB[2] && BB[dB[51]].push((BB[-dB[66]] | BB[dB[7]] << BB[dB[40]]) & dB[12]), QB(BB[dB[51]])
```

#### 1711. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13225-L13226` → after: `L12302-L12338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12302-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12302-L12338) · [Before (L13225-L13226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13225-L13226)

```diff
-             function VB(BB) {
-               return typeof GB[BB] === gB[18] ? GB[BB] = YB(LB[BB]) : GB[BB]
+             function mB(...BB) {
+               return BB[dB[13]] = dB[2], typeof UB[BB[dB[1]]] === dB[18] ? UB[BB[dB[1]]] = rB(WB[BB[dB[1]]]) : UB[BB[dB[1]]]
+             }
+ 
+             function XB() {
+               function BB(...BB) {
+                 return BB[dB[13]] = dB[2], typeof UB[BB[dB[1]]] === dB[18] ? UB[BB[dB[1]]] = function(BB) {
+                   var IB, ZB, TB, JB, oB, GB, vB;
+                   for (wB(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = dB[1], oB = dB[1], GB = -dB[2]), vB = dB[1]; vB < ZB; vB++) {
+                     var kB = 'BsNMSc.OqyWV7(dZ+gzKGXTj6xeAm#wvLFfU*&/Pn)4~$o=%C2!Q[ip^l_I{<>8a?EY]ukD:|9`H"rtR1,bh@503};J'.indexOf(IB[vB]);
+                     if (kB !== -dB[2])
+                       if (GB < dB[1]) GB = kB;
+                       else {
+                         wB(GB += kB * dB[30], JB |= GB << oB, oB += (GB & dB[33]) > dB[34] ? dB[35] : dB[36]);
+                         do {
+                           wB(TB.push(JB & dB[12]), JB >>= dB[11], oB -= dB[11])
+ ... (21 more added lines; see GitHub link above)
```

#### 1712. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13228` → after: `L12340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12340) · [Before (L13228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13228)

```diff
-             MB(BB[gB[4]][VB(gB[119])] = gB[1], BB[gB[4]][gB[75]] = Math[VB(112)](FB))
+             mB(140) in sB && XB(), wB(BB[dB[4]][mB(143)] = dB[1], BB[dB[4]][dB[67]] = Math[mB(dB[65])](RB))
```

#### 1713. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13232` → after: `L12344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12344) · [Before (L13232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13232)

```diff
-       if (BB[gB[28]] = gB[2], BB[gB[4]][gB[75]] > gB[1]) {
+       if (BB[dB[5]] = dB[2], BB[dB[4]][dB[67]] > dB[1]) {
```

#### 1714. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13234-L13236` → after: `L12346-L12348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12346-L12348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12346-L12348) · [Before (L13234-L13236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13234-L13236)

```diff
-           for (MB(BB[gB[13]] = gB[2], BB[-gB[76]] = 'RwsWLv;0ZS3ADP9eIT.#hk,Nr)g~6p<^1EUBltod:5y&Qa`}*VJ2cuX|mjF({xfM=_]HOYK4i/n8G?$q7>b[!+z"@%C', BB[gB[15]] = "" + (BB[gB[1]] || ""), BB[gB[4]] = BB[gB[15]].length, BB[gB[10]] = [], BB[gB[54]] = gB[1], BB[gB[32]] = gB[1], BB[gB[7] … [truncated]
-             if (BB[-gB[77]] = BB[-gB[76]].indexOf(BB[gB[15]][BB[gB[11]]]), BB[-gB[77]] !== -gB[2])
-               if (BB[gB[7]] < gB[1]) BB[gB[7]] = BB[-gB[77]];
+           for (wB(BB[dB[13]] = dB[2], BB[dB[2]] = '5TLADBQEPlZJKSnFgiNmH[&jxXIvM<^#{tGf*k6Wh83UYV:1;b]Cp_o/O".c$de(`+2zRa>?=}q!s|yr)uw,%97@40~', BB[-dB[68]] = "" + (BB[dB[1]] || ""), BB[dB[4]] = BB[-dB[68]].length, BB[-dB[69]] = [], BB[dB[53]] = dB[1], BB[dB[70]] = dB[1], BB[dB[7 … [truncated]
+             if (BB[dB[38]] = BB[dB[2]].indexOf(BB[-dB[68]][BB[dB[11]]]), BB[dB[38]] !== -dB[2])
+               if (BB[dB[7]] < dB[1]) BB[dB[7]] = BB[dB[38]];
```

#### 1715. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13238` → after: `L12350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12350) · [Before (L13238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13238)

```diff
-                 MB(BB[gB[7]] += BB[-gB[77]] * gB[30], BB[gB[54]] |= BB[gB[7]] << BB[gB[32]], BB[gB[32]] += (BB[gB[7]] & gB[33]) > gB[34] ? gB[35] : gB[36]);
+                 wB(BB[dB[7]] += BB[dB[38]] * dB[30], BB[dB[53]] |= BB[dB[7]] << BB[dB[70]], BB[dB[70]] += (BB[dB[7]] & dB[33]) > dB[34] ? dB[35] : dB[36]);
```

#### 1716. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13240-L13241` → after: `L12352-L12353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12352-L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12352-L12353) · [Before (L13240-L13241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13240-L13241)

```diff
-                   MB(BB[gB[10]].push(BB[gB[54]] & gB[12]), BB[gB[54]] >>= gB[11], BB[gB[32]] -= gB[11])
-                 } while (BB[gB[32]] > gB[7]);
+                   wB(BB[-dB[69]].push(BB[dB[53]] & dB[12]), BB[dB[53]] >>= dB[11], BB[dB[70]] -= dB[11])
+                 } while (BB[dB[70]] > dB[7]);
```

#### 1717. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13243` → after: `L12355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12355) · [Before (L13243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13243)

```diff
-               } return BB[gB[7]] > -gB[2] && BB[gB[10]].push((BB[gB[54]] | BB[gB[7]] << BB[gB[32]]) & gB[12]), tB(BB[gB[10]])
+               } return BB[dB[7]] > -dB[2] && BB[-dB[69]].push((BB[dB[53]] | BB[dB[7]] << BB[dB[70]]) & dB[12]), QB(BB[-dB[69]])
```

#### 1718. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L13250-L13290` → after: `L12362-L12388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R12362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L12362-L12388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/77.js#L12362-L12388) · [Before (L13250-L13290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/77.js#L13250-L13290)

```diff
-         function ZB() {
-           module.exports = async (BB = () => {
-             throw new Error(XB(114))
-           }) => {
-             function jB(...BB) {
-               return BB[gB[13]] = gB[2], typeof GB[BB[gB[1]]] === gB[18] ? GB[BB[gB[1]]] = function(...BB) {
-                 for (MB(BB[gB[13]] = gB[2], BB[gB[78]] = '[ZaSeAKFRgJxb~hcjw7i4vPBIOUMly|8Y+?knu.@V]$/{(zQGt")d`CLo;r0!%<>XNfEp9D5sW23*Hm1#:},T_^q6&=', BB[gB[21]] = "" + (BB[gB[1]] || ""), BB[gB[0]] = BB[gB[21]].length, BB[gB[41]] = [], BB[gB[8]] = gB[1], BB[gB[9]] = gB[1], BB[-g … [truncated]
-                   if (BB[gB[28]] = BB[gB[78]].indexOf(BB[gB[21]][BB[gB[49]]]), BB[gB[28]] !== -gB[2])
-                     if (BB[-gB[79]] < gB[1]) BB[-gB[79]] = BB[gB[28]];
-                     else {
-                       MB(BB[-gB[79]] += BB[gB[28]] * gB[30], BB[gB[8]] |= BB[-gB[79]] << BB[gB[9]], BB[gB[9]] += (BB[-gB[79]] & gB[33]) > gB[34] ? gB[35] : gB[36]);
-                       do {
-                         MB(BB[gB[41]].push(BB[gB[8]] & gB[12]), BB[gB[8]] >>= gB[11], BB[gB[9]] -= gB[11])
-                       } while (BB[gB[9]] > gB[7]);
-                       BB[-gB[79]] = -gB[2]
-                     } return BB[-gB[79]] > -gB[2] && BB[gB[41]].push((BB[gB[8]] | BB[-gB[79]] << BB[gB[9]]) & gB[12]), tB(BB[gB[41]])
- ... (25 more removed lines; see GitHub link above)
+         function uB(...BB) {
+           wB(BB[dB[13]] = dB[1], BB[dB[75]] = function(...BB) {
+             if (wB(BB[dB[13]] = dB[2], BB[dB[2]] = BB[dB[1]].length), BB[dB[2]] < dB[37]) return dB[1];
+             if (wB(BB[dB[37]] = Math.max(...BB[dB[1]]), BB[dB[15]] = Math.min(...BB[dB[1]])), BB[dB[37]] === BB[dB[15]]) return dB[1];
+             for (wB(BB[dB[10]] = Array(BB[dB[2]] - dB[2]).fill(Number.MAX_SAFE_INTEGER), BB[dB[39]] = Array(BB[dB[2]] - dB[2]).fill(Number.MIN_SAFE_INTEGER), BB[dB[40]] = Math.ceil((BB[dB[37]] - BB[dB[15]]) / (BB[dB[2]] - dB[2])), BB[dB[45]] = dB[1]), BB[dB[72]] = dB[1]; BB[dB[72 … [truncated]
+             for (wB(BB[dB[73]] = Number.MIN_SAFE_INTEGER, BB[dB[49]] = BB[dB[15]]), BB[dB[74]] = dB[1]; BB[dB[74]] < BB[dB[2]] - dB[2]; BB[dB[74]]++) BB[dB[10]][BB[dB[74]]] === Number.MAX_SAFE_INTEGER && BB[dB[39]][BB[dB[74]]] === Number.MIN_SAFE_INTEGER || wB(BB[dB[73]] = Math.m … [truncated]
+             return BB[dB[73]] = Math.max(BB[dB[73]], BB[dB[37]] - BB[dB[49]]), BB[dB[73]]
+           }, console.log(BB[dB[75]]))
+         }
+         IB(145) + dB[71] in sB && uB(), BB[dB[10]][IB(dB[76])] < dB[1] && (BB[dB[5]] = dB[4]), BB[dB[4]][dB[67]] -= ZB[eB(147) + eB(148) + eB(dB[22]) + eB(150) + "ck"]
+       }
+       const TB = ZB[IB(151) + dB[77]] + BB[dB[4]][IB(152)];
+       wB(BB[dB[14]] = vB()[IB(153)](BB[dB[4]][dB[61]]) + BB[dB[10]][IB(dB[76])] * TB * ZB[IB(154)] * BB[dB[5]], BB[dB[14]] = NB[dB[59]][IB(155)](BB[dB[14]], ZB[IB(156) + dB[77]], TB), BB[dB[4]][IB(dB[29])]++);
+       const oB = BB[dB[7]] / dB[78],
+         GB = gB;
+       if (wB(vB()[IB(158)](GB, BB[dB[10]][IB(159)]), vB()[IB(dB[87]) + IB(dB[88])](GB, GB), vB()[IB(dB[49])](GB, GB, BB[dB[14]]), BB[dB[74]] = dB[2]), BB[dB[4]][IB(dB[29])] < ZB[IB(dB[41]) + IB(dB[27]) + IB(dB[89])]) {
+ ... (11 more added lines; see GitHub link above)
```
