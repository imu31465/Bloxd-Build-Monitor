# Changed — Bundle Modifications Report (Part 040 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `40 / 126` (**426** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 039](part-039.md) · [Part 041 →](part-041.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/184.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/184.js` (178 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e)

#### 40. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L246)

```diff
-         this.scale = JR, this.plane = void 0, this.canvas = document.createElement("canvas"), this.texture = void 0, this.widthPx = 0, this.heightPx = 0, this.shown = null, this.stopRedrawing = null, this.texture = new IR.b("previewNametag", this.canvas, RR, !1, LR.c.BILINEAR_SAM … [truncated]
+         this.scale = Sr, this.plane = void 0, this.canvas = document.createElement("canvas"), this.texture = void 0, this.widthPx = 0, this.heightPx = 0, this.shown = null, this.stopRedrawing = null, this.texture = new kr.e("previewNametag", this.canvas, rr, !1, hr.e.BILINEAR_SAM … [truncated]
```

#### 41. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L250)

```diff
-         }, RR), this.plane.material = GR, this.plane.billboardMode = mR.b.BILLBOARDMODE_ALL, this.plane.renderingGroupId = YR.b, this.plane.ZL = !1, this.plane.JA(!1)
+         }, rr), this.plane.material = Qr, this.plane.billboardMode = Ar.d.BILLBOARDMODE_ALL, this.plane.renderingGroupId = or.c, this.plane.ut = !1, this.plane.VK(!1)
```

#### 42. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L255)

```diff
-           if (this.shown = RR, null === (JR = this.stopRedrawing) || void 0 === JR || JR.call(this), this.stopRedrawing = null, null === RR || void 0 === RR || !RR.name) return this.heightPx = 0, void this.plane.JA(!1);
+           if (this.shown = rr, null === (Sr = this.stopRedrawing) || void 0 === Sr || Sr.call(this), this.stopRedrawing = null, null === rr || void 0 === rr || !rr.name) return this.heightPx = 0, void this.plane.VK(!1);
```

#### 43. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L257)

```diff
-             this.shown === RR && (this.draw(RR), this.stopRedrawing = (0, jR.h)((() => {
+             this.shown === rr && (this.draw(rr), this.stopRedrawing = (0, wr.f)((() => {
```

#### 44. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L266` → after: `L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L266) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L266)

```diff
-           GR = ER.c * this.scale + JR,
+           Qr = Fr.d * this.scale + Sr,
```

#### 45. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L269-L274` → after: `L269-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L269-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L269-L274) · [Before (L269-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L269-L274)

```diff
-           uR = 2 * tR * Math.tan(RR.fov / 2) * RR.ke().getAspectRatio(RR),
-           ZR = Math.min((0, ER.f)(tR), .9 * uR / (dR.c.TEXT_PLANE_RATIO * this.widthPx)),
-           qR = ZR * dR.c.TEXT_PLANE_RATIO * this.heightPx;
-         this.plane.position.set(0, JR + (ER.c + .5 * qR - .05) * this.scale, 0);
-         const iR = ZR * dR.c.TEXT_PLANE_RATIO * this.scale;
-         this.plane.MK.set(iR * this.widthPx, iR * this.heightPx, 1)
+           ar = 2 * Wr * Math.tan(rr.fov / 2) * rr.MU().getAspectRatio(rr),
+           jr = Math.min((0, Fr.f)(Wr), .9 * ar / (cr.i.TEXT_PLANE_RATIO * this.widthPx)),
+           Ir = jr * cr.i.TEXT_PLANE_RATIO * this.heightPx;
+         this.plane.position.set(0, Sr + (Fr.d + .5 * Ir - .05) * this.scale, 0);
+         const fr = jr * cr.i.TEXT_PLANE_RATIO * this.scale;
+         this.plane.Tx.set(fr * this.widthPx, fr * this.heightPx, 1)
```

#### 46. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L277-L278` → after: `L277-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L277-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L277-L278) · [Before (L277-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L277-L278)

```diff
-         const JR = (0, zR.c)(this.canvas),
-           GR = (0, SR.e)({
+         const Sr = (0, Vr.d)(this.canvas),
+           Qr = (0, ir.c)({
```

#### 47. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L283-L285` → after: `L283-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L283-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L283-L285) · [Before (L283-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L283-L285)

```diff
-           }, JR, jR.n);
-         if (null === GR) return this.heightPx = 0, void this.plane.JA(!1);
-         this.texture.scaleTo(Math.ceil(2 * GR.width), Math.ceil(2 * GR.height)), JR.scale(2, 2), GR.draw(JR), this.texture.update(), this.widthPx = GR.width, this.heightPx = GR.height, this.plane.JA(!0)
+           }, Sr, wr.p);
+         if (null === Qr) return this.heightPx = 0, void this.plane.VK(!1);
+         this.texture.scaleTo(Math.ceil(2 * Qr.width), Math.ceil(2 * Qr.height)), Sr.scale(2, 2), Qr.draw(Sr), this.texture.update(), this.widthPx = Qr.width, this.heightPx = Qr.height, this.plane.VK(!0)
```

#### 48. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L288-L291` → after: `L288-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L288-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L288-L291) · [Before (L288-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L288-L291)

```diff
-     var QR = GR(38285),
-       FR = (GR(42657), GR(42014), GR(42663), GR(35195)),
-       TR = GR(37238),
-       sR = GR(42736);
+     var Jr = Qr(38650),
+       Dr = (Qr(42980), Qr(42318), Qr(42986), Qr(35509)),
+       dr = Qr(37596),
+       sr = Qr(43054);
```

#### 49. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L306-L308` → after: `L306-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L306-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L306-L308) · [Before (L306-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L306-L308)

```diff
-       const ZR = (0, tR.i)();
-       if (ZR.kN(!1), yR.b.Player.meshApi.updatePlayerCosmetic(ZR.WH, uJ, RR, JR, !0), "cape" === RR)
-         if (JR === uR.g) yJ.JA(!1);
+       const jr = (0, Wr.e)();
+       if (jr.Qq(!1), Zr.c.Player.meshApi.updatePlayerCosmetic(jr.fC, aS, rr, Sr, !0), "cape" === rr)
+         if (Sr === ar.g) ZS.VK(!1);
```

#### 50. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L310-L311` → after: `L310-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L310-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L310-L311) · [Before (L310-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L310-L311)

```diff
-           yJ.JA(!0);
-           yJ.material.diffuseTexture = new LR.c(GR(40042)(`./cape_${JR}.png`), yJ.jH(), {
+           ZS.VK(!0);
+           ZS.material.diffuseTexture = new hr.e(Qr(40378)(`./cape_${Sr}.png`), ZS.eC(), {
```

#### 51. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L313` → after: `L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L313) · [Before (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L313)

```diff
-             samplingMode: LR.c.NEAREST_NEAREST_MIPLINEAR
+             samplingMode: hr.e.NEAREST_NEAREST_MIPLINEAR
```

#### 52. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L320` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L320) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L320)

```diff
-       const [GR, yR] = (0, TR.e)(RR, JR, window.devicePixelRatio);
+       const [Qr, Zr] = (0, dr.d)(rr, Sr, window.devicePixelRatio);
```

#### 53. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L329` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L329) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L329)

```diff
-           captureFrame: RR => (0, sR.e)((() => this.closed ? null : KJ), (RR => {
+           captureFrame: rr => (0, sr.b)((() => this.closed ? null : xS), (rr => {
```

#### 54. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L341)

```diff
-                 const JR = new aR.StandardMaterial(`${RR.name}_depthOnly`, RR.jH());
+                 const Sr = new tr.StandardMaterial(`${rr.name}_depthOnly`, rr.eC());
```

#### 55. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L350)

```diff
-             yJ.JA(!1), eJ("aura", "aura_none"), fJ.set(null), iJ.isolatePet()
+             ZS.VK(!1), US("aura", "aura_none"), ES.set(null), fS.isolatePet()
```

#### 56. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L373-L375` → after: `L373-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L373-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L373-L375) · [Before (L373-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L373-L375)

```diff
-         if (!RR) return void ZJ.stopAnimation(iR.h.Emote);
-         const JR = (0, ZR.h)((0, qR.i)(RR).animation);
-         ZJ.startAnimation(JR, iR.h.Emote, 0, qR.b)
+         if (!rr) return void jS.stopAnimation(fr.i.Emote);
+         const Sr = (0, jr.d)((0, Ir.h)(rr).animation);
+         jS.startAnimation(Sr, fr.i.Emote, 0, Ir.c)
```

#### 57. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L397` → after: `L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L397) · [Before (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L397)

```diff
-         RJ.inertialAlphaOffset = 0, RJ.inertialBetaOffset = 0, RJ.inertialRadiusOffset = 0, UJ(FR.e[this.framing])
+         rS.inertialAlphaOffset = 0, rS.inertialBetaOffset = 0, rS.inertialRadiusOffset = 0, YS(Dr.d[this.framing])
```

#### 58. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L420` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L420) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L420)

```diff
-         hR = new fR.c(KJ, !0, {
+         ur = new Er.d(xS, !0, {
```

#### 59. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L423-L425` → after: `L423-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L423-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L423-L425) · [Before (L423-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L423-L425)

```diff
-         const RR = (0, tR.i)();
-         hR.LtR = RR.lK.engine.LtR, JJ = new VR.c(hR), JJ.clearColor = new eR.e(0, 0, 0, 0), JJ.ambientColor = new eR.Color3(1, 1, 1), RJ = new KR.c("tn", 0, 0, 1, wR.Fe.Zero(), JJ), RJ.attachControl(KJ, !0), RJ.panningSensibility = 0, VJ = (0, yR.r)("Player", JJ, !0).then((JR =>  … [truncated]
-           GJ = JR.meshApi, yJ = JR.capeMesh, tJ = RR.lK.RP;
+         const rr = (0, Wr.e)();
+         ur.JZr = rr.Ox.engine.JZr, SS = new pr.c(ur), SS.clearColor = new Ur.d(0, 0, 0, 0), SS.ambientColor = new Ur.Color3(1, 1, 1), rS = new xr.d("fz", 0, 0, 1, mr.kU.Zero(), SS), rS.attachControl(xS, !0), rS.panningSensibility = 0, pS = (0, Zr.s)("Player", SS, !0).then((Sr =>  … [truncated]
+           QS = Sr.meshApi, ZS = Sr.capeMesh, WS = rr.Ox.bC;
```

#### 60. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L429-L430` → after: `L429-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L429-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L429-L430) · [Before (L429-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L429-L430)

```diff
-           tJ.attachTransformNode(yJ, uJ, tR), tJ.set(uJ, "aOpacity", 1), tJ.Yz(uJ, "aOpacity", 1), qJ = new UR.d(JJ, tJ, uJ), iJ = new xR(JJ, GR), fJ = new kR(JJ, GR), ZJ = new nR.AnimatorState, ZJ.xw = RR, ZJ.thinInstMgr = tJ, ZJ.JI = uJ, ZJ.SyR = tJ.JtR(uJ, 0), ZJ.modelLifeform … [truncated]
-           const uR = yJ.Tm().boundingBox;
+           WS.attachTransformNode(ZS, aS, Wr), WS.set(aS, "aOpacity", 1), WS.hG(aS, "aOpacity", 1), IS = new Yr.d(SS, WS, aS), fS = new Hr(SS, Qr), ES = new br(SS, Qr), jS = new zr.AnimatorState, jS.gm = rr, jS.thinInstMgr = WS, jS.JC = aS, jS.tZr = WS.lZr(aS, 0), jS.modelLifeform … [truncated]
+           const ar = ZS.mG().boundingBox;
```

#### 61. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L438)

```diff
-           const VR = new aR.StandardMaterial("capeMaterial", yJ.jH());
+           const pr = new tr.StandardMaterial("capeMaterial", ZS.eC());
```

#### 62. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L442` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L442) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L442)

```diff
-           const LR = new rR.b("light", new wR.Fe(-.1, 1, -.3), JJ);
+           const hr = new Nr.b("light", new mr.kU(-.1, 1, -.3), SS);
```

#### 63. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L448` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L448) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L448)

```diff
-   37357: (RR, JR, GR) => {
+   37743: (rr, Sr, Qr) => {
```

#### 64. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L450-L451` → after: `L450-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L450-L451) · [Before (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L450-L451)

```diff
-       e: () => qR,
-       h: () => ZR
+       b: () => Ir,
+       e: () => jr
```

#### 65. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L453)

```diff
-     var yR = GR(4563);
+     var Zr = Qr(4494);
```

#### 66. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L458)

```diff
-       return uR ??= GR.e(241).then((() => GR(37221))).then((RR => {
+       return ar ??= Qr.e(242).then((() => Qr(37580))).then((rr => {
```

#### 67. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L466)

```diff
-             uR = (0, yR.u)(JR);
+             ar = (0, Zr.t)(Sr);
```

#### 68. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L483` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L483) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L483)

```diff
-   35085: (RR, JR, GR) => {
+   35399: (rr, Sr, Qr) => {
```

#### 69. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L485` → after: `L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L485) · [Before (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L485)

```diff
-       c: () => uR
+       d: () => ar
```

#### 70. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L487` → after: `L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L487) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L487)

```diff
-     var yR = GR(1406);
+     var Zr = Qr(1371);
```

#### 71. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L491` → after: `L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L491) · [Before (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L491)

```diff
-       return null !== (RR = null === (JR = screen.orientation) || void 0 === JR ? void 0 : JR.type) && void 0 !== RR ? RR : innerWidth > innerHeight ? "landscape" : "portrait"
+       return null !== (rr = null === (Sr = screen.orientation) || void 0 === Sr ? void 0 : Sr.type) && void 0 !== rr ? rr : innerWidth > innerHeight ? "landscape" : "portrait"
```

#### 72. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L504` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L504) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L504)

```diff
-           this.holding && (0, yR.ma)(new Error("Game view size held for 60 s"))
+           this.holding && (0, Zr.Pt)(new Error("Game view size held for 60 s"))
```

#### 73. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L531` → after: `L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L531) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L531)

```diff
-   37256: (RR, JR, GR) => {
+   37613: (rr, Sr, Qr) => {
```

#### 74. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L542-L543` → after: `L542-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L542-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L542-L543) · [Before (L542-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L542-L543)

```diff
-       c: () => tR,
-       e: () => yR
+       d: () => Wr,
+       g: () => Zr
```

#### 75. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L546` → after: `L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L546) · [Before (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L546)

```diff
-   42736: (RR, JR, GR) => {
+   43054: (rr, Sr, Qr) => {
```

#### 76. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L566` → after: `L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L566) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L566)

```diff
-       e: () => yR
+       b: () => Zr
```

#### 77. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L569` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L569) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L569)

```diff
-   37238: (RR, JR, GR) => {
+   37596: (rr, Sr, Qr) => {
```

#### 78. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L571` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L571) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L571)

```diff
-       e: () => uR
+       d: () => ar
```

#### 79. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L577` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L577) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L577)

```diff
-       let [uR, ZR] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [RR, JR], qR = Math.min(Number.isFinite(GR) && GR > 0 ? GR : 1, tR);
+       let [ar, jr] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [rr, Sr], Ir = Math.min(Number.isFinite(Qr) && Qr > 0 ? Qr : 1, Wr);
```

#### 80. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L582)

```diff
-   37278: (RR, JR, GR) => {
+   37642: (rr, Sr, Qr) => {
```

#### 81. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L584-L585` → after: `L584-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L584-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L584-L585) · [Before (L584-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L584-L585)

```diff
-       c: () => XR,
-       e: () => gR,
+       d: () => yr,
+       g: () => Lr,
```

#### 82. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L589-L606` → after: `L589-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L589-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L589-L606) · [Before (L589-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L589-L606)

```diff
-     var yR = GR(37287),
-       tR = GR(8059),
-       uR = GR(8132),
-       ZR = GR(37293),
-       qR = GR(37298),
-       iR = GR(37301),
-       fR = GR(8461),
-       VR = GR(8583),
-       KR = GR(37303),
-       wR = GR(8784),
-       rR = GR(7934),
-       eR = GR(9048),
-       aR = GR(37309),
-       LR = GR(37312),
-       nR = GR(9074),
-       UR = GR(37314),
- ... (2 more removed lines; see GitHub link above)
+     var Zr = Qr(37644),
+       Wr = Qr(7878),
+       ar = Qr(7947),
+       jr = Qr(37653),
+       Ir = Qr(37661),
+       fr = Qr(37667),
+       Er = Qr(8285),
+       pr = Qr(8418),
+       xr = Qr(37671),
+       mr = Qr(8637),
+       Nr = Qr(7733),
+       Ur = Qr(8913),
+       tr = Qr(37679),
+       hr = Qr(37684),
+       zr = Qr(8942),
+       Yr = Qr(37689),
+ ... (2 more added lines; see GitHub link above)
```

#### 83. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L608-L609` → after: `L608-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L608-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L608-L609) · [Before (L608-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L608-L609)

```diff
-         redTeam: uR.c,
-         blueTeam: LR.g,
+         redTeam: ar.h,
+         blueTeam: hr.c,
```

#### 84. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L611-L612` → after: `L611-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L611-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L611-L612) · [Before (L611-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L611-L612)

```diff
-         yellowTeam: nR.f,
-         cyanTeam: iR.f,
+         yellowTeam: zr.g,
+         cyanTeam: fr.e,
```

#### 85. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L615-L621` → after: `L615-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L615-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L615-L621) · [Before (L615-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L615-L621)

```diff
-         grayTeam: KR.e,
-         blackTeam: aR.h,
-         orangeTeam: UR.h,
-         lilacTeam: ZR.e,
-         purpleTeam: wR.f,
-         magentaTeam: qR.e,
-         brownTeam: yR.g,
+         grayTeam: xr.c,
+         blackTeam: tr.d,
+         orangeTeam: Yr.g,
+         lilacTeam: jr.f,
+         purpleTeam: mr.c,
+         magentaTeam: Ir.f,
+         brownTeam: Zr.d,
```

#### 86. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L623-L624` → after: `L623-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L623-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L623-L624) · [Before (L623-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L623-L624)

```diff
-         lightGrayTeam: fR.h,
-         lightBlueTeam: eR.h
+         lightGrayTeam: Er.f,
+         lightBlueTeam: Ur.g
```

#### 87. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L629` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L629) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L629)

```diff
-       return `team-${RR.iconName}`
+       return `team-${rr.iconName}`
```

#### 88. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L634` → after: `L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L634) · [Before (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L634)

```diff
-         JR = AR.C[OR];
+         Sr = er.K[Pr];
```

#### 89. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L658` → after: `L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L658) · [Before (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L658)

```diff
-       return "string" === typeof RR && lR && null !== (JR = BR.get(RR.toLowerCase())) && void 0 !== JR ? JR : null
+       return "string" === typeof rr && vr && null !== (Sr = Tr.get(rr.toLowerCase())) && void 0 !== Sr ? Sr : null
```

#### 90. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L667` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L667) · [Before (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L667)

```diff
-   37346: (RR, JR, GR) => {
+   37726: (rr, Sr, Qr) => {
```

#### 91. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L669-L670` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L669) · [Before (L669-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L669-L670)

```diff
-       e: () => VR,
-       f: () => iR,
+       d: () => pr,
```

#### 92. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L672` → after: `L671-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L671-L672) · [Before (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L672)

```diff
-       j: () => fR
+       j: () => Ir,
+       k: () => Er
```

#### 93. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L674` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L674) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L674)

```diff
-     var yR = GR(2144);
+     var Zr = Qr(2098);
```

#### 94. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L688` → after: `L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L688) · [Before (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L688)

```diff
-       tR = RR, uR++, (0, yR.e)();
+       Wr = rr, ar++, (0, Zr.b)();
```

#### 95. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L696` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L696) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L696)

```diff
-   37353: (RR, JR, GR) => {
+   37734: (rr, Sr, Qr) => {
```

#### 96. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L698-L699` → after: `L698-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L698-L699) · [Before (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L698-L699)

```diff
-       d: () => ZR,
-       e: () => qR
+       c: () => jr,
+       g: () => Ir
```

#### 97. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L701` → after: `L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L701) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L701)

```diff
-     var yR = GR(37357);
+     var Zr = Qr(37743);
```

#### 98. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L706` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L706) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L706)

```diff
-       return tR ??= GR.e(74).then((() => GR(42743))).catch((RR => {
+       return Wr ??= Qr.e(74).then((() => Qr(43057))).catch((rr => {
```

#### 99. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L712)

```diff
-       return uR ??= Promise.all([ZR(), (0, yR.h)()]).then((RR => {
+       return ar ??= Promise.all([jr(), (0, Zr.e)()]).then((rr => {
```

#### 100. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L720` → after: `L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L720) · [Before (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L720)

```diff
-   37272: (RR, JR, GR) => {
+   37635: (rr, Sr, Qr) => {
```

#### 101. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L722` → after: `L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L722) · [Before (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L722)

```diff
-       e: () => XR
+       c: () => yr
```

#### 102. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L724-L729` → after: `L724-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L724-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L724-L729) · [Before (L724-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L724-L729)

```diff
-     var yR = GR(5281),
-       tR = GR(1359),
-       uR = GR(656),
-       ZR = GR(2242),
-       qR = GR(37278),
-       iR = GR(37266);
+     var Zr = Qr(5223),
+       Wr = Qr(1321),
+       ar = Qr(672),
+       jr = Qr(2179),
+       Ir = Qr(37642),
+       fr = Qr(37630);
```

#### 103. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L759` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L759) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L759)

```diff
-     const nR = new Set(yR.c);
+     const zr = new Set(Zr.b);
```

#### 104. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L762` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L762) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L762)

```diff
-       return "string" === typeof RR ? (0, iR.m)(RR, JR) : JR
+       return "string" === typeof rr ? (0, fr.u)(rr, Sr) : Sr
```

#### 105. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L771` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L771) · [Before (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L771)

```diff
-       const yR = null !== (GR = RR.applyTo) && void 0 !== GR ? GR : "both";
+       const Zr = null !== (Qr = rr.applyTo) && void 0 !== Qr ? Qr : "both";
```

#### 106. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L777)

```diff
-       return "glow" === RR.style ? JR * KR : Math.ceil(JR / 2) + 1
+       return "glow" === rr.style ? Sr * xr : Math.ceil(Sr / 2) + 1
```

#### 107. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L782` → after: `L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L782) · [Before (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L782)

```diff
-       const VR = null !== (yR = LR(RR.info)) && void 0 !== yR ? yR : {},
+       const pr = null !== (Zr = hr(rr.info)) && void 0 !== Zr ? Zr : {},
```

#### 108. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L787` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L787) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L787)

```diff
-         lR = "" === XR || !0 === RR.mesh ? XR : (0, tR.e)(XR, !GR.canSeeRealPlayerNames, BR);
+         vr = "" === yr || !0 === rr.mesh ? yr : (0, Wr.e)(yr, !Qr.canSeeRealPlayerNames, Tr);
```

#### 109. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L790-L791` → after: `L790-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L790-L791) · [Before (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L790-L791)

```diff
-         gR = Object.hasOwn(uR.v, pR) ? uR.v[pR] : void 0,
-         bR = VR.content ? (0, iR.h)(VR.content, iR.c.DEFAULT_FONT_SIZE, GR, gR) : [{
+         Lr = Object.hasOwn(ar.r, Or) ? ar.r[Or] : void 0,
+         lr = pr.content ? (0, fr.i)(pr.content, fr.d.DEFAULT_FONT_SIZE, Qr, Lr) : [{
```

#### 110. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L794` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L794) · [Before (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L794)

```diff
-           size: iR.c.DEFAULT_FONT_SIZE,
+           size: fr.d.DEFAULT_FONT_SIZE,
```

#### 111. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L805` → after: `L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L805) · [Before (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L805)

```diff
-         const RR = (0, iR.p)(tR);
+         const rr = (0, fr.y)(Wr);
```

#### 112. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L814` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L814) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L814)

```diff
-       }), "number" === typeof RR.xZ && vR.push({
+       }), "number" === typeof rr.Oj && Xr.push({
```

#### 113. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L816-L817` → after: `L816-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L816-L817) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L816-L817)

```diff
-         text: ` ${RR.xZ}m`,
-         size: iR.c.DEFAULT_FONT_SIZE,
+         text: ` ${rr.Oj}m`,
+         size: fr.d.DEFAULT_FONT_SIZE,
```

#### 114. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L820` → after: `L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L820) · [Before (L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L820)

```diff
-       const NR = MR ? (0, iR.h)(MR, iR.c.DEFAULT_SUBTITLE_FONT_SIZE, GR) : null,
+       const qr = Br ? (0, fr.i)(Br, fr.d.DEFAULT_SUBTITLE_FONT_SIZE, Qr) : null,
```

#### 115. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L828` → after: `L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L828) · [Before (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L828)

```diff
-         zR = (0, iR.g)(null !== NR && void 0 !== NR ? NR : [], JR, GR),
+         Vr = (0, fr.g)(null !== qr && void 0 !== qr ? qr : [], Sr, Qr),
```

#### 116. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L830-L831` → after: `L830-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L830-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L830-L831) · [Before (L830-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L830-L831)

```diff
-           width: iR.c.EFFECT_ICON_SIZE * PR.length,
-           height: PR.length > 0 ? iR.c.EFFECT_ICON_SIZE : 0
+           width: fr.d.EFFECT_ICON_SIZE * Gr.length,
+           height: Gr.length > 0 ? fr.d.EFFECT_ICON_SIZE : 0
```

#### 117. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L836` → after: `L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L836) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L836)

```diff
-         YR = "never" === (null !== (ZR = null === oR || void 0 === oR ? void 0 : oR.display) && void 0 !== ZR ? ZR : "onDamage") ? 0 : dR + ER,
+         or = "never" === (null !== (jr = null === Cr || void 0 === Cr ? void 0 : Cr.display) && void 0 !== jr ? jr : "onDamage") ? 0 : cr + Fr,
```

#### 118. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L838` → after: `L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L838) · [Before (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L838)

```diff
-         QR = Math.max(iR.c.VERTICAL_PADDING, YR, jR);
+         Jr = Math.max(fr.d.VERTICAL_PADDING, or, wr);
```

#### 119. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L841-L842` → after: `L841-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L841-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L841-L842) · [Before (L841-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L841-L842)

```diff
-         const RR = CR(cR) + iR.c.HORIZONTAL_PADDING / 2;
-         FR = Math.max(FR, Math.max(mR.width, zR.width) + iR.c.HORIZONTAL_PADDING + 2 * RR)
+         const rr = Kr(Mr) + fr.d.HORIZONTAL_PADDING / 2;
+         Dr = Math.max(Dr, Math.max(Ar.width, Vr.width) + fr.d.HORIZONTAL_PADDING + 2 * rr)
```

#### 120. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L845-L846` → after: `L845-L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L845-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L845-L846) · [Before (L845-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L845-L846)

```diff
-         sR = mR.width + iR.c.HORIZONTAL_PADDING,
-         hR = zR.width + iR.c.HORIZONTAL_PADDING,
+         sr = Ar.width + fr.d.HORIZONTAL_PADDING,
+         ur = Vr.width + fr.d.HORIZONTAL_PADDING,
```

#### 121. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L855` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L855) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L855)

```diff
-           if (RR.fillStyle = DR, RR.fillRect(JJ, GJ, RJ, mR.height), (0, iR.l)(vR, (FR - sR) / 2 + iR.c.HORIZONTAL_PADDING / 2, GJ, mR.height, RR, GR, JR), NR) {
+           if (rr.fillStyle = Rr, rr.fillRect(SS, QS, rS, Ar.height), (0, fr.s)(Xr, (Dr - sr) / 2 + fr.d.HORIZONTAL_PADDING / 2, QS, Ar.height, rr, Qr, Sr), qr) {
```

#### 122. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L857` → after: `L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L857) · [Before (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L857)

```diff
-             RR.fillStyle = HR, RR.fillRect(JJ, yR, RJ, zR.height), (0, iR.l)(NR, (FR - hR) / 2 + iR.c.HORIZONTAL_PADDING / 2, yR, zR.height, RR, GR, JR)
+             rr.fillStyle = gr, rr.fillRect(SS, Zr, rS, Vr.height), (0, fr.s)(qr, (Dr - ur) / 2 + fr.d.HORIZONTAL_PADDING / 2, Zr, Vr.height, rr, Qr, Sr)
```

#### 123. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L865` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L865) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L865)

```diff
-               const yR = [...Array.isArray(GR) && GR.length > 0 ? GR : wR].sort(((RR, JR) => RR.healthFraction - JR.healthFraction)),
+               const Zr = [...Array.isArray(Qr) && Qr.length > 0 ? Qr : mr].sort(((rr, Sr) => rr.healthFraction - Sr.healthFraction)),
```

#### 124. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L867` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L867) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L867)

```diff
-               return (null !== tR && void 0 !== tR ? tR : yR[yR.length - 1]).colour
+               return (null !== Wr && void 0 !== Wr ? Wr : Zr[Zr.length - 1]).colour
```

#### 125. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L914` → after: `L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L914) · [Before (L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L914)

```diff
-           }(0, iR.j)(JR, RR);
+           }(0, fr.m)(Sr, rr);
```

#### 126. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L923)

```diff
-   37266: (RR, JR, GR) => {
+   37630: (rr, Sr, Qr) => {
```

#### 127. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L925` → after: `L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L925) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L925)

```diff
-       c: () => uR,
+       d: () => ar,
```

#### 128. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L927-L930` → after: `L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L927) · [Before (L927-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L927-L930)

```diff
-       h: () => rR,
-       j: () => CR,
-       k: () => AR,
-       l: () => WR,
+       i: () => Nr,
```

#### 129. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L932` → after: `L929-L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L929-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L929-L932) · [Before (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L932)

```diff
-       p: () => KR
+       q: () => er,
+       s: () => nr,
+       u: () => Er,
+       y: () => xr
```

#### 130. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L934-L935` → after: `L934-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L934-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L934-L935) · [Before (L934-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L934-L935)

```diff
-     var yR = GR(656),
-       tR = GR(359);
+     var Zr = Qr(672),
+       Wr = Qr(360);
```

#### 131. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L948` → after: `L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L948) · [Before (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L948)

```diff
-       return `bolder ${RR}px 'Jetbrains Mono'`
+       return `bolder ${rr}px 'Jetbrains Mono'`
```

#### 132. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L956-L957` → after: `L956-L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L956-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L956-L957) · [Before (L956-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L956-L957)

```diff
-       const GR = "number" === typeof RR ? RR : "string" === typeof RR ? Number(RR.replace("px", "")) : NaN;
-       return Number.isFinite(GR) && GR > 0 ? GR : JR
+       const Qr = "number" === typeof rr ? rr : "string" === typeof rr ? Number(rr.replace("px", "")) : NaN;
+       return Number.isFinite(Qr) && Qr > 0 ? Qr : Sr
```

#### 133. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L961` → after: `L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L961) · [Before (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L961)

```diff
-       return iR(RR) ? RR : void 0
+       return fr(rr) ? rr : void 0
```

#### 134. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L965-L966` → after: `L965-L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L965-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L965-L966) · [Before (L965-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L965-L966)

```diff
-       const JR = "number" === typeof RR ? yR.z[RR] : RR;
-       return "string" === typeof JR && Object.hasOwn(yR.n, JR) ? yR.n[JR] : void 0
+       const Sr = "number" === typeof rr ? Zr.v[rr] : rr;
+       return "string" === typeof Sr && Object.hasOwn(Zr.k, Sr) ? Zr.k[Sr] : void 0
```

#### 135. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L970` → after: `L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L970) · [Before (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L970)

```diff
-       return "string" === typeof RR ? RR : iR(RR) ? "string" === typeof RR.translationKey ? JR.translate(RR.translationKey, RR.params).map((RR => "string" === typeof RR ? RR : RR.icon)).join("") : "string" === typeof RR.entityName ? JR.shownPlayerName(RR.entityName) : "" : void 0 … [truncated]
+       return "string" === typeof rr ? rr : fr(rr) ? "string" === typeof rr.translationKey ? Sr.translate(rr.translationKey, rr.params).map((rr => "string" === typeof rr ? rr : rr.icon)).join("") : "string" === typeof rr.entityName ? Sr.shownPlayerName(rr.entityName) : "" : void 0 … [truncated]
```

#### 136. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L994` → after: `L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L994) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L994)

```diff
-         if (iR(eR) && (0, tR.sb)(eR)) {
+         if (fr(Ur) && (0, Wr.xb)(Ur)) {
```

#### 137. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1004` → after: `L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1004) · [Before (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1004)

```diff
-         iR(eR) && (0, tR.rb)(eR) ? (RR = GR.keyBindingText(String(eR.action)), aR = VR(eR.style)) : iR(eR) && "str" in eR ? (RR = eR.str, aR = VR(eR.style)) : RR = eR;
+         fr(Ur) && (0, Wr.wb)(Ur) ? (rr = Qr.keyBindingText(String(Ur.action)), tr = pr(Ur.style)) : fr(Ur) && "str" in Ur ? (rr = Ur.str, tr = pr(Ur.style)) : rr = Ur;
```

#### 138. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1006` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1006) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1006)

```diff
-           nR = null !== (KR = (0, tR.Zb)(aR)) && void 0 !== KR ? KR : yR;
+           zr = null !== (xr = (0, Wr._b)(tr)) && void 0 !== xr ? xr : Zr;
```

#### 139. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1098` → after: `L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1098) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1098)

```diff
-         const qR = null !== VR && void 0 !== VR ? VR : nR(RR, tR, iR);
+         const Ir = null !== pr && void 0 !== pr ? pr : zr(rr, Wr, fr);
```

#### 140. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1121` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1121) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1121)

```diff
-       const rR = null !== VR && void 0 !== VR ? VR : tR.measureText(RR.text).width;
+       const Nr = null !== pr && void 0 !== pr ? pr : Wr.measureText(rr.text).width;
```

#### 141. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1128` → after: `L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1128) · [Before (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1128)

```diff
-       }(RR.text, JR, GR + yR - uR.VERTICAL_PADDING + 5, wR, null !== (KR = RR.colour) && void 0 !== KR ? KR : "white", tR), rR
+       }(rr.text, Sr, Qr + Zr - ar.VERTICAL_PADDING + 5, mr, null !== (xr = rr.colour) && void 0 !== xr ? xr : "white", Wr), Nr
```

#### 142. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1145` → after: `L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1145) · [Before (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1145)

```diff
-   37341: (RR, JR, GR) => {
+   37718: (rr, Sr, Qr) => {
```

#### 143. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1152-L1155` → after: `L1153-L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1153-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1153-L1155) · [Before (L1152-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1152-L1155)

```diff
-       m: () => kR,
-       n: () => tJ,
-       q: () => dR,
-       r: () => zR
+       p: () => WS,
+       t: () => cr,
+       u: () => Vr
```

#### 144. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1157-L1174` → after: `L1157-L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1157-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1157-L1174) · [Before (L1157-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1157-L1174)

```diff
-     var yR = GR(5281),
-       tR = GR(5303),
-       uR = GR(35162),
-       ZR = GR(4555),
-       qR = GR(4546),
-       iR = GR(1485),
-       fR = GR(37256),
-       VR = GR(103),
-       KR = GR(1351),
-       wR = GR(37278),
-       rR = GR(37346),
-       eR = GR(37353),
-       aR = GR(9468),
-       LR = GR(8872),
-       nR = GR(9056),
-       UR = GR(9180),
- ... (2 more removed lines; see GitHub link above)
+     var Zr = Qr(5223),
+       Wr = Qr(5249),
+       ar = Qr(35472),
+       jr = Qr(4489),
+       Ir = Qr(4485),
+       fr = Qr(1469),
+       Er = Qr(37613),
+       pr = Qr(109),
+       xr = Qr(1317),
+       mr = Qr(37642),
+       Nr = Qr(37726),
+       Ur = Qr(37734),
+       tr = Qr(9282),
+       hr = Qr(8734),
+       zr = Qr(8927),
+       Yr = Qr(9019),
+ ... (2 more added lines; see GitHub link above)
```

#### 145. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1176-L1177` → after: `L1176-L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1176-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1176-L1177) · [Before (L1176-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1176-L1177)

```diff
-       youtube: aR.f,
-       "person-military-pointing": LR.g,
+       youtube: tr.c,
+       "person-military-pointing": hr.i,
```

#### 146. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1179-L1182` → after: `L1179-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1179-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1179-L1182) · [Before (L1179-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1179-L1182)

```diff
-       user: UR.c,
-       wrench: WR.d,
-       zap: AR.f,
-       ...wR.c
+       user: Yr.f,
+       wrench: nr.g,
+       zap: er.g,
+       ...mr.d
```

#### 147. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1190` → after: `L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1190) · [Before (L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1190)

```diff
-         path: "string" === typeof yR ? yR : yR.join(" ")
+         path: "string" === typeof Zr ? Zr : Zr.join(" ")
```

#### 148. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1199` → after: `L1199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1199) · [Before (L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1199)

```diff
-     var pR = GR(37362);
+     var Or = Qr(37748);
```

#### 149. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1214` → after: `L1214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1214) · [Before (L1214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1214)

```diff
-       NR = new RegExp(`[${xR.rest.map((RR=>{let[JR,GR]=RR;return`\\u{${JR.toString(16)}}-\\u{${GR.toString(16)}}`})).join("")}]`, "u");
+       qr = new RegExp(`[${Hr.rest.map((rr=>{let[Sr,Qr]=rr;return`\\u{${Sr.toString(16)}}-\\u{${Qr.toString(16)}}`})).join("")}]`, "u");
```

#### 150. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1218` → after: `L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1218) · [Before (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1218)

```diff
-         console.warn(`[bloxd-wasm-client] the text font's ${RR} file did not load`, JR)
+         console.warn(`[bloxd-wasm-client] the text font's ${rr} file did not load`, Sr)
```

#### 151. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1250` → after: `L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1250) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1250)

```diff
-     })), (0, iR.t)((() => {
+     })), (0, fr.s)((() => {
```

#### 152. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1262` → after: `L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1262) · [Before (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1262)

```diff
-           this.latin = new FontFace(gR, `url(${(0,pR.f)()}) format("woff2")`, {
+           this.latin = new FontFace(Lr, `url(${(0,Or.c)()}) format("woff2")`, {
```

#### 153. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1267` → after: `L1267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1267) · [Before (L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1267)

```diff
-           const RR = new FontFace(gR, `url(${(0,pR.j)()}) format("woff2")`, {
+           const rr = new FontFace(Lr, `url(${(0,Or.e)()}) format("woff2")`, {
```

#### 154. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1282` → after: `L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1282) · [Before (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1282)

```diff
-         await this.load(), this.loadFor(RR), await document.fonts.load(`16px '${gR}'`, RR).catch((JR => {
+         await this.load(), this.loadFor(rr), await document.fonts.load(`16px '${Lr}'`, rr).catch((Sr => {
```

#### 155. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1308` → after: `L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1308) · [Before (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1308)

```diff
-       const tR = GR ? `${RR}#${GR.join(",")}` : RR,
+       const Wr = Qr ? `${rr}#${Qr.join(",")}` : rr,
```

#### 156. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1312` → after: `L1312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1312) · [Before (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1312)

```diff
-         image: null !== (yR = TR.get(tR)) && void 0 !== yR ? yR : null
+         image: null !== (Zr = dr.get(Wr)) && void 0 !== Zr ? Zr : null
```

#### 157. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1323` → after: `L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1323) · [Before (L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1323)

```diff
-             const uR = (0, fR.e)(RR.width, RR.height),
+             const ar = (0, Er.g)(rr.width, rr.height),
```

#### 158. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1327` → after: `L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1327) · [Before (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1327)

```diff
-             return uR.drawImage(RR, 0, 0), uR.globalCompositeOperation = "multiply", uR.fillStyle = `rgb(${GR}, ${yR}, ${tR})`, uR.fillRect(0, 0, ZR.width, ZR.height), uR.globalCompositeOperation = "destination-in", uR.drawImage(RR, 0, 0), ZR
+             return ar.drawImage(rr, 0, 0), ar.globalCompositeOperation = "multiply", ar.fillStyle = `rgb(${Qr}, ${Zr}, ${Wr})`, ar.fillRect(0, 0, jr.width, jr.height), ar.globalCompositeOperation = "destination-in", ar.drawImage(rr, 0, 0), jr
```

#### 159. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1335` → after: `L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1335) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1335)

```diff
-         console.warn(`[bloxd-wasm-client] text icon ${RR} did not load`, JR), FR.get(tR) === ZR && (FR.delete(tR), TR.delete(tR), null !== ZR.image && dR(!1))
+         console.warn(`[bloxd-wasm-client] text icon ${rr} did not load`, Sr), Dr.get(Wr) === jr && (Dr.delete(Wr), dr.delete(Wr), null !== jr.image && cr(!1))
```

#### 160. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1337` → after: `L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1337) · [Before (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1337)

```diff
-     }(0, rR.e)((() => {
+     }(0, Nr.d)((() => {
```

#### 161. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1344` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1344) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1344)

```diff
-     const hR = new Set(yR.c),
+     const ur = new Set(Zr.b),
```

#### 162. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1348)

```diff
-       (0, eR.e)().catch((() => {}))
+       (0, Ur.g)().catch((() => {}))
```

#### 163. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1352` → after: `L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1352) · [Before (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1352)

```diff
-       return hR.has(RR) ? sR(`icon:${RR}`, (async () => {
+       return ur.has(rr) ? sr(`icon:${rr}`, (async () => {
```

#### 164. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1354` → after: `L1354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1354) · [Before (L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1354)

```diff
-         return null !== (JR = null === (GR = (0, rR.g)()) || void 0 === GR ? void 0 : GR.textureUrl(RR)) && void 0 !== JR ? JR : (await (0, eR.d)()).ingameIconUrl(RR)
+         return null !== (Sr = null === (Qr = (0, Nr.j)()) || void 0 === Qr ? void 0 : Qr.textureUrl(rr)) && void 0 !== Sr ? Sr : (await (0, Ur.c)()).ingameIconUrl(rr)
```

#### 165. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1368)

```diff
-       shownPlayerName: RR => (0, KR.e)(RR, cR.hiddenNames),
+       shownPlayerName: rr => (0, xr.c)(rr, Mr.hiddenNames),
```

#### 166. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1370-L1371` → after: `L1370-L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1370-L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1370-L1371) · [Before (L1370-L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1370-L1371)

```diff
-         const GR = "object" === typeof JR && null !== JR ? JR : void 0;
-         return cR.translate(RR, (0, KR.f)(GR, cR.hiddenNames))
+         const Qr = "object" === typeof Sr && null !== Sr ? Sr : void 0;
+         return Mr.translate(rr, (0, xr.e)(Qr, Mr.hiddenNames))
```

#### 167. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1377` → after: `L1377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1377) · [Before (L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1377)

```diff
-         if ("unasked" === yJ && (yJ = "loading", (0, qR.d)().then((() => {
+         if ("unasked" === ZS && (ZS = "loading", (0, Ir.h)().then((() => {
```

#### 168. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1382` → after: `L1382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1382) · [Before (L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1382)

```diff
-         const JR = (0, ZR.b)(RR),
+         const Sr = (0, jr.e)(rr),
```

#### 169. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1385` → after: `L1385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1385) · [Before (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1385)

```diff
-         const yR = (0, qR.c)(RR),
+         const Zr = (0, Ir.d)(rr),
```

#### 170. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1388-L1390` → after: `L1388-L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1388-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1388-L1390) · [Before (L1388-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1388-L1390)

```diff
-         const fR = void 0 !== JR && "GrayscaleArmour" === (0, uR.itemTypeOf)(JR) || Object.hasOwn(tR.d, RR),
-           VR = null !== yR && void 0 !== yR ? yR : RR;
-         return sR(iR ? `block:${VR}` : `item:${VR}`, (async () => {
+         const Er = void 0 !== Sr && "GrayscaleArmour" === (0, ar.itemTypeOf)(Sr) || Object.hasOwn(Wr.c, rr),
+           pr = null !== Zr && void 0 !== Zr ? Zr : rr;
+         return sr(fr ? `block:${pr}` : `item:${pr}`, (async () => {
```

#### 171. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1392-L1395` → after: `L1392-L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1392-L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1392-L1395) · [Before (L1392-L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1392-L1395)

```diff
-           const GR = (0, rR.g)(),
-             yR = await (0, eR.e)();
-           return null !== (RR = null !== (JR = null === GR || void 0 === GR ? void 0 : GR.textureUrl(VR)) && void 0 !== JR ? JR : yR.itemSpriteUrl(VR)) && void 0 !== RR ? RR : iR ? null : yR.notFoundUrl()
-         }), fR ? (0, tR.f)(RR) : void 0)
+           const Qr = (0, Nr.j)(),
+             Zr = await (0, Ur.g)();
+           return null !== (rr = null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.textureUrl(pr)) && void 0 !== Sr ? Sr : Zr.itemSpriteUrl(pr)) && void 0 !== rr ? rr : fr ? null : Zr.notFoundUrl()
+         }), Er ? (0, Wr.e)(rr) : void 0)
```

#### 172. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1401-L1402` → after: `L1401-L1402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1401-L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1401-L1402) · [Before (L1401-L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1401-L1402)

```diff
-         const GR = (0, iR.e)(RR, (0, iR.l)(RR));
-         if (!GR) return (0, iR.h)("brands") && (0, iR.h)("solid") ? lR.has(RR) || (lR.add(RR), console.warn(`[bloxd-wasm-client] unknown rank icon "${RR}": not in the bundled Font Awesome subset, so its tag draws no icon`)) : BR = !0, null;
+         const Qr = (0, fr.f)(rr, (0, fr.k)(rr));
+         if (!Qr) return (0, fr.i)("brands") && (0, fr.i)("solid") ? vr.has(rr) || (vr.add(rr), console.warn(`[bloxd-wasm-client] unknown rank icon "${rr}": not in the bundled Font Awesome subset, so its tag draws no icon`)) : Tr = !0, null;
```

#### 173. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1411` → after: `L1411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1411) · [Before (L1411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1411)

```diff
-   37362: (RR, JR, GR) => {
+   37748: (rr, Sr, Qr) => {
```

#### 174. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1413)

```diff
-       return GR(37370)
+       return Qr(37757)
```

#### 175. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1417` → after: `L1417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1417) · [Before (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1417)

```diff
-       return GR(37379)
+       return Qr(37760)
```

#### 176. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1425-L1426` → after: `L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1426) · [Before (L1425-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1425-L1426)

```diff
-       f: () => yR,
-       j: () => tR
+       e: () => Wr
```

#### 177. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1429` → after: `L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1429) · [Before (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1429)

```diff
-   37370: (RR, JR, GR) => {
+   37757: (rr, Sr, Qr) => {
```

#### 178. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L1432` → after: `L1432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/184.js#L1432) · [Before (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/184.js#L1432)

```diff
-   37379: (RR, JR, GR) => {
+   37760: (rr, Sr, Qr) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/185.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/185.js` (756 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072)

#### 1. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L4)

```diff
-   40356: (RR, JR, GR) => {
+   40670: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L9)

```diff
-       b: () => yR
+       c: () => Zr
```

#### 3. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L12)

```diff
-   40333: (RR, JR, GR) => {
+   40646: (rr, Sr, Qr) => {
```

#### 4. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L14)

```diff
-       b: () => uR,
+       e: () => ar,
```

#### 5. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L17)

```diff
-     var yR = GR(32);
+     var Zr = Qr(34);
```

#### 6. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L25)

```diff
-       tR !== RR && (tR = RR, yR.n.JK("replayViewer|videoExportChanged"))
+       Wr !== rr && (Wr = rr, Zr.i.Jp("replayViewer|videoExportChanged"))
```

#### 7. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L28)

```diff
-   40270: (RR, JR, GR) => {
+   40587: (rr, Sr, Qr) => {
```

#### 8. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L30)

```diff
-       e: () => uR
+       d: () => ar
```

#### 9. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L32-L33)

```diff
-     var yR = GR(32),
-       tR = GR(2163);
+     var Zr = Qr(34),
+       Wr = Qr(2114);
```

#### 10. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L40-L41` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L40-L41) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L40-L41)

```diff
-       const yR = tR.c.get("_tasks");
-       null !== yR && void 0 !== yR && yR[JR] && tR.c.apply({
+       const Zr = Wr.d.get("_tasks");
+       null !== Zr && void 0 !== Zr && Zr[Sr] && Wr.d.apply({
```

#### 11. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L51)

```diff
-     yR.n.subscribe("clientTaskProgress", (RR => {
+     Zr.i.subscribe("clientTaskProgress", (rr => {
```

#### 12. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L55` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L55) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L55)

```diff
-   40200: (RR, JR, GR) => {
+   40531: (rr, Sr, Qr) => {
```

#### 13. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L57-L59` → after: `L57-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L57-L59) · [Before (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L57-L59)

```diff
-       d: () => GG,
-       f: () => RG,
-       g: () => JG
+       b: () => QQ,
+       e: () => rQ,
+       f: () => SQ
```

#### 14. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L61-L69` → after: `L61-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L61-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L61-L69) · [Before (L61-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L61-L69)

```diff
-     var yR = GR(2421),
-       tR = GR(163),
-       uR = GR(203),
-       ZR = GR(688),
-       qR = GR(46),
-       iR = GR(2435),
-       fR = GR(2532),
-       VR = GR(2502),
-       KR = GR(1317);
+     var Zr = Qr(2364),
+       Wr = Qr(161),
+       ar = Qr(208),
+       jr = Qr(692),
+       Ir = Qr(43),
+       fr = Qr(2383),
+       Er = Qr(2484),
+       pr = Qr(2448),
+       xr = Qr(1279);
```

#### 15. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L74)

```diff
-           SVR: !0
+           upr: !0
```

#### 16. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L76-L77` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L76-L77) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L76-L77)

```diff
-         this.callbacks = JR, this.options = GR, this.cyR = void 0, this.sessionId = void 0, this.sA = [], this.jVR = !1, this.He = !1, this.dVR = void 0, this.HA = 0, this.uZR = 0, this.EVR = (RR, JR) => {
-           if (this.He) return;
+         this.callbacks = Sr, this.options = Qr, this.pZr = void 0, this.sessionId = void 0, this.bK = [], this.rxr = !1, this.vU = !1, this.Sxr = void 0, this.iK = 0, this.pjr = 0, this.Qxr = (rr, Sr) => {
+           if (this.vU) return;
```

#### 17. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L79)

```diff
-           this.jVR ? this.YVR(GR, JR) : this.sA.push({
+           this.rxr ? this.Zxr(Qr, Sr) : this.bK.push({
```

#### 18. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L84-L85` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L84-L85) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L84-L85)

```diff
-           this.He || (this.He = !0, wR.delete(this), this.sA.length = 0, this.dVR())
-         }, this.cyR = RR, this.sessionId = RR.sessionId, wR.set(this, []), this.dVR = this.kVR()
+           this.vU || (this.vU = !0, mr.delete(this), this.bK.length = 0, this.Sxr())
+         }, this.pZr = rr, this.sessionId = rr.sessionId, mr.set(this, []), this.Sxr = this.Wxr()
```

#### 19. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L87-L88` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L87-L88) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L87-L88)

```diff
-       QVR(RR) {
-         this.dVR(), this.cyR = RR, this.sessionId = RR.sessionId, this.HA = 0, this.uZR = 0, this.dVR = this.kVR()
+       axr(rr) {
+         this.Sxr(), this.pZr = rr, this.sessionId = rr.sessionId, this.iK = 0, this.pjr = 0, this.Sxr = this.Wxr()
```

#### 20. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L91)

```diff
-         return this.uZR
+         return this.pjr
```

#### 21. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L93-L95` → after: `L93-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L93-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L93-L95) · [Before (L93-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L93-L95)

```diff
-       kVR() {
-         const RR = this.cyR.DW("*", this.EVR);
-         return this.options.SVR && this.cyR.oW(this.dispose), RR
+       Wxr() {
+         const rr = this.pZr.rK("*", this.Qxr);
+         return this.options.upr && this.pZr.WK(this.dispose), rr
```

#### 22. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L97)

```diff
-       YVR(RR, JR) {
+       Zxr(rr, Sr) {
```

#### 23. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L99` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L99) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L99)

```diff
-           (0, fR.hc)(RR) && (JR = (0, fR.b)(RR, VR.GK.from(JR)));
+           (0, Er.Bc)(rr) && (Sr = (0, Er.d)(rr, pr.Dp.from(Sr)));
```

#### 24. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L102-L103` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L102-L103) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L102-L103)

```diff
-             if (this.callbacks.FVR) return void this.callbacks.FVR(RR, JR);
-             throw new Error(`No onMessage handler registered for message id ${RR}`)
+             if (this.callbacks.jxr) return void this.callbacks.jxr(rr, Sr);
+             throw new Error(`No onMessage handler registered for message id ${rr}`)
```

#### 25. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L107)

```diff
-           this.callbacks.TVR(`Error in onMessage ${RR} with payload ${JSON.stringify(JR)}`, GR)
+           this.callbacks.fxr(`Error in onMessage ${rr} with payload ${JSON.stringify(Sr)}`, Qr)
```

#### 26. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L109)

```diff
-           this.HA++
+           this.iK++
```

#### 27. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L112)

```diff
-       sVR() {
+       Exr() {
```

#### 28. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L117-L119` → after: `L117-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L117-L119) · [Before (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L117-L119)

```diff
-           of this.sA) {
-           if (this.He) break;
-           this.YVR(RR, JR)
+           of this.bK) {
+           if (this.vU) break;
+           this.Zxr(rr, Sr)
```

#### 29. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L121)

```diff
-         this.sA.length = 0
+         this.bK.length = 0
```

#### 30. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L124` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L124) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L124)

```diff
-         return this.He
+         return this.vU
```

#### 31. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L126-L127` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L126-L127) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L126-L127)

```diff
-       hVR() {
-         if (this.jVR || this.He) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
+       pxr() {
+         if (this.rxr || this.vU) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
```

#### 32. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L129-L131` → after: `L129-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L129-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L129-L131) · [Before (L129-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L129-L131)

```diff
-           DW: (RR, JR) => {
-             if (this.jVR || this.He) throw new Error("Trying to call onMessage after registration finished");
-             this.DW(RR, JR)
+           rK: (rr, Sr) => {
+             if (this.rxr || this.vU) throw new Error("Trying to call onMessage after registration finished");
+             this.rK(rr, Sr)
```

#### 33. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L134-L135` → after: `L134-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L134-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L134-L135) · [Before (L134-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L134-L135)

```diff
-             if (this.He) throw new Error("Cannot finish message registration after disposal");
-             this.jVR = !0, this.sVR()
+             if (this.vU) throw new Error("Cannot finish message registration after disposal");
+             this.rxr = !0, this.Exr()
```

#### 34. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L141)

```diff
-         null === (GR = (yR = this.callbacks).RKR) || void 0 === GR || GR.call(yR);
+         null === (Qr = (Zr = this.callbacks).xxr) || void 0 === Qr || Qr.call(Zr);
```

#### 35. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L147` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L147) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L147)

```diff
-         this.JKR(), (0, KR.z)(JR) ? this.cyR.rC(RR, JR) : this.cyR.send(RR, JR)
+         this.mxr(), (0, xr.B)(Sr) ? this.pZr.Uy(rr, Sr) : this.pZr.send(rr, Sr)
```

#### 36. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L149` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L149) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L149)

```diff
-       JKR() {
+       mxr() {
```

#### 37. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L151)

```diff
-         (this.uZR++, 5 === eR++) && (null === (RR = (JR = this.callbacks).RKR) || void 0 === RR || RR.call(JR), eR = 0)
+         (this.pjr++, 5 === Ur++) && (null === (rr = (Sr = this.callbacks).xxr) || void 0 === rr || rr.call(Sr), Ur = 0)
```

#### 38. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L154)

```diff
-         this.dispose(), this.cyR.IU()
+         this.dispose(), this.pZr.hY()
```

#### 39. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L157)

```diff
-         this.dispose(), this.cyR.leave()
+         this.dispose(), this.pZr.leave()
```

#### 40. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L161` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L161) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L161)

```diff
-     var aR = GR(2442);
+     var tr = Qr(2385);
```

#### 41. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L165-L166` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L165-L166) · [Before (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L165-L166)

```diff
-           RKR: () => {
-             (0, qR.o)(!0) && (0, yR.dW)()
+           xxr: () => {
+             (0, Ir.r)(!0) && (0, Zr.hK)()
```

#### 42. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L168)

```diff
-           TVR: (RR, JR) => {
+           fxr: (rr, Sr) => {
```

#### 43. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L170)

```diff
-             null === (GR = (0, iR.i)()) || void 0 === GR || GR.Ia(RR, JR)
+             null === (Qr = (0, fr.e)()) || void 0 === Qr || Qr.Xt(rr, Sr)
```

#### 44. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L173-L174` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L173-L174) · [Before (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L173-L174)

```diff
-           SVR: !1
-         }), (0, aR.g)(RR)
+           upr: !1
+         }), (0, tr.e)(rr)
```

#### 45. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L177)

```diff
-         return !!(0, aR.l)((0, aR.e)(), this.cyR, RR, JR) && (this.JKR(), !0)
+         return !!(0, tr.h)((0, tr.b)(), this.pZr, rr, Sr) && (this.mxr(), !0)
```

#### 46. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L179-L180` → after: `L179-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L179-L180) · [Before (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L179-L180)

```diff
-       QVR(RR) {
-         this.GKR(), super.QVR(RR), (0, aR.g)(RR)
+       axr(rr) {
+         this.Nxr(), super.axr(rr), (0, tr.e)(rr)
```

#### 47. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L183` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L183) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L183)

```diff
-         super.IU(), this.GKR()
+         super.hY(), this.Nxr()
```

#### 48. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L185-L186` → after: `L185-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L185-L186) · [Before (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L185-L186)

```diff
-       GKR() {
-         this.cyR.jU.VK.jD = void 0
+       Nxr() {
+         this.pZr.TY.Ix.oR = void 0
```

#### 49. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L189-L197` → after: `L189-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L189-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L189-L197) · [Before (L189-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L189-L197)

```diff
-     var nR = GR(32),
-       UR = GR(2163),
-       WR = GR(1943),
-       AR = GR(37616),
-       CR = GR(40209),
-       XR = GR(39207),
-       MR = GR(38977),
-       BR = GR(679),
-       lR = GR(39568);
+     var zr = Qr(34),
+       Yr = Qr(2114),
+       nr = Qr(1885),
+       er = Qr(37992),
+       Kr = Qr(40540),
+       yr = Qr(39533),
+       Br = Qr(39311),
+       Tr = Qr(688),
+       vr = Qr(39899);
```

#### 50. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L216-L217` → after: `L216-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L216-L217) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L216-L217)

```diff
-       RR.client.gameRecorder.isCapturing() ? (0, lR.mb)(yR, (0, lR.jb)(yR), tR) : RR.xw.NK.Qp(yR, {
-         Yk: tR,
+       rr.client.gameRecorder.isCapturing() ? (0, vr.ob)(Zr, (0, vr.kb)(Zr), Wr) : rr.gm.qx.cL(Zr, {
+         pw: Wr,
```

#### 51. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L226-L229` → after: `L226-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L226-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L226-L229) · [Before (L226-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L226-L229)

```diff
-             for (let JR = (0, BR.X)(GR[ZR]); JR <= (0, BR.X)(GR[ZR + 3]); JR++)
-               for (let yR = (0, BR.X)(GR[ZR + 1]); yR <= (0, BR.X)(GR[ZR + 4]); yR++)
-                 for (let qR = (0, BR.X)(GR[ZR + 2]); qR <= (0, BR.X)(GR[ZR + 5]); qR++) {
-                   const GR = `${JR}|${yR}|${qR}`;
+             for (let Sr = (0, Tr.U)(Qr[jr]); Sr <= (0, Tr.U)(Qr[jr + 3]); Sr++)
+               for (let Zr = (0, Tr.U)(Qr[jr + 1]); Zr <= (0, Tr.U)(Qr[jr + 4]); Zr++)
+                 for (let Ir = (0, Tr.U)(Qr[jr + 2]); Ir <= (0, Tr.U)(Qr[jr + 5]); Ir++) {
+                   const Qr = `${Sr}|${Zr}|${Ir}`;
```

#### 52. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L234` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L234) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L234)

```diff
-       }), RR.xw.zJR()
+       }), rr.gm.NSr()
```

#### 53. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L238)

```diff
-       RR.lyR = new Set, RR.byR = new Set, RR.pyR = new Set, RR.vyR = new Set, RR.gyR = [], RR.OyR = [], RR.Rk = new Set, RR.jG = [], RR.Zk = []
+       rr.dQr = new Set, rr.SZr = new Set, rr.sQr = new Set, rr.ZZr = new Set, rr.uQr = [], rr.WZr = [], rr.GV = new Set, rr.uQ = [], rr.VV = []
```

#### 54. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L242)

```diff
-         this.xw = RR
+         this.gm = rr
```

#### 55. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L245-L265` → after: `L245-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L245-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L245-L265) · [Before (L245-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L245-L265)

```diff
-         const JR = this.xw,
-           GR = (0, iR.e)();
-         RR.DW(fR.Q, (RR => {
-           JR.NK.lyR.add(RR), JR.NK.byR.delete(RR)
-         })), RR.DW(fR.Z, (RR => {
-           JR.NK.byR.add(RR), JR.NK.lyR.delete(RR)
-         })), RR.DW(fR.ke, (RR => {
-           JR.NK.byR.delete(RR), JR.NK.lyR.delete(RR)
-         })), RR.DW(fR.V, (RR => {
-           JR.NK.pyR.add(RR), JR.NK.vyR.delete(RR)
-         })), RR.DW(fR.db, (RR => {
-           JR.NK.vyR.add(RR), JR.NK.pyR.delete(RR)
-         })), RR.DW(fR.pe, (RR => {
-           JR.NK.vyR.delete(RR), JR.NK.pyR.delete(RR)
-         })), RR.DW(fR.R, (RR => {
-           (0, KR.$)(RR, JR.NK.OyR), (0, KR.$)(RR, JR.NK.gyR), JR.NK.gyR.push(RR)
- ... (5 more removed lines; see GitHub link above)
+         const Sr = this.gm,
+           Qr = (0, fr.c)();
+         rr.rK(Er.bb, (rr => {
+           Sr.qx.dQr.add(rr), Sr.qx.SZr.delete(rr)
+         })), rr.rK(Er.gb, (rr => {
+           Sr.qx.SZr.add(rr), Sr.qx.dQr.delete(rr)
+         })), rr.rK(Er.oe, (rr => {
+           Sr.qx.SZr.delete(rr), Sr.qx.dQr.delete(rr)
+         })), rr.rK(Er.fb, (rr => {
+           Sr.qx.sQr.add(rr), Sr.qx.ZZr.delete(rr)
+         })), rr.rK(Er.ob, (rr => {
+           Sr.qx.ZZr.add(rr), Sr.qx.sQr.delete(rr)
+         })), rr.rK(Er.ve, (rr => {
+           Sr.qx.ZZr.delete(rr), Sr.qx.sQr.delete(rr)
+         })), rr.rK(Er.cb, (rr => {
+           (0, xr.hb)(rr, Sr.qx.WZr), (0, xr.hb)(rr, Sr.qx.uQr), Sr.qx.uQr.push(rr)
+ ... (5 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L267-L268` → after: `L267-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L267-L268) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L267-L268)

```diff
-             Jt: GR,
-             Gt: yR
+             QW: Qr,
+             ZW: Zr
```

#### 57. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L270-L271` → after: `L270-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L270-L271) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L270-L271)

```diff
-           yR ? JR.NK.Rk.delete(GR) : JR.NK.Rk.add(GR)
-         })), RR.DW(fR.Hf, (RR => {
+           Zr ? Sr.qx.GV.delete(Qr) : Sr.qx.GV.add(Qr)
+         })), rr.rK(Er.Yf, (rr => {
```

#### 58. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L273-L274` → after: `L273-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L273-L274) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L273-L274)

```diff
-             jG: yR,
-             dG: tR
+             uQ: Zr,
+             rZ: Wr
```

#### 59. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L276` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L276) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L276)

```diff
-           GR.updateWalkThroughRect(JR.WH, yR, tR)
+           Qr.updateWalkThroughRect(Sr.fC, Zr, Wr)
```

#### 60. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L278-L281` → after: `L278-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L278-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L278-L281) · [Before (L278-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L278-L281)

```diff
-           gR(JR.NK)
-         })), RR.DW(fR.bc, (RR => {
-           XR.e.applyServerUpdate(RR)
-         })), RR.DW(fR.jb, (RR => {
+           Lr(Sr.qx)
+         })), rr.rK(Er.uc, (rr => {
+           yr.c.applyServerUpdate(rr)
+         })), rr.rK(Er.rb, (rr => {
```

#### 61. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L285-L286` → after: `L285-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L285-L286) · [Before (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L285-L286)

```diff
-                   rJ: GR,
-                   eJ: yR
+                   zS: Qr,
+                   YS: Zr
```

#### 62. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L289` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L289) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L289)

```diff
-                 const JR = MR.c[yR];
+                 const Sr = Br.d[Zr];
```

#### 63. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L297` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L297) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L297)

```diff
-                   RR.lD(GR[0] - yR, GR[1] - tR, GR[2] - uR, ZR)
+                   rr.fR(Qr[0] - Zr, Qr[1] - Wr, Qr[2] - ar, jr)
```

#### 64. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L301-L303` → after: `L301-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L301-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L301-L303) · [Before (L301-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L301-L303)

```diff
-                   rJ: GR,
-                   eJ: yR,
-                   aJ: tR
+                   zS: Qr,
+                   YS: Zr,
+                   nS: Wr
```

#### 65. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L307` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L307) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L307)

```diff
-           })), nR.n.JK("changeBlockFail", RR), nR.n.JK("blockChangeRefused"), GR.client.triggerGameCallback("onChangeBlockFail", RR), nR.n.JK("EditBoard", {
+           })), zr.i.Jp("changeBlockFail", rr), zr.i.Jp("blockChangeRefused"), Qr.client.triggerGameCallback("onChangeBlockFail", rr), zr.i.Jp("EditBoard", {
```

#### 66. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L309` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L309) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L309)

```diff
-           }), nR.n.JK("EditCodeBlock", {
+           }), zr.i.Jp("EditCodeBlock", {
```

#### 67. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L316)

```diff
-             pR(GR, XR.e, RR)
+             Or(Qr, yr.c, rr)
```

#### 68. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L319` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L319) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L319)

```diff
-         RR.DW(fR.Cb, tR), RR.DW(fR.Ub, tR), RR.DW(fR.zf, (RR => {
+         rr.rK(Er.Vb, Wr), rr.rK(Er.lc, Wr), rr.rK(Er.Of, (rr => {
```

#### 69. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L321-L322` → after: `L321-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L321-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L321-L322) · [Before (L321-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L321-L322)

```diff
-             nu: JR,
-             Uu: yR
+             Na: Sr,
+             Ua: Zr
```

#### 70. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L324-L326` → after: `L324-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L324-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L324-L326) · [Before (L324-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L324-L326)

```diff
-           if (GR.lT(JR[0], JR[1], JR[2])) {
-             const RR = (0, iR.e)().rW(JR[0], JR[1], JR[2]);
-             (0, iR.e)().updateMailboxContents(JR[0], JR[1], JR[2], RR, yR)
+           if (Qr.aJ(Sr[0], Sr[1], Sr[2])) {
+             const rr = (0, fr.c)().VY(Sr[0], Sr[1], Sr[2]);
+             (0, fr.c)().updateMailboxContents(Sr[0], Sr[1], Sr[2], rr, Zr)
```

#### 71. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L328` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L328) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L328)

```diff
-         })), RR.DW(fR.Ke, (RR => {
+         })), rr.rK(Er.Qe, (rr => {
```

#### 72. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L333)

```diff
-           GR.blockDataOwner.setBlockData(JR[0], JR[1], JR[2], yR), GR.blockAdded(JR[0], JR[1], JR[2], GR.rW(JR[0], JR[1], JR[2]))
+           Qr.blockDataOwner.setBlockData(Sr[0], Sr[1], Sr[2], Zr), Qr.blockAdded(Sr[0], Sr[1], Sr[2], Qr.VY(Sr[0], Sr[1], Sr[2]))
```

#### 73. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L337-L341` → after: `L337-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L337-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L337-L341) · [Before (L337-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L337-L341)

```diff
-     var vR = GR(38267),
-       OR = GR(37494),
-       xR = GR(39227),
-       NR = GR(39077),
-       DR = GR(39245);
+     var Xr = Qr(38630),
+       Pr = Qr(37866),
+       Hr = Qr(39580),
+       qr = Qr(39417),
+       Rr = Qr(39604);
```

#### 74. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L344` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L344) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L344)

```diff
-         this.xw = RR, this.setUpQueuedEntity = JR
+         this.gm = rr, this.setUpQueuedEntity = Sr
```

#### 75. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L347-L349` → after: `L347-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L347-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L347-L349) · [Before (L347-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L347-L349)

```diff
-         const JR = this.xw,
-           GR = (0, iR.e)();
-         RR.DW(fR.P, (RR => {
+         const Sr = this.gm,
+           Qr = (0, fr.c)();
+         rr.rK(Er._, (rr => {
```

#### 76. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L351-L352` → after: `L351-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L351-L352) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L351-L352)

```diff
-             RR: JR,
-             JR: GR
+             rr: Sr,
+             Sr: Qr
```

#### 77. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L354)

```diff
-           this.setUpQueuedEntity(JR), JR = (0, OR.d)(JR), (0, iR.e)().client.gameRecorder.recordBulletShot(JR, GR), nR.n.JK(`bulletShot|${JR}`, {
+           this.setUpQueuedEntity(Sr), Sr = (0, Pr.e)(Sr), (0, fr.c)().client.gameRecorder.recordBulletShot(Sr, Qr), zr.i.Jp(`bulletShot|${Sr}`, {
```

#### 78. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L357)

```diff
-         })), RR.DW(fR.fc, (RR => {
+         })), rr.rK(Er.xc, (rr => {
```

#### 79. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L359-L360` → after: `L359-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L359-L360) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L359-L360)

```diff
-             gt: JR,
-             bt: GR
+             BW: Sr,
+             TW: Qr
```

#### 80. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L362-L363` → after: `L362-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L362-L363) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L362-L363)

```diff
-           nR.n.JK("damagedByOtherPlayer", {
-             gt: JR,
+           zr.i.Jp("damagedByOtherPlayer", {
+             BW: Sr,
```

#### 81. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L366-L367` → after: `L366-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L366-L367) · [Before (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L366-L367)

```diff
-         })), RR.DW(fR.Bd, (RR => {
-           nR.n.JK("playerKilled", RR, !0), (0, OR.l)(RR.killerEId) && !(0, OR.l)(RR.deadEId) && nR.n.JK("sessionReplayPlayerKill", {
+         })), rr.rK(Er.Qd, (rr => {
+           zr.i.Jp("playerKilled", rr, !0), (0, Pr.j)(rr.killerEId) && !(0, Pr.j)(rr.deadEId) && zr.i.Jp("sessionReplayPlayerKill", {
```

#### 82. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L369-L372` → after: `L369-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L369-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L369-L372) · [Before (L369-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L369-L372)

```diff
-           }), (0, iR.e)().client.gameRecorder.recordPlayerKilled(RR.deadEId, RR.killerEId, RR.withItem, RR.killstreak)
-         })), RR.DW(fR.Ib, (RR => {
-           nR.n.JK("customKillfeed", RR, !0), (0, iR.e)().client.gameRecorder.recordCustomKillfeed(RR.killer, RR.victim, RR.withItem)
-         })), RR.DW(fR.Md, (RR => {
+           }), (0, fr.c)().client.gameRecorder.recordPlayerKilled(rr.deadEId, rr.killerEId, rr.withItem, rr.killstreak)
+         })), rr.rK(Er._b, (rr => {
+           zr.i.Jp("customKillfeed", rr, !0), (0, fr.c)().client.gameRecorder.recordCustomKillfeed(rr.killer, rr.victim, rr.withItem)
+         })), rr.rK(Er.Yd, (rr => {
```

#### 83. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L374-L375` → after: `L374-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L374-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L374-L375) · [Before (L374-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L374-L375)

```diff
-             Gy: GR,
-             yy: yR
+             pZ: Qr,
+             xZ: Zr
```

#### 84. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L378` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L378) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L378)

```diff
-           const tR = JR.zC.uyR(GR);
+           const Wr = Sr.YB.XQr(Qr);
```

#### 85. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L380` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L380) · [Before (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L380)

```diff
-         })), RR.DW(fR.Fe, (RR => {
+         })), rr.rK(Er.Le, (rr => {
```

#### 86. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L382-L383` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L382-L383) · [Before (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L382-L383)

```diff
-             xJ: GR,
-             NJ: yR
+             GS: Qr,
+             kS: Zr
```

#### 87. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L385-L387` → after: `L385-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L385-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L385-L387) · [Before (L385-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L385-L387)

```diff
-           const tR = yR ? (0, DR.f)(JR, yR) : void 0;
-           nR.n.JK("sendHitmarker", {
-             xJ: GR,
+           const Wr = Zr ? (0, Rr.g)(Sr, Zr) : void 0;
+           zr.i.Jp("sendHitmarker", {
+             GS: Qr,
```

#### 88. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L390` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L390) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L390)

```diff
-         })), RR.DW(fR.Ic, (RR => {
+         })), rr.rK(Er.cd, (rr => {
```

#### 89. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L392-L398` → after: `L392-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L392-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L392-L398) · [Before (L392-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L392-L398)

```diff
-             ot: yR,
-             ct: tR,
-             zt: uR,
-             St: ZR,
-             jt: qR,
-             dt: iR,
-             Et: fR
+             HW: Zr,
+             qW: Wr,
+             gW: ar,
+             MW: jr,
+             GW: Ir,
+             kW: fr,
+             AW: Er
```

#### 90. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L400-L402` → after: `L400-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L400-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L400-L402) · [Before (L400-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L400-L402)

```diff
-           this.setUpQueuedEntity(yR), yR = (0, OR.d)(yR);
-           const VR = JR.zC.sGR(yR);
-           if (VR && (VR.lastHurtTime = performance.now()), (0, xR.playRigHurt)(JR, yR, iR), nR.n.JK("lifeformHurt", {
+           this.setUpQueuedEntity(Zr), Zr = (0, Pr.e)(Zr);
+           const pr = Sr.YB.yQr(Zr);
+           if (pr && (pr.lastHurtTime = performance.now()), (0, Hr.playRigHurt)(Sr, Zr, fr), zr.i.Jp("lifeformHurt", {
```

#### 91. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L404` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L404) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L404)

```diff
-               Et: fR
+               AW: Er
```

#### 92. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L406-L408` → after: `L406-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L406-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L406-L408) · [Before (L406-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L406-L408)

```diff
-             const RR = (0, DR.f)(JR, tR.NJ);
-             nR.n.JK("yourAttackHit", {
-               xJ: ZR,
+             const rr = (0, Rr.g)(Sr, Wr.kS);
+             zr.i.Jp("yourAttackHit", {
+               GS: jr,
```

#### 93. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L410` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L410) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L410)

```diff
-               hitSelf: yR === JR.WH
+               hitSelf: Zr === Sr.fC
```

#### 94. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L413-L414` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L413-L414) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L413-L414)

```diff
-           yR === JR.WH && (GR.shakePlayerCamera(yR, qR / 40, 200), nR.n.JK("closeShopOnDamaged", null), nR.n.JK("damagedByOtherPlayer", {
-             gt: null,
+           Zr === Sr.fC && (Qr.shakePlayerCamera(Zr, Ir / 40, 200), zr.i.Jp("closeShopOnDamaged", null), zr.i.Jp("damagedByOtherPlayer", {
+             BW: null,
```

#### 95. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L416)

```diff
-             jt: qR
+             GW: Ir
```

#### 96. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L418` → after: `L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L418) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L418)

```diff
-           const KR = JR.zC.vW(yR);
+           const xr = Sr.YB.JY(Zr);
```

#### 97. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L421` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L421) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L421)

```diff
-             uR && (0, NR.k)(JR, NR.A, RR, 15), ZR && (0, NR.k)(JR, NR.p, RR, 10)
+             ar && (0, qr.i)(Sr, qr.x, rr, 15), jr && (0, qr.i)(Sr, qr.n, rr, 10)
```

#### 98. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L423` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L423) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L423)

```diff
-         })), RR.DW(fR.Fc, (RR => {
+         })), rr.rK(Er._c, (rr => {
```

#### 99. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L425-L427` → after: `L425-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L425-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L425-L427) · [Before (L425-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L425-L427)

```diff
-             Gu: GR,
-             yu: yR,
-             tu: tR
+             dW: Qr,
+             sW: Zr,
+             uW: Wr
```

#### 100. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L429-L432` → after: `L429-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L429-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L429-L432) · [Before (L429-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L429-L432)

```diff
-           (0, vR.c)(JR).setHealthFrac((0, OR.d)(GR), tR), nR.n.JK("lifeformHealthChanged", {
-             eId: (0, OR.d)(GR),
-             yu: yR,
-             tu: tR
+           (0, Xr.b)(Sr).setHealthFrac((0, Pr.e)(Qr), Wr), zr.i.Jp("lifeformHealthChanged", {
+             eId: (0, Pr.e)(Qr),
+             sW: Zr,
+             uW: Wr
```

#### 101. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L434)

```diff
-         })), RR.DW(fR.K, (RR => {
+         })), rr.rK(Er.U, (rr => {
```

#### 102. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L436-L437` → after: `L436-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L436-L437) · [Before (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L436-L437)

```diff
-             wt: GR,
-             rt: yR
+             xW: Qr,
+             mW: Zr
```

#### 103. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L439-L441` → after: `L439-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L439-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L439-L441) · [Before (L439-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L439-L441)

```diff
-           (0, iR.e)().playerAttacked(JR.WH, GR, yR)
-         })), RR.DW(fR.lb, (() => {
-           const RR = JR.zC.uyR(JR.WH);
+           (0, fr.c)().playerAttacked(Sr.fC, Qr, Zr)
+         })), rr.rK(Er.zb, (() => {
+           const rr = Sr.YB.XQr(Sr.fC);
```

#### 104. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L443)

```diff
-         })), RR.DW(fR.Nb, (RR => {
+         })), rr.rK(Er.gc, (rr => {
```

#### 105. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L445-L450` → after: `L445-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L445-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L445-L450) · [Before (L445-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L445-L450)

```diff
-             tZ: JR,
-             uZ: GR,
-             ZZ: yR,
-             qZ: tR,
-             iZ: uR,
-             fZ: ZR
+             ua: Sr,
+             rj: Qr,
+             Sj: Zr,
+             Qj: Wr,
+             Zj: ar,
+             Wj: jr
```

#### 106. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L452` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L452) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L452)

```diff
-           JR = (0, OR.d)(JR), (0, iR.e)().client.updateEffect(JR, GR, {
+           Sr = (0, Pr.e)(Sr), (0, fr.c)().client.updateEffect(Sr, Qr, {
```

#### 107. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L458)

```diff
-         })), RR.DW(fR.Qd, (RR => {
+         })), rr.rK(Er.Zd, (rr => {
```

#### 108. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L460-L461` → after: `L460-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L460-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L460-L461) · [Before (L460-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L460-L461)

```diff
-             tZ: JR,
-             uZ: GR
+             ua: Sr,
+             rj: Qr
```

#### 109. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L463-L465` → after: `L463-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L463-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L463-L465) · [Before (L463-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L463-L465)

```diff
-           JR = (0, OR.d)(JR), (0, iR.e)().client.removeEffect(JR, GR)
-         })), RR.DW(fR.vf, (RR => {
-           nR.n.JK("ttbEffectMultiplier", RR)
+           Sr = (0, Pr.e)(Sr), (0, fr.c)().client.removeEffect(Sr, Qr)
+         })), rr.rK(Er.Jf, (rr => {
+           zr.i.Jp("ttbEffectMultiplier", rr)
```

#### 110. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L469-L478` → after: `L469-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L469-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L469-L478) · [Before (L469-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L469-L478)

```diff
-     var oR = GR(40240),
-       cR = GR(38265),
-       PR = GR(2997),
-       IR = GR(39256),
-       mR = GR(37466),
-       zR = GR(37470),
-       SR = GR(38178),
-       jR = GR(38296),
-       dR = GR(39259),
-       ER = GR(40246);
+     var Cr = Qr(40561),
+       Mr = Qr(38625),
+       Gr = Qr(2968),
+       kr = Qr(39609),
+       Ar = Qr(37843),
+       Vr = Qr(37851),
+       ir = Qr(38541),
+       wr = Qr(38659),
+       cr = Qr(39612),
+       Fr = Qr(40563);
```

#### 111. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L481)

```diff
-         this.xw = RR, this.setUpQueuedEntity = JR
+         this.gm = rr, this.setUpQueuedEntity = Sr
```

#### 112. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L484-L486` → after: `L484-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L484-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L484-L486) · [Before (L484-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L484-L486)

```diff
-         const JR = this.xw,
-           GR = (0, iR.e)();
-         RR.DW(fR.Vc, (RR => {
+         const Sr = this.gm,
+           Qr = (0, fr.c)();
+         rr.rK(Er.nd, (rr => {
```

#### 113. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L491-L494` → after: `L491-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L491-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L491-L494) · [Before (L491-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L491-L494)

```diff
-           (0, jR.h)(GR);
-           for (const JR in yR)(0, jR.d)(GR, JR, yR[JR]);
-           if ("canSee" in yR && JR.zC.RGR(GR, "hidingMeshManager")) {
-             const RR = JR.zC.getState(GR, "hidingMeshManager");
+           (0, wr.d)(Qr);
+           for (const Sr in Zr)(0, wr.c)(Qr, Sr, Zr[Sr]);
+           if ("canSee" in Zr && Sr.YB.TSr(Qr, "hidingMeshManager")) {
+             const rr = Sr.YB.getState(Qr, "hidingMeshManager");
```

#### 114. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L497` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L497) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L497)

```diff
-         })), RR.DW(fR.D, (RR => {
+         })), rr.rK(Er.K, (rr => {
```

#### 115. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L499-L500` → after: `L499-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L499-L500) · [Before (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L499-L500)

```diff
-             fG: GR,
-             VG: yR,
+             hQ: Qr,
+             zQ: Zr,
```

#### 116. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L502-L505` → after: `L502-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L502-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L502-L505) · [Before (L502-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L502-L505)

```diff
-             KG: uR,
-             wG: ZR,
-             rG: qR,
-             eG: fR
+             YQ: ar,
+             nQ: jr,
+             eQ: Ir,
+             KQ: Er
```

#### 117. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L507-L515` → after: `L507-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L507-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L507-L515) · [Before (L507-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L507-L515)

```diff
-           GR = (0, OR.d)(GR);
-           const VR = null === tR && null !== qR ? (0, oR.h)(qR, fR) : tR;
-           (0, iR.e)().client.gameRecorder.recordAnimateEntity(GR, yR, VR, uR, ZR), (0, vR.c)(JR).animations.animateEntity(GR, yR, tR, uR, ZR, qR, fR), null !== tR || GR === JR.WH && yR === cR.h.Emote && (0, iR.e)().client.cameraController.endTemporaryThirdPerson()
-         })), RR.DW(fR.De, (RR => {
-           (0, ER.b)(RR)
-         })), RR.DW(fR.yd, (RR => {
-           for (const JR of RR)(0, IR.x)(JR);
-           nR.n.JK("playerCosmeticsUpdated", RR, !0)
-         })), RR.DW(fR.J, (RR => {
+           Qr = (0, Pr.e)(Qr);
+           const pr = null === Wr && null !== Ir ? (0, Cr.f)(Ir, Er) : Wr;
+           (0, fr.c)().client.gameRecorder.recordAnimateEntity(Qr, Zr, pr, ar, jr), (0, Xr.b)(Sr).animations.animateEntity(Qr, Zr, Wr, ar, jr, Ir, Er), null !== Wr || Qr === Sr.fC && Zr === Mr.i.Emote && (0, fr.c)().client.cameraController.endTemporaryThirdPerson()
+         })), rr.rK(Er.He, (rr => {
+           (0, Fr.e)(rr)
+         })), rr.rK(Er.Od, (rr => {
+           for (const Sr of rr)(0, kr.A)(Sr);
+           zr.i.Jp("playerCosmeticsUpdated", rr, !0)
+         })), rr.rK(Er.R, (rr => {
```

#### 118. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L517-L521` → after: `L517-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L517-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L517-L521) · [Before (L517-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L517-L521)

```diff
-         })), RR.DW(fR.Zc, (RR => {
-           (0, NR.o)(JR, (0, KR.o)(RR))
-         })), RR.DW(fR.$c, (RR => {
-           PR.h[RR.Kt] ? (0, NR.o)(JR, {
-             ...PR.h[RR.Kt],
+         })), rr.rK(Er.od, (rr => {
+           (0, qr.j)(Sr, (0, xr.t)(rr))
+         })), rr.rK(Er.qd, (rr => {
+           Gr.f[rr.pW] ? (0, qr.j)(Sr, {
+             ...Gr.f[rr.pW],
```

#### 119. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L524-L525` → after: `L524-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L524-L525) · [Before (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L524-L525)

```diff
-           }) : console.error(`Unknown preset id: ${RR.Kt}`)
-         })), RR.DW(fR.vd, (RR => {
+           }) : console.error(`Unknown preset id: ${rr.pW}`)
+         })), rr.rK(Er.Kd, (rr => {
```

#### 120. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L528-L531` → after: `L528-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L528-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L528-L531) · [Before (L528-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L528-L531)

```diff
-             YG: yR,
-             kG: tR,
-             QG: uR,
-             FG: ZR
+             SZ: Zr,
+             QZ: Wr,
+             ZZ: ar,
+             WZ: jr
```

#### 121. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L533-L535` → after: `L533-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L533-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L533-L535) · [Before (L533-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L533-L535)

```diff
-             sG: qR,
-             hG: fR
-           } = null !== ZR && void 0 !== ZR ? ZR : {};
+             jZ: Ir,
+             IZ: Er
+           } = null !== jr && void 0 !== jr ? jr : {};
```

#### 122. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L537-L540` → after: `L537-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L537-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L537-L540) · [Before (L537-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L537-L540)

```diff
-             TG: VR
-           } = null !== ZR && void 0 !== ZR ? ZR : {};
-           qR = null !== (JR = qR) && void 0 !== JR ? JR : void 0, fR = null !== (GR = fR) && void 0 !== GR ? GR : void 0, "string" === typeof VR && this.setUpQueuedEntity(VR), (0, iR.e)().client.gameRecorder.recordPlaySound(yR, tR, uR, ZR), mR.d.play((0, zR.f)(yR), tR, VR, qR, fR … [truncated]
-         })), RR.DW(fR.Af, (RR => {
+             aZ: pr
+           } = null !== jr && void 0 !== jr ? jr : {};
+           Ir = null !== (Sr = Ir) && void 0 !== Sr ? Sr : void 0, Er = null !== (Qr = Er) && void 0 !== Qr ? Qr : void 0, "string" === typeof pr && this.setUpQueuedEntity(pr), (0, fr.c)().client.gameRecorder.recordPlaySound(Zr, Wr, ar, jr), Ar.b.play((0, Vr.c)(Zr), Wr, pr, Ir, Er … [truncated]
+         })), rr.rK(Er.Rf, (rr => {
```

#### 123. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L548-L549` → after: `L548-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L548-L549) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L548-L549)

```diff
-     var kR = GR(38950),
-       QR = GR(38924);
+     var br = Qr(39286),
+       Jr = Qr(39256);
```

#### 124. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L552` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L552) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L552)

```diff
-         this.xw = RR
+         this.gm = rr
```

#### 125. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L555-L556` → after: `L555-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L555-L556) · [Before (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L555-L556)

```diff
-         const JR = this.xw,
-           GR = (0, iR.e)();
+         const Sr = this.gm,
+           Qr = (0, fr.c)();
```

#### 126. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L559` → after: `L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L559) · [Before (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L559)

```diff
-           return JR.zC.PGR(JR.WH)
+           return Sr.YB.fQr(Sr.fC)
```

#### 127. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L561` → after: `L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L561) · [Before (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L561)

```diff
-         RR.DW(fR.rc, (RR => {
+         rr.rK(Er.Lc, (rr => {
```

#### 128. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L563-L571` → after: `L563-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L563-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L563-L571) · [Before (L563-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L563-L571)

```diff
-             et: GR,
-             Lt: yR,
-             nt: tR,
-             Ut: uR,
-             Wt: ZR,
-             Ct: qR,
-             Xt: iR,
-             Mt: fR,
-             Bt: VR
+             NW: Qr,
+             UW: Zr,
+             tW: Wr,
+             hW: ar,
+             zW: jr,
+             YW: Ir,
+             nW: fr,
+             eW: Er,
+             KW: pr
```

#### 129. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L573` → after: `L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L573) · [Before (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L573)

```diff
-           if (!JR.zC.RGR(GR, "itemState")) return void(0, kR.i)(JR, GR, [ZR, qR, iR], yR, {
+           if (!Sr.YB.TSr(Qr, "itemState")) return void(0, br.l)(Sr, Qr, [jr, Ir, fr], Zr, {
```

#### 130. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L576` → after: `L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L576) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L576)

```diff
-             Mt: fR,
+             eW: Er,
```

#### 131. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L579-L585` → after: `L579-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L579-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L579-L585) · [Before (L579-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L579-L585)

```diff
-           const KR = JR.zC.getState(GR, "itemState");
-           KR.amount = tR, KR.Mt = fR, KR.creationTime = Date.now(), (0, QR.setServerPosition)(JR.zC.getState(GR, "smoothToServerPos"), ZR, qR, iR)
-         })), RR.DW(fR.fb, (RR => {
-           (0, vR.c)(JR).setCantPickUp(RR, !0), JR.zC.RGR(RR, "itemState") && (JR.zC.getState(RR, "itemState").Mt = !0)
-         })), RR.DW(fR.ie, (RR => {
-           (0, vR.c)(JR).setCantPickUp(RR, !1), JR.zC.RGR(RR, "itemState") && (JR.zC.getState(RR, "itemState").Mt = !1)
-         })), RR.DW(fR.nd, (RR => {
+           const xr = Sr.YB.getState(Qr, "itemState");
+           xr.amount = Wr, xr.eW = Er, xr.creationTime = Date.now(), (0, Jr.setServerPosition)(Sr.YB.getState(Qr, "smoothToServerPos"), jr, Ir, fr)
+         })), rr.rK(Er.qb, (rr => {
+           (0, Xr.b)(Sr).setCantPickUp(rr, !0), Sr.YB.TSr(rr, "itemState") && (Sr.YB.getState(rr, "itemState").eW = !0)
+         })), rr.rK(Er.me, (rr => {
+           (0, Xr.b)(Sr).setCantPickUp(rr, !1), Sr.YB.TSr(rr, "itemState") && (Sr.YB.getState(rr, "itemState").eW = !1)
+         })), rr.rK(Er.Fd, (rr => {
```

#### 132. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L598` → after: `L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L598) · [Before (L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L598)

```diff
-             typeObj: kR.B[tR],
+             typeObj: br.x[Wr],
```

#### 133. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L601-L602` → after: `L601-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L601-L602) · [Before (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L601-L602)

```diff
-           (0, iR.e)().client.inventoryPrediction.serverChangeApplied(GR)
-         })), RR.DW(fR.Ue, (RR => {
+           (0, fr.c)().client.inventoryPrediction.serverChangeApplied(Qr)
+         })), rr.rK(Er.ef, (rr => {
```

#### 134. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L610-L614` → after: `L610-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L610-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L610-L614) · [Before (L610-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L610-L614)

```diff
-           const qR = JR.zC.IGR(JR.WH);
-           (GR < qR.playerInventory.numSlots || qR.yG || qR.inCreative) && qR.setItemSlot(GR, yR, tR, uR), (0, iR.e)().client.inventoryPrediction.serverChangeApplied(ZR)
-         })), RR.DW(fR.nc, (RR => {
-           (0, iR.e)().client.inventoryPrediction.acknowledge(RR)
-         })), RR.DW(fR.A, (RR => {
+           const Ir = Sr.YB.EQr(Sr.fC);
+           (Qr < Ir.playerInventory.numSlots || Ir.pQ || Ir.inCreative) && Ir.setItemSlot(Qr, Zr, Wr, ar), (0, fr.c)().client.inventoryPrediction.serverChangeApplied(jr)
+         })), rr.rK(Er.Jc, (rr => {
+           (0, fr.c)().client.inventoryPrediction.acknowledge(rr)
+         })), rr.rK(Er.G, (rr => {
```

#### 135. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L616-L619` → after: `L616-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L616-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L616-L619) · [Before (L616-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L616-L619)

```diff
-             PJ: JR,
-             IJ: GR,
-             mJ: yR,
-             zJ: tR
+             FS: Sr,
+             oS: Qr,
+             bS: Zr,
+             DS: Wr
```

#### 136. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L621-L626` → after: `L621-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L621-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L621-L626) · [Before (L621-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L621-L626)

```diff
-           (0, iR.e)().client.itemDropPrediction.onActionItemDrops(JR, GR, yR, tR)
-         })), RR.DW(fR.xb, (RR => {
-           yR().clearInventory(), (0, iR.e)().client.inventoryPrediction.serverChangeApplied(RR)
-         })), RR.DW(fR.Xe, (RR => {
-           nR.n.JK("setSelectedInventorySlotI", RR, !0)
-         })), RR.DW(fR.rb, (RR => {
+           (0, fr.c)().client.itemDropPrediction.onActionItemDrops(Sr, Qr, Zr, Wr)
+         })), rr.rK(Er.Rb, (rr => {
+           Zr().clearInventory(), (0, fr.c)().client.inventoryPrediction.serverChangeApplied(rr)
+         })), rr.rK(Er.hf, (rr => {
+           zr.i.Jp("setSelectedInventorySlotI", rr, !0)
+         })), rr.rK(Er.Ib, (rr => {
```

#### 137. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L628-L635` → after: `L628-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L628-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L628-L635) · [Before (L628-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L628-L635)

```diff
-             Yt: GR,
-             kt: yR,
-             Qt: tR,
-             Ft: uR,
-             Tt: ZR,
-             st: qR,
-             ht: fR,
-             Ru: VR
+             VW: Qr,
+             iW: Zr,
+             wW: Wr,
+             cW: ar,
+             FW: jr,
+             oW: Ir,
+             bW: Er,
+             JW: pr
```

#### 138. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L637` → after: `L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L637) · [Before (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L637)

```diff
-           const KR = JR.zC.IGR(JR.WH);
+           const xr = Sr.YB.EQr(Sr.fC);
```

#### 139. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L640-L641` → after: `L640-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L640-L641) · [Before (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L640-L641)

```diff
-               GG: RR,
-               iG: JR
+               EQ: rr,
+               tQ: Sr
```

#### 140. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L643` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L643) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L643)

```diff
-             return (0, iR.e)().client.inventoryPrediction.fJR(JR, (() => {
+             return (0, fr.c)().client.inventoryPrediction.Prr(Sr, (() => {
```

#### 141. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L645-L647` → after: `L645-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L645-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L645-L647) · [Before (L645-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L645-L647)

```diff
-             })) && nR.n.JK("chestToggleFromServer", !1, !0), void nR.n.JK("chestRefreshedFromServer")
-           }(GR || KR.yG) && (GR ? (KR.chestOpened(yR, tR, uR, ZR, fR), null !== ZR && (0, iR.e)().client.ironChestPasskeyCache.onChestOpened(uR, ZR)) : KR.chestClosed(), nR.n.JK("chestToggleFromServer", GR, !0))
-         })), RR.DW(fR.Kb, (RR => {
+             })) && zr.i.Jp("chestToggleFromServer", !1, !0), void zr.i.Jp("chestRefreshedFromServer")
+           }(Qr || xr.pQ) && (Qr ? (xr.chestOpened(Zr, Wr, ar, jr, Er), null !== jr && (0, fr.c)().client.ironChestPasskeyCache.onChestOpened(ar, jr)) : xr.chestClosed(), zr.i.Jp("chestToggleFromServer", Qr, !0))
+         })), rr.rK(Er.cc, (rr => {
```

#### 142. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L652)

```diff
-           yR ? GR.craftingManager.editRecipesForPlayer(JR.WH, yR, tR) : GR.craftingManager.resetAllPlayerRecipes(JR.WH), nR.n.JK("craftingRecipesEdited", {
+           Zr ? Qr.craftingManager.editRecipesForPlayer(Sr.fC, Zr, Wr) : Qr.craftingManager.resetAllPlayerRecipes(Sr.fC), zr.i.Jp("craftingRecipesEdited", {
```

#### 143. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L656` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L656) · [Before (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L656)

```diff
-         })), RR.DW(fR.Yd, (RR => {
+         })), rr.rK(Er.ce, (rr => {
```

#### 144. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L658-L660` → after: `L658-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L658-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L658-L660) · [Before (L658-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L658-L660)

```diff
-             uJ: JR,
-             ZJ: GR,
-             qJ: tR
+             jS: Sr,
+             fS: Qr,
+             pS: Wr
```

#### 145. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L662-L663` → after: `L662-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L662-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L662-L663) · [Before (L662-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L662-L663)

```diff
-           yR().removeItemName(JR, GR), (0, iR.e)().client.inventoryPrediction.serverChangeApplied(tR)
-         })), RR.DW(fR.Ud, (RR => {
+           Zr().removeItemName(Sr, Qr), (0, fr.c)().client.inventoryPrediction.serverChangeApplied(Wr)
+         })), rr.rK(Er._d, (rr => {
```

#### 146. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L665` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L665) · [Before (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L665)

```diff
-             tJ: yR
+             aS: Zr
```

#### 147. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L667` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L667) · [Before (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L667)

```diff
-           GR.craftingManager.removeRecipes(JR.WH, yR), nR.n.JK("craftingRecipesEdited", {
+           Qr.craftingManager.removeRecipes(Sr.fC, Zr), zr.i.Jp("craftingRecipesEdited", {
```

#### 148. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L674-L676` → after: `L674-L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L674-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L674-L676) · [Before (L674-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L674-L676)

```diff
-     var TR = GR(7588),
-       sR = GR(38788),
-       hR = GR(385),
+     var dr = Qr(7424),
+       sr = Qr(39120),
+       ur = Qr(388),
```

#### 149. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L678-L681` → after: `L678-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L678-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L678-L681) · [Before (L678-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L678-L681)

```diff
-       JJ = GR(5326),
-       GJ = GR(38853),
-       yJ = GR(39410),
-       tJ = GR(38779);
+       SS = Qr(5287),
+       QS = Qr(39198),
+       ZS = Qr(39747),
+       WS = Qr(39113);
```

#### 150. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L684` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L684) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L684)

```diff
-         this.xw = RR, this.setUpQueuedEntity = JR
+         this.gm = rr, this.setUpQueuedEntity = Sr
```

#### 151. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L687-L689` → after: `L687-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L687-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L687-L689) · [Before (L687-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L687-L689)

```diff
-         const JR = this.xw,
-           GR = (0, iR.e)();
-         RR.DW(fR.of, (RR => {
+         const Sr = this.gm,
+           Qr = (0, fr.c)();
+         rr.rK(Er.Cf, (rr => {
```

#### 152. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L691-L694` → after: `L691-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L691-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L691-L694) · [Before (L691-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L691-L694)

```diff
-             FJ: GR,
-             TJ: tR,
-             sJ: uR,
-             hJ: ZR
+             WQ: Qr,
+             aQ: Wr,
+             jQ: ar,
+             IQ: jr
```

#### 153. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L697-L700` → after: `L697-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L697-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L697-L700) · [Before (L697-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L697-L700)

```diff
-           JR.zC.setPosition(JR.WH, qR), (0, yR.sendColyMessage)(fR.Qg, {
-             TV: GR,
-             sV: JJ.f
-           }), nR.n.JK("localPlayerTeleported", {
+           Sr.YB.setPosition(Sr.fC, Ir), (0, Zr.sendColyMessage)(Er.kh, {
+             wp: Qr,
+             cp: SS.f
+           }), zr.i.Jp("localPlayerTeleported", {
```

#### 154. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L704` → after: `L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L704) · [Before (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L704)

```diff
-         })), RR.DW(fR.hd, (RR => {
+         })), rr.rK(Er.xd, (rr => {
```

#### 155. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L706-L709` → after: `L706-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L706-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L706-L709) · [Before (L706-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L706-L709)

```diff
-             DJ: JR,
-             HJ: GR,
-             oJ: yR,
-             cJ: tR
+             VS: Sr,
+             iS: Qr,
+             wS: Zr,
+             cS: Wr
```

#### 156. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L713` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L713) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L713)

```diff
-           nR.n.JK(`otherPlayerTeleported|${JR}`, {
+           zr.i.Jp(`otherPlayerTeleported|${Sr}`, {
```

#### 157. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L716` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L716) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L716)

```diff
-         })), RR.DW(fR.Fd, (RR => {
+         })), rr.rK(Er.Td, (rr => {
```

#### 158. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L718-L727` → after: `L718-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L718-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L718-L727) · [Before (L718-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L718-L727)

```diff
-             NR: GR,
-             DR: tR,
-             HR: uR,
-             oR: ZR,
-             cR: qR,
-             PR: iR,
-             IR: VR,
-             zR: KR,
-             mR: wR,
-             ER: rR
+             gr: Qr,
+             Cr: Wr,
+             Mr: ar,
+             Gr: jr,
+             kr: Ir,
+             Ar: fr,
+             Vr: pr,
+             wr: xr,
+             ir: mr,
+             br: Nr
```

#### 159. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L730-L736` → after: `L730-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L730-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L730-L736) · [Before (L730-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L730-L736)

```diff
-           JR.zC.setPosition(JR.WH, eR);
-           const aR = JR.zC.aGR(JR.WH),
-             LR = JR.zC.Lk(JR.WH);
-           RJ().set(LR.bY, 0, 0, 0), RJ().set(LR.vY, 0, 0, 0), RJ().set(LR.BL, qR, iR, VR), LR.mY(), aR._flying = null !== rR, rR ? (aR.flyAccel.YR = rR.YR, aR.flyAccel.kR = rR.kR) : aR.flyAccel.reset(), KR && aR.movementType === TR.j.GLIDING && (aR.jR = KR.jR, RJ().copy(aR.dR, KR … [truncated]
-             TV: GR,
-             sV: JJ.f
-           }), nR.n.JK("localPlayerTeleported", {
+           Sr.YB.setPosition(Sr.fC, Ur);
+           const tr = Sr.YB.ASr(Sr.fC),
+             hr = Sr.YB.cV(Sr.fC);
+           rS().set(hr.YV, 0, 0, 0), rS().set(hr.KV, 0, 0, 0), rS().set(hr.Lh, Ir, fr, pr), hr.yV(), tr._flying = null !== Nr, Nr ? (tr.flyAccel.Jr = Nr.Jr, tr.flyAccel.Dr = Nr.Dr) : tr.flyAccel.reset(), xr && tr.movementType === dr.k.GLIDING && (tr.cr = xr.cr, rS().copy(tr.Fr, xr … [truncated]
+             wp: Qr,
+             cp: SS.f
+           }), zr.i.Jp("localPlayerTeleported", {
```

#### 160. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L740` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L740) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L740)

```diff
-         })), RR.DW(fR.$e, (RR => {
+         })), rr.rK(Er.jf, (rr => {
```

#### 161. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L745-L746` → after: `L745-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L745-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L745-L746) · [Before (L745-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L745-L746)

```diff
-           (0, iR.e)().applyRiddenVehicleSettingOverrides(JR, GR)
-         })), RR.DW(fR.Df, (RR => {
+           (0, fr.c)().applyRiddenVehicleSettingOverrides(Sr, Qr)
+         })), rr.rK(Er.Vf, (rr => {
```

#### 162. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L748-L750` → after: `L748-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L748-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L748-L750) · [Before (L748-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L748-L750)

```diff
-             yt: GR,
-             tt: yR,
-             ut: tR
+             WW: Qr,
+             aW: Zr,
+             jW: Wr
```

#### 163. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L752-L753` → after: `L752-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L752-L753) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L752-L753)

```diff
-           const uR = JR.zC.aGR(JR.WH).physicsState.type === TR.k.SLEEPING && GR === TR.k.DEFAULT;
-           (0, iR.e)().updatePositionAndPhysics(JR.WH, {
+           const ar = Sr.YB.ASr(Sr.fC).physicsState.type === dr.n.SLEEPING && Qr === dr.n.DEFAULT;
+           (0, fr.c)().updatePositionAndPhysics(Sr.fC, {
```

#### 164. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L756-L757` → after: `L756-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L756-L757) · [Before (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L756-L757)

```diff
-           }, !0, tR), uR && (0, iR.e)().updateHeldVehicleStatus()
-         })), RR.DW(fR.kb, (RR => {
+           }, !0, Wr), ar && (0, fr.c)().updateHeldVehicleStatus()
+         })), rr.rK(Er.vb, (rr => {
```

#### 165. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L759-L760` → after: `L759-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L759-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L759-L760) · [Before (L759-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L759-L760)

```diff
-             ru: GR,
-             eu: yR
+             Ea: Qr,
+             pa: Zr
```

#### 166. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L762-L763` → after: `L762-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L762-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L762-L763) · [Before (L762-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L762-L763)

```diff
-           JR.zC.oGR(JR.WH).setPose(GR, yR)
-         })), RR.DW(fR.Le, (RR => {
+           Sr.YB.jQr(Sr.fC).setPose(Qr, Zr)
+         })), rr.rK(Er.Te, (rr => {
```

#### 167. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L765-L769` → after: `L765-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L765-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L765-L769) · [Before (L765-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L765-L769)

```diff
-             ZK: GR,
-             eyR: yR
-           } = (0, sR.h)([RR[0], RR[1], RR[2]]);
-           tJ.e.setLookDirection(JR, GR, yR), (0, GJ.t)(GR, yR);
-           const tR = JR.zC.oGR(JR.WH);
+             Qx: Qr,
+             kQr: Zr
+           } = (0, sr.e)([rr[0], rr[1], rr[2]]);
+           WS.e.setLookDirection(Sr, Qr, Zr), (0, QS.v)(Qr, Zr);
+           const Wr = Sr.YB.jQr(Sr.fC);
```

#### 168. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L771` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L771) · [Before (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L771)

```diff
-         })), RR.DW(fR.Me, (RR => {
+         })), rr.rK(Er.Xe, (rr => {
```

#### 169. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L773` → after: `L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L773) · [Before (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L773)

```diff
-         })), RR.DW(fR.ff, (RR => {
+         })), rr.rK(Er.qf, (rr => {
```

#### 170. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L775-L776` → after: `L775-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L775-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L775-L776) · [Before (L775-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L775-L776)

```diff
-             Ry: yR,
-             Jy: tR
+             fZ: Zr,
+             EZ: Wr
```

#### 171. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L778-L780` → after: `L778-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L778-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L778-L780) · [Before (L778-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L778-L780)

```diff
-           GR.shakePlayerCamera(JR.WH, yR, tR)
-         })), RR.DW(fR.vc, (RR => {
-           JR.zC.oGR(JR.WH).jumpMultiplier.setMultiplierType("jumpEffectAmount", RR)
+           Qr.shakePlayerCamera(Sr.fC, Zr, Wr)
+         })), rr.rK(Er.Qc, (rr => {
+           Sr.YB.jQr(Sr.fC).jumpMultiplier.setMultiplierType("jumpEffectAmount", rr)
```

#### 172. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L782-L787` → after: `L782-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L782-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L782-L787) · [Before (L782-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L782-L787)

```diff
-           JR.zC.oGR(JR.WH).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
-         })), RR.DW(fR.H, (RR => {
-           JR.zC.Lk(JR.WH).applyImpulse(RR)
-         })), RR.DW(fR.cf, (RR => {
-           const GR = JR.zC.Lk(JR.WH);
-           RJ().set(GR.bY, 0, 0, 0), RJ().set(GR.vY, 0, 0, 0), RJ().copy(GR.BL, RR), GR.mY()
+           Sr.YB.jQr(Sr.fC).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
+         })), rr.rK(Er.N, (rr => {
+           Sr.YB.cV(Sr.fC).applyImpulse(rr)
+         })), rr.rK(Er.mf, (rr => {
+           const Qr = Sr.YB.cV(Sr.fC);
+           rS().set(Qr.YV, 0, 0, 0), rS().set(Qr.KV, 0, 0, 0), rS().copy(Qr.Lh, rr), Qr.yV()
```

#### 173. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L789-L790` → after: `L789-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L789-L790) · [Before (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L789-L790)

```diff
-           (0, yJ.setFloatingYValue)(JR.zC.getState(JR.WH, "physics"), JR.zC.f6(JR.WH), null)
-         })), RR.DW(fR.Qb, (RR => {
+           (0, ZS.setFloatingYValue)(Sr.YB.getState(Sr.fC, "physics"), Sr.YB.gJ(Sr.fC), null)
+         })), rr.rK(Er.hc, (rr => {
```

#### 174. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L792-L794` → after: `L792-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L792-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L792-L794) · [Before (L792-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L792-L794)

```diff
-             JZ: GR,
-             GZ: yR,
-             yZ: tR
+             Da: Qr,
+             da: Zr,
+             sa: Wr
```

#### 175. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L796-L802` → after: `L796-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L796-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L796-L802) · [Before (L796-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L796-L802)

```diff
-           const uR = (0, OR.d)(GR);
-           if (uR === JR.WH) {
-             const RR = JR.zC.f6(JR.WH).position;
-             tR ??= Math.floor(RR[1]) - 1, (0, yJ.setFloatingYValue)(JR.zC.getState(JR.WH, "physics"), JR.zC.f6(JR.WH), yR ? tR : null)
-           }(0, vR.c)(JR).setFloating(uR, yR, tR);
-           const ZR = JR.zC.getState(uR, "floating");
-           ZR && (ZR.isFloating = yR, ZR.yZ = yR ? tR : null)
+           const ar = (0, Pr.e)(Qr);
+           if (ar === Sr.fC) {
+             const rr = Sr.YB.gJ(Sr.fC).position;
+             Wr ??= Math.floor(rr[1]) - 1, (0, ZS.setFloatingYValue)(Sr.YB.getState(Sr.fC, "physics"), Sr.YB.gJ(Sr.fC), Zr ? Wr : null)
+           }(0, Xr.b)(Sr).setFloating(ar, Zr, Wr);
+           const jr = Sr.YB.getState(ar, "floating");
+           jr && (jr.isFloating = Zr, jr.sa = Zr ? Wr : null)
```

#### 176. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L809-L810` → after: `L809-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L809-L810) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L809-L810)

```diff
-       if (!RR.zC.cGR(RR.WH)) return console.log("Got resync inven but don't have inven component"), void JR.acknowledge(yR);
-       uR && console.error("Had to sync inven"), JR.fJR(yR, tR) && GR.JK("chestToggleFromServer", !1, !0), GR.JK("syncedInvenFromServer")
+       if (!rr.YB.IQr(rr.fC)) return console.log("Got resync inven but don't have inven component"), void Sr.acknowledge(Zr);
+       ar && console.error("Had to sync inven"), Sr.Prr(Zr, Wr) && Qr.Jp("chestToggleFromServer", !1, !0), Qr.Jp("syncedInvenFromServer")
```

#### 177. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L812-L816` → after: `L812-L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L812-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L812-L816) · [Before (L812-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L812-L816)

```diff
-     var qJ = GR(40256),
-       iJ = GR(10285),
-       fJ = GR(40258),
-       VJ = GR(2167);
-     var KJ = GR(5313);
+     var IS = Qr(40574),
+       fS = Qr(10047),
+       ES = Qr(40583),
+       pS = Qr(2117);
+     var xS = Qr(5264);
```

#### 178. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L819` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L819) · [Before (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L819)

```diff
-       const JR = RR.NK;
+       const Sr = rr.qx;
```

#### 179. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L829` → after: `L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L829) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L829)

```diff
-         const [KR, wR, rR] = RR.zC.vW(RR.WH), eR = ! function(RR) {
+         const [xr, mr, Nr] = rr.YB.JY(rr.fC), Ur = ! function(rr) {
```

#### 180. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L831` → after: `L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L831) · [Before (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L831)

```diff
-           let GR = null === (JR = RR.zC.nyR(RR.WH)) || void 0 === JR ? void 0 : JR.pe;
+           let Qr = null === (Sr = rr.YB.iQr(rr.fC)) || void 0 === Sr ? void 0 : Sr.nU;
```

#### 181. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L837)

```diff
-             const JR = RR.zC.getState(GR, "smoothToServerPos"),
+             const Sr = rr.YB.getState(Qr, "smoothToServerPos"),
```

#### 182. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L840` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L840) · [Before (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L840)

```diff
-               const JR = RR.zC.vW(GR);
+               const Sr = rr.YB.JY(Qr);
```

#### 183. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L843` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L843) · [Before (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L843)

```diff
-             GR = null === (tR = RR.zC.nyR(GR)) || void 0 === tR ? void 0 : tR.pe
+             Qr = null === (Wr = rr.YB.iQr(Qr)) || void 0 === Wr ? void 0 : Wr.nU
```

#### 184. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L847` → after: `L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L847) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L847)

```diff
-           const tR = uR.g.LK;
+           const Wr = ar.i.hx;
```

#### 185. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L850` → after: `L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L850) · [Before (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L850)

```diff
-             if (!(0, KJ.h)(JR, GR, yR, ZR[0] * tR, ZR[1] * tR, ZR[2] * tR)) return !1
+             if (!(0, xS.g)(Sr, Qr, Zr, jr[0] * Wr, jr[1] * Wr, jr[2] * Wr)) return !1
```

#### 186. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L853-L855` → after: `L853-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L853-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L853-L855) · [Before (L853-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L853-L855)

```diff
-         }(JR.eL.qK, KR, wR, rR), aR = null === qR || Math.abs(KR - qR[0]) > 8 || Math.abs(wR - qR[1]) > 8 || Math.abs(rR - qR[2]) > 8, LR = !iR || aR || performance.now() - ZR >= 1e4;
-         iR = eR, eR && LR && (tR = VR, ZR = performance.now(), qR = [KR, wR, rR], (0, yR.sendColyMessage)(fR.Cg, {
-           cV: VR
+         }(Sr.Ih.Zx, xr, mr, Nr), tr = null === Ir || Math.abs(xr - Ir[0]) > 8 || Math.abs(mr - Ir[1]) > 8 || Math.abs(Nr - Ir[2]) > 8, hr = !fr || tr || performance.now() - jr >= 1e4;
+         fr = Ur, Ur && hr && (Wr = pr, jr = performance.now(), Ir = [xr, mr, Nr], (0, Zr.sendColyMessage)(Er.Pg, {
+           lp: pr
```

#### 187. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L858-L859` → after: `L858-L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L858-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L858-L859) · [Before (L858-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L858-L859)

```diff
-       return RR.on("gK", VR), () => {
-         RR.off("gK", VR)
+       return rr.on("lx", pr), () => {
+         rr.off("lx", pr)
```

#### 188. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L862-L867` → after: `L862-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L862-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L862-L867) · [Before (L862-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L862-L867)

```diff
-     var rJ = GR(40267),
-       eJ = GR(1663),
-       aJ = GR(3918),
-       LJ = GR(2011),
-       nJ = GR(4053),
-       UJ = GR(5658);
+     var NS = Qr(40585),
+       US = Qr(1644),
+       tS = Qr(3868),
+       hS = Qr(1965),
+       zS = Qr(4010),
+       YS = Qr(5594);
```

#### 189. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L870` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L870) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L870)

```diff
-         this.xw = RR, this.gameNameWithVariation = JR, this.connectionResume = GR, this.stopChunkReports = () => {}, this.replayResume = null
+         this.gm = rr, this.gameNameWithVariation = Sr, this.connectionResume = Qr, this.stopChunkReports = () => {}, this.replayResume = null
```

#### 190. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L873` → after: `L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L873) · [Before (L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L873)

```diff
-         UJ.d.reset(), (0, qJ.c)()
+         YS.e.reset(), (0, IS.b)()
```

#### 191. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L882-L886` → after: `L882-L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L882-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L882-L886) · [Before (L882-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L882-L886)

```diff
-                 const uR = Math.ceil(RR.FN[0]),
-                   ZR = Math.ceil(RR.FN[1]);
-                 JR && JR[0] === uR && JR[1] === ZR || (JR = [uR, ZR], GR = performance.now(), (0, yR.sendColyMessage)(fR.Bg, {
-                   Gi: uR,
-                   yi: ZR
+                 const ar = Math.ceil(rr.Iq[0]),
+                   jr = Math.ceil(rr.Iq[1]);
+                 Sr && Sr[0] === ar && Sr[1] === jr || (Sr = [ar, jr], Qr = performance.now(), (0, Zr.sendColyMessage)(Er.Og, {
+                   dI: ar,
+                   sI: jr
```

#### 192. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L895-L896` → after: `L895-L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L895-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L895-L896) · [Before (L895-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L895-L896)

```diff
-           }(this.xw.NK),
-           JR = wJ(this.xw);
+           }(this.gm.qx),
+           Sr = mS(this.gm);
```

#### 193. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L902` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L902) · [Before (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L902)

```diff
-         (0, GJ.j)(this.xw, (0, iR.e)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - rJ.e)), this.startChunkReports()
+         (0, QS.m)(this.gm, (0, fr.c)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - NS.e)), this.startChunkReports()
```

#### 194. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L905-L911` → after: `L905-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L905-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L905-L911) · [Before (L905-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L905-L911)

```diff
-         const JR = this.xw,
-           GR = (0, iR.e)();
-         RR.DW(fR.Sc, (RR => {
-           UR.c.applyNewClientOptions(RR)
-         })), RR.DW(fR.rd, (RR => {
-           aJ.c.onReceiveColyseusPing(RR)
-         })), RR.DW(fR.Oe, (RR => {
+         const Sr = this.gm,
+           Qr = (0, fr.c)();
+         rr.rK(Er.kd, (rr => {
+           Yr.d.applyNewClientOptions(rr)
+         })), rr.rK(Er.Id, (rr => {
+           tS.e.onReceiveColyseusPing(rr)
+         })), rr.rK(Er._e, (rr => {
```

#### 195. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L917-L918` → after: `L917-L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L917-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L917-L918) · [Before (L917-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L917-L918)

```diff
-         })), RR.DW(fR.Re, (RR => {
-           nR.n.JK("setDiscordReportKey", RR)
+         })), rr.rK(Er.df, (rr => {
+           zr.i.Jp("setDiscordReportKey", rr)
```

#### 196. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L921` → after: `L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L921) · [Before (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L921)

```diff
-         })), RR.DW(fR.ic, (tR => {
+         })), rr.rK(Er.Cc, (Wr => {
```

#### 197. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L923-L924` → after: `L923-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L923-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L923-L924) · [Before (L923-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L923-L924)

```diff
-             LJ: uR,
-             nJ: ZR
+             eS: ar,
+             KS: jr
```

#### 198. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L926` → after: `L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L926) · [Before (L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L926)

```diff
-           if ((0, yR.setAdjustment)(ZR), this.connectionResume.onInitialInfo(tR.UJ, tR.WJ), yR.offlineInputReplay.JA(tR.AJ), this.connectionResume.isResuming()) {
+           if ((0, Zr.setAdjustment)(jr), this.connectionResume.onInitialInfo(Wr.yS, Wr.BS), Zr.offlineInputReplay.VK(Wr.vS), this.connectionResume.isResuming()) {
```

#### 199. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L929` → after: `L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L929) · [Before (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L929)

```diff
-               null === tR.CJ && (0, iR.e)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), gR(JR.NK), UR.c.apply({
+               null === Wr.OS && (0, fr.c)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), Lr(Sr.qx), Yr.d.apply({
```

#### 200. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L931)

```diff
-                 _shopVersion: VJ.e
+                 _shopVersion: pS.c
```

#### 201. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L933-L934` → after: `L933-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L933-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L933-L934) · [Before (L933-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L933-L934)

```diff
-               const GR = JR.zC.IGR(JR.WH);
-               GR.yG && (GR.chestClosed(), nR.n.JK("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), nR.n.JK("initInfoReceived", RR)
+               const Qr = Sr.YB.EQr(Sr.fC);
+               Qr.pQ && (Qr.chestClosed(), zr.i.Jp("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), zr.i.Jp("initInfoReceived", rr)
```

#### 202. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L936` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L936) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L936)

```diff
-               const RR = null === tR.CJ ? null : {
+               const rr = null === Wr.OS ? null : {
```

#### 203. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L940-L941` → after: `L940-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L940-L941) · [Before (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L940-L941)

```diff
-               this.replayResume = RR, this.connectionResume.onResumeInitialInfo(tR.CJ, (() => {
-                 RR.endSeq = (0, iR.e)().client.inventoryPrediction.lastActionSeq
+               this.replayResume = rr, this.connectionResume.onResumeInitialInfo(Wr.OS, (() => {
+                 rr.endSeq = (0, fr.c)().client.inventoryPrediction.lastActionSeq
```

#### 204. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L944-L945` → after: `L944-L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L944-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L944-L945) · [Before (L944-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L944-L945)

```diff
-           } else console.log("Local client is eId", uR), nR.n.JK("sessionReplayJoinTicket", tR.lJ), LJ.d.markAdmitted(), (0, GJ.k)(JR), nR.n.JK("loadingScreenState", "loadingPage:loadingWorld"), JR.UH = uR, JR.zC.RGR(JR.WH, JR.zC.names.entityName) && JR.zC.Zm(JR.WH, JR.zC.names.e … [truncated]
-         })), RR.DW(fR.Ae, (() => {
+           } else console.log("Local client is eId", ar), zr.i.Jp("sessionReplayJoinTicket", Wr.HS), hS.c.markAdmitted(), (0, QS.p)(Sr), zr.i.Jp("loadingScreenState", "loadingPage:loadingWorld"), Sr.WC = ar, Sr.YB.TSr(Sr.fC, Sr.YB.names.entityName) && Sr.YB.bM(Sr.fC, Sr.YB.names.e … [truncated]
+         })), rr.rK(Er.De, (() => {
```

#### 205. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L952` → after: `L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L952) · [Before (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L952)

```diff
-             } = (0, iR.e)().client, {
+             } = (0, fr.c)().client, {
```

#### 206. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L957-L958` → after: `L957-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L957-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L957-L958) · [Before (L957-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L957-L958)

```diff
-               const yR = null !== (ZR = RR.endSeq) && void 0 !== ZR ? ZR : GR.lastActionSeq;
-               GR.forget((RR => RR > tR.iG && RR <= yR || uR.has(RR))), ZJ(JR, GR, nR.n, tR.iG, tR.load)
+               const Zr = null !== (jr = rr.endSeq) && void 0 !== jr ? jr : Qr.lastActionSeq;
+               Qr.forget((rr => rr > Wr.tQ && rr <= Zr || ar.has(rr))), jS(Sr, Qr, zr.i, Wr.tQ, Wr.load)
```

#### 207. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L961` → after: `L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L961) · [Before (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L961)

```diff
-         })), RR.DW(fR.jf, (RR => {
+         })), rr.rK(Er.vf, (rr => {
```

#### 208. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L963-L965` → after: `L963-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L963-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L963-L965) · [Before (L963-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L963-L965)

```diff
-             JG: GR,
-             qG: yR,
-             iG: tR
+             fQ: Qr,
+             UQ: Zr,
+             tQ: Wr
```

#### 209. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L969-L970` → after: `L969-L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L969-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L969-L970) · [Before (L969-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L969-L970)

```diff
-           } = (0, iR.e)().client, ZR = () => {
-             JR.zC.IGR(JR.WH).loadFromString(GR)
+           } = (0, fr.c)().client, jr = () => {
+             Sr.YB.EQr(Sr.fC).loadFromString(Qr)
```

#### 210. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L973` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L973) · [Before (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L973)

```diff
-             iG: tR,
+             tQ: Wr,
```

#### 211. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L975-L976` → after: `L975-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L975-L976) · [Before (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L975-L976)

```diff
-           }), ZJ(JR, uR, nR.n, tR, ZR, yR)
-         })), RR.DW(fR.Ld, (RR => {
+           }), jS(Sr, ar, zr.i, Wr, jr, Zr)
+         })), rr.rK(Er.Wd, (rr => {
```

#### 212. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L991` → after: `L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L991) · [Before (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L991)

```diff
-         })), RR.DW(fR.xe, (RR => {
+         })), rr.rK(Er.Ae, (rr => {
```

#### 213. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1006` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1006) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1006)

```diff
-         })), RR.DW(fR.Ec, (RR => {
+         })), rr.rK(Er.Yc, (rr => {
```

#### 214. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1019` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1019) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1019)

```diff
-         })), RR.DW(fR.Fb, (RR => {
+         })), rr.rK(Er.Zb, (rr => {
```

#### 215. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1032-L1034` → after: `L1032-L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1032-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1032-L1034) · [Before (L1032-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1032-L1034)

```diff
-         })), RR.DW(fR.yc, (RR => {
-           (0, iR.e)().client.leaveGameUnwanted({
-             reason: (0, iJ.b)(RR),
+         })), rr.rK(Er.Tc, (rr => {
+           (0, fr.c)().client.leaveGameUnwanted({
+             reason: (0, fS.d)(rr),
```

#### 216. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1039-L1042` → after: `L1039-L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1039-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1039-L1042) · [Before (L1039-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1039-L1042)

```diff
-         })), RR.DW(fR.He, (RR => {
-           nR.n.JK("serverUpdating", Date.now() + RR, !0)
-         })), RR.DW(fR.Rc, fJ.d), RR.DW(fR.Kc, (RR => {
-           console.error(`[logErrorToConsole]: ${RR}`)
+         })), rr.rK(Er.Pe, (rr => {
+           zr.i.Jp("serverUpdating", Date.now() + rr, !0)
+         })), rr.rK(Er.jd, ES.b), rr.rK(Er.dd, (rr => {
+           console.error(`[logErrorToConsole]: ${rr}`)
```

#### 217. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1046-L1047` → after: `L1046-L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1046-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1046-L1047) · [Before (L1046-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1046-L1047)

```diff
-     var AJ = GR(40270),
-       CJ = GR(40283),
+     var eS = Qr(40587),
+       KS = Qr(40599),
```

#### 218. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1049-L1051` → after: `L1049-L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1049-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1049-L1051) · [Before (L1049-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1049-L1051)

```diff
-       MJ = GR(40276),
-       BJ = GR(3452),
-       lJ = GR(4983);
+       BS = Qr(40593),
+       TS = Qr(3394),
+       vS = Qr(4897);
```

#### 219. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1054` → after: `L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1054) · [Before (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1054)

```diff
-         this.xw = RR, this.clientApi = JR
+         this.gm = rr, this.clientApi = Sr
```

#### 220. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1057-L1059` → after: `L1057-L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1057-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1057-L1059) · [Before (L1057-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1057-L1059)

```diff
-         const JR = this.xw,
-           GR = (0, iR.e)();
-         RR.DW(fR.nb, (RR => {
+         const Sr = this.gm,
+           Qr = (0, fr.c)();
+         rr.rK(Er.Eb, (rr => {
```

#### 221. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1067` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1067) · [Before (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1067)

```diff
-           nR.n.JK("chat", {
+           zr.i.Jp("chat", {
```

#### 222. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1074` → after: `L1074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1074) · [Before (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1074)

```diff
-         })), RR.DW(fR.mb, (RR => {
+         })), rr.rK(Er.Db, (rr => {
```

#### 223. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1078-L1083` → after: `L1078-L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1078-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1078-L1083) · [Before (L1078-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1078-L1083)

```diff
-           nR.n.JK("chatRemoved", JR, !0)
-         })), RR.DW(fR.sf, (RR => {
-           nR.n.JK("TopRightHelper", RR, !0)
-         })), RR.DW(fR.lf, (RR => {
-           (0, AJ.e)(RR)
-         })), RR.DW(fR.Cc, (RR => {
+           zr.i.Jp("chatRemoved", Sr, !0)
+         })), rr.rK(Er.Gf, (rr => {
+           zr.i.Jp("TopRightHelper", rr, !0)
+         })), rr.rK(Er.zf, (rr => {
+           (0, eS.d)(rr)
+         })), rr.rK(Er.Xc, (rr => {
```

#### 224. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1089` → after: `L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1089) · [Before (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1089)

```diff
-           nR.n.JK("leaderboardResponse", {
+           zr.i.Jp("leaderboardResponse", {
```

#### 225. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1094-L1102` → after: `L1094-L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1094-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1094-L1102) · [Before (L1094-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1094-L1102)

```diff
-         })), RR.DW(fR.if, (() => {
-           nR.n.JK("showShopTutorial", null, !0)
-         })), RR.DW(fR.Jd, (RR => {
-           nR.n.JK("progressBarUpdate", RR, !0)
-         })), RR.DW(fR.jc, (RR => {
-           nR.n.JK("middleScreenBarInitiate", {
-             duration: RR.Wu,
-             Au: RR.Au,
-             horizBarRemOffset: RR.Cu
+         })), rr.rK(Er.uf, (() => {
+           zr.i.Jp("showShopTutorial", null, !0)
+         })), rr.rK(Er.Vd, (rr => {
+           zr.i.Jp("progressBarUpdate", rr, !0)
+         })), rr.rK(Er.Gc, (rr => {
+           zr.i.Jp("middleScreenBarInitiate", {
+             duration: rr.ta,
+             ha: rr.ha,
+             horizBarRemOffset: rr.za
```

#### 226. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1104-L1106` → after: `L1104-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1104-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1104-L1106) · [Before (L1104-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1104-L1106)

```diff
-         })), RR.DW(fR.ae, (() => {
-           nR.n.JK("middleScreenBarRemove", !0)
-         })), RR.DW(fR.Pe, (RR => {
+         })), rr.rK(Er.ee, (() => {
+           zr.i.Jp("middleScreenBarRemove", !0)
+         })), rr.rK(Er.af, (rr => {
```

#### 227. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1111-L1112` → after: `L1111-L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1111-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1111-L1112) · [Before (L1111-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1111-L1112)

```diff
-             dJ: tR,
-             QJ: uR
+             uS: Wr,
+             ZQ: ar
```

#### 228. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1114` → after: `L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1114) · [Before (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1114)

```diff
-           nR.n.JK("setDirectionArrow", {
+           zr.i.Jp("setDirectionArrow", {
```

#### 229. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1118-L1119` → after: `L1118-L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1118-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1118-L1119) · [Before (L1118-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1118-L1119)

```diff
-             text: (0, fR.r)(tR),
-             QJ: uR
+             text: (0, Er.y)(Wr),
+             ZQ: ar
```

#### 230. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1121` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1121) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1121)

```diff
-         })), RR.DW(fR.wb, (RR => {
+         })), rr.rK(Er.Nb, (rr => {
```

#### 231. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1125` → after: `L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1125) · [Before (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1125)

```diff
-           nR.n.JK("clearDirectionArrow", {
+           zr.i.Jp("clearDirectionArrow", {
```

#### 232. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1128` → after: `L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1128) · [Before (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1128)

```diff
-         })), RR.DW(fR.Db, (RR => {
+         })), rr.rK(Er.Yb, (rr => {
```

#### 233. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1130` → after: `L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1130) · [Before (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1130)

```diff
-         })), RR.DW(fR.bd, (RR => {
+         })), rr.rK(Er.td, (rr => {
```

#### 234. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1133` → after: `L1133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1133) · [Before (L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1133)

```diff
-             Xu: GR
+             Ya: Qr
```

#### 235. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1141-L1143` → after: `L1141-L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1141-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1141-L1143) · [Before (L1141-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1141-L1143)

```diff
-           for (const yR of CJ.e) yR in ZR && ZR[yR] && (ZR[yR] = (0, fR.r)(ZR[yR]));
-           UJ.d.queueQTE(JR, tR, ZR).getResult().then((RR => {
-             "boolean" === typeof RR && (0, yR.sendColyMessage)(fR.Ai, {
+           for (const Zr of KS.e) Zr in jr && jr[Zr] && (jr[Zr] = (0, Er.y)(jr[Zr]));
+           YS.e.queueQTE(Sr, Wr, jr).getResult().then((rr => {
+             "boolean" === typeof rr && (0, Zr.sendColyMessage)(Er.Mi, {
```

#### 236. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1148-L1149` → after: `L1148-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1148-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1148-L1149) · [Before (L1148-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1148-L1149)

```diff
-         })), RR.DW(fR.ee, (RR => {
-           UJ.d.cancelQTE(RR)
+         })), rr.rK(Er.he, (rr => {
+           YS.e.cancelQTE(rr)
```

#### 237. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1151-L1152` → after: `L1151-L1152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1151-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1151-L1152) · [Before (L1151-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1151-L1152)

```diff
-           UJ.d.reset()
-         })), RR.DW(fR.fd, (RR => {
+           YS.e.reset()
+         })), rr.rK(Er.vd, (rr => {
```

#### 238. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1157-L1160` → after: `L1157-L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1157-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1157-L1160) · [Before (L1157-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1157-L1160)

```diff
-           (0, qJ.f)(JR, GR)
-         })), RR.DW(fR.ge, (RR => {
-           (0, qJ.g)(RR)
-         })), RR.DW(fR.yf, (RR => {
+           (0, IS.e)(Sr, Qr)
+         })), rr.rK(Er.ie, (rr => {
+           (0, IS.h)(rr)
+         })), rr.rK(Er.Nf, (rr => {
```

#### 239. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1166-L1170` → after: `L1166-L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1166-L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1166-L1170) · [Before (L1166-L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1166-L1170)

```diff
-           (0, qJ.i)(GR, JR, tR, (RR => {
-             (0, yR.sendColyMessage)(fR.Uj, {
-               XZ: GR,
-               MZ: RR,
-               BZ: 5
+           (0, IS.j)(Qr, Sr, Wr, (rr => {
+             (0, Zr.sendColyMessage)(Er.ak, {
+               zj: Qr,
+               Yj: rr,
+               nj: 5
```

#### 240. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1173` → after: `L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1173) · [Before (L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1173)

```diff
-         })), RR.DW(fR.kd, (RR => {
+         })), rr.rK(Er.Bd, (rr => {
```

#### 241. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1177-L1178` → after: `L1177-L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1177-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1177-L1178) · [Before (L1177-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1177-L1178)

```diff
-           nR.n.JK("overShopInfo", JR, !0)
-         })), RR.DW(fR.Yb, (RR => {
+           zr.i.Jp("overShopInfo", Sr, !0)
+         })), rr.rK(Er.oc, (rr => {
```

#### 242. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1180-L1181` → after: `L1180-L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1180-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1180-L1181) · [Before (L1180-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1180-L1181)

```diff
-             vJ: GR,
-             OJ: yR
+             CS: Qr,
+             MS: Zr
```

#### 243. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1183-L1184` → after: `L1183-L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1183-L1184) · [Before (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1183-L1184)

```diff
-           this.clientApi.openShop(JR.WH, GR, yR)
-         })), RR.DW(fR.Wb, (RR => {
+           this.clientApi.openShop(Sr.fC, Qr, Zr)
+         })), rr.rK(Er.mc, (rr => {
```

#### 244. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1186-L1188` → after: `L1186-L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1186-L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1186-L1188) · [Before (L1186-L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1186-L1188)

```diff
-             su: JR,
-             hu: GR,
-             RZ: yR
+             oa: Sr,
+             ba: Qr,
+             Ja: Zr
```

#### 245. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1190-L1193` → after: `L1190-L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1190-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1190-L1193) · [Before (L1190-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1190-L1193)

```diff
-           nR.n.JK("flyingMiddleMessage", {
-             content: (0, fR.r)(JR),
-             hu: GR,
-             RZ: yR
+           zr.i.Jp("flyingMiddleMessage", {
+             content: (0, Er.y)(Sr),
+             ba: Qr,
+             Ja: Zr
```

#### 246. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1195-L1197` → after: `L1195-L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1195-L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1195-L1197) · [Before (L1195-L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1195-L1197)

```diff
-         })), RR.DW(fR.Lf, (RR => {
-           const JR = RR === XJ.i ? null : {
-             message: `Currently loaded as variation: ${RR}`,
+         })), rr.rK(Er.dg, (rr => {
+           const Sr = rr === yS.e ? null : {
+             message: `Currently loaded as variation: ${rr}`,
```

#### 247. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1200-L1201` → after: `L1200-L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1200-L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1200-L1201) · [Before (L1200-L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1200-L1201)

```diff
-           nR.n.JK("showPermanentBottomMessage", JR, !0)
-         })), RR.DW(fR.Zb, (RR => {
+           zr.i.Jp("showPermanentBottomMessage", Sr, !0)
+         })), rr.rK(Er.sc, (rr => {
```

#### 248. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1206-L1207` → after: `L1206-L1207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1206-L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1206-L1207) · [Before (L1206-L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1206-L1207)

```diff
-           (0, MJ.g)(JR) ? (0, MJ.c)(JR, yR) : ("freeCamPerms" === JR && GR.client.freeCameraController.setPerms(yR.key, yR.value), GR.client.triggerGameCallback("onReceivedMessageFromServer", JR, yR))
-         })), RR.DW(fR.Bb, BJ.m)
+           (0, BS.e)(Sr) ? (0, BS.b)(Sr, Zr) : ("freeCamPerms" === Sr && Qr.client.freeCameraController.setPerms(Zr.key, Zr.value), Qr.client.triggerGameCallback("onReceivedMessageFromServer", Sr, Zr))
+         })), rr.rK(Er.Tb, TS.l)
```

#### 249. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1212` → after: `L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1212) · [Before (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1212)

```diff
-         this.gameNameWithVariation = RR, this.xw = GR, this.connectionResume = yR, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new CR.b(JR, this.xw)
+         this.gameNameWithVariation = rr, this.gm = Qr, this.connectionResume = Zr, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new Kr.b(Sr, this.gm)
```

#### 250. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1219-L1220` → after: `L1219-L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1219-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1219-L1220) · [Before (L1219-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1219-L1220)

```diff
-       QVR(RR) {
-         this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new CR.b(RR, this.xw), this.stateReplicationHandler.setup()
+       axr(rr) {
+         this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new Kr.b(rr, this.gm), this.stateReplicationHandler.setup()
```

#### 251. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1223` → after: `L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1223) · [Before (L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1223)

```diff
-         const GR = this.xw,
+         const Qr = this.gm,
```

#### 252. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1231-L1234` → after: `L1231-L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1231-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1231-L1234) · [Before (L1231-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1231-L1234)

```diff
-     var bJ = GR(40285),
-       vJ = GR(40288),
-       OJ = GR(726),
-       xJ = GR(1972);
+     var lS = Qr(40605),
+       XS = Qr(40608),
+       PS = Qr(727),
+       HS = Qr(1912);
```

#### 253. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1268` → after: `L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1268) · [Before (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1268)

```diff
-             (0, iR.e)().client.itemDropPrediction.reset()
+             (0, fr.c)().client.itemDropPrediction.reset()
```

#### 254. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1273` → after: `L1273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1273) · [Before (L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1273)

```diff
-         }(0, iR.e)().client.itemDropPrediction.onResumeReplayOffered(), yR.offlineInputReplay.replayFrom(RR.MJ, JR)
+         }(0, fr.c)().client.itemDropPrediction.onResumeReplayOffered(), Zr.offlineInputReplay.replayFrom(rr.lS, Sr)
```

#### 255. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1287-L1288` → after: `L1287-L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1287-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1287-L1288) · [Before (L1287-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1287-L1288)

```diff
-         RR.oW(JR);
-         const GR = new vJ.c((() => {
+         rr.WK(Sr);
+         const Qr = new XS.e((() => {
```

#### 256. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1297-L1298` → after: `L1297-L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1297-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1297-L1298) · [Before (L1297-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1297-L1298)

```diff
-         window.addEventListener("pagehide", yR), RR.oW(((JR, GR) => {
-           if (RR === this.attachedRoom && this.listener.isLive()) return (0, uR.i)(JR) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${JR}, reconnecting`), this.listener.onDropped(JR, GR), void this.onConnectionDropped(RR, String(J … [truncated]
+         window.addEventListener("pagehide", Zr), rr.WK(((Sr, Qr) => {
+           if (rr === this.attachedRoom && this.listener.isLive()) return (0, ar.k)(Sr) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${Sr}, reconnecting`), this.listener.onDropped(Sr, Qr), void this.onConnectionDropped(rr, String(S … [truncated]
```

#### 257. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1307` → after: `L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1307) · [Before (L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1307)

```diff
-         RR !== this.suspended && (this.suspended = RR, (0, yR.setConnectionSuspended)(RR), (0, iR.e)().client.itemDropPrediction.setSuspended(RR))
+         rr !== this.suspended && (this.suspended = rr, (0, Zr.setConnectionSuspended)(rr), (0, fr.c)().client.itemDropPrediction.setSuspended(rr))
```

#### 258. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1318` → after: `L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1318) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1318)

```diff
-         console.log("Reconnected to the game server, waiting for the game to resume"), (0, ER.p)(), yR.offlineInputReplay.onConnectionReplaced(), this.msgHandler.QVR(RR), this.listener.onReconnected(RR), this.attachRoom(RR)
+         console.log("Reconnected to the game server, waiting for the game to resume"), (0, Fr.n)(), Zr.offlineInputReplay.onConnectionReplaced(), this.msgHandler.axr(rr), this.listener.onReconnected(rr), this.attachRoom(rr)
```

#### 259. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1321-L1337` → after: `L1321-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1321-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1321-L1337) · [Before (L1321-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1321-L1337)

```diff
-     var DJ = GR(2513),
-       HJ = GR(2521),
-       oJ = GR(1449),
-       cJ = GR(1397),
-       PJ = GR(5536),
-       IJ = GR(4422),
-       mJ = GR(1406),
-       zJ = GR(38884),
-       SJ = GR(40295),
-       jJ = GR(10298),
-       dJ = GR(40304),
-       EJ = GR(1295),
-       YJ = GR(37640),
-       kJ = GR(40310),
-       QJ = GR(1921),
-       FJ = GR(3921),
- ... (1 more removed lines; see GitHub link above)
+     var RS = Qr(2466),
+       gS = Qr(2472),
+       CS = Qr(1422),
+       MS = Qr(1364),
+       GS = Qr(5479),
+       kS = Qr(4354),
+       AS = Qr(1371),
+       VS = Qr(39225),
+       iS = Qr(40617),
+       wS = Qr(10062),
+       cS = Qr(40625),
+       FS = Qr(1267),
+       oS = Qr(38018),
+       bS = Qr(40627),
+       JS = Qr(1849),
+       DS = Qr(3873),
+ ... (1 more added lines; see GitHub link above)
```

#### 260. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1346` → after: `L1346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1346) · [Before (L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1346)

```diff
-         errType: null !== (JR = null === (GR = RR.constructor) || void 0 === GR ? void 0 : GR.name) && void 0 !== JR ? JR : "",
+         errType: null !== (Sr = null === (Qr = rr.constructor) || void 0 === Qr ? void 0 : Qr.name) && void 0 !== Sr ? Sr : "",
```

#### 261. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1358` → after: `L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1358) · [Before (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1358)

```diff
-     }(0, aR.o)((RR => {
+     }(0, tr.i)((rr => {
```

#### 262. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1368)

```diff
-         this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.xw = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = vo … [truncated]
+         this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.joinAdHold = !1, this.checkSendPath = () => {}, this.gm = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = vo … [truncated]
```

#### 263. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1371-L1373` → after: `L1371-L1373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1371-L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1371-L1373) · [Before (L1371-L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1371-L1373)

```diff
-         UR.c.reset(), RR.Qm = {
-           [RR.WH]: {}
-         }, RR.UH = void 0, (0, ER.p)(), (0, iR.e)().removeAllEntityNames(), (0, iR.e)().setEntityName(RR.WH, this.userContext.getPlayerName()), (0, oJ.s)({
+         Yr.d.reset(), rr.xG = {
+           [rr.fC]: {}
+         }, rr.WC = void 0, (0, Fr.n)(), (0, fr.c)().removeAllEntityNames(), (0, fr.c)().setEntityName(rr.fC, this.userContext.getPlayerName()), (0, CS.m)({
```

#### 264. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1375` → after: `L1375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1375) · [Before (L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1375)

```diff
-         }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, QJ.e)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
+         }), console.log("Waiting for clientConnection passed promise to resolve"), this.joinAdHold = (0, JS.d)(), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
```

#### 265. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1377-L1378` → after: `L1377-L1378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1377-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1377-L1378) · [Before (L1377-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1377-L1378)

```diff
-         GR.aborted || (0, cJ.y)("wasm_core_ready", ZR);
-         const qR = (0, dJ.f)(this.userContext, (() => {
+         Qr.aborted || (0, MS.D)("wasm_core_ready", jr);
+         const Ir = (0, cS.h)(this.userContext, (() => {
```

#### 266. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1382-L1383` → after: `L1382-L1383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1382-L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1382-L1383) · [Before (L1382-L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1382-L1383)

```diff
-           } = (0, AR.g)(this.userContext, this.gameNameWithVariation, this.lobbyName, JR, (RR => IJ.b.isUsingCustomGameTexturePack(RR)));
-           return tR.joinAdHold = this.joinAdHold, tR.renderBackend = (0, FJ.d)(RR.lK), (0, SJ.h)((() => this.colyClient.joinOrCreateUntil(GR, yR, tR)), GR)
+           } = (0, er.f)(this.userContext, this.gameNameWithVariation, this.lobbyName, Sr, (rr => kS.d.isUsingCustomGameTexturePack(rr)));
+           return Wr.joinAdHold = this.joinAdHold, Wr.renderBackend = (0, DS.b)(rr.Ox), (0, iS.d)((() => this.colyClient.joinOrCreateUntil(Qr, Zr, Wr)), Qr)
```

#### 267. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1385-L1388` → after: `L1385-L1388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1385-L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1385-L1388) · [Before (L1385-L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1385-L1388)

```diff
-         return nR.n.JK("loadingScreenState", "loadingPage:joiningLobby"), await qR.then((JR => {
-           if (this.joinedAt = performance.now(), (0, cJ.y)("wasm_joined", this.joinedAt), this.xw = RR, this.joinAdHold) {
-             const RR = (0, QJ.o)((() => {
-               JR.send(tR.g), (0, cJ.u)(), LJ.d.markJoinAdEnded()
+         return zr.i.Jp("loadingScreenState", "loadingPage:joiningLobby"), await Ir.then((Sr => {
+           if (this.joinedAt = performance.now(), (0, MS.D)("wasm_joined", this.joinedAt), this.gm = rr, this.joinAdHold) {
+             const rr = (0, JS.n)((() => {
+               Sr.send(Wr.f), (0, MS.w)(), hS.c.markJoinAdEnded()
```

#### 268. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1390` → after: `L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1390) · [Before (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1390)

```diff
-             JR.oW(RR), (0, yR.onGameResetOnce)(RR)
+             Sr.WK(rr), (0, Zr.onGameResetOnce)(rr)
```

#### 269. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1394` → after: `L1394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1394) · [Before (L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1394)

```diff
-             RR.kN(JR)
+             rr.Qq(Sr)
```

#### 270. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1396` → after: `L1396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1396) · [Before (L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1396)

```diff
-             isLive: () => (0, iR.e)().client.getMsgHandler() === GR,
+             isLive: () => (0, fr.c)().client.getMsgHandler() === Qr,
```

#### 271. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1398` → after: `L1398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1398) · [Before (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1398)

```diff
-               (0, HJ.g)(RR) || this.logUnrecognisedConnectionLoss(RR, void 0, {
+               (0, gS.e)(rr) || this.logUnrecognisedConnectionLoss(rr, void 0, {
```

#### 272. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1400` → after: `L1400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1400) · [Before (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1400)

```diff
-                 closeReason: null !== JR && void 0 !== JR ? JR : "",
+                 closeReason: null !== Sr && void 0 !== Sr ? Sr : "",
```

#### 273. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1408` → after: `L1408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1408) · [Before (L1408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1408)

```diff
-               this.incomingMsgInitialisor.QVR(RR), this.checkSendPath = (0, zJ.f)(GR, RR, aR.q)
+               this.incomingMsgInitialisor.axr(rr), this.checkSendPath = (0, VS.f)(Qr, rr, tr.k)
```

#### 274. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1417-L1421` → after: `L1417-L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1417-L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1417-L1421) · [Before (L1417-L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1417-L1421)

```diff
-             ZR = GR.DW,
-             qR = GR.cyR.send,
-             fR = GR.cyR.DW,
-             VR = GR.YVR;
-           this.checkSendPath = (0, zJ.f)(GR, JR, aR.q);
+             jr = Qr.rK,
+             Ir = Qr.pZr.send,
+             Er = Qr.pZr.rK,
+             pr = Qr.Zxr;
+           this.checkSendPath = (0, VS.f)(Qr, Sr, tr.k);
```

#### 275. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1423` → after: `L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1423) · [Before (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1423)

```diff
-             uR === GR.send && ZR === GR.DW && qR === GR.cyR.send && fR === GR.cyR.DW && VR === GR.YVR || JG(), this.checkSendPath()
+             ar === Qr.send && jr === Qr.rK && Ir === Qr.pZr.send && Er === Qr.pZr.rK && pr === Qr.Zxr || SQ(), this.checkSendPath()
```

#### 276. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1432` → after: `L1432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1432) · [Before (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1432)

```diff
-           if (GR.aborted && JR === (0, EJ.g)(GR)) return {
+           if (Qr.aborted && Sr === (0, FS.f)(Qr)) return {
```

#### 277. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1440` → after: `L1440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1440) · [Before (L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1440)

```diff
-           if (JR instanceof YJ.g) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
+           if (Sr instanceof oS.c) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
```

#### 278. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1447` → after: `L1447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1447) · [Before (L1447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1447)

```diff
-               joinFailure: (0, kJ.c)(JR, JR.leg)
+               joinFailure: (0, bS.b)(Sr, Sr.leg)
```

#### 279. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1450` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1450) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1450)

```diff
-           RR.Ia(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${JR.code}\n`, JR);
+           rr.Xt(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${Sr.code}\n`, Sr);
```

#### 280. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1465` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1465) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1465)

```diff
-                 sinceJoinStart: (0, HJ.c)(performance.now() - ZR),
+                 sinceJoinStart: (0, gS.b)(performance.now() - jr),
```

#### 281. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1468-L1470` → after: `L1468-L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1468-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1468-L1470) · [Before (L1468-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1468-L1470)

```diff
-               rematch: (0, SJ.e)(JR),
-               gameRefused: (0, jJ.d)(JR),
-               joinFailure: (0, kJ.c)(JR, this.colyClient.legReached())
+               rematch: (0, iS.b)(Sr),
+               gameRefused: (0, wS.c)(Sr),
+               joinFailure: (0, bS.b)(Sr, this.colyClient.legReached())
```

#### 282. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1476-L1478` → after: `L1476-L1478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1476-L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1476-L1478) · [Before (L1476-L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1476-L1478)

```diff
-         nR.n.JK("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new gJ(this.gameNameWithVariation, JR.cyR, RR, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
-         const tR = JR.hVR();
-         this.incomingMsgInitialisor.setupOnMessageListeners(tR, GR), (0, yR.onConnectionToServerReady)(tR, JR), this.joinAdHold && LJ.d.markAdmissionAwaited(), tR.finishRegistration()
+         zr.i.Jp("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new LS(this.gameNameWithVariation, Sr.pZr, rr, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
+         const Wr = Sr.pxr();
+         this.incomingMsgInitialisor.setupOnMessageListeners(Wr, Qr), (0, Zr.onConnectionToServerReady)(Wr, Sr), this.joinAdHold && hS.c.markAdmissionAwaited(), Wr.finishRegistration()
```

#### 283. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1484` → after: `L1484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1484) · [Before (L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1484)

```diff
-         (0, mJ.ma)(new Error("Reconnect failed"), {
+         (0, AS.Pt)(new Error("Reconnect failed"), {
```

#### 284. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1487` → after: `L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1487) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1487)

```diff
-         }), (0, xJ.reportClientError)("disconnect", "Reconnect failed", JR.reason), (0, iR.e)().client.leaveGameUnwanted({
+         }), (0, HS.reportClientError)("disconnect", "Reconnect failed", Sr.reason), (0, fr.c)().client.leaveGameUnwanted({
```

#### 285. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1498` → after: `L1498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1498) · [Before (L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1498)

```diff
-         return null === this.joinedAt ? "" : (0, HJ.c)(performance.now() - this.joinedAt)
+         return null === this.joinedAt ? "" : (0, gS.b)(performance.now() - this.joinedAt)
```

#### 286. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1503-L1504` → after: `L1503-L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1503-L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1503-L1504) · [Before (L1503-L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1503-L1504)

```diff
-         if (console.log(`Left room with code ${RR}`), RR === uR.e.serverUpdating.code) return (0, xJ.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, iR.e)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
-         this.xw.Ia(`Kicked from server with code ${RR}`, new Error);
+         if (console.log(`Left room with code ${rr}`), rr === ar.e.serverUpdating.code) return (0, HS.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, fr.c)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
+         this.gm.Xt(`Kicked from server with code ${rr}`, new Error);
```

#### 287. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L1506` → after: `L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R1506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/185.js#L1506) · [Before (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/185.js#L1506)

```diff
-         (0, xJ.reportClientError)("disconnect", "Left room", null !== yR && void 0 !== yR ? yR : String(RR)), TJ.c.leftGame(this.gameNameWithVariation, RR);
+         (0, HS.reportClientError)("disconnect", "Left room", null !== Zr && void 0 !== Zr ? Zr : String(rr)), dS.c.leftGame(this.gameNameWithVariation, rr);
```
