# Changed — Bundle Modifications Report (Part 094 / 154)

- **Updated at**: `2026-11-28T13:51 JST`
- **Part**: `94 / 154` (**394** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 093](part-093.md) · [Part 095 →](part-095.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (fl4vv.bd3c59ce → yteou.5361c997 · continued)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (4853 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 1422. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11049` → after: `L11186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11186) · [Before (L11049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11049)

```diff
-           }).mirror, this.bulletBlockedBillboardPlane = (0, VS.p)(rr.Ox, "bulletBlockedBillboardPlane", (0, iS.h)({
+           }).mirror, this.bulletBlockedBillboardPlane = (0, jO.p)(dd.gt, "bulletBlockedBillboardPlane", (0, DO.j)({
```

#### 1423. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11052` → after: `L11189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11189) · [Before (L11052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11052)

```diff
-           })), this.bulletBlockedBillboardPlane.material = this.bulletBlockedBillboardMat, this.bulletBlockedBillboardPlane.VK(!1), rr.Ox.Sh(this.bulletBlockedBillboardPlane, !1), this.ticksSinceAttackBlockedBillboardUpdate = 0
+           })), this.bulletBlockedBillboardPlane.material = this.bulletBlockedBillboardMat, this.bulletBlockedBillboardPlane.rY(!1), dd.gt.Fy(this.bulletBlockedBillboardPlane, !1), this.ticksSinceAttackBlockedBillboardUpdate = 0
```

#### 1424. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11058-L11059` → after: `L11195-L11196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11195-L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11195-L11196) · [Before (L11058-L11059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11058-L11059)

```diff
-         super.selected(rr), this.breakingItem.reset(), this.breakingItem.selected(rr), this.gunTypeObj = rr, this.gunStats = new gS(this.gm, rr, this.heldItemState.XM), this.heldItemState.XM === this.gm.fC && this.preloadSounds(), this.firing = !1, this.burstRemaining = 0, this.b … [truncated]
-         const Qr = Jr.c.get("isTouchScreen"),
+         super.selected(dd), this.breakingItem.reset(), this.breakingItem.selected(dd), this.gunTypeObj = dd, this.gunStats = new GO(this.zo, dd, this.heldItemState.QG), this.heldItemState.QG === this.zo.YV && this.preloadSounds(), this.firing = !1, this.burstRemaining = 0, this.b … [truncated]
+         const md = kd.e.get("isTouchScreen"),
```

#### 1425. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11061` → after: `L11198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11198) · [Before (L11061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11061)

```diff
-           Wr = (null !== (Sr = this.lastShots.get(this.gunTypeObj.name)) && void 0 !== Sr ? Sr : -1 / 0) + this.gunStats.getIntervalMs(Qr) / 1.2 + TS,
+           Fd = (null !== (Od = this.lastShots.get(this.gunTypeObj.name)) && void 0 !== Od ? Od : -1 / 0) + this.gunStats.getIntervalMs(md) / 1.2 + UO,
```

#### 1426. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11063` → after: `L11200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11200) · [Before (L11063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11063)

```diff
-         this.fireSchedule = new OS(vS), this.pressedAt = 0, this.wasDueLastTick = !1, this.fireSchedule.arm(ar), this.soundLastRoundFired = Zr.soundLastRoundFired, this.aimChangeTime = 0, this.reloadStartTime = 0, this.firstPersonGunMeshScaling = .055, this.smallMuzzleFlashScale  … [truncated]
+         this.fireSchedule = new BO(xO), this.pressedAt = 0, this.wasDueLastTick = !1, this.fireSchedule.arm(Rd), this.soundLastRoundFired = Wd.soundLastRoundFired, this.aimChangeTime = 0, this.reloadStartTime = 0, this.firstPersonGunMeshScaling = .055, this.smallMuzzleFlashScale  … [truncated]
```

#### 1427. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11068` → after: `L11205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11205) · [Before (L11068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11068)

```diff
-         })), this.cachedZoomLevel = this.gm.camera.MJ, this.inaccuracyCalculator = null, this.heldItemState.XM === this.gm.fC && (this.inaccuracyCalculator = new kS(this.gm, rr, this.gunStats), this.gm.camera.iJ.U_(this.gunStats.getStat("kickbackDecreaseRate"))), this.lastGunShot … [truncated]
+         })), this.cachedZoomLevel = this.zo.camera.rM, this.inaccuracyCalculator = null, this.heldItemState.QG === this.zo.YV && (this.inaccuracyCalculator = new zO(this.zo, dd, this.gunStats), this.zo.camera.w6.Y1(this.gunStats.getStat("kickbackDecreaseRate"))), this.lastGunShot … [truncated]
```

#### 1428. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11072` → after: `L11209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11209) · [Before (L11072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11072)

```diff
-         this.muzzleParticleEmitter && !this.muzzleParticleEmitter.Dv() || (null === (rr = this.muzzleParticleSystem) || void 0 === rr || rr.dispose(), this.createMuzzleEmitter())
+         this.muzzleParticleEmitter && !this.muzzleParticleEmitter.yJ() || (null === (dd = this.muzzleParticleSystem) || void 0 === dd || dd.dispose(), this.createMuzzleEmitter())
```

#### 1429. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11112` → after: `L11249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11249) · [Before (L11112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11112)

```diff
-           blendMode: LS.e.Standard
+           blendMode: SO.g.Standard
```

#### 1430. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11118-L11119` → after: `L11255-L11256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11255-L11256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11255-L11256) · [Before (L11118-L11119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11118-L11119)

```diff
-         (super.reset(), this.aiming && this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel), this.firing = !1, this.burstRemaining = 0, this.burstSchedule = new OS(vS), this.aiming = !1, this.attemptAiming = !1, this.fireSchedule = new OS(vS), this.p … [truncated]
-         mr.i.unsubscribe(this.networkedPlayerShotSub), null === (rr = this.bulletBlockedBillboardPlane) || void 0 === rr || rr.VK(!1);
+         (super.reset(), this.aiming && this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel), this.firing = !1, this.burstRemaining = 0, this.burstSchedule = new BO(xO), this.aiming = !1, this.attemptAiming = !1, this.fireSchedule = new BO(xO), this.p … [truncated]
+         od.j.unsubscribe(this.networkedPlayerShotSub), null === (dd = this.bulletBlockedBillboardPlane) || void 0 === dd || dd.rY(!1);
```

#### 1431. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11128` → after: `L11265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11265) · [Before (L11128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11128)

```diff
-         null !== rr && this.muzzleParticleEmitter && this.gm.Ox.bC.detachTransformNodeIfFound(this.muzzleParticleEmitter, rr, 0), super.releaseThirdPersonThinObject()
+         null !== dd && this.muzzleParticleEmitter && this.zo.gt.HA.detachTransformNodeIfFound(this.muzzleParticleEmitter, dd, 0), super.releaseThirdPersonThinObject()
```

#### 1432. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11134` → after: `L11271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11271) · [Before (L11134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11134)

```diff
-       vZr() {
+       KFd() {
```

#### 1433. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11140-L11141` → after: `L11277-L11278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11277-L11278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11277-L11278) · [Before (L11140-L11141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11140-L11141)

```diff
-       yZr() {
-         return this.breakingItem.yZr(), this.firing = !1, {
+       FFd() {
+         return this.breakingItem.FFd(), this.firing = !1, {
```

#### 1434. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11146` → after: `L11283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11283) · [Before (L11146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11146)

```diff
-       bpr() {
+       jQd() {
```

#### 1435. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11148` → after: `L11285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11285) · [Before (L11148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11148)

```diff
-         return rr.tookAction ? rr : (this.secondaryHeld = !0, this.updateAttemptAiming(), {
+         return dd.tookAction ? dd : (this.secondaryHeld = !0, this.updateAttemptAiming(), {
```

#### 1436. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11153` → after: `L11290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11290) · [Before (L11153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11153)

```diff
-       KZr() {
+       WFd() {
```

#### 1437. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11174-L11175` → after: `L11311-L11312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11311-L11312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11311-L11312) · [Before (L11174-L11175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11174-L11175)

```diff
-       BZr() {
-         return this.breakingItem.BZr(), !0
+       RFd() {
+         return this.breakingItem.RFd(), !0
```

#### 1438. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11181` → after: `L11318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11318) · [Before (L11181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11181)

```diff
-         const Qr = Jr.c.get("isTouchScreen");
+         const md = kd.e.get("isTouchScreen");
```

#### 1439. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11200` → after: `L11337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11337) · [Before (L11200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11200)

```diff
-         Zr && this.lastShots.set(this.gunTypeObj.name, Sr), !this.firing || this.gunStats.getStat("autoFireWithMouse") || Qr || (this.firing = !1), this.heldItemState.XM === this.gm.fC && (0 !== this.gm.camera.GJ ? this.updateAttackBlockedBillboard() : this.bulletBlockedBillboard … [truncated]
+         Wd && this.lastShots.set(this.gunTypeObj.name, Od), !this.firing || this.gunStats.getStat("autoFireWithMouse") || md || (this.firing = !1), this.heldItemState.QG === this.zo.YV && (0 !== this.zo.camera.R7 ? this.updateAttackBlockedBillboard() : this.bulletBlockedBillboard … [truncated]
```

#### 1440. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11208` → after: `L11345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11345) · [Before (L11208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11208)

```diff
-         Zr > 0 ? "sniper" === Wr && qS.f.setMultiplierType("sniperScope", 1 / (1 + 5 * Zr)) : "sniper" === Wr && qS.f.removeMultiplier("sniperScope");
+         Wd > 0 ? "sniper" === Fd && AO.g.setMultiplierType("sniperScope", 1 / (1 + 5 * Wd)) : "sniper" === Fd && AO.g.removeMultiplier("sniperScope");
```

#### 1441. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11212` → after: `L11349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11349) · [Before (L11212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11212)

```diff
-           this.gm.Ox.yEr(this.mesh, !rr && this.heldItemState._visible)
+           this.zo.gt.Jvd(this.mesh, !dd && this.heldItemState._visible)
```

#### 1442. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11217` → after: `L11354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11354) · [Before (L11217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11217)

```diff
-         this.aimChangeTime = performance.now(), mr.i.Jp("aimingOverlay", this.gunStats.getStat("scopeType")), this.gm.YB.gQr().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !1), this.cachedZoomLevel = this.bloxd.client.cameraController.getZoomDistance(), this.bloxd.cl … [truncated]
+         this.aimChangeTime = performance.now(), od.j.lQ("aimingOverlay", this.gunStats.getStat("scopeType")), this.zo.qE.TWd().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !1), this.cachedZoomLevel = this.bloxd.client.cameraController.getZoomDistance(), this.bloxd.cl … [truncated]
```

#### 1443. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11220` → after: `L11357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11357) · [Before (L11220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11220)

```diff
-         this.aimChangeTime = performance.now(), mr.i.Jp("aimingOverlay", "none"), this.gm.YB.gQr().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !0), this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel)
+         this.aimChangeTime = performance.now(), od.j.lQ("aimingOverlay", "none"), this.zo.qE.TWd().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !0), this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel)
```

#### 1444. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11229` → after: `L11366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11366) · [Before (L11229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11229)

```diff
-         if (this.updateMuzzleFlashFromRenderTick(), !this.gm.Ox.ct) return;
+         if (this.updateMuzzleFlashFromRenderTick(), !this.zo.gt.lH) return;
```

#### 1445. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11231` → after: `L11368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11368) · [Before (L11231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11231)

```diff
-         null !== Sr && this.gm.Ox.bC.getActuallyVisible(Sr) && this._updateHeldMeshLighting()
+         null !== Od && this.zo.gt.HA.getActuallyVisible(Od) && this._updateHeldMeshLighting()
```

#### 1446. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11237` → after: `L11374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11374) · [Before (L11237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11237)

```diff
-         this.muzzleParticleEmitter && !(0, wS.c)(this.muzzleParticleEmitter) && null !== this.liveThirdPersonThinObjectId() && (this.muzzleParticleEmitter.position._isDirty = !0)
+         this.muzzleParticleEmitter && !(0, eO.g)(this.muzzleParticleEmitter) && null !== this.liveThirdPersonThinObjectId() && (this.muzzleParticleEmitter.position._isDirty = !0)
```

#### 1447. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11242` → after: `L11379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11379) · [Before (L11242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11242)

```diff
-       cpr() {
+       zQd() {
```

#### 1448. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11246` → after: `L11383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11383) · [Before (L11246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11246)

```diff
-           return this.mesh.Tx.set(rr, rr, rr), this.mesh.rotation.set(0, .5 * Math.PI, 0), this.mesh.parent = this.gm.Ox.camera, (0, zr.p)(this.mesh, 0, 0, 0), this.ensureMuzzleEmitter(), this.muzzleParticleEmitter.parent = this.mesh, this.placeMuzzleEmitter(rr, rr, rr), void thi … [truncated]
+           return this.mesh.Tt.set(dd, dd, dd), this.mesh.rotation.set(0, .5 * Math.PI, 0), this.mesh.parent = this.zo.gt.camera, (0, bd.q)(this.mesh, 0, 0, 0), this.ensureMuzzleEmitter(), this.muzzleParticleEmitter.parent = this.mesh, this.placeMuzzleEmitter(dd, dd, dd), void thi … [truncated]
```

#### 1449. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11248` → after: `L11385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11385) · [Before (L11248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11248)

```diff
-         this.gm.Ox.yEr(this.mesh, !1);
+         this.zo.gt.Jvd(this.mesh, !1);
```

#### 1450. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11252` → after: `L11389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11389) · [Before (L11252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11252)

```diff
-           return void(null !== rr && this.gm.Ox.bC.setVisibility(rr, !1))
+           return void(null !== dd && this.zo.gt.HA.setVisibility(dd, !1))
```

#### 1451. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11262` → after: `L11399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11399) · [Before (L11262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11262)

```diff
-         if ("arm" === rr) return void(0, Yr.g)(this.typeObj, Sr.itemOffset, this.thirdPersonPose);
+         if ("arm" === dd) return void(0, Td.f)(this.typeObj, Od.itemOffset, this.thirdPersonPose);
```

#### 1452. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11266` → after: `L11403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11403) · [Before (L11266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11266)

```diff
-           Tx: Ir
+           Tt: Kd
```

#### 1453. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11268` → after: `L11405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11405) · [Before (L11268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11268)

```diff
-         this.thirdPersonPose.usesQuaternion = !1, Ir.iH(JS);
+         this.thirdPersonPose.usesQuaternion = !1, Kd.Bx(kO);
```

#### 1454. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11270-L11272` → after: `L11407-L11409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11407-L11409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11407-L11409) · [Before (L11270-L11272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11270-L11272)

```diff
-           Er = oS.x + (null !== (Qr = null === fr || void 0 === fr ? void 0 : fr[0]) && void 0 !== Qr ? Qr : 0),
-           pr = oS.y + (null !== (Zr = null === fr || void 0 === fr ? void 0 : fr[1]) && void 0 !== Zr ? Zr : 0),
-           xr = oS.z + (null !== (Wr = null === fr || void 0 === fr ? void 0 : fr[2]) && void 0 !== Wr ? Wr : 0),
+           vd = CO.x + (null !== (md = null === hd || void 0 === hd ? void 0 : hd[0]) && void 0 !== md ? md : 0),
+           Qd = CO.y + (null !== (Wd = null === hd || void 0 === hd ? void 0 : hd[1]) && void 0 !== Wd ? Wd : 0),
+           td = CO.z + (null !== (Fd = null === hd || void 0 === hd ? void 0 : hd[2]) && void 0 !== Fd ? Fd : 0),
```

#### 1455. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11276-L11277` → after: `L11413-L11414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11413-L11414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11413-L11414) · [Before (L11276-L11277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11276-L11277)

```diff
-           hr.kU.TransformCoordinatesFromFloatsToRef(Er, pr, xr, rr, ar), jr.Hrr(bS.x + mr[0], bS.y + mr[1], bS.z + mr[2])
-         } else ar.Hrr(Er, pr, xr), jr.Hrr(bS.x, bS.y, bS.z)
+           yd.Cq.TransformCoordinatesFromFloatsToRef(vd, Qd, td, dd, Rd), Xd.KOd(ZO.x + od[0], ZO.y + od[1], ZO.z + od[2])
+         } else Rd.KOd(vd, Qd, td), Xd.KOd(ZO.x, ZO.y, ZO.z)
```

#### 1456. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11283` → after: `L11420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11420) · [Before (L11283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11283)

```diff
-         const Sr = this.gm.Ox.bC;
+         const Od = this.zo.gt.HA;
```

#### 1457. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11286` → after: `L11423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11423) · [Before (L11286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11286)

```diff
-           Tx: Qr
+           Tt: md
```

#### 1458. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11288` → after: `L11425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11425) · [Before (L11288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11288)

```diff
-         this.placeMuzzleEmitter(Qr.x, this.heldPoseScaleY(), Qr.z, AS.c)
+         this.placeMuzzleEmitter(md.x, this.heldPoseScaleY(), md.z, cO.e)
```

#### 1459. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11297` → after: `L11434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11434) · [Before (L11297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11297)

```diff
-         Wr.Tx.set(jr / Math.abs(rr), jr / Math.abs(Sr), jr / Math.abs(Qr))
+         Fd.Tt.set(Xd / Math.abs(dd), Xd / Math.abs(Od), Xd / Math.abs(md))
```

#### 1460. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11304` → after: `L11441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11441) · [Before (L11304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11304)

```diff
-         if (console.assert(this.heldItemState.XM === this.gm.fC, "fireBulletLocal should only be called for local player."), this.reloading) return !1;
+         if (console.assert(this.heldItemState.QG === this.zo.YV, "fireBulletLocal should only be called for local player."), this.reloading) return !1;
```

#### 1461. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11306` → after: `L11443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11443) · [Before (L11306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11306)

```diff
-         const Qr = this.gm.YB.fQr(this.gm.fC),
+         const md = this.zo.qE.Dmd(this.zo.YV),
```

#### 1462. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11308-L11309` → after: `L11445-L11446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11445-L11446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11445-L11446) · [Before (L11308-L11309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11308-L11309)

```diff
-           Wr = (0, Nr.c)().client.inventoryPrediction.predict(pS.c.shoot(Qr.getSelectedSlotIndex(), Zr.name)),
-           ar = null !== (Sr = this.gunStats.getStat("shotPelletCount")) && void 0 !== Sr ? Sr : 1;
+           Fd = (0, Nd.b)().client.inventoryPrediction.predict(oO.b.shoot(md.getSelectedSlotIndex(), Wd.name)),
+           Rd = null !== (Od = this.gunStats.getStat("shotPelletCount")) && void 0 !== Od ? Od : 1;
```

#### 1463. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11325` → after: `L11462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11462) · [Before (L11325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11325)

```diff
-               vj: xr,
+               JX: td,
```

#### 1464. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11330` → after: `L11467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11467) · [Before (L11330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11330)

```diff
-             er = null !== (Yr = KS.i.lifeformMeshToBodyPart[Nr]) && void 0 !== Yr ? Yr : mr;
+             Yd = null !== (Td = aO.i.lifeformMeshToBodyPart[Nd]) && void 0 !== Td ? Td : od;
```

#### 1465. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11332` → after: `L11469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11469) · [Before (L11332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11332)

```diff
-           const Kr = Zr === XS.b.HIT_ENTITY && (null === (nr = this.gm.xG[this.gm.fC][Wr]) || void 0 === nr ? void 0 : nr.canAttack) && !this.gm.xG[this.gm.fC][Wr]._invincible;
+           const gd = Wd === uO.b.HIT_ENTITY && (null === (pd = this.zo.sG[this.zo.YV][Fd]) || void 0 === pd ? void 0 : pd.canAttack) && !this.zo.sG[this.zo.YV][Fd]._invincible;
```

#### 1466. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11334-L11335` → after: `L11471-L11472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11471-L11472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11471-L11472) · [Before (L11334-L11335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11334-L11335)

```diff
-             vj: xr,
-             Oj: Ir,
+             JX: td,
+             UX: Kd,
```

#### 1467. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11337-L11338` → after: `L11474-L11475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11474-L11475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11474-L11475) · [Before (L11337-L11338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11337-L11338)

```diff
-               hQ: Wr,
-               Lj: er
+               qm: Fd,
+               xX: Yd
```

#### 1468. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11340-L11341` → after: `L11477-L11478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11477-L11478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11477-L11478) · [Before (L11340-L11341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11340-L11341)

```diff
-               hQ: null,
-               Lj: null
+               qm: null,
+               xX: null
```

#### 1469. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11344` → after: `L11481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11481) · [Before (L11344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11344)

```diff
-         }(0, Nr.c)().client.gameRecorder.recordBulletShot(this.heldItemState.XM, fr);
+         }(0, Nd.b)().client.gameRecorder.recordBulletShot(this.heldItemState.QG, hd);
```

#### 1470. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11346-L11350` → after: `L11483-L11487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11483-L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11483-L11487) · [Before (L11346-L11350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11346-L11350)

```diff
-           ej: Zr.name,
-           Kj: (0, Nr.c)().client.getMsgHandler().pZr.state.tickCounter,
-           yj: pr,
-           Bj: jr,
-           jj: Wr
+           YX: Wd.name,
+           gX: (0, Nd.b)().client.getMsgHandler().IWd.state.tickCounter,
+           wX: Qd,
+           aX: Xd,
+           XX: Fd
```

#### 1471. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11352` → after: `L11489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11489) · [Before (L11352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11352)

```diff
-         if ((0, Ir.sendColyMessage)(or.Jj, er), Ur) {
+         if ((0, Kd.sendColyMessage)(Cd.lj, Yd), qd) {
```

#### 1472. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11354-L11360` → after: `L11491-L11497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11491-L11497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11491-L11497) · [Before (L11354-L11360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11354-L11360)

```diff
-           const rr = this.gm.NK,
-             Sr = (0, Nr.c)().client,
-             Qr = null !== (Kr = null === (yr = Zr.attributes.customAttributes) || void 0 === yr ? void 0 : yr.enchantments) && void 0 !== Kr ? Kr : {},
-             Wr = Sr.getEffectLevel(this.gm.fC, "Damage"),
-             ar = Sr.getEffectLevel(this.gm.fC, "Rested Damage"),
-             Ir = null !== (Br = Qr.Damage) && void 0 !== Br ? Br : 0,
-             fr = null !== (Tr = Qr["Critical Damage"]) && void 0 !== Tr ? Tr : 0;
+           const dd = this.zo.EY,
+             Od = (0, Nd.b)().client,
+             md = null !== (gd = null === (wd = Wd.attributes.customAttributes) || void 0 === wd ? void 0 : wd.enchantments) && void 0 !== gd ? gd : {},
+             Fd = Od.getEffectLevel(this.zo.YV, "Damage"),
+             Rd = Od.getEffectLevel(this.zo.YV, "Rested Damage"),
+             Kd = null !== (Ed = md.Damage) && void 0 !== Ed ? Ed : 0,
+             hd = null !== (Jd = md["Critical Damage"]) && void 0 !== Jd ? Jd : 0;
```

#### 1473. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11362-L11363` → after: `L11499-L11500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11499-L11500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11499-L11500) · [Before (L11362-L11363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11362-L11363)

```diff
-               hQ: Zr,
-               Lj: pr
+               qm: Wd,
+               xX: Qd
```

#### 1474. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11367` → after: `L11504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11504) · [Before (L11367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11367)

```diff
-             const Qr = this.gm.xG[this.gm.fC][Zr];
+             const md = this.zo.sG[this.zo.YV][Wd];
```

#### 1475. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11372` → after: `L11509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11509) · [Before (L11372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11372)

```diff
-             Nr = (0, xr.p)(Nr, Wr, ar, Ir), "Head" === pr && fr > 0 && (Nr *= 1 + .08 * fr);
+             Nd = (0, td.j)(Nd, Fd, Rd, Kd), "Head" === Qd && hd > 0 && (Nd *= 1 + .08 * hd);
```

#### 1476. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11374` → after: `L11511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11511) · [Before (L11374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11374)

```diff
-               tr = (0, xr.O)(Qr._armourReductionSum, Qr._protectionEnchantSum, Sr.getEffectLevel(Zr, "Damage Reduction"), Sr.getEffectLevel(Zr, "Weakness"), Qr._receivingDamageMultiplier),
+               Hd = (0, td.J)(md._armourReductionSum, md._protectionEnchantSum, Od.getEffectLevel(Wd, "Damage Reduction"), Od.getEffectLevel(Wd, "Weakness"), md._receivingDamageMultiplier),
```

#### 1477. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11376` → after: `L11513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11513) · [Before (L11376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11376)

```diff
-             mr.i.Jp("shotPlayer", {
+             od.j.lQ("shotPlayer", {
```

#### 1478. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11383-L11384` → after: `L11520-L11521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11520-L11521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11520-L11521) · [Before (L11383-L11384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11383-L11384)

```diff
-           mr.i.Jp("localGunHitmarker", {
-             GS: tr
+           od.j.lQ("localGunHitmarker", {
+             rO: Hd
```

#### 1479. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11387` → after: `L11524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11524) · [Before (L11387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11387)

```diff
-         mr.i.Jp("localPlayerNewShotsLeft", Zr.attributes.customAttributes.shotsLeft);
+         od.j.lQ("localPlayerNewShotsLeft", Wd.attributes.customAttributes.shotsLeft);
```

#### 1480. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11393` → after: `L11530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11530) · [Before (L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11393)

```diff
-         return this.inaccuracyCalculator.shot(rr), this.gm.camera.iJ.add(Xr), 0 === this.getShotsLeftCount() && this.reload(rr), !0
+         return this.inaccuracyCalculator.shot(dd), this.zo.camera.w6.add(sd), 0 === this.getShotsLeftCount() && this.reload(dd), !0
```

#### 1481. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11405-L11406` → after: `L11542-L11543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11542-L11543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11542-L11543) · [Before (L11405-L11406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11405-L11406)

```diff
-           YB: Ir
-         } = this.gm, fr = this.bloxd.qD(this.heldItemState.XM), Er = this.pickActionHelper.pickWeaponRaycast(rr, Sr, this.bulletReachDistance, {
+           qE: Kd
+         } = this.zo, hd = this.bloxd.T_(this.heldItemState.QG), vd = this.pickActionHelper.pickWeaponRaycast(dd, Od, this.bulletReachDistance, {
```

#### 1482. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11412` → after: `L11549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11549) · [Before (L11412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11412)

```diff
-           sA: Nr,
+           nD: Nd,
```

#### 1483. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11414-L11415` → after: `L11551-L11552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11551-L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11551-L11552) · [Before (L11414-L11415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11414-L11415)

```diff
-         } = Er, tr = null !== (ar = Er.globalRayOrigin) && void 0 !== ar ? ar : Wr().copy(cS, this.bloxd.getLifeformEyePos(this.heldItemState.XM, !1)), hr = null !== (jr = Er.distanceTravelled) && void 0 !== jr ? jr : this.bulletReachDistance, zr = Wr().fh(FS, tr, Sr, 2.5 * fr),  … [truncated]
-         Ir.gM(Yr, "hidingMeshManager", {
+         } = vd, Hd = null !== (Rd = vd.globalRayOrigin) && void 0 !== Rd ? Rd : Fd().copy(IO, this.bloxd.getLifeformEyePos(this.heldItemState.QG, !1)), yd = null !== (Xd = vd.distanceTravelled) && void 0 !== Xd ? Xd : this.bulletReachDistance, bd = Fd().gq(lO, Hd, Od, 2.5 * hd),  … [truncated]
+         Kd.yG(Td, "hidingMeshManager", {
```

#### 1484. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11418` → after: `L11555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11555) · [Before (L11418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11418)

```diff
-             Ir.gM(Yr, Ir.names.mesh, {
+             Kd.yG(Td, Kd.names.mesh, {
```

#### 1485. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11420` → after: `L11557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11557) · [Before (L11420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11420)

```diff
-               Bfr: !0
+               Uhd: !0
```

#### 1486. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11424` → after: `L11561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11561) · [Before (L11424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11424)

```diff
-             Ir.bM(Yr, Ir.names.mesh)
+             Kd.pG(Td, Kd.names.mesh)
```

#### 1487. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11429-L11430` → after: `L11566-L11567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11566-L11567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11566-L11567) · [Before (L11429-L11430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11429-L11430)

```diff
-           Fp: "bullet"
-         }), Ir.gM(Yr, "bullet", {
+           eQ: "bullet"
+         }), Kd.yG(Td, "bullet", {
```

#### 1488. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11445` → after: `L11582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11582) · [Before (L11445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11445)

```diff
-           vj: er,
+           JX: Yd,
```

#### 1489. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11450` → after: `L11587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11587) · [Before (L11450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11450)

```diff
-         return "head" === this.gm.NK.gunshotOrigin ? "head" : "default"
+         return "head" === this.zo.EY.gunshotOrigin ? "head" : "default"
```

#### 1490. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11453` → after: `L11590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11590) · [Before (L11453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11453)

```diff
-         return this.heldItemState.XM === this.gm.fC && !0 === Jr.c.get("clientEscMenuOptions").showWeaponRaycasts
+         return this.heldItemState.QG === this.zo.YV && !0 === kd.e.get("clientEscMenuOptions").showWeaponRaycasts
```

#### 1491. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11457` → after: `L11594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11594) · [Before (L11457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11457)

```diff
-         const Qr = this.heldItemState.XM === this.gm.fC,
+         const md = this.heldItemState.QG === this.zo.YV,
```

#### 1492. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11461` → after: `L11598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11598) · [Before (L11461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11461)

```diff
-           if (Zr && null === this.gm.YB.fQr(this.gm.fC).findItem("Ammo")) return
+           if (Wd && null === this.zo.qE.Dmd(this.zo.YV).findItem("Ammo")) return
```

#### 1493. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11465-L11467` → after: `L11602-L11604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11602-L11604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11602-L11604) · [Before (L11465-L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11465-L11467)

```diff
-           const rr = (0, Nr.c)().client.inventoryPrediction.predict(Zr ? pS.c.takeFirst("Ammo") : null);
-           (0, Ir.sendColyMessage)(or.nj, {
-             jj: rr
+           const dd = (0, Nd.b)().client.inventoryPrediction.predict(Wd ? oO.b.takeFirst("Ammo") : null);
+           (0, Kd.sendColyMessage)(Cd.Ni, {
+             XX: dd
```

#### 1494. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11471` → after: `L11608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11608) · [Before (L11471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11471)

```diff
-         this.heldItemState.XM === this.gm.fC && mr.i.Jp("middleScreenBarInitiate", {
+         this.heldItemState.QG === this.zo.YV && od.j.lQ("middleScreenBarInitiate", {
```

#### 1495. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11473` → after: `L11610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11610) · [Before (L11473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11473)

```diff
-           ha: !0,
+           qR: !0,
```

#### 1496. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11476` → after: `L11613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11613) · [Before (L11476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11476)

```diff
-           this.reloading = !1, this.numBulletsReloading = 0, this.reloadTimeouts = [], this.heldItemState.XM === this.gm.fC && (this.setShotsLeft(this.gunStats.getStat("clipSize")), mr.i.Jp("localPlayerNewShotsLeft", this.getShotsLeftCount()))
+           this.reloading = !1, this.numBulletsReloading = 0, this.reloadTimeouts = [], this.heldItemState.QG === this.zo.YV && (this.setShotsLeft(this.gunStats.getStat("clipSize")), od.j.lQ("localPlayerNewShotsLeft", this.getShotsLeftCount()))
```

#### 1497. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11478` → after: `L11615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11615) · [Before (L11478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11478)

```diff
-         const ar = this.heldItemState.XM === this.gm.fC ? lS.e.firstPersonReload : lS.e.thirdPersonReload,
+         const Rd = this.heldItemState.QG === this.zo.YV ? sO.f.firstPersonReload : sO.f.thirdPersonReload,
```

#### 1498. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11480-L11481` → after: `L11617-L11618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11617-L11618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11617-L11618) · [Before (L11480-L11481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11480-L11481)

```diff
-             const Sr = (0, PS.c)(rr);
-             void 0 !== Sr && NS.b.play(Sr, ar, this.heldItemState.XM, void 0, void 0)
+             const Od = (0, VO.f)(dd);
+             void 0 !== Od && HO.d.play(Od, Rd, this.heldItemState.QG, void 0, void 0)
```

#### 1499. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11488` → after: `L11625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11625) · [Before (L11488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11488)

```diff
-           jr(`${fr}_load_bullet_`);
+           Xd(`${hd}_load_bullet_`);
```

#### 1500. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11490` → after: `L11627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11627) · [Before (L11490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11490)

```diff
-             jr(`${fr}_load_bullet_`)
+             Xd(`${hd}_load_bullet_`)
```

#### 1501. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11493` → after: `L11630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11630) · [Before (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11493)

```diff
-             jr(`${fr}_cock_`)
+             Xd(`${hd}_cock_`)
```

#### 1502. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11497-L11498` → after: `L11634-L11635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11634-L11635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11634-L11635) · [Before (L11497-L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11497-L11498)

```diff
-           jr(`${fr}_magazine_unload_`), this.reloadTimeouts.push(setTimeout((() => {
-             jr(`${fr}_magazine_load_`)
+           Xd(`${hd}_magazine_unload_`), this.reloadTimeouts.push(setTimeout((() => {
+             Xd(`${hd}_magazine_load_`)
```

#### 1503. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11500` → after: `L11637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11637) · [Before (L11500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11500)

```diff
-             jr(`${fr}_cock_`)
+             Xd(`${hd}_cock_`)
```

#### 1504. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11518` → after: `L11655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11655) · [Before (L11518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11518)

```diff
-           return Sr < Qr ? Sr / Qr : Sr > rr - Qr ? 1 - (Sr - (rr - Qr)) / Qr : 1
+           return Od < md ? Od / md : Od > dd - md ? 1 - (Od - (dd - md)) / md : 1
```

#### 1505. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11526-L11527` → after: `L11663-L11664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11663-L11664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11663-L11664) · [Before (L11526-L11527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11526-L11527)

```diff
-         const Sr = this.gm.YB.fQr(this.heldItemState.XM).getItemAtSelectedSlot().attributes.customAttributes;
-         Sr.shotsLeft = rr, this.gm.YB.fQr(this.heldItemState.XM).getItemAtSelectedSlot().attributes.customAttributes = Sr
+         const Od = this.zo.qE.Dmd(this.heldItemState.QG).getItemAtSelectedSlot().attributes.customAttributes;
+         Od.shotsLeft = dd, this.zo.qE.Dmd(this.heldItemState.QG).getItemAtSelectedSlot().attributes.customAttributes = Od
```

#### 1506. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11531` → after: `L11668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11668) · [Before (L11531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11531)

```diff
-         return null === (rr = this.gm.YB.fQr(this.heldItemState.XM).getItemAtSelectedSlot().attributes.customAttributes) || void 0 === rr ? void 0 : rr.shotsLeft
+         return null === (dd = this.zo.qE.Dmd(this.heldItemState.QG).getItemAtSelectedSlot().attributes.customAttributes) || void 0 === dd ? void 0 : dd.shotsLeft
```

#### 1507. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11542-L11543` → after: `L11679-L11680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11679-L11680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11679-L11680) · [Before (L11542-L11543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11542-L11543)

```diff
-         this.gm.dD([rr, Sr, Qr], Zr);
-         const Wr = this.gm.YB.add(Zr, .1, .1, this.gunTypeObj.getBulletCasingMesh(), null, !0),
+         this.zo.E_([dd, Od, md], Wd);
+         const Fd = this.zo.qE.add(Wd, .1, .1, this.gunTypeObj.getBulletCasingMesh(), null, !0),
```

#### 1508. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11547-L11548` → after: `L11684-L11685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11684-L11685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11684-L11685) · [Before (L11547-L11548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11547-L11548)

```diff
-         Ir = this.aimsAsLocalPlayer() ? Fr.e.getAimHeading(this.gm) : this.gm.YB.jQr(this.heldItemState.XM).heading, this.gm.YB.cV(Wr).applyImpulse([Math.cos(Ir) * jr, ar, -Math.sin(Ir) * jr]), setTimeout((() => {
-           this.gm.YB.deleteEntity(Wr)
+         Kd = this.aimsAsLocalPlayer() ? ld.c.getAimHeading(this.zo) : this.zo.qE.Pmd(this.heldItemState.QG).heading, this.zo.qE.pC(Fd).applyImpulse([Math.cos(Kd) * Xd, Rd, -Math.sin(Kd) * Xd]), setTimeout((() => {
+           this.zo.qE.deleteEntity(Fd)
```

#### 1509. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11554-L11559` → after: `L11691-L11696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11691-L11696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11691-L11696) · [Before (L11554-L11559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11554-L11559)

```diff
-           jr = this.gm.sSr(rr, null, cS),
-           Ir = new hr.kU(jr[0] + Sr[0] * ar, jr[1] + Sr[1] * ar, jr[2] + Sr[2] * ar),
-           fr = new hr.kU(jr[0] - Sr[0], jr[1] - Sr[1], jr[2] - Sr[2]);
-         Zr.position = Ir, (0, zr.n)(Zr, fr.x - Ir.x, fr.y - Ir.y, fr.z - Ir.z), Zr.ut = !1;
-         const Er = Wr().fh(FS, rr, Sr, ar);
-         this.gm.Ox.Sh(Zr, !1, Er), setTimeout((() => {
+           Xd = this.zo.Smd(dd, null, IO),
+           Kd = new yd.Cq(Xd[0] + Od[0] * Rd, Xd[1] + Od[1] * Rd, Xd[2] + Od[2] * Rd),
+           hd = new yd.Cq(Xd[0] - Od[0], Xd[1] - Od[1], Xd[2] - Od[2]);
+         Wd.position = Kd, (0, bd.p)(Wd, hd.x - Kd.x, hd.y - Kd.y, hd.z - Kd.z), Wd.my = !1;
+         const vd = Fd().gq(lO, dd, Od, Rd);
+         this.zo.gt.Fy(Wd, !1, vd), setTimeout((() => {
```

#### 1510. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11568` → after: `L11705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11705) · [Before (L11568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11568)

```diff
-           (0, zr.p)(this.mesh, Zr, Wr + ar, .4)
+           (0, bd.q)(this.mesh, Wd, Fd + Rd, .4)
```

#### 1511. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11573-L11574` → after: `L11710-L11711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11710-L11711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11710-L11711) · [Before (L11573-L11574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11573-L11574)

```diff
-         const Qr = 1 - .25 * rr * (null !== (Sr = this.gunStats.getStat("aimZoomFactor")) && void 0 !== Sr ? Sr : 1);
-         this.gm.YB.getState(this.gm.fC, "playerCameraAdjustment").fovMultiplier.setMultiplierType("aimingGunZoom", Qr)
+         const md = 1 - .25 * dd * (null !== (Od = this.gunStats.getStat("aimZoomFactor")) && void 0 !== Od ? Od : 1);
+         this.zo.qE.getState(this.zo.YV, "playerCameraAdjustment").fovMultiplier.setMultiplierType("aimingGunZoom", md)
```

#### 1512. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11585` → after: `L11722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11722) · [Before (L11585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11585)

```diff
-           Wr().fh(Sr, Sr, Qr, .001);
+           Fd().gq(Od, Od, md, .001);
```

#### 1513. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11587` → after: `L11724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11724) · [Before (L11587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11587)

```diff
-           (0, zr.p)(this.bulletBlockedBillboardPlane, Zr, ar, jr), Wr().fh(Sr, Sr, Qr, -1), (0, zr.n)(this.bulletBlockedBillboardPlane, Sr[0] - Zr, Sr[1] - ar, Sr[2] - jr)
+           (0, bd.q)(this.bulletBlockedBillboardPlane, Wd, Rd, Xd), Fd().gq(Od, Od, md, -1), (0, bd.p)(this.bulletBlockedBillboardPlane, Od[0] - Wd, Od[1] - Rd, Od[2] - Xd)
```

#### 1514. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11589` → after: `L11726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11726) · [Before (L11589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11589)

```diff
-         this.gm.Ox.yEr(this.bulletBlockedBillboardPlane, null !== rr)
+         this.zo.gt.Jvd(this.bulletBlockedBillboardPlane, null !== dd)
```

#### 1515. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11595` → after: `L11732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11732) · [Before (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11595)

```diff
-         NS.b.preloadAtIdle([...(0, PS.h)(rr), DS, dS])
+         HO.d.preloadAtIdle([...(0, VO.n)(dd), fO, MO])
```

#### 1516. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11607` → after: `L11744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11744) · [Before (L11607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11607)

```diff
-         if (rr - this.soundLastRoundFired > 3 * Sr && (0, PS.e)(Qr, `${Zr}_first_shot_01`)) this.lastGunShotTail = NS.b.play(`${Zr}_first_shot_01`, lS.e.gunShot, this.heldItemState.XM, 75, 10);
+         if (dd - this.soundLastRoundFired > 3 * Od && (0, VO.h)(md, `${Wd}_first_shot_01`)) this.lastGunShotTail = HO.d.play(`${Wd}_first_shot_01`, sO.f.gunShot, this.heldItemState.QG, 75, 10);
```

#### 1517. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11609-L11611` → after: `L11746-L11748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11746-L11748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11746-L11748) · [Before (L11609-L11611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11609-L11611)

```diff
-           const rr = (0, PS.c)(`${Zr}_shot_`);
-           this.lastGunShotTail = NS.b.play(rr, lS.e.gunShot, this.heldItemState.XM, 75, 10)
-         }(0, PS.e)(Qr, `${Zr}_tail_only_shot_01`) && (this.lastGunShotTail = NS.b.play(`${Zr}_tail_only_shot_01`, lS.e.gunShot, this.heldItemState.XM, 75, 10))
+           const dd = (0, VO.f)(`${Wd}_shot_`);
+           this.lastGunShotTail = HO.d.play(dd, sO.f.gunShot, this.heldItemState.QG, 75, 10)
+         }(0, VO.h)(md, `${Wd}_tail_only_shot_01`) && (this.lastGunShotTail = HO.d.play(`${Wd}_tail_only_shot_01`, sO.f.gunShot, this.heldItemState.QG, 75, 10))
```

#### 1518. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11614` → after: `L11751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11751) · [Before (L11614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11614)

```diff
-         NS.b.play((0, PS.c)(DS), lS.e.gunHeadshot)
+         HO.d.play((0, VO.f)(fO), sO.f.gunHeadshot)
```

#### 1519. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11619` → after: `L11756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11756) · [Before (L11619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11619)

```diff
-           NS.b.play((0, PS.c)(dS), lS.e.bulletShellBounce)
+           HO.d.play((0, VO.f)(MO), sO.f.bulletShellBounce)
```

#### 1520. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11623-L11625` → after: `L11760-L11762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11760-L11762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11760-L11762) · [Before (L11623-L11625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11623-L11625)

```diff
-     var uS = Qr(39720),
-       rQ = Qr(39934),
-       SQ = Qr(39104);
+     var Om = md(39760),
+       mm = md(39970),
+       Wm = md(39137);
```

#### 1521. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11628` → after: `L11765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11765) · [Before (L11628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11628)

```diff
-         super(rr, Sr, Qr, Zr, Wr), this.inputs = void 0, this.schedule = void 0, this.readyOffset = void 0, this.firingOffset = void 0, this.fireInterval = void 0, this.inputs = 0, this.schedule = new OS(50), this.readyOffset = this.firstPersonPosOffset, this.firingOffset = new h … [truncated]
+         super(dd, Od, md, Wd, Fd), this.inputs = void 0, this.schedule = void 0, this.readyOffset = void 0, this.firingOffset = void 0, this.fireInterval = void 0, this.inputs = 0, this.schedule = new BO(50), this.readyOffset = this.firstPersonPosOffset, this.firingOffset = new y … [truncated]
```

#### 1522. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11637` → after: `L11774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11774) · [Before (L11637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11637)

```diff
-         Sr ? this.schedule.fired(rr, Zr, !0) : this.schedule.arm(rr + Zr), mr.i.Jp("middleScreenBarInitiate", {
+         Od ? this.schedule.fired(dd, Wd, !0) : this.schedule.arm(dd + Wd), od.j.lQ("middleScreenBarInitiate", {
```

#### 1523. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11639` → after: `L11776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11776) · [Before (L11639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11639)

```diff
-           ha: !0,
+           qR: !0,
```

#### 1524. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11645` → after: `L11782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11782) · [Before (L11645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11645)

```diff
-         if (!uS.e.includes(Wr)) return this._performAltAction();
+         if (!Om.b.includes(Fd)) return this._performAltAction();
```

#### 1525. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11647-L11649` → after: `L11784-L11786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11784-L11786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11784-L11786) · [Before (L11647-L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11647-L11649)

```diff
-           gm: ar
-         } = this, jr = null === (Qr = ar.YB.IQr(ar.fC)) || void 0 === Qr ? void 0 : Qr.inventory, Ir = null === jr || void 0 === jr ? void 0 : jr.getSelectedSlotIndex();
-         return (0, RS.L)(Ir) ? (console.error("Failed to get selected slot"), {
+           zo: Rd
+         } = this, Xd = null === (md = Rd.qE.zmd(Rd.YV)) || void 0 === md ? void 0 : md.inventory, Kd = null === Xd || void 0 === Xd ? void 0 : Xd.getSelectedSlotIndex();
+         return (0, rO.O)(Kd) ? (console.error("Failed to get selected slot"), {
```

#### 1526. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11666` → after: `L11803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11803) · [Before (L11666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11666)

```diff
-         null === this.fireInterval && (this.fireInterval = null !== (rr = this.bloxd.getItemStat(this.gm.fC, this.typeObj.name, "fireInterval")) && void 0 !== rr ? rr : 0);
+         null === this.fireInterval && (this.fireInterval = null !== (dd = this.bloxd.getItemStat(this.zo.YV, this.typeObj.name, "fireInterval")) && void 0 !== dd ? dd : 0);
```

#### 1527. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11675` → after: `L11812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11812) · [Before (L11675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11675)

```diff
-       vZr() {
+       KFd() {
```

#### 1528. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11678` → after: `L11815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11815) · [Before (L11678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11678)

```diff
-       yZr() {
+       FFd() {
```

#### 1529. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11684` → after: `L11821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11821) · [Before (L11684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11684)

```diff
-       bpr() {
+       jQd() {
```

#### 1530. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11687` → after: `L11824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11824) · [Before (L11687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11687)

```diff
-       KZr() {
+       WFd() {
```

#### 1531. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11690` → after: `L11827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11827) · [Before (L11690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11690)

```diff
-       Fpr() {
+       cQd() {
```

#### 1532. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11708-L11709` → after: `L11845-L11846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11845-L11846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11845-L11846) · [Before (L11708-L11709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11708-L11709)

```diff
-       OZr() {
-         return null !== (0, SQ.p)(this.pickActionHelper) ? this._performAltAction() : this.fire(Date.now(), !1)
+       hFd() {
+         return null !== (0, Wm.i)(this.pickActionHelper) ? this._performAltAction() : this.fire(Date.now(), !1)
```

#### 1533. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11712` → after: `L11849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11849) · [Before (L11712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11712)

```diff
-         super.lx(rr, Sr), this.inputs > 0 && this.getFireInterval() && this.fire(Sr, !0)
+         super.Et(dd, Od), this.inputs > 0 && this.getFireInterval() && this.fire(Od, !0)
```

#### 1534. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11716` → after: `L11853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11853) · [Before (L11716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11716)

```diff
-         this.firstPersonPosOffset = hr.kU.Lerp(this.firingOffset, this.readyOffset, Qr), super.renderTickLocalPlayer(rr, Sr)
+         this.firstPersonPosOffset = yd.Cq.Lerp(this.firingOffset, this.readyOffset, md), super.renderTickLocalPlayer(dd, Od)
```

#### 1535. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11722` → after: `L11859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11859) · [Before (L11722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11722)

```diff
-     var ZQ = Qr(39951);
+     var Rm = md(39987);
```

#### 1536. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11725-L11727` → after: `L11862-L11864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11862-L11864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11862-L11864) · [Before (L11725-L11727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11725-L11727)

```diff
-       const rr = (0, Nr.e)(),
-         Sr = rr.YB.lQr(rr.fC);
-       (0, Nr.c)().updateHeldVehicleStatus(), pQ(rr, Sr)
+       const dd = (0, Nd.c)(),
+         Od = dd.qE.oWd(dd.YV);
+       (0, Nd.b)().updateHeldVehicleStatus(), Nm(dd, Od)
```

#### 1537. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11738` → after: `L11875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11875) · [Before (L11738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11738)

```diff
-       return mr.i.subscribe("updatedInventory", (() => {
+       return od.j.subscribe("updatedInventory", (() => {
```

#### 1538. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11741` → after: `L11878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11878) · [Before (L11741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11741)

```diff
-         name: "jB",
+         name: "WE",
```

#### 1539. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11744` → after: `L11881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11881) · [Before (L11744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11744)

```diff
-           jB: null,
+           WE: null,
```

#### 1540. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11766` → after: `L11903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11903) · [Before (L11766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11766)

```diff
-         zB: function(Sr, Qr) {
+         QE: function(Od, md) {
```

#### 1541. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11769-L11771` → after: `L11906-L11908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11906-L11908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11906-L11908) · [Before (L11769-L11771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11769-L11771)

```diff
-             ar = new pr.c(rr, Sr);
-           Qr.fistItem = new tr.c(rr, Qr, Zr, ar), Qr.jB = Qr.fistItem, Qr.heldType = "Fist", Qr._standardItem = new Hr(rr, Qr, Zr, Qr.fistItem, ar), Qr._blockItem = new mS(rr, Qr, Zr, Qr.fistItem, ar), Qr._chargeableItem = new YS(rr, Qr, Zr, Qr.fistItem, ar), Qr._gunItem = new sS … [truncated]
-             Qr.jB.ipr()
+             Rd = new Qd.b(dd, Od);
+           md.fistItem = new Hd.c(dd, md, Wd, Rd), md.WE = md.fistItem, md.heldType = "Fist", md._standardItem = new Vd(dd, md, Wd, md.fistItem, Rd), md._blockItem = new qO(dd, md, Wd, md.fistItem, Rd), md._chargeableItem = new YO(dd, md, Wd, md.fistItem, Rd), md._gunItem = new dm … [truncated]
+             md.WE.PQd()
```

#### 1542. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11773-L11775` → after: `L11910-L11912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11910-L11912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11910-L11912) · [Before (L11773-L11775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11773-L11775)

```diff
-             Qr.jB !== Qr.fistItem && (Qr.jB.reset(), Qr.jB = Qr.fistItem, Qr.heldType = "Fist", Qr.heldItemName = null, Qr._heldLightTintFloor = null, Qr.fistItem.selected(), mr.i.Jp("newLocalPlayerHeldItem", Qr.jB)), Qr._gunItem.forgetLastShots()
-           }))), Qr._playerInvisSub = mr.i.subscribe(`otherEntitySettingsClientifiedEId|${Qr.XM}|_invisibleEffect`, (Sr => {
-             Qr.XM !== rr.fC && (Qr._visible = !Sr, Qr.jB && Qr.jB.ipr())
+             md.WE !== md.fistItem && (md.WE.reset(), md.WE = md.fistItem, md.heldType = "Fist", md.heldItemName = null, md._heldLightTintFloor = null, md.fistItem.selected(), od.j.lQ("newLocalPlayerHeldItem", md.WE)), md._gunItem.forgetLastShots()
+           }))), md._playerInvisSub = od.j.subscribe(`otherEntitySettingsClientifiedEId|${md.QG}|_invisibleEffect`, (Od => {
+             md.QG !== dd.YV && (md._visible = !Od, md.WE && md.WE.PQd())
```

#### 1543. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11778-L11781` → after: `L11915-L11918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11915-L11918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11915-L11918) · [Before (L11778-L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11778-L11781)

```diff
-         bq: function(rr, Sr) {
-           for (const Qr in Sr) Sr[Qr] instanceof Ur.e && Sr[Qr].reset();
-           for (const Qr in Sr) Sr[Qr] instanceof Ur.e && Sr[Qr].destroy();
-           mr.i.unsubscribe(Sr._playerVisSub), mr.i.unsubscribe(Sr._playerInvisSub)
+         qS: function(dd, Od) {
+           for (const md in Od) Od[md] instanceof qd.b && Od[md].reset();
+           for (const md in Od) Od[md] instanceof qd.b && Od[md].destroy();
+           od.j.unsubscribe(Od._playerVisSub), od.j.unsubscribe(Od._playerInvisSub)
```

#### 1544. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11785` → after: `L11922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11922) · [Before (L11785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11785)

```diff
-           for (const Wr of Qr) pQ(rr, Wr), Wr.jB ? Wr.jB.lx(Sr, Zr) : console.error(new Error(`state.helditem for player ${Wr.XM} is falsy - ${Wr.jB}`))
+           for (const Fd of md) Nm(dd, Fd), Fd.WE ? Fd.WE.Et(Od, Wd) : console.error(new Error(`state.helditem for player ${Fd.QG} is falsy - ${Fd.WE}`))
```

#### 1545. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11787` → after: `L11924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11924) · [Before (L11787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11787)

```diff
-         nB: function(Sr, Qr) {
+         yE: function(Od, md) {
```

#### 1546. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11789-L11790` → after: `L11926-L11927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11926-L11927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11926-L11927) · [Before (L11789-L11790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11789-L11790)

```diff
-             Wr = (0, ZQ.m)();
-           for (const ar of Qr) ar.jB ? ar.XM === rr.fC || (0, ZQ.o)(ar.XM, Wr) ? ar.jB.renderTickLocalPlayer(Sr, Zr) : ar.jB.renderTickNetworkedPlayer(Sr, Zr) : console.error(new Error(`state.helditem for player ${ar.XM} is falsy - ${ar.jB}`))
+             Fd = (0, Rm.i)();
+           for (const Rd of md) Rd.WE ? Rd.QG === dd.YV || (0, Rm.l)(Rd.QG, Fd) ? Rd.WE.renderTickLocalPlayer(Od, Wd) : Rd.WE.renderTickNetworkedPlayer(Od, Wd) : console.error(new Error(`state.helditem for player ${Rd.QG} is falsy - ${Rd.WE}`))
```

#### 1547. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11798-L11799` → after: `L11935-L11936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11935-L11936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11935-L11936) · [Before (L11798-L11799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11798-L11799)

```diff
-       const zr = rr.YB.LQr(Sr.XM),
-         Yr = rr.YB.pQr(Sr.XM),
+       const bd = dd.qE.tWd(Od.QG),
+         Td = dd.qE.Imd(Od.QG),
```

#### 1548. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11804-L11806` → after: `L11941-L11943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11941-L11943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11941-L11943) · [Before (L11804-L11806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11804-L11806)

```diff
-           const Qr = rr.YB.IQr(Sr.XM).selectedItem;
-           tr = null === Qr || void 0 === Qr ? void 0 : Qr.typeObj, hr = null !== (er = null === Qr || void 0 === Qr || null === (Kr = Qr.attributes) || void 0 === Kr || null === (yr = Kr.customAttributes) || void 0 === yr ? void 0 : yr.enchantmentTier) && void 0 !== er ? er : nul … [truncated]
-         } else Sr.networkedHeldItemName && (tr = ar.x[Sr.networkedHeldItemName], hr = Sr.networkedHeldItemEnchantmentTier);
+           const md = dd.qE.zmd(Od.QG).selectedItem;
+           Hd = null === md || void 0 === md ? void 0 : md.typeObj, yd = null !== (Yd = null === md || void 0 === md || null === (gd = md.attributes) || void 0 === gd || null === (wd = gd.customAttributes) || void 0 === wd ? void 0 : wd.enchantmentTier) && void 0 !== Yd ? Yd : nul … [truncated]
+         } else Od.networkedHeldItemName && (Hd = Rd.v[Od.networkedHeldItemName], yd = Od.networkedHeldItemEnchantmentTier);
```

#### 1549. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11808` → after: `L11945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11945) · [Before (L11808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11808)

```diff
-       const Br = Yr && rr.YB.fQr(Sr.XM).getSelectedSlotIndex() !== Sr._lastInvenIdx,
+       const Ed = Td && dd.qE.Dmd(Od.QG).getSelectedSlotIndex() !== Od._lastInvenIdx,
```

#### 1550. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11811-L11816` → after: `L11948-L11953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11948-L11953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11948-L11953) · [Before (L11811-L11816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11811-L11816)

```diff
-       (((null === (Qr = tr) || void 0 === Qr ? void 0 : Qr.name) || null) !== Sr.heldItemName || Br || Tr) && (Sr.jB !== Sr.fistItem && ((null === (vr = tr) || void 0 === vr ? void 0 : vr.meta.rootId) !== rr.bloxd.getMetaInfo(Sr.heldItemName).rootId || Br || Tr) && Sr.jB.reset(), … [truncated]
-       Yr && (Sr._lastInvenIdx = rr.YB.fQr(Sr.XM).getSelectedSlotIndex()), Sr.heldItemName = null !== (Zr = null === (Ir = tr) || void 0 === Ir ? void 0 : Ir.name) && void 0 !== Zr ? Zr : null, Sr.heldItemEnchantmentTier = hr;
-       const gr = tr && !(0, ar.w)(tr.type) ? tr.PU : void 0,
-         Cr = nr ? (0, Rr.j)(Sr.XM) : null,
-         Mr = Cr ? ar.x[Cr].PU : void 0,
-         Gr = nr && null !== (fr = null === (Er = rr.xG[rr.fC]) || void 0 === Er || null === (pr = Er[Sr.XM]) || void 0 === pr ? void 0 : pr._glowingEffect) && void 0 !== fr && fr ? qr.GLOWING_EFFECT_EMISSION : void 0;
+       (((null === (md = Hd) || void 0 === md ? void 0 : md.name) || null) !== Od.heldItemName || Ed || Jd) && (Od.WE !== Od.fistItem && ((null === (Ud = Hd) || void 0 === Ud ? void 0 : Ud.meta.rootId) !== dd.bloxd.getMetaInfo(Od.heldItemName).rootId || Ed || Jd) && Od.WE.reset(), … [truncated]
+       Td && (Od._lastInvenIdx = dd.qE.Dmd(Od.QG).getSelectedSlotIndex()), Od.heldItemName = null !== (Wd = null === (Kd = Hd) || void 0 === Kd ? void 0 : Kd.name) && void 0 !== Wd ? Wd : null, Od.heldItemEnchantmentTier = yd;
+       const Gd = Hd && !(0, Rd.t)(Hd.type) ? Hd.Pq : void 0,
+         nd = pd ? (0, rd.p)(Od.QG) : null,
+         Ld = nd ? Rd.v[nd].Pq : void 0,
+         Pd = pd && null !== (hd = null === (vd = dd.sG[dd.YV]) || void 0 === vd || null === (Qd = vd[Od.QG]) || void 0 === Qd ? void 0 : Qd._glowingEffect) && void 0 !== hd && hd ? Ad.GLOWING_EFFECT_EMISSION : void 0;
```

#### 1551. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11818-L11819` → after: `L11955-L11956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11955-L11956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11955-L11956) · [Before (L11818-L11819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11818-L11819)

```diff
-       const kr = null !== (Nr = null === (Ur = rr.YB.yQr(Sr.XM)) || void 0 === Ur ? void 0 : Ur.isReplayLocalPlayer) && void 0 !== Nr && Nr;
-       if (Sr.XM === rr.fC || kr) {
+       const zd = null !== (Nd = null === (qd = dd.qE.XWd(Od.QG)) || void 0 === qd ? void 0 : qd.isReplayLocalPlayer) && void 0 !== Nd && Nd;
+       if (Od.QG === dd.YV || zd) {
```

#### 1552. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11821-L11822` → after: `L11958-L11959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11958-L11959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11958-L11959) · [Before (L11821-L11822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11821-L11822)

```diff
-           Oar: Qr
-         } = rr.Ox, {
+           DRd: md
+         } = dd.gt, {
```

#### 1553. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11826-L11830` → after: `L11963-L11967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11963-L11967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11963-L11967) · [Before (L11826-L11830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11826-L11830)

```diff
-         } = rr.NK;
-         Wr().copy(rr.Ox.IEr, null !== Gr && void 0 !== Gr ? Gr : Wr().ZERO);
-         const fr = nr ? Zr : null,
-           Er = nr && "number" === typeof jr ? jr : null,
-           pr = nr && "number" === typeof Ir ? Ir : null,
+         } = dd.EY;
+         Fd().copy(dd.gt.Qvd, null !== Pd && void 0 !== Pd ? Pd : Fd().ZERO);
+         const hd = pd ? Wd : null,
+           vd = pd && "number" === typeof Xd ? Xd : null,
+           Qd = pd && "number" === typeof Kd ? Kd : null,
```

#### 1554. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11832-L11834` → after: `L11969-L11971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11969-L11971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11969-L11971) · [Before (L11832-L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11832-L11834)

```diff
-             const Qr = Sr && !(0, ar.w)(Sr.type) ? mQ(Sr) : null,
-               Zr = (0, Rr.j)(rr),
-               jr = Zr ? mQ(ar.x[Zr]) : null;
+             const md = Od && !(0, Rd.t)(Od.type) ? Hm(Od) : null,
+               Wd = (0, rd.p)(dd),
+               Xd = Wd ? Hm(Rd.v[Wd]) : null;
```

#### 1555. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11842-L11843` → after: `L11979-L11980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11979-L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11979-L11980) · [Before (L11842-L11843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11842-L11843)

```diff
-           }(Sr.XM, tr) : null;
-         if (mr ? (rr.Ox.fEr = null !== Er && void 0 !== Er ? Er : mr.range, rr.Ox.jEr = null !== pr ? fQ(pr) : mr.coneCos) : (rr.Ox.fEr = null !== Er && void 0 !== Er ? Er : 0, rr.Ox.jEr = 0), fr) Wr().scale(Qr, (0, xr.R)(fr), 15);
+           }(Od.QG, Hd) : null;
+         if (od ? (dd.gt.tvd = null !== vd && void 0 !== vd ? vd : od.range, dd.gt.vvd = null !== Qd ? tm(Qd) : od.coneCos) : (dd.gt.tvd = null !== vd && void 0 !== vd ? vd : 0, dd.gt.vvd = 0), hd) Fd().scale(md, (0, td.L)(hd), 15);
```

#### 1556. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11847-L11848` → after: `L11984-L11985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11984-L11985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11984-L11985) · [Before (L11847-L11848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11847-L11848)

```diff
-             IEr: Sr
-           } = rr.Ox;
+             Qvd: Od
+           } = dd.gt;
```

#### 1557. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11856` → after: `L11993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11993) · [Before (L11856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11856)

```diff
-       if (!rr || void 0 === rr.spotlightRange || !rr.PU) return null;
+       if (!dd || void 0 === dd.spotlightRange || !dd.Pq) return null;
```

#### 1558. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11859` → after: `L11996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L11996) · [Before (L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11859)

```diff
-         colour: rr.PU,
+         colour: dd.Pq,
```

#### 1559. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11865` → after: `L12002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12002) · [Before (L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11865)

```diff
-   39859: (rr, Sr, Qr) => {
+   39919: (dd, Od, md) => {
```

#### 1560. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11868` → after: `L12005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12005) · [Before (L11868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11868)

```diff
-       e: () => Lr
+       g: () => xd
```

#### 1561. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11870-L11875` → after: `L12007-L12012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12007-L12012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12007-L12012) · [Before (L11870-L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11870-L11875)

```diff
-     var Zr = Qr(39554),
-       Wr = Qr(39286),
-       ar = Qr(39383),
-       jr = Qr(2364),
-       Ir = Qr(208),
-       fr = Qr(388),
+     var Wd = md(39615),
+       Fd = md(39327),
+       Rd = md(39425),
+       Xd = md(2386),
+       Kd = md(218),
+       hd = md(415),
```

#### 1562. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11877-L11888` → after: `L12014-L12025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12014-L12025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12014-L12025) · [Before (L11877-L11888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11877-L11888)

```diff
-       pr = Qr(39519),
-       xr = Qr(37851),
-       mr = Qr(37843),
-       Nr = Qr(39417),
-       Ur = Qr(379),
-       tr = Qr(34),
-       hr = Qr(2383),
-       zr = Qr(39488),
-       Yr = Qr(39665),
-       nr = Qr(39657),
-       er = Qr(2484),
-       Kr = Qr(1279);
+       Qd = md(39577),
+       td = md(37942),
+       od = md(37939),
+       Nd = md(39470),
+       qd = md(405),
+       Hd = md(32),
+       yd = md(2402),
+       bd = md(39547),
+       Td = md(39707),
+       pd = md(39705),
+       Yd = md(2497),
+       gd = md(1286);
```

#### 1563. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11890-L11892` → after: `L12027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12027) · [Before (L11890-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11890-L11892)

```diff
-     const Br = ["length", 0, 1, 2, "a", 8, 16, 3, 4, "_2D4Cq", 512, 7, "012345", "d", "c", "b", 15, 21, "f", 242, 5, 6, 1023, 63, 128, 12, 181, 255, 24, 32, 18, 10, 19, 64, 65535, 213, null];
- 
-     function Tr() {}
+     const Ed = ["length", 0, 1, 33554432, 67108864, 2, 61, 3, 9, 151, "f", 4, void 0, 187, null, 37, "d", 8];
```

#### 1564. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11897-L12049` → after: `L12032-L12042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12032-L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12032-L12042) · [Before (L11897-L12049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L11897-L12049)

```diff
-     "TBleecK" in Tr && function(...rr) {
-       vr(rr[Br[0]] = Br[1], rr[-Br[28]] = function(...rr) {
-         function Sr(...rr) {
-           return rr[Br[0]] = Br[2], Ir(ar(pr(rr[Br[1]])))
-         }
- 
-         function Qr(rr, Sr) {
-           return Ir(jr(pr(rr), pr(Sr)))
-         }
- 
-         function Zr(...rr) {
-           return rr[Br[0]] = Br[3], fr(jr(pr(rr[Br[1]]), pr(rr[Br[2]])))
-         }
- 
-         function Wr(...rr) {
-           return rr[Br[0]] = Br[7], Er(jr(pr(rr[Br[1]]), pr(rr[Br[2]])), rr[Br[3]])
- ... (137 more removed lines; see GitHub link above)
+     wd = (...dd) => {
+       Jd(dd[Ed[0]] = Ed[11], dd[Ed[11]] = Ed[12], dd[-Ed[13]] = Ed[12], dd[Ed[15]] = Ed[12], dd[Ed[16]] = Ed[12], dd[Ed[17]] = Ed[12]);
+       const Od = (0, yd.b)().client.getMsgHandler().IWd.state.tickCounter;
+       (0, Xd.sendColyMessage)(Yd.Zg, {
+         GK: dd[Ed[1]],
+         nK: (dd[Ed[11]] = Kd.i.lifeformMeshToBodyPart[dd[Ed[2]] === Ed[14] || void 0 === dd[Ed[2]] || (dd[-Ed[13]] = dd[Ed[2]].split("|")) === Ed[14] || void 0 === dd[-Ed[13]] ? void 0 : dd[-Ed[13]][Ed[1]]]) !== Ed[14] && void 0 !== dd[Ed[11]] ? dd[Ed[11]] : Ed[14],
+         yX: dd[Ed[5]],
+         dK: (dd[Ed[15]] = (dd[Ed[16]] = dd[Ed[7]].qE.zmd(dd[Ed[7]].YV)) === Ed[14] || void 0 === dd[Ed[16]] || (dd[Ed[17]] = dd[Ed[16]].inventory.getItemAtSelectedSlot()) === Ed[14] || void 0 === dd[Ed[17]] ? void 0 : dd[Ed[17]].name) !== Ed[14] && void 0 !== dd[Ed[15]] ? dd[Ed[1 … [truncated]
+         LK: gd.z,
+         PK: Od,
+         zK: Bd
```

#### 1565. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12052` → after: `L12045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12045) · [Before (L12052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12052)

```diff
-     class Or extends nr.e {
+     class Ud extends pd.b {
```

#### 1566. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12054` → after: `L12047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12047) · [Before (L12054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12054)

```diff
-         super(rr, Sr, Qr, Zr), this.toolType = null, this.toolHarvestLevel = null, this.toolMultiplier = 1, this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, this.anyBreakingStartTim … [truncated]
+         super(dd, Od, md, Wd), this.toolType = null, this.toolHarvestLevel = null, this.toolMultiplier = 1, this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, this.anyBreakingStartTim … [truncated]
```

#### 1567. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12064` → after: `L12057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12057) · [Before (L12064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12064)

```diff
-         super.reset(), this.heldItemState.XM === this.gm.fC && this.breakingParticles.lx(!1), this.resetTargetedBlock(Date.now()), this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, t … [truncated]
+         super.reset(), this.heldItemState.QG === this.zo.YV && this.breakingParticles.Et(!1), this.resetTargetedBlock(Date.now()), this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, t … [truncated]
```

#### 1568. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12066` → after: `L12059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12059) · [Before (L12066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12066)

```diff
-       vZr() {
+       KFd() {
```

#### 1569. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12068` → after: `L12061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12061) · [Before (L12068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12068)

```diff
-         const Wr = super.vZr(),
+         const Fd = super.KFd(),
```

#### 1570. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12073-L12075` → after: `L12066-L12068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12066-L12068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12066-L12068) · [Before (L12073-L12075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12073-L12075)

```diff
-             JA: fr
-           } = this.Jpr();
-         if (jr && !Wr.preventAttack) return this.hjr(ar, jr, Ir, fr), this.Dpr(ar, jr), {
+             rD: hd
+           } = this.DQd();
+         if (Xd && !Fd.preventAttack) return this.gXd(Rd, Xd, Kd, hd), this.eQd(Rd, Xd), {
```

#### 1571. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12079-L12082` → after: `L12072-L12075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12072-L12075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12072-L12075) · [Before (L12079-L12082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12079-L12082)

```diff
-         const Er = null !== (rr = null === (Sr = this.gm.xSr) || void 0 === Sr ? void 0 : Sr.position) && void 0 !== rr ? rr : null,
-           pr = null !== (Qr = null === (Zr = this.gm.xSr) || void 0 === Zr ? void 0 : Zr.e_) && void 0 !== Qr ? Qr : null,
-           xr = this.gm.YB.IQr(this.gm.fC);
-         if (!xr || !this.gm.NK.canAltAction) return {
+         const vd = null !== (dd = null === (Od = this.zo.nOd) || void 0 === Od ? void 0 : Od.position) && void 0 !== dd ? dd : null,
+           Qd = null !== (md = null === (Wd = this.zo.nOd) || void 0 === Wd ? void 0 : Wd.K9) && void 0 !== md ? md : null,
+           td = this.zo.qE.zmd(this.zo.YV);
+         if (!td || !this.zo.EY.canAltAction) return {
```

#### 1572. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12087` → after: `L12080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12080) · [Before (L12087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12087)

```diff
-           Nr = new Yr.c(this, null, null, Er, pr, mr).performPrimaryFire();
+           Nd = new Td.b(this, null, null, vd, Qd, od).performPrimaryFire();
```

#### 1573. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12090` → after: `L12083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12083) · [Before (L12090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12090)

```diff
-       OZr() {
+       hFd() {
```

#### 1574. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12095-L12097` → after: `L12088-L12090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12088-L12090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12088-L12090) · [Before (L12095-L12097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12095-L12097)

```diff
-           JA: Zr
-         } = this.Jpr(), Wr = super.OZr();
-         return Sr && !Wr.preventAttack && (this.hjr(rr, Sr, Qr, Zr), this.gm.YB.jQr(this.heldItemState.XM).setArmsAreSwinging()), Wr
+           rD: Wd
+         } = this.DQd(), Fd = super.hFd();
+         return Od && !Fd.preventAttack && (this.gXd(dd, Od, md, Wd), this.zo.qE.Pmd(this.heldItemState.QG).setArmsAreSwinging()), Fd
```

#### 1575. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12099` → after: `L12092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12092) · [Before (L12099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12099)

```diff
-       BZr() {
+       RFd() {
```

#### 1576. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12103-L12104` → after: `L12096-L12097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12096-L12097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12096-L12097) · [Before (L12103-L12104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12103-L12104)

```diff
-         } = this.Jpr();
-         return Sr ? this.Dpr(rr, Sr) : this.breakingStart(), !0
+         } = this.DQd();
+         return Od ? this.eQd(dd, Od) : this.breakingStart(), !0
```

#### 1577. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12111-L12113` → after: `L12104-L12106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12104-L12106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12104-L12106) · [Before (L12111-L12113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12111-L12113)

```diff
-           JA: Zr
-         } = this.Jpr();
-         return !(!Sr || !this.canAttack(Sr)) && (this.gm.YB.jQr(this.heldItemState.XM).setArmsAreSwinging(), this.hjr(rr, Sr, Qr, Zr), !0)
+           rD: Wd
+         } = this.DQd();
+         return !(!Od || !this.canAttack(Od)) && (this.zo.qE.Pmd(this.heldItemState.QG).setArmsAreSwinging(), this.gXd(dd, Od, md, Wd), !0)
```

#### 1578. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12118` → after: `L12111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12111) · [Before (L12118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12118)

```diff
-           gm: Zr
+           zo: Wd
```

#### 1579. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12120` → after: `L12113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12113) · [Before (L12120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12120)

```diff
-         return null !== (Sr = null === (Qr = Zr.xG[Zr.fC][rr]) || void 0 === Qr ? void 0 : Qr.canAttack) && void 0 !== Sr && Sr
+         return null !== (Od = null === (md = Wd.sG[Wd.YV][dd]) || void 0 === md ? void 0 : md.canAttack) && void 0 !== Od && Od
```

#### 1580. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12122` → after: `L12115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12115) · [Before (L12122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12122)

```diff
-       hjr(rr, Sr, Qr, Zr) {
+       gXd(dd, Od, md, Wd) {
```

#### 1581. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12124` → after: `L12117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12117) · [Before (L12124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12124)

```diff
-           gm: Wr
+           zo: Fd
```

#### 1582. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12126` → after: `L12119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12119) · [Before (L12126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12126)

```diff
-         this.canAttack(Sr) && (yr(Sr, Qr, rr, Wr), this.bloxd.client.triggerGameCallback("onPlayerAttackEntity", Wr.fC, Sr, [Zr[0], Zr[1], Zr[2]]))
+         this.canAttack(Od) && (wd(Od, md, dd, Fd), this.bloxd.client.triggerGameCallback("onPlayerAttackEntity", Fd.YV, Od, [Wd[0], Wd[1], Wd[2]]))
```

#### 1583. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12128` → after: `L12121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12121) · [Before (L12128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12128)

```diff
-       Jpr() {
+       DQd() {
```

#### 1584. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12130-L12132` → after: `L12123-L12125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12123-L12125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12123-L12125) · [Before (L12130-L12132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12130-L12132)

```diff
-         const Zr = null !== (rr = this.gm.LSr) && void 0 !== rr ? rr : this.gm.camera.Y1(),
-           Wr = null !== (Sr = null === (Qr = this.gm.YB.IQr(this.gm.fC)) || void 0 === Qr ? void 0 : Qr.inventory.getItemAtSelectedSlot()) && void 0 !== Sr ? Sr : null,
-           ar = this.bloxd.getAttackRangeFromHeldItem(this.gm.fC, Wr),
+         const Wd = null !== (dd = this.zo.mmd) && void 0 !== dd ? dd : this.zo.camera.B_(),
+           Fd = null !== (Od = null === (md = this.zo.qE.zmd(this.zo.YV)) || void 0 === md ? void 0 : md.inventory.getItemAtSelectedSlot()) && void 0 !== Od ? Od : null,
+           Rd = this.bloxd.getAttackRangeFromHeldItem(this.zo.YV, Fd),
```

#### 1585. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12143` → after: `L12136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12136) · [Before (L12143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12143)

```diff
-           JA: fr
+           rD: hd
```

#### 1586. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12148` → after: `L12141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12141) · [Before (L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12148)

```diff
-           JA: null
+           rD: null
```

#### 1587. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12151` → after: `L12144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12144) · [Before (L12151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12151)

```diff
-       Dpr(rr, Sr) {
+       eQd(dd, Od) {
```

#### 1588. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12154` → after: `L12147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12147) · [Before (L12154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12154)

```diff
-           gm: ar
+           zo: Rd
```

#### 1589. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12156-L12159` → after: `L12149-L12152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12149-L12152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12149-L12152) · [Before (L12156-L12159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12156-L12159)

```diff
-         (0, jr.sendColyMessage)(er.zg, {
-           uj: Sr,
-           hj: rr,
-           rI: null !== (Qr = null === (Zr = ar.YB.IQr(ar.fC)) || void 0 === Zr || null === (Wr = Zr.inventory.getItemAtSelectedSlot()) || void 0 === Wr ? void 0 : Wr.name) && void 0 !== Qr ? Qr : null
+         (0, Xd.sendColyMessage)(Yd.Tf, {
+           MX: Od,
+           yX: dd,
+           dK: null !== (md = null === (Wd = Rd.qE.zmd(Rd.YV)) || void 0 === Wd || null === (Fd = Wd.inventory.getItemAtSelectedSlot()) || void 0 === Fd ? void 0 : Fd.name) && void 0 !== md ? md : null
```

#### 1590. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12163-L12165` → after: `L12156-L12158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12156-L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12156-L12158) · [Before (L12163-L12165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12163-L12165)

```diff
-         const rr = this.gm.tSr;
-         rr && !(0, hr.c)().posSatisfiesModifyConstraints(this.gm.fC, rr.position[0], rr.position[1], rr.position[2]) && (this.gm.NK.canChange || this.gm.NK.cantBreakError || "You cannot modify this block" !== this.gm.NK.cantChangeError) && tr.i.Jp("showBottomMessage", {
-           message: this.gm.NK.cantBreakError || this.gm.NK.cantChangeError,
+         const dd = this.zo.cOd;
+         dd && !(0, yd.b)().posSatisfiesModifyConstraints(this.zo.YV, dd.position[0], dd.position[1], dd.position[2]) && (this.zo.EY.canChange || this.zo.EY.cantBreakError || "You cannot modify this block" !== this.zo.EY.cantChangeError) && Hd.j.lQ("showBottomMessage", {
+           message: this.zo.EY.cantBreakError || this.zo.EY.cantChangeError,
```

#### 1591. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12170` → after: `L12163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12163) · [Before (L12170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12170)

```diff
-         if (this.heldItemState.XM !== this.gm.fC) return !1;
+         if (this.heldItemState.QG !== this.zo.YV) return !1;
```

#### 1592. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12172` → after: `L12165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12165) · [Before (L12172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12172)

```diff
-         return this.attemptingToBreak && (Qr = this.breakBlock(Sr)), this.breakingParticles.lx(Qr), this.successfullyBreakingBlockLastTick = Qr, Qr
+         return this.attemptingToBreak && (md = this.breakBlock(Od)), this.breakingParticles.Et(md), this.successfullyBreakingBlockLastTick = md, md
```

#### 1593. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12177-L12178` → after: `L12170-L12171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12170-L12171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12170-L12171) · [Before (L12177-L12178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12177-L12178)

```diff
-       yZr() {
-         super.yZr();
+       FFd() {
+         super.FFd();
```

#### 1594. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12186` → after: `L12179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12179) · [Before (L12186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12186)

```diff
-         this.targetedPosition = null, this.targetedStartTime = rr, this.lastBreakingSoundTime = Math.min(rr - 150, this.lastBreakingSoundTime), this.currBreakingStage = -1, this.currBreakingMesh && (this.currBreakingMesh.VK(!1), this.currBreakingMesh = null)
+         this.targetedPosition = null, this.targetedStartTime = dd, this.lastBreakingSoundTime = Math.min(dd - 150, this.lastBreakingSoundTime), this.currBreakingStage = -1, this.currBreakingMesh && (this.currBreakingMesh.rY(!1), this.currBreakingMesh = null)
```

#### 1595. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12190` → after: `L12183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12183) · [Before (L12190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12190)

```diff
-         const Qr = (0, hr.c)().getInvenHeldItem(this.gm.fC);
+         const md = (0, yd.b)().getInvenHeldItem(this.zo.YV);
```

#### 1596. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12192-L12198` → after: `L12185-L12191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12185-L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12185-L12191) · [Before (L12192-L12198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12192-L12198)

```diff
-         const Ir = null === (Sr = this.gm.tSr) || void 0 === Sr ? void 0 : Sr.position;
-         if (!Ir || !(0, hr.c)().posSatisfiesModifyConstraints(this.gm.fC, Ir[0], Ir[1], Ir[2])) return this.resetTargetedBlock(rr), !1;
-         if (this.gm.YB.jQr(this.heldItemState.XM).setArmsAreSwinging(), !this.targetedPosition !== !Ir || !Er().exactEquals(this.targetedPosition, Ir)) return this.resetTargetedBlock(rr), this.targetedPosition = Er().copy(this._targetedPosition, Ir), (0, jr.sendColyMessage)(er.Lj … [truncated]
-         const fr = (0, hr.c)().getMetaInfo(this.gm.VY(this.targetedPosition)).rootId;
-         let pr = Wr.x[fr].ttb;
-         if (this.gm.NK.creative) {
-           if (this.gm.NK.creative) {
+         const Kd = null === (Od = this.zo.cOd) || void 0 === Od ? void 0 : Od.position;
+         if (!Kd || !(0, yd.b)().posSatisfiesModifyConstraints(this.zo.YV, Kd[0], Kd[1], Kd[2])) return this.resetTargetedBlock(dd), !1;
+         if (this.zo.qE.Pmd(this.heldItemState.QG).setArmsAreSwinging(), !this.targetedPosition !== !Kd || !vd().exactEquals(this.targetedPosition, Kd)) return this.resetTargetedBlock(dd), this.targetedPosition = vd().copy(this._targetedPosition, Kd), (0, Xd.sendColyMessage)(Yd.nj … [truncated]
+         const hd = (0, yd.b)().getMetaInfo(this.zo.mY(this.targetedPosition)).rootId;
+         let Qd = Fd.v[hd].ttb;
+         if (this.zo.EY.creative) {
+           if (this.zo.EY.creative) {
```

#### 1597. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12200` → after: `L12193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12193) · [Before (L12200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12200)

```diff
-             Sr > 20 * ar.f ? pr *= 1 / 6 : Sr > 6 * ar.f ? pr *= 1 / 3 : Sr > 4 * ar.f ? pr *= .5 : Sr > 2 * ar.f && (pr *= 2 / 3)
+             Od > 20 * Rd.c ? Qd *= 1 / 6 : Od > 6 * Rd.c ? Qd *= 1 / 3 : Od > 4 * Rd.c ? Qd *= .5 : Od > 2 * Rd.c && (Qd *= 2 / 3)
```

#### 1598. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12203-L12204` → after: `L12196-L12197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12196-L12197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12196-L12197) · [Before (L12203-L12204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12203-L12204)

```diff
-           const rr = (0, hr.c)().getBlockTypeIsHarvestable(this.gm.fC, fr);
-           rr || (pr *= 2.5), this.toolType === this.bloxd.getItemStat(this.gm.fC, fr, "harvestType") && rr && (pr *= 1 / this.toolMultiplier);
+           const dd = (0, yd.b)().getBlockTypeIsHarvestable(this.zo.YV, hd);
+           dd || (Qd *= 2.5), this.toolType === this.bloxd.getItemStat(this.zo.YV, hd, "harvestType") && dd && (Qd *= 1 / this.toolMultiplier);
```

#### 1599. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12211-L12212` → after: `L12204-L12205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12204-L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12204-L12205) · [Before (L12211-L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12211-L12212)

```diff
-           const Sr = (0, xr.c)(`step_${(0,zr.d)(fr,!1)}`);
-           mr.b.play(Sr, .3).rate(.5)
+           const Od = (0, td.f)(`step_${(0,bd.e)(hd,!1)}`);
+           od.d.play(Od, .3).rate(.5)
```

#### 1600. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12214` → after: `L12207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12207) · [Before (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12214)

```diff
-         return this.currBreakingMesh && tr === this.currBreakingStage || (this.currBreakingMesh && this.currBreakingMesh.VK(!1), tr < 10 ? (this.currBreakingMesh = (0, Zr.d)(this.gm, this.targetedPosition, tr), this.currBreakingStage = tr) : ((0, Wr.h)(Ir), this.resetTargetedBloc … [truncated]
+         return this.currBreakingMesh && Hd === this.currBreakingStage || (this.currBreakingMesh && this.currBreakingMesh.rY(!1), Hd < 10 ? (this.currBreakingMesh = (0, Wd.c)(this.zo, this.targetedPosition, Hd), this.currBreakingStage = Hd) : ((0, Fd.g)(Kd), this.resetTargetedBloc … [truncated]
```

#### 1601. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12226` → after: `L12219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12219) · [Before (L12226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12226)

```diff
-   39657: (rr, Sr, Qr) => {
+   39705: (dd, Od, md) => {
```

#### 1602. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12228` → after: `L12221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12221) · [Before (L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12228)

```diff
-       e: () => yr
+       b: () => wd
```

#### 1603. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12230-L12247` → after: `L12223-L12240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12223-L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12223-L12240) · [Before (L12230-L12247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12230-L12247)

```diff
-     var Zr = Qr(39703),
-       Wr = Qr(1279),
-       ar = Qr(39715),
-       jr = Qr(5817),
-       Ir = Qr(5779),
-       fr = Qr(208),
-       Er = Qr(38993),
-       pr = Qr(39665),
-       xr = Qr(39113),
-       mr = Qr(34),
-       Nr = Qr(2383),
-       Ur = Qr(1422),
-       tr = Qr(39691),
-       hr = Qr(39128),
-       zr = Qr(39111),
-       Yr = Qr(39845),
- ... (2 more removed lines; see GitHub link above)
+     var Wd = md(39741),
+       Fd = md(1286),
+       Rd = md(39750),
+       Xd = md(5759),
+       Kd = md(5733),
+       hd = md(218),
+       vd = md(39033),
+       Qd = md(39707),
+       td = md(39142),
+       od = md(32),
+       Nd = md(2402),
+       qd = md(1415),
+       Hd = md(39730),
+       yd = md(39155),
+       bd = md(39140),
+       Td = md(39906),
+ ... (2 more added lines; see GitHub link above)
```

#### 1604. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12251` → after: `L12244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12244) · [Before (L12251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12251)

```diff
-         this.gm = void 0, this.heldItemState = void 0, this.itemZoomer = void 0, this.bloxd = (0, Nr.c)(), this.pickActionHelper = void 0, this.typeObj = null, this.vSr = !0, this._doneFirstMeshSetup = !1, this._modelLoadedSub = null, this._newBloxdSub = null, this.thirdPersonThi … [truncated]
+         this.zo = void 0, this.heldItemState = void 0, this.itemZoomer = void 0, this.bloxd = (0, Nd.b)(), this.pickActionHelper = void 0, this.typeObj = null, this.dmd = !0, this._doneFirstMeshSetup = !1, this._modelLoadedSub = null, this._newBloxdSub = null, this.thirdPersonThi … [truncated]
```

#### 1605. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12256` → after: `L12249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12249) · [Before (L12256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12256)

```diff
-         this.gm.USr(!0), this.typeObj = rr, this.enchantmentTier = Sr
+         this.zo.zOd(!0), this.typeObj = dd, this.enchantmentTier = Od
```

#### 1606. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12258` → after: `L12251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12251) · [Before (L12258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12258)

```diff
-       ipr() {
+       PQd() {
```

#### 1607. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12261` → after: `L12254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12254) · [Before (L12261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12261)

```diff
-       cpr() {}
+       zQd() {}
```

#### 1608. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12269` → after: `L12262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12262) · [Before (L12269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12269)

```diff
-         return void 0 !== this.heldItemState.replayUseFirstPersonMesh ? this.heldItemState.replayUseFirstPersonMesh : this.heldItemState.XM === this.gm.fC && this.gm.camera.MJ <= 1 && !xr.e.isCameraDetachedFromPlayer(this.gm)
+         return void 0 !== this.heldItemState.replayUseFirstPersonMesh ? this.heldItemState.replayUseFirstPersonMesh : this.heldItemState.QG === this.zo.YV && this.zo.camera.rM <= 1 && !td.c.isCameraDetachedFromPlayer(this.zo)
```

#### 1609. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12272` → after: `L12265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12265) · [Before (L12272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12272)

```diff
-         return this.isFirstPersonLocalPlayer() || this.heldItemState.XM === this.gm.fC && xr.e.isCameraDetachedFromPlayer(this.gm)
+         return this.isFirstPersonLocalPlayer() || this.heldItemState.QG === this.zo.YV && td.c.isCameraDetachedFromPlayer(this.zo)
```

#### 1610. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12274-L12275` → after: `L12267-L12268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12267-L12268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12267-L12268) · [Before (L12274-L12275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12274-L12275)

```diff
-       vZr() {
-         return yr.clearSecondaryDownFireTimeout(), this.gm.YB.jQr(this.heldItemState.XM).setArmsAreSwinging(), {
+       KFd() {
+         return wd.clearSecondaryDownFireTimeout(), this.zo.qE.Pmd(this.heldItemState.QG).setArmsAreSwinging(), {
```

#### 1611. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12283` → after: `L12276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12276) · [Before (L12283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12283)

```diff
-       yZr() {
+       FFd() {
```

#### 1612. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12289` → after: `L12282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12282) · [Before (L12289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12289)

```diff
-       bpr() {
+       jQd() {
```

#### 1613. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12295` → after: `L12288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12288) · [Before (L12295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12295)

```diff
-               this.Fpr().once || Sr()
+               this.cQd().once || Od()
```

#### 1614. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12299` → after: `L12292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12292) · [Before (L12299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12299)

```diff
-         const Qr = this.Fpr();
+         const md = this.cQd();
```

#### 1615. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12302` → after: `L12295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12295) · [Before (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12302)

```diff
-       Fpr() {
+       cQd() {
```

#### 1616. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12305` → after: `L12298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12298) · [Before (L12305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12305)

```diff
-       KZr() {
+       WFd() {
```

#### 1617. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12314-L12316` → after: `L12307-L12309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12307-L12309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12307-L12309) · [Before (L12314-L12316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12314-L12316)

```diff
-           gm: Qr
-         } = this, ar = Qr.NK.canUseDevCreativeItems, jr = null === (Sr = this.bloxd.getItemStat(Qr.fC, rr, "showInCreativeInven")) || void 0 === Sr || Sr;
-         return !(0, Zr.g)(rr, (0, Wr.M)((0, Ur.b)().lobbyName), jr, ar)
+           zo: md
+         } = this, Rd = md.EY.canUseDevCreativeItems, Xd = null === (Od = this.bloxd.getItemStat(md.YV, dd, "showInCreativeInven")) || void 0 === Od || Od;
+         return !(0, Wd.d)(dd, (0, Fd.K)((0, qd.b)().lobbyName), Xd, Rd)
```

#### 1618. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12318` → after: `L12311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12311) · [Before (L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12318)

```diff
-       spr() {
+       IQd() {
```

#### 1619. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12321` → after: `L12314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12314) · [Before (L12321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12321)

```diff
-           gm: rr
+           zo: dd
```

#### 1620. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12323-L12325` → after: `L12316-L12318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12316-L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12316-L12318) · [Before (L12323-L12325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12323-L12325)

```diff
-         if (rr.NK.creative && rr.NK.canPickBlocks && rr.YB.TSr(rr.fC, "inventory") && null !== rr.xSr) {
-           const Qr = rr.xSr.e_,
-             Wr = (0, ar.g)(Qr) ? jr.u : this.bloxd.getMetaInfo(Qr).rootName,
+         if (dd.EY.creative && dd.EY.canPickBlocks && dd.qE.MOd(dd.YV, "inventory") && null !== dd.nOd) {
+           const md = dd.nOd.K9,
+             Fd = (0, Rd.k)(md) ? Xd.s : this.bloxd.getMetaInfo(md).rootName,
```

#### 1621. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12328` → after: `L12321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12321) · [Before (L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12328)

```diff
-             const Qr = rr.YB.EQr(rr.fC),
+             const md = dd.qE.emd(dd.YV),
```

#### 1622. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12330` → after: `L12323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12323) · [Before (L12330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12330)

```diff
-               ar = this.gm.YB.IQr(this.gm.fC);
+               Rd = this.zo.qE.zmd(this.zo.YV);
```

#### 1623. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12335` → after: `L12328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12328) · [Before (L12335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12335)

```diff
-               if ((null === (Sr = jr[rr]) || void 0 === Sr ? void 0 : Sr.name) === Wr) return mr.i.Jp("setSelectedInventorySlotI", rr, !0), !0
+               if ((null === (Od = Xd[dd]) || void 0 === Od ? void 0 : Od.name) === Fd) return od.j.lQ("setSelectedInventorySlotI", dd, !0), !0
```

#### 1624. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12346` → after: `L12339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12339) · [Before (L12346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12346)

```diff
-       OZr() {
+       hFd() {
```

#### 1625. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12348` → after: `L12341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12341) · [Before (L12348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12348)

```diff
-         return this.gm.YB.jQr(this.heldItemState.XM).setArmsAreSwinging(), rr
+         return this.zo.qE.Pmd(this.heldItemState.QG).setArmsAreSwinging(), dd
```

#### 1626. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12351-L12352` → after: `L12344-L12345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12344-L12345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12344-L12345) · [Before (L12351-L12352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12351-L12352)

```diff
-         const rr = this.YZr();
-         return rr.tookAction && this.gm.YB.jQr(this.heldItemState.XM).setArmsAreSwinging(), rr
+         const dd = this.dFd();
+         return dd.tookAction && this.zo.qE.Pmd(this.heldItemState.QG).setArmsAreSwinging(), dd
```

#### 1627. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12355-L12356` → after: `L12348-L12349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12348-L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12348-L12349) · [Before (L12355-L12356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12355-L12356)

```diff
-         const rr = this.gm.YB.IQr(this.gm.fC);
-         if (!rr || !this.gm.NK.canAltAction) return {
+         const dd = this.zo.qE.zmd(this.zo.YV);
+         if (!dd || !this.zo.EY.canAltAction) return {
```

#### 1628. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12360-L12361` → after: `L12353-L12354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12353-L12354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12353-L12354) · [Before (L12360-L12361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12360-L12361)

```diff
-         const Sr = this.gm.xSr;
-         if ("preventAction" === this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.gm.fC, null === Sr || void 0 === Sr ? void 0 : Sr.position[0], null === Sr || void 0 === Sr ? void 0 : Sr.position[1], null === Sr || void 0 === Sr ? void 0 : Sr.position[2], Sr … [truncated]
+         const Od = this.zo.nOd;
+         if ("preventAction" === this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.zo.YV, null === Od || void 0 === Od ? void 0 : Od.position[0], null === Od || void 0 === Od ? void 0 : Od.position[1], null === Od || void 0 === Od ? void 0 : Od.position[2], Od … [truncated]
```

#### 1629. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12365-L12366` → after: `L12358-L12359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12358-L12359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12358-L12359) · [Before (L12365-L12366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12365-L12366)

```diff
-         const Qr = new pr.c(this, null, null, null, null, rr.selectedItem).performGliderBoost();
-         return Qr.tookAction && this.gm.YB.jQr(this.heldItemState.XM).setArmsAreSwinging(), Qr
+         const md = new Qd.b(this, null, null, null, null, dd.selectedItem).performGliderBoost();
+         return md.tookAction && this.zo.qE.Pmd(this.heldItemState.QG).setArmsAreSwinging(), md
```

#### 1630. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12370-L12372` → after: `L12363-L12365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12363-L12365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12363-L12365) · [Before (L12370-L12372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12370-L12372)

```diff
-         if (!this.gm.xSr) return !1;
-         const Sr = this.gm.xSr.e_;
-         return null !== (rr = Ir.j[Sr].canBePlacedOver) && void 0 !== rr && rr
+         if (!this.zo.nOd) return !1;
+         const Od = this.zo.nOd.K9;
+         return null !== (dd = Kd.i[Od].canBePlacedOver) && void 0 !== dd && dd
```

#### 1631. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12374` → after: `L12367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12367) · [Before (L12374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12374)

```diff
-       YZr() {
+       dFd() {
```

#### 1632. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12376-L12377` → after: `L12369-L12370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12369-L12370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12369-L12370) · [Before (L12376-L12377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12376-L12377)

```diff
-         const Zr = this.gm.YB.IQr(this.gm.fC);
-         if (!Zr || !this.gm.NK.canAltAction) return {
+         const Wd = this.zo.qE.zmd(this.zo.YV);
+         if (!Wd || !this.zo.EY.canAltAction) return {
```

#### 1633. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12381` → after: `L12374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12374) · [Before (L12381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12381)

```diff
-         if (Zr.opWrapper.pQ) return mr.i.Jp("toggleMenu", "inventory"), {
+         if (Wd.opWrapper.Km) return od.j.lQ("toggleMenu", "inventory"), {
```

#### 1634. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12387` → after: `L12380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12380) · [Before (L12387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12387)

```diff
-         if ((0, er.h)(null === Wr || void 0 === Wr ? void 0 : Wr.typeObj.type) && this.gm.YB.jQr(this.heldItemState.XM).crouching) return {
+         if ((0, Yd.h)(null === Fd || void 0 === Fd ? void 0 : Fd.typeObj.type) && this.zo.qE.Pmd(this.heldItemState.QG).crouching) return {
```

#### 1635. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12391` → after: `L12384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12384) · [Before (L12391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12391)

```diff
-         const ar = null !== (rr = this.gm.LSr) && void 0 !== rr ? rr : this.gm.camera.Y1(),
+         const Rd = null !== (dd = this.zo.mmd) && void 0 !== dd ? dd : this.zo.camera.B_(),
```

#### 1636. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12396` → after: `L12389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12389) · [Before (L12396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12396)

```diff
-             sA: Nr,
+             nD: Nd,
```

#### 1637. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12399-L12402` → after: `L12392-L12395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12392-L12395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12392-L12395) · [Before (L12399-L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12399-L12402)

```diff
-           tr = null === (Sr = this.gm.xSr) || void 0 === Sr ? void 0 : Sr.e_,
-           hr = null === (Qr = this.gm.xSr) || void 0 === Qr ? void 0 : Qr.position,
-           zr = null !== jr && void 0 !== jr ? jr : null,
-           Yr = this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.gm.fC, null === hr || void 0 === hr ? void 0 : hr[0], null === hr || void 0 === hr ? void 0 : hr[1], null === hr || void 0 === hr ? void 0 : hr[2], tr ? (0, Ir.g)(tr) : "Air", zr);
+           Hd = null === (Od = this.zo.nOd) || void 0 === Od ? void 0 : Od.K9,
+           yd = null === (md = this.zo.nOd) || void 0 === md ? void 0 : md.position,
+           bd = null !== Xd && void 0 !== Xd ? Xd : null,
+           Td = this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.zo.YV, null === yd || void 0 === yd ? void 0 : yd[0], null === yd || void 0 === yd ? void 0 : yd[1], null === yd || void 0 === yd ? void 0 : yd[2], Hd ? (0, Kd.g)(Hd) : "Air", bd);
```

#### 1638. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12408` → after: `L12401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12401) · [Before (L12408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12408)

```diff
-           Kr = new pr.c(this, zr, Er, hr, tr, Wr).performAltAction(!nr);
+           gd = new Qd.b(this, bd, vd, yd, Hd, Fd).performAltAction(!pd);
```

#### 1639. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12414` → after: `L12407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12407) · [Before (L12414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12414)

```diff
-       BZr() {
+       RFd() {
```

#### 1640. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12423` → after: `L12416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12416) · [Before (L12423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12423)

```diff
-         Sr <= 1.2 && rr > 1.2 ? (this.gm.camera.GJ = 0, this.gm.camera.MJ = 0, this.itemZoomer.forceXyOffsetToZero(), this.ipr()) : 0 === Sr && (this.itemZoomer.forceXyOffsetToZero(), this.ipr()), Sr > .001 && rr < .001 && (this.gm.camera.GJ = 1.2, this.ipr())
+         Od <= 1.2 && dd > 1.2 ? (this.zo.camera.R7 = 0, this.zo.camera.rM = 0, this.itemZoomer.forceXyOffsetToZero(), this.PQd()) : 0 === Od && (this.itemZoomer.forceXyOffsetToZero(), this.PQd()), Od > .001 && dd < .001 && (this.zo.camera.R7 = 1.2, this.PQd())
```

#### 1641. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12439` → after: `L12432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12432) · [Before (L12439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12439)

```diff
-         mr.i.unsubscribe(this._modelLoadedSub), this.heldItemState.XM === this.gm.fC && yr.clearSecondaryDownFireTimeout(), this._doneFirstMeshSetup = void 0 !== this.gm.YB.rQr(this.heldItemState.XM)
+         od.j.unsubscribe(this._modelLoadedSub), this.heldItemState.QG === this.zo.YV && wd.clearSecondaryDownFireTimeout(), this._doneFirstMeshSetup = void 0 !== this.zo.qE.Vmd(this.heldItemState.QG)
```

#### 1642. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12442` → after: `L12435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12435) · [Before (L12442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12442)

```diff
-         mr.i.unsubscribe(this._newBloxdSub)
+         od.j.unsubscribe(this._newBloxdSub)
```

#### 1643. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12445` → after: `L12438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12438) · [Before (L12445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12445)

```diff
-         if (this.cpr(), this._doneFirstMeshSetup) return;
+         if (this.zQd(), this._doneFirstMeshSetup) return;
```

#### 1644. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12447-L12449` → after: `L12440-L12442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12440-L12442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12440-L12442) · [Before (L12447-L12449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12447-L12449)

```diff
-         const rr = this.heldItemState.XM;
-         this.gm.YB.rQr(rr) || (this._modelLoadedSub = mr.i.subscribe(`lifeformSetupFinished|${rr}`, (() => {
-           this.cpr()
+         const dd = this.heldItemState.QG;
+         this.zo.qE.Vmd(dd) || (this._modelLoadedSub = od.j.subscribe(`lifeformSetupFinished|${dd}`, (() => {
+           this.zQd()
```

#### 1645. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12460` → after: `L12453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12453) · [Before (L12460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12460)

```diff
-         return null === rr || this.gm.Ox.bC.has(rr) ? rr : (this.thirdPersonThinObjectId = null, null)
+         return null === dd || this.zo.gt.HA.has(dd) ? dd : (this.thirdPersonThinObjectId = null, null)
```

#### 1646. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12464-L12467` → after: `L12457-L12460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12457-L12460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12457-L12460) · [Before (L12464-L12467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12464-L12467)

```diff
-           Tx: Sr
-         } = this.thirdPersonPose, Qr = Sr.x * this.heldPoseScaleY() * Sr.z < 0, Zr = rr.thinInstMgr.getNodeWorldMatrix(rr.JC, rr.nodeIndex).determinant() < 0, Wr = (0, hr.d)(Qr, Zr);
-         if (this.thirdPersonFlippedWinding === Wr && this.thirdPersonAttachedToId === rr.JC && this.thirdPersonAttachedToNode === rr.nodeIndex && (null === this.thirdPersonThinObjectId || null !== this.liveThirdPersonThinObjectId())) return void this.applyThirdPersonPose();
-         this.releaseThirdPersonThinObject(), this.thirdPersonFlippedWinding = Wr, this.thirdPersonAttachedToId = rr.JC, this.thirdPersonAttachedToNode = rr.nodeIndex;
+           Tt: Od
+         } = this.thirdPersonPose, md = Od.x * this.heldPoseScaleY() * Od.z < 0, Wd = dd.thinInstMgr.getNodeWorldMatrix(dd.JA, dd.nodeIndex).determinant() < 0, Fd = (0, yd.f)(md, Wd);
+         if (this.thirdPersonFlippedWinding === Fd && this.thirdPersonAttachedToId === dd.JA && this.thirdPersonAttachedToNode === dd.nodeIndex && (null === this.thirdPersonThinObjectId || null !== this.liveThirdPersonThinObjectId())) return void this.applyThirdPersonPose();
+         this.releaseThirdPersonThinObject(), this.thirdPersonFlippedWinding = Fd, this.thirdPersonAttachedToId = dd.JA, this.thirdPersonAttachedToNode = dd.nodeIndex;
```

#### 1647. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12470` → after: `L12463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12463) · [Before (L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12470)

```diff
-           wI: !0,
+           jK: !0,
```

#### 1648. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12473-L12474` → after: `L12466-L12467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12466-L12467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12466-L12467) · [Before (L12473-L12474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12473-L12474)

```diff
-           const Qr = this.gm.Ox.bC;
-           ar === this.thirdPersonRequestId && Qr.has(rr.JC) ? (this.thirdPersonThinObjectId = Sr, Qr.attachThinObject(Sr, rr.JC, rr.nodeIndex), Qr.set(Sr, "aOpacity", (0, zr.holderAttachmentOpacity)(this.gm, this.heldItemState.XM)), (0, zr.invalidateAttachmentProximityFade)(this. … [truncated]
+           const md = this.zo.gt.HA;
+           Rd === this.thirdPersonRequestId && md.has(dd.JA) ? (this.thirdPersonThinObjectId = Od, md.attachThinObject(Od, dd.JA, dd.nodeIndex), md.set(Od, "aOpacity", (0, bd.holderAttachmentOpacity)(this.zo, this.heldItemState.QG)), (0, bd.invalidateAttachmentProximityFade)(this. … [truncated]
```

#### 1649. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12478` → after: `L12471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12471) · [Before (L12478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12478)

```diff
-         return hr.c * this.thirdPersonPose.Tx.y
+         return yd.e * this.thirdPersonPose.Tt.y
```

#### 1650. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12484` → after: `L12477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12477) · [Before (L12484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12484)

```diff
-         const Sr = this.gm.Ox.bC,
+         const Od = this.zo.gt.HA,
```

#### 1651. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12488` → after: `L12481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12481) · [Before (L12488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12488)

```diff
-             Tx: Wr,
+             Tt: Fd,
```

#### 1652. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12497` → after: `L12490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12490) · [Before (L12497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12497)

```diff
-           } = (0, Yr.e)(Qr, jr ? ar : Zr, Ir, this.typeObj.heldModelOffsetY());
+           } = (0, Td.e)(md, Xd ? Rd : Wd, Kd, this.typeObj.heldModelOffsetY());
```

#### 1653. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12503` → after: `L12496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12496) · [Before (L12503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12503)

```diff
-         null !== rr && (this.gm.Ox.bC.delete(rr), this.thirdPersonThinObjectId = null)
+         null !== dd && (this.zo.gt.HA.delete(dd), this.thirdPersonThinObjectId = null)
```

#### 1654. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12507` → after: `L12500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12500) · [Before (L12507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12507)

```diff
-           gm: rr,
+           zo: dd,
```

#### 1655. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12510-L12512` → after: `L12503-L12505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12503-L12505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12503-L12505) · [Before (L12510-L12512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12510-L12512)

```diff
-         if (!rr.YB.TSr(Sr.XM, "humanoidMesh")) return null;
-         const Qr = rr.YB.HQr(Sr.XM),
-           Zr = rr.Ox.bC,
+         if (!dd.qE.MOd(Od.QG, "humanoidMesh")) return null;
+         const md = dd.qE.HWd(Od.QG),
+           Wd = dd.gt.HA,
```

#### 1656. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12514` → after: `L12507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12507) · [Before (L12514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12514)

```diff
-             JC: Wr
+             JA: Fd
```

#### 1657. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12521` → after: `L12514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12514) · [Before (L12521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12521)

```diff
-           JC: Wr,
+           JA: Fd,
```

#### 1658. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12530` → after: `L12523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12523) · [Before (L12530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12530)

```diff
-           JC: rr.JC,
+           JA: dd.JA,
```

#### 1659. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12535` → after: `L12528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12528) · [Before (L12535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12535)

```diff
-           gm: Sr,
+           zo: Od,
```

#### 1660. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12538-L12540` → after: `L12531-L12533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12531-L12533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12531-L12533) · [Before (L12538-L12540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12538-L12540)

```diff
-         if (!Sr.YB.TSr(Qr.XM, "fourLeggedMesh")) return null;
-         const Zr = Sr.YB.qQr(Qr.XM),
-           Wr = Sr.Ox.bC,
+         if (!Od.qE.MOd(md.QG, "fourLeggedMesh")) return null;
+         const Wd = Od.qE.yWd(md.QG),
+           Fd = Od.gt.HA,
```

#### 1661. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12542` → after: `L12535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12535) · [Before (L12542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12542)

```diff
-             JC: ar
+             JA: Rd
```

#### 1662. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12549` → after: `L12542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12542) · [Before (L12549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12549)

```diff
-           JC: ar,
+           JA: Rd,
```

#### 1663. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12555` → after: `L12548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12548) · [Before (L12555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12555)

```diff
-         if (!this.gm.Ox.ct) return;
+         if (!this.zo.gt.lH) return;
```

#### 1664. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12557` → after: `L12550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12550) · [Before (L12557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12557)

```diff
-         if (null !== rr) return void this.gm.Ox.bC.set(rr, "aLightLevels", this.heldItemLightLevels());
+         if (null !== dd) return void this.zo.gt.HA.set(dd, "aLightLevels", this.heldItemLightLevels());
```

#### 1665. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12560-L12562` → after: `L12553-L12555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12553-L12555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12553-L12555) · [Before (L12560-L12562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12560-L12562)

```diff
-         if (this.lightTargetsForMesh !== Sr && (this.lightTargetsForMesh = Sr, this.vfr = [], this.lightTargetsBuilt = !1), !this.lightTargetsBuilt) {
-           const rr = (0, Er.o)(Sr);
-           for (const Sr of rr) Sr.pG && "aLightLevels" in Sr.pG && this.vfr.push(Sr);
+         if (this.lightTargetsForMesh !== Od && (this.lightTargetsForMesh = Od, this.Bhd = [], this.lightTargetsBuilt = !1), !this.lightTargetsBuilt) {
+           const dd = (0, vd.l)(Od);
+           for (const Od of dd) Od.xG && "aLightLevels" in Od.xG && this.Bhd.push(Od);
```

#### 1666. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12565` → after: `L12558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12558) · [Before (L12565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12565)

```diff
-         if (0 === this.vfr.length) return;
+         if (0 === this.Bhd.length) return;
```

#### 1667. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12567` → after: `L12560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12560) · [Before (L12567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12567)

```diff
-         for (const Zr of this.vfr)(0, Er.u)(Zr, Qr)
+         for (const Wd of this.Bhd)(0, vd.r)(Wd, md)
```

#### 1668. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12570` → after: `L12563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12563) · [Before (L12570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12570)

```diff
-         return this.gm.YB.yQr(this.heldItemState.XM)._lightLevels
+         return this.zo.qE.XWd(this.heldItemState.QG)._lightLevels
```

#### 1669. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12574` → after: `L12567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12567) · [Before (L12574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12574)

```diff
-   39853: (rr, Sr, Qr) => {
+   39911: (dd, Od, md) => {
```

#### 1670. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12576-L12579` → after: `L12569-L12572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12569-L12572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12569-L12572) · [Before (L12576-L12579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12576-L12579)

```diff
-       c: () => Ur,
-       g: () => tr,
-       j: () => Nr,
-       m: () => jr
+       b: () => qd,
+       f: () => Hd,
+       i: () => Nd,
+       j: () => Xd
```

#### 1671. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12581-L12583` → after: `L12574-L12576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12574-L12576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12574-L12576) · [Before (L12581-L12583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12581-L12583)

```diff
-     var Zr = Qr(38555),
-       Wr = Qr(39006),
-       ar = Qr(5229);
+     var Wd = md(38627),
+       Fd = md(39043),
+       Rd = md(5141);
```

#### 1672. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12587-L12589` → after: `L12580-L12582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12580-L12582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12580-L12582) · [Before (L12587-L12589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12587-L12589)

```diff
-         position: new Zr.kU,
-         rotation: new Zr.kU,
-         Tx: new Zr.kU,
+         position: new Wd.Cq,
+         rotation: new Wd.Cq,
+         Tt: new Wd.Cq,
```

#### 1673. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12594-L12596` → after: `L12587-L12589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12587-L12589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12587-L12589) · [Before (L12594-L12596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12594-L12596)

```diff
-     const Ir = new Zr.kU(-.18, -.66, .48),
-       fr = new Zr.kU(.4, 1.25, Math.PI + .9),
-       Er = new Zr.kU(-.12, .12, .12),
+     const Kd = new Wd.Cq(-.18, -.66, .48),
+       hd = new Wd.Cq(.4, 1.25, Math.PI + .9),
+       vd = new Wd.Cq(-.12, .12, .12),
```

#### 1674. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12602` → after: `L12595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12595) · [Before (L12602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12602)

```diff
-       return Zr.Matrix.RotationYawPitchRollToRef(rr.y, rr.x, rr.z, pr), Zr.Matrix.RotationYawPitchRollToRef(Sr[1], Sr[0], Sr[2], xr), Wr.d.matMulToRef(xr, pr, mr), Zr.Quaternion.FromRotationMatrixToRef(mr, Qr)
+       return Wd.Matrix.RotationYawPitchRollToRef(dd.y, dd.x, dd.z, Qd), Wd.Matrix.RotationYawPitchRollToRef(Od[1], Od[0], Od[2], td), Fd.c.matMulToRef(td, Qd, od), Wd.Quaternion.FromRotationMatrixToRef(od, md)
```

#### 1675. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12614` → after: `L12607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12607) · [Before (L12614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12614)

```diff
-         Tx: jr
+         Tt: Xd
```

#### 1676. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12616-L12618` → after: `L12609-L12611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12609-L12611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12609-L12611) · [Before (L12616-L12618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12616-L12618)

```diff
-       if (Qr.usesQuaternion = !1, "Gun" === rr.type) return Zr.iH(Ir), Wr.iH(fr), void jr.iH(Er);
-       const [pr, xr, mr] = null !== Sr && void 0 !== Sr ? Sr : [0, 0, 0], Nr = (0, ar.e)(rr.type), tr = Nr ? 2.25 : 1.35, hr = Nr ? 0 : .08;
-       if ("TwoDTool" === rr.type || rr.holdAsAiming) Zr.Hrr(pr, -.48 + xr, .24 + mr + hr), jr.Hrr(.19 * tr, -.19 * tr, .19 * tr), rr.holdAsAiming ? Wr.Hrr(.4 + Math.PI, 1.25, Math.PI / 2) : Wr.Hrr(Math.PI, Math.PI / 2, .35 * Math.PI);
+       if (md.usesQuaternion = !1, "Gun" === dd.type) return Wd.Bx(Kd), Fd.Bx(hd), void Xd.Bx(vd);
+       const [Qd, td, od] = null !== Od && void 0 !== Od ? Od : [0, 0, 0], Nd = (0, Rd.e)(dd.type), Hd = Nd ? 2.25 : 1.35, yd = Nd ? 0 : .08;
+       if ("TwoDTool" === dd.type || dd.holdAsAiming) Wd.KOd(Qd, -.48 + td, .24 + od + yd), Xd.KOd(.19 * Hd, -.19 * Hd, .19 * Hd), dd.holdAsAiming ? Fd.KOd(.4 + Math.PI, 1.25, Math.PI / 2) : Fd.KOd(Math.PI, Math.PI / 2, .35 * Math.PI);
```

#### 1677. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12620` → after: `L12613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12613) · [Before (L12620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12620)

```diff
-         Zr.Hrr(pr, -.72 + xr, .18 + mr + hr);
+         Wd.KOd(Qd, -.72 + td, .18 + od + yd);
```

#### 1678. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12622` → after: `L12615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12615) · [Before (L12622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12622)

```diff
-         jr.Hrr(rr, rr, rr), Wr.Hrr(Nr ? 0 : Math.PI, Math.PI / 2, -Math.PI / 2)
+         Xd.KOd(dd, dd, dd), Fd.KOd(Nd ? 0 : Math.PI, Math.PI / 2, -Math.PI / 2)
```

#### 1679. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12627` → after: `L12620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12620) · [Before (L12627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12627)

```diff
-   39845: (rr, Sr, Qr) => {
+   39906: (dd, Od, md) => {
```

#### 1680. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12631` → after: `L12624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12624) · [Before (L12631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12631)

```diff
-     var Zr = Qr(38555);
+     var Wd = md(38627);
```

#### 1681. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12633` → after: `L12626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12626) · [Before (L12633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12633)

```diff
-       ar = new Zr.kU;
+       Rd = new Wd.Cq;
```

#### 1682. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12637` → after: `L12630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12630) · [Before (L12637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12637)

```diff
-       const Ir = Sr instanceof Zr.Quaternion ? Sr : Zr.Quaternion.RotationYawPitchRollToRef(Sr.y, Sr.x, Sr.z, Wr);
+       const Kd = Od instanceof Wd.Quaternion ? Od : Wd.Quaternion.RotationYawPitchRollToRef(Od.y, Od.x, Od.z, Fd);
```

#### 1683. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12641` → after: `L12634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12634) · [Before (L12641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12641)

```diff
-   38548: (rr, Sr, Qr) => {
+   38615: (dd, Od, md) => {
```

#### 1684. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12651-L12655` → after: `L12644-L12648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12644-L12648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12644-L12648) · [Before (L12651-L12655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12651-L12655)

```diff
-     var Zr = Qr(38552),
-       Wr = Qr(2383),
-       ar = Qr(688),
-       jr = Qr(1279),
-       Ir = Qr(34);
+     var Wd = md(38623),
+       Fd = md(2402),
+       Rd = md(701),
+       Xd = md(1286),
+       Kd = md(32);
```

#### 1685. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12670` → after: `L12663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12663) · [Before (L12670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12670)

```diff
-         if (null !== Wr.JC)
+         if (null !== Fd.JA)
```

#### 1686. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12679` → after: `L12672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12672) · [Before (L12679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12679)

```diff
-         if (null === Wr.JC || null === (Zr = Wr.hideOnArmourPartsEquip) || void 0 === Zr || !Zr.length) continue;
+         if (null === Fd.JA || null === (Wd = Fd.hideOnArmourPartsEquip) || void 0 === Wd || !Wd.length) continue;
```

#### 1687. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12681` → after: `L12674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12674) · [Before (L12681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12681)

```diff
-         rr.setVisibility(Wr.JC, !ar)
+         dd.setVisibility(Fd.JA, !Rd)
```

#### 1688. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12684-L12690` → after: `L12677-L12683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12677-L12683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12677-L12683) · [Before (L12684-L12690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12684-L12690)

```diff
-     var xr = Qr(38993),
-       mr = Qr(379),
-       Nr = Qr(38656),
-       Ur = Qr(38806),
-       tr = Qr(39038),
-       hr = Qr(39104),
-       zr = Qr(39111);
+     var td = md(39033),
+       od = md(405),
+       Nd = md(38698),
+       qd = md(38850),
+       Hd = md(39080),
+       yd = md(39137),
+       bd = md(39140);
```

#### 1689. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12695` → after: `L12688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12688) · [Before (L12695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12695)

```diff
-         this.attachments = [], this.animatedAttachments = [], this.zIndexSub = void 0, this.personFullBody = !1, this.XM = void 0
+         this.attachments = [], this.animatedAttachments = [], this.zIndexSub = void 0, this.personFullBody = !1, this.QG = void 0
```

#### 1690. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12703` → after: `L12696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12696) · [Before (L12703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12703)

```diff
-       } = Zr, Ir = (0, Ur.e)(ar, jr);
+       } = Wd, Kd = (0, qd.g)(Rd, Xd);
```

#### 1691. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12706` → after: `L12699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12699) · [Before (L12706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12706)

```diff
-       Yr.has(fr) || (Yr.add(fr), (0, Ur.c)(rr, ar, jr, {
+       Td.has(hd) || (Td.add(hd), (0, qd.e)(dd, Rd, Xd, {
```

#### 1692. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12711-L12713` → after: `L12704-L12706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12704-L12706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12704-L12706) · [Before (L12711-L12713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12711-L12713)

```diff
-           const Zr = (0, Wr.e)(),
-             ar = Zr.Ox.bC,
-             jr = Zr.YB.YM(Zr.YB.names.meshAttachments);
+           const Wd = (0, Fd.c)(),
+             Rd = Wd.gt.HA,
+             Xd = Wd.qE.vG(Wd.qE.names.meshAttachments);
```

#### 1693. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12716` → after: `L12709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12709) · [Before (L12716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12716)

```diff
-             const jr = null !== (Ir = null === (fr = Zr.YB.rQr(Wr.XM)) || void 0 === fr ? void 0 : fr.JC) && void 0 !== Ir ? Ir : null;
+             const Xd = null !== (Kd = null === (hd = Wd.qE.Vmd(Fd.QG)) || void 0 === hd ? void 0 : hd.JA) && void 0 !== Kd ? Kd : null;
```

#### 1694. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12718` → after: `L12711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12711) · [Before (L12718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12718)

```diff
-               for (const Zr of Wr.attachments) Zr.modelGlb === Sr && Zr.texture === Qr && null === Zr.JC && yr(Wr, jr, rr, Zr);
+               for (const Wd of Fd.attachments) Wd.modelGlb === Od && Wd.texture === md && null === Wd.JA && wd(Fd, Xd, dd, Wd);
```

#### 1695. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12720` → after: `L12713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12713) · [Before (L12720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12720)

```diff
-             } else console.error(`Loaded ${(0,Nr.l)(Sr,Qr)} but theres no thinObjectId ${jr} for parent entity ${Wr.XM}`)
+             } else console.error(`Loaded ${(0,Nd.l)(Od,md)} but theres no thinObjectId ${Xd} for parent entity ${Fd.QG}`)
```

#### 1696. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12724` → after: `L12717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12717) · [Before (L12724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12724)

```diff
-         console.error(`Failed to load ${ar}:`, rr.stack)
+         console.error(`Failed to load ${Rd}:`, dd.stack)
```

#### 1697. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12730-L12732` → after: `L12723-L12725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12723-L12725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12723-L12725) · [Before (L12730-L12732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12730-L12732)

```diff
-       const Ir = (0, Wr.e)(),
-         fr = Ir.Ox.bC,
-         Er = `${(0,Nr.l)(Zr.modelGlb,Zr.texture)}|${Zr.modelNode}`;
+       const Kd = (0, Fd.c)(),
+         hd = Kd.gt.HA,
+         vd = `${(0,Nd.l)(Wd.modelGlb,Wd.texture)}|${Wd.modelNode}`;
```

#### 1698. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12735` → after: `L12728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12728) · [Before (L12735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12735)

```diff
-         if (!rr) return void console.error(`Node ${Zr.modelNode} not found in container ${Zr.modelGlb}`);
+         if (!dd) return void console.error(`Node ${Wd.modelNode} not found in container ${Wd.modelGlb}`);
```

#### 1699. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12737` → after: `L12730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12730) · [Before (L12737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12737)

```diff
-           sx: 4,
+           Mt: 4,
```

#### 1700. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12746-L12747` → after: `L12739-L12740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12739-L12740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12739-L12740) · [Before (L12746-L12747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12746-L12747)

```diff
-         }), void 0 !== Zr.animation && (0, Nr.p)(Qr), fr.setPickableForType(Er, !0);
-         for (const Sr of [rr, ...rr.getChildMeshes()]) Sr.material && Ir.Ox.pM(Sr)
+         }), void 0 !== Wd.animation && (0, Nd.s)(md), hd.setPickableForType(vd, !0);
+         for (const Od of [dd, ...dd.getChildMeshes()]) Od.material && Kd.gt.hG(Od)
```

#### 1701. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12753-L12756` → after: `L12746-L12749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12746-L12749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12746-L12749) · [Before (L12753-L12756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12753-L12756)

```diff
-       fr.setEntityId(pr, Yr), fr.setPickable(pr, rr.personFullBody && (0, hr.l)(Yr)), fr.set(pr, "aOpacity", (0, zr.holderAttachmentOpacity)(Ir, Yr));
-       const er = Ir.xG[Ir.fC][Yr];
-       if (fr.setRenderingGroupId(pr, null !== (ar = null === er || void 0 === er ? void 0 : er.zIndex) && void 0 !== ar ? ar : 0), null !== er && void 0 !== er && er.overlayColour) {
-         const [rr, Sr, Qr] = (0, mr.T)(er.overlayColour);
+       hd.setEntityId(Qd, Td), hd.setPickable(Qd, dd.personFullBody && (0, yd.h)(Td)), hd.set(Qd, "aOpacity", (0, bd.holderAttachmentOpacity)(Kd, Td));
+       const Yd = Kd.sG[Kd.YV][Td];
+       if (hd.setRenderingGroupId(Qd, null !== (Rd = null === Yd || void 0 === Yd ? void 0 : Yd.zIndex) && void 0 !== Rd ? Rd : 0), null !== Yd && void 0 !== Yd && Yd.overlayColour) {
+         const [dd, Od, md] = (0, od.M)(Yd.overlayColour);
```

#### 1702. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12759-L12760` → after: `L12752-L12753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12752-L12753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12752-L12753) · [Before (L12759-L12760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12759-L12760)

```diff
-       const Kr = Ir.YB.yQr(Yr);
-       if (fr.set(pr, "aLightLevels", null !== (jr = null === Kr || void 0 === Kr ? void 0 : Kr._lightLevels) && void 0 !== jr ? jr : xr.e), Zr.overlayColour) {
+       const gd = Kd.qE.XWd(Td);
+       if (hd.set(Qd, "aLightLevels", null !== (Xd = null === gd || void 0 === gd ? void 0 : gd._lightLevels) && void 0 !== Xd ? Xd : td.e), Wd.overlayColour) {
```

#### 1703. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12764` → after: `L12757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12757) · [Before (L12764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12764)

```diff
-       if (Zr.JC = pr, void 0 !== Zr.animation) {
+       if (Wd.JA = Qd, void 0 !== Wd.animation) {
```

#### 1704. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12766` → after: `L12759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12759) · [Before (L12766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12766)

```diff
-         void 0 === Sr && (Sr = tr.c.fromRests(fr, Er, Zr.animation, (0, tr.k)(fr, pr)), nr.set(Er, Sr)), Zr.clipPose = Sr, null !== Sr && rr.animatedAttachments.push(Zr)
+         void 0 === Od && (Od = Hd.e.fromRests(hd, vd, Wd.animation, (0, Hd.m)(hd, Qd)), pd.set(vd, Od)), Wd.clipPose = Od, null !== Od && dd.animatedAttachments.push(Wd)
```

#### 1705. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12771` → after: `L12764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12764) · [Before (L12771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12771)

```diff
-       const Zr = rr.YB.getState(Sr, rr.YB.names.meshAttachments);
+       const Wd = dd.qE.getState(Od, dd.qE.names.meshAttachments);
```

#### 1706. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12773` → after: `L12766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12766) · [Before (L12773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12773)

```diff
-         for (const Wr of Zr.attachments) null !== Wr.JC && rr.Ox.bC.setPickable(Wr.JC, Qr)
+         for (const Fd of Wd.attachments) null !== Fd.JA && dd.gt.HA.setPickable(Fd.JA, md)
```

#### 1707. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12781-L12783` → after: `L12774-L12776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12774-L12776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12774-L12776) · [Before (L12781-L12783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12781-L12783)

```diff
-         zB: function(Sr, Qr) {
-           Qr.zIndexSub = Ir.i.subscribe(`otherEntitySettingsClientifiedEId|${Sr}|zIndex`, (Sr => {
-             for (const Zr of Qr.attachments) null !== Zr.JC && rr.Ox.bC.setRenderingGroupId(Zr.JC, Sr)
+         QE: function(Od, md) {
+           md.zIndexSub = Kd.j.subscribe(`otherEntitySettingsClientifiedEId|${Od}|zIndex`, (Od => {
+             for (const Wd of md.attachments) null !== Wd.JA && dd.gt.HA.setRenderingGroupId(Wd.JA, Od)
```

#### 1708. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12786-L12788` → after: `L12779-L12781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12779-L12781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12779-L12781) · [Before (L12786-L12788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12786-L12788)

```diff
-         bq: function(Sr, Qr) {
-           Ir.i.unsubscribe(Qr.zIndexSub);
-           const Zr = rr.Ox.bC;
+         qS: function(Od, md) {
+           Kd.j.unsubscribe(md.zIndexSub);
+           const Wd = dd.gt.HA;
```

#### 1709. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12790-L12791` → after: `L12783-L12784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12783-L12784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12783-L12784) · [Before (L12790-L12791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12790-L12791)

```diff
-             if (null !== rr.JC && Zr.has(rr.JC)) try {
-               Zr.delete(rr.JC)
+             if (null !== dd.JA && Wd.has(dd.JA)) try {
+               Wd.delete(dd.JA)
```

#### 1710. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12793` → after: `L12786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12786) · [Before (L12793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12793)

```diff
-               console.error(`Failed to cleanup attachment ${rr.JC} of entity ${Sr}:`, Wr.stack)
+               console.error(`Failed to cleanup attachment ${dd.JA} of entity ${Od}:`, Fd.stack)
```

#### 1711. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12797` → after: `L12790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12790) · [Before (L12797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12797)

```diff
-         nB: function(Sr, Qr) {
+         yE: function(Od, md) {
```

#### 1712. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12801-L12802` → after: `L12794-L12795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12794-L12795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12794-L12795) · [Before (L12801-L12802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12801-L12802)

```diff
-             const Sr = null !== (Wr = null === (ar = rr.YB.rQr(jr.XM)) || void 0 === ar ? void 0 : ar.JC) && void 0 !== Wr ? Wr : null;
-             null === Sr || (0, Zr.pausesOutOfView)(rr, jr.XM, Sr) || Or(rr, jr)
+             const Od = null !== (Fd = null === (Rd = dd.qE.Vmd(Xd.QG)) || void 0 === Rd ? void 0 : Rd.JA) && void 0 !== Fd ? Fd : null;
+             null === Od || (0, Wd.pausesOutOfView)(dd, Xd.QG, Od) || xd(dd, Xd)
```

#### 1713. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12809` → after: `L12802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12802) · [Before (L12809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12809)

```diff
-       const Qr = rr.YB.getState(Sr, rr.YB.names.meshAttachments);
+       const md = dd.qE.getState(Od, dd.qE.names.meshAttachments);
```

#### 1714. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12814-L12816` → after: `L12807-L12809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12807-L12809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12807-L12809) · [Before (L12814-L12816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12814-L12816)

```diff
-       const Qr = rr.Ox.bC,
-         Zr = rr.mq / 1e3;
-       for (const Wr of Sr.animatedAttachments) Wr.clipPose.write(Qr, Wr.JC, Zr)
+       const md = dd.gt.HA,
+         Wd = dd.pB / 1e3;
+       for (const Fd of Od.animatedAttachments) Fd.clipPose.write(md, Fd.JA, Wd)
```

#### 1715. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12820` → after: `L12813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12813) · [Before (L12820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12820)

```diff
-       const Zr = rr.YB.getState(Sr, rr.YB.names.meshAttachments);
+       const Wd = dd.qE.getState(Od, dd.qE.names.meshAttachments);
```

#### 1716. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12823` → after: `L12816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12816) · [Before (L12823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12823)

```diff
-           if (Wr.JC === Qr) return !0;
+           if (Fd.JA === md) return !0;
```

#### 1717. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12829` → after: `L12822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12822) · [Before (L12829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12829)

```diff
-       return Pr(rr, Sr, null !== (Zr = Qr.attachments) && void 0 !== Zr ? Zr : [])
+       return ud(dd, Od, null !== (Wd = md.attachments) && void 0 !== Wd ? Wd : [])
```

#### 1718. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12838-L12841` → after: `L12831-L12834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12831-L12834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12831-L12834) · [Before (L12838-L12841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12838-L12841)

```diff
-       if ((0, ar.L)(rr)) return console.error("Cannot update mesh attachments for invalid eId", rr), Zr;
-       const Ir = (0, Wr.e)(),
-         fr = Ir.YB.rQr(rr);
-       if (!fr) return console.error(`Cannot update mesh attachments for entity ${rr} as it has no mesh`), Zr;
+       if ((0, Rd.O)(dd)) return console.error("Cannot update mesh attachments for invalid eId", dd), Wd;
+       const Kd = (0, Fd.c)(),
+         hd = Kd.qE.Vmd(dd);
+       if (!hd) return console.error(`Cannot update mesh attachments for entity ${dd} as it has no mesh`), Wd;
```

#### 1719. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12843` → after: `L12836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12836) · [Before (L12843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12843)

```diff
-         JC: Er
+         JA: vd
```

#### 1720. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12845-L12848` → after: `L12838-L12841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12838-L12841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12838-L12841) · [Before (L12845-L12848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12845-L12848)

```diff
-       if (null === Er) return console.error(`Cannot update mesh attachments for entity ${rr} as it has no thinObjectId`), Zr;
-       const xr = Ir.YB.getState(rr, Ir.YB.names.meshAttachments);
-       if (!xr) return console.error(`Cannot update mesh attachments for entity ${rr} as it has no meshAttachments component`), Zr;
-       for (const Wr of xr.attachments)(0, jr.ob)(Wr.owners, Sr);
+       if (null === vd) return console.error(`Cannot update mesh attachments for entity ${dd} as it has no thinObjectId`), Wd;
+       const td = Kd.qE.getState(dd, Kd.qE.names.meshAttachments);
+       if (!td) return console.error(`Cannot update mesh attachments for entity ${dd} as it has no meshAttachments component`), Wd;
+       for (const Fd of td.attachments)(0, Xd.ib)(Fd.owners, Od);
```

#### 1721. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12855` → after: `L12848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12848) · [Before (L12855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12855)

```diff
-               Zr.owners.push(Qr), qr(rr, Zr.JC, jr.overlayColour), Wr = !0;
+               Wd.owners.push(md), Ad(dd, Wd.JA, Xd.overlayColour), Fd = !0;
```

#### 1722. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12861` → after: `L12854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12854) · [Before (L12861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12861)

```diff
-             JC: null,
+             JA: null,
```

#### 1723. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12866` → after: `L12859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12859) · [Before (L12866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12866)

```diff
-         return pr(rr.Ox.bC, Zr, Sr.attachments), ar
+         return Qd(dd.gt.HA, Wd, Od.attachments), Rd
```

#### 1724. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12868` → after: `L12861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12861) · [Before (L12868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12868)

```diff
-       const mr = Ir.Ox.bC;
+       const od = Kd.gt.HA;
```

#### 1725. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12871` → after: `L12864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12864) · [Before (L12871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12871)

```diff
-         0 === rr.owners.length && (null !== rr.JC && mr.delete(rr.JC), (0, jr.ob)(xr.attachments, rr), null !== rr.clipPose && (0, jr.ob)(xr.animatedAttachments, rr), Wr--)
+         0 === dd.owners.length && (null !== dd.JA && od.delete(dd.JA), (0, Xd.ib)(td.attachments, dd), null !== dd.clipPose && (0, Xd.ib)(td.animatedAttachments, dd), Fd--)
```

#### 1726. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12878-L12879` → after: `L12871-L12872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12871-L12872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12871-L12872) · [Before (L12878-L12879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12878-L12879)

```diff
-       const Qr = (0, Wr.e)(),
-         Zr = Qr.YB.getState(rr, Qr.YB.names.meshAttachments);
+       const md = (0, Fd.c)(),
+         Wd = md.qE.getState(dd, md.qE.names.meshAttachments);
```

#### 1727. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12881-L12882` → after: `L12874-L12875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12874-L12875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12874-L12875) · [Before (L12881-L12882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12881-L12882)

```diff
-       const jr = null === (Sr = Qr.YB.rQr(rr)) || void 0 === Sr ? void 0 : Sr.JC;
-       (0, ar.L)(jr) || pr(Qr.Ox.bC, jr, Zr.attachments)
+       const Xd = null === (Od = md.qE.Vmd(dd)) || void 0 === Od ? void 0 : Od.JA;
+       (0, Rd.O)(Xd) || Qd(md.gt.HA, Xd, Wd.attachments)
```

#### 1728. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12887` → after: `L12880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12880) · [Before (L12887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12887)

```diff
-       const Zr = rr.Ox.bC;
+       const Wd = dd.gt.HA;
```

#### 1729. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12894` → after: `L12887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12887) · [Before (L12894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12894)

```diff
-   39142: (rr, Sr, Qr) => {
+   39162: (dd, Od, md) => {
```

#### 1730. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12902-L12907` → after: `L12895-L12900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12895-L12900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12895-L12900) · [Before (L12902-L12907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12902-L12907)

```diff
-     var Zr = Qr(2383),
-       Wr = Qr(2049),
-       ar = Qr(379),
-       jr = Qr(39157),
-       Ir = Qr(39151),
-       fr = Qr(388),
+     var Wd = md(2402),
+       Fd = md(2057),
+       Rd = md(405),
+       Xd = md(39175),
+       Kd = md(39170),
+       hd = md(415),
```

#### 1731. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12909-L12911` → after: `L12902-L12904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12902-L12904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12902-L12904) · [Before (L12909-L12911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12909-L12911)

```diff
-       pr = Qr(39113),
-       xr = Qr(38552),
-       mr = Qr(39149);
+       Qd = md(39142),
+       td = md(38623),
+       od = md(39168);
```

#### 1732. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12915` → after: `L12908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12908) · [Before (L12915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12915)

```diff
-         this.isServerControlled = !1, this.defaultRotationsPerSecond = 5, this.childrenNodeParams = [], this.playerControlledRotationSoftTolerance = null, this.playerControlledRotationHardTolerance = null, this.modelYRotationOffset = 0, this.renderRotation = null, this.serverSetR … [truncated]
+         this.isServerControlled = !1, this.defaultRotationsPerSecond = 5, this.childrenNodeParams = [], this.playerControlledRotationSoftTolerance = null, this.playerControlledRotationHardTolerance = null, this.modelYRotationOffset = 0, this.renderRotation = null, this.serverSetR … [truncated]
```

#### 1733. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12924` → after: `L12917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12917) · [Before (L12924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12924)

```diff
-         zB: function(rr, Sr) {
+         QE: function(dd, Od) {
```

#### 1734. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12932-L12933` → after: `L12925-L12926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12925-L12926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12925-L12926) · [Before (L12932-L12933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12932-L12933)

```diff
-         bq: null,
-         nB: function(Sr, Qr) {
+         qS: null,
+         yE: function(Od, md) {
```

#### 1735. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12937` → after: `L12930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12930) · [Before (L12937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12937)

```diff
-             const Qr = rr.YB.rQr(ar.XM);
+             const md = dd.qE.Vmd(Rd.QG);
```

#### 1736. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12939` → after: `L12932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12932) · [Before (L12939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12939)

```diff
-               ar.Lx = !1;
+               Rd.wt = !1;
```

#### 1737. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12943` → after: `L12936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12936) · [Before (L12943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12943)

```diff
-               tZr: jr
+               fWd: Xd
```

#### 1738. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12945-L12946` → after: `L12938-L12939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12938-L12939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12938-L12939) · [Before (L12945-L12946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12945-L12946)

```diff
-             if (!(null !== (Zr = null === jr || void 0 === jr ? void 0 : jr.zZr) && void 0 !== Zr ? Zr : null === (Wr = Qr.mesh) || void 0 === Wr ? void 0 : Wr.isEnabled())) {
-               ar.Lx = !1;
+             if (!(null !== (Wd = null === Xd || void 0 === Xd ? void 0 : Xd.MWd) && void 0 !== Wd ? Wd : null === (Fd = md.mesh) || void 0 === Fd ? void 0 : Fd.isEnabled())) {
+               Rd.wt = !1;
```

#### 1739. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12950` → after: `L12943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12943) · [Before (L12950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12950)

```diff
-               JC: Ir
+               JA: Kd
```

#### 1740. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12952` → after: `L12945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12945) · [Before (L12952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12952)

```diff
-             jr ? ar._thinObjectId !== Ir && er(ar, Ir) : ar._rootMesh !== Qr.mesh && Kr(ar, Qr.mesh), jr && (0, xr.pausesOutOfView)(rr, ar.XM, Ir) ? ar.Lx = !0 : nr(rr, ar)
+             Xd ? Rd._thinObjectId !== Kd && Yd(Rd, Kd) : Rd._rootMesh !== md.mesh && gd(Rd, md.mesh), Xd && (0, td.pausesOutOfView)(dd, Rd.QG, Kd) ? Rd.wt = !0 : pd(dd, Rd)
```

#### 1741. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12959` → after: `L12952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12952) · [Before (L12959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12959)

```diff
-       Sr.Lx && null !== Sr._thinObjectId && rr.Ox.bC.has(Sr._thinObjectId) && nr(rr, Sr)
+       Od.wt && null !== Od._thinObjectId && dd.gt.HA.has(Od._thinObjectId) && pd(dd, Od)
```

#### 1742. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12963` → after: `L12956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12956) · [Before (L12963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12963)

```diff
-       const Qr = Sr.isServerControlled ? Sr.serverSetRotation[1] : rr.YB.jQr(Sr.XM).heading;
+       const md = Od.isServerControlled ? Od.serverSetRotation[1] : dd.qE.Pmd(Od.QG).heading;
```

#### 1743. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12968` → after: `L12961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12961) · [Before (L12968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12968)

```diff
-       const Qr = rr.YB.getState(Sr, "meshRotation");
+       const md = dd.qE.getState(Od, "meshRotation");
```

#### 1744. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12974-L12980` → after: `L12967-L12973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12967-L12973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12967-L12973) · [Before (L12974-L12980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12974-L12980)

```diff
-       Sr.Lx = !1;
-       const zr = rr.YB.ASr(rr.fC),
-         Yr = rr.YB.iQr(Sr.XM),
-         nr = Sr.XM === rr.fC,
-         er = (0, mr.e)(rr, Sr.XM, Yr),
-         Kr = rr.YB.jQr(rr.fC),
-         yr = rr.YB.jQr(Sr.XM),
+       Od.wt = !1;
+       const bd = dd.qE.Hmd(dd.YV),
+         Td = dd.qE.JWd(Od.QG),
+         pd = Od.QG === dd.YV,
+         Yd = (0, od.e)(dd, Od.QG, Td),
+         gd = dd.qE.Pmd(dd.YV),
+         wd = dd.qE.Pmd(Od.QG),
```

#### 1745. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12983-L12984` → after: `L12976-L12977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12976-L12977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12976-L12977) · [Before (L12983-L12984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12983-L12984)

```diff
-         const Qr = rr.bloxd.getResolvedPhysicsSettings(rr.fC, zr.physicsState);
-         null === Qr.fixedHeading && Qr.steering && zr._steeringActiveLastTick ? vr[1] = (0, Ir.i)(rr, zr) : vr[1] = (0, jr.x)(Qr, zr.steeringHeading, Sr.baseRenderRotation[1] + pr.e.getPlayerFacingHeading(rr))
+         const md = dd.bloxd.getResolvedPhysicsSettings(dd.YV, bd.physicsState);
+         null === md.fixedHeading && md.steering && bd._steeringActiveLastTick ? Ud[1] = (0, Kd.g)(dd, bd) : Ud[1] = (0, Xd.p)(md, bd.steeringHeading, Od.baseRenderRotation[1] + Qd.c.getPlayerFacingHeading(dd))
```

#### 1746. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12987-L12988` → after: `L12980-L12981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12980-L12981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12980-L12981) · [Before (L12987-L12988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12987-L12988)

```diff
-         if ((null === Yr || void 0 === Yr ? void 0 : Yr.wQr) && rr.bloxd.getRiddenVehicleEId(Yr.nU) === Sr.XM && null === rr.bloxd.getLifeformType(Sr.XM)) {
-           const rr = Wr.d.lerpWeight(Nr * Sr._accumulatedDt);
+         if ((null === Td || void 0 === Td ? void 0 : Td.UWd) && dd.bloxd.getRiddenVehicleEId(Td.xq) === Od.QG && null === dd.bloxd.getLifeformType(Od.QG)) {
+           const dd = Fd.e.lerpWeight(Nd * Od._accumulatedDt);
```

#### 1747. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12992-L12993` → after: `L12985-L12986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12985-L12986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12985-L12986) · [Before (L12992-L12993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12992-L12993)

```diff
-       const Or = er ? null !== (Qr = null === Kr || void 0 === Kr ? void 0 : Kr.speed) && void 0 !== Qr ? Qr : 0 : null !== (Zr = null === yr || void 0 === yr ? void 0 : yr.speed) && void 0 !== Zr ? Zr : 0,
-         Lr = null !== (fr = null === yr || void 0 === yr ? void 0 : yr.pose) && void 0 !== fr ? fr : "standing",
+       const xd = Yd ? null !== (md = null === gd || void 0 === gd ? void 0 : gd.speed) && void 0 !== md ? md : 0 : null !== (Wd = null === wd || void 0 === wd ? void 0 : wd.speed) && void 0 !== Wd ? Wd : 0,
+         Bd = null !== (hd = null === wd || void 0 === wd ? void 0 : wd.pose) && void 0 !== hd ? hd : "standing",
```

#### 1748. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12998-L12999` → after: `L12991-L12992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R12991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L12991-L12992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L12991-L12992) · [Before (L12998-L12999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L12998-L12999)

```diff
-         qr = !(er && !nr) && !0 === (null === (xr = rr.xG) || void 0 === xr || null === (Ur = xr[rr.fC]) || void 0 === Ur || null === (tr = Ur[Sr.XM]) || void 0 === tr ? void 0 : tr.lockHeadToBody),
-         Rr = null !== (hr = rr.YB.getState(Sr.XM, "animator")) && void 0 !== hr ? hr : null;
+         Ad = !(Yd && !pd) && !0 === (null === (td = dd.sG) || void 0 === td || null === (qd = td[dd.YV]) || void 0 === qd || null === (Hd = qd[Od.QG]) || void 0 === Hd ? void 0 : Hd.lockHeadToBody),
+         rd = null !== (yd = dd.qE.getState(Od.QG, "animator")) && void 0 !== yd ? yd : null;
```

#### 1749. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13008` → after: `L13001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13001) · [Before (L13008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13008)

```diff
-       const ar = (0, Zr.e)().Ox.bC.getNodeNames(Sr),
+       const Rd = (0, Wd.c)().gt.HA.getNodeNames(Od),
```

#### 1750. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13052` → after: `L13045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13045) · [Before (L13052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13052)

```diff
-       let vr = mr ? 0 : null !== fr && void 0 !== fr ? fr : 0,
+       let Ud = od ? 0 : null !== hd && void 0 !== hd ? hd : 0,
```

#### 1751. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13060` → after: `L13053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13053) · [Before (L13060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13060)

```diff
-           Xr = Math.max(Xr, null !== (Pr = tr[Zr].rotationsPerSecond) && void 0 !== Pr ? Pr : hr)
+           sd = Math.max(sd, null !== (ud = Hd[Wd].rotationsPerSecond) && void 0 !== ud ? ud : yd)
```

#### 1752. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13066-L13067` → after: `L13059-L13060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13059-L13060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13059-L13060) · [Before (L13066-L13067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13066-L13067)

```diff
-           Qr = mr ? 0 : null !== fr && void 0 !== fr ? fr : rr.softTolerance,
-           jr = mr ? null : null !== pr && void 0 !== pr ? pr : rr.hardTolerance,
+           md = od ? 0 : null !== hd && void 0 !== hd ? hd : dd.softTolerance,
+           Xd = od ? null : null !== Qd && void 0 !== Qd ? Qd : dd.hardTolerance,
```

#### 1753. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13071` → after: `L13064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13064) · [Before (L13071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13071)

```diff
-         const xr = mr ? Xr : null !== (Hr = rr.rotationsPerSecond) && void 0 !== Hr ? Hr : hr,
+         const td = od ? sd : null !== (Vd = dd.rotationsPerSecond) && void 0 !== Vd ? Vd : yd,
```

#### 1754. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13077` → after: `L13070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13070) · [Before (L13077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13077)

```diff
-           Qr < -vr ? Ir[Zr] = Tr[Zr] - vr : Qr > vr && (Ir[Zr] = Tr[Zr] + vr);
+           md < -Ud ? Kd[Wd] = Jd[Wd] - Ud : md > Ud && (Kd[Wd] = Jd[Wd] + Ud);
```

#### 1755. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13089` → after: `L13082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13082) · [Before (L13089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13089)

```diff
-       const qr = (0, Zr.e)().Ox.bC,
+       const Ad = (0, Wd.c)().gt.HA,
```

#### 1756. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13110` → after: `L13103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13103) · [Before (L13110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13110)

```diff
-   39172: (rr, Sr, Qr) => {
+   39191: (dd, Od, md) => {
```

#### 1757. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13115-L13118` → after: `L13108-L13111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13108-L13111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13108-L13111) · [Before (L13115-L13118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13115-L13118)

```diff
-     var Zr = Qr(39195),
-       Wr = Qr(208),
-       ar = Qr(7424),
-       jr = Qr(388),
+     var Wd = md(39220),
+       Fd = md(218),
+       Rd = md(7410),
+       Xd = md(415),
```

#### 1758. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13120-L13126` → after: `L13113-L13119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13113-L13119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13113-L13119) · [Before (L13120-L13126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13120-L13126)

```diff
-       fr = Qr(39179),
-       Er = Qr(5779),
-       pr = Qr(39157),
-       xr = Qr(39160),
-       mr = Qr(39167);
-     var Nr = Qr(2049),
-       Ur = Qr(379);
+       hd = md(39199),
+       vd = md(5733),
+       Qd = md(39175),
+       td = md(39180),
+       od = md(39185);
+     var Nd = md(2057),
+       qd = md(405);
```

#### 1759. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13131` → after: `L13124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13124) · [Before (L13131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13131)

```diff
-     const er = [71, 0, 1, "h", 3, "a", 9, "g", 5, "f", "d", 8, 255, "length", 2, 205, 4, "undefined", 63, 6, "fromCodePoint", 7, 12, "push", void 0, 52, 227, 91, 8191, 88, 13, 14, 33554432, 67108864, 68, 212, 241, "i", 123, 150, !0, 256, 65537, 100, 30, 249, "Lh", 194, 226, 119,  … [truncated]
+     const Yd = ["b", 0, 1, 8, 6, 95, "i", 157, "e", 28, "d", 255, "length", "undefined", void 0, 2, 125, 129, 110, 63, "fromCodePoint", 7, 12, "push", 222, 198, 3, 173, "h", 9, 85, 156, 91, 197, 99, 8191, 88, 13, 14, "c", 204, "g", 243, 127, 128, 38, 185, 122, 163, 144, 5, 218, 2 … [truncated]
```

#### 1760. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13134-L13149` → after: `L13127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13127) · [Before (L13134-L13149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13134-L13149)

```diff
-       return rr[er[13]] = er[2], typeof Yr[rr[er[1]]] === er[17] ? Yr[rr[er[1]]] = function(...rr) {
-         for (Tr(rr[er[13]] = er[2], rr[er[5]] = 'x;`w+]:6=_^y2/>9z48<"!$1{v.[0*%35?@|)u&~(,#7FOfkP}LBbGhJEpaldWHeXqYRCAongjVQmIisZDtKMrTScUN', rr[-er[0]] = "" + (rr[er[1]] || ""), rr[er[4]] = rr[-er[0]].length, rr[er[10]] = [], rr[er[8]] = er[1], rr[er[9]] = er[1], rr[er[7]] = -e … [truncated]
-           if (rr[er[6]] = rr[er[5]].indexOf(rr[-er[0]][rr[er[3]]]), rr[er[6]] !== -er[2])
-             if (rr[er[7]] < er[1]) rr[er[7]] = rr[er[6]];
-             else {
-               Tr(rr[er[7]] += rr[er[6]] * er[27], rr[er[8]] |= rr[er[7]] << rr[er[9]], rr[er[9]] += (rr[er[7]] & er[28]) > er[29] ? er[30] : er[31]);
-               do {
-                 Tr(rr[er[10]].push(rr[er[8]] & er[12]), rr[er[8]] >>= er[11], rr[er[9]] -= er[11])
-               } while (rr[er[9]] > er[21]);
-               rr[er[7]] = -er[2]
-             } return rr[er[7]] > -er[2] && rr[er[10]].push((rr[er[8]] | rr[er[7]] << rr[er[9]]) & er[12]), yr(rr[er[10]])
-       }(nr[rr[er[1]]]) : Yr[rr[er[1]]]
-     }
- 
-     function yr(rr) {
-       return typeof Gr !== er[17] && Gr ? (new Gr).decode(new kr(rr)) : typeof Ar !== er[17] && Ar ? Ar.from(rr).toString("utf-8") : wr(rr)
+       return dd[Yd[12]] = Yd[2], typeof Ld !== Yd[13] && Ld ? (new Ld).decode(new Pd(dd[Yd[1]])) : typeof zd !== Yd[13] && zd ? zd.from(dd[Yd[1]]).toString("utf-8") : Dd(dd[Yd[1]])
```

#### 1761. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13157-L13158` → after: `L13135-L13136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13135-L13136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13135-L13136) · [Before (L13157-L13158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13157-L13158)

```diff
-     Tr(Yr = {}, nr = ['vf_iIDL`T/0^]gm~#.Eh[pMaP!:s;dG0c>8QK&m2xp/["9b(|pR.1iS44p~', "z(u6wD_vBh=/fu*1<:3+aouk)pB", ':hdG)lK,QqbZu/%*f:1?TO~DP2cXpzh@[foJAJq|p"aZi`_~l@O^/', '`hI3GBoT52W!?g34uPvgLuQ*6/T;Q>J|"nbI:A^Tr/', "c4S}g@gbJ/Noo>l0i>#BIL<G?_", '1V/J9LH{WH":RtW4y(.[<LIsQ4aj_z … [truncated]
-       Tr(rr[er[13]] = er[1], rr[er[5]] = [function() {
+     Ed(Td = {}, pd = ["&FDu_:Gj6Dz7G;xAY%dR;p>`VCw{V!viXV", "v+?Q(,cd}[U1~0KS~FCFk&lulO[OoHxu", "V2>/Vj=.", "i:Y8z2r.LshYW]niVnqs}G{_9wXu*1Mtf|k~oJd9peLLsi{];J~*n{V", "XfH$?^&dgDMC8xCtxsdsljQj[PB&,5NE,PW/}PV", "q:3Q_;KSr`UsJ$jujih9>", "g5M~40jS?P[B?bS4bLTdHLkMG^ZkYb0i+|:e*@Y+l_]E … [truncated]
+       var dd, Od, md, Wd = [function() {
```

#### 1762. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13166` → after: `L13144-L13145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13144-L13145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13144-L13145) · [Before (L13166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13166)

```diff
-       }], rr[er[2]] = er[24], rr[er[14]] = []);
+       }];
+       Ed(dd = void 0, Od = []);
```

#### 1763. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13168` → after: `L13147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13147) · [Before (L13168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13168)

```diff
-         Tr(rr[er[2]] = Object, rr[er[14]][er[23]]("".__proto__.constructor.name))
+         Ed(dd = Object, Od[Yd[23]]("".__proto__.constructor.name))
```

#### 1764. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13170-L13173` → after: `L13149-L13153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13149-L13153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13149-L13153) · [Before (L13170-L13173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13170-L13173)

```diff
-       rr: for (rr[-er[15]] = er[1]; rr[-er[15]] < rr[er[5]][er[13]]; rr[-er[15]]++) try {
-         for (rr[er[2]] = rr[er[5]][rr[-er[15]]](), rr[er[16]] = er[1]; rr[er[16]] < rr[er[14]][er[13]]; rr[er[16]]++)
-           if (typeof rr[er[2]][rr[er[14]][rr[er[16]]]] === er[17]) continue rr;
-         return rr[er[2]]
+       dd: for (md = Yd[1]; md < Wd[Yd[12]]; md++) try {
+         var Fd;
+         for (dd = Wd[md](), Fd = Yd[1]; Fd < Od[Yd[12]]; Fd++)
+           if (typeof dd[Od[Fd]] === Yd[13]) continue dd;
+         return dd
```

#### 1765. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13175-L13229` → after: `L13155-L13160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13155-L13160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13155-L13160) · [Before (L13175-L13229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13175-L13229)

```diff
-       return rr[er[2]] || this
-     }() || {}, Gr = Mr.TextDecoder, kr = Mr.Uint8Array, Ar = Mr.Dp, Vr = Mr.String || String, ir = Mr.Array || Array, wr = function() {
-       var rr, Sr, Qr = new ir(er[68]);
-       return Tr(rr = Vr[er[20]] || Vr.fromCharCode, Sr = []),
-         function(Zr) {
-           var Wr, ar, jr, Ir;
-           for (Tr(ar = void 0, jr = Zr[er[13]], Sr[er[13]] = er[1]), Ir = er[1]; Ir < jr;) Tr(ar = Zr[Ir++], ar <= er[67] ? Wr = ar : ar <= 223 ? Wr = (31 & ar) << er[19] | Zr[Ir++] & er[18] : ar <= 239 ? Wr = (15 & ar) << er[22] | (Zr[Ir++] & er[18]) << er[19] | Zr[Ir++] & er[18 … [truncated]
-           return Sr.join("")
-         }
-     }()), Kr(106) + "C" in Br && function(...rr) {
-       rr[er[13]] = er[1];
-       const Sr = require("big-integer");
-       Tr(rr[er[5]] = class {
-         static randomPrime(...rr) {
-           rr[er[13]] = er[2];
-           const Qr = Sr.one.shiftLeft(rr[er[1]] - er[2]),
- ... (39 more removed lines; see GitHub link above)
+       return dd || this
+     }() || {}, Ld = nd.TextDecoder, Pd = nd.Uint8Array, zd = nd.CQ, cd = nd.String || String, jd = nd.Array || Array, Dd = function(...dd) {
+       return Ed(dd[Yd[12]] = Yd[1], dd[Yd[24]] = new jd(Yd[44]), dd[-Yd[25]] = cd[Yd[20]] || cd.fromCharCode, dd[Yd[15]] = []),
+         function(...Od) {
+           for (Ed(Od[Yd[12]] = Yd[2], Od[Yd[2]] = Yd[14], Od[-Yd[18]] = Yd[14], Od[Yd[17]] = Od[Yd[1]][Yd[12]], dd[Yd[15]][Yd[12]] = Yd[1]), Od[-Yd[16]] = Yd[1]; Od[-Yd[16]] < Od[Yd[17]];) Ed(Od[-Yd[18]] = Od[Yd[1]][Od[-Yd[16]]++], Od[-Yd[18]] <= Yd[43] ? Od[Yd[2]] = Od[-Yd[18]]  … [truncated]
+           return dd[Yd[15]].join("")
```

#### 1766. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13231-L13232` → after: `L13162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13162) · [Before (L13231-L13232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13231-L13232)

```diff
-       }, module.exports = rr[er[5]])
-     }(), zr = (rr, Sr, Qr, Zr, ar, jr, fr, Er, pr) => {
+     }()), bd = (...dd) => {
```

#### 1767. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13234-L13239` → after: `L13164-L13167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13164-L13167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13164-L13167) · [Before (L13234-L13239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13234-L13239)

```diff
-         return rr[er[13]] = er[2], typeof Yr[rr[er[1]]] === er[17] ? Yr[rr[er[1]]] = function(rr) {
-           var Sr, Qr, Zr, Wr, ar, jr, Ir;
-           for (Tr(Sr = "" + (rr || ""), Qr = Sr.length, Zr = [], Wr = er[1], ar = er[1], jr = -er[2]), Ir = er[1]; Ir < Qr; Ir++) {
-             var fr = 'M@.Hr;pTjk("uI~0QW<B!z[JE$qgt,*cYK23Z+vbD7:o1m_Re)PlyO^aUGLx4|f]9/5%wd`6CSNXis?V&A>h{n=#8}F'.indexOf(Sr[Ir]);
-             if (fr !== -er[2])
-               if (jr < er[1]) jr = fr;
+         return dd[Yd[12]] = Yd[2], typeof Td[dd[Yd[1]]] === Yd[13] ? Td[dd[Yd[1]]] = function(...dd) {
+           for (Ed(dd[Yd[12]] = Yd[2], dd[-Yd[30]] = '.1x0_35}:?4,"7<bHL;gnCV%/cz^IdJ$tZOrU[uh!vp~)Si`*wkeB#{mNXoQ6R9KYs|G@8Dlfa>PFq2+&jTEWA(]=yM', dd[Yd[27]] = "" + (dd[Yd[1]] || ""), dd[Yd[26]] = dd[Yd[27]].length, dd[Yd[10]] = [], dd[Yd[33]] = Yd[1], dd[Yd[34]] = Yd[1], dd[Yd[3 … [truncated]
+             if (dd[Yd[29]] = dd[-Yd[30]].indexOf(dd[Yd[27]][dd[Yd[28]]]), dd[Yd[29]] !== -Yd[2])
+               if (dd[Yd[31]] < Yd[1]) dd[Yd[31]] = dd[Yd[29]];
```

#### 1768. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13241` → after: `L13169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13169) · [Before (L13241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13241)

```diff
-                 Tr(jr += fr * er[27], Wr |= jr << ar, ar += (jr & er[28]) > er[29] ? er[30] : er[31]);
+                 Ed(dd[Yd[31]] += dd[Yd[29]] * Yd[32], dd[Yd[33]] |= dd[Yd[31]] << dd[Yd[34]], dd[Yd[34]] += (dd[Yd[31]] & Yd[35]) > Yd[36] ? Yd[37] : Yd[38]);
```

#### 1769. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13243-L13248` → after: `L13171-L13174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13171-L13174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13171-L13174) · [Before (L13243-L13248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13243-L13248)

```diff
-                   Tr(Zr.push(Wr & er[12]), Wr >>= er[11], ar -= er[11])
-                 } while (ar > er[21]);
-                 jr = -er[2]
-               }
-           }
-           return jr > -er[2] && Zr.push((Wr | jr << ar) & er[12]), yr(Zr)
+                   Ed(dd[Yd[10]].push(dd[Yd[33]] & Yd[11]), dd[Yd[33]] >>= Yd[3], dd[Yd[34]] -= Yd[3])
+                 } while (dd[Yd[34]] > Yd[21]);
+                 dd[Yd[31]] = -Yd[2]
+               } return dd[Yd[31]] > -Yd[2] && dd[Yd[10]].push((dd[Yd[33]] | dd[Yd[31]] << dd[Yd[34]]) & Yd[11]), gd(dd[Yd[10]])
```

#### 1770. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13251-L13272` → after: `L13177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13177) · [Before (L13251-L13272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13251-L13272)

```diff
-       Kr(107) + er[50] in Br && function(...rr) {
-         function Sr(rr) {
-           return rr[er[2]] * er[33] + (rr[er[1]] < er[1] ? er[32] | rr[er[1]] : rr[er[1]])
-         }
- 
-         function Qr(...rr) {
-           switch (rr[er[13]] = er[2], ((rr[er[1]] & er[32]) !== er[1]) * er[2] + (rr[er[1]] < er[1]) * er[14]) {
-             case er[1]:
-               return [rr[er[1]] % er[32], Math.trunc(rr[er[1]] / er[33])];
-             case er[2]:
-               return [rr[er[1]] % er[32] - er[32], Math.trunc(rr[er[1]] / er[33]) + er[2]];
-             case er[14]:
-               return [((rr[er[1]] + er[32]) % er[32] + er[32]) % er[32], Math.round(rr[er[1]] / er[33])];
-             case er[4]:
-               return [rr[er[1]] % er[32], Math.trunc(rr[er[1]] / er[33])]
-           }
- ... (6 more removed lines; see GitHub link above)
+       dd[Yd[12]] = Yd[29], Od(Yd[18]) in wd && function(...dd) {
```

#### 1771. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13274-L13276` → after: `L13179-L13181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13179-L13181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13179-L13181) · [Before (L13274-L13276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13274-L13276)

```diff
-           for (Tr(rr[er[13]] = er[2], rr[er[2]] = '4GfmP+Ut|.`bJFhlHE3>j}2D#$igqp1XQ[?90;7M8SW=dZIC_Vz,Oy"%R:~({TnY6<!scBx5wv)^Loak/&Ae*K]Nru@', rr[er[36]] = "" + (rr[er[1]] || ""), rr[er[4]] = rr[er[36]].length, rr[er[16]] = [], rr[er[8]] = er[1], rr[er[19]] = er[1], rr[er[38]]  … [truncated]
-             if (rr[er[37]] = rr[er[2]].indexOf(rr[er[36]][rr[er[11]]]), rr[er[37]] !== -er[2])
-               if (rr[er[38]] < er[1]) rr[er[38]] = rr[er[37]];
+           for (Ed(dd[Yd[12]] = Yd[2], dd[Yd[2]] = 'AZU=/]`x8BQ6z~bV2,1+I%&Cf(Dj7m0)Gs@gMcP4wHT>R3uKdXL;:Wa5O^9qSv#*EFkl"|i?<{}Yh[JN_p.erotn!$y', dd[Yd[15]] = "" + (dd[Yd[1]] || ""), dd[Yd[39]] = dd[Yd[15]].length, dd[Yd[42]] = [], dd[Yd[8]] = Yd[1], dd[Yd[4]] = Yd[1], dd[Yd[41]]  … [truncated]
+             if (dd[-Yd[40]] = dd[Yd[2]].indexOf(dd[Yd[15]][dd[Yd[3]]]), dd[-Yd[40]] !== -Yd[2])
+               if (dd[Yd[41]] < Yd[1]) dd[Yd[41]] = dd[-Yd[40]];
```

#### 1772. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13278` → after: `L13183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13183) · [Before (L13278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13278)

```diff
-                 Tr(rr[er[38]] += rr[er[37]] * er[27], rr[er[8]] |= rr[er[38]] << rr[er[19]], rr[er[19]] += (rr[er[38]] & er[28]) > er[29] ? er[30] : er[31]);
+                 Ed(dd[Yd[41]] += dd[-Yd[40]] * Yd[32], dd[Yd[8]] |= dd[Yd[41]] << dd[Yd[4]], dd[Yd[4]] += (dd[Yd[41]] & Yd[35]) > Yd[36] ? Yd[37] : Yd[38]);
```

#### 1773. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13280-L13283` → after: `L13185-L13188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13185-L13188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13185-L13188) · [Before (L13280-L13283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13280-L13283)

```diff
-                   Tr(rr[er[16]].push(rr[er[8]] & er[12]), rr[er[8]] >>= er[11], rr[er[19]] -= er[11])
-                 } while (rr[er[19]] > er[21]);
-                 rr[er[38]] = -er[2]
-               } return rr[er[38]] > -er[2] && rr[er[16]].push((rr[er[8]] | rr[er[38]] << rr[er[19]]) & er[12]), yr(rr[er[16]])
+                   Ed(dd[Yd[42]].push(dd[Yd[8]] & Yd[11]), dd[Yd[8]] >>= Yd[3], dd[Yd[4]] -= Yd[3])
+                 } while (dd[Yd[4]] > Yd[21]);
+                 dd[Yd[41]] = -Yd[2]
+               } return dd[Yd[41]] > -Yd[2] && dd[Yd[42]].push((dd[Yd[8]] | dd[Yd[41]] << dd[Yd[4]]) & Yd[11]), gd(dd[Yd[42]])
```

#### 1774. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13287` → after: `L13192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13192) · [Before (L13287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13287)

```diff
-           return rr[er[13]] = er[2], typeof Yr[rr[er[1]]] === er[17] ? Yr[rr[er[1]]] = Rr(nr[rr[er[1]]]) : Yr[rr[er[1]]]
+           return dd[Yd[12]] = Yd[2], typeof Td[dd[Yd[1]]] === Yd[13] ? Td[dd[Yd[1]]] = Od(pd[dd[Yd[1]]]) : Td[dd[Yd[1]]]
```

#### 1775. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13289-L13298` → after: `L13194-L13197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13194-L13197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13194-L13197) · [Before (L13289-L13298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13289-L13298)

```diff
-         return void Tr((0, mr[er[63]])(Sr, Qr, Zr, ar, jr, fr, rr), function(rr, Sr, Qr, Zr) {
-           if (null === rr) return;
-           if (Qr.Lh[1] < -rr.maxFallSpeed) {
-             const Wr = Zr / 1e3,
-               ar = (Nr.d.lerpWeight(Wr / rr.slowDownSeconds) * (-rr.maxFallSpeed - Qr.Lh[1]) - (rr.compensateGravity ? Sr.physics.gravity[1] * Qr.gravityMultiplier * Wr : 0)) * Qr.sj / Wr;
-             Ir().set(tr, 0, ar, 0), Qr.applyForce(tr)
-           }
-         }(rr[gr(112) + gr(er[51]) + gr(114) + gr(115)], Sr, jr, Er))
-       }
-       if (pr) {
+         dd[Yd[12]] = Yd[1], Ed(dd[Yd[10]] = md(111) + md(112) + md(113) + md(114) + md(115) + md(Yd[77]) + "om", dd[-Yd[45]] = md(117) + md(Yd[84]) + md(Yd[54]) + md(120) + md(121) + "?", dd[Yd[46]] = md(Yd[47]) + md(123) + md(124) + md(Yd[16]) + md(126) + md(Yd[43]) + md(Yd[44]) … [truncated]
+       }();
+       const md = dd[Yd[1]][Od(Yd[17]) + Od(130) + Od(131)];
+       if (null === md) {
```

#### 1776. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13300-L13302` → after: `L13199-L13201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13199-L13201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13199-L13201) · [Before (L13300-L13302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13300-L13302)

```diff
-           for (Tr(rr[er[13]] = er[2], rr[er[2]] = 'A*tO+hY0neqzjR&DWPVZH?ksd7F^rM#<)KXpxNu|i;g{EaBClb[JT~8>woc$:6IG}LS9Qm.f"@`vy51_(2=4],!%/3U', rr[er[14]] = "" + (rr[er[1]] || ""), rr[er[4]] = rr[er[14]].length, rr[er[16]] = [], rr[er[39]] = er[1], rr[er[19]] = er[1], rr[er[7]]  … [truncated]
-             if (rr[er[6]] = rr[er[2]].indexOf(rr[er[14]][rr[er[11]]]), rr[er[6]] !== -er[2])
-               if (rr[er[7]] < er[1]) rr[er[7]] = rr[er[6]];
+           for (Ed(dd[Yd[12]] = Yd[2], dd[Yd[2]] = ',GOfCUpqdPeo6tj]wvWRcN5@hg1_.$9~SV+y*LHA>"Q<!Z`|ki}&JnM/B=ru{I^DK4Ts:x)[z(YF%E387lX#0?2am;b', dd[Yd[48]] = "" + (dd[Yd[1]] || ""), dd[Yd[47]] = dd[Yd[48]].length, dd[Yd[52]] = [], dd[Yd[50]] = Yd[1], dd[Yd[51]] = Yd[1], dd[Yd[41] … [truncated]
+             if (dd[Yd[29]] = dd[Yd[2]].indexOf(dd[Yd[48]][dd[-Yd[49]]]), dd[Yd[29]] !== -Yd[2])
+               if (dd[Yd[41]] < Yd[1]) dd[Yd[41]] = dd[Yd[29]];
```

#### 1777. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13304` → after: `L13203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13203) · [Before (L13304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13304)

```diff
-                 Tr(rr[er[7]] += rr[er[6]] * er[27], rr[er[39]] |= rr[er[7]] << rr[er[19]], rr[er[19]] += (rr[er[7]] & er[28]) > er[29] ? er[30] : er[31]);
+                 Ed(dd[Yd[41]] += dd[Yd[29]] * Yd[32], dd[Yd[50]] |= dd[Yd[41]] << dd[Yd[51]], dd[Yd[51]] += (dd[Yd[41]] & Yd[35]) > Yd[36] ? Yd[37] : Yd[38]);
```

#### 1778. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13306-L13309` → after: `L13205-L13208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13205-L13208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13205-L13208) · [Before (L13306-L13309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13306-L13309)

```diff
-                   Tr(rr[er[16]].push(rr[er[39]] & er[12]), rr[er[39]] >>= er[11], rr[er[19]] -= er[11])
-                 } while (rr[er[19]] > er[21]);
-                 rr[er[7]] = -er[2]
-               } return rr[er[7]] > -er[2] && rr[er[16]].push((rr[er[39]] | rr[er[7]] << rr[er[19]]) & er[12]), yr(rr[er[16]])
+                   Ed(dd[Yd[52]].push(dd[Yd[50]] & Yd[11]), dd[Yd[50]] >>= Yd[3], dd[Yd[51]] -= Yd[3])
+                 } while (dd[Yd[51]] > Yd[21]);
+                 dd[Yd[41]] = -Yd[2]
+               } return dd[Yd[41]] > -Yd[2] && dd[Yd[52]].push((dd[Yd[50]] | dd[Yd[41]] << dd[Yd[51]]) & Yd[11]), gd(dd[Yd[52]])
```

#### 1779. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13312-L13313` → after: `L13211-L13212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13211-L13212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13211-L13212) · [Before (L13312-L13313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13312-L13313)

```diff
-         function Mr(rr) {
-           return typeof Yr[rr] === er[17] ? Yr[rr] = Cr(nr[rr]) : Yr[rr]
+         function td(...dd) {
+           return dd[Yd[12]] = Yd[2], typeof Td[dd[Yd[1]]] === Yd[13] ? Td[dd[Yd[1]]] = Qd(pd[dd[Yd[1]]]) : Td[dd[Yd[1]]]
```

#### 1780. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13316` → after: `L13215-L13216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13215-L13216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13215-L13216) · [Before (L13316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13316)

```diff
-         function Gr() {
+         function bd(...dd) {
+           dd[Yd[12]] = Yd[1];
```

#### 1781. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13318` → after: `L13218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13218) · [Before (L13318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13318)

```diff
-           module.exports = class {
+           Ed(dd[Yd[53]] = class {
```

#### 1782. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13320` → after: `L13220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13220) · [Before (L13320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13320)

```diff
-               Sr[er[13]] = er[2];
+               dd[Yd[12]] = Yd[2];
```

#### 1783. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13323` → after: `L13223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13223) · [Before (L13323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13323)

```diff
-               for (; er[40];) {
+               for (; Yd[60];) {
```

#### 1784. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13325` → after: `L13225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13225) · [Before (L13325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13325)

```diff
-                 if (Sr.isProbablePrime(er[41])) return Sr
+                 if (dd.isProbablePrime(256)) return dd
```

#### 1785. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13329-L13330` → after: `L13229-L13230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13229-L13230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13229-L13230) · [Before (L13329-L13330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13329-L13330)

```diff
-               Sr[er[13]] = er[2];
-               const Qr = rr(er[42]);
+               dd[Yd[12]] = Yd[2];
+               const md = Od(65537);
```

#### 1786. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13332` → after: `L13232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13232) · [Before (L13332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13332)

```diff
-               Sr[er[5]] = er[24];
+               dd[Yd[2]] = Yd[14];
```

#### 1787. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13334-L13335` → after: `L13234-L13235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13234-L13235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13234-L13235) · [Before (L13334-L13335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13334-L13335)

```diff
-                 Tr(Zr = this.randomPrime(Sr[er[1]] / er[14]), Wr = this.randomPrime(Sr[er[1]] / er[14]), Sr[er[5]] = rr.lcm(Zr.prev(), Wr.prev()))
-               } while (rr.gcd(Qr, Sr[er[5]]).notEquals(er[2]) || Zr.minus(Wr).abs().shiftRight(Sr[er[1]] / er[14] - er[43]).isZero());
+                 Ed(Wd = this.randomPrime(dd[Yd[1]] / Yd[15]), Fd = this.randomPrime(dd[Yd[1]] / Yd[15]), dd[Yd[2]] = Od.lcm(Wd.prev(), Fd.prev()))
+               } while (Od.gcd(md, dd[Yd[2]]).notEquals(Yd[2]) || Wd.minus(Fd).abs().shiftRight(dd[Yd[1]] / Yd[15] - 100).isZero());
```

#### 1788. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13339` → after: `L13239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13239) · [Before (L13339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13339)

```diff
-                 d: Qr.modInv(Sr[er[5]])
+                 d: md.modInv(dd[Yd[2]])
```

#### 1789. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13343` → after: `L13243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13243) · [Before (L13343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13343)

```diff
-               return Sr[er[13]] = er[4], rr(Sr[er[1]]).modPow(Sr[er[14]], Sr[er[2]])
+               return dd[Yd[12]] = Yd[26], Od(dd[Yd[1]]).modPow(dd[Yd[15]], dd[Yd[2]])
```

#### 1790. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13349` → after: `L13249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13249) · [Before (L13349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13349)

```diff
-               Sr[er[13]] = er[2];
+               dd[Yd[12]] = Yd[2];
```

#### 1791. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13354` → after: `L13254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13254) · [Before (L13354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13354)

```diff
-               rr[er[13]] = er[2];
+               dd[Yd[12]] = Yd[2];
```

#### 1792. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13356-L13359` → after: `L13256-L13259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13256-L13259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13256-L13259) · [Before (L13356-L13359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13356-L13359)

```diff
-               rr[er[45]] = "";
-               for (let Qr = er[1]; Qr < Sr.length; Qr += er[14]) {
-                 let Zr = Number(Sr.substr(Qr, er[14]));
-                 Zr <= er[44] ? (rr[er[45]] += String.fromCharCode(Number(Sr.substr(Qr, er[4]))), Qr++) : rr[er[45]] += String.fromCharCode(Zr)
+               dd[Yd[53]] = "";
+               for (let md = Yd[1]; md < Od.length; md += Yd[15]) {
+                 let Wd = Number(Od.substr(md, Yd[15]));
+                 Wd <= Yd[98] ? (dd[Yd[53]] += String.fromCharCode(Number(Od.substr(md, Yd[26]))), md++) : dd[Yd[53]] += String.fromCharCode(Wd)
```

#### 1793. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13361` → after: `L13261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13261) · [Before (L13361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13361)

```diff
-               return rr[er[45]]
+               return dd[Yd[53]]
```

#### 1794. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13365` → after: `L13326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13326) · [Before (L13365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13365)

```diff
-         xr(116) in Br && Gr(), Tr(Zr[er[62]] = Ir()[Mr(117)](jr[er[46]]), Ir()[Mr(118)](Zr[er[55]], jr[er[46]]))
+         Ed(dd[Yd[26]][Yd[87]] = Kd()[Sd(139)](dd[Yd[50]][Yd[67]]), Kd()[Sd(140)](dd[Yd[26]][Yd[82]], dd[Yd[50]][Yd[67]]))
```

#### 1795. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13368-L13370` → after: `L13329-L13331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13329-L13331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13329-L13331) · [Before (L13368-L13370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13368-L13370)

```diff
-           for (Tr(rr[er[13]] = er[2], rr[er[47]] = 'uO}or2KYbx)H]TDG5wW1Q@gjA;Zhq/N|F<dEa>B.m4"={*y7+X[p(8?StskP3`il#JeUM~:^_V%f!R&L9vz,c6I$nC0', rr[er[14]] = "" + (rr[er[1]] || ""), rr[er[4]] = rr[er[14]].length, rr[er[16]] = [], rr[-er[48]] = er[1], rr[er[19]] = er[1], rr[er[21 … [truncated]
-             if (rr[er[6]] = rr[er[47]].indexOf(rr[er[14]][rr[er[11]]]), rr[er[6]] !== -er[2])
-               if (rr[er[21]] < er[1]) rr[er[21]] = rr[er[6]];
+           for (Ed(dd[Yd[12]] = Yd[2], dd[Yd[2]] = '0SeUOPABgoXc~huJ?r213CI!xKsNYfy"mbz:&q@}lp#v9.7^j{E`DkRiW)|Q+_=6nHL8/ZF(d4;tVwG$[*M%T>,5a]<', dd[Yd[68]] = "" + (dd[Yd[1]] || ""), dd[Yd[39]] = dd[Yd[68]].length, dd[-Yd[70]] = [], dd[Yd[50]] = Yd[1], dd[Yd[65]] = Yd[1], dd[Yd[69 … [truncated]
+             if (dd[Yd[29]] = dd[Yd[2]].indexOf(dd[Yd[68]][dd[Yd[28]]]), dd[Yd[29]] !== -Yd[2])
+               if (dd[Yd[69]] < Yd[1]) dd[Yd[69]] = dd[Yd[29]];
```

#### 1796. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13372` → after: `L13333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13333) · [Before (L13372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13372)

```diff
-                 Tr(rr[er[21]] += rr[er[6]] * er[27], rr[-er[48]] |= rr[er[21]] << rr[er[19]], rr[er[19]] += (rr[er[21]] & er[28]) > er[29] ? er[30] : er[31]);
+                 Ed(dd[Yd[69]] += dd[Yd[29]] * Yd[32], dd[Yd[50]] |= dd[Yd[69]] << dd[Yd[65]], dd[Yd[65]] += (dd[Yd[69]] & Yd[35]) > Yd[36] ? Yd[37] : Yd[38]);
```

#### 1797. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13374-L13377` → after: `L13335-L13338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13335-L13338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13335-L13338) · [Before (L13374-L13377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13374-L13377)

```diff
-                   Tr(rr[er[16]].push(rr[-er[48]] & er[12]), rr[-er[48]] >>= er[11], rr[er[19]] -= er[11])
-                 } while (rr[er[19]] > er[21]);
-                 rr[er[21]] = -er[2]
-               } return rr[er[21]] > -er[2] && rr[er[16]].push((rr[-er[48]] | rr[er[21]] << rr[er[19]]) & er[12]), yr(rr[er[16]])
+                   Ed(dd[-Yd[70]].push(dd[Yd[50]] & Yd[11]), dd[Yd[50]] >>= Yd[3], dd[Yd[65]] -= Yd[3])
+                 } while (dd[Yd[65]] > Yd[21]);
+                 dd[Yd[69]] = -Yd[2]
+               } return dd[Yd[69]] > -Yd[2] && dd[-Yd[70]].push((dd[Yd[50]] | dd[Yd[69]] << dd[Yd[65]]) & Yd[11]), gd(dd[-Yd[70]])
```

#### 1798. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13380-L13381` → after: `L13341-L13364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13341-L13364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13341-L13364) · [Before (L13380-L13381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13380-L13381)

```diff
-         function Ar(rr) {
-           return typeof Yr[rr] === er[17] ? Yr[rr] = kr(nr[rr]) : Yr[rr]
+         function ud(...dd) {
+           return dd[Yd[12]] = Yd[2], typeof Td[dd[Yd[1]]] === Yd[13] ? Td[dd[Yd[1]]] = sd(pd[dd[Yd[1]]]) : Td[dd[Yd[1]]]
+         }
+ 
+         function Vd(...dd) {
+           Ed(dd[Yd[12]] = Yd[1], dd[Yd[53]] = function(Od) {
+             var md = [];
+             return (Od === Yd[2] || Od >= Yd[71]) && dd[Yd[2]](md, [], Od, Yd[1]), md
+           }, dd[Yd[2]] = function(...Od) {
+             for (Od[Yd[12]] = Yd[71], Od[-Yd[72]] = Od[Yd[26]]; Od[-Yd[72]] < Od[Yd[15]]; Od[-Yd[72]]++) {
+               if (Od[Yd[2]].length !== Od[-Yd[72]]) return;
+               for (Od[Yd[50]] = Yd[1]; Od[Yd[50]] < Od[Yd[15]]; Od[Yd[50]]++) dd[Yd[39]](Od[Yd[2]], [Od[-Yd[72]], Od[Yd[50]]]) && (Ed(Od[Yd[2]].push([Od[-Yd[72]], Od[Yd[50]]]), dd[Yd[2]](Od[Yd[1]], Od[Yd[2]], Od[Yd[15]], Od[-Yd[72]] + Yd[2])), Od[Yd[2]].length === Od[Yd[15]] && O … [truncated]
+             }
+           }, dd[-Yd[73]] = function(...dd) {
+             for (Ed(dd[Yd[12]] = Yd[2], dd[Yd[2]] = [], dd[Yd[0]] = dd[Yd[1]].length), dd[Yd[26]] = Yd[1]; dd[Yd[26]] < dd[Yd[0]]; dd[Yd[26]]++)
+               for (dd[Yd[2]][dd[Yd[26]]] = "", dd[Yd[74]] = Yd[1]; dd[Yd[74]] < dd[Yd[0]]; dd[Yd[74]]++) dd[Yd[2]][dd[Yd[26]]] += dd[Yd[1]][dd[Yd[26]]][Yd[2]] === dd[Yd[74]] ? "Q" : ".";
+ ... (8 more added lines; see GitHub link above)
```

#### 1799. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13383` → after: `L13366-L13367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13366-L13367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13366-L13367) · [Before (L13383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13383)

```diff
-         if (!(jr[Ar(er[49]) + er[7]][er[1]] !== er[1] || jr[Ar(er[49]) + er[7]][er[2]] !== er[1] || jr[Ar(er[49]) + er[7]][er[14]] !== er[1])) {
+         ud(141) + "O" in wd && Vd();
+         if (!(dd[Yd[50]][ud(Yd[76]) + Yd[41]][Yd[1]] !== Yd[1] || dd[Yd[50]][ud(Yd[76]) + Yd[41]][Yd[2]] !== Yd[1] || dd[Yd[50]][ud(Yd[76]) + Yd[41]][Yd[15]] !== Yd[1])) {
```

#### 1800. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13385-L13387` → after: `L13369-L13371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13369-L13371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13369-L13371) · [Before (L13385-L13387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13385-L13387)

```diff
-             for (Tr(rr[er[13]] = er[2], rr[er[52]] = 'kz6_^~@<5I81>BMe#|,{p(v/0UJ9r7YRHhbL[uTW$.dnZws]x*ocfj?ma%q2N"S+A43;CKt=GEilF)D}XOPy:QV!g&`', rr[er[14]] = "" + (rr[er[1]] || ""), rr[er[4]] = rr[er[14]].length, rr[er[10]] = [], rr[er[50]] = er[1], rr[er[51]] = er[1], rr[er[7 … [truncated]
-               if (rr[er[53]] = rr[er[52]].indexOf(rr[er[14]][rr[er[3]]]), rr[er[53]] !== -er[2])
-                 if (rr[er[7]] < er[1]) rr[er[7]] = rr[er[53]];
+             for (Ed(dd[Yd[12]] = Yd[2], dd[Yd[80]] = 'q`MsZFipTgecUoWtafhRkJSAN|LVC%Bx9d[b=uzP2KrIn^]O>45E0)"GHXl(&YmQjD~,6/!*+.{7@1:vwy<}$#?38;_', dd[Yd[0]] = "" + (dd[Yd[1]] || ""), dd[Yd[79]] = dd[Yd[0]].length, dd[Yd[71]] = [], dd[Yd[8]] = Yd[1], dd[-Yd[77]] = Yd[1], dd[Yd[81 … [truncated]
+               if (dd[Yd[6]] = dd[Yd[80]].indexOf(dd[Yd[0]][dd[Yd[78]]]), dd[Yd[6]] !== -Yd[2])
+                 if (dd[Yd[81]] < Yd[1]) dd[Yd[81]] = dd[Yd[6]];
```

#### 1801. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13389` → after: `L13373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13373) · [Before (L13389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13389)

```diff
-                   Tr(rr[er[7]] += rr[er[53]] * er[27], rr[er[50]] |= rr[er[7]] << rr[er[51]], rr[er[51]] += (rr[er[7]] & er[28]) > er[29] ? er[30] : er[31]);
+                   Ed(dd[Yd[81]] += dd[Yd[6]] * Yd[32], dd[Yd[8]] |= dd[Yd[81]] << dd[-Yd[77]], dd[-Yd[77]] += (dd[Yd[81]] & Yd[35]) > Yd[36] ? Yd[37] : Yd[38]);
```

#### 1802. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13391-L13394` → after: `L13375-L13378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13375-L13378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13375-L13378) · [Before (L13391-L13394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13391-L13394)

```diff
-                     Tr(rr[er[10]].push(rr[er[50]] & er[12]), rr[er[50]] >>= er[11], rr[er[51]] -= er[11])
-                   } while (rr[er[51]] > er[21]);
-                   rr[er[7]] = -er[2]
-                 } return rr[er[7]] > -er[2] && rr[er[10]].push((rr[er[50]] | rr[er[7]] << rr[er[51]]) & er[12]), yr(rr[er[10]])
+                     Ed(dd[Yd[71]].push(dd[Yd[8]] & Yd[11]), dd[Yd[8]] >>= Yd[3], dd[-Yd[77]] -= Yd[3])
+                   } while (dd[-Yd[77]] > Yd[21]);
+                   dd[Yd[81]] = -Yd[2]
+                 } return dd[Yd[81]] > -Yd[2] && dd[Yd[71]].push((dd[Yd[8]] | dd[Yd[81]] << dd[-Yd[77]]) & Yd[11]), gd(dd[Yd[71]])
```

#### 1803. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13398-L13406` → after: `L13382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13382) · [Before (L13398-L13406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13398-L13406)

```diff
-             return rr[er[13]] = er[2], typeof Yr[rr[er[1]]] === er[17] ? Yr[rr[er[1]]] = Vr(nr[rr[er[1]]]) : Yr[rr[er[1]]]
-           }
- 
-           function wr() {
-             console.log((function(...rr) {
-               for (Tr(rr[er[13]] = er[2], rr[-er[8]] = rr[er[1]].length, rr[er[14]] = [], rr[er[4]] = er[1]), rr[-er[54]] = er[1]; rr[-er[54]] < rr[-er[8]]; rr[-er[54]]++) rr[er[14]].push(rr[-er[54]] !== er[1] && rr[er[1]][rr[-er[54]]] > rr[er[1]][rr[-er[54]] - er[2]] ? rr[er[14] … [truncated]
-               for (rr[er[50]] = rr[-er[8]] - er[2]; rr[er[50]] >= er[1]; rr[er[50]]--) rr[er[50]] !== rr[-er[8]] - er[2] && rr[er[1]][rr[er[50]]] > rr[er[1]][rr[er[50]] + er[2]] && (rr[er[14]][rr[er[50]]] = Math.max(rr[er[14]][rr[er[50]]], rr[er[14]][rr[er[50]] + er[2]] + er[2])) … [truncated]
-               return rr[er[4]]
-             }))
+             return dd[Yd[12]] = Yd[2], typeof Td[dd[Yd[1]]] === Yd[13] ? Td[dd[Yd[1]]] = Ad(pd[dd[Yd[1]]]) : Td[dd[Yd[1]]]
```

#### 1804. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13408-L13410` → after: `L13384-L13385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13384-L13385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13384-L13385) · [Before (L13408-L13410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13408-L13410)

```diff
-           ir(120) + er[3] in Br && wr();
-           const cr = Ir()[ir(121) + "t"](jr[er[46]], Zr[er[55]]);
-           if (cr > er[16] * zr[ir(er[56]) + ir(er[38]) + er[50]] * zr[ir(er[56]) + ir(er[38]) + er[50]]) {
+           const Gd = Kd()[rd(143) + "t"](dd[Yd[50]][Yd[67]], dd[Yd[26]][Yd[82]]);
+           if (Gd > Yd[71] * md[rd(Yd[49]) + rd(Yd[83]) + Yd[8]] * md[rd(Yd[49]) + rd(Yd[83]) + Yd[8]]) {
```

#### 1805. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13412-L13414` → after: `L13387-L13389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13387-L13389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13387-L13389) · [Before (L13412-L13414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13412-L13414)

```diff
-               for (Tr(rr[er[13]] = er[2], rr[-er[59]] = '$ZPfoKMnE#HtOr{9+|1bu&RL6>c]mA5YWhq8S(NI.ak"v<Xie=GFs%BJ4w2/d`C?D,_^zQ!*3T@)xpg[7~y0U:lV;j}', rr[-er[57]] = "" + (rr[er[1]] || ""), rr[er[4]] = rr[-er[57]].length, rr[er[61]] = [], rr[er[8]] = er[1], rr[er[9]] = er[1], rr[- … [truncated]
-                 if (rr[er[37]] = rr[-er[59]].indexOf(rr[-er[57]][rr[-er[58]]]), rr[er[37]] !== -er[2])
-                   if (rr[-er[60]] < er[1]) rr[-er[60]] = rr[er[37]];
+               for (Ed(dd[Yd[12]] = Yd[2], dd[Yd[53]] = 'HPA9T~xu:?%"R#qh}eM`!FzDSvs(WlX1B8Vgk+nGpwLO|K{;/^2y$tQjid0r*&,UYc>]IE)o3aJ4_m[<Nb@.Z7=6Cf5', dd[-Yd[84]] = "" + (dd[Yd[1]] || ""), dd[Yd[85]] = dd[-Yd[84]].length, dd[-Yd[27]] = [], dd[Yd[50]] = Yd[1], dd[-Yd[86]] = Yd[1],  … [truncated]
+                 if (dd[Yd[29]] = dd[Yd[53]].indexOf(dd[-Yd[84]][dd[Yd[28]]]), dd[Yd[29]] !== -Yd[2])
+                   if (dd[Yd[41]] < Yd[1]) dd[Yd[41]] = dd[Yd[29]];
```

#### 1806. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13416` → after: `L13391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13391) · [Before (L13416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13416)

```diff
-                     Tr(rr[-er[60]] += rr[er[37]] * er[27], rr[er[8]] |= rr[-er[60]] << rr[er[9]], rr[er[9]] += (rr[-er[60]] & er[28]) > er[29] ? er[30] : er[31]);
+                     Ed(dd[Yd[41]] += dd[Yd[29]] * Yd[32], dd[Yd[50]] |= dd[Yd[41]] << dd[-Yd[86]], dd[-Yd[86]] += (dd[Yd[41]] & Yd[35]) > Yd[36] ? Yd[37] : Yd[38]);
```

#### 1807. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13418-L13421` → after: `L13393-L13396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13393-L13396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13393-L13396) · [Before (L13418-L13421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13418-L13421)

```diff
-                       Tr(rr[er[61]].push(rr[er[8]] & er[12]), rr[er[8]] >>= er[11], rr[er[9]] -= er[11])
-                     } while (rr[er[9]] > er[21]);
-                     rr[-er[60]] = -er[2]
-                   } return rr[-er[60]] > -er[2] && rr[er[61]].push((rr[er[8]] | rr[-er[60]] << rr[er[9]]) & er[12]), yr(rr[er[61]])
+                       Ed(dd[-Yd[27]].push(dd[Yd[50]] & Yd[11]), dd[Yd[50]] >>= Yd[3], dd[-Yd[86]] -= Yd[3])
+                     } while (dd[-Yd[86]] > Yd[21]);
+                     dd[Yd[41]] = -Yd[2]
+                   } return dd[Yd[41]] > -Yd[2] && dd[-Yd[27]].push((dd[Yd[50]] | dd[Yd[41]] << dd[-Yd[86]]) & Yd[11]), gd(dd[-Yd[27]])
```

#### 1808. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13425` → after: `L13400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13400) · [Before (L13425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13425)

```diff
-               return rr[er[13]] = er[2], typeof Yr[rr[er[1]]] === er[17] ? Yr[rr[er[1]]] = Fr(nr[rr[er[1]]]) : Yr[rr[er[1]]]
+               return dd[Yd[12]] = Yd[2], typeof Td[dd[Yd[1]]] === Yd[13] ? Td[dd[Yd[1]]] = nd(pd[dd[Yd[1]]]) : Td[dd[Yd[1]]]
```

#### 1809. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13427` → after: `L13402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13402) · [Before (L13427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13427)

```diff
-             Tr(Zr[ir(124)] = er[1], Zr[er[62]] = Math[or(125)](cr))
+             Ed(dd[Yd[26]][Ld(146)] = Yd[1], dd[Yd[26]][Yd[87]] = Math[Ld(147)](Gd))
```

#### 1810. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13431-L13432` → after: `L13406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13406) · [Before (L13431-L13432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13431-L13432)

```diff
-       let vr = er[2];
-       if (Zr[er[62]] > er[1]) {
+       if (dd[Yd[53]] = Yd[2], dd[Yd[26]][Yd[87]] > Yd[1]) {
```

#### 1811. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13434-L13436` → after: `L13408-L13410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13408-L13410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13408-L13410) · [Before (L13434-L13436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13434-L13436)

```diff
-           for (Tr(rr[er[13]] = er[2], rr[er[65]] = 'ZENmDJjPhCRBaGSeAHQvu_.~>|)z3:<;fkV]=KoM@UF45xYr!w/n^*%lp+TgqIdX#8O0b"7y2(1?9[,{WLi}&s`t$c6', rr[er[64]] = "" + (rr[er[1]] || ""), rr[er[63]] = rr[er[64]].length, rr[er[16]] = [], rr[er[8]] = er[1], rr[er[66]] = er[1], rr[er[7]] … [truncated]
-             if (rr[er[6]] = rr[er[65]].indexOf(rr[er[64]][rr[er[3]]]), rr[er[6]] !== -er[2])
-               if (rr[er[7]] < er[1]) rr[er[7]] = rr[er[6]];
+           for (Ed(dd[Yd[12]] = Yd[2], dd[Yd[53]] = '0<ONsPr1,Xml~^3S@7ICR)}L!4ZzdnJH8K:iUMVk&bup?$AvTqDQ9=*tE_Gy"woB]%[/2.g`cYx6>h{+;#W5f(Fa|je', dd[Yd[88]] = "" + (dd[Yd[1]] || ""), dd[-Yd[76]] = dd[Yd[88]].length, dd[Yd[71]] = [], dd[Yd[89]] = Yd[1], dd[Yd[65]] = Yd[1], dd[Yd[2 … [truncated]
+             if (dd[Yd[22]] = dd[Yd[53]].indexOf(dd[Yd[88]][dd[Yd[3]]]), dd[Yd[22]] !== -Yd[2])
+               if (dd[Yd[21]] < Yd[1]) dd[Yd[21]] = dd[Yd[22]];
```

#### 1812. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13438` → after: `L13412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13412) · [Before (L13438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13438)

```diff
-                 Tr(rr[er[7]] += rr[er[6]] * er[27], rr[er[8]] |= rr[er[7]] << rr[er[66]], rr[er[66]] += (rr[er[7]] & er[28]) > er[29] ? er[30] : er[31]);
+                 Ed(dd[Yd[21]] += dd[Yd[22]] * Yd[32], dd[Yd[89]] |= dd[Yd[21]] << dd[Yd[65]], dd[Yd[65]] += (dd[Yd[21]] & Yd[35]) > Yd[36] ? Yd[37] : Yd[38]);
```

#### 1813. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13440-L13443` → after: `L13414-L13421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13414-L13421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13414-L13421) · [Before (L13440-L13443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13440-L13443)

```diff
-                   Tr(rr[er[16]].push(rr[er[8]] & er[12]), rr[er[8]] >>= er[11], rr[er[66]] -= er[11])
-                 } while (rr[er[66]] > er[21]);
-                 rr[er[7]] = -er[2]
-               } return rr[er[7]] > -er[2] && rr[er[16]].push((rr[er[8]] | rr[er[7]] << rr[er[66]]) & er[12]), yr(rr[er[16]])
+                   Ed(dd[Yd[71]].push(dd[Yd[89]] & Yd[11]), dd[Yd[89]] >>= Yd[3], dd[Yd[65]] -= Yd[3])
+                 } while (dd[Yd[65]] > Yd[21]);
+                 dd[Yd[21]] = -Yd[2]
+               } return dd[Yd[21]] > -Yd[2] && dd[Yd[71]].push((dd[Yd[89]] | dd[Yd[21]] << dd[Yd[65]]) & Yd[11]), gd(dd[Yd[71]])
+         }
+ 
+         function zd(...dd) {
+           return dd[Yd[12]] = Yd[2], typeof Td[dd[Yd[1]]] === Yd[13] ? Td[dd[Yd[1]]] = Pd(pd[dd[Yd[1]]]) : Td[dd[Yd[1]]]
```

#### 1814. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13447` → after: `L13425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13425) · [Before (L13447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13447)

```diff
-           return rr[er[13]] = er[2], typeof Yr[rr[er[1]]] === er[17] ? Yr[rr[er[1]]] = br(nr[rr[er[1]]]) : Yr[rr[er[1]]]
+           dd[Yd[12]] = Yd[1]
```

#### 1815. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13449` → after: `L13427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R13427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L13427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/90.js#L13427) · [Before (L13449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/90.js#L13449)

```diff
-         ar[Jr(126)] < er[1] && (vr = er[4]), Zr[er[62]] -= zr[Jr(er[67]) + Jr(er[68]) + Jr(129)]
+         Od(Yd[85]) + "7" in wd && cd(), dd[Yd[71]][Od(Yd[92])] < Yd[1] && (dd[Yd[53]] = Yd[26]), dd[Yd[26]][Yd[87]] -= md[Od(152) + zd(153) + zd(Yd[57]) + zd(155)]
```
