# Changed — Bundle Modifications Report (Part 015 / 132)

- **Updated at**: `2026-11-21T04:21 JST`
- **Part**: `15 / 132` (**380** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 014](part-014.md) · [Part 016 →](part-016.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/113.js` (bbb6l5.0244a119 → halsg.2bd74967 · continued)

- **File**: `bundles/bloxd.io/chunks/js/113.js` (4568 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787)

#### 1301. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10630` → after: `L9932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9932) · [Before (L10630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10630)

```diff
-           blendMode: rE.h.Standard
+           blendMode: ju.f.Standard
```

#### 1302. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10636-L10637` → after: `L9938-L9939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9938-L9939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9938-L9939) · [Before (L10636-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10636-L10637)

```diff
-         (super.reset(), this.aiming && this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel), this.firing = !1, this.burstRemaining = 0, this.burstSchedule = new tE(yE), this.aiming = !1, this.attemptAiming = !1, this.fireSchedule = new tE(yE), this.p … [truncated]
-         Wq.i.unsubscribe(this.networkedPlayerShotSub), null === (qq = this.bulletBlockedBillboardPlane) || void 0 === qq || qq.hG(!1);
+         (super.reset(), this.aiming && this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel), this.firing = !1, this.burstRemaining = 0, this.burstSchedule = new ru(du), this.aiming = !1, this.attemptAiming = !1, this.fireSchedule = new ru(du), this.p … [truncated]
+         wb.i.unsubscribe(this.networkedPlayerShotSub), null === (bb = this.bulletBlockedBillboardPlane) || void 0 === bb || bb.Zx(!1);
```

#### 1303. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10646` → after: `L9948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9948) · [Before (L10646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10646)

```diff
-         null !== qq && this.muzzleParticleEmitter && this.wB.Ma.LJ.detachTransformNodeIfFound(this.muzzleParticleEmitter, qq, 0), super.releaseThirdPersonThinObject()
+         null !== bb && this.muzzleParticleEmitter && this.PH.xX.oN.detachTransformNodeIfFound(this.muzzleParticleEmitter, bb, 0), super.releaseThirdPersonThinObject()
```

#### 1304. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10652` → after: `L9954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9954) · [Before (L10652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10652)

```diff
-       AYq() {
+       Fhb() {
```

#### 1305. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10658-L10659` → after: `L9960-L9961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9960-L9961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9960-L9961) · [Before (L10658-L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10658-L10659)

```diff
-       OYq() {
-         return this.breakingItem.OYq(), this.firing = !1, {
+       Ehb() {
+         return this.breakingItem.Ehb(), this.firing = !1, {
```

#### 1306. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10664` → after: `L9966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9966) · [Before (L10664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10664)

```diff
-       tcq() {
+       aSb() {
```

#### 1307. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10666` → after: `L9968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9968) · [Before (L10666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10666)

```diff
-         return qq.tookAction ? qq : (this.secondaryHeld = !0, this.updateAttemptAiming(), {
+         return bb.tookAction ? bb : (this.secondaryHeld = !0, this.updateAttemptAiming(), {
```

#### 1308. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10671` → after: `L9973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9973) · [Before (L10671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10671)

```diff
-       lYq() {
+       qhb() {
```

#### 1309. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10689-L10690` → after: `L9991-L9992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9991-L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9991-L9992) · [Before (L10689-L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10689-L10690)

```diff
-       xYq() {
-         return this.breakingItem.xYq(), !0
+       Vhb() {
+         return this.breakingItem.Vhb(), !0
```

#### 1310. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10696` → after: `L9998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R9998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L9998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L9998) · [Before (L10696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10696)

```diff
-         const gq = Kq.b.get("isTouchScreen");
+         const hb = kb.d.get("isTouchScreen");
```

#### 1311. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10714` → after: `L10016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10016) · [Before (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10714)

```diff
-         }!this.firing || this.gunStats.getStat("autoFireWithMouse") || gq || (this.firing = !1), this.heldItemState.Zk === this.wB.oR && (0 !== this.wB.camera.xI ? this.updateAttackBlockedBillboard() : this.bulletBlockedBillboardPlane.isEnabled() && this.bulletBlockedBillboardPla … [truncated]
+         }!this.firing || this.gunStats.getStat("autoFireWithMouse") || hb || (this.firing = !1), this.heldItemState.yN === this.PH.bM && (0 !== this.PH.camera.mV ? this.updateAttackBlockedBillboard() : this.bulletBlockedBillboardPlane.isEnabled() && this.bulletBlockedBillboardPla … [truncated]
```

#### 1312. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10722` → after: `L10024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10024) · [Before (L10722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10722)

```diff
-         Yq > 0 ? "sniper" === lq && iE.e.setMultiplierType("sniperScope", 1 / (1 + 5 * Yq)) : "sniper" === lq && iE.e.removeMultiplier("sniperScope");
+         Bb > 0 ? "sniper" === Ob && gu.g.setMultiplierType("sniperScope", 1 / (1 + 5 * Bb)) : "sniper" === Ob && gu.g.removeMultiplier("sniperScope");
```

#### 1313. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10726` → after: `L10028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10028) · [Before (L10726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10726)

```diff
-           this.wB.Ma.AAq(this.mesh, !qq && this.heldItemState._visible)
+           this.PH.xX.cLb(this.mesh, !bb && this.heldItemState._visible)
```

#### 1314. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10731` → after: `L10033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10033) · [Before (L10731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10731)

```diff
-         this.aimChangeTime = performance.now(), Wq.i.TV("aimingOverlay", this.gunStats.getStat("scopeType")), this.wB.Iy.Hgq().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !1), this.cachedZoomLevel = this.bloxd.client.cameraController.getZoomDistance(), this.bloxd.cl … [truncated]
+         this.aimChangeTime = performance.now(), wb.i.vp("aimingOverlay", this.gunStats.getStat("scopeType")), this.PH.pW.Bhb().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !1), this.cachedZoomLevel = this.bloxd.client.cameraController.getZoomDistance(), this.bloxd.cl … [truncated]
```

#### 1315. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10734` → after: `L10036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10036) · [Before (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10734)

```diff
-         this.aimChangeTime = performance.now(), Wq.i.TV("aimingOverlay", "none"), this.wB.Iy.Hgq().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !0), this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel)
+         this.aimChangeTime = performance.now(), wb.i.vp("aimingOverlay", "none"), this.PH.pW.Bhb().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !0), this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel)
```

#### 1316. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10743` → after: `L10045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10045) · [Before (L10743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10743)

```diff
-         if (this.updateMuzzleFlashFromRenderTick(), !this.wB.Ma.VV) return;
+         if (this.updateMuzzleFlashFromRenderTick(), !this.PH.xX.Sp) return;
```

#### 1317. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10745` → after: `L10047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10047) · [Before (L10745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10745)

```diff
-         null !== Eq && this.wB.Ma.LJ.getActuallyVisible(Eq) && this._updateHeldMeshLighting()
+         null !== ub && this.PH.xX.oN.getActuallyVisible(ub) && this._updateHeldMeshLighting()
```

#### 1318. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10751` → after: `L10053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10053) · [Before (L10751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10751)

```diff
-         this.muzzleParticleEmitter && !(0, JE.c)(this.muzzleParticleEmitter) && null !== this.liveThirdPersonThinObjectId() && (this.muzzleParticleEmitter.position._isDirty = !0)
+         this.muzzleParticleEmitter && !(0, Iu.g)(this.muzzleParticleEmitter) && null !== this.liveThirdPersonThinObjectId() && (this.muzzleParticleEmitter.position._isDirty = !0)
```

#### 1319. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10756` → after: `L10058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10058) · [Before (L10756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10756)

```diff
-       Qcq() {
+       YSb() {
```

#### 1320. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10760` → after: `L10062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10062) · [Before (L10760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10760)

```diff
-           return this.mesh.rc.set(qq, qq, qq), this.mesh.rotation.set(0, .5 * Math.PI, 0), this.mesh.parent = this.wB.Ma.camera, (0, jq.p)(this.mesh, 0, 0, 0), this.ensureMuzzleEmitter(), this.muzzleParticleEmitter.parent = this.mesh, this.placeMuzzleEmitter(qq, qq, qq), void thi … [truncated]
+           return this.mesh.pa.set(bb, bb, bb), this.mesh.rotation.set(0, .5 * Math.PI, 0), this.mesh.parent = this.PH.xX.camera, (0, Ab.p)(this.mesh, 0, 0, 0), this.ensureMuzzleEmitter(), this.muzzleParticleEmitter.parent = this.mesh, this.placeMuzzleEmitter(bb, bb, bb), void thi … [truncated]
```

#### 1321. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10762` → after: `L10064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10064) · [Before (L10762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10762)

```diff
-         this.wB.Ma.AAq(this.mesh, !1);
+         this.PH.xX.cLb(this.mesh, !1);
```

#### 1322. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10766` → after: `L10068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10068) · [Before (L10766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10766)

```diff
-           return void(null !== qq && this.wB.Ma.LJ.setVisibility(qq, !1))
+           return void(null !== bb && this.PH.xX.oN.setVisibility(bb, !1))
```

#### 1323. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10776` → after: `L10078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10078) · [Before (L10776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10776)

```diff
-         if ("arm" === qq) return void(0, Hq.d)(this.typeObj, Eq.itemOffset, this.thirdPersonPose);
+         if ("arm" === bb) return void(0, lb.f)(this.typeObj, ub.itemOffset, this.thirdPersonPose);
```

#### 1324. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10780` → after: `L10082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10082) · [Before (L10780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10780)

```diff
-           rc: xq
+           pa: Lb
```

#### 1325. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10782` → after: `L10084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10084) · [Before (L10782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10782)

```diff
-         this.thirdPersonPose.usesQuaternion = !1, xq.WG(sE);
+         this.thirdPersonPose.usesQuaternion = !1, Lb.mD(Vu);
```

#### 1326. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10784-L10786` → after: `L10086-L10088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10086-L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10086-L10088) · [Before (L10784-L10786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10784-L10786)

```diff
-           cq = UE.x + (null !== (gq = null === Aq || void 0 === Aq ? void 0 : Aq[0]) && void 0 !== gq ? gq : 0),
-           uq = UE.y + (null !== (Yq = null === Aq || void 0 === Aq ? void 0 : Aq[1]) && void 0 !== Yq ? Yq : 0),
-           Bq = UE.z + (null !== (lq = null === Aq || void 0 === Aq ? void 0 : Aq[2]) && void 0 !== lq ? lq : 0),
+           Sb = Eu.x + (null !== (hb = null === Yb || void 0 === Yb ? void 0 : Yb[0]) && void 0 !== hb ? hb : 0),
+           ab = Eu.y + (null !== (Bb = null === Yb || void 0 === Yb ? void 0 : Yb[1]) && void 0 !== Bb ? Bb : 0),
+           Hb = Eu.z + (null !== (Ob = null === Yb || void 0 === Yb ? void 0 : Yb[2]) && void 0 !== Ob ? Ob : 0),
```

#### 1327. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10790-L10791` → after: `L10092-L10093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10092-L10093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10092-L10093) · [Before (L10790-L10791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10790-L10791)

```diff
-           dq.Na.TransformCoordinatesFromFloatsToRef(cq, uq, Bq, qq, Oq), mq.Vqq(FE.x + Wq[0], FE.y + Wq[1], FE.z + Wq[2])
-         } else Oq.Vqq(cq, uq, Bq), mq.Vqq(FE.x, FE.y, FE.z)
+           ob.YX.TransformCoordinatesFromFloatsToRef(Sb, ab, Hb, bb, Gb), Ub.M_(yu.x + wb[0], yu.y + wb[1], yu.z + wb[2])
+         } else Gb.M_(Sb, ab, Hb), Ub.M_(yu.x, yu.y, yu.z)
```

#### 1328. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10797` → after: `L10099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10099) · [Before (L10797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10797)

```diff
-         const Eq = this.wB.Ma.LJ;
+         const ub = this.PH.xX.oN;
```

#### 1329. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10800` → after: `L10102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10102) · [Before (L10800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10800)

```diff
-           rc: gq
+           pa: hb
```

#### 1330. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10802` → after: `L10104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10104) · [Before (L10802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10802)

```diff
-         this.placeMuzzleEmitter(gq.x, this.heldPoseScaleY(), gq.z, pE.d)
+         this.placeMuzzleEmitter(hb.x, this.heldPoseScaleY(), hb.z, su.e)
```

#### 1331. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10811` → after: `L10113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10113) · [Before (L10811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10811)

```diff
-         lq.rc.set(mq / Math.abs(qq), mq / Math.abs(Eq), mq / Math.abs(gq))
+         Ob.pa.set(Ub / Math.abs(bb), Ub / Math.abs(ub), Ub / Math.abs(hb))
```

#### 1332. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10818` → after: `L10120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10120) · [Before (L10818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10818)

```diff
-         if (console.assert(this.heldItemState.Zk === this.wB.oR, "fireBulletLocal should only be called for local player."), this.reloading) return !1;
+         if (console.assert(this.heldItemState.yN === this.PH.bM, "fireBulletLocal should only be called for local player."), this.reloading) return !1;
```

#### 1333. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10820` → after: `L10122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10122) · [Before (L10820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10820)

```diff
-         const gq = this.wB.Iy.sEq(this.wB.oR),
+         const hb = this.PH.pW.xub(this.PH.bM),
```

#### 1334. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10822-L10823` → after: `L10124-L10125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10124-L10125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10124-L10125) · [Before (L10822-L10823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10822-L10823)

```diff
-           lq = (0, Nq.b)().client.inventoryPrediction.predict(xE.e.shoot(gq.getSelectedSlotIndex(), Yq.name)),
-           Oq = null !== (Eq = this.gunStats.getStat("shotPelletCount")) && void 0 !== Eq ? Eq : 1;
+           Ob = (0, Zb.e)().client.inventoryPrediction.predict(Lu.e.shoot(hb.getSelectedSlotIndex(), Bb.name)),
+           Gb = null !== (ub = this.gunStats.getStat("shotPelletCount")) && void 0 !== ub ? ub : 1;
```

#### 1335. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10839` → after: `L10141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10141) · [Before (L10839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10839)

```diff
-               wO: Bq,
+               OU: Hb,
```

#### 1336. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10844` → after: `L10146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10146) · [Before (L10844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10844)

```diff
-             Pq = null !== (Hq = HE.c.lifeformMeshToBodyPart[Nq]) && void 0 !== Hq ? Hq : Wq;
+             Wb = null !== (lb = lu.e.lifeformMeshToBodyPart[Zb]) && void 0 !== lb ? lb : wb;
```

#### 1337. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10846` → after: `L10148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10148) · [Before (L10846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10846)

```diff
-           const Qq = Yq === hE.e.HIT_ENTITY && (null === (oq = this.wB.jR[this.wB.oR][lq]) || void 0 === oq ? void 0 : oq.canAttack) && !this.wB.jR[this.wB.oR][lq]._invincible;
+           const Cb = Bb === Du.c.HIT_ENTITY && (null === (Kb = this.PH.Qs[this.PH.bM][Ob]) || void 0 === Kb ? void 0 : Kb.canAttack) && !this.PH.Qs[this.PH.bM][Ob]._invincible;
```

#### 1338. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10848-L10849` → after: `L10150-L10151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10150-L10151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10150-L10151) · [Before (L10848-L10849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10848-L10849)

```diff
-             wO: Bq,
-             KO: xq,
+             OU: Hb,
+             GU: Lb,
```

#### 1339. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10851-L10852` → after: `L10153-L10154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10153-L10154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10153-L10154) · [Before (L10851-L10852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10851-L10852)

```diff
-               xq: lq,
-               CO: Pq
+               Ub: Ob,
+               UU: Wb
```

#### 1340. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10854-L10855` → after: `L10156-L10157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10156-L10157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10156-L10157) · [Before (L10854-L10855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10854-L10855)

```diff
-               xq: null,
-               CO: null
+               Ub: null,
+               UU: null
```

#### 1341. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10858` → after: `L10160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10160) · [Before (L10858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10858)

```diff
-         }(0, Nq.b)().client.gameRecorder.recordBulletShot(this.heldItemState.Zk, Aq);
+         }(0, Zb.e)().client.gameRecorder.recordBulletShot(this.heldItemState.yN, Yb);
```

#### 1342. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10860-L10864` → after: `L10162-L10166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10162-L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10162-L10166) · [Before (L10860-L10864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10860-L10864)

```diff
-           RO: Yq.name,
-           UO: (0, Nq.b)().client.getMsgHandler().Xgq.state.tickCounter,
-           FO: uq,
-           sO: mq,
-           IO: lq
+           QG: Bb.name,
+           bU: (0, Zb.e)().client.getMsgHandler().ghb.state.tickCounter,
+           uU: ab,
+           hU: Ub,
+           LU: Ob
```

#### 1343. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10866` → after: `L10168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10168) · [Before (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10866)

```diff
-         if ((0, xq.sendColyMessage)(Xq.Pj, Pq), aq) {
+         if ((0, Lb.sendColyMessage)(Fb.Zi, Wb), Xb) {
```

#### 1344. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10868-L10874` → after: `L10170-L10176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10170-L10176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10170-L10176) · [Before (L10868-L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10868-L10874)

```diff
-           const qq = this.wB.Uy,
-             Eq = (0, Nq.b)().client,
-             gq = null !== (Qq = null === (yq = Yq.attributes.customAttributes) || void 0 === yq ? void 0 : yq.enchantments) && void 0 !== Qq ? Qq : {},
-             lq = Eq.getEffectLevel(this.wB.oR, "Damage"),
-             Oq = Eq.getEffectLevel(this.wB.oR, "Rested Damage"),
-             xq = null !== (tq = gq.Damage) && void 0 !== tq ? tq : 0,
-             Aq = null !== (rq = gq["Critical Damage"]) && void 0 !== rq ? rq : 0;
+           const bb = this.PH.OW,
+             ub = (0, Zb.e)().client,
+             hb = null !== (Cb = null === (db = Bb.attributes.customAttributes) || void 0 === db ? void 0 : db.enchantments) && void 0 !== Cb ? Cb : {},
+             Ob = ub.getEffectLevel(this.PH.bM, "Damage"),
+             Gb = ub.getEffectLevel(this.PH.bM, "Rested Damage"),
+             Lb = null !== (rb = hb.Damage) && void 0 !== rb ? rb : 0,
+             Yb = null !== (jb = hb["Critical Damage"]) && void 0 !== jb ? jb : 0;
```

#### 1345. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10876-L10877` → after: `L10178-L10179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10178-L10179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10178-L10179) · [Before (L10876-L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10876-L10877)

```diff
-               xq: Yq,
-               CO: uq
+               Ub: Bb,
+               UU: ab
```

#### 1346. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10881` → after: `L10183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10183) · [Before (L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10881)

```diff
-             const gq = this.wB.jR[this.wB.oR][Yq];
+             const hb = this.PH.Qs[this.PH.bM][Bb];
```

#### 1347. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10886` → after: `L10188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10188) · [Before (L10886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10886)

```diff
-             Nq = (0, Bq.u)(Nq, lq, Oq, xq), "Head" === uq && Aq > 0 && (Nq *= 1 + .08 * Aq);
+             Zb = (0, Hb.o)(Zb, Ob, Gb, Lb), "Head" === ab && Yb > 0 && (Zb *= 1 + .08 * Yb);
```

#### 1348. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10888` → after: `L10190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10190) · [Before (L10888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10888)

```diff
-               Vq = (0, Bq.T)(gq._armourReductionSum, gq._protectionEnchantSum, Eq.getEffectLevel(Yq, "Damage Reduction"), Eq.getEffectLevel(Yq, "Weakness"), gq._receivingDamageMultiplier),
+               pb = (0, Hb.N)(hb._armourReductionSum, hb._protectionEnchantSum, ub.getEffectLevel(Bb, "Damage Reduction"), ub.getEffectLevel(Bb, "Weakness"), hb._receivingDamageMultiplier),
```

#### 1349. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10890` → after: `L10192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10192) · [Before (L10890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10890)

```diff
-             Wq.i.TV("shotPlayer", {
+             wb.i.vp("shotPlayer", {
```

#### 1350. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10897-L10898` → after: `L10199-L10200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10199-L10200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10199-L10200) · [Before (L10897-L10898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10897-L10898)

```diff
-           Wq.i.TV("localGunHitmarker", {
-             vq: Vq
+           wb.i.vp("localGunHitmarker", {
+             Db: pb
```

#### 1351. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10901` → after: `L10203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10203) · [Before (L10901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10901)

```diff
-         Wq.i.TV("localPlayerNewShotsLeft", Yq.attributes.customAttributes.shotsLeft);
+         wb.i.vp("localPlayerNewShotsLeft", Bb.attributes.customAttributes.shotsLeft);
```

#### 1352. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10907` → after: `L10209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10209) · [Before (L10907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10907)

```diff
-         return this.inaccuracyCalculator.shot(qq), this.wB.camera.yI.add(iq), 0 === this.getShotsLeftCount() && this.reload(qq), !0
+         return this.inaccuracyCalculator.shot(bb), this.PH.camera.yV.add(gb), 0 === this.getShotsLeftCount() && this.reload(bb), !0
```

#### 1353. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10919-L10920` → after: `L10221-L10222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10221-L10222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10221-L10222) · [Before (L10919-L10920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10919-L10920)

```diff
-           Iy: xq
-         } = this.wB, Aq = this.bloxd.PD(this.heldItemState.Zk), cq = this.pickActionHelper.pickWeaponRaycast(qq, Eq, this.bulletReachDistance, {
+           pW: Lb
+         } = this.PH, Yb = this.bloxd.JF(this.heldItemState.yN), Sb = this.pickActionHelper.pickWeaponRaycast(bb, ub, this.bulletReachDistance, {
```

#### 1354. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10926` → after: `L10228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10228) · [Before (L10926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10926)

```diff
-           vF: Nq,
+           qI: Zb,
```

#### 1355. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10928-L10929` → after: `L10230-L10231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10230-L10231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10230-L10231) · [Before (L10928-L10929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10928-L10929)

```diff
-         } = cq, Vq = null !== (Oq = cq.globalRayOrigin) && void 0 !== Oq ? Oq : lq().copy(kE, this.bloxd.getLifeformEyePos(this.heldItemState.Zk, !1)), dq = null !== (mq = cq.distanceTravelled) && void 0 !== mq ? mq : this.bulletReachDistance, jq = lq().sq(RE, Vq, Eq, 2.5 * Aq),  … [truncated]
-         xq.zk(Hq, "hidingMeshManager", {
+         } = Sb, pb = null !== (Gb = Sb.globalRayOrigin) && void 0 !== Gb ? Gb : Ob().copy(Pu, this.bloxd.getLifeformEyePos(this.heldItemState.yN, !1)), ob = null !== (Ub = Sb.distanceTravelled) && void 0 !== Ub ? Ub : this.bulletReachDistance, Ab = Ob().bu(qu, pb, ub, 2.5 * Yb),  … [truncated]
+         Lb.FN(lb, "hidingMeshManager", {
```

#### 1356. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10932` → after: `L10234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10234) · [Before (L10932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10932)

```diff
-             xq.zk(Hq, xq.names.mesh, {
+             Lb.FN(lb, Lb.names.mesh, {
```

#### 1357. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10934` → after: `L10236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10236) · [Before (L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10934)

```diff
-               Bxq: !0
+               RUb: !0
```

#### 1358. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10938` → after: `L10240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10240) · [Before (L10938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10938)

```diff
-             xq.Lk(Hq, xq.names.mesh)
+             Lb.kN(lb, Lb.names.mesh)
```

#### 1359. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10943-L10944` → after: `L10245-L10246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10245-L10246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10245-L10246) · [Before (L10943-L10944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10943-L10944)

```diff
-           IA: "bullet"
-         }), xq.zk(Hq, "bullet", {
+           FY: "bullet"
+         }), Lb.FN(lb, "bullet", {
```

#### 1360. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10946` → after: `L10248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10248) · [Before (L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10946)

```diff
-             uq === hE.e.HIT_BLOCK && this.makeBulletHole(Wq, Nq, gq)
+             ab === Du.c.HIT_BLOCK && this.makeBulletHole(wb, Zb, hb)
```

#### 1361. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10959` → after: `L10261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10261) · [Before (L10959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10959)

```diff
-           wO: Pq,
+           OU: Wb,
```

#### 1362. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10964` → after: `L10266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10266) · [Before (L10964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10964)

```diff
-         return "head" === this.wB.Uy.gunshotOrigin ? "head" : "default"
+         return "head" === this.PH.OW.gunshotOrigin ? "head" : "default"
```

#### 1363. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10967` → after: `L10269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10269) · [Before (L10967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10967)

```diff
-         return this.heldItemState.Zk === this.wB.oR && !0 === Kq.b.get("clientEscMenuOptions").showWeaponRaycasts
+         return this.heldItemState.yN === this.PH.bM && !0 === kb.d.get("clientEscMenuOptions").showWeaponRaycasts
```

#### 1364. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10971` → after: `L10273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10273) · [Before (L10971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10971)

```diff
-         const gq = this.heldItemState.Zk === this.wB.oR,
+         const hb = this.heldItemState.yN === this.PH.bM,
```

#### 1365. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10975` → after: `L10277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10277) · [Before (L10975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10975)

```diff
-           if (Yq && null === this.wB.Iy.sEq(this.wB.oR).findItem("Ammo")) return
+           if (Bb && null === this.PH.pW.xub(this.PH.bM).findItem("Ammo")) return
```

#### 1366. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10979-L10981` → after: `L10281-L10283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10281-L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10281-L10283) · [Before (L10979-L10981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10979-L10981)

```diff
-           const qq = (0, Nq.b)().client.inventoryPrediction.predict(Yq ? xE.e.takeFirst("Ammo") : null);
-           (0, xq.sendColyMessage)(Xq.pj, {
-             IO: qq
+           const bb = (0, Zb.e)().client.inventoryPrediction.predict(Bb ? Lu.e.takeFirst("Ammo") : null);
+           (0, Lb.sendColyMessage)(Fb.Hi, {
+             LU: bb
```

#### 1367. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10985` → after: `L10287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10287) · [Before (L10985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10985)

```diff
-         this.heldItemState.Zk === this.wB.oR && Wq.i.TV("middleScreenBarInitiate", {
+         this.heldItemState.yN === this.PH.bM && wb.i.vp("middleScreenBarInitiate", {
```

#### 1368. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10987` → after: `L10289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10289) · [Before (L10987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10987)

```diff
-           uE: !0,
+           Zu: !0,
```

#### 1369. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10990` → after: `L10292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10292) · [Before (L10990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10990)

```diff
-           this.reloading = !1, this.numBulletsReloading = 0, this.reloadTimeouts = [], this.heldItemState.Zk === this.wB.oR && (this.setShotsLeft(this.gunStats.getStat("clipSize")), Wq.i.TV("localPlayerNewShotsLeft", this.getShotsLeftCount()))
+           this.reloading = !1, this.numBulletsReloading = 0, this.reloadTimeouts = [], this.heldItemState.yN === this.PH.bM && (this.setShotsLeft(this.gunStats.getStat("clipSize")), wb.i.vp("localPlayerNewShotsLeft", this.getShotsLeftCount()))
```

#### 1370. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10992` → after: `L10294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10294) · [Before (L10992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10992)

```diff
-         const Oq = this.heldItemState.Zk === this.wB.oR ? vE.e.firstPersonReload : vE.e.thirdPersonReload,
+         const Gb = this.heldItemState.yN === this.PH.bM ? nu.i.firstPersonReload : nu.i.thirdPersonReload,
```

#### 1371. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10994-L10995` → after: `L10296-L10297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10296-L10297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10296-L10297) · [Before (L10994-L10995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L10994-L10995)

```diff
-             const Eq = (0, nE.c)(qq);
-             void 0 !== Eq && uE.b.play(Eq, Oq, this.heldItemState.Zk, void 0, void 0)
+             const ub = (0, xu.i)(bb);
+             void 0 !== ub && au.e.play(ub, Gb, this.heldItemState.yN, void 0, void 0)
```

#### 1372. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11002` → after: `L10304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10304) · [Before (L11002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11002)

```diff
-           mq(`${Aq}_load_bullet_`);
+           Ub(`${Yb}_load_bullet_`);
```

#### 1373. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11004` → after: `L10306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10306) · [Before (L11004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11004)

```diff
-             mq(`${Aq}_load_bullet_`)
+             Ub(`${Yb}_load_bullet_`)
```

#### 1374. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11007` → after: `L10309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10309) · [Before (L11007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11007)

```diff
-             mq(`${Aq}_cock_`)
+             Ub(`${Yb}_cock_`)
```

#### 1375. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11011-L11012` → after: `L10313-L10314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10313-L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10313-L10314) · [Before (L11011-L11012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11011-L11012)

```diff
-           mq(`${Aq}_magazine_unload_`), this.reloadTimeouts.push(setTimeout((() => {
-             mq(`${Aq}_magazine_load_`)
+           Ub(`${Yb}_magazine_unload_`), this.reloadTimeouts.push(setTimeout((() => {
+             Ub(`${Yb}_magazine_load_`)
```

#### 1376. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11014` → after: `L10316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10316) · [Before (L11014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11014)

```diff
-             mq(`${Aq}_cock_`)
+             Ub(`${Yb}_cock_`)
```

#### 1377. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11032` → after: `L10334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10334) · [Before (L11032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11032)

```diff
-           return Eq < gq ? Eq / gq : Eq > qq - gq ? 1 - (Eq - (qq - gq)) / gq : 1
+           return ub < hb ? ub / hb : ub > bb - hb ? 1 - (ub - (bb - hb)) / hb : 1
```

#### 1378. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11040-L11041` → after: `L10342-L10343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10342-L10343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10342-L10343) · [Before (L11040-L11041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11040-L11041)

```diff
-         const Eq = this.wB.Iy.sEq(this.heldItemState.Zk).getItemAtSelectedSlot().attributes.customAttributes;
-         Eq.shotsLeft = qq, this.wB.Iy.sEq(this.heldItemState.Zk).getItemAtSelectedSlot().attributes.customAttributes = Eq
+         const ub = this.PH.pW.xub(this.heldItemState.yN).getItemAtSelectedSlot().attributes.customAttributes;
+         ub.shotsLeft = bb, this.PH.pW.xub(this.heldItemState.yN).getItemAtSelectedSlot().attributes.customAttributes = ub
```

#### 1379. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11045` → after: `L10347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10347) · [Before (L11045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11045)

```diff
-         return null === (qq = this.wB.Iy.sEq(this.heldItemState.Zk).getItemAtSelectedSlot().attributes.customAttributes) || void 0 === qq ? void 0 : qq.shotsLeft
+         return null === (bb = this.PH.pW.xub(this.heldItemState.yN).getItemAtSelectedSlot().attributes.customAttributes) || void 0 === bb ? void 0 : bb.shotsLeft
```

#### 1380. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11056-L11057` → after: `L10358-L10359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10358-L10359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10358-L10359) · [Before (L11056-L11057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11056-L11057)

```diff
-         this.wB.bD([qq, Eq, gq], Yq);
-         const lq = this.wB.Iy.add(Yq, .1, .1, this.gunTypeObj.getBulletCasingMesh(), null, !0),
+         this.PH.kF([bb, ub, hb], Bb);
+         const Ob = this.PH.pW.add(Bb, .1, .1, this.gunTypeObj.getBulletCasingMesh(), null, !0),
```

#### 1381. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11061-L11062` → after: `L10363-L10364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10363-L10364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10363-L10364) · [Before (L11061-L11062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11061-L11062)

```diff
-         xq = this.aimsAsLocalPlayer() ? sq.d.getAimHeading(this.wB) : this.wB.Iy.REq(this.heldItemState.Zk).heading, this.wB.Iy.FX(lq).applyImpulse([Math.cos(xq) * mq, Oq, -Math.sin(xq) * mq]), setTimeout((() => {
-           this.wB.Iy.deleteEntity(lq)
+         Lb = this.aimsAsLocalPlayer() ? Vb.c.getAimHeading(this.PH) : this.PH.pW.nub(this.heldItemState.yN).heading, this.PH.pW.Qq(Ob).applyImpulse([Math.cos(Lb) * Ub, Gb, -Math.sin(Lb) * Ub]), setTimeout((() => {
+           this.PH.pW.deleteEntity(Ob)
```

#### 1382. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11068-L11073` → after: `L10370-L10375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10370-L10375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10370-L10375) · [Before (L11068-L11073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11068-L11073)

```diff
-           mq = this.wB.TEq(qq, null, kE),
-           xq = new dq.Na(mq[0] + Eq[0] * Oq, mq[1] + Eq[1] * Oq, mq[2] + Eq[2] * Oq),
-           Aq = new dq.Na(mq[0] - Eq[0], mq[1] - Eq[1], mq[2] - Eq[2]);
-         Yq.position = xq, (0, jq.n)(Yq, Aq.x - xq.x, Aq.y - xq.y, Aq.z - xq.z), Yq.yV = !1;
-         const cq = lq().sq(RE, qq, Eq, Oq);
-         this.wB.Ma.rV(Yq, !1, cq), setTimeout((() => {
+           Ub = this.PH.oub(bb, null, Pu),
+           Lb = new ob.YX(Ub[0] + ub[0] * Gb, Ub[1] + ub[1] * Gb, Ub[2] + ub[2] * Gb),
+           Yb = new ob.YX(Ub[0] - ub[0], Ub[1] - ub[1], Ub[2] - ub[2]);
+         Bb.position = Lb, (0, Ab.m)(Bb, Yb.x - Lb.x, Yb.y - Lb.y, Yb.z - Lb.z), Bb.lp = !1;
+         const Sb = Ob().bu(qu, bb, ub, Gb);
+         this.PH.xX.Wp(Bb, !1, Sb), setTimeout((() => {
```

#### 1383. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11087-L11088` → after: `L10389-L10390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10389-L10390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10389-L10390) · [Before (L11087-L11088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11087-L11088)

```diff
-         const gq = 1 - .25 * qq * (null !== (Eq = this.gunStats.getStat("aimZoomFactor")) && void 0 !== Eq ? Eq : 1);
-         this.wB.Iy.getState(this.wB.oR, "playerCameraAdjustment").fovMultiplier.setMultiplierType("aimingGunZoom", gq)
+         const hb = 1 - .25 * bb * (null !== (ub = this.gunStats.getStat("aimZoomFactor")) && void 0 !== ub ? ub : 1);
+         this.PH.pW.getState(this.PH.bM, "playerCameraAdjustment").fovMultiplier.setMultiplierType("aimingGunZoom", hb)
```

#### 1384. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11099` → after: `L10401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10401) · [Before (L11099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11099)

```diff
-           lq().sq(Eq, Eq, gq, .001);
+           Ob().bu(ub, ub, hb, .001);
```

#### 1385. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11101` → after: `L10403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10403) · [Before (L11101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11101)

```diff
-           (0, jq.p)(this.bulletBlockedBillboardPlane, Yq, Oq, mq), lq().sq(Eq, Eq, gq, -1), (0, jq.n)(this.bulletBlockedBillboardPlane, Eq[0] - Yq, Eq[1] - Oq, Eq[2] - mq)
+           (0, Ab.p)(this.bulletBlockedBillboardPlane, Bb, Gb, Ub), Ob().bu(ub, ub, hb, -1), (0, Ab.m)(this.bulletBlockedBillboardPlane, ub[0] - Bb, ub[1] - Gb, ub[2] - Ub)
```

#### 1386. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11103` → after: `L10405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10405) · [Before (L11103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11103)

```diff
-         this.wB.Ma.AAq(this.bulletBlockedBillboardPlane, null !== qq)
+         this.PH.xX.cLb(this.bulletBlockedBillboardPlane, null !== bb)
```

#### 1387. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11115` → after: `L10417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10417) · [Before (L11115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11115)

```diff
-         if (qq - this.soundLastRoundFired > 3 * Eq && (0, nE.o)(gq, `${Yq}_first_shot_01`)) this.lastGunShotTail = uE.b.play(`${Yq}_first_shot_01`, vE.e.gunShot, this.heldItemState.Zk, 75, 10);
+         if (bb - this.soundLastRoundFired > 3 * ub && (0, xu.p)(hb, `${Bb}_first_shot_01`)) this.lastGunShotTail = au.e.play(`${Bb}_first_shot_01`, nu.i.gunShot, this.heldItemState.yN, 75, 10);
```

#### 1388. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11117-L11119` → after: `L10419-L10421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10419-L10421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10419-L10421) · [Before (L11117-L11119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11117-L11119)

```diff
-           const qq = (0, nE.c)(`${Yq}_shot_`);
-           this.lastGunShotTail = uE.b.play(qq, vE.e.gunShot, this.heldItemState.Zk, 75, 10)
-         }(0, nE.o)(gq, `${Yq}_tail_only_shot_01`) && (this.lastGunShotTail = uE.b.play(`${Yq}_tail_only_shot_01`, vE.e.gunShot, this.heldItemState.Zk, 75, 10))
+           const bb = (0, xu.i)(`${Bb}_shot_`);
+           this.lastGunShotTail = au.e.play(bb, nu.i.gunShot, this.heldItemState.yN, 75, 10)
+         }(0, xu.p)(hb, `${Bb}_tail_only_shot_01`) && (this.lastGunShotTail = au.e.play(`${Bb}_tail_only_shot_01`, nu.i.gunShot, this.heldItemState.yN, 75, 10))
```

#### 1389. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11122` → after: `L10424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10424) · [Before (L11122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11122)

```diff
-         uE.b.play((0, nE.c)("headshot_"), vE.e.gunHeadshot)
+         au.e.play((0, xu.i)("headshot_"), nu.i.gunHeadshot)
```

#### 1390. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11127` → after: `L10429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10429) · [Before (L11127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11127)

```diff
-           uE.b.play((0, nE.c)("bullet_shell_bounce_general_"), vE.e.bulletShellBounce)
+           au.e.play((0, xu.i)("bullet_shell_bounce_general_"), nu.i.bulletShellBounce)
```

#### 1391. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11131-L11133` → after: `L10433-L10435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10433-L10435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10433-L10435) · [Before (L11131-L11133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11131-L11133)

```diff
-     var wE = gq(38216),
-       KE = gq(38425),
-       CE = gq(37399);
+     var fu = hb(37840),
+       ku = hb(38068),
+       Tu = hb(37016);
```

#### 1392. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11136` → after: `L10438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10438) · [Before (L11136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11136)

```diff
-         super(qq, Eq, gq, Yq, lq), this.inputs = void 0, this.schedule = void 0, this.readyOffset = void 0, this.firingOffset = void 0, this.fireInterval = void 0, this.inputs = 0, this.schedule = new tE(50), this.readyOffset = this.firstPersonPosOffset, this.firingOffset = new d … [truncated]
+         super(bb, ub, hb, Bb, Ob), this.inputs = void 0, this.schedule = void 0, this.readyOffset = void 0, this.firingOffset = void 0, this.fireInterval = void 0, this.inputs = 0, this.schedule = new ru(50), this.readyOffset = this.firstPersonPosOffset, this.firingOffset = new o … [truncated]
```

#### 1393. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11145` → after: `L10447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10447) · [Before (L11145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11145)

```diff
-         Eq ? this.schedule.fired(qq, Yq, !0) : this.schedule.arm(qq + Yq), Wq.i.TV("middleScreenBarInitiate", {
+         ub ? this.schedule.fired(bb, Bb, !0) : this.schedule.arm(bb + Bb), wb.i.vp("middleScreenBarInitiate", {
```

#### 1394. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11147` → after: `L10449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10449) · [Before (L11147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11147)

```diff
-           uE: !0,
+           Zu: !0,
```

#### 1395. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11153` → after: `L10455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10455) · [Before (L11153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11153)

```diff
-         if (!wE.b.includes(lq)) return this._performAltAction();
+         if (!fu.e.includes(Ob)) return this._performAltAction();
```

#### 1396. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11155-L11157` → after: `L10457-L10459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10457-L10459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10457-L10459) · [Before (L11155-L11157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11155-L11157)

```diff
-           wB: Oq
-         } = this, mq = null === (gq = Oq.Iy.FEq(Oq.oR)) || void 0 === gq ? void 0 : gq.inventory, xq = null === mq || void 0 === mq ? void 0 : mq.getSelectedSlotIndex();
-         return (0, ZE.H)(xq) ? (console.error("Failed to get selected slot"), {
+           PH: Gb
+         } = this, Ub = null === (hb = Gb.pW.Dub(Gb.bM)) || void 0 === hb ? void 0 : hb.inventory, Lb = null === Ub || void 0 === Ub ? void 0 : Ub.getSelectedSlotIndex();
+         return (0, iu.J)(Lb) ? (console.error("Failed to get selected slot"), {
```

#### 1397. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11174` → after: `L10476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10476) · [Before (L11174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11174)

```diff
-         null === this.fireInterval && (this.fireInterval = null !== (qq = this.bloxd.getItemStat(this.wB.oR, this.typeObj.name, "fireInterval")) && void 0 !== qq ? qq : 0);
+         null === this.fireInterval && (this.fireInterval = null !== (bb = this.bloxd.getItemStat(this.PH.bM, this.typeObj.name, "fireInterval")) && void 0 !== bb ? bb : 0);
```

#### 1398. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11183` → after: `L10485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10485) · [Before (L11183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11183)

```diff
-       AYq() {
+       Fhb() {
```

#### 1399. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11186` → after: `L10488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10488) · [Before (L11186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11186)

```diff
-       OYq() {
+       Ehb() {
```

#### 1400. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11192` → after: `L10494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10494) · [Before (L11192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11192)

```diff
-       tcq() {
+       aSb() {
```

#### 1401. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11195` → after: `L10497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10497) · [Before (L11195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11195)

```diff
-       lYq() {
+       qhb() {
```

#### 1402. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11198` → after: `L10500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10500) · [Before (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11198)

```diff
-       ycq() {
+       SSb() {
```

#### 1403. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11216-L11217` → after: `L10518-L10519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10518-L10519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10518-L10519) · [Before (L11216-L11217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11216-L11217)

```diff
-       cYq() {
-         return null !== (0, CE.i)(this.pickActionHelper) ? this._performAltAction() : this.fire(Date.now(), !1)
+       fhb() {
+         return null !== (0, Tu.p)(this.pickActionHelper) ? this._performAltAction() : this.fire(Date.now(), !1)
```

#### 1404. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11220` → after: `L10522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10522) · [Before (L11220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11220)

```diff
-         super.SB(qq, Eq), this.inputs > 0 && this.getFireInterval() && this.fire(Eq, !0)
+         super.gH(bb, ub), this.inputs > 0 && this.getFireInterval() && this.fire(ub, !0)
```

#### 1405. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11224` → after: `L10526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10526) · [Before (L11224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11224)

```diff
-         this.firstPersonPosOffset = dq.Na.Lerp(this.firingOffset, this.readyOffset, gq), super.renderTickLocalPlayer(qq, Eq)
+         this.firstPersonPosOffset = ob.YX.Lerp(this.firingOffset, this.readyOffset, hb), super.renderTickLocalPlayer(bb, ub)
```

#### 1406. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11230` → after: `L10532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10532) · [Before (L11230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11230)

```diff
-     var eE = gq(38436);
+     var Qu = hb(38081);
```

#### 1407. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11233-L11235` → after: `L10535-L10537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10535-L10537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10535-L10537) · [Before (L11233-L11235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11233-L11235)

```diff
-       const qq = (0, Nq.e)(),
-         Eq = qq.Iy.Wgq(qq.oR);
-       (0, Nq.b)().updateHeldVehicleStatus(), Og(qq, Eq)
+       const bb = (0, Zb.g)(),
+         ub = bb.pW.Tub(bb.bM);
+       (0, Zb.e)().updateHeldVehicleStatus(), Gh(bb, ub)
```

#### 1408. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11249` → after: `L10551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10551) · [Before (L11249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11249)

```diff
-         name: "aZ",
+         name: "bC",
```

#### 1409. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11252` → after: `L10554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10554) · [Before (L11252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11252)

```diff
-           aZ: null,
+           bC: null,
```

#### 1410. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11274` → after: `L10576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10576) · [Before (L11274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11274)

```diff
-         Fy: function(Eq, gq) {
+         UW: function(ub, hb) {
```

#### 1411. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11277-L11279` → after: `L10579-L10581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10579-L10581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10579-L10581) · [Before (L11277-L11279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11277-L11279)

```diff
-             Oq = new uq.b(qq, Eq);
-           gq.fistItem = new Vq.c(qq, gq, Yq, Oq), gq.aZ = gq.fistItem, gq.heldType = "Fist", gq._standardItem = new fq(qq, gq, Yq, gq.fistItem, Oq), gq._blockItem = new cE(qq, gq, Yq, gq.fistItem, Oq), gq._chargeableItem = new VE(qq, gq, Yq, gq.fistItem, Oq), gq._gunItem = new XE … [truncated]
-             gq.aZ.Pcq()
+             Gb = new ab.c(bb, ub);
+           hb.fistItem = new pb.b(bb, hb, Bb, Gb), hb.bC = hb.fistItem, hb.heldType = "Fist", hb._standardItem = new vb(bb, hb, Bb, hb.fistItem, Gb), hb._blockItem = new Su(bb, hb, Bb, hb.fistItem, Gb), hb._chargeableItem = new pu(bb, hb, Bb, hb.fistItem, Gb), hb._gunItem = new Fu … [truncated]
+             hb.bC.LSb()
```

#### 1412. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11281-L11283` → after: `L10583-L10585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10583-L10585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10583-L10585) · [Before (L11281-L11283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11281-L11283)

```diff
-             gq.aZ !== gq.fistItem && (gq.aZ.reset(), gq.aZ = gq.fistItem, gq.heldType = "Fist", gq.heldItemName = null, gq._heldLightTintFloor = null, gq.fistItem.selected(), Wq.i.TV("newLocalPlayerHeldItem", gq.aZ))
-           }))), gq._playerInvisSub = Wq.i.subscribe(`otherEntitySettingsClientifiedEId|${gq.Zk}|_invisibleEffect`, (Eq => {
-             gq.Zk !== qq.oR && (gq._visible = !Eq, gq.aZ && gq.aZ.Pcq())
+             hb.bC !== hb.fistItem && (hb.bC.reset(), hb.bC = hb.fistItem, hb.heldType = "Fist", hb.heldItemName = null, hb._heldLightTintFloor = null, hb.fistItem.selected(), wb.i.vp("newLocalPlayerHeldItem", hb.bC))
+           }))), hb._playerInvisSub = wb.i.subscribe(`otherEntitySettingsClientifiedEId|${hb.yN}|_invisibleEffect`, (ub => {
+             hb.yN !== bb.bM && (hb._visible = !ub, hb.bC && hb.bC.LSb())
```

#### 1413. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11286` → after: `L10588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10588) · [Before (L11286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11286)

```diff
-         OJ: function(qq, Eq) {
+         gJ: function(bb, ub) {
```

#### 1414. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11293` → after: `L10595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10595) · [Before (L11293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11293)

```diff
-           for (const lq of gq) Og(qq, lq), lq.aZ ? lq.aZ.SB(Eq, Yq) : console.error(new Error(`state.helditem for player ${lq.Zk} is falsy - ${lq.aZ}`))
+           for (const Ob of hb) Gh(bb, Ob), Ob.bC ? Ob.bC.gH(ub, Bb) : console.error(new Error(`state.helditem for player ${Ob.yN} is falsy - ${Ob.bC}`))
```

#### 1415. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11295` → after: `L10597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10597) · [Before (L11295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11295)

```diff
-         Vr: function(Eq, gq) {
+         oW: function(ub, hb) {
```

#### 1416. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11297-L11298` → after: `L10599-L10600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10599-L10600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10599-L10600) · [Before (L11297-L11298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11297-L11298)

```diff
-             lq = (0, eE.g)();
-           for (const Oq of gq) Oq.aZ ? Oq.Zk === qq.oR || (0, eE.h)(Oq.Zk, lq) ? Oq.aZ.renderTickLocalPlayer(Eq, Yq) : Oq.aZ.renderTickNetworkedPlayer(Eq, Yq) : console.error(new Error(`state.helditem for player ${Oq.Zk} is falsy - ${Oq.aZ}`))
+             Ob = (0, Qu.i)();
+           for (const Gb of hb) Gb.bC ? Gb.yN === bb.bM || (0, Qu.l)(Gb.yN, Ob) ? Gb.bC.renderTickLocalPlayer(ub, Bb) : Gb.bC.renderTickNetworkedPlayer(ub, Bb) : console.error(new Error(`state.helditem for player ${Gb.yN} is falsy - ${Gb.bC}`))
```

#### 1417. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11306-L11307` → after: `L10608-L10609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10608-L10609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10608-L10609) · [Before (L11306-L11307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11306-L11307)

```diff
-       const jq = qq.Iy.Bgq(Eq.Zk),
-         Hq = qq.Iy.wEq(Eq.Zk),
+       const Ab = bb.pW.kub(ub.yN),
+         lb = bb.pW.gub(ub.yN),
```

#### 1418. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11312-L11314` → after: `L10614-L10616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10614-L10616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10614-L10616) · [Before (L11312-L11314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11312-L11314)

```diff
-           const gq = qq.Iy.FEq(Eq.Zk).selectedItem;
-           Vq = null === gq || void 0 === gq ? void 0 : gq.typeObj, dq = null !== (Pq = null === gq || void 0 === gq || null === (Qq = gq.attributes) || void 0 === Qq || null === (yq = Qq.customAttributes) || void 0 === yq ? void 0 : yq.enchantmentTier) && void 0 !== Pq ? Pq : nul … [truncated]
-         } else Eq.networkedHeldItemName && (Vq = Oq.C[Eq.networkedHeldItemName], dq = Eq.networkedHeldItemEnchantmentTier);
+           const hb = bb.pW.Dub(ub.yN).selectedItem;
+           pb = null === hb || void 0 === hb ? void 0 : hb.typeObj, ob = null !== (Wb = null === hb || void 0 === hb || null === (Cb = hb.attributes) || void 0 === Cb || null === (db = Cb.customAttributes) || void 0 === db ? void 0 : db.enchantmentTier) && void 0 !== Wb ? Wb : nul … [truncated]
+         } else ub.networkedHeldItemName && (pb = Gb.z[ub.networkedHeldItemName], ob = ub.networkedHeldItemEnchantmentTier);
```

#### 1419. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11316` → after: `L10618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10618) · [Before (L11316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11316)

```diff
-       const tq = Hq && qq.Iy.sEq(Eq.Zk).getSelectedSlotIndex() !== Eq._lastInvenIdx,
+       const rb = lb && bb.pW.xub(ub.yN).getSelectedSlotIndex() !== ub._lastInvenIdx,
```

#### 1420. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11319-L11324` → after: `L10621-L10626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10621-L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10621-L10626) · [Before (L11319-L11324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11319-L11324)

```diff
-       (((null === (gq = Vq) || void 0 === gq ? void 0 : gq.name) || null) !== Eq.heldItemName || tq || rq) && (Eq.aZ !== Eq.fistItem && ((null === (vq = Vq) || void 0 === vq ? void 0 : vq.meta.rootId) !== qq.bloxd.getMetaInfo(Eq.heldItemName).rootId || tq || rq) && Eq.aZ.reset(), … [truncated]
-       Hq && (Eq._lastInvenIdx = qq.Iy.sEq(Eq.Zk).getSelectedSlotIndex()), Eq.heldItemName = null !== (Yq = null === (xq = Vq) || void 0 === xq ? void 0 : xq.name) && void 0 !== Yq ? Yq : null, Eq.heldItemEnchantmentTier = dq;
-       const zq = Vq && !(0, Oq.z)(Vq.type) ? Vq.ma : void 0,
-         Sq = oq ? (0, Tq.n)(Eq.Zk) : null,
-         pq = Sq ? Oq.C[Sq].ma : void 0,
-         Gq = oq && null !== (Aq = null === (cq = qq.jR[qq.oR]) || void 0 === cq || null === (uq = cq[Eq.Zk]) || void 0 === uq ? void 0 : uq._glowingEffect) && void 0 !== Aq && Aq ? Mq.GLOWING_EFFECT_EMISSION : void 0;
+       (((null === (hb = pb) || void 0 === hb ? void 0 : hb.name) || null) !== ub.heldItemName || rb || jb) && (ub.bC !== ub.fistItem && ((null === (nb = pb) || void 0 === nb ? void 0 : nb.meta.rootId) !== bb.bloxd.getMetaInfo(ub.heldItemName).rootId || rb || jb) && ub.bC.reset(), … [truncated]
+       lb && (ub._lastInvenIdx = bb.pW.xub(ub.yN).getSelectedSlotIndex()), ub.heldItemName = null !== (Bb = null === (Lb = pb) || void 0 === Lb ? void 0 : Lb.name) && void 0 !== Bb ? Bb : null, ub.heldItemEnchantmentTier = ob;
+       const eb = pb && !(0, Gb.x)(pb.type) ? pb.uX : void 0,
+         Nb = Kb ? (0, Jb.n)(ub.yN) : null,
+         sb = Nb ? Gb.z[Nb].uX : void 0,
+         Mb = Kb && null !== (Yb = null === (Sb = bb.Qs[bb.bM]) || void 0 === Sb || null === (ab = Sb[ub.yN]) || void 0 === ab ? void 0 : ab._glowingEffect) && void 0 !== Yb && Yb ? tb.GLOWING_EFFECT_EMISSION : void 0;
```

#### 1421. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11326-L11327` → after: `L10628-L10629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10628-L10629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10628-L10629) · [Before (L11326-L11327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11326-L11327)

```diff
-       const Lq = null !== (Nq = null === (aq = qq.Iy.mgq(Eq.Zk)) || void 0 === aq ? void 0 : aq.isReplayLocalPlayer) && void 0 !== Nq && Nq;
-       if (Eq.Zk === qq.oR || Lq) {
+       const mb = null !== (Zb = null === (Xb = bb.pW.Eub(ub.yN)) || void 0 === Xb ? void 0 : Xb.isReplayLocalPlayer) && void 0 !== Zb && Zb;
+       if (ub.yN === bb.bM || mb) {
```

#### 1422. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11329-L11330` → after: `L10631-L10632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10631-L10632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10631-L10632) · [Before (L11329-L11330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11329-L11330)

```diff
-           Vlq: gq
-         } = qq.Ma, {
+           hOb: hb
+         } = bb.xX, {
```

#### 1423. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11334-L11338` → after: `L10636-L10640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10636-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10636-L10640) · [Before (L11334-L11338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11334-L11338)

```diff
-         } = qq.Uy;
-         lq().copy(qq.Ma.Xxq, null !== Gq && void 0 !== Gq ? Gq : lq().ZERO);
-         const Aq = oq ? Yq : null,
-           cq = oq && "number" === typeof mq ? mq : null,
-           uq = oq && "number" === typeof xq ? xq : null,
+         } = bb.OW;
+         Ob().copy(bb.xX.eLb, null !== Mb && void 0 !== Mb ? Mb : Ob().ZERO);
+         const Yb = Kb ? Bb : null,
+           Sb = Kb && "number" === typeof Ub ? Ub : null,
+           ab = Kb && "number" === typeof Lb ? Lb : null,
```

#### 1424. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11340` → after: `L10642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10642) · [Before (L11340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11340)

```diff
-             const gq = Eq && !(0, Oq.z)(Eq.type) ? xg(Eq) : null,
+             const hb = ub && !(0, Gb.x)(ub.type) ? Lh(ub) : null,
```

#### 1425. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11342` → after: `L10644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10644) · [Before (L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11342)

```diff
-               mq = Yq ? xg(Oq.C[Yq]) : null;
+               Ub = Bb ? Lh(Gb.z[Bb]) : null;
```

#### 1426. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11350-L11351` → after: `L10652-L10653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10652-L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10652-L10653) · [Before (L11350-L11351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11350-L11351)

```diff
-           }(Eq.Zk, Vq) : null;
-         if (Wq ? (qq.Ma.wxq = null !== cq && void 0 !== cq ? cq : Wq.range, qq.Ma.sxq = null !== uq ? Yg(uq) : Wq.coneCos) : (qq.Ma.wxq = null !== cq && void 0 !== cq ? cq : 0, qq.Ma.sxq = 0), Aq) lq().scale(gq, (0, Bq.Z)(Aq), 15);
+           }(ub.yN, pb) : null;
+         if (wb ? (bb.xX.NLb = null !== Sb && void 0 !== Sb ? Sb : wb.range, bb.xX.JLb = null !== ab ? Bh(ab) : wb.coneCos) : (bb.xX.NLb = null !== Sb && void 0 !== Sb ? Sb : 0, bb.xX.JLb = 0), Yb) Ob().scale(hb, (0, Hb.T)(Yb), 15);
```

#### 1427. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11355-L11356` → after: `L10657-L10658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10657-L10658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10657-L10658) · [Before (L11355-L11356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11355-L11356)

```diff
-             Xxq: Eq
-           } = qq.Ma;
+             eLb: ub
+           } = bb.xX;
```

#### 1428. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11364` → after: `L10666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10666) · [Before (L11364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11364)

```diff
-       if (!qq || void 0 === qq.spotlightRange || !qq.ma) return null;
+       if (!bb || void 0 === bb.spotlightRange || !bb.uX) return null;
```

#### 1429. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11367` → after: `L10669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10669) · [Before (L11367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11367)

```diff
-         colour: qq.ma,
+         colour: bb.uX,
```

#### 1430. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11373` → after: `L10675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10675) · [Before (L11373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11373)

```diff
-   38368: (qq, Eq, gq) => {
+   38008: (bb, ub, hb) => {
```

#### 1431. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11375-L11376` → after: `L10677-L10678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10677-L10678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10677-L10678) · [Before (L11375-L11376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11375-L11376)

```diff
-       c: () => vq,
-       d: () => hq
+       b: () => nb,
+       c: () => Db
```

#### 1432. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11378-L11382` → after: `L10680-L10684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10680-L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10680-L10684) · [Before (L11378-L11382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11378-L11382)

```diff
-     var Yq = gq(38036),
-       lq = gq(37776),
-       Oq = gq(3545),
-       mq = gq(190),
-       xq = gq(317),
+     var Bb = hb(37655),
+       Ob = hb(37406),
+       Gb = hb(3463),
+       Ub = hb(191),
+       Lb = hb(324),
```

#### 1433. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11384-L11395` → after: `L10686-L10697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10686-L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10686-L10697) · [Before (L11384-L11395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11384-L11395)

```diff
-       cq = gq(38e3),
-       uq = gq(36796),
-       Bq = gq(36789),
-       Wq = gq(37885),
-       Nq = gq(307),
-       aq = gq(31),
-       Vq = gq(2668),
-       dq = gq(37958),
-       jq = gq(38147),
-       Hq = gq(38140),
-       oq = gq(3595),
-       Pq = gq(1214);
+       Sb = hb(37619),
+       ab = hb(36393),
+       Hb = hb(36386),
+       wb = hb(37517),
+       Zb = hb(314),
+       Xb = hb(16),
+       pb = hb(2560),
+       ob = hb(37584),
+       Ab = hb(37773),
+       lb = hb(37770),
+       Kb = hb(3516),
+       Wb = hb(1124);
```

#### 1434. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11397` → after: `L10699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10699) · [Before (L11397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11397)

```diff
-     const yq = ["length", 0, 1, !1, "a", 2, 60, 7, null];
+     const db = ["length", 1, 0, 2, 222, 3, 121, 170, "a", 50, "b", 65, void 0, "e", 5, null, 16, 172];
```

#### 1435. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11404-L11458` → after: `L10706-L10763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10706-L10763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10706-L10763) · [Before (L11404-L11458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11404-L11458)

```diff
-     "WtxuCf" in tq && function(...qq) {
-       function Eq(...qq) {
-         qq[yq[0]] = yq[2];
-         const Eq = {};
-         for (let gq of qq[yq[1]].replace(/[^w]/g, "").toLowerCase()) Eq[gq] = Eq[gq] + yq[2] || yq[2];
-         return Eq
-       }
- 
-       function gq(...qq) {
-         qq[yq[0]] = yq[5];
-         const Eq = buildCharMap(qq[yq[1]]),
-           gq = buildCharMap(qq[yq[2]]);
-         for (let Yq in Eq)
-           if (Eq[Yq] !== gq[Yq]) return yq[3];
-         return Object.keys(Eq).length === Object.keys(gq).length || yq[3]
-       }
- ... (39 more removed lines; see GitHub link above)
+     "XcU67b_" in rb && function(...bb) {
+       bb[db[0]] = db[2];
+       const ub = require("big-integer");
+       jb(bb[-db[7]] = class {
+         static randomPrime(bb) {
+           const hb = ub.one.shiftLeft(bb - db[1]),
+             Bb = ub.one.shiftLeft(bb).prev();
+           for (;;) {
+             let bb = ub.randBetween(hb, Bb);
+             if (bb.isProbablePrime(256)) return bb
+           }
+         }
+         static generate(...bb) {
+           bb[db[0]] = db[1];
+           const hb = ub(65537);
+           let Bb, Ob;
+ ... (42 more added lines; see GitHub link above)
```

#### 1436. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11463` → after: `L10768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10768) · [Before (L11463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11463)

```diff
-         super(qq, Eq, gq, Yq), this.toolType = null, this.toolHarvestLevel = null, this.toolMultiplier = 1, this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, this.anyBreakingStartTim … [truncated]
+         super(bb, ub, hb, Bb), this.toolType = null, this.toolHarvestLevel = null, this.toolMultiplier = 1, this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, this.anyBreakingStartTim … [truncated]
```

#### 1437. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11473` → after: `L10778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10778) · [Before (L11473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11473)

```diff
-         super.reset(), this.heldItemState.Zk === this.wB.oR && this.breakingParticles.SB(!1), this.resetTargetedBlock(Date.now()), this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, t … [truncated]
+         super.reset(), this.heldItemState.yN === this.PH.bM && this.breakingParticles.gH(!1), this.resetTargetedBlock(Date.now()), this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, t … [truncated]
```

#### 1438. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11475` → after: `L10780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10780) · [Before (L11475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11475)

```diff
-       AYq() {
+       Fhb() {
```

#### 1439. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11477` → after: `L10782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10782) · [Before (L11477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11477)

```diff
-         const lq = super.AYq(),
+         const Ob = super.Fhb(),
```

#### 1440. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11482-L11484` → after: `L10787-L10789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10787-L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10787-L10789) · [Before (L11482-L11484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11482-L11484)

```diff
-             jF: Aq
-           } = this.rcq();
-         if (mq && !lq.preventAttack) return this.Flq(Oq, mq, xq, Aq), this.vcq(Oq, mq), {
+             mI: Yb
+           } = this.HSb();
+         if (Ub && !Ob.preventAttack) return this.vOb(Gb, Ub, Lb, Yb), this.ZSb(Gb, Ub), {
```

#### 1441. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11488-L11491` → after: `L10793-L10796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10793-L10796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10793-L10796) · [Before (L11488-L11491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11488-L11491)

```diff
-         const cq = null !== (qq = null === (Eq = this.wB.Kqq) || void 0 === Eq ? void 0 : Eq.position) && void 0 !== qq ? qq : null,
-           uq = null !== (gq = null === (Yq = this.wB.Kqq) || void 0 === Yq ? void 0 : Yq.Y_) && void 0 !== gq ? gq : null,
-           Bq = this.wB.Iy.FEq(this.wB.oR);
-         if (!Bq || !this.wB.Uy.canAltAction) return {
+         const Sb = null !== (bb = null === (ub = this.PH.rbb) || void 0 === ub ? void 0 : ub.position) && void 0 !== bb ? bb : null,
+           ab = null !== (hb = null === (Bb = this.PH.rbb) || void 0 === Bb ? void 0 : Bb.vR) && void 0 !== hb ? hb : null,
+           Hb = this.PH.pW.Dub(this.PH.bM);
+         if (!Hb || !this.PH.OW.canAltAction) return {
```

#### 1442. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11499` → after: `L10804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10804) · [Before (L11499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11499)

```diff
-       cYq() {
+       fhb() {
```

#### 1443. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11504-L11506` → after: `L10809-L10811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10809-L10811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10809-L10811) · [Before (L11504-L11506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11504-L11506)

```diff
-           jF: Yq
-         } = this.rcq(), lq = super.cYq();
-         return Eq && !lq.preventAttack && (this.Flq(qq, Eq, gq, Yq), this.wB.Iy.REq(this.heldItemState.Zk).setArmsAreSwinging()), lq
+           mI: Bb
+         } = this.HSb(), Ob = super.fhb();
+         return ub && !Ob.preventAttack && (this.vOb(bb, ub, hb, Bb), this.PH.pW.nub(this.heldItemState.yN).setArmsAreSwinging()), Ob
```

#### 1444. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11508` → after: `L10813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10813) · [Before (L11508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11508)

```diff
-       xYq() {
+       Vhb() {
```

#### 1445. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11512-L11513` → after: `L10817-L10818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10817-L10818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10817-L10818) · [Before (L11512-L11513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11512-L11513)

```diff
-         } = this.rcq();
-         return Eq ? this.vcq(qq, Eq) : this.breakingStart(), !0
+         } = this.HSb();
+         return ub ? this.ZSb(bb, ub) : this.breakingStart(), !0
```

#### 1446. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11520-L11522` → after: `L10825-L10827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10825-L10827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10825-L10827) · [Before (L11520-L11522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11520-L11522)

```diff
-           jF: Yq
-         } = this.rcq();
-         return !(!Eq || !this.canAttack(Eq)) && (this.wB.Iy.REq(this.heldItemState.Zk).setArmsAreSwinging(), this.Flq(qq, Eq, gq, Yq), !0)
+           mI: Bb
+         } = this.HSb();
+         return !(!ub || !this.canAttack(ub)) && (this.PH.pW.nub(this.heldItemState.yN).setArmsAreSwinging(), this.vOb(bb, ub, hb, Bb), !0)
```

#### 1447. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11527` → after: `L10832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10832) · [Before (L11527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11527)

```diff
-           wB: Yq
+           PH: Bb
```

#### 1448. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11529` → after: `L10834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10834) · [Before (L11529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11529)

```diff
-         return null !== (Eq = null === (gq = Yq.jR[Yq.oR][qq]) || void 0 === gq ? void 0 : gq.canAttack) && void 0 !== Eq && Eq
+         return null !== (ub = null === (hb = Bb.Qs[Bb.bM][bb]) || void 0 === hb ? void 0 : hb.canAttack) && void 0 !== ub && ub
```

#### 1449. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11531` → after: `L10836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10836) · [Before (L11531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11531)

```diff
-       Flq(qq, Eq, gq, Yq) {
+       vOb(bb, ub, hb, Bb) {
```

#### 1450. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11533` → after: `L10838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10838) · [Before (L11533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11533)

```diff
-           wB: lq
+           PH: Ob
```

#### 1451. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11535` → after: `L10840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10840) · [Before (L11535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11535)

```diff
-         this.canAttack(Eq) && (Qq(Eq, gq, qq, lq), this.bloxd.client.triggerGameCallback("onPlayerAttackEntity", lq.oR, Eq, [Yq[0], Yq[1], Yq[2]]))
+         this.canAttack(ub) && (Cb(ub, hb, bb, Ob), this.bloxd.client.triggerGameCallback("onPlayerAttackEntity", Ob.bM, ub, [Bb[0], Bb[1], Bb[2]]))
```

#### 1452. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11537` → after: `L10842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10842) · [Before (L11537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11537)

```diff
-       rcq() {
+       HSb() {
```

#### 1453. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11539-L11541` → after: `L10844-L10846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10844-L10846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10844-L10846) · [Before (L11539-L11541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11539-L11541)

```diff
-         const Yq = null !== (qq = this.wB.uEq) && void 0 !== qq ? qq : this.wB.camera.RD(),
-           lq = null !== (Eq = null === (gq = this.wB.Iy.FEq(this.wB.oR)) || void 0 === gq ? void 0 : gq.inventory.getItemAtSelectedSlot()) && void 0 !== Eq ? Eq : null,
-           Oq = this.bloxd.getAttackRangeFromHeldItem(this.wB.oR, lq),
+         const Bb = null !== (bb = this.PH.Pbb) && void 0 !== bb ? bb : this.PH.camera.Zk(),
+           Ob = null !== (ub = null === (hb = this.PH.pW.Dub(this.PH.bM)) || void 0 === hb ? void 0 : hb.inventory.getItemAtSelectedSlot()) && void 0 !== ub ? ub : null,
+           Gb = this.bloxd.getAttackRangeFromHeldItem(this.PH.bM, Ob),
```

#### 1454. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11548` → after: `L10853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10853) · [Before (L11548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11548)

```diff
-         return mq === cq.e.HIT_ENTITY ? {
+         return Ub === Sb.c.HIT_ENTITY ? {
```

#### 1455. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11552` → after: `L10857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10857) · [Before (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11552)

```diff
-           jF: Aq
+           mI: Yb
```

#### 1456. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11557` → after: `L10862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10862) · [Before (L11557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11557)

```diff
-           jF: null
+           mI: null
```

#### 1457. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11560` → after: `L10865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10865) · [Before (L11560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11560)

```diff
-       vcq(qq, Eq) {
+       ZSb(bb, ub) {
```

#### 1458. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11563` → after: `L10868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10868) · [Before (L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11563)

```diff
-           wB: mq
+           PH: Ub
```

#### 1459. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11565-L11568` → after: `L10870-L10873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10870-L10873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10870-L10873) · [Before (L11565-L11568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11565-L11568)

```diff
-         (0, Oq.sendColyMessage)(oq.rg, {
-           Bu: Eq,
-           ym: qq,
-           rm: null !== (gq = null === (Yq = mq.Iy.FEq(mq.oR)) || void 0 === Yq || null === (lq = Yq.inventory.getItemAtSelectedSlot()) || void 0 === lq ? void 0 : lq.name) && void 0 !== gq ? gq : null
+         (0, Gb.sendColyMessage)(Kb.cg, {
+           Ua: ub,
+           iU: bb,
+           vU: null !== (hb = null === (Bb = Ub.pW.Dub(Ub.bM)) || void 0 === Bb || null === (Ob = Bb.inventory.getItemAtSelectedSlot()) || void 0 === Ob ? void 0 : Ob.name) && void 0 !== hb ? hb : null
```

#### 1460. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11572-L11574` → after: `L10877-L10879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10877-L10879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10877-L10879) · [Before (L11572-L11574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11572-L11574)

```diff
-         const qq = this.wB.Dqq;
-         qq && !(0, Vq.b)().posSatisfiesModifyConstraints(this.wB.oR, qq.position[0], qq.position[1], qq.position[2]) && (this.wB.Uy.canChange || this.wB.Uy.cantBreakError || "You cannot modify this block" !== this.wB.Uy.cantChangeError) && aq.i.TV("showBottomMessage", {
-           message: this.wB.Uy.cantBreakError || this.wB.Uy.cantChangeError,
+         const bb = this.PH.zbb;
+         bb && !(0, pb.e)().posSatisfiesModifyConstraints(this.PH.bM, bb.position[0], bb.position[1], bb.position[2]) && (this.PH.OW.canChange || this.PH.OW.cantBreakError || "You cannot modify this block" !== this.PH.OW.cantChangeError) && Xb.i.vp("showBottomMessage", {
+           message: this.PH.OW.cantBreakError || this.PH.OW.cantChangeError,
```

#### 1461. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11579` → after: `L10884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10884) · [Before (L11579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11579)

```diff
-         if (this.heldItemState.Zk !== this.wB.oR) return !1;
+         if (this.heldItemState.yN !== this.PH.bM) return !1;
```

#### 1462. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11581` → after: `L10886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10886) · [Before (L11581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11581)

```diff
-         return this.attemptingToBreak && (gq = this.breakBlock(Eq)), this.breakingParticles.SB(gq), this.successfullyBreakingBlockLastTick = gq, gq
+         return this.attemptingToBreak && (hb = this.breakBlock(ub)), this.breakingParticles.gH(hb), this.successfullyBreakingBlockLastTick = hb, hb
```

#### 1463. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11584` → after: `L10889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10889) · [Before (L11584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11584)

```diff
-         super.renderTickLocalPlayer(qq, Eq), this.successfullyBreakingBlockLastTick ? this.momentumFrac = Math.min(this.momentumFrac + qq / Nq.g.timeTillMaxMomentum, 1) : this.momentumFrac = Math.max(this.momentumFrac - qq / 1500, 0)
+         super.renderTickLocalPlayer(bb, ub), this.successfullyBreakingBlockLastTick ? this.momentumFrac = Math.min(this.momentumFrac + bb / Zb.f.timeTillMaxMomentum, 1) : this.momentumFrac = Math.max(this.momentumFrac - bb / 1500, 0)
```

#### 1464. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11586-L11587` → after: `L10891-L10892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10891-L10892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10891-L10892) · [Before (L11586-L11587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11586-L11587)

```diff
-       OYq() {
-         super.OYq();
+       Ehb() {
+         super.Ehb();
```

#### 1465. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11595` → after: `L10900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10900) · [Before (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11595)

```diff
-         this.targetedPosition = null, this.targetedStartTime = qq, this.lastBreakingSoundTime = Math.min(qq - 150, this.lastBreakingSoundTime), this.currBreakingStage = -1, this.currBreakingMesh && (this.currBreakingMesh.hG(!1), this.currBreakingMesh = null)
+         this.targetedPosition = null, this.targetedStartTime = bb, this.lastBreakingSoundTime = Math.min(bb - 150, this.lastBreakingSoundTime), this.currBreakingStage = -1, this.currBreakingMesh && (this.currBreakingMesh.Zx(!1), this.currBreakingMesh = null)
```

#### 1466. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11599` → after: `L10904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10904) · [Before (L11599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11599)

```diff
-         const gq = (0, Vq.b)().getInvenHeldItem(this.wB.oR);
+         const hb = (0, pb.e)().getInvenHeldItem(this.PH.bM);
```

#### 1467. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11601-L11607` → after: `L10906-L10912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10906-L10912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10906-L10912) · [Before (L11601-L11607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11601-L11607)

```diff
-         const mq = null === (Eq = this.wB.Dqq) || void 0 === Eq ? void 0 : Eq.position;
-         if (!mq || !(0, Vq.b)().posSatisfiesModifyConstraints(this.wB.oR, mq[0], mq[1], mq[2])) return this.resetTargetedBlock(qq), !1;
-         if (this.wB.Iy.REq(this.heldItemState.Zk).setArmsAreSwinging(), !this.targetedPosition !== !mq || !Aq().exactEquals(this.targetedPosition, mq)) return this.resetTargetedBlock(qq), this.targetedPosition = Aq().copy(this._targetedPosition, mq), (0, Oq.sendColyMessage)(oq.Rj … [truncated]
-         const xq = (0, Vq.b)().getMetaInfo(this.wB.Ay(this.targetedPosition)).rootId;
-         let cq = lq.C[xq].ttb;
-         if (this.wB.Uy.creative) {
-           if (this.wB.Uy.creative) {
+         const Ub = null === (ub = this.PH.zbb) || void 0 === ub ? void 0 : ub.position;
+         if (!Ub || !(0, pb.e)().posSatisfiesModifyConstraints(this.PH.bM, Ub[0], Ub[1], Ub[2])) return this.resetTargetedBlock(bb), !1;
+         if (this.PH.pW.nub(this.heldItemState.yN).setArmsAreSwinging(), !this.targetedPosition !== !Ub || !Yb().exactEquals(this.targetedPosition, Ub)) return this.resetTargetedBlock(bb), this.targetedPosition = Yb().copy(this._targetedPosition, Ub), (0, Gb.sendColyMessage)(Kb.aj … [truncated]
+         const Lb = (0, pb.e)().getMetaInfo(this.PH.rK(this.targetedPosition)).rootId;
+         let Sb = Ob.z[Lb].ttb;
+         if (this.PH.OW.creative) {
+           if (this.PH.OW.creative) {
```

#### 1468. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11609` → after: `L10914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10914) · [Before (L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11609)

```diff
-             Eq > 20 * lq.x ? cq *= 1 / 6 : Eq > 6 * lq.x ? cq *= 1 / 3 : Eq > 4 * lq.x ? cq *= .5 : Eq > 2 * lq.x && (cq *= 2 / 3)
+             ub > 20 * Ob.w ? Sb *= 1 / 6 : ub > 6 * Ob.w ? Sb *= 1 / 3 : ub > 4 * Ob.w ? Sb *= .5 : ub > 2 * Ob.w && (Sb *= 2 / 3)
```

#### 1469. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11612-L11614` → after: `L10917-L10919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10917-L10919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10917-L10919) · [Before (L11612-L11614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11612-L11614)

```diff
-           const qq = (0, Vq.b)().getBlockTypeIsHarvestable(this.wB.oR, xq);
-           qq || (cq *= 2.5), this.toolType === this.bloxd.getItemStat(this.wB.oR, xq, "harvestType") && qq && (cq *= 1 / this.toolMultiplier);
-           cq *= Nq.g.getBreakSpeedMultiplier(gq) * Nq.g.getMomentumMultiplier(gq, this.momentumFrac)
+           const bb = (0, pb.e)().getBlockTypeIsHarvestable(this.PH.bM, Lb);
+           bb || (Sb *= 2.5), this.toolType === this.bloxd.getItemStat(this.PH.bM, Lb, "harvestType") && bb && (Sb *= 1 / this.toolMultiplier);
+           Sb *= Zb.f.getBreakSpeedMultiplier(hb) * Zb.f.getMomentumMultiplier(hb, this.momentumFrac)
```

#### 1470. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11620-L11621` → after: `L10925-L10926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10925-L10926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10925-L10926) · [Before (L11620-L11621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11620-L11621)

```diff
-           const Eq = (0, uq.c)(`step_${(0,dq.b)(xq,!1)}`);
-           Bq.b.play(Eq, .3).rate(.5)
+           const ub = (0, ab.i)(`step_${(0,ob.e)(Lb,!1)}`);
+           Hb.e.play(ub, .3).rate(.5)
```

#### 1471. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11623` → after: `L10928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10928) · [Before (L11623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11623)

```diff
-         return this.currBreakingMesh && aq === this.currBreakingStage || (this.currBreakingMesh && this.currBreakingMesh.hG(!1), aq < 10 ? (this.currBreakingMesh = (0, Yq.b)(this.wB, this.targetedPosition, aq), this.currBreakingStage = aq) : ((0, lq.h)(mq), this.resetTargetedBloc … [truncated]
+         return this.currBreakingMesh && Xb === this.currBreakingStage || (this.currBreakingMesh && this.currBreakingMesh.Zx(!1), Xb < 10 ? (this.currBreakingMesh = (0, Bb.e)(this.PH, this.targetedPosition, Xb), this.currBreakingStage = Xb) : ((0, Ob.e)(Ub), this.resetTargetedBloc … [truncated]
```

#### 1472. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11635` → after: `L10940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10940) · [Before (L11635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11635)

```diff
-   38140: (qq, Eq, gq) => {
+   37770: (bb, ub, hb) => {
```

#### 1473. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11639-L11656` → after: `L10944-L10961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10944-L10961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10944-L10961) · [Before (L11639-L11656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11639-L11656)

```diff
-     var Yq = gq(38188),
-       lq = gq(1214),
-       Oq = gq(38202),
-       mq = gq(9419),
-       xq = gq(9379),
-       Aq = gq(190),
-       cq = gq(37417),
-       uq = gq(38147),
-       Bq = gq(37407),
-       Wq = gq(31),
-       Nq = gq(2668),
-       aq = gq(1308),
-       Vq = gq(38177),
-       dq = gq(37624),
-       jq = gq(37405),
-       Hq = gq(38364),
- ... (2 more removed lines; see GitHub link above)
+     var Bb = hb(37813),
+       Ob = hb(1124),
+       Gb = hb(37824),
+       Ub = hb(9221),
+       Lb = hb(9181),
+       Yb = hb(191),
+       Sb = hb(37044),
+       ab = hb(37773),
+       Hb = hb(37027),
+       wb = hb(16),
+       Zb = hb(2560),
+       Xb = hb(1218),
+       pb = hb(37802),
+       ob = hb(37252),
+       Ab = hb(37020),
+       lb = hb(37993),
+ ... (2 more added lines; see GitHub link above)
```

#### 1474. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11660` → after: `L10965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10965) · [Before (L11660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11660)

```diff
-         this.wB = void 0, this.heldItemState = void 0, this.itemZoomer = void 0, this.bloxd = (0, Nq.b)(), this.pickActionHelper = void 0, this.typeObj = null, this.xEq = !0, this._doneFirstMeshSetup = !1, this._modelLoadedSub = null, this._newBloxdSub = null, this.thirdPersonThi … [truncated]
+         this.PH = void 0, this.heldItemState = void 0, this.itemZoomer = void 0, this.bloxd = (0, Zb.e)(), this.pickActionHelper = void 0, this.typeObj = null, this.sbb = !0, this._doneFirstMeshSetup = !1, this._modelLoadedSub = null, this._newBloxdSub = null, this.thirdPersonThi … [truncated]
```

#### 1475. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11665` → after: `L10970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10970) · [Before (L11665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11665)

```diff
-         this.wB.eqq(!0), this.typeObj = qq, this.enchantmentTier = Eq
+         this.PH.Dbb(!0), this.typeObj = bb, this.enchantmentTier = ub
```

#### 1476. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11667` → after: `L10972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10972) · [Before (L11667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11667)

```diff
-       Pcq() {
+       LSb() {
```

#### 1477. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11670` → after: `L10975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10975) · [Before (L11670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11670)

```diff
-       Qcq() {}
+       YSb() {}
```

#### 1478. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11678` → after: `L10983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10983) · [Before (L11678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11678)

```diff
-         return void 0 !== this.heldItemState.replayUseFirstPersonMesh ? this.heldItemState.replayUseFirstPersonMesh : this.heldItemState.Zk === this.wB.oR && this.wB.camera.mI <= 1 && !Bq.d.isCameraDetachedFromPlayer(this.wB)
+         return void 0 !== this.heldItemState.replayUseFirstPersonMesh ? this.heldItemState.replayUseFirstPersonMesh : this.heldItemState.yN === this.PH.bM && this.PH.camera.sV <= 1 && !Hb.c.isCameraDetachedFromPlayer(this.PH)
```

#### 1479. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11681` → after: `L10986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10986) · [Before (L11681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11681)

```diff
-         return this.isFirstPersonLocalPlayer() || this.heldItemState.Zk === this.wB.oR && Bq.d.isCameraDetachedFromPlayer(this.wB)
+         return this.isFirstPersonLocalPlayer() || this.heldItemState.yN === this.PH.bM && Hb.c.isCameraDetachedFromPlayer(this.PH)
```

#### 1480. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11683-L11684` → after: `L10988-L10989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10988-L10989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10988-L10989) · [Before (L11683-L11684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11683-L11684)

```diff
-       AYq() {
-         return yq.clearSecondaryDownFireTimeout(), this.wB.Iy.REq(this.heldItemState.Zk).setArmsAreSwinging(), {
+       Fhb() {
+         return db.clearSecondaryDownFireTimeout(), this.PH.pW.nub(this.heldItemState.yN).setArmsAreSwinging(), {
```

#### 1481. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11692` → after: `L10997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R10997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L10997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L10997) · [Before (L11692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11692)

```diff
-       OYq() {
+       Ehb() {
```

#### 1482. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11698` → after: `L11003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11003) · [Before (L11698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11698)

```diff
-       tcq() {
+       aSb() {
```

#### 1483. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11704` → after: `L11009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11009) · [Before (L11704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11704)

```diff
-               this.ycq().once || Eq()
+               this.SSb().once || ub()
```

#### 1484. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11708` → after: `L11013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11013) · [Before (L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11708)

```diff
-         const gq = this.ycq();
+         const hb = this.SSb();
```

#### 1485. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11711` → after: `L11016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11016) · [Before (L11711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11711)

```diff
-       ycq() {
+       SSb() {
```

#### 1486. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11714` → after: `L11019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11019) · [Before (L11714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11714)

```diff
-       lYq() {
+       qhb() {
```

#### 1487. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11723-L11725` → after: `L11028-L11030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11028-L11030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11028-L11030) · [Before (L11723-L11725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11723-L11725)

```diff
-           wB: gq
-         } = this, Oq = gq.Uy.canUseDevCreativeItems, mq = null === (Eq = this.bloxd.getItemStat(gq.oR, qq, "showInCreativeInven")) || void 0 === Eq || Eq;
-         return !(0, Yq.d)(qq, (0, lq.N)((0, aq.e)().lobbyName), mq, Oq)
+           PH: hb
+         } = this, Gb = hb.OW.canUseDevCreativeItems, Ub = null === (ub = this.bloxd.getItemStat(hb.bM, bb, "showInCreativeInven")) || void 0 === ub || ub;
+         return !(0, Bb.e)(bb, (0, Ob.X)((0, Xb.b)().lobbyName), Ub, Gb)
```

#### 1488. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11727` → after: `L11032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11032) · [Before (L11727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11727)

```diff
-       hcq() {
+       XSb() {
```

#### 1489. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11730` → after: `L11035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11035) · [Before (L11730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11730)

```diff
-           wB: qq
+           PH: bb
```

#### 1490. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11732-L11735` → after: `L11037-L11040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11037-L11040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11037-L11040) · [Before (L11732-L11735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11732-L11735)

```diff
-         if (qq.Uy.creative && qq.Uy.canPickBlocks && qq.Iy.mEq(qq.oR, "inventory") && null !== qq.Kqq) {
-           const gq = qq.Kqq.Y_,
-             lq = (0, Oq.g)(gq) ? mq.p : this.bloxd.getMetaInfo(gq).rootName,
-             xq = Yq.c.indexOf(lq);
+         if (bb.OW.creative && bb.OW.canPickBlocks && bb.pW.Nbb(bb.bM, "inventory") && null !== bb.rbb) {
+           const hb = bb.rbb.vR,
+             Ob = (0, Gb.l)(hb) ? Ub.n : this.bloxd.getMetaInfo(hb).rootName,
+             Lb = Bb.d.indexOf(Ob);
```

#### 1491. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11737` → after: `L11042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11042) · [Before (L11737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11737)

```diff
-             const gq = qq.Iy.XEq(qq.oR),
+             const hb = bb.pW.zub(bb.bM),
```

#### 1492. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11739` → after: `L11044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11044) · [Before (L11739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11739)

```diff
-               Oq = this.wB.Iy.FEq(this.wB.oR);
+               Gb = this.PH.pW.Dub(this.PH.bM);
```

#### 1493. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11744` → after: `L11049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11049) · [Before (L11744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11744)

```diff
-               if ((null === (Eq = mq[qq]) || void 0 === Eq ? void 0 : Eq.name) === lq) return Wq.i.TV("setSelectedInventorySlotI", qq, !0), !0
+               if ((null === (ub = Ub[bb]) || void 0 === ub ? void 0 : ub.name) === Ob) return wb.i.vp("setSelectedInventorySlotI", bb, !0), !0
```

#### 1494. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11746` → after: `L11051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11051) · [Before (L11746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11746)

```diff
-             return Vq.b.swapPosClient(gq, gq.playerInventory.getSelectedSlotIndex(), Yq), !0
+             return pb.e.swapPosClient(hb, hb.playerInventory.getSelectedSlotIndex(), Bb), !0
```

#### 1495. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11755` → after: `L11060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11060) · [Before (L11755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11755)

```diff
-       cYq() {
+       fhb() {
```

#### 1496. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11757` → after: `L11062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11062) · [Before (L11757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11757)

```diff
-         return this.wB.Iy.REq(this.heldItemState.Zk).setArmsAreSwinging(), qq
+         return this.PH.pW.nub(this.heldItemState.yN).setArmsAreSwinging(), bb
```

#### 1497. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11760-L11761` → after: `L11065-L11066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11065-L11066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11065-L11066) · [Before (L11760-L11761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11760-L11761)

```diff
-         const qq = this.EYq();
-         return qq.tookAction && this.wB.Iy.REq(this.heldItemState.Zk).setArmsAreSwinging(), qq
+         const bb = this.mhb();
+         return bb.tookAction && this.PH.pW.nub(this.heldItemState.yN).setArmsAreSwinging(), bb
```

#### 1498. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11764-L11765` → after: `L11069-L11070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11069-L11070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11069-L11070) · [Before (L11764-L11765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11764-L11765)

```diff
-         const qq = this.wB.Iy.FEq(this.wB.oR);
-         if (!qq || !this.wB.Uy.canAltAction) return {
+         const bb = this.PH.pW.Dub(this.PH.bM);
+         if (!bb || !this.PH.OW.canAltAction) return {
```

#### 1499. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11769-L11770` → after: `L11074-L11075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11074-L11075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11074-L11075) · [Before (L11769-L11770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11769-L11770)

```diff
-         const Eq = this.wB.Kqq;
-         if ("preventAction" === this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.wB.oR, null === Eq || void 0 === Eq ? void 0 : Eq.position[0], null === Eq || void 0 === Eq ? void 0 : Eq.position[1], null === Eq || void 0 === Eq ? void 0 : Eq.position[2], Eq … [truncated]
+         const ub = this.PH.rbb;
+         if ("preventAction" === this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.PH.bM, null === ub || void 0 === ub ? void 0 : ub.position[0], null === ub || void 0 === ub ? void 0 : ub.position[1], null === ub || void 0 === ub ? void 0 : ub.position[2], ub … [truncated]
```

#### 1500. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11775` → after: `L11080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11080) · [Before (L11775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11775)

```diff
-         return gq.tookAction && this.wB.Iy.REq(this.heldItemState.Zk).setArmsAreSwinging(), gq
+         return hb.tookAction && this.PH.pW.nub(this.heldItemState.yN).setArmsAreSwinging(), hb
```

#### 1501. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11779-L11780` → after: `L11084-L11085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11084-L11085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11084-L11085) · [Before (L11779-L11780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11779-L11780)

```diff
-         if (!this.wB.Kqq) return !1;
-         const Eq = this.wB.Kqq.Y_;
+         if (!this.PH.rbb) return !1;
+         const ub = this.PH.rbb.vR;
```

#### 1502. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11783` → after: `L11088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11088) · [Before (L11783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11783)

```diff
-       EYq() {
+       mhb() {
```

#### 1503. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11785-L11786` → after: `L11090-L11091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11090-L11091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11090-L11091) · [Before (L11785-L11786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11785-L11786)

```diff
-         const Yq = this.wB.Iy.FEq(this.wB.oR);
-         if (!Yq || !this.wB.Uy.canAltAction) return {
+         const Bb = this.PH.pW.Dub(this.PH.bM);
+         if (!Bb || !this.PH.OW.canAltAction) return {
```

#### 1504. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11790` → after: `L11095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11095) · [Before (L11790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11790)

```diff
-         if (Yq.opWrapper.Tg) return Wq.i.TV("toggleMenu", "inventory"), {
+         if (Bb.opWrapper.qh) return wb.i.vp("toggleMenu", "inventory"), {
```

#### 1505. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11796` → after: `L11101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11101) · [Before (L11796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11796)

```diff
-         if ((0, Pq.g)(null === lq || void 0 === lq ? void 0 : lq.typeObj.type) && this.wB.Iy.REq(this.heldItemState.Zk).crouching) return {
+         if ((0, Wb.f)(null === Ob || void 0 === Ob ? void 0 : Ob.typeObj.type) && this.PH.pW.nub(this.heldItemState.yN).crouching) return {
```

#### 1506. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11800` → after: `L11105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11105) · [Before (L11800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11800)

```diff
-         const Oq = null !== (qq = this.wB.uEq) && void 0 !== qq ? qq : this.wB.camera.RD(),
+         const Gb = null !== (bb = this.PH.Pbb) && void 0 !== bb ? bb : this.PH.camera.Zk(),
```

#### 1507. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11805` → after: `L11110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11110) · [Before (L11805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11805)

```diff
-             vF: Nq,
+             qI: Zb,
```

#### 1508. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11807-L11811` → after: `L11112-L11116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11112-L11116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11112-L11116) · [Before (L11807-L11811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11807-L11811)

```diff
-           } = this.pickActionHelper.doPickAction(Oq, Aq.c.entityInteractReach),
-           Vq = null === (Eq = this.wB.Kqq) || void 0 === Eq ? void 0 : Eq.Y_,
-           dq = null === (gq = this.wB.Kqq) || void 0 === gq ? void 0 : gq.position,
-           jq = null !== mq && void 0 !== mq ? mq : null,
-           Hq = this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.wB.oR, null === dq || void 0 === dq ? void 0 : dq[0], null === dq || void 0 === dq ? void 0 : dq[1], null === dq || void 0 === dq ? void 0 : dq[2], Vq ? (0, xq.h)(Vq) : "Air", jq);
+           } = this.pickActionHelper.doPickAction(Gb, Yb.e.entityInteractReach),
+           pb = null === (ub = this.PH.rbb) || void 0 === ub ? void 0 : ub.vR,
+           ob = null === (hb = this.PH.rbb) || void 0 === hb ? void 0 : hb.position,
+           Ab = null !== Ub && void 0 !== Ub ? Ub : null,
+           lb = this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.PH.bM, null === ob || void 0 === ob ? void 0 : ob[0], null === ob || void 0 === ob ? void 0 : ob[1], null === ob || void 0 === ob ? void 0 : ob[2], pb ? (0, Lb.g)(pb) : "Air", Ab);
```

#### 1509. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11823` → after: `L11128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11128) · [Before (L11823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11823)

```diff
-       xYq() {
+       Vhb() {
```

#### 1510. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11832` → after: `L11137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11137) · [Before (L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11832)

```diff
-         Eq <= 1.2 && qq > 1.2 ? (this.wB.camera.xI = 0, this.wB.camera.mI = 0, this.itemZoomer.forceXyOffsetToZero(), this.Pcq()) : 0 === Eq && (this.itemZoomer.forceXyOffsetToZero(), this.Pcq()), Eq > .001 && qq < .001 && (this.wB.camera.xI = 1.2, this.Pcq())
+         ub <= 1.2 && bb > 1.2 ? (this.PH.camera.mV = 0, this.PH.camera.sV = 0, this.itemZoomer.forceXyOffsetToZero(), this.LSb()) : 0 === ub && (this.itemZoomer.forceXyOffsetToZero(), this.LSb()), ub > .001 && bb < .001 && (this.PH.camera.mV = 1.2, this.LSb())
```

#### 1511. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11848` → after: `L11153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11153) · [Before (L11848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11848)

```diff
-         Wq.i.unsubscribe(this._modelLoadedSub), this.heldItemState.Zk === this.wB.oR && yq.clearSecondaryDownFireTimeout(), this._doneFirstMeshSetup = void 0 !== this.wB.Iy.SEq(this.heldItemState.Zk)
+         wb.i.unsubscribe(this._modelLoadedSub), this.heldItemState.yN === this.PH.bM && db.clearSecondaryDownFireTimeout(), this._doneFirstMeshSetup = void 0 !== this.PH.pW.lub(this.heldItemState.yN)
```

#### 1512. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11854` → after: `L11159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11159) · [Before (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11854)

```diff
-         if (this.Qcq(), this._doneFirstMeshSetup) return;
+         if (this.YSb(), this._doneFirstMeshSetup) return;
```

#### 1513. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11856-L11858` → after: `L11161-L11163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11161-L11163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11161-L11163) · [Before (L11856-L11858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11856-L11858)

```diff
-         const qq = this.heldItemState.Zk;
-         this.wB.Iy.SEq(qq) || (this._modelLoadedSub = Wq.i.subscribe(`lifeformSetupFinished|${qq}`, (() => {
-           this.Qcq()
+         const bb = this.heldItemState.yN;
+         this.PH.pW.lub(bb) || (this._modelLoadedSub = wb.i.subscribe(`lifeformSetupFinished|${bb}`, (() => {
+           this.YSb()
```

#### 1514. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11869` → after: `L11174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11174) · [Before (L11869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11869)

```diff
-         return null === qq || this.wB.Ma.LJ.has(qq) ? qq : (this.thirdPersonThinObjectId = null, null)
+         return null === bb || this.PH.xX.oN.has(bb) ? bb : (this.thirdPersonThinObjectId = null, null)
```

#### 1515. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11873-L11876` → after: `L11178-L11181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11178-L11181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11178-L11181) · [Before (L11873-L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11873-L11876)

```diff
-           rc: Eq
-         } = this.thirdPersonPose, gq = Eq.x * this.heldPoseScaleY() * Eq.z < 0, Yq = qq.thinInstMgr.getNodeWorldMatrix(qq.KJ, qq.nodeIndex).determinant() < 0, lq = (0, dq.g)(gq, Yq);
-         if (this.thirdPersonFlippedWinding === lq && this.thirdPersonAttachedToId === qq.KJ && this.thirdPersonAttachedToNode === qq.nodeIndex && (null === this.thirdPersonThinObjectId || null !== this.liveThirdPersonThinObjectId())) return void this.applyThirdPersonPose();
-         this.releaseThirdPersonThinObject(), this.thirdPersonFlippedWinding = lq, this.thirdPersonAttachedToId = qq.KJ, this.thirdPersonAttachedToNode = qq.nodeIndex;
+           pa: ub
+         } = this.thirdPersonPose, hb = ub.x * this.heldPoseScaleY() * ub.z < 0, Bb = bb.thinInstMgr.getNodeWorldMatrix(bb.lN, bb.nodeIndex).determinant() < 0, Ob = (0, ob.f)(hb, Bb);
+         if (this.thirdPersonFlippedWinding === Ob && this.thirdPersonAttachedToId === bb.lN && this.thirdPersonAttachedToNode === bb.nodeIndex && (null === this.thirdPersonThinObjectId || null !== this.liveThirdPersonThinObjectId())) return void this.applyThirdPersonPose();
+         this.releaseThirdPersonThinObject(), this.thirdPersonFlippedWinding = Ob, this.thirdPersonAttachedToId = bb.lN, this.thirdPersonAttachedToNode = bb.nodeIndex;
```

#### 1516. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11879` → after: `L11184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11184) · [Before (L11879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11879)

```diff
-           Fc: !0,
+           MS: !0,
```

#### 1517. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11882-L11883` → after: `L11187-L11188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11187-L11188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11187-L11188) · [Before (L11882-L11883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11882-L11883)

```diff
-           const gq = this.wB.Ma.LJ;
-           Oq === this.thirdPersonRequestId && gq.has(qq.KJ) ? (this.thirdPersonThinObjectId = Eq, gq.attachThinObject(Eq, qq.KJ, qq.nodeIndex), gq.set(Eq, "aOpacity", (0, jq.holderAttachmentOpacity)(this.wB, this.heldItemState.Zk)), (0, jq.invalidateAttachmentProximityFade)(this. … [truncated]
+           const hb = this.PH.xX.oN;
+           Gb === this.thirdPersonRequestId && hb.has(bb.lN) ? (this.thirdPersonThinObjectId = ub, hb.attachThinObject(ub, bb.lN, bb.nodeIndex), hb.set(ub, "aOpacity", (0, Ab.holderAttachmentOpacity)(this.PH, this.heldItemState.yN)), (0, Ab.invalidateAttachmentProximityFade)(this. … [truncated]
```

#### 1518. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11887` → after: `L11192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11192) · [Before (L11887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11887)

```diff
-         return dq.d * this.thirdPersonPose.rc.y
+         return ob.e * this.thirdPersonPose.pa.y
```

#### 1519. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11893` → after: `L11198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11198) · [Before (L11893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11893)

```diff
-         const Eq = this.wB.Ma.LJ,
+         const ub = this.PH.xX.oN,
```

#### 1520. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11897` → after: `L11202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11202) · [Before (L11897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11897)

```diff
-             rc: lq,
+             pa: Ob,
```

#### 1521. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11906` → after: `L11211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11211) · [Before (L11906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11906)

```diff
-           } = (0, Hq.b)(gq, mq ? Oq : Yq, xq, this.typeObj.heldModelOffsetY());
+           } = (0, lb.c)(hb, Ub ? Gb : Bb, Lb, this.typeObj.heldModelOffsetY());
```

#### 1522. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11912` → after: `L11217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11217) · [Before (L11912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11912)

```diff
-         null !== qq && (this.wB.Ma.LJ.delete(qq), this.thirdPersonThinObjectId = null)
+         null !== bb && (this.PH.xX.oN.delete(bb), this.thirdPersonThinObjectId = null)
```

#### 1523. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11916` → after: `L11221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11221) · [Before (L11916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11916)

```diff
-           wB: qq,
+           PH: bb,
```

#### 1524. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11919-L11921` → after: `L11224-L11226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11224-L11226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11224-L11226) · [Before (L11919-L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11919-L11921)

```diff
-         if (!qq.Iy.mEq(Eq.Zk, "humanoidMesh")) return null;
-         const gq = qq.Iy.Vgq(Eq.Zk),
-           Yq = qq.Ma.LJ,
+         if (!bb.pW.Nbb(ub.yN, "humanoidMesh")) return null;
+         const hb = bb.pW.bhb(ub.yN),
+           Bb = bb.xX.oN,
```

#### 1525. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11923` → after: `L11228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11228) · [Before (L11923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11923)

```diff
-             KJ: lq
+             lN: Ob
```

#### 1526. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11930` → after: `L11235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11235) · [Before (L11930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11930)

```diff
-           KJ: lq,
+           lN: Ob,
```

#### 1527. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11939` → after: `L11244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11244) · [Before (L11939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11939)

```diff
-           KJ: qq.KJ,
+           lN: bb.lN,
```

#### 1528. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11944` → after: `L11249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11249) · [Before (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11944)

```diff
-           wB: Eq,
+           PH: ub,
```

#### 1529. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11947-L11949` → after: `L11252-L11254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11252-L11254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11252-L11254) · [Before (L11947-L11949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11947-L11949)

```diff
-         if (!Eq.Iy.mEq(gq.Zk, "fourLeggedMesh")) return null;
-         const Yq = Eq.Iy.dgq(gq.Zk),
-           lq = Eq.Ma.LJ,
+         if (!ub.pW.Nbb(hb.yN, "fourLeggedMesh")) return null;
+         const Bb = ub.pW.uhb(hb.yN),
+           Ob = ub.xX.oN,
```

#### 1530. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11951` → after: `L11256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11256) · [Before (L11951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11951)

```diff
-             KJ: Oq
+             lN: Gb
```

#### 1531. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11958` → after: `L11263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11263) · [Before (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11958)

```diff
-           KJ: Oq,
+           lN: Gb,
```

#### 1532. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11964` → after: `L11269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11269) · [Before (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11964)

```diff
-         if (!this.wB.Ma.VV) return;
+         if (!this.PH.xX.Sp) return;
```

#### 1533. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11966` → after: `L11271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11271) · [Before (L11966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11966)

```diff
-         if (null !== qq) return void this.wB.Ma.LJ.set(qq, "aLightLevels", this.heldItemLightLevels());
+         if (null !== bb) return void this.PH.xX.oN.set(bb, "aLightLevels", this.heldItemLightLevels());
```

#### 1534. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11969-L11971` → after: `L11274-L11276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11274-L11276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11274-L11276) · [Before (L11969-L11971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11969-L11971)

```diff
-         if (this.lightTargetsForMesh !== Eq && (this.lightTargetsForMesh = Eq, this.Wxq = [], this.lightTargetsBuilt = !1), !this.lightTargetsBuilt) {
-           const qq = (0, cq.i)(Eq);
-           for (const Eq of qq) Eq.uR && "aLightLevels" in Eq.uR && this.Wxq.push(Eq);
+         if (this.lightTargetsForMesh !== ub && (this.lightTargetsForMesh = ub, this.bLb = [], this.lightTargetsBuilt = !1), !this.lightTargetsBuilt) {
+           const bb = (0, Sb.n)(ub);
+           for (const ub of bb) ub.Fs && "aLightLevels" in ub.Fs && this.bLb.push(ub);
```

#### 1535. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11974` → after: `L11279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11279) · [Before (L11974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11974)

```diff
-         if (0 === this.Wxq.length) return;
+         if (0 === this.bLb.length) return;
```

#### 1536. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11976` → after: `L11281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11281) · [Before (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11976)

```diff
-         for (const Yq of this.Wxq)(0, cq.q)(Yq, gq)
+         for (const Bb of this.bLb)(0, Sb.s)(Bb, hb)
```

#### 1537. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11979` → after: `L11284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11284) · [Before (L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11979)

```diff
-         return this.wB.Iy.mgq(this.heldItemState.Zk)._lightLevels
+         return this.PH.pW.Eub(this.heldItemState.yN)._lightLevels
```

#### 1538. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11983` → after: `L11288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11288) · [Before (L11983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11983)

```diff
-   38366: (qq, Eq, gq) => {
+   38e3: (bb, ub, hb) => {
```

#### 1539. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11987-L11988` → after: `L11291-L11293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11291-L11293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11291-L11293) · [Before (L11987-L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11987-L11988)

```diff
-       h: () => Nq,
-       k: () => mq
+       f: () => pb,
+       i: () => Zb,
+       l: () => Ub
```

#### 1540. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11990-L11992` → after: `L11295-L11297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11295-L11297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11295-L11297) · [Before (L11990-L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11990-L11992)

```diff
-     var Yq = gq(37131),
-       lq = gq(37594),
-       Oq = gq(4299);
+     var Bb = hb(36720),
+       Ob = hb(37226),
+       Gb = hb(4246);
```

#### 1541. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11996-L11998` → after: `L11301-L11303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11301-L11303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11301-L11303) · [Before (L11996-L11998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L11996-L11998)

```diff
-         position: new Yq.Na,
-         rotation: new Yq.Na,
-         rc: new Yq.Na,
+         position: new Bb.YX,
+         rotation: new Bb.YX,
+         pa: new Bb.YX,
```

#### 1542. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12003-L12005` → after: `L11308-L11310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11308-L11310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11308-L11310) · [Before (L12003-L12005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12003-L12005)

```diff
-     const xq = new Yq.Na(-.18, -.66, .48),
-       Aq = new Yq.Na(.4, 1.25, Math.PI + .9),
-       cq = new Yq.Na(-.12, .12, .12),
+     const Lb = new Bb.YX(-.18, -.66, .48),
+       Yb = new Bb.YX(.4, 1.25, Math.PI + .9),
+       Sb = new Bb.YX(-.12, .12, .12),
```

#### 1543. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12011` → after: `L11316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11316) · [Before (L12011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12011)

```diff
-       return Yq.Matrix.RotationYawPitchRollToRef(qq.y, qq.x, qq.z, uq), Yq.Matrix.RotationYawPitchRollToRef(Eq[1], Eq[0], Eq[2], Bq), lq.c.matMulToRef(Bq, uq, Wq), Yq.Quaternion.FromRotationMatrixToRef(Wq, gq)
+       return Bb.Matrix.RotationYawPitchRollToRef(bb.y, bb.x, bb.z, ab), Bb.Matrix.RotationYawPitchRollToRef(ub[1], ub[0], ub[2], Hb), Ob.b.matMulToRef(Hb, ab, wb), Bb.Quaternion.FromRotationMatrixToRef(wb, hb)
```

#### 1544. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12023` → after: `L11328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11328) · [Before (L12023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12023)

```diff
-         rc: mq
+         pa: Ub
```

#### 1545. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12025-L12027` → after: `L11330-L11332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11330-L11332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11330-L11332) · [Before (L12025-L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12025-L12027)

```diff
-       if (gq.usesQuaternion = !1, "Gun" === qq.type) return Yq.WG(xq), lq.WG(Aq), void mq.WG(cq);
-       const [uq, Bq, Wq] = null !== Eq && void 0 !== Eq ? Eq : [0, 0, 0], Nq = (0, Oq.c)(qq.type), Vq = Nq ? 2.25 : 1.35, dq = Nq ? 0 : .08;
-       if ("TwoDTool" === qq.type || qq.holdAsAiming) Yq.Vqq(uq, -.48 + Bq, .24 + Wq + dq), mq.Vqq(.19 * Vq, -.19 * Vq, .19 * Vq), qq.holdAsAiming ? lq.Vqq(.4 + Math.PI, 1.25, Math.PI / 2) : lq.Vqq(Math.PI, Math.PI / 2, .35 * Math.PI);
+       if (hb.usesQuaternion = !1, "Gun" === bb.type) return Bb.mD(Lb), Ob.mD(Yb), void Ub.mD(Sb);
+       const [ab, Hb, wb] = null !== ub && void 0 !== ub ? ub : [0, 0, 0], Zb = (0, Gb.d)(bb.type), pb = Zb ? 2.25 : 1.35, ob = Zb ? 0 : .08;
+       if ("TwoDTool" === bb.type || bb.holdAsAiming) Bb.M_(ab, -.48 + Hb, .24 + wb + ob), Ub.M_(.19 * pb, -.19 * pb, .19 * pb), bb.holdAsAiming ? Ob.M_(.4 + Math.PI, 1.25, Math.PI / 2) : Ob.M_(Math.PI, Math.PI / 2, .35 * Math.PI);
```

#### 1546. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12029` → after: `L11334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11334) · [Before (L12029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12029)

```diff
-         Yq.Vqq(uq, -.72 + Bq, .18 + Wq + dq);
+         Bb.M_(ab, -.72 + Hb, .18 + wb + ob);
```

#### 1547. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12031` → after: `L11336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11336) · [Before (L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12031)

```diff
-         mq.Vqq(qq, qq, qq), lq.Vqq(Nq ? 0 : Math.PI, Math.PI / 2, -Math.PI / 2)
+         Ub.M_(bb, bb, bb), Ob.M_(Zb ? 0 : Math.PI, Math.PI / 2, -Math.PI / 2)
```

#### 1548. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12036` → after: `L11341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11341) · [Before (L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12036)

```diff
-   38364: (qq, Eq, gq) => {
+   37993: (bb, ub, hb) => {
```

#### 1549. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12038` → after: `L11343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11343) · [Before (L12038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12038)

```diff
-       b: () => mq
+       c: () => Ub
```

#### 1550. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12040` → after: `L11345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11345) · [Before (L12040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12040)

```diff
-     var Yq = gq(37131);
+     var Bb = hb(36720);
```

#### 1551. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12042` → after: `L11347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11347) · [Before (L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12042)

```diff
-       Oq = new Yq.Na;
+       Gb = new Bb.YX;
```

#### 1552. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12046` → after: `L11351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11351) · [Before (L12046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12046)

```diff
-       const xq = Eq instanceof Yq.Quaternion ? Eq : Yq.Quaternion.RotationYawPitchRollToRef(Eq.y, Eq.x, Eq.z, lq);
+       const Lb = ub instanceof Bb.Quaternion ? ub : Bb.Quaternion.RotationYawPitchRollToRef(ub.y, ub.x, ub.z, Ob);
```

#### 1553. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12050` → after: `L11355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11355) · [Before (L12050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12050)

```diff
-   37122: (qq, Eq, gq) => {
+   36711: (bb, ub, hb) => {
```

#### 1554. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12060-L12064` → after: `L11365-L11369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11365-L11369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11365-L11369) · [Before (L12060-L12064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12060-L12064)

```diff
-     var Yq = gq(37125),
-       lq = gq(2668),
-       Oq = gq(598),
-       mq = gq(1214),
-       xq = gq(31);
+     var Bb = hb(36713),
+       Ob = hb(2560),
+       Gb = hb(588),
+       Ub = hb(1124),
+       Lb = hb(16);
```

#### 1555. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12079` → after: `L11384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11384) · [Before (L12079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12079)

```diff
-         if (null !== lq.KJ)
+         if (null !== Ob.lN)
```

#### 1556. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12088` → after: `L11393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11393) · [Before (L12088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12088)

```diff
-         if (null === lq.KJ || null === (Yq = lq.hideOnArmourPartsEquip) || void 0 === Yq || !Yq.length) continue;
+         if (null === Ob.lN || null === (Bb = Ob.hideOnArmourPartsEquip) || void 0 === Bb || !Bb.length) continue;
```

#### 1557. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12090-L12103` → after: `L11395-L11408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11395-L11408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11395-L11408) · [Before (L12090-L12103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12090-L12103)

```diff
-         qq.setVisibility(lq.KJ, !Oq)
-       }
-     }
-     var Bq = gq(37417),
-       Wq = gq(37233),
-       Nq = gq(37451),
-       aq = gq(37421),
-       Vq = gq(307),
-       dq = gq(37206),
-       jq = gq(37253),
-       Hq = gq(37257),
-       oq = gq(37340),
-       Pq = gq(37399),
-       Qq = gq(37405);
+         bb.setVisibility(Ob.lN, !Gb)
+       }
+     }
+     var Hb = hb(37044),
+       wb = hb(36836),
+       Zb = hb(37077),
+       Xb = hb(37050),
+       pb = hb(314),
+       ob = hb(36800),
+       Ab = hb(36864),
+       lb = hb(36868),
+       Kb = hb(36947),
+       Wb = hb(37016),
+       Cb = hb(37020);
```

#### 1558. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12108` → after: `L11413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11413) · [Before (L12108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12108)

```diff
-         this.attachments = [], this.animatedAttachments = [], this.zIndexSub = void 0, this.personFullBody = !1, this.Zk = void 0
+         this.attachments = [], this.animatedAttachments = [], this.zIndexSub = void 0, this.personFullBody = !1, this.yN = void 0
```

#### 1559. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12116` → after: `L11421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11421) · [Before (L12116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12116)

```diff
-       } = Yq, xq = (0, Hq.g)(Oq, mq);
+       } = Bb, Lb = (0, lb.d)(Gb, Ub);
```

#### 1560. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12120` → after: `L11425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11425) · [Before (L12120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12120)

```diff
-       } else yq[xq] = null, (0, Hq.j)(Oq, qq.Ma.PV).then((qq => {
+       } else db[Lb] = null, (0, lb.h)(Gb, bb.xX.Xp).then((bb => {
```

#### 1561. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12122` → after: `L11427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11427) · [Before (L12122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12122)

```diff
-           const Oq = (0, lq.e)(),
+           const Gb = (0, Ob.g)(),
```

#### 1562. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12124-L12128` → after: `L11429-L11433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11429-L11433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11429-L11433) · [Before (L12124-L12128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12124-L12128)

```diff
-               PV: mq
-             } = Oq.Ma,
-             xq = (0, Hq.g)(Eq, gq),
-             Aq = (0, Hq.c)(null !== gq && void 0 !== gq ? gq : Eq, mq, (qq => {
-               (0, Wq.s)(qq, jq.e), (0, aq.d)(qq, Oq.Ma), (0, dq.d)(qq), (0, Wq.F)(qq)
+               Xp: Ub
+             } = Gb.xX,
+             Lb = (0, lb.d)(ub, hb),
+             Yb = (0, lb.c)(null !== hb && void 0 !== hb ? hb : ub, Ub, (bb => {
+               (0, wb.q)(bb, Ab.d), (0, Xb.e)(bb, Gb.xX), (0, ob.b)(bb), (0, wb.J)(bb)
```

#### 1563. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12131` → after: `L11436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11436) · [Before (L12131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12131)

```diff
-           (0, Hq.n)(qq, Aq, {
+           (0, lb.i)(bb, Yb, {
```

#### 1564. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12134` → after: `L11439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11439) · [Before (L12134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12134)

```diff
-               (0, Nq.c)(qq) || qq.ZJ().Wk(qq)
+               (0, Zb.g)(bb) || bb.ZN().vN(bb)
```

#### 1565. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12141` → after: `L11446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11446) · [Before (L12141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12141)

```diff
-           for (const lq of cq)(0, Hq.p)(lq);
+           for (const Ob of Sb)(0, lb.k)(Ob);
```

#### 1566. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12143-L12144` → after: `L11448-L11449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11448-L11449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11448-L11449) · [Before (L12143-L12144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12143-L12144)

```diff
-           const Vq = Oq.Ma.LJ,
-             oq = Oq.Iy.Hk(Oq.Iy.names.meshAttachments);
+           const pb = Gb.xX.oN,
+             Kb = Gb.pW.qN(Gb.pW.names.meshAttachments);
```

#### 1567. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12147` → after: `L11452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11452) · [Before (L12147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12147)

```diff
-             const qq = null !== (Pq = null === (Qq = Oq.Iy.SEq(lq.Zk)) || void 0 === Qq ? void 0 : Qq.KJ) && void 0 !== Pq ? Pq : null;
+             const bb = null !== (Wb = null === (Cb = Gb.pW.lub(Ob.yN)) || void 0 === Cb ? void 0 : Cb.lN) && void 0 !== Wb ? Wb : null;
```

#### 1568. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12149` → after: `L11454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11454) · [Before (L12149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12149)

```diff
-               for (const Yq of lq.attachments) Yq.modelGlb === Eq && Yq.texture === gq && null === Yq.KJ && hq(lq, qq, Bq, Yq);
+               for (const Bb of Ob.attachments) Bb.modelGlb === ub && Bb.texture === hb && null === Bb.lN && Db(Ob, bb, Hb, Bb);
```

#### 1569. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12151` → after: `L11456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11456) · [Before (L12151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12151)

```diff
-             } else console.error(`Loaded ${xq} but theres no thinObjectId ${qq} for parent entity ${lq.Zk}`)
+             } else console.error(`Loaded ${Lb} but theres no thinObjectId ${bb} for parent entity ${Ob.yN}`)
```

#### 1570. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12155` → after: `L11460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11460) · [Before (L12155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12155)

```diff
-         console.error(`Failed to load ${Oq}:`, qq.stack)
+         console.error(`Failed to load ${Gb}:`, bb.stack)
```

#### 1571. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12161-L12163` → after: `L11466-L11468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11466-L11468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11466-L11468) · [Before (L12161-L12163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12161-L12163)

```diff
-       const xq = (0, lq.e)(),
-         Aq = xq.Ma.LJ,
-         cq = `${(0,Hq.g)(Yq.modelGlb,Yq.texture)}|${Yq.modelNode}`;
+       const Lb = (0, Ob.g)(),
+         Yb = Lb.xX.oN,
+         Sb = `${(0,lb.d)(Bb.modelGlb,Bb.texture)}|${Bb.modelNode}`;
```

#### 1572. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12166` → after: `L11471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11471) · [Before (L12166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12166)

```diff
-         if (!qq) return void console.error(`Node ${Yq.modelNode} not found in container ${Yq.modelGlb}`);
+         if (!bb) return void console.error(`Node ${Bb.modelNode} not found in container ${Bb.modelGlb}`);
```

#### 1573. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12168` → after: `L11473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11473) · [Before (L12168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12168)

```diff
-           WB: 4,
+           LH: 4,
```

#### 1574. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12177-L12178` → after: `L11482-L11483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11482-L11483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11482-L11483) · [Before (L12177-L12178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12177-L12178)

```diff
-         }), void 0 !== Yq.animation && (0, Hq.t)(gq), Aq.setPickableForType(cq, !0);
-         for (const Eq of [qq, ...qq.getChildMeshes()]) Eq.material && xq.Ma.Vk(Eq)
+         }), void 0 !== Bb.animation && (0, lb.l)(hb), Yb.setPickableForType(Sb, !0);
+         for (const ub of [bb, ...bb.getChildMeshes()]) ub.material && Lb.xX.mN(ub)
```

#### 1575. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12184-L12187` → after: `L11489-L11492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11489-L11492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11489-L11492) · [Before (L12184-L12187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12184-L12187)

```diff
-       Aq.setEntityId(uq, Nq), Aq.setPickable(uq, qq.personFullBody && (0, Pq.f)(Nq)), Aq.set(uq, "aOpacity", (0, Qq.holderAttachmentOpacity)(xq, Nq));
-       const aq = xq.jR[xq.oR][Nq];
-       if (Aq.setRenderingGroupId(uq, null !== (Oq = null === aq || void 0 === aq ? void 0 : aq.zIndex) && void 0 !== Oq ? Oq : 0), null !== aq && void 0 !== aq && aq.overlayColour) {
-         const [qq, Eq, gq] = (0, Vq.bb)(aq.overlayColour);
+       Yb.setEntityId(ab, Zb), Yb.setPickable(ab, bb.personFullBody && (0, Wb.l)(Zb)), Yb.set(ab, "aOpacity", (0, Cb.holderAttachmentOpacity)(Lb, Zb));
+       const Xb = Lb.Qs[Lb.bM][Zb];
+       if (Yb.setRenderingGroupId(ab, null !== (Gb = null === Xb || void 0 === Xb ? void 0 : Xb.zIndex) && void 0 !== Gb ? Gb : 0), null !== Xb && void 0 !== Xb && Xb.overlayColour) {
+         const [bb, ub, hb] = (0, pb.X)(Xb.overlayColour);
```

#### 1576. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12190-L12191` → after: `L11495-L11496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11495-L11496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11495-L11496) · [Before (L12190-L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12190-L12191)

```diff
-       const dq = xq.Iy.mgq(Nq);
-       if (Aq.set(uq, "aLightLevels", null !== (mq = null === dq || void 0 === dq ? void 0 : dq._lightLevels) && void 0 !== mq ? mq : Bq.c), Yq.overlayColour) {
+       const ob = Lb.pW.Eub(Zb);
+       if (Yb.set(ab, "aLightLevels", null !== (Ub = null === ob || void 0 === ob ? void 0 : ob._lightLevels) && void 0 !== Ub ? Ub : Hb.c), Bb.overlayColour) {
```

#### 1577. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12195` → after: `L11500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11500) · [Before (L12195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12195)

```diff
-       if (Yq.KJ = uq, void 0 !== Yq.animation) {
+       if (Bb.lN = ab, void 0 !== Bb.animation) {
```

#### 1578. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12197` → after: `L11502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11502) · [Before (L12197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12197)

```diff
-         void 0 === Eq && (Eq = oq.b.fromRestInstance(Aq, uq, Yq.animation), tq.set(cq, Eq)), Yq.clipPose = Eq, null !== Eq && qq.animatedAttachments.push(Yq)
+         void 0 === ub && (ub = Kb.e.fromRestInstance(Yb, ab, Bb.animation), rb.set(Sb, ub)), Bb.clipPose = ub, null !== ub && bb.animatedAttachments.push(Bb)
```

#### 1579. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12202` → after: `L11507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11507) · [Before (L12202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12202)

```diff
-       const Yq = qq.Iy.getState(Eq, qq.Iy.names.meshAttachments);
+       const Bb = bb.pW.getState(ub, bb.pW.names.meshAttachments);
```

#### 1580. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12204` → after: `L11509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11509) · [Before (L12204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12204)

```diff
-         for (const lq of Yq.attachments) null !== lq.KJ && qq.Ma.LJ.setPickable(lq.KJ, gq)
+         for (const Ob of Bb.attachments) null !== Ob.lN && bb.xX.oN.setPickable(Ob.lN, hb)
```

#### 1581. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12212-L12214` → after: `L11517-L11519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11517-L11519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11517-L11519) · [Before (L12212-L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12212-L12214)

```diff
-         Fy: function(Eq, gq) {
-           gq.zIndexSub = xq.i.subscribe(`otherEntitySettingsClientifiedEId|${Eq}|zIndex`, (Eq => {
-             for (const Yq of gq.attachments) null !== Yq.KJ && qq.Ma.LJ.setRenderingGroupId(Yq.KJ, Eq)
+         UW: function(ub, hb) {
+           hb.zIndexSub = Lb.i.subscribe(`otherEntitySettingsClientifiedEId|${ub}|zIndex`, (ub => {
+             for (const Bb of hb.attachments) null !== Bb.lN && bb.xX.oN.setRenderingGroupId(Bb.lN, ub)
```

#### 1582. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12217` → after: `L11522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11522) · [Before (L12217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12217)

```diff
-         OJ: function(Eq, gq) {
+         gJ: function(ub, hb) {
```

#### 1583. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12219` → after: `L11524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11524) · [Before (L12219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12219)

```diff
-           const Yq = qq.Ma.LJ;
+           const Bb = bb.xX.oN;
```

#### 1584. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12221-L12222` → after: `L11526-L11527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11526-L11527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11526-L11527) · [Before (L12221-L12222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12221-L12222)

```diff
-             if (null !== qq.KJ && Yq.has(qq.KJ)) try {
-               Yq.delete(qq.KJ)
+             if (null !== bb.lN && Bb.has(bb.lN)) try {
+               Bb.delete(bb.lN)
```

#### 1585. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12224` → after: `L11529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11529) · [Before (L12224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12224)

```diff
-               console.error(`Failed to cleanup attachment ${qq.KJ} of entity ${Eq}:`, lq.stack)
+               console.error(`Failed to cleanup attachment ${bb.lN} of entity ${ub}:`, Ob.stack)
```

#### 1586. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12228` → after: `L11533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11533) · [Before (L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12228)

```diff
-         Vr: function(Eq, gq) {
+         oW: function(ub, hb) {
```

#### 1587. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12232-L12233` → after: `L11537-L11538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11537-L11538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11537-L11538) · [Before (L12232-L12233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12232-L12233)

```diff
-             const Eq = null !== (lq = null === (Oq = qq.Iy.SEq(mq.Zk)) || void 0 === Oq ? void 0 : Oq.KJ) && void 0 !== lq ? lq : null;
-             null === Eq || (0, Yq.pausesOutOfView)(qq, mq.Zk, Eq) || Zq(qq, mq)
+             const ub = null !== (Ob = null === (Gb = bb.pW.lub(Ub.yN)) || void 0 === Gb ? void 0 : Gb.lN) && void 0 !== Ob ? Ob : null;
+             null === ub || (0, Bb.pausesOutOfView)(bb, Ub.yN, ub) || ib(bb, Ub)
```

#### 1588. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12240` → after: `L11545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11545) · [Before (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12240)

```diff
-       const gq = qq.Iy.getState(Eq, qq.Iy.names.meshAttachments);
+       const hb = bb.pW.getState(ub, bb.pW.names.meshAttachments);
```

#### 1589. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12245-L12247` → after: `L11550-L11552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11550-L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11550-L11552) · [Before (L12245-L12247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12245-L12247)

```diff
-       const gq = qq.Ma.LJ,
-         Yq = qq.Gqq / 1e3;
-       for (const lq of Eq.animatedAttachments) lq.clipPose.write(gq, lq.KJ, Yq)
+       const hb = bb.xX.oN,
+         Bb = bb.wbb / 1e3;
+       for (const Ob of ub.animatedAttachments) Ob.clipPose.write(hb, Ob.lN, Bb)
```

#### 1590. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12251` → after: `L11556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11556) · [Before (L12251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12251)

```diff
-       const Yq = qq.Iy.getState(Eq, qq.Iy.names.meshAttachments);
+       const Bb = bb.pW.getState(ub, bb.pW.names.meshAttachments);
```

#### 1591. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12254` → after: `L11559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11559) · [Before (L12254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12254)

```diff
-           if (lq.KJ === gq) return !0;
+           if (Ob.lN === hb) return !0;
```

#### 1592. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12260` → after: `L11565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11565) · [Before (L12260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12260)

```diff
-       return zq(qq, Eq, null !== (Yq = gq.attachments) && void 0 !== Yq ? Yq : [])
+       return eb(bb, ub, null !== (Bb = hb.attachments) && void 0 !== Bb ? Bb : [])
```

#### 1593. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12269-L12272` → after: `L11574-L11577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11574-L11577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11574-L11577) · [Before (L12269-L12272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12269-L12272)

```diff
-       if ((0, Oq.H)(qq)) return console.error("Cannot update mesh attachments for invalid eId", qq), Yq;
-       const xq = (0, lq.e)(),
-         Aq = xq.Iy.SEq(qq);
-       if (!Aq) return console.error(`Cannot update mesh attachments for entity ${qq} as it has no mesh`), Yq;
+       if ((0, Gb.J)(bb)) return console.error("Cannot update mesh attachments for invalid eId", bb), Bb;
+       const Lb = (0, Ob.g)(),
+         Yb = Lb.pW.lub(bb);
+       if (!Yb) return console.error(`Cannot update mesh attachments for entity ${bb} as it has no mesh`), Bb;
```

#### 1594. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12274` → after: `L11579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11579) · [Before (L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12274)

```diff
-         KJ: cq
+         lN: Sb
```

#### 1595. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12276-L12279` → after: `L11581-L11584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11581-L11584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11581-L11584) · [Before (L12276-L12279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12276-L12279)

```diff
-       if (null === cq) return console.error(`Cannot update mesh attachments for entity ${qq} as it has no thinObjectId`), Yq;
-       const Bq = xq.Iy.getState(qq, xq.Iy.names.meshAttachments);
-       if (!Bq) return console.error(`Cannot update mesh attachments for entity ${qq} as it has no meshAttachments component`), Yq;
-       for (const lq of Bq.attachments)(0, mq.vb)(lq.owners, Eq);
+       if (null === Sb) return console.error(`Cannot update mesh attachments for entity ${bb} as it has no thinObjectId`), Bb;
+       const Hb = Lb.pW.getState(bb, Lb.pW.names.meshAttachments);
+       if (!Hb) return console.error(`Cannot update mesh attachments for entity ${bb} as it has no meshAttachments component`), Bb;
+       for (const Ob of Hb.attachments)(0, Ub.yb)(Ob.owners, ub);
```

#### 1596. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12286` → after: `L11591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11591) · [Before (L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12286)

```diff
-               Yq.owners.push(gq), pq(qq, Yq.KJ, mq.overlayColour), lq = !0;
+               Bb.owners.push(hb), sb(bb, Bb.lN, Ub.overlayColour), Ob = !0;
```

#### 1597. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12292` → after: `L11597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11597) · [Before (L12292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12292)

```diff
-             KJ: null,
+             lN: null,
```

#### 1598. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12297` → after: `L11602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11602) · [Before (L12297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12297)

```diff
-         return uq(qq.Ma.LJ, Yq, Eq.attachments), Oq
+         return ab(bb.xX.oN, Bb, ub.attachments), Gb
```

#### 1599. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12299` → after: `L11604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11604) · [Before (L12299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12299)

```diff
-       const Wq = xq.Ma.LJ;
+       const wb = Lb.xX.oN;
```

#### 1600. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12302` → after: `L11607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11607) · [Before (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12302)

```diff
-         0 === qq.owners.length && (null !== qq.KJ && Wq.delete(qq.KJ), (0, mq.vb)(Bq.attachments, qq), null !== qq.clipPose && (0, mq.vb)(Bq.animatedAttachments, qq), lq--)
+         0 === bb.owners.length && (null !== bb.lN && wb.delete(bb.lN), (0, Ub.yb)(Hb.attachments, bb), null !== bb.clipPose && (0, Ub.yb)(Hb.animatedAttachments, bb), Ob--)
```

#### 1601. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12309-L12310` → after: `L11614-L11615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11614-L11615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11614-L11615) · [Before (L12309-L12310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12309-L12310)

```diff
-       const gq = (0, lq.e)(),
-         Yq = gq.Iy.getState(qq, gq.Iy.names.meshAttachments);
+       const hb = (0, Ob.g)(),
+         Bb = hb.pW.getState(bb, hb.pW.names.meshAttachments);
```

#### 1602. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12312-L12313` → after: `L11617-L11618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11617-L11618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11617-L11618) · [Before (L12312-L12313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12312-L12313)

```diff
-       const mq = null === (Eq = gq.Iy.SEq(qq)) || void 0 === Eq ? void 0 : Eq.KJ;
-       (0, Oq.H)(mq) || uq(gq.Ma.LJ, mq, Yq.attachments)
+       const Ub = null === (ub = hb.pW.lub(bb)) || void 0 === ub ? void 0 : ub.lN;
+       (0, Gb.J)(Ub) || ab(hb.xX.oN, Ub, Bb.attachments)
```

#### 1603. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12318` → after: `L11623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11623) · [Before (L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12318)

```diff
-       const Yq = qq.Ma.LJ;
+       const Bb = bb.xX.oN;
```

#### 1604. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12325` → after: `L11630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11630) · [Before (L12325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12325)

```diff
-   37634: (qq, Eq, gq) => {
+   37266: (bb, ub, hb) => {
```

#### 1605. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12333-L12338` → after: `L11638-L11643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11638-L11643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11638-L11643) · [Before (L12333-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12333-L12338)

```diff
-     var Yq = gq(2668),
-       lq = gq(1870),
-       Oq = gq(307),
-       mq = gq(37650),
-       xq = gq(37641),
-       Aq = gq(317),
+     var Bb = hb(2560),
+       Ob = hb(1784),
+       Gb = hb(314),
+       Ub = hb(37276),
+       Lb = hb(37274),
+       Yb = hb(324),
```

#### 1606. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12340-L12342` → after: `L11645-L11647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11645-L11647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11645-L11647) · [Before (L12340-L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12340-L12342)

```diff
-       uq = gq(37407),
-       Bq = gq(37125),
-       Wq = gq(37637);
+       ab = hb(37027),
+       Hb = hb(36713),
+       wb = hb(37269);
```

#### 1607. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12346` → after: `L11651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11651) · [Before (L12346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12346)

```diff
-         this.isServerControlled = !1, this.defaultRotationsPerSecond = 5, this.childrenNodeParams = [], this.playerControlledRotationSoftTolerance = null, this.playerControlledRotationHardTolerance = null, this.modelYRotationOffset = 0, this.renderRotation = null, this.serverSetR … [truncated]
+         this.isServerControlled = !1, this.defaultRotationsPerSecond = 5, this.childrenNodeParams = [], this.playerControlledRotationSoftTolerance = null, this.playerControlledRotationHardTolerance = null, this.modelYRotationOffset = 0, this.renderRotation = null, this.serverSetR … [truncated]
```

#### 1608. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12355` → after: `L11660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11660) · [Before (L12355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12355)

```diff
-         Fy: function(qq, Eq) {
+         UW: function(bb, ub) {
```

#### 1609. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12363-L12364` → after: `L11668-L11669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11668-L11669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11668-L11669) · [Before (L12363-L12364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12363-L12364)

```diff
-         OJ: null,
-         Vr: function(Eq, gq) {
+         gJ: null,
+         oW: function(ub, hb) {
```

#### 1610. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12368` → after: `L11673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11673) · [Before (L12368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12368)

```diff
-             const gq = qq.Iy.SEq(Oq.Zk);
+             const hb = bb.pW.lub(Gb.yN);
```

#### 1611. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12370` → after: `L11675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11675) · [Before (L12370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12370)

```diff
-               Oq.Av = !1;
+               Gb.DW = !1;
```

#### 1612. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12374` → after: `L11679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11679) · [Before (L12374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12374)

```diff
-               egq: mq
+               Nhb: Ub
```

#### 1613. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12376-L12377` → after: `L11681-L11682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11681-L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11681-L11682) · [Before (L12376-L12377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12376-L12377)

```diff
-             if (!(null !== (Yq = null === mq || void 0 === mq ? void 0 : mq.Dgq) && void 0 !== Yq ? Yq : null === (lq = gq.mesh) || void 0 === lq ? void 0 : lq.isEnabled())) {
-               Oq.Av = !1;
+             if (!(null !== (Bb = null === Ub || void 0 === Ub ? void 0 : Ub.shb) && void 0 !== Bb ? Bb : null === (Ob = hb.mesh) || void 0 === Ob ? void 0 : Ob.isEnabled())) {
+               Gb.DW = !1;
```

#### 1614. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12381` → after: `L11686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11686) · [Before (L12381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12381)

```diff
-               KJ: xq
+               lN: Lb
```

#### 1615. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12383` → after: `L11688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11688) · [Before (L12383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12383)

```diff
-             mq ? Oq._thinObjectId !== xq && Pq(Oq, xq) : Oq._rootMesh !== gq.mesh && Qq(Oq, gq.mesh), mq && (0, Bq.pausesOutOfView)(qq, Oq.Zk, xq) ? Oq.Av = !0 : oq(qq, Oq)
+             Ub ? Gb._thinObjectId !== Lb && Wb(Gb, Lb) : Gb._rootMesh !== hb.mesh && Cb(Gb, hb.mesh), Ub && (0, Hb.pausesOutOfView)(bb, Gb.yN, Lb) ? Gb.DW = !0 : Kb(bb, Gb)
```

#### 1616. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12390` → after: `L11695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11695) · [Before (L12390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12390)

```diff
-       Eq.Av && null !== Eq._thinObjectId && qq.Ma.LJ.has(Eq._thinObjectId) && oq(qq, Eq)
+       ub.DW && null !== ub._thinObjectId && bb.xX.oN.has(ub._thinObjectId) && Kb(bb, ub)
```

#### 1617. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12394` → after: `L11699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11699) · [Before (L12394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12394)

```diff
-       const gq = Eq.isServerControlled ? Eq.serverSetRotation[1] : qq.Iy.REq(Eq.Zk).heading;
+       const hb = ub.isServerControlled ? ub.serverSetRotation[1] : bb.pW.nub(ub.yN).heading;
```

#### 1618. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12399` → after: `L11704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11704) · [Before (L12399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12399)

```diff
-       const gq = qq.Iy.getState(Eq, "meshRotation");
+       const hb = bb.pW.getState(ub, "meshRotation");
```

#### 1619. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12405-L12411` → after: `L11710-L11716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11710-L11716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11710-L11716) · [Before (L12405-L12411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12405-L12411)

```diff
-       Eq.Av = !1;
-       const jq = qq.Iy.yEq(qq.oR),
-         Hq = qq.Iy.hgq(Eq.Zk),
-         oq = Eq.Zk === qq.oR,
-         Pq = (0, Wq.b)(qq, Eq.Zk, Hq),
-         Qq = qq.Iy.REq(qq.oR),
-         yq = qq.Iy.REq(Eq.Zk),
+       ub.DW = !1;
+       const Ab = bb.pW.uub(bb.bM),
+         lb = bb.pW.Hhb(ub.yN),
+         Kb = ub.yN === bb.bM,
+         Wb = (0, wb.b)(bb, ub.yN, lb),
+         Cb = bb.pW.nub(bb.bM),
+         db = bb.pW.nub(ub.yN),
```

#### 1620. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12414-L12415` → after: `L11719-L11720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11719-L11720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11719-L11720) · [Before (L12414-L12415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12414-L12415)

```diff
-         const gq = qq.bloxd.getResolvedPhysicsSettings(qq.oR, jq.physicsState);
-         null === gq.fixedHeading && gq.steering && jq._steeringActiveLastTick ? vq[1] = (0, xq.i)(qq, jq) : vq[1] = (0, mq.u)(gq, jq.steeringHeading, Eq.baseRenderRotation[1] + uq.d.getPlayerFacingHeading(qq))
+         const hb = bb.bloxd.getResolvedPhysicsSettings(bb.bM, Ab.physicsState);
+         null === hb.fixedHeading && hb.steering && Ab._steeringActiveLastTick ? nb[1] = (0, Lb.l)(bb, Ab) : nb[1] = (0, Ub.t)(hb, Ab.steeringHeading, ub.baseRenderRotation[1] + ab.c.getPlayerFacingHeading(bb))
```

#### 1621. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12418-L12420` → after: `L11723-L11725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11723-L11725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11723-L11725) · [Before (L12418-L12420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12418-L12420)

```diff
-         if ((null === Hq || void 0 === Hq ? void 0 : Hq.ngq) && qq.bloxd.getRiddenVehicleEId(Hq.FN) === Eq.Zk && null === qq.bloxd.getLifeformType(Eq.Zk)) {
-           const qq = lq.b.lerpWeight(Nq * Eq._accumulatedDt);
-           vq[1] = Eq.renderRotation[1] + Oq.c.computeShortestRotation(Eq.renderRotation[1], vq[1]) * qq
+         if ((null === lb || void 0 === lb ? void 0 : lb.whb) && bb.bloxd.getRiddenVehicleEId(lb.mZ) === ub.yN && null === bb.bloxd.getLifeformType(ub.yN)) {
+           const bb = Ob.c.lerpWeight(Zb * ub._accumulatedDt);
+           nb[1] = ub.renderRotation[1] + Gb.d.computeShortestRotation(ub.renderRotation[1], nb[1]) * bb
```

#### 1622. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12423-L12424` → after: `L11728-L11729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11728-L11729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11728-L11729) · [Before (L12423-L12424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12423-L12424)

```diff
-       const hq = Pq ? null !== (gq = null === Qq || void 0 === Qq ? void 0 : Qq.speed) && void 0 !== gq ? gq : 0 : null !== (Yq = null === yq || void 0 === yq ? void 0 : yq.speed) && void 0 !== Yq ? Yq : 0,
-         nq = null !== (Aq = null === yq || void 0 === yq ? void 0 : yq.pose) && void 0 !== Aq ? Aq : "standing",
+       const Db = Wb ? null !== (hb = null === Cb || void 0 === Cb ? void 0 : Cb.speed) && void 0 !== hb ? hb : 0 : null !== (Bb = null === db || void 0 === db ? void 0 : db.speed) && void 0 !== Bb ? Bb : 0,
+         xb = null !== (Yb = null === db || void 0 === db ? void 0 : db.pose) && void 0 !== Yb ? Yb : "standing",
```

#### 1623. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12429-L12430` → after: `L11734-L11735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11734-L11735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11734-L11735) · [Before (L12429-L12430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12429-L12430)

```diff
-         Mq = !(Pq && !oq) && !0 === (null === (Bq = qq.jR) || void 0 === Bq || null === (aq = Bq[qq.oR]) || void 0 === aq || null === (Vq = aq[Eq.Zk]) || void 0 === Vq ? void 0 : Vq.lockHeadToBody),
-         Tq = null !== (dq = qq.Iy.getState(Eq.Zk, "animator")) && void 0 !== dq ? dq : null;
+         tb = !(Wb && !Kb) && !0 === (null === (Hb = bb.Qs) || void 0 === Hb || null === (Xb = Hb[bb.bM]) || void 0 === Xb || null === (pb = Xb[ub.yN]) || void 0 === pb ? void 0 : pb.lockHeadToBody),
+         Jb = null !== (ob = bb.pW.getState(ub.yN, "animator")) && void 0 !== ob ? ob : null;
```

#### 1624. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12439` → after: `L11744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11744) · [Before (L12439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12439)

```diff
-       const Oq = (0, Yq.e)().Ma.LJ.getNodeNames(Eq),
+       const Gb = (0, Bb.g)().xX.oN.getNodeNames(ub),
```

#### 1625. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12483` → after: `L11788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11788) · [Before (L12483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12483)

```diff
-       let vq = Wq ? 0 : null !== Aq && void 0 !== Aq ? Aq : 0,
+       let nb = wb ? 0 : null !== Yb && void 0 !== Yb ? Yb : 0,
```

#### 1626. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12491` → after: `L11796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11796) · [Before (L12491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12491)

```diff
-           iq = Math.max(iq, null !== (Zq = Vq[Yq].rotationsPerSecond) && void 0 !== Zq ? Zq : dq)
+           gb = Math.max(gb, null !== (ib = pb[Bb].rotationsPerSecond) && void 0 !== ib ? ib : ob)
```

#### 1627. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12497-L12498` → after: `L11802-L11803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11802-L11803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11802-L11803) · [Before (L12497-L12498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12497-L12498)

```diff
-           gq = Wq ? 0 : null !== Aq && void 0 !== Aq ? Aq : qq.softTolerance,
-           mq = Wq ? null : null !== uq && void 0 !== uq ? uq : qq.hardTolerance,
+           hb = wb ? 0 : null !== Yb && void 0 !== Yb ? Yb : bb.softTolerance,
+           Ub = wb ? null : null !== ab && void 0 !== ab ? ab : bb.hardTolerance,
```

#### 1628. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12502` → after: `L11807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11807) · [Before (L12502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12502)

```diff
-         const Bq = Wq ? iq : null !== (fq = qq.rotationsPerSecond) && void 0 !== fq ? fq : dq,
+         const Hb = wb ? gb : null !== (vb = bb.rotationsPerSecond) && void 0 !== vb ? vb : ob,
```

#### 1629. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12507-L12508` → after: `L11812-L11813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11812-L11813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11812-L11813) · [Before (L12507-L12508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12507-L12508)

```diff
-             gq = Oq.c.computeShortestRotation(rq[Yq], xq[Yq]);
-           gq < -vq ? xq[Yq] = rq[Yq] - vq : gq > vq && (xq[Yq] = rq[Yq] + vq);
+             hb = Gb.d.computeShortestRotation(jb[Bb], Lb[Bb]);
+           hb < -nb ? Lb[Bb] = jb[Bb] - nb : hb > nb && (Lb[Bb] = jb[Bb] + nb);
```

#### 1630. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12511` → after: `L11816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11816) · [Before (L12511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12511)

```diff
-             const qq = Oq.c.computeShortestRotation(rq[Yq], cq[Yq]),
+             const bb = Gb.d.computeShortestRotation(jb[Bb], Sb[Bb]),
```

#### 1631. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12515` → after: `L11820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11820) · [Before (L12515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12515)

```diff
-           lq || (cq[Yq] = Oq.c.applyRotation(cq[Yq], xq[Yq], Nq)), xq[Yq] === qq && cq[Yq] === Eq || (tq = !0)
+           Ob || (Sb[Bb] = Gb.d.applyRotation(Sb[Bb], Lb[Bb], Zb)), Lb[Bb] === bb && Sb[Bb] === ub || (rb = !0)
```

#### 1632. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12520` → after: `L11825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11825) · [Before (L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12520)

```diff
-       const Mq = (0, Yq.e)().Ma.LJ,
+       const tb = (0, Bb.g)().xX.oN,
```

#### 1633. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12529` → after: `L11834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11834) · [Before (L12529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12529)

```diff
-         const lq = Oq.c.computeShortestRotation(gq[1], rq[1]);
+         const Ob = Gb.d.computeShortestRotation(hb[1], jb[1]);
```

#### 1634. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12541` → after: `L11846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11846) · [Before (L12541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12541)

```diff
-   37668: (qq, Eq, gq) => {
+   37292: (bb, ub, hb) => {
```

#### 1635. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12546-L12549` → after: `L11851-L11854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11851-L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11851-L11854) · [Before (L12546-L12549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12546-L12549)

```diff
-     var Yq = gq(37684),
-       lq = gq(190),
-       Oq = gq(6348),
-       mq = gq(317),
+     var Bb = hb(37308),
+       Ob = hb(191),
+       Gb = hb(6213),
+       Ub = hb(324),
```

#### 1636. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12551-L12557` → after: `L11856-L11862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11856-L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11856-L11862) · [Before (L12551-L12557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12551-L12557)

```diff
-       Aq = gq(37676),
-       cq = gq(9379),
-       uq = gq(37650),
-       Bq = gq(37656),
-       Wq = gq(37661);
-     var Nq = gq(1870),
-       aq = gq(307);
+       Yb = hb(37298),
+       Sb = hb(9181),
+       ab = hb(37276),
+       Hb = hb(37279),
+       wb = hb(37286);
+     var Zb = hb(1784),
+       Xb = hb(314);
```

#### 1637. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12562` → after: `L11867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11867) · [Before (L12562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12562)

```diff
-     const Pq = ["b", 0, 1, "h", "c", 65, 86, "g", 195, "f", "d", 8, 255, "length", 2, 171, 181, "undefined", void 0, 97, 163, 63, 6, "fromCodePoint", 7, 12, "push", 225, 135, 95, 4, 3, "a", 15, 47, 172, !1, 84, 127, 244, "i", 91, 175, 8191, 88, 13, 14, 200, !0, 16, 5, 62, 138, 93 … [truncated]
+     const Wb = [1, 2, 0, 6, "c", "i", 49, "e", "f", 4, 8, 255, "length", "b", 219, 145, 129, "undefined", void 0, 32, 33, 63, "fromCodePoint", 7, 12, "push", 95, 101, 3, 31, "h", 52, 91, 8191, 88, 13, 14, "d", null, 228, 105, 197, 60, 79, 166, 243, 169, 103, "g", 208, 133, 115, 9 … [truncated]
```

#### 1638. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12565-L12576` → after: `L11870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11870) · [Before (L12565-L12576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12565-L12576)

```diff
-       return qq[Pq[13]] = Pq[2], typeof Hq[qq[Pq[1]]] === Pq[17] ? Hq[qq[Pq[1]]] = function(...qq) {
-         for (rq(qq[Pq[13]] = Pq[2], qq[-Pq[5]] = '!3&/8?*7^_ZsCDb|g+1.PKjen"xu=pz~L)2f{9cmSqydrk>t@iX4]}VF50RvJ,HITo[awMhG%#OlA6$YBNWEQ;:`U(<', qq[Pq[0]] = "" + (qq[Pq[1]] || ""), qq[Pq[4]] = qq[Pq[0]].length, qq[Pq[10]] = [], qq[Pq[8]] = Pq[1], qq[Pq[9]] = Pq[1], qq[Pq[7]] = -Pq … [truncated]
-           if (qq[Pq[6]] = qq[-Pq[5]].indexOf(qq[Pq[0]][qq[Pq[3]]]), qq[Pq[6]] !== -Pq[2])
-             if (qq[Pq[7]] < Pq[1]) qq[Pq[7]] = qq[Pq[6]];
-             else {
-               rq(qq[Pq[7]] += qq[Pq[6]] * Pq[41], qq[Pq[8]] |= qq[Pq[7]] << qq[Pq[9]], qq[Pq[9]] += (qq[Pq[7]] & Pq[43]) > Pq[44] ? Pq[45] : Pq[46]);
-               do {
-                 rq(qq[Pq[10]].push(qq[Pq[8]] & Pq[12]), qq[Pq[8]] >>= Pq[11], qq[Pq[9]] -= Pq[11])
-               } while (qq[Pq[9]] > Pq[24]);
-               qq[Pq[7]] = -Pq[2]
-             } return qq[Pq[7]] > -Pq[2] && qq[Pq[10]].push((qq[Pq[8]] | qq[Pq[7]] << qq[Pq[9]]) & Pq[12]), yq(qq[Pq[10]])
-       }(oq[qq[Pq[1]]]) : Hq[qq[Pq[1]]]
+       return bb[Wb[12]] = Wb[0], typeof mb !== Wb[17] && mb ? (new mb).decode(new Ib(bb[Wb[2]])) : typeof Pb !== Wb[17] && Pb ? Pb.from(bb[Wb[2]]).toString("utf-8") : yb(bb[Wb[2]])
```

#### 1639. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12580` → after: `L11874-L11887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11874-L11887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11874-L11887) · [Before (L12580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12580)

```diff
-       return qq[Pq[13]] = Pq[2], typeof Lq !== Pq[17] && Lq ? (new Lq).decode(new Jq(qq[Pq[1]])) : typeof kq !== Pq[17] && kq ? kq.from(qq[Pq[1]]).toString("utf-8") : Fq(qq[Pq[1]])
+       if (bb[Wb[12]] = Wb[28], bb[Wb[2]] === function(...bb) {
+           return bb[Wb[12]] = Wb[0], typeof lb[bb[Wb[2]]] === Wb[17] ? lb[bb[Wb[2]]] = function(...bb) {
+             for (jb(bb[Wb[12]] = Wb[0], bb[Wb[0]] = '&lHAiBRcbSTetXFpIoVsGCDv{q9:=wn%@MKY/h2z[~,.>5#uZrO_W(61g4*j$+"Qd0a<xJm!P3f`7)L^yEN|?U}]8;k', bb[Wb[13]] = "" + (bb[Wb[2]] || ""), bb[Wb[29]] = bb[Wb[13]].length, bb[Wb[37]] = [], bb[-Wb[6]] = Wb[2], bb[Wb[3]] = Wb[2], bb[Wb[23 … [truncated]
+               if (bb[Wb[31]] = bb[Wb[0]].indexOf(bb[Wb[13]][bb[Wb[30]]]), bb[Wb[31]] !== -Wb[0])
+                 if (bb[Wb[23]] < Wb[2]) bb[Wb[23]] = bb[Wb[31]];
+                 else {
+                   jb(bb[Wb[23]] += bb[Wb[31]] * Wb[32], bb[-Wb[6]] |= bb[Wb[23]] << bb[Wb[3]], bb[Wb[3]] += (bb[Wb[23]] & Wb[33]) > Wb[34] ? Wb[35] : Wb[36]);
+                   do {
+                     jb(bb[Wb[37]].push(bb[-Wb[6]] & Wb[11]), bb[-Wb[6]] >>= Wb[10], bb[Wb[3]] -= Wb[10])
+                   } while (bb[Wb[3]] > Wb[23]);
+                   bb[Wb[23]] = -Wb[0]
+                 } return bb[Wb[23]] > -Wb[0] && bb[Wb[37]].push((bb[-Wb[6]] | bb[Wb[23]] << bb[Wb[3]]) & Wb[11]), Cb(bb[Wb[37]])
+           }(Kb[bb[Wb[2]]]) : lb[bb[Wb[2]]]
+         }(87) + Wb[101]) return bb[Wb[0]] + bb[Wb[1]]
```

#### 1640. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12588-L12734` → after: `L11895-L11918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11895-L11918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11895-L11918) · [Before (L12588-L12734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12588-L12734)

```diff
-     rq(Hq = {}, oq = ['tGD7nGX]#b741?%"<^X%D0J>4VsZ]|*', "VPLzOJ^>/", "Yhb7T>BO0o]", ")|B*gGDq+|o11,xqkPyu*@;0(o`.hiq~&dG8", "1J&LgAUnn+b,Gb#mx|k~(v>S|J65*?Eq1*dpMMmf$5g/3", "EkPFhM[Bl+", "%4[pkW5wT1}Bebpyb3", "7LT#lXzn<+a|R9=y@GL#x#`;.0*2U|810v2%qi,tdsNi`xf9+V3", "o#`=;)B><s+oIc … [truncated]
-       rq(qq[Pq[13]] = Pq[1], qq[-Pq[15]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], qq[Pq[2]] = Pq[18], qq[Pq[14]] = []);
-       try {
-         rq(qq[Pq[2]] = Object, qq[Pq[14]][Pq[26]]("".__proto__.constructor.name))
-       } catch (oq) {}
-       qq: for (qq[Pq[10]] = Pq[1]; qq[Pq[10]] < qq[-Pq[15]][Pq[13]]; qq[Pq[10]]++) try {
-         for (qq[Pq[2]] = qq[-Pq[15]][qq[Pq[10]]](), qq[-Pq[16]] = Pq[1]; qq[-Pq[16]] < qq[Pq[14]][Pq[13]]; qq[-Pq[16]]++)
-           if (typeof qq[Pq[2]][qq[Pq[14]][qq[-Pq[16]]]] === Pq[17]) continue qq;
- ... (131 more removed lines; see GitHub link above)
+     jb(lb = {}, Kb = ["@q(fh|SAvT5Gv)*q~l<]rtF+3pp>#ra0IZ:J83Zw3pgvvVoBnM1J=PVB?l4", "f0Cj8/uLz}z@1", "Xu6u=ov[z]3Xk*!.b4$cmOA99", '6TeniZ+.J~d5u"JtgGJ96P_Ko}!sU', "ku!9#Z2[a}As8E", "f.AJ7eD9,plX[N)7m}UH_ef6h!M7jt<APre%.b7`&?|G]NCBOo46.=3F", "sSW%u^m.Ru:(:dUKtn,J3Zw2}SGrXVtt5ER#U … [truncated]
+         jb(bb[Wb[12]] = Wb[2], bb[Wb[15]] = [function() {
+           return globalThis
+         }, function() {
+           return global
+         }, function() {
+           return window
+         }, function() {
+           return new Function("return this")()
+         }], bb[Wb[13]] = Wb[18], bb[Wb[1]] = []);
+         try {
+           jb(bb[Wb[13]] = Object, bb[Wb[1]][Wb[25]]("".__proto__.constructor.name))
+         } catch (Kb) {}
+         bb: for (bb[-Wb[14]] = Wb[2]; bb[-Wb[14]] < bb[Wb[15]][Wb[12]]; bb[-Wb[14]]++) try {
+           for (bb[Wb[13]] = bb[Wb[15]][bb[-Wb[14]]](), bb[-Wb[16]] = Wb[2]; bb[-Wb[16]] < bb[Wb[1]][Wb[12]]; bb[-Wb[16]]++)
+             if (typeof bb[Wb[13]][bb[Wb[1]][bb[-Wb[16]]]] === Wb[17]) continue bb;
+ ... (8 more added lines; see GitHub link above)
```

#### 1641. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12736-L12742` → after: `L11920-L11925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11920-L11925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11920-L11925) · [Before (L12736-L12742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12736-L12742)

```diff
-         }(qq[Pq[1]][jq(Pq[56]) + jq(114) + jq(Pq[82]) + jq(116)], qq[Pq[2]], qq[Pq[50]], qq[Pq[24]]))
-       }
-       if (qq[Pq[11]]) {
-         function hq(...qq) {
-           for (rq(qq[Pq[13]] = Pq[2], qq[Pq[57]] = '`MGjAUhgIZolnDVPXdaRiFrsSYcNef/H~q8{tk<0wzJ@91E+KB)=7,bW#$L*(6Cx[!:>vT^ym|u?5]32"&p.4Q}_;O%', qq[Pq[0]] = "" + (qq[Pq[1]] || ""), qq[Pq[31]] = qq[Pq[0]].length, qq[Pq[60]] = [], qq[Pq[59]] = Pq[1], qq[Pq[9]] = Pq[1], qq[Pq[58]]  … [truncated]
-             if (qq[Pq[40]] = qq[Pq[57]].indexOf(qq[Pq[0]][qq[Pq[3]]]), qq[Pq[40]] !== -Pq[2])
-               if (qq[Pq[58]] < Pq[1]) qq[Pq[58]] = qq[Pq[40]];
+       }()),
+       function(...bb) {
+         return bb[Wb[12]] = Wb[0], typeof lb[bb[Wb[2]]] === Wb[17] ? lb[bb[Wb[2]]] = function(...bb) {
+           for (jb(bb[Wb[12]] = Wb[0], bb[Wb[0]] = 'U1FEXcJ96Dx}2C?V*,WBM!YK7rndf0hj%HqI)it:.A+Q&o[|3{#4>]u~bkLlpNaT;S$gZ/"O5G`8s@z(vP=e^Rwym_<', bb[Wb[1]] = "" + (bb[Wb[2]] || ""), bb[Wb[4]] = bb[Wb[1]].length, bb[Wb[9]] = [], bb[Wb[7]] = Wb[2], bb[Wb[8]] = Wb[2], bb[Wb[6]] = -Wb … [truncated]
+             if (bb[Wb[5]] = bb[Wb[0]].indexOf(bb[Wb[1]][bb[-Wb[3]]]), bb[Wb[5]] !== -Wb[0])
+               if (bb[Wb[6]] < Wb[2]) bb[Wb[6]] = bb[Wb[5]];
```

#### 1642. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12744` → after: `L11927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11927) · [Before (L12744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12744)

```diff
-                 rq(qq[Pq[58]] += qq[Pq[40]] * Pq[41], qq[Pq[59]] |= qq[Pq[58]] << qq[Pq[9]], qq[Pq[9]] += (qq[Pq[58]] & Pq[43]) > Pq[44] ? Pq[45] : Pq[46]);
+                 jb(bb[Wb[6]] += bb[Wb[5]] * Wb[32], bb[Wb[7]] |= bb[Wb[6]] << bb[Wb[8]], bb[Wb[8]] += (bb[Wb[6]] & Wb[33]) > Wb[34] ? Wb[35] : Wb[36]);
```

#### 1643. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12746-L12751` → after: `L11929-L11948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11929-L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11929-L11948) · [Before (L12746-L12751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12746-L12751)

```diff
-                   rq(qq[Pq[60]].push(qq[Pq[59]] & Pq[12]), qq[Pq[59]] >>= Pq[11], qq[Pq[9]] -= Pq[11])
-                 } while (qq[Pq[9]] > Pq[24]);
-                 qq[Pq[58]] = -Pq[2]
-               } return qq[Pq[58]] > -Pq[2] && qq[Pq[60]].push((qq[Pq[59]] | qq[Pq[58]] << qq[Pq[9]]) & Pq[12]), yq(qq[Pq[60]])
-         }
- 
+                   jb(bb[Wb[9]].push(bb[Wb[7]] & Wb[11]), bb[Wb[7]] >>= Wb[10], bb[Wb[8]] -= Wb[10])
+                 } while (bb[Wb[8]] > Wb[23]);
+                 bb[Wb[6]] = -Wb[0]
+               } return bb[Wb[6]] > -Wb[0] && bb[Wb[9]].push((bb[Wb[7]] | bb[Wb[6]] << bb[Wb[8]]) & Wb[11]), Cb(bb[Wb[9]])
+         }(Kb[bb[Wb[2]]]) : lb[bb[Wb[2]]]
+       }(Wb[34]) in rb && function(...bb) {
+         var ub;
+         jb(bb[Wb[12]] = Wb[2], ub = function(...bb) {
+           jb(bb[Wb[12]] = Wb[0], this.LH = bb[Wb[2]], this.length = Wb[2], this.map = {}, this.head = Wb[38], this.tail = Wb[38])
+         }, ub.prototype.get = function(...bb) {
+           var ub;
+           return jb(bb[Wb[12]] = Wb[0], ub = this.map[bb[Wb[2]]]), ub ? (this.remove(ub), this.insert(ub.key, ub.val), ub.val) : -Wb[0]
+         }, ub.prototype.put = function(...bb) {
+           jb(bb[Wb[12]] = Wb[1], this.map[bb[Wb[2]]] ? (this.remove(this.map[bb[Wb[2]]]), this.insert(bb[Wb[2]], bb[Wb[0]])) : this.length === this.LH ? (this.remove(this.head), this.insert(bb[Wb[2]], bb[Wb[0]])) : (this.insert(bb[Wb[2]], bb[Wb[0]]), this.length++))
+         }, ub.prototype.remove = function(...bb) {
+           jb(bb[Wb[12]] = Wb[0], bb[-Wb[40]] = bb[Wb[2]].prev, bb[-Wb[39]] = bb[Wb[2]].next), bb[-Wb[39]] && (bb[-Wb[39]].prev = bb[-Wb[40]]), bb[-Wb[40]] && (bb[-Wb[40]].next = bb[-Wb[39]]), this.head === bb[Wb[2]] && (this.head = bb[-Wb[39]]), this.tail === bb[Wb[2]] && (this.t … [truncated]
+ ... (4 more added lines; see GitHub link above)
```

#### 1644. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12753` → after: `L11950-L11961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11950-L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11950-L11961) · [Before (L12753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12753)

```diff
-           return qq[Pq[13]] = Pq[2], typeof Hq[qq[Pq[1]]] === Pq[17] ? Hq[qq[Pq[1]]] = hq(oq[qq[Pq[1]]]) : Hq[qq[Pq[1]]]
+           return bb[Wb[12]] = Wb[0], typeof lb[bb[Wb[2]]] === Wb[17] ? lb[bb[Wb[2]]] = function(...bb) {
+             for (jb(bb[Wb[12]] = Wb[0], bb[Wb[0]] = 'zs6ymFHOlpoRxqNf%bB=_)9/+{0,J7aj[ghIAPVG$:&#*Lr<`w|!C"23Z]8EYteDT15(n>X~^cQ;.4vu@iSMUdk}?WK', bb[Wb[13]] = "" + (bb[Wb[2]] || ""), bb[Wb[28]] = bb[Wb[13]].length, bb[Wb[37]] = [], bb[Wb[7]] = Wb[2], bb[Wb[8]] = Wb[2], bb[Wb[34] … [truncated]
+               if (bb[Wb[52]] = bb[Wb[0]].indexOf(bb[Wb[13]][bb[Wb[10]]]), bb[Wb[52]] !== -Wb[0])
+                 if (bb[Wb[34]] < Wb[2]) bb[Wb[34]] = bb[Wb[52]];
+                 else {
+                   jb(bb[Wb[34]] += bb[Wb[52]] * Wb[32], bb[Wb[7]] |= bb[Wb[34]] << bb[Wb[8]], bb[Wb[8]] += (bb[Wb[34]] & Wb[33]) > Wb[34] ? Wb[35] : Wb[36]);
+                   do {
+                     jb(bb[Wb[37]].push(bb[Wb[7]] & Wb[11]), bb[Wb[7]] >>= Wb[10], bb[Wb[8]] -= Wb[10])
+                   } while (bb[Wb[8]] > Wb[23]);
+                   bb[Wb[34]] = -Wb[0]
+                 } return bb[Wb[34]] > -Wb[0] && bb[Wb[37]].push((bb[Wb[7]] | bb[Wb[34]] << bb[Wb[8]]) & Wb[11]), Cb(bb[Wb[37]])
+           }(Kb[bb[Wb[2]]]) : lb[bb[Wb[2]]]
```

#### 1645. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12756-L12760` → after: `L11986-L11994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11986-L11994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11986-L11994) · [Before (L12756-L12760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12756-L12760)

```diff
-         function bq(...qq) {
-           rq(qq[Pq[13]] = Pq[1], qq[Pq[32]] = function(...qq) {
-             for (rq(qq[Pq[13]] = Pq[2], qq[Pq[32]] = Pq[1], qq[Pq[14]] = {}, qq[Pq[63]] = Pq[1], qq[Pq[30]] = Pq[1], qq[-Pq[64]] = Pq[1], qq[-Pq[62]] = qq[Pq[1]].length), qq[Pq[7]] = Pq[1]; qq[Pq[7]] < qq[-Pq[62]]; qq[Pq[7]]++) {
-               for (rq(qq[Pq[14]] = {}, qq[Pq[63]] = Pq[1], qq[Pq[30]] = Pq[2]), qq[Pq[11]] = qq[Pq[7]] + Pq[2]; qq[Pq[11]] < qq[-Pq[62]]; qq[Pq[11]]++) qq[Pq[1]][qq[Pq[7]]].x !== qq[Pq[1]][qq[Pq[11]]].x || qq[Pq[1]][qq[Pq[7]]].y !== qq[Pq[1]][qq[Pq[11]]].y ? (qq[Pq[1]][qq[Pq[7]]] … [truncated]
-               rq(qq[Pq[63]] += qq[Pq[30]], qq[Pq[32]] = Math.max(qq[Pq[32]], qq[Pq[63]]))
+           function Hb(...bb) {
+             return bb[Wb[12]] = Wb[0], typeof lb[bb[Wb[2]]] === Wb[17] ? lb[bb[Wb[2]]] = ab(Kb[bb[Wb[2]]]) : lb[bb[Wb[2]]]
+           }
+           return void jb((0, wb[Wb[13]])(bb[Wb[0]], bb[Wb[1]], bb[Wb[28]], bb[Wb[9]], bb[Wb[54]], bb[Wb[3]], bb[Wb[2]]), function(bb, ub, hb, Bb) {
+             if (null === bb) return;
+             if (hb.Mp[1] < -bb.maxFallSpeed) {
+               const Ob = Bb / 1e3,
+                 Gb = (Zb.c.lerpWeight(Ob / bb.slowDownSeconds) * (-bb.maxFallSpeed - hb.Mp[1]) - (bb.compensateGravity ? ub.physics.gravity[1] * hb.gravityMultiplier * Ob : 0)) * hb.AU / Ob;
+               Lb().set(pb, 0, Gb, 0), hb.applyForce(pb)
```

#### 1646. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12762-L12777` → after: `L11996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L11996) · [Before (L12762-L12777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12762-L12777)

```diff
-             return qq[Pq[32]]
-           }, console.log(qq[Pq[32]]))
-         }
-         nq(117) + Pq[61] in tq && bq(), rq(qq[Pq[31]][Pq[84]] = xq()[nq(118)](qq[Pq[50]][Pq[65]]), xq()[nq(119)](qq[Pq[31]][Pq[79]], qq[Pq[50]][Pq[65]]))
-       } else {
-         function iq(...qq) {
-           for (rq(qq[Pq[13]] = Pq[2], qq[Pq[32]] = 'A7usjW%B;$iO46!ef>bP/59Tax&=}0ZzR_g(|LrY^QwE<3,H?yc`Nmh*#Dv@182[l:I]).J+K~k"{XptnqGSdFCoVMU', qq[Pq[14]] = "" + (qq[Pq[1]] || ""), qq[Pq[20]] = qq[Pq[14]].length, qq[Pq[30]] = [], qq[Pq[50]] = Pq[1], qq[Pq[67]] = Pq[1], qq[Pq[24 … [truncated]
-             if (qq[Pq[40]] = qq[Pq[32]].indexOf(qq[Pq[14]][qq[-Pq[66]]]), qq[Pq[40]] !== -Pq[2])
-               if (qq[Pq[24]] < Pq[1]) qq[Pq[24]] = qq[Pq[40]];
-               else {
-                 rq(qq[Pq[24]] += qq[Pq[40]] * Pq[41], qq[Pq[50]] |= qq[Pq[24]] << qq[Pq[67]], qq[Pq[67]] += (qq[Pq[24]] & Pq[43]) > Pq[44] ? Pq[45] : Pq[46]);
-                 do {
-                   rq(qq[Pq[30]].push(qq[Pq[50]] & Pq[12]), qq[Pq[50]] >>= Pq[11], qq[Pq[67]] -= Pq[11])
-                 } while (qq[Pq[67]] > Pq[24]);
-                 qq[Pq[24]] = -Pq[2]
-               } return qq[Pq[24]] > -Pq[2] && qq[Pq[30]].push((qq[Pq[50]] | qq[Pq[24]] << qq[Pq[67]]) & Pq[12]), yq(qq[Pq[30]])
+           }(bb[Wb[2]][ub(Wb[58]) + Hb(97) + Hb(98) + Hb(99)], bb[Wb[0]], bb[Wb[54]], bb[Wb[23]]))
```

#### 1647. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12780-L12782` → after: `L12012-L12014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12012-L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12012-L12014) · [Before (L12780-L12782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12780-L12782)

```diff
-         function Zq(...qq) {
-           return qq[Pq[13]] = Pq[2], typeof Hq[qq[Pq[1]]] === Pq[17] ? Hq[qq[Pq[1]]] = iq(oq[qq[Pq[1]]]) : Hq[qq[Pq[1]]]
-         }
+           function nb(...bb) {
+             return bb[Wb[12]] = Wb[0], typeof lb[bb[Wb[2]]] === Wb[17] ? lb[bb[Wb[2]]] = Ab(Kb[bb[Wb[2]]]) : lb[bb[Wb[2]]]
+           }
```

#### 1648. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12797-L12799` → after: `L12017-L12028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12017-L12028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12017-L12028) · [Before (L12797-L12799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12797-L12799)

```diff
-             for (rq(qq[Pq[13]] = Pq[2], qq[Pq[32]] = 'OH69IpvE:dMV@TW<y`G~L]^>r.axD/_g!3nlsoS1Fbu(wz+i}tf0?|=C,${"#XqjBRZ[A24cYN;5JK%Um&hQP78*ek)', qq[-Pq[76]] = "" + (qq[Pq[1]] || ""), qq[Pq[4]] = qq[-Pq[76]].length, qq[Pq[10]] = [], qq[Pq[78]] = Pq[1], qq[Pq[52]] = Pq[1], qq[Pq … [truncated]
-               if (qq[-Pq[77]] = qq[Pq[32]].indexOf(qq[-Pq[76]][qq[Pq[11]]]), qq[-Pq[77]] !== -Pq[2])
-                 if (qq[Pq[24]] < Pq[1]) qq[Pq[24]] = qq[-Pq[77]];
+             jb(bb[Wb[12]] = Wb[2], bb[Wb[13]] = function(...ub) {
+               return jb(ub[Wb[12]] = Wb[28], ub[Wb[55]] = {}), ub[Wb[1]].length !== ub[Wb[2]].length + ub[Wb[0]].length ? Wb[64] : bb[Wb[4]](ub[Wb[2]], ub[Wb[0]], ub[Wb[1]], Wb[2], Wb[2], Wb[2], ub[Wb[55]])
+             }, bb[Wb[4]] = function(...ub) {
+               return jb(ub[Wb[12]] = Wb[23], ub[-Wb[29]] = Wb[64]), ub[Wb[54]] >= ub[Wb[1]].length ? Wb[83] : ub[Wb[3]]["" + ub[Wb[28]] + ub[Wb[9]] + ub[Wb[54]]] !== Wb[18] ? ub[Wb[3]]["" + ub[Wb[28]] + ub[Wb[9]] + ub[Wb[54]]] : (ub[Wb[1]][ub[Wb[54]]] === ub[Wb[2]][ub[Wb[28]]] && … [truncated]
+             }, console.log(bb[Wb[13]]))
+           }
+           nb(100) + "Z" in rb && Db(), jb(bb[Wb[28]][Wb[84]] = Lb()[nb(Wb[27])](bb[Wb[54]][Wb[65]]), Lb()[nb(102)](bb[Wb[28]][Wb[75]], bb[Wb[54]][Wb[65]]))
+         } else {
+           function xb(...bb) {
+             for (jb(bb[Wb[12]] = Wb[0], bb[Wb[55]] = '.7uv2F[!y1EHnYR|5`S"ah3,@WUPLsoNgG)Xi}^qJDbl0dw#Cc_Tf:Z8BtV%9{M$(<K?~=6QmjrOA4&>]x/*Ize;p+k', bb[Wb[66]] = "" + (bb[Wb[2]] || ""), bb[Wb[28]] = bb[Wb[66]].length, bb[Wb[9]] = [], bb[Wb[54]] = Wb[2], bb[-Wb[10]] = Wb[2], bb[Wb[ … [truncated]
+               if (bb[Wb[5]] = bb[Wb[55]].indexOf(bb[Wb[66]][bb[Wb[67]]]), bb[Wb[5]] !== -Wb[0])
+                 if (bb[Wb[32]] < Wb[2]) bb[Wb[32]] = bb[Wb[5]];
```

#### 1649. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12801` → after: `L12030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12030) · [Before (L12801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12801)

```diff
-                   rq(qq[Pq[24]] += qq[-Pq[77]] * Pq[41], qq[Pq[78]] |= qq[Pq[24]] << qq[Pq[52]], qq[Pq[52]] += (qq[Pq[24]] & Pq[43]) > Pq[44] ? Pq[45] : Pq[46]);
+                   jb(bb[Wb[32]] += bb[Wb[5]] * Wb[32], bb[Wb[54]] |= bb[Wb[32]] << bb[-Wb[10]], bb[-Wb[10]] += (bb[Wb[32]] & Wb[33]) > Wb[34] ? Wb[35] : Wb[36]);
```

#### 1650. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12803-L12806` → after: `L12032-L12035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12032-L12035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12032-L12035) · [Before (L12803-L12806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12803-L12806)

```diff
-                     rq(qq[Pq[10]].push(qq[Pq[78]] & Pq[12]), qq[Pq[78]] >>= Pq[11], qq[Pq[52]] -= Pq[11])
-                   } while (qq[Pq[52]] > Pq[24]);
-                   qq[Pq[24]] = -Pq[2]
-                 } return qq[Pq[24]] > -Pq[2] && qq[Pq[10]].push((qq[Pq[78]] | qq[Pq[24]] << qq[Pq[52]]) & Pq[12]), yq(qq[Pq[10]])
+                     jb(bb[Wb[9]].push(bb[Wb[54]] & Wb[11]), bb[Wb[54]] >>= Wb[10], bb[-Wb[10]] -= Wb[10])
+                   } while (bb[-Wb[10]] > Wb[23]);
+                   bb[Wb[32]] = -Wb[0]
+                 } return bb[Wb[32]] > -Wb[0] && bb[Wb[9]].push((bb[Wb[54]] | bb[Wb[32]] << bb[-Wb[10]]) & Wb[11]), Cb(bb[Wb[9]])
```

#### 1651. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12810` → after: `L12039-L12043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12039-L12043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12039-L12043) · [Before (L12810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12810)

```diff
-             return qq[Pq[13]] = Pq[2], typeof Hq[qq[Pq[1]]] === Pq[17] ? Hq[qq[Pq[1]]] = Mq(oq[qq[Pq[1]]]) : Hq[qq[Pq[1]]]
+             return bb[Wb[12]] = Wb[0], typeof lb[bb[Wb[2]]] === Wb[17] ? lb[bb[Wb[2]]] = xb(Kb[bb[Wb[2]]]) : lb[bb[Wb[2]]]
+           }
+ 
+           function gb(...bb) {
+             bb[Wb[12]] = Wb[2]
```

#### 1652. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12812-L12813` → after: `L12045-L12046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12045-L12046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12045-L12046) · [Before (L12812-L12813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12812-L12813)

```diff
-           const zq = xq()[Tq(Pq[57]) + "t"](qq[Pq[50]][Pq[65]], qq[Pq[31]][Pq[79]]);
-           if (zq > Pq[30] * gq[Tq(Pq[80]) + Tq(Pq[58]) + Pq[78]] * gq[Tq(Pq[80]) + Tq(Pq[58]) + Pq[78]]) {
+           ub(Wb[47]) in rb && gb();
+           if (!(bb[Wb[54]][zb(Wb[68]) + Wb[48]][Wb[2]] !== Wb[2] || bb[Wb[54]][zb(Wb[68]) + Wb[48]][Wb[0]] !== Wb[2] || bb[Wb[54]][zb(Wb[68]) + Wb[48]][Wb[1]] !== Wb[2])) {
```

#### 1653. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12815-L12817` → after: `L12048-L12050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12048-L12050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12048-L12050) · [Before (L12815-L12817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12815-L12817)

```diff
-               for (rq(qq[Pq[13]] = Pq[2], qq[Pq[32]] = 'ed+!?~y`|@0gIO2xX98WUunm*_q>5vzDj3K=RBGMNpkPf;<6:^#w.s7t}oA"H(E[rV%ah/1$4cL)Q,liCSJ]{b&ZYTF', qq[Pq[0]] = "" + (qq[Pq[1]] || ""), qq[Pq[4]] = qq[Pq[0]].length, qq[Pq[30]] = [], qq[Pq[81]] = Pq[1], qq[Pq[24]] = Pq[1], qq[Pq[4 … [truncated]
-                 if (qq[-Pq[83]] = qq[Pq[32]].indexOf(qq[Pq[0]][qq[-Pq[82]]]), qq[-Pq[83]] !== -Pq[2])
-                   if (qq[Pq[40]] < Pq[1]) qq[Pq[40]] = qq[-Pq[83]];
+               for (jb(bb[Wb[12]] = Wb[0], bb[Wb[55]] = 'AveV#gm`o]ME&0[HwQc^s|$GYBThr,:/Wt*SZXd"U2!35bD?71k_N9PyK>xf~iI};%8)q.Rn4uzjpl+OFL6C=@({Ja<', bb[-Wb[73]] = "" + (bb[Wb[2]] || ""), bb[Wb[4]] = bb[-Wb[73]].length, bb[Wb[37]] = [], bb[Wb[7]] = Wb[2], bb[Wb[8]] = Wb[2], bb[Wb … [truncated]
+                 if (bb[Wb[26]] = bb[Wb[55]].indexOf(bb[-Wb[73]][bb[Wb[10]]]), bb[Wb[26]] !== -Wb[0])
+                   if (bb[Wb[74]] < Wb[2]) bb[Wb[74]] = bb[Wb[26]];
```

#### 1654. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12819` → after: `L12052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12052) · [Before (L12819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12819)

```diff
-                     rq(qq[Pq[40]] += qq[-Pq[83]] * Pq[41], qq[Pq[81]] |= qq[Pq[40]] << qq[Pq[24]], qq[Pq[24]] += (qq[Pq[40]] & Pq[43]) > Pq[44] ? Pq[45] : Pq[46]);
+                     jb(bb[Wb[74]] += bb[Wb[26]] * Wb[32], bb[Wb[7]] |= bb[Wb[74]] << bb[Wb[8]], bb[Wb[8]] += (bb[Wb[74]] & Wb[33]) > Wb[34] ? Wb[35] : Wb[36]);
```

#### 1655. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12821-L12824` → after: `L12054-L12057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12054-L12057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12054-L12057) · [Before (L12821-L12824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12821-L12824)

```diff
-                       rq(qq[Pq[30]].push(qq[Pq[81]] & Pq[12]), qq[Pq[81]] >>= Pq[11], qq[Pq[24]] -= Pq[11])
-                     } while (qq[Pq[24]] > Pq[24]);
-                     qq[Pq[40]] = -Pq[2]
-                   } return qq[Pq[40]] > -Pq[2] && qq[Pq[30]].push((qq[Pq[81]] | qq[Pq[40]] << qq[Pq[24]]) & Pq[12]), yq(qq[Pq[30]])
+                       jb(bb[Wb[37]].push(bb[Wb[7]] & Wb[11]), bb[Wb[7]] >>= Wb[10], bb[Wb[8]] -= Wb[10])
+                     } while (bb[Wb[8]] > Wb[23]);
+                     bb[Wb[74]] = -Wb[0]
+                   } return bb[Wb[74]] > -Wb[0] && bb[Wb[37]].push((bb[Wb[7]] | bb[Wb[74]] << bb[Wb[8]]) & Wb[11]), Cb(bb[Wb[37]])
```

#### 1656. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12828` → after: `L12061-L12127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12061-L12127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12061-L12127) · [Before (L12828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12828)

```diff
-               return qq[Pq[13]] = Pq[2], typeof Hq[qq[Pq[1]]] === Pq[17] ? Hq[qq[Pq[1]]] = Sq(oq[qq[Pq[1]]]) : Hq[qq[Pq[1]]]
+               return bb[Wb[12]] = Wb[0], typeof lb[bb[Wb[2]]] === Wb[17] ? lb[bb[Wb[2]]] = ib(Kb[bb[Wb[2]]]) : lb[bb[Wb[2]]]
+             }
+             const tb = Lb()[vb(107) + "t"](bb[Wb[54]][Wb[65]], bb[Wb[28]][Wb[75]]);
+             if (tb > Wb[9] * hb[vb(Wb[76]) + vb(Wb[77]) + Wb[7]] * hb[vb(Wb[76]) + vb(Wb[77]) + Wb[7]]) {
+               function Jb(...bb) {
+                 for (jb(bb[Wb[12]] = Wb[0], bb[Wb[55]] = 'dAyG1)BCT(l#Ne5>7O?J&u+gp6=nb;fqDYvrR*ZowX0mW/S"K<t3:V9x$]`8!iQ4~zks,}.%H2I[^@M{|_EPFUhLjac', bb[Wb[13]] = "" + (bb[Wb[2]] || ""), bb[Wb[4]] = bb[Wb[13]].length, bb[-Wb[80]] = [], bb[Wb[78]] = Wb[2], bb[Wb[79]] = Wb[2], bb … [truncated]
+                   if (bb[Wb[5]] = bb[Wb[55]].indexOf(bb[Wb[13]][bb[Wb[10]]]), bb[Wb[5]] !== -Wb[0])
+                     if (bb[Wb[23]] < Wb[2]) bb[Wb[23]] = bb[Wb[5]];
+                     else {
+                       jb(bb[Wb[23]] += bb[Wb[5]] * Wb[32], bb[Wb[78]] |= bb[Wb[23]] << bb[Wb[79]], bb[Wb[79]] += (bb[Wb[23]] & Wb[33]) > Wb[34] ? Wb[35] : Wb[36]);
+                       do {
+                         jb(bb[-Wb[80]].push(bb[Wb[78]] & Wb[11]), bb[Wb[78]] >>= Wb[10], bb[Wb[79]] -= Wb[10])
+                       } while (bb[Wb[79]] > Wb[23]);
+                       bb[Wb[23]] = -Wb[0]
+                     } return bb[Wb[23]] > -Wb[0] && bb[-Wb[80]].push((bb[Wb[78]] | bb[Wb[23]] << bb[Wb[79]]) & Wb[11]), Cb(bb[-Wb[80]])
+               }
+ ... (51 more added lines; see GitHub link above)
```

#### 1657. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12833-L12846` → after: `L12131-L12143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12131-L12143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12131-L12143) · [Before (L12833-L12846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12833-L12846)

```diff
-       }
-       if (qq[Pq[88]] = Pq[2], qq[Pq[31]][Pq[84]] > Pq[1]) {
-         function Gq(...qq) {
-           for (rq(qq[Pq[13]] = Pq[2], qq[Pq[47]] = '#12!f&HGu,:Tm36l</eR)}+9tL@UbFM$d*A.(v7z|=qJVYpSi{>~s%or8"C0`^4OBDPjEx_Nyca?Kh5XZwW]gnk;[IQ', qq[Pq[14]] = "" + (qq[Pq[1]] || ""), qq[Pq[31]] = qq[Pq[14]].length, qq[Pq[10]] = [], qq[Pq[87]] = Pq[1], qq[Pq[9]] = Pq[1], qq[Pq[7]] … [truncated]
-             if (qq[Pq[86]] = qq[Pq[47]].indexOf(qq[Pq[14]][qq[-Pq[85]]]), qq[Pq[86]] !== -Pq[2])
-               if (qq[Pq[7]] < Pq[1]) qq[Pq[7]] = qq[Pq[86]];
-               else {
-                 rq(qq[Pq[7]] += qq[Pq[86]] * Pq[41], qq[Pq[87]] |= qq[Pq[7]] << qq[Pq[9]], qq[Pq[9]] += (qq[Pq[7]] & Pq[43]) > Pq[44] ? Pq[45] : Pq[46]);
-                 do {
-                   rq(qq[Pq[10]].push(qq[Pq[87]] & Pq[12]), qq[Pq[87]] >>= Pq[11], qq[Pq[9]] -= Pq[11])
-                 } while (qq[Pq[9]] > Pq[24]);
-                 qq[Pq[7]] = -Pq[2]
-               } return qq[Pq[7]] > -Pq[2] && qq[Pq[10]].push((qq[Pq[87]] | qq[Pq[7]] << qq[Pq[9]]) & Pq[12]), yq(qq[Pq[10]])
-         }
+         if (bb[-Wb[87]] = Wb[0], bb[Wb[28]][Wb[84]] > Wb[2]) {
+           function sb(...bb) {
+             for (jb(bb[Wb[12]] = Wb[0], bb[Wb[85]] = 'iA5Rx6B{M+mN)#4`Cr1Y7o?Od%DkIv&Lt@~>bU}yHaS8<f;z|c2"/.GVQ,sTp:P*F_h=WX^0EKeg!Zq3]9[nJj$u(lw', bb[Wb[1]] = "" + (bb[Wb[2]] || ""), bb[Wb[4]] = bb[Wb[1]].length, bb[-Wb[86]] = [], bb[Wb[54]] = Wb[2], bb[Wb[8]] = Wb[2], bb[-Wb[78 … [truncated]
+               if (bb[Wb[52]] = bb[Wb[85]].indexOf(bb[Wb[1]][bb[Wb[10]]]), bb[Wb[52]] !== -Wb[0])
+                 if (bb[-Wb[78]] < Wb[2]) bb[-Wb[78]] = bb[Wb[52]];
+                 else {
+                   jb(bb[-Wb[78]] += bb[Wb[52]] * Wb[32], bb[Wb[54]] |= bb[-Wb[78]] << bb[Wb[8]], bb[Wb[8]] += (bb[-Wb[78]] & Wb[33]) > Wb[34] ? Wb[35] : Wb[36]);
+                   do {
+                     jb(bb[-Wb[86]].push(bb[Wb[54]] & Wb[11]), bb[Wb[54]] >>= Wb[10], bb[Wb[8]] -= Wb[10])
+                   } while (bb[Wb[8]] > Wb[23]);
+                   bb[-Wb[78]] = -Wb[0]
+                 } return bb[-Wb[78]] > -Wb[0] && bb[-Wb[86]].push((bb[Wb[54]] | bb[-Wb[78]] << bb[Wb[8]]) & Wb[11]), Cb(bb[-Wb[86]])
+           }
```

#### 1658. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12848-L12869` → after: `L12145-L12147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12145-L12147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12145-L12147) · [Before (L12848-L12869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12848-L12869)

```diff
-         function Lq(qq) {
-           return typeof Hq[qq] === Pq[17] ? Hq[qq] = Gq(oq[qq]) : Hq[qq]
-         }
-         qq[Pq[30]][Lq(Pq[38])] < Pq[1] && (qq[Pq[88]] = Pq[31]), qq[Pq[31]][Pq[84]] -= gq[Lq(Pq[89]) + Lq(129) + Lq(130) + Lq(131) + "ck"]
-       }
-       const Yq = gq[Eq(132) + Pq[91]] + qq[Pq[31]][Eq(133)];
-       rq(qq[Pq[90]] = xq()[Eq(134)](qq[Pq[31]][Pq[79]]) + qq[Pq[30]][Eq(Pq[28])] * Yq * gq[Eq(136)] * qq[Pq[88]], qq[Pq[90]] = aq[Pq[4]][Eq(137)](qq[Pq[90]], gq[Eq(Pq[52]) + Pq[91]], Yq), qq[Pq[31]][Eq(Pq[54])]++);
-       const Oq = qq[Pq[24]] / 1e3,
-         mq = Vq;
-       if (rq(xq()[Eq(140)](mq, qq[Pq[30]][Eq(141)]), xq()[Eq(Pq[97]) + Eq(Pq[98])](mq, mq), xq()[Eq(Pq[96])](mq, mq, qq[Pq[90]]), qq[Pq[92]] = Pq[2]), qq[Pq[31]][Eq(Pq[54])] < gq[Eq(Pq[88]) + Eq(Pq[99]) + Eq(Pq[100])]) {
-         function Jq(...qq) {
-           for (rq(qq[Pq[13]] = Pq[2], qq[Pq[62]] = '(%820|V$a=FEk7*3I1GWH[`Ugqc<ru}v)D.hCQXKs+#B;ZMPwj!9pYSfexA/m6b5J4&@y>Ni_nz]OTLRd^"~ol?,t{:', qq[Pq[0]] = "" + (qq[Pq[1]] || ""), qq[Pq[31]] = qq[Pq[0]].length, qq[Pq[10]] = [], qq[Pq[78]] = Pq[1], qq[Pq[22]] = Pq[1], qq[Pq[24]] … [truncated]
-             if (qq[Pq[40]] = qq[Pq[62]].indexOf(qq[Pq[0]][qq[Pq[3]]]), qq[Pq[40]] !== -Pq[2])
-               if (qq[Pq[24]] < Pq[1]) qq[Pq[24]] = qq[Pq[40]];
-               else {
-                 rq(qq[Pq[24]] += qq[Pq[40]] * Pq[41], qq[Pq[78]] |= qq[Pq[24]] << qq[Pq[22]], qq[Pq[22]] += (qq[Pq[24]] & Pq[43]) > Pq[44] ? Pq[45] : Pq[46]);
- ... (6 more removed lines; see GitHub link above)
+           function Mb(...bb) {
+             return bb[Wb[12]] = Wb[0], typeof lb[bb[Wb[2]]] === Wb[17] ? lb[bb[Wb[2]]] = sb(Kb[bb[Wb[2]]]) : lb[bb[Wb[2]]]
+           }
```

#### 1659. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12871-L12872` → after: `L12149-L12164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12149-L12164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12149-L12164) · [Before (L12871-L12872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12871-L12872)

```diff
-         function kq(...qq) {
-           return qq[Pq[13]] = Pq[2], typeof Hq[qq[Pq[1]]] === Pq[17] ? Hq[qq[Pq[1]]] = Jq(oq[qq[Pq[1]]]) : Hq[qq[Pq[1]]]
+           function mb(...bb) {
+             var ub;
+             jb(bb[Wb[12]] = Wb[2], ub = function(...bb) {
+               jb(bb[Wb[12]] = Wb[0], this.LH = bb[Wb[2]], this.length = Wb[2], this.map = {}, this.head = Wb[38], this.tail = Wb[38])
+             }, ub.prototype.get = function(...bb) {
+               var ub;
+               return jb(bb[Wb[12]] = Wb[0], ub = this.map[bb[Wb[2]]]), ub ? (this.remove(ub), this.insert(ub.key, ub.val), ub.val) : -Wb[0]
+             }, ub.prototype.put = function(...bb) {
+               jb(bb[Wb[12]] = Wb[1], this.map[bb[Wb[2]]] ? (this.remove(this.map[bb[Wb[2]]]), this.insert(bb[Wb[2]], bb[Wb[0]])) : this.length === this.LH ? (this.remove(this.head), this.insert(bb[Wb[2]], bb[Wb[0]])) : (this.insert(bb[Wb[2]], bb[Wb[0]]), this.length++))
+             }, ub.prototype.remove = function(...bb) {
+               jb(bb[Wb[12]] = Wb[0], bb[Wb[55]] = bb[Wb[2]].prev, bb[Wb[13]] = bb[Wb[2]].next), bb[Wb[13]] && (bb[Wb[13]].prev = bb[Wb[55]]), bb[Wb[55]] && (bb[Wb[55]].next = bb[Wb[13]]), this.head === bb[Wb[2]] && (this.head = bb[Wb[13]]), this.tail === bb[Wb[2]] && (this.tail = … [truncated]
+             }, ub.prototype.insert = function(...bb) {
+               jb(bb[Wb[12]] = Wb[1], bb[Wb[1]] = new List(bb[Wb[2]], bb[Wb[0]]), this.tail ? (this.tail.next = bb[Wb[1]], bb[Wb[1]].prev = this.tail, this.tail = bb[Wb[1]]) : (this.tail = bb[Wb[1]], this.head = bb[Wb[1]]), this.map[bb[Wb[2]]] = bb[Wb[1]])
+             }, console.log(ub))
+           }
+           ub(116) + "M" in rb && mb(), bb[Wb[9]][Mb(117)] < Wb[2] && (bb[-Wb[87]] = Wb[28]), bb[Wb[28]][Wb[84]] -= hb[Mb(118) + Mb(119) + Mb(120) + Mb(121) + "ck"]
```

#### 1660. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12874` → after: `L12166-L12170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12166-L12170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12166-L12170) · [Before (L12874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12874)

```diff
-         if (qq[Pq[92]] = Nq[Pq[0]][kq(148) + kq(149)](qq[Pq[31]][kq(150)] / lq[Pq[4]][kq(151) + kq(152) + kq(153)]), qq[Pq[92]] > .8) {
+         const Bb = hb[ub(122) + Wb[90]] + bb[Wb[28]][ub(123)];
+         jb(bb[Wb[13]] = Lb()[ub(Wb[78])](bb[Wb[28]][Wb[75]]) + bb[Wb[9]][ub(Wb[74])] * Bb * hb[ub(126)] * bb[-Wb[87]], bb[Wb[13]] = Xb[Wb[37]][ub(Wb[88])](bb[Wb[13]], hb[ub(Wb[89]) + Wb[90]], Bb), bb[Wb[28]][ub(Wb[16])]++);
+         const Gb = bb[Wb[23]] / Wb[91],
+           Ub = pb;
+         if (jb(Lb()[ub(130)](Ub, bb[Wb[9]][ub(131)]), Lb()[ub(Wb[122]) + ub(Wb[50])](Ub, Ub), Lb()[ub(Wb[107])](Ub, Ub, bb[Wb[13]]), bb[Wb[94]] = Wb[0]), bb[Wb[28]][ub(Wb[16])] < hb[ub(Wb[123]) + ub(Wb[124]) + ub(Wb[125])]) {
```

#### 1661. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12876-L12878` → after: `L12172-L12174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12172-L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12172-L12174) · [Before (L12876-L12878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12876-L12878)

```diff
-             for (rq(qq[Pq[13]] = Pq[2], qq[Pq[32]] = ']w$&["|)nx1dV/4y;+g?2uiCT>7OD=MsvqB:b.<H^@m6R3ILW%Ap(Fzl~,Q`08So#XNktfP{_Gr!jJZa95hUcE}YK*e', qq[-Pq[34]] = "" + (qq[Pq[1]] || ""), qq[Pq[31]] = qq[-Pq[34]].length, qq[Pq[10]] = [], qq[-Pq[95]] = Pq[1], qq[Pq[22]] = Pq[1], qq[ … [truncated]
-               if (qq[-Pq[93]] = qq[Pq[32]].indexOf(qq[-Pq[34]][qq[Pq[3]]]), qq[-Pq[93]] !== -Pq[2])
-                 if (qq[-Pq[94]] < Pq[1]) qq[-Pq[94]] = qq[-Pq[93]];
+             for (jb(bb[Wb[12]] = Wb[0], bb[-Wb[92]] = '2z{uxv./^&+<A(V:SBCe3gXZ8OQhLD17=~4ws!f*j_"RPdT@p>nE5yK0cFk;i[MHGbm?$U#l]oq`Yrt9,)Wa|JI}6N%', bb[Wb[14]] = "" + (bb[Wb[2]] || ""), bb[Wb[28]] = bb[Wb[14]].length, bb[Wb[9]] = [], bb[Wb[7]] = Wb[2], bb[Wb[8]] = Wb[2], bb[Wb[23 … [truncated]
+               if (bb[Wb[93]] = bb[-Wb[92]].indexOf(bb[Wb[14]][bb[Wb[30]]]), bb[Wb[93]] !== -Wb[0])
+                 if (bb[Wb[23]] < Wb[2]) bb[Wb[23]] = bb[Wb[93]];
```

#### 1662. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12880` → after: `L12176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12176) · [Before (L12880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12880)

```diff
-                   rq(qq[-Pq[94]] += qq[-Pq[93]] * Pq[41], qq[-Pq[95]] |= qq[-Pq[94]] << qq[Pq[22]], qq[Pq[22]] += (qq[-Pq[94]] & Pq[43]) > Pq[44] ? Pq[45] : Pq[46]);
+                   jb(bb[Wb[23]] += bb[Wb[93]] * Wb[32], bb[Wb[7]] |= bb[Wb[23]] << bb[Wb[8]], bb[Wb[8]] += (bb[Wb[23]] & Wb[33]) > Wb[34] ? Wb[35] : Wb[36]);
```

#### 1663. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12882-L12885` → after: `L12178-L12181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12178-L12181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12178-L12181) · [Before (L12882-L12885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12882-L12885)

```diff
-                     rq(qq[Pq[10]].push(qq[-Pq[95]] & Pq[12]), qq[-Pq[95]] >>= Pq[11], qq[Pq[22]] -= Pq[11])
-                   } while (qq[Pq[22]] > Pq[24]);
-                   qq[-Pq[94]] = -Pq[2]
-                 } return qq[-Pq[94]] > -Pq[2] && qq[Pq[10]].push((qq[-Pq[95]] | qq[-Pq[94]] << qq[Pq[22]]) & Pq[12]), yq(qq[Pq[10]])
+                     jb(bb[Wb[9]].push(bb[Wb[7]] & Wb[11]), bb[Wb[7]] >>= Wb[10], bb[Wb[8]] -= Wb[10])
+                   } while (bb[Wb[8]] > Wb[23]);
+                   bb[Wb[23]] = -Wb[0]
+                 } return bb[Wb[23]] > -Wb[0] && bb[Wb[9]].push((bb[Wb[7]] | bb[Wb[23]] << bb[Wb[8]]) & Wb[11]), Cb(bb[Wb[9]])
```

#### 1664. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12889` → after: `L12185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12185) · [Before (L12889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12889)

```diff
-             return qq[Pq[13]] = Pq[2], typeof Hq[qq[Pq[1]]] === Pq[17] ? Hq[qq[Pq[1]]] = Rq(oq[qq[Pq[1]]]) : Hq[qq[Pq[1]]]
+             return bb[Wb[12]] = Wb[0], typeof lb[bb[Wb[2]]] === Wb[17] ? lb[bb[Wb[2]]] = Ib(Kb[bb[Wb[2]]]) : lb[bb[Wb[2]]]
```

#### 1665. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12891-L12919` → after: `L12187-L12413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12187-L12413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12187-L12413) · [Before (L12891-L12919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12891-L12919)

```diff
-           rq(qq[Pq[92]] = Pq[2], qq[Pq[31]][Uq(154)] = 1e5)
-         }
-       }
-       const Aq = dq;
-       rq(xq()[Eq(Pq[77])](Aq, mq, qq[Pq[50]][Pq[65]]), xq()[Eq(Pq[96])](Aq, Aq, qq[Pq[50]][Pq[103]] * qq[Pq[92]] / Oq), qq[Pq[50]][Eq(Pq[104]) + Eq(Pq[105])](Aq), xq()[Eq(158)](qq[Pq[31]][Pq[79]], qq[Pq[50]][Pq[65]], mq, qq[Pq[92]]));
-       const cq = Vq;
-       rq(xq()[Eq(Pq[97]) + Eq(Pq[98])](cq, qq[Pq[31]][Pq[79]]), xq()[Eq(Pq[96])](cq, cq, gq[Eq(Pq[101]) + Eq(Pq[102]) + Pq[78]])), qq[Pq[31]][Eq(Pq[54])] > gq[Eq(Pq[88]) + Eq(Pq[99]) + Eq(Pq[100])] && (cq[Pq[2]] = -gq[Eq(Pq[101]) + Eq(Pq[102]) + Pq[78]]), rq(xq()[Eq(Pq[96])](cq,  … [truncated]
-     };
-     var vq = gq(37641),
-       hq = gq(6340),
-       nq = gq(1226);
-     const bq = {
-         Vines: {
-           upForceScalar: 1.05
-         },
-         "Maple Ladder": {
- ... (13 more removed lines; see GitHub link above)
+           if (bb[Wb[94]] = Zb[Wb[4]][Pb(138) + Pb(139)](bb[Wb[28]][Pb(140)] / Ob[Wb[7]][Pb(Wb[81]) + Pb(142) + Pb(143) + "nd"]), bb[Wb[94]] > .8) {
+             function qb(...bb) {
+               for (jb(bb[Wb[12]] = Wb[0], bb[Wb[0]] = '>5$;x1#A(B]`|sK^uYizd6r}y"Mc:IF[!{fv.=nWN4e2*CD_0V+wO)Xl&9UZq7QoHp%PRLkj?mg@ET~<8t3,ab/JGhS', bb[-Wb[95]] = "" + (bb[Wb[2]] || ""), bb[Wb[95]] = bb[-Wb[95]].length, bb[-Wb[97]] = [], bb[Wb[7]] = Wb[2], bb[-Wb[19]] = Wb[2], bb … [truncated]
+                 if (bb[Wb[52]] = bb[Wb[0]].indexOf(bb[-Wb[95]][bb[Wb[96]]]), bb[Wb[52]] !== -Wb[0])
+                   if (bb[Wb[48]] < Wb[2]) bb[Wb[48]] = bb[Wb[52]];
+                   else {
+                     jb(bb[Wb[48]] += bb[Wb[52]] * Wb[32], bb[Wb[7]] |= bb[Wb[48]] << bb[-Wb[19]], bb[-Wb[19]] += (bb[Wb[48]] & Wb[33]) > Wb[34] ? Wb[35] : Wb[36]);
+                     do {
+                       jb(bb[-Wb[97]].push(bb[Wb[7]] & Wb[11]), bb[Wb[7]] >>= Wb[10], bb[-Wb[19]] -= Wb[10])
+                     } while (bb[-Wb[19]] > Wb[23]);
+                     bb[Wb[48]] = -Wb[0]
+                   } return bb[Wb[48]] > -Wb[0] && bb[-Wb[97]].push((bb[Wb[7]] | bb[Wb[48]] << bb[-Wb[19]]) & Wb[11]), Cb(bb[-Wb[97]])
+             }
+ 
+             function Eb(...bb) {
+               return bb[Wb[12]] = Wb[0], typeof lb[bb[Wb[2]]] === Wb[17] ? lb[bb[Wb[2]]] = qb(Kb[bb[Wb[2]]]) : lb[bb[Wb[2]]]
+ ... (211 more added lines; see GitHub link above)
```

#### 1666. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12976` → after: `L12470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12470) · [Before (L12976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12976)

```diff
-       iq = (0, aq.ib)(cq.o, (qq => {
+       gb = (0, Xb.cb)(Sb.l, (bb => {
```

#### 1667. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12978-L12979` → after: `L12472-L12473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12472-L12473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12472-L12473) · [Before (L12978-L12979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12978-L12979)

```diff
-         const mq = (0, cq.h)(qq);
-         return null !== (Eq = null !== (gq = null === (Yq = bq[mq]) || void 0 === Yq ? void 0 : Yq.upForceScalar) && void 0 !== gq ? gq : null === (lq = cq.o[qq]) || void 0 === lq || null === (Oq = lq.climbableInside) || void 0 === Oq ? void 0 : Oq.upForceScalar) && void 0 !== Eq … [truncated]
+         const Ub = (0, Sb.g)(bb);
+         return null !== (ub = null !== (hb = null === (Bb = zb[Ub]) || void 0 === Bb ? void 0 : Bb.upForceScalar) && void 0 !== hb ? hb : null === (Ob = Sb.l[bb]) || void 0 === Ob || null === (Gb = Ob.climbableInside) || void 0 === Gb ? void 0 : Gb.upForceScalar) && void 0 !== ub … [truncated]
```

#### 1668. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12987` → after: `L12481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12481) · [Before (L12987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12987)

```diff
-     const wq = [19, 0, 1, 8, "c", 30, 18, "g", 97, "f", "d", 255, "length", 65, 2, 3, 214, 64, "undefined", 63, 6, "fromCodePoint", 7, 12, "push", "a", "h", 25, 244, 9, 91, "e", 8191, 88, 13, 14, "b", 49, 161, 106, 127, 128, 117, 5, 160, 113, 58, 114, 243, 89, "i", 153, 32, 80, 4 … [truncated]
+     const fb = [2, 0, 1, 8, "c", "a", 9, "g", 5, 20, 62, 255, "length", "undefined", void 0, "d", 3, "b", 63, 6, "fromCodePoint", 7, 12, "push", 177, 157, 91, 8191, 88, 13, 14, 4, null, 10, 234, 61, "i", "e", 29, 210, 244, 181, 172, 235, 37, "f", "nt", 16, "l", 512, 212, 124, 33, … [truncated]
```

#### 1669. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12990-L12993` → after: `L12484-L12487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12484-L12487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12484-L12487) · [Before (L12990-L12993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12990-L12993)

```diff
-       return qq[wq[12]] = wq[2], typeof Sq[qq[wq[1]]] === wq[18] ? Sq[qq[wq[1]]] = function(...qq) {
-         for (OE(qq[wq[12]] = wq[2], qq[-wq[5]] = 'NHD=*"&y)#%`[+51w:!xvLj@aSYgVR^>bB7h.q/n|AM0{CKkm8ezt]T4~U}?PGQscfJprO<;uF$XEWdIi69Z(ol_,23', qq[-wq[0]] = "" + (qq[wq[1]] || ""), qq[wq[4]] = qq[-wq[0]].length, qq[wq[10]] = [], qq[wq[8]] = wq[1], qq[wq[9]] = wq[1], qq[wq[7]] = - … [truncated]
-           if (qq[-wq[6]] = qq[-wq[5]].indexOf(qq[-wq[0]][qq[wq[3]]]), qq[-wq[6]] !== -wq[2])
-             if (qq[wq[7]] < wq[1]) qq[wq[7]] = qq[-wq[6]];
+       return bb[fb[12]] = fb[2], typeof Nb[bb[fb[1]]] === fb[13] ? Nb[bb[fb[1]]] = function(...bb) {
+         for (Su(bb[fb[12]] = fb[2], bb[fb[5]] = '931+^&$>/|wh_50fGkAxDP*tOvX?F;uNqmj!aJdl#ERBr()LKnc`CU.MZ2"8,H]gbS<6@IT:7i}{4=yY%WzVQeo[s~p', bb[fb[0]] = "" + (bb[fb[1]] || ""), bb[fb[4]] = bb[fb[0]].length, bb[fb[10]] = [], bb[fb[8]] = fb[1], bb[-fb[9]] = fb[1], bb[fb[7]] = -fb … [truncated]
+           if (bb[fb[6]] = bb[fb[5]].indexOf(bb[fb[0]][bb[fb[3]]]), bb[fb[6]] !== -fb[2])
+             if (bb[fb[7]] < fb[1]) bb[fb[7]] = bb[fb[6]];
```

#### 1670. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12995` → after: `L12489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12489) · [Before (L12995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12995)

```diff
-               OE(qq[wq[7]] += qq[-wq[6]] * wq[30], qq[wq[8]] |= qq[wq[7]] << qq[wq[9]], qq[wq[9]] += (qq[wq[7]] & wq[32]) > wq[33] ? wq[34] : wq[35]);
+               Su(bb[fb[7]] += bb[fb[6]] * fb[26], bb[fb[8]] |= bb[fb[7]] << bb[-fb[9]], bb[-fb[9]] += (bb[fb[7]] & fb[27]) > fb[28] ? fb[29] : fb[30]);
```

#### 1671. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12997-L12998` → after: `L12491-L12492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12491-L12492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12491-L12492) · [Before (L12997-L12998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L12997-L12998)

```diff
-                 OE(qq[wq[10]].push(qq[wq[8]] & wq[11]), qq[wq[8]] >>= wq[3], qq[wq[9]] -= wq[3])
-               } while (qq[wq[9]] > wq[22]);
+                 Su(bb[fb[10]].push(bb[fb[8]] & fb[11]), bb[fb[8]] >>= fb[3], bb[-fb[9]] -= fb[3])
+               } while (bb[-fb[9]] > fb[21]);
```

#### 1672. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13000` → after: `L12494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12494) · [Before (L13000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L13000)

```diff
-             } return qq[wq[7]] > -wq[2] && qq[wq[10]].push((qq[wq[8]] | qq[wq[7]] << qq[wq[9]]) & wq[11]), Cq(qq[wq[10]])
+             } return bb[fb[7]] > -fb[2] && bb[fb[10]].push((bb[fb[8]] | bb[fb[7]] << bb[-fb[9]]) & fb[11]), Tb(bb[fb[10]])
```

#### 1673. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13005` → after: `L12499-L12520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12499-L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12499-L12520) · [Before (L13005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L13005)

```diff
-       return qq[wq[12]] = wq[2], typeof Lq !== wq[18] && Lq ? (new Lq).decode(new Jq(qq[wq[1]])) : typeof kq !== wq[18] && kq ? kq.from(qq[wq[1]]).toString("utf-8") : Fq(qq[wq[1]])
+       return bb[fb[12]] = fb[2], typeof mb !== fb[13] && mb ? (new mb).decode(new Ib(bb[fb[1]])) : typeof Pb !== fb[13] && Pb ? Pb.from(bb[fb[1]]).toString("utf-8") : yb(bb[fb[1]])
+     }
+ 
+     function cb(bb, ub, hb) {
+       if (bb === function(...bb) {
+           return bb[fb[12]] = fb[2], typeof Nb[bb[fb[1]]] === fb[13] ? Nb[bb[fb[1]]] = function(bb) {
+             var ub, hb, Bb, Ob, Gb, Ub, Lb;
+             for (Su(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = fb[1], Gb = fb[1], Ub = -fb[2]), Lb = fb[1]; Lb < hb; Lb++) {
+               var Yb = ',KcFSgEIiAxz<pd!YWRwL2*`7/.QyO?fM1{=N)%B+}"6vV_P3;]ChGZksa4JouD[nUH~^@9X&$q:(l|rbjmT#>085et'.indexOf(ub[Lb]);
+               if (Yb !== -fb[2])
+                 if (Ub < fb[1]) Ub = Yb;
+                 else {
+                   Su(Ub += Yb * fb[26], Ob |= Ub << Gb, Gb += (Ub & fb[27]) > fb[28] ? fb[29] : fb[30]);
+                   do {
+                     Su(Bb.push(Ob & fb[11]), Ob >>= fb[3], Gb -= fb[3])
+                   } while (Gb > fb[21]);
+ ... (6 more added lines; see GitHub link above)
```

#### 1674. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13012-L13028` → after: `L12527-L12531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12527-L12531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12527-L12531) · [Before (L13012-L13028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L13012-L13028)

```diff
-           function Eq(...qq) {
-             return qq[wq[12]] = wq[2], typeof Sq[qq[wq[1]]] === wq[18] ? Sq[qq[wq[1]]] = function(...qq) {
-               for (OE(qq[wq[12]] = wq[2], qq[-wq[37]] = 'EuXHFGgRbQJTPfCdSNcpmlArjZaqkBYOoUeitLnVK?IDWs)M]/h=";,92<wv3!0&@8|$1^_x%{+([}4:7#y*>~.5`z6', qq[wq[36]] = "" + (qq[wq[1]] || ""), qq[wq[4]] = qq[wq[36]].length, qq[wq[10]] = [], qq[wq[39]] = wq[1], qq[wq[9]] = wq[1], qq[wq … [truncated]
-                 if (qq[-wq[38]] = qq[-wq[37]].indexOf(qq[wq[36]][qq[wq[26]]]), qq[-wq[38]] !== -wq[2])
-                   if (qq[wq[7]] < wq[1]) qq[wq[7]] = qq[-wq[38]];
-                   else {
-                     OE(qq[wq[7]] += qq[-wq[38]] * wq[30], qq[wq[39]] |= qq[wq[7]] << qq[wq[9]], qq[wq[9]] += (qq[wq[7]] & wq[32]) > wq[33] ? wq[34] : wq[35]);
-                     do {
-                       OE(qq[wq[10]].push(qq[wq[39]] & wq[11]), qq[wq[39]] >>= wq[3], qq[wq[9]] -= wq[3])
-                     } while (qq[wq[9]] > wq[22]);
-                     qq[wq[7]] = -wq[2]
-                   } return qq[wq[7]] > -wq[2] && qq[wq[10]].push((qq[wq[39]] | qq[wq[7]] << qq[wq[9]]) & wq[11]), Cq(qq[wq[10]])
-             }(pq[qq[wq[1]]]) : Sq[qq[wq[1]]]
-           }
-           qq[wq[12]] = wq[1], OE(qq[wq[42]] = Oq(wq[85]) + Eq(wq[40]) + Eq(wq[41]), qq[wq[36]] = Eq(wq[166]) + Eq(130) + Eq(wq[320]) + "?", qq[wq[4]] = Eq(wq[101]) + Eq(wq[108]) + Eq(134) + Eq(wq[338]) + Eq(wq[277]) + Eq(wq[125]), qq[wq[42]].match(qq[wq[36]] + qq[wq[4]]))
-         }), Oq || (Oq = function(...qq) {
- ... (1 more removed lines; see GitHub link above)
+           function ub() {}
+           bb[fb[12]] = fb[1], Su(bb[fb[5]] = function(...bb) {
+             for (Su(bb[fb[12]] = fb[0], bb[fb[0]] = fb[1], bb[fb[16]] = fb[1], bb[fb[31]] = new ub(fb[1]), bb[fb[15]] = bb[fb[31]], bb[fb[19]] = bb[fb[1]], bb[fb[21]] = bb[fb[2]]); bb[fb[19]] !== fb[32] || bb[fb[21]] !== fb[32];) Su(bb[fb[16]] = (bb[fb[19]] ? bb[fb[19]].val : fb[ … [truncated]
+             return bb[fb[0]] && (bb[fb[15]].next = new ub(bb[fb[0]])), bb[fb[31]].next
+           }, console.log(bb[fb[5]]))
```

#### 1675. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13030-L13032` → after: `L12533-L12539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12533-L12539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12533-L12539) · [Before (L13030-L13032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L13030-L13032)

```diff
-           for (OE(qq[wq[12]] = wq[2], qq[wq[28]] = '`oxK8c7~hIf;6bwn9?T%g4mLU>.}N&e32YP"),D/:vQB@0qk1utGsi_zRWZ^OjH*ASr+dCX|M!#=$Jp](5[<VEa{yFl', qq[wq[23]] = "" + (qq[wq[1]] || ""), qq[-wq[27]] = qq[wq[23]].length, qq[wq[10]] = [], qq[wq[31]] = wq[1], qq[wq[20]] = wq[1], qq[wq[7 … [truncated]
-             if (qq[wq[29]] = qq[wq[28]].indexOf(qq[wq[23]][qq[wq[26]]]), qq[wq[29]] !== -wq[2])
-               if (qq[wq[7]] < wq[1]) qq[wq[7]] = qq[wq[29]];
+           return bb[fb[12]] = fb[2], typeof Nb[bb[fb[1]]] === fb[13] ? Nb[bb[fb[1]]] = Ob(sb[bb[fb[1]]]) : Nb[bb[fb[1]]]
+         }), Ob || (Ob = function(bb) {
+           var ub, hb, Bb, Ob, Gb, Ub, Lb;
+           for (Su(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = fb[1], Gb = fb[1], Ub = -fb[2]), Lb = fb[1]; Lb < hb; Lb++) {
+             var Yb = '4PGYRmy$/^2>DzXfcu3}t@7;9E#i6sCHwrB[&N5ob%x_T<nq,?lFag{`J(Sj:]!|dML"8vph1)U0=K+O~V*.AIkeQWZ'.indexOf(ub[Lb]);
+             if (Yb !== -fb[2])
+               if (Ub < fb[1]) Ub = Yb;
```

#### 1676. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13034` → after: `L12541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12541) · [Before (L13034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L13034)

```diff
-                 OE(qq[wq[7]] += qq[wq[29]] * wq[30], qq[wq[31]] |= qq[wq[7]] << qq[wq[20]], qq[wq[20]] += (qq[wq[7]] & wq[32]) > wq[33] ? wq[34] : wq[35]);
+                 Su(Ub += Yb * fb[26], Ob |= Ub << Gb, Gb += (Ub & fb[27]) > fb[28] ? fb[29] : fb[30]);
```

#### 1677. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13036-L13041` → after: `L12543-L12550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12543-L12550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12543-L12550) · [Before (L13036-L13041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L13036-L13041)

```diff
-                   OE(qq[wq[10]].push(qq[wq[31]] & wq[11]), qq[wq[31]] >>= wq[3], qq[wq[20]] -= wq[3])
-                 } while (qq[wq[20]] > wq[22]);
-                 qq[wq[7]] = -wq[2]
-               } return qq[wq[7]] > -wq[2] && qq[wq[10]].push((qq[wq[31]] | qq[wq[7]] << qq[wq[20]]) & wq[11]), Cq(qq[wq[10]])
-         }), Oq(wq[171]) + "L" in Iq && mq(), OE(xq = void 0, Aq = {
-           [Oq(138)]: function(...qq) {
+                   Su(Bb.push(Ob & fb[11]), Ob >>= fb[3], Gb -= fb[3])
+                 } while (Gb > fb[21]);
+                 Ub = -fb[2]
+               }
+           }
+           return Ub > -fb[2] && Bb.push((Ob | Ub << Gb) & fb[11]), Tb(Bb)
+         }), Gb(fb[114]) + "H" in Qb && Ub(), Su(Lb = void 0, Yb = {
+           [Gb(fb[189])]: function(...bb) {
```

#### 1678. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13043-L13046` → after: `L12552-L12557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12552-L12557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12552-L12557) · [Before (L13043-L13046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L13043-L13046)

```diff
-               return qq[wq[12]] = wq[2], typeof Sq[qq[wq[1]]] === wq[18] ? Sq[qq[wq[1]]] = function(...qq) {
-                 for (OE(qq[wq[12]] = wq[2], qq[wq[25]] = 'fsdNmxC1|c{(g2wvbj?8`TXe,&qP<iVBa=ARz+DtUpJ~>o)r"nWIuLFyS:57[K_MH]ZGh;kEYOl#0!3/94}$6%^*.Q@', qq[wq[36]] = "" + (qq[wq[1]] || ""), qq[wq[15]] = qq[wq[36]].length, qq[-wq[45]] = [], qq[wq[43]] = wq[1], qq[-wq[44]] = wq[1],  … [truncated]
-                   if (qq[wq[29]] = qq[wq[25]].indexOf(qq[wq[36]][qq[wq[3]]]), qq[wq[29]] !== -wq[2])
-                     if (qq[wq[7]] < wq[1]) qq[wq[7]] = qq[wq[29]];
+               return bb[fb[12]] = fb[2], typeof Nb[bb[fb[1]]] === fb[13] ? Nb[bb[fb[1]]] = function(bb) {
+                 var ub, hb, Bb, Ob, Gb, Ub, Lb;
+                 for (Su(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = fb[1], Gb = fb[1], Ub = -fb[2]), Lb = fb[1]; Lb < hb; Lb++) {
+                   var Yb = '2CE("7NRfr.Z)^U#6MbFQg+d@4z|ki1THOja?!Xh}5D&uplK[vw>n;9AYP8~*Iy`o:Vxmc0B<G$W%S{s]_3qJetL=/,'.indexOf(ub[Lb]);
+                   if (Yb !== -fb[2])
+                     if (Ub < fb[1]) Ub = Yb;
```

#### 1679. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13048` → after: `L12559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12559) · [Before (L13048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L13048)

```diff
-                       OE(qq[wq[7]] += qq[wq[29]] * wq[30], qq[wq[43]] |= qq[wq[7]] << qq[-wq[44]], qq[-wq[44]] += (qq[wq[7]] & wq[32]) > wq[33] ? wq[34] : wq[35]);
+                       Su(Ub += Yb * fb[26], Ob |= Ub << Gb, Gb += (Ub & fb[27]) > fb[28] ? fb[29] : fb[30]);
```

#### 1680. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13050-L13053` → after: `L12561-L12566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3be1a2dc52a659b7744fac700757050176180b03...build/bloxd.io/halsg.2bd74967#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12561-L12566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/halsg.2bd74967/bundles/bloxd.io/chunks/js/113.js#L12561-L12566) · [Before (L13050-L13053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3be1a2dc52a659b7744fac700757050176180b03/bundles/bloxd.io/chunks/js/113.js#L13050-L13053)

```diff
-                         OE(qq[-wq[45]].push(qq[wq[43]] & wq[11]), qq[wq[43]] >>= wq[3], qq[-wq[44]] -= wq[3])
-                       } while (qq[-wq[44]] > wq[22]);
-                       qq[wq[7]] = -wq[2]
-                     } return qq[wq[7]] > -wq[2] && qq[-wq[45]].push((qq[wq[43]] | qq[wq[7]] << qq[-wq[44]]) & wq[11]), Cq(qq[-wq[45]])
+                         Su(Bb.push(Ob & fb[11]), Ob >>= fb[3], Gb -= fb[3])
+                       } while (Gb > fb[21]);
+                       Ub = -fb[2]
+                     }
+                 }
+                 return Ub > -fb[2] && Bb.push((Ob | Ub << Gb) & fb[11]), Tb(Bb)
```
