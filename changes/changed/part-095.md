# Changed — Bundle Modifications Report (Part 095 / 141)

- **Updated at**: `2026-11-25T08:36 JST`
- **Part**: `95 / 141` (**430** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 094](part-094.md) · [Part 096 →](part-096.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/87.js` (c6gaap.4d6587ec → igzsf.a0b73a5f · continued)

- **File**: `bundles/bloxd.io/chunks/js/87.js` (55 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e)

#### 19. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L162-L163` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L162-L163) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L162-L163)

```diff
-           this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.zI : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = oB.e.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZon … [truncated]
-           const BB = this.parameters.cI / 2,
+           this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.Me : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = Dt.e.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZon … [truncated]
+           const tt = this.parameters.ye / 2,
```

#### 20. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L169)

```diff
-           const BB = this.parameters.cI / 2;
+           const tt = this.parameters.ye / 2;
```

#### 21. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L173)

```diff
-           this.isMoverInCatchZone() ? this.progress += this.parameters.FI * BB : this.progress -= this.parameters.NI * BB, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.BI && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.pr … [truncated]
+           this.isMoverInCatchZone() ? this.progress += this.parameters.Je * tt : this.progress -= this.parameters.Ce * tt, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.De && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.pr … [truncated]
```

#### 22. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L184)

```diff
-               cI: this.parameters.cI,
+               ye: this.parameters.ye,
```

#### 23. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L199` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L199) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L199)

```diff
-           this.resolveRequest = IB, this.tearDownNotification = ZB, this.startTime = void 0, this.speed = void 0, this.qI = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
+           this.resolveRequest = et, this.tearDownNotification = Vt, this.startTime = void 0, this.speed = void 0, this.Ke = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
```

#### 24. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L203-L205` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L203-L205) · [Before (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L203-L205)

```diff
-             speed: null !== (TB = cB.speed) && void 0 !== TB ? TB : .5,
-             qI: oB.e.clamp(cB.qI, .05, 1),
-             label: null !== (JB = cB.label) && void 0 !== JB ? JB : [{
+             speed: null !== (Ot = Ht.speed) && void 0 !== Ot ? Ot : .5,
+             Ke: Dt.e.clamp(Ht.Ke, .05, 1),
+             label: null !== (qt = Ht.label) && void 0 !== qt ? qt : [{
```

#### 25. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L208-L211` → after: `L208-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L208-L211) · [Before (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L208-L211)

```diff
-             icon: null !== (GB = cB.icon) && void 0 !== GB ? GB : null,
-             scale: null !== (vB = cB.scale) && void 0 !== vB ? vB : 1,
-             rotation: null !== (kB = cB.rotation) && void 0 !== kB ? kB : 0
-           }, this.speed = this.parameters.speed, this.qI = this.parameters.qI, this.startTime = Date.now()
+             icon: null !== (mt = Ht.icon) && void 0 !== mt ? mt : null,
+             scale: null !== (dt = Ht.scale) && void 0 !== dt ? dt : 1,
+             rotation: null !== (jt = Ht.rotation) && void 0 !== jt ? jt : 0
+           }, this.speed = this.parameters.speed, this.Ke = this.parameters.Ke, this.startTime = Date.now()
```

#### 26. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L216` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L216) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L216)

```diff
-             const BB = Math.abs(this.markerPosition - .5) <= this.qI / 2;
+             const tt = Math.abs(this.markerPosition - .5) <= this.Ke / 2;
```

#### 27. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L225)

```diff
-           this.markerPosition = BB <= .5 ? 2 * BB : 2 - 2 * BB
+           this.markerPosition = tt <= .5 ? 2 * tt : 2 - 2 * tt
```

#### 28. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L251-L252` → after: `L251-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L251-L252) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L251-L252)

```diff
-           if (IB <= this.parameters.dI && IB >= -this.parameters.dI) {
-             if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.UI) return void this.complete(!0)
+           if (et <= this.parameters.ce && et >= -this.parameters.ce) {
+             if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.ve) return void this.complete(!0)
```

#### 29. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L257)

```diff
-           this.misses++, this.lastClickResult = !1, !(0, GB.L)(this.parameters.CI) && this.misses > this.parameters.CI ? this.complete(!1) : this.shrinkStartTime = Date.now()
+           this.misses++, this.lastClickResult = !1, !(0, mt.B)(this.parameters.Ie) && this.misses > this.parameters.Ie ? this.complete(!1) : this.shrinkStartTime = Date.now()
```

#### 30. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L261)

```diff
-           this.getOuterCircleProgress() < -this.parameters.dI && this.handleMiss()
+           this.getOuterCircleProgress() < -this.parameters.ce && this.handleMiss()
```

#### 31. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L264)

```diff
-           return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.WI
+           return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.Se
```

#### 32. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L276` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L276) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L276)

```diff
-               UI: this.parameters.UI,
+               ve: this.parameters.ve,
```

#### 33. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L290)

```diff
-       (0, nB.f)(vB.o.Qte, qB ? vB.o.Qte : 0), qB ? JB.l.Gq("qteStateUpdated", qB.getState()) : JB.l.Gq("qteStateUpdated", {
+       (0, Xt.g)(dt.u.Qte, yt ? dt.u.Qte : 0), yt ? qt.j.sw("qteStateUpdated", yt.getState()) : qt.j.sw("qteStateUpdated", {
```

#### 34. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L324` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L324) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L324)

```diff
-         if (qB || NB.hN()) return void(NB.hN() && qB && (qB = null, UB()));
+         if (yt || ft.sE()) return void(ft.sE() && yt && (yt = null, Mt()));
```

#### 35. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L357)

```diff
-   4958: (BB, IB, ZB) => {
+   4951: (tt, et, Vt) => {
```

#### 36. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L360` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L360) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L360)

```diff
-       B: () => UB,
+       C: () => dt,
```

#### 37. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L362-L367` → after: `L362-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L362-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L362-L365) · [Before (L362-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L362-L367)

```diff
-       H: () => vB,
-       I: () => OB,
-       b: () => wB,
-       e: () => dB,
-       f: () => HB,
-       g: () => aB,
+       c: () => ht,
+       d: () => Jt,
+       h: () => It,
+       i: () => Rt,
```

#### 38. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L369` → after: `L367-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L367-L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L369)

```diff
-       n: () => QB,
+       k: () => ut,
+       m: () => bt,
+       o: () => Ct,
```

#### 39. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L371-L373` → after: `L371-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L371-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L371-L373) · [Before (L371-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L371-L373)

```diff
-       s: () => CB,
-       u: () => YB,
-       y: () => iB
+       t: () => St,
+       x: () => ct,
+       z: () => Mt
```

#### 40. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L375)

```diff
-     var TB = ZB(4960);
+     var Ot = Vt(4958);
```

#### 41. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L384)

```diff
-       oB = null !== BB && void 0 !== BB ? BB : JB
+       Dt = null !== tt && void 0 !== tt ? tt : qt
```

#### 42. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L476)

```diff
-       const oB = (0, TB.j)(IB),
+       const Dt = (0, Ot.f)(et),
```

#### 43. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L508` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L508) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L508)

```diff
-   4978: (BB, IB, ZB) => {
+   4971: (tt, et, Vt) => {
```

#### 44. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L512` → after: `L511-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L511-L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L512)

```diff
-       e: () => vB
+       e: () => Dt,
+       i: () => dt
```

#### 45. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L514-L515` → after: `L514-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L514-L515) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L514-L515)

```diff
-     var TB = ZB(2481),
-       JB = ZB(4983);
+     var Ot = Vt(2458),
+       qt = Vt(4974);
```

#### 46. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L533` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L533) · [Before (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L533)

```diff
-       const IB = JB.d[255 & BB];
+       const et = qt.c[255 & tt];
```

#### 47. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L545` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L545) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L545)

```diff
-   4983: (BB, IB, ZB) => {
+   4974: (tt, et, Vt) => {
```

#### 48. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L547-L548` → after: `L547-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L547-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L547-L549) · [Before (L547-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L547-L548)

```diff
-       d: () => JB,
-       f: () => oB,
+       c: () => qt,
+       e: () => Dt,
+       g: () => mt,
```

#### 49. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L550-L551` → after: `L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L551) · [Before (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L550-L551)

```diff
-       i: () => TB,
-       k: () => vB
+       i: () => dt
```

#### 50. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L823` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L823) · [Before (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L823)

```diff
-   4990: (BB, IB, ZB) => {
+   4980: (tt, et, Vt) => {
```

#### 51. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L825-L827` → after: `L825-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L825-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L825-L827) · [Before (L825-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L825-L827)

```diff
-       b: () => vB,
-       d: () => GB,
-       f: () => cB
+       e: () => dt,
+       f: () => mt,
+       g: () => Ht
```

#### 52. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L829-L830` → after: `L829-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L829-L830) · [Before (L829-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L829-L830)

```diff
-     var TB = ZB(2481),
-       JB = ZB(2489);
+     var Ot = Vt(2458),
+       qt = Vt(2465);
```

#### 53. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L841` → after: `L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L841) · [Before (L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L841)

```diff
-           JB !== IB && (IB = JB, BB(TB.d.UiCapture, TB.o.Keyboard, 0, 0, JB ? TB.o.Keyboard : 0))
+           qt !== et && (et = qt, tt(Ot.g.UiCapture, Ot.u.Keyboard, 0, 0, qt ? Ot.u.Keyboard : 0))
```

#### 54. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L865` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L865) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L865)

```diff
-       kB.set(TB, (null !== (ZB = kB.get(TB)) && void 0 !== ZB ? ZB : 0) & ~BB | IB & BB);
+       jt.set(Ot, (null !== (Vt = jt.get(Ot)) && void 0 !== Vt ? Vt : 0) & ~tt | et & tt);
```

#### 55. `bundles/bloxd.io/chunks/js/87.js` (Changed code · before: `L868` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15eR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-c9ea3f9808c813f7e94cf85bcecabd7e481303373945bb8a6601d17ed0b9d15e) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/87.js#L868) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/87.js#L868)

```diff
-       return (0, JB.D)(BB, oB & BB)
+       return (0, qt.A)(tt, Dt & tt)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/88.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/88.js` (77 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d)

#### 1. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L4)

```diff
-   40901: (BB, IB, ZB) => {
+   41068: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L6)

```diff
-       A: () => PB,
+       $: () => it,
+       B: () => It,
```

#### 3. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11-L12` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L11) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L11-L12)

```diff
-       L: () => RB,
-       P: () => pB,
+       O: () => kt,
```

#### 4. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L15-L17` → after: `L14-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L14-L17) · [Before (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L15-L17)

```diff
-       U: () => MB,
-       c: () => tB,
-       e: () => XB,
+       X: () => ct,
+       Y: () => Yt,
+       ab: () => Pt,
+       d: () => Bt,
```

#### 5. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L20-L23` → after: `L20-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L20-L23) · [Before (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L20-L23)

```diff
-       p: () => iB,
-       t: () => OB,
-       v: () => mB,
-       z: () => HB
+       o: () => pt,
+       s: () => St,
+       w: () => vt,
+       x: () => Gt
```

#### 6. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L25-L30` → after: `L25-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L25-L30) · [Before (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L25-L30)

```diff
-     var TB = ZB(1454),
-       JB = ZB(24),
-       oB = ZB(1353),
-       GB = ZB(2481),
-       vB = ZB(4990),
-       kB = ZB(4958);
+     var Ot = Vt(1492),
+       qt = Vt(31),
+       Dt = Vt(1387),
+       mt = Vt(2458),
+       dt = Vt(4980),
+       jt = Vt(4951);
```

#### 7. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L60)

```diff
-       return (0, oB.w)() && !QB
+       return (0, Dt.r)() && !ut
```

#### 8. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L79)

```diff
-       (0, vB.f)(GB.o.Menu, (0, oB.w)() ? 0 : GB.o.Menu)
+       (0, dt.g)(mt.u.Menu, (0, Dt.r)() ? 0 : mt.u.Menu)
```

#### 9. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L105)

```diff
-       return (!hB || performance.now() - qB > gB) && (hB = (0, kB.H)().lockPointer(), qB = performance.now()), hB
+       return (!Qt || performance.now() - yt > wt) && (Qt = (0, jt.C)().lockPointer(), yt = performance.now()), Qt
```

#### 10. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L130)

```diff
-       UB ? navigator.vendor.startsWith("Apple") ? xB() : WB = dB : lB()
+       Mt ? navigator.vendor.startsWith("Apple") ? xt() : bt = Jt : it()
```

#### 11. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L146)

```diff
-       CB = !0, (0, kB.H)().unlockPointer()
+       Ct = !0, (0, jt.C)().unlockPointer()
```

#### 12. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L157)

```diff
-       JB.l.Gq("pointerLockUpdate", nB)
+       qt.j.sw("pointerLockUpdate", Xt)
```

#### 13. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L160` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L160) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L160)

```diff
-   40729: (BB, IB, ZB) => {
+   40880: (tt, et, Vt) => {
```

#### 14. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L163)

```diff
-       f: () => vB,
+       g: () => dt,
```

#### 15. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L168)

```diff
-       p: () => kB
+       q: () => jt
```

#### 16. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L203)

```diff
-   4958: (BB, IB, ZB) => {
+   4951: (tt, et, Vt) => {
```

#### 17. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L206` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L206) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L206)

```diff
-       B: () => UB,
+       C: () => dt,
```

#### 18. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L208-L213` → after: `L208-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L208-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L208-L211) · [Before (L208-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L208-L213)

```diff
-       H: () => vB,
-       I: () => OB,
-       b: () => wB,
-       e: () => dB,
-       f: () => HB,
-       g: () => aB,
+       c: () => ht,
+       d: () => Jt,
+       h: () => It,
+       i: () => Rt,
```

#### 19. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L215` → after: `L213-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L213-L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L215)

```diff
-       n: () => QB,
+       k: () => ut,
+       m: () => bt,
+       o: () => Ct,
```

#### 20. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L217-L219` → after: `L217-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L217-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L217-L219) · [Before (L217-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L217-L219)

```diff
-       s: () => CB,
-       u: () => YB,
-       y: () => iB
+       t: () => St,
+       x: () => ct,
+       z: () => Mt
```

#### 21. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L221)

```diff
-     var TB = ZB(4960);
+     var Ot = Vt(4958);
```

#### 22. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L230)

```diff
-       oB = null !== BB && void 0 !== BB ? BB : JB
+       Dt = null !== tt && void 0 !== tt ? tt : qt
```

#### 23. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L322)

```diff
-       const oB = (0, TB.j)(IB),
+       const Dt = (0, Ot.f)(et),
```

#### 24. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L354)

```diff
-   40910: (BB, IB, ZB) => {
+   41080: (tt, et, Vt) => {
```

#### 25. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L356` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L356) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L356)

```diff
-       d: () => TB
+       c: () => Ot
```

#### 26. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L369)

```diff
-   4978: (BB, IB, ZB) => {
+   4971: (tt, et, Vt) => {
```

#### 27. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L373` → after: `L372-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L372-L373) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L373)

```diff
-       e: () => vB
+       e: () => Dt,
+       i: () => dt
```

#### 28. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L375-L376` → after: `L375-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L375-L376) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L375-L376)

```diff
-     var TB = ZB(2481),
-       JB = ZB(4983);
+     var Ot = Vt(2458),
+       qt = Vt(4974);
```

#### 29. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L394)

```diff
-       const IB = JB.d[255 & BB];
+       const et = qt.c[255 & tt];
```

#### 30. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L406)

```diff
-   4983: (BB, IB, ZB) => {
+   4974: (tt, et, Vt) => {
```

#### 31. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L408-L409` → after: `L408-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L408-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L408-L410) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L408-L409)

```diff
-       d: () => JB,
-       f: () => oB,
+       c: () => qt,
+       e: () => Dt,
+       g: () => mt,
```

#### 32. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L411-L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L412) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L411-L412)

```diff
-       i: () => TB,
-       k: () => vB
+       i: () => dt
```

#### 33. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L684` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L684) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L684)

```diff
-   40946: (BB, IB, ZB) => {
+   41106: (tt, et, Vt) => {
```

#### 34. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L687-L688` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L687-L688) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L687-L688)

```diff
-       f: () => cB,
-       h: () => kB
+       c: () => Ht,
+       e: () => jt
```

#### 35. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L690-L692` → after: `L690-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L690-L692) · [Before (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L690-L692)

```diff
-     var TB = ZB(4975),
-       JB = ZB(2481),
-       oB = ZB(4990);
+     var Ot = Vt(4963),
+       qt = Vt(2458),
+       Dt = Vt(4980);
```

#### 36. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L717` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L717) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L717)

```diff
-           return 0 === (IB & JB.c.Repeat) && !(0, oB.d)(document.activeElement);
+           return 0 === (et & qt.e.Repeat) && !(0, Dt.f)(document.activeElement);
```

#### 37. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L729` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L729) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L729)

```diff
-   4990: (BB, IB, ZB) => {
+   4980: (tt, et, Vt) => {
```

#### 38. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L731-L733` → after: `L731-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L731-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L731-L733) · [Before (L731-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L731-L733)

```diff
-       b: () => vB,
-       d: () => GB,
-       f: () => cB
+       e: () => dt,
+       f: () => mt,
+       g: () => Ht
```

#### 39. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L735-L736` → after: `L735-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L735-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L735-L736) · [Before (L735-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L735-L736)

```diff
-     var TB = ZB(2481),
-       JB = ZB(2489);
+     var Ot = Vt(2458),
+       qt = Vt(2465);
```

#### 40. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L747` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L747) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L747)

```diff
-           JB !== IB && (IB = JB, BB(TB.d.UiCapture, TB.o.Keyboard, 0, 0, JB ? TB.o.Keyboard : 0))
+           qt !== et && (et = qt, tt(Ot.g.UiCapture, Ot.u.Keyboard, 0, 0, qt ? Ot.u.Keyboard : 0))
```

#### 41. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L771` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L771) · [Before (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L771)

```diff
-       kB.set(TB, (null !== (ZB = kB.get(TB)) && void 0 !== ZB ? ZB : 0) & ~BB | IB & BB);
+       jt.set(Ot, (null !== (Vt = jt.get(Ot)) && void 0 !== Vt ? Vt : 0) & ~tt | et & tt);
```

#### 42. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L774` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L774) · [Before (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L774)

```diff
-       return (0, JB.D)(BB, oB & BB)
+       return (0, qt.A)(tt, Dt & tt)
```

#### 43. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L777)

```diff
-   40974: (BB, IB, ZB) => {
+   41146: (tt, et, Vt) => {
```

#### 44. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L779-L782` → after: `L779-L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L779-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L779-L782) · [Before (L779-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L779-L782)

```diff
-       c: () => nB,
-       d: () => kB,
-       h: () => vB,
-       j: () => cB
+       e: () => Xt,
+       f: () => jt,
+       j: () => dt,
+       m: () => Ht
```

#### 45. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L784` → after: `L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L784) · [Before (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L784)

```diff
-     var TB = ZB(2012);
+     var Ot = Vt(2034);
```

#### 46. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L798` → after: `L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L798) · [Before (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L798)

```diff
-       JB = BB, oB++, (0, TB.d)();
+       qt = tt, Dt++, (0, Ot.e)();
```

#### 47. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L806` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L806) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L806)

```diff
-   41023: (BB, IB, ZB) => {
+   41180: (tt, et, Vt) => {
```

#### 48. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L812` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L812) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L812)

```diff
-   40906: (BB, IB, ZB) => {
+   41075: (tt, et, Vt) => {
```

#### 49. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L819` → after: `L817-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L817-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L817-L819) · [Before (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L819)

```diff
-       m: () => sB
+       n: () => Ct,
+       p: () => Jt,
+       s: () => Kt
```

#### 50. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L821-L829` → after: `L821-L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L821-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L821-L829) · [Before (L821-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L821-L829)

```diff
-     var TB = ZB(185),
-       JB = ZB(20),
-       oB = ZB(24),
-       GB = ZB(3071),
-       vB = ZB(1362),
-       kB = ZB(34110),
-       cB = ZB(311),
-       nB = ZB(105),
-       hB = ZB(179);
+     var Ot = Vt(206),
+       qt = Vt(26),
+       Dt = Vt(31),
+       mt = Vt(2984),
+       dt = Vt(1397),
+       jt = Vt(34317),
+       Ht = Vt(340),
+       Xt = Vt(106),
+       Qt = Vt(202);
```

#### 51. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L833)

```diff
-       const IB = (0, GB.P)(),
+       const et = (0, mt.E)(),
```

#### 52. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L837-L838` → after: `L837-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L837-L838) · [Before (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L837-L838)

```diff
-             n: (0, GB.E)(BB.pixelScale, IB),
-             pixelated: (0, GB.D)(BB.pixelSmoothing)
+             n: (0, mt.w)(tt.pixelScale, et),
+             pixelated: (0, mt.v)(tt.pixelSmoothing)
```

#### 53. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L840-L841` → after: `L840-L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L840-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L840-L841) · [Before (L840-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L840-L841)

```diff
-         }(JB.d.get("clientEscMenuOptions"), IB);
-       return ZB.sampleCount > 1 && (0, kB.e)() && (ZB.sampleCount = 1), ZB.n = null !== (BB = (0, kB.q)()) && void 0 !== BB ? BB : ZB.n, TB.g.includes((0, nB.getSoftwareRenderer)()) && (ZB.sampleCount = 1, ZB.n = Math.max(ZB.n, (0, GB.E)(hB.p.pixelScale, IB))), ZB
+         }(qt.b.get("clientEscMenuOptions"), et);
+       return Vt.sampleCount > 1 && (0, jt.e)() && (Vt.sampleCount = 1), Vt.n = null !== (tt = (0, jt.n)()) && void 0 !== tt ? tt : Vt.n, Ot.f.includes((0, Xt.getSoftwareRenderer)()) && (Vt.sampleCount = 1, Vt.n = Math.max(Vt.n, (0, mt.w)(Qt.n.pixelScale, et))), Vt
```

#### 54. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L855` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L855) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L855)

```diff
-         BB.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", BB.setAttribute("aria-hidden", "true"), document.body.append(BB), NB = BB, FB = new GB.d(BB, yB)
+         tt.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", tt.setAttribute("aria-hidden", "true"), document.body.append(tt), ft = tt, Et = new mt.b(tt, Nt)
```

#### 55. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L861` → after: `L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L861) · [Before (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L861)

```diff
-       const IB = (0, GB.o)(),
+       const et = (0, mt.m)(),
```

#### 56. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L868` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L868) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L868)

```diff
-       const oB = (0, GB.o)(),
+       const Dt = (0, mt.m)(),
```

#### 57. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L872` → after: `L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L872) · [Before (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L872)

```diff
-       return (0, GB.f)(BB, nB), BB.style.left = `${null!==(IB=null===(ZB=qB)||void 0===ZB?void 0:ZB.rect.left)&&void 0!==IB?IB:0}px`, BB.style.top = `${null!==(TB=null===(JB=qB)||void 0===JB?void 0:JB.rect.top)&&void 0!==TB?TB:0}px`, (0, vB.O)(BB.style, qB), nB
+       return (0, mt.c)(tt, Xt), tt.style.left = `${null!==(et=null===(Vt=yt)||void 0===Vt?void 0:Vt.rect.left)&&void 0!==et?et:0}px`, tt.style.top = `${null!==(Ot=null===(qt=yt)||void 0===qt?void 0:qt.rect.top)&&void 0!==Ot?Ot:0}px`, (0, dt.V)(tt.style, yt), Xt
```

#### 58. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L876` → after: `L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L876) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L876)

```diff
-       qB = BB, UB(), (0, vB.E)(NB.style, BB, ""), yB()
+       yt = tt, Mt(), (0, dt.M)(ft.style, tt, ""), Nt()
```

#### 59. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L880` → after: `L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L880) · [Before (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L880)

```diff
-       BB.style.imageRendering = (0, GB.Q)(IB.pixelated)
+       tt.style.imageRendering = (0, mt.I)(et.pixelated)
```

#### 60. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L884)

```diff
-       const ZB = (0, oB.p)("appManagerUpdated|clientEscMenuOptions", (() => {
+       const Vt = (0, Dt.n)("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 61. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L887-L888` → after: `L887-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L887-L888) · [Before (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L887-L888)

```diff
-         TB = (0, kB.B)(IB),
-         JB = (0, cB.j)(IB);
+         Ot = (0, jt.x)(et),
+         qt = (0, Ht.l)(et);
```

#### 62. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L894)

```diff
-   41028: (BB, IB, ZB) => {
+   41189: (tt, et, Vt) => {
```

#### 63. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L896-L898` → after: `L896-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L896-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L896-L898) · [Before (L896-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L896-L898)

```diff
-       b: () => GB,
-       f: () => oB,
-       h: () => JB
+       d: () => mt,
+       h: () => Dt,
+       l: () => qt
```

#### 64. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L915` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L915) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L915)

```diff
-   40971: (BB, IB, ZB) => {
+   41141: (tt, et, Vt) => {
```

#### 65. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L917-L918` → after: `L917-L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L917-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L917-L918) · [Before (L917-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L917-L918)

```diff
-       c: () => JB,
-       g: () => cB,
+       b: () => qt,
+       f: () => Ht,
```

#### 66. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L920-L922` → after: `L920-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L920-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L920-L922) · [Before (L920-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L920-L922)

```diff
-       k: () => hB,
-       o: () => nB,
-       s: () => zB
+       m: () => Qt,
+       n: () => Xt,
+       p: () => lt
```

#### 67. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L924)

```diff
-     var TB = ZB(3043);
+     var Ot = Vt(2965);
```

#### 68. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L927` → after: `L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L927) · [Before (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L927)

```diff
-         super(`${"fetch"===BB?"fetching":"decoding"} ${IB} failed`, ZB), this.stage = BB, this.source = IB, this.name = "ShellImageError"
+         super(`${"fetch"===tt?"fetching":"decoding"} ${et} failed`, Vt), this.stage = tt, this.source = et, this.name = "ShellImageError"
```

#### 69. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L931)

```diff
-       let IB, ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TB.K,
+       let et, Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ot.I,
```

#### 70. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L950` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L950) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L950)

```diff
-         throw new JB("decode", "string" === typeof BB ? BB : `${IB.byteLength} bytes`, {
+         throw new qt("decode", "string" === typeof tt ? tt : `${et.byteLength} bytes`, {
```

#### 71. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L961` → after: `L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L961) · [Before (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L961)

```diff
-         for (const [IB, ZB] of vB) BB.WTB(IB, ZB);
+         for (const [et, Vt] of dt) tt.vOt(et, Vt);
```

#### 72. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L968` → after: `L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L968) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L968)

```diff
-       return GB ? GB.WTB(IB, BB) : vB.set(IB, BB), IB
+       return mt ? mt.vOt(et, tt) : dt.set(et, tt), et
```

#### 73. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L983` → after: `L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L983) · [Before (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L983)

```diff
-       null === (IB = GB) || void 0 === IB || IB.dTB(BB)
+       null === (et = mt) || void 0 === et || et.WOt(tt)
```

#### 74. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L986` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L986) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L986)

```diff
-   40919: (BB, IB, ZB) => {
+   41083: (tt, et, Vt) => {
```

#### 75. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L992` → after: `L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L992) · [Before (L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L992)

```diff
-       b: () => TB
+       e: () => Ot
```

#### 76. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L995` → after: `L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L995) · [Before (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L995)

```diff
-   40928: (BB, IB, ZB) => {
+   41089: (tt, et, Vt) => {
```

#### 77. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/88.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/88.js#L997)

```diff
-       d: () => JB
+       b: () => qt
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/89.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/89.js` (55 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8)

#### 1. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L4)

```diff
-   40591: (BB, IB, ZB) => {
+   40719: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L8-L23` → after: `L8-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L8-L23) · [Before (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L8-L23)

```diff
-     ZB(40595);
-     var TB = ZB(40599),
-       JB = ZB(40619),
-       oB = ZB(2029),
-       GB = ZB(40633),
-       vB = ZB(4975),
-       kB = ZB(4958),
-       cB = ZB(40640),
-       nB = ZB(40643),
-       hB = ZB(4983),
-       zB = ZB(40721),
-       FB = ZB(2489),
-       NB = ZB(8956),
-       gB = ZB(40606),
-       qB = ZB(8937),
-       yB = ZB(39175);
+     Vt(40724);
+     var Ot = Vt(40730),
+       qt = Vt(40745),
+       Dt = Vt(2043),
+       mt = Vt(40761),
+       dt = Vt(4963),
+       jt = Vt(4951),
+       Ht = Vt(40767),
+       Xt = Vt(40769),
+       Qt = Vt(4974),
+       lt = Vt(40858),
+       Et = Vt(2465),
+       ft = Vt(9068),
+       wt = Vt(40735),
+       yt = Vt(9052),
+       Nt = Vt(39316);
```

#### 3. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L25-L26` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L25-L26) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L25-L26)

```diff
-         const IB = hB.d.indexOf(BB);
-         if (IB < 0) throw new Error(`No core action "${BB}"`);
+         const et = Qt.c.indexOf(tt);
+         if (et < 0) throw new Error(`No core action "${tt}"`);
```

#### 4. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L41)

```diff
-         (0, FB.w)(vB.L.PadAction, BB, 0, 0, (0, FB.v)(IB, performance.now()))
+         (0, Et.u)(dt.L.PadAction, tt, 0, 0, (0, Et.r)(et, performance.now()))
```

#### 5. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L44)

```diff
-         iB(BB, GB.pd.Down)
+         St(tt, mt.Dd.Down)
```

#### 6. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L53-L57` → after: `L53-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L53-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L53-L57) · [Before (L53-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L53-L57)

```diff
-         const BB = (0, nB.j)();
-         return null !== BB && void 0 !== BB && BB.isCoreRunning ? BB : null
-       },
-       jB = BB => GB.p.playerFlags(BB.api.apiView, 0),
-       PB = BB => null !== BB && GB.p.targetBlockId(BB.api.apiView, 0) !== GB.Tc,
+         const tt = (0, Xt.g)();
+         return null !== tt && void 0 !== tt && tt.isCoreRunning ? tt : null
+       },
+       Zt = tt => mt.x.playerFlags(tt.api.apiView, 0),
+       Lt = tt => null !== tt && mt.x.targetBlockId(tt.api.apiView, 0) !== mt.ld,
```

#### 7. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L59-L60` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L59-L60) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L59-L60)

```diff
-         const BB = (0, NB.d)(),
-           IB = new gB.c;
+         const tt = (0, ft.c)(),
+           et = new wt.b;
```

#### 8. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L63)

```diff
-             (0, FB.w)(vB.L.PadLook, GB.vd.Rate, BB, IB, 0)
+             (0, Et.u)(dt.L.PadLook, mt.Jd.Rate, tt, et, 0)
```

#### 9. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L71)

```diff
-             const cB = (0, gB.l)(IB, JB, oB, kB, performance.now());
+             const Ht = (0, wt.k)(et, qt, Dt, jt, performance.now());
```

#### 10. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L74)

```diff
-             0 === nB.YH && 0 === nB.iH || (0, FB.w)(vB.L.PadLook, GB.vd.Gyro, nB.YH, nB.iH, 0)
+             0 === Xt.JR && 0 === Xt.uR || (0, Et.u)(dt.L.PadLook, mt.Jd.Gyro, Xt.JR, Xt.uR, 0)
```

#### 11. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L82)

```diff
-         return null !== BB && 0 !== (jB(BB) & GB.Bd.PadSneakToggled)
+         return null !== tt && 0 !== (Zt(tt) & mt.Pd.PadSneakToggled)
```

#### 12. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L90)

```diff
-             primaryFireDown: IB((BB => (iB(WB, GB.pd.Down | (BB ? GB.pd.Repeat : 0)), 0))),
+             primaryFireDown: et((tt => (St(bt, mt.Dd.Down | (tt ? mt.Dd.Repeat : 0)), 0))),
```

#### 13. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L111)

```diff
-               iB(GB.sd.Drop, GB.pd.Down | (BB ? GB.pd.Stack : 0))
+               St(mt.Ed.Drop, mt.Dd.Down | (tt ? mt.Dd.Stack : 0))
```

#### 14. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L136)

```diff
-                 bits: GB.ud.Peek,
+                 bits: mt.Hd.Peek,
```

#### 15. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L139)

```diff
-               const IB = BB.sneakHeld ? GB.ud.SneakHeld : 0;
+               const et = tt.sneakHeld ? mt.Hd.SneakHeld : 0;
```

#### 16. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L141)

```diff
-                 bits: IB | GB.ud.SneakHoldMode,
+                 bits: et | mt.Hd.SneakHoldMode,
```

#### 17. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L148)

```diff
-             null !== (JB = MB()) && void 0 !== JB && JB.padMove(BB.x, BB.y, BB.magnitude, BB.headingOffset, (BB => GB.ud.Active | (BB.jumpHeld ? GB.ud.JumpHeld : 0) | (BB.jumpPressed ? GB.ud.JumpPressed : 0) | (BB.running ? GB.ud.Running : 0) | (BB.sprintHeld ? GB.ud.SprintHeld : … [truncated]
+             null !== (qt = Pt()) && void 0 !== qt && qt.padMove(tt.x, tt.y, tt.magnitude, tt.headingOffset, (tt => mt.Hd.Active | (tt.jumpHeld ? mt.Hd.JumpHeld : 0) | (tt.jumpPressed ? mt.Hd.JumpPressed : 0) | (tt.running ? mt.Hd.Running : 0) | (tt.sprintHeld ? mt.Hd.SprintHeld : … [truncated]
```

#### 18. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L152-L153` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L152-L153) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L152-L153)

```diff
-             IB && (IB = !(null !== (BB = MB()) && void 0 !== BB && BB.padMove(0, 0, 0, 0, 0, 0)), TB(), ZB = (0, kB.u)((() => {
-               TB(), (0, qB.f)(rB())
+             et && (et = !(null !== (tt = Pt()) && void 0 !== tt && tt.padMove(0, 0, 0, 0, 0, 0)), Ot(), Vt = (0, jt.p)((() => {
+               Ot(), (0, yt.d)(kt())
```

#### 19. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L159)

```diff
-             "touch" === BB ? ((0, qB.f)(!1), null !== (ZB = MB()) && void 0 !== ZB && ZB.padMove(0, 0, 0, 0, GB.ud.EndToggle, 0) && (IB = !1)) : "gamepad" === BB && (0, qB.f)(rB())
+             "touch" === tt ? ((0, yt.d)(!1), null !== (Vt = Pt()) && void 0 !== Vt && Vt.padMove(0, 0, 0, 0, mt.Hd.EndToggle, 0) && (et = !1)) : "gamepad" === tt && (0, yt.d)(kt())
```

#### 20. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L168)

```diff
-             return null !== BB && 0 !== (jB(BB) & GB.Bd.Replay)
+             return null !== tt && 0 !== (Zt(tt) & mt.Pd.Replay)
```

#### 21. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L172)

```diff
-             return null !== BB && 0 !== (jB(BB) & GB.Bd.FreeCam)
+             return null !== tt && 0 !== (Zt(tt) & mt.Pd.FreeCam)
```

#### 22. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L177-L179` → after: `L177-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L177-L179) · [Before (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L177-L179)

```diff
-             return !(null !== (BB = MB()) && void 0 !== BB && BB.items.sv())
-           },
-           pickBlockAllowed: () => !!oB.c.get("creative") && !!oB.c.get("canPickBlocks"),
+             return !(null !== (tt = Pt()) && void 0 !== tt && tt.items.Pd())
+           },
+           pickBlockAllowed: () => !!Dt.b.get("creative") && !!Dt.b.get("canPickBlocks"),
```

#### 23. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L181-L183` → after: `L181-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L181-L183) · [Before (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L181-L183)

```diff
-             iB(GB.sd.Hotbar, GB.pd.Down | (BB > 0 ? GB.pd.Next : 0))
-           },
-           hasFullInventory: cB.p,
+             St(mt.Ed.Hotbar, mt.Dd.Down | (tt > 0 ? mt.Dd.Next : 0))
+           },
+           hasFullInventory: Ht.n,
```

#### 24. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L185-L186` → after: `L185-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L185-L186) · [Before (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L185-L186)

```diff
-             lobbyLeaderboardInfo: oB.c.get("lobbyLeaderboardInfo"),
-             lobbyManage: oB.c.get("lobbyManage")
+             lobbyLeaderboardInfo: Dt.b.get("lobbyLeaderboardInfo"),
+             lobbyManage: Dt.b.get("lobbyManage")
```

#### 25. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L192-L194` → after: `L192-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L192-L194) · [Before (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L192-L194)

```diff
-               holdingGun: !1 !== (null === JB || void 0 === JB ? void 0 : JB.localPlayerAlive()) && "Gun" === (null === JB || void 0 === JB || null === (BB = JB.items.sv()) || void 0 === BB || null === (IB = BB.typeObj) || void 0 === IB ? void 0 : IB.type),
-               customButtons: null !== (ZB = oB.c.get("customButtons")) && void 0 !== ZB ? ZB : null,
-               touchscreenActionButton: null !== (TB = oB.c.get("touchscreenActionButton")) && void 0 !== TB ? TB : null
+               holdingGun: !1 !== (null === qt || void 0 === qt ? void 0 : qt.localPlayerAlive()) && "Gun" === (null === qt || void 0 === qt || null === (tt = qt.items.Pd()) || void 0 === tt || null === (et = tt.typeObj) || void 0 === et ? void 0 : et.type),
+               customButtons: null !== (Vt = Dt.b.get("customButtons")) && void 0 !== Vt ? Vt : null,
+               touchscreenActionButton: null !== (Ot = Dt.b.get("touchscreenActionButton")) && void 0 !== Ot ? Ot : null
```

#### 26. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L203-L204` → after: `L203-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L203-L204) · [Before (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L203-L204)

```diff
-         const BB = (0, JB.b)(mB()),
-           IB = (0, TB.e)(),
+         const tt = (0, qt.d)(Gt()),
+           et = (0, Ot.b)(),
```

#### 27. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L211)

```diff
-   4958: (BB, IB, ZB) => {
+   4951: (tt, et, Vt) => {
```

#### 28. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L214)

```diff
-       B: () => UB,
+       C: () => dt,
```

#### 29. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L216-L221` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L216-L219) · [Before (L216-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L216-L221)

```diff
-       H: () => vB,
-       I: () => OB,
-       b: () => wB,
-       e: () => dB,
-       f: () => HB,
-       g: () => aB,
+       c: () => ht,
+       d: () => Jt,
+       h: () => It,
+       i: () => Rt,
```

#### 30. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L223` → after: `L221-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L221-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L221-L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L223)

```diff
-       n: () => QB,
+       k: () => ut,
+       m: () => bt,
+       o: () => Ct,
```

#### 31. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L225-L227` → after: `L225-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L225-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L225-L227) · [Before (L225-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L225-L227)

```diff
-       s: () => CB,
-       u: () => YB,
-       y: () => iB
+       t: () => St,
+       x: () => ct,
+       z: () => Mt
```

#### 32. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L229)

```diff
-     var TB = ZB(4960);
+     var Ot = Vt(4958);
```

#### 33. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L238)

```diff
-       oB = null !== BB && void 0 !== BB ? BB : JB
+       Dt = null !== tt && void 0 !== tt ? tt : qt
```

#### 34. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L330)

```diff
-       const oB = (0, TB.j)(IB),
+       const Dt = (0, Ot.f)(et),
```

#### 35. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L362)

```diff
-   4983: (BB, IB, ZB) => {
+   4974: (tt, et, Vt) => {
```

#### 36. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L364-L365` → after: `L364-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L364-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L364-L366) · [Before (L364-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L364-L365)

```diff
-       d: () => JB,
-       f: () => oB,
+       c: () => qt,
+       e: () => Dt,
+       g: () => mt,
```

#### 37. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L367-L368` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L368) · [Before (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L367-L368)

```diff
-       i: () => TB,
-       k: () => vB
+       i: () => dt
```

#### 38. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L640` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L640) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L640)

```diff
-   40721: (BB, IB, ZB) => {
+   40858: (tt, et, Vt) => {
```

#### 39. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L643` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L643) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L643)

```diff
-       g: () => oB,
+       i: () => Dt,
```

#### 40. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L661` → after: `L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L661) · [Before (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L661)

```diff
-   4990: (BB, IB, ZB) => {
+   4980: (tt, et, Vt) => {
```

#### 41. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L663-L665` → after: `L663-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L663-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L663-L665) · [Before (L663-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L663-L665)

```diff
-       b: () => vB,
-       d: () => GB,
-       f: () => cB
+       e: () => dt,
+       f: () => mt,
+       g: () => Ht
```

#### 42. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L667-L668` → after: `L667-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L667-L668) · [Before (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L667-L668)

```diff
-     var TB = ZB(2481),
-       JB = ZB(2489);
+     var Ot = Vt(2458),
+       qt = Vt(2465);
```

#### 43. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L679` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L679) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L679)

```diff
-           JB !== IB && (IB = JB, BB(TB.d.UiCapture, TB.o.Keyboard, 0, 0, JB ? TB.o.Keyboard : 0))
+           qt !== et && (et = qt, tt(Ot.g.UiCapture, Ot.u.Keyboard, 0, 0, qt ? Ot.u.Keyboard : 0))
```

#### 44. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L703` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L703) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L703)

```diff
-       kB.set(TB, (null !== (ZB = kB.get(TB)) && void 0 !== ZB ? ZB : 0) & ~BB | IB & BB);
+       jt.set(Ot, (null !== (Vt = jt.get(Ot)) && void 0 !== Vt ? Vt : 0) & ~tt | et & tt);
```

#### 45. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L706` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L706) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L706)

```diff
-       return (0, JB.D)(BB, oB & BB)
+       return (0, qt.A)(tt, Dt & tt)
```

#### 46. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L709` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L709) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L709)

```diff
-   36964: (BB, IB, ZB) => {
+   37172: (tt, et, Vt) => {
```

#### 47. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L726-L727` → after: `L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L726) · [Before (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L726-L727)

```diff
-       d: () => GB,
-       h: () => TB,
+       e: () => mt,
```

#### 48. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L729` → after: `L728-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L728-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L728-L729) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L729)

```diff
-       k: () => JB
+       l: () => Dt,
+       o: () => qt
```

#### 49. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L732` → after: `L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L732) · [Before (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L732)

```diff
-   36958: (BB, IB, ZB) => {
+   37164: (tt, et, Vt) => {
```

#### 50. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L734` → after: `L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L734) · [Before (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L734)

```diff
-       c: () => cB
+       b: () => Ht
```

#### 51. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L736-L737` → after: `L736-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L736-L737) · [Before (L736-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L736-L737)

```diff
-     var TB = ZB(36964),
-       JB = ZB(9296);
+     var Ot = Vt(37172),
+       qt = Vt(9425);
```

#### 52. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L742)

```diff
-     for (const nB of Object.keys(JB.h))(0, TB.h)(nB) ? oB.push(nB) : (0, TB.k)(nB) && GB.push(nB), (0, TB.i)(nB) && vB.push(nB), (nB.includes(" Bed Head") || nB.includes(" Strongbed Head")) && kB.push(nB);
+     for (const Xt of Object.keys(qt.l))(0, Ot.i)(Xt) ? Dt.push(Xt) : (0, Ot.o)(Xt) && mt.push(Xt), (0, Ot.l)(Xt) && dt.push(Xt), (Xt.includes(" Bed Head") || Xt.includes(" Strongbed Head")) && jt.push(Xt);
```

#### 53. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L752` → after: `L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L752) · [Before (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L752)

```diff
-   6635: (BB, IB, ZB) => {
+   6667: (tt, et, Vt) => {
```

#### 54. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L754` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L754) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L754)

```diff
-       b: () => GB,
+       d: () => mt,
```

#### 55. `bundles/bloxd.io/chunks/js/89.js` (Changed code · before: `L756-L760` → after: `L756-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-07ac2affe6d72fed6eb7bbedc1bd5c1548c14dc03016e9960c8ef08f720952a8) · [After (L756-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/89.js#L756-L760) · [Before (L756-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/89.js#L756-L760)

```diff
-       g: () => kB,
-       h: () => oB,
-       l: () => cB,
-       o: () => TB,
-       p: () => vB
+       i: () => jt,
+       j: () => Dt,
+       m: () => Ht,
+       n: () => Ot,
+       q: () => dt
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 1. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L4)

```diff
-   4975: (BB, IB, ZB) => {
+   4963: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7-L8` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L7) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L7-L8)

```diff
-       B: () => QB,
-       Bb: () => XB,
+       Cb: () => kt,
```

#### 3. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10-L11` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L9) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L10-L11)

```diff
-       E: () => vB,
-       Fb: () => rB,
+       Eb: () => yt,
```

#### 4. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L13` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L11) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L13)

```diff
-       Ib: () => qB,
+       Hb: () => ct,
```

#### 5. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17-L19` → after: `L15-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L15-L18) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L17-L19)

```diff
-       N: () => VB,
-       P: () => hB,
-       Pb: () => iB,
+       M: () => nt,
+       Nb: () => Gt,
+       Ob: () => Yt,
+       Q: () => Qt,
```

#### 6. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L21-L22` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L20) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L21-L22)

```diff
-       Tb: () => mB,
-       V: () => nB,
+       Sb: () => ot,
```

#### 7. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L25-L27` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L23-L24) · [Before (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L25-L27)

```diff
-       Yb: () => LB,
-       Z: () => CB,
-       _: () => kB,
+       X: () => Ht,
+       Zb: () => At,
```

#### 8. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L32-L35` → after: `L28-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L28-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L28-L32) · [Before (L32-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L32-L35)

```diff
-       c: () => UB,
-       cc: () => OB,
-       eb: () => MB,
-       f: () => yB,
+       d: () => Mt,
+       db: () => wt,
+       e: () => Nt,
+       ec: () => pt,
+       fb: () => ft,
```

#### 9. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L39-L41` → after: `L37-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L37-L40) · [Before (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L39-L41)

```diff
-       i: () => DB,
-       kb: () => HB,
-       kc: () => JB,
+       ib: () => Pt,
+       jb: () => Zt,
+       k: () => bt,
+       l: () => Tt,
```

#### 10. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L44-L50` → after: `L43-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L43-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L43-L49) · [Before (L44-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L44-L50)

```diff
-       n: () => EB,
-       nc: () => KB,
-       pb: () => tB,
-       qb: () => lB,
-       r: () => FB,
-       t: () => wB,
-       tb: () => eB,
+       mb: () => Lt,
+       o: () => ht,
+       ob: () => Bt,
+       q: () => xt,
+       sb: () => it,
+       u: () => Kt,
+       vb: () => rt,
```

#### 11. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L52-L53` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L51-L53) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L52-L53)

```diff
-       xb: () => RB,
-       y: () => sB
+       wb: () => Ft,
+       yb: () => zt,
+       z: () => mt
```

#### 12. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L580` → after: `L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L580) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L580)

```diff
-   4969: (BB, IB, ZB) => {
+   4960: (tt, et, Vt) => {
```

#### 13. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L582-L589` → after: `L582-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L582-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L582-L589) · [Before (L582-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L582-L589)

```diff
-       $: () => TB.E,
-       Ad: () => TB.kc,
-       B: () => GB,
-       Bb: () => KB,
-       Bc: () => TB.hb,
-       C: () => jB,
-       Db: () => TB.P,
-       Dd: () => oB,
+       $b: () => vt,
+       Ac: () => Mt,
+       Ae: () => Lt,
+       Bd: () => Ot._b,
+       Cb: () => Xt,
+       Cd: () => Ot.bc,
+       D: () => Zt,
+       Dc: () => me,
```

#### 14. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L591-L594` → after: `L591-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L591-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L591-L596) · [Before (L591-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L591-L594)

```diff
-       Fb: () => ZI,
-       Fc: () => TB.kb,
-       G: () => gI,
-       Gb: () => JI,
+       Fb: () => Ot.L,
+       Fc: () => Ot.hb,
+       Fe: () => Gt,
+       Gc: () => Ot.ib,
+       Gd: () => Ot.fc,
+       Ge: () => Me,
```

#### 15. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L596-L607` → after: `L598-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L598-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L598-L609) · [Before (L596-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L596-L607)

```diff
-       Hb: () => TB.S,
-       Hd: () => yB,
-       Jc: () => TB.lb,
-       Jd: () => nI,
-       K: () => TB.n,
-       L: () => cB,
-       Lb: () => JB.c,
-       Ld: () => eB,
-       Mc: () => TB.tb,
-       Nb: () => OB,
-       Nd: () => fB,
-       O: () => TB.r,
+       Ib: () => Yt,
+       Ic: () => Ot.jb,
+       Id: () => Dt,
+       K: () => nt,
+       Kb: () => Ve,
+       Ke: () => ft,
+       Lb: () => st,
+       M: () => Ot.l,
+       Mc: () => Ot.lb,
+       Md: () => Nt,
+       Ob: () => Ot.Q,
+       Pd: () => Qe,
```

#### 16. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L610-L614` → after: `L612-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L612-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L612-L615) · [Before (L610-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L610-L614)

```diff
-       Qc: () => qI,
-       Qd: () => LB,
-       R: () => TB.t,
-       Rc: () => zI,
-       Sb: () => HB,
+       Qc: () => Ot.mb,
+       R: () => Ot.m,
+       Rb: () => De,
+       Rd: () => rt,
```

#### 17. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L616-L617` → after: `L617-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L617-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L617-L619) · [Before (L616-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L616-L617)

```diff
-       U: () => DB,
-       Uc: () => GI,
+       Uc: () => Ot.vb,
+       V: () => ee,
+       Vb: () => Ot.S,
```

#### 18. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L619-L638` → after: `L621-L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L621-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L621-L639) · [Before (L619-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L619-L638)

```diff
-       Wb: () => pB,
-       Wc: () => TB.xb,
-       Wd: () => xB,
-       X: () => TB.B,
-       Y: () => TB.D,
-       Yb: () => TB.Z,
-       Yc: () => TB.Bb,
-       _d: () => bB,
-       ac: () => MB,
-       ad: () => TB.Fb,
-       b: () => TI,
-       cb: () => hB,
-       ce: () => cI,
-       dc: () => QB,
-       e: () => qB,
-       ed: () => SB,
- ... (4 more removed lines; see GitHub link above)
+       Xb: () => qt.e,
+       Xc: () => Ne,
+       Yc: () => Ee,
+       Z: () => Ot.o,
+       Zc: () => de,
+       Zd: () => Bt,
+       ad: () => Ot.wb,
+       bb: () => gt,
+       bc: () => zt,
+       d: () => qe,
+       db: () => Ot.w,
+       de: () => it,
+       ec: () => It,
+       ed: () => Ot.yb,
+       f: () => yt,
+       fd: () => Ot.Cb,
+ ... (3 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L640-L649` → after: `L641-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L641-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L641-L651) · [Before (L640-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L640-L649)

```diff
-       id: () => TB.Lb,
-       ie: () => EB,
-       j: () => hI,
-       jc: () => dB,
-       jd: () => TB.Pb,
-       kb: () => TB.G,
-       ld: () => TB.Tb,
-       le: () => rB,
-       mb: () => TB.J,
-       n: () => YB,
+       i: () => le,
+       ic: () => ct,
+       je: () => pt,
+       kc: () => Ot.$,
+       l: () => Wt,
+       lb: () => Ot.D,
+       lc: () => Pt,
+       ld: () => Ot.Hb,
+       mb: () => Qt,
+       md: () => Ot.Lb,
+       me: () => Xe,
```

#### 20. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L651-L655` → after: `L653-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L653-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L653-L657) · [Before (L651-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L651-L655)

```diff
-       od: () => TB.Yb,
-       oe: () => RB,
-       pc: () => JB.e,
-       q: () => wB,
-       qb: () => uB,
+       nd: () => Ot.Nb,
+       p: () => ht,
+       pb: () => bt,
+       q: () => Ot.g,
+       qb: () => Ot.G,
```

#### 21. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L657-L664` → after: `L659-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L659-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L659-L664) · [Before (L657-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L657-L664)

```diff
-       rd: () => TB._b,
-       re: () => PB,
-       s: () => TB.i,
-       sd: () => TB.bc,
-       tb: () => vI,
-       tc: () => oI,
-       ub: () => nB,
-       ud: () => zB,
+       qe: () => ae,
+       rd: () => Ot.Sb,
+       s: () => we,
+       sb: () => Ot.J,
+       uc: () => Jt,
+       ud: () => Ot.Vb,
```

#### 22. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L666-L673` → after: `L666-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L666-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L666-L674) · [Before (L666-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L666-L673)

```diff
-       vb: () => TB.L,
-       vd: () => iB,
-       w: () => NI,
-       wc: () => TB.bb,
-       xb: () => AB,
-       xd: () => TB.cc,
-       xe: () => mB,
-       yc: () => TB.eb,
+       v: () => Rt,
+       vb: () => Ut,
+       ve: () => Tt,
+       wc: () => fe,
+       wd: () => Ot.Zb,
+       yb: () => je,
+       yc: () => qt.k,
+       yd: () => lt,
+       ye: () => kt,
```

#### 23. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L675-L676` → after: `L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L676) · [Before (L675-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L675-L676)

```diff
-       zb: () => II,
-       zd: () => TB.fc,
+       zd: () => St,
```

#### 24. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L679-L681` → after: `L679-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L679-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L679-L681) · [Before (L679-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L679-L681)

```diff
-     var TB = ZB(4975),
-       JB = ZB(2481);
-     const oB = Math.round(1e3 / TB.kc),
+     var Ot = Vt(4963),
+       qt = Vt(2458);
+     const Dt = Math.round(1e3 / Ot.fc),
```

#### 25. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L925` → after: `L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L925) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L925)

```diff
-       for (const [IB, ZB] of Object.entries(TB.n))
+       for (const [et, Vt] of Object.entries(Ot.l))
```

#### 26. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L927` → after: `L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L927) · [Before (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L927)

```diff
-       return `Unknown${BB}`
+       return `Unknown${tt}`
```

#### 27. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L944` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L944) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L944)

```diff
-   4960: (BB, IB, ZB) => {
+   4958: (tt, et, Vt) => {
```

#### 28. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L947-L948` → after: `L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L948) · [Before (L947-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L947-L948)

```diff
-       g: () => oB,
-       j: () => JB
+       f: () => qt
```

#### 29. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L950` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L950) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L950)

```diff
-     var TB = ZB(4969);
+     var Ot = Vt(4960);
```

#### 30. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L959)

```diff
-         case TB.$.Drawn:
+         case Ot.lb.Drawn:
```

#### 31. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L961` → after: `L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/90.js#L961) · [Before (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/90.js#L961)

```diff
-         case TB.$.Paced:
+         case Ot.lb.Paced:
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/91.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/91.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619)

#### 1. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L4)

```diff
-   36398: (BB, IB, ZB) => {
+   36616: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L6-L7)

```diff
-       d: () => nB,
-       h: () => vB,
+       e: () => Xt,
+       g: () => dt,
```

#### 3. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L12-L14` → after: `L12-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L12-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L12-L14) · [Before (L12-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L12-L14)

```diff
-     var TB = ZB(671),
-       JB = ZB(1821),
-       oB = ZB(4975);
+     var Ot = Vt(712),
+       qt = Vt(1842),
+       Dt = Vt(4963);
```

#### 4. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L17)

```diff
-         this.width = BB, this.ah = IB, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(BB * IB)
+         this.width = tt, this.uQ = et, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(tt * et)
```

#### 5. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L24)

```diff
-         this.next = (this.next + 1) % this.ah, this.size = Math.min(this.size + 1, this.ah)
+         this.next = (this.next + 1) % this.uQ, this.size = Math.min(this.size + 1, this.uQ)
```

#### 6. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L30)

```diff
-           TB = (this.next - this.size + this.ah) % this.ah;
+           Ot = (this.next - this.size + this.uQ) % this.uQ;
```

#### 7. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L32)

```diff
-           const oB = (TB + JB) % this.ah * this.width;
+           const Dt = (Ot + qt) % this.uQ * this.width;
```

#### 8. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L44-L47` → after: `L44-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L44-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L44-L47) · [Before (L44-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L44-L47)

```diff
-         XF: 1,
-         gM: 2,
-         YM: 3,
-         Fq: 4
+         hE: 1,
+         qI: 2,
+         mI: 3,
+         my: 4
```

#### 9. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L81)

```diff
-         this.steps = new GB(vB, hB), this.events = new GB(FB.length, hB), this.frames = new GB(NB.length, hB), this.cameraSets = new GB(oB.f, 256), this.changes = new GB(qB.length, 256)
+         this.steps = new mt(dt, Qt), this.events = new mt(Et.length, Qt), this.frames = new mt(ft.length, Qt), this.cameraSets = new mt(Dt.e, 256), this.changes = new mt(yt.length, 256)
```

#### 10. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L102` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L102) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L102)

```diff
-         BB[IB + 6] !== kB.Fq && (null === (ZB = this.rings) || void 0 === ZB || ZB.steps.push(BB, IB))
+         tt[et + 6] !== jt.my && (null === (Vt = this.rings) || void 0 === Vt || Vt.steps.push(tt, et))
```

#### 11. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L133)

```diff
-         return [`look records (${this.startedClient}): ${zB.join(",")}`, ...null !== (BB = null === ZB || void 0 === ZB ? void 0 : ZB.steps.lines()) && void 0 !== BB ? BB : [], `mousemove events: ${FB.join(",")}`, ...null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.event … [truncated]
+         return [`look records (${this.startedClient}): ${lt.join(",")}`, ...null !== (tt = null === Vt || void 0 === Vt ? void 0 : Vt.steps.lines()) && void 0 !== tt ? tt : [], `mousemove events: ${Et.join(",")}`, ...null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.event … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L142)

```diff
-             const oB = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.rows(TB, JB)) && void 0 !== ZB ? ZB : [];
+             const Dt = null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.rows(Ot, qt)) && void 0 !== Vt ? Vt : [];
```

#### 13. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L150-L151` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L150-L151) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L150-L151)

```diff
-           version: TB.b,
-           client: null !== (ZB = this.startedClient) && void 0 !== ZB ? ZB : "not started",
+           version: Ot.d,
+           client: null !== (Vt = this.startedClient) && void 0 !== Vt ? Vt : "not started",
```

#### 14. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L162` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L162) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L162)

```diff
-           mq: null !== document.pointerLockElement,
+           zy: null !== document.pointerLockElement,
```

#### 15. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L177)

```diff
-         (0, JB.d)(new Blob([IB], {
+         (0, qt.c)(new Blob([et], {
```

#### 16. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L183` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L183) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L183)

```diff
-   36396: (BB, IB, ZB) => {
+   36610: (tt, et, Vt) => {
```

#### 17. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L191-L194` → after: `L191-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L191-L194) · [Before (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L191-L194)

```diff
-     var TB = ZB(4975),
-       JB = ZB(2973),
-       oB = ZB(1956);
-     const GB = new Map(Object.entries(TB.m).map((BB => {
+     var Ot = Vt(4963),
+       qt = Vt(2902),
+       Dt = Vt(1993);
+     const mt = new Map(Object.entries(Ot.k).map((tt => {
```

#### 18. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L200)

```diff
-       return (0, oB.K)(BB).toFixed(1)
+       return (0, Dt.G)(tt).toFixed(1)
```

#### 19. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L204)

```diff
-       return `camera set by ${GB.get(BB[IB+1])}: heading ${`${vB(BB[IB+2])} -> ${vB(BB[IB+4])}`} deg, pitch ${`${vB(BB[IB+3])} -> ${vB(BB[IB+5])}`} deg, at ${BB[IB].toFixed(1)} ms`
+       return `camera set by ${mt.get(tt[et+1])}: heading ${`${dt(tt[et+2])} -> ${dt(tt[et+4])}`} deg, pitch ${`${dt(tt[et+3])} -> ${dt(tt[et+5])}`} deg, at ${tt[et].toFixed(1)} ms`
```

#### 20. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L206` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L206) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L206)

```diff
-     var cB = ZB(36398);
+     var Ht = Vt(36616);
```

#### 21. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L218)

```diff
-         this.frames = 0, this.looked = 0, this.idle = 0, this.gM = 0, this.pastLimit = 0, this.lockSkips = 0, this.Fq = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
+         this.frames = 0, this.looked = 0, this.idle = 0, this.qI = 0, this.pastLimit = 0, this.lockSkips = 0, this.my = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
```

#### 22. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L221)

```diff
-         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.gM > 0 || this.dropped > 0 || this.cameraSets > 0
+         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.qI > 0 || this.dropped > 0 || this.cameraSets > 0
```

#### 23. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L224` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L224) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L224)

```diff
-         return this.gM > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
+         return this.qI > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
```

#### 24. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L230)

```diff
-         this.topicOn = (0, JB.t)("look"), this.remote = (0, JB.u)(), this.tally = new FB, this.takes = null, this.started = !1, this.record = function(IB) {
+         this.topicOn = (0, qt.v)("look"), this.remote = (0, qt.x)(), this.tally = new Et, this.takes = null, this.started = !1, this.record = function(et) {
```

#### 25. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L247-L250` → after: `L247-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L247-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L247-L250) · [Before (L247-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L247-L250)

```diff
-             case cB.k.Fq:
-               return void qB.Fq++;
-             case cB.k.YM:
-               return qB.lockSkips++, void(0 === oB && 0 === GB || BB.outlier(`lock skip dropped raw (${hB(oB)}, ${hB(GB)}) at ${zB(TB)} ms`))
+             case Ht.k.my:
+               return void yt.my++;
+             case Ht.k.mI:
+               return yt.lockSkips++, void(0 === Dt && 0 === mt || tt.outlier(`lock skip dropped raw (${Qt(Dt)}, ${Qt(mt)}) at ${lt(Ot)} ms`))
```

#### 26. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L254-L255` → after: `L254-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L254-L255) · [Before (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L254-L255)

```diff
-             UB = `raw (${hB(oB)}, ${hB(GB)}) over ${zB(JB)} ms, limit ${hB(gB)}, filter v (${FB.toFixed(3)}, ${NB.toFixed(3)}) px/ms, at ${zB(TB)} ms`;
-           nB === cB.k.gM ? (qB.gM++, BB.outlier(`spike put right: ${UB} -> turned (${hB(vB)}, ${hB(kB)})`)) : yB ? (qB.pastLimit++, BB.outlier(`kept past limit: ${UB}`)) : JB > 50 && (qB.longFrames++, BB.remote || BB.outlier(`long frame: ${UB}, turned in full`))
+             Mt = `raw (${Qt(Dt)}, ${Qt(mt)}) over ${lt(qt)} ms, limit ${Qt(wt)}, filter v (${Et.toFixed(3)}, ${ft.toFixed(3)}) px/ms, at ${lt(Ot)} ms`;
+           Xt === Ht.k.qI ? (yt.qI++, tt.outlier(`spike put right: ${Mt} -> turned (${Qt(dt)}, ${Qt(jt)})`)) : Nt ? (yt.pastLimit++, tt.outlier(`kept past limit: ${Mt}`)) : qt > 50 && (yt.longFrames++, tt.remote || tt.outlier(`long frame: ${Mt}, turned in full`))
```

#### 27. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L266` → after: `L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L266) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L266)

```diff
-           ZB.eventMax = Math.max(ZB.eventMax, oB), oB >= 200 && (ZB.bigEvents++, this.eventOutlier(`big mousemove (${TB}, ${JB}) at ${zB(BB.timeStamp)} ms, lock ${IB?"sv":"free"}`))
+           Vt.eventMax = Math.max(Vt.eventMax, Dt), Dt >= 200 && (Vt.bigEvents++, this.eventOutlier(`big mousemove (${Ot}, ${qt}) at ${lt(tt.timeStamp)} ms, lock ${et?"Pd":"free"}`))
```

#### 28. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L269)

```diff
-           BB ? cB.o.lockGained() : cB.o.change(cB.d.lockLost), this.topicOn && (0, JB.o)("look", `pointer lock ${BB?`gained (${BB.tagName.toLowerCase()})`:"lost"} at ${zB(performance.now())} ms`)
+           tt ? Ht.o.lockGained() : Ht.o.change(Ht.e.lockLost), this.topicOn && (0, qt.n)("look", `pointer lock ${tt?`gained (${tt.tagName.toLowerCase()})`:"lost"} at ${lt(performance.now())} ms`)
```

#### 29. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L271)

```diff
-           cB.o.change(cB.d.lockError), this.topicOn && (0, JB.o)("look", `pointer lock request failed at ${zB(performance.now())} ms`)
+           Ht.o.change(Ht.e.lockError), this.topicOn && (0, qt.n)("look", `pointer lock request failed at ${lt(performance.now())} ms`)
```

#### 30. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L273)

```diff
-           cB.o.change("hidden" === document.visibilityState ? cB.d.hidden : cB.d.visible), this.topicOn && (0, JB.o)("look", `page ${document.visibilityState} at ${zB(performance.now())} ms`)
+           Ht.o.change("hidden" === document.visibilityState ? Ht.e.hidden : Ht.e.visible), this.topicOn && (0, qt.n)("look", `page ${document.visibilityState} at ${lt(performance.now())} ms`)
```

#### 31. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L275)

```diff
-           cB.o.change(cB.d.focus)
+           Ht.o.change(Ht.e.focus)
```

#### 32. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L277)

```diff
-           cB.o.change(cB.d.blur)
+           Ht.o.change(Ht.e.blur)
```

#### 33. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L283-L284` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L283-L284) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L283-L284)

```diff
-             ZB = [`${BB.frames} frames (${BB.looked} looked, ${BB.idle} idle${"wasm"===cB.o.client?`, ${BB.Fq} carried`:""})`, `dt avg ${zB(IB)} min ${zB(BB.dtMin)} max ${zB(BB.dtMax)}, ${BB.longFrames} long`, `${BB.events} mousemoves (max ${hB(BB.eventMax)} px, ${BB.bigEvents} b … [truncated]
-           BB.dropped > 0 && ZB.push(`${BB.dropped} doubled spike copies dropped`), BB.cameraSets > 0 && ZB.push(`${BB.cameraSets} camera sets`), BB.cameraSetsLost > 0 && ZB.push(`${BB.cameraSetsLost} camera set records lost`), BB.lost > 0 && ZB.push(`${BB.lost} records lost`), BB … [truncated]
+             Vt = [`${tt.frames} frames (${tt.looked} looked, ${tt.idle} idle${"wasm"===Ht.o.client?`, ${tt.my} carried`:""})`, `dt avg ${lt(et)} min ${lt(tt.dtMin)} max ${lt(tt.dtMax)}, ${tt.longFrames} long`, `${tt.events} mousemoves (max ${Qt(tt.eventMax)} px, ${tt.bigEvents} b … [truncated]
+           tt.dropped > 0 && Vt.push(`${tt.dropped} doubled spike copies dropped`), tt.cameraSets > 0 && Vt.push(`${tt.cameraSets} camera sets`), tt.cameraSetsLost > 0 && Vt.push(`${tt.cameraSetsLost} camera set records lost`), tt.lost > 0 && Vt.push(`${tt.lost} records lost`), tt … [truncated]
```

#### 34. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L292` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L292) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L292)

```diff
-           (0, JB.o)("look", `start: ${BB} client, dpr ${window.devicePixelRatio}, screen ${IB.width}x${IB.height}, pointer lock ${document.pointerLockElement?"sv":"free"}`)
+           (0, qt.n)("look", `start: ${tt} client, dpr ${window.devicePixelRatio}, screen ${et.width}x${et.height}, pointer lock ${document.pointerLockElement?"Pd":"free"}`)
```

#### 35. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L297` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L297) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L297)

```diff
-         }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychang … [truncated]
+         }), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychang … [truncated]
```

#### 36. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L301)

```diff
-         IB.outliers >= 20 ? IB.suppressed++ : (IB.outliers++, (0, JB.o)("look", BB))
+         et.outliers >= 20 ? et.suppressed++ : (et.outliers++, (0, qt.n)("look", tt))
```

#### 37. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L305` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L305) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L305)

```diff
-         IB.eventLines >= 10 ? IB.suppressed++ : (IB.eventLines++, (0, JB.o)("look", BB))
+         et.eventLines >= 10 ? et.suppressed++ : (et.eventLines++, (0, qt.n)("look", tt))
```

#### 38. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L311-L312` → after: `L311-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L311-L312) · [Before (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L311-L312)

```diff
-           this.counted(cB.d.stepsLost, BB[0]), this.counted(cB.d.droppedCopies, BB[1]);
-           for (let IB = nB; IB + cB.h <= BB.length; IB += cB.h) this.record(BB, IB)
+           this.counted(Ht.e.stepsLost, tt[0]), this.counted(Ht.e.droppedCopies, tt[1]);
+           for (let et = Xt; et + Ht.g <= tt.length; et += Ht.g) this.record(tt, et)
```

#### 39. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L315-L317` → after: `L315-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L315-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L315-L317) · [Before (L315-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L315-L317)

```diff
-         if (IB.length >= TB.c) {
-           this.counted(cB.d.cameraSetsLost, IB[0]);
-           for (let BB = TB.c; BB + TB.f <= IB.length; BB += TB.f) cB.o.cameraSet(IB, BB), this.topicOn && (this.tally.cameraSets++, this.outlier(kB(IB, BB)))
+         if (et.length >= Ot.d) {
+           this.counted(Ht.e.cameraSetsLost, et[0]);
+           for (let tt = Ot.d; tt + Ot.e <= et.length; tt += Ot.e) Ht.o.cameraSet(et, tt), this.topicOn && (this.tally.cameraSets++, this.outlier(jt(et, tt)))
```

#### 40. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L321` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L321) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L321)

```diff
-         this.counted(cB.d.droppedCopies, 1)
+         this.counted(Ht.e.droppedCopies, 1)
```

#### 41. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L327` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L327) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L327)

```diff
-         BB === cB.d.droppedCopies ? ZB.dropped += IB : BB === cB.d.stepsLost ? ZB.lost += IB : ZB.cameraSetsLost += IB
+         tt === Ht.e.droppedCopies ? Vt.dropped += et : tt === Ht.e.stepsLost ? Vt.lost += et : Vt.cameraSetsLost += et
```

#### 42. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L355)

```diff
-       } = await ZB.e(29).then((() => ZB(34050)));
+       } = await Vt.e(29).then((() => Vt(34239)));
```

#### 43. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L362)

```diff
-   4975: (BB, IB, ZB) => {
+   4963: (tt, et, Vt) => {
```

#### 44. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L365-L366` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L365) · [Before (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L365-L366)

```diff
-       B: () => QB,
-       Bb: () => XB,
+       Cb: () => kt,
```

#### 45. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L368-L369` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L367) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L368-L369)

```diff
-       E: () => vB,
-       Fb: () => rB,
+       Eb: () => yt,
```

#### 46. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L371` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L369) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L371)

```diff
-       Ib: () => qB,
+       Hb: () => ct,
```

#### 47. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L375-L377` → after: `L373-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L373-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L373-L376) · [Before (L375-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L375-L377)

```diff
-       N: () => VB,
-       P: () => hB,
-       Pb: () => iB,
+       M: () => nt,
+       Nb: () => Gt,
+       Ob: () => Yt,
+       Q: () => Qt,
```

#### 48. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L379-L380` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L378) · [Before (L379-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L379-L380)

```diff
-       Tb: () => mB,
-       V: () => nB,
+       Sb: () => ot,
```

#### 49. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L383-L385` → after: `L381-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L381-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L381-L382) · [Before (L383-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L383-L385)

```diff
-       Yb: () => LB,
-       Z: () => CB,
-       _: () => kB,
+       X: () => Ht,
+       Zb: () => At,
```

#### 50. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L390-L393` → after: `L386-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L386-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L386-L390) · [Before (L390-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L390-L393)

```diff
-       c: () => UB,
-       cc: () => OB,
-       eb: () => MB,
-       f: () => yB,
+       d: () => Mt,
+       db: () => wt,
+       e: () => Nt,
+       ec: () => pt,
+       fb: () => ft,
```

#### 51. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L397-L399` → after: `L395-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L395-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L395-L398) · [Before (L397-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L397-L399)

```diff
-       i: () => DB,
-       kb: () => HB,
-       kc: () => JB,
+       ib: () => Pt,
+       jb: () => Zt,
+       k: () => bt,
+       l: () => Tt,
```

#### 52. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L402-L408` → after: `L401-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L401-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L401-L407) · [Before (L402-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L402-L408)

```diff
-       n: () => EB,
-       nc: () => KB,
-       pb: () => tB,
-       qb: () => lB,
-       r: () => FB,
-       t: () => wB,
-       tb: () => eB,
+       mb: () => Lt,
+       o: () => ht,
+       ob: () => Bt,
+       q: () => xt,
+       sb: () => it,
+       u: () => Kt,
+       vb: () => rt,
```

#### 53. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L410-L411` → after: `L409-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L409-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/91.js#L409-L411) · [Before (L410-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/91.js#L410-L411)

```diff
-       xb: () => RB,
-       y: () => sB
+       wb: () => Ft,
+       yb: () => zt,
+       z: () => mt
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (962 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 1. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L4)

```diff
-   41505: (BB, IB, ZB) => {
+   41719: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L12)

```diff
-       }] = await Promise.all([Promise.resolve().then((() => ZB(1258))), Promise.resolve().then((() => ZB(1186))), Promise.resolve().then((() => ZB(1995)))]), GB = oB.latest("connectedGame").websocketUrl;
+       }] = await Promise.all([Promise.resolve().then((() => Vt(1293))), Promise.resolve().then((() => Vt(1223))), Promise.resolve().then((() => Vt(2024)))]), mt = Dt.latest("connectedGame").websocketUrl;
```

#### 3. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L14)

```diff
-       const vB = `${TB.getHttpUrlFromWebSocketUrl(GB)}${BB}`;
+       const dt = `${Ot.getHttpUrlFromWebSocketUrl(mt)}${tt}`;
```

#### 4. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L23)

```diff
-   6694: (BB, IB, ZB) => {
+   6723: (tt, et, Vt) => {
```

#### 5. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L25)

```diff
-       e: () => JB
+       b: () => qt
```

#### 6. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L27)

```diff
-     var TB = ZB(1153);
+     var Ot = Vt(1188);
```

#### 7. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L46` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L46) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L46)

```diff
-   41500: (BB, IB, ZB) => {
+   41713: (tt, et, Vt) => {
```

#### 8. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L52` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L52) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L52)

```diff
-       JB = ZB(1091),
+       qt = Vt(1140),
```

#### 9. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L54)

```diff
-       GB = ZB(1153);
+       mt = Vt(1188);
```

#### 10. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L67)

```diff
-       const [zB, FB] = (0, TB.useState)(kB), NB = null !== cB && void 0 !== cB ? cB : zB;
+       const [lt, Et] = (0, Ot.useState)(jt), ft = null !== Ht && void 0 !== Ht ? Ht : lt;
```

#### 11. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L87-L98` → after: `L87-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L87-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L87-L98) · [Before (L87-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L87-L98)

```diff
-     var kB = ZB(1995),
-       cB = ZB(6655),
-       nB = ZB(1516),
-       hB = ZB(36918),
-       zB = ZB(1102),
-       FB = ZB(4922),
-       NB = ZB(36900),
-       gB = ZB(36935),
-       qB = ZB(1651),
-       yB = ZB(4995),
-       UB = ZB(6648);
-     const WB = new URL(qB.b).host;
+     var jt = Vt(2024),
+       Ht = Vt(6687),
+       Xt = Vt(1556),
+       Qt = Vt(37115),
+       lt = Vt(1152),
+       Et = Vt(4914),
+       ft = Vt(37107),
+       wt = Vt(37133),
+       yt = Vt(1676),
+       Nt = Vt(4986),
+       Mt = Vt(6680);
+     const bt = new URL(yt.c).host;
```

#### 12. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L104-L106` → after: `L104-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L104-L106) · [Before (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L104-L106)

```diff
-         const BB = /^docs\//i.test(IB) ? `${qB.b}/` : `${qB.b}/docs/`,
-           TB = IB.toLowerCase().replace(/^www\./, "").startsWith(`${WB}/`);
-         ZB = new URL(TB ? `https://${IB}` : IB, BB)
+         const tt = /^docs\//i.test(et) ? `${yt.c}/` : `${yt.c}/docs/`,
+           Ot = et.toLowerCase().replace(/^www\./, "").startsWith(`${bt}/`);
+         Vt = new URL(Ot ? `https://${et}` : et, tt)
```

#### 13. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L110)

```diff
-       if ("https:" !== ZB.protocol && "http:" !== ZB.protocol || ZB.host !== WB && ZB.host !== `www.${WB}`) return null;
+       if ("https:" !== Vt.protocol && "http:" !== Vt.protocol || Vt.host !== bt && Vt.host !== `www.${bt}`) return null;
```

#### 14. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L112)

```diff
-       return CB(TB) || null !== (0, yB.v)(TB) ? TB : (0, yB.u)(TB)
+       return Ct(Ot) || null !== (0, Nt.u)(Ot) ? Ot : (0, Nt.t)(Ot)
```

#### 15. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L116)

```diff
-       return BB === yB.h || BB === yB.k
+       return tt === Nt.h || tt === Nt.l
```

#### 16. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L121)

```diff
-       return null === IB ? BB : `${qB.b}${IB}`
+       return null === et ? tt : `${yt.c}${et}`
```

#### 17. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L123-L124` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L123-L124) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L123-L124)

```diff
-     var sB = ZB(212),
-       wB = ZB(41435),
+     var Kt = Vt(241),
+       ht = Vt(41639),
```

#### 18. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L191` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L191) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L191)

```diff
-         const ZB = /\w/.test(IB[0]) && /\w/.test(null !== (kB = BB[vB - 1]) && void 0 !== kB ? kB : "") || /\w/.test(null !== (cB = IB.at(-1)) && void 0 !== cB ? cB : "") && /\w/.test(null !== (nB = BB[vB + IB.length]) && void 0 !== nB ? nB : "");
+         const Vt = /\w/.test(et[0]) && /\w/.test(null !== (jt = tt[dt - 1]) && void 0 !== jt ? jt : "") || /\w/.test(null !== (Ht = et.at(-1)) && void 0 !== Ht ? Ht : "") && /\w/.test(null !== (Xt = tt[dt + et.length]) && void 0 !== Xt ? Xt : "");
```

#### 19. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L209)

```diff
-       return null !== (IB = null === (ZB = /^[ \t]*/.exec(BB)) || void 0 === ZB ? void 0 : ZB[0]) && void 0 !== IB ? IB : ""
+       return null !== (et = null === (Vt = /^[ \t]*/.exec(tt)) || void 0 === Vt ? void 0 : Vt[0]) && void 0 !== et ? et : ""
```

#### 20. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L228)

```diff
-         return (null !== (ZB = null === (TB = BB.replace(/\\`/g, "").match(/`/g)) || void 0 === TB ? void 0 : TB.length) && void 0 !== ZB ? ZB : 0) % 2 === 1 && (hB = !hB), JB || kB && IB !== nB ? BB : function(BB, IB, ZB) {
+         return (null !== (Vt = null === (Ot = tt.replace(/\\`/g, "").match(/`/g)) || void 0 === Ot ? void 0 : Ot.length) && void 0 !== Vt ? Vt : 0) % 2 === 1 && (Qt = !Qt), qt || jt && et !== Xt ? tt : function(tt, et, Vt) {
```

#### 21. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L249` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L249) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L249)

```diff
-         (null !== (GB = null === (vB = BB.replace(/\\`/g, "").match(/`/g)) || void 0 === vB ? void 0 : vB.length) && void 0 !== GB ? GB : 0) % 2 === 1 && (oB = !oB);
+         (null !== (mt = null === (dt = tt.replace(/\\`/g, "").match(/`/g)) || void 0 === dt ? void 0 : dt.length) && void 0 !== mt ? mt : 0) % 2 === 1 && (Dt = !Dt);
```

#### 22. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L253-L254)

```diff
-         const zB = null !== (kB = JB.slice(IB + 1).find((BB => "" !== BB.trim()))) && void 0 !== kB ? kB : ZB;
-         return /^(?:[([`+-]|\/(?![/*]))/.test(zB.trim()) ? BB : BB.slice(0, BB.length - BB.trimStart().length) + hB
+         const lt = null !== (jt = qt.slice(et + 1).find((tt => "" !== tt.trim()))) && void 0 !== jt ? jt : Vt;
+         return /^(?:[([`+-]|\/(?![/*]))/.test(lt.trim()) ? tt : tt.slice(0, tt.length - tt.trimStart().length) + Qt
```

#### 23. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L256)

```diff
-       return GB.trim() === BB.trim() && IB.trim() !== BB.trim() ? IB : GB
+       return mt.trim() === tt.trim() && et.trim() !== tt.trim() ? et : mt
```

#### 24. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L261)

```diff
-       return null !== (IB = BB.split("\n").find((BB => "" !== BB.trim()))) && void 0 !== IB ? IB : ""
+       return null !== (et = tt.split("\n").find((tt => "" !== tt.trim()))) && void 0 !== et ? et : ""
```

#### 25. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L268` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L268) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L268)

```diff
-         ZB.set(GB, (null !== (TB = ZB.get(GB)) && void 0 !== TB ? TB : 0) + 1)
+         Vt.set(mt, (null !== (Ot = Vt.get(mt)) && void 0 !== Ot ? Ot : 0) + 1)
```

#### 26. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L273)

```diff
-         const BB = null !== (oB = ZB.get(GB)) && void 0 !== oB ? oB : 0;
+         const tt = null !== (Dt = Vt.get(mt)) && void 0 !== Dt ? Dt : 0;
```

#### 27. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L326)

```diff
-       for (const oB of (null !== (JB = OB().getLeadingCommentRanges(BB, IB.getFullStart())) && void 0 !== JB ? JB : []).reverse()) {
+       for (const Dt of (null !== (qt = vt().getLeadingCommentRanges(tt, et.getFullStart())) && void 0 !== qt ? qt : []).reverse()) {
```

#### 28. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L339)

```diff
-       return (null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.length) && void 0 !== IB ? IB : 0) > 0
+       return (null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.length) && void 0 !== et ? et : 0) > 0
```

#### 29. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L348)

```diff
-             if (OB().isFunctionDeclaration(BB)) return null !== (IB = null === (ZB = BB.name) || void 0 === ZB ? void 0 : ZB.text) && void 0 !== IB ? IB : null;
+             if (vt().isFunctionDeclaration(tt)) return null !== (et = null === (Vt = tt.name) || void 0 === Vt ? void 0 : Vt.text) && void 0 !== et ? et : null;
```

#### 30. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L393-L394` → after: `L393-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L393-L394) · [Before (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L393-L394)

```diff
-         oB = JB.length > 0 ? JB : TB;
-       return null !== (ZB = oB.find((BB => BB.topLevel))) && void 0 !== ZB ? ZB : oB[0]
+         Dt = qt.length > 0 ? qt : Ot;
+       return null !== (Vt = Dt.find((tt => tt.topLevel))) && void 0 !== Vt ? Vt : Dt[0]
```

#### 31. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L398` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L398) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L398)

```diff
-       return "" === BB.trim() ? `${IB.trim()}\n` : `${BB.replace(/\s*$/,"")}\n\n${IB.trim()}\n`
+       return "" === tt.trim() ? `${et.trim()}\n` : `${tt.replace(/\s*$/,"")}\n\n${et.trim()}\n`
```

#### 32. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L414` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L414) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L414)

```diff
-       const oB = null !== (TB = ZB.find((BB => BB.topLevel && !BB.isProperty))) && void 0 !== TB ? TB : ZB.find((BB => BB.topLevel)),
+       const Dt = null !== (Ot = Vt.find((tt => tt.topLevel && !tt.isProperty))) && void 0 !== Ot ? Ot : Vt.find((tt => tt.topLevel)),
```

#### 33. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L417)

```diff
-       return null !== (JB = void 0 !== vB && !ZB.some((BB => BB.topLevel && BB.name === GB)) ? vB : tB(BB, GB)) && void 0 !== JB ? JB : vB
+       return null !== (qt = void 0 !== dt && !Vt.some((tt => tt.topLevel && tt.name === mt)) ? dt : Bt(tt, mt)) && void 0 !== qt ? qt : dt
```

#### 34. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L441)

```diff
-       return vB && nB ? KB(BB, GB, null !== zB && void 0 !== zB ? zB : vB, kB.functions, JB) : function(BB, IB, ZB, TB, JB) {
+       return dt && Xt ? st(tt, mt, null !== lt && void 0 !== lt ? lt : dt, jt.functions, qt) : function(tt, et, Vt, Ot, qt) {
```

#### 35. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L458)

```diff
-       return 0 === ZB || "\n" === BB[ZB - 1] ? ZB : IB
+       return 0 === Vt || "\n" === tt[Vt - 1] ? Vt : et
```

#### 36. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L463` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L463) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L463)

```diff
-       if ("" !== BB.trim() && ("top" === TB || "start" === TB)) return `${ZB.trim()}\n\n${BB.replace(/^\s+/,"")}`;
+       if ("" !== tt.trim() && ("top" === Ot || "start" === Ot)) return `${Vt.trim()}\n\n${tt.replace(/^\s+/,"")}`;
```

#### 37. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L465` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L465) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L465)

```diff
-       return JB ? `${BB.slice(0,JB.to)}\n\n${ZB.trim()}${BB.slice(JB.to)}` : bB(BB, ZB)
+       return qt ? `${tt.slice(0,qt.to)}\n\n${Vt.trim()}${tt.slice(qt.to)}` : pt(tt, Vt)
```

#### 38. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L479` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L479) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L479)

```diff
-         IB = `${BB.slice(0,Math.max(BB.lastIndexOf(" "),60)).trimEnd()}\u2026`
+         et = `${tt.slice(0,Math.max(tt.lastIndexOf(" "),60)).trimEnd()}\u2026`
```

#### 39. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L518` → after: `L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L518) · [Before (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L518)

```diff
-           oB = BB.length > 0 || !/\bplayerCommand\b/.test(kB) ? BB : [kB];
+           Dt = tt.length > 0 || !/\bplayerCommand\b/.test(jt) ? tt : [jt];
```

#### 40. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L520)

```diff
-           for (const BB of IB.matchAll(oI)) JB.add(`/${BB[1].split(/\s/)[0]}`)
+           for (const tt of et.matchAll(me)) qt.add(`/${tt[1].split(/\s/)[0]}`)
```

#### 41. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L563` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L563) · [Before (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L563)

```diff
-       return `When: ${BB.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
+       return `When: ${tt.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
```

#### 42. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L575-L576` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L575-L576) · [Before (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L575-L576)

```diff
-         JB = new Set((null !== (IB = BB.match(hI)) && void 0 !== IB ? IB : []).map((BB => BB.toLowerCase().replace(/s$/, "")))).size,
-         oB = (null !== (ZB = BB.match(zI)) && void 0 !== ZB ? ZB : []).length;
+         qt = new Set((null !== (et = tt.match(le)) && void 0 !== et ? et : []).map((tt => tt.toLowerCase().replace(/s$/, "")))).size,
+         Dt = (null !== (Vt = tt.match(Ee)) && void 0 !== Vt ? Vt : []).length;
```

#### 43. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L581-L582` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L581-L582) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L581-L582)

```diff
-       const IB = BB.split(/\n|\|/).map((BB => BB.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((BB => "" !== BB)).slice(0, 5).map((BB => BB.length > 90 ? `${BB.slice(0,89).trimEnd()}\u2026` : BB));
-       return IB.length >= 2 ? IB : []
+       const et = tt.split(/\n|\|/).map((tt => tt.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((tt => "" !== tt)).slice(0, 5).map((tt => tt.length > 90 ? `${tt.slice(0,89).trimEnd()}\u2026` : tt));
+       return et.length >= 2 ? et : []
```

#### 44. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L584` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L584) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L584)

```diff
-     var gI = ZB(5036);
+     var ye = Vt(5038);
```

#### 45. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L604` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L604) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L604)

```diff
-         JB.set(BB, [...null !== (oB = JB.get(BB)) && void 0 !== oB ? oB : [], hB])
+         qt.set(tt, [...null !== (Dt = qt.get(tt)) && void 0 !== Dt ? Dt : [], Qt])
```

#### 46. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L613-L614` → after: `L613-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L613-L614) · [Before (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L613-L614)

```diff
-         const BB = null !== (nB = JB.get(qI(hB))) && void 0 !== nB ? nB : [];
-         1 !== BB.length || GB.includes(BB[0]) || (cB = (0, gI.s)(cB, new RegExp(`${hB}(?![\\w$])`, "g"), gI.o, (() => BB[0])), kB.push({
+         const tt = null !== (Xt = qt.get(Ne(Qt))) && void 0 !== Xt ? Xt : [];
+         1 !== tt.length || mt.includes(tt[0]) || (Ht = (0, ye.s)(Ht, new RegExp(`${Qt}(?![\\w$])`, "g"), ye.l, (() => tt[0])), jt.push({
```

#### 47. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L629` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L629) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L629)

```diff
-       dI = Object.keys(WI).map((BB => `"${BB}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
+       Je = Object.keys(be).map((tt => `"${tt}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
```

#### 48. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L997)

```diff
-         description: `Reads a page of Bloxd's docs as Markdown. ${yB.i} lists every page with its link; then read the page, or the part of a long page, you need`,
+         description: `Reads a page of Bloxd's docs as Markdown. ${Nt.k} lists every page with its link; then read the page, or the part of a long page, you need`,
```

#### 49. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1003` → after: `L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1003) · [Before (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1003)

```diff
-               description: `${yB.i}, or a page it links to`
+               description: `${Nt.k}, or a page it links to`
```

#### 50. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1021)

```diff
-               description: `${dI}, to list every one of them`
+               description: `${Je}, to list every one of them`
```

#### 51. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1110` → after: `L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1110) · [Before (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1110)

```diff
-       if (!IB) throw new Error(`No AI Helper tool ${BB}`);
+       if (!et) throw new Error(`No AI Helper tool ${tt}`);
```

#### 52. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1114-L1115` → after: `L1114-L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1114-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1114-L1115) · [Before (L1114-L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1114-L1115)

```diff
-       iI = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc] … [truncated]
-       pI = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${YI})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|h … [truncated]
+       Se = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc] … [truncated]
+       ce = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${We})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|h … [truncated]
```

#### 53. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1127` → after: `L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1127) · [Before (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1127)

```diff
-           ZB = -1 === IB ? BB : BB.slice(0, IB);
+           Vt = -1 === et ? tt : tt.slice(0, et);
```

#### 54. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1133` → after: `L1133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1133) · [Before (L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1133)

```diff
-           HI(ZB.slice(oB, BB)) && (TB = -1 === TB ? oB : TB, JB = BB), oB = BB
+           Ie(Vt.slice(Dt, tt)) && (Ot = -1 === Ot ? Dt : Ot, qt = tt), Dt = tt
```

#### 55. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1135-L1136` → after: `L1135-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1135-L1136) · [Before (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1135-L1136)

```diff
-         return -1 === JB ? BB : "" !== ZB.slice(JB).trim() ? BB.slice(JB).trimStart() : `${BB.slice(0,TB).trimEnd()}\n${BB.slice(ZB.length)}`.trim()
-       }(ZB) : "" !== ZB.trim() ? ZB : BB
+         return -1 === qt ? tt : "" !== Vt.slice(qt).trim() ? tt.slice(qt).trimStart() : `${tt.slice(0,Ot).trimEnd()}\n${tt.slice(Vt.length)}`.trim()
+       }(Vt) : "" !== Vt.trim() ? Vt : tt
```

#### 56. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1145` → after: `L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1145) · [Before (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1145)

```diff
-       }(IB) ? IB : null
+       }(et) ? et : null
```

#### 57. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1159` → after: `L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1159) · [Before (L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1159)

```diff
-             cB[null !== (GB = ZB[1]) && void 0 !== GB ? GB : ZB[2]] = null !== (vB = ZB[3]) && void 0 !== vB ? vB : ZB[4]
+             Ht[null !== (mt = Vt[1]) && void 0 !== mt ? mt : Vt[2]] = null !== (dt = Vt[3]) && void 0 !== dt ? dt : Vt[4]
```

#### 58. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1185` → after: `L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1185) · [Before (L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1185)

```diff
-       let IB = null !== BB && void 0 !== BB ? BB : {};
+       let et = null !== tt && void 0 !== tt ? tt : {};
```

#### 59. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1193` → after: `L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1193) · [Before (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1193)

```diff
-       for (const [TB, JB] of Object.entries(IB)) "string" === typeof JB ? ZB[TB] = PI.has(TB) && jI.test(JB) && !JB.includes("\n") ? mI(JB) : JB : "boolean" === typeof JB || "number" === typeof JB ? ZB[TB] = String(JB) : "object" !== typeof JB || null === JB || Array.isArray(JB)  … [truncated]
+       for (const [Ot, qt] of Object.entries(et)) "string" === typeof qt ? Vt[Ot] = Le.has(Ot) && Ze.test(qt) && !qt.includes("\n") ? Ge(qt) : qt : "boolean" === typeof qt || "number" === typeof qt ? Vt[Ot] = String(qt) : "object" !== typeof qt || null === qt || Array.isArray(qt)  … [truncated]
```

#### 60. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1219` → after: `L1219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1219) · [Before (L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1219)

```diff
-     const uI = new RegExp(`\\b(${sI.map((BB=>BB.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
+     const Ue = new RegExp(`\\b(${Ke.map((tt=>tt.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
```

#### 61. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1226` → after: `L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1226) · [Before (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1226)

```diff
-           return `${BB}(${JSON.stringify(ZB)})`
+           return `${tt}(${JSON.stringify(Vt)})`
```

#### 62. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1230-L1232` → after: `L1230-L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1230-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1230-L1232) · [Before (L1230-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1230-L1232)

```diff
-         fileResult: (BB, IB, ZB) => `<file path="${BB}"${ZB?' open_in_editor="true"':""}>\n${IB}\n</file>`,
-         editFailure: (BB, IB) => `${BB} failed: ${IB}`,
-         lookupResult: (BB, IB, ZB) => `${BB} ${IB}:\n${ZB}`
+         fileResult: (tt, et, Vt) => `<file path="${tt}"${Vt?' open_in_editor="true"':""}>\n${et}\n</file>`,
+         editFailure: (tt, et) => `${tt} failed: ${et}`,
+         lookupResult: (tt, et, Vt) => `${tt} ${et}:\n${Vt}`
```

#### 63. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1245` → after: `L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1245) · [Before (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1245)

```diff
-           const GB = null !== (ZB = null === (TB = BB.slice(vB).match(/^\s*<\|call\|>/)) || void 0 === TB ? void 0 : TB[0]) && void 0 !== ZB ? ZB : "";
+           const mt = null !== (Vt = null === (Ot = tt.slice(dt).match(/^\s*<\|call\|>/)) || void 0 === Ot ? void 0 : Ot[0]) && void 0 !== Vt ? Vt : "";
```

#### 64. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1267` → after: `L1267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1267) · [Before (L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1267)

```diff
-       const vB = null !== (IB = null !== (ZB = null !== (TB = null !== (JB = GB.arguments) && void 0 !== JB ? JB : GB.params) && void 0 !== TB ? TB : GB.param) && void 0 !== ZB ? ZB : GB.args) && void 0 !== IB ? IB : GB.input,
+       const dt = null !== (et = null !== (Vt = null !== (Ot = null !== (qt = mt.arguments) && void 0 !== qt ? qt : mt.params) && void 0 !== Ot ? Ot : mt.param) && void 0 !== Vt ? Vt : mt.args) && void 0 !== et ? et : mt.input,
```

#### 65. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1273` → after: `L1273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1273) · [Before (L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1273)

```diff
-         } = GB, ZB = XI(null !== vB && void 0 !== vB ? vB : IB);
+         } = mt, Vt = ze(null !== dt && void 0 !== dt ? dt : et);
```

#### 66. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1312` → after: `L1312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1312) · [Before (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1312)

```diff
-       if (Array.isArray(BB)) return `[${BB.map(xI).join(", ")}]`;
+       if (Array.isArray(tt)) return `[${tt.map(xe).join(", ")}]`;
```

#### 67. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1314)

```diff
-         return `{${Object.entries(BB).map((BB=>{let[IB,ZB]=BB;return`${JSON.stringify(IB)}: ${xI(ZB)}`})).join(", ")}}`
+         return `{${Object.entries(tt).map((tt=>{let[et,Vt]=tt;return`${JSON.stringify(et)}: ${xe(Vt)}`})).join(", ")}}`
```

#### 68. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1319-L1320` → after: `L1319-L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1319-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1319-L1320) · [Before (L1319-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1319-L1320)

```diff
-         formatCall: (BB, IB) => `<tool_call>\n<function=${BB}>\n${Object.entries(IB).flatMap((BB=>{let[IB,ZB]=BB;return void 0===ZB?[]:[`<parameter=${IB}>\n${ZB}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
-         declareTools: (BB, IB, ZB) => ZB || 0 === IB.length ? BB : `${function(BB){return`# Tools\n\nYou have access to the following functions:\n\n<tools>${BB.map((BB=>`\n${xI({type:"function",function:{name:BB.name,description:BB.description,parameters:BB.inputSchema}})}`)).joi … [truncated]
+         formatCall: (tt, et) => `<tool_call>\n<function=${tt}>\n${Object.entries(et).flatMap((tt=>{let[et,Vt]=tt;return void 0===Vt?[]:[`<parameter=${et}>\n${Vt}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
+         declareTools: (tt, et, Vt) => Vt || 0 === et.length ? tt : `${function(tt){return`# Tools\n\nYou have access to the following functions:\n\n<tools>${tt.map((tt=>`\n${xe({type:"function",function:{name:tt.name,description:tt.description,parameters:tt.inputSchema}})}`)).joi … [truncated]
```

#### 69. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1322-L1324` → after: `L1322-L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1322-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1322-L1324) · [Before (L1322-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1322-L1324)

```diff
-         fileResult: (BB, IB, ZB) => `<tool_response>\nview_file ${BB}${ZB?" (open in the editor)":""}:\n${IB}\n</tool_response>`,
-         editFailure: (BB, IB) => `<tool_response>\nError: ${IB}\n</tool_response>`,
-         lookupResult: (BB, IB, ZB) => `<tool_response>\n${BB} ${IB}:\n${ZB}\n</tool_response>`
+         fileResult: (tt, et, Vt) => `<tool_response>\nview_file ${tt}${Vt?" (open in the editor)":""}:\n${et}\n</tool_response>`,
+         editFailure: (tt, et) => `<tool_response>\nError: ${et}\n</tool_response>`,
+         lookupResult: (tt, et, Vt) => `<tool_response>\n${tt} ${et}:\n${Vt}\n</tool_response>`
```

#### 70. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1329-L1330` → after: `L1329-L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1329-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1329-L1330) · [Before (L1329-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1329-L1330)

```diff
-         formatCall: (BB, IB) => `<tool_call name="${BB}">\n${Object.entries(IB).flatMap((BB=>{let[IB,ZB]=BB;return void 0===ZB?[]:[`<param name="${IB}">${KI.has(IB)?ZB:`\n${ZB}\n`}</param>\n`]})).join("")}</tool_call>`,
-         declareTools: BB => BB,
+         formatCall: (tt, et) => `<tool_call name="${tt}">\n${Object.entries(et).flatMap((tt=>{let[et,Vt]=tt;return void 0===Vt?[]:[`<param name="${et}">${se.has(et)?Vt:`\n${Vt}\n`}</param>\n`]})).join("")}</tool_call>`,
+         declareTools: tt => tt,
```

#### 71. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1332-L1334` → after: `L1332-L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1332-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1332-L1334) · [Before (L1332-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1332-L1334)

```diff
-         fileResult: (BB, IB, ZB) => `<tool_result name="view_file" path="${BB}"${ZB?' open_in_editor="true"':""}>\n${IB}\n</tool_result>`,
-         editFailure: (BB, IB) => `<tool_result name="${BB}" is_error="true">\n${IB}\n</tool_result>`,
-         lookupResult: (BB, IB, ZB) => `<tool_result name="${BB}" about="${IB.replace(/"/g,"'")}">\n${ZB}\n</tool_result>`
+         fileResult: (tt, et, Vt) => `<tool_result name="view_file" path="${tt}"${Vt?' open_in_editor="true"':""}>\n${et}\n</tool_result>`,
+         editFailure: (tt, et) => `<tool_result name="${tt}" is_error="true">\n${et}\n</tool_result>`,
+         lookupResult: (tt, et, Vt) => `<tool_result name="${tt}" about="${et.replace(/"/g,"'")}">\n${Vt}\n</tool_result>`
```

#### 72. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1352` → after: `L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1352) · [Before (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1352)

```diff
-             if (null === kB || null === nB || (null !== (ZB = null === (TB = IB.at(-1)) || void 0 === TB ? void 0 : TB.index) && void 0 !== ZB ? ZB : -1) + (null !== (JB = null === (oB = IB.at(-1)) || void 0 === oB ? void 0 : oB.call.source.length) && void 0 !== JB ? JB : 0) > vB … [truncated]
+             if (null === jt || null === Xt || (null !== (Vt = null === (Ot = et.at(-1)) || void 0 === Ot ? void 0 : Ot.index) && void 0 !== Vt ? Vt : -1) + (null !== (qt = null === (Dt = et.at(-1)) || void 0 === Dt ? void 0 : Dt.call.source.length) && void 0 !== qt ? qt : 0) > dt … [truncated]
```

#### 73. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1356` → after: `L1356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1356) · [Before (L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1356)

```diff
-               FB = BB.slice(vB.index, nB + (null !== (GB = null === zB || void 0 === zB ? void 0 : zB[0].length) && void 0 !== GB ? GB : 0));
+               Et = tt.slice(dt.index, Xt + (null !== (mt = null === lt || void 0 === lt ? void 0 : lt[0].length) && void 0 !== mt ? mt : 0));
```

#### 74. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1469` → after: `L1469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1469) · [Before (L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1469)

```diff
-           stopsWhen: BB => `${BB} !== undefined && ${BB} !== false`,
+           stopsWhen: tt => `${tt} !== undefined && ${tt} !== false`,
```

#### 75. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1473` → after: `L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1473) · [Before (L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1473)

```diff
-           stopsWhen: BB => `${BB} === false || ${BB} === null`,
+           stopsWhen: tt => `${tt} === false || ${tt} === null`,
```

#### 76. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1477` → after: `L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1477) · [Before (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1477)

```diff
-           stopsWhen: BB => `${BB} === "preventDamage"`,
+           stopsWhen: tt => `${tt} === "preventDamage"`,
```

#### 77. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1490` → after: `L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1490) · [Before (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1490)

```diff
-         hasErrors: (null !== (IB = null === TB || void 0 === TB ? void 0 : TB.length) && void 0 !== IB ? IB : 0) > 0
+         hasErrors: (null !== (et = null === Ot || void 0 === Ot ? void 0 : Ot.length) && void 0 !== et ? et : 0) > 0
```

#### 78. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1500` → after: `L1500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1500) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1500)

```diff
-         vN: BB,
+         pE: tt,
```

#### 79. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1507` → after: `L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1507) · [Before (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1507)

```diff
-           vN: ZB,
+           pE: Vt,
```

#### 80. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1514` → after: `L1514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1514) · [Before (L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1514)

```diff
-         vN: ZB,
+         pE: Vt,
```

#### 81. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1545` → after: `L1545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1545) · [Before (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1545)

```diff
-             for (const oB of (null !== (JB = OB().getLeadingCommentRanges(BB, ZB.getFullStart())) && void 0 !== JB ? JB : []).reverse()) {
+             for (const Dt of (null !== (qt = vt().getLeadingCommentRanges(tt, Vt.getFullStart())) && void 0 !== qt ? qt : []).reverse()) {
```

#### 82. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1611` → after: `L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1611) · [Before (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1611)

```diff
-       return /^\s*$/.test(JB) ? JB : `${null!==(ZB=null===(TB=/^\s*/.exec(JB))||void 0===TB?void 0:TB[0])&&void 0!==ZB?ZB:""}\t`
+       return /^\s*$/.test(qt) ? qt : `${null!==(Vt=null===(Ot=/^\s*/.exec(qt))||void 0===Ot?void 0:Ot[0])&&void 0!==Vt?Vt:""}\t`
```

#### 83. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1620-L1621` → after: `L1620-L1621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1620-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1620-L1621) · [Before (L1620-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1620-L1621)

```diff
-         oB = /^[\w$"']+\s*:/.test(JB) && "" === BB.slice(pZ(BB, IB.getStart(ZB)), IB.getStart(ZB)).trim() ? TB.replace(/^\s*/, "\t") : `\t${IB.getText(ZB)},`;
-       return /,\s*(?:\/\/.*)?$/.test(oB) ? oB : oB.replace(/(\s*(?:\/\/.*)?)$/, ",$1")
+         Dt = /^[\w$"']+\s*:/.test(qt) && "" === tt.slice(cV(tt, et.getStart(Vt)), et.getStart(Vt)).trim() ? Ot.replace(/^\s*/, "\t") : `\t${et.getText(Vt)},`;
+       return /,\s*(?:\/\/.*)?$/.test(Dt) ? Dt : Dt.replace(/(\s*(?:\/\/.*)?)$/, ",$1")
```

#### 84. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1644` → after: `L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1644) · [Before (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1644)

```diff
-         GB = null !== (ZB = oB[oB.length - 1]) && void 0 !== ZB ? ZB : JB[JB.length - 1];
+         mt = null !== (Vt = Dt[Dt.length - 1]) && void 0 !== Vt ? Vt : qt[qt.length - 1];
```

#### 85. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1655` → after: `L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1655) · [Before (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1655)

```diff
-       return 1 === kB.length ? nB : null
+       return 1 === jt.length ? Xt : null
```

#### 86. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1666` → after: `L1666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1666) · [Before (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1666)

```diff
-         vN: cB
+         pE: Ht
```

#### 87. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1675` → after: `L1675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1675) · [Before (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1675)

```diff
-           for (let TB = IB; NB.has(ZB); TB++) ZB = `${BB}${TB}`;
+           for (let Ot = et; ft.has(Vt); Ot++) Vt = `${tt}${Ot}`;
```

#### 88. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1683` → after: `L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1683) · [Before (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1683)

```diff
-           FB.push(null === BB ? "undefined" : `...${BB}`);
+           Et.push(null === tt ? "undefined" : `...${tt}`);
```

#### 89. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1687` → after: `L1687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1687) · [Before (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1687)

```diff
-           FB.push(null !== BB && void 0 !== BB ? BB : "undefined");
+           Et.push(null !== tt && void 0 !== tt ? tt : "undefined");
```

#### 90. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1702` → after: `L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1702) · [Before (L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1702)

```diff
-             text: `(${[BB.getText(IB),...qB].join(", ")})`
+             text: `(${[tt.getText(et),...yt].join(", ")})`
```

#### 91. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1709` → after: `L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1709) · [Before (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1709)

```diff
-             text: `${BB}${qB.join(", ")}`
+             text: `${tt}${yt.join(", ")}`
```

#### 92. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1713-L1714` → after: `L1713-L1714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1713-L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1713-L1714) · [Before (L1713-L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1713-L1714)

```diff
-       const UB = `${JB}(${FB.join(", ")})`,
-         WB = gB(`${PZ(GB)}Result`, 2),
+       const Mt = `${qt}(${Et.join(", ")})`,
+         bt = wt(`${LV(mt)}Result`, 2),
```

#### 93. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1716` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1716) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1716)

```diff
-         CB = yZ.has(TB) ? [UB] : dB ? [`const ${WB} = ${UB}`, `if (${dB.stopsWhen(WB)}) return ${WB}`] : [`const ${WB} = ${UB}`],
+         Ct = aV.has(Ot) ? [Mt] : Jt ? [`const ${bt} = ${Mt}`, `if (${Jt.stopsWhen(bt)}) return ${bt}`] : [`const ${bt} = ${Mt}`],
```

#### 94. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1731` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1731) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1731)

```diff
-                 return OB().isIdentifier(TB) && IB.has(TB.text) && BB.expression.getText(ZB).startsWith(`${TB.text} `)
+                 return vt().isIdentifier(Ot) && et.has(Ot.text) && tt.expression.getText(Vt).startsWith(`${Ot.text} `)
```

#### 95. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1736)

```diff
-                 text: `return ${WB}`
+                 text: `return ${bt}`
```

#### 96. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1743)

```diff
-                   text: `${TB.text} !== undefined ? ${TB.text} : ${WB}`
+                   text: `${Ot.text} !== undefined ? ${Ot.text} : ${bt}`
```

#### 97. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1753` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1753) · [Before (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1753)

```diff
-             TB = oB ? aZ(BB, oB.getStart(IB)) : `${BB.slice(pZ(BB,cB.getStart(IB)),cB.getStart(IB)).replace(/\S.*$/,"")}\t`,
+             Ot = Dt ? RV(tt, Dt.getStart(et)) : `${tt.slice(cV(tt,Ht.getStart(et)),Ht.getStart(et)).replace(/\S.*$/,"")}\t`,
```

#### 98. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1755` → after: `L1755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1755) · [Before (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1755)

```diff
-             GB = /^\s*$/.test(JB) ? `${TB}return ${WB}\n${JB}` : `\n${TB}return ${WB}\n`;
+             mt = /^\s*$/.test(qt) ? `${Ot}return ${bt}\n${qt}` : `\n${Ot}return ${bt}\n`;
```

#### 99. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1771` → after: `L1771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1771) · [Before (L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1771)

```diff
-         text: `\n${aZ(BB,YB.getStart(IB))}${UB}`
+         text: `\n${RV(tt,Wt.getStart(et))}${Mt}`
```

#### 100. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1775` → after: `L1775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1775) · [Before (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1775)

```diff
-           TB = ZB ? aZ(BB, ZB.getStart(IB)) : `${BB.slice(pZ(BB,cB.getStart(IB)),cB.getStart(IB)).replace(/\S.*$/,"")}\t`,
+           Ot = Vt ? RV(tt, Vt.getStart(et)) : `${tt.slice(cV(tt,Ht.getStart(et)),Ht.getStart(et)).replace(/\S.*$/,"")}\t`,
```

#### 101. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1781` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1781) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1781)

```diff
-           text: `\n${CB.map((BB=>`${TB}${BB}`)).join("\n")}${ZB?oB?`\n${TB}`:"":"\n"}`
+           text: `\n${Ct.map((tt=>`${Ot}${tt}`)).join("\n")}${Vt?Dt?`\n${Ot}`:"":"\n"}`
```

#### 102. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1786` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1786) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1786)

```diff
-           JB = QB ? [`const ${TB} = ${nB.getText(IB)}`, `return ${TB} !== undefined ? ${TB} : ${WB}`] : [`return ${nB.getText(IB)}`];
+           qt = ut ? [`const ${Ot} = ${Xt.getText(et)}`, `return ${Ot} !== undefined ? ${Ot} : ${bt}`] : [`return ${Xt.getText(et)}`];
```

#### 103. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1790` → after: `L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1790) · [Before (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1790)

```diff
-           text: `{\n${[...CB,...JB].map((BB=>`${ZB}\t${BB}`)).join("\n")}\n${ZB}}`
+           text: `{\n${[...Ct,...qt].map((tt=>`${Vt}\t${tt}`)).join("\n")}\n${Vt}}`
```

#### 104. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1801` → after: `L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1801) · [Before (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1801)

```diff
-       return OB().isIdentifier(BB) ? IB.has(BB.text) ? BB : null : OB().isConditionalExpression(BB) ? LZ(BB.whenFalse, IB) : null
+       return vt().isIdentifier(tt) ? et.has(tt.text) ? tt : null : vt().isConditionalExpression(tt) ? oV(tt.whenFalse, et) : null
```

#### 105. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1814` → after: `L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1814) · [Before (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1814)

```diff
-       return (0, gI.f)(null !== (TB = null === (JB = BB.body) || void 0 === JB ? void 0 : JB.getText(IB)) && void 0 !== TB ? TB : "", new RegExp(`${ZB}\\s*\\(`), gI.o).length > 0
+       return (0, ye.f)(null !== (Ot = null === (qt = tt.body) || void 0 === qt ? void 0 : qt.getText(et)) && void 0 !== Ot ? Ot : "", new RegExp(`${Vt}\\s*\\(`), ye.l).length > 0
```

#### 106. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1822` → after: `L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1822) · [Before (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1822)

```diff
-       } = ZB, GB = null !== (TB = ZB.overrides) && void 0 !== TB ? TB : new Set;
+       } = Vt, mt = null !== (Ot = Vt.overrides) && void 0 !== Ot ? Ot : new Set;
```

#### 107. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1824` → after: `L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1824) · [Before (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1824)

```diff
-         const BB = `${oB?`${oB}\n`:""}${IB.trim()}\n`,
+         const tt = `${Dt?`${Dt}\n`:""}${et.trim()}\n`,
```

#### 108. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1838` → after: `L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1838) · [Before (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1838)

```diff
-             return (null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.properties) && void 0 !== IB ? IB : []).flatMap((BB => {
+             return (null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.properties) && void 0 !== et ? et : []).flatMap((tt => {
```

#### 109. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1897` → after: `L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1897) · [Before (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1897)

```diff
-                 return OB().isPropertyAssignment(BB) && void 0 !== ZB ? `\t${BB.name.getText(IB)}: ${ZB},` : `\t${BB.getText(IB)},`
+                 return vt().isPropertyAssignment(tt) && void 0 !== Vt ? `\t${tt.name.getText(et)}: ${Vt},` : `\t${tt.getText(et)},`
```

#### 110. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1903` → after: `L1903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1903) · [Before (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1903)

```diff
-                   text: `{\n${[...BB,...nB].join("\n")}\n}`
+                   text: `{\n${[...tt,...Xt].join("\n")}\n}`
```

#### 111. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1918` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1918) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1918)

```diff
-               text: `${nB.join("\n")}\n`
+               text: `${Xt.join("\n")}\n`
```

#### 112. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1932` → after: `L1932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1932) · [Before (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1932)

```diff
-               text: `${UB?",":""}\n${nB.join("\n")}\n`
+               text: `${Mt?",":""}\n${Xt.join("\n")}\n`
```

#### 113. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1949` → after: `L1949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1949) · [Before (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1949)

```diff
-             text: `${JB}${IB.slice(UB.from,UB.to)}\n\n`
+             text: `${qt}${et.slice(Mt.from,Mt.to)}\n\n`
```

#### 114. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1960` → after: `L1960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1960) · [Before (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1960)

```diff
-           NB.push(0 === NB.length ? BB : `${JB}${BB}`), dB.push(ZB)
+           ft.push(0 === ft.length ? tt : `${qt}${tt}`), Jt.push(Vt)
```

#### 115. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1976` → after: `L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1976) · [Before (L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1976)

```diff
-           const GB = `${PZ(JB)}${jZ(IB)}`,
+           const mt = `${LV(qt)}${ZV(et)}`,
```

#### 116. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1984` → after: `L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1984) · [Before (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1984)

```diff
-           const NB = rZ(nB.vN).map(((BB, IB) => null !== BB && void 0 !== BB ? BB : `arg${IB}`));
+           const ft = kV(Xt.pE).map(((tt, et) => null !== tt && void 0 !== tt ? tt : `arg${et}`));
```

#### 117. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1986-L1988` → after: `L1986-L1988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1986-L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1986-L1988) · [Before (L1986-L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1986-L1988)

```diff
-             const BB = `${GB}(${NB.join(", ")})`,
-               ZB = `${PZ(JB)}Result`;
-             CB(`function ${IB}(${NB.join(", ")}) {\n\t${yZ.has(IB)?BB:`const ${ZB} = ${BB}\n\treturn ${ZB}`}\n}`, -1), gB.push(IB), zB.add(IB);
+             const tt = `${mt}(${ft.join(", ")})`,
+               Vt = `${LV(qt)}Result`;
+             Ct(`function ${et}(${ft.join(", ")}) {\n\t${aV.has(et)?tt:`const ${Vt} = ${tt}\n\treturn ${Vt}`}\n}`, -1), wt.push(et), lt.add(et);
```

#### 118. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1991` → after: `L1991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L1991) · [Before (L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L1991)

```diff
-           uZ(oB.vN, vB.file, GB) || (FB.push(...mZ(BB, vB.file, oB, IB, GB, NB, JB, !0 === ZB.runsLast)), qB.push(IB));
+           UV(Dt.pE, dt.file, mt) || (Et.push(...GV(tt, dt.file, Dt, et, mt, ft, qt, !0 === Vt.runsLast)), yt.push(et));
```

#### 119. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2003` → after: `L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L2003) · [Before (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L2003)

```diff
-         QB = `${""===BB?"":`${BB}\n\n`}${oB?`${oB}\n`:""}${NB.join("")}\n`
+         ut = `${""===tt?"":`${tt}\n\n`}${Dt?`${Dt}\n`:""}${ft.join("")}\n`
```

#### 120. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2040` → after: `L2040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L2040) · [Before (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L2040)

```diff
-         JB = null !== (ZB = TB.find((BB => "color" === BB.name))) && void 0 !== ZB ? ZB : TB[0];
+         qt = null !== (Vt = Ot.find((tt => "color" === tt.name))) && void 0 !== Vt ? Vt : Ot[0];
```

#### 121. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2044` → after: `L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L2044) · [Before (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L2044)

```diff
-       return `{ ${JB.name}: ${GB} }`
+       return `{ ${qt.name}: ${mt} }`
```

#### 122. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2056` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L2056) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L2056)

```diff
-         return IB.length > 7 ? `${IB.slice(0,7).join(" or ")} or ...` : IB.join(" or ")
+         return et.length > 7 ? `${et.slice(0,7).join(" or ")} or ...` : et.join(" or ")
```

#### 123. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2058-L2059` → after: `L2058-L2059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2058-L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L2058-L2059) · [Before (L2058-L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L2058-L2059)

```diff
-       if (TB.isStringLiteral()) return `"${TB.value}"`;
-       if (TB.isNumberLiteral()) return `${TB.value}`;
+       if (Ot.isStringLiteral()) return `"${Ot.value}"`;
+       if (Ot.isNumberLiteral()) return `${Ot.value}`;
```

#### 124. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2064` → after: `L2064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L2064) · [Before (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L2064)

```diff
-         return `[${BB.getTypeArguments(TB).map((IB=>DZ(BB,IB,ZB+1))).join(", ")}]`
+         return `[${tt.getTypeArguments(Ot).map((et=>gV(tt,et,Vt+1))).join(", ")}]`
```

#### 125. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2069` → after: `L2069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L2069) · [Before (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L2069)

```diff
-         return `a list of ${IB.includes(" or ")?`(${IB})`:IB}`
+         return `a list of ${et.includes(" or ")?`(${et})`:et}`
```

#### 126. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2074` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L2074) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L2074)

```diff
-       return `{ ${JB.slice(0,10).map((BB=>`${BB.name}${BB.flags&OB().SymbolFlags.Optional?"?":""}`)).join(", ")}${JB.length>10?", ...":""} }`
+       return `{ ${qt.slice(0,10).map((tt=>`${tt.name}${tt.flags&vt().SymbolFlags.Optional?"?":""}`)).join(", ")}${qt.length>10?", ...":""} }`
```

#### 127. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2102-L2103` → after: `L2102-L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2102-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L2102-L2103) · [Before (L2102-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L2102-L2103)

```diff
-               kB = null !== (oB = null === TB || void 0 === TB ? void 0 : TB.getParameters()) && void 0 !== oB ? oB : [],
-               cB = new Set((null !== (GB = null === TB || void 0 === TB || null === (vB = TB.getDeclaration()) || void 0 === vB ? void 0 : vB.typeParameters) && void 0 !== GB ? GB : []).map((BB => BB.name.text)));
+               jt = null !== (Dt = null === Ot || void 0 === Ot ? void 0 : Ot.getParameters()) && void 0 !== Dt ? Dt : [],
+               Ht = new Set((null !== (mt = null === Ot || void 0 === Ot || null === (dt = Ot.getDeclaration()) || void 0 === dt ? void 0 : dt.typeParameters) && void 0 !== mt ? mt : []).map((tt => tt.name.text)));
```

#### 128. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2107` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L2107) · [Before (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L2107)

```diff
-                 vB = GB && OB().isParameter(GB) ? GB : void 0;
+                 dt = mt && vt().isParameter(mt) ? mt : void 0;
```

#### 129. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2112` → after: `L2112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L2112) · [Before (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L2112)

```diff
-                 ZB.add(`${JB.expression.getText(BB)} can't take null as ${kB[TB].name} (value ${TB+1}): ${GB}, or it throws when that line runs.`)
+                 Vt.add(`${qt.expression.getText(tt)} can't take null as ${jt[Ot].name} (value ${Ot+1}): ${mt}, or it throws when that line runs.`)
```

#### 130. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2150` → after: `L2150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L2150) · [Before (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L2150)

```diff
-             const TB = null !== (oB = null === (GB = IB.getResolvedSignature(JB)) || void 0 === GB ? void 0 : GB.getParameters()) && void 0 !== oB ? oB : [];
+             const Ot = null !== (Dt = null === (mt = et.getResolvedSignature(qt)) || void 0 === mt ? void 0 : mt.getParameters()) && void 0 !== Dt ? Dt : [];
```

#### 131. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2153` → after: `L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L2153) · [Before (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L2153)

```diff
-               vB && ZT(oB, IB.getTypeOfSymbol(vB), BB, IB) && ZB.add(`${JB.expression.getText(BB)} can't take api.createEnchantmentAttributesForItem(...) as ${vB.name} (value ${GB+1}): put it in { customAttributes: ... }, or it throws when that line runs.`)
+               dt && OO(Dt, et.getTypeOfSymbol(dt), tt, et) && Vt.add(`${qt.expression.getText(tt)} can't take api.createEnchantmentAttributesForItem(...) as ${dt.name} (value ${mt+1}): put it in { customAttributes: ... }, or it throws when that line runs.`)
```

#### 132. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2191` → after: `L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L2191) · [Before (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L2191)

```diff
-           return OB().isPropertyAccessExpression(BB) && OB().isIdentifier(BB.expression) && "CONFIG" === BB.expression.text && null !== (IB = ZB.get(BB.name.text)) && void 0 !== IB ? IB : BB.getText()
+           return vt().isPropertyAccessExpression(tt) && vt().isIdentifier(tt.expression) && "CONFIG" === tt.expression.text && null !== (et = Vt.get(tt.name.text)) && void 0 !== et ? et : tt.getText()
```

#### 133. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2193` → after: `L2193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L2193) · [Before (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L2193)

```diff
-         GB = BB => BB && (OB().isStringLiteral(BB) || OB().isNoSubstitutionTemplateLiteral(BB)) ? BB.text : BB && OB().isObjectLiteralExpression(BB) ? BB.properties.flatMap((BB => OB().isPropertyAssignment(BB) && (OB().isIdentifier(BB.name) || OB().isStringLiteral(BB.name)) ? [`$ … [truncated]
+         mt = tt => tt && (vt().isStringLiteral(tt) || vt().isNoSubstitutionTemplateLiteral(tt)) ? tt.text : tt && vt().isObjectLiteralExpression(tt) ? tt.properties.flatMap((tt => vt().isPropertyAssignment(tt) && (vt().isIdentifier(tt.name) || vt().isStringLiteral(tt.name)) ? [`$ … [truncated]
```

#### 134. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5098` → after: `L5098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5098) · [Before (L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5098)

```diff
-       } = WZ(`(${BB})`), TB = IB.statements[0];
+       } = bV(`(${tt})`), Ot = et.statements[0];
```

#### 135. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5136` → after: `L5136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5136) · [Before (L5136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5136)

```diff
-       }(IB.startsWith("{") ? IB : `{${IB}}`);
+       }(et.startsWith("{") ? et : `{${et}}`);
```

#### 136. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5147` → after: `L5147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5147) · [Before (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5147)

```diff
-         if (JB && oB > 0) JB[1] += `\n${IB}`;
+         if (qt && Dt > 0) qt[1] += `\n${et}`;
```

#### 137. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5154` → after: `L5154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5154) · [Before (L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5154)

```diff
-         oB = Math.max(0, oB + (null !== (vB = null === (kB = ZB.match(/[[{(]/g)) || void 0 === kB ? void 0 : kB.length) && void 0 !== vB ? vB : 0) - (null !== (cB = null === (nB = ZB.match(/[\]})]/g)) || void 0 === nB ? void 0 : nB.length) && void 0 !== cB ? cB : 0))
+         Dt = Math.max(0, Dt + (null !== (dt = null === (jt = Vt.match(/[[{(]/g)) || void 0 === jt ? void 0 : jt.length) && void 0 !== dt ? dt : 0) - (null !== (Ht = null === (Xt = Vt.match(/[\]})]/g)) || void 0 === Xt ? void 0 : Xt.length) && void 0 !== Ht ? Ht : 0))
```

#### 138. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5168` → after: `L5168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5168) · [Before (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5168)

```diff
-         problem: `${BB.key} must be a plain value like ${BB.value}, not ${IB}`
+         problem: `${tt.key} must be a plain value like ${tt.value}, not ${et}`
```

#### 139. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5171` → after: `L5171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5171) · [Before (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5171)

```diff
-         problem: `${BB.key} must be a number, like ${BB.value}`
+         problem: `${tt.key} must be a number, like ${tt.value}`
```

#### 140. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5174` → after: `L5174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5174) · [Before (L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5174)

```diff
-         problem: `${BB.key} must be true or false`
+         problem: `${tt.key} must be true or false`
```

#### 141. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5179` → after: `L5179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5179) · [Before (L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5179)

```diff
-         problem: `${BB.key} must be a position [x, y, z], like ${"null"===BB.value?"[0, 10, 0]":BB.value}`
+         problem: `${tt.key} must be a position [x, y, z], like ${"null"===tt.value?"[0, 10, 0]":tt.value}`
```

#### 142. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5182` → after: `L5182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5182) · [Before (L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5182)

```diff
-         problem: `${BB.key} must be a list in [ ], like ${BB.value}`
+         problem: `${tt.key} must be a list in [ ], like ${tt.value}`
```

#### 143. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5210` → after: `L5210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5210) · [Before (L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5210)

```diff
-               GB = oB ? hB.get(null !== (IB = NT(oB.initializer)) && void 0 !== IB ? IB : "") : void 0;
+               mt = Dt ? Qt.get(null !== (et = wO(Dt.initializer)) && void 0 !== et ? et : "") : void 0;
```

#### 144. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5219` → after: `L5219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5219) · [Before (L5219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5219)

```diff
-           const BB = null !== (FB = NT(NB)) && void 0 !== FB ? FB : "",
+           const tt = null !== (Et = wO(ft)) && void 0 !== Et ? Et : "",
```

#### 145. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5223-L5225` → after: `L5223-L5225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5223-L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5223-L5225) · [Before (L5223-L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5223-L5225)

```diff
-             const IB = JB.named ? `item: ${JSON.stringify(JB.item)}` : `item: ${JSON.stringify(JB.item)}, name: ${JSON.stringify(BB)}`;
-             cB.unshift(`"${BB}" isn't an item, so it is a ${JB.item}${JB.named?"":` named "${BB}"`}`), kB = `${kB.slice(0,JB.property.getStart()-vB)}${IB}${kB.slice(JB.property.getEnd()-vB)}`
-           } else null === IB ? nB.unshift(`"${BB}"`) : IB !== BB && (cB.unshift(`"${BB}" is "${IB}"`), kB = `${kB.slice(0,NB.getStart()-vB)}${JSON.stringify(IB)}${kB.slice(NB.getEnd()-vB)}`)
+             const et = qt.named ? `item: ${JSON.stringify(qt.item)}` : `item: ${JSON.stringify(qt.item)}, name: ${JSON.stringify(tt)}`;
+             Ht.unshift(`"${tt}" isn't an item, so it is a ${qt.item}${qt.named?"":` named "${tt}"`}`), jt = `${jt.slice(0,qt.property.getStart()-dt)}${et}${jt.slice(qt.property.getEnd()-dt)}`
+           } else null === et ? Xt.unshift(`"${tt}"`) : et !== tt && (Ht.unshift(`"${tt}" is "${et}"`), jt = `${jt.slice(0,ft.getStart()-dt)}${JSON.stringify(et)}${jt.slice(ft.getEnd()-dt)}`)
```

#### 146. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5228` → after: `L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5228) · [Before (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5228)

```diff
-           problem: `${nB.join(", ")} ${1===nB.length?"item"===ZB?"isn't an":"isn't a":"aren't"} ${ZB} name${1===nB.length?"":"s"}, so ${BB.key} kept ${BB.value}`
+           problem: `${Xt.join(", ")} ${1===Xt.length?"item"===Vt?"isn't an":"isn't a":"aren't"} ${Vt} name${1===Xt.length?"":"s"}, so ${tt.key} kept ${tt.value}`
```

#### 147. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5240` → after: `L5240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5240) · [Before (L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5240)

```diff
-           problem: `${BB.key} must be text in quotes, like ${BB.value}`
+           problem: `${tt.key} must be text in quotes, like ${tt.value}`
```

#### 148. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5245` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5245) · [Before (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5245)

```diff
-             problem: `"${IB}" isn't ${"item"===BB.kind?"an":"a"} ${BB.kind} name, so ${BB.key} kept ${BB.value}`
+             problem: `"${et}" isn't ${"item"===tt.kind?"an":"a"} ${tt.kind} name, so ${tt.key} kept ${tt.value}`
```

#### 149. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5249` → after: `L5249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5249) · [Before (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5249)

```diff
-             fixed: `"${IB}" is "${TB}"`
+             fixed: `"${et}" is "${Ot}"`
```

#### 150. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5279` → after: `L5279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5279) · [Before (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5279)

```diff
-       return null !== (IB = UT.find((BB => dT(BB.name) === ZB || dT(BB.title) === ZB))) && void 0 !== IB ? IB : null
+       return null !== (et = MO.find((tt => JO(tt.name) === Vt || JO(tt.title) === Vt))) && void 0 !== et ? et : null
```

#### 151. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5284` → after: `L5284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5284) · [Before (L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5284)

```diff
-       return null !== (IB = nT.find((IB => IB.name === BB))) && void 0 !== IB ? IB : null
+       return null !== (et = QO.find((et => et.name === tt))) && void 0 !== et ? et : null
```

#### 152. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5291` → after: `L5291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5291) · [Before (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5291)

```diff
-         return 0 === BB.length ? "" : `const CONFIG = {\n${BB.map((BB=>{var ZB;return`\t${BB.key}: ${null!==(ZB=IB.get(BB.key))&&void 0!==ZB?ZB:BB.value}, // ${BB.about}`})).join("\n")}\n}`
+         return 0 === tt.length ? "" : `const CONFIG = {\n${tt.map((tt=>{var Vt;return`\t${tt.key}: ${null!==(Vt=et.get(tt.key))&&void 0!==Vt?Vt:tt.value}, // ${tt.about}`})).join("\n")}\n}`
```

#### 153. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5293` → after: `L5293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5293) · [Before (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5293)

```diff
-       return `${""===ZB?"":`${ZB}\n\n`}${BB.code.trim()}\n`
+       return `${""===Vt?"":`${Vt}\n\n`}${tt.code.trim()}\n`
```

#### 154. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5303` → after: `L5303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5303) · [Before (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5303)

```diff
-             for (const BB of null !== (oB = JB.uses) && void 0 !== oB ? oB : []) {
+             for (const tt of null !== (Dt = qt.uses) && void 0 !== Dt ? Dt : []) {
```

#### 155. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5316` → after: `L5316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5316) · [Before (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5316)

```diff
-         TB = new RegExp(`function ${IB.name}\\s*\\([^)]*\\)\\s*\\{`).exec(BB);
+         Ot = new RegExp(`function ${et.name}\\s*\\([^)]*\\)\\s*\\{`).exec(tt);
```

#### 156. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5390` → after: `L5390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5390) · [Before (L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5390)

```diff
-               JB.push(`${BB.name} has no setting ${vB}`);
+               qt.push(`${tt.name} has no setting ${dt}`);
```

#### 157. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5413` → after: `L5413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5413) · [Before (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5413)

```diff
-           heading: "" === BB.trim() ? void 0 : `// ---- ${IB.title} (ready-made) ----`
+           heading: "" === tt.trim() ? void 0 : `// ---- ${et.title} (ready-made) ----`
```

#### 158. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5430` → after: `L5430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5430) · [Before (L5430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5430)

```diff
-       return `- ${BB.name}: ${BB.summary}. Settings: ${BB.settings.map((BB=>BB.key)).join(", ")}`
+       return `- ${tt.name}: ${tt.summary}. Settings: ${tt.settings.map((tt=>tt.key)).join(", ")}`
```

#### 159. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5435` → after: `L5435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5435) · [Before (L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5435)

```diff
-       const ZB = null !== (IB = null === BB || void 0 === BB ? void 0 : BB.trim().toLowerCase()) && void 0 !== IB ? IB : "",
+       const Vt = null !== (et = null === tt || void 0 === tt ? void 0 : tt.trim().toLowerCase()) && void 0 !== et ? et : "",
```

#### 160. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5439` → after: `L5439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5439) · [Before (L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5439)

```diff
-       return `${TB?`Prefabs for ${WT.get(TB)}:`:""===ZB||"all"===ZB?"Every prefab:":`There is no category ${BB}. Every prefab:`}\n${JB.length>0?JB.map(MT).join("\n"):"(none yet)"}${oB.length>0?`\nReady-made functions for it (call them; their code is added by itself):\n${oB.map((B … [truncated]
+       return `${Ot?`Prefabs for ${bO.get(Ot)}:`:""===Vt||"all"===Vt?"Every prefab:":`There is no category ${tt}. Every prefab:`}\n${qt.length>0?qt.map(PO).join("\n"):"(none yet)"}${Dt.length>0?`\nReady-made functions for it (call them; their code is added by itself):\n${Dt.map((t … [truncated]
```

#### 161. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5444-L5447` → after: `L5444-L5447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5444-L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5444-L5447) · [Before (L5444-L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5444-L5447)

```diff
-       const TB = [...BB.settings, ...aT(BB)].map((BB => `- ${BB.key} (${BB.kind}, default ${BB.value}): ${BB.about}`)).join("\n"),
-         JB = null !== (ZB = BB.changeable) && void 0 !== ZB && ZB.length ? `\nFunctions to replace by name for a game of their own:\n${BB.changeable.map((BB=>`- ${BB.name}: ${BB.about}`)).join("\n")}` : "",
-         oB = IB ? `\nIts code, as it goes in with the default settings:\n${sT(BB)}` : "";
-       return `${BB.name} (${BB.title}): ${BB.summary}.\nHow it plays: ${BB.howItPlays}\nSettings:\n${TB}${JB}${BB.setup?`\nThe creator sets up: ${BB.setup}`:""}${oB}`
+       const Ot = [...tt.settings, ...RO(tt)].map((tt => `- ${tt.key} (${tt.kind}, default ${tt.value}): ${tt.about}`)).join("\n"),
+         qt = null !== (Vt = tt.changeable) && void 0 !== Vt && Vt.length ? `\nFunctions to replace by name for a game of their own:\n${tt.changeable.map((tt=>`- ${tt.name}: ${tt.about}`)).join("\n")}` : "",
+         Dt = et ? `\nIts code, as it goes in with the default settings:\n${KO(tt)}` : "";
+       return `${tt.name} (${tt.title}): ${tt.summary}.\nHow it plays: ${tt.howItPlays}\nSettings:\n${Ot}${qt}${tt.setup?`\nThe creator sets up: ${tt.setup}`:""}${Dt}`
```

#### 162. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5455` → after: `L5455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5455) · [Before (L5455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5455)

```diff
-         TB = ` ${BB.toLowerCase().replace(/[^a-z0-9]+/g," ")} `;
+         Ot = ` ${tt.toLowerCase().replace(/[^a-z0-9]+/g," ")} `;
```

#### 163. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5457-L5458` → after: `L5457-L5458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5457-L5458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5457-L5458) · [Before (L5457-L5458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5457-L5458)

```diff
-         const IB = BB.keywords.map((BB => BB.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())).filter((BB => BB.includes(" ") ? TB.includes(` ${BB} `) : ZB.has(BB))),
-           JB = Math.min(...IB.map((BB => TB.indexOf(` ${BB} `))));
+         const et = tt.keywords.map((tt => tt.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())).filter((tt => tt.includes(" ") ? Ot.includes(` ${tt} `) : Vt.has(tt))),
+           qt = Math.min(...et.map((tt => Ot.indexOf(` ${tt} `))));
```

#### 164. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5494` → after: `L5494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5494) · [Before (L5494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5494)

```diff
-               GB = BB => "string" === typeof BB ? BB : "boolean" === typeof BB ? String(BB) : Array.isArray(BB) ? BB.filter((BB => "string" === typeof BB)).join("\n") : void 0,
+               mt = tt => "string" === typeof tt ? tt : "boolean" === typeof tt ? String(tt) : Array.isArray(tt) ? tt.filter((tt => "string" === typeof tt)).join("\n") : void 0,
```

#### 165. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5508` → after: `L5508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5508) · [Before (L5508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5508)

```diff
-             return TB.startsWith("[") ? JB : BB
+             return Ot.startsWith("[") ? qt : tt
```

#### 166. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5511-L5512` → after: `L5511-L5512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5511-L5512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5511-L5512) · [Before (L5511-L5512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5511-L5512)

```diff
-         kB = null !== (IB = null === (ZB = vB.question) || void 0 === ZB ? void 0 : ZB.replace(/\s+/g, " ").trim()) && void 0 !== IB ? IB : "",
-         cB = (null !== (TB = vB.choices) && void 0 !== TB ? TB : "").includes("\n") ? (null !== (JB = vB.choices) && void 0 !== JB ? JB : "").split("\n") : (null !== (oB = vB.choices) && void 0 !== oB ? oB : "").split("|"),
+         jt = null !== (et = null === (Vt = dt.question) || void 0 === Vt ? void 0 : Vt.replace(/\s+/g, " ").trim()) && void 0 !== et ? et : "",
+         Ht = (null !== (Ot = dt.choices) && void 0 !== Ot ? Ot : "").includes("\n") ? (null !== (qt = dt.choices) && void 0 !== qt ? qt : "").split("\n") : (null !== (Dt = dt.choices) && void 0 !== Dt ? Dt : "").split("|"),
```

#### 167. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5535-L5538` → after: `L5535-L5538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5535-L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5535-L5538) · [Before (L5535-L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5535-L5538)

```diff
-       AT = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${lT})\s*\(|(?:${lT})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
-       tT = new RegExp(`^(?:${lT})$`),
-       bT = new RegExp(String.raw`^(${lT})(\s*\([^()\n]*\)\s*\{)`, "gm"),
-       xT = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${lT})\b|\buse_?prefab\s*\(`, "i");
+       YO = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${iO})\s*\(|(?:${iO})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
+       BO = new RegExp(`^(?:${iO})$`),
+       pO = new RegExp(String.raw`^(${iO})(\s*\([^()\n]*\)\s*\{)`, "gm"),
+       xO = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${iO})\b|\buse_?prefab\s*\(`, "i");
```

#### 168. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5551` → after: `L5551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5551) · [Before (L5551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5551)

```diff
-           return void 0 === IB.path ? IB : {
+           return void 0 === et.path ? et : {
```

#### 169. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5555` → after: `L5555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5555) · [Before (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5555)

```diff
-           return void 0 === IB.url ? IB : {
+           return void 0 === et.url ? et : {
```

#### 170. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5601-L5603` → after: `L5601-L5603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5601-L5603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5601-L5603) · [Before (L5601-L5603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5601-L5603)

```diff
-       const qB = Object.keys(ZB).some(gB.c),
-         yB = BB => null !== BB && qB && (0, gB.c)(BB),
-         UB = BB => yB(BB) ? `${gB.i}${(0,gB.g)(BB)}` : null !== oB && void 0 !== oB ? oB : VT(BB),
+       const yt = Object.keys(Vt).some(wt.h),
+         Nt = tt => null !== tt && yt && (0, wt.h)(tt),
+         Mt = tt => Nt(tt) ? `${wt.l}${(0,wt.k)(tt)}` : null !== Dt && void 0 !== Dt ? Dt : nO(tt),
```

#### 171. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5643-L5645` → after: `L5643-L5645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5643-L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5643-L5645) · [Before (L5643-L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5643-L5645)

```diff
-               return `${ZB.slice(0,Math.max(ZB.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
-             }(null !== IB && void 0 !== IB ? IB : ""),
-             oB = null !== (TB = HB.get(BB)) && void 0 !== TB ? TB : [];
+               return `${Vt.slice(0,Math.max(Vt.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
+             }(null !== et && void 0 !== et ? et : ""),
+             Dt = null !== (Ot = It.get(tt)) && void 0 !== Ot ? Ot : [];
```

#### 172. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5647` → after: `L5647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5647) · [Before (L5647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5647)

```diff
-           ("" === JB || oB.includes(JB) || HB.set(BB, [...oB, JB]), "" !== JB) && rB.set(BB, [...null !== (GB = rB.get(BB)) && void 0 !== GB ? GB : [], {
+           ("" === qt || Dt.includes(qt) || It.set(tt, [...Dt, qt]), "" !== qt) && kt.set(tt, [...null !== (mt = kt.get(tt)) && void 0 !== mt ? mt : [], {
```

#### 173. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5665` → after: `L5665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5665) · [Before (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5665)

```diff
-               error: `There is no prefab called ${IB}. The prefabs are: ${UT.map((BB=>BB.name)).join(", ")}.`
+               error: `There is no prefab called ${et}. The prefabs are: ${MO.map((tt=>tt.name)).join(", ")}.`
```

#### 174. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5667` → after: `L5667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5667) · [Before (L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5667)

```diff
-           }(null !== (JB = cB[BB]) && void 0 !== JB ? JB : "", IB, ZB, kB);
+           }(null !== (qt = Ht[tt]) && void 0 !== qt ? qt : "", et, Vt, jt);
```

#### 175. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5673` → after: `L5673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5673) · [Before (L5673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5673)

```diff
-           }), XB(BB, null !== TB && void 0 !== TB ? TB : GB.prefab.title, GB.text), eB.push({
+           }), zt(tt, null !== Ot && void 0 !== Ot ? Ot : mt.prefab.title, mt.text), rt.push({
```

#### 176. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5679` → after: `L5679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5679) · [Before (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5679)

```diff
-             setup: null !== (oB = GB.prefab.setup) && void 0 !== oB ? oB : null
+             setup: null !== (Dt = mt.prefab.setup) && void 0 !== Dt ? Dt : null
```

#### 177. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5697` → after: `L5697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/92.js#L5697) · [Before (L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/92.js#L5697)

```diff
-         const BB = null !== (GI = oI.get(gB.name)) && void 0 !== GI ? GI : 0;
+         const tt = null !== (de = me.get(wt.name)) && void 0 !== de ? de : 0;
```
