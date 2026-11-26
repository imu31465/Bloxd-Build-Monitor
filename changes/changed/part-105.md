# Changed — Bundle Modifications Report (Part 105 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `105 / 116` (**416** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 104](part-104.md) · [Part 106 →](part-106.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientGame.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientGame.js` (956 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b)

#### 532. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5073-L5075` → after: `L4952-L4954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4952-L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4952-L4954) · [Before (L5073-L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5073-L5075)

```diff
-               for (let VV = 0; VV + kV.ae.BYTES <= UV; VV += kV.ae.BYTES) pV.push(Object.freeze({
-                 item: eV.nameOfId(kV.ae.item(yV, VV)),
-                 amt: kV.ae.amount(yV, VV)
+               for (let HH = 0; HH + uH.de.BYTES <= SH; HH += uH.de.BYTES) tH.push(Object.freeze({
+                 item: BH.nameOfId(uH.de.item(hH, HH)),
+                 amt: uH.de.amount(hH, HH)
```

#### 533. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5095-L5101` → after: `L4974-L4980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4974-L4980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4974-L4980) · [Before (L5095-L5101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5095-L5101)

```diff
-     var gY = xV(42057),
-       DY = xV(38134),
-       iY = xV(38119),
-       CY = xV(38125),
-       aY = xV(35093),
-       oY = xV(41955),
-       cY = xV(53866);
+     var Kr = LH(42092),
+       cr = LH(37821),
+       er = LH(37807),
+       qr = LH(37809),
+       gr = LH(37373),
+       Nr = LH(42002),
+       Rr = LH(54466);
```

#### 534. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5109` → after: `L4988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4988) · [Before (L5109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5109)

```diff
-       return eV.byteLength < vV.Mc ? eV : eV.subarray(0, vV.Mc - 1)
+       return BH.byteLength < GH.Dc ? BH : BH.subarray(0, GH.Dc - 1)
```

#### 535. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5117` → after: `L4996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4996) · [Before (L5117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5117)

```diff
-         this.keyframesVersion = hY, this.reloadFrom = null !== (VV = null === (eV = this.view()) || void 0 === eV ? void 0 : eV.version) && void 0 !== VV ? VV : hY
+         this.keyframesVersion = jr, this.reloadFrom = null !== (HH = null === (BH = this.view()) || void 0 === BH ? void 0 : BH.version) && void 0 !== HH ? HH : jr
```

#### 536. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5120` → after: `L4999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4999) · [Before (L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5120)

```diff
-         const eV = 1 === this.deps.core.YyV(VV);
+         const BH = 1 === this.deps.core.RSH(HH);
```

#### 537. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5141` → after: `L5020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5020) · [Before (L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5141)

```diff
-         this.deps.replay.setCameraMode(cY.e.indexOf(VV))
+         this.deps.replay.setCameraMode(Rr.b.indexOf(HH))
```

#### 538. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5145` → after: `L5024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5024) · [Before (L5145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5145)

```diff
-         const eV = kV.s.replayViewPtr(this.deps.apiView(), 0);
+         const BH = uH.y.replayViewPtr(this.deps.apiView(), 0);
```

#### 539. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5147-L5148` → after: `L5026-L5027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5026-L5027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5026-L5027) · [Before (L5147-L5148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5147-L5148)

```diff
-         const xV = new DataView(this.deps.buffer(), eV, kV.Td.BYTES),
-           JV = kV.Td.version(xV, 0),
+         const LH = new DataView(this.deps.buffer(), BH, uH.Xd.BYTES),
+           AH = uH.Xd.version(LH, 0),
```

#### 540. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5151` → after: `L5030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5030) · [Before (L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5151)

```diff
-         const UV = kV.Td.markIn(xV, 0),
+         const SH = uH.Xd.markIn(LH, 0),
```

#### 541. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5154-L5159` → after: `L5033-L5038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5033-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5033-L5038) · [Before (L5154-L5159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5154-L5159)

```diff
-             state: kV.Td.state(xV, 0),
-             cameraMode: null !== (VV = cY.e[kV.Td.cameraMode(xV, 0)]) && void 0 !== VV ? VV : "recording",
-             iZ: kV.Td.iZ(xV, 0),
-             totalTicks: kV.Td.totalTicks(xV, 0),
-             speed: kV.Td.speed(xV, 0),
-             mark: UV === kV.Qd ? null : {
+             state: uH.Xd.state(LH, 0),
+             cameraMode: null !== (HH = Rr.b[uH.Xd.cameraMode(LH, 0)]) && void 0 !== HH ? HH : "recording",
+             IX: uH.Xd.IX(LH, 0),
+             totalTicks: uH.Xd.totalTicks(LH, 0),
+             speed: uH.Xd.speed(LH, 0),
+             mark: SH === uH.Td ? null : {
```

#### 542. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5161` → after: `L5040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5040) · [Before (L5161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5161)

```diff
-               outTick: kV.Td.markOut(xV, 0)
+               outTick: uH.Xd.markOut(LH, 0)
```

#### 543. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5163` → after: `L5042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5042) · [Before (L5163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5163)

```diff
-             editVersion: kV.Td.editVersion(xV, 0)
+             editVersion: uH.Xd.editVersion(LH, 0)
```

#### 544. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5171` → after: `L5050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5050) · [Before (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5171)

```diff
-         const eV = this.reloadFrom === hY && VV.state !== vV.qd.Cropping && VV.state !== vV.qd.None,
+         const BH = this.reloadFrom === jr && HH.state !== GH.hd.Cropping && HH.state !== GH.hd.None,
```

#### 545. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5176` → after: `L5055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5055) · [Before (L5176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5176)

```diff
-         } = this.deps, YV = JV.UyV(), UV = JV.xB(), yV = [];
+         } = this.deps, rH = AH.jSH(), SH = AH.DW(), hH = [];
```

#### 546. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5178` → after: `L5057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5057) · [Before (L5178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5178)

```diff
-           const VV = new DataView(this.deps.buffer(), UV, YV * vV.Bc);
+           const HH = new DataView(this.deps.buffer(), SH, rH * GH.qc);
```

#### 547. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5180` → after: `L5059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5059) · [Before (L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5180)

```diff
-             const xV = eV * vV.Bc,
+             const LH = BH * GH.qc,
```

#### 548. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5183-L5186` → after: `L5062-L5065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5062-L5065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5062-L5065) · [Before (L5183-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5183-L5186)

```diff
-               iZ: VV.getUint32(xV + vV.Lc, !0),
-               position: [JV(vV.Kc), JV(vV.Kc + 8), JV(vV.Kc + 16)],
-               direction: [JV(vV.Fc), JV(vV.Fc + 8), JV(vV.Fc + 16)],
-               easing: [JV(vV.Gc), JV(vV.Gc + 8), JV(vV.Gc + 16), JV(vV.Gc + 24)]
+               IX: HH.getUint32(LH + GH.zc, !0),
+               position: [AH(GH.wc), AH(GH.wc + 8), AH(GH.wc + 16)],
+               direction: [AH(GH.uc), AH(GH.uc + 8), AH(GH.uc + 16)],
+               easing: [AH(GH.vc), AH(GH.vc + 8), AH(GH.vc + 16), AH(GH.vc + 24)]
```

#### 549. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5194` → after: `L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5073) · [Before (L5194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5194)

```diff
-           eV = [kV.s.eye(VV, 0, 0), kV.s.eye(VV, 0, 1), kV.s.eye(VV, 0, 2)];
+           BH = [uH.y.eye(HH, 0, 0), uH.y.eye(HH, 0, 1), uH.y.eye(HH, 0, 2)];
```

#### 550. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5198` → after: `L5077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5077) · [Before (L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5198)

```diff
-         }(kV.s.heading(VV, 0), kV.s.pitch(VV, 0)))
+         }(uH.y.heading(HH, 0), uH.y.pitch(HH, 0)))
```

#### 551. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5201` → after: `L5080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5080) · [Before (L5201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5201)

```diff
-         return this.deps.replay.setKeyframe(VV.iZ, Float64Array.from([...VV.position, ...VV.direction, ...VV.easing]))
+         return this.deps.replay.setKeyframe(HH.IX, Float64Array.from([...HH.position, ...HH.direction, ...HH.easing]))
```

#### 552. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5211` → after: `L5090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5090) · [Before (L5211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5211)

```diff
-         return this.deps.replay.setMark(null !== (eV = null === VV || void 0 === VV ? void 0 : VV.inTick) && void 0 !== eV ? eV : -1, null !== (xV = null === VV || void 0 === VV ? void 0 : VV.outTick) && void 0 !== xV ? xV : -1)
+         return this.deps.replay.setMark(null !== (BH = null === HH || void 0 === HH ? void 0 : HH.inTick) && void 0 !== BH ? BH : -1, null !== (LH = null === HH || void 0 === HH ? void 0 : HH.outTick) && void 0 !== LH ? LH : -1)
```

#### 553. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5228` → after: `L5107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5107) · [Before (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5228)

```diff
-         return null !== xV && (0, kV.Cf)(xV, 0, VV, null === eV ? lY : LY.encode(eV))
+         return null !== LH && (0, uH.Mf)(LH, 0, HH, null === BH ? nr : Fr.encode(BH))
```

#### 554. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5233` → after: `L5112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5112) · [Before (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5233)

```diff
-         return null !== YV && (0, kV.yf)(YV, 0, eV, xV, UV, LY.encode(VV))
+         return null !== rH && (0, uH.If)(rH, 0, BH, LH, SH, Fr.encode(HH))
```

#### 555. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5237` → after: `L5116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5116) · [Before (L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5237)

```diff
-         return null !== YV && (0, kV.Ff)(YV, 0, VV, eV, Math.max(0, xV), LY.encode(JV))
+         return null !== rH && (0, uH.Of)(rH, 0, HH, BH, Math.max(0, LH), Fr.encode(AH))
```

#### 556. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5245` → after: `L5124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5124) · [Before (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5245)

```diff
-                 return VV + yJ.Db + (null !== (xV = null === eV || void 0 === eV ? void 0 : eV.byteLength) && void 0 !== xV ? xV : 0)
+                 return HH + hA.Db + (null !== (LH = null === BH || void 0 === BH ? void 0 : BH.byteLength) && void 0 !== LH ? LH : 0)
```

#### 557. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5252` → after: `L5131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5131) · [Before (L5252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5252)

```diff
-               JV.setUint16(YV, null !== (UV = null === yV || void 0 === yV ? void 0 : yV.byteLength) && void 0 !== UV ? UV : vV.Mc, !0), YV += yJ.Db, null !== yV && (xV.set(yV, YV), YV += yV.byteLength)
+               AH.setUint16(rH, null !== (SH = null === hH || void 0 === hH ? void 0 : hH.byteLength) && void 0 !== SH ? SH : GH.Dc, !0), rH += hA.Db, null !== hH && (LH.set(hH, rH), rH += hH.byteLength)
```

#### 558. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5256` → after: `L5135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5135) · [Before (L5256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5256)

```diff
-         return null !== UV && (0, kV.Bf)(UV, 0, null !== (JV = VV.id) && void 0 !== JV ? JV : kV.Uc, null !== (YV = eV.id) && void 0 !== YV ? YV : kV.Uc, yV)
+         return null !== SH && (0, uH.Jf)(SH, 0, null !== (AH = HH.id) && void 0 !== AH ? AH : uH.bd, null !== (rH = BH.id) && void 0 !== rH ? rH : uH.bd, hH)
```

#### 559. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5267` → after: `L5146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5146) · [Before (L5267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5267)

```diff
-         this.deps.core.yyV()
+         this.deps.core.nSH()
```

#### 560. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5280-L5285` → after: `L5159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5159) · [Before (L5280-L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5280-L5285)

```diff
-         this.deps = VV, this.state = {
-           recording: !1,
-           clipping: !1,
-           hasClipBuffer: !1,
-           seconds: 0
-         }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (eV = VV.now) && void 0 !== eV ? eV : () => performance.now()
+         this.deps = HH, this.state = uA.c, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (BH = HH.now) && void 0 !== BH ? BH : () => performance.now()
```

#### 561. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5296` → after: `L5170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5170) · [Before (L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5296)

```diff
-         this.live && (this.viewerShown(!0 === (null === (eV = (xV = this.deps).viewerOpen) || void 0 === eV ? void 0 : eV.call(xV))), this.deps.client.recorderSession(VV, (0, cY.g)()))
+         this.live && (this.viewerShown(!0 === (null === (BH = (LH = this.deps).viewerOpen) || void 0 === BH ? void 0 : BH.call(LH))), this.deps.client.recorderSession(HH, (0, Rr.d)()))
```

#### 562. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5303` → after: `L5177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5177) · [Before (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5303)

```diff
-         this.live && (this.state.recording || !0 !== (null === (VV = (eV = this.deps).viewerOpen) || void 0 === VV ? void 0 : VV.call(eV))) ? this.deps.client.recorderControl(vV.$c.ToggleRecording) : this.deps.notify(CY.b.closeViewerFirst)
+         this.live && (this.state.recording || !0 !== (null === (HH = (BH = this.deps).viewerOpen) || void 0 === HH ? void 0 : HH.call(BH))) ? this.deps.client.recorderControl(GH.Sc.ToggleRecording) : this.deps.notify(qr.e.closeViewerFirst)
```

#### 563. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5306` → after: `L5180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5180) · [Before (L5306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5306)

```diff
-         this.live ? this.deps.client.recorderControl(vV.$c.SaveClip) : this.deps.notify(CY.b.clippingNotOn)
+         this.live ? this.deps.client.recorderControl(GH.Sc.SaveClip) : this.deps.notify(qr.e.clippingNotOn)
```

#### 564. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5309` → after: `L5183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5183) · [Before (L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5309)

```diff
-         this.live && this.deps.client.recorderControl(VV ? vV.$c.ViewerOpened : vV.$c.ViewerClosed)
+         this.live && this.deps.client.recorderControl(HH ? GH.Sc.ViewerOpened : GH.Sc.ViewerClosed)
```

#### 565. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5344` → after: `L5218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5218) · [Before (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5344)

```diff
-         } = this.deps, YV = CY.b;
+         } = this.deps, rH = qr.e;
```

#### 566. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5346` → after: `L5220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5220) · [Before (L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5346)

```diff
-           case vV._c.RecordingStarted:
+           case GH.Qc.RecordingStarted:
```

#### 567. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5353-L5354` → after: `L5227-L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5227-L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5227-L5228) · [Before (L5353-L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5353-L5354)

```diff
-           case vV._c.RecordingStopped:
-             this.stopRecording(), JV(YV.recordingStopped), this.saveState(vV.hd.Recording, "saving");
+           case GH.Qc.RecordingStopped:
+             this.stopRecording(), AH(rH.recordingStopped), this.saveState(GH.cd.Recording, "saving");
```

#### 568. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5356` → after: `L5230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5230) · [Before (L5356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5356)

```diff
-           case vV._c.RecordingDiscarded:
+           case GH.Qc.RecordingDiscarded:
```

#### 569. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5359` → after: `L5233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5233) · [Before (L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5359)

```diff
-           case vV._c.RecordingTurnedOff:
+           case GH.Qc.RecordingTurnedOff:
```

#### 570. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5362` → after: `L5236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5236) · [Before (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5362)

```diff
-           case vV._c.LimitReached:
+           case GH.Qc.LimitReached:
```

#### 571. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5365-L5366` → after: `L5239-L5240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5239-L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5239-L5240) · [Before (L5365-L5366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5365-L5366)

```diff
-           case vV._c.ClipSaved:
-             this.saveState(vV.hd.Clip, "saving");
+           case GH.Qc.ClipSaved:
+             this.saveState(GH.cd.Clip, "saving");
```

#### 572. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5368` → after: `L5242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5242) · [Before (L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5368)

```diff
-           case vV._c.ClipEmpty:
+           case GH.Qc.ClipEmpty:
```

#### 573. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5371` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5245) · [Before (L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5371)

```diff
-           case vV._c.ClippingNotOn:
+           case GH.Qc.ClippingNotOn:
```

#### 574. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5374` → after: `L5248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5248) · [Before (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5374)

```diff
-           case vV._c.Disallowed:
+           case GH.Qc.Disallowed:
```

#### 575. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5377` → after: `L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5251) · [Before (L5377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5377)

```diff
-           case vV._c.ClippingOn:
+           case GH.Qc.ClippingOn:
```

#### 576. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5384` → after: `L5258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5258) · [Before (L5384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5384)

```diff
-           case vV._c.ClippingOff:
+           case GH.Qc.ClippingOff:
```

#### 577. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5391` → after: `L5265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5265) · [Before (L5391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5391)

```diff
-           case vV._c.ClipSettingsChanged:
+           case GH.Qc.ClipSettingsChanged:
```

#### 578. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5397` → after: `L5271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5271) · [Before (L5397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5397)

```diff
-           case vV._c.SaveBusy:
+           case GH.Qc.SaveBusy:
```

#### 579. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5400` → after: `L5274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5274) · [Before (L5400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5400)

```diff
-           case vV._c.CloseViewerFirst:
+           case GH.Qc.CloseViewerFirst:
```

#### 580. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5405` → after: `L5279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5279) · [Before (L5405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5405)

```diff
-         this.deps.download(eV), this.saveState(VV, "done"), this.deps.notify(VV === vV.hd.Clip ? CY.b.clipSaved : CY.b.recordingSaved)
+         this.deps.download(BH), this.saveState(HH, "done"), this.deps.notify(HH === GH.cd.Clip ? qr.e.clipSaved : qr.e.recordingSaved)
```

#### 581. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5408` → after: `L5282-L5285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5282-L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5282-L5285) · [Before (L5408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5408)

```diff
-         this.saveState(VV, "failed"), this.deps.notify(VV === vV.hd.Clip ? CY.b.clipFailed : CY.b.recordingFailed)
+         this.saveState(HH, "failed"), this.deps.notify(HH === GH.cd.Clip ? qr.e.clipFailed : qr.e.recordingFailed)
+       }
+       stopped() {
+         this.recordingSince = null, this.clipTickPending = !1, this.set(uA.c)
```

#### 582. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5432` → after: `L5309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5309) · [Before (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5432)

```diff
-         if (eV += yJ.Db, JV !== vV.Mc) {
+         if (BH += hA.Db, AH !== GH.Dc) {
```

#### 583. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5437` → after: `L5314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5314) · [Before (L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5437)

```diff
-       return eV === xV ? YV : null
+       return BH === LH ? rH : null
```

#### 584. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5454` → after: `L5331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5331) · [Before (L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5454)

```diff
-               case vV.ld.Cleared:
+               case GH.ed.Cleared:
```

#### 585. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5456` → after: `L5333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5333) · [Before (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5456)

```diff
-               case vV.ld.Text:
+               case GH.ed.Text:
```

#### 586. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5458` → after: `L5335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5335) · [Before (L5458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5458)

```diff
-               case vV.ld.Int:
+               case GH.ed.Int:
```

#### 587. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5460` → after: `L5337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5337) · [Before (L5460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5460)

```diff
-               case vV.ld.Double:
+               case GH.ed.Double:
```

#### 588. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5475` → after: `L5352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5352) · [Before (L5475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5475)

```diff
-               case vV.od.FlyingText: {
+               case GH.gd.FlyingText: {
```

#### 589. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5479-L5480` → after: `L5356-L5357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5356-L5357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5356-L5357) · [Before (L5479-L5480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5479-L5480)

```diff
-                   Sx: xV,
-                   ux: JV,
+                   ar: LH,
+                   dr: AH,
```

#### 590. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5485` → after: `L5362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5362) · [Before (L5485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5485)

```diff
-               case vV.od.PlayerKilled: {
+               case GH.gd.PlayerKilled: {
```

#### 591. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5495` → after: `L5372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5372) · [Before (L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5495)

```diff
-               case vV.od.Killfeed: {
+               case GH.gd.Killfeed: {
```

#### 592. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5537` → after: `L5414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5414) · [Before (L5537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5537)

```diff
-       return (VV, eV, UV, yV) => !(VV < vV.hb.ReplayFailed || VV > vV.hb.RecorderEvent) && (xV = eV, JV = !0, (0, kV.se)(VV, eV, UV, yV, YV) && JV)
+       return (HH, BH, SH, hH) => !(HH < GH.X.ReplayFailed || HH > GH.X.RecorderEvent) && (LH = BH, AH = !0, (0, uH.we)(HH, BH, SH, hH, rH) && AH)
```

#### 593. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5553` → after: `L5430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5430) · [Before (L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5553)

```diff
-               if (YV + vV.db > xV.byteLength) throw new Error(`the recorder module's events end mid-head at ${YV}`);
+               if (rH + GH.U > LH.byteLength) throw new Error(`the recorder module's events end mid-head at ${rH}`);
```

#### 594. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5557-L5559` → after: `L5434-L5436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5434-L5436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5434-L5436) · [Before (L5557-L5559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5557-L5559)

```diff
-                 pV = YV + vV.db;
-               if (pV + yV > xV.byteLength || !eV(UV, JV, pV, yV)) throw new Error(`the recorder module wrote a malformed event ${UV} (${yV} bytes) at ${YV}`);
-               YV = pV + (0, vV.ze)(yV)
+                 tH = rH + GH.U;
+               if (tH + hH > LH.byteLength || !BH(SH, AH, tH, hH)) throw new Error(`the recorder module wrote a malformed event ${SH} (${hH} bytes) at ${rH}`);
+               rH = tH + (0, GH.te)(hH)
```

#### 595. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5577` → after: `L5454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5454) · [Before (L5577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5577)

```diff
-         const xV = null !== (eV = this.parts.get(VV.save)) && void 0 !== eV ? eV : [];
+         const LH = null !== (BH = this.parts.get(HH.save)) && void 0 !== BH ? BH : [];
```

#### 596. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5601` → after: `L5478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5478) · [Before (L5601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5601)

```diff
-       return xV.e(72).then((() => xV(63638)))
+       return LH.e(72).then((() => LH(64081)))
```

#### 597. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5626` → after: `L5503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5503) · [Before (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5626)

```diff
-             eV === vV.hd.Edited ? null === (JV = this.viewer) || void 0 === JV || JV.saveDone(xV) : this.recorder.fileReady(eV, xV)
+             BH === GH.cd.Edited ? null === (AH = this.viewer) || void 0 === AH || AH.saveDone(LH) : this.recorder.fileReady(BH, LH)
```

#### 598. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5658` → after: `L5535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5535) · [Before (L5658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5658)

```diff
-               case vV._c.FileDiscarded:
+               case GH.Qc.FileDiscarded:
```

#### 599. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5661` → after: `L5538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5538) · [Before (L5661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5661)

```diff
-               case vV._c.SaveFailed:
+               case GH.Qc.SaveFailed:
```

#### 600. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5664` → after: `L5541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5541) · [Before (L5664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5664)

```diff
-               case vV._c.SaveBusy:
+               case GH.Qc.SaveBusy:
```

#### 601. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5687` → after: `L5564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5564) · [Before (L5687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5687)

```diff
-         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (VV = this.deps.loadViewer) && void 0 !== VV ? VV : OY)().catch((VV => {
+         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (HH = this.deps.loadViewer) && void 0 !== HH ? HH : yr)().catch((HH => {
```

#### 602. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5705` → after: `L5582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5582) · [Before (L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5705)

```diff
-           VV > 0 && this.recorder.iZ()
+           HH > 0 && this.recorder.IX()
```

#### 603. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5717` → after: `L5594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5594) · [Before (L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5717)

```diff
-         VV === vV.hd.Edited ? null === (eV = this.viewer) || void 0 === eV || eV.saveFailed(!1) : this.recorder.failed(VV)
+         HH === GH.cd.Edited ? null === (BH = this.viewer) || void 0 === BH || BH.saveFailed(!1) : this.recorder.failed(HH)
```

#### 604. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5720-L5723` → after: `L5597-L5600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5597-L5600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5597-L5600) · [Before (L5720-L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5720-L5723)

```diff
-     var eU = xV(41885),
-       xU = xV(41909),
-       JU = xV(5307),
-       YU = xV(42210);
+     var BS = LH(41940),
+       LS = LH(41954),
+       AS = LH(5275),
+       rS = LH(42240);
```

#### 605. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5730` → after: `L5607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5607) · [Before (L5730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5730)

```diff
-         const xV = (0, cV.s)(0, performance.now()),
+         const LH = (0, jH.u)(0, performance.now()),
```

#### 606. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5732-L5733` → after: `L5609-L5610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5609-L5610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5609-L5610) · [Before (L5732-L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5732-L5733)

```diff
-         (0, YU.f)((() => {
-           (0, cV.x)(vV.Gb.MouseDown, 0, 0, 0, xV), (0, cV.x)(vV.Gb.MouseMove, 0, VV * JV, eV * JV, 0), (0, cV.x)(vV.Gb.MouseUp, 0, 0, 0, xV)
+         (0, rS.h)((() => {
+           (0, jH.A)(GH.tb.MouseDown, 0, 0, 0, LH), (0, jH.A)(GH.tb.MouseMove, 0, HH * AH, BH * AH, 0), (0, jH.A)(GH.tb.MouseUp, 0, 0, 0, LH)
```

#### 607. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5738` → after: `L5615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5615) · [Before (L5738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5738)

```diff
-         this.analogue[0] = null !== (eV = null === VV || void 0 === VV ? void 0 : VV.x) && void 0 !== eV ? eV : 0, this.analogue[1] = null !== (xV = null === VV || void 0 === VV ? void 0 : VV.y) && void 0 !== xV ? xV : 0, this.send()
+         this.analogue[0] = null !== (BH = null === HH || void 0 === HH ? void 0 : HH.x) && void 0 !== BH ? BH : 0, this.analogue[1] = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.y) && void 0 !== LH ? LH : 0, this.send()
```

#### 608. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5741-L5742` → after: `L5618-L5619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5618-L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5618-L5619) · [Before (L5741-L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5741-L5742)

```diff
-         const xV = "freeCamUp" === VV ? kV.Zb.Up : kV.Zb.Down;
-         this.keys = eV ? this.keys | xV : this.keys & ~xV, this.send()
+         const LH = "freeCamUp" === HH ? uH.ec.Up : uH.ec.Down;
+         this.keys = BH ? this.keys | LH : this.keys & ~LH, this.send()
```

#### 609. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5749` → after: `L5626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5626) · [Before (L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5749)

```diff
-         this.unsent = null !== VV && !(0, kV.Ge)(VV, 0, this.analogue, this.keys)
+         this.unsent = null !== HH && !(0, uH.Qe)(HH, 0, this.analogue, this.keys)
```

#### 610. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5752-L5758` → after: `L5629-L5635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5629-L5635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5629-L5635) · [Before (L5752-L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5752-L5758)

```diff
-     var yU = xV(3992),
-       pU = xV(767),
-       QU = xV(313),
-       nU = xV(99),
-       wU = xV(35240),
-       ZU = xV(752),
-       vU = xV(37749);
+     var hS = LH(3950),
+       tS = LH(725),
+       zS = LH(257),
+       CS = LH(81),
+       ES = LH(34908),
+       XS = LH(703),
+       GS = LH(37467);
```

#### 611. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5761-L5762` → after: `L5638-L5639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5638-L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5638-L5639) · [Before (L5761-L5762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5761-L5762)

```diff
-       const VV = JV.b.get("clientEscMenuOptions"),
-         eV = (0, pU.r)(VV);
+       const HH = AH.c.get("clientEscMenuOptions"),
+         BH = (0, tS.q)(HH);
```

#### 612. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5764` → after: `L5641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5641) · [Before (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5764)

```diff
-         mouse: (0, nU.isMobile)() ? eV : VV.mouseSensitivity,
+         mouse: (0, CS.isMobile)() ? BH : HH.mouseSensitivity,
```

#### 613. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5771-L5772` → after: `L5648-L5649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5648-L5649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5648-L5649) · [Before (L5771-L5772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5771-L5772)

```diff
-       const VV = JV.b.get("clientEscMenuOptions"),
-         eV = JV.b.get("isTouchScreen") ? (0, pU.r)(VV) : VV.mouseSensitivity,
+       const HH = AH.c.get("clientEscMenuOptions"),
+         BH = AH.c.get("isTouchScreen") ? (0, tS.q)(HH) : HH.mouseSensitivity,
```

#### 614. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5774` → after: `L5651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5651) · [Before (L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5774)

```diff
-       return xV > 0 ? eV / xV : 1
+       return LH > 0 ? BH / LH : 1
```

#### 615. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5779` → after: `L5656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5656) · [Before (L5779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5779)

```diff
-         VV.setSoundPrefs(JV.b.get("soundVolume"), JV.b.get("soundOnFromAd"))
+         HH.setSoundPrefs(AH.c.get("soundVolume"), AH.c.get("soundOnFromAd"))
```

#### 616. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5788` → after: `L5665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5665) · [Before (L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5788)

```diff
-         } = JV.b.get("clientEscMenuOptions"), pV = {
+         } = AH.c.get("clientEscMenuOptions"), tH = {
```

#### 617. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5793` → after: `L5670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5670) · [Before (L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5793)

```diff
-           cellLight: (0, yU.i)("cellLight") ? (0, yU.i)("cellLightUnlit") ? "all" : "lit" : "off"
+           cellLight: (0, hS.n)("cellLight") ? (0, hS.n)("cellLightUnlit") ? "all" : "lit" : "off"
```

#### 618. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5795` → after: `L5672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5672) · [Before (L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5795)

```diff
-         xV && (0, vV.fe)(xV) === (0, vV.fe)(pV) && xV.fogChunks === UV || (xV = pV, VV.setEnvPrefs(xV))
+         LH && (0, GH.ae)(LH) === (0, GH.ae)(tH) && LH.fogChunks === SH || (LH = tH, HH.setEnvPrefs(LH))
```

#### 619. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5800` → after: `L5677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5677) · [Before (L5800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5800)

```diff
-           const VV = JV.b.get("clientEscMenuOptions");
+           const HH = AH.c.get("clientEscMenuOptions");
```

#### 620. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5802` → after: `L5679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5679) · [Before (L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5802)

```diff
-             nametagsHidden: JV.b.get("areNametagsHidden"),
+             nametagsHidden: AH.c.get("areNametagsHidden"),
```

#### 621. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5806` → after: `L5683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5683) · [Before (L5806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5806)

```diff
-             ezTowering: VV.ezTowering ? (0, QU.d)() : null,
+             ezTowering: HH.ezTowering ? (0, zS.i)() : null,
```

#### 622. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5811-L5812` → after: `L5688-L5689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5688-L5689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5688-L5689) · [Before (L5811-L5812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5811-L5812)

```diff
-             edgeGuardLong: (0, ZU.d)(),
-             nametagCutDistance: (0, wU.f)()
+             edgeGuardLong: (0, XS.b)(),
+             nametagCutDistance: (0, ES.i)()
```

#### 623. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5815` → after: `L5692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5692) · [Before (L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5815)

```diff
-         (0, MV.Xd)(UV, eV) || (UV = eV, VV.setUiPrefs(eV))
+         (0, mH.ne)(SH, BH) || (SH = BH, HH.setUiPrefs(BH))
```

#### 624. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5820` → after: `L5697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5697) · [Before (L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5820)

```diff
-         (0, MV.Xd)(QV, eV) || (QV = eV, VV.setLookPrefs(eV))
+         (0, mH.ne)(zH, BH) || (zH = BH, HH.setLookPrefs(BH))
```

#### 625. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5823` → after: `L5700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5700) · [Before (L5823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5823)

```diff
-       const wV = [(0, yV.i)("appManagerUpdated|soundVolume", eV), (0, yV.i)("appManagerUpdated|soundOnFromAd", eV), (0, yV.i)("appManagerUpdated|clientEscMenuOptions", (() => {
+       const EH = [(0, hH.m)("appManagerUpdated|soundVolume", BH), (0, hH.m)("appManagerUpdated|soundOnFromAd", BH), (0, hH.m)("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 626. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5825` → after: `L5702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5702) · [Before (L5825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5825)

```diff
-       })), (0, yV.i)(vU.d, pV), (0, yV.i)("appManagerUpdated|enabledDebugFeatures", YV), (0, yV.i)("appManagerUpdated|areNametagsHidden", pV), (0, yV.i)("appManagerUpdated|showDistantNametags", pV)];
+       })), (0, hH.m)(GS.d, tH), (0, hH.m)("appManagerUpdated|enabledDebugFeatures", rH), (0, hH.m)("appManagerUpdated|areNametagsHidden", tH), (0, hH.m)("appManagerUpdated|showDistantNametags", tH)];
```

#### 627. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5830-L5835` → after: `L5707-L5712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5707-L5712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5707-L5712) · [Before (L5830-L5835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5830-L5835)

```diff
-     var EU = xV(42184),
-       BU = xV(42192);
-     var jU = (0, BU.e)("lend"),
-       qU = (0, BU.e)("starting"),
-       tU = (0, BU.e)("generation"),
-       FU = (0, BU.e)("end");
+     var WS = LH(42216),
+       MS = LH(42222);
+     var xS = (0, MS.c)("lend"),
+       vS = (0, MS.c)("starting"),
+       PS = (0, MS.c)("generation"),
+       TS = (0, MS.c)("end");
```

#### 628. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5852` → after: `L5729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5729) · [Before (L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5852)

```diff
-         return null !== (0, EU.d)(this, jU)[jU] || (0, EU.d)(this, qU)[qU]
+         return null !== (0, WS.e)(this, xS)[xS] || (0, WS.e)(this, vS)[vS]
```

#### 629. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5856-L5857` → after: `L5733-L5734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5733-L5734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5733-L5734) · [Before (L5856-L5857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5856-L5857)

```diff
-         const eV = (0, EU.d)(this, tU)[tU];
-         (0, EU.d)(this, qU)[qU] = !0;
+         const BH = (0, WS.e)(this, PS)[PS];
+         (0, WS.e)(this, vS)[vS] = !0;
```

#### 630. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5861` → after: `L5738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5738) · [Before (L5861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5861)

```diff
-           (0, EU.d)(this, qU)[qU] = !1
+           (0, WS.e)(this, vS)[vS] = !1
```

#### 631. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5863` → after: `L5740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5740) · [Before (L5863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5863)

```diff
-         if (eV !== (0, EU.d)(this, tU)[tU]) return "refused";
+         if (BH !== (0, WS.e)(this, PS)[PS]) return "refused";
```

#### 632. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5872-L5873` → after: `L5749-L5750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5749-L5750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5749-L5750) · [Before (L5872-L5873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5872-L5873)

```diff
-           0 !== pV ? (new Uint8Array(eV.buffer, pV, yV.length).set(yV), VV.QyV(xV.headLen, JV, YV) && (UV = "sealing")) : UV = "tooLarge"
-         }), !0), "sealing" !== UV ? (xV.end(), UV) : ((0, EU.d)(this, jU)[jU] = xV, "sealing")
+           0 !== tH ? (new Uint8Array(BH.buffer, tH, hH.length).set(hH), HH.FSH(LH.headLen, AH, rH) && (SH = "sealing")) : SH = "tooLarge"
+         }), !0), "sealing" !== SH ? (LH.end(), SH) : ((0, WS.e)(this, xS)[xS] = LH, "sealing")
```

#### 633. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5876` → after: `L5753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5753) · [Before (L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5876)

```diff
-         const VV = (0, EU.d)(this, jU)[jU];
+         const HH = (0, WS.e)(this, xS)[xS];
```

#### 634. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5881-L5883` → after: `L5758-L5760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5758-L5760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5758-L5760) · [Before (L5881-L5883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5881-L5883)

```diff
-             eV = VV.nyV(), eV > 0 && (xV = VV.wyV())
-           }))) return (0, EU.d)(this, FU)[FU](VV, "stopped");
-         if (eV < 0) return (0, EU.d)(this, FU)[FU](VV, "read");
+             BH = HH.DSH(), BH > 0 && (LH = HH.wSH())
+           }))) return (0, WS.e)(this, TS)[TS](HH, "stopped");
+         if (BH < 0) return (0, WS.e)(this, TS)[TS](HH, "read");
```

#### 635. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5893` → after: `L5770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5770) · [Before (L5893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5893)

```diff
-           VV.ZyV()
+           HH.ZSH()
```

#### 636. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5895` → after: `L5772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5772) · [Before (L5895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5895)

```diff
-         const yV = (0, EU.d)(this, FU)[FU](VV, UV ? "givenUp" : "stopped");
+         const hH = (0, WS.e)(this, TS)[TS](HH, SH ? "givenUp" : "stopped");
```

#### 637. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5899-L5900` → after: `L5776-L5777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5776-L5777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5776-L5777) · [Before (L5899-L5900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5899-L5900)

```diff
-         (0, EU.d)(this, tU)[tU]++;
-         const VV = (0, EU.d)(this, jU)[jU];
+         (0, WS.e)(this, PS)[PS]++;
+         const HH = (0, WS.e)(this, xS)[xS];
```

#### 638. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5902-L5903` → after: `L5779-L5780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5779-L5780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5779-L5780) · [Before (L5902-L5903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5902-L5903)

```diff
-           VV.ZyV()
-         })), (0, EU.d)(this, FU)[FU](VV, "stopped"))
+           HH.ZSH()
+         })), (0, WS.e)(this, TS)[TS](HH, "stopped"))
```

#### 639. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5908` → after: `L5785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5785) · [Before (L5908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5908)

```diff
-       return (0, EU.d)(this, jU)[jU] = null, VV.end(), eV
+       return (0, WS.e)(this, xS)[xS] = null, HH.end(), BH
```

#### 640. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5929` → after: `L5806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5806) · [Before (L5929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5929)

```diff
-         if (VV.busy() || !NU(VV.memoryBytes(), VV.clipSeconds())) return "ZZ";
+         if (HH.busy() || !bS(HH.memoryBytes(), HH.clipSeconds())) return "hX";
```

#### 641. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5937` → after: `L5814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5814) · [Before (L5937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5937)

```diff
-         if (!xV) return VV.trapped() ? "trapped" : VV.ik() ? "ik" : "failed";
+         if (!LH) return HH.trapped() ? "trapped" : HH.Mu() ? "Mu" : "failed";
```

#### 642. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5944-L5984` → after: `L5821-L5862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5821-L5862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5821-L5862) · [Before (L5944-L5984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5944-L5984)

```diff
-       GU = new Set([vV.$c.ToggleRecording, vV.$c.SaveClip]);
-     var WU = (0, BU.e)("bindings"),
-       RU = (0, BU.e)("module"),
-       gU = (0, BU.e)("memory"),
-       DU = (0, BU.e)("trapped"),
-       iU = (0, BU.e)("ik"),
-       CU = (0, BU.e)("recycleDue"),
-       aU = (0, BU.e)("loading"),
-       oU = (0, BU.e)("generation"),
-       cU = (0, BU.e)("viewDrawn"),
-       hU = (0, BU.e)("clip"),
-       lU = (0, BU.e)("session"),
-       LU = (0, BU.e)("control"),
-       fU = (0, BU.e)("deferred"),
-       mU = (0, BU.e)("coreU8"),
-       KU = (0, BU.e)("coreU32"),
- ... (25 more removed lines; see GitHub link above)
+       IS = "Replay recording stopped working, so reload the page to record replays again.",
+       fS = new Set([GH.Sc.ToggleRecording, GH.Sc.SaveClip]);
+     var lS = (0, MS.c)("bindings"),
+       KS = (0, MS.c)("module"),
+       cS = (0, MS.c)("memory"),
+       eS = (0, MS.c)("trapped"),
+       qS = (0, MS.c)("Mu"),
+       gS = (0, MS.c)("recycleDue"),
+       NS = (0, MS.c)("loading"),
+       RS = (0, MS.c)("generation"),
+       jS = (0, MS.c)("viewDrawn"),
+       nS = (0, MS.c)("clip"),
+       FS = (0, MS.c)("session"),
+       DS = (0, MS.c)("control"),
+       wS = (0, MS.c)("deferred"),
+       ZS = (0, MS.c)("coreU8"),
+ ... (26 more added lines; see GitHub link above)
```

#### 643. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6084-L6085` → after: `L5962-L5963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5962-L5963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5962-L5963) · [Before (L6084-L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6084-L6085)

```diff
-         }), (0, EU.d)(this, uU)[uU] = new TU({
-           ensureLoaded: () => (0, EU.d)(this, Vy)[Vy](),
+         }), (0, WS.e)(this, sS)[sS] = new US({
+           ensureLoaded: () => (0, WS.e)(this, Bh)[Bh](),
```

#### 644. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6087-L6088` → after: `L5965-L5966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5965-L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5965-L5966) · [Before (L6087-L6088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6087-L6088)

```diff
-             eV && (0, EU.d)(this, SU)[SU]("an edited save's stage");
-             const xV = (0, EU.d)(this, by)[by](((eV, xV) => (VV(eV, xV), !0)));
+             BH && (0, WS.e)(this, iS)[iS]("an edited save's stage");
+             const LH = (0, WS.e)(this, Wh)[Wh](((BH, LH) => (HH(BH, LH), !0)));
```

#### 645. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6096` → after: `L5974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5974) · [Before (L6096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6096)

```diff
-         return null !== (0, EU.d)(this, RU)[RU]
+         return null !== (0, WS.e)(this, KS)[KS]
```

#### 646. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6099` → after: `L5977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5977) · [Before (L6099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6099)

```diff
-         return (0, EU.d)(this, DU)[DU]
+         return (0, WS.e)(this, eS)[eS]
```

#### 647. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6102` → after: `L5980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5980) · [Before (L6102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6102)

```diff
-         return null !== (0, EU.d)(this, aU)[aU]
+         return null !== (0, WS.e)(this, NS)[NS]
```

#### 648. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6105` → after: `L5983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5983) · [Before (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6105)

```diff
-         (0, EU.d)(this, iU)[iU] || (0, EU.d)(this, DU)[DU] || (0, EU.d)(this, RU)[RU] || (0, EU.d)(this, aU)[aU] || this.deps.prefetch()
+         (0, WS.e)(this, qS)[qS] || (0, WS.e)(this, eS)[eS] || (0, WS.e)(this, KS)[KS] || (0, WS.e)(this, NS)[NS] || this.deps.prefetch()
```

#### 649. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6108` → after: `L5986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5986) · [Before (L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6108)

```diff
-         (0, EU.d)(this, cU)[cU] = !0, (0, EU.d)(this, IU)[IU]() && (0, EU.d)(this, OU)[OU]()
+         (0, WS.e)(this, jS)[jS] = !0, (0, WS.e)(this, pS)[pS]() && (0, WS.e)(this, Hh)[Hh]()
```

#### 650. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6111` → after: `L5989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5989) · [Before (L6111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6111)

```diff
-         (0, EU.d)(this, hU)[hU] = {
+         (0, WS.e)(this, nS)[nS] = {
```

#### 651. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6114` → after: `L5992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5992) · [Before (L6114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6114)

```diff
-         }, (0, EU.d)(this, Qy)[Qy](vV.Yc.Prefs, AU(VV, eV)), VV && (0, EU.d)(this, cU)[cU] && (0, EU.d)(this, OU)[OU]()
+         }, (0, WS.e)(this, Ch)[Ch](GH.Mc.Prefs, OS(HH, BH)), HH && (0, WS.e)(this, jS)[jS] && (0, WS.e)(this, Hh)[Hh]()
```

#### 652. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6120-L6121` → after: `L5998-L6001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5998-L6001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5998-L6001) · [Before (L6120-L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6120-L6121)

```diff
-         if (GU.has(VV)) return (0, EU.d)(this, RU)[RU] ? void(0, EU.d)(this, Qy)[Qy](vV.Yc.Control, eV) : ((0, EU.d)(this, LU)[LU] = eV, void(0, EU.d)(this, OU)[OU]());
-         (0, EU.d)(this, iU)[iU] || this.deps.coreCommand(vV.Yc.Control, eV)
+         if (fS.has(HH)) {
+           if (!(0, WS.e)(this, eS)[eS]) return (0, WS.e)(this, KS)[KS] ? void(0, WS.e)(this, Ch)[Ch](GH.Mc.Control, BH) : ((0, WS.e)(this, DS)[DS] = BH, void(0, WS.e)(this, Hh)[Hh]());
+           this.deps.failed(IS)
+         } else(0, WS.e)(this, qS)[qS] || this.deps.coreCommand(GH.Mc.Control, BH)
```

#### 653. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6124` → after: `L6004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6004) · [Before (L6124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6124)

```diff
-         (0, EU.d)(this, lU)[lU] = VV, (0, EU.d)(this, sU)[sU](VV)
+         (0, WS.e)(this, FS)[FS] = HH, (0, WS.e)(this, JS)[JS](HH)
```

#### 654. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6127` → after: `L6007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6007) · [Before (L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6127)

```diff
-         (0, EU.d)(this, Qy)[Qy](vV.Yc.FilePartDone, function(VV, eV) {
+         (0, WS.e)(this, Ch)[Ch](GH.Mc.FilePartDone, function(HH, BH) {
```

#### 655. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6134` → after: `L6014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6014) · [Before (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6134)

```diff
-         return (0, EU.d)(this, Qy)[Qy](vV.Yc.FileDone, function(VV) {
+         return (0, WS.e)(this, Ch)[Ch](GH.Mc.FileDone, function(HH) {
```

#### 656. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6137` → after: `L6017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6017) · [Before (L6137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6137)

```diff
-         }(VV)), (0, EU.d)(this, xy)[xy]()
+         }(HH)), (0, WS.e)(this, Ah)[Ah]()
```

#### 657. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6140` → after: `L6020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6020) · [Before (L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6140)

```diff
-         return (0, EU.d)(this, SU)[SU]("saveEdited"), (0, EU.d)(this, uU)[uU].start(VV)
+         return (0, WS.e)(this, iS)[iS]("saveEdited"), (0, WS.e)(this, sS)[sS].start(HH)
```

#### 658. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6143-L6149` → after: `L6023-L6029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6023-L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6023-L6029) · [Before (L6143-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6143-L6149)

```diff
-         if (!(0, EU.d)(this, RU)[RU]) return;
-         "read" === (0, EU.d)(this, uU)[uU].beforeRecorderStep() && (0, EU.d)(this, xy)[xy]();
-         const VV = (0, EU.d)(this, CU)[CU];
-         (0, EU.d)(this, CU)[CU] = null;
-         const eV = (0, EU.d)(this, RU)[RU],
-           xV = (0, EU.d)(this, gU)[gU];
-         if (!eV || !xV) return void(null === VV || void 0 === VV || VV.resolve((0, EU.d)(this, DU)[DU] ? "trapped" : "ZZ"));
+         if (!(0, WS.e)(this, KS)[KS]) return;
+         "read" === (0, WS.e)(this, sS)[sS].beforeRecorderStep() && (0, WS.e)(this, Ah)[Ah]();
+         const HH = (0, WS.e)(this, gS)[gS];
+         (0, WS.e)(this, gS)[gS] = null;
+         const BH = (0, WS.e)(this, KS)[KS],
+           LH = (0, WS.e)(this, cS)[cS];
+         if (!BH || !LH) return void(null === HH || void 0 === HH || HH.resolve((0, WS.e)(this, eS)[eS] ? "trapped" : "hX"));
```

#### 659. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6152` → after: `L6032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6032) · [Before (L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6152)

```diff
-         } = this.deps, YV = JV.kyV(2);
+         } = this.deps, rH = AH.sSH(2);
```

#### 660. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6157-L6158` → after: `L6037-L6038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6037-L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6037-L6038) · [Before (L6157-L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6157-L6158)

```diff
-           const VV = (0, EU.d)(this, vy)[vy]();
-           nV = null !== (ZV = VV[YV >>> 2]) && void 0 !== ZV ? ZV : 0, wV = null !== (vV = VV[1 + (YV >>> 2)]) && void 0 !== vV ? vV : 0
+           const HH = (0, WS.e)(this, Yh)[Yh]();
+           CH = null !== (XH = HH[rH >>> 2]) && void 0 !== XH ? XH : 0, EH = null !== (GH = HH[1 + (rH >>> 2)]) && void 0 !== GH ? GH : 0
```

#### 661. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6163` → after: `L6043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6043) · [Before (L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6163)

```diff
-             0 !== VV && (0, EU.d)(this, ry)[ry](xV).set((0, EU.d)(this, Zy)[Zy]().subarray(nV, nV + wV), VV)
+             0 !== HH && (0, WS.e)(this, uh)[uh](LH).set((0, WS.e)(this, Gh)[Gh]().subarray(CH, CH + EH), HH)
```

#### 662. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6165` → after: `L6045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6045) · [Before (L6165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6165)

```diff
-           UV = eV.step(), yV = eV.byV(), pV = eV.EyV(), QV = eV.ByV()
+           SH = BH.step(), hH = BH.JSH(), tH = BH.iSH(), zH = BH.pSH()
```

#### 663. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6167` → after: `L6047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6047) · [Before (L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6167)

```diff
-           if (!(0, EU.d)(this, By)[By](rV)) throw null === VV || void 0 === VV || VV.resolve("ZZ"), rV;
+           if (!(0, WS.e)(this, xh)[xh](YH)) throw null === HH || void 0 === HH || HH.resolve("hX"), YH;
```

#### 664. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6171-L6172` → after: `L6051-L6052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6051-L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6051-L6052) · [Before (L6171-L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6171-L6172)

```diff
-           const VV = JV.jyV(2, UV);
-           0 !== VV && (0, EU.d)(this, Zy)[Zy]().set((0, EU.d)(this, ry)[ry](xV).subarray(yV, yV + UV), VV)
+           const HH = AH.ySH(2, SH);
+           0 !== HH && (0, WS.e)(this, Gh)[Gh]().set((0, WS.e)(this, uh)[uh](LH).subarray(hH, hH + SH), HH)
```

#### 665. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6175` → after: `L6055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6055) · [Before (L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6175)

```diff
-           (0, EU.d)(this, fU)[fU] = [];
+           (0, WS.e)(this, wS)[wS] = [];
```

#### 666. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6179` → after: `L6059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6059) · [Before (L6179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6179)

```diff
-             throw null === VV || void 0 === VV || VV.resolve("ZZ"), rV
+             throw null === HH || void 0 === HH || HH.resolve("hX"), YH
```

#### 667. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6181-L6183` → after: `L6061-L6063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6061-L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6061-L6063) · [Before (L6181-L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6181-L6183)

```diff
-             const VV = (0, EU.d)(this, fU)[fU];
-             (0, EU.d)(this, fU)[fU] = null;
-             for (const [eV, xV] of VV)(0, EU.d)(this, Qy)[Qy](eV, xV)
+             const HH = (0, WS.e)(this, wS)[wS];
+             (0, WS.e)(this, wS)[wS] = null;
+             for (const [BH, LH] of HH)(0, WS.e)(this, Ch)[Ch](BH, LH)
```

#### 668. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6186-L6187` → after: `L6066-L6067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6066-L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6066-L6067) · [Before (L6186-L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6186-L6187)

```diff
-         if (!(0, EU.d)(this, IU)[IU]() && !(0, EU.d)(this, dU)[dU]()) return (0, EU.d)(this, ny)[ny](), void(null === VV || void 0 === VV || VV.resolve("ZZ"));
-         null === VV || void 0 === VV || VV.resolve((0, EU.d)(this, py)[py]())
+         if (!(0, WS.e)(this, pS)[pS]() && !(0, WS.e)(this, yS)[yS]()) return (0, WS.e)(this, Eh)[Eh](), void(null === HH || void 0 === HH || HH.resolve("hX"));
+         null === HH || void 0 === HH || HH.resolve((0, WS.e)(this, zh)[zh]())
```

#### 669. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6190` → after: `L6070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6070) · [Before (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6190)

```diff
-         (0, EU.d)(this, iU)[iU] = !0, (0, EU.d)(this, ny)[ny]()
+         (0, WS.e)(this, qS)[qS] = !0, (0, WS.e)(this, Eh)[Eh]()
```

#### 670. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6195` → after: `L6075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6075) · [Before (L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6195)

```diff
-       (0, EU.d)(this, Qy)[Qy](vV.Yc.Session, function(VV) {
+       (0, WS.e)(this, Ch)[Ch](GH.Mc.Session, function(HH) {
```

#### 671. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6217` → after: `L6097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6097) · [Before (L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6217)

```diff
-       return null !== (VV = null === (eV = (0, EU.d)(this, hU)[hU]) || void 0 === eV ? void 0 : eV.on) && void 0 !== VV && VV
+       return null !== (HH = null === (BH = (0, WS.e)(this, nS)[nS]) || void 0 === BH ? void 0 : BH.on) && void 0 !== HH && HH
```

#### 672. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6221` → after: `L6101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6101) · [Before (L6221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6221)

```diff
-       const VV = (0, EU.d)(this, RU)[RU];
+       const HH = (0, WS.e)(this, KS)[KS];
```

#### 673. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6226` → after: `L6106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6106) · [Before (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6226)

```diff
-         if (!(0, EU.d)(this, By)[By](xV)) throw xV
+         if (!(0, WS.e)(this, xh)[xh](LH)) throw LH
```

#### 674. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6228` → after: `L6108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6108) · [Before (L6228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6228)

```diff
-       return eV || (0, EU.d)(this, uU)[uU].active
+       return BH || (0, WS.e)(this, sS)[sS].active
```

#### 675. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6231` → after: `L6111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6111) · [Before (L6231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6231)

```diff
-       !(0, EU.d)(this, iU)[iU] && this.deps.allowed() ? await (0, EU.d)(this, Vy)[Vy]() : (0, EU.d)(this, LU)[LU] = null
+       !(0, WS.e)(this, qS)[qS] && this.deps.allowed() ? await (0, WS.e)(this, Bh)[Bh]() : (0, WS.e)(this, DS)[DS] = null
```

#### 676. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6235` → after: `L6115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6115) · [Before (L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6235)

```diff
-       return (0, EU.d)(this, DU)[DU] || (0, EU.d)(this, iU)[iU] ? Promise.resolve(!1) : (0, EU.d)(this, RU)[RU] ? Promise.resolve(!0) : ((0, EU.d)(this, aU)[aU] ??= (0, EU.d)(this, ey)[ey](), (0, EU.d)(this, aU)[aU])
+       return (0, WS.e)(this, eS)[eS] || (0, WS.e)(this, qS)[qS] ? Promise.resolve(!1) : (0, WS.e)(this, KS)[KS] ? Promise.resolve(!0) : ((0, WS.e)(this, NS)[NS] ??= (0, WS.e)(this, Lh)[Lh](), (0, WS.e)(this, NS)[NS])
```

#### 677. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6240` → after: `L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6120) · [Before (L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6240)

```diff
-         return VV = await (0, EU.d)(this, Yy)[Yy](), VV
+         return HH = await (0, WS.e)(this, Sh)[Sh](), HH
```

#### 678. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6242` → after: `L6122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6122) · [Before (L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6242)

```diff
-         VV || ((0, EU.d)(this, LU)[LU] = null), (0, EU.d)(this, aU)[aU] = null
+         HH || ((0, WS.e)(this, DS)[DS] = null), (0, WS.e)(this, NS)[NS] = null
```

#### 679. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6247-L6248` → after: `L6127-L6128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6127-L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6127-L6128) · [Before (L6247-L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6247-L6248)

```diff
-       if (!(0, EU.d)(this, RU)[RU]) return Promise.resolve((0, EU.d)(this, DU)[DU] ? "trapped" : "ZZ");
-       if (!(0, EU.d)(this, CU)[CU]) {
+       if (!(0, WS.e)(this, KS)[KS]) return Promise.resolve((0, WS.e)(this, eS)[eS] ? "trapped" : "hX");
+       if (!(0, WS.e)(this, gS)[gS]) {
```

#### 680. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6253` → after: `L6133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6133) · [Before (L6253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6253)

```diff
-         (0, EU.d)(this, CU)[CU] = {
+         (0, WS.e)(this, gS)[gS] = {
```

#### 681. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6258` → after: `L6138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6138) · [Before (L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6258)

```diff
-       return (0, EU.d)(this, CU)[CU].promise
+       return (0, WS.e)(this, gS)[gS].promise
```

#### 682. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6262-L6263` → after: `L6142-L6143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6142-L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6142-L6143) · [Before (L6262-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6262-L6263)

```diff
-       const eV = (0, EU.d)(this, CU)[CU];
-       (0, EU.d)(this, CU)[CU] = null, null === eV || void 0 === eV || eV.resolve(VV)
+       const BH = (0, WS.e)(this, gS)[gS];
+       (0, WS.e)(this, gS)[gS] = null, null === BH || void 0 === BH || BH.resolve(HH)
```

#### 683. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6266` → after: `L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6146) · [Before (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6266)

```diff
-       let VV = (0, EU.d)(this, WU)[WU];
+       let HH = (0, WS.e)(this, lS)[lS];
```

#### 684. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6268` → after: `L6148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6148) · [Before (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6268)

```diff
-         const eV = (0, EU.d)(this, oU)[oU];
+         const BH = (0, WS.e)(this, RS)[RS];
```

#### 685. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6272` → after: `L6152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6152) · [Before (L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6272)

```diff
-           return eV === (0, EU.d)(this, oU)[oU] && await (0, EU.d)(this, ky)[ky](xV), !1
+           return BH === (0, WS.e)(this, RS)[RS] && await (0, WS.e)(this, Qh)[Qh](LH), !1
```

#### 686. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6274` → after: `L6154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6154) · [Before (L6274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6274)

```diff
-         if (eV !== (0, EU.d)(this, oU)[oU]) return this.deps.unload(), !1;
+         if (BH !== (0, WS.e)(this, RS)[RS]) return this.deps.unload(), !1;
```

#### 687. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6276` → after: `L6156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6156) · [Before (L6276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6276)

```diff
-           YV = (0, EU.d)(this, Ey)[Ey]((() => JV.qyV()));
+           rH = (0, WS.e)(this, Mh)[Mh]((() => AH.HhH()));
```

#### 688. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6278-L6280` → after: `L6158-L6160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6158-L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6158-L6160) · [Before (L6278-L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6278-L6280)

```diff
-         const UV = this.deps.core.tyV();
-         if (YV !== UV) return await (0, EU.d)(this, ky)[ky](new Error(`recorder port version ${YV}, the core's ${UV}`)), !1;
-         (0, EU.d)(this, WU)[WU] = VV
+         const SH = this.deps.core.BhH();
+         if (rH !== SH) return await (0, WS.e)(this, Qh)[Qh](new Error(`recorder port version ${rH}, the core's ${SH}`)), !1;
+         (0, WS.e)(this, lS)[lS] = HH
```

#### 689. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6284-L6287` → after: `L6164-L6167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6164-L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6164-L6167) · [Before (L6284-L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6284-L6287)

```diff
-         if (!(0, EU.d)(this, Ey)[Ey]((() => ((0, EU.d)(this, RU)[RU] = new eV.FyV, (0, EU.d)(this, gU)[gU] = eV.vyV(), !0)))) return !1;
-         (0, EU.d)(this, yy)[yy]();
-         const VV = (0, EU.d)(this, LU)[LU];
-         return (0, EU.d)(this, LU)[LU] = null, VV && (0, EU.d)(this, Qy)[Qy](vV.Yc.Control, VV), (0, EU.d)(this, Uy)[Uy]()
+         if (!(0, WS.e)(this, Mh)[Mh]((() => ((0, WS.e)(this, KS)[KS] = new BH.LhH, (0, WS.e)(this, cS)[cS] = BH.dSH(), !0)))) return !1;
+         (0, WS.e)(this, th)[th]();
+         const HH = (0, WS.e)(this, DS)[DS];
+         return (0, WS.e)(this, DS)[DS] = null, HH && (0, WS.e)(this, Ch)[Ch](GH.Mc.Control, HH), (0, WS.e)(this, hh)[hh]()
```

#### 690. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6289` → after: `L6169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6169) · [Before (L6289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6289)

```diff
-         return (0, EU.d)(this, ny)[ny](), await (0, EU.d)(this, ky)[ky](xV), !1
+         return (0, WS.e)(this, Eh)[Eh](), await (0, WS.e)(this, Qh)[Qh](LH), !1
```

#### 691. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6294` → after: `L6174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6174) · [Before (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6294)

```diff
-       return this.deps.core.TyV(0), 1 === this.deps.core.TyV(1) || ((0, EU.d)(this, ny)[ny](), this.deps.failed(zU), !1)
+       return this.deps.core.AhH(0), 1 === this.deps.core.AhH(1) || ((0, WS.e)(this, Eh)[Eh](), this.deps.failed(oS), !1)
```

#### 692. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6298` → after: `L6178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6178) · [Before (L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6298)

```diff
-       (0, EU.d)(this, hU)[hU] && (0, EU.d)(this, Qy)[Qy](vV.Yc.Prefs, AU((0, EU.d)(this, hU)[hU].on, (0, EU.d)(this, hU)[hU].seconds)), (0, EU.d)(this, lU)[lU] && (0, EU.d)(this, sU)[sU]((0, EU.d)(this, lU)[lU])
+       (0, WS.e)(this, nS)[nS] && (0, WS.e)(this, Ch)[Ch](GH.Mc.Prefs, OS((0, WS.e)(this, nS)[nS].on, (0, WS.e)(this, nS)[nS].seconds)), (0, WS.e)(this, FS)[FS] && (0, WS.e)(this, JS)[JS]((0, WS.e)(this, FS)[FS])
```

#### 693. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6306` → after: `L6186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6186) · [Before (L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6306)

```diff
-           return null !== (VV = null === (eV = (0, EU.d)(this, hU)[hU]) || void 0 === eV ? void 0 : eV.seconds) && void 0 !== VV ? VV : 0
+           return null !== (HH = null === (BH = (0, WS.e)(this, nS)[nS]) || void 0 === BH ? void 0 : BH.seconds) && void 0 !== HH ? HH : 0
```

#### 694. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6308-L6311` → after: `L6188-L6191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6188-L6191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6188-L6191) · [Before (L6308-L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6308-L6311)

```diff
-         trapped: () => (0, EU.d)(this, DU)[DU],
-         busy: () => (0, EU.d)(this, dU)[dU](),
-         loadInFlight: () => (0, EU.d)(this, aU)[aU],
-         ik: () => (0, EU.d)(this, iU)[iU],
+         trapped: () => (0, WS.e)(this, eS)[eS],
+         busy: () => (0, WS.e)(this, yS)[yS](),
+         loadInFlight: () => (0, WS.e)(this, NS)[NS],
+         Mu: () => (0, WS.e)(this, qS)[qS],
```

#### 695. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6313` → after: `L6193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6193) · [Before (L6313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6313)

```diff
-           (0, EU.d)(this, ny)[ny]()
+           (0, WS.e)(this, Eh)[Eh]()
```

#### 696. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6315` → after: `L6195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6195) · [Before (L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6315)

```diff
-         load: () => (0, EU.d)(this, Vy)[Vy]()
+         load: () => (0, WS.e)(this, Bh)[Bh]()
```

#### 697. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6320-L6321` → after: `L6200-L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6200-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6200-L6201) · [Before (L6320-L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6320-L6321)

```diff
-       (0, EU.d)(this, fU)[fU] ? (0, EU.d)(this, fU)[fU].push([VV, eV]): (0, EU.d)(this, by)[by](((xV, JV) => {
-         const YV = xV.ryV(eV.length);
+       (0, WS.e)(this, wS)[wS] ? (0, WS.e)(this, wS)[wS].push([HH, BH]): (0, WS.e)(this, Wh)[Wh](((LH, AH) => {
+         const rH = LH.aSH(BH.length);
```

#### 698. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6327` → after: `L6207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6207) · [Before (L6327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6327)

```diff
-       (0, EU.d)(this, oU)[oU]++, (0, EU.d)(this, Jy)[Jy]("ZZ"), (0, EU.d)(this, uU)[uU].stop(), this.deps.core.TyV(0), (0, EU.d)(this, wy)[wy](), (0, EU.d)(this, DU)[DU] || ((0, EU.d)(this, WU)[WU] = null, this.deps.unload())
+       (0, WS.e)(this, RS)[RS]++, (0, WS.e)(this, rh)[rh]("hX"), (0, WS.e)(this, sS)[sS].stop(), this.deps.core.AhH(0), (0, WS.e)(this, Xh)[Xh](), (0, WS.e)(this, eS)[eS] || ((0, WS.e)(this, lS)[lS] = null, this.deps.unload())
```

#### 699. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6331` → after: `L6211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6211) · [Before (L6331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6331)

```diff
-       (0, EU.d)(this, by)[by]((VV => {
+       (0, WS.e)(this, Wh)[Wh]((HH => {
```

#### 700. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6333` → after: `L6213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6213) · [Before (L6333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6333)

```diff
-       })), (0, EU.d)(this, RU)[RU] = null, (0, EU.d)(this, gU)[gU] = null, (0, EU.d)(this, HU)[HU] = null
+       })), (0, WS.e)(this, KS)[KS] = null, (0, WS.e)(this, cS)[cS] = null, (0, WS.e)(this, aS)[aS] = null
```

#### 701. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6339` → after: `L6219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6219) · [Before (L6339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6339)

```diff
-       return (null === (VV = (0, EU.d)(this, mU)[mU]) || void 0 === VV ? void 0 : VV.buffer) !== eV && ((0, EU.d)(this, mU)[mU] = new Uint8Array(eV)), (0, EU.d)(this, mU)[mU]
+       return (null === (HH = (0, WS.e)(this, ZS)[ZS]) || void 0 === HH ? void 0 : HH.buffer) !== BH && ((0, WS.e)(this, ZS)[ZS] = new Uint8Array(BH)), (0, WS.e)(this, ZS)[ZS]
```

#### 702. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6345` → after: `L6225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6225) · [Before (L6345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6345)

```diff
-       return (null === (VV = (0, EU.d)(this, KU)[KU]) || void 0 === VV ? void 0 : VV.buffer) !== eV && ((0, EU.d)(this, KU)[KU] = new Uint32Array(eV, 0, eV.byteLength >>> 2)), (0, EU.d)(this, KU)[KU]
+       return (null === (HH = (0, WS.e)(this, dS)[dS]) || void 0 === HH ? void 0 : HH.buffer) !== BH && ((0, WS.e)(this, dS)[dS] = new Uint32Array(BH, 0, BH.byteLength >>> 2)), (0, WS.e)(this, dS)[dS]
```

#### 703. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6351` → after: `L6231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6231) · [Before (L6351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6351)

```diff
-       return (null === (eV = (0, EU.d)(this, HU)[HU]) || void 0 === eV ? void 0 : eV.buffer) !== xV && ((0, EU.d)(this, HU)[HU] = new Uint8Array(xV)), (0, EU.d)(this, HU)[HU]
+       return (null === (BH = (0, WS.e)(this, aS)[aS]) || void 0 === BH ? void 0 : BH.buffer) !== LH && ((0, WS.e)(this, aS)[aS] = new Uint8Array(LH)), (0, WS.e)(this, aS)[aS]
```

#### 704. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6360-L6362` → after: `L6240-L6242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6240-L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6240-L6242) · [Before (L6360-L6362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6360-L6362)

```diff
-       const eV = (0, EU.d)(this, RU)[RU],
-         xV = (0, EU.d)(this, gU)[gU];
-       if (eV && xV) return (0, EU.d)(this, Ey)[Ey]((() => VV(eV, xV)))
+       const BH = (0, WS.e)(this, KS)[KS],
+         LH = (0, WS.e)(this, cS)[cS];
+       if (BH && LH) return (0, WS.e)(this, Mh)[Mh]((() => HH(BH, LH)))
```

#### 705. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6366` → after: `L6246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6246) · [Before (L6366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6366)

```diff
-       if (!(0, EU.d)(this, DU)[DU]) try {
+       if (!(0, WS.e)(this, eS)[eS]) try {
```

#### 706. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6369` → after: `L6249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6249) · [Before (L6369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6369)

```diff
-         if (!(0, EU.d)(this, By)[By](eV)) throw eV;
+         if (!(0, WS.e)(this, xh)[xh](BH)) throw BH;
```

#### 707. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6375` → after: `L6255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6255) · [Before (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6375)

```diff
-       return VV instanceof WebAssembly.RuntimeError && ((0, EU.d)(this, DU)[DU] = !0, (0, EU.d)(this, RU)[RU] = null, (0, EU.d)(this, gU)[gU] = null, (0, EU.d)(this, HU)[HU] = null, (0, EU.d)(this, WU)[WU] = null, (0, EU.d)(this, LU)[LU] = null, (0, EU.d)(this, Jy)[Jy]("trapped") … [truncated]
+       return HH instanceof WebAssembly.RuntimeError && ((0, WS.e)(this, eS)[eS] = !0, (0, WS.e)(this, KS)[KS] = null, (0, WS.e)(this, cS)[cS] = null, (0, WS.e)(this, aS)[aS] = null, (0, WS.e)(this, lS)[lS] = null, (0, WS.e)(this, DS)[DS] = null, (0, WS.e)(this, rh)[rh]("trapped") … [truncated]
```

#### 708. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6377` → after: `L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6257) · [Before (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6377)

```diff
-     var fy = xV(39842);
+     var wh = LH(39568);
```

#### 709. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6379` → after: `L6259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6259) · [Before (L6379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6379)

```diff
-       ["skyblock", () => xV.e(58).then((() => xV(39833)))]
+       ["skyblock", () => LH.e(59).then((() => LH(39559)))]
```

#### 710. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6386` → after: `L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6266) · [Before (L6386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6386)

```diff
-         if (!eV) throw new Error(`${VV}'s replay hook module registered no hook`);
+         if (!BH) throw new Error(`${HH}'s replay hook module registered no hook`);
```

#### 711. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6466-L6484` → after: `L6346-L6364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6346-L6364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6346-L6364) · [Before (L6466-L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6466-L6484)

```diff
-     var uy = (0, BU.e)("bindings"),
-       sy = (0, BU.e)("module"),
-       Sy = (0, BU.e)("memory"),
-       Iy = (0, BU.e)("trapped"),
-       dy = (0, BU.e)("generation"),
-       Oy = (0, BU.e)("loading"),
-       Vp = (0, BU.e)("lend"),
-       ep = (0, BU.e)("givenUp"),
-       xp = (0, BU.e)("afterSave"),
-       Jp = (0, BU.e)("opens"),
-       Yp = (0, BU.e)("saveAskedAt"),
-       Up = (0, BU.e)("unload"),
-       yp = (0, BU.e)("dropModule"),
-       pp = (0, BU.e)("loadFailed"),
-       Qp = (0, BU.e)("saveReadsBody"),
-       np = (0, BU.e)("command"),
- ... (3 more removed lines; see GitHub link above)
+     var sh = (0, MS.c)("bindings"),
+       Jh = (0, MS.c)("module"),
+       ih = (0, MS.c)("memory"),
+       ph = (0, MS.c)("trapped"),
+       yh = (0, MS.c)("generation"),
+       Ht = (0, MS.c)("loading"),
+       Bt = (0, MS.c)("lend"),
+       Lt = (0, MS.c)("givenUp"),
+       At = (0, MS.c)("afterSave"),
+       rt = (0, MS.c)("opens"),
+       St = (0, MS.c)("saveAskedAt"),
+       ht = (0, MS.c)("unload"),
+       tt = (0, MS.c)("dropModule"),
+       zt = (0, MS.c)("loadFailed"),
+       Ct = (0, MS.c)("saveReadsBody"),
+       Et = (0, MS.c)("command"),
+ ... (3 more added lines; see GitHub link above)
```

#### 712. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6540` → after: `L6420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6420) · [Before (L6540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6540)

```diff
-         return null !== (0, EU.d)(this, sy)[sy] && null === (0, EU.d)(this, xp)[xp]
+         return null !== (0, WS.e)(this, Jh)[Jh] && null === (0, WS.e)(this, At)[At]
```

#### 713. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6543-L6544` → after: `L6423-L6424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6423-L6424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6423-L6424) · [Before (L6543-L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6543-L6544)

```diff
-         if ((0, EU.d)(this, Iy)[Iy]) return vV.fd.ModuleTrap;
-         let xV = (0, EU.d)(this, uy)[uy];
+         if ((0, WS.e)(this, ph)[ph]) return GH.$c.ModuleTrap;
+         let LH = (0, WS.e)(this, sh)[sh];
```

#### 714. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6546-L6547` → after: `L6426-L6427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6426-L6427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6426-L6427) · [Before (L6546-L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6546-L6547)

```diff
-           const VV = (0, EU.d)(this, dy)[dy];
-           (0, EU.d)(this, Oy)[Oy]++;
+           const HH = (0, WS.e)(this, yh)[yh];
+           (0, WS.e)(this, Ht)[Ht]++;
```

#### 715. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6551` → after: `L6431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6431) · [Before (L6551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6551)

```diff
-             return (0, EU.d)(this, Oy)[Oy]--, VV !== (0, EU.d)(this, dy)[dy] ? "stopped" : (0, EU.d)(this, pp)[pp](YV, eV)
+             return (0, WS.e)(this, Ht)[Ht]--, HH !== (0, WS.e)(this, yh)[yh] ? "stopped" : (0, WS.e)(this, zt)[zt](rH, BH)
```

#### 716. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6553-L6560` → after: `L6433-L6440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6433-L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6433-L6440) · [Before (L6553-L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6553-L6560)

```diff
-           if ((0, EU.d)(this, Oy)[Oy]--, VV !== (0, EU.d)(this, dy)[dy]) return (0, EU.d)(this, uy)[uy] || 0 !== (0, EU.d)(this, Oy)[Oy] || (0, EU.d)(this, Iy)[Iy] || this.deps.unload(), "stopped";
-           if ((0, EU.d)(this, Iy)[Iy]) return vV.fd.ModuleTrap;
-           const JV = xV.qyV(),
-             UV = this.deps.core.tyV();
-           if (JV !== UV) return (0, EU.d)(this, pp)[pp](new Error(`replay port version ${JV}, the core's ${UV}`), eV);
-           (0, EU.d)(this, uy)[uy] = xV
-         }
-         if (!(0, EU.d)(this, sy)[sy]) {
+           if ((0, WS.e)(this, Ht)[Ht]--, HH !== (0, WS.e)(this, yh)[yh]) return (0, WS.e)(this, sh)[sh] || 0 !== (0, WS.e)(this, Ht)[Ht] || (0, WS.e)(this, ph)[ph] || this.deps.unload(), "stopped";
+           if ((0, WS.e)(this, ph)[ph]) return GH.$c.ModuleTrap;
+           const AH = LH.HhH(),
+             SH = this.deps.core.BhH();
+           if (AH !== SH) return (0, WS.e)(this, zt)[zt](new Error(`replay port version ${AH}, the core's ${SH}`), BH);
+           (0, WS.e)(this, sh)[sh] = LH
+         }
+         if (!(0, WS.e)(this, Jh)[Jh]) {
```

#### 717. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6562-L6564` → after: `L6442-L6444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6442-L6444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6442-L6444) · [Before (L6562-L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6562-L6564)

```diff
-           if (!(0, EU.d)(this, Zp)[Zp]((() => {
-               (0, EU.d)(this, sy)[sy] = new VV.PyV, (0, EU.d)(this, Sy)[Sy] = VV.AyV()
-             }))) return vV.fd.ModuleTrap
+           if (!(0, WS.e)(this, Gt)[Gt]((() => {
+               (0, WS.e)(this, Jh)[Jh] = new HH.rhH, (0, WS.e)(this, ih)[ih] = HH.ShH()
+             }))) return GH.$c.ModuleTrap
```

#### 718. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6567-L6568` → after: `L6447-L6448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6447-L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6447-L6448) · [Before (L6567-L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6567-L6568)

```diff
-         return (0, EU.d)(this, wp)[wp](((eV, xV) => {
-           null !== (0, EU.d)(this, xp)[xp] && eV.step(0, 0);
+         return (0, WS.e)(this, Xt)[Xt](((BH, LH) => {
+           null !== (0, WS.e)(this, At)[At] && BH.step(0, 0);
```

#### 719. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6570-L6571` → after: `L6450-L6451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6450-L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6450-L6451) · [Before (L6570-L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6570-L6571)

```diff
-           0 !== YV && (new Uint8Array(xV.buffer, YV, VV.length).set(VV), eV.open(), (0, EU.d)(this, ep)[ep] = (0, EU.d)(this, Vp)[Vp], (0, EU.d)(this, xp)[xp] = null, (0, EU.d)(this, Jp)[Jp]++, JV = !0)
-         })) ? JV ? "opening" : vV.fd.TooLarge : vV.fd.ModuleTrap
+           0 !== rH && (new Uint8Array(LH.buffer, rH, HH.length).set(HH), BH.open(), (0, WS.e)(this, Lt)[Lt] = (0, WS.e)(this, Bt)[Bt], (0, WS.e)(this, At)[At] = null, (0, WS.e)(this, rt)[rt]++, AH = !0)
+         })) ? AH ? "opening" : GH.$c.TooLarge : GH.$c.ModuleTrap
```

#### 720. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6574-L6576` → after: `L6454-L6456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6454-L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6454-L6456) · [Before (L6574-L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6574-L6576)

```diff
-         const eV = (0, EU.d)(this, sy)[sy],
-           xV = (0, EU.d)(this, Sy)[Sy];
-         if (!eV || !xV || null !== (0, EU.d)(this, xp)[xp]) return;
+         const BH = (0, WS.e)(this, Jh)[Jh],
+           LH = (0, WS.e)(this, ih)[ih];
+         if (!BH || !LH || null !== (0, WS.e)(this, At)[At]) return;
```

#### 721. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6579` → after: `L6459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6459) · [Before (L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6579)

```diff
-         } = this.deps, YV = JV.NyV(VV);
+         } = this.deps, rH = AH.hhH(HH);
```

#### 722. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6584` → after: `L6464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6464) · [Before (L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6584)

```diff
-           yV = eV.step(UV, YV - UV), pV = eV.byV()
+           hH = BH.step(SH, rH - SH), tH = BH.JSH()
```

#### 723. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6586` → after: `L6466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6466) · [Before (L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6586)

```diff
-           return void(0, EU.d)(this, vp)[vp](nV)
+           return void(0, WS.e)(this, Yt)[Yt](CH)
```

#### 724. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6588` → after: `L6468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6468) · [Before (L6588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6588)

```diff
-         const QV = JV.jyV(1, yV);
+         const zH = AH.ySH(1, hH);
```

#### 725. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6590` → after: `L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6470) · [Before (L6590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6590)

```diff
-           const VV = (0, EU.d)(this, wp)[wp]((VV => {
+           const HH = (0, WS.e)(this, Xt)[Xt]((HH => {
```

#### 726. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6594` → after: `L6474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6474) · [Before (L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6594)

```diff
-           return (0, EU.d)(this, Qp)[Qp] ? (0, EU.d)(this, xp)[xp] = "drop" : (0, EU.d)(this, yp)[yp](), void JV.XyV(vV.fd.Port)
+           return (0, WS.e)(this, Ct)[Ct] ? (0, WS.e)(this, At)[At] = "drop" : (0, WS.e)(this, tt)[tt](), void AH.thH(GH.$c.Port)
```

#### 727. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6599` → after: `L6479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6479) · [Before (L6599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6599)

```diff
-         (0, EU.d)(this, np)[np]((VV => {
+         (0, WS.e)(this, Et)[Et]((HH => {
```

#### 728. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6604` → after: `L6484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6484) · [Before (L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6604)

```diff
-         (0, EU.d)(this, np)[np]((VV => {
+         (0, WS.e)(this, Et)[Et]((HH => {
```

#### 729. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6610` → after: `L6490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6490) · [Before (L6610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6610)

```diff
-         (0, EU.d)(this, np)[np]((xV => {
+         (0, WS.e)(this, Et)[Et]((LH => {
```

#### 730. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6615-L6616` → after: `L6495-L6496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6495-L6496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6495-L6496) · [Before (L6615-L6616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6615-L6616)

```diff
-         return (0, EU.d)(this, np)[np]((xV => {
-           xV.MyV(VV, eV)
+         return (0, WS.e)(this, Et)[Et]((LH => {
+           LH.zhH(HH, BH)
```

#### 731. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6620-L6621` → after: `L6500-L6501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6500-L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6500-L6501) · [Before (L6620-L6621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6620-L6621)

```diff
-         return (0, EU.d)(this, np)[np]((xV => {
-           xV.zyV(VV[0], VV[1], VV[2], eV[0], eV[1], eV[2])
+         return (0, WS.e)(this, Et)[Et]((LH => {
+           LH.ChH(HH[0], HH[1], HH[2], BH[0], BH[1], BH[2])
```

#### 732. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6625-L6626` → after: `L6505-L6506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6505-L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6505-L6506) · [Before (L6625-L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6625-L6626)

```diff
-         return (0, EU.d)(this, np)[np]((xV => {
-           xV.GyV(VV, eV)
+         return (0, WS.e)(this, Et)[Et]((LH => {
+           LH.EhH(HH, BH)
```

#### 733. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6630-L6631` → after: `L6510-L6511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6510-L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6510-L6511) · [Before (L6630-L6631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6630-L6631)

```diff
-         return (0, EU.d)(this, np)[np]((xV => {
-           xV.WyV(VV, eV)
+         return (0, WS.e)(this, Et)[Et]((LH => {
+           LH.XhH(HH, BH)
```

#### 734. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6635-L6636` → after: `L6515-L6516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6515-L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6515-L6516) · [Before (L6635-L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6635-L6636)

```diff
-         return (0, EU.d)(this, np)[np]((xV => {
-           xV.RyV(VV, eV)
+         return (0, WS.e)(this, Et)[Et]((LH => {
+           LH.GhH(HH, BH)
```

#### 735. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6640` → after: `L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6520) · [Before (L6640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6640)

```diff
-         return null === (0, EU.d)(this, Vp)[Vp] && (0, EU.d)(this, np)[np]((xV => {
+         return null === (0, WS.e)(this, Bt)[Bt] && (0, WS.e)(this, Et)[Et]((LH => {
```

#### 736. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6645-L6646` → after: `L6525-L6526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6525-L6526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6525-L6526) · [Before (L6645-L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6645-L6646)

```diff
-         const VV = (0, EU.d)(this, Yp)[Yp];
-         if ((0, EU.d)(this, Yp)[Yp] = null, null !== VV && VV !== (0, EU.d)(this, Jp)[Jp]) return null;
+         const HH = (0, WS.e)(this, St)[St];
+         if ((0, WS.e)(this, St)[St] = null, null !== HH && HH !== (0, WS.e)(this, rt)[rt]) return null;
```

#### 737. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6649-L6650` → after: `L6529-L6530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6529-L6530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6529-L6530) · [Before (L6649-L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6649-L6650)

```diff
-         if ((0, EU.d)(this, wp)[wp](((VV, JV) => {
-             eV = VV.save(), 0 !== eV && (xV = new Uint8Array(JV.buffer, VV.gyV(), VV.DyV()).slice())
+         if ((0, WS.e)(this, Xt)[Xt](((HH, AH) => {
+             BH = HH.save(), 0 !== BH && (LH = new Uint8Array(AH.buffer, HH.YhH(), HH.uhH()).slice())
```

#### 738. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6655` → after: `L6535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6535) · [Before (L6655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6655)

```diff
-           givenUp: () => (0, EU.d)(this, ep)[ep] === JV,
+           givenUp: () => (0, WS.e)(this, Lt)[Lt] === AH,
```

#### 739. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6657` → after: `L6537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6537) · [Before (L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6657)

```diff
-             if ((0, EU.d)(this, Vp)[Vp] !== JV || !(0, EU.d)(this, Qp)[Qp]) return null;
+             if ((0, WS.e)(this, Bt)[Bt] !== AH || !(0, WS.e)(this, Ct)[Ct]) return null;
```

#### 740. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6659-L6661` → after: `L6539-L6541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6539-L6541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6539-L6541) · [Before (L6659-L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6659-L6661)

```diff
-             return (0, EU.d)(this, wp)[wp](((JV, YV) => {
-               const UV = JV.iyV();
-               0 !== UV && VV >= 0 && eV >= 0 && VV + eV <= UV && (xV = new Uint8Array(YV.buffer, JV.CyV() + VV, eV))
+             return (0, WS.e)(this, Xt)[Xt](((AH, rH) => {
+               const SH = AH.QhH();
+               0 !== SH && HH >= 0 && BH >= 0 && HH + BH <= SH && (LH = new Uint8Array(rH.buffer, AH.WhH() + HH, BH))
```

#### 741. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6665-L6667` → after: `L6545-L6547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6545-L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6545-L6547) · [Before (L6665-L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6665-L6667)

```diff
-             if ((0, EU.d)(this, Vp)[Vp] !== JV) return;
-             (0, EU.d)(this, Vp)[Vp] = null, (0, EU.d)(this, ep)[ep] = null, (0, EU.d)(this, wp)[wp]((VV => {
-               VV.ayV()
+             if ((0, WS.e)(this, Bt)[Bt] !== AH) return;
+             (0, WS.e)(this, Bt)[Bt] = null, (0, WS.e)(this, Lt)[Lt] = null, (0, WS.e)(this, Xt)[Xt]((HH => {
+               HH.MhH()
```

#### 742. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6669-L6670` → after: `L6549-L6550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6549-L6550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6549-L6550) · [Before (L6669-L6670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6669-L6670)

```diff
-             const VV = (0, EU.d)(this, xp)[xp];
-             (0, EU.d)(this, xp)[xp] = null, "unload" === VV ? (0, EU.d)(this, Up)[Up]() : "drop" === VV && (0, EU.d)(this, yp)[yp]()
+             const HH = (0, WS.e)(this, At)[At];
+             (0, WS.e)(this, At)[At] = null, "unload" === HH ? (0, WS.e)(this, ht)[ht]() : "drop" === HH && (0, WS.e)(this, tt)[tt]()
```

#### 743. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6673` → after: `L6553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6553) · [Before (L6673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6673)

```diff
-         return (0, EU.d)(this, Vp)[Vp] = JV, JV
+         return (0, WS.e)(this, Bt)[Bt] = AH, AH
```

#### 744. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6676` → after: `L6556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6556) · [Before (L6676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6676)

```diff
-         (0, EU.d)(this, Yp)[Yp] = (0, EU.d)(this, Jp)[Jp]
+         (0, WS.e)(this, St)[St] = (0, WS.e)(this, rt)[rt]
```

#### 745. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6679-L6680` → after: `L6559-L6560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6559-L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6559-L6560) · [Before (L6679-L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6679-L6680)

```diff
-         (0, EU.d)(this, np)[np]((eV => {
-           eV.oyV(VV)
+         (0, WS.e)(this, Et)[Et]((BH => {
+           BH.xhH(HH)
```

#### 746. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6684-L6685` → after: `L6564-L6565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6564-L6565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6564-L6565) · [Before (L6684-L6685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6684-L6685)

```diff
-         (0, EU.d)(this, np)[np]((eV => {
-           eV.cyV(VV)
+         (0, WS.e)(this, Et)[Et]((BH => {
+           BH.vhH(HH)
```

#### 747. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6689` → after: `L6569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6569) · [Before (L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6689)

```diff
-         (0, EU.d)(this, np)[np]((VV => {
+         (0, WS.e)(this, Et)[Et]((HH => {
```

#### 748. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6694` → after: `L6574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6574) · [Before (L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6694)

```diff
-         (0, EU.d)(this, dy)[dy]++, (0, EU.d)(this, Qp)[Qp] && ((0, EU.d)(this, wp)[wp]((VV => {
+         (0, WS.e)(this, yh)[yh]++, (0, WS.e)(this, Ct)[Ct] && ((0, WS.e)(this, Xt)[Xt]((HH => {
```

#### 749. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6696` → after: `L6576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6576) · [Before (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6696)

```diff
-         })), (0, EU.d)(this, sy)[sy]) ? (0, EU.d)(this, xp)[xp] = "unload" : (0, EU.d)(this, Up)[Up]()
+         })), (0, WS.e)(this, Jh)[Jh]) ? (0, WS.e)(this, At)[At] = "unload" : (0, WS.e)(this, ht)[ht]()
```

#### 750. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6701` → after: `L6581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6581) · [Before (L6701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6701)

```diff
-       (0, EU.d)(this, yp)[yp](), (0, EU.d)(this, Iy)[Iy] || ((0, EU.d)(this, uy)[uy] = null, this.deps.unload())
+       (0, WS.e)(this, tt)[tt](), (0, WS.e)(this, ph)[ph] || ((0, WS.e)(this, sh)[sh] = null, this.deps.unload())
```

#### 751. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6705` → after: `L6585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6585) · [Before (L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6705)

```diff
-       (0, EU.d)(this, wp)[wp]((VV => {
+       (0, WS.e)(this, Xt)[Xt]((HH => {
```

#### 752. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6707` → after: `L6587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6587) · [Before (L6707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6707)

```diff
-       })), (0, EU.d)(this, sy)[sy] = null, (0, EU.d)(this, Sy)[Sy] = null
+       })), (0, WS.e)(this, Jh)[Jh] = null, (0, WS.e)(this, ih)[ih] = null
```

#### 753. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6712` → after: `L6592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6592) · [Before (L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6712)

```diff
-       }) ? "reloading" : vV.fd.ModuleLoad
+       }) ? "reloading" : GH.$c.ModuleLoad
```

#### 754. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6716` → after: `L6596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6596) · [Before (L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6716)

```diff
-       return null !== (0, EU.d)(this, Vp)[Vp] && (0, EU.d)(this, ep)[ep] !== (0, EU.d)(this, Vp)[Vp]
+       return null !== (0, WS.e)(this, Bt)[Bt] && (0, WS.e)(this, Lt)[Lt] !== (0, WS.e)(this, Bt)[Bt]
```

#### 755. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6720` → after: `L6600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6600) · [Before (L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6720)

```diff
-       return null === (0, EU.d)(this, xp)[xp] && (0, EU.d)(this, wp)[wp](VV)
+       return null === (0, WS.e)(this, At)[At] && (0, WS.e)(this, Xt)[Xt](HH)
```

#### 756. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6724-L6726` → after: `L6604-L6606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6604-L6606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6604-L6606) · [Before (L6724-L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6724-L6726)

```diff
-       const eV = (0, EU.d)(this, sy)[sy],
-         xV = (0, EU.d)(this, Sy)[Sy];
-       return !(!eV || !xV) && (0, EU.d)(this, Zp)[Zp]((() => {
+       const BH = (0, WS.e)(this, Jh)[Jh],
+         LH = (0, WS.e)(this, ih)[ih];
+       return !(!BH || !LH) && (0, WS.e)(this, Gt)[Gt]((() => {
```

#### 757. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6732` → after: `L6612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6612) · [Before (L6732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6732)

```diff
-       if ((0, EU.d)(this, Iy)[Iy]) return !1;
+       if ((0, WS.e)(this, ph)[ph]) return !1;
```

#### 758. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6736` → after: `L6616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6616) · [Before (L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6736)

```diff
-         return (0, EU.d)(this, vp)[vp](eV), !1
+         return (0, WS.e)(this, Yt)[Yt](BH), !1
```

#### 759. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6742` → after: `L6622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6622) · [Before (L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6742)

```diff
-       (0, EU.d)(this, Iy)[Iy] = !0, (0, EU.d)(this, sy)[sy] = null, (0, EU.d)(this, Sy)[Sy] = null, (0, EU.d)(this, uy)[uy] = null, this.deps.crash(this.deps.markTrapped(VV)), this.deps.core.XyV(vV.fd.ModuleTrap)
+       (0, WS.e)(this, ph)[ph] = !0, (0, WS.e)(this, Jh)[Jh] = null, (0, WS.e)(this, ih)[ih] = null, (0, WS.e)(this, sh)[sh] = null, this.deps.crash(this.deps.markTrapped(HH)), this.deps.core.thH(GH.$c.ModuleTrap)
```

#### 760. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6744-L6745` → after: `L6624-L6625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6624-L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6624-L6625) · [Before (L6744-L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6744-L6745)

```diff
-     var Tp = xV(7033),
-       Pp = xV(42334);
+     var Vt = LH(7014),
+       Ot = LH(42339);
```

#### 761. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6756` → after: `L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6636) · [Before (L6756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6756)

```diff
-         case vV.od.FlyingText: {
+         case GH.gd.FlyingText: {
```

#### 762. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6761` → after: `L6641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6641) · [Before (L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6761)

```diff
-             return void console.warn(`${Ap} a replay's flying text isn't JSON`, nV)
+             return void console.warn(`${bt} a replay's flying text isn't JSON`, CH)
```

#### 763. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6763` → after: `L6643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6643) · [Before (L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6763)

```diff
-           yV.h.QZ("forceFlyingMiddleMessage", {
+           hH.k.AX("forceFlyingMiddleMessage", {
```

#### 764. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6765` → after: `L6645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6645) · [Before (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6765)

```diff
-             ux: VV.ux,
+             dr: HH.dr,
```

#### 765. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6767` → after: `L6647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6647) · [Before (L6767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6767)

```diff
-             Sx: VV.Sx
+             ar: HH.ar
```

#### 766. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6771-L6772` → after: `L6651-L6652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6651-L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6651-L6652) · [Before (L6771-L6772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6771-L6772)

```diff
-         case vV.od.PlayerKilled:
-           (0, Pp.h)({
+         case GH.gd.PlayerKilled:
+           (0, Ot.e)({
```

#### 767. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6775` → after: `L6655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6655) · [Before (L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6775)

```diff
-               deadEId: null !== (eV = Xp(VV.dead)) && void 0 !== eV ? eV : "",
+               deadEId: null !== (BH = mt(HH.dead)) && void 0 !== BH ? BH : "",
```

#### 768. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6777` → after: `L6657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6657) · [Before (L6777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6777)

```diff
-               withItem: null !== (xV = VV.withItem) && void 0 !== xV ? xV : "",
+               withItem: null !== (LH = HH.withItem) && void 0 !== LH ? LH : "",
```

#### 769. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6782-L6783` → after: `L6662-L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6662-L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6662-L6663) · [Before (L6782-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6782-L6783)

```diff
-         case vV.od.Killfeed:
-           (0, Pp.h)({
+         case GH.gd.Killfeed:
+           (0, Ot.e)({
```

#### 770. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6788-L6789` → after: `L6668-L6669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6668-L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6668-L6669) · [Before (L6788-L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6788-L6789)

```diff
-                 name: null !== (JV = VV.killerName) && void 0 !== JV ? JV : void 0,
-                 colour: null !== (YV = VV.killerColour) && void 0 !== YV ? YV : void 0
+                 name: null !== (AH = HH.killerName) && void 0 !== AH ? AH : void 0,
+                 colour: null !== (rH = HH.killerColour) && void 0 !== rH ? rH : void 0
```

#### 771. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6793-L6794` → after: `L6673-L6674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6673-L6674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6673-L6674) · [Before (L6793-L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6793-L6794)

```diff
-                 name: null !== (UV = VV.victimName) && void 0 !== UV ? UV : void 0,
-                 colour: null !== (pV = VV.victimColour) && void 0 !== pV ? pV : void 0
+                 name: null !== (SH = HH.victimName) && void 0 !== SH ? SH : void 0,
+                 colour: null !== (tH = HH.victimColour) && void 0 !== tH ? tH : void 0
```

#### 772. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6796` → after: `L6676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6676) · [Before (L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6796)

```diff
-               withItem: null !== (QV = VV.withItem) && void 0 !== QV ? QV : ""
+               withItem: null !== (zH = HH.withItem) && void 0 !== zH ? zH : ""
```

#### 773. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6806` → after: `L6686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6686) · [Before (L6806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6806)

```diff
-       return Number.isInteger(eV) && eV > KY && eV <= 2147483647 ? eV : null
+       return Number.isInteger(BH) && BH > Zr && BH <= 2147483647 ? BH : null
```

#### 774. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6818` → after: `L6698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6698) · [Before (L6818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6818)

```diff
-       const eV = (0, xU.l)(yJ.mc.PlayerKilled, (eV => {
+       const BH = (0, LS.k)(hA.nc.PlayerKilled, (BH => {
```

#### 775. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6820-L6821` → after: `L6700-L6701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6700-L6701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6700-L6701) · [Before (L6820-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6820-L6821)

```diff
-           const YV = (0, eU.j)(eV);
-           if (!(0, eU.e)(YV)) return;
+           const rH = (0, BS.i)(BH);
+           if (!(0, BS.c)(rH)) return;
```

#### 776. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6828` → after: `L6708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6708) · [Before (L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6828)

```diff
-           VV.recordPlayerKilled(null !== (xV = Gp(UV)) && void 0 !== xV ? xV : KY, null !== (JV = Gp(yV)) && void 0 !== JV ? JV : KY, "number" === typeof QV ? QV : 0, "string" === typeof pV ? pV : "")
+           HH.recordPlayerKilled(null !== (LH = ft(SH)) && void 0 !== LH ? LH : Zr, null !== (AH = ft(hH)) && void 0 !== AH ? AH : Zr, "number" === typeof zH ? zH : 0, "string" === typeof tH ? tH : "")
```

#### 777. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6830-L6832` → after: `L6710-L6712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6710-L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6710-L6712) · [Before (L6830-L6832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6830-L6832)

```diff
-         xV = (0, xU.l)(yJ.mc.CustomKillfeed, (eV => {
-           const xV = (0, eU.j)(eV);
-           if (!(0, eU.e)(xV) || !(0, eU.e)(xV.killer) || !(0, eU.e)(xV.victim)) return;
+         LH = (0, LS.k)(hA.nc.CustomKillfeed, (BH => {
+           const LH = (0, BS.i)(BH);
+           if (!(0, BS.c)(LH) || !(0, BS.c)(LH.killer) || !(0, BS.c)(LH.victim)) return;
```

#### 778. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6838` → after: `L6718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6718) · [Before (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6838)

```diff
-           VV.recordKillfeed(Wp(JV), Wp(YV), "string" === typeof UV ? UV : null)
+           HH.recordKillfeed(lt(AH), lt(rH), "string" === typeof SH ? SH : null)
```

#### 779. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6847` → after: `L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6727) · [Before (L6847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6847)

```diff
-       return void 0 === VV || null === VV ? null : null !== (eV = JSON.stringify(VV)) && void 0 !== eV ? eV : null
+       return void 0 === HH || null === HH ? null : null !== (BH = JSON.stringify(HH)) && void 0 !== BH ? BH : null
```

#### 780. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6856` → after: `L6736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6736) · [Before (L6856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6856)

```diff
-         } = JV.b.get("clientEscMenuOptions"), UV = `${xV}:${YV}`;
+         } = AH.c.get("clientEscMenuOptions"), SH = `${LH}:${rH}`;
```

#### 781. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6859` → after: `L6739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6739) · [Before (L6859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6859)

```diff
-       return xV(), (0, yV.i)("appManagerUpdated|clientEscMenuOptions", xV)
+       return LH(), (0, hH.m)("appManagerUpdated|clientEscMenuOptions", LH)
```

#### 782. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6866` → after: `L6746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6746) · [Before (L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6866)

```diff
-         return VV.isStopped ? xV : eV(...arguments)
+         return HH.isStopped ? LH : BH(...arguments)
```

#### 783. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6870` → after: `L6750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6750) · [Before (L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6870)

```diff
-       open: () => Promise.reject(new Error(CY.b.coreStopped.text)),
+       open: () => Promise.reject(new Error(qr.e.coreStopped.text)),
```

#### 784. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6878` → after: `L6758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6758) · [Before (L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6878)

```diff
-       return xV.e(76).then((() => xV(64492)))
+       return LH.e(76).then((() => LH(64318)))
```

#### 785. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6882` → after: `L6762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6762) · [Before (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6882)

```diff
-       (0, CY.f)({
+       (0, qr.i)({
```

#### 786. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6894` → after: `L6774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6774) · [Before (L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6894)

```diff
-         } = VV, UV = () => VV.memory().buffer, yV = () => eV.isStopped ? null : eV.rings.cmd, pV = ap(eV, ((VV, eV) => YV.jyV(VV, eV)), 0), QV = () => YV.tyV();
+         } = HH, SH = () => HH.memory().buffer, hH = () => BH.isStopped ? null : BH.rings.cmd, tH = Nt(BH, ((HH, BH) => rH.ySH(HH, BH)), 0), zH = () => rH.BhH();
```

#### 787. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6898-L6902` → after: `L6778-L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6778-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6778-L6782) · [Before (L6898-L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6898-L6902)

```diff
-             NyV: ap(eV, (VV => YV.NyV(VV)), -1),
-             jyV: pV,
-             tyV: QV,
-             XyV: ap(eV, (VV => {
-               YV.XyV(VV)
+             hhH: Nt(BH, (HH => rH.hhH(HH)), -1),
+             ySH: tH,
+             BhH: zH,
+             thH: Nt(BH, (HH => {
+               rH.thH(HH)
```

#### 788. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6906` → after: `L6786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6786) · [Before (L6906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6906)

```diff
-           load: async () => (nV = await xV.e(77).then((() => xV(64509))), nV.loadReplayModule()),
+           load: async () => (CH = await LH.e(77).then((() => LH(64329))), CH.loadReplayModule()),
```

#### 789. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6920-L6923` → after: `L6800-L6803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6800-L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6800-L6803) · [Before (L6920-L6923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6920-L6923)

```diff
-             TyV: ap(eV, (VV => YV.TyV(VV)), 0),
-             kyV: ap(eV, (VV => YV.kyV(VV)), 0),
-             jyV: pV,
-             tyV: QV
+             AhH: Nt(BH, (HH => rH.AhH(HH)), 0),
+             sSH: Nt(BH, (HH => rH.sSH(HH)), 0),
+             ySH: tH,
+             BhH: zH
```

#### 790. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6933` → after: `L6813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6813) · [Before (L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6933)

```diff
-               console.warn(`${zp} the recorder module didn't prefetch, so a save loads it:`, VV)
+               console.warn(`${It} the recorder module didn't prefetch, so a save loads it:`, HH)
```

#### 791. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6943` → after: `L6823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6823) · [Before (L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6943)

```diff
-             return null !== (VV = null === (eV = wV) || void 0 === eV ? void 0 : eV.recorderMemoryBytes()) && void 0 !== VV ? VV : 0
+             return null !== (HH = null === (BH = EH) || void 0 === BH ? void 0 : BH.recorderMemoryBytes()) && void 0 !== HH ? HH : 0
```

#### 792. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6950` → after: `L6830-L6832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6830-L6832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6830-L6832) · [Before (L6950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6950)

```diff
-           failed: hp,
+           failed: HH => {
+             this.runtime.recorder.stopped(), nt(HH)
+           },
```

#### 793. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6960-L6962` → after: `L6842-L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6842-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6842-L6844) · [Before (L6960-L6962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6960-L6962)

```diff
-             YyV: ap(eV, (VV => YV.YyV(VV)), 0),
-             yyV: ap(eV, (() => {
-               YV.yyV()
+             RSH: Nt(BH, (HH => rH.RSH(HH)), 0),
+             nSH: Nt(BH, (() => {
+               rH.nSH()
```

#### 794. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6964-L6965` → after: `L6846-L6847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6846-L6847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6846-L6847) · [Before (L6964-L6965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6964-L6965)

```diff
-             xB: ap(eV, (() => YV.xB()), 0),
-             UyV: ap(eV, (() => YV.UyV()), 0)
+             DW: Nt(BH, (() => rH.DW()), 0),
+             jSH: Nt(BH, (() => rH.jSH()), 0)
```

#### 795. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6978` → after: `L6860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6860) · [Before (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6978)

```diff
-             console.warn(`${zp} the recorded game's replay hooks:`, VV)
+             console.warn(`${It} the recorded game's replay hooks:`, HH)
```

#### 796. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6987` → after: `L6869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6869) · [Before (L6987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6987)

```diff
-           notify: CY.f,
+           notify: qr.i,
```

#### 797. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6990` → after: `L6872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6872) · [Before (L6990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6990)

```diff
-             null === (VV = (0, oY.f)()) || void 0 === VV || VV.recorderChanged()
+             null === (HH = (0, Nr.g)()) || void 0 === HH || HH.recorderChanged()
```

#### 798. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6994` → after: `L6876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6876) · [Before (L6994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6994)

```diff
-             null === (VV = (0, oY.f)()) || void 0 === VV || VV.viewerChanged()
+             null === (HH = (0, Nr.g)()) || void 0 === HH || HH.viewerChanged()
```

#### 799. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6999` → after: `L6881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6881) · [Before (L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6999)

```diff
-               const YV = yJ.Bb[eV.key];
+               const rH = hA.Ab[BH.key];
```

#### 800. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7001-L7002` → after: `L6883-L6884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6883-L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6883-L6884) · [Before (L7001-L7002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7001-L7002)

```diff
-               let UV = null !== (xV = eV.value) && void 0 !== xV ? xV : JSON.parse(JSON.stringify(null !== (JV = Tp.c[YV]) && void 0 !== JV ? JV : null));
-               if (null !== eV.value && eV.key < yJ.$b.Environment && "string" === typeof UV) try {
+               let SH = null !== (LH = BH.value) && void 0 !== LH ? LH : JSON.parse(JSON.stringify(null !== (AH = Vt.d[rH]) && void 0 !== AH ? AH : null));
+               if (null !== BH.value && BH.key < hA.Xb.Environment && "string" === typeof SH) try {
```

#### 801. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7005` → after: `L6887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6887) · [Before (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7005)

```diff
-                 return void console.warn(`${Ap} a replay's ${YV} isn't JSON`, yV)
+                 return void console.warn(`${bt} a replay's ${rH} isn't JSON`, hH)
```

#### 802. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7014` → after: `L6896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6896) · [Before (L7014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7014)

```diff
-             this.entityHooks.opened((0, MV.Pb)(eV)), VV.replayShaderPack(eV)
+             this.entityHooks.opened((0, mH.Wb)(BH)), HH.replayShaderPack(BH)
```

#### 803. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7018` → after: `L6900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6900) · [Before (L7018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7018)

```diff
-             return null !== (VV = null === (xV = eV.lastHeader) || void 0 === xV ? void 0 : xV.renderPending) && void 0 !== VV ? VV : 0
+             return null !== (HH = null === (LH = BH.lastHeader) || void 0 === LH ? void 0 : LH.renderPending) && void 0 !== HH ? HH : 0
```

#### 804. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7020` → after: `L6902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6902) · [Before (L7020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7020)

```diff
-           viewerOpen: aY.e,
+           viewerOpen: gr.c,
```

#### 805. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7022` → after: `L6904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6904) · [Before (L7022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7022)

```diff
-             (0, DY.g)(VV)
+             (0, cr.k)(HH)
```

#### 806. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7025` → after: `L6907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6907) · [Before (L7025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7025)

```diff
-         this.runtime = vV, JV.replay = vV.sink, (0, oY.s)(vV);
+         this.runtime = GH, AH.replay = GH.sink, (0, Nr.t)(GH);
```

#### 807. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7034-L7035` → after: `L6916-L6917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6916-L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6916-L6917) · [Before (L7034-L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7034-L7035)

```diff
-         this.freecam = rV, (0, oY.q)(rV), this.recordedOptions = function(VV, eV) {
-           const xV = yJ.Bb,
+         this.freecam = YH, (0, Nr.r)(YH), this.recordedOptions = function(HH, BH) {
+           const LH = hA.Ab,
```

#### 808. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7049` → after: `L6931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6931) · [Before (L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7049)

```diff
-         }(vV.recorder, VV.options), this.stops = [(0, EJ.l)((VV => {
+         }(GH.recorder, HH.options), this.stops = [(0, WA.k)((HH => {
```

#### 809. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7056` → after: `L6938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6938) · [Before (L7056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7056)

```diff
-         })), (0, EJ.w)(((VV, eV) => {
+         })), (0, WA.z)(((HH, BH) => {
```

#### 810. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7069` → after: `L6951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6951) · [Before (L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7069)

```diff
-         }, Rp(vV.recorder), (0, JU.e)((VV => {
+         }, Kt(GH.recorder), (0, AS.k)((HH => {
```

#### 811. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7075` → after: `L6957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6957) · [Before (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7075)

```diff
-           xV && (null === (JV = (0, oY.f)()) || void 0 === JV || JV.keyDown(eV))
+           LH && (null === (AH = (0, Nr.g)()) || void 0 === AH || AH.keyDown(BH))
```

#### 812. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7079` → after: `L6961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6961) · [Before (L7079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7079)

```diff
-           return !0 === (null === VV || void 0 === VV ? void 0 : VV.isOpen) ? VV : null
+           return !0 === (null === HH || void 0 === HH ? void 0 : HH.isOpen) ? HH : null
```

#### 813. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7081` → after: `L6963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6963) · [Before (L7081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7081)

```diff
-         (0, iY.g)({
+         (0, er.h)({
```

#### 814. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7085` → after: `L6967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6967) · [Before (L7085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7085)

```diff
-             return null !== (VV = null === (eV = kV()) || void 0 === eV ? void 0 : eV.id) && void 0 !== VV ? VV : null
+             return null !== (HH = null === (BH = uH()) || void 0 === BH ? void 0 : BH.id) && void 0 !== HH ? HH : null
```

#### 815. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7089` → after: `L6971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6971) · [Before (L7089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7089)

```diff
-             return null !== (VV = null === (eV = kV()) || void 0 === eV ? void 0 : eV.saveRefusal) && void 0 !== VV ? VV : null
+             return null !== (HH = null === (BH = uH()) || void 0 === BH ? void 0 : BH.saveRefusal) && void 0 !== HH ? HH : null
```

#### 816. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7093` → after: `L6975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6975) · [Before (L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7093)

```diff
-             return null !== (VV = null === (eV = kV()) || void 0 === eV ? void 0 : eV.save()) && void 0 !== VV ? VV : Promise.resolve(null)
+             return null !== (HH = null === (BH = uH()) || void 0 === BH ? void 0 : BH.save()) && void 0 !== HH ? HH : Promise.resolve(null)
```

#### 817. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7097` → after: `L6979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6979) · [Before (L7097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7097)

```diff
-             return null !== (VV = null === (eV = vV.currentViewer) || void 0 === eV ? void 0 : eV.fileHandle) && void 0 !== VV ? VV : null
+             return null !== (HH = null === (BH = GH.currentViewer) || void 0 === BH ? void 0 : BH.fileHandle) && void 0 !== HH ? HH : null
```

#### 818. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7107` → after: `L6989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6989) · [Before (L7107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7107)

```diff
-           if (VV.phase === vV.H.Activated) {
+           if (HH.phase === GH.C.Activated) {
```

#### 819. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7111` → after: `L6993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6993) · [Before (L7111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7111)

```diff
-               lobbyType: (0, zV.r)(eV.lobbyName),
+               lobbyType: (0, oH.v)(BH.lobbyName),
```

#### 820. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7115` → after: `L6997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6997) · [Before (L7115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7115)

```diff
-           } else VV.phase !== vV.H.Left && VV.phase !== vV.H.Closed || VV.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
+           } else HH.phase !== GH.C.Left && HH.phase !== GH.C.Closed || HH.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
```

#### 821. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7121` → after: `L7003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7003) · [Before (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7121)

```diff
-           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, oY.l)() === this.runtime && (0, oY.s)(null), (0, oY.h)() === this.freecam && (0, oY.q)(null), (0, iY.g)(op), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
+           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Nr.n)() === this.runtime && (0, Nr.t)(null), (0, Nr.j)() === this.freecam && (0, Nr.r)(null), (0, er.h)(Rt), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
```

#### 822. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7128-L7129` → after: `L7010-L7011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7010-L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7010-L7011) · [Before (L7128-L7129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7128-L7129)

```diff
-         if (xV.isStopped) throw new Error(CY.b.coreStopped.text);
-         if (VV.byteLength > 67108864) throw new Error(CY.b.cantOpen.text);
+         if (LH.isStopped) throw new Error(qr.e.coreStopped.text);
+         if (HH.byteLength > 67108864) throw new Error(qr.e.cantOpen.text);
```

#### 823. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7134` → after: `L7016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7016) · [Before (L7134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7134)

```diff
-             return eV.inPlayback || (0, EJ.G)().leaveGame(null), eV
+             return BH.inPlayback || (0, WA.L)().leaveGame(null), BH
```

#### 824. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7137` → after: `L7019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7019) · [Before (L7137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7137)

```diff
-           throw console.warn(`${zp} the replay viewer didn't load`, YV), new Error(CY.b.viewerLoadFailed.text)
+           throw console.warn(`${It} the replay viewer didn't load`, rH), new Error(qr.e.viewerLoadFailed.text)
```

#### 825. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7139` → after: `L7021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7021) · [Before (L7139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7139)

```diff
-         if (xV.isStopped) throw new Error(CY.b.coreStopped.text);
+         if (LH.isStopped) throw new Error(qr.e.coreStopped.text);
```

#### 826. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7143` → after: `L7025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7025) · [Before (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7143)

```diff
-     var Lp = xV(2080);
+     var Dt = LH(2036);
```

#### 827. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7151` → after: `L7033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7033) · [Before (L7151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7151)

```diff
-           aux: VV.reset ? vV.jc.ResetFirst : 0,
+           aux: HH.reset ? GH.cc.ResetFirst : 0,
```

#### 828. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7155` → after: `L7037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7037) · [Before (L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7155)

```diff
-       VV.queueOptions(xV, JV) && (eV.reset && Lp.c.reset(), Lp.c.apply(eV.changes))
+       HH.queueOptions(LH, AH) && (BH.reset && Dt.e.reset(), Dt.e.apply(BH.changes))
```

#### 829. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7228-L7232` → after: `L7110-L7114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7110-L7114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7110-L7114) · [Before (L7228-L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7228-L7232)

```diff
-     var dp = xV(53872),
-       Op = xV(53874),
-       VQ = xV(42252),
-       eQ = xV(42303),
-       xQ = xV(3196);
+     var yt = LH(37110),
+       Hz = LH(37157),
+       Bz = LH(42271),
+       Lz = LH(42307),
+       Az = LH(3171);
```

#### 830. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7236` → after: `L7118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7118) · [Before (L7236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7236)

```diff
-         this.host = VV, this.sets = new Map, this.table = [], this.generation = 0, this.ik = !1
+         this.host = HH, this.sets = new Map, this.table = [], this.generation = 0, this.Mu = !1
```

#### 831. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7240` → after: `L7122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7122) · [Before (L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7240)

```diff
-           if (VV.byteLength !== vV.wd) return null;
+           if (HH.byteLength !== GH.pd) return null;
```

#### 832. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7247` → after: `L7129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7129) · [Before (L7247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7247)

```diff
-         eV && !this.ik && (eV.release !== vV.xd && this.release(eV.release), eV.want !== vV.xd && this.want(eV.want))
+         BH && !this.Mu && (BH.release !== GH.qd && this.release(BH.release), BH.want !== GH.qd && this.want(BH.want))
```

#### 833. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7250` → after: `L7132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7132) · [Before (L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7250)

```diff
-         if (!this.ik) {
+         if (!this.Mu) {
```

#### 834. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7256-L7257` → after: `L7138-L7139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7138-L7139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7138-L7139) · [Before (L7256-L7257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7256-L7257)

```diff
-         if (this.ik) return;
-         this.ik = !0, this.generation++, this.table = [];
+         if (this.Mu) return;
+         this.Mu = !0, this.generation++, this.table = [];
```

#### 835. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7263` → after: `L7145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7145) · [Before (L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7263)

```diff
-             this.host.FYV(VV)
+             this.host.zrH(HH)
```

#### 836. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7280` → after: `L7162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7162) · [Before (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7280)

```diff
-         if (!xV || 1 !== xV.urls.length && xV.urls.length !== yJ.ic.CubeFaces) return this.host.sendReady(pQ(VV)), void this.host.onLoadFailed(VV, "", new Error(`no image set ${VV}`));
+         if (!LH || 1 !== LH.urls.length && LH.urls.length !== hA.ic.CubeFaces) return this.host.sendReady(zz(HH)), void this.host.onLoadFailed(HH, "", new Error(`no image set ${HH}`));
```

#### 837. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7298` → after: `L7180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7180) · [Before (L7298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7298)

```diff
-           if (!QV || !xV.wanted) return this.ik ? void this.releaseAfterDispose(pV.map(UQ)) : (this.releaseAll(pV.map(UQ)), void(QV && this.sets.delete(VV)));
+           if (!zH || !LH.wanted) return this.Mu ? void this.releaseAfterDispose(tH.map(hz)) : (this.releaseAll(tH.map(hz)), void(zH && this.sets.delete(HH)));
```

#### 838. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7308-L7309` → after: `L7190-L7191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7190-L7191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7190-L7191) · [Before (L7308-L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7308-L7309)

```diff
-           const xV = JV.map((VV => `${VV.width}x${VV.height}`));
-           return void this.host.onLoadFailed(VV, eV.urls[0], new Error(`set ${VV}'s images can't make its texture: ${xV.join(", ")}`))
+           const LH = AH.map((HH => `${HH.width}x${HH.height}`));
+           return void this.host.onLoadFailed(HH, BH.urls[0], new Error(`set ${HH}'s images can't make its texture: ${LH.join(", ")}`))
```

#### 839. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7325` → after: `L7207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7207) · [Before (L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7325)

```diff
-         for (const eV of VV) this.host.FYV(eV)
+         for (const BH of HH) this.host.zrH(BH)
```

#### 840. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7329` → after: `L7211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7211) · [Before (L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7329)

```diff
-           this.host.FYV(eV)
+           this.host.zrH(BH)
```

#### 841. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7355` → after: `L7237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7237) · [Before (L7355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7355)

```diff
-         xV = await (0, xQ.H)(VV)
+         LH = await (0, Az.M)(HH)
```

#### 842. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7357` → after: `L7239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7239) · [Before (L7357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7357)

```diff
-         throw new VQ.d("fetch", VV, {
+         throw new Bz.b("fetch", HH, {
```

#### 843. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7390` → after: `L7272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7272) · [Before (L7390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7390)

```diff
-         throw new VQ.d("decode", VV, {
+         throw new Bz.b("decode", HH, {
```

#### 844. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7395` → after: `L7277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7277) · [Before (L7395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7395)

```diff
-         id: (0, VQ.m)(YV),
+         id: (0, Bz.i)(rH),
```

#### 845. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7400-L7404` → after: `L7282-L7286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7282-L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7282-L7286) · [Before (L7400-L7404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7400-L7404)

```diff
-     var wQ = xV(2277),
-       ZQ = xV(34874),
-       vQ = xV(40446);
-     const rQ = wQ.h.length,
-       kQ = new Set([...wQ.h, "earth"]);
+     var Xz = LH(2227),
+       Gz = LH(34806),
+       Yz = LH(40184);
+     const uz = Xz.f.length,
+       Qz = new Set([...Xz.f, "earth"]);
```

#### 846. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7419` → after: `L7301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7301) · [Before (L7419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7419)

```diff
-               urls: (0, vQ.d)(YV),
+               urls: (0, Yz.f)(rH),
```

#### 847. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7429` → after: `L7311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7311) · [Before (L7429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7429)

```diff
-       wQ.h.forEach(((eV, xV) => {
+       Xz.f.forEach(((BH, LH) => {
```

#### 848. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7431` → after: `L7313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7313) · [Before (L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7431)

```diff
-         JV(xV, null !== (YV = EQ(VV[eV])) && void 0 !== YV ? YV : ZQ.m[eV])
+         AH(LH, null !== (rH = Mz(HH[BH])) && void 0 !== rH ? rH : Gz.n[BH])
```

#### 849. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7442` → after: `L7324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7324) · [Before (L7442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7442)

```diff
-         eV.length > 255 ? pV.push(`Ignoring texture pack skybox ${rV}, whose name is over 255 bytes`) : yV.length === yJ.ic.MaxAdded ? pV.push(`Ignoring texture pack skybox ${rV}, past the ${yJ.ic.MaxAdded} skies a pack can add`) : (yV.push(eV), JV(yJ.ic.AddedId, VV))
+         BH.length > 255 ? tH.push(`Ignoring texture pack skybox ${YH}, whose name is over 255 bytes`) : hH.length === hA.ic.MaxAdded ? tH.push(`Ignoring texture pack skybox ${YH}, past the ${hA.ic.MaxAdded} skies a pack can add`) : (hH.push(BH), AH(hA.ic.AddedId, HH))
```

#### 850. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7446` → after: `L7328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7328) · [Before (L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7446)

```diff
-         urls: ZQ.g.map((VV => ZQ.i + VV)),
+         urls: Gz.h.map((HH => Gz.l + HH)),
```

#### 851. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7449` → after: `L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7331) · [Before (L7449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7449)

```diff
-         urls: [ZQ.k],
+         urls: [Gz.m],
```

#### 852. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7452` → after: `L7334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7334) · [Before (L7452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7452)

```diff
-         urls: [ZQ.d],
+         urls: [Gz.e],
```

#### 853. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7479` → after: `L7361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7361) · [Before (L7479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7479)

```diff
-             "number" === typeof QV && Number.isFinite(QV) && (eV.setFloat32(xV + yJ.B.CameraOffsetAt + 4 * UV, QV, !0), YV |= pV)
+             "number" === typeof zH && Number.isFinite(zH) && (BH.setFloat32(LH + hA.v.CameraOffsetAt + 4 * SH, zH, !0), rH |= tH)
```

#### 854. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7485` → after: `L7367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7367) · [Before (L7485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7485)

```diff
-           eV.setUint32(xV + yJ.B.PresentAt, YV, !0), eV.setUint8(xV + yJ.B.FlagsAt, UV)
+           BH.setUint32(LH + hA.v.PresentAt, rH, !0), BH.setUint8(LH + hA.v.FlagsAt, SH)
```

#### 855. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7504` → after: `L7386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7386) · [Before (L7504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7504)

```diff
-       })) ? VV : null
+       })) ? HH : null
```

#### 856. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7507-L7514` → after: `L7389-L7396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7389-L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7389-L7396) · [Before (L7507-L7514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7507-L7514)

```diff
-         ["inclination", yJ.B.Inclination],
-         ["turbidity", yJ.B.Turbidity],
-         ["luminance", yJ.B.Luminance],
-         ["rayleigh", yJ.B.Rayleigh],
-         ["mieCoefficient", yJ.B.MieCoefficient],
-         ["mieDirectionalG", yJ.B.MieDirectionalG],
-         ["distance", yJ.B.Distance],
-         ["azimuth", yJ.B.Azimuth]
+         ["inclination", hA.v.Inclination],
+         ["turbidity", hA.v.Turbidity],
+         ["luminance", hA.v.Luminance],
+         ["rayleigh", hA.v.Rayleigh],
+         ["mieCoefficient", hA.v.MieCoefficient],
+         ["mieDirectionalG", hA.v.MieDirectionalG],
+         ["distance", hA.v.Distance],
+         ["azimuth", hA.v.Azimuth]
```

#### 857. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7517-L7519` → after: `L7399-L7401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7399-L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7399-L7401) · [Before (L7517-L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7517-L7519)

```diff
-         ["sunPosition", yJ.B.SunPosition, yJ.B.SunPositionAt],
-         ["up", yJ.B.Up, yJ.B.UpAt],
-         ["vertexTint", yJ.B.VertexTint, yJ.B.VertexTintAt]
+         ["sunPosition", hA.v.SunPosition, hA.v.SunPositionAt],
+         ["up", hA.v.Up, hA.v.UpAt],
+         ["vertexTint", hA.v.VertexTint, hA.v.VertexTintAt]
```

#### 858. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7522-L7524` → after: `L7404-L7406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7404-L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7404-L7406) · [Before (L7522-L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7522-L7524)

```diff
-         ["xCameraOffset", yJ.B.CameraOffsetX],
-         ["yCameraOffset", yJ.B.CameraOffsetY],
-         ["zCameraOffset", yJ.B.CameraOffsetZ]
+         ["xCameraOffset", hA.v.CameraOffsetX],
+         ["yCameraOffset", hA.v.CameraOffsetY],
+         ["zCameraOffset", hA.v.CameraOffsetZ]
```

#### 859. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7527-L7529` → after: `L7409-L7411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7409-L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7409-L7411) · [Before (L7527-L7529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7527-L7529)

```diff
-         ["useSunPosition", yJ.B.UseSunPosition],
-         ["dithering", yJ.B.Dithering],
-         ["infiniteDistance", yJ.B.InfiniteDistance]
+         ["useSunPosition", hA.v.UseSunPosition],
+         ["dithering", hA.v.Dithering],
+         ["infiniteDistance", hA.v.InfiniteDistance]
```

#### 860. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7559` → after: `L7441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7441) · [Before (L7559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7559)

```diff
-                       return "string" !== typeof VV ? null : null !== (eV = null === (xV = AQ.exec(VV)) || void 0 === xV || null === (JV = xV.groups) || void 0 === JV ? void 0 : JV.base64) && void 0 !== eV ? eV : null
+                       return "string" !== typeof HH ? null : null !== (BH = null === (LH = bz.exec(HH)) || void 0 === LH || null === (AH = LH.groups) || void 0 === AH ? void 0 : AH.base64) && void 0 !== BH ? BH : null
```

#### 861. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7563` → after: `L7445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7445) · [Before (L7563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7563)

```diff
-                 }(JV) || (xV(`Ignoring texture pack skybox ${eV}, whose faces are not all data URLs`, null), !1)
+                 }(AH) || (LH(`Ignoring texture pack skybox ${BH}, whose faces are not all data URLs`, null), !1)
```

#### 862. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7576` → after: `L7458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7458) · [Before (L7576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7576)

```diff
-         this.host = VV, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.ik = !1, this.wait = null !== (eV = VV.wait) && void 0 !== eV ? eV : (VV, eV) => {
+         this.host = HH, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.Mu = !1, this.wait = null !== (BH = HH.wait) && void 0 !== BH ? BH : (HH, BH) => {
```

#### 863. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7579-L7580` → after: `L7461-L7462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7461-L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7461-L7462) · [Before (L7579-L7580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7579-L7580)

```diff
-           loadImage: null !== (xV = VV.loadImage) && void 0 !== xV ? xV : nQ,
-           FYV: null !== (JV = VV.FYV) && void 0 !== JV ? JV : VQ.q,
+           loadImage: null !== (LH = HH.loadImage) && void 0 !== LH ? LH : Ez,
+           zrH: null !== (AH = HH.zrH) && void 0 !== AH ? AH : Bz.k,
```

#### 864. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7588` → after: `L7470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7470) · [Before (L7588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7588)

```diff
-             VV.warn(`sky image set ${eV} (${xV}) didn't load: the last sky stays`, JV)
+             HH.warn(`sky image set ${BH} (${LH}) didn't load: the last sky stays`, AH)
```

#### 865. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7597` → after: `L7479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7479) · [Before (L7597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7597)

```diff
-           this.write(null !== VV && void 0 !== VV ? VV : {})
+           this.write(null !== HH && void 0 !== HH ? HH : {})
```

#### 866. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7610` → after: `L7492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7492) · [Before (L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7610)

```diff
-         this.ik = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
+         this.Mu = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
```

#### 867. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7613` → after: `L7495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7495) · [Before (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7613)

```diff
-         if (this.ik) return;
+         if (this.Mu) return;
```

#### 868. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7629-L7644` → after: `L7511-L7526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7511-L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7511-L7526) · [Before (L7629-L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7629-L7644)

```diff
-     var NQ = xV(3119),
-       XQ = xV(3348),
-       MQ = xV(323),
-       zQ = xV(188),
-       GQ = xV(3125),
-       WQ = xV(3131),
-       RQ = xV(291),
-       gQ = xV(296),
-       DQ = xV(3233),
-       iQ = xV(3252),
-       CQ = xV(3264),
-       aQ = xV(115),
-       oQ = xV(3321),
-       cQ = xV(2649),
-       hQ = xV(348),
-       lQ = xV(42125);
+     var kz = LH(3064),
+       mz = LH(3310),
+       oz = LH(268),
+       Iz = LH(168),
+       fz = LH(3073),
+       lz = LH(3090),
+       Kz = LH(233),
+       cz = LH(241),
+       ez = LH(3193),
+       qz = LH(3223),
+       gz = LH(3235),
+       Nz = LH(101),
+       Rz = LH(3292),
+       jz = LH(3287),
+       nz = LH(293),
+       Fz = LH(42150);
```

#### 869. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7647-L7648` → after: `L7529-L7530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7529-L7530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7529-L7530) · [Before (L7647-L7648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7647-L7648)

```diff
-         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, xU.l)(RJ.M, (VV => {
-           this.onReply((0, eU.i)(RJ.M, VV), performance.now())
+         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, LS.k)(lA.G, (HH => {
+           this.onReply((0, BS.f)(lA.G, HH), performance.now())
```

#### 870. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7652` → after: `L7534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7534) · [Before (L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7652)

```diff
-         null === this.id ? this.id = VV : VV !== this.id && (this.id = VV, this.sentMs = document.hidden ? null : eV)
+         null === this.id ? this.id = HH : HH !== this.id && (this.id = HH, this.sentMs = document.hidden ? null : BH)
```

#### 871. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7719-L7721` → after: `L7601-L7603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7601-L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7601-L7603) · [Before (L7719-L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7719-L7721)

```diff
-         const xV = VV.headerWord(yJ.Q.Pacing),
-           JV = VV.headerWord(yJ.Q.PacingLagUs),
-           YV = (xV >>> yJ.gb.LagsShift) - (this.word >>> yJ.gb.LagsShift) & yJ.gb.CountMask,
+         const LH = HH.headerWord(hA.I.Pacing),
+           AH = HH.headerWord(hA.I.PacingLagUs),
+           rH = (LH >>> hA.fb.LagsShift) - (this.word >>> hA.fb.LagsShift) & hA.fb.CountMask,
```

#### 872. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7724` → after: `L7606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7606) · [Before (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7724)

```diff
-         this.word = xV, this.lagUs = JV, this.primed = !0, yV && eV && YV > 0 && 0 !== (xV & yJ.gb.Defaulted) && this.lags.add(UV, YV)
+         this.word = LH, this.lagUs = AH, this.primed = !0, hH && BH && rH > 0 && 0 !== (LH & hA.fb.Defaulted) && this.lags.add(SH, rH)
```

#### 873. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7733-L7739` → after: `L7615-L7621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7615-L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7615-L7621) · [Before (L7733-L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7733-L7739)

```diff
-     var uQ = xV(3224),
-       sQ = xV(35249),
-       SQ = xV(3239),
-       IQ = xV(42177),
-       dQ = xV(35247),
-       OQ = xV(3139),
-       Vn = xV(3242);
+     var sz = LH(3187),
+       Jz = LH(34924),
+       iz = LH(3195),
+       pz = LH(42200),
+       yz = LH(34915),
+       HC = LH(3098),
+       BC = LH(3200);
```

#### 874. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7768` → after: `L7651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7651) · [Before (L7768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7768)

```diff
-         this.shell = VV, this.tracker = new WQ.e, this.gpu = new fQ, this.pacing = new HQ, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
+         this.shell = HH, this.tracker = new lz.c, this.gpu = new wz, this.pacing = new az, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
```

#### 875. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7770` → after: `L7653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7653) · [Before (L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7770)

```diff
-         })), this.onVisibility = () => {
+         }), (HH => this.shell.Km(HH))), this.onVisibility = () => {
```

#### 876. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7774` → after: `L7657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7657) · [Before (L7774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7774)

```diff
-         }, (0, sQ.c)(VV.backend, VV.canvas, VV.adapterVendor), this.tracker.start((() => !VV.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, OQ.b)("wasm", (() => {
+         }, (0, Jz.b)(HH.backend, HH.canvas, HH.adapterVendor), this.tracker.start((() => !HH.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, HC.c)("wasm", (() => {
```

#### 877. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7779` → after: `L7662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7662) · [Before (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7779)

```diff
-           return `${VV.backend}, quality steps aim at up to ${Vn.d.target.maxFps} fps, pixel n ${eV}, msaa ${xV}`
+           return `${HH.backend}, quality steps aim at up to ${BC.b.target.maxFps} fps, pixel n ${BH}, msaa ${LH}`
```

#### 878. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7793` → after: `L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7676) · [Before (L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7793)

```diff
-         this.ping.onFrame(VV.headerWord(yJ.Q.PingSent), eV), this.sendsStartMs = eV, this.sendsEndMs = xV
+         this.ping.onFrame(HH.headerWord(hA.I.PingSent), BH), this.sendsStartMs = BH, this.sendsEndMs = LH
```

#### 879. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7797` → after: `L7680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7680) · [Before (L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7797)

```diff
-         this.ping.onFrame(VV.headerWord(yJ.Q.PingSent), xV);
+         this.ping.onFrame(HH.headerWord(hA.I.PingSent), LH);
```

#### 880. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7800` → after: `L7683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7683) · [Before (L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7800)

```diff
-         const yV = VV.headerWord(yJ.Q.TickUs) / 1e3 + (0, EJ.J)();
+         const hH = HH.headerWord(hA.I.TickUs) / 1e3 + (0, WA.P)();
```

#### 881. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7802` → after: `L7685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7685) · [Before (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7802)

```diff
-         (UV.Iq(yV), null === (YV = this.frameDebug) || void 0 === YV || YV.wasmFrame(VV, eV, xV, JV, UV.isSampling(), yV), null !== this.game) && (null === (pV = this.frameDebug) || void 0 === pV || pV.inGame());
+         (SH.Dv(hH), null === (rH = this.frameDebug) || void 0 === rH || rH.wasmFrame(HH, BH, LH, AH, SH.isSampling(), hH), null !== this.game) && (null === (tH = this.frameDebug) || void 0 === tH || tH.inGame());
```

#### 882. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7807` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7690) · [Before (L7807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7807)

```diff
-         this.gpu.onFrame(VV.headerWord(yJ.Q.GpuSampled), VV.headerWord(yJ.Q.GpuTimed), VV.headerWord(yJ.Q.GpuFrameUs), UV.isSampling()) && UV.onGpuSampleStarted(), UV.onFrameCpu(nV + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(eV)
+         this.gpu.onFrame(HH.headerWord(hA.I.GpuSampled), HH.headerWord(hA.I.GpuTimed), HH.headerWord(hA.I.GpuFrameUs), SH.isSampling()) && SH.onGpuSampleStarted(), SH.onFrameCpu(CH + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(BH)
```

#### 883. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7833` → after: `L7716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7716) · [Before (L7833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7833)

```diff
-         if (!(eV < CQ.e)) {
+         if (!(BH < gz.c)) {
```

#### 884. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7852` → after: `L7735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7735) · [Before (L7852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7852)

```diff
-           nV = QV ? yV : (0, GQ.g)(yV),
+           CH = zH ? hH : (0, fz.d)(hH),
```

#### 885. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7856` → after: `L7739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7739) · [Before (L7856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7856)

```diff
-           rV = (0, iQ.A)((0, iQ.w)(ZV), this.unsentPage),
+           YH = (0, qz.y)((0, qz.u)(XH), this.unsentPage),
```

#### 886. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7863` → after: `L7746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7746) · [Before (L7863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7863)

```diff
-               EV = (0, DQ.f)({
+               WH = (0, ez.j)({
```

#### 887. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7866` → after: `L7749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7749) · [Before (L7866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7866)

```diff
-                 autoMsaaOff: (0, dQ.b)()
+                 autoMsaaOff: (0, yz.e)()
```

#### 888. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7871-L7873` → after: `L7754-L7756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7754-L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7754-L7756) · [Before (L7871-L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7871-L7873)

```diff
-               if ((0, MQ.A)(jV)) qV = (0, iQ.e)(jV);
-               else if ((0, iQ.k)(jV)) qV = QV[jV];
-               else if ((0, DQ.i)(jV)) qV = EV[jV];
+               if ((0, oz.H)(xH)) vH = (0, qz.c)(xH);
+               else if ((0, qz.f)(xH)) vH = zH[xH];
+               else if ((0, ez.n)(xH)) vH = WH[xH];
```

#### 889. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7878` → after: `L7761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7761) · [Before (L7878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7878)

```diff
-                 case "rp":
+                 case "yt":
```

#### 890. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7881-L7882` → after: `L7764-L7765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7764-L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7764-L7765) · [Before (L7881-L7882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7881-L7882)

```diff
-                 case "jp":
-                   qV = (0, SQ.B)((0, IQ.d)().n);
+                 case "Sz":
+                   vH = (0, iz.G)((0, pz.d)().n);
```

#### 891. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7884` → after: `L7767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7767) · [Before (L7884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7884)

```diff
-                 case "qp":
+                 case "hz":
```

#### 892. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7887` → after: `L7770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7770) · [Before (L7887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7887)

```diff
-                 case "tp":
+                 case "tz":
```

#### 893. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7890` → after: `L7773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7773) · [Before (L7890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7890)

```diff
-                 case "Fp":
+                 case "zz":
```

#### 894. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7893` → after: `L7776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7776) · [Before (L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7893)

```diff
-                 case "Tp":
+                 case "Cz":
```

#### 895. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7896` → after: `L7779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7779) · [Before (L7896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7896)

```diff
-                 case "Pp":
+                 case "Ez":
```

#### 896. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7899` → after: `L7782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7782) · [Before (L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7899)

```diff
-                 case "Ap":
+                 case "Xz":
```

#### 897. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7902` → after: `L7785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7785) · [Before (L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7902)

```diff
-                 case "Np":
+                 case "Gz":
```

#### 898. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7905` → after: `L7788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7788) · [Before (L7905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7905)

```diff
-                 case "Xp":
+                 case "Yz":
```

#### 899. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7908` → after: `L7791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7791) · [Before (L7908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7908)

```diff
-                 case "Mp":
+                 case "uz":
```

#### 900. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7911` → after: `L7794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7794) · [Before (L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7911)

```diff
-                 case "zp":
+                 case "Qz":
```

#### 901. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7914` → after: `L7797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7797) · [Before (L7914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7914)

```diff
-                 case "Gp":
+                 case "Wz":
```

#### 902. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7917` → after: `L7800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7800) · [Before (L7917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7917)

```diff
-                 case "Dp":
+                 case "Uz":
```

#### 903. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7920` → after: `L7803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7803) · [Before (L7920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7920)

```diff
-                 case "Cp":
+                 case "Vz":
```

#### 904. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7923` → after: `L7806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7806) · [Before (L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7923)

```diff
-                 case "Wp":
+                 case "Mz":
```

#### 905. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7926` → after: `L7809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7809) · [Before (L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7926)

```diff
-                 case "Rp":
+                 case "xz":
```

#### 906. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7929` → after: `L7812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7812) · [Before (L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7929)

```diff
-                 case "gp":
+                 case "vz":
```

#### 907. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7932` → after: `L7815-L7821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7815-L7821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7815-L7821) · [Before (L7932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7932)

```diff
-                 case "ap":
+                 case "Pz":
+                   vH = BH.framesOver50msPerMin;
+                   break;
+                 case "Tz":
+                   vH = BH.framesOver100msPerMin;
+                   break;
+                 case "Oz":
```

#### 908. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7935` → after: `L7824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7824) · [Before (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7935)

```diff
-                 case "cp":
+                 case "bz":
```

#### 909. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7938` → after: `L7827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7827) · [Before (L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7938)

```diff
-                 case "hp":
+                 case "kz":
```

#### 910. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7941` → after: `L7830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7830) · [Before (L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7941)

```diff
-                 case "lp":
+                 case "mz":
```

#### 911. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7944-L7945` → after: `L7833-L7834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7833-L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7833-L7834) · [Before (L7944-L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7944-L7945)

```diff
-                 case "eQ":
-                   qV = (0, NQ.h)(yV);
+                 case "jz":
+                   vH = (0, kz.i)(hH);
```

#### 912. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7947` → after: `L7836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7836) · [Before (L7947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7947)

```diff
-                 case "Bp":
+                 case "rz":
```

#### 913. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7950-L7964` → after: `L7839-L7853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7839-L7853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7839-L7853) · [Before (L7950-L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7950-L7964)

```diff
-                 case "Lp":
-                 case "fp":
-                 case "mp":
-                 case "Kp":
-                 case "Hp":
-                 case "sp":
-                 case "Sp":
-                 case "Ip":
-                 case "dp":
-                 case "Op":
-                 case "VQ":
-                 case "xQ":
-                 case "JQ":
-                 case "YQ":
-                 case "UQ":
+                 case "oz":
+                 case "Iz":
+                 case "fz":
+                 case "lz":
+                 case "Kz":
+                 case "cz":
+                 case "ez":
+                 case "qz":
+                 case "gz":
+                 case "Nz":
+                 case "Rz":
+                 case "nz":
+                 case "Fz":
+                 case "Dz":
+                 case "wz":
```

#### 914. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7967` → after: `L7856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7856) · [Before (L7967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7967)

```diff
-                 case "qQ":
+                 case "tC":
```

#### 915. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7970` → after: `L7859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7859) · [Before (L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7970)

```diff
-                 case "tQ":
+                 case "zC":
```

#### 916. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7973` → after: `L7862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7862) · [Before (L7973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7973)

```diff
-                 case "FQ":
+                 case "CC":
```

#### 917. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7976-L7977` → after: `L7865-L7866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7865-L7866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7865-L7866) · [Before (L7976-L7977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7976-L7977)

```diff
-                 case "TQ":
-                   qV = (0, aQ.c)();
+                 case "XC":
+                   vH = (0, Nz.d)();
```

#### 918. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7979` → after: `L7868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7868) · [Before (L7979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7979)

```diff
-                 case "AQ":
+                 case "YC":
```

#### 919. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7982` → after: `L7871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7871) · [Before (L7982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7982)

```diff
-                 case "NQ":
+                 case "uC":
```

#### 920. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7985-L7986` → after: `L7874-L7875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7874-L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7874-L7875) · [Before (L7985-L7986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7985-L7986)

```diff
-                 case "MQ":
-                   qV = null !== (nV = JV.b.get("gameEntrySource")) && void 0 !== nV ? nV : zQ.g;
+                 case "QC":
+                   vH = null !== (CH = AH.c.get("gameEntrySource")) && void 0 !== CH ? CH : Iz.f;
```

#### 921. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7988-L7989` → after: `L7877-L7878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7877-L7878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7877-L7878) · [Before (L7988-L7989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7988-L7989)

```diff
-                 case "zQ":
-                   qV = null !== (wV = eV.frameLimiter) && void 0 !== wV ? wV : zQ.g;
+                 case "WC":
+                   vH = null !== (EH = BH.frameLimiter) && void 0 !== EH ? EH : Iz.f;
```

#### 922. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7991` → after: `L7880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7880) · [Before (L7991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7991)

```diff
-                 case "GQ":
+                 case "MC":
```

#### 923. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7994-L7995` → after: `L7883-L7884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7883-L7884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7883-L7884) · [Before (L7994-L7995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7994-L7995)

```diff
-                 case "WQ":
-                   qV = null !== (ZV = (0, gQ.d)()) && void 0 !== ZV ? ZV : zQ.g;
+                 case "xC":
+                   vH = null !== (XH = (0, cz.e)()) && void 0 !== XH ? XH : Iz.f;
```

#### 924. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7997` → after: `L7886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7886) · [Before (L7997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7997)

```diff
-                 case "RQ":
+                 case "vC":
```

#### 925. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8000-L8001` → after: `L7889-L7890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7889-L7890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7889-L7890) · [Before (L8000-L8001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8000-L8001)

```diff
-                 case "gQ":
-                   qV = (0, XQ.d)(-(new Date).getTimezoneOffset());
+                 case "PC":
+                   vH = (0, mz.g)(-(new Date).getTimezoneOffset());
```

#### 926. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8003-L8004` → after: `L7892-L7893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7892-L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7892-L7893) · [Before (L8003-L8004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8003-L8004)

```diff
-                 case "cQ":
-                   qV = null !== (vV = VV.fallbackReason) && void 0 !== vV ? vV : zQ.g;
+                 case "kC":
+                   vH = null !== (GH = HH.fallbackReason) && void 0 !== GH ? GH : Iz.f;
```

#### 927. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8006` → after: `L7895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7895) · [Before (L8006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8006)

```diff
-                 case "LQ":
+                 case "IC":
```

#### 928. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8009` → after: `L7898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7898) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8009)

```diff
-                 case "fQ":
+                 case "fC":
```

#### 929. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8012` → after: `L7901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7901) · [Before (L8012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8012)

```diff
-                 case "iQ":
+                 case "UC":
```

#### 930. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8015-L8016` → after: `L7904-L7905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7904-L7905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7904-L7905) · [Before (L8015-L8016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8015-L8016)

```diff
-                 case "CQ":
-                   qV = (0, cQ.g)().replayState;
+                 case "VC":
+                   vH = (0, jz.e)().replayState;
```

#### 931. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8018-L8019` → after: `L7907-L7908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7907-L7908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7907-L7908) · [Before (L8018-L8019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8018-L8019)

```diff
-                 case "aQ":
-                   qV = (0, cQ.g)().replaySelection;
+                 case "OC":
+                   vH = (0, jz.e)().replaySelection;
```

#### 932. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8021` → after: `L7910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7910) · [Before (L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8021)

```diff
-                 case "oQ":
+                 case "bC":
```

#### 933. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8024` → after: `L7913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7913) · [Before (L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8024)

```diff
-                 case "mQ":
+                 case "lC":
```

#### 934. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8027` → after: `L7916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7916) · [Before (L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8027)

```diff
-                 case "KQ": {
+                 case "KC": {
```

#### 935. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8032-L8033` → after: `L7921-L7922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7921-L7922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7921-L7922) · [Before (L8032-L8033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8032-L8033)

```diff
-                 case "uQ":
-                   qV = hQ.C;
+                 case "cC":
+                   vH = nz.z;
```

#### 936. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8035-L8036` → after: `L7924-L7925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7924-L7925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7924-L7925) · [Before (L8035-L8036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8035-L8036)

```diff
-                 case "xn":
-                   qV = (0, iQ.o)();
+                 case "nC":
+                   vH = (0, qz.j)();
```

#### 937. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8038-L8040` → after: `L7927-L7929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7927-L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7927-L7929) · [Before (L8038-L8040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8038-L8040)

```diff
-                 case "DQ": {
-                   const eV = VV.eE();
-                   qV = null === eV ? zQ.g : String(eV);
+                 case "TC": {
+                   const BH = HH.KQ();
+                   vH = null === BH ? Iz.f : String(BH);
```

#### 938. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8043-L8045` → after: `L7932-L7934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7932-L7934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7932-L7934) · [Before (L8043-L8045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8043-L8045)

```diff
-                 case "hQ":
-                 case "lQ":
-                   qV = zQ.g;
+                 case "mC":
+                 case "oC":
+                   vH = Iz.f;
```

#### 939. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8048` → after: `L7937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7937) · [Before (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8048)

```diff
-                   throw new Error(`Unhandled field name: ${jV}`)
+                   throw new Error(`Unhandled field name: ${xH}`)
```

#### 940. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8050` → after: `L7939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7939) · [Before (L8050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8050)

```diff
-               if (void 0 === qV) throw new Error(`Metric ${jV} has no value`);
+               if (void 0 === vH) throw new Error(`Metric ${xH} has no value`);
```

#### 941. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8062-L8066` → after: `L7951-L7955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7951-L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7951-L7955) · [Before (L8062-L8066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8062-L8066)

```diff
-             return (0, Jx.e)(), VV(kV.k.Send, eV, xV)
-           }(this.shell.writeCmd, vV.td, function(VV) {
-             const eV = (0, oV.g)((0, yx.h)(VV)),
-               xV = new Uint8Array(kV.ce.BYTES + eV.length);
-             return new DataView(xV.buffer).setUint16(0, yx.d.AnalyticsUpdate, !0), xV.set(eV, kV.ce.BYTES), xV
+             return (0, AL.b)(), HH(uH.q.Send, BH, LH)
+           }(this.shell.writeCmd, GH.nd, function(HH) {
+             const BH = (0, RH.g)((0, hL.f)(HH)),
+               LH = new Uint8Array(uH.ge.BYTES + BH.length);
+             return new DataView(LH.buffer).setUint16(0, hL.d.AnalyticsUpdate, !0), LH.set(BH, uH.ge.BYTES), LH
```

#### 942. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8068` → after: `L7957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7957) · [Before (L8068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8068)

```diff
-         this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, NQ.g), (0, iQ.v)(bV, "wasm", ZV)
+         this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, kz.h), (0, qz.r)(QH, "wasm", XH)
```

#### 943. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8071` → after: `L7960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7960) · [Before (L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8071)

```diff
-     var Yn = xV(40889);
+     var SC = LH(40657);
```

#### 944. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8075-L8077` → after: `L7964-L7966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7964-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7964-L7966) · [Before (L8075-L8077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8075-L8077)

```diff
-       return (0, Yn.c)(((VV, xV, JV) => eV.vp(VV, xV, JV)), ((eV, xV, YV) => {
-         const UV = `${eV},${xV},${YV}`;
-         return JV.has(UV) || JV.set(UV, (0, He.c)(VV, eV, xV, YV)), JV.get(UV)
+       return (0, SC.d)(((HH, LH, AH) => BH.ph(HH, LH, AH)), ((BH, LH, rH) => {
+         const SH = `${BH},${LH},${rH}`;
+         return AH.has(SH) || AH.set(SH, (0, dB.d)(HH, BH, LH, rH)), AH.get(SH)
```

#### 945. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8080-L8081` → after: `L7969-L7970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7969-L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7969-L7970) · [Before (L8080-L8081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8080-L8081)

```diff
-     var yn = xV(40894),
-       pn = xV(42171);
+     var tC = LH(40661),
+       zC = LH(42192);
```

#### 946. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8084-L8085` → after: `L7973-L7974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7973-L7974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7973-L7974) · [Before (L8084-L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8084-L8085)

```diff
-       const eV = null !== VV && 0 !== (kV.s.playerFlags(VV.api.apiView, 0) & kV.Ld.CursorAim);
-       eV !== (0, pn.l)() && (0, pn.D)(eV, null !== VV)
+       const BH = null !== HH && 0 !== (uH.y.playerFlags(HH.api.apiView, 0) & uH.Md.CursorAim);
+       BH !== (0, zC.k)() && (0, zC.F)(BH, null !== HH)
```

#### 947. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8089` → after: `L7978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7978) · [Before (L8089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8089)

```diff
-       return (0, WJ.b)(RJ.F, VV)
+       return (0, fA.d)(lA.C, HH)
```
