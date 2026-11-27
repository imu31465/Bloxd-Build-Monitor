# Changed — Bundle Modifications Report (Part 142 / 154)

- **Updated at**: `2026-11-28T07:18 JST`
- **Part**: `142 / 154` (**413** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 141](part-141.md) · [Part 143 →](part-143.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientGame.js` (1yqdn.8419f1e1 → 4udp6d.2845de07 · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientGame.js` (997 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b)

#### 83. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L526-L527` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L487-L488) · [Before (L526-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L526-L527)

```diff
-         const OW = AW.z.localId(this.api.apiView, 0);
-         return iW === OW && OW !== AW.kd ? this.viewHeading : this.readEntity(WW) ? this.entityHeading : null
+         const GR = eR.s.localId(this.api.apiView, 0);
+         return JR === GR && GR !== eR.Uc ? this.viewHeading : this.readEntity(RR) ? this.entityHeading : null
```

#### 84. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L537` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L498) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L537)

```diff
-         return mW < OW - 1e-6 ? mW : null
+         return yR < GR - 1e-6 ? yR : null
```

#### 85. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L544` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L505) · [Before (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L544)

```diff
-         const iW = this.api.queries.directorDefaultPose() >= AW.vb.BYTES ? this.api.scratchData(AW.vb.BYTES, "the director's default pose") : null;
+         const JR = this.api.queries.directorDefaultPose() >= eR.ob.BYTES ? this.api.scratchData(eR.ob.BYTES, "the director's default pose") : null;
```

#### 86. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L546-L547` → after: `L507-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L507-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L507-L508) · [Before (L546-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L546-L547)

```diff
-         for (let OW = 0; OW < 3; OW++) WW.position[OW] = AW.vb.eye(iW, 0, OW);
-         return WW.heading = AW.vb.heading(iW, 0), WW.pitch = AW.vb.pitch(iW, 0), WW
+         for (let GR = 0; GR < 3; GR++) RR.position[GR] = eR.ob.eye(JR, 0, GR);
+         return RR.heading = eR.ob.heading(JR, 0), RR.pitch = eR.ob.pitch(JR, 0), RR
```

#### 87. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L561-L563` → after: `L522-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L522-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L522-L524) · [Before (L561-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L561-L563)

```diff
-         if (iW === this.ZO) return this.entityLive;
-         this.ZO = iW;
-         const OW = this.api.queries.directorEntity(iW) >= AW.zb.BYTES ? this.api.scratchData(AW.zb.BYTES, "the director's entity") : null;
+         if (JR === this.fG) return this.entityLive;
+         this.fG = JR;
+         const GR = this.api.queries.directorEntity(JR) >= eR.pb.BYTES ? this.api.scratchData(eR.pb.BYTES, "the director's entity") : null;
```

#### 88. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L565-L567` → after: `L526-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L526-L528) · [Before (L565-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L565-L567)

```diff
-         for (let NW = 0; NW < 3; NW++) this.entityFeet[NW] = AW.zb.feet(OW, 0, NW), this.entityAim[NW] = this.entityFeet[NW];
-         this.entityAim[1] += AW.zb.eyeHeight(OW, 0), this.entityHeading = AW.zb.heading(OW, 0);
-         const mW = AW.zb.pitch(OW, 0);
+         for (let uR = 0; uR < 3; uR++) this.entityFeet[uR] = eR.pb.feet(GR, 0, uR), this.entityAim[uR] = this.entityFeet[uR];
+         this.entityAim[1] += eR.pb.eyeHeight(GR, 0), this.entityHeading = eR.pb.heading(GR, 0);
+         const yR = eR.pb.pitch(GR, 0);
```

#### 89. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L569` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L530) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L569)

```diff
-         const EW = AW.zb.lookHeading(OW, 0);
+         const tR = eR.pb.lookHeading(GR, 0);
```

#### 90. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L586-L588` → after: `L547-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L547-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L547-L549) · [Before (L586-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L586-L588)

```diff
-         this.options = WW, this.oZ = void 0, this.director = void 0, this.latest = qW, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
-           jH: 0,
-           UH: 0
+         this.options = RR, this.NK = void 0, this.director = void 0, this.latest = dR, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
+           bD: 0,
+           PD: 0
```

#### 91. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L597` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L558) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L597)

```diff
-         }, this.lastAnswer = AW.tb.None, this.threw = !1, this.lastCallMs = 0, this.answeredPose = !1, this.Zj = new Int32Array(3 * AW.ae), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * AW.ae), this.oZ = new BW(WW.api), this.director = new DW.d(this … [truncated]
+         }, this.lastAnswer = eR.lb.None, this.threw = !1, this.lastCallMs = 0, this.answeredPose = !1, this.pa = new Int32Array(3 * eR.Id), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * eR.Id), this.NK = new jR(RR.api), this.director = new cR.d(this … [truncated]
```

#### 92. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L602` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L563) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L602)

```diff
-           iW = (0, pW.d)(WW)
+           JR = (0, IR.e)(RR)
```

#### 93. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L609` → after: `L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L570) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L609)

```diff
-         const cW = this.answeredPose && 0 === (mW & AW.Bb.Held);
+         const iR = this.answeredPose && 0 === (yR & eR.sb.Held);
```

#### 94. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L615` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L576) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L615)

```diff
-           wW = !this.threw && this.answeredPose && !cW ? this.sendLastPose() : AW.tb.None, this.threw = !0
+           fR = !this.threw && this.answeredPose && !iR ? this.sendLastPose() : eR.lb.None, this.threw = !0
```

#### 95. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L617` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L578) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L617)

```diff
-         return this.answeredPose = wW !== AW.tb.None, this.holding = this.answeredPose && !cW, null === (PW = (LW = this.options).showFacing) || void 0 === PW || PW.call(LW, this.holding ? this.facing : null), wW
+         return this.answeredPose = fR !== eR.lb.None, this.holding = this.answeredPose && !iR, null === (ZR = (qR = this.options).showFacing) || void 0 === ZR || ZR.call(qR, this.holding ? this.facing : null), fR
```

#### 96. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L625` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L586) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L625)

```diff
-           oZ: PW
+           NK: ZR
```

#### 97. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L628` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L589) · [Before (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L628)

```diff
-         if (0 !== (mW & AW.Bb.Held) || PW.setViewHeading((0, vW.w)(PW.bodyHeading)), void 0 !== this.pending) {
+         if (0 !== (yR & eR.sb.Held) || ZR.setViewHeading((0, HR.v)(ZR.bodyHeading)), void 0 !== this.pending) {
```

#### 98. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L632` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L593) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L632)

```diff
-         this.readLook((0, fW.d)(iW), (0, fW.d)(OW), mW, (0, fW.d)(EW), (0, fW.d)(NW));
+         this.readLook((0, mR.g)(JR), (0, mR.g)(GR), yR, (0, mR.g)(tR), (0, mR.g)(uR));
```

#### 99. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L634` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L595) · [Before (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L634)

```diff
-         if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !LW) return AW.tb.None;
+         if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !qR) return eR.lb.None;
```

#### 100. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L636` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L597) · [Before (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L636)

```diff
-         return (0, VW.j)(LW.position, cW.position), cW.heading = (0, vW.w)(LW.heading), cW.pitch = (0, vW.g)(LW.pitch), cW.fovRadians = (0, eW.i)(LW.fov), this.lastAnswer = this.facingAnswer(), this.sendLastPose()
+         return (0, PR.i)(qR.position, iR.position), iR.heading = (0, HR.v)(qR.heading), iR.pitch = (0, HR.h)(qR.pitch), iR.fovRadians = (0, DR.g)(qR.fov), this.lastAnswer = this.facingAnswer(), this.sendLastPose()
```

#### 101. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L639` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L600) · [Before (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L639)

```diff
-         if ("default" === this.director.getSettings().mode) return AW.tb.Pose;
+         if ("default" === this.director.getSettings().mode) return eR.lb.Pose;
```

#### 102. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L642` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L603) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L642)

```diff
-             return AW.tb.FaceCamera;
+             return eR.lb.FaceCamera;
```

#### 103. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L644` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L605) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L644)

```diff
-             return AW.tb.FaceCursor;
+             return eR.lb.FaceCursor;
```

#### 104. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L646` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L607) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L646)

```diff
-             return AW.tb.FaceMovement
+             return eR.lb.FaceMovement
```

#### 105. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L656` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L617) · [Before (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L656)

```diff
-         return 0 === this.options.api.queries.directorPose(WW[0], WW[1], WW[2], iW, OW, mW) ? AW.tb.None : this.lastAnswer
+         return 0 === this.options.api.queries.directorPose(RR[0], RR[1], RR[2], JR, GR, yR) ? eR.lb.None : this.lastAnswer
```

#### 106. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L670` → after: `L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L631) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L670)

```diff
-         this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new DW.d(this.oZ), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, this.threw = !1, null === (WW … [truncated]
+         this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new cR.d(this.NK), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, this.threw = !1, null === (RR … [truncated]
```

#### 107. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L676` → after: `L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L637) · [Before (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L676)

```diff
-         const iW = (0, gW.e)(WW);
+         const JR = (0, oR.d)(RR);
```

#### 108. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L681-L682` → after: `L642-L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L642-L643) · [Before (L681-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L681-L682)

```diff
-           PW = 0 !== (OW & AW.Bb.LookPointed);
-         if (null === this.mouseTurns && !PW) return NW.jH = 0, NW.UH = 0, void(NW.pointedAt = void 0);
+           ZR = 0 !== (GR & eR.sb.LookPointed);
+         if (null === this.mouseTurns && !ZR) return uR.bD = 0, uR.PD = 0, void(uR.pointedAt = void 0);
```

#### 109. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L686` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L647) · [Before (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L686)

```diff
-           oZ: cW
+           NK: iR
```

#### 110. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L688` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L649) · [Before (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L688)

```diff
-         cW.setViewHeading((0, gW.b)(cW.getViewHeading(), WW, iW, LW, "look" === this.mouseTurns, NW))
+         iR.setViewHeading((0, oR.c)(iR.getViewHeading(), RR, JR, qR, "look" === this.mouseTurns, uR))
```

#### 111. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L692` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L653) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L692)

```diff
-           OW = Math.min(WW.length, AW.ae);
+           GR = Math.min(RR.length, eR.Id);
```

#### 112. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L694` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L655) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L694)

```diff
-           for (let OW = 0; OW < 3; OW++) iW[3 * mW + OW] = Math.floor(WW[mW][OW] / AW.L);
+           for (let GR = 0; GR < 3; GR++) JR[3 * yR + GR] = Math.floor(RR[yR][GR] / eR.C);
```

#### 113. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L699` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L660) · [Before (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L699)

```diff
-           Zj: iW,
+           pa: JR,
```

#### 114. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L708` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L669) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L708)

```diff
-         null !== WW && (0, AW.tf)(WW, 0, this.Zj, this.centresLen) && (this.centresUnsent = !1)
+         null !== RR && (0, eR.yf)(RR, 0, this.pa, this.centresLen) && (this.centresUnsent = !1)
```

#### 115. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L712` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L673) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L712)

```diff
-         return null !== (WW = null === (iW = (OW = this.options).screen) || void 0 === iW ? void 0 : iW.call(OW)) && void 0 !== WW ? WW : RW
+         return null !== (RR = null === (JR = (GR = this.options).screen) || void 0 === JR ? void 0 : JR.call(GR)) && void 0 !== RR ? RR : ER
```

#### 116. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L716` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L677) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L716)

```diff
-         return (null !== (WW = this.options.isPageHidden) && void 0 !== WW ? WW : GW)()
+         return (null !== (RR = this.options.isPageHidden) && void 0 !== RR ? RR : YR)()
```

#### 117. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L720` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L681) · [Before (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L720)

```diff
-         return null !== (WW = null === (iW = (OW = this.options).now) || void 0 === iW ? void 0 : iW.call(OW)) && void 0 !== WW ? WW : performance.now()
+         return null !== (RR = null === (JR = (GR = this.options).now) || void 0 === JR ? void 0 : JR.call(GR)) && void 0 !== RR ? RR : performance.now()
```

#### 118. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L723-L727` → after: `L684-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L684-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L684-L688) · [Before (L723-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L723-L727)

```diff
-     var aW = OW(40324),
-       rW = OW(42246);
-     const zW = AW.L * AW.L * AW.L,
-       FW = Math.log2(AW.L),
-       QW = AW.L - 1,
+     var QR = GR(40377),
+       FR = GR(42274);
+     const TR = eR.C * eR.C * eR.C,
+       sR = Math.log2(eR.C),
+       hR = eR.C - 1,
```

#### 119. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L729` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L690) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L729)

```diff
-       ii = AW.W.BYTES / 4,
+       JJ = eR.P.BYTES / 4,
```

#### 120. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L733` → after: `L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L694) · [Before (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L733)

```diff
-       return WW * AW.L * AW.L + iW * AW.L + OW
+       return RR * eR.C * eR.C + JR * eR.C + GR
```

#### 121. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L753` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L714) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L753)

```diff
-         this.table = WW, this.slot = iW, this.generation = OW, this.epoch = mW, this.El = new Ei(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = Oi, this.dataPtr = 0, this.dataBuffer = null, this.dataS … [truncated]
+         this.table = RR, this.slot = JR, this.generation = GR, this.epoch = yR, this.Rr = new tJ(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = GJ, this.dataPtr = 0, this.dataBuffer = null, this.dataS … [truncated]
```

#### 122. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L760` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L721) · [Before (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L760)

```diff
-           iW = this.layers ??= new Uint16Array(AW.L);
+           JR = this.layers ??= new Uint16Array(eR.C);
```

#### 123. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L817-L818` → after: `L778-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L778-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L778-L779) · [Before (L817-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L817-L818)

```diff
-       const OW = WW[iW * AW.L];
-       for (let mW = 0; mW < AW.L; mW++) {
+       const GR = RR[JR * eR.C];
+       for (let yR = 0; yR < eR.C; yR++) {
```

#### 124. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L820` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L781) · [Before (L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L820)

```diff
-         for (let iW = 0; iW < AW.L; iW++)
+         for (let JR = 0; JR < eR.C; JR++)
```

#### 125. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L835-L837` → after: `L796-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L796-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L796-L798) · [Before (L835-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L835-L837)

```diff
-         if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, NW === AW.Z.ResetAll) return this.chunks.clear(), void this.epoch++;
-         if (NW !== AW.Z.Stored && NW !== AW.Z.Unloaded) throw new lW.e(`ChunkSlot flags ${NW}`);
-         const PW = (0, rW.e)(WW, iW, OW);
+         if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, uR === eR.S.ResetAll) return this.chunks.clear(), void this.epoch++;
+         if (uR !== eR.S.Stored && uR !== eR.S.Unloaded) throw new rR.c(`ChunkSlot flags ${uR}`);
+         const ZR = (0, FR.b)(RR, JR, GR);
```

#### 126. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L839` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L800) · [Before (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L839)

```diff
-         if (NW === AW.Z.Unloaded) return void this.chunks.delete(PW);
+         if (uR === eR.S.Unloaded) return void this.chunks.delete(ZR);
```

#### 127. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L849-L850` → after: `L810-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L810-L811) · [Before (L849-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L849-L850)

```diff
-           iW = AW.z.chunkSlotsPtr(WW, 0),
-           OW = AW.z.chunkSlotsLen(WW, 0);
+           JR = eR.s.chunkSlotsPtr(RR, 0),
+           GR = eR.s.chunkSlotsLen(RR, 0);
```

#### 128. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L855-L856` → after: `L816-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L816-L817) · [Before (L855-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L855-L856)

```diff
-           iW = AW.z.walkThroughPtr(WW, 0),
-           OW = AW.z.walkThroughLen(WW, 0);
+           JR = eR.s.walkThroughPtr(RR, 0),
+           GR = eR.s.walkThroughLen(RR, 0);
```

#### 129. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L869` → after: `L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L830) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L869)

```diff
-         WW !== this.slotsBuffer && (this.slotsBuffer = WW, this.slots = null !== (iW = (0, lW.p)(Uint32Array, WW, this.slotsPtr, this.slotsLen * ii, "the chunk directory")) && void 0 !== iW ? iW : ci);
+         RR !== this.slotsBuffer && (this.slotsBuffer = RR, this.slots = null !== (JR = (0, rR.l)(Uint32Array, RR, this.slotsPtr, this.slotsLen * JJ, "the chunk directory")) && void 0 !== JR ? JR : iJ);
```

#### 130. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L875` → after: `L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L836) · [Before (L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L875)

```diff
-           return null !== (OW = (0, lW.p)(Uint16Array, WW, iW, zW, "a chunk's voxels")) && void 0 !== OW ? OW : Oi
+           return null !== (GR = (0, rR.l)(Uint16Array, RR, JR, TR, "a chunk's voxels")) && void 0 !== GR ? GR : GJ
```

#### 131. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L877` → after: `L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L838) · [Before (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L877)

```diff
-           if (!(mW instanceof lW.e)) throw mW;
+           if (!(yR instanceof rR.c)) throw yR;
```

#### 132. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L883` → after: `L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L844) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L883)

```diff
-         return null !== (mW = this.chunks.get((0, rW.e)(WW, iW, OW))) && void 0 !== mW ? mW : null
+         return null !== (yR = this.chunks.get((0, FR.b)(RR, JR, GR))) && void 0 !== yR ? yR : null
```

#### 133. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L896` → after: `L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L857) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L896)

```diff
-         return null !== (mW = LW.written(cW)) && void 0 !== mW ? mW : LW.voxelData()[cW]
+         return null !== (yR = qR.written(iR)) && void 0 !== yR ? yR : qR.voxelData()[iR]
```

#### 134. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L905` → after: `L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L866) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L905)

```diff
-         return null !== (mW = null === (EW = this.chunks.get((0, rW.e)(WW, iW, OW))) || void 0 === EW ? void 0 : EW.Ob) && void 0 !== mW ? mW : null
+         return null !== (yR = null === (tR = this.chunks.get((0, FR.b)(RR, JR, GR))) || void 0 === tR ? void 0 : tR.Ka) && void 0 !== yR ? yR : null
```

#### 135. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L908` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L869) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L908)

```diff
-         const cW = AW.L;
+         const iR = eR.C;
```

#### 136. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L917` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L878) · [Before (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L917)

```diff
-               const bW = this.chunks.get((0, rW.e)(EW, tW, mW));
+               const aR = this.chunks.get((0, FR.b)(tR, VR, yR));
```

#### 137. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L922` → after: `L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L883) · [Before (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L922)

```diff
-                 sW = bW.zl,
+                 WR = aR.hr,
```

#### 138. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L943` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L904) · [Before (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L943)

```diff
-         (0, aW.e)(((WW, iW, OW) => {
+         (0, QR.c)(((RR, JR, GR) => {
```

#### 139. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L945` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L906) · [Before (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L945)

```diff
-           return null !== (mW = this.chunks.get((0, rW.e)(WW, iW, OW))) && void 0 !== mW ? mW : null
+           return null !== (yR = this.chunks.get((0, FR.b)(RR, JR, GR))) && void 0 !== yR ? yR : null
```

#### 140. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L964` → after: `L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L925) · [Before (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L964)

```diff
-         WW !== this.walkBuffer && (this.walkBuffer = WW, this.walk = null !== (iW = (0, lW.p)(Uint32Array, WW, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== iW ? iW : ci);
+         RR !== this.walkBuffer && (this.walkBuffer = RR, this.walk = null !== (JR = (0, rR.l)(Uint32Array, RR, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== JR ? JR : iJ);
```

#### 141. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L969` → after: `L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L930) · [Before (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L969)

```diff
-         const mW = (0, rW.e)(WW >> FW, iW >> FW, OW >> FW);
+         const yR = (0, FR.b)(RR >> sR, JR >> sR, GR >> sR);
```

#### 142. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L973-L980` → after: `L934-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L934-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L934-L941) · [Before (L973-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L973-L980)

```diff
-     var Zi = OW(39696),
-       xi = OW(38986),
-       li = OW(39386),
-       Ai = OW(37618),
-       bi = OW(37898),
-       ji = OW(35177),
-       Ui = OW(40329),
-       ki = OW(182);
+     var KJ = GR(39689),
+       wJ = GR(38977),
+       rJ = GR(39368),
+       eJ = GR(37534),
+       aJ = GR(37820),
+       LJ = GR(35099),
+       nJ = GR(40382),
+       UJ = GR(203);
```

#### 143. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1486-L1490` → after: `L1447-L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1447-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1447-L1451) · [Before (L1486-L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1486-L1490)

```diff
-     var Ji = OW(37563),
-       Hi = OW(37588),
-       ni = OW(37609),
-       ui = OW(37583),
-       oi = OW(232);
+     var pJ = GR(37479),
+       gJ = GR(37507),
+       bJ = GR(37528),
+       vJ = GR(37498),
+       OJ = GR(271);
```

#### 144. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1493` → after: `L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1454) · [Before (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1493)

```diff
-         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oi.d;
+         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OJ.e;
```

#### 145. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1536` → after: `L1497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1497) · [Before (L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1536)

```diff
-     var ei = OW(42411);
+     var NJ = GR(42435);
```

#### 146. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1558` → after: `L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1519) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1558)

```diff
-       return 1 === OW ? iW : iW + Math.floor(mW() * OW)
+       return 1 === GR ? JR : JR + Math.floor(yR() * GR)
```

#### 147. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1581` → after: `L1542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1542) · [Before (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1581)

```diff
-       Ci = ki.f.ZU * ki.f.playerEyeToHeightRatio,
+       IJ = UJ.g.Kn * UJ.g.playerEyeToHeightRatio,
```

#### 148. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1610` → after: `L1571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1571) · [Before (L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1610)

```diff
-         this.createHowl = WW, this.listener = iW, this.now = OW, this.errors = 0, this.howls = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader =  … [truncated]
+         this.createHowl = RR, this.listener = JR, this.now = GR, this.errors = 0, this.howls = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader =  … [truncated]
```

#### 149. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1620-L1621` → after: `L1581-L1582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1581-L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1581-L1582) · [Before (L1620-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1620-L1621)

```diff
-             const wW = 0 !== (EW & AW.je.Loop);
-             EW & AW.je.TwoD ? this.start(mW, !1, PW, NW, LW, wW, Di(mW)) : this.startSpatial(mW, PW, NW, LW, wW, WW, iW, OW, cW, this.earDistSq(WW, iW, OW), Di(mW))
+             const fR = 0 !== (tR & eR.Sd.Loop);
+             tR & eR.Sd.TwoD ? this.start(yR, !1, ZR, uR, qR, fR, oJ(yR)) : this.startSpatial(yR, ZR, uR, qR, fR, RR, JR, GR, iR, this.earDistSq(RR, JR, GR), oJ(yR))
```

#### 150. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1637` → after: `L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1598) · [Before (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1637)

```diff
-             void 0 !== EW && this.fade(EW, iW, OW, 0 !== (mW & AW.fe.StopAfter))
+             void 0 !== tR && this.fade(tR, JR, GR, 0 !== (yR & eR.Qd.StopAfter))
```

#### 151. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1679` → after: `L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1640) · [Before (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1679)

```diff
-               of iW) this.howls.delete(WW), "loaded" === OW.state() ? (0, Ji.f)(OW) : OW.unload()
+               of JR) this.howls.delete(RR), "loaded" === GR.state() ? (0, pJ.e)(GR) : GR.unload()
```

#### 152. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1683` → after: `L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1644) · [Before (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1683)

```diff
-         if (WW < AW.t.PlaySound || WW > AW.t.SoundReset) return !1;
+         if (RR < eR.o.PlaySound || RR > eR.o.SoundReset) return !1;
```

#### 153. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1685` → after: `L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1646) · [Before (L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1685)

```diff
-           return (0, AW.oe)(WW, iW, OW, mW, this.handlers)
+           return (0, eR.be)(RR, JR, GR, yR, this.handlers)
```

#### 154. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1692` → after: `L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1653) · [Before (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1692)

```diff
-         for (let mW = 0; mW < 3; mW++) iW[2 - mW] = AW.D.listener(WW, 0, mW), iW[5 - mW] = AW.D.forward(WW, 0, mW), iW[8 - mW] = AW.D.up(WW, 0, mW);
+         for (let yR = 0; yR < 3; yR++) JR[2 - yR] = eR.u.listener(RR, 0, yR), JR[5 - yR] = eR.u.forward(RR, 0, yR), JR[8 - yR] = eR.u.up(RR, 0, yR);
```

#### 155. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1706` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1667) · [Before (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1706)

```diff
-         if (null === LW) return ei.c;
+         if (null === qR) return NJ.b;
```

#### 156. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1708` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1669) · [Before (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1708)

```diff
-           wW = LW[1] > 1 ? LW : null;
+           fR = qR[1] > 1 ? qR : null;
```

#### 157. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1719` → after: `L1680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1680) · [Before (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1719)

```diff
-         if (!Number.isFinite(tW) || !Number.isFinite(ZW) || !Number.isFinite(xW)) return ei.c;
+         if (!Number.isFinite(VR) || !Number.isFinite(KR) || !Number.isFinite(wR)) return NJ.b;
```

#### 158. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1725` → after: `L1686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1686) · [Before (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1725)

```diff
-           if (lW = WW * WW + iW * iW + OW * OW, lW > EW * EW) return ei.c
+           if (rR = RR * RR + JR * JR + GR * GR, rR > tR * tR) return NJ.b
```

#### 159. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1728` → after: `L1689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1689) · [Before (L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1728)

```diff
-         return AW ? this.gameSound(AW.howl, AW.id, !0) : ei.c
+         return eR ? this.gameSound(eR.howl, eR.id, !0) : NJ.b
```

#### 160. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1755` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1716) · [Before (L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1755)

```diff
-             const LW = this.level > 0 ? OW / this.level : OW > 0 && null !== (NW = null === (PW = this.live.get(iW)) || void 0 === PW ? void 0 : PW.rel) && void 0 !== NW ? NW : 0;
+             const qR = this.level > 0 ? GR / this.level : GR > 0 && null !== (uR = null === (ZR = this.live.get(JR)) || void 0 === ZR ? void 0 : ZR.rel) && void 0 !== uR ? uR : 0;
```

#### 161. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1761` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1722) · [Before (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1761)

```diff
-               return WW > 0 && WW < 1 / 0 ? WW : 1
+               return RR > 0 && RR < 1 / 0 ? RR : 1
```

#### 162. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1766` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1727) · [Before (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1766)

```diff
-             return (null !== (WW = null === (OW = this.live.get(iW)) || void 0 === OW ? void 0 : OW.rel) && void 0 !== WW ? WW : 0) * this.level
+             return (null !== (RR = null === (GR = this.live.get(JR)) || void 0 === GR ? void 0 : GR.rel) && void 0 !== RR ? RR : 0) * this.level
```

#### 163. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1770` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1731) · [Before (L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1770)

```diff
-             return null !== (WW = null === (OW = this.live.get(iW)) || void 0 === OW ? void 0 : OW.rel) && void 0 !== WW ? WW : 0
+             return null !== (RR = null === (GR = this.live.get(JR)) || void 0 === GR ? void 0 : GR.rel) && void 0 !== RR ? RR : 0
```

#### 164. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1777` → after: `L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1738) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1777)

```diff
-                 refDistance: Ai.g
+                 refDistance: eJ.f
```

#### 165. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1796` → after: `L1757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1757) · [Before (L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1796)

```diff
-             mW = (0, ui.d)(qi(iW), Math.sqrt(wW), cW);
+             yR = (0, vJ.e)(SJ(JR), Math.sqrt(fR), iR);
```

#### 166. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1805` → after: `L1766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1766) · [Before (L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1805)

```diff
-         }, lW.id), ZW.pos(LW, PW, NW, lW.id), !EW && this.posed && (0, ni.h)() && (0, ni.e)(si[Si[WW]], Ki[WW], NW - this.pose[2], LW - this.pose[0]), lW
+         }, rR.id), KR.pos(qR, ZR, uR, rR.id), !tR && this.posed && (0, bJ.k)() && (0, bJ.h)(WJ[XJ[RR]], CJ[RR], uR - this.pose[2], qR - this.pose[0]), rR
```

#### 167. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1911-L1912` → after: `L1872-L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1872-L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1872-L1873) · [Before (L1911-L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1911-L1912)

```diff
-     var ri = OW(42125),
-       zi = OW(40332);
+     var kJ = GR(42132),
+       QJ = GR(40388);
```

#### 168. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1915` → after: `L1876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1876) · [Before (L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1915)

```diff
-         this.key = WW, this.model = iW, this.host = mW, this.aZ = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.sNW = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, … [truncated]
+         this.key = RR, this.model = JR, this.host = yR, this.hK = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.uZR = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, … [truncated]
```

#### 169. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1921` → after: `L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1882) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1921)

```diff
-         !this.JA && WW >= 0 && WW < this.aZ && WW < AW.Hc.Max && this.RA(WW, WW + 1)
+         !this.He && RR >= 0 && RR < this.hK && RR < eR.nc.Max && this.Ja(RR, RR + 1)
```

#### 170. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1924-L1925` → after: `L1885-L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1885-L1886) · [Before (L1924-L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1924-L1925)

```diff
-         if (this.JA) return;
-         (WW = Math.min(Math.max(Math.floor(WW), 0), this.aZ, AW.Hc.Max)) > this.count && this.RA(this.count, WW), this.count = WW;
+         if (this.He) return;
+         (RR = Math.min(Math.max(Math.floor(RR), 0), this.hK, eR.nc.Max)) > this.count && this.Ja(this.count, RR), this.count = RR;
```

#### 171. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1930` → after: `L1891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1891) · [Before (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1930)

```diff
-         } = this, EW = this.sNW !== WW, NW = OW[0] !== iW[0] || OW[1] !== iW[1] || OW[2] !== iW[2];
+         } = this, tR = this.uZR !== RR, uR = GR[0] !== JR[0] || GR[1] !== JR[1] || GR[2] !== JR[2];
```

#### 172. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1941-L1943` → after: `L1902-L1904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1902-L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1902-L1904) · [Before (L1941-L1943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1941-L1943)

```diff
-             iW = WW * Zi.b,
-             OW = tW * AW.Hc.Bytes,
-             EW = 0 !== cW[iW + Zi.d] ? AW.Hc.Hidden : 0;
+             JR = RR * KJ.c,
+             GR = VR * eR.nc.Bytes,
+             tR = 0 !== iR[JR + KJ.f] ? eR.nc.Hidden : 0;
```

#### 173. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1946` → after: `L1907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1907) · [Before (L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1946)

```diff
-         if ((0, AW.Le)(PW, 0, this.key, WW, iW, LW, this.tailOf(LW))) {
+         if ((0, eR.ze)(ZR, 0, this.key, RR, JR, qR, this.tailOf(qR))) {
```

#### 174. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1948` → after: `L1909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1909) · [Before (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1948)

```diff
-           mW.length = 0, this.sNW = WW, OW[0] = iW[0], OW[1] = iW[1], OW[2] = iW[2]
+           yR.length = 0, this.uZR = RR, GR[0] = JR[0], GR[1] = JR[1], GR[2] = JR[2]
```

#### 175. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1952` → after: `L1913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1913) · [Before (L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1952)

```diff
-         (WW = Math.ceil(WW)) <= this.aZ || this.JA || (this.records = (0, zi.b)(this.records, new Float32Array(WW * Zi.b)), this.isDirty = (0, zi.b)(this.isDirty, new Uint8Array(WW)), this.tail = new Uint8Array(WW * AW.Hc.Bytes), this.tailView = new DataView(this.tail.buffer), th … [truncated]
+         (RR = Math.ceil(RR)) <= this.hK || this.He || (this.records = (0, QJ.e)(this.records, new Float32Array(RR * KJ.c)), this.isDirty = (0, QJ.e)(this.isDirty, new Uint8Array(RR)), this.tail = new Uint8Array(RR * eR.nc.Bytes), this.tailView = new DataView(this.tail.buffer), th … [truncated]
```

#### 176. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1955` → after: `L1916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1916) · [Before (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1955)

```diff
-         this.JA || (this.JA = !0, this.host.JA(this, this.made ? this.key : null))
+         this.He || (this.He = !0, this.host.He(this, this.made ? this.key : null))
```

#### 177. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1964` → after: `L1925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1925) · [Before (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1964)

```diff
-           this.made = (0, AW.Qe)(WW, 0, this.key, iW, OW, mW)
+           this.made = (0, eR.Fe)(RR, 0, this.key, JR, GR, yR)
```

#### 178. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1969` → after: `L1930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1930) · [Before (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1969)

```diff
-         const iW = WW * AW.Hc.Bytes;
+         const JR = RR * eR.nc.Bytes;
```

#### 179. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1980-L1981` → after: `L1941-L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1941-L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1941-L1942) · [Before (L1980-L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1980-L1981)

```diff
-     var Qi = OW(639),
-       WO = OW(44924);
+     var TJ = GR(671),
+       sJ = GR(45021);
```

#### 180. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1999-L2000` → after: `L1960-L1961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1960-L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1960-L1961) · [Before (L1999-L2000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1999-L2000)

```diff
-         return OW = WW, Qi.k.includes(OW) ? this.add({
-           lifeform: tW.i.indexOf(WW)
+         return GR = RR, TJ.l.includes(GR) ? this.add({
+           lifeform: VR.k.indexOf(RR)
```

#### 181. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2026` → after: `L1987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1987) · [Before (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2026)

```diff
-         this.key = WW, this.source = iW, this.scale = OW, this.host = mW, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = OO, this.perch = null, this.owed = 1, this.JA = !1, this.sync()
+         this.key = RR, this.source = JR, this.scale = GR, this.host = yR, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = RG, this.perch = null, this.owed = 1, this.He = !1, this.sync()
```

#### 182. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2029` → after: `L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1990) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2029)

```diff
-         this.JA || (this.feet[0] = WW[0], this.feet[1] = WW[1], this.feet[2] = WW[2], this.yaw = iW, this.owed |= 2, this.sync())
+         this.He || (this.feet[0] = RR[0], this.feet[1] = RR[1], this.feet[2] = RR[2], this.yaw = JR, this.owed |= 2, this.sync())
```

#### 183. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2032` → after: `L1993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1993) · [Before (L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2032)

```diff
-         this.JA || WW === this.visible || (this.visible = WW, this.owed |= 4, this.sync())
+         this.He || RR === this.visible || (this.visible = RR, this.owed |= 4, this.sync())
```

#### 184. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2035` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1996) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2035)

```diff
-         this.JA || WW === this.clip || (this.clip = WW, this.clipBytes = null === WW ? OO : iO.encode(WW), this.owed |= 16, this.sync())
+         this.He || RR === this.clip || (this.clip = RR, this.clipBytes = null === RR ? RG : hJ.encode(RR), this.owed |= 16, this.sync())
```

#### 185. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2038` → after: `L1999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1999) · [Before (L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2038)

```diff
-         this.JA || (this.perch = WW, this.owed |= 32, this.sync())
+         this.He || (this.perch = RR, this.owed |= 32, this.sync())
```

#### 186. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2041` → after: `L2002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2002) · [Before (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2041)

```diff
-         this.JA || (this.JA = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
+         this.He || (this.He = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
```

#### 187. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2045` → after: `L2006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2006) · [Before (L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2045)

```diff
-         return this.write(WW) ? (this.host.settled(this, this.JA), !0) : (this.host.owes(this), !1)
+         return this.write(RR) ? (this.host.settled(this, this.He), !0) : (this.host.owes(this), !1)
```

#### 188. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2050` → after: `L2011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2011) · [Before (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2050)

```diff
-           if (!("lifeform" in this.source ? (0, AW.Te)(WW, 0, this.key, this.source.lifeform, this.scale) : (0, AW.ve)(WW, 0, this.key, this.source.attachment, this.scale))) return !1;
+           if (!("lifeform" in this.source ? (0, eR.Le)(RR, 0, this.key, this.source.lifeform, this.scale) : (0, eR.je)(RR, 0, this.key, this.source.attachment, this.scale))) return !1;
```

#### 189. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2056` → after: `L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2017) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2056)

```diff
-         } = this, mW = (2 & iW ? AW.fd.Pose : 0) | (4 & iW ? AW.fd.Visible : 0) | (16 & iW ? AW.fd.Clip : 0) | (32 & iW ? AW.fd.Perch : 0);
+         } = this, yR = (2 & JR ? eR.Lc.Pose : 0) | (4 & JR ? eR.Lc.Visible : 0) | (16 & JR ? eR.Lc.Clip : 0) | (32 & JR ? eR.Lc.Perch : 0);
```

#### 190. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2059` → after: `L2020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2020) · [Before (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2059)

```diff
-           if (!(0, AW.Se)(WW, 0, this.key, mW, this.visible ? 1 : 0, OW ? 1 : 0, this.feet, this.yaw, OW ? this.host.serverId(OW.ZO) : 0, null !== (EW = null === OW || void 0 === OW ? void 0 : OW.offset) && void 0 !== EW ? EW : mO, null !== (NW = null === OW || void 0 === OW ? vo … [truncated]
+           if (!(0, eR.Ie)(RR, 0, this.key, yR, this.visible ? 1 : 0, GR ? 1 : 0, this.feet, this.yaw, GR ? this.host.serverId(GR.fG) : 0, null !== (tR = null === GR || void 0 === GR ? void 0 : GR.offset) && void 0 !== tR ? tR : JG, null !== (uR = null === GR || void 0 === GR ? vo … [truncated]
```

#### 191. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2063` → after: `L2024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2024) · [Before (L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2063)

```diff
-           if (!(0, AW.Re)(WW, 0, this.key)) return !1;
+           if (!(0, eR.He)(RR, 0, this.key)) return !1;
```

#### 192. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2069` → after: `L2030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2030) · [Before (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2069)

```diff
-     var PO = OW(42491);
+     var tG = GR(42534);
```

#### 193. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2072` → after: `L2033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2033) · [Before (L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2072)

```diff
-       return (0, PO.b)(), (0, AW.vf)(WW, iW, OW, mW)
+       return (0, tG.b)(), (0, eR.zf)(RR, JR, GR, yR)
```

#### 194. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2074-L2076` → after: `L2035-L2037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2035-L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2035-L2037) · [Before (L2074-L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2074-L2076)

```diff
-     var cO = OW(40354),
-       wO = OW(42116),
-       tO = OW(42502);
+     var ZG = GR(40409),
+       qG = GR(42126),
+       iG = GR(42543);
```

#### 195. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2089` → after: `L2050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2050) · [Before (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2089)

```diff
-     const MO = xi.e;
+     const UG = wJ.f;
```

#### 196. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2092-L2093` → after: `L2053-L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2053-L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2053-L2054) · [Before (L2092-L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2092-L2093)

```diff
-       const iW = xi.d[WW],
-         OW = iW && xi.e[iW.mainMultiblock];
+       const JR = wJ.c[RR],
+         GR = JR && wJ.f[JR.mainMultiblock];
```

#### 197. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2103` → after: `L2064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2064) · [Before (L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2103)

```diff
-       if (null === WW || void 0 === WW) return AW.kd;
+       if (null === RR || void 0 === RR) return eR.Uc;
```

#### 198. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2105` → after: `L2066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2066) · [Before (L2105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2105)

```diff
-       return Number.isInteger(iW) && iW >= -2147483648 && iW <= 2147483647 && String(iW) === String(WW) ? iW : AW.kd
+       return Number.isInteger(JR) && JR >= -2147483648 && JR <= 2147483647 && String(JR) === String(RR) ? JR : eR.Uc
```

#### 199. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2109` → after: `L2070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2070) · [Before (L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2109)

```diff
-       return (0, AW.Bf)(WW, 0, iW, null !== OW && void 0 !== OW ? OW : Number.NaN)
+       return (0, eR.Ef)(RR, 0, JR, null !== GR && void 0 !== GR ? GR : Number.NaN)
```

#### 200. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2113` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2074) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2113)

```diff
-         this.deps = WW, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new cO.e((() => this.tables.getClientOption … [truncated]
+         this.deps = RR, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new ZG.d((() => this.tables.getClientOption … [truncated]
```

#### 201. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2120` → after: `L2081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2081) · [Before (L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2120)

```diff
-           JA: (WW, iW) => {
+           He: (RR, JR) => {
```

#### 202. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2129` → after: `L2090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2090) · [Before (L2129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2129)

```diff
-         if (!this.isLocal(WW)) throw new Error(`Attempted to ${iW} for a player that is not the local player`)
+         if (!this.isLocal(RR)) throw new Error(`Attempted to ${JR} for a player that is not the local player`)
```

#### 203. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2132-L2133` → after: `L2093-L2094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2093-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2093-L2094) · [Before (L2132-L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2132-L2133)

```diff
-         const iW = this.api.Vk(WW);
-         if (!iW) throw new Error(`Entity ${WW} has no replicated position`);
+         const JR = this.api.vW(RR);
+         if (!JR) throw new Error(`Entity ${RR} has no replicated position`);
```

#### 204. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2151` → after: `L2112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2112) · [Before (L2151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2151)

```diff
-         this.assertLocal(WW, "open shop"), PW.l.iZ("showShopFromServer", {
+         this.assertLocal(RR, "open shop"), ZR.n.JK("showShopFromServer", {
```

#### 205. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2153` → after: `L2114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2114) · [Before (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2153)

```diff
-           ni: OW
+           OJ: GR
```

#### 206. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2162` → after: `L2123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2123) · [Before (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2162)

```diff
-         PW.l.iZ("chat", {
+         ZR.n.JK("chat", {
```

#### 207. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2171` → after: `L2132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2132) · [Before (L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2171)

```diff
-         return iW === AW.kd ? void 0 : (0, ri.k)(this.api, iW)
+         return JR === eR.Uc ? void 0 : (0, kJ.l)(this.api, JR)
```

#### 208. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2175` → after: `L2136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2136) · [Before (L2175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2175)

```diff
-         return OW !== AW.kd && (0, ri.g)(this.api, OW, iW)
+         return GR !== eR.Uc && (0, kJ.h)(this.api, GR, JR)
```

#### 209. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2184` → after: `L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2145) · [Before (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2184)

```diff
-         if (!this.chunks.dataCleared(WW, iW, OW)) return (0, ri.d)(this.api, WW, iW, OW)
+         if (!this.chunks.dataCleared(RR, JR, GR)) return (0, kJ.e)(this.api, RR, JR, GR)
```

#### 210. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2191-L2192` → after: `L2152-L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2152-L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2152-L2153) · [Before (L2191-L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2191-L2192)

```diff
-         if (!Object.hasOwn(AW.Ad, OW)) throw new Error(`Unknown other-entity setting ${OW}`);
-         const EW = AW.Ad[OW],
+         if (!Object.hasOwn(eR.dd, GR)) throw new Error(`Unknown other-entity setting ${GR}`);
+         const tR = eR.dd[GR],
```

#### 211. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2194-L2196` → after: `L2155-L2157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2155-L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2155-L2157) · [Before (L2194-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2194-L2196)

```diff
-         if (NW === AW.kd || !this.deps.beforeWrite()) return;
-         const PW = (0, pW.e)(mW);
-         if (PW.length > 16384) throw new Error(`The other-entity setting ${OW}'s value is over 16384 bytes`);
+         if (uR === eR.Uc || !this.deps.beforeWrite()) return;
+         const ZR = (0, IR.i)(yR);
+         if (ZR.length > 16384) throw new Error(`The other-entity setting ${GR}'s value is over 16384 bytes`);
```

#### 212. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2209` → after: `L2170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2170) · [Before (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2209)

```diff
-         if (1 === AW.zb.headingIsDrawn(iW, 0)) return AW.zb.heading(iW, 0);
+         if (1 === eR.pb.headingIsDrawn(JR, 0)) return eR.pb.heading(JR, 0);
```

#### 213. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2211` → after: `L2172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2172) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2211)

```diff
-         return this.isLocal(WW) && 0 === (AW.z.playerFlags(OW, 0) & AW.Ud.FreeCam) ? AW.z.heading(OW, 0) : null
+         return this.isLocal(RR) && 0 === (eR.s.playerFlags(GR, 0) & eR.xd.FreeCam) ? eR.s.heading(GR, 0) : null
```

#### 214. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2215-L2216` → after: `L2176-L2177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2176-L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2176-L2177) · [Before (L2215-L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2215-L2216)

```diff
-           OW = iW ? AW.zb.eyeHeight(iW, 0) : 0;
-         return OW > 0 ? OW : null
+           GR = JR ? eR.pb.eyeHeight(JR, 0) : 0;
+         return GR > 0 ? GR : null
```

#### 215. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2220` → after: `L2181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2181) · [Before (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2220)

```diff
-         return iW === AW.kd || this.api.queries.directorEntity(iW) < AW.zb.BYTES ? null : this.api.scratchData(AW.zb.BYTES, "the drawn DirectorEntity")
+         return JR === eR.Uc || this.api.queries.directorEntity(JR) < eR.pb.BYTES ? null : this.api.scratchData(eR.pb.BYTES, "the drawn DirectorEntity")
```

#### 216. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2224` → after: `L2185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2185) · [Before (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2224)

```diff
-         return iW !== AW.kd && 1 === this.api.queries.entityDrawn(iW)
+         return JR !== eR.Uc && 1 === this.api.queries.entityDrawn(JR)
```

#### 217. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2227` → after: `L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2188) · [Before (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2227)

```diff
-         return tO.i.ids()
+         return iG.f.ids()
```

#### 218. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2231` → after: `L2192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2192) · [Before (L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2231)

```diff
-         return null !== (iW = (0, tO.m)(WW)) && void 0 !== iW ? iW : null
+         return null !== (JR = (0, iG.i)(RR)) && void 0 !== JR ? JR : null
```

#### 219. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2234-L2237` → after: `L2195-L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2195-L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2195-L2198) · [Before (L2234-L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2234-L2237)

```diff
-         const WW = AW.z.playerFlags(this.api.apiView, 0);
-         return 0 === (WW & AW.Ud.Replay) && this.api.readDrawnPosition(this.api.localId, lO) ? {
-           onGround: 0 !== (WW & AW.Ud.OnGround),
-           jumpHeld: 0 !== (WW & AW.Ud.JumpHeld)
+         const RR = eR.s.playerFlags(this.api.apiView, 0);
+         return 0 === (RR & eR.xd.Replay) && this.api.readDrawnPosition(this.api.localId, KG) ? {
+           onGround: 0 !== (RR & eR.xd.OnGround),
+           jumpHeld: 0 !== (RR & eR.xd.JumpHeld)
```

#### 220. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2241` → after: `L2202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2202) · [Before (L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2241)

```diff
-         return (0, li.z)(this.deps.localPhysicsType())
+         return (0, rJ.v)(this.deps.localPhysicsType())
```

#### 221. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2243-L2244` → after: `L2204-L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2204-L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2204-L2205) · [Before (L2243-L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2243-L2244)

```diff
-       kOW(WW) {
-         return this.isLocal(WW) ? this.items.BL() : null
+       uyR(RR) {
+         return this.isLocal(RR) ? this.items.Qq() : null
```

#### 222. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2254` → after: `L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2215) · [Before (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2254)

```diff
-         return !1 === this.api.isAlive(this.api.localId) ? null : this.items.BL()
+         return !1 === this.api.isAlive(this.api.localId) ? null : this.items.Qq()
```

#### 223. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2258` → after: `L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2219) · [Before (L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2258)

```diff
-         const OW = (0, bi.d)(mW.d.get("crosshairGameView"), mW.d.get("crosshairShownOverride"));
+         const GR = (0, aJ.e)(yR.d.get("crosshairGameView"), yR.d.get("crosshairShownOverride"));
```

#### 224. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2263-L2265` → after: `L2224-L2226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2224-L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2224-L2226) · [Before (L2263-L2265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2263-L2265)

```diff
-           LW = 0 === (AW.z.playerFlags(this.api.apiView, 0) & AW.Ud.ZoomFirstPerson),
-           cW = null !== (iW = this.tables.getClientOption("gunshotOrigin")) && void 0 !== iW ? iW : null;
-         return (0, bi.i)({
+           qR = 0 === (eR.s.playerFlags(this.api.apiView, 0) & eR.xd.ZoomFirstPerson),
+           iR = null !== (JR = this.tables.getClientOption("gunshotOrigin")) && void 0 !== JR ? JR : null;
+         return (0, aJ.h)({
```

#### 225. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2268` → after: `L2229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2229) · [Before (L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2268)

```diff
-         }, LW, (0, ji.c)(), cW)
+         }, qR, (0, LJ.e)(), iR)
```

#### 226. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2288` → after: `L2249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2249) · [Before (L2288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2288)

```diff
-         if (this.isLocal(WW)) return 0 !== (AW.z.playerFlags(this.api.apiView, 0) & AW.Ud.Crouching);
+         if (this.isLocal(RR)) return 0 !== (eR.s.playerFlags(this.api.apiView, 0) & eR.xd.Crouching);
```

#### 227. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2290` → after: `L2251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2251) · [Before (L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2290)

```diff
-         return iW !== AW.kd && 1 === this.api.queries.entityCrouching(iW)
+         return JR !== eR.Uc && 1 === this.api.queries.entityCrouching(JR)
```

#### 228. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2296` → after: `L2257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2257) · [Before (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2296)

```diff
-         return 0 !== (AW.z.playerFlags(this.api.apiView, 0) & AW.Ud.AttemptingBreak)
+         return 0 !== (eR.s.playerFlags(this.api.apiView, 0) & eR.xd.AttemptingBreak)
```

#### 229. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2299` → after: `L2260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2260) · [Before (L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2299)

```diff
-         return this.live.WiW()
+         return this.live.IJR()
```

#### 230. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2303` → after: `L2264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2264) · [Before (L2303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2303)

```diff
-         for (let iW = 0; iW < 3; iW++) bO.origin[iW] = AW.z.biW(WW, 0, iW), bO.direction[iW] = AW.z.actionDir(WW, 0, iW);
+         for (let JR = 0; JR < 3; JR++) rG.origin[JR] = eR.s.GGR(RR, 0, JR), rG.direction[JR] = eR.s.actionDir(RR, 0, JR);
```

#### 231. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2319-L2320` → after: `L2280-L2281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2280-L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2280-L2281) · [Before (L2319-L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2319-L2320)

```diff
-       piW(WW, iW, OW, mW, EW) {
-         return 1 === this.api.queries.terrainBlocked(mW, WW, iW, OW, SO(null !== EW && void 0 !== EW ? EW : null))
+       pGR(RR, JR, GR, yR, tR) {
+         return 1 === this.api.queries.terrainBlocked(yR, RR, JR, GR, AG(null !== tR && void 0 !== tR ? tR : null))
```

#### 232. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2335` → after: `L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2296) · [Before (L2335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2335)

```diff
-         return this.chunks.NL(WW, iW, OW)
+         return this.chunks.Vq(RR, JR, GR)
```

#### 233. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2341` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2302) · [Before (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2341)

```diff
-         return 1 === mW ? PW : PW.rate(mW)
+         return 1 === yR ? ZR : ZR.rate(yR)
```

#### 234. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2350-L2353` → after: `L2311-L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2311-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2311-L2314) · [Before (L2350-L2353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2350-L2353)

```diff
-         if (!PW) return ei.c;
-         const LW = null === OW || void 0 === OW ? void 0 : OW.FO,
-           cW = null !== (EW = null === OW || void 0 === OW ? void 0 : OW.maxHearDist) && void 0 !== EW ? EW : Ai.f,
-           wW = null !== (NW = null === OW || void 0 === OW ? void 0 : OW.refDistance) && void 0 !== NW ? NW : Ai.g;
+         if (!ZR) return NJ.b;
+         const qR = null === GR || void 0 === GR ? void 0 : GR.TG,
+           iR = null !== (tR = null === GR || void 0 === GR ? void 0 : GR.maxHearDist) && void 0 !== tR ? tR : eJ.d,
+           fR = null !== (uR = null === GR || void 0 === GR ? void 0 : GR.refDistance) && void 0 !== uR ? uR : eJ.f;
```

#### 235. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2359` → after: `L2320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2320) · [Before (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2359)

```diff
-             if (!this.api.readPosition(WW, ZO)) return ei.c;
+             if (!this.api.readPosition(RR, fG)) return NJ.b;
```

#### 236. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2369-L2370` → after: `L2330-L2331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2330-L2331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2330-L2331) · [Before (L2369-L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2369-L2370)

```diff
-           if (0 === AW.z.viewProj(WW, 0, 3) && 0 === AW.z.viewProj(WW, 0, 7) && 0 === AW.z.viewProj(WW, 0, 11)) return null;
-           for (let iW = 0; iW < 3; iW++) xO[iW] = AW.z.eye(WW, 0, iW)
+           if (0 === eR.s.viewProj(RR, 0, 3) && 0 === eR.s.viewProj(RR, 0, 7) && 0 === eR.s.viewProj(RR, 0, 11)) return null;
+           for (let JR = 0; JR < 3; JR++) VG[JR] = eR.s.eye(RR, 0, JR)
```

#### 237. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2372` → after: `L2333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2333) · [Before (L2372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2372)

```diff
-         return Number.isFinite(xO[0] + xO[1] + xO[2]) ? xO : null
+         return Number.isFinite(VG[0] + VG[1] + VG[2]) ? VG : null
```

#### 238. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2375` → after: `L2336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2336) · [Before (L2375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2375)

```diff
-         if (!Number.isInteger(mW) || mW < 0 || mW > 65535) throw new Error(`Invalid block id ${mW}`);
+         if (!Number.isInteger(yR) || yR < 0 || yR > 65535) throw new Error(`Invalid block id ${yR}`);
```

#### 239. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2381` → after: `L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2342) · [Before (L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2381)

```diff
-         if (1 === this.api.queries.xH(EW, NW, PW, mW)) {
+         if (1 === this.api.queries.lD(tR, uR, ZR, yR)) {
```

#### 240. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2410` → after: `L2371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2371) · [Before (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2410)

```diff
-                 look: AW.kc.FlatOnTop,
+                 look: eR.Yb.FlatOnTop,
```

#### 241. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2413` → after: `L2374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2374) · [Before (L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2413)

```diff
-                 look: AW.kc.FlatOpaque,
+                 look: eR.Yb.FlatOpaque,
```

#### 242. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2416` → after: `L2377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2377) · [Before (L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2416)

```diff
-                 look: AW.kc.Flat,
+                 look: eR.Yb.Flat,
```

#### 243. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2421` → after: `L2382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2382) · [Before (L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2421)

```diff
-                 look: AW.kc.Chevrons, colour: [...(0, Ui.d)(WW.colour), WW.alpha]
+                 look: eR.Yb.Chevrons, colour: [...(0, nJ.c)(RR.colour), RR.alpha]
```

#### 244. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2425` → after: `L2386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2386) · [Before (L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2425)

```diff
-                 look: AW.kc.FurnaceFire, colour: [1, 1, 1, 1]
+                 look: eR.Yb.FurnaceFire, colour: [1, 1, 1, 1]
```

#### 245. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2437` → after: `L2398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2398) · [Before (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2437)

```diff
-             const iW = null !== (LW = WW.uvs) && void 0 !== LW ? LW : [];
+             const JR = null !== (qR = RR.uvs) && void 0 !== qR ? qR : [];
```

#### 246. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2440` → after: `L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2401) · [Before (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2440)

```diff
-               PW.setFloat32(4 * (3 * OW + WW), null !== (cW = iW[WW]) && void 0 !== cW ? cW : 0, !0)
+               ZR.setFloat32(4 * (3 * GR + RR), null !== (iR = JR[RR]) && void 0 !== iR ? iR : 0, !0)
```

#### 247. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2446` → after: `L2407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2407) · [Before (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2446)

```diff
-         return (0, AW.De)(EW, 0, mW, NW, PW, OW, LW, WW.indices.length, cW) && this.liveMeshes.add(mW), mW
+         return (0, eR.se)(tR, 0, yR, uR, ZR, GR, qR, RR.indices.length, iR) && this.liveMeshes.add(yR), yR
```

#### 248. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2453-L2455` → after: `L2414-L2416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2414-L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2414-L2416) · [Before (L2453-L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2453-L2455)

```diff
-         iW.anchor && (EW |= AW.nc.Anchor, jO[0] = iW.anchor[0], jO[1] = iW.anchor[1], jO[2] = iW.anchor[2]), void 0 !== iW.visible && (EW |= AW.nc.Visible), iW.uvOffset && (EW |= AW.nc.UvOffset, UO[0] = iW.uvOffset[0], UO[1] = iW.uvOffset[1]);
-         const NW = null !== (OW = iW.visibility) && void 0 !== OW ? OW : 1;
-         void 0 !== iW.visibility && (EW |= AW.nc.Visibility), iW.scale && (EW |= AW.nc.Scale, kO[0] = iW.scale[0], kO[1] = iW.scale[1], kO[2] = iW.scale[2]), 0 !== EW && (0, AW.Je)(mW, 0, WW, EW, iW.visible ? 1 : 0, jO, UO, NW, kO)
+         JR.anchor && (tR |= eR._b.Anchor, eG[0] = JR.anchor[0], eG[1] = JR.anchor[1], eG[2] = JR.anchor[2]), void 0 !== JR.visible && (tR |= eR._b.Visible), JR.uvOffset && (tR |= eR._b.UvOffset, aG[0] = JR.uvOffset[0], aG[1] = JR.uvOffset[1]);
+         const uR = null !== (GR = JR.visibility) && void 0 !== GR ? GR : 1;
+         void 0 !== JR.visibility && (tR |= eR._b.Visibility), JR.scale && (tR |= eR._b.Scale, LG[0] = JR.scale[0], LG[1] = JR.scale[1], LG[2] = JR.scale[2]), 0 !== tR && (0, eR.xe)(yR, 0, RR, tR, JR.visible ? 1 : 0, eG, aG, uR, LG)
```

#### 249. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2459` → after: `L2420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2420) · [Before (L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2459)

```diff
-         iW && !(0, AW.Fe)(iW, 0, WW) || this.liveMeshes.delete(WW)
+         JR && !(0, eR.te)(JR, 0, RR) || this.liveMeshes.delete(RR)
```

#### 250. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2511` → after: `L2472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2472) · [Before (L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2511)

```diff
-         const iW = `${WW.colour} ${WW.alpha}`;
+         const JR = `${RR.colour} ${RR.alpha}`;
```

#### 251. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2553` → after: `L2514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2514) · [Before (L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2553)

```diff
-         for (; OW < WW.length && (0, AW.Oe)(iW, 0, WW[OW]);) OW++;
+         for (; GR < RR.length && (0, eR.De)(JR, 0, RR[GR]);) GR++;
```

#### 252. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2557` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2518) · [Before (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2557)

```diff
-           (mW ? (0, AW.Ef)(iW, 0, mW.width, mW.alpha, 1, mW.endAtSolidFace ? 1 : 0) : (0, AW.Ef)(iW, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
+           (yR ? (0, eR.If)(JR, 0, yR.width, yR.alpha, 1, yR.endAtSolidFace ? 1 : 0) : (0, eR.If)(JR, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
```

#### 253. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2560` → after: `L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2521) · [Before (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2560)

```diff
-         void 0 !== EW && (0, AW.Af)(iW, 0, null !== EW && void 0 !== EW ? EW : 0, null === EW ? 1 : 0) && (this.pendingFar = void 0)
+         void 0 !== tR && (0, eR.Cf)(JR, 0, null !== tR && void 0 !== tR ? tR : 0, null === tR ? 1 : 0) && (this.pendingFar = void 0)
```

#### 254. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2565` → after: `L2526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2526) · [Before (L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2565)

```diff
-         OW && mW !== AW.kd && (0, AW.Kf)(OW, 0, mW, iW)
+         GR && yR !== eR.Uc && (0, eR.Qf)(GR, 0, yR, JR)
```

#### 255. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2570` → after: `L2531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2531) · [Before (L2570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2570)

```diff
-         OW && mW !== AW.kd && YO(OW, mW, iW)
+         GR && yR !== eR.Uc && CG(GR, yR, JR)
```

#### 256. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2586` → after: `L2547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2547) · [Before (L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2586)

```diff
-         return iW !== AW.kd && 1 === this.api.queries.entityInteractable(iW)
+         return JR !== eR.Uc && 1 === this.api.queries.entityInteractable(JR)
```

#### 257. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2599` → after: `L2560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2560) · [Before (L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2599)

```diff
-           return null !== WW && void 0 !== WW ? WW : null
+           return null !== RR && void 0 !== RR ? RR : null
```

#### 258. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2606` → after: `L2567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2567) · [Before (L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2606)

```diff
-         return AO[0] = AW.z.eye(WW, 0, 0), AO[1] = AW.z.eye(WW, 0, 1), AO[2] = AW.z.eye(WW, 0, 2), AO
+         return wG[0] = eR.s.eye(RR, 0, 0), wG[1] = eR.s.eye(RR, 0, 1), wG[2] = eR.s.eye(RR, 0, 2), wG
```

#### 259. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2609` → after: `L2570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2570) · [Before (L2609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2609)

```diff
-         return AW.z.cameraFar(this.api.apiView, 0)
+         return eR.s.cameraFar(this.api.apiView, 0)
```

#### 260. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2620` → after: `L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2581) · [Before (L2620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2620)

```diff
-         iW && OW !== AW.kd && (0, AW.re)(iW, 0, OW)
+         JR && GR !== eR.Uc && (0, eR.ge)(JR, 0, GR)
```

#### 261. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2625-L2627` → after: `L2586-L2588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2586-L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2586-L2588) · [Before (L2625-L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2625-L2627)

```diff
-         return null !== OW && LO(OW, 0, wO.e.Chat, (0, pW.e)((0, wO.p)({
-           tP: WW,
-           ZP: iW
+         return null !== GR && uG(GR, 0, qG.d.Chat, (0, IR.i)((0, qG.m)({
+           LZ: RR,
+           nZ: JR
```

#### 262. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2631` → after: `L2592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2592) · [Before (L2631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2631)

```diff
-         WW.length <= 119 && this.sendChat(`/${WW}`)
+         RR.length <= 119 && this.sendChat(`/${RR}`)
```

#### 263. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2639` → after: `L2600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2600) · [Before (L2639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2639)

```diff
-           LW = EW.NL(WW, iW, OW),
+           qR = tR.Vq(RR, JR, GR),
```

#### 264. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2642-L2643` → after: `L2603-L2604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2603-L2604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2603-L2604) · [Before (L2642-L2643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2642-L2643)

```diff
-           const [mW, NW, wW] = [WW - cW.x, iW - cW.y, OW - cW.z], tW = MO[EW.NL(mW, NW, wW)], ZW = null === tW || void 0 === tW ? void 0 : tW.positions.some((WW => WW.id === LW && WW.x === cW.x && WW.y === cW.y && WW.z === cW.z));
-           for (const WW of (ZW && tW ? tW : cW.main).positions) EW.NL(mW + WW.x, NW + WW.y, wW + WW.z) === WW.id && PW(mW + WW.x, NW + WW.y, wW + WW.z, 0, WW.id)
+           const [yR, uR, fR] = [RR - iR.x, JR - iR.y, GR - iR.z], VR = UG[tR.Vq(yR, uR, fR)], KR = null === VR || void 0 === VR ? void 0 : VR.positions.some((RR => RR.id === qR && RR.x === iR.x && RR.y === iR.y && RR.z === iR.z));
+           for (const RR of (KR && VR ? VR : iR.main).positions) tR.Vq(yR + RR.x, uR + RR.y, fR + RR.z) === RR.id && ZR(yR + RR.x, uR + RR.y, fR + RR.z, 0, RR.id)
```

#### 265. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2649` → after: `L2610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2610) · [Before (L2649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2649)

```diff
-             PW(mW, NW, LW, ZW.id, EW.NL(mW, NW, LW))
+             ZR(yR, uR, qR, KR.id, tR.Vq(yR, uR, qR))
```

#### 266. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2653` → after: `L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2614) · [Before (L2653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2653)

```diff
-           let cW = EW.NL(WW, iW + 1, OW);
+           let iR = tR.Vq(RR, JR + 1, GR);
```

#### 267. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2665` → after: `L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2626) · [Before (L2665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2665)

```diff
-         return 0 !== EW && 0 !== NW && mW.blockRootId(WW) === mW.blockRootId(iW) ? PW && OW !== NW ? NW : void 0 : 0 === NW || !PW && 0 !== OW ? PW ? 0 : void 0 : NW
+         return 0 !== tR && 0 !== uR && yR.blockRootId(RR) === yR.blockRootId(JR) ? ZR && GR !== uR ? uR : void 0 : 0 === uR || !ZR && 0 !== GR ? ZR ? 0 : void 0 : uR
```

#### 268. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2668` → after: `L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2629) · [Before (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2668)

```diff
-     const TO = AW.Ac + AW.Dc * AW.Kc.BYTES,
+     const MG = eR.gc + eR.jc * eR.rc.BYTES,
```

#### 269. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2673-L2674` → after: `L2634-L2635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2634-L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2634-L2635) · [Before (L2673-L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2673-L2674)

```diff
-         lL: 0,
-         WZ: null,
+         Uq: 0,
+         RK: null,
```

#### 270. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2678` → after: `L2639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2639) · [Before (L2678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2678)

```diff
-         get: () => () => AW.wd
+         get: () => () => eR.cd
```

#### 271. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2690` → after: `L2651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2651) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2690)

```diff
-         this.deps = WW, this.CE = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(AW.Dc), this.ids = new Uint16Array(AW.Dc), this.amounts = new Uint16Array(AW.Dc), this.attrRead = new Float64Array(AW.Dc).fill(-1 … [truncated]
+         this.deps = RR, this.Ft = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(eR.jc), this.ids = new Uint16Array(eR.jc), this.amounts = new Uint16Array(eR.jc), this.attrRead = new Float64Array(eR.jc).fill(-1 … [truncated]
```

#### 272. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2706` → after: `L2667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2667) · [Before (L2706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2706)

```diff
-         return Number.isInteger(WW) && WW >= 0 && WW < this.len && 0 !== this.ids[WW] && null !== (iW = this.facades[WW]) && void 0 !== iW ? iW : null
+         return Number.isInteger(RR) && RR >= 0 && RR < this.len && 0 !== this.ids[RR] && null !== (JR = this.facades[RR]) && void 0 !== JR ? JR : null
```

#### 273. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2713` → after: `L2674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2674) · [Before (L2713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2713)

```diff
-         for (let iW = 0; iW < Math.min(AW.Gd, this.len); iW++) WW.push(this.slot(iW));
+         for (let JR = 0; JR < Math.min(eR.jd, this.len); JR++) RR.push(this.slot(JR));
```

#### 274. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2718` → after: `L2679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2679) · [Before (L2718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2718)

```diff
-         for (let iW = 0; iW < Math.min(AW.Gd - AW.k, this.len); iW++) 0 === this.ids[iW] && WW++;
+         for (let JR = 0; JR < Math.min(eR.jd - eR.h, this.len); JR++) 0 === this.ids[JR] && RR++;
```

#### 275. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2723` → after: `L2684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2684) · [Before (L2723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2723)

```diff
-         for (let mW = 0; mW < Math.min(AW.Gd, this.len); mW++) {
+         for (let yR = 0; yR < Math.min(eR.jd, this.len); yR++) {
```

#### 276. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2726` → after: `L2687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2687) · [Before (L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2726)

```diff
-           if ((null === EW || void 0 === EW ? void 0 : EW.name) === WW) iW += null !== (OW = EW.amount) && void 0 !== OW ? OW : 1
+           if ((null === tR || void 0 === tR ? void 0 : tR.name) === RR) JR += null !== (GR = tR.amount) && void 0 !== GR ? GR : 1
```

#### 277. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2732` → after: `L2693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2693) · [Before (L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2732)

```diff
-         return null !== (iW = this.instances[WW]) && void 0 !== iW ? iW : 0
+         return null !== (JR = this.instances[RR]) && void 0 !== JR ? JR : 0
```

#### 278. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2753` → after: `L2714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2714) · [Before (L2753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2753)

```diff
-         this.CE[0] = WW, this.CE[1] = iW, this.CE[2] = OW, this.version++
+         this.Ft[0] = RR, this.Ft[1] = JR, this.Ft[2] = GR, this.version++
```

#### 279. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2757-L2759` → after: `L2718-L2720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2718-L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2718-L2720) · [Before (L2757-L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2757-L2759)

```diff
-           iW = AW.z.inventoryViewPtr(WW, 0),
-           OW = AW.z.inventoryVersion(WW, 0),
-           mW = AW.z.selectedSlot(WW, 0);
+           JR = eR.s.inventoryViewPtr(RR, 0),
+           GR = eR.s.inventoryVersion(RR, 0),
+           yR = eR.s.selectedSlot(RR, 0);
```

#### 280. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2761` → after: `L2722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2722) · [Before (L2761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2761)

```diff
-         const EW = AW.z.slotIcon(WW, 0);
+         const tR = eR.s.slotIcon(RR, 0);
```

#### 281. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2765` → after: `L2726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2726) · [Before (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2765)

```diff
-           PW = NW ? Math.min(NW.getUint32(0, !0), AW.Dc) : 0;
+           ZR = uR ? Math.min(uR.getUint32(0, !0), eR.jc) : 0;
```

#### 282. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2768-L2770` → after: `L2729-L2731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2729-L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2729-L2731) · [Before (L2768-L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2768-L2770)

```diff
-         for (let cW = 0; cW < AW.Dc; cW++) {
-           const WW = AW.Ac + cW * AW.Kc.BYTES,
-             iW = null !== NW && cW < PW ? AW.Kc.item(NW, WW) : 0;
+         for (let iR = 0; iR < eR.jc; iR++) {
+           const RR = eR.gc + iR * eR.rc.BYTES,
+             JR = null !== uR && iR < ZR ? eR.rc.item(uR, RR) : 0;
```

#### 283. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2775-L2776` → after: `L2736-L2737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2736-L2737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2736-L2737) · [Before (L2775-L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2775-L2776)

```diff
-           const OW = AW.Kc.amount(NW, WW),
-             mW = AW.Kc.attrVersion(NW, WW);
+           const GR = eR.rc.amount(uR, RR),
+             yR = eR.rc.attrVersion(uR, RR);
```

#### 284. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2812` → after: `L2773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2773) · [Before (L2812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2812)

```diff
-           cW += 8 + (0, xW.xe)(iW);
+           iR += 8 + (0, wR.ve)(JR);
```

#### 285. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2838-L2839` → after: `L2799-L2800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2799-L2800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2799-L2800) · [Before (L2838-L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2838-L2839)

```diff
-           LW = PW === AW.wd ? AW.Xb : null !== (EW = null === (NW = this.extras()) || void 0 === NW ? void 0 : NW[1]) && void 0 !== EW ? EW : AW.Xb;
-         return this.settle(PW), LW === AW.Xb ? null : LW
+           qR = ZR === eR.cd ? eR.Gb : null !== (tR = null === (uR = this.extras()) || void 0 === uR ? void 0 : uR[1]) && void 0 !== tR ? tR : eR.Gb;
+         return this.settle(ZR), qR === eR.Gb ? null : qR
```

#### 286. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2866` → after: `L2827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2827) · [Before (L2866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2866)

```diff
-         const LW = NW === AW.wd ? null : this.extras();
+         const qR = uR === eR.cd ? null : this.extras();
```

#### 287. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2870-L2871` → after: `L2831-L2832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2831-L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2831-L2832) · [Before (L2870-L2871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2870-L2871)

```diff
-             lL: WW,
-             WZ: iW === AW.Xb ? null : iW,
+             Uq: RR,
+             RK: JR === eR.Gb ? null : JR,
```

#### 288. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2894` → after: `L2855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2855) · [Before (L2894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2894)

```diff
-           if (PW.length > 1024) return NW(new Error(`The crafting station ${WW}'s name is over 1024 bytes`)), null;
+           if (ZR.length > 1024) return uR(new Error(`The crafting station ${RR}'s name is over 1024 bytes`)), null;
```

#### 289. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2900-L2901` → after: `L2861-L2862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2861-L2862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2861-L2862) · [Before (L2900-L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2900-L2901)

```diff
-           cW = EW.queries.craftingView(null !== (mW = null === PW || void 0 === PW ? void 0 : PW.length) && void 0 !== mW ? mW : 0, LW ? iW : 0, LW ? OW : 0);
-         return cW < AW.rb.BYTES ? (EW.reportCorruption(`crafting_view's answer of ${cW} bytes`), null) : EW.memoryData(EW.scratch(), cW, 1, "crafting_view's answer")
+           iR = tR.queries.craftingView(null !== (yR = null === ZR || void 0 === ZR ? void 0 : ZR.length) && void 0 !== yR ? yR : 0, qR ? JR : 0, qR ? GR : 0);
+         return iR < eR.kb.BYTES ? (tR.reportCorruption(`crafting_view's answer of ${iR} bytes`), null) : tR.memoryData(tR.scratch(), iR, 1, "crafting_view's answer")
```

#### 290. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2914-L2915` → after: `L2875-L2876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2875-L2876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2875-L2876) · [Before (L2914-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2914-L2915)

```diff
-         if (WW === AW.sd)(0, PO.b)();
-         else if (WW !== AW.wd) {
+         if (RR === eR.bd)(0, tG.b)();
+         else if (RR !== eR.cd) {
```

#### 291. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2918-L2919` → after: `L2879-L2880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2879-L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2879-L2880) · [Before (L2918-L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2918-L2919)

```diff
-             return (0, PO.b)(), (0, AW.Uf)(WW, iW, OW)
-           }(iW, 0, WW) || this.deps.onError(new Error(`Sync op ${WW}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
+             return (0, tG.b)(), (0, eR.ag)(RR, JR, GR)
+           }(JR, 0, RR) || this.deps.onError(new Error(`Sync op ${RR}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
```

#### 292. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2921` → after: `L2882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2882) · [Before (L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2921)

```diff
-         return this.stopped || this.refresh(), WW !== AW.wd
+         return this.stopped || this.refresh(), RR !== eR.cd
```

#### 293. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2928` → after: `L2889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2889) · [Before (L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2928)

```diff
-       pO = 1.2 * ki.f.tU,
+       cG = 1.2 * UJ.g.Vn,
```

#### 294. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2936` → after: `L2897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2897) · [Before (L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2936)

```diff
-       return iW || (BO.size >= 64 && BO.clear(), iW = fO.encode(`{"emitRate":${WW}}`), BO.set(WW, iW)), iW
+       return JR || (zG.size >= 64 && zG.clear(), JR = PG.encode(`{"emitRate":${RR}}`), zG.set(RR, JR)), JR
```

#### 295. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2940` → after: `L2901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2901) · [Before (L2940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2940)

```diff
-       return Number.isFinite(WW) && WW > 0 ? WW : 0
+       return Number.isFinite(RR) && RR > 0 ? RR : 0
```

#### 296. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2956` → after: `L2917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2917) · [Before (L2956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2956)

```diff
-       return WW.length > AW.Td.MaxOpts ? (OW(new Error(`${iW}'s particle opts are over ${AW.Td.MaxOpts} bytes of JSON`)), null) : WW
+       return RR.length > eR.td.MaxOpts ? (GR(new Error(`${JR}'s particle opts are over ${eR.td.MaxOpts} bytes of JSON`)), null) : RR
```

#### 297. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2980-L2981` → after: `L2941-L2942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2941-L2942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2941-L2942) · [Before (L2980-L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2980-L2981)

```diff
-           EW = null !== (OW = iW.half) && void 0 !== OW ? OW : DO;
-         if (!mW || this.live >= AW.Td.MaxLiveKeys || this.nextKey > AW.Td.MaxKey || !GO(iW.pos, EW)) return rO;
+           tR = null !== (GR = JR.half) && void 0 !== GR ? GR : HG;
+         if (!yR || this.live >= eR.td.MaxLiveKeys || this.nextKey > eR.td.MaxKey || !dG(JR.pos, tR)) return kG;
```

#### 298. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2987` → after: `L2948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2948) · [Before (L2987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2987)

```diff
-               aZ: WW.aZ,
+               hK: RR.hK,
```

#### 299. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2995-L2997` → after: `L2956-L2958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2956-L2958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2956-L2958) · [Before (L2995-L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2995-L2997)

```diff
-               gravity: null !== (iW = WW.gravity) && void 0 !== iW ? iW : DO,
-               dir1: null !== (OW = WW.dir1) && void 0 !== OW ? OW : gO,
-               dir2: null !== (mW = WW.dir2) && void 0 !== mW ? mW : gO,
+               gravity: null !== (JR = RR.gravity) && void 0 !== JR ? JR : HG,
+               dir1: null !== (GR = RR.dir1) && void 0 !== GR ? GR : DG,
+               dir2: null !== (yR = RR.dir2) && void 0 !== yR ? yR : DG,
```

#### 300. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3003` → after: `L2964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2964) · [Before (L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3003)

```diff
-         return PW && (0, AW.af)(mW, 0, NW, 0, AW.Td.PresetNone, 0, CO, XO, PW) ? (this.nextKey++, this.live++, this.started = !0, new FO(this, this.session, NW, WW, EW)) : rO
+         return ZR && (0, eR.Re)(yR, 0, uR, 0, eR.td.PresetNone, 0, IG, mG, ZR) ? (this.nextKey++, this.live++, this.started = !0, new FG(this, this.session, uR, RR, tR)) : kG
```

#### 301. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3015` → after: `L2976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2976) · [Before (L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3015)

```diff
-         EW && (0, AW.We)(iW, 0, 0, AW.Td.PresetNone, AW.Td.HasBox, 0, CO, XO, EW)
+         tR && (0, eR.Pe)(JR, 0, 0, eR.td.PresetNone, eR.td.HasBox, 0, IG, mG, tR)
```

#### 302. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3019-L3020` → after: `L2980-L2981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2980-L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2980-L2981) · [Before (L3019-L3020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3019-L3020)

```diff
-           EW = Math.min(Math.floor(OW), AW.Td.MaxBurst);
-         if (!mW || !Object.hasOwn(AW.pc, WW) || !(EW > 0)) return;
+           tR = Math.min(Math.floor(GR), eR.td.MaxBurst);
+         if (!yR || !Object.hasOwn(eR.$b, RR) || !(tR > 0)) return;
```

#### 303. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3023` → after: `L2984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2984) · [Before (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3023)

```diff
-         Number.isFinite(CO[0] + CO[1] + CO[2]) && (0, AW.We)(mW, 0, 0, AW.pc[WW], AW.Td.HasBox, EW, CO, XO, VO)
+         Number.isFinite(IG[0] + IG[1] + IG[2]) && (0, eR.Pe)(yR, 0, 0, eR.$b[RR], eR.td.HasBox, tR, IG, mG, oG)
```

#### 304. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3028` → after: `L2989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2989) · [Before (L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3028)

```diff
-         return this.started = !1, this.nextKey = 1, this.live = 0, !WW || (0, AW.bf)(WW, 0)
+         return this.started = !1, this.nextKey = 1, this.live = 0, !RR || (0, eR.Ve)(RR, 0)
```

#### 305. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3035` → after: `L2996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2996) · [Before (L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3035)

```diff
-         OW && (0, AW.df)(OW, 0, iW) && this.live--
+         GR && (0, eR.Ye)(GR, 0, JR) && this.live--
```

#### 306. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3052` → after: `L3013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3013) · [Before (L3052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3052)

```diff
-           GO(WW, this.half) && (0, AW.gf)(OW, 0, this.key, AW.Td.HasBox, CO, XO, VO)
+           dG(RR, this.half) && (0, eR.af)(GR, 0, this.key, eR.td.HasBox, IG, mG, oG)
```

#### 307. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3058` → after: `L3019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3019) · [Before (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3058)

```diff
-         iW && OW !== this.rate && (0, AW.gf)(iW, 0, this.key, 0, DO, DO, qO(OW)) && (this.rate = OW, this.emitted ||= OW > 0)
+         JR && GR !== this.rate && (0, eR.af)(JR, 0, this.key, 0, HG, HG, SG(GR)) && (this.rate = GR, this.emitted ||= GR > 0)
```

#### 308. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3062-L3063` → after: `L3023-L3024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3023-L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3023-L3024) · [Before (L3062-L3063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3062-L3063)

```diff
-           OW = Math.min(Math.floor(WW), AW.Td.MaxBurst);
-         iW && OW > 0 && (0, AW.We)(iW, 0, this.key, AW.Td.PresetNone, 0, OW, DO, DO, VO) && (this.emitted = !0)
+           GR = Math.min(Math.floor(RR), eR.td.MaxBurst);
+         JR && GR > 0 && (0, eR.Pe)(JR, 0, this.key, eR.td.PresetNone, 0, GR, HG, HG, oG) && (this.emitted = !0)
```

#### 309. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3067` → after: `L3028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3028) · [Before (L3067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3067)

```diff
-           EW = Math.min(Math.floor(OW), AW.Td.MaxPoints, Math.floor(iW.length / 4));
+           tR = Math.min(Math.floor(GR), eR.td.MaxPoints, Math.floor(JR.length / 4));
```

#### 310. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3069-L3070` → after: `L3030-L3031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3030-L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3030-L3031) · [Before (L3069-L3070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3069-L3070)

```diff
-         const NW = new Uint8Array(iW.buffer, iW.byteOffset, EW * AW.Td.PointBytes);
-         (0, AW._e)(mW, 0, this.key, EW, WW, NW) && (this.emitted = !0)
+         const uR = new Uint8Array(JR.buffer, JR.byteOffset, tR * eR.td.PointBytes);
+         (0, eR.Qe)(yR, 0, this.key, tR, RR, uR) && (this.emitted = !0)
```

#### 311. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3079` → after: `L3040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3040) · [Before (L3079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3079)

```diff
-         (0, AW.gf)(OW, 0, this.key, 0, DO, DO, mW)
+         (0, eR.af)(GR, 0, this.key, 0, HG, HG, yR)
```

#### 312. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3083` → after: `L3044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3044) · [Before (L3083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3083)

```diff
-         this.stopped = !0, WW && (this.emitted ? (this.rate > 0 && (0, AW.gf)(WW, 0, this.key, 0, DO, DO, qO(0)), setTimeout((() => {
+         this.stopped = !0, RR && (this.emitted ? (this.rate > 0 && (0, eR.af)(RR, 0, this.key, 0, HG, HG, SG(0)), setTimeout((() => {
```

#### 313. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3094` → after: `L3055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3055) · [Before (L3094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3094)

```diff
-     const QO = Qi.m,
+     const TG = TJ.p,
```

#### 314. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3105` → after: `L3066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3066) · [Before (L3105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3105)

```diff
-         if (WW !== AW.kd && !KW(mW[NW])) {
+         if (RR !== eR.Uc && !CR(yR[uR])) {
```

#### 315. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3120` → after: `L3081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3081) · [Before (L3120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3120)

```diff
-       return WW.length >= iW ? WW : new Int32Array(Math.max(iW, 2 * WW.length))
+       return RR.length >= JR ? RR : new Int32Array(Math.max(JR, 2 * RR.length))
```

#### 316. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3132-L3134` → after: `L3093-L3095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3093-L3095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3093-L3095) · [Before (L3132-L3134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3132-L3134)

```diff
-         for (let WW = 0; WW + AW.cc.BYTES <= LW;) {
-           const iW = AW.cc.len(cW, WW);
-           mW(AW.cc.serverId(cW, WW), Em(cW, WW, iW)), WW += AW.cc.BYTES + (0, xW.xe)(iW)
+         for (let RR = 0; RR + eR.Nb.BYTES <= qR;) {
+           const JR = eR.Nb.len(iR, RR);
+           yR(eR.Nb.serverId(iR, RR), Gy(iR, RR, JR)), RR += eR.Nb.BYTES + (0, wR.ve)(JR)
```

#### 317. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3142` → after: `L3103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3103) · [Before (L3142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3142)

```diff
-       const PW = AW.cc.kind(WW, iW),
+       const ZR = eR.Nb.kind(RR, JR),
```

#### 318. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3145-L3149` → after: `L3106-L3110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3106-L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3106-L3110) · [Before (L3145-L3149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3145-L3149)

```diff
-       const cW = AW.cc.variation(WW, iW),
-         wW = AW.cc.pose(WW, iW),
-         tW = AW.cc.meta(WW, iW),
-         ZW = AW.cc.mesh(WW, iW),
-         xW = 0 !== (AW.cc.flags(WW, iW) & AW.bc.HasOpts),
+       const iR = eR.Nb.variation(RR, JR),
+         fR = eR.Nb.pose(RR, JR),
+         VR = eR.Nb.meta(RR, JR),
+         KR = eR.Nb.mesh(RR, JR),
+         wR = 0 !== (eR.Nb.flags(RR, JR) & eR.Kb.HasOpts),
```

#### 319. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3153-L3157` → after: `L3114-L3118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3114-L3118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3114-L3118) · [Before (L3153-L3157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3153-L3157)

```diff
-         variation: cW === AW.od ? void 0 : null !== (mW = null !== (EW = null === lW || void 0 === lW ? void 0 : lW[cW]) && void 0 !== EW ? EW : null === lW || void 0 === lW ? void 0 : lW[0]) && void 0 !== mW ? mW : "default",
-         pose: wW === AW.wc ? void 0 : null !== (NW = AW.Qb[wW]) && void 0 !== NW ? NW : AW.Qb[0],
-         metaInfo: tW === AW.wc ? void 0 : AW.cd[tW],
-         meshKind: ZW === AW.wc ? void 0 : AW.ad[ZW],
-         meshOpts: xW ? Wm.decode(new Uint8Array(WW.buffer, WW.byteOffset + iW + AW.cc.BYTES, OW)) : void 0
+         variation: iR === eR._c ? void 0 : null !== (yR = null !== (tR = null === rR || void 0 === rR ? void 0 : rR[iR]) && void 0 !== tR ? tR : null === rR || void 0 === rR ? void 0 : rR[0]) && void 0 !== yR ? yR : "default",
+         pose: fR === eR.dc ? void 0 : null !== (uR = eR.Cb[fR]) && void 0 !== uR ? uR : eR.Cb[0],
+         metaInfo: VR === eR.dc ? void 0 : eR.Hc[VR],
+         meshKind: KR === eR.dc ? void 0 : eR.Fc[KR],
+         meshOpts: wR ? sG.decode(new Uint8Array(RR.buffer, RR.byteOffset + JR + eR.Nb.BYTES, GR)) : void 0
```

#### 320. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3164` → after: `L3125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3125) · [Before (L3164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3164)

```diff
-         this.deps = WW, this.wanted = 0, this.BL = !1, this.refused = !1
+         this.deps = RR, this.wanted = 0, this.Qq = !1, this.refused = !1
```

#### 321. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3167` → after: `L3128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3128) · [Before (L3167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3167)

```diff
-         return this.BL
+         return this.Qq
```

#### 322. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3170` → after: `L3131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3131) · [Before (L3170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3170)

```diff
-         this.wanted = iW ? this.wanted | WW : this.wanted & ~WW;
+         this.wanted = JR ? this.wanted | RR : this.wanted & ~RR;
```

#### 323. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3172` → after: `L3133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3133) · [Before (L3172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3172)

```diff
-         if (OW === this.BL) return;
+         if (GR === this.Qq) return;
```

#### 324. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3174` → after: `L3135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3135) · [Before (L3174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3174)

```diff
-         null !== mW ? (0, AW.Yf)(mW, 0, OW ? 1 : 0) ? (this.BL = OW, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.BL = !1
+         null !== yR ? (0, eR.fg)(yR, 0, GR ? 1 : 0) ? (this.Qq = GR, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.Qq = !1
```

#### 325. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3183` → after: `L3144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3144) · [Before (L3183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3183)

```diff
-         return this.complete || this.fill(), null !== (iW = this.entries.get("string" === typeof WW ? WW : String(WW))) && void 0 !== iW ? iW : null
+         return this.complete || this.fill(), null !== (JR = this.entries.get("string" === typeof RR ? RR : String(RR))) && void 0 !== JR ? JR : null
```

#### 326. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3242` → after: `L3203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3203) · [Before (L3242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3242)

```diff
-     var wm = OW(5551);
+     var qy = GR(5685);
```

#### 327. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3245-L3246` → after: `L3206-L3207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3206-L3207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3206-L3207) · [Before (L3245-L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3245-L3246)

```diff
-       if ("message" !== WW.type || WW.tP !== wm.uc.NewClientOptions || WW.payloadKind !== xW.hc.Msgpack) return null;
-       const iW = (0, pW.d)(WW.payload);
+       if ("message" !== RR.type || RR.LZ !== qy.sc.NewClientOptions || RR.payloadKind !== wR.gc.Msgpack) return null;
+       const JR = (0, IR.e)(RR.payload);
```

#### 328. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3250-L3251` → after: `L3211-L3212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3211-L3212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3211-L3212) · [Before (L3250-L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3250-L3251)

```diff
-     var Zm = OW(1230),
-       xm = OW(37902);
+     var fy = GR(1336),
+       Vy = GR(37829);
```

#### 329. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3256-L3258` → after: `L3217-L3219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3217-L3219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3217-L3219) · [Before (L3256-L3258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3256-L3258)

```diff
-         case AW.ke.ToggleMenu: {
-           const WW = AW.P[iW];
-           PW.l.iZ("toggleMenu", void 0 === WW ? "inventory" : `inventory|${WW}`);
+         case eR.Wd.ToggleMenu: {
+           const RR = eR.I[JR];
+           ZR.n.JK("toggleMenu", void 0 === RR ? "inventory" : `inventory|${RR}`);
```

#### 330. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3261-L3262` → after: `L3222-L3223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3222-L3223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3222-L3223) · [Before (L3261-L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3261-L3262)

```diff
-         case AW.ke.EditBoard:
-           PW.l.iZ("EditBoard", {
+         case eR.Wd.EditBoard:
+           ZR.n.JK("EditBoard", {
```

#### 331. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3266-L3268` → after: `L3227-L3229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3227-L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3227-L3229) · [Before (L3266-L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3266-L3268)

```diff
-         case AW.ke.EditCodeBlock:
-         case AW.ke.ViewCodeBlock:
-           PW.l.iZ("EditCodeBlock", {
+         case eR.Wd.EditCodeBlock:
+         case eR.Wd.ViewCodeBlock:
+           ZR.n.JK("EditCodeBlock", {
```

#### 332. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3270` → after: `L3231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3231) · [Before (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3270)

```diff
-             canChangePos: WW === AW.ke.EditCodeBlock
+             canChangePos: RR === eR.Wd.EditCodeBlock
```

#### 333. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3273-L3274` → after: `L3234-L3235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3234-L3235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3234-L3235) · [Before (L3273-L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3273-L3274)

```diff
-         case AW.ke.EditCustomLobbyBlock:
-           PW.l.iZ("EditCustomLobbyBlock", {
+         case eR.Wd.EditCustomLobbyBlock:
+           ZR.n.JK("EditCustomLobbyBlock", {
```

#### 334. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3278-L3279` → after: `L3239-L3240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3239-L3240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3239-L3240) · [Before (L3278-L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3278-L3279)

```diff
-         case AW.ke.OpenIronChest:
-           PW.l.iZ("OpenIronChest", {
+         case eR.Wd.OpenIronChest:
+           ZR.n.JK("OpenIronChest", {
```

#### 335. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3283-L3284` → after: `L3244-L3245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3244-L3245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3244-L3245) · [Before (L3283-L3284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3283-L3284)

```diff
-         case AW.ke.EditNameTag:
-           PW.l.iZ("EditNameTag", null !== (cW = null === (wW = EW.BL()) || void 0 === wW || null === (tW = wW.attributes.customAttributes) || void 0 === tW ? void 0 : tW.text) && void 0 !== cW ? cW : "");
+         case eR.Wd.EditNameTag:
+           ZR.n.JK("EditNameTag", null !== (iR = null === (fR = tR.Qq()) || void 0 === fR || null === (VR = fR.attributes.customAttributes) || void 0 === VR ? void 0 : VR.text) && void 0 !== iR ? iR : "");
```

#### 336. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3286-L3291` → after: `L3247-L3252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3247-L3252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3247-L3252) · [Before (L3286-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3286-L3291)

```diff
-         case AW.ke.EditBook: {
-           var ZW, xW, bW;
-           const WW = null === (ZW = EW.BL()) || void 0 === ZW ? void 0 : ZW.attributes;
-           PW.l.iZ("EditBook", {
-             pages: (0, Zm.G)(null === WW || void 0 === WW || null === (xW = WW.customAttributes) || void 0 === xW ? void 0 : xW.pages),
-             title: null !== (bW = null === WW || void 0 === WW ? void 0 : WW.customDisplayName) && void 0 !== bW ? bW : "Title",
+         case eR.Wd.EditBook: {
+           var KR, wR, aR;
+           const RR = null === (KR = tR.Qq()) || void 0 === KR ? void 0 : KR.attributes;
+           ZR.n.JK("EditBook", {
+             pages: (0, fy.S)(null === RR || void 0 === RR || null === (wR = RR.customAttributes) || void 0 === wR ? void 0 : wR.pages),
+             title: null !== (aR = null === RR || void 0 === RR ? void 0 : RR.customDisplayName) && void 0 !== aR ? aR : "Title",
```

#### 337. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3296` → after: `L3257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3257) · [Before (L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3296)

```diff
-         case AW.ke.CantChangeBlock:
+         case eR.Wd.CantChangeBlock:
```

#### 338. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3300-L3301` → after: `L3261-L3262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3261-L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3261-L3262) · [Before (L3300-L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3300-L3301)

```diff
-               EW = WW ? OW : mW;
-             (iW.getClientOption("canChange") || EW || "You cannot modify this block" !== OW) && PW.l.iZ("showBottomMessage", {
+               tR = RR ? GR : yR;
+             (JR.getClientOption("canChange") || tR || "You cannot modify this block" !== GR) && ZR.n.JK("showBottomMessage", {
```

#### 339. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3307-L3308` → after: `L3268-L3269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3268-L3269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3268-L3269) · [Before (L3307-L3308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3307-L3308)

```diff
-         case AW.ke.MiddleBarStart:
-           PW.l.iZ("middleScreenBarInitiate", {
+         case eR.Wd.MiddleBarStart:
+           ZR.n.JK("middleScreenBarInitiate", {
```

#### 340. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3310` → after: `L3271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3271) · [Before (L3310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3310)

```diff
-             lN: 1 === OW[0],
+             Au: 1 === GR[0],
```

#### 341. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3314-L3315` → after: `L3275-L3276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3275-L3276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3275-L3276) · [Before (L3314-L3315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3314-L3315)

```diff
-         case AW.ke.MiddleBarStop:
-           PW.l.iZ("middleScreenBarRemove");
+         case eR.Wd.MiddleBarStop:
+           ZR.n.JK("middleScreenBarRemove");
```

#### 342. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3317-L3319` → after: `L3278-L3280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3278-L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3278-L3280) · [Before (L3317-L3319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3317-L3319)

```diff
-         case AW.ke.Hitmarker:
-           PW.l.iZ("localGunHitmarker", {
-             ui: 1 === iW
+         case eR.Wd.Hitmarker:
+           ZR.n.JK("localGunHitmarker", {
+             xJ: 1 === JR
```

#### 343. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3322-L3323` → after: `L3283-L3284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3283-L3284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3283-L3284) · [Before (L3322-L3323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3322-L3323)

```diff
-         case AW.ke.ShotsLeft:
-           PW.l.iZ("localPlayerNewShotsLeft", mW);
+         case eR.Wd.ShotsLeft:
+           ZR.n.JK("localPlayerNewShotsLeft", yR);
```

#### 344. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3325-L3326` → after: `L3286-L3287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3286-L3287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3286-L3287) · [Before (L3325-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3325-L3326)

```diff
-         case AW.ke.AimingOverlay:
-           PW.l.iZ("aimingOverlay", 3 === (3 & iW) ? "sniper" : "none");
+         case eR.Wd.AimingOverlay:
+           ZR.n.JK("aimingOverlay", 3 === (3 & JR) ? "sniper" : "none");
```

#### 345. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3328-L3329` → after: `L3289-L3290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3289-L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3289-L3290) · [Before (L3328-L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3328-L3329)

```diff
-         case AW.ke.BottomMessage:
-           PW.l.iZ("showBottomMessage", JSON.parse(LW()));
+         case eR.Wd.BottomMessage:
+           ZR.n.JK("showBottomMessage", JSON.parse(qR()));
```

#### 346. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3331-L3332` → after: `L3292-L3293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3292-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3292-L3293) · [Before (L3331-L3332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3331-L3332)

```diff
-         case AW.ke.Crosshair:
-           EW.inaccuracy = (0, fW.d)(mW), (0, xm.e)().crosshairAccuracy(EW.inaccuracy);
+         case eR.Wd.Crosshair:
+           tR.inaccuracy = (0, mR.g)(yR), (0, Vy.b)().crosshairAccuracy(tR.inaccuracy);
```

#### 347. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3334` → after: `L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3295) · [Before (L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3334)

```diff
-         case AW.ke.ChargeStage:
+         case eR.Wd.ChargeStage:
```

#### 348. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3336-L3337` → after: `L3297-L3298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3297-L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3297-L3298) · [Before (L3336-L3337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3336-L3337)

```diff
-         case AW.ke.EmoteWheelClose:
-           PW.l.iZ("requestEmoteWheelClose");
+         case eR.Wd.EmoteWheelClose:
+           ZR.n.JK("requestEmoteWheelClose");
```

#### 349. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3339-L3340` → after: `L3300-L3301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3300-L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3300-L3301) · [Before (L3339-L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3339-L3340)

```diff
-         case AW.ke.BlockMined:
-           PW.l.iZ("localBlockMined");
+         case eR.Wd.BlockMined:
+           ZR.n.JK("localBlockMined");
```

#### 350. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3343` → after: `L3304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3304) · [Before (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3343)

```diff
-           throw new lW.e(`UiEvent of no kind: what ${WW}`)
+           throw new rR.c(`UiEvent of no kind: what ${RR}`)
```

#### 351. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3346-L3351` → after: `L3307-L3312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3307-L3312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3307-L3312) · [Before (L3346-L3351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3346-L3351)

```diff
-     var Am = OW(39189),
-       bm = OW(35225),
-       jm = OW(2072),
-       Um = OW(37968),
-       km = OW(35231),
-       sm = OW(5533);
+     var wy = GR(39158),
+       ry = GR(35150),
+       ey = GR(2170),
+       ay = GR(37914),
+       Ly = GR(35162),
+       ny = GR(5665);
```

#### 352. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3375` → after: `L3336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3336) · [Before (L3375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3375)

```diff
-       const NW = () => (OW = (0, jm.t)(OW, iW()), OW);
+       const uR = () => (GR = (0, ey.m)(GR, JR()), GR);
```

#### 353. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3383` → after: `L3344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3344) · [Before (L3383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3383)

```diff
-           return null !== mW && PW.push((0, jm.w)((WW => {
+           return null !== yR && ZR.push((0, ey.p)((RR => {
```

#### 354. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3406` → after: `L3367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3367) · [Before (L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3406)

```diff
-         attributes: (0, Am.c)("Gun" === (0, km.itemTypeOf)(iW) ? {
+         attributes: (0, wy.b)("Gun" === (0, Ly.itemTypeOf)(JR) ? {
```

#### 355. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3428` → after: `L3389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3389) · [Before (L3428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3428)

```diff
-             displayName: null !== (mW = tW.attributes.customDisplayName) && void 0 !== mW ? mW : iW.getDisplayName(ZW),
+             displayName: null !== (yR = VR.attributes.customDisplayName) && void 0 !== yR ? yR : JR.getDisplayName(KR),
```

#### 356. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3430` → after: `L3391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3391) · [Before (L3430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3430)

```diff
-             clipSize: null !== (EW = null !== (NW = null === (PW = tW.attributes.customAttributes) || void 0 === PW || null === (LW = PW.gunStats) || void 0 === LW ? void 0 : LW.clipSize) && void 0 !== NW ? NW : null === (cW = iW.getGunStats(ZW)) || void 0 === cW ? void 0 : cW.cl … [truncated]
+             clipSize: null !== (tR = null !== (uR = null === (ZR = VR.attributes.customAttributes) || void 0 === ZR || null === (qR = ZR.gunStats) || void 0 === qR ? void 0 : qR.clipSize) && void 0 !== uR ? uR : null === (iR = JR.getGunStats(KR)) || void 0 === iR ? void 0 : iR.cl … [truncated]
```

#### 357. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3459` → after: `L3420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3420) · [Before (L3459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3459)

```diff
-               const cW = WW.craftingView(OW.station, LW, null !== (NW = null === (PW = OW.recipe) || void 0 === PW ? void 0 : PW.xL) && void 0 !== NW ? NW : 0);
+               const iR = RR.craftingView(GR.station, qR, null !== (uR = null === (ZR = GR.recipe) || void 0 === ZR ? void 0 : ZR.nq) && void 0 !== uR ? uR : 0);
```

#### 358. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3465` → after: `L3426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3426) · [Before (L3465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3465)

```diff
-                 let mW = AW.rb.BYTES;
+                 let yR = eR.kb.BYTES;
```

#### 359. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3467-L3468` → after: `L3428-L3429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3428-L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3428-L3429) · [Before (L3467-L3468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3467-L3468)

```diff
-                 for (let tW = AW.rb.recipes(WW, 0); tW > 0; tW--) {
-                   const OW = AW.mb.flags(WW, mW),
+                 for (let VR = eR.kb.recipes(RR, 0); VR > 0; VR--) {
+                   const GR = eR.cb.flags(RR, yR),
```

#### 360. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3470-L3471` → after: `L3431-L3432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3431-L3432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3431-L3432) · [Before (L3470-L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3470-L3471)

```diff
-                       name: iW.nameOfId(AW.mb.item(WW, mW)),
-                       xL: AW.mb.recipe(WW, mW),
+                       name: JR.nameOfId(eR.cb.item(RR, yR)),
+                       nq: eR.cb.recipe(RR, yR),
```

#### 361. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3473-L3475` → after: `L3434-L3436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3434-L3436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3434-L3436) · [Before (L3473-L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3473-L3475)

```diff
-                       produces: AW.mb.produces(WW, mW),
-                       haveIngredients: 0 !== (OW & AW.ib.HaveIngredients),
-                       listed: 0 !== (OW & AW.ib.Listed)
+                       produces: eR.cb.produces(RR, yR),
+                       haveIngredients: 0 !== (GR & eR.$.HaveIngredients),
+                       listed: 0 !== (GR & eR.$.Listed)
```

#### 362. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3477-L3479` → after: `L3438-L3440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3438-L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3438-L3440) · [Before (L3477-L3479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3477-L3479)

```diff
-                   let PW = AW.mb.requires(WW, mW);
-                   for (mW += AW.mb.BYTES; PW > 0; PW--) {
-                     const OW = AW.nb.items(WW, mW);
+                   let ZR = eR.cb.requires(RR, yR);
+                   for (yR += eR.cb.BYTES; ZR > 0; ZR--) {
+                     const GR = eR.fb.items(RR, yR);
```

#### 363. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3481-L3483` → after: `L3442-L3444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3442-L3444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3442-L3444) · [Before (L3481-L3483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3481-L3483)

```diff
-                       items: om(WW, mW + AW.nb.BYTES, OW, iW),
-                       amt: AW.nb.amount(WW, mW)
-                     }), mW += AW.nb.BYTES + 2 * OW
+                       items: vy(RR, yR + eR.fb.BYTES, GR, JR),
+                       amt: eR.fb.amount(RR, yR)
+                     }), yR += eR.fb.BYTES + 2 * GR
```

#### 364. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3487-L3488` → after: `L3448-L3449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3448-L3449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3448-L3449) · [Before (L3487-L3488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3487-L3488)

```diff
-                 const NW = AW.rb.flags(WW, 0);
-                 if (null === OW.recipe || 0 === (NW & AW.qb.Detail)) return {
+                 const uR = eR.kb.flags(RR, 0);
+                 if (null === GR.recipe || 0 === (uR & eR.jb.Detail)) return {
```

#### 365. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3495-L3500` → after: `L3456-L3461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3456-L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3456-L3461) · [Before (L3495-L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3495-L3500)

```diff
-                 for (let tW = AW.rb.ingredients(WW, 0); tW > 0; tW--) {
-                   const OW = AW.eb.item(WW, mW),
-                     EW = AW.eb.from(WW, mW),
-                     NW = AW.eb.amount(WW, mW);
-                   mW += AW.eb.BYTES;
-                   const cW = EW === AW.M ? null : om(WW, mW, EW, iW);
+                 for (let VR = eR.kb.ingredients(RR, 0); VR > 0; VR--) {
+                   const GR = eR.Z.item(RR, yR),
+                     tR = eR.Z.from(RR, yR),
+                     uR = eR.Z.amount(RR, yR);
+                   yR += eR.Z.BYTES;
+                   const iR = tR === eR.E ? null : vy(RR, yR, tR, JR);
```

#### 366. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3507` → after: `L3468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3468) · [Before (L3507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3507)

```diff
-                   xL: wW
+                   nq: fR
```

#### 367. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3514-L3516` → after: `L3475-L3477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3475-L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3475-L3477) · [Before (L3514-L3516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3514-L3516)

```diff
-                     xL: wW,
-                     craftAllTimes: AW.rb.craftAllTimes(WW, 0),
-                     roomForOne: 0 !== (NW & AW.qb.RoomForOne),
+                     nq: fR,
+                     craftAllTimes: eR.kb.craftAllTimes(RR, 0),
+                     roomForOne: 0 !== (uR & eR.jb.RoomForOne),
```

#### 368. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3539` → after: `L3500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3500) · [Before (L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3539)

```diff
-             for (let iW = 0; iW < AW.Gd; iW++) mW.push(Tm(WW.slot(iW)));
+             for (let JR = 0; JR < eR.jd; JR++) yR.push(My(RR.slot(JR)));
```

#### 369. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3549-L3550` → after: `L3510-L3511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3510-L3511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3510-L3511) · [Before (L3549-L3550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3549-L3550)

```diff
-             if (OW > AW.Gd) {
-               for (let iW = AW.Gd; iW < OW; iW++) LW.push(Tm(WW.slot(iW)));
+             if (GR > eR.jd) {
+               for (let JR = eR.jd; JR < GR; JR++) qR.push(My(RR.slot(JR)));
```

#### 370. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3553-L3554` → after: `L3514-L3515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3514-L3515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3514-L3515) · [Before (L3553-L3554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3553-L3554)

```diff
-                 pos: [...WW.CE],
-                 numSlots: OW - AW.Gd,
+                 pos: [...RR.Ft],
+                 numSlots: GR - eR.jd,
```

#### 371. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3566` → after: `L3527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3527) · [Before (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3566)

```diff
-           }), (0, jm.o)("creative")),
+           }), (0, ey.j)("creative")),
```

#### 372. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3576` → after: `L3537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3537) · [Before (L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3576)

```diff
-           }), (0, jm.k)("DisplayName", "GunStats")),
+           }), (0, ey.i)("DisplayName", "GunStats")),
```

#### 373. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3581` → after: `L3542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3542) · [Before (L3581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3581)

```diff
-             const mW = null === (iW = WW.BL()) || void 0 === iW ? void 0 : iW.typeObj,
+             const yR = null === (JR = RR.Qq()) || void 0 === JR ? void 0 : JR.typeObj,
```

#### 374. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3590` → after: `L3551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3551) · [Before (L3590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3590)

```diff
-             return (0, sm.x)((() => {
+             return (0, ny.r)((() => {
```

#### 375. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3607` → after: `L3568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3568) · [Before (L3607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3607)

```diff
-               NL: mW
+               Vq: yR
```

#### 376. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3652` → after: `L3613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3613) · [Before (L3652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3652)

```diff
-             WW.closeChest(), WW.flush(mW), PW.l.iZ("chestClosedByPlayer")
+             RR.closeChest(), RR.flush(yR), ZR.n.JK("chestClosedByPlayer")
```

#### 377. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3660` → after: `L3621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3621) · [Before (L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3660)

```diff
-               xL: mW,
+               nq: yR,
```

#### 378. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3690` → after: `L3651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3651) · [Before (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3690)

```diff
-               if (!EW || !iW.getClientOption("canCraft") || !(0, bm.q)(mW) || (0, bm.o)(EW.attributes)) return nm;
+               if (!tR || !JR.getClientOption("canCraft") || !(0, ry.v)(yR) || (0, ry.r)(tR.attributes)) return gy;
```

#### 379. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3694` → after: `L3655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3655) · [Before (L3694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3694)

```diff
-               for (let LW = 0; LW < Um.c; LW++) {
+               for (let qR = 0; qR < ay.f; qR++) {
```

#### 380. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3702` → after: `L3663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3663) · [Before (L3702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3702)

```diff
-                 } = (0, bm.e)(mW, LW);
+                 } = (0, ry.i)(yR, qR);
```

#### 381. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3737` → after: `L3698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3698) · [Before (L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3737)

```diff
-           X3: 0,
+           U3: 0,
```

#### 382. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3740` → after: `L3701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3701) · [Before (L3740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3740)

```diff
-           Uj: [0, 0, 0]
+           UL: [0, 0, 0]
```

#### 383. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3747` → after: `L3708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3708) · [Before (L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3747)

```diff
-       WiW() {
+       IJR() {
```

#### 384. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3756-L3757` → after: `L3717-L3718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3717-L3718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3717-L3718) · [Before (L3756-L3757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3756-L3757)

```diff
-         if (this.refreshTarget(), this.isBreaking = 0 !== (AW.z.playerFlags(WW, 0) & AW.Ud.Breaking) && AW.z.breakingProgress(WW, 0) >= 0, this.isBreaking)
-           for (let iW = 0; iW < 3; iW++) this.breaking[iW] = AW.z.breakingPos(WW, 0, iW)
+         if (this.refreshTarget(), this.isBreaking = 0 !== (eR.s.playerFlags(RR, 0) & eR.xd.Breaking) && eR.s.breakingProgress(RR, 0) >= 0, this.isBreaking)
+           for (let JR = 0; JR < 3; JR++) this.breaking[JR] = eR.s.breakingPos(RR, 0, JR)
```

#### 385. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3761-L3762` → after: `L3722-L3723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3722-L3723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3722-L3723) · [Before (L3761-L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3761-L3762)

```diff
-           iW = AW.z.targetBlockId(WW, 0);
-         if (this.hasTarget = iW !== AW.nd, this.hasTarget) {
+           JR = eR.s.targetBlockId(RR, 0);
+         if (this.hasTarget = JR !== eR.Yc, this.hasTarget) {
```

#### 386. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3764-L3765` → after: `L3725-L3726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3725-L3726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3725-L3726) · [Before (L3764-L3765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3764-L3765)

```diff
-           OW.X3 = iW;
-           for (let iW = 0; iW < 3; iW++) OW.position[iW] = AW.z.targetBlock(WW, 0, iW), OW.normal[iW] = AW.z.targetNormal(WW, 0, iW), OW.Uj[iW] = AW.z.targetAdjacent(WW, 0, iW)
+           GR.U3 = JR;
+           for (let JR = 0; JR < 3; JR++) GR.position[JR] = eR.s.targetBlock(RR, 0, JR), GR.normal[JR] = eR.s.targetNormal(RR, 0, JR), GR.UL[JR] = eR.s.targetAdjacent(RR, 0, JR)
```

#### 387. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3773-L3776` → after: `L3734-L3737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3734-L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3734-L3737) · [Before (L3773-L3776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3773-L3776)

```diff
-     var em = OW(42146),
-       gm = OW(42131),
-       Dm = OW(37527),
-       Vm = OW(37626);
+     var xy = GR(42157),
+       Ny = GR(42137),
+       Dy = GR(37433),
+       Hy = GR(37537);
```

#### 388. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3781` → after: `L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3742) · [Before (L3781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3781)

```diff
-         this.game = new Vm.i, this.client = new Vm.i, this.BL = 0, this.movesFly = null
+         this.game = new Hy.g, this.client = new Hy.g, this.Qq = 0, this.movesFly = null
```

#### 389. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3795` → after: `L3756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3756) · [Before (L3795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3795)

```diff
-         this.game = new Vm.i, this.movesFly = null
+         this.game = new Hy.g, this.movesFly = null
```

#### 390. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3801` → after: `L3762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3762) · [Before (L3801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3801)

```diff
-         return (this.game._getTotalBooleanVal() ? pm : 0) | (this.client._getTotalBooleanVal() ? fm : 0)
+         return (this.game._getTotalBooleanVal() ? oy : 0) | (this.client._getTotalBooleanVal() ? cy : 0)
```

#### 391. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3808-L3810` → after: `L3769-L3771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3769-L3771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3769-L3771) · [Before (L3808-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3808-L3810)

```diff
-         if (iW === this.BL && null === OW) return !0;
-         let mW = AW.gc.Keep;
-         return null !== OW && (mW = OW ? AW.gc.On : AW.gc.Off), !(!WW || !(0, AW.Ae)(WW, 0, mW, iW, OW ? 1 : 0)) && (this.BL = iW, this.movesFly = null, !0)
+         if (JR === this.Qq && null === GR) return !0;
+         let yR = eR.Rb.Keep;
+         return null !== GR && (yR = GR ? eR.Rb.On : eR.Rb.Off), !(!RR || !(0, eR.ne)(RR, 0, yR, JR, GR ? 1 : 0)) && (this.Qq = JR, this.movesFly = null, !0)
```

#### 392. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3825` → after: `L3786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3786) · [Before (L3825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3825)

```diff
-           iW = AW.z.viewProj;
+           JR = eR.s.viewProj;
```

#### 393. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3833` → after: `L3794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3794) · [Before (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3833)

```diff
-         for (let OW = 0; OW < 3; OW++) iW[OW] = AW.z.eye(WW, 0, OW);
+         for (let GR = 0; GR < 3; GR++) JR[GR] = eR.s.eye(RR, 0, GR);
```

#### 394. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3838` → after: `L3799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3799) · [Before (L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3838)

```diff
-           iW = AW.z.viewProj,
+           JR = eR.s.viewProj,
```

#### 395. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3849` → after: `L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3810) · [Before (L3849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3849)

```diff
-         return AW.z.heading(this.api.apiView, 0)
+         return eR.s.heading(this.api.apiView, 0)
```

#### 396. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3852` → after: `L3813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3813) · [Before (L3852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3852)

```diff
-         return AW.z.pitch(this.api.apiView, 0)
+         return eR.s.pitch(this.api.apiView, 0)
```

#### 397. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3855` → after: `L3816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3816) · [Before (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3855)

```diff
-         return AW.z.tanHalfFovX(this.api.apiView, 0)
+         return eR.s.tanHalfFovX(this.api.apiView, 0)
```

#### 398. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3858` → after: `L3819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3819) · [Before (L3858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3858)

```diff
-         return AW.z.tanHalfFovY(this.api.apiView, 0)
+         return eR.s.tanHalfFovY(this.api.apiView, 0)
```

#### 399. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3878-L3880` → after: `L3839-L3841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3839-L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3839-L3841) · [Before (L3878-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3878-L3880)

```diff
-           LW = AW.z.viewProj,
-           cW = NW > 0 ? iW / NW : 0,
-           wW = NW > 0 ? -OW / NW : 0,
+           qR = eR.s.viewProj,
+           iR = uR > 0 ? JR / uR : 0,
+           fR = uR > 0 ? -GR / uR : 0,
```

#### 400. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3908-L3911` → after: `L3869-L3872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3869-L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3869-L3872) · [Before (L3908-L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3908-L3911)

```diff
-           OW = WW[0] - AW.z.origin(iW, 0, 0),
-           mW = WW[1] - AW.z.origin(iW, 0, 1),
-           EW = WW[2] - AW.z.origin(iW, 0, 2),
-           NW = AW.z.viewProj;
+           GR = RR[0] - eR.s.origin(JR, 0, 0),
+           yR = RR[1] - eR.s.origin(JR, 0, 1),
+           tR = RR[2] - eR.s.origin(JR, 0, 2),
+           uR = eR.s.viewProj;
```

#### 401. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3915` → after: `L3876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3876) · [Before (L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3915)

```diff
-         return (0, LW.h)(WW, iW, this.screenBandPct.x, this.screenBandPct.y)
+         return (0, qR.f)(RR, JR, this.screenBandPct.x, this.screenBandPct.y)
```

#### 402. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3918` → after: `L3879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3879) · [Before (L3918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3918)

```diff
-     var Bm = OW(5568);
+     var my = GR(5697);
```

#### 403. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3920` → after: `L3881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3881) · [Before (L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3920)

```diff
-       Rm = new Uint8Array(AW.U * AW.S);
+       Sy = new Uint8Array(eR.M * eR.K);
```

#### 404. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3923` → after: `L3884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3884) · [Before (L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3923)

```diff
-         this.buttons = [], this.BL = !0
+         this.buttons = [], this.Qq = !0
```

#### 405. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3926` → after: `L3887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3887) · [Before (L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3926)

```diff
-         this.buttons = WW, this.BL = !1
+         this.buttons = RR, this.Qq = !1
```

#### 406. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3929` → after: `L3890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3890) · [Before (L3929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3929)

```diff
-         this.BL = 0 === this.buttons.length
+         this.Qq = 0 === this.buttons.length
```

#### 407. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3932-L3934` → after: `L3893-L3895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3893-L3895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3893-L3895) · [Before (L3932-L3934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3932-L3934)

```diff
-         if (this.BL) return;
-         const iW = new Uint8Array(AW.U),
-           OW = new Uint8Array(AW.U);
+         if (this.Qq) return;
+         const JR = new Uint8Array(eR.M),
+           GR = new Uint8Array(eR.M);
```

#### 408. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3942` → after: `L3903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3903) · [Before (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3942)

```diff
-           if (mW === AW.U) break;
+           if (yR === eR.M) break;
```

#### 409. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3946` → after: `L3907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3907) · [Before (L3946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3946)

```diff
-           } = qm.encodeInto(NW, Rm.subarray(EW, EW + AW.S));
+           } = zy.encodeInto(uR, Sy.subarray(tR, tR + eR.K));
```

#### 410. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3948-L3949` → after: `L3909-L3910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3909-L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3909-L3910) · [Before (L3948-L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3948-L3949)

```diff
-           const cW = Bm.n[PW];
-           iW[mW] = "number" === typeof cW ? cW : 0, OW[mW] = LW, mW++, EW += LW
+           const iR = my.i[ZR];
+           JR[yR] = "number" === typeof iR ? iR : 0, GR[yR] = qR, yR++, tR += qR
```

#### 411. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3951` → after: `L3912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3912) · [Before (L3951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3951)

```diff
-         this.BL = (0, AW.qe)(WW, 0, mW, iW, OW, Rm.subarray(0, EW))
+         this.Qq = (0, eR.ce)(RR, 0, yR, JR, GR, Sy.subarray(0, tR))
```

#### 412. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3957-L3958` → after: `L3918-L3919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3918-L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3918-L3919) · [Before (L3957-L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3957-L3958)

```diff
-       return mW.length <= AW.S && function(WW, iW, OW, mW) {
-         return (0, PO.b)(), (0, AW.hf)(WW, iW, OW, mW)
+       return yR.length <= eR.K && function(RR, JR, GR, yR) {
+         return (0, tG.b)(), (0, eR.df)(RR, JR, GR, yR)
```

#### 413. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3961` → after: `L3922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3922) · [Before (L3961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3961)

```diff
-     var am = OW(40454);
+     var Ey = GR(40506);
```

#### 414. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3967-L3969` → after: `L3928-L3930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3928-L3930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3928-L3930) · [Before (L3967-L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3967-L3969)

```diff
-         off: AW.Wd.Off,
-         key: AW.Wd.Key,
-         touch: AW.Wd.Touch
+         off: eR.zd.Off,
+         key: eR.zd.Key,
+         touch: eR.zd.Touch
```

#### 415. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3974-L3975` → after: `L3935-L3936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3935-L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3935-L3936) · [Before (L3974-L3975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3974-L3975)

```diff
-         this.options = WW, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tic … [truncated]
-           if ((0, lW.j)(WW)) throw WW;
+         this.options = RR, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tic … [truncated]
+           if ((0, rR.h)(RR)) throw RR;
```

#### 416. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3977` → after: `L3938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3938) · [Before (L3977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3977)

```diff
-         }, this.api = WW.api, this.tables = WW.tables, this.onError = null !== (iW = WW.onError) && void 0 !== iW ? iW : WW => {
+         }, this.api = RR.api, this.tables = RR.tables, this.onError = null !== (JR = RR.onError) && void 0 !== JR ? JR : RR => {
```

#### 417. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4030` → after: `L3991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3991) · [Before (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4030)

```diff
-             this.wZ(iW), null === (OW = WW.reportCameraFault) || void 0 === OW || OW.call(WW, iW)
+             this.fK(JR), null === (GR = RR.reportCameraFault) || void 0 === GR || GR.call(RR, JR)
```

#### 418. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4038` → after: `L3999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3999) · [Before (L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4038)

```diff
-         return this.itemSources ??= Hm(this.items, this.tables, (() => this.localPlayerAlive()), this.wZ), this.itemSources
+         return this.itemSources ??= py(this.items, this.tables, (() => this.localPlayerAlive()), this.fK), this.itemSources
```

#### 419. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4054` → after: `L4015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4015) · [Before (L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4054)

```diff
-         return null !== iW && (OW = iW, mW = 0, EW = WW[0], NW = WW[1], PW = WW[2], (0, PO.b)(), (0, AW.ue)(OW, mW, EW, NW, PW));
+         return null !== JR && (GR = JR, yR = 0, tR = RR[0], uR = RR[1], ZR = RR[2], (0, tG.b)(), (0, eR.ie)(GR, yR, tR, uR, ZR));
```

#### 420. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4062` → after: `L4023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4023) · [Before (L4062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4062)

```diff
-         return null === iW ? (this.pendingZoom = WW, !1) : (this.pendingZoom = null, (0, AW.Qf)(iW, 0, WW, 1))
+         return null === JR ? (this.pendingZoom = RR, !1) : (this.pendingZoom = null, (0, eR.Zf)(JR, 0, RR, 1))
```

#### 421. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4066` → after: `L4027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4027) · [Before (L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4066)

```diff
-         return null !== iW && (0, AW.Nf)(iW, 0, WW ? 1 : 0)
+         return null !== JR && (0, eR.Uf)(JR, 0, RR ? 1 : 0)
```

#### 422. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4070` → after: `L4031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4031) · [Before (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4070)

```diff
-         return null !== WW && (iW = WW, OW = 0, (0, PO.b)(), (0, AW.sf)(iW, OW));
+         return null !== RR && (JR = RR, GR = 0, (0, tG.b)(), (0, eR.uf)(JR, GR));
```

#### 423. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4082` → after: `L4043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4043) · [Before (L4082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4082)

```diff
-         return null !== PW && (0, AW.Ve)(PW, 0, WW, iW, OW, mW, EW, NW)
+         return null !== ZR && (0, eR.Me)(ZR, 0, RR, JR, GR, yR, tR, uR)
```

#### 424. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4086` → after: `L4047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4047) · [Before (L4086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4086)

```diff
-         return null !== iW && (0, AW.Vf)(iW, 0, null !== WW && void 0 !== WW ? WW : 1 / 0)
+         return null !== JR && (0, eR.dg)(JR, 0, null !== RR && void 0 !== RR ? RR : 1 / 0)
```

#### 425. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4091` → after: `L4052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4052) · [Before (L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4091)

```diff
-         return null !== mW && LO(mW, OW ? xW.zd : 0, WW, (0, pW.e)(iW))
+         return null !== yR && uG(yR, GR ? wR.pd : 0, RR, (0, IR.i)(JR))
```

#### 426. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4112` → after: `L4073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4073) · [Before (L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4112)

```diff
-         this.overflowGen = AW.z.eventOverflowGen(OW, 0), this.resyncOwed = 0 !== AW.z.eventOverflowMask(OW, 0), WW.setGameHost(this), WW.setEventWalker((WW => {
+         this.overflowGen = eR.s.eventOverflowGen(GR, 0), this.resyncOwed = 0 !== eR.s.eventOverflowMask(GR, 0), RR.setGameHost(this), RR.setEventWalker((RR => {
```

#### 427. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4120` → after: `L4081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4081) · [Before (L4120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4120)

```diff
-         return "off" === this.promptWatch || this.stopped() ? null : OE(AW.z.promptEntity(this.api.apiView, 0))
+         return "off" === this.promptWatch || this.stopped() ? null : hy(eR.s.promptEntity(this.api.apiView, 0))
```

#### 428. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4123` → after: `L4084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4084) · [Before (L4123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4123)

```diff
-         return "touch" !== this.promptWatch || this.stopped() ? AW.Jc.None : AW.z.interactLabel(this.api.apiView, 0)
+         return "touch" !== this.promptWatch || this.stopped() ? eR.qc.None : eR.s.interactLabel(this.api.apiView, 0)
```

#### 429. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4126` → after: `L4087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4087) · [Before (L4126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4126)

```diff
-         return "touch" !== this.promptWatch || this.stopped() ? 0 : AW.z.interactIcon(this.api.apiView, 0)
+         return "touch" !== this.promptWatch || this.stopped() ? 0 : eR.s.interactIcon(this.api.apiView, 0)
```

#### 430. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4136` → after: `L4097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4097) · [Before (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4136)

```diff
-         "connection" === WW.type ? WW.phase === xW.A.Activated && WW.conn !== this.activeConn && WW.conn > this.closedThrough ? (this.endSession(), this.activeConn = WW.conn, this.endGameGrants(), this.dropGameCamera()) : WW.phase !== xW.A.Left && WW.phase !== xW.A.Closed || WW.c … [truncated]
+         "connection" === RR.type ? RR.phase === wR.H.Activated && RR.conn !== this.activeConn && RR.conn > this.closedThrough ? (this.endSession(), this.activeConn = RR.conn, this.endGameGrants(), this.dropGameCamera()) : RR.phase !== wR.H.Left && RR.phase !== wR.H.Closed || RR.c … [truncated]
```

#### 431. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4157-L4158` → after: `L4118-L4119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4118-L4119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4118-L4119) · [Before (L4157-L4158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4157-L4158)

```diff
-             if ("message" !== WW.type || WW.tP !== wm.uc.GameCodeMessage || WW.payloadKind !== xW.hc.Msgpack) return null;
-             const iW = (0, pW.d)(WW.payload);
+             if ("message" !== RR.type || RR.LZ !== qy.sc.GameCodeMessage || RR.payloadKind !== wR.gc.Msgpack) return null;
+             const JR = (0, IR.e)(RR.payload);
```

#### 432. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4171` → after: `L4132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4132) · [Before (L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4171)

```diff
-             (0, uW.d)(WW, OW)
+             (0, OR.c)(RR, GR)
```

#### 433. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4205` → after: `L4166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4166) · [Before (L4205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4205)

```diff
-         this.highlightOwed = null === iW ? !(0, AW.Ke)(WW, 0, Qm, Qm, 0) : !(0, AW.Ke)(WW, 0, iW.pos, iW.normal, 1)
+         this.highlightOwed = null === JR ? !(0, eR.ye)(RR, 0, Fy, Fy, 0) : !(0, eR.ye)(RR, 0, JR.pos, JR.normal, 1)
```

#### 434. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4218` → after: `L4179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4179) · [Before (L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4218)

```diff
-           EW = WW.gameNameWithVariation, NW = null !== (cW = (0, hW.Lb)(EW)) && void 0 !== cW ? cW : void 0, PW = (0, HW.A)(WW.lobbyName), LW = (0, HW.R)(WW.lobbyName)
+           tR = RR.gameNameWithVariation, uR = null !== (iR = (0, gR.Mb)(tR)) && void 0 !== iR ? iR : void 0, ZR = (0, bR.q)(RR.lobbyName), qR = (0, bR.E)(RR.lobbyName)
```

#### 435. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4229` → after: `L4190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4190) · [Before (L4229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4229)

```diff
-           tW = null !== (xW = null === (lW = this.options.gameFactory((0, hW.Tb)(EW))) || void 0 === lW ? void 0 : lW(LW, PW, NW, wW)) && void 0 !== xW ? xW : {}
+           VR = null !== (wR = null === (rR = this.options.gameFactory((0, gR.Sb)(tR))) || void 0 === rR ? void 0 : rR(qR, ZR, uR, fR)) && void 0 !== wR ? wR : {}
```

#### 436. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4231` → after: `L4192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4192) · [Before (L4231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4231)

```diff
-           this.wZ(kW)
+           this.fK(UR)
```

#### 437. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4235` → after: `L4196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4196) · [Before (L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4235)

```diff
-           ZW = (0, nW.c)(null === (AW = (bW = this.options).defaultPlugins) || void 0 === AW ? void 0 : AW.call(bW, LW, PW, NW, wW), tW.plugins)
+           KR = (0, vR.b)(null === (eR = (aR = this.options).defaultPlugins) || void 0 === eR ? void 0 : eR.call(aR, qR, ZR, uR, fR), VR.plugins)
```

#### 438. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4237` → after: `L4198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4198) · [Before (L4237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4237)

```diff
-           this.wZ(kW)
+           this.fK(UR)
```

#### 439. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4240` → after: `L4201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4201) · [Before (L4240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4240)

```diff
-         this.owners = jW, this.tickers = jW.filter((WW => void 0 !== WW.hZ)), this.renderers = jW.filter((WW => void 0 !== WW.onAfterRender)), this.receivers = jW.filter((WW => void 0 !== WW.onReceivedMessageFromServer)), this.writeAltVeto(jW), this.writeHooks(jW), this.writePubl … [truncated]
+         this.owners = LR, this.tickers = LR.filter((RR => void 0 !== RR.gK)), this.renderers = LR.filter((RR => void 0 !== RR.onAfterRender)), this.receivers = LR.filter((RR => void 0 !== RR.onReceivedMessageFromServer)), this.writeAltVeto(LR), this.writeHooks(LR), this.writePubl … [truncated]
```

#### 440. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4266` → after: `L4227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4227) · [Before (L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4266)

```diff
-           this.round(this.tickers, mE), (0, sm.e)(performance.now() - WW)
+           this.round(this.tickers, Rt), (0, ny.c)(performance.now() - RR)
```

#### 441. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4276-L4278` → after: `L4237-L4239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4237-L4239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4237-L4239) · [Before (L4276-L4278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4276-L4278)

```diff
-           mW = AW.z.frameMs(OW, 0);
-         Dm.p.frame(mW, AW.z.heading(OW, 0), AW.z.pitch(OW, 0), Dm.j[WW]);
-         const EW = (0, sm.m)(WW, mW);
+           yR = eR.s.frameMs(GR, 0);
+         Dy.o.frame(yR, eR.s.heading(GR, 0), eR.s.pitch(GR, 0), Dy.i[RR]);
+         const tR = (0, ny.f)(RR, yR);
```

#### 442. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4282` → after: `L4243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4243) · [Before (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4282)

```diff
-             (0, xm.e)().turnDamageIndicators(WW.cameraHeading), (0, xm.e)().turnSoundCues(WW.cameraHeading)
+             (0, Vy.b)().turnDamageIndicators(RR.cameraHeading), (0, Vy.b)().turnSoundCues(RR.cameraHeading)
```

#### 443. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4293` → after: `L4254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4254) · [Before (L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4293)

```diff
-           this.wZ(PW)
+           this.fK(ZR)
```

#### 444. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4295` → after: `L4256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4256) · [Before (L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4295)

```diff
-         this.showZoom(), this.items.flush(this.wZ), this.writePromptWatch(), this.writeCustomButtons();
+         this.showZoom(), this.items.flush(this.fK), this.writePromptWatch(), this.writeCustomButtons();
```

#### 445. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4297` → after: `L4258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4258) · [Before (L4297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4297)

```diff
-         this.ticks = 0, (0, sm.k)(NW, WW, EW, this.wZ)
+         this.ticks = 0, (0, ny.e)(uR, RR, tR, this.fK)
```

#### 446. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4304` → after: `L4265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4265) · [Before (L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4304)

```diff
-           iW = AW.z.eventOverflowGen(WW, 0),
+           JR = eR.s.eventOverflowGen(RR, 0),
```

#### 447. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4308` → after: `L4269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4269) · [Before (L4308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4308)

```diff
-         const mW = AW.z.eventOverflowMask(WW, 0),
+         const yR = eR.s.eventOverflowMask(RR, 0),
```

#### 448. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4310` → after: `L4271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4271) · [Before (L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4310)

```diff
-         0 === mW || null === EW || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, AW.ye)(EW, 0, mW);
+         0 === yR || null === tR || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, eR.le)(tR, 0, yR);
```

#### 449. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4317` → after: `L4278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4278) · [Before (L4317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4317)

```diff
-         if (WW === AW.tc.Director) try {
+         if (RR === eR.cc.Director) try {
```

#### 450. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4320` → after: `L4281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4281) · [Before (L4320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4320)

```diff
-           return this.wZ(wW), AW.tb.None
+           return this.fK(fR), eR.lb.None
```

#### 451. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4322` → after: `L4283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4283) · [Before (L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4322)

```diff
-         if (!this.sessionLive || void 0 !== this.fault) return WW === AW.tc.AltVeto ? AW.n.Allow : 0;
+         if (!this.sessionLive || void 0 !== this.fault) return RR === eR.cc.AltVeto ? eR.i.Allow : 0;
```

#### 452. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4326` → after: `L4287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4287) · [Before (L4326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4326)

```diff
-           throw (0, lW.j)(wW) && (this.fault = wW), wW
+           throw (0, rR.h)(fR) && (this.fault = fR), fR
```

#### 453. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4339-L4340` → after: `L4300-L4301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4300-L4301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4300-L4301) · [Before (L4339-L4340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4339-L4340)

```diff
-           case AW.tc.AltVeto:
-           case AW.tc.AltAction: {
+           case eR.cc.AltVeto:
+           case eR.cc.AltAction: {
```

#### 454. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4345` → after: `L4306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4306) · [Before (L4345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4345)

```diff
-             if (WW === AW.tc.AltAction) return this.first((WW => {
+             if (RR === eR.cc.AltAction) return this.first((RR => {
```

#### 455. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4353` → after: `L4314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4314) · [Before (L4353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4353)

```diff
-             return "preventAction" === jW ? AW.n.Prevent : "preventPlacement" === jW ? AW.n.PreventPlacement : AW.n.Allow
+             return "preventAction" === LR ? eR.i.Prevent : "preventPlacement" === LR ? eR.i.PreventPlacement : eR.i.Allow
```

#### 456. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4355` → after: `L4316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4316) · [Before (L4355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4355)

```diff
-           case AW.tc.Click: {
+           case eR.cc.Click: {
```

#### 457. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4357-L4358` → after: `L4318-L4319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4318-L4319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4318-L4319) · [Before (L4357-L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4357-L4358)

```diff
-               tW = 0 !== (WW & AW._.Alt),
-               ZW = 0 !== (WW & AW._.HasPos),
+               VR = 0 !== (RR & eR.W.Alt),
+               KR = 0 !== (RR & eR.W.HasPos),
```

#### 458. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4362` → after: `L4323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4323) · [Before (L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4362)

```diff
-               kW = 0 !== (WW & AW._.Up),
+               UR = 0 !== (RR & eR.W.Up),
```

#### 459. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4364` → after: `L4325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4325) · [Before (L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4364)

```diff
-             if (0 === (WW & AW._.AttackOnly) && this.first((WW => {
+             if (0 === (RR & eR.W.AttackOnly) && this.first((RR => {
```

#### 460. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4377` → after: `L4338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4338) · [Before (L4377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4377)

```diff
-           case AW.tc.ChangeBlock: {
+           case eR.cc.ChangeBlock: {
```

#### 461. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4385` → after: `L4346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4346) · [Before (L4385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4385)

```diff
-           case AW.tc.DropItem: {
+           case eR.cc.DropItem: {
```

#### 462. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4393` → after: `L4354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4354) · [Before (L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4393)

```diff
-             return this.onError(new Error(`Unknown game call kind ${WW}`)), 0
+             return this.onError(new Error(`Unknown game call kind ${RR}`)), 0
```

#### 463. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4397` → after: `L4358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4358) · [Before (L4397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4397)

```diff
-         const LW = EW === AW.gd ? null : rm.decode(this.api.eventBytes(NW, Math.min(EW, PW)));
+         const qR = tR === eR.Oc ? null : Yy.decode(this.api.eventBytes(uR, Math.min(tR, ZR)));
```

#### 464. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4399-L4401` → after: `L4360-L4362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4360-L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4360-L4362) · [Before (L4399-L4401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4399-L4401)

```diff
-           Zi: [WW, iW, OW],
-           xi: mW,
-           li: LW
+           rJ: [RR, JR, GR],
+           eJ: yR,
+           aJ: qR
```

#### 465. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4409` → after: `L4370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4370) · [Before (L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4409)

```diff
-         })), this.iZ("blockChangeRefused", null), this.iZ("EditBoard", {
+         })), this.JK("blockChangeRefused", null), this.JK("EditBoard", {
```

#### 466. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4411` → after: `L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4372) · [Before (L4411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4411)

```diff
-         }), this.iZ("EditCodeBlock", {
+         }), this.JK("EditCodeBlock", {
```

#### 467. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4417` → after: `L4378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4378) · [Before (L4417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4417)

```diff
-         WW === AW.Oc.ChestOpened ? this.items.chestOpened(OW, mW, EW) : WW !== AW.Oc.Synced && WW !== AW.Oc.ChestClosed && WW !== AW.Oc.ChestRefreshed || this.items.touch(), this.guard((() => {
+         RR === eR.sc.ChestOpened ? this.items.chestOpened(GR, yR, tR) : RR !== eR.sc.Synced && RR !== eR.sc.ChestClosed && RR !== eR.sc.ChestRefreshed || this.items.touch(), this.guard((() => {
```

#### 468. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4420-L4421` → after: `L4381-L4382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4381-L4382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4381-L4382) · [Before (L4420-L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4420-L4421)

```diff
-               case AW.Oc.Synced:
-                 PW.l.iZ("syncedInvenFromServer");
+               case eR.sc.Synced:
+                 ZR.n.JK("syncedInvenFromServer");
```

#### 469. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4423-L4425` → after: `L4384-L4386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4384-L4386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4384-L4386) · [Before (L4423-L4425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4423-L4425)

```diff
-               case AW.Oc.ChestOpened:
-               case AW.Oc.ChestClosed:
-                 PW.l.iZ("chestToggleFromServer", WW === AW.Oc.ChestOpened, !0);
+               case eR.sc.ChestOpened:
+               case eR.sc.ChestClosed:
+                 ZR.n.JK("chestToggleFromServer", RR === eR.sc.ChestOpened, !0);
```

#### 470. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4427-L4428` → after: `L4388-L4389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4388-L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4388-L4389) · [Before (L4427-L4428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4427-L4428)

```diff
-               case AW.Oc.ChestRefreshed:
-                 PW.l.iZ("chestRefreshedFromServer");
+               case eR.sc.ChestRefreshed:
+                 ZR.n.JK("chestRefreshedFromServer");
```

#### 471. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4430-L4432` → after: `L4391-L4393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4391-L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4391-L4393) · [Before (L4430-L4432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4430-L4432)

```diff
-               case AW.Oc.EnchantingTable:
-                 PW.l.iZ("enchantingTable", {
-                   NL: mW,
+               case eR.sc.EnchantingTable:
+                 ZR.n.JK("enchantingTable", {
+                   Vq: yR,
```

#### 472. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4436-L4437` → after: `L4397-L4398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4397-L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4397-L4398) · [Before (L4436-L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4436-L4437)

```diff
-               case AW.Oc.HotbarRequest:
-                 PW.l.iZ("setSelectedInventorySlotI", iW, !0);
+               case eR.sc.HotbarRequest:
+                 ZR.n.JK("setSelectedInventorySlotI", JR, !0);
```

#### 473. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4439-L4440` → after: `L4400-L4401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4400-L4401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4400-L4401) · [Before (L4439-L4440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4439-L4440)

```diff
-               case AW.Oc.Scrolled:
-                 PW.l.iZ("ScrollInventorySlot", iW);
+               case eR.sc.Scrolled:
+                 ZR.n.JK("ScrollInventorySlot", JR);
```

#### 474. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4442-L4443` → after: `L4403-L4404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4403-L4404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4403-L4404) · [Before (L4442-L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4442-L4443)

```diff
-               case AW.Oc.NumberKey:
-                 PW.l.iZ("numkeyPressed", iW + 1);
+               case eR.sc.NumberKey:
+                 ZR.n.JK("numkeyPressed", JR + 1);
```

#### 475. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4445-L4446` → after: `L4406-L4407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4406-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4406-L4407) · [Before (L4445-L4446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4445-L4446)

```diff
-               case AW.Oc.DropRequested:
-                 PW.l.iZ("DropInvenItem", 0 !== iW);
+               case eR.sc.DropRequested:
+                 ZR.n.JK("DropInvenItem", 0 !== JR);
```

#### 476. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4449` → after: `L4410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4410) · [Before (L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4449)

```diff
-                 throw new lW.e(`InventoryEvent of no kind: what ${WW}`)
+                 throw new rR.c(`InventoryEvent of no kind: what ${RR}`)
```

#### 477. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4458` → after: `L4419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4419) · [Before (L4458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4458)

```diff
-         this.iZ("shotPlayer", {
+         this.JK("shotPlayer", {
```

#### 478. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4466-L4468` → after: `L4427-L4429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4427-L4429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4427-L4429) · [Before (L4466-L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4466-L4468)

```diff
-         this.iZ("closeShopOnDamaged", null), this.guard((() => {
-           PW.l.iZ("damagedByOtherPlayer", {
-             ME: null,
+         this.JK("closeShopOnDamaged", null), this.guard((() => {
+           ZR.n.JK("damagedByOtherPlayer", {
+             gt: null,
```

#### 479. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4470` → after: `L4431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4431) · [Before (L4470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4470)

```diff
-             vE: WW
+             jt: RR
```

#### 480. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4476-L4477` → after: `L4437-L4438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4437-L4438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4437-L4438) · [Before (L4476-L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4476-L4477)

```diff
-           PW.l.iZ("yourAttackHit", {
-             ui: mW,
+           ZR.n.JK("yourAttackHit", {
+             xJ: yR,
```

#### 481. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4484` → after: `L4445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4445) · [Before (L4484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4484)

```diff
-         this.localPhysicsType = WW, this.iZ("PlayerPhysicsTypeUpdate", WW)
+         this.localPhysicsType = RR, this.JK("PlayerPhysicsTypeUpdate", RR)
```

#### 482. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4488` → after: `L4449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4449) · [Before (L4488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4488)

```diff
-           WW === xW.Ld.UPDATE ? (0, dW.g)(iW, {
+           RR === wR.Hd.UPDATE ? (0, NR.h)(JR, {
```

#### 483. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4493` → after: `L4454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4454) · [Before (L4493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4493)

```diff
-           }) : oW.c.remove(iW)
+           }) : xR.d.remove(JR)
```

#### 484. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4500` → after: `L4461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4461) · [Before (L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4500)

```diff
-         this.iZ("showBottomMessage", {
+         this.JK("showBottomMessage", {
```

#### 485. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4507` → after: `L4468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4468) · [Before (L4507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4507)

```diff
-         this.iZ("showBottomMessage", am.e)
+         this.JK("showBottomMessage", Ey.c)
```

#### 486. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4511` → after: `L4472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4472) · [Before (L4511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4511)

```diff
-         !this.zoomUnshown || WW && this.zoomHeld || (this.zoomUnshown = !1, this.iZ("cameraZoomSet", this.zoom)), this.zoomHeld = WW
+         !this.zoomUnshown || RR && this.zoomHeld || (this.zoomUnshown = !1, this.JK("cameraZoomSet", this.zoom)), this.zoomHeld = RR
```

#### 487. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4516-L4520` → after: `L4477-L4481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4477-L4481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4477-L4481) · [Before (L4516-L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4516-L4520)

```diff
-             ME: iW,
-             KE: OW
-           } = (0, em.c)(gm.r, WW);
-           PW.l.iZ("damagedByOtherPlayer", {
-             ME: iW,
+             gt: JR,
+             bt: GR
+           } = (0, xy.e)(Ny.r, RR);
+           ZR.n.JK("damagedByOtherPlayer", {
+             gt: JR,
```

#### 488. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4541` → after: `L4502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4502) · [Before (L4541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4541)

```diff
-                   mode: AW.le.All,
+                   mode: eR.Zd.All,
```

#### 489. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4545-L4546` → after: `L4506-L4507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4506-L4507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4506-L4507) · [Before (L4545-L4546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4545-L4546)

```diff
-               } return mW ? OW.size > AW.Zc ? {
-               mode: AW.le.All,
+               } return yR ? GR.size > eR.Bc ? {
+               mode: eR.Zd.All,
```

#### 490. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4549` → after: `L4510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4510) · [Before (L4549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4549)

```diff
-               mode: AW.le.Filter,
+               mode: eR.Zd.Filter,
```

#### 491. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4552` → after: `L4513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4513) · [Before (L4552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4552)

```diff
-               mode: AW.le.Off,
+               mode: eR.Zd.Off,
```

#### 492. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4558` → after: `L4519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4519) · [Before (L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4558)

```diff
-             mode: AW.le.All,
+             mode: eR.Zd.All,
```

#### 493. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4562` → after: `L4523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4523) · [Before (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4562)

```diff
-         if (OW.mode === AW.le.Off && !this.vetoSet) return;
+         if (GR.mode === eR.Zd.Off && !this.vetoSet) return;
```

#### 494. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4564` → after: `L4525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4525) · [Before (L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4564)

```diff
-         (0, AW.zf)(iW, 0, OW.mode, OW.roots.length, mW) ? this.vetoSet = OW.mode !== AW.le.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
+         (0, eR.Bf)(JR, 0, GR.mode, GR.roots.length, yR) ? this.vetoSet = GR.mode !== eR.Zd.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
```

#### 495. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4577` → after: `L4538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4538) · [Before (L4577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4577)

```diff
-           for (const OW of WW) OW.onPlayerAltAction && (iW |= 1 << AW.tc.AltAction), (OW.onPlayerClick || OW.onPlayerClickUp || OW.onPlayerAttackEntity) && (iW |= 1 << AW.tc.Click), OW.onPlayerChangeBlock && (iW |= 1 << AW.tc.ChangeBlock), OW.onPlayerDropItem && (iW |= 1 << AW.tc … [truncated]
+           for (const GR of RR) GR.onPlayerAltAction && (JR |= 1 << eR.cc.AltAction), (GR.onPlayerClick || GR.onPlayerClickUp || GR.onPlayerAttackEntity) && (JR |= 1 << eR.cc.Click), GR.onPlayerChangeBlock && (JR |= 1 << eR.cc.ChangeBlock), GR.onPlayerDropItem && (JR |= 1 << eR.cc … [truncated]
```
