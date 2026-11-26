# Changed — Bundle Modifications Report (Part 142 / 154)

- **Updated at**: `2026-11-27T02:11 JST`
- **Part**: `142 / 154` (**425** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 141](part-141.md) · [Part 143 →](part-143.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientGame.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientGame.js` (911 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b)

#### 430. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4207` → after: `L4207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4207) · [Before (L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4207)

```diff
-         this.owners = WH, this.tickers = WH.filter((HH => void 0 !== HH.IX)), this.renderers = WH.filter((HH => void 0 !== HH.onAfterRender)), this.receivers = WH.filter((HH => void 0 !== HH.onReceivedMessageFromServer)), this.writeAltVeto(WH), this.writeHooks(WH), this.writePubl … [truncated]
+         this.owners = ZB, this.tickers = ZB.filter((BB => void 0 !== BB.kP)), this.renderers = ZB.filter((BB => void 0 !== BB.onAfterRender)), this.receivers = ZB.filter((BB => void 0 !== BB.onReceivedMessageFromServer)), this.writeAltVeto(ZB), this.writeHooks(ZB), this.writePubl … [truncated]
```

#### 431. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4233` → after: `L4233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4233) · [Before (L4233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4233)

```diff
-           this.round(this.tickers, yA), (0, WA.c)(performance.now() - HH)
+           this.round(this.tickers, tY), (0, ZY.d)(performance.now() - BB)
```

#### 432. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4243-L4245` → after: `L4243-L4245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4243-L4245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4243-L4245) · [Before (L4243-L4245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4243-L4245)

```diff
-           AH = uH.y.frameMs(LH, 0);
-         KA.f.frame(AH, uH.y.heading(LH, 0), uH.y.pitch(LH, 0), KA.d[HH]);
-         const rH = (0, WA.g)(HH, AH);
+           YB = pB.u.frameMs(GB, 0);
+         FY.k.frame(YB, pB.u.heading(GB, 0), pB.u.pitch(GB, 0), FY.g[BB]);
+         const DB = (0, ZY.m)(BB, YB);
```

#### 433. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4249` → after: `L4249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4249) · [Before (L4249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4249)

```diff
-             (0, CA.e)().turnDamageIndicators(HH.cameraHeading)
+             (0, JY.c)().turnDamageIndicators(BB.cameraHeading)
```

#### 434. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4260` → after: `L4260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4260) · [Before (L4260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4260)

```diff
-           this.XX(hH)
+           this.jP(oB)
```

#### 435. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4262` → after: `L4262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4262) · [Before (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4262)

```diff
-         this.showZoom(), this.items.flush(this.XX), this.writePromptWatch(), this.writeCustomButtons();
+         this.showZoom(), this.items.flush(this.jP), this.writePromptWatch(), this.writeCustomButtons();
```

#### 436. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4264` → after: `L4264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4264) · [Before (L4264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4264)

```diff
-         this.ticks = 0, (0, WA.e)(SH, HH, rH, this.XX)
+         this.ticks = 0, (0, ZY.i)(QB, BB, DB, this.jP)
```

#### 437. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4271` → after: `L4271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4271) · [Before (L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4271)

```diff
-           BH = uH.y.eventOverflowGen(HH, 0),
+           OB = pB.u.eventOverflowGen(BB, 0),
```

#### 438. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4275` → after: `L4275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4275) · [Before (L4275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4275)

```diff
-         const AH = uH.y.eventOverflowMask(HH, 0),
+         const YB = pB.u.eventOverflowMask(BB, 0),
```

#### 439. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4277` → after: `L4277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4277) · [Before (L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4277)

```diff
-         0 === AH || null === rH || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, uH.Je)(rH, 0, AH);
+         0 === YB || null === DB || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, pB.Ae)(DB, 0, YB);
```

#### 440. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4284` → after: `L4284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4284) · [Before (L4284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4284)

```diff
-         if (HH === uH.oc.Director) try {
+         if (BB === pB.lc.Director) try {
```

#### 441. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4287` → after: `L4287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4287) · [Before (L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4287)

```diff
-           return this.XX(CH), uH.qb.None
+           return this.jP(JB), pB.tb.None
```

#### 442. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4289` → after: `L4289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4289) · [Before (L4289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4289)

```diff
-         if (!this.sessionLive || void 0 !== this.fault) return HH === uH.oc.AltVeto ? uH.m.Allow : 0;
+         if (!this.sessionLive || void 0 !== this.fault) return BB === pB.lc.AltVeto ? pB.m.Allow : 0;
```

#### 443. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4293` → after: `L4293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4293) · [Before (L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4293)

```diff
-           throw (0, YH.h)(CH) && (this.fault = CH), CH
+           throw (0, lB.d)(JB) && (this.fault = JB), JB
```

#### 444. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4306-L4307` → after: `L4306-L4307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4306-L4307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4306-L4307) · [Before (L4306-L4307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4306-L4307)

```diff
-           case uH.oc.AltVeto:
-           case uH.oc.AltAction: {
+           case pB.lc.AltVeto:
+           case pB.lc.AltAction: {
```

#### 445. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4312` → after: `L4312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4312) · [Before (L4312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4312)

```diff
-             if (HH === uH.oc.AltAction) return this.first((HH => {
+             if (BB === pB.lc.AltAction) return this.first((BB => {
```

#### 446. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4322` → after: `L4322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4322) · [Before (L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4322)

```diff
-           case uH.oc.Click: {
+           case pB.lc.Click: {
```

#### 447. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4324-L4325` → after: `L4324-L4325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4324-L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4324-L4325) · [Before (L4324-L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4324-L4325)

```diff
-               EH = 0 !== (HH & uH.W.Alt),
-               XH = 0 !== (HH & uH.W.HasPos),
+               MB = 0 !== (BB & pB.V.Alt),
+               PB = 0 !== (BB & pB.V.HasPos),
```

#### 448. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4329` → after: `L4329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4329) · [Before (L4329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4329)

```diff
-               xH = 0 !== (HH & uH.W.Up),
+               RB = 0 !== (BB & pB.V.Up),
```

#### 449. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4331` → after: `L4331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4331) · [Before (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4331)

```diff
-             if (0 === (HH & uH.W.AttackOnly) && this.first((HH => {
+             if (0 === (BB & pB.V.AttackOnly) && this.first((BB => {
```

#### 450. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4344` → after: `L4344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4344) · [Before (L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4344)

```diff
-           case uH.oc.ChangeBlock: {
+           case pB.lc.ChangeBlock: {
```

#### 451. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4352` → after: `L4352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4352) · [Before (L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4352)

```diff
-           case uH.oc.DropItem: {
+           case pB.lc.DropItem: {
```

#### 452. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4360` → after: `L4360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4360) · [Before (L4360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4360)

```diff
-             return this.onError(new Error(`Unknown game call kind ${HH}`)), 0
+             return this.onError(new Error(`Unknown game call kind ${BB}`)), 0
```

#### 453. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4366-L4368` → after: `L4366-L4368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4366-L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4366-L4368) · [Before (L4366-L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4366-L4368)

```diff
-           sA: [HH, BH, LH],
-           JA: AH,
-           iA: tH
+           wQ: [BB, OB, GB],
+           EQ: YB,
+           cQ: jB
```

#### 454. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4376` → after: `L4376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4376) · [Before (L4376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4376)

```diff
-         })), this.AX("blockChangeRefused", null), this.AX("EditBoard", {
+         })), this.tM("blockChangeRefused", null), this.tM("EditBoard", {
```

#### 455. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4378` → after: `L4378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4378) · [Before (L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4378)

```diff
-         }), this.AX("EditCodeBlock", {
+         }), this.tM("EditCodeBlock", {
```

#### 456. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4384` → after: `L4384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4384) · [Before (L4384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4384)

```diff
-         HH === uH.Gc.ChestOpened ? this.items.chestOpened(LH, AH, rH) : HH !== uH.Gc.Synced && HH !== uH.Gc.ChestClosed && HH !== uH.Gc.ChestRefreshed || this.items.touch(), this.guard((() => {
+         BB === pB.Cc.ChestOpened ? this.items.chestOpened(GB, YB, DB) : BB !== pB.Cc.Synced && BB !== pB.Cc.ChestClosed && BB !== pB.Cc.ChestRefreshed || this.items.touch(), this.guard((() => {
```

#### 457. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4387-L4388` → after: `L4387-L4388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4387-L4388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4387-L4388) · [Before (L4387-L4388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4387-L4388)

```diff
-               case uH.Gc.Synced:
-                 hH.k.AX("syncedInvenFromServer");
+               case pB.Cc.Synced:
+                 oB.o.tM("syncedInvenFromServer");
```

#### 458. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4390-L4392` → after: `L4390-L4392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4390-L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4390-L4392) · [Before (L4390-L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4390-L4392)

```diff
-               case uH.Gc.ChestOpened:
-               case uH.Gc.ChestClosed:
-                 hH.k.AX("chestToggleFromServer", HH === uH.Gc.ChestOpened, !0);
+               case pB.Cc.ChestOpened:
+               case pB.Cc.ChestClosed:
+                 oB.o.tM("chestToggleFromServer", BB === pB.Cc.ChestOpened, !0);
```

#### 459. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4394-L4395` → after: `L4394-L4395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4394-L4395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4394-L4395) · [Before (L4394-L4395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4394-L4395)

```diff
-               case uH.Gc.ChestRefreshed:
-                 hH.k.AX("chestRefreshedFromServer");
+               case pB.Cc.ChestRefreshed:
+                 oB.o.tM("chestRefreshedFromServer");
```

#### 460. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4397-L4399` → after: `L4397-L4399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4397-L4399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4397-L4399) · [Before (L4397-L4399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4397-L4399)

```diff
-               case uH.Gc.EnchantingTable:
-                 hH.k.AX("enchantingTable", {
-                   ph: AH,
+               case pB.Cc.EnchantingTable:
+                 oB.o.tM("enchantingTable", {
+                   SM: YB,
```

#### 461. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4403-L4404` → after: `L4403-L4404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4403-L4404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4403-L4404) · [Before (L4403-L4404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4403-L4404)

```diff
-               case uH.Gc.HotbarRequest:
-                 hH.k.AX("setSelectedInventorySlotI", BH, !0);
+               case pB.Cc.HotbarRequest:
+                 oB.o.tM("setSelectedInventorySlotI", OB, !0);
```

#### 462. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4406-L4407` → after: `L4406-L4407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4406-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4406-L4407) · [Before (L4406-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4406-L4407)

```diff
-               case uH.Gc.Scrolled:
-                 hH.k.AX("ScrollInventorySlot", BH);
+               case pB.Cc.Scrolled:
+                 oB.o.tM("ScrollInventorySlot", OB);
```

#### 463. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4409-L4410` → after: `L4409-L4410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4409-L4410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4409-L4410) · [Before (L4409-L4410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4409-L4410)

```diff
-               case uH.Gc.NumberKey:
-                 hH.k.AX("numkeyPressed", BH + 1);
+               case pB.Cc.NumberKey:
+                 oB.o.tM("numkeyPressed", OB + 1);
```

#### 464. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4412-L4413` → after: `L4412-L4413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4412-L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4412-L4413) · [Before (L4412-L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4412-L4413)

```diff
-               case uH.Gc.DropRequested:
-                 hH.k.AX("DropInvenItem", 0 !== BH);
+               case pB.Cc.DropRequested:
+                 oB.o.tM("DropInvenItem", 0 !== OB);
```

#### 465. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4416` → after: `L4416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4416) · [Before (L4416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4416)

```diff
-                 throw new YH.d(`InventoryEvent of no kind: what ${HH}`)
+                 throw new lB.b(`InventoryEvent of no kind: what ${BB}`)
```

#### 466. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4425` → after: `L4425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4425) · [Before (L4425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4425)

```diff
-         this.AX("shotPlayer", {
+         this.tM("shotPlayer", {
```

#### 467. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4433-L4435` → after: `L4433-L4435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4433-L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4433-L4435) · [Before (L4433-L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4433-L4435)

```diff
-         this.AX("closeShopOnDamaged", null), this.guard((() => {
-           hH.k.AX("damagedByOtherPlayer", {
-             DS: null,
+         this.tM("closeShopOnDamaged", null), this.guard((() => {
+           oB.o.tM("damagedByOtherPlayer", {
+             kY: null,
```

#### 468. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4437` → after: `L4437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4437) · [Before (L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4437)

```diff
-             xA: HH
+             vG: BB
```

#### 469. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4443-L4444` → after: `L4443-L4444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4443-L4444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4443-L4444) · [Before (L4443-L4444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4443-L4444)

```diff
-           hH.k.AX("yourAttackHit", {
-             aA: AH,
+           oB.o.tM("yourAttackHit", {
+             GD: YB,
```

#### 470. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4451` → after: `L4451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4451) · [Before (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4451)

```diff
-         this.localPhysicsType = HH, this.AX("PlayerPhysicsTypeUpdate", HH)
+         this.localPhysicsType = BB, this.tM("PlayerPhysicsTypeUpdate", BB)
```

#### 471. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4455` → after: `L4455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4455) · [Before (L4455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4455)

```diff
-           HH === GH.Ad.UPDATE ? (0, KH.e)(BH, {
+           BB === zB.Gd.UPDATE ? (0, FB.k)(OB, {
```

#### 472. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4467` → after: `L4467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4467) · [Before (L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4467)

```diff
-         this.AX("showBottomMessage", {
+         this.tM("showBottomMessage", {
```

#### 473. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4474` → after: `L4474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4474) · [Before (L4474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4474)

```diff
-         this.AX("showBottomMessage", wA.d)
+         this.tM("showBottomMessage", eY.d)
```

#### 474. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4478` → after: `L4478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4478) · [Before (L4478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4478)

```diff
-         !this.zoomUnshown || HH && this.zoomHeld || (this.zoomUnshown = !1, this.AX("cameraZoomSet", this.zoom)), this.zoomHeld = HH
+         !this.zoomUnshown || BB && this.zoomHeld || (this.zoomUnshown = !1, this.tM("cameraZoomSet", this.zoom)), this.zoomHeld = BB
```

#### 475. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4483-L4487` → after: `L4483-L4487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4483-L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4483-L4487) · [Before (L4483-L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4483-L4487)

```diff
-             DS: BH,
-             wS: LH
-           } = (0, fA.d)(lA.q, HH);
-           hH.k.AX("damagedByOtherPlayer", {
-             DS: BH,
+             kY: OB,
+             dY: GB
+           } = (0, mY.e)(IY.w, BB);
+           oB.o.tM("damagedByOtherPlayer", {
+             kY: OB,
```

#### 476. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4508` → after: `L4508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4508) · [Before (L4508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4508)

```diff
-                   mode: uH.pe.All,
+                   mode: pB.ie.All,
```

#### 477. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4512-L4513` → after: `L4512-L4513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4512-L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4512-L4513) · [Before (L4512-L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4512-L4513)

```diff
-               } return AH ? LH.size > uH.Rc ? {
-               mode: uH.pe.All,
+               } return YB ? GB.size > pB.Nc ? {
+               mode: pB.ie.All,
```

#### 478. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4516` → after: `L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4516) · [Before (L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4516)

```diff
-               mode: uH.pe.Filter,
+               mode: pB.ie.Filter,
```

#### 479. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4519` → after: `L4519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4519) · [Before (L4519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4519)

```diff
-               mode: uH.pe.Off,
+               mode: pB.ie.Off,
```

#### 480. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4525` → after: `L4525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4525) · [Before (L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4525)

```diff
-             mode: uH.pe.All,
+             mode: pB.ie.All,
```

#### 481. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4529` → after: `L4529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4529) · [Before (L4529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4529)

```diff
-         if (LH.mode === uH.pe.Off && !this.vetoSet) return;
+         if (GB.mode === pB.ie.Off && !this.vetoSet) return;
```

#### 482. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4531` → after: `L4531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4531) · [Before (L4531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4531)

```diff
-         (0, uH.Xf)(BH, 0, LH.mode, LH.roots.length, AH) ? this.vetoSet = LH.mode !== uH.pe.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
+         (0, pB.Pf)(OB, 0, GB.mode, GB.roots.length, YB) ? this.vetoSet = GB.mode !== pB.ie.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
```

#### 483. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4544` → after: `L4544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4544) · [Before (L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4544)

```diff
-           for (const LH of HH) LH.onPlayerAltAction && (BH |= 1 << uH.oc.AltAction), (LH.onPlayerClick || LH.onPlayerClickUp || LH.onPlayerAttackEntity) && (BH |= 1 << uH.oc.Click), LH.onPlayerChangeBlock && (BH |= 1 << uH.oc.ChangeBlock), LH.onPlayerDropItem && (BH |= 1 << uH.oc … [truncated]
+           for (const GB of BB) GB.onPlayerAltAction && (OB |= 1 << pB.lc.AltAction), (GB.onPlayerClick || GB.onPlayerClickUp || GB.onPlayerAttackEntity) && (OB |= 1 << pB.lc.Click), GB.onPlayerChangeBlock && (OB |= 1 << pB.lc.ChangeBlock), GB.onPlayerDropItem && (OB |= 1 << pB.lc … [truncated]
```

#### 484. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4547` → after: `L4547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4547) · [Before (L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4547)

```diff
-         (0 !== LH || this.hooksSet) && ((0, uH.fg)(BH, 0, LH) ? this.hooksSet = 0 !== LH : this.onError(new Error("SetHooks didn't fit the command ring")))
+         (0 !== GB || this.hooksSet) && ((0, pB.Zf)(OB, 0, GB) ? this.hooksSet = 0 !== GB : this.onError(new Error("SetHooks didn't fit the command ring")))
```

#### 485. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4556` → after: `L4556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4556) · [Before (L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4556)

```diff
-         BH !== this.promptWatchSent && HH && !this.stopped() && (0, uH.Dg)(HH, 0, JA[BH]) && (this.promptWatchSent = BH)
+         OB !== this.promptWatchSent && BB && !this.stopped() && (0, pB.vg)(BB, 0, vY[OB]) && (this.promptWatchSent = OB)
```

#### 486. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4560` → after: `L4560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4560) · [Before (L4560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4560)

```diff
-         BH && HH !== this.writtenPublicLobby && ((0, uH.sg)(BH, 0, HH ? 1 : 0) ? this.writtenPublicLobby = HH : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
+         OB && BB !== this.writtenPublicLobby && ((0, pB.hg)(OB, 0, BB ? 1 : 0) ? this.writtenPublicLobby = BB : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
```

#### 487. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4564` → after: `L4564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4564) · [Before (L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4564)

```diff
-         BH && ((0, uH.jg)(BH, 0, null === HH ? 0 : 1, null === HH ? aA : dA.encode(HH)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
+         OB && ((0, pB.$f)(OB, 0, null === BB ? 0 : 1, null === BB ? CY : bY.encode(BB)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
```

#### 488. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4574` → after: `L4574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4574) · [Before (L4574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4574)

```diff
-             this.XX(LH)
+             this.jP(GB)
```

#### 489. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4580` → after: `L4580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4580) · [Before (L4580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4580)

```diff
-           hH.k.AX(HH, BH)
+           oB.o.tM(BB, OB)
```

#### 490. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4587` → after: `L4587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4587) · [Before (L4587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4587)

```diff
-           this.XX(HH)
+           this.jP(BB)
```

#### 491. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4594` → after: `L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4594) · [Before (L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4594)

```diff
-           this.XX(HH)
+           this.jP(BB)
```

#### 492. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4629` → after: `L4629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4629) · [Before (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4629)

```diff
-         void 0 !== BH && this.XX(BH)
+         void 0 !== OB && this.jP(OB)
```

#### 493. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4639` → after: `L4639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4639) · [Before (L4639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4639)

```diff
-             LH ? this.onError(rH) : this.XX(rH)
+             GB ? this.onError(DB) : this.jP(DB)
```

#### 494. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4647` → after: `L4647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4647) · [Before (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4647)

```diff
-           this.XX(BH)
+           this.jP(OB)
```

#### 495. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4657` → after: `L4657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4657) · [Before (L4657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4657)

```diff
-       HH.IX(GH.td)
+       BB.kP(zB.Ad)
```

#### 496. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4681-L4684` → after: `L4681-L4684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4681-L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4681-L4684) · [Before (L4681-L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4681-L4684)

```diff
-     var Lr = LH(37326),
-       Ar = LH(5335),
-       rr = LH(37617),
-       Sr = LH(37650);
+     var GD = GB(37113),
+       YD = GB(5353),
+       DD = GB(37436),
+       QD = GB(37477);
```

#### 497. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4688` → after: `L4688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4688) · [Before (L4688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4688)

```diff
-           src: [...(0, rr.v)(HH).src],
+           src: [...(0, DD.t)(BB).src],
```

#### 498. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4693` → after: `L4693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4693) · [Before (L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4693)

```diff
-       return BH.load = () => (BH._preload = !0, (0, Sr.i)(HH), LH()), BH
+       return OB.load = () => (OB._preload = !0, (0, QD.e)(BB), GB()), OB
```

#### 499. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4721-L4722` → after: `L4721-L4722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4721-L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4721-L4722) · [Before (L4721-L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4721-L4722)

```diff
-     var Er = LH(37442),
-       Xr = LH(40176);
+     var MD = GB(37233),
+       PD = GB(39922);
```

#### 500. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4731` → after: `L4731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4731) · [Before (L4731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4731)

```diff
-       return Yr ??= new Xr.e(new Er.e(ur)), Yr
+       return lD ??= new PD.c(new MD.c(pD)), lD
```

#### 501. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4744-L4749` → after: `L4744-L4749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4744-L4749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4744-L4749) · [Before (L4744-L4749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4744-L4749)

```diff
-     var xr = LH(10030),
-       vr = LH(9979),
-       Pr = LH(40210),
-       Tr = LH(42352),
-       Ur = LH(3639);
-     const Vr = Object.entries(uH.lc).reduce(((HH, BH) => {
+     var RD = GB(10027),
+       WD = GB(9974),
+       AD = GB(39954),
+       VD = GB(42048),
+       SD = GB(3708);
+     const nD = Object.entries(pB.kc).reduce(((BB, OB) => {
```

#### 502. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4756` → after: `L4756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4756) · [Before (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4756)

```diff
-       return 0 !== ((null !== (LH = HH.itemFlags[BH]) && void 0 !== LH ? LH : 0) & uH.Ic.Stackable)
+       return 0 !== ((null !== (GB = BB.itemFlags[OB]) && void 0 !== GB ? GB : 0) & pB.Dc.Stackable)
```

#### 503. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4770` → after: `L4770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4770) · [Before (L4770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4770)

```diff
-           return LH === uH.Oc ? void 0 : LH
+           return GB === pB.Jc ? void 0 : GB
```

#### 504. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4774` → after: `L4774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4774) · [Before (L4774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4774)

```diff
-           const AH = null !== (LH = HH.itemHarvests[BH]) && void 0 !== LH ? LH : 0;
+           const YB = null !== (GB = BB.itemHarvests[OB]) && void 0 !== GB ? GB : 0;
```

#### 505. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4779-L4780` → after: `L4779-L4780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4779-L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4779-L4780) · [Before (L4779-L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4779-L4780)

```diff
-           const rH = null !== (LH = HH.itemLevels[BH]) && void 0 !== LH ? LH : uH.Oc;
-           return rH !== uH.Oc ? rH : null !== (AH = (0, QA.harvestsNullLevelOf)(BH)) && void 0 !== AH ? AH : void 0
+           const DB = null !== (GB = BB.itemLevels[OB]) && void 0 !== GB ? GB : pB.Jc;
+           return DB !== pB.Jc ? DB : null !== (YB = (0, qY.harvestsNullLevelOf)(OB)) && void 0 !== YB ? YB : void 0
```

#### 506. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4801` → after: `L4801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4801) · [Before (L4801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4801)

```diff
-           if (void 0 === BH) throw new Error(`No item is named ${HH}, an item's root`);
+           if (void 0 === OB) throw new Error(`No item is named ${BB}, an item's root`);
```

#### 507. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4812-L4819` → after: `L4812-L4819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4812-L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4812-L4819) · [Before (L4812-L4819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4812-L4819)

```diff
-           blockFlags: mr(rH, uH.G.BYTES, uH.G.flags),
-           blockHarvestTypes: mr(rH, uH.G.BYTES, uH.G.harvestType),
-           blockHarvestLevels: mr(rH, uH.G.BYTES, uH.G.harvestLevel),
-           blockAttachedTops: or(rH, uH.G.BYTES, uH.G.attachedTop),
-           itemFlags: mr(SH, uH.Kc.BYTES, uH.Kc.flags),
-           itemHarvests: mr(SH, uH.Kc.BYTES, uH.Kc.harvests),
-           itemLevels: mr(SH, uH.Kc.BYTES, uH.Kc.level)
-         }, (0, Ur.k)(Object.freeze(AH)), (0, Tr.f)()
+           blockFlags: dD(DB, pB.A.BYTES, pB.A.flags),
+           blockHarvestTypes: dD(DB, pB.A.BYTES, pB.A.harvestType),
+           blockHarvestLevels: dD(DB, pB.A.BYTES, pB.A.harvestLevel),
+           blockAttachedTops: KD(DB, pB.A.BYTES, pB.A.attachedTop),
+           itemFlags: dD(QB, pB.Fc.BYTES, pB.Fc.flags),
+           itemHarvests: dD(QB, pB.Fc.BYTES, pB.Fc.harvests),
+           itemLevels: dD(QB, pB.Fc.BYTES, pB.Fc.level)
+         }, (0, SD.l)(Object.freeze(YB)), (0, VD.e)()
```

#### 508. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4822-L4824` → after: `L4822-L4824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4822-L4824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4822-L4824) · [Before (L4822-L4824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4822-L4824)

```diff
-         if ("number" === typeof HH) return void 0 === (0, Ur.h)(HH) ? void 0 : HH;
-         const BH = (0, Ur.e)(HH);
-         return void 0 === BH && br.test(HH) ? void 0 === (0, Ur.h)(+HH) ? void 0 : +HH : BH
+         if ("number" === typeof BB) return void 0 === (0, SD.g)(BB) ? void 0 : BB;
+         const OB = (0, SD.c)(BB);
+         return void 0 === OB && fD.test(BB) ? void 0 === (0, SD.g)(+BB) ? void 0 : +BB : OB
```

#### 509. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4827` → after: `L4827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4827) · [Before (L4827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4827)

```diff
-         if (!HH || HH === xr.e) return xr.f;
+         if (!BB || BB === RD.c) return RD.g;
```

#### 510. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4829` → after: `L4829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4829) · [Before (L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4829)

```diff
-         if (void 0 === BH) throw new Error(`Item ${HH} not found in registry`);
+         if (void 0 === OB) throw new Error(`Item ${BB} not found in registry`);
```

#### 511. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4833` → after: `L4833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4833) · [Before (L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4833)

```diff
-         return 0 !== HH && void 0 !== (0, Ur.h)(HH) ? this.metaOf(HH).rootId : HH
+         return 0 !== BB && void 0 !== (0, SD.g)(BB) ? this.metaOf(BB).rootId : BB
```

#### 512. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4836` → after: `L4836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4836) · [Before (L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4836)

```diff
-         return this.metas[HH] ??= (0, vr.k)((0, Ur.h)(HH), HH, this.rootIdOf, (0, QA.rootMetaDescOf)(HH))
+         return this.metas[BB] ??= (0, WD.k)((0, SD.g)(BB), BB, this.rootIdOf, (0, qY.rootMetaDescOf)(BB))
```

#### 513. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4839` → after: `L4839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4839) · [Before (L4839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4839)

```diff
-         if (!HH || HH === xr.e) return 0;
+         if (!BB || BB === RD.c) return 0;
```

#### 514. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4841` → after: `L4841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4841) · [Before (L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4841)

```diff
-         if (void 0 === BH) throw new Error(`Invalid block name. You sent ${HH}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
+         if (void 0 === OB) throw new Error(`Invalid block name. You sent ${BB}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
```

#### 515. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4845` → after: `L4845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4845) · [Before (L4845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4845)

```diff
-         if (!HH || HH === xr.e) return xr.e;
+         if (!BB || BB === RD.c) return RD.c;
```

#### 516. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4847-L4848` → after: `L4847-L4848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4847-L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4847-L4848) · [Before (L4847-L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4847-L4848)

```diff
-         if (void 0 === BH) throw new Error(`Item ${HH} not found in registry`);
-         return (0, Ur.h)(BH)
+         if (void 0 === OB) throw new Error(`Item ${BB} not found in registry`);
+         return (0, SD.g)(OB)
```

#### 517. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4852` → after: `L4852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4852) · [Before (L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4852)

```diff
-         if (HH === xr.e) return 0;
+         if (BB === RD.c) return 0;
```

#### 518. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4856-L4857` → after: `L4856-L4857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4856-L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4856-L4857) · [Before (L4856-L4857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4856-L4857)

```diff
-             AH = BH > 0 ? (0, Ur.e)(HH.slice(0, BH)) : void 0;
-           LH = void 0 !== AH && this.isBlockId(AH) && (0, QA.rootMetaDescOf)(AH) === HH ? AH : void 0
+             YB = OB > 0 ? (0, SD.c)(BB.slice(0, OB)) : void 0;
+           GB = void 0 !== YB && this.isBlockId(YB) && (0, qY.rootMetaDescOf)(YB) === BB ? YB : void 0
```

#### 519. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4860` → after: `L4860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4860) · [Before (L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4860)

```diff
-         if (!BH) throw new Error(`Invalid block name. You sent ${HH}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
+         if (!OB) throw new Error(`Invalid block name. You sent ${BB}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
```

#### 520. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4867` → after: `L4867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4867) · [Before (L4867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4867)

```diff
-         return 0 !== HH && (0, Ur.h)(HH) || xr.e
+         return 0 !== BB && (0, SD.g)(BB) || RD.c
```

#### 521. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4875` → after: `L4875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4875) · [Before (L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4875)

```diff
-           name: (0, Ur.h)(BH),
+           name: (0, SD.g)(OB),
```

#### 522. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4885` → after: `L4885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4885) · [Before (L4885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4885)

```diff
-         if (Pr.c.has(BH)) {
+         if (AD.d.has(OB)) {
```

#### 523. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4887` → after: `L4887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4887) · [Before (L4887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4887)

```diff
-             AH = this.options.get((0, Pr.d)(LH, BH));
+             YB = this.options.get((0, AD.f)(GB, OB));
```

#### 524. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4901-L4902` → after: `L4901-L4902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4901-L4902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4901-L4902) · [Before (L4901-L4902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4901-L4902)

```diff
-           throw new Error(`ClientApi.${HH} is not available yet in the wasm client (${BH})`)
-         }(`getItemStat("${HH}")`, `a table of the stat: the wasm client answers ${Object.keys(kr).join(", ")}`), BH
+           throw new Error(`ClientApi.${BB} is not available yet in the wasm client (${OB})`)
+         }(`getItemStat("${BB}")`, `a table of the stat: the wasm client answers ${Object.keys(kD).join(", ")}`), OB
```

#### 525. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4907` → after: `L4907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4907) · [Before (L4907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4907)

```diff
-         return null !== rH && void 0 !== rH || "displayName" !== BH ? rH : this.getItemName(HH)
+         return null !== DB && void 0 !== DB || "displayName" !== OB ? DB : this.getItemName(BB)
```

#### 526. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4913` → after: `L4913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4913) · [Before (L4913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4913)

```diff
-         return this.getClientOption(`${HH}GunStats`)
+         return this.getClientOption(`${BB}GunStats`)
```

#### 527. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4920` → after: `L4920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4920) · [Before (L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4920)

```diff
-         return 0 !== ((null !== (BH = this.props.blockFlags[HH]) && void 0 !== BH ? BH : 0) & uH.F.Solid)
+         return 0 !== ((null !== (OB = this.props.blockFlags[BB]) && void 0 !== OB ? OB : 0) & pB.y.Solid)
```

#### 528. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4927` → after: `L4927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4927) · [Before (L4927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4927)

```diff
-         return 0 !== ((null !== (BH = this.props.blockFlags[HH]) && void 0 !== BH ? BH : 0) & uH.F.Fluid)
+         return 0 !== ((null !== (OB = this.props.blockFlags[BB]) && void 0 !== OB ? OB : 0) & pB.y.Fluid)
```

#### 529. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4931` → after: `L4931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4931) · [Before (L4931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4931)

```diff
-         return 0 !== ((null !== (BH = this.props.blockFlags[HH]) && void 0 !== BH ? BH : 0) & uH.F.PlaceOver)
+         return 0 !== ((null !== (OB = this.props.blockFlags[BB]) && void 0 !== OB ? OB : 0) & pB.y.PlaceOver)
```

#### 530. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4935` → after: `L4935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4935) · [Before (L4935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4935)

```diff
-         return null !== (BH = this.props.blockAttachedTops[HH]) && void 0 !== BH ? BH : 0
+         return null !== (OB = this.props.blockAttachedTops[BB]) && void 0 !== OB ? OB : 0
```

#### 531. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4952-L4954` → after: `L4952-L4954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4952-L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4952-L4954) · [Before (L4952-L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4952-L4954)

```diff
-               for (let HH = 0; HH + uH.de.BYTES <= SH; HH += uH.de.BYTES) tH.push(Object.freeze({
-                 item: BH.nameOfId(uH.de.item(hH, HH)),
-                 amt: uH.de.amount(hH, HH)
+               for (let BB = 0; BB + pB.Vd.BYTES <= QB; BB += pB.Vd.BYTES) jB.push(Object.freeze({
+                 item: OB.nameOfId(pB.Vd.item(oB, BB)),
+                 amt: pB.Vd.amount(oB, BB)
```

#### 532. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4974-L4980` → after: `L4974-L4980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4974-L4980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4974-L4980) · [Before (L4974-L4980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4974-L4980)

```diff
-     var Kr = LH(42092),
-       cr = LH(37821),
-       er = LH(37807),
-       qr = LH(37809),
-       gr = LH(37373),
-       Nr = LH(42002),
-       Rr = LH(54466);
+     var FD = GB(41797),
+       iD = GB(37655),
+       LD = GB(37638),
+       gD = GB(37641),
+       rD = GB(37166),
+       XD = GB(41688),
+       wD = GB(53993);
```

#### 533. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4988` → after: `L4988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4988) · [Before (L4988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4988)

```diff
-       return BH.byteLength < GH.Dc ? BH : BH.subarray(0, GH.Dc - 1)
+       return OB.byteLength < zB.Rc ? OB : OB.subarray(0, zB.Rc - 1)
```

#### 534. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4996` → after: `L4996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4996) · [Before (L4996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4996)

```diff
-         this.keyframesVersion = jr, this.reloadFrom = null !== (HH = null === (BH = this.view()) || void 0 === BH ? void 0 : BH.version) && void 0 !== HH ? HH : jr
+         this.keyframesVersion = ED, this.reloadFrom = null !== (BB = null === (OB = this.view()) || void 0 === OB ? void 0 : OB.version) && void 0 !== BB ? BB : ED
```

#### 535. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4999` → after: `L4999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4999) · [Before (L4999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4999)

```diff
-         const BH = 1 === this.deps.core.RSH(HH);
+         const OB = 1 === this.deps.core.HQB(BB);
```

#### 536. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5024` → after: `L5024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5024) · [Before (L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5024)

```diff
-         const BH = uH.y.replayViewPtr(this.deps.apiView(), 0);
+         const OB = pB.u.replayViewPtr(this.deps.apiView(), 0);
```

#### 537. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5026-L5027` → after: `L5026-L5027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5026-L5027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5026-L5027) · [Before (L5026-L5027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5026-L5027)

```diff
-         const LH = new DataView(this.deps.buffer(), BH, uH.Xd.BYTES),
-           AH = uH.Xd.version(LH, 0),
+         const GB = new DataView(this.deps.buffer(), OB, pB.Qd.BYTES),
+           YB = pB.Qd.version(GB, 0),
```

#### 538. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5030` → after: `L5030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5030) · [Before (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5030)

```diff
-         const SH = uH.Xd.markIn(LH, 0),
+         const QB = pB.Qd.markIn(GB, 0),
```

#### 539. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5033-L5038` → after: `L5033-L5038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5033-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5033-L5038) · [Before (L5033-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5033-L5038)

```diff
-             state: uH.Xd.state(LH, 0),
-             cameraMode: null !== (HH = Rr.b[uH.Xd.cameraMode(LH, 0)]) && void 0 !== HH ? HH : "recording",
-             IX: uH.Xd.IX(LH, 0),
-             totalTicks: uH.Xd.totalTicks(LH, 0),
-             speed: uH.Xd.speed(LH, 0),
-             mark: SH === uH.Td ? null : {
+             state: pB.Qd.state(GB, 0),
+             cameraMode: null !== (BB = wD.b[pB.Qd.cameraMode(GB, 0)]) && void 0 !== BB ? BB : "recording",
+             kP: pB.Qd.kP(GB, 0),
+             totalTicks: pB.Qd.totalTicks(GB, 0),
+             speed: pB.Qd.speed(GB, 0),
+             mark: QB === pB.Nd ? null : {
```

#### 540. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5040` → after: `L5040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5040) · [Before (L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5040)

```diff
-               outTick: uH.Xd.markOut(LH, 0)
+               outTick: pB.Qd.markOut(GB, 0)
```

#### 541. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5042` → after: `L5042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5042) · [Before (L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5042)

```diff
-             editVersion: uH.Xd.editVersion(LH, 0)
+             editVersion: pB.Qd.editVersion(GB, 0)
```

#### 542. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5050` → after: `L5050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5050) · [Before (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5050)

```diff
-         const BH = this.reloadFrom === jr && HH.state !== GH.hd.Cropping && HH.state !== GH.hd.None,
+         const OB = this.reloadFrom === ED && BB.state !== zB.sd.Cropping && BB.state !== zB.sd.None,
```

#### 543. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5055` → after: `L5055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5055) · [Before (L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5055)

```diff
-         } = this.deps, rH = AH.jSH(), SH = AH.DW(), hH = [];
+         } = this.deps, DB = YB.vQB(), QB = YB.eZ(), oB = [];
```

#### 544. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5057` → after: `L5057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5057) · [Before (L5057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5057)

```diff
-           const HH = new DataView(this.deps.buffer(), SH, rH * GH.qc);
+           const BB = new DataView(this.deps.buffer(), QB, DB * zB.Ec);
```

#### 545. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5059` → after: `L5059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5059) · [Before (L5059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5059)

```diff
-             const LH = BH * GH.qc,
+             const GB = OB * zB.Ec,
```

#### 546. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5062-L5065` → after: `L5062-L5065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5062-L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5062-L5065) · [Before (L5062-L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5062-L5065)

```diff
-               IX: HH.getUint32(LH + GH.zc, !0),
-               position: [AH(GH.wc), AH(GH.wc + 8), AH(GH.wc + 16)],
-               direction: [AH(GH.uc), AH(GH.uc + 8), AH(GH.uc + 16)],
-               easing: [AH(GH.vc), AH(GH.vc + 8), AH(GH.vc + 16), AH(GH.vc + 24)]
+               kP: BB.getUint32(GB + zB.Pc, !0),
+               position: [YB(zB.Nc), YB(zB.Nc + 8), YB(zB.Nc + 16)],
+               direction: [YB(zB.Gc), YB(zB.Gc + 8), YB(zB.Gc + 16)],
+               easing: [YB(zB.Kc), YB(zB.Kc + 8), YB(zB.Kc + 16), YB(zB.Kc + 24)]
```

#### 547. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5073` → after: `L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5073) · [Before (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5073)

```diff
-           BH = [uH.y.eye(HH, 0, 0), uH.y.eye(HH, 0, 1), uH.y.eye(HH, 0, 2)];
+           OB = [pB.u.eye(BB, 0, 0), pB.u.eye(BB, 0, 1), pB.u.eye(BB, 0, 2)];
```

#### 548. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5077` → after: `L5077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5077) · [Before (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5077)

```diff
-         }(uH.y.heading(HH, 0), uH.y.pitch(HH, 0)))
+         }(pB.u.heading(BB, 0), pB.u.pitch(BB, 0)))
```

#### 549. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5080` → after: `L5080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5080) · [Before (L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5080)

```diff
-         return this.deps.replay.setKeyframe(HH.IX, Float64Array.from([...HH.position, ...HH.direction, ...HH.easing]))
+         return this.deps.replay.setKeyframe(BB.kP, Float64Array.from([...BB.position, ...BB.direction, ...BB.easing]))
```

#### 550. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5090` → after: `L5090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5090) · [Before (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5090)

```diff
-         return this.deps.replay.setMark(null !== (BH = null === HH || void 0 === HH ? void 0 : HH.inTick) && void 0 !== BH ? BH : -1, null !== (LH = null === HH || void 0 === HH ? void 0 : HH.outTick) && void 0 !== LH ? LH : -1)
+         return this.deps.replay.setMark(null !== (OB = null === BB || void 0 === BB ? void 0 : BB.inTick) && void 0 !== OB ? OB : -1, null !== (GB = null === BB || void 0 === BB ? void 0 : BB.outTick) && void 0 !== GB ? GB : -1)
```

#### 551. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5107` → after: `L5107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5107) · [Before (L5107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5107)

```diff
-         return null !== LH && (0, uH.Mf)(LH, 0, HH, null === BH ? nr : Fr.encode(BH))
+         return null !== GB && (0, pB.Df)(GB, 0, BB, null === OB ? cD : hD.encode(OB))
```

#### 552. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5112` → after: `L5112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5112) · [Before (L5112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5112)

```diff
-         return null !== rH && (0, uH.If)(rH, 0, BH, LH, SH, Fr.encode(HH))
+         return null !== DB && (0, pB.wf)(DB, 0, OB, GB, QB, hD.encode(BB))
```

#### 553. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5116` → after: `L5116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5116) · [Before (L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5116)

```diff
-         return null !== rH && (0, uH.Of)(rH, 0, HH, BH, Math.max(0, LH), Fr.encode(AH))
+         return null !== DB && (0, pB.Hf)(DB, 0, BB, OB, Math.max(0, GB), hD.encode(YB))
```

#### 554. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5124` → after: `L5124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5124) · [Before (L5124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5124)

```diff
-                 return HH + hA.Db + (null !== (LH = null === BH || void 0 === BH ? void 0 : BH.byteLength) && void 0 !== LH ? LH : 0)
+                 return BB + oY.Eb + (null !== (GB = null === OB || void 0 === OB ? void 0 : OB.byteLength) && void 0 !== GB ? GB : 0)
```

#### 555. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5131` → after: `L5131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5131) · [Before (L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5131)

```diff
-               AH.setUint16(rH, null !== (SH = null === hH || void 0 === hH ? void 0 : hH.byteLength) && void 0 !== SH ? SH : GH.Dc, !0), rH += hA.Db, null !== hH && (LH.set(hH, rH), rH += hH.byteLength)
+               YB.setUint16(DB, null !== (QB = null === oB || void 0 === oB ? void 0 : oB.byteLength) && void 0 !== QB ? QB : zB.Rc, !0), DB += oY.Eb, null !== oB && (GB.set(oB, DB), DB += oB.byteLength)
```

#### 556. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5135` → after: `L5135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5135) · [Before (L5135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5135)

```diff
-         return null !== SH && (0, uH.Jf)(SH, 0, null !== (AH = HH.id) && void 0 !== AH ? AH : uH.bd, null !== (rH = BH.id) && void 0 !== rH ? rH : uH.bd, hH)
+         return null !== QB && (0, pB.zf)(QB, 0, null !== (YB = BB.id) && void 0 !== YB ? YB : pB.cd, null !== (DB = OB.id) && void 0 !== DB ? DB : pB.cd, oB)
```

#### 557. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5146` → after: `L5146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5146) · [Before (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5146)

```diff
-         this.deps.core.nSH()
+         this.deps.core.sQB()
```

#### 558. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5159` → after: `L5159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5159) · [Before (L5159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5159)

```diff
-         this.deps = HH, this.state = uA.c, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (BH = HH.now) && void 0 !== BH ? BH : () => performance.now()
+         this.deps = BB, this.state = pY.e, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (OB = BB.now) && void 0 !== OB ? OB : () => performance.now()
```

#### 559. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5177` → after: `L5177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5177) · [Before (L5177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5177)

```diff
-         this.live && (this.state.recording || !0 !== (null === (HH = (BH = this.deps).viewerOpen) || void 0 === HH ? void 0 : HH.call(BH))) ? this.deps.client.recorderControl(GH.Sc.ToggleRecording) : this.deps.notify(qr.e.closeViewerFirst)
+         this.live && (this.state.recording || !0 !== (null === (BB = (OB = this.deps).viewerOpen) || void 0 === BB ? void 0 : BB.call(OB))) ? this.deps.client.recorderControl(zB.ad.ToggleRecording) : this.deps.notify(gD.e.closeViewerFirst)
```

#### 560. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5180` → after: `L5180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5180) · [Before (L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5180)

```diff
-         this.live ? this.deps.client.recorderControl(GH.Sc.SaveClip) : this.deps.notify(qr.e.clippingNotOn)
+         this.live ? this.deps.client.recorderControl(zB.ad.SaveClip) : this.deps.notify(gD.e.clippingNotOn)
```

#### 561. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5183` → after: `L5183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5183) · [Before (L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5183)

```diff
-         this.live && this.deps.client.recorderControl(HH ? GH.Sc.ViewerOpened : GH.Sc.ViewerClosed)
+         this.live && this.deps.client.recorderControl(BB ? zB.ad.ViewerOpened : zB.ad.ViewerClosed)
```

#### 562. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5220` → after: `L5220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5220) · [Before (L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5220)

```diff
-           case GH.Qc.RecordingStarted:
+           case zB.Zc.RecordingStarted:
```

#### 563. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5227-L5228` → after: `L5227-L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5227-L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5227-L5228) · [Before (L5227-L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5227-L5228)

```diff
-           case GH.Qc.RecordingStopped:
-             this.stopRecording(), AH(rH.recordingStopped), this.saveState(GH.cd.Recording, "saving");
+           case zB.Zc.RecordingStopped:
+             this.stopRecording(), YB(DB.recordingStopped), this.saveState(zB.ld.Recording, "saving");
```

#### 564. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5230` → after: `L5230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5230) · [Before (L5230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5230)

```diff
-           case GH.Qc.RecordingDiscarded:
+           case zB.Zc.RecordingDiscarded:
```

#### 565. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5233` → after: `L5233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5233) · [Before (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5233)

```diff
-           case GH.Qc.RecordingTurnedOff:
+           case zB.Zc.RecordingTurnedOff:
```

#### 566. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5236` → after: `L5236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5236) · [Before (L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5236)

```diff
-           case GH.Qc.LimitReached:
+           case zB.Zc.LimitReached:
```

#### 567. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5239-L5240` → after: `L5239-L5240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5239-L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5239-L5240) · [Before (L5239-L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5239-L5240)

```diff
-           case GH.Qc.ClipSaved:
-             this.saveState(GH.cd.Clip, "saving");
+           case zB.Zc.ClipSaved:
+             this.saveState(zB.ld.Clip, "saving");
```

#### 568. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5242` → after: `L5242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5242) · [Before (L5242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5242)

```diff
-           case GH.Qc.ClipEmpty:
+           case zB.Zc.ClipEmpty:
```

#### 569. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5245` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5245) · [Before (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5245)

```diff
-           case GH.Qc.ClippingNotOn:
+           case zB.Zc.ClippingNotOn:
```

#### 570. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5248` → after: `L5248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5248) · [Before (L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5248)

```diff
-           case GH.Qc.Disallowed:
+           case zB.Zc.Disallowed:
```

#### 571. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5251` → after: `L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5251) · [Before (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5251)

```diff
-           case GH.Qc.ClippingOn:
+           case zB.Zc.ClippingOn:
```

#### 572. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5258` → after: `L5258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5258) · [Before (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5258)

```diff
-           case GH.Qc.ClippingOff:
+           case zB.Zc.ClippingOff:
```

#### 573. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5265` → after: `L5265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5265) · [Before (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5265)

```diff
-           case GH.Qc.ClipSettingsChanged:
+           case zB.Zc.ClipSettingsChanged:
```

#### 574. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5271` → after: `L5271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5271) · [Before (L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5271)

```diff
-           case GH.Qc.SaveBusy:
+           case zB.Zc.SaveBusy:
```

#### 575. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5274` → after: `L5274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5274) · [Before (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5274)

```diff
-           case GH.Qc.CloseViewerFirst:
+           case zB.Zc.CloseViewerFirst:
```

#### 576. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5279` → after: `L5279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5279) · [Before (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5279)

```diff
-         this.deps.download(BH), this.saveState(HH, "done"), this.deps.notify(HH === GH.cd.Clip ? qr.e.clipSaved : qr.e.recordingSaved)
+         this.deps.download(OB), this.saveState(BB, "done"), this.deps.notify(BB === zB.ld.Clip ? gD.e.clipSaved : gD.e.recordingSaved)
```

#### 577. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5282` → after: `L5282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5282) · [Before (L5282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5282)

```diff
-         this.saveState(HH, "failed"), this.deps.notify(HH === GH.cd.Clip ? qr.e.clipFailed : qr.e.recordingFailed)
+         this.saveState(BB, "failed"), this.deps.notify(BB === zB.ld.Clip ? gD.e.clipFailed : gD.e.recordingFailed)
```

#### 578. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5285` → after: `L5285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5285) · [Before (L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5285)

```diff
-         this.recordingSince = null, this.clipTickPending = !1, this.set(uA.c)
+         this.recordingSince = null, this.clipTickPending = !1, this.set(pY.e)
```

#### 579. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5307` → after: `L5307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5307) · [Before (L5307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5307)

```diff
-         if (BH + hA.Db > LH) return null;
+         if (OB + oY.Eb > GB) return null;
```

#### 580. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5309` → after: `L5309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5309) · [Before (L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5309)

```diff
-         if (BH += hA.Db, AH !== GH.Dc) {
+         if (OB += oY.Eb, YB !== zB.Rc) {
```

#### 581. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5314` → after: `L5314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5314) · [Before (L5314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5314)

```diff
-       return BH === LH ? rH : null
+       return OB === GB ? DB : null
```

#### 582. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5331` → after: `L5331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5331) · [Before (L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5331)

```diff
-               case GH.ed.Cleared:
+               case zB.od.Cleared:
```

#### 583. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5333` → after: `L5333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5333) · [Before (L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5333)

```diff
-               case GH.ed.Text:
+               case zB.od.Text:
```

#### 584. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5335` → after: `L5335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5335) · [Before (L5335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5335)

```diff
-               case GH.ed.Int:
+               case zB.od.Int:
```

#### 585. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5337` → after: `L5337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5337) · [Before (L5337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5337)

```diff
-               case GH.ed.Double:
+               case zB.od.Double:
```

#### 586. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5352` → after: `L5352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5352) · [Before (L5352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5352)

```diff
-               case GH.gd.FlyingText: {
+               case zB.qd.FlyingText: {
```

#### 587. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5356-L5357` → after: `L5356-L5357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5356-L5357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5356-L5357) · [Before (L5356-L5357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5356-L5357)

```diff
-                   ar: LH,
-                   dr: AH,
+                   SB: GB,
+                   VB: YB,
```

#### 588. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5362` → after: `L5362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5362) · [Before (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5362)

```diff
-               case GH.gd.PlayerKilled: {
+               case zB.qd.PlayerKilled: {
```

#### 589. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5372` → after: `L5372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5372) · [Before (L5372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5372)

```diff
-               case GH.gd.Killfeed: {
+               case zB.qd.Killfeed: {
```

#### 590. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5414` → after: `L5414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5414) · [Before (L5414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5414)

```diff
-       return (HH, BH, SH, hH) => !(HH < GH.X.ReplayFailed || HH > GH.X.RecorderEvent) && (LH = BH, AH = !0, (0, uH.we)(HH, BH, SH, hH, rH) && AH)
+       return (BB, OB, QB, oB) => !(BB < zB.Y.ReplayFailed || BB > zB.Y.RecorderEvent) && (GB = OB, YB = !0, (0, pB.ne)(BB, OB, QB, oB, DB) && YB)
```

#### 591. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5430` → after: `L5430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5430) · [Before (L5430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5430)

```diff
-               if (rH + GH.U > LH.byteLength) throw new Error(`the recorder module's events end mid-head at ${rH}`);
+               if (DB + zB.V > GB.byteLength) throw new Error(`the recorder module's events end mid-head at ${DB}`);
```

#### 592. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5434-L5436` → after: `L5434-L5436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5434-L5436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5434-L5436) · [Before (L5434-L5436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5434-L5436)

```diff
-                 tH = rH + GH.U;
-               if (tH + hH > LH.byteLength || !BH(SH, AH, tH, hH)) throw new Error(`the recorder module wrote a malformed event ${SH} (${hH} bytes) at ${rH}`);
-               rH = tH + (0, GH.te)(hH)
+                 jB = DB + zB.V;
+               if (jB + oB > GB.byteLength || !OB(QB, YB, jB, oB)) throw new Error(`the recorder module wrote a malformed event ${QB} (${oB} bytes) at ${DB}`);
+               DB = jB + (0, zB.qe)(oB)
```

#### 593. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5454` → after: `L5454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5454) · [Before (L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5454)

```diff
-         const LH = null !== (BH = this.parts.get(HH.save)) && void 0 !== BH ? BH : [];
+         const GB = null !== (OB = this.parts.get(BB.save)) && void 0 !== OB ? OB : [];
```

#### 594. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5478` → after: `L5478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5478) · [Before (L5478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5478)

```diff
-       return LH.e(72).then((() => LH(64081)))
+       return GB.e(72).then((() => GB(63857)))
```

#### 595. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5503` → after: `L5503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5503) · [Before (L5503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5503)

```diff
-             BH === GH.cd.Edited ? null === (AH = this.viewer) || void 0 === AH || AH.saveDone(LH) : this.recorder.fileReady(BH, LH)
+             OB === zB.ld.Edited ? null === (YB = this.viewer) || void 0 === YB || YB.saveDone(GB) : this.recorder.fileReady(OB, GB)
```

#### 596. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5535` → after: `L5535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5535) · [Before (L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5535)

```diff
-               case GH.Qc.FileDiscarded:
+               case zB.Zc.FileDiscarded:
```

#### 597. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5538` → after: `L5538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5538) · [Before (L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5538)

```diff
-               case GH.Qc.SaveFailed:
+               case zB.Zc.SaveFailed:
```

#### 598. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5541` → after: `L5541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5541) · [Before (L5541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5541)

```diff
-               case GH.Qc.SaveBusy:
+               case zB.Zc.SaveBusy:
```

#### 599. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5564` → after: `L5564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5564) · [Before (L5564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5564)

```diff
-         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (HH = this.deps.loadViewer) && void 0 !== HH ? HH : yr)().catch((HH => {
+         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (BB = this.deps.loadViewer) && void 0 !== BB ? BB : tD)().catch((BB => {
```

#### 600. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5582` → after: `L5582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5582) · [Before (L5582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5582)

```diff
-           HH > 0 && this.recorder.IX()
+           BB > 0 && this.recorder.kP()
```

#### 601. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5594` → after: `L5594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5594) · [Before (L5594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5594)

```diff
-         HH === GH.cd.Edited ? null === (BH = this.viewer) || void 0 === BH || BH.saveFailed(!1) : this.recorder.failed(HH)
+         BB === zB.ld.Edited ? null === (OB = this.viewer) || void 0 === OB || OB.saveFailed(!1) : this.recorder.failed(BB)
```

#### 602. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5597-L5600` → after: `L5597-L5600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5597-L5600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5597-L5600) · [Before (L5597-L5600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5597-L5600)

```diff
-     var BS = LH(41940),
-       LS = LH(41954),
-       AS = LH(5275),
-       rS = LH(42240);
+     var OQ = GB(41624),
+       GQ = GB(41637),
+       YQ = GB(5296),
+       DQ = GB(41933);
```

#### 603. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5607` → after: `L5607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5607) · [Before (L5607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5607)

```diff
-         const LH = (0, jH.u)(0, performance.now()),
+         const GB = (0, EB.m)(0, performance.now()),
```

#### 604. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5609-L5610` → after: `L5609-L5610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5609-L5610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5609-L5610) · [Before (L5609-L5610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5609-L5610)

```diff
-         (0, rS.h)((() => {
-           (0, jH.A)(GH.tb.MouseDown, 0, 0, 0, LH), (0, jH.A)(GH.tb.MouseMove, 0, HH * AH, BH * AH, 0), (0, jH.A)(GH.tb.MouseUp, 0, 0, 0, LH)
+         (0, DQ.i)((() => {
+           (0, EB.r)(zB.ub.MouseDown, 0, 0, 0, GB), (0, EB.r)(zB.ub.MouseMove, 0, BB * YB, OB * YB, 0), (0, EB.r)(zB.ub.MouseUp, 0, 0, 0, GB)
```

#### 605. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5615` → after: `L5615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5615) · [Before (L5615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5615)

```diff
-         this.analogue[0] = null !== (BH = null === HH || void 0 === HH ? void 0 : HH.x) && void 0 !== BH ? BH : 0, this.analogue[1] = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.y) && void 0 !== LH ? LH : 0, this.send()
+         this.analogue[0] = null !== (OB = null === BB || void 0 === BB ? void 0 : BB.x) && void 0 !== OB ? OB : 0, this.analogue[1] = null !== (GB = null === BB || void 0 === BB ? void 0 : BB.y) && void 0 !== GB ? GB : 0, this.send()
```

#### 606. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5618-L5619` → after: `L5618-L5619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5618-L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5618-L5619) · [Before (L5618-L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5618-L5619)

```diff
-         const LH = "freeCamUp" === HH ? uH.ec.Up : uH.ec.Down;
-         this.keys = BH ? this.keys | LH : this.keys & ~LH, this.send()
+         const GB = "freeCamUp" === BB ? pB._b.Up : pB._b.Down;
+         this.keys = OB ? this.keys | GB : this.keys & ~GB, this.send()
```

#### 607. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5626` → after: `L5626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5626) · [Before (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5626)

```diff
-         this.unsent = null !== HH && !(0, uH.Qe)(HH, 0, this.analogue, this.keys)
+         this.unsent = null !== BB && !(0, pB.De)(BB, 0, this.analogue, this.keys)
```

#### 608. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5629-L5635` → after: `L5629-L5635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5629-L5635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5629-L5635) · [Before (L5629-L5635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5629-L5635)

```diff
-     var hS = LH(3950),
-       tS = LH(725),
-       zS = LH(257),
-       CS = LH(81),
-       ES = LH(34908),
-       XS = LH(703),
-       GS = LH(37467);
+     var oQ = GB(4004),
+       jQ = GB(756),
+       yQ = GB(271),
+       JQ = GB(92),
+       MQ = GB(34722),
+       PQ = GB(747),
+       zQ = GB(37254);
```

#### 609. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5641` → after: `L5641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5641) · [Before (L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5641)

```diff
-         mouse: (0, CS.isMobile)() ? BH : HH.mouseSensitivity,
+         mouse: (0, JQ.isMobile)() ? OB : BB.mouseSensitivity,
```

#### 610. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5651` → after: `L5651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5651) · [Before (L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5651)

```diff
-       return LH > 0 ? BH / LH : 1
+       return GB > 0 ? OB / GB : 1
```

#### 611. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5670` → after: `L5670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5670) · [Before (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5670)

```diff
-           cellLight: (0, hS.n)("cellLight") ? (0, hS.n)("cellLightUnlit") ? "all" : "lit" : "off"
+           cellLight: (0, oQ.k)("cellLight") ? (0, oQ.k)("cellLightUnlit") ? "all" : "lit" : "off"
```

#### 612. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5672` → after: `L5672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5672) · [Before (L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5672)

```diff
-         LH && (0, GH.ae)(LH) === (0, GH.ae)(tH) && LH.fogChunks === SH || (LH = tH, HH.setEnvPrefs(LH))
+         GB && (0, zB.be)(GB) === (0, zB.be)(jB) && GB.fogChunks === QB || (GB = jB, BB.setEnvPrefs(GB))
```

#### 613. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5683` → after: `L5683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5683) · [Before (L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5683)

```diff
-             ezTowering: HH.ezTowering ? (0, zS.i)() : null,
+             ezTowering: BB.ezTowering ? (0, yQ.c)() : null,
```

#### 614. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5686` → after: `L5686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5686) · [Before (L5686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5686)

```diff
-             touchWalk: !(0, GS.g)(),
+             touchWalk: !(0, zQ.i)(),
```

#### 615. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5688-L5689` → after: `L5688-L5689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5688-L5689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5688-L5689) · [Before (L5688-L5689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5688-L5689)

```diff
-             edgeGuardLong: (0, XS.b)(),
-             nametagCutDistance: (0, ES.i)()
+             edgeGuardLong: (0, PQ.c)(),
+             nametagCutDistance: (0, MQ.e)()
```

#### 616. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5692` → after: `L5692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5692) · [Before (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5692)

```diff
-         (0, mH.ne)(SH, BH) || (SH = BH, HH.setUiPrefs(BH))
+         (0, dB.Fe)(QB, OB) || (QB = OB, BB.setUiPrefs(OB))
```

#### 617. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5697` → after: `L5697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5697) · [Before (L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5697)

```diff
-         (0, mH.ne)(zH, BH) || (zH = BH, HH.setLookPrefs(BH))
+         (0, dB.Fe)(yB, OB) || (yB = OB, BB.setLookPrefs(OB))
```

#### 618. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5700` → after: `L5700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5700) · [Before (L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5700)

```diff
-       const EH = [(0, hH.m)("appManagerUpdated|soundVolume", BH), (0, hH.m)("appManagerUpdated|soundOnFromAd", BH), (0, hH.m)("appManagerUpdated|clientEscMenuOptions", (() => {
+       const MB = [(0, oB.p)("appManagerUpdated|soundVolume", OB), (0, oB.p)("appManagerUpdated|soundOnFromAd", OB), (0, oB.p)("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 619. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5702` → after: `L5702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5702) · [Before (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5702)

```diff
-       })), (0, hH.m)(GS.d, tH), (0, hH.m)("appManagerUpdated|enabledDebugFeatures", rH), (0, hH.m)("appManagerUpdated|areNametagsHidden", tH), (0, hH.m)("appManagerUpdated|showDistantNametags", tH)];
+       })), (0, oB.p)(zQ.e, jB), (0, oB.p)("appManagerUpdated|enabledDebugFeatures", DB), (0, oB.p)("appManagerUpdated|areNametagsHidden", jB), (0, oB.p)("appManagerUpdated|showDistantNametags", jB)];
```

#### 620. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5707-L5708` → after: `L5707-L5708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5707-L5708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5707-L5708) · [Before (L5707-L5708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5707-L5708)

```diff
-     var WS = LH(42216),
-       MS = LH(42222);
+     var ZQ = GB(41911),
+       NQ = GB(41913);
```

#### 621. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5749` → after: `L5749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5749) · [Before (L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5749)

```diff
-           0 !== tH ? (new Uint8Array(BH.buffer, tH, hH.length).set(hH), HH.FSH(LH.headLen, AH, rH) && (SH = "sealing")) : SH = "tooLarge"
+           0 !== jB ? (new Uint8Array(OB.buffer, jB, oB.length).set(oB), BB.xQB(GB.headLen, YB, DB) && (QB = "sealing")) : QB = "tooLarge"
```

#### 622. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5758` → after: `L5758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5758) · [Before (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5758)

```diff
-             BH = HH.DSH(), BH > 0 && (LH = HH.wSH())
+             OB = BB.tQB(), OB > 0 && (GB = BB.BoB())
```

#### 623. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5770` → after: `L5770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5770) · [Before (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5770)

```diff
-           HH.ZSH()
+           BB.OoB()
```

#### 624. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5779` → after: `L5779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5779) · [Before (L5779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5779)

```diff
-           HH.ZSH()
+           BB.OoB()
```

#### 625. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5806` → after: `L5806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5806) · [Before (L5806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5806)

```diff
-         if (HH.busy() || !bS(HH.memoryBytes(), HH.clipSeconds())) return "hX";
+         if (BB.busy() || !fQ(BB.memoryBytes(), BB.clipSeconds())) return "GP";
```

#### 626. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5814` → after: `L5814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5814) · [Before (L5814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5814)

```diff
-         if (!LH) return HH.trapped() ? "trapped" : HH.Mu() ? "Mu" : "failed";
+         if (!GB) return BB.trapped() ? "trapped" : BB.Vp() ? "Vp" : "failed";
```

#### 627. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5822` → after: `L5822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5822) · [Before (L5822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5822)

```diff
-       fS = new Set([GH.Sc.ToggleRecording, GH.Sc.SaveClip]);
+       mQ = new Set([zB.ad.ToggleRecording, zB.ad.SaveClip]);
```

#### 628. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5827` → after: `L5827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5827) · [Before (L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5827)

```diff
-       qS = (0, MS.c)("Mu"),
+       gQ = (0, NQ.c)("Vp"),
```

#### 629. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5992` → after: `L5992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5992) · [Before (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5992)

```diff
-         }, (0, WS.e)(this, Ch)[Ch](GH.Mc.Prefs, OS(HH, BH)), HH && (0, WS.e)(this, jS)[jS] && (0, WS.e)(this, Hh)[Hh]()
+         }, (0, ZQ.e)(this, Jo)[Jo](zB.Xc.Prefs, UQ(BB, OB)), BB && (0, ZQ.e)(this, EQ)[EQ] && (0, ZQ.e)(this, Bo)[Bo]()
```

#### 630. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5999` → after: `L5999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5999) · [Before (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5999)

```diff
-           if (!(0, WS.e)(this, eS)[eS]) return (0, WS.e)(this, KS)[KS] ? void(0, WS.e)(this, Ch)[Ch](GH.Mc.Control, BH) : ((0, WS.e)(this, DS)[DS] = BH, void(0, WS.e)(this, Hh)[Hh]());
+           if (!(0, ZQ.e)(this, LQ)[LQ]) return (0, ZQ.e)(this, FQ)[FQ] ? void(0, ZQ.e)(this, Jo)[Jo](zB.Xc.Control, OB) : ((0, ZQ.e)(this, aQ)[aQ] = OB, void(0, ZQ.e)(this, Bo)[Bo]());
```

#### 631. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6001` → after: `L6001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6001) · [Before (L6001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6001)

```diff
-         } else(0, WS.e)(this, qS)[qS] || this.deps.coreCommand(GH.Mc.Control, BH)
+         } else(0, ZQ.e)(this, gQ)[gQ] || this.deps.coreCommand(zB.Xc.Control, OB)
```

#### 632. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6007` → after: `L6007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6007) · [Before (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6007)

```diff
-         (0, WS.e)(this, Ch)[Ch](GH.Mc.FilePartDone, function(HH, BH) {
+         (0, ZQ.e)(this, Jo)[Jo](zB.Xc.FilePartDone, function(BB, OB) {
```

#### 633. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6014` → after: `L6014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6014) · [Before (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6014)

```diff
-         return (0, WS.e)(this, Ch)[Ch](GH.Mc.FileDone, function(HH) {
+         return (0, ZQ.e)(this, Jo)[Jo](zB.Xc.FileDone, function(BB) {
```

#### 634. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6029` → after: `L6029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6029) · [Before (L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6029)

```diff
-         if (!BH || !LH) return void(null === HH || void 0 === HH || HH.resolve((0, WS.e)(this, eS)[eS] ? "trapped" : "hX"));
+         if (!OB || !GB) return void(null === BB || void 0 === BB || BB.resolve((0, ZQ.e)(this, LQ)[LQ] ? "trapped" : "GP"));
```

#### 635. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6032` → after: `L6032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6032) · [Before (L6032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6032)

```diff
-         } = this.deps, rH = AH.sSH(2);
+         } = this.deps, DB = YB.DoB(2);
```

#### 636. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6038` → after: `L6038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6038) · [Before (L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6038)

```diff
-           CH = null !== (XH = HH[rH >>> 2]) && void 0 !== XH ? XH : 0, EH = null !== (GH = HH[1 + (rH >>> 2)]) && void 0 !== GH ? GH : 0
+           JB = null !== (PB = BB[DB >>> 2]) && void 0 !== PB ? PB : 0, MB = null !== (zB = BB[1 + (DB >>> 2)]) && void 0 !== zB ? zB : 0
```

#### 637. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6045` → after: `L6045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6045) · [Before (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6045)

```diff
-           SH = BH.step(), hH = BH.JSH(), tH = BH.iSH(), zH = BH.pSH()
+           QB = OB.step(), oB = OB.QoB(), jB = OB.ooB(), yB = OB.joB()
```

#### 638. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6047` → after: `L6047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6047) · [Before (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6047)

```diff
-           if (!(0, WS.e)(this, xh)[xh](YH)) throw null === HH || void 0 === HH || HH.resolve("hX"), YH;
+           if (!(0, ZQ.e)(this, Wo)[Wo](lB)) throw null === BB || void 0 === BB || BB.resolve("GP"), lB;
```

#### 639. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6051` → after: `L6051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6051) · [Before (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6051)

```diff
-           const HH = AH.ySH(2, SH);
+           const BB = YB.yoB(2, QB);
```

#### 640. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6059` → after: `L6059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6059) · [Before (L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6059)

```diff
-             throw null === HH || void 0 === HH || HH.resolve("hX"), YH
+             throw null === BB || void 0 === BB || BB.resolve("GP"), lB
```

#### 641. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6066` → after: `L6066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6066) · [Before (L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6066)

```diff
-         if (!(0, WS.e)(this, pS)[pS]() && !(0, WS.e)(this, yS)[yS]()) return (0, WS.e)(this, Eh)[Eh](), void(null === HH || void 0 === HH || HH.resolve("hX"));
+         if (!(0, ZQ.e)(this, xQ)[xQ]() && !(0, ZQ.e)(this, tQ)[tQ]()) return (0, ZQ.e)(this, Mo)[Mo](), void(null === BB || void 0 === BB || BB.resolve("GP"));
```

#### 642. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6075` → after: `L6075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6075) · [Before (L6075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6075)

```diff
-       (0, WS.e)(this, Ch)[Ch](GH.Mc.Session, function(HH) {
+       (0, ZQ.e)(this, Jo)[Jo](zB.Xc.Session, function(BB) {
```

#### 643. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6127` → after: `L6127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6127) · [Before (L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6127)

```diff
-       if (!(0, WS.e)(this, KS)[KS]) return Promise.resolve((0, WS.e)(this, eS)[eS] ? "trapped" : "hX");
+       if (!(0, ZQ.e)(this, FQ)[FQ]) return Promise.resolve((0, ZQ.e)(this, LQ)[LQ] ? "trapped" : "GP");
```

#### 644. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6156` → after: `L6156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6156) · [Before (L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6156)

```diff
-           rH = (0, WS.e)(this, Mh)[Mh]((() => AH.HhH()));
+           DB = (0, ZQ.e)(this, Ro)[Ro]((() => YB.JoB()));
```

#### 645. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6158-L6159` → after: `L6158-L6159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6158-L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6158-L6159) · [Before (L6158-L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6158-L6159)

```diff
-         const SH = this.deps.core.BhH();
-         if (rH !== SH) return await (0, WS.e)(this, Qh)[Qh](new Error(`recorder port version ${rH}, the core's ${SH}`)), !1;
+         const QB = this.deps.core.MoB();
+         if (DB !== QB) return await (0, ZQ.e)(this, Zo)[Zo](new Error(`recorder port version ${DB}, the core's ${QB}`)), !1;
```

#### 646. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6164` → after: `L6164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6164) · [Before (L6164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6164)

```diff
-         if (!(0, WS.e)(this, Mh)[Mh]((() => ((0, WS.e)(this, KS)[KS] = new BH.LhH, (0, WS.e)(this, cS)[cS] = BH.dSH(), !0)))) return !1;
+         if (!(0, ZQ.e)(this, Ro)[Ro]((() => ((0, ZQ.e)(this, FQ)[FQ] = new OB.PoB, (0, ZQ.e)(this, iQ)[iQ] = OB.GoB(), !0)))) return !1;
```

#### 647. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6167` → after: `L6167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6167) · [Before (L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6167)

```diff
-         return (0, WS.e)(this, DS)[DS] = null, HH && (0, WS.e)(this, Ch)[Ch](GH.Mc.Control, HH), (0, WS.e)(this, hh)[hh]()
+         return (0, ZQ.e)(this, aQ)[aQ] = null, BB && (0, ZQ.e)(this, Jo)[Jo](zB.Xc.Control, BB), (0, ZQ.e)(this, oo)[oo]()
```

#### 648. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6174` → after: `L6174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6174) · [Before (L6174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6174)

```diff
-       return this.deps.core.AhH(0), 1 === this.deps.core.AhH(1) || ((0, WS.e)(this, Eh)[Eh](), this.deps.failed(oS), !1)
+       return this.deps.core.zoB(0), 1 === this.deps.core.zoB(1) || ((0, ZQ.e)(this, Mo)[Mo](), this.deps.failed(KQ), !1)
```

#### 649. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6178` → after: `L6178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6178) · [Before (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6178)

```diff
-       (0, WS.e)(this, nS)[nS] && (0, WS.e)(this, Ch)[Ch](GH.Mc.Prefs, OS((0, WS.e)(this, nS)[nS].on, (0, WS.e)(this, nS)[nS].seconds)), (0, WS.e)(this, FS)[FS] && (0, WS.e)(this, JS)[JS]((0, WS.e)(this, FS)[FS])
+       (0, ZQ.e)(this, cQ)[cQ] && (0, ZQ.e)(this, Jo)[Jo](zB.Xc.Prefs, UQ((0, ZQ.e)(this, cQ)[cQ].on, (0, ZQ.e)(this, cQ)[cQ].seconds)), (0, ZQ.e)(this, hQ)[hQ] && (0, ZQ.e)(this, vQ)[vQ]((0, ZQ.e)(this, hQ)[hQ])
```

#### 650. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6186` → after: `L6186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6186) · [Before (L6186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6186)

```diff
-           return null !== (HH = null === (BH = (0, WS.e)(this, nS)[nS]) || void 0 === BH ? void 0 : BH.seconds) && void 0 !== HH ? HH : 0
+           return null !== (BB = null === (OB = (0, ZQ.e)(this, cQ)[cQ]) || void 0 === OB ? void 0 : OB.seconds) && void 0 !== BB ? BB : 0
```

#### 651. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6191` → after: `L6191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6191) · [Before (L6191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6191)

```diff
-         Mu: () => (0, WS.e)(this, qS)[qS],
+         Vp: () => (0, ZQ.e)(this, gQ)[gQ],
```

#### 652. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6201` → after: `L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6201) · [Before (L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6201)

```diff
-         const rH = LH.aSH(BH.length);
+         const DB = GB.YoB(OB.length);
```

#### 653. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6207` → after: `L6207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6207) · [Before (L6207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6207)

```diff
-       (0, WS.e)(this, RS)[RS]++, (0, WS.e)(this, rh)[rh]("hX"), (0, WS.e)(this, sS)[sS].stop(), this.deps.core.AhH(0), (0, WS.e)(this, Xh)[Xh](), (0, WS.e)(this, eS)[eS] || ((0, WS.e)(this, lS)[lS] = null, this.deps.unload())
+       (0, ZQ.e)(this, wQ)[wQ]++, (0, ZQ.e)(this, Do)[Do]("GP"), (0, ZQ.e)(this, HQ)[HQ].stop(), this.deps.core.zoB(0), (0, ZQ.e)(this, Po)[Po](), (0, ZQ.e)(this, LQ)[LQ] || ((0, ZQ.e)(this, IQ)[IQ] = null, this.deps.unload())
```

#### 654. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6255` → after: `L6255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6255) · [Before (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6255)

```diff
-       return HH instanceof WebAssembly.RuntimeError && ((0, WS.e)(this, eS)[eS] = !0, (0, WS.e)(this, KS)[KS] = null, (0, WS.e)(this, cS)[cS] = null, (0, WS.e)(this, aS)[aS] = null, (0, WS.e)(this, lS)[lS] = null, (0, WS.e)(this, DS)[DS] = null, (0, WS.e)(this, rh)[rh]("trapped") … [truncated]
+       return BB instanceof WebAssembly.RuntimeError && ((0, ZQ.e)(this, LQ)[LQ] = !0, (0, ZQ.e)(this, FQ)[FQ] = null, (0, ZQ.e)(this, iQ)[iQ] = null, (0, ZQ.e)(this, CQ)[CQ] = null, (0, ZQ.e)(this, IQ)[IQ] = null, (0, ZQ.e)(this, aQ)[aQ] = null, (0, ZQ.e)(this, Do)[Do]("trapped") … [truncated]
```

#### 655. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6257` → after: `L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6257) · [Before (L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6257)

```diff
-     var wh = LH(39568);
+     var bo = GB(39342);
```

#### 656. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6259` → after: `L6259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6259) · [Before (L6259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6259)

```diff
-       ["skyblock", () => LH.e(59).then((() => LH(39559)))]
+       ["skyblock", () => GB.e(59).then((() => GB(39338)))]
```

#### 657. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6266` → after: `L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6266) · [Before (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6266)

```diff
-         if (!BH) throw new Error(`${HH}'s replay hook module registered no hook`);
+         if (!OB) throw new Error(`${BB}'s replay hook module registered no hook`);
```

#### 658. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6423` → after: `L6423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6423) · [Before (L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6423)

```diff
-         if ((0, WS.e)(this, ph)[ph]) return GH.$c.ModuleTrap;
+         if ((0, ZQ.e)(this, Bj)[Bj]) return zB.jd.ModuleTrap;
```

#### 659. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6434-L6437` → after: `L6434-L6437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6434-L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6434-L6437) · [Before (L6434-L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6434-L6437)

```diff
-           if ((0, WS.e)(this, ph)[ph]) return GH.$c.ModuleTrap;
-           const AH = LH.HhH(),
-             SH = this.deps.core.BhH();
-           if (AH !== SH) return (0, WS.e)(this, zt)[zt](new Error(`replay port version ${AH}, the core's ${SH}`), BH);
+           if ((0, ZQ.e)(this, Bj)[Bj]) return zB.jd.ModuleTrap;
+           const YB = GB.JoB(),
+             QB = this.deps.core.MoB();
+           if (YB !== QB) return (0, ZQ.e)(this, Mj)[Mj](new Error(`replay port version ${YB}, the core's ${QB}`), OB);
```

#### 660. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6443-L6444` → after: `L6443-L6444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6443-L6444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6443-L6444) · [Before (L6443-L6444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6443-L6444)

```diff
-               (0, WS.e)(this, Jh)[Jh] = new HH.rhH, (0, WS.e)(this, ih)[ih] = HH.ShH()
-             }))) return GH.$c.ModuleTrap
+               (0, ZQ.e)(this, xo)[xo] = new BB.poB, (0, ZQ.e)(this, to)[to] = BB.qoB()
+             }))) return zB.jd.ModuleTrap
```

#### 661. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6451` → after: `L6451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6451) · [Before (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6451)

```diff
-         })) ? AH ? "opening" : GH.$c.TooLarge : GH.$c.ModuleTrap
+         })) ? YB ? "opening" : zB.jd.TooLarge : zB.jd.ModuleTrap
```

#### 662. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6459` → after: `L6459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6459) · [Before (L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6459)

```diff
-         } = this.deps, rH = AH.hhH(HH);
+         } = this.deps, DB = YB.ZoB(BB);
```

#### 663. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6464` → after: `L6464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6464) · [Before (L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6464)

```diff
-           hH = BH.step(SH, rH - SH), tH = BH.JSH()
+           oB = OB.step(QB, DB - QB), jB = OB.QoB()
```

#### 664. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6468` → after: `L6468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6468) · [Before (L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6468)

```diff
-         const zH = AH.ySH(1, hH);
+         const yB = YB.yoB(1, oB);
```

#### 665. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6474` → after: `L6474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6474) · [Before (L6474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6474)

```diff
-           return (0, WS.e)(this, Ct)[Ct] ? (0, WS.e)(this, At)[At] = "drop" : (0, WS.e)(this, tt)[tt](), void AH.thH(GH.$c.Port)
+           return (0, ZQ.e)(this, Pj)[Pj] ? (0, ZQ.e)(this, Qj)[Qj] = "drop" : (0, ZQ.e)(this, Jj)[Jj](), void YB.NoB(zB.jd.Port)
```

#### 666. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6496` → after: `L6496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6496) · [Before (L6496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6496)

```diff
-           LH.zhH(HH, BH)
+           GB.RoB(BB, OB)
```

#### 667. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6501` → after: `L6501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6501) · [Before (L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6501)

```diff
-           LH.ChH(HH[0], HH[1], HH[2], BH[0], BH[1], BH[2])
+           GB.WoB(BB[0], BB[1], BB[2], OB[0], OB[1], OB[2])
```

#### 668. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6506` → after: `L6506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6506) · [Before (L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6506)

```diff
-           LH.EhH(HH, BH)
+           GB.VoB(BB, OB)
```

#### 669. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6511` → after: `L6511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6511) · [Before (L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6511)

```diff
-           LH.XhH(HH, BH)
+           GB.SoB(BB, OB)
```

#### 670. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6516` → after: `L6516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6516) · [Before (L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6516)

```diff
-           LH.GhH(HH, BH)
+           GB.noB(BB, OB)
```

#### 671. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6530` → after: `L6530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6530) · [Before (L6530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6530)

```diff
-             BH = HH.save(), 0 !== BH && (LH = new Uint8Array(AH.buffer, HH.YhH(), HH.uhH()).slice())
+             OB = BB.save(), 0 !== OB && (GB = new Uint8Array(YB.buffer, BB.UoB(), BB.foB()).slice())
```

#### 672. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6540-L6541` → after: `L6540-L6541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6540-L6541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6540-L6541) · [Before (L6540-L6541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6540-L6541)

```diff
-               const SH = AH.QhH();
-               0 !== SH && HH >= 0 && BH >= 0 && HH + BH <= SH && (LH = new Uint8Array(rH.buffer, AH.WhH() + HH, BH))
+               const QB = YB.koB();
+               0 !== QB && BB >= 0 && OB >= 0 && BB + OB <= QB && (GB = new Uint8Array(DB.buffer, YB.doB() + BB, OB))
```

#### 673. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6547` → after: `L6547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6547) · [Before (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6547)

```diff
-               HH.MhH()
+               BB.KoB()
```

#### 674. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6560` → after: `L6560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6560) · [Before (L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6560)

```diff
-           BH.xhH(HH)
+           OB.uoB(BB)
```

#### 675. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6565` → after: `L6565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6565) · [Before (L6565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6565)

```diff
-           BH.vhH(HH)
+           OB.moB(BB)
```

#### 676. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6592` → after: `L6592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6592) · [Before (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6592)

```diff
-       }) ? "reloading" : GH.$c.ModuleLoad
+       }) ? "reloading" : zB.jd.ModuleLoad
```

#### 677. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6622` → after: `L6622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6622) · [Before (L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6622)

```diff
-       (0, WS.e)(this, ph)[ph] = !0, (0, WS.e)(this, Jh)[Jh] = null, (0, WS.e)(this, ih)[ih] = null, (0, WS.e)(this, sh)[sh] = null, this.deps.crash(this.deps.markTrapped(HH)), this.deps.core.thH(GH.$c.ModuleTrap)
+       (0, ZQ.e)(this, Bj)[Bj] = !0, (0, ZQ.e)(this, xo)[xo] = null, (0, ZQ.e)(this, to)[to] = null, (0, ZQ.e)(this, so)[so] = null, this.deps.crash(this.deps.markTrapped(BB)), this.deps.core.NoB(zB.jd.ModuleTrap)
```

#### 678. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6624-L6625` → after: `L6624-L6625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6624-L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6624-L6625) · [Before (L6624-L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6624-L6625)

```diff
-     var Vt = LH(7014),
-       Ot = LH(42339);
+     var fj = GB(6997),
+       kj = GB(42042);
```

#### 679. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6636` → after: `L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6636) · [Before (L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6636)

```diff
-         case GH.gd.FlyingText: {
+         case zB.qd.FlyingText: {
```

#### 680. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6641` → after: `L6641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6641) · [Before (L6641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6641)

```diff
-             return void console.warn(`${bt} a replay's flying text isn't JSON`, CH)
+             return void console.warn(`${dj} a replay's flying text isn't JSON`, JB)
```

#### 681. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6643` → after: `L6643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6643) · [Before (L6643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6643)

```diff
-           hH.k.AX("forceFlyingMiddleMessage", {
+           oB.o.tM("forceFlyingMiddleMessage", {
```

#### 682. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6645` → after: `L6645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6645) · [Before (L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6645)

```diff
-             dr: HH.dr,
+             VB: BB.VB,
```

#### 683. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6647` → after: `L6647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6647) · [Before (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6647)

```diff
-             ar: HH.ar
+             SB: BB.SB
```

#### 684. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6651-L6652` → after: `L6651-L6652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6651-L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6651-L6652) · [Before (L6651-L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6651-L6652)

```diff
-         case GH.gd.PlayerKilled:
-           (0, Ot.e)({
+         case zB.qd.PlayerKilled:
+           (0, kj.f)({
```

#### 685. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6655` → after: `L6655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6655) · [Before (L6655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6655)

```diff
-               deadEId: null !== (BH = mt(HH.dead)) && void 0 !== BH ? BH : "",
+               deadEId: null !== (OB = uj(BB.dead)) && void 0 !== OB ? OB : "",
```

#### 686. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6657` → after: `L6657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6657) · [Before (L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6657)

```diff
-               withItem: null !== (LH = HH.withItem) && void 0 !== LH ? LH : "",
+               withItem: null !== (GB = BB.withItem) && void 0 !== GB ? GB : "",
```

#### 687. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6662-L6663` → after: `L6662-L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6662-L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6662-L6663) · [Before (L6662-L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6662-L6663)

```diff
-         case GH.gd.Killfeed:
-           (0, Ot.e)({
+         case zB.qd.Killfeed:
+           (0, kj.f)({
```

#### 688. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6668-L6669` → after: `L6668-L6669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6668-L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6668-L6669) · [Before (L6668-L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6668-L6669)

```diff
-                 name: null !== (AH = HH.killerName) && void 0 !== AH ? AH : void 0,
-                 colour: null !== (rH = HH.killerColour) && void 0 !== rH ? rH : void 0
+                 name: null !== (YB = BB.killerName) && void 0 !== YB ? YB : void 0,
+                 colour: null !== (DB = BB.killerColour) && void 0 !== DB ? DB : void 0
```

#### 689. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6673-L6674` → after: `L6673-L6674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6673-L6674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6673-L6674) · [Before (L6673-L6674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6673-L6674)

```diff
-                 name: null !== (SH = HH.victimName) && void 0 !== SH ? SH : void 0,
-                 colour: null !== (tH = HH.victimColour) && void 0 !== tH ? tH : void 0
+                 name: null !== (QB = BB.victimName) && void 0 !== QB ? QB : void 0,
+                 colour: null !== (jB = BB.victimColour) && void 0 !== jB ? jB : void 0
```

#### 690. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6676` → after: `L6676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6676) · [Before (L6676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6676)

```diff
-               withItem: null !== (zH = HH.withItem) && void 0 !== zH ? zH : ""
+               withItem: null !== (yB = BB.withItem) && void 0 !== yB ? yB : ""
```

#### 691. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6686` → after: `L6686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6686) · [Before (L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6686)

```diff
-       return Number.isInteger(BH) && BH > Zr && BH <= 2147483647 ? BH : null
+       return Number.isInteger(OB) && OB > TD && OB <= 2147483647 ? OB : null
```

#### 692. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6698` → after: `L6698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6698) · [Before (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6698)

```diff
-       const BH = (0, LS.k)(hA.nc.PlayerKilled, (BH => {
+       const OB = (0, GQ.g)(oY.oc.PlayerKilled, (OB => {
```

#### 693. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6700-L6701` → after: `L6700-L6701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6700-L6701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6700-L6701) · [Before (L6700-L6701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6700-L6701)

```diff
-           const rH = (0, BS.i)(BH);
-           if (!(0, BS.c)(rH)) return;
+           const DB = (0, OQ.l)(OB);
+           if (!(0, OQ.e)(DB)) return;
```

#### 694. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6708` → after: `L6708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6708) · [Before (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6708)

```diff
-           HH.recordPlayerKilled(null !== (LH = ft(SH)) && void 0 !== LH ? LH : Zr, null !== (AH = ft(hH)) && void 0 !== AH ? AH : Zr, "number" === typeof zH ? zH : 0, "string" === typeof tH ? tH : "")
+           BB.recordPlayerKilled(null !== (GB = Fj(QB)) && void 0 !== GB ? GB : TD, null !== (YB = Fj(oB)) && void 0 !== YB ? YB : TD, "number" === typeof yB ? yB : 0, "string" === typeof jB ? jB : "")
```

#### 695. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6710-L6712` → after: `L6710-L6712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6710-L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6710-L6712) · [Before (L6710-L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6710-L6712)

```diff
-         LH = (0, LS.k)(hA.nc.CustomKillfeed, (BH => {
-           const LH = (0, BS.i)(BH);
-           if (!(0, BS.c)(LH) || !(0, BS.c)(LH.killer) || !(0, BS.c)(LH.victim)) return;
+         GB = (0, GQ.g)(oY.oc.CustomKillfeed, (OB => {
+           const GB = (0, OQ.l)(OB);
+           if (!(0, OQ.e)(GB) || !(0, OQ.e)(GB.killer) || !(0, OQ.e)(GB.victim)) return;
```

#### 696. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6718` → after: `L6718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6718) · [Before (L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6718)

```diff
-           HH.recordKillfeed(lt(AH), lt(rH), "string" === typeof SH ? SH : null)
+           BB.recordKillfeed(ij(YB), ij(DB), "string" === typeof QB ? QB : null)
```

#### 697. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6727` → after: `L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6727) · [Before (L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6727)

```diff
-       return void 0 === HH || null === HH ? null : null !== (BH = JSON.stringify(HH)) && void 0 !== BH ? BH : null
+       return void 0 === BB || null === BB ? null : null !== (OB = JSON.stringify(BB)) && void 0 !== OB ? OB : null
```

#### 698. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6736` → after: `L6736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6736) · [Before (L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6736)

```diff
-         } = AH.c.get("clientEscMenuOptions"), SH = `${LH}:${rH}`;
+         } = YB.c.get("clientEscMenuOptions"), QB = `${GB}:${DB}`;
```

#### 699. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6739` → after: `L6739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6739) · [Before (L6739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6739)

```diff
-       return LH(), (0, hH.m)("appManagerUpdated|clientEscMenuOptions", LH)
+       return GB(), (0, oB.p)("appManagerUpdated|clientEscMenuOptions", GB)
```

#### 700. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6746` → after: `L6746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6746) · [Before (L6746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6746)

```diff
-         return HH.isStopped ? LH : BH(...arguments)
+         return BB.isStopped ? GB : OB(...arguments)
```

#### 701. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6758` → after: `L6758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6758) · [Before (L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6758)

```diff
-       return LH.e(76).then((() => LH(64318)))
+       return GB.e(76).then((() => GB(64058)))
```

#### 702. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6762` → after: `L6762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6762) · [Before (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6762)

```diff
-       (0, qr.i)({
+       (0, gD.h)({
```

#### 703. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6774` → after: `L6774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6774) · [Before (L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6774)

```diff
-         } = HH, SH = () => HH.memory().buffer, hH = () => BH.isStopped ? null : BH.rings.cmd, tH = Nt(BH, ((HH, BH) => rH.ySH(HH, BH)), 0), zH = () => rH.BhH();
+         } = BB, QB = () => BB.memory().buffer, oB = () => OB.isStopped ? null : OB.rings.cmd, jB = Ej(OB, ((BB, OB) => DB.yoB(BB, OB)), 0), yB = () => DB.MoB();
```

#### 704. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6778-L6782` → after: `L6778-L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6778-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6778-L6782) · [Before (L6778-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6778-L6782)

```diff
-             hhH: Nt(BH, (HH => rH.hhH(HH)), -1),
-             ySH: tH,
-             BhH: zH,
-             thH: Nt(BH, (HH => {
-               rH.thH(HH)
+             ZoB: Ej(OB, (BB => DB.ZoB(BB)), -1),
+             yoB: jB,
+             MoB: yB,
+             NoB: Ej(OB, (BB => {
+               DB.NoB(BB)
```

#### 705. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6786` → after: `L6786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6786) · [Before (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6786)

```diff
-           load: async () => (CH = await LH.e(77).then((() => LH(64329))), CH.loadReplayModule()),
+           load: async () => (JB = await GB.e(77).then((() => GB(64066))), JB.loadReplayModule()),
```

#### 706. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6800-L6803` → after: `L6800-L6803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6800-L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6800-L6803) · [Before (L6800-L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6800-L6803)

```diff
-             AhH: Nt(BH, (HH => rH.AhH(HH)), 0),
-             sSH: Nt(BH, (HH => rH.sSH(HH)), 0),
-             ySH: tH,
-             BhH: zH
+             zoB: Ej(OB, (BB => DB.zoB(BB)), 0),
+             DoB: Ej(OB, (BB => DB.DoB(BB)), 0),
+             yoB: jB,
+             MoB: yB
```

#### 707. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6813` → after: `L6813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6813) · [Before (L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6813)

```diff
-               console.warn(`${It} the recorder module didn't prefetch, so a save loads it:`, HH)
+               console.warn(`${Ij} the recorder module didn't prefetch, so a save loads it:`, BB)
```

#### 708. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6823` → after: `L6823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6823) · [Before (L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6823)

```diff
-             return null !== (HH = null === (BH = EH) || void 0 === BH ? void 0 : BH.recorderMemoryBytes()) && void 0 !== HH ? HH : 0
+             return null !== (BB = null === (OB = MB) || void 0 === OB ? void 0 : OB.recorderMemoryBytes()) && void 0 !== BB ? BB : 0
```

#### 709. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6842-L6844` → after: `L6842-L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6842-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6842-L6844) · [Before (L6842-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6842-L6844)

```diff
-             RSH: Nt(BH, (HH => rH.RSH(HH)), 0),
-             nSH: Nt(BH, (() => {
-               rH.nSH()
+             HQB: Ej(OB, (BB => DB.HQB(BB)), 0),
+             sQB: Ej(OB, (() => {
+               DB.sQB()
```

#### 710. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6846-L6847` → after: `L6846-L6847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6846-L6847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6846-L6847) · [Before (L6846-L6847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6846-L6847)

```diff
-             DW: Nt(BH, (() => rH.DW()), 0),
-             jSH: Nt(BH, (() => rH.jSH()), 0)
+             eZ: Ej(OB, (() => DB.eZ()), 0),
+             vQB: Ej(OB, (() => DB.vQB()), 0)
```

#### 711. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6860` → after: `L6860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6860) · [Before (L6860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6860)

```diff
-             console.warn(`${It} the recorded game's replay hooks:`, HH)
+             console.warn(`${Ij} the recorded game's replay hooks:`, BB)
```

#### 712. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6869` → after: `L6869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6869) · [Before (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6869)

```diff
-           notify: qr.i,
+           notify: gD.h,
```

#### 713. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6881` → after: `L6881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6881) · [Before (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6881)

```diff
-               const rH = hA.Ab[BH.key];
+               const DB = oY.Cb[OB.key];
```

#### 714. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6883-L6884` → after: `L6883-L6884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6883-L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6883-L6884) · [Before (L6883-L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6883-L6884)

```diff
-               let SH = null !== (LH = BH.value) && void 0 !== LH ? LH : JSON.parse(JSON.stringify(null !== (AH = Vt.d[rH]) && void 0 !== AH ? AH : null));
-               if (null !== BH.value && BH.key < hA.Xb.Environment && "string" === typeof SH) try {
+               let QB = null !== (GB = OB.value) && void 0 !== GB ? GB : JSON.parse(JSON.stringify(null !== (YB = fj.b[DB]) && void 0 !== YB ? YB : null));
+               if (null !== OB.value && OB.key < oY.$b.Environment && "string" === typeof QB) try {
```

#### 715. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6887` → after: `L6887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6887) · [Before (L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6887)

```diff
-                 return void console.warn(`${bt} a replay's ${rH} isn't JSON`, hH)
+                 return void console.warn(`${dj} a replay's ${DB} isn't JSON`, oB)
```

#### 716. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6896` → after: `L6896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6896) · [Before (L6896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6896)

```diff
-             this.entityHooks.opened((0, mH.Wb)(BH)), HH.replayShaderPack(BH)
+             this.entityHooks.opened((0, dB.ac)(OB)), BB.replayShaderPack(OB)
```

#### 717. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6900` → after: `L6900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6900) · [Before (L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6900)

```diff
-             return null !== (HH = null === (LH = BH.lastHeader) || void 0 === LH ? void 0 : LH.renderPending) && void 0 !== HH ? HH : 0
+             return null !== (BB = null === (GB = OB.lastHeader) || void 0 === GB ? void 0 : GB.renderPending) && void 0 !== BB ? BB : 0
```

#### 718. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6902` → after: `L6902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6902) · [Before (L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6902)

```diff
-           viewerOpen: gr.c,
+           viewerOpen: rD.b,
```

#### 719. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6904` → after: `L6904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6904) · [Before (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6904)

```diff
-             (0, cr.k)(HH)
+             (0, iD.i)(BB)
```

#### 720. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6907` → after: `L6907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6907) · [Before (L6907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6907)

```diff
-         this.runtime = GH, AH.replay = GH.sink, (0, Nr.t)(GH);
+         this.runtime = zB, YB.replay = zB.sink, (0, XD.s)(zB);
```

#### 721. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6916-L6917` → after: `L6916-L6917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6916-L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6916-L6917) · [Before (L6916-L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6916-L6917)

```diff
-         this.freecam = YH, (0, Nr.r)(YH), this.recordedOptions = function(HH, BH) {
-           const LH = hA.Ab,
+         this.freecam = lB, (0, XD.p)(lB), this.recordedOptions = function(BB, OB) {
+           const GB = oY.Cb,
```

#### 722. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6931` → after: `L6931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6931) · [Before (L6931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6931)

```diff
-         }(GH.recorder, HH.options), this.stops = [(0, WA.k)((HH => {
+         }(zB.recorder, BB.options), this.stops = [(0, ZY.o)((BB => {
```

#### 723. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6938` → after: `L6938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6938) · [Before (L6938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6938)

```diff
-         })), (0, WA.z)(((HH, BH) => {
+         })), (0, ZY.C)(((BB, OB) => {
```

#### 724. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6951` → after: `L6951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6951) · [Before (L6951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6951)

```diff
-         }, Kt(GH.recorder), (0, AS.k)((HH => {
+         }, Lj(zB.recorder), (0, YQ.g)((BB => {
```

#### 725. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6961` → after: `L6961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6961) · [Before (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6961)

```diff
-           return !0 === (null === HH || void 0 === HH ? void 0 : HH.isOpen) ? HH : null
+           return !0 === (null === BB || void 0 === BB ? void 0 : BB.isOpen) ? BB : null
```

#### 726. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6963` → after: `L6963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6963) · [Before (L6963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6963)

```diff
-         (0, er.h)({
+         (0, LD.g)({
```

#### 727. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6967` → after: `L6967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6967) · [Before (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6967)

```diff
-             return null !== (HH = null === (BH = uH()) || void 0 === BH ? void 0 : BH.id) && void 0 !== HH ? HH : null
+             return null !== (BB = null === (OB = pB()) || void 0 === OB ? void 0 : OB.id) && void 0 !== BB ? BB : null
```

#### 728. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6971` → after: `L6971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6971) · [Before (L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6971)

```diff
-             return null !== (HH = null === (BH = uH()) || void 0 === BH ? void 0 : BH.saveRefusal) && void 0 !== HH ? HH : null
+             return null !== (BB = null === (OB = pB()) || void 0 === OB ? void 0 : OB.saveRefusal) && void 0 !== BB ? BB : null
```

#### 729. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6975` → after: `L6975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6975) · [Before (L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6975)

```diff
-             return null !== (HH = null === (BH = uH()) || void 0 === BH ? void 0 : BH.save()) && void 0 !== HH ? HH : Promise.resolve(null)
+             return null !== (BB = null === (OB = pB()) || void 0 === OB ? void 0 : OB.save()) && void 0 !== BB ? BB : Promise.resolve(null)
```

#### 730. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6979` → after: `L6979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6979) · [Before (L6979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6979)

```diff
-             return null !== (HH = null === (BH = GH.currentViewer) || void 0 === BH ? void 0 : BH.fileHandle) && void 0 !== HH ? HH : null
+             return null !== (BB = null === (OB = zB.currentViewer) || void 0 === OB ? void 0 : OB.fileHandle) && void 0 !== BB ? BB : null
```

#### 731. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6989` → after: `L6989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6989) · [Before (L6989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6989)

```diff
-           if (HH.phase === GH.C.Activated) {
+           if (BB.phase === zB.E.Activated) {
```

#### 732. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6993` → after: `L6993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6993) · [Before (L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6993)

```diff
-               lobbyType: (0, oH.v)(BH.lobbyName),
+               lobbyType: (0, KB.B)(OB.lobbyName),
```

#### 733. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6997` → after: `L6997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6997) · [Before (L6997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6997)

```diff
-           } else HH.phase !== GH.C.Left && HH.phase !== GH.C.Closed || HH.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
+           } else BB.phase !== zB.E.Left && BB.phase !== zB.E.Closed || BB.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
```

#### 734. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7003` → after: `L7003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7003) · [Before (L7003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7003)

```diff
-           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Nr.n)() === this.runtime && (0, Nr.t)(null), (0, Nr.j)() === this.freecam && (0, Nr.r)(null), (0, er.h)(Rt), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
+           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, XD.l)() === this.runtime && (0, XD.s)(null), (0, XD.i)() === this.freecam && (0, XD.p)(null), (0, LD.g)(cj), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
```

#### 735. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7016` → after: `L7016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7016) · [Before (L7016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7016)

```diff
-             return BH.inPlayback || (0, WA.L)().leaveGame(null), BH
+             return OB.inPlayback || (0, ZY.O)().leaveGame(null), OB
```

#### 736. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7019` → after: `L7019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7019) · [Before (L7019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7019)

```diff
-           throw console.warn(`${It} the replay viewer didn't load`, rH), new Error(qr.e.viewerLoadFailed.text)
+           throw console.warn(`${Ij} the replay viewer didn't load`, DB), new Error(gD.e.viewerLoadFailed.text)
```

#### 737. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7025` → after: `L7025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7025) · [Before (L7025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7025)

```diff
-     var Dt = LH(2036);
+     var Tj = GB(2050);
```

#### 738. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7033` → after: `L7033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7033) · [Before (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7033)

```diff
-           aux: HH.reset ? GH.cc.ResetFirst : 0,
+           aux: BB.reset ? zB.kc.ResetFirst : 0,
```

#### 739. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7110-L7114` → after: `L7110-L7114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7110-L7114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7110-L7114) · [Before (L7110-L7114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7110-L7114)

```diff
-     var yt = LH(37110),
-       Hz = LH(37157),
-       Bz = LH(42271),
-       Lz = LH(42307),
-       Az = LH(3171);
+     var By = GB(36945),
+       Oy = GB(36991),
+       Gy = GB(41964),
+       Yy = GB(42006),
+       Dy = GB(3210);
```

#### 740. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7118` → after: `L7118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7118) · [Before (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7118)

```diff
-         this.host = HH, this.sets = new Map, this.table = [], this.generation = 0, this.Mu = !1
+         this.host = BB, this.sets = new Map, this.table = [], this.generation = 0, this.Vp = !1
```

#### 741. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7122` → after: `L7122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7122) · [Before (L7122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7122)

```diff
-           if (HH.byteLength !== GH.pd) return null;
+           if (BB.byteLength !== zB.vd) return null;
```

#### 742. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7129` → after: `L7129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7129) · [Before (L7129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7129)

```diff
-         BH && !this.Mu && (BH.release !== GH.qd && this.release(BH.release), BH.want !== GH.qd && this.want(BH.want))
+         OB && !this.Vp && (OB.release !== zB.xd && this.release(OB.release), OB.want !== zB.xd && this.want(OB.want))
```

#### 743. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7132` → after: `L7132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7132) · [Before (L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7132)

```diff
-         if (!this.Mu) {
+         if (!this.Vp) {
```

#### 744. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7138-L7139` → after: `L7138-L7139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7138-L7139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7138-L7139) · [Before (L7138-L7139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7138-L7139)

```diff
-         if (this.Mu) return;
-         this.Mu = !0, this.generation++, this.table = [];
+         if (this.Vp) return;
+         this.Vp = !0, this.generation++, this.table = [];
```

#### 745. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7145` → after: `L7145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7145) · [Before (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7145)

```diff
-             this.host.zrH(HH)
+             this.host.NDB(BB)
```

#### 746. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7162` → after: `L7162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7162) · [Before (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7162)

```diff
-         if (!LH || 1 !== LH.urls.length && LH.urls.length !== hA.ic.CubeFaces) return this.host.sendReady(zz(HH)), void this.host.onLoadFailed(HH, "", new Error(`no image set ${HH}`));
+         if (!GB || 1 !== GB.urls.length && GB.urls.length !== oY.lc.CubeFaces) return this.host.sendReady(Jy(BB)), void this.host.onLoadFailed(BB, "", new Error(`no image set ${BB}`));
```

#### 747. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7180` → after: `L7180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7180) · [Before (L7180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7180)

```diff
-           if (!zH || !LH.wanted) return this.Mu ? void this.releaseAfterDispose(tH.map(hz)) : (this.releaseAll(tH.map(hz)), void(zH && this.sets.delete(HH)));
+           if (!yB || !GB.wanted) return this.Vp ? void this.releaseAfterDispose(jB.map(jy)) : (this.releaseAll(jB.map(jy)), void(yB && this.sets.delete(BB)));
```

#### 748. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7187` → after: `L7187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7187) · [Before (L7187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7187)

```diff
-         const [rH] = AH, SH = [rH.width, rH.height], hH = AH.every((HH => HH.width === SH[0] && HH.height === SH[1])), tH = BH.urls.length === hA.ic.CubeFaces;
+         const [DB] = YB, QB = [DB.width, DB.height], oB = YB.every((BB => BB.width === QB[0] && BB.height === QB[1])), jB = OB.urls.length === oY.lc.CubeFaces;
```

#### 749. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7190-L7191` → after: `L7190-L7191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7190-L7191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7190-L7191) · [Before (L7190-L7191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7190-L7191)

```diff
-           const LH = AH.map((HH => `${HH.width}x${HH.height}`));
-           return void this.host.onLoadFailed(HH, BH.urls[0], new Error(`set ${HH}'s images can't make its texture: ${LH.join(", ")}`))
+           const GB = YB.map((BB => `${BB.width}x${BB.height}`));
+           return void this.host.onLoadFailed(BB, OB.urls[0], new Error(`set ${BB}'s images can't make its texture: ${GB.join(", ")}`))
```

#### 750. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7207` → after: `L7207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7207) · [Before (L7207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7207)

```diff
-         for (const BH of HH) this.host.zrH(BH)
+         for (const OB of BB) this.host.NDB(OB)
```

#### 751. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7211` → after: `L7211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7211) · [Before (L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7211)

```diff
-           this.host.zrH(BH)
+           this.host.NDB(OB)
```

#### 752. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7221` → after: `L7221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7221) · [Before (L7221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7221)

```diff
-       const AH = new Uint8Array(hA.ic.SkyImagesReadyBytes),
+       const YB = new Uint8Array(oY.lc.SkyImagesReadyBytes),
```

#### 753. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7223` → after: `L7223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7223) · [Before (L7223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7223)

```diff
-       return rH.setUint16(0, HH, !0), rH.setUint16(2, BH.length, !0), rH.setUint16(4, LH[0], !0), rH.setUint16(6, LH[1], !0), BH.slice(0, hA.ic.CubeFaces).forEach(((HH, BH) => {
+       return DB.setUint16(0, BB, !0), DB.setUint16(2, OB.length, !0), DB.setUint16(4, GB[0], !0), DB.setUint16(6, GB[1], !0), OB.slice(0, oY.lc.CubeFaces).forEach(((BB, OB) => {
```

#### 754. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7229` → after: `L7229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7229) · [Before (L7229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7229)

```diff
-       const BH = new Uint8Array(hA.ic.SkyImagesReadyBytes),
+       const OB = new Uint8Array(oY.lc.SkyImagesReadyBytes),
```

#### 755. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7231` → after: `L7231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7231) · [Before (L7231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7231)

```diff
-       return LH.setUint16(0, HH, !0), LH.setUint16(2, hA.ic.Failed, !0), BH
+       return GB.setUint16(0, BB, !0), GB.setUint16(2, oY.lc.Failed, !0), OB
```

#### 756. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7237` → after: `L7237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7237) · [Before (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7237)

```diff
-         LH = await (0, Az.M)(HH)
+         GB = await (0, Dy.I)(BB)
```

#### 757. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7239` → after: `L7239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7239) · [Before (L7239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7239)

```diff
-         throw new Bz.b("fetch", HH, {
+         throw new Gy.d("fetch", BB, {
```

#### 758. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7272` → after: `L7272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7272) · [Before (L7272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7272)

```diff
-         throw new Bz.b("decode", HH, {
+         throw new Gy.d("decode", BB, {
```

#### 759. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7277` → after: `L7277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7277) · [Before (L7277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7277)

```diff
-         id: (0, Bz.i)(rH),
+         id: (0, Gy.q)(DB),
```

#### 760. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7282-L7286` → after: `L7282-L7286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7282-L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7282-L7286) · [Before (L7282-L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7282-L7286)

```diff
-     var Xz = LH(2227),
-       Gz = LH(34806),
-       Yz = LH(40184);
-     const uz = Xz.f.length,
-       Qz = new Set([...Xz.f, "earth"]);
+     var zy = GB(2272),
+       ly = GB(34612),
+       py = GB(39930);
+     const qy = zy.i.length,
+       Zy = new Set([...zy.i, "earth"]);
```

#### 761. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7295` → after: `L7295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7295) · [Before (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7295)

```diff
-               kind: hA.ic.KindCustom,
+               kind: oY.lc.KindCustom,
```

#### 762. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7301` → after: `L7301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7301) · [Before (L7301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7301)

```diff
-               urls: (0, Yz.f)(rH),
+               urls: (0, py.e)(DB),
```

#### 763. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7306` → after: `L7306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7306) · [Before (L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7306)

```diff
-             kind: hA.ic.KindEarth,
+             kind: oY.lc.KindEarth,
```

#### 764. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7311` → after: `L7311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7311) · [Before (L7311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7311)

```diff
-       Xz.f.forEach(((BH, LH) => {
+       zy.i.forEach(((OB, GB) => {
```

#### 765. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7313` → after: `L7313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7313) · [Before (L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7313)

```diff
-         AH(LH, null !== (rH = Mz(HH[BH])) && void 0 !== rH ? rH : Gz.n[BH])
+         YB(GB, null !== (DB = Ry(BB[OB])) && void 0 !== DB ? DB : ly.p[OB])
```

#### 766. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7324` → after: `L7324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7324) · [Before (L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7324)

```diff
-         BH.length > 255 ? tH.push(`Ignoring texture pack skybox ${YH}, whose name is over 255 bytes`) : hH.length === hA.ic.MaxAdded ? tH.push(`Ignoring texture pack skybox ${YH}, past the ${hA.ic.MaxAdded} skies a pack can add`) : (hH.push(BH), AH(hA.ic.AddedId, HH))
+         OB.length > 255 ? jB.push(`Ignoring texture pack skybox ${lB}, whose name is over 255 bytes`) : oB.length === oY.lc.MaxAdded ? jB.push(`Ignoring texture pack skybox ${lB}, past the ${oY.lc.MaxAdded} skies a pack can add`) : (oB.push(OB), YB(oY.lc.AddedId, BB))
```

#### 767. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7328` → after: `L7328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7328) · [Before (L7328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7328)

```diff
-         urls: Gz.h.map((HH => Gz.l + HH)),
+         urls: ly.g.map((BB => ly.i + BB)),
```

#### 768. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7331` → after: `L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7331) · [Before (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7331)

```diff
-         urls: [Gz.m],
+         urls: [ly.l],
```

#### 769. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7337` → after: `L7337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7337) · [Before (L7337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7337)

```diff
-       const CH = hA.ic.SkyTableHeaderBytes + LH.length * hA.ic.SkyTableEntryBytes,
+       const JB = oY.lc.SkyTableHeaderBytes + GB.length * oY.lc.SkyTableEntryBytes,
```

#### 770. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7341` → after: `L7341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7341) · [Before (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7341)

```diff
-         const LH = hA.ic.SkyTableHeaderBytes + BH * hA.ic.SkyTableEntryBytes;
+         const GB = oY.lc.SkyTableHeaderBytes + OB * oY.lc.SkyTableEntryBytes;
```

#### 771. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7361` → after: `L7361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7361) · [Before (L7361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7361)

```diff
-             "number" === typeof zH && Number.isFinite(zH) && (BH.setFloat32(LH + hA.v.CameraOffsetAt + 4 * SH, zH, !0), rH |= tH)
+             "number" === typeof yB && Number.isFinite(yB) && (OB.setFloat32(GB + oY.w.CameraOffsetAt + 4 * QB, yB, !0), DB |= jB)
```

#### 772. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7367` → after: `L7367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7367) · [Before (L7367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7367)

```diff
-           BH.setUint32(LH + hA.v.PresentAt, rH, !0), BH.setUint8(LH + hA.v.FlagsAt, SH)
+           OB.setUint32(GB + oY.w.PresentAt, DB, !0), OB.setUint8(GB + oY.w.FlagsAt, QB)
```

#### 773. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7386` → after: `L7386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7386) · [Before (L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7386)

```diff
-       })) ? HH : null
+       })) ? BB : null
```

#### 774. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7389-L7396` → after: `L7389-L7396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7389-L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7389-L7396) · [Before (L7389-L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7389-L7396)

```diff
-         ["inclination", hA.v.Inclination],
-         ["turbidity", hA.v.Turbidity],
-         ["luminance", hA.v.Luminance],
-         ["rayleigh", hA.v.Rayleigh],
-         ["mieCoefficient", hA.v.MieCoefficient],
-         ["mieDirectionalG", hA.v.MieDirectionalG],
-         ["distance", hA.v.Distance],
-         ["azimuth", hA.v.Azimuth]
+         ["inclination", oY.w.Inclination],
+         ["turbidity", oY.w.Turbidity],
+         ["luminance", oY.w.Luminance],
+         ["rayleigh", oY.w.Rayleigh],
+         ["mieCoefficient", oY.w.MieCoefficient],
+         ["mieDirectionalG", oY.w.MieDirectionalG],
+         ["distance", oY.w.Distance],
+         ["azimuth", oY.w.Azimuth]
```

#### 775. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7399-L7401` → after: `L7399-L7401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7399-L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7399-L7401) · [Before (L7399-L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7399-L7401)

```diff
-         ["sunPosition", hA.v.SunPosition, hA.v.SunPositionAt],
-         ["up", hA.v.Up, hA.v.UpAt],
-         ["vertexTint", hA.v.VertexTint, hA.v.VertexTintAt]
+         ["sunPosition", oY.w.SunPosition, oY.w.SunPositionAt],
+         ["up", oY.w.Up, oY.w.UpAt],
+         ["vertexTint", oY.w.VertexTint, oY.w.VertexTintAt]
```

#### 776. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7404-L7406` → after: `L7404-L7406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7404-L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7404-L7406) · [Before (L7404-L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7404-L7406)

```diff
-         ["xCameraOffset", hA.v.CameraOffsetX],
-         ["yCameraOffset", hA.v.CameraOffsetY],
-         ["zCameraOffset", hA.v.CameraOffsetZ]
+         ["xCameraOffset", oY.w.CameraOffsetX],
+         ["yCameraOffset", oY.w.CameraOffsetY],
+         ["zCameraOffset", oY.w.CameraOffsetZ]
```

#### 777. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7409-L7411` → after: `L7409-L7411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7409-L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7409-L7411) · [Before (L7409-L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7409-L7411)

```diff
-         ["useSunPosition", hA.v.UseSunPosition],
-         ["dithering", hA.v.Dithering],
-         ["infiniteDistance", hA.v.InfiniteDistance]
+         ["useSunPosition", oY.w.UseSunPosition],
+         ["dithering", oY.w.Dithering],
+         ["infiniteDistance", oY.w.InfiniteDistance]
```

#### 778. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7441` → after: `L7441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7441) · [Before (L7441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7441)

```diff
-                       return "string" !== typeof HH ? null : null !== (BH = null === (LH = bz.exec(HH)) || void 0 === LH || null === (AH = LH.groups) || void 0 === AH ? void 0 : AH.base64) && void 0 !== BH ? BH : null
+                       return "string" !== typeof BB ? null : null !== (OB = null === (GB = ky.exec(BB)) || void 0 === GB || null === (YB = GB.groups) || void 0 === YB ? void 0 : YB.base64) && void 0 !== OB ? OB : null
```

#### 779. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7445` → after: `L7445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7445) · [Before (L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7445)

```diff
-                 }(AH) || (LH(`Ignoring texture pack skybox ${BH}, whose faces are not all data URLs`, null), !1)
+                 }(YB) || (GB(`Ignoring texture pack skybox ${OB}, whose faces are not all data URLs`, null), !1)
```

#### 780. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7458` → after: `L7458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7458) · [Before (L7458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7458)

```diff
-         this.host = HH, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.Mu = !1, this.wait = null !== (BH = HH.wait) && void 0 !== BH ? BH : (HH, BH) => {
+         this.host = BB, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.Vp = !1, this.wait = null !== (OB = BB.wait) && void 0 !== OB ? OB : (BB, OB) => {
```

#### 781. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7461-L7462` → after: `L7461-L7462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7461-L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7461-L7462) · [Before (L7461-L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7461-L7462)

```diff
-           loadImage: null !== (LH = HH.loadImage) && void 0 !== LH ? LH : Ez,
-           zrH: null !== (AH = HH.zrH) && void 0 !== AH ? AH : Bz.k,
+           loadImage: null !== (GB = BB.loadImage) && void 0 !== GB ? GB : Py,
+           NDB: null !== (YB = BB.NDB) && void 0 !== YB ? YB : Gy.s,
```

#### 782. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7465` → after: `L7465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7465) · [Before (L7465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7465)

```diff
-               kind: hA.ic.SkyImagesReady,
+               kind: oY.lc.SkyImagesReady,
```

#### 783. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7470` → after: `L7470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7470) · [Before (L7470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7470)

```diff
-             HH.warn(`sky image set ${BH} (${LH}) didn't load: the last sky stays`, AH)
+             BB.warn(`sky image set ${OB} (${GB}) didn't load: the last sky stays`, YB)
```

#### 784. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7476` → after: `L7476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7476) · [Before (L7476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7476)

```diff
-         this.wait(Lz.c, (() => {
+         this.wait(Yy.e, (() => {
```

#### 785. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7479` → after: `L7479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7479) · [Before (L7479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7479)

```diff
-           this.write(null !== HH && void 0 !== HH ? HH : {})
+           this.write(null !== BB && void 0 !== BB ? BB : {})
```

#### 786. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7492` → after: `L7492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7492) · [Before (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7492)

```diff
-         this.Mu = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
+         this.Vp = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
```

#### 787. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7495` → after: `L7495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7495) · [Before (L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7495)

```diff
-         if (this.Mu) return;
+         if (this.Vp) return;
```

#### 788. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7503-L7504` → after: `L7503-L7504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7503-L7504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7503-L7504) · [Before (L7503-L7504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7503-L7504)

```diff
-           this.written = BH, this.loader.reset(BH.sets), this.queue = this.queue.filter((HH => HH.kind !== hA.ic.SkyImagesReady)), this.queue.push({
-             kind: hA.ic.SkyTable,
+           this.written = OB, this.loader.reset(OB.sets), this.queue = this.queue.filter((BB => BB.kind !== oY.lc.SkyImagesReady)), this.queue.push({
+             kind: oY.lc.SkyTable,
```

#### 789. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7511-L7526` → after: `L7511-L7526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7511-L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7511-L7526) · [Before (L7511-L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7511-L7526)

```diff
-     var kz = LH(3064),
-       mz = LH(3310),
-       oz = LH(268),
-       Iz = LH(168),
-       fz = LH(3073),
-       lz = LH(3090),
-       Kz = LH(233),
-       cz = LH(241),
-       ez = LH(3193),
-       qz = LH(3223),
-       gz = LH(3235),
-       Nz = LH(101),
-       Rz = LH(3292),
-       jz = LH(3287),
-       nz = LH(293),
-       Fz = LH(42150);
+     var dy = GB(3116),
+       Ky = GB(3362),
+       uy = GB(283),
+       my = GB(182),
+       Iy = GB(3121),
+       Fy = GB(3125),
+       iy = GB(254),
+       Ly = GB(258),
+       gy = GB(3244),
+       ry = GB(3272),
+       Xy = GB(3279),
+       wy = GB(104),
+       Ey = GB(3349),
+       cy = GB(3347),
+       hy = GB(320),
+       ay = GB(41864);
```

#### 790. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7529-L7530` → after: `L7529-L7530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7529-L7530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7529-L7530) · [Before (L7529-L7530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7529-L7530)

```diff
-         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, LS.k)(lA.G, (HH => {
-           this.onReply((0, BS.f)(lA.G, HH), performance.now())
+         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, GQ.g)(IY.I, (BB => {
+           this.onReply((0, OQ.h)(IY.I, BB), performance.now())
```

#### 791. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7534` → after: `L7534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7534) · [Before (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7534)

```diff
-         null === this.id ? this.id = HH : HH !== this.id && (this.id = HH, this.sentMs = document.hidden ? null : BH)
+         null === this.id ? this.id = BB : BB !== this.id && (this.id = BB, this.sentMs = document.hidden ? null : OB)
```

#### 792. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7601-L7602` → after: `L7601-L7602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7601-L7602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7601-L7602) · [Before (L7601-L7602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7601-L7602)

```diff
-         const LH = HH.headerWord(hA.I.Pacing),
-           AH = HH.headerWord(hA.I.PacingLagUs),
+         const GB = BB.headerWord(oY.O.Pacing),
+           YB = BB.headerWord(oY.O.PacingLagUs),
```

#### 793. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7615-L7621` → after: `L7615-L7621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7615-L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7615-L7621) · [Before (L7615-L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7615-L7621)

```diff
-     var sz = LH(3187),
-       Jz = LH(34924),
-       iz = LH(3195),
-       pz = LH(42200),
-       yz = LH(34915),
-       HC = LH(3098),
-       BC = LH(3200);
+     var vy = GB(3235),
+       sy = GB(34732),
+       xy = GB(3249),
+       ty = GB(41900),
+       BJ = GB(34725),
+       OJ = GB(3134),
+       GJ = GB(3255);
```

#### 794. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7653` → after: `L7653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7653) · [Before (L7653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7653)

```diff
-         }), (HH => this.shell.Km(HH))), this.onVisibility = () => {
+         }), (BB => this.shell.hU(BB))), this.onVisibility = () => {
```

#### 795. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7657` → after: `L7657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7657) · [Before (L7657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7657)

```diff
-         }, (0, Jz.b)(HH.backend, HH.canvas, HH.adapterVendor), this.tracker.start((() => !HH.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, HC.c)("wasm", (() => {
+         }, (0, sy.b)(BB.backend, BB.canvas, BB.adapterVendor), this.tracker.start((() => !BB.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, OJ.e)("wasm", (() => {
```

#### 796. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7661-L7662` → after: `L7661-L7662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7661-L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7661-L7662) · [Before (L7661-L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7661-L7662)

```diff
-           } = (0, pz.d)();
-           return `${HH.backend}, quality steps aim at up to ${BC.b.target.maxFps} fps, pixel n ${BH}, msaa ${LH}`
+           } = (0, ty.i)();
+           return `${BB.backend}, quality steps aim at up to ${GJ.d.target.maxFps} fps, pixel n ${OB}, msaa ${GB}`
```

#### 797. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7676` → after: `L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7676) · [Before (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7676)

```diff
-         this.ping.onFrame(HH.headerWord(hA.I.PingSent), BH), this.sendsStartMs = BH, this.sendsEndMs = LH
+         this.ping.onFrame(BB.headerWord(oY.O.PingSent), OB), this.sendsStartMs = OB, this.sendsEndMs = GB
```

#### 798. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7680` → after: `L7680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7680) · [Before (L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7680)

```diff
-         this.ping.onFrame(HH.headerWord(hA.I.PingSent), LH);
+         this.ping.onFrame(BB.headerWord(oY.O.PingSent), GB);
```

#### 799. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7683` → after: `L7683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7683) · [Before (L7683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7683)

```diff
-         const hH = HH.headerWord(hA.I.TickUs) / 1e3 + (0, WA.P)();
+         const oB = BB.headerWord(oY.O.TickUs) / 1e3 + (0, ZY.P)();
```

#### 800. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7685` → after: `L7685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7685) · [Before (L7685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7685)

```diff
-         (SH.Dv(hH), null === (rH = this.frameDebug) || void 0 === rH || rH.wasmFrame(HH, BH, LH, AH, SH.isSampling(), hH), null !== this.game) && (null === (tH = this.frameDebug) || void 0 === tH || tH.inGame());
+         (QB.yR(oB), null === (DB = this.frameDebug) || void 0 === DB || DB.wasmFrame(BB, OB, GB, YB, QB.isSampling(), oB), null !== this.game) && (null === (jB = this.frameDebug) || void 0 === jB || jB.inGame());
```

#### 801. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7690` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7690) · [Before (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7690)

```diff
-         this.gpu.onFrame(HH.headerWord(hA.I.GpuSampled), HH.headerWord(hA.I.GpuTimed), HH.headerWord(hA.I.GpuFrameUs), SH.isSampling()) && SH.onGpuSampleStarted(), SH.onFrameCpu(CH + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(BH)
+         this.gpu.onFrame(BB.headerWord(oY.O.GpuSampled), BB.headerWord(oY.O.GpuTimed), BB.headerWord(oY.O.GpuFrameUs), QB.isSampling()) && QB.onGpuSampleStarted(), QB.onFrameCpu(JB + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(OB)
```

#### 802. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7716` → after: `L7716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7716) · [Before (L7716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7716)

```diff
-         if (!(BH < gz.c)) {
+         if (!(OB < Xy.b)) {
```

#### 803. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7735` → after: `L7735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7735) · [Before (L7735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7735)

```diff
-           CH = zH ? hH : (0, fz.d)(hH),
+           JB = yB ? oB : (0, Iy.e)(oB),
```

#### 804. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7739` → after: `L7739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7739) · [Before (L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7739)

```diff
-           YH = (0, qz.y)((0, qz.u)(XH), this.unsentPage),
+           lB = (0, ry.t)((0, ry.q)(PB), this.unsentPage),
```

#### 805. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7746` → after: `L7746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7746) · [Before (L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7746)

```diff
-               WH = (0, ez.j)({
+               ZB = (0, gy.i)({
```

#### 806. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7749` → after: `L7749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7749) · [Before (L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7749)

```diff
-                 autoMsaaOff: (0, yz.e)()
+                 autoMsaaOff: (0, BJ.d)()
```

#### 807. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7751` → after: `L7751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7751) · [Before (L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7751)

```diff
-             for (const MH of (0, mz.c)()) {
+             for (const NB of (0, Ky.h)()) {
```

#### 808. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7754-L7756` → after: `L7754-L7756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7754-L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7754-L7756) · [Before (L7754-L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7754-L7756)

```diff
-               if ((0, oz.H)(xH)) vH = (0, qz.c)(xH);
-               else if ((0, qz.f)(xH)) vH = zH[xH];
-               else if ((0, ez.n)(xH)) vH = WH[xH];
+               if ((0, uy.C)(RB)) WB = (0, ry.b)(RB);
+               else if ((0, ry.h)(RB)) WB = yB[RB];
+               else if ((0, gy.m)(RB)) WB = ZB[RB];
```

#### 809. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7761` → after: `L7761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7761) · [Before (L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7761)

```diff
-                 case "yt":
+                 case "jo":
```

#### 810. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7764-L7765` → after: `L7764-L7765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7764-L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7764-L7765) · [Before (L7764-L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7764-L7765)

```diff
-                 case "Sz":
-                   vH = (0, iz.G)((0, pz.d)().n);
+                 case "zo":
+                   WB = (0, xy.E)((0, ty.i)().n);
```

#### 811. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7767` → after: `L7767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7767) · [Before (L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7767)

```diff
-                 case "hz":
+                 case "po":
```

#### 812. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7770` → after: `L7770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7770) · [Before (L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7770)

```diff
-                 case "tz":
+                 case "qo":
```

#### 813. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7773` → after: `L7773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7773) · [Before (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7773)

```diff
-                 case "zz":
+                 case "Zo":
```

#### 814. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7776` → after: `L7776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7776) · [Before (L7776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7776)

```diff
-                 case "Cz":
+                 case "Ro":
```

#### 815. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7779` → after: `L7779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7779) · [Before (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7779)

```diff
-                 case "Ez":
+                 case "Wo":
```

#### 816. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7782` → after: `L7782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7782) · [Before (L7782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7782)

```diff
-                 case "Xz":
+                 case "Ao":
```

#### 817. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7785` → after: `L7785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7785) · [Before (L7785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7785)

```diff
-                 case "Gz":
+                 case "Vo":
```

#### 818. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7788` → after: `L7788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7788) · [Before (L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7788)

```diff
-                 case "Yz":
+                 case "Uo":
```

#### 819. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7791` → after: `L7791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7791) · [Before (L7791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7791)

```diff
-                 case "uz":
+                 case "fo":
```

#### 820. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7794` → after: `L7794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7794) · [Before (L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7794)

```diff
-                 case "Qz":
+                 case "ko":
```

#### 821. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7797` → after: `L7797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7797) · [Before (L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7797)

```diff
-                 case "Wz":
+                 case "Ko":
```

#### 822. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7800` → after: `L7800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7800) · [Before (L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7800)

```diff
-                 case "Uz":
+                 case "Xo":
```

#### 823. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7803` → after: `L7803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7803) · [Before (L7803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7803)

```diff
-                 case "Vz":
+                 case "wo":
```

#### 824. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7806` → after: `L7806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7806) · [Before (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7806)

```diff
-                 case "Mz":
+                 case "uo":
```

#### 825. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7809` → after: `L7809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7809) · [Before (L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7809)

```diff
-                 case "xz":
+                 case "mo":
```

#### 826. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7812` → after: `L7812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7812) · [Before (L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7812)

```diff
-                 case "vz":
+                 case "Io":
```

#### 827. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7815` → after: `L7815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7815) · [Before (L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7815)

```diff
-                 case "Pz":
+                 case "Fo":
```

#### 828. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7818` → after: `L7818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7818) · [Before (L7818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7818)

```diff
-                 case "Tz":
+                 case "ro":
```

#### 829. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7821` → after: `L7821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7821) · [Before (L7821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7821)

```diff
-                 case "Oz":
+                 case "Eo":
```

#### 830. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7824` → after: `L7824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7824) · [Before (L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7824)

```diff
-                 case "bz":
+                 case "co":
```

#### 831. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7827` → after: `L7827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7827) · [Before (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7827)

```diff
-                 case "kz":
+                 case "ho":
```

#### 832. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7830` → after: `L7830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7830) · [Before (L7830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7830)

```diff
-                 case "mz":
+                 case "ao":
```

#### 833. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7833-L7834` → after: `L7833-L7834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7833-L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7833-L7834) · [Before (L7833-L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7833-L7834)

```diff
-                 case "jz":
-                   vH = (0, kz.i)(hH);
+                 case "Qj":
+                   WB = (0, dy.j)(oB);
```

#### 834. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7836` → after: `L7836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7836) · [Before (L7836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7836)

```diff
-                 case "rz":
+                 case "Po":
```

#### 835. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7839-L7853` → after: `L7839-L7853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7839-L7853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7839-L7853) · [Before (L7839-L7853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7839-L7853)

```diff
-                 case "oz":
-                 case "Iz":
-                 case "fz":
-                 case "lz":
-                 case "Kz":
-                 case "cz":
-                 case "ez":
-                 case "qz":
-                 case "gz":
-                 case "Nz":
-                 case "Rz":
-                 case "nz":
-                 case "Fz":
-                 case "Dz":
-                 case "wz":
+                 case "eo":
+                 case "bo":
+                 case "Co":
+                 case "Ho":
+                 case "vo":
+                 case "xo":
+                 case "Bj":
+                 case "Oj":
+                 case "Gj":
+                 case "Yj":
+                 case "Dj":
+                 case "oj":
+                 case "jj":
+                 case "yj":
+                 case "Jj":
```

#### 836. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7856` → after: `L7856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7856) · [Before (L7856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7856)

```diff
-                 case "tC":
+                 case "nj":
```

#### 837. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7859` → after: `L7859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7859) · [Before (L7859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7859)

```diff
-                 case "zC":
+                 case "Uj":
```

#### 838. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7862-L7863` → after: `L7862-L7863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7862-L7863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7862-L7863) · [Before (L7862-L7863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7862-L7863)

```diff
-                 case "CC":
-                   vH = Fz.b[HH.backend];
+                 case "fj":
+                   WB = ay.e[BB.backend];
```

#### 839. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7865` → after: `L7865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7865) · [Before (L7865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7865)

```diff
-                 case "XC":
+                 case "kj":
```

#### 840. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7868` → after: `L7868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7868) · [Before (L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7868)

```diff
-                 case "YC":
+                 case "dj":
```

#### 841. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7871` → after: `L7871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7871) · [Before (L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7871)

```diff
-                 case "uC":
+                 case "Kj":
```

#### 842. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7874-L7875` → after: `L7874-L7875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7874-L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7874-L7875) · [Before (L7874-L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7874-L7875)

```diff
-                 case "QC":
-                   vH = null !== (CH = AH.c.get("gameEntrySource")) && void 0 !== CH ? CH : Iz.f;
+                 case "uj":
+                   WB = null !== (JB = YB.c.get("gameEntrySource")) && void 0 !== JB ? JB : my.e;
```

#### 843. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7877-L7878` → after: `L7877-L7878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7877-L7878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7877-L7878) · [Before (L7877-L7878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7877-L7878)

```diff
-                 case "WC":
-                   vH = null !== (EH = BH.frameLimiter) && void 0 !== EH ? EH : Iz.f;
+                 case "mj":
+                   WB = null !== (MB = OB.frameLimiter) && void 0 !== MB ? MB : my.e;
```

#### 844. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7880-L7881` → after: `L7880-L7881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7880-L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7880-L7881) · [Before (L7880-L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7880-L7881)

```diff
-                 case "MC":
-                   vH = (0, Kz.i)();
+                 case "Ij":
+                   WB = (0, iy.l)();
```

#### 845. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7883-L7884` → after: `L7883-L7884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7883-L7884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7883-L7884) · [Before (L7883-L7884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7883-L7884)

```diff
-                 case "xC":
-                   vH = null !== (XH = (0, cz.e)()) && void 0 !== XH ? XH : Iz.f;
+                 case "Fj":
+                   WB = null !== (PB = (0, Ly.c)()) && void 0 !== PB ? PB : my.e;
```

#### 846. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7886` → after: `L7886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7886) · [Before (L7886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7886)

```diff
-                 case "vC":
+                 case "ij":
```

#### 847. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7889-L7890` → after: `L7889-L7890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7889-L7890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7889-L7890) · [Before (L7889-L7890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7889-L7890)

```diff
-                 case "PC":
-                   vH = (0, mz.g)(-(new Date).getTimezoneOffset());
+                 case "Lj":
+                   WB = (0, Ky.i)(-(new Date).getTimezoneOffset());
```

#### 848. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7892-L7893` → after: `L7892-L7893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7892-L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7892-L7893) · [Before (L7892-L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7892-L7893)

```diff
-                 case "kC":
-                   vH = null !== (GH = HH.fallbackReason) && void 0 !== GH ? GH : Iz.f;
+                 case "cj":
+                   WB = null !== (zB = BB.fallbackReason) && void 0 !== zB ? zB : my.e;
```

#### 849. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7895` → after: `L7895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7895) · [Before (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7895)

```diff
-                 case "IC":
+                 case "ej":
```

#### 850. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7898` → after: `L7898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7898) · [Before (L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7898)

```diff
-                 case "fC":
+                 case "Tj":
```

#### 851. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7901-L7902` → after: `L7901-L7902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7901-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7901-L7902) · [Before (L7901-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7901-L7902)

```diff
-                 case "UC":
-                   vH = (0, Rz.c)();
+                 case "rj":
+                   WB = (0, Ey.d)();
```

#### 852. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7904` → after: `L7904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7904) · [Before (L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7904)

```diff
-                 case "VC":
+                 case "Xj":
```

#### 853. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7907` → after: `L7907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7907) · [Before (L7907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7907)

```diff
-                 case "OC":
+                 case "wj":
```

#### 854. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7910` → after: `L7910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7910) · [Before (L7910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7910)

```diff
-                 case "bC":
+                 case "Ej":
```
