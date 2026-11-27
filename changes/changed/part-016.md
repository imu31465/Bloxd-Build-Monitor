# Changed — Bundle Modifications Report (Part 016 / 154)

- **Updated at**: `2026-11-28T07:18 JST`
- **Part**: `16 / 154` (**421** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/109.js` (1yqdn.8419f1e1 → 4udp6d.2845de07 · continued)

- **File**: `bundles/bloxd.io/chunks/js/109.js` (3996 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df)

#### 2637. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24628-L24630` → after: `L24159-L24161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24159-L24161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24159-L24161) · [Before (L24628-L24630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24628-L24630)

```diff
-         const NW = 2 * (0, AW.f)(cW[0] - vW.angle.def, 0, .5),
-           LW = (0, AW.f)(mW, 0, 1) + NW;
-         UW = (0, AW.v)(dW / WW.bones.skeleLen, 0, LW)
+         const uR = 2 * (0, eR.e)(iR[0] - HR.angle.def, 0, .5),
+           qR = (0, eR.e)(yR, 0, 1) + uR;
+         nR = (0, eR.t)(NR / RR.bones.skeleLen, 0, qR)
```

#### 2638. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24632-L24633` → after: `L24163-L24164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24163-L24164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24163-L24164) · [Before (L24632-L24633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24632-L24633)

```diff
-       cW[0] += TW.noise2D(WW.windX, mW) * vW.vel.wind * iW, cW[0] = (0, AW.f)(cW[0], vW.angle.min, vW.angle.max);
-       for (let EW = cW.length - 3; EW > 0; EW -= 3) cW[EW] = (0, AW.v)(cW[EW], cW[EW - 3] - UW, NW);
+       iR[0] += lR.noise2D(RR.windX, yR) * HR.vel.wind * JR, iR[0] = (0, eR.e)(iR[0], HR.angle.min, HR.angle.max);
+       for (let tR = iR.length - 3; tR > 0; tR -= 3) iR[tR] = (0, eR.t)(iR[tR], iR[tR - 3] - nR, uR);
```

#### 2639. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24641` → after: `L24172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24172) · [Before (L24641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24641)

```diff
-       const mW = WW.EY.getState(iW, "cape"),
+       const yR = RR.zC.getState(JR, "cape"),
```

#### 2640. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24647` → after: `L24178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24178) · [Before (L24647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24647)

```diff
-       } = WW.EY.aiW(iW), PW = "gliding" === NW || "sleeping" === NW, LW = PW ? 0 : vW.angle.def, cW = PW ? 0 : dW / mW.bones.skeleLen, wW = PW ? 0 : Math.sin(Math.abs(WW.EY.getState(iW, "updateWalkingState").walkingAngle)) * eW;
+       } = RR.zC.oGR(JR), ZR = "gliding" === uR || "sleeping" === uR, qR = ZR ? 0 : HR.angle.def, iR = ZR ? 0 : NR / yR.bones.skeleLen, fR = ZR ? 0 : Math.sin(Math.abs(RR.zC.getState(JR, "updateWalkingState").walkingAngle)) * DR;
```

#### 2641. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24658` → after: `L24189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24189) · [Before (L24658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24658)

```diff
-   40059: (WW, iW, OW) => {
+   40093: (RR, JR, GR) => {
```

#### 2642. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24662-L24663` → after: `L24193-L24194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24193-L24194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24193-L24194) · [Before (L24662-L24663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24662-L24663)

```diff
-     var mW = OW(38955),
-       EW = OW(2350);
+     var yR = GR(38948),
+       tR = GR(2421);
```

#### 2643. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24672-L24673` → after: `L24203-L24204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24203-L24204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24203-L24204) · [Before (L24672-L24673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24672-L24673)

```diff
-         mY: function(WW, iW) {},
-         mH: null,
+         mC: function(RR, JR) {},
+         eD: null,
```

#### 2644. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24676-L24678` → after: `L24207-L24209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24207-L24209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24207-L24209) · [Before (L24676-L24678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24676-L24678)

```diff
-             const iW = NW.rD,
-               OW = WW.EY.jB(iW);
-             OW.preventFallOffEdge && !NW._preventFallOffLastTick && (0, EW.pM)();
+             const JR = uR.Rm,
+               GR = RR.zC.Lk(JR);
+             GR.preventFallOffEdge && !uR._preventFallOffLastTick && (0, tR.dW)();
```

#### 2645. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24683` → after: `L24214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24214) · [Before (L24683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24683)

```diff
-             } = WW.EY.aiW(iW), wW = (0, mW.j)(PW, LW, cW, NW._preventFallOffLastTick);
+             } = RR.zC.oGR(JR), fR = (0, yR.e)(ZR, qR, iR, uR._preventFallOffLastTick);
```

#### 2646. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24690` → after: `L24221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24221) · [Before (L24690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24690)

```diff
-   40053: (WW, iW, OW) => {
+   40081: (RR, JR, GR) => {
```

#### 2647. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24695` → after: `L24226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24226) · [Before (L24695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24695)

```diff
-     var mW = OW(40055);
+     var yR = GR(40089);
```

#### 2648. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24705-L24706` → after: `L24236-L24237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24236-L24237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24236-L24237) · [Before (L24705-L24706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24705-L24706)

```diff
-         mY: function(WW, iW) {},
-         mH: function(WW, iW) {},
+         mC: function(RR, JR) {},
+         eD: function(RR, JR) {},
```

#### 2649. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24710` → after: `L24241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24241) · [Before (L24710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24710)

```diff
-             mW.length && WW.EY.mV(mW[0].rD, "doOnFirstTick")
+             yR.length && RR.zC.Zm(yR[0].Rm, "doOnFirstTick")
```

#### 2650. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24720` → after: `L24251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24251) · [Before (L24720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24720)

```diff
-   40067: (WW, iW, OW) => {
+   40098: (RR, JR, GR) => {
```

#### 2651. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24724-L24733` → after: `L24255-L24264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24255-L24264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24255-L24264) · [Before (L24724-L24733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24724-L24733)

```diff
-     var mW = OW(27),
-       EW = OW(10049),
-       NW = OW(37626),
-       PW = OW(327),
-       LW = OW(38437),
-       cW = OW(40070),
-       wW = OW(39913),
-       tW = OW(39923),
-       ZW = OW(40073),
-       xW = OW(38336),
+     var yR = GR(32),
+       tR = GR(10178),
+       uR = GR(37537),
+       ZR = GR(359),
+       qR = GR(38406),
+       iR = GR(40103),
+       fR = GR(39917),
+       VR = GR(39924),
+       KR = GR(40105),
+       wR = GR(38296),
```

#### 2652. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24735` → after: `L24266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24266) · [Before (L24735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24735)

```diff
-       AW = OW(37348);
+       eR = GR(37262);
```

#### 2653. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24753-L24754` → after: `L24284-L24285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24284-L24285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24284-L24285) · [Before (L24753-L24754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24753-L24754)

```diff
-             const iW = (0, cW.q)(WW.content).substring(0, OW - EW),
-               NW = (0, cW.s)(WW.content) ? {
+             const JR = (0, iR.y)(RR.content).substring(0, GR - tR),
+               uR = (0, iR.B)(RR.content) ? {
```

#### 2654. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24777` → after: `L24308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24308) · [Before (L24777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24777)

```diff
-             for (const WW of NW.items)(0, cW.k)(WW.content, WW.sizeCache.x, NW.y, NW.height, mW, WW.sizeCache.width, EW);
+             for (const RR of uR.items)(0, iR.n)(RR.content, RR.sizeCache.x, uR.y, uR.height, yR, RR.sizeCache.width, tR);
```

#### 2655. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24781` → after: `L24312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24312) · [Before (L24781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24781)

```diff
-             WW.items.length > 0 && (0, cW.o)(WW.items.map((WW => WW.content)), 0, WW.y, WW.height, mW, EW)
+             RR.items.length > 0 && (0, iR.r)(RR.items.map((RR => RR.content)), 0, RR.y, RR.height, yR, tR)
```

#### 2656. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24786` → after: `L24317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24317) · [Before (L24786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24786)

```diff
-         WW.EY.XiW(iW.planeEId) || function(iW) {
+         RR.zC.vGR(JR.planeEId) || function(JR) {
```

#### 2657. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24791` → after: `L24322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24322) · [Before (L24791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24791)

```diff
-           } = (0, cW.g)(WW, iW.rD, `${iW.rD}MultilineText`);
+           } = (0, iR.k)(RR, JR.Rm, `${JR.Rm}MultilineText`);
```

#### 2658. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24807` → after: `L24338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24338) · [Before (L24807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24807)

```diff
-         (0, LW.N)(iW.texture, mW.width, mW.height), iW.plane.YZ.set(mW.width * cW.c.TEXT_PLANE_RATIO, mW.height * cW.c.TEXT_PLANE_RATIO, 1), sW(iW, mW), iW.sizeCache = mW
+         (0, qR.H)(JR.texture, yR.width, yR.height), JR.plane.MK.set(yR.width * iR.c.TEXT_PLANE_RATIO, yR.height * iR.c.TEXT_PLANE_RATIO, 1), WR(JR, yR), JR.sizeCache = yR
```

#### 2659. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24821` → after: `L24352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24352) · [Before (L24821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24821)

```diff
-         if ((0, tW.c)(WW)) return void(iW.newMessageWhileLost ||= !EW);
+         if ((0, VR.b)(RR)) return void(JR.newMessageWhileLost ||= !tR);
```

#### 2660. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24829-L24830` → after: `L24360-L24361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24360-L24361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24360-L24361) · [Before (L24829-L24830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24829-L24830)

```diff
-           const iW = (0, cW.p)(WW.content, cW.c.DEFAULT_FONT_SIZE),
-             OW = (0, cW.u)(),
+           const JR = (0, iR.u)(RR.content, iR.c.DEFAULT_FONT_SIZE),
+             GR = (0, iR.D)(),
```

#### 2661. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24838-L24839` → after: `L24369-L24370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24369-L24370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24369-L24370) · [Before (L24838-L24839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24838-L24839)

```diff
-             if ((0, cW.s)(NW)) {
-               const WW = (0, cW.q)(NW);
+             if ((0, iR.B)(uR)) {
+               const RR = (0, iR.y)(uR);
```

#### 2662. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24852-L24853` → after: `L24383-L24384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24383-L24384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24383-L24384) · [Before (L24852-L24853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24852-L24853)

```diff
-                 OW = mW[mW.length - 1].items.reduce(((WW, iW) => WW + ((0, cW.s)(iW.content) ? (0, AW.d)((0, cW.q)(iW.content)) : iW.numCharacters)), 0),
-                 EW = (0, AW.f)(WW, OW);
+                 GR = yR[yR.length - 1].items.reduce(((RR, JR) => RR + ((0, iR.B)(JR.content) ? (0, eR.d)((0, iR.y)(JR.content)) : JR.numCharacters)), 0),
+                 tR = (0, eR.h)(RR, GR);
```

#### 2663. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24879` → after: `L24410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24410) · [Before (L24879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24879)

```diff
-               } = (0, cW.d)(NW.items.map((WW => WW.content)), OW);
+               } = (0, iR.e)(uR.items.map((RR => RR.content)), GR);
```

#### 2664. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24891` → after: `L24422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24422) · [Before (L24891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24891)

```diff
-             for (const WW of OW.items)(0, cW.s)(WW.content) ? iW += (0, cW.q)(WW.content).length : iW += 1;
+             for (const RR of GR.items)(0, iR.B)(RR.content) ? JR += (0, iR.y)(RR.content).length : JR += 1;
```

#### 2665. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24894-L24895` → after: `L24425-L24426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24425-L24426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24425-L24426) · [Before (L24894-L24895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24894-L24895)

```diff
-         const wW = (0, LW.k)(iW.texture);
-         wW.clearRect(0, 0, iW.sizeCache.width, iW.sizeCache.height), wW.fillStyle = null !== (mW = iW.processedTextBox.backgroundColor) && void 0 !== mW ? mW : "#22283b", wW.fillRect(0, 0, iW.sizeCache.width, iW.sizeCache.height), iW.drawnCharCount > 0 ? OW(iW, bW(iW.processedTex … [truncated]
+         const fR = (0, qR.j)(JR.texture);
+         fR.clearRect(0, 0, JR.sizeCache.width, JR.sizeCache.height), fR.fillStyle = null !== (yR = JR.processedTextBox.backgroundColor) && void 0 !== yR ? yR : "#22283b", fR.fillRect(0, 0, JR.sizeCache.width, JR.sizeCache.height), JR.drawnCharCount > 0 ? GR(JR, aR(JR.processedTex … [truncated]
```

#### 2666. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24900-L24903` → after: `L24431-L24434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24431-L24434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24431-L24434) · [Before (L24900-L24903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24900-L24903)

```diff
-         const xW = WW.EY.uOW(iW.planeEId);
-         let lW = null !== (mW = iW.yOffset) && void 0 !== mW ? mW : 2.1;
-         const AW = WW.EY.Vk(iW.rD),
-           bW = WW.EY.Vk(WW.Dv);
+         const wR = RR.zC.nyR(JR.planeEId);
+         let rR = null !== (yR = JR.yOffset) && void 0 !== yR ? yR : 2.1;
+         const eR = RR.zC.vW(JR.Rm),
+           aR = RR.zC.vW(RR.WH);
```

#### 2667. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24907` → after: `L24438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24438) · [Before (L24907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24907)

```diff
-           const iW = WW.camera.uF();
+           const JR = RR.camera.m_();
```

#### 2668. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24913` → after: `L24444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24444) · [Before (L24913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24913)

```diff
-           KW = null !== (EW = iW.xOffset) && void 0 !== EW ? EW : .6;
+           CR = null !== (tR = JR.xOffset) && void 0 !== tR ? tR : .6;
```

#### 2669. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24920-L24922` → after: `L24451-L24453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24451-L24453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24451-L24453) · [Before (L24920-L24922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24920-L24922)

```diff
-         const yW = WW.EY.aiW(iW.rD);
-         lW += null !== (NW = null === yW || void 0 === yW || null === (PW = yW.meshOffset) || void 0 === PW ? void 0 : PW[1]) && void 0 !== NW ? NW : 0, SW += null !== (LW = null === yW || void 0 === yW || null === (wW = yW.meshOffset) || void 0 === wW ? void 0 : wW[0]) && void 0 … [truncated]
-         lW -= OW.height * cW.c.TEXT_PLANE_RATIO / 2, WW.EY.XiW(iW.planeEId) && (xW.offset[1] = lW, xW.offset[0] = SW, xW.offset[2] = YW)
+         const BR = RR.zC.oGR(JR.Rm);
+         rR += null !== (uR = null === BR || void 0 === BR || null === (ZR = BR.meshOffset) || void 0 === ZR ? void 0 : ZR[1]) && void 0 !== uR ? uR : 0, XR += null !== (qR = null === BR || void 0 === BR || null === (fR = BR.meshOffset) || void 0 === fR ? void 0 : fR[0]) && void 0 … [truncated]
+         rR -= GR.height * iR.c.TEXT_PLANE_RATIO / 2, RR.zC.vGR(JR.planeEId) && (wR.offset[1] = rR, wR.offset[0] = XR, wR.offset[2] = MR)
```

#### 2670. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24926` → after: `L24457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24457) · [Before (L24926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24926)

```diff
-         return WW.EY.XiW(iW.planeEId) ? (iW.missingPlaneLogged = !1, iW.plane) : (iW.missingPlaneLogged || (0, tW.c)(WW) || (iW.missingPlaneLogged = !0, console.error("planeEId mesh did not exist")), null)
+         return RR.zC.vGR(JR.planeEId) ? (JR.missingPlaneLogged = !1, JR.plane) : (JR.missingPlaneLogged || (0, VR.b)(RR) || (JR.missingPlaneLogged = !0, console.error("planeEId mesh did not exist")), null)
```

#### 2671. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24930` → after: `L24461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24461) · [Before (L24930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24930)

```diff
-         const OW = WW.EY.getState(iW.rD, "hidingMeshManager");
+         const GR = RR.zC.getState(JR.Rm, "hidingMeshManager");
```

#### 2672. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24933-L24934` → after: `L24464-L24465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24464-L24465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24464-L24465) · [Before (L24933-L24934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24933-L24934)

```diff
-       return (0, tW.g)(WW.TZ.bD(), (() => {
-         for (const OW of WW.EY.RD(iW)) {
+       return (0, VR.f)(RR.lK.jH(), (() => {
+         for (const GR of RR.zC.mI(JR)) {
```

#### 2673. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24964-L24967` → after: `L24495-L24498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24495-L24498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24495-L24498) · [Before (L24964-L24967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24964-L24967)

```diff
-         mY: function(iW, OW) {
-           OW._visibilityCombinator = new NW.e((iW => {
-             (0, xW.l)(WW, OW.planeEId, iW)
-           })), OW.hideNametagSub = mW.l.subscribe("appManagerUpdated|areNametagsHidden", (WW => {
+         mC: function(JR, GR) {
+           GR._visibilityCombinator = new uR.d((JR => {
+             (0, wR.n)(RR, GR.planeEId, JR)
+           })), GR.hideNametagSub = yR.n.subscribe("appManagerUpdated|areNametagsHidden", (RR => {
```

#### 2674. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24969` → after: `L24500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24500) · [Before (L24969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24969)

```diff
-           })), OW._visibilityCombinator.setBooleanType("multilineTextBoxEnabled", !lW.d.get("areNametagsHidden")), KW(OW), OW.textBoxSub = mW.l.subscribe(`otherEntitySettingsClientifiedEId|${iW}|multilineTextBox`, (WW => {
+           })), GR._visibilityCombinator.setBooleanType("multilineTextBoxEnabled", !rR.d.get("areNametagsHidden")), CR(GR), GR.textBoxSub = yR.n.subscribe(`otherEntitySettingsClientifiedEId|${JR}|multilineTextBox`, (RR => {
```

#### 2675. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24972` → after: `L24503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24503) · [Before (L24972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24972)

```diff
-           OW.unsubscribeKeyPromptChanges = (0, EW.q)((() => {
+           GR.unsubscribeKeyPromptChanges = (0, tR.s)((() => {
```

#### 2676. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24974-L24975` → after: `L24505-L24506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24505-L24506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24505-L24506) · [Before (L24974-L24975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24974-L24975)

```diff
-             null !== (WW = OW.textBox) && void 0 !== WW && null !== (iW = WW.content) && void 0 !== iW && iW.some(PW.yb) && kW(OW, !0)
-           })), WW.Dv in WW.sV && iW in WW.sV[WW.Dv] && "multilineTextBox" in WW.sV[WW.Dv][iW] && (OW.textBox = WW.sV[WW.Dv][iW].multilineTextBox), kW(OW)
+             null !== (RR = GR.textBox) && void 0 !== RR && null !== (JR = RR.content) && void 0 !== JR && JR.some(ZR.rb) && UR(GR, !0)
+           })), RR.WH in RR.Qm && JR in RR.Qm[RR.WH] && "multilineTextBox" in RR.Qm[RR.WH][JR] && (GR.textBox = RR.Qm[RR.WH][JR].multilineTextBox), UR(GR)
```

#### 2677. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24981` → after: `L24512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24512) · [Before (L24981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24981)

```diff
-             OW && ((0, cW.w)(OW, (0, ZW.u)(null === (mW = EW.textBox) || void 0 === mW ? void 0 : mW.visibleThroughWalls, WW.gM.canSeeNametagsThroughWalls)), KW(EW), null !== EW.timeSinceAnimationStart && EW.textBox && (EW.timeSinceAnimationStart += iW, EW.toDrawCharCount = Math. … [truncated]
+             GR && ((0, iR.F)(GR, (0, KR.p)(null === (yR = tR.textBox) || void 0 === yR ? void 0 : yR.visibleThroughWalls, RR.jW.canSeeNametagsThroughWalls)), CR(tR), null !== tR.timeSinceAnimationStart && tR.textBox && (tR.timeSinceAnimationStart += JR, tR.toDrawCharCount = Math. … [truncated]
```

#### 2678. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24984` → after: `L24515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24515) · [Before (L24984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24984)

```diff
-         ZY: function(iW, OW) {
+         YC: function(JR, GR) {
```

#### 2679. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24990-L24992` → after: `L24521-L24523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24521-L24523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24521-L24523) · [Before (L24990-L24992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24990-L24992)

```diff
-               const OW = (0, cW.w)(iW, (0, ZW.u)(null === (mW = EW.textBox) || void 0 === mW ? void 0 : mW.visibleThroughWalls, WW.gM.canSeeNametagsThroughWalls)),
-                 NW = (0, ZW.v)(WW, EW.rD, EW.planeEId, OW);
-               (0, ZW.n)(WW, EW.planeEId), iW.YZ.set(EW.sizeCache.width * cW.c.TEXT_PLANE_RATIO * NW, EW.sizeCache.height * cW.c.TEXT_PLANE_RATIO * NW, 1)
+               const GR = (0, iR.F)(JR, (0, KR.p)(null === (yR = tR.textBox) || void 0 === yR ? void 0 : yR.visibleThroughWalls, RR.jW.canSeeNametagsThroughWalls)),
+                 uR = (0, KR.r)(RR, tR.Rm, tR.planeEId, GR);
+               (0, KR.k)(RR, tR.planeEId), JR.MK.set(tR.sizeCache.width * iR.c.TEXT_PLANE_RATIO * uR, tR.sizeCache.height * iR.c.TEXT_PLANE_RATIO * uR, 1)
```

#### 2680. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24996` → after: `L24527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24527) · [Before (L24996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24996)

```diff
-         mH: function(iW, OW) {
+         eD: function(JR, GR) {
```

#### 2681. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24998` → after: `L24529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24529) · [Before (L24998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L24998)

```diff
-           WW.EY.deleteEntity(OW.planeEId), mW.l.unsubscribe(OW.textBoxSub), mW.l.unsubscribe(OW.hideNametagSub), null === (EW = OW.unsubscribeKeyPromptChanges) || void 0 === EW || EW.call(OW)
+           RR.zC.deleteEntity(GR.planeEId), yR.n.unsubscribe(GR.textBoxSub), yR.n.unsubscribe(GR.hideNametagSub), null === (tR = GR.unsubscribeKeyPromptChanges) || void 0 === tR || tR.call(GR)
```

#### 2682. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25003` → after: `L24534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24534) · [Before (L25003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25003)

```diff
-   40080: (WW, iW, OW) => {
+   40107: (RR, JR, GR) => {
```

#### 2683. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25007` → after: `L24538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24538) · [Before (L25007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25007)

```diff
-     var mW = OW(352),
+     var yR = GR(385),
```

#### 2684. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25009-L25033` → after: `L24540-L24564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24540-L24564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24540-L24564) · [Before (L25009-L25033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25009-L25033)

```diff
-       NW = OW(38437),
-       PW = OW(39539),
-       LW = OW(38502),
-       cW = OW(40073),
-       wW = OW(39566),
-       tW = OW(27),
-       ZW = OW(10049),
-       xW = OW(327),
-       lW = OW(625),
-       AW = OW(40090),
-       bW = OW(2365),
-       jW = OW(100),
-       UW = OW(37575),
-       kW = OW(39661),
-       sW = OW(37626),
-       MW = OW(37917),
- ... (9 more removed lines; see GitHub link above)
+       uR = GR(38406),
+       ZR = GR(39511),
+       qR = GR(38466),
+       iR = GR(40105),
+       fR = GR(39542),
+       VR = GR(32),
+       KR = GR(10178),
+       wR = GR(359),
+       rR = GR(656),
+       eR = GR(40118),
+       aR = GR(2435),
+       LR = GR(103),
+       nR = GR(37494),
+       UR = GR(39630),
+       WR = GR(37537),
+       AR = GR(37847),
+ ... (9 more added lines; see GitHub link above)
```

#### 2685. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25035-L25037` → after: `L24566-L24568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24566-L24568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24566-L24568) · [Before (L25035-L25037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25035-L25037)

```diff
-       oW = OW(38336),
-       dW = OW(38314),
-       eW = OW(40085);
+       xR = GR(38296),
+       NR = GR(38267),
+       DR = GR(40112);
```

#### 2686. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25054` → after: `L24585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24585) · [Before (L25054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25054)

```diff
-         return Number.isFinite(OW) && OW > 0 ? OW : iW
+         return Number.isFinite(GR) && GR > 0 ? GR : JR
```

#### 2687. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25068` → after: `L24599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24599) · [Before (L25068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25068)

```diff
-         const mW = null !== (OW = WW.applyTo) && void 0 !== OW ? OW : "both";
+         const yR = null !== (GR = RR.applyTo) && void 0 !== GR ? GR : "both";
```

#### 2688. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25074` → after: `L24605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24605) · [Before (L25074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25074)

```diff
-         return "glow" === WW.style ? 3 * iW : Math.ceil(iW / 2) + 1
+         return "glow" === RR.style ? 3 * JR : Math.ceil(JR / 2) + 1
```

#### 2689. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25088` → after: `L24619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24619) · [Before (L25088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25088)

```diff
-         return Math.round(EW().TP(WW.EY.Vk(WW.Dv), WW.EY.Vk(iW)))
+         return Math.round(tR().xZ(RR.zC.vW(RR.WH), RR.zC.vW(JR)))
```

#### 2690. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25092` → after: `L24623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24623) · [Before (L25092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25092)

```diff
-         const iW = qW(WW.rD),
+         const JR = dR(RR.Rm),
```

#### 2691. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25098-L25099` → after: `L24629-L24630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24629-L24630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24629-L24630) · [Before (L25098-L25099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25098-L25099)

```diff
-         const OW = (0, bW.d)();
-         return iW !== WW.Dv && "Player" === OW.getLifeformType(iW) && (0, SW.g)(OW.getRawEntityName(iW), yW.e.shown)
+         const GR = (0, aR.e)();
+         return JR !== RR.WH && "Player" === GR.getLifeformType(JR) && (0, XR.e)(GR.getRawEntityName(JR), BR.e.shown)
```

#### 2692. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25105-L25107` → after: `L24636-L24638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24636-L24638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24636-L24638) · [Before (L25105-L25107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25105-L25107)

```diff
-         const OW = (0, KW.d)(WW.content, (0, KW.u)()),
-           EW = (0, KW.d)(WW.subtitle, (0, KW.u)()),
-           NW = (0, KW.e)(iW),
+         const GR = (0, CR.e)(RR.content, (0, CR.D)()),
+           tR = (0, CR.e)(RR.subtitle, (0, CR.D)()),
+           uR = (0, CR.g)(JR),
```

#### 2693. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25112` → after: `L24643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24643) · [Before (L25112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25112)

```diff
-             return "never" === (null !== (iW = null === (OW = WW.healthbar) || void 0 === OW ? void 0 : OW.display) && void 0 !== iW ? iW : "onDamage") ? 0 : mW(WW) + XW(WW)
+             return "never" === (null !== (JR = null === (GR = RR.healthbar) || void 0 === GR ? void 0 : GR.display) && void 0 !== JR ? JR : "onDamage") ? 0 : yR(RR) + SR(RR)
```

#### 2694. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25131` → after: `L24662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24662) · [Before (L25131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25131)

```diff
-           wW = (0, NW.k)(cW),
+           fR = (0, uR.j)(iR),
```

#### 2695. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25142` → after: `L24673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24673) · [Before (L25142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25142)

```diff
-               ZW = hW.d.getTexture(LW, HW.g.ICON).url,
+               KR = gR.b.getTexture(qR, bR.k.ICON).url,
```

#### 2696. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25157` → after: `L24688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24688) · [Before (L25157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25157)

```diff
-         if ((0, KW.o)(WW.content, jW, bW, LW.height.content, cW, ZW), WW.subtitle) {
+         if ((0, CR.r)(RR.content, LR, aR, qR.height.content, iR, KR), RR.subtitle) {
```

#### 2697. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25160` → after: `L24691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24691) · [Before (L25160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25160)

```diff
-           wW.fillStyle = WW.subtitleBackgroundColor, wW.fillRect(lW, bW, xW, LW.height.subtitle), (0, KW.o)(WW.subtitle, iW, bW, LW.height.subtitle, cW, ZW)
+           fR.fillStyle = RR.subtitleBackgroundColor, fR.fillRect(rR, aR, wR, qR.height.subtitle), (0, CR.r)(RR.subtitle, JR, aR, qR.height.subtitle, iR, KR)
```

#### 2698. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25177` → after: `L24708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24708) · [Before (L25177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25177)

```diff
-             const NW = [...EW && EW.length > 0 ? EW : iW].sort(((WW, iW) => WW.healthFraction - iW.healthFraction)),
+             const uR = [...tR && tR.length > 0 ? tR : JR].sort(((RR, JR) => RR.healthFraction - JR.healthFraction)),
```

#### 2699. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25179` → after: `L24710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24710) · [Before (L25179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25179)

```diff
-             return (null !== PW && void 0 !== PW ? PW : NW[NW.length - 1]).colour
+             return (null !== ZR && void 0 !== ZR ? ZR : uR[uR.length - 1]).colour
```

#### 2700. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25239` → after: `L24770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24770) · [Before (L25239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25239)

```diff
-         null !== iW.planeEId && (WW.EY.deleteEntity(iW.planeEId), iW.planeEId = null, iW._planeMesh = null, iW._planeTexture = null, iW._lightState = null, iW._scaleX = NaN, iW._scaleY = NaN, iW._offsetY = NaN)
+         null !== JR.planeEId && (RR.zC.deleteEntity(JR.planeEId), JR.planeEId = null, JR._planeMesh = null, JR._planeTexture = null, JR._lightState = null, JR._scaleX = NaN, JR._scaleY = NaN, JR._offsetY = NaN)
```

#### 2701. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25249-L25250` → after: `L24780-L24781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24780-L24781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24780-L24781) · [Before (L25249-L25250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25249-L25250)

```diff
-           } = (0, KW.g)(WW, iW.rD, `${iW.rD}NameTag`, 1, 1, !0);
-           iW.planeEId = OW, iW._planeMesh = mW, iW._planeTexture = NW, iW._lightState = PW, WW.EY.uOW(OW).DOW = (OW, mW) => {
+           } = (0, CR.k)(RR, JR.Rm, `${JR.Rm}NameTag`, 1, 1, !0);
+           JR.planeEId = GR, JR._planeMesh = yR, JR._planeTexture = uR, JR._lightState = ZR, RR.zC.nyR(GR).MyR = (GR, yR) => {
```

#### 2702. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25253` → after: `L24784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24784) · [Before (L25253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25253)

```diff
-               const wW = null !== (OW = null === (mW = WW.sV[WW.Dv][iW.rD]) || void 0 === mW ? void 0 : mW.meshScaling) && void 0 !== OW ? OW : {},
+               const fR = null !== (GR = null === (yR = RR.Qm[RR.WH][JR.Rm]) || void 0 === yR ? void 0 : yR.meshScaling) && void 0 !== GR ? GR : {},
```

#### 2703. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25256-L25259` → after: `L24787-L24790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24787-L24790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24787-L24790) · [Before (L25256-L25259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25256-L25259)

```diff
-                 xW = xi(iW.rD),
-                 lW = (0, bW.d)().lF(iW.rD);
-               let AW = (null !== (NW = iW.nameYOffset) && void 0 !== NW ? NW : eW.b) * lW;
-               const jW = WW.EY.aiW(iW.rD);
+                 wR = wJ(JR.Rm),
+                 rR = (0, aR.e)().p_(JR.Rm);
+               let eR = (null !== (uR = JR.nameYOffset) && void 0 !== uR ? uR : DR.c) * rR;
+               const LR = RR.zC.oGR(JR.Rm);
```

#### 2704. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25261` → after: `L24792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24792) · [Before (L25261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25261)

```diff
-                 const WW = (0, bW.d)().getLifeformType(iW.rD);
+                 const RR = (0, aR.e)().getLifeformType(JR.Rm);
```

#### 2705. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25263` → after: `L24794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24794) · [Before (L25263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25263)

```diff
-                 if (null !== WW) AW += (null !== (UW = null === (sW = (0, kW.c)(WW).poseNameRise) || void 0 === sW ? void 0 : sW[jW.pose]) && void 0 !== UW ? UW : 0) * lW
+                 if (null !== RR) eR += (null !== (nR = null === (WR = (0, UR.d)(RR).poseNameRise) || void 0 === WR ? void 0 : WR[LR.pose]) && void 0 !== nR ? nR : 0) * rR
```

#### 2706. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25265-L25266` → after: `L24796-L24797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24796-L24797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24796-L24797) · [Before (L25265-L25266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25265-L25266)

```diff
-               if (AW += null !== (PW = null === jW || void 0 === jW || null === (LW = jW.meshOffset) || void 0 === LW ? void 0 : LW[1]) && void 0 !== PW ? PW : 0, xW) {
-                 const OW = .23 * (EW().TP(WW.EY.Vk(WW.Dv), WW.EY.Vk(iW.rD)) - cW.g) / cW.g;
+               if (eR += null !== (ZR = null === LR || void 0 === LR || null === (qR = LR.meshOffset) || void 0 === qR ? void 0 : qR[1]) && void 0 !== ZR ? ZR : 0, wR) {
+                 const GR = .23 * (tR().xZ(RR.zC.vW(RR.WH), RR.zC.vW(JR.Rm)) - iR.d) / iR.d;
```

#### 2707. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25275-L25278` → after: `L24806-L24809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24806-L24809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24806-L24809) · [Before (L25275-L25278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25275-L25278)

```diff
-         (0, NW.N)(mW, PW.width, PW.height), ii(iW, KW.c.TEXT_PLANE_RATIO * PW.width, KW.c.TEXT_PLANE_RATIO * PW.height), iW._layoutHeight = KW.c.TEXT_PLANE_RATIO * PW.height;
-         const LW = (0, KW.d)(OW.content, (0, KW.u)()),
-           wW = (0, KW.d)(OW.subtitle, (0, KW.u)()),
-           tW = (0, KW.e)(iW.effects);
+         (0, uR.H)(yR, ZR.width, ZR.height), JJ(JR, CR.c.TEXT_PLANE_RATIO * ZR.width, CR.c.TEXT_PLANE_RATIO * ZR.height), JR._layoutHeight = CR.c.TEXT_PLANE_RATIO * ZR.height;
+         const qR = (0, CR.e)(GR.content, (0, CR.D)()),
+           fR = (0, CR.e)(GR.subtitle, (0, CR.D)()),
+           VR = (0, CR.g)(JR.effects);
```

#### 2708. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25296` → after: `L24827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24827) · [Before (L25296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25296)

```diff
-         const mW = Ai(WW.rD, iW),
+         const yR = eJ(RR.Rm, JR),
```

#### 2709. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25305` → after: `L24836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24836) · [Before (L25305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25305)

```diff
-         WW._scaleX === iW && WW._scaleY === OW || (WW._scaleX = iW, WW._scaleY = OW, WW._planeMesh.YZ.set(iW, OW, 1))
+         RR._scaleX === JR && RR._scaleY === GR || (RR._scaleX = JR, RR._scaleY = GR, RR._planeMesh.MK.set(JR, GR, 1))
```

#### 2710. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25310` → after: `L24841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24841) · [Before (L25310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25310)

```diff
-         return null !== (iW = WW.name) && void 0 !== iW ? iW : (0, bW.d)().getEntityName(WW.rD, !jW.featureFlags.canSeeRealPlayerNames)
+         return null !== (JR = RR.name) && void 0 !== JR ? JR : (0, aR.e)().getEntityName(RR.Rm, !LR.featureFlags.canSeeRealPlayerNames)
```

#### 2711. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25319` → after: `L24850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24850) · [Before (L25319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25319)

```diff
-         if ((0, JW.c)(WW)) return;
+         if ((0, pR.b)(RR)) return;
```

#### 2712. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25324` → after: `L24855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24855) · [Before (L25324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25324)

```diff
-           (iW = iW ? JSON.parse(JSON.stringify(iW)) : {}).content ? iW.content = (0, KW.p)(iW.content, KW.c.DEFAULT_FONT_SIZE) : iW.content = [{
+           (JR = JR ? JSON.parse(JSON.stringify(JR)) : {}).content ? JR.content = (0, CR.u)(JR.content, CR.c.DEFAULT_FONT_SIZE) : JR.content = [{
```

#### 2713. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25327-L25328` → after: `L24858-L24859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24858-L24859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24858-L24859) · [Before (L25327-L25328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25327-L25328)

```diff
-           const PW = (0, bW.d)().getPlayerRanks(WW).map((WW => lW.p[WW])).filter((WW => WW.nameTag && WW.visible)),
-             LW = "Player" === (0, bW.d)().getLifeformType(WW) ? (0, YW.k)(iW.backgroundColor) : null;
+           const ZR = (0, aR.e)().getPlayerRanks(RR).map((RR => rR.n[RR])).filter((RR => RR.nameTag && RR.visible)),
+             qR = "Player" === (0, aR.e)().getLifeformType(RR) ? (0, MR.i)(JR.backgroundColor) : null;
```

#### 2714. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25330` → after: `L24861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24861) · [Before (L25330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25330)

```diff
-           const cW = lW.C[mW];
+           const iR = rR.v[yR];
```

#### 2715. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25332` → after: `L24863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24863) · [Before (L25332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25332)

```diff
-             for (const wW of iW.content)(0, KW.s)(wW) && (wW.style ? (0, xW.cc)(wW.style) || (wW.style.color = cW) : wW.style = {
+             for (const fR of JR.content)(0, CR.B)(fR) && (fR.style ? (0, wR.Zb)(fR.style) || (fR.style.color = iR) : fR.style = {
```

#### 2716. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25338` → after: `L24869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24869) · [Before (L25338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25338)

```diff
-               str: ` ${OW}m`,
+               str: ` ${GR}m`,
```

#### 2717. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25344-L25345` → after: `L24875-L24876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24875-L24876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24875-L24876) · [Before (L25344-L25345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25344-L25345)

```diff
-           return iW.subtitle && (iW.subtitle = (0, KW.p)(iW.subtitle, KW.c.DEFAULT_SUBTITLE_FONT_SIZE)), iW.backgroundColor = null !== (EW = iW.backgroundColor) && void 0 !== EW ? EW : "#22283b", iW.subtitleBackgroundColor = null !== (NW = iW.subtitleBackgroundColor) && void 0 != … [truncated]
-         }(iW.rD, iW.nameTagInfo, OW, iW.nameColour);
+           return JR.subtitle && (JR.subtitle = (0, CR.u)(JR.subtitle, CR.c.DEFAULT_SUBTITLE_FONT_SIZE)), JR.backgroundColor = null !== (tR = JR.backgroundColor) && void 0 !== tR ? tR : "#22283b", JR.subtitleBackgroundColor = null !== (uR = JR.subtitleBackgroundColor) && void 0 != … [truncated]
+         }(JR.Rm, JR.nameTagInfo, GR, JR.nameColour);
```

#### 2718. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25348` → after: `L24879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24879) · [Before (L25348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25348)

```diff
-             const OW = (0, NW.k)(WW._planeTexture);
+             const GR = (0, uR.j)(RR._planeTexture);
```

#### 2719. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25351-L25352` → after: `L24882-L24883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24882-L24883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24882-L24883) · [Before (L25351-L25352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25351-L25352)

```diff
-               const EW = null !== (OW = null === (mW = iW.healthbar) || void 0 === mW ? void 0 : mW.display) && void 0 !== OW ? OW : "onDamage";
-               return "never" === EW ? null : "always" === EW ? null !== (NW = WW.DE) && void 0 !== NW ? NW : 1 : WW.healthTimeout ? WW.DE : null;
+               const tR = null !== (GR = null === (yR = JR.healthbar) || void 0 === yR ? void 0 : yR.display) && void 0 !== GR ? GR : "onDamage";
+               return "never" === tR ? null : "always" === tR ? null !== (uR = RR.Et) && void 0 !== uR ? uR : 1 : RR.healthTimeout ? RR.Et : null;
```

#### 2720. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25356-L25358` → after: `L24887-L24889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24887-L24889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24887-L24889) · [Before (L25356-L25358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25356-L25358)

```diff
-       }(0, SW.d)((() => {
-         for (const WW of aW) GW(WW.rD) !== IW.has(WW.rD) && Pi(WW)
-       })), (0, YW.o)((() => {
+       }(0, XR.b)((() => {
+         for (const RR of QR) YR(RR.Rm) !== kR.has(RR.Rm) && ZJ(RR)
+       })), (0, MR.m)((() => {
```

#### 2721. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25360` → after: `L24891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24891) · [Before (L25360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25360)

```diff
-       })), (0, JW.g)(WW.TZ.bD(), (() => {
+       })), (0, pR.f)(RR.lK.jH(), (() => {
```

#### 2722. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25374` → after: `L24905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24905) · [Before (L25374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25374)

```diff
-         const mW = (0, bW.d)().getLifeformType(iW);
+         const yR = (0, aR.e)().getLifeformType(JR);
```

#### 2723. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25376` → after: `L24907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24907) · [Before (L25376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25376)

```diff
-         return !!(null === (OW = WW.EY.uOW(iW)) || void 0 === OW ? void 0 : OW.MA)
+         return !!(null === (GR = RR.zC.nyR(JR)) || void 0 === GR ? void 0 : GR.pe)
```

#### 2724. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25384` → after: `L24915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24915) · [Before (L25384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25384)

```diff
-             WW.nb("Error updating a nametag", iW)
+             RR.Ia("Error updating a nametag", JR)
```

#### 2725. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25396` → after: `L24927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24927) · [Before (L25396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25396)

```diff
-         return null !== (OW = WW.Dv !== iW && (null === (mW = WW.sV[WW.Dv][iW]) || void 0 === mW ? void 0 : mW.hasPriorityNametag)) && void 0 !== OW && OW
+         return null !== (GR = RR.WH !== JR && (null === (yR = RR.Qm[RR.WH][JR]) || void 0 === yR ? void 0 : yR.hasPriorityNametag)) && void 0 !== GR && GR
```

#### 2726. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25407` → after: `L24938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24938) · [Before (L25407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25407)

```diff
-         if (EW === NW && !hW.d.getTexture(NW, HW.g.ICON).notFound) {
+         if (tR === uR && !gR.b.getTexture(uR, bR.k.ICON).notFound) {
```

#### 2727. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25412` → after: `L24943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24943) · [Before (L25412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25412)

```diff
-             !PW || null !== (LW = (0, bW.d)().client) && void 0 !== LW && LW.isReplayMode() || (iW = setTimeout((() => {
+             !ZR || null !== (qR = (0, aR.e)().client) && void 0 !== qR && qR.isReplayMode() || (JR = setTimeout((() => {
```

#### 2728. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25425` → after: `L24956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24956) · [Before (L25425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25425)

```diff
-         return xi(iW) && OW > cW.g && (mW = cW.g), (0, eW.d)(mW) * (0, AW.b)(WW.TZ.engine.getRenderWidth())
+         return wJ(JR) && GR > iR.d && (yR = iR.d), (0, DR.f)(yR) * (0, eR.e)(RR.lK.engine.getRenderWidth())
```

#### 2729. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25431-L25439` → after: `L24962-L24970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24962-L24970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24962-L24970) · [Before (L25431-L25439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25431-L25439)

```diff
-         const mW = WW.EY.aiW(iW.rD),
-           NW = xi(iW.rD),
-           tW = (0, KW.w)(iW._planeMesh, WW.gM.canSeeNametagsThroughWalls, null === mW || void 0 === mW ? void 0 : mW.crouching, NW),
-           ZW = WW.EY.YG(iW.planeEId).Yz,
-           xW = WW.camera.mF(),
-           lW = EW().TP(ZW, xW),
-           AW = WW.EY.XiW(iW.planeEId).offset,
-           bW = OW ? (0, cW.v)(WW, iW.rD, iW.planeEId, tW) : 1;
-         if (NW && tW && lW > cW.g) {
+         const yR = RR.zC.oGR(JR.Rm),
+           uR = wJ(JR.Rm),
+           VR = (0, CR.F)(JR._planeMesh, RR.jW.canSeeNametagsThroughWalls, null === yR || void 0 === yR ? void 0 : yR.crouching, uR),
+           KR = RR.zC.f6(JR.planeEId).B_,
+           wR = RR.camera.l_(),
+           rR = tR().xZ(KR, wR),
+           eR = RR.zC.vGR(JR.planeEId).offset,
+           aR = GR ? (0, iR.r)(RR, JR.Rm, JR.planeEId, VR) : 1;
+         if (uR && VR && rR > iR.d) {
```

#### 2730. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25442` → after: `L24973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24973) · [Before (L25442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25442)

```diff
-           const iW = EW().scale(WW, WW, cW.g),
+           const JR = tR().scale(RR, RR, iR.d),
```

#### 2731. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25446-L25447` → after: `L24977-L24978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24977-L24978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24977-L24978) · [Before (L25446-L25447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25446-L25447)

```diff
-         OW && (0, cW.n)(WW, iW.planeEId);
-         const jW = (0, cW.t)(lW, NW, tW) * bW,
+         GR && (0, iR.k)(RR, JR.planeEId);
+         const LR = (0, iR.o)(rR, uR, VR) * aR,
```

#### 2732. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25449` → after: `L24980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24980) · [Before (L25449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25449)

```diff
-         if (iW._layoutHeight = UW, WW.TZ.qb && iW._planeMesh.isEnabled() && iW._planeMesh.isVisible) {
+         if (JR._layoutHeight = nR, RR.lK.sa && JR._planeMesh.isEnabled() && JR._planeMesh.isVisible) {
```

#### 2733. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25451` → after: `L24982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24982) · [Before (L25451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25451)

```diff
-           const OW = (0, PW.g)(WW, iW.rD),
+           const GR = (0, ZR.e)(RR, JR.Rm),
```

#### 2734. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25456` → after: `L24987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24987) · [Before (L25456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25456)

```diff
-             tW = nW.e.lerp(null !== (sW = NW) && void 0 !== sW ? sW : ci, wi, cW);
+             VR = vR.e.lerp(null !== (WR = uR) && void 0 !== WR ? WR : iJ, fJ, iR);
```

#### 2735. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25458-L25459` → after: `L24989-L24990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24989-L24990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L24989-L24990) · [Before (L25458-L25459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25458-L25459)

```diff
-           const ZW = (0, wW.applyHeldLightTint)(WW, iW.rD, OW, pW);
-           pW[0] = Math.max(ZW[0], NW), pW[1] = Math.max(ZW[1], NW), pW[2] = Math.max(ZW[2], NW), pW[3] = Math.max(ZW[3], NW), (0, LW.m)(iW._lightState, pW)
+           const KR = (0, fR.applyHeldLightTint)(RR, JR.Rm, GR, IR);
+           IR[0] = Math.max(KR[0], uR), IR[1] = Math.max(KR[1], uR), IR[2] = Math.max(KR[2], uR), IR[3] = Math.max(KR[3], uR), (0, qR.k)(JR._lightState, IR)
```

#### 2736. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25473` → after: `L25004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25004) · [Before (L25473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25473)

```diff
-           DE: null,
+           Et: null,
```

#### 2737. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25505-L25506` → after: `L25036-L25037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25036-L25037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25036-L25037) · [Before (L25505-L25506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25505-L25506)

```diff
-         mY: function(iW, OW) {
-           OW.effects = {}, aW.add(OW), OW._lightId = `nt_${iW}`, OW._visibilityCombinator = new sW.e((iW => {
+         mC: function(JR, GR) {
+           GR.effects = {}, QR.add(GR), GR._lightId = `nt_${JR}`, GR._visibilityCombinator = new WR.d((JR => {
```

#### 2738. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25508-L25510` → after: `L25039-L25041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25039-L25041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25039-L25041) · [Before (L25508-L25510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25508-L25510)

```diff
-             const mW = WW.EY.jOW(OW.rD);
-             mW ? mW.meshEnabledCombinator.forceUpdate() : (0, oW.l)(WW, OW.planeEId, iW)
-           })), OW.entityMeshScalingSub = tW.l.subscribe(`otherEntitySettingsClientifiedEId|${iW}|meshScaling`, (WW => {
+             const yR = RR.zC.yyR(GR.Rm);
+             yR ? yR.meshEnabledCombinator.forceUpdate() : (0, xR.n)(RR, GR.planeEId, JR)
+           })), GR.entityMeshScalingSub = VR.n.subscribe(`otherEntitySettingsClientifiedEId|${JR}|meshScaling`, (RR => {
```

#### 2739. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25512` → after: `L25043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25043) · [Before (L25512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25512)

```diff
-           })), OW.nameTagInfoSub = tW.l.subscribe(`otherEntitySettingsClientifiedEId|${iW}|nameTagInfo`, (WW => {
+           })), GR.nameTagInfoSub = VR.n.subscribe(`otherEntitySettingsClientifiedEId|${JR}|nameTagInfo`, (RR => {
```

#### 2740. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25514` → after: `L25045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25045) · [Before (L25514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25514)

```diff
-           })), OW.priorityNametagSub = tW.l.subscribe(`otherEntitySettingsClientifiedEId|${iW}|hasPriorityNametag`, (WW => {
+           })), GR.priorityNametagSub = VR.n.subscribe(`otherEntitySettingsClientifiedEId|${JR}|hasPriorityNametag`, (RR => {
```

#### 2741. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25516` → after: `L25047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25047) · [Before (L25516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25516)

```diff
-           })), OW.rankUpdateSub = tW.l.subscribe(`otherEntitySettingsClientifiedEId|${iW}|ranks`, (WW => {
+           })), GR.rankUpdateSub = VR.n.subscribe(`otherEntitySettingsClientifiedEId|${JR}|ranks`, (RR => {
```

#### 2742. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25518` → after: `L25049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25049) · [Before (L25518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25518)

```diff
-           })), OW.hideNameSub = tW.l.subscribe(`otherEntitySettingsClientifiedEId|${iW}|hideNameSeed`, (WW => {
+           })), GR.hideNameSub = VR.n.subscribe(`otherEntitySettingsClientifiedEId|${JR}|hideNameSeed`, (RR => {
```

#### 2743. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25520` → after: `L25051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25051) · [Before (L25520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25520)

```diff
-           })), OW.nameChangedSub = tW.l.subscribe(`entityNameChanged|${iW}`, (() => {
+           })), GR.nameChangedSub = VR.n.subscribe(`entityNameChanged|${JR}`, (() => {
```

#### 2744. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25522` → after: `L25053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25053) · [Before (L25522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25522)

```diff
-           })), OW.nameColourSub = tW.l.subscribe(`otherEntitySettingsClientifiedEId|${iW}|nameColour`, (WW => {
+           })), GR.nameColourSub = VR.n.subscribe(`otherEntitySettingsClientifiedEId|${JR}|nameColour`, (RR => {
```

#### 2745. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25524` → after: `L25055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25055) · [Before (L25524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25524)

```diff
-           })), OW.effectInfoSub = tW.l.subscribe("EffectUpdate", (WW => {
+           })), GR.effectInfoSub = VR.n.subscribe("EffectUpdate", (RR => {
```

#### 2746. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25526-L25527` → after: `L25057-L25058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25057-L25058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25057-L25058) · [Before (L25526-L25527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25526-L25527)

```diff
-             (null === (mW = WW.showInNametag) || void 0 === mW || mW) && (0, UW.b)(WW.FN) === iW && li(OW, WW)
-           })), OW.removeEffectSub = tW.l.subscribe("RemoveEffect", (WW => {
+             (null === (yR = RR.showInNametag) || void 0 === yR || yR) && (0, nR.d)(RR.tZ) === JR && rJ(GR, RR)
+           })), GR.removeEffectSub = VR.n.subscribe("RemoveEffect", (RR => {
```

#### 2747. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25529-L25530` → after: `L25060-L25061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25060-L25061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25060-L25061) · [Before (L25529-L25530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25529-L25530)

```diff
-             (0, UW.b)(WW.FN) === iW && (clearTimeout(null === (mW = OW.effects[WW.name]) || void 0 === mW ? void 0 : mW.timeout), delete OW.effects[WW.name], Pi(OW))
-           })), OW.leaveGameSub = tW.l.subscribe("leaveGame", (() => {
+             (0, nR.d)(RR.tZ) === JR && (clearTimeout(null === (yR = GR.effects[RR.name]) || void 0 === yR ? void 0 : yR.timeout), delete GR.effects[RR.name], ZJ(GR))
+           })), GR.leaveGameSub = VR.n.subscribe("leaveGame", (() => {
```

#### 2748. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25533` → after: `L25064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25064) · [Before (L25533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25533)

```diff
-           })), OW.lifeformHurtSub = tW.l.subscribe("lifeformHurt", (WW => {
+           })), GR.lifeformHurtSub = VR.n.subscribe("lifeformHurt", (RR => {
```

#### 2749. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25536` → after: `L25067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25067) · [Before (L25536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25536)

```diff
-               DE: EW
+               Et: tR
```

#### 2750. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25538` → after: `L25069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25069) · [Before (L25538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25538)

```diff
-             (0, UW.b)(mW) === iW && (clearTimeout(OW.healthTimeout), OW.healthTimeout = setTimeout((() => {
+             (0, nR.d)(yR) === JR && (clearTimeout(GR.healthTimeout), GR.healthTimeout = setTimeout((() => {
```

#### 2751. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25540-L25541` → after: `L25071-L25072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25071-L25072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25071-L25072) · [Before (L25540-L25541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25540-L25541)

```diff
-             }), 2e3), OW.DE = EW, Pi(OW))
-           })), OW.lifeformHealthChangedSub = tW.l.subscribe("lifeformHealthChanged", (mW => {
+             }), 2e3), GR.Et = tR, ZJ(GR))
+           })), GR.lifeformHealthChangedSub = VR.n.subscribe("lifeformHealthChanged", (yR => {
```

#### 2752. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25544-L25545` → after: `L25075-L25076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25075-L25076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25075-L25076) · [Before (L25544-L25545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25544-L25545)

```diff
-               rE: NW,
-               zE: PW
+               yu: uR,
+               tu: ZR
```

#### 2753. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25547` → after: `L25078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25078) · [Before (L25547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25547)

```diff
-             if ((0, UW.b)(EW) !== iW || null === PW) return;
+             if ((0, nR.d)(tR) !== JR || null === ZR) return;
```

#### 2754. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25550-L25551` → after: `L25081-L25082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25081-L25082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25081-L25082) · [Before (L25550-L25551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25550-L25551)

```diff
-             }), 2e3)), OW.DE = PW, WW.bloxd.client.gameRecorder.recordLifeformHealth(EW, NW, PW), Pi(OW)
-           })), OW.hideNametagSub = tW.l.subscribe("appManagerUpdated|areNametagsHidden", (WW => {
+             }), 2e3)), GR.Et = ZR, RR.bloxd.client.gameRecorder.recordLifeformHealth(tR, uR, ZR), ZJ(GR)
+           })), GR.hideNametagSub = VR.n.subscribe("appManagerUpdated|areNametagsHidden", (RR => {
```

#### 2755. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25554` → after: `L25085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25085) · [Before (L25554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25554)

```diff
-           OW.unsubscribeKeyPromptChanges = (0, ZW.q)((() => {
+           GR.unsubscribeKeyPromptChanges = (0, KR.s)((() => {
```

#### 2756. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25556` → after: `L25087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25087) · [Before (L25556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25556)

```diff
-             (null !== (WW = OW.nameTagInfo) && void 0 !== WW && null !== (iW = WW.content) && void 0 !== iW && iW.some(xW.yb) || null !== (mW = OW.nameTagInfo) && void 0 !== mW && null !== (EW = mW.subtitle) && void 0 !== EW && EW.some(xW.yb)) && Pi(OW)
+             (null !== (RR = GR.nameTagInfo) && void 0 !== RR && null !== (JR = RR.content) && void 0 !== JR && JR.some(wR.rb) || null !== (yR = GR.nameTagInfo) && void 0 !== yR && null !== (tR = yR.subtitle) && void 0 !== tR && tR.some(wR.rb)) && ZJ(GR)
```

#### 2757. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25558-L25559` → after: `L25089-L25090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25089-L25090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25089-L25090) · [Before (L25558-L25559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25558-L25559)

```diff
-           const mW = (0, dW.e)(WW);
-           OW.DE = mW.getHealthFrac(iW);
+           const yR = (0, NR.c)(RR);
+           GR.Et = yR.getHealthFrac(JR);
```

#### 2758. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25569` → after: `L25100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25100) · [Before (L25569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25569)

```diff
-           WW.Dv in WW.sV && iW in WW.sV[WW.Dv] && ("nameTagInfo" in WW.sV[WW.Dv][iW] && (OW.nameTagInfo = WW.sV[WW.Dv][iW].nameTagInfo), "nameColour" in WW.sV[WW.Dv][iW] && (OW.nameColour = WW.sV[WW.Dv][iW].nameColour)), Pi(OW)
+           RR.WH in RR.Qm && JR in RR.Qm[RR.WH] && ("nameTagInfo" in RR.Qm[RR.WH][JR] && (GR.nameTagInfo = RR.Qm[RR.WH][JR].nameTagInfo), "nameColour" in RR.Qm[RR.WH][JR] && (GR.nameColour = RR.Qm[RR.WH][JR].nameColour)), ZJ(GR)
```

#### 2759. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25574` → after: `L25105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25105) · [Before (L25574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25574)

```diff
-             const WW = Li(OW.rD);
+             const RR = qJ(GR.Rm);
```

#### 2760. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25580` → after: `L25111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25111) · [Before (L25580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25580)

```diff
-             xi(OW.rD) && RW(OW) && Pi(OW)
+             wJ(GR.Rm) && ER(GR) && ZJ(GR)
```

#### 2761. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25583` → after: `L25114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25114) · [Before (L25583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25583)

```diff
-         ZY: function(WW, iW) {
+         YC: function(RR, JR) {
```

#### 2762. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25586` → after: `L25117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25117) · [Before (L25586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25586)

```diff
-         mH: function(WW, iW) {
+         eD: function(RR, JR) {
```

#### 2763. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25588` → after: `L25119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25119) · [Before (L25588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25588)

```diff
-           FW(iW), aW.delete(iW), IW.delete(iW.rD), tW.l.unsubscribe(iW.entityMeshScalingSub), tW.l.unsubscribe(iW.nameTagInfoSub), tW.l.unsubscribe(iW.priorityNametagSub), tW.l.unsubscribe(iW.rankUpdateSub), tW.l.unsubscribe(iW.hideNameSub), tW.l.unsubscribe(iW.nameChangedSub), t … [truncated]
+           sR(JR), QR.delete(JR), kR.delete(JR.Rm), VR.n.unsubscribe(JR.entityMeshScalingSub), VR.n.unsubscribe(JR.nameTagInfoSub), VR.n.unsubscribe(JR.priorityNametagSub), VR.n.unsubscribe(JR.rankUpdateSub), VR.n.unsubscribe(JR.hideNameSub), VR.n.unsubscribe(JR.nameChangedSub), V … [truncated]
```

#### 2764. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25599` → after: `L25130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25130) · [Before (L25599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25599)

```diff
-   40092: (WW, iW, OW) => {
+   40127: (RR, JR, GR) => {
```

#### 2765. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25603-L25606` → after: `L25134-L25137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25134-L25137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25134-L25137) · [Before (L25603-L25606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25603-L25606)

```diff
-     var mW = OW(39083),
-       EW = OW(38694),
-       NW = OW(38532),
-       PW = OW(352),
+     var yR = GR(39055),
+       tR = GR(38682),
+       uR = GR(38496),
+       ZR = GR(385),
```

#### 2766. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25608-L25610` → after: `L25139-L25141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25139-L25141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25139-L25141) · [Before (L25608-L25610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25608-L25610)

```diff
-       cW = OW(38803),
-       wW = OW(38411);
-     const tW = OW(40095).e,
+       iR = GR(38804),
+       fR = GR(38371);
+     const VR = GR(40131).c,
```

#### 2767. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25615-L25616` → after: `L25146-L25147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25146-L25147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25146-L25147) · [Before (L25615-L25616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25615-L25616)

```diff
-       const iW = WW.TZ.bD(),
-         OW = (0, mW.r)(WW.TZ, "phBox", (0, EW.d)({
+       const JR = RR.lK.jH(),
+         GR = (0, yR.m)(RR.lK, "phBox", (0, tR.e)({
```

#### 2768. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25623` → after: `L25154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25154) · [Before (L25623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25623)

```diff
-         rb: iW,
+         tL: JR,
```

#### 2769. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25631` → after: `L25162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25162) · [Before (L25631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25631)

```diff
-       }).mirror, OW.visibility = .5, OW.WK(!1);
+       }).mirror, GR.visibility = .5, GR.JA(!1);
```

#### 2770. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25641` → after: `L25172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25172) · [Before (L25641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25641)

```diff
-         mY: function(iW, mW) {
+         mC: function(JR, yR) {
```

#### 2771. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25643` → after: `L25174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25174) · [Before (L25643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25643)

```diff
-           mW.instance = OW.createInstance(`mesh overlay ${iW}`), WW.TZ.Wj(mW.instance, !1, null), mW.lastFlash = Date.now(), null === (EW = WW.EY.jOW(iW)) || void 0 === EW || EW.meshEnabledCombinator.forceUpdate()
+           yR.instance = GR.createInstance(`mesh overlay ${JR}`), RR.lK.iL(yR.instance, !1, null), yR.lastFlash = Date.now(), null === (tR = RR.zC.yyR(JR)) || void 0 === tR || tR.meshEnabledCombinator.forceUpdate()
```

#### 2772. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25645` → after: `L25176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25176) · [Before (L25645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25645)

```diff
-         mH: function(WW, iW) {
+         eD: function(RR, JR) {
```

#### 2773. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25648` → after: `L25179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25179) · [Before (L25648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25648)

```diff
-         ZY: function(iW, OW) {
+         YC: function(JR, GR) {
```

#### 2774. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25651-L25652` → after: `L25182-L25183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25182-L25183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25182-L25183) · [Before (L25651-L25652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25651-L25652)

```diff
-             const iW = (0, cW.getCaughtUpMeshRotation)(WW, PW.rD).renderRotation,
-               OW = WW.EY.YG(PW.rD).Yz;
+             const JR = (0, iR.getCaughtUpMeshRotation)(RR, ZR.Rm).renderRotation,
+               GR = RR.zC.f6(ZR.Rm).B_;
```

#### 2775. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25654` → after: `L25185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25185) · [Before (L25654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25654)

```diff
-             if (LW().set(AW, OW[0], OW[1] + tW.playerHitboxHeights.head / 2, OW[2] + .1), LW().tj(AW, AW, OW, iW[2]), LW().cj(AW, AW, OW, iW[0]), LW().wj(AW, AW, OW, iW[1]), (0, NW.q)(PW.instance, AW[0], AW[1], AW[2]), PW.instance.rotation.set(iW[0], iW[1], iW[2]), mW > PW.lastFl … [truncated]
+             if (qR().set(eR, GR[0], GR[1] + VR.playerHitboxHeights.head / 2, GR[2] + .1), qR().wa(eR, eR, GR, JR[2]), qR().ge(eR, eR, GR, JR[0]), qR().ta(eR, eR, GR, JR[1]), (0, uR.i)(ZR.instance, eR[0], eR[1], eR[2]), ZR.instance.rotation.set(JR[0], JR[1], JR[2]), yR > ZR.lastFl … [truncated]
```

#### 2776. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25661` → after: `L25192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25192) · [Before (L25661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25661)

```diff
-   40101: (WW, iW, OW) => {
+   40135: (RR, JR, GR) => {
```

#### 2777. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25665-L25666` → after: `L25196-L25197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25196-L25197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25196-L25197) · [Before (L25665-L25666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25665-L25666)

```diff
-     var mW = OW(678),
-       EW = OW(38532);
+     var yR = GR(717),
+       tR = GR(38496);
```

#### 2778. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25677` → after: `L25208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25208) · [Before (L25677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25677)

```diff
-           zN: null,
+           yZ: null,
```

#### 2779. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25681` → after: `L25212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25212) · [Before (L25681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25681)

```diff
-         mY: function(WW, iW) {
+         mC: function(RR, JR) {
```

#### 2780. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25684` → after: `L25215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25215) · [Before (L25684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25684)

```diff
-         mH: function(WW, iW) {
+         eD: function(RR, JR) {
```

#### 2781. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25687` → after: `L25218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25218) · [Before (L25687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25687)

```diff
-         ZY: function(iW, OW) {
+         YC: function(JR, GR) {
```

#### 2782. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25693` → after: `L25224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25224) · [Before (L25693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25693)

```diff
-             const iW = null === mW.zN ? 0 : tW(WW, WW.EY.YG(mW.rD).WmW, mW.zN);
+             const JR = null === yR.yZ ? 0 : VR(RR, RR.zC.f6(yR.Rm).myR, yR.yZ);
```

#### 2783. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25695` → after: `L25226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25226) · [Before (L25695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25695)

```diff
-               for (let OW = 0; OW < NW; OW++) mW.meshes.push(xW(WW, mW.rD));
+               for (let GR = 0; GR < uR; GR++) yR.meshes.push(wR(RR, yR.Rm));
```

#### 2784. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25698` → after: `L25229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25229) · [Before (L25698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25698)

```diff
-               EW && lW(WW, mW, OW, PW[OW], mW.zN, LW[OW]), mW._shown[OW] !== EW && (mW._shown[OW] = EW, mW.meshes[OW].WK(EW))
+               tR && rR(RR, yR, GR, ZR[GR], yR.yZ, qR[GR]), yR._shown[GR] !== tR && (yR._shown[GR] = tR, yR.meshes[GR].JA(tR))
```

#### 2785. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25711` → after: `L25242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25242) · [Before (L25711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25711)

```diff
-       const mW = WW.Wl;
+       const yR = RR.Fw;
```

#### 2786. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25716` → after: `L25247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25247) · [Before (L25716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25716)

```diff
-         ZW(NW, iW, mW, cW, wW) || WW.oZ.kR(cW, OW, wW) || (PW[EW] = cW, LW[EW] = wW, EW++)
+         KR(uR, JR, yR, iR, fR) || RR.NK.aT(iR, GR, fR) || (ZR[tR] = iR, qR[tR] = fR, tR++)
```

#### 2787. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25728-L25729` → after: `L25259-L25260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25259-L25260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25259-L25260) · [Before (L25728-L25729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25728-L25729)

```diff
-       const OW = WW.TZ.imW.createInstance(`floatingMesh_${iW}_${(0,mW.d)()}`);
-       return WW.TZ.Wj(OW), OW.WK(!1), OW
+       const GR = RR.lK.zyR.createInstance(`floatingMesh_${JR}_${(0,yR.c)()}`);
+       return RR.lK.iL(GR), GR.JA(!1), GR
```

#### 2788. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25733` → after: `L25264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25264) · [Before (L25733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25733)

```diff
-       const LW = WW.Wl,
+       const qR = RR.Fw,
```

#### 2789. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25738` → after: `L25269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25269) · [Before (L25738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25738)

```diff
-       ZW[3 * OW] === cW && ZW[3 * OW + 1] === wW && ZW[3 * OW + 2] === tW || (ZW[3 * OW] = cW, ZW[3 * OW + 1] = wW, ZW[3 * OW + 2] = tW, (0, EW.q)(iW.meshes[OW], cW, wW, tW))
+       KR[3 * GR] === iR && KR[3 * GR + 1] === fR && KR[3 * GR + 2] === VR || (KR[3 * GR] = iR, KR[3 * GR + 1] = fR, KR[3 * GR + 2] = VR, (0, tR.i)(JR.meshes[GR], iR, fR, VR))
```

#### 2790. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25741` → after: `L25272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25272) · [Before (L25741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25741)

```diff
-   40108: (WW, iW, OW) => {
+   40141: (RR, JR, GR) => {
```

#### 2791. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25745-L25747` → after: `L25276-L25278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25276-L25278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25276-L25278) · [Before (L25745-L25747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25745-L25747)

```diff
-     var mW = OW(2061),
-       EW = OW(2350),
-       NW = OW(38787);
+     var yR = GR(2163),
+       tR = GR(2421),
+       uR = GR(38788);
```

#### 2792. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25766-L25767` → after: `L25297-L25298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25297-L25298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25297-L25298) · [Before (L25766-L25767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25766-L25767)

```diff
-         mY: function(iW, OW) {
-           const cW = [mW.d.subscribe("forcedCameraDirection", (iW => {
+         mC: function(JR, GR) {
+           const iR = [yR.c.subscribe("forcedCameraDirection", (JR => {
```

#### 2793. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25769-L25770` → after: `L25300-L25301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25300-L25301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25300-L25301) · [Before (L25769-L25770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25769-L25770)

```diff
-               if (WW.gM.forcedCameraDirectionTransitionMs <= 0 || null === iW) {
-                 if (null === iW) WW.camera.mI = null, WW.camera.xI = null;
+               if (RR.jW.forcedCameraDirectionTransitionMs <= 0 || null === JR) {
+                 if (null === JR) RR.camera.e_ = null, RR.camera.L_ = null;
```

#### 2794. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25773-L25776` → after: `L25304-L25307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25304-L25307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25304-L25307) · [Before (L25773-L25776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25773-L25776)

```diff
-                     PZ: OW,
-                     hOW: mW
-                   } = (0, NW.e)(iW);
-                   WW.camera.mI = mW, WW.camera.xI = OW
+                     ZK: GR,
+                     eyR: yR
+                   } = (0, uR.h)(JR);
+                   RR.camera.e_ = yR, RR.camera.L_ = GR
```

#### 2795. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25786-L25788` → after: `L25317-L25319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25317-L25319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25317-L25319) · [Before (L25786-L25788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25786-L25788)

```diff
-                 PZ: EW,
-                 hOW: PW
-               } = (0, NW.e)(iW);
+                 ZK: tR,
+                 eyR: ZR
+               } = (0, uR.h)(JR);
```

#### 2796. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25794` → after: `L25325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25325) · [Before (L25794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25794)

```diff
-               OW.directionTransitionStart = LW, OW.directionTransitionEnd = LW + WW.gM.forcedCameraDirectionTransitionMs, WW.camera.mI = mW.pitch, WW.camera.xI = mW.heading
+               GR.directionTransitionStart = qR, GR.directionTransitionEnd = qR + RR.jW.forcedCameraDirectionTransitionMs, RR.camera.e_ = yR.pitch, RR.camera.L_ = yR.heading
```

#### 2797. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25796` → after: `L25327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25327) · [Before (L25796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25796)

```diff
-           })), mW.d.subscribe("cameraRoll", (iW => {
+           })), yR.c.subscribe("cameraRoll", (JR => {
```

#### 2798. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25798-L25799` → after: `L25329-L25330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25329-L25330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25329-L25330) · [Before (L25798-L25799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25798-L25799)

```diff
-               if (WW.gM.cameraRollTransitionMs <= 0) return WW.camera.lZ = iW, OW.rollTransitionFrom = null, OW.rollTransitionTo = null, OW.rollTransitionStart = null, void(OW.rollTransitionEnd = null);
-               OW.rollTransitionFrom = WW.camera.lZ, OW.rollTransitionTo = iW;
+               if (RR.jW.cameraRollTransitionMs <= 0) return RR.camera.rK = JR, GR.rollTransitionFrom = null, GR.rollTransitionTo = null, GR.rollTransitionStart = null, void(GR.rollTransitionEnd = null);
+               GR.rollTransitionFrom = RR.camera.rK, GR.rollTransitionTo = JR;
```

#### 2799. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25801` → after: `L25332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25332) · [Before (L25801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25801)

```diff
-               OW.rollTransitionStart = mW, OW.rollTransitionEnd = mW + WW.gM.cameraRollTransitionMs
+               GR.rollTransitionStart = yR, GR.rollTransitionEnd = yR + RR.jW.cameraRollTransitionMs
```

#### 2800. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25803` → after: `L25334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25334) · [Before (L25803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25803)

```diff
-           })), mW.d.subscribe("forcedCameraDirectionTransitionMs", (WW => {
+           })), yR.c.subscribe("forcedCameraDirectionTransitionMs", (RR => {
```

#### 2801. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25810` → after: `L25341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25341) · [Before (L25810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25810)

```diff
-           })), mW.d.subscribe("cameraRollTransitionMs", (WW => {
+           })), yR.c.subscribe("cameraRollTransitionMs", (RR => {
```

#### 2802. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25817` → after: `L25348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25348) · [Before (L25817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25817)

```diff
-           })), mW.d.subscribe("cameraRotationOffset", (WW => {
+           })), yR.c.subscribe("cameraRotationOffset", (RR => {
```

#### 2803. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25819` → after: `L25350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25350) · [Before (L25819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25819)

```diff
-           })), mW.d.subscribe("cameraPositionOffset", (WW => {
+           })), yR.c.subscribe("cameraPositionOffset", (RR => {
```

#### 2804. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25832-L25833` → after: `L25363-L25364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25363-L25364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25363-L25364) · [Before (L25832-L25833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25832-L25833)

```diff
-           }, wW(WW.gM.cameraRotationOffset), tW(WW.gM.cameraPositionOffset), (0, EW.onGameReset)((() => {
-             WW.camera.mI = null, WW.camera.xI = null, WW.camera.lZ = 0, wW(PW), tW(LW), OW.directionTransitionFrom = null, OW.directionTransitionTo = null, OW.directionTransitionStart = null, OW.directionTransitionEnd = null, OW.rollTransitionFrom = null, OW.rollTransitionTo = nu … [truncated]
+           }, fR(RR.jW.cameraRotationOffset), VR(RR.jW.cameraPositionOffset), (0, tR.onGameReset)((() => {
+             RR.camera.e_ = null, RR.camera.L_ = null, RR.camera.rK = 0, fR(ZR), VR(qR), GR.directionTransitionFrom = null, GR.directionTransitionTo = null, GR.directionTransitionStart = null, GR.directionTransitionEnd = null, GR.rollTransitionFrom = null, GR.rollTransitionTo = nu … [truncated]
```

#### 2805. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25836` → after: `L25367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25367) · [Before (L25836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25836)

```diff
-         mH: function(WW, iW) {
+         eD: function(RR, JR) {
```

#### 2806. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25839` → after: `L25370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25370) · [Before (L25839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25839)

```diff
-         ZY: function(iW, OW) {
+         YC: function(JR, GR) {
```

#### 2807. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25848` → after: `L25379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25379) · [Before (L25848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25848)

```diff
-             NW >= 1 ? (WW.camera.mI = OW.pitch, WW.camera.xI = tW(OW.heading), mW.directionTransitionFrom = null, mW.directionTransitionTo = null, mW.directionTransitionStart = null, mW.directionTransitionEnd = null) : (WW.camera.mI = iW.pitch + (OW.pitch - iW.pitch) * PW, WW.cam … [truncated]
+             uR >= 1 ? (RR.camera.e_ = GR.pitch, RR.camera.L_ = VR(GR.heading), yR.directionTransitionFrom = null, yR.directionTransitionTo = null, yR.directionTransitionStart = null, yR.directionTransitionEnd = null) : (RR.camera.e_ = JR.pitch + (GR.pitch - JR.pitch) * ZR, RR.cam … [truncated]
```

#### 2808. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25853` → after: `L25384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25384) · [Before (L25853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25853)

```diff
-             iW >= 1 ? (WW.camera.lZ = mW.rollTransitionTo, mW.rollTransitionFrom = null, mW.rollTransitionTo = null, mW.rollTransitionStart = null, mW.rollTransitionEnd = null) : WW.camera.lZ = mW.rollTransitionFrom + (mW.rollTransitionTo - mW.rollTransitionFrom) * OW
+             JR >= 1 ? (RR.camera.rK = yR.rollTransitionTo, yR.rollTransitionFrom = null, yR.rollTransitionTo = null, yR.rollTransitionStart = null, yR.rollTransitionEnd = null) : RR.camera.rK = yR.rollTransitionFrom + (yR.rollTransitionTo - yR.rollTransitionFrom) * GR
```

#### 2809. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25860` → after: `L25391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25391) · [Before (L25860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25860)

```diff
-       return WW < .5 ? 4 * WW * WW * WW : 1 - Math.pow(-2 * WW + 2, 3) / 2
+       return RR < .5 ? 4 * RR * RR * RR : 1 - Math.pow(-2 * RR + 2, 3) / 2
```

#### 2810. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25872` → after: `L25403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25403) · [Before (L25872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25872)

```diff
-       return EW > Math.PI ? EW -= OW : EW < -Math.PI && (EW += OW), WW + EW
+       return tR > Math.PI ? tR -= GR : tR < -Math.PI && (tR += GR), RR + tR
```

#### 2811. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25879` → after: `L25410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25410) · [Before (L25879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25879)

```diff
-       }(WW) ? WW : OW;
+       }(RR) ? RR : GR;
```

#### 2812. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25883` → after: `L25414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25414) · [Before (L25883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25883)

```diff
-   39998: (WW, iW, OW) => {
+   40003: (RR, JR, GR) => {
```

#### 2813. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25889-L25890` → after: `L25420-L25421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25420-L25421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25420-L25421) · [Before (L25889-L25890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25889-L25890)

```diff
-     var mW = OW(38229),
-       EW = OW(39255);
+     var yR = GR(38189),
+       tR = GR(39227);
```

#### 2814. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25893` → after: `L25424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25424) · [Before (L25893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25893)

```diff
-         this.uD = null, this.OmW = null, this.heldItemPositionParams = {}, this.maxWalkingAngleOverride = null, this._walkingAngleLastTick = 0, this._posePaused = !1, this.rD = void 0
+         this.JI = null, this.SyR = null, this.heldItemPositionParams = {}, this.maxWalkingAngleOverride = null, this._walkingAngleLastTick = 0, this._posePaused = !1, this.Rm = void 0
```

#### 2815. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25902-L25903` → after: `L25433-L25434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25433-L25434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25433-L25434) · [Before (L25902-L25903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25902-L25903)

```diff
-         ZY: function(iW, OW) {
-           for (const EW of OW) EW.OmW.mmW && ((0, mW.pausesOutOfView)(WW, EW.rD, EW.uD) ? EW._posePaused = !0 : cW(WW, EW))
+         YC: function(JR, GR) {
+           for (const tR of GR) tR.SyR.jyR && ((0, yR.pausesOutOfView)(RR, tR.Rm, tR.JI) ? tR._posePaused = !0 : iR(RR, tR))
```

#### 2816. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25909` → after: `L25440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25440) · [Before (L25909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25909)

```diff
-       const OW = WW.EY.KOW(iW);
+       const GR = RR.zC.iyR(JR);
```

#### 2817. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25915` → after: `L25446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25446) · [Before (L25915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25915)

```diff
-       const OW = iW.rD;
+       const GR = JR.Rm;
```

#### 2818. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25919` → after: `L25450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25450) · [Before (L25919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25919)

```diff
-       } = WW.EY.getState(OW, "updateWalkingState");
+       } = RR.zC.getState(GR, "updateWalkingState");
```

#### 2819. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25922` → after: `L25453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25453) · [Before (L25922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25922)

```diff
-       const NW = WW.EY.getState(OW, "animator");
+       const uR = RR.zC.getState(GR, "animator");
```

#### 2820. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25926` → after: `L25457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25457) · [Before (L25926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25926)

```diff
-   40116: (WW, iW, OW) => {
+   40146: (RR, JR, GR) => {
```

#### 2821. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25930-L25934` → after: `L25461-L25465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25461-L25465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25461-L25465) · [Before (L25930-L25934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25930-L25934)

```diff
-     var mW = OW(37626),
-       EW = OW(27),
-       NW = OW(39326),
-       PW = OW(38336),
-       LW = OW(39280);
+     var yR = GR(37537),
+       tR = GR(32),
+       uR = GR(39308),
+       ZR = GR(38296),
+       qR = GR(39259);
```

#### 2822. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25950` → after: `L25481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25481) · [Before (L25950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25950)

```diff
-         mY: function(iW, OW) {
+         mC: function(JR, GR) {
```

#### 2823. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25952-L25954` → after: `L25483-L25485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25483-L25485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25483-L25485) · [Before (L25952-L25954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25952-L25954)

```diff
-           OW.isAlive = (0, LW.b)("_isAlive", null === (wW = WW.sV[WW.Dv]) || void 0 === wW || null === (tW = wW[OW.rD]) || void 0 === tW ? void 0 : tW._isAlive), OW._isAliveSub = EW.l.subscribe(`otherEntitySettingsClientifiedEId|${OW.rD}|_isAlive`, (WW => {
-             OW.isAlive = (0, LW.b)("_isAlive", WW), (0, NW.updateLocalPlayerHeldItem)()
-           })), OW.addedTime = Date.now(), OW._hasPriorityNametagSub = EW.l.subscribe(`otherEntitySettingsClientifiedEId|${OW.rD}|hasPriorityNametag`, (WW => {
+           GR.isAlive = (0, qR.d)("_isAlive", null === (fR = RR.Qm[RR.WH]) || void 0 === fR || null === (VR = fR[GR.Rm]) || void 0 === VR ? void 0 : VR._isAlive), GR._isAliveSub = tR.n.subscribe(`otherEntitySettingsClientifiedEId|${GR.Rm}|_isAlive`, (RR => {
+             GR.isAlive = (0, qR.d)("_isAlive", RR), (0, uR.updateLocalPlayerHeldItem)()
+           })), GR.addedTime = Date.now(), GR._hasPriorityNametagSub = tR.n.subscribe(`otherEntitySettingsClientifiedEId|${GR.Rm}|hasPriorityNametag`, (RR => {
```

#### 2824. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25958` → after: `L25489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25489) · [Before (L25958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25958)

```diff
-             EY: ZW
+             zC: KR
```

#### 2825. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25960` → after: `L25491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25491) · [Before (L25960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25960)

```diff
-           OW.meshEnabledCombinator = new mW.e(((mW, NW) => {
+           GR.meshEnabledCombinator = new yR.d(((yR, uR) => {
```

#### 2826. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25962` → after: `L25493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25493) · [Before (L25962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25962)

```diff
-             (0, PW.l)(WW, iW, mW);
+             (0, ZR.n)(RR, JR, yR);
```

#### 2827. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25964` → after: `L25495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25495) · [Before (L25964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25964)

```diff
-               tW = ZW.sOW(iW),
+               VR = KR.ZyR(JR),
```

#### 2828. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25970` → after: `L25501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25501) · [Before (L25970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25970)

```diff
-               if (null !== (AW = null === (bW = WW.sV[WW.Dv][OW.rD]) || void 0 === bW ? void 0 : bW.hasPriorityNametag) && void 0 !== AW && AW)
+               if (null !== (eR = null === (aR = RR.Qm[RR.WH][GR.Rm]) || void 0 === aR ? void 0 : aR.hasPriorityNametag) && void 0 !== eR && eR)
```

#### 2829. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25973` → after: `L25504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25504) · [Before (L25973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25973)

```diff
-               (lW || OW.drawnHidden) && (iW = !1), (0, PW.l)(WW, xW, iW)
+               (rR || GR.drawnHidden) && (JR = !1), (0, ZR.n)(RR, wR, JR)
```

#### 2830. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25977-L25979` → after: `L25508-L25510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25508-L25510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25508-L25510) · [Before (L25977-L25979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25977-L25979)

```diff
-             jW && (jW.forceSetEnabled = !!wW && null, jW.instance.WK(null !== (UW = jW.forceSetEnabled) && void 0 !== UW ? UW : jW.isEnabled));
-             OW.rD !== WW.Dv && (mW ? ZW.liW(iW, "collideTerrain") || ZW.zD(iW, "collideTerrain") : ZW.liW(iW, "collideTerrain") && ZW.mV(iW, "collideTerrain")), iW === WW.Dv && EW.l.iZ("clientPlayerModelVisible", wW)
-           })), ZW.getState(iW, ZW.names.nZ).enabledCombinator = new mW.e
+             LR && (LR.forceSetEnabled = !!fR && null, LR.instance.JA(null !== (nR = LR.forceSetEnabled) && void 0 !== nR ? nR : LR.isEnabled));
+             GR.Rm !== RR.WH && (yR ? KR.RGR(JR, "collideTerrain") || KR.Jm(JR, "collideTerrain") : KR.RGR(JR, "collideTerrain") && KR.Zm(JR, "collideTerrain")), JR === RR.WH && tR.n.JK("clientPlayerModelVisible", fR)
+           })), KR.getState(JR, KR.names.vK).enabledCombinator = new yR.d
```

#### 2831. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25981-L25982` → after: `L25512-L25513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25512-L25513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25512-L25513) · [Before (L25981-L25982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25981-L25982)

```diff
-         mH: function(WW, iW) {
-           EW.l.unsubscribe(iW._isAliveSub), EW.l.unsubscribe(iW._hasPriorityNametagSub)
+         eD: function(RR, JR) {
+           tR.n.unsubscribe(JR._isAliveSub), tR.n.unsubscribe(JR._hasPriorityNametagSub)
```

#### 2832. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25987` → after: `L25518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25518) · [Before (L25987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25987)

```diff
-   40123: (WW, iW, OW) => {
+   40154: (RR, JR, GR) => {
```

#### 2833. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25991-L25992` → after: `L25522-L25523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25522-L25523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25522-L25523) · [Before (L25991-L25992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L25991-L25992)

```diff
-     var mW = OW(38979),
-       EW = OW(39228);
+     var yR = GR(38968),
+       tR = GR(39207);
```

#### 2834. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26005` → after: `L25536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25536) · [Before (L26005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26005)

```diff
-           EW.c.dropExpired(Date.now())
+           tR.e.dropExpired(Date.now())
```

#### 2835. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26007` → after: `L25538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25538) · [Before (L26007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26007)

```diff
-         ZY: function(iW, OW) {
+         YC: function(JR, GR) {
```

#### 2836. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26010` → after: `L25541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25541) · [Before (L26010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26010)

```diff
-             const iW = WW.EY.XiW(NW.rD);
+             const JR = RR.zC.vGR(uR.Rm);
```

#### 2837. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26012-L26013` → after: `L25543-L25544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25543-L25544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25543-L25544) · [Before (L26012-L26013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26012-L26013)

```diff
-             const OW = (0, mW.i)(NW.startedAtMs, NW.endsAtMs, EW);
-             iW.mesh.YZ.set(OW, OW, OW), iW.offset[1] = NW.centreOffsetY + NW.halfHeight * (OW - mW.k)
+             const GR = (0, yR.k)(uR.startedAtMs, uR.endsAtMs, tR);
+             JR.mesh.MK.set(GR, GR, GR), JR.offset[1] = uR.centreOffsetY + uR.halfHeight * (GR - yR.r)
```

#### 2838. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26019` → after: `L25550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25550) · [Before (L26019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26019)

```diff
-   40131: (WW, iW, OW) => {
+   40163: (RR, JR, GR) => {
```

#### 2839. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26024-L26025` → after: `L25555-L25556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25555-L25556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25555-L25556) · [Before (L26024-L26025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26024-L26025)

```diff
-     var mW = OW(182),
-       EW = OW(352),
+     var yR = GR(203),
+       tR = GR(385),
```

#### 2840. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26027-L26029` → after: `L25558-L25560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25558-L25560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25558-L25560) · [Before (L26027-L26029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26027-L26029)

```diff
-       PW = OW(37626),
-       LW = OW(2365),
-       cW = OW(38219);
+       ZR = GR(37537),
+       qR = GR(2435),
+       iR = GR(38178);
```

#### 2841. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26033` → after: `L25564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25564) · [Before (L26033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26033)

```diff
-       xW = mW.f.jZ,
+       wR = yR.g.LK,
```

#### 2842. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26049` → after: `L25580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25580) · [Before (L26049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26049)

```diff
-       let KW = new Float64Array(2 * mW.f.maxNumVisibleEntitiesOfSingleType);
+       let CR = new Float64Array(2 * yR.g.maxNumVisibleEntitiesOfSingleType);
```

#### 2843. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26056` → after: `L25587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25587) · [Before (L26056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26056)

```diff
-         const mW = `${WW}|${iW}|${OW}`,
+         const yR = `${RR}|${JR}|${GR}`,
```

#### 2844. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26074` → after: `L25605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25605) · [Before (L26074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26074)

```diff
-           Qt: null,
+           hV: null,
```

#### 2845. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26084-L26087` → after: `L25615-L25618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25615-L25618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25615-L25618) · [Before (L26084-L26087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26084-L26087)

```diff
-         mY: function(OW, mW) {
-           if (!mW.addMeshComponent || !mW.removeMeshComponent) throw new Error(`Added hidingMeshManager without addMeshComponent or removeMeshComponent ${mW.addMeshComponent} ${mW.removeMeshComponent}`);
-           if (mW._lastPos = NW().create(), NW().copy(mW._lastPos, WW.EY.Vk(OW)), null !== mW.movingHideDist && EW.add(mW), 0 === iW.size && (NW().set(YW, 1 / 0, 1 / 0, 1 / 0), NW().copy(SW, YW)), oW(mW), uW(mW, mW._competesForCap), mW.immediatelyUpdate) {
-             HW(mW, WW.EY.Vk(WW.Dv))
+         mC: function(GR, yR) {
+           if (!yR.addMeshComponent || !yR.removeMeshComponent) throw new Error(`Added hidingMeshManager without addMeshComponent or removeMeshComponent ${yR.addMeshComponent} ${yR.removeMeshComponent}`);
+           if (yR._lastPos = uR().create(), uR().copy(yR._lastPos, RR.zC.vW(GR)), null !== yR.movingHideDist && tR.add(yR), 0 === JR.size && (uR().set(MR, 1 / 0, 1 / 0, 1 / 0), uR().copy(XR, MR)), xR(yR), OR(yR, yR._competesForCap), yR.immediatelyUpdate) {
+             bR(yR, RR.zC.vW(RR.WH))
```

#### 2846. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26090` → after: `L25621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25621) · [Before (L26090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26090)

```diff
-         mH: function(WW, iW) {
+         eD: function(RR, JR) {
```

#### 2847. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26094` → after: `L25625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25625) · [Before (L26094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26094)

```diff
-           const cW = WW.camera.Vk(),
+           const iR = RR.camera.vW(),
```

#### 2848. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26107` → after: `L25638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25638) · [Before (L26107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26107)

```diff
-                 if (EW.size < mW.f.maxNumVisibleEntitiesOfSingleType) {
+                 if (tR.size < yR.g.maxNumVisibleEntitiesOfSingleType) {
```

#### 2849. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26113-L26114` → after: `L25644-L25645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25644-L25645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25644-L25645) · [Before (L26113-L26114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26113-L26114)

```diff
-                 for (const OW of EW) KW[PW++] = NW().sqrDist(iW, WW.EY.Vk(OW.rD));
-                 MW.set(OW, jW(KW, PW, mW.f.maxNumVisibleEntitiesOfSingleType - 1))
+                 for (const GR of tR) CR[ZR++] = uR().sqrDist(JR, RR.zC.vW(GR.Rm));
+                 AR.set(GR, LR(CR, ZR, yR.g.maxNumVisibleEntitiesOfSingleType - 1))
```

#### 2850. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26118` → after: `L25649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25649) · [Before (L26118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26118)

```diff
-             const OW = WW.EY.Vk(iW.rD);
+             const GR = RR.zC.vW(JR.Rm);
```

#### 2851. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26123` → after: `L25654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25654) · [Before (L26123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26123)

```diff
-           if (!JW) WW: for (const WW of OW)
+           if (!pR) RR: for (const RR of GR)
```

#### 2852. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26137-L26138` → after: `L25668-L25669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25668-L25669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25668-L25669) · [Before (L26137-L26138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26137-L26138)

```diff
-           EY: EW
-         } = WW, tW = iW.rD, ZW = EW.Vk(tW);
+           zC: tR
+         } = RR, VR = JR.Rm, KR = tR.vW(VR);
```

#### 2853. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26146` → after: `L25677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25677) · [Before (L26146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26146)

```diff
-           AW = Math.max(xW, null !== (mW = iW.movingHideDist) && void 0 !== mW ? mW : 0),
+           eR = Math.max(wR, null !== (yR = JR.movingHideDist) && void 0 !== yR ? yR : 0),
```

#### 2854. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26148` → after: `L25679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25679) · [Before (L26148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26148)

```diff
-           jW = bW && (iW.displayOutsideLoadedChunk || (0, LW.d)().JR(Math.floor(ZW[0]), Math.floor(ZW[1]), Math.floor(ZW[2])));
+           LR = aR && (JR.displayOutsideLoadedChunk || (0, qR.e)().lT(Math.floor(KR[0]), Math.floor(KR[1]), Math.floor(KR[2])));
```

#### 2855. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26150` → after: `L25681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25681) · [Before (L26150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26150)

```diff
-         const UW = MW.get(iW.Qt),
+         const nR = AR.get(JR.hV),
```

#### 2856. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26152` → after: `L25683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25683) · [Before (L26152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26152)

```diff
-         iW.isMeshShown !== kW && (kW ? (EW.XiW(tW) || (iW.addMeshComponent(), (0, cW.h)(WW, tW)), iW.addShadow && !EW.getState(tW, EW.names.nZ) && (EW.zD(tW, EW.names.nZ, {
+         JR.isMeshShown !== UR && (UR ? (tR.vGR(VR) || (JR.addMeshComponent(), (0, iR.i)(RR, VR)), JR.addShadow && !tR.getState(VR, tR.names.vK) && (tR.Jm(VR, tR.names.vK, {
```

#### 2857. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26154` → after: `L25685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25685) · [Before (L26154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26154)

```diff
-         }), EW.getState(tW, EW.names.nZ).enabledCombinator = new PW.e)) : (iW.removeMeshComponent(), iW.addShadow && EW.getState(tW, EW.names.nZ) && EW.mV(tW, EW.names.nZ)), iW.isMeshShown = kW)
+         }), tR.getState(VR, tR.names.vK).enabledCombinator = new ZR.d)) : (JR.removeMeshComponent(), JR.addShadow && tR.getState(VR, tR.names.vK) && tR.Zm(VR, tR.names.vK)), JR.isMeshShown = UR)
```

#### 2858. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26172-L26174` → after: `L25703-L25705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25703-L25705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25703-L25705) · [Before (L26172-L26174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26172-L26174)

```diff
-         if (WW._competesForCap = iW, !WW.Qt) return;
-         let OW = sW.get(WW.Qt);
-         iW ? (OW || (OW = new Set, sW.set(WW.Qt, OW)), OW.add(WW)) : OW && (OW.delete(WW), 0 === OW.size && (sW.delete(WW.Qt), MW.delete(WW.Qt)))
+         if (RR._competesForCap = JR, !RR.hV) return;
+         let GR = WR.get(RR.hV);
+         JR ? (GR || (GR = new Set, WR.set(RR.hV, GR)), GR.add(RR)) : GR && (GR.delete(RR), 0 === GR.size && (WR.delete(RR.hV), AR.delete(RR.hV)))
```

#### 2859. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26178` → after: `L25709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25709) · [Before (L26178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26178)

```diff
-         let mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW.EY.Vk(OW.rD);
+         let yR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR.zC.vW(GR.Rm);
```

#### 2860. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26185` → after: `L25716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25716) · [Before (L26185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26185)

```diff
-         const cW = `${EW}|${NW}|${PW}`,
+         const iR = `${tR}|${uR}|${ZR}`,
```

#### 2861. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26250` → after: `L25781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25781) · [Before (L26250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26250)

```diff
-       return Math.max(WW.hideDist, null !== (iW = WW.movingHideDist) && void 0 !== iW ? iW : 0)
+       return Math.max(RR.hideDist, null !== (JR = RR.movingHideDist) && void 0 !== JR ? JR : 0)
```

#### 2862. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26256` → after: `L25787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25787) · [Before (L26256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26256)

```diff
-       return iW < OW ? OW - iW : iW > mW ? iW - mW : 0
+       return JR < GR ? GR - JR : JR > yR ? JR - yR : 0
```

#### 2863. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26264-L26270` → after: `L25795-L25801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25795-L25801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25795-L25801) · [Before (L26264-L26270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26264-L26270)

```diff
-     var mW = OW(38715),
-       EW = OW(38229),
-       NW = OW(38320),
-       PW = OW(38307),
-       LW = OW(38782),
-       cW = OW(39255),
-       wW = OW(39262);
+     var yR = GR(38707),
+       tR = GR(38189),
+       uR = GR(38275),
+       ZR = GR(38265),
+       qR = GR(38779),
+       iR = GR(39227),
+       fR = GR(39243);
```

#### 2864. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26277-L26278` → after: `L25808-L25809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25808-L25809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25808-L25809) · [Before (L26277-L26278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26277-L26278)

```diff
-           uD: null,
-           OmW: null,
+           JI: null,
+           SyR: null,
```

#### 2865. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26294-L26295` → after: `L25825-L25826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25825-L25826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25825-L25826) · [Before (L26294-L26295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26294-L26295)

```diff
-         ZY: function(iW, OW) {
-           for (const mW of OW) mW.OmW.mmW && ((0, EW.pausesOutOfView)(WW, mW.rD, mW.uD) ? (mW._posePaused = !0, xW(WW, mW, iW)) : AW(WW, mW, iW))
+         YC: function(JR, GR) {
+           for (const yR of GR) yR.SyR.jyR && ((0, tR.pausesOutOfView)(RR, yR.Rm, yR.JI) ? (yR._posePaused = !0, wR(RR, yR, JR)) : eR(RR, yR, JR))
```

#### 2866. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26301` → after: `L25832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25832) · [Before (L26301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26301)

```diff
-       const OW = WW.EY.MOW(iW);
+       const GR = RR.zC.qyR(JR);
```

#### 2867. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26306` → after: `L25837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25837) · [Before (L26306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26306)

```diff
-       const mW = WW.EY.aiW(iW.rD);
+       const yR = RR.zC.oGR(JR.Rm);
```

#### 2868. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26309` → after: `L25840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25840) · [Before (L26309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26309)

```diff
-       (0, wW.e)(WW, iW.rD) || "gliding" === EW || "driving" === EW || (kW(WW, iW) ? sW(WW, iW, mW) : "zombie" !== EW && MW(WW, iW, mW, lW(WW, iW), OW))
+       (0, fR.d)(RR, JR.Rm) || "gliding" === tR || "driving" === tR || (UR(RR, JR) ? WR(RR, JR, yR) : "zombie" !== tR && AR(RR, JR, yR, rR(RR, JR), GR))
```

#### 2869. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26313` → after: `L25844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25844) · [Before (L26313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26313)

```diff
-       return WW.EY.getState(iW.rD, "animator")
+       return RR.zC.getState(JR.Rm, "animator")
```

#### 2870. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26319` → after: `L25850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25850) · [Before (L26319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26319)

```diff
-       const EW = WW.EY.aiW(iW.rD),
+       const tR = RR.zC.oGR(JR.Rm),
```

#### 2871. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26323-L26324` → after: `L25854-L25855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25854-L25855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25854-L25855) · [Before (L26323-L26324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26323-L26324)

```diff
-         ZW = iW.rD === WW.Dv ? LW.b.getPlayerFacingPitch(WW) : EW.cameraPitch,
-         xW = null === (mW = WW.EY.UOW(iW.rD)) || void 0 === mW ? void 0 : mW.nS,
+         KR = JR.Rm === RR.WH ? qR.e.getPlayerFacingPitch(RR) : tR.cameraPitch,
+         wR = null === (yR = RR.zC.tyR(JR.Rm)) || void 0 === yR ? void 0 : yR.gC,
```

#### 2872. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26326` → after: `L25857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25857) · [Before (L26326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26326)

```diff
-         jW = (0, wW.e)(WW, iW.rD),
+         LR = (0, fR.d)(RR, JR.Rm),
```

#### 2873. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26328` → after: `L25859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25859) · [Before (L26328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26328)

```diff
-         HW = (0, cW.getRigController)(WW, iW.rD),
+         bR = (0, iR.getRigController)(RR, JR.Rm),
```

#### 2874. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26356` → after: `L25887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25887) · [Before (L26356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26356)

```diff
-         wW = LW ? WW.EY.getState(iW.rD, "updateWalkingState").walkingAngle : 0;
+         fR = qR ? RR.zC.getState(JR.Rm, "updateWalkingState").walkingAngle : 0;
```

#### 2875. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26369` → after: `L25900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25900) · [Before (L26369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26369)

```diff
-       return (0, cW.rigHasAction)(WW, iW.rD, mW.n)
+       return (0, iR.rigHasAction)(RR, JR.Rm, yR.n)
```

#### 2876. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26373` → after: `L25904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25904) · [Before (L26373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26373)

```diff
-       (!iW.consumedNetworkArmSwing || OW.armSwinging && !(0, cW.rigActionPlaying)(WW, iW.rD, mW.n)) && (0, cW.playRigAction)(WW, iW.rD, mW.n), iW.consumedNetworkArmSwing = !0, iW._queuedSwing = !1
+       (!JR.consumedNetworkArmSwing || GR.armSwinging && !(0, iR.rigActionPlaying)(RR, JR.Rm, yR.n)) && (0, iR.playRigAction)(RR, JR.Rm, yR.n), JR.consumedNetworkArmSwing = !0, JR._queuedSwing = !1
```

#### 2877. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26378` → after: `L25909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25909) · [Before (L26378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26378)

```diff
-       const LW = WW.qJ,
+       const qR = RR.hN,
```

#### 2878. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26381` → after: `L25912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25912) · [Before (L26381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26381)

```diff
-           kO: wW
+           LG: fR
```

#### 2879. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26383` → after: `L25914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25914) · [Before (L26383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26383)

```diff
-       OW.armSwinging || !iW.consumedNetworkArmSwing ? (iW.consumedNetworkArmSwing = !0, cW >= wW ? (NW = EW / wW, iW._queuedSwing = !1) : cW >= .65 * wW && !iW._queuedSwing && (iW._queuedSwing = !0)) : iW._queuedSwing && cW >= wW && (NW = Math.min(EW, cW - wW) / wW, iW._queuedSwi … [truncated]
+       GR.armSwinging || !JR.consumedNetworkArmSwing ? (JR.consumedNetworkArmSwing = !0, iR >= fR ? (uR = tR / fR, JR._queuedSwing = !1) : iR >= .65 * fR && !JR._queuedSwing && (JR._queuedSwing = !0)) : JR._queuedSwing && iR >= fR && (uR = Math.min(tR, iR - fR) / fR, JR._queuedSwi … [truncated]
```

#### 2880. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26397-L26398` → after: `L25928-L25929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25928-L25929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25928-L25929) · [Before (L26397-L26398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26397-L26398)

```diff
-       const OW = WW.EY.aiW(iW.rD),
-         mW = iW.rD === WW.Dv ? LW.b.getPlayerFacingPitch(WW) : OW.cameraPitch,
+       const GR = RR.zC.oGR(JR.Rm),
+         yR = JR.Rm === RR.WH ? qR.e.getPlayerFacingPitch(RR) : GR.cameraPitch,
```

#### 2881. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26406` → after: `L25937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25937) · [Before (L26406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26406)

```diff
-       } = WW.EY.getState(iW.rD, "updateWalkingState"), EW = lW(WW, iW);
+       } = RR.zC.getState(JR.Rm, "updateWalkingState"), tR = rR(RR, JR);
```

#### 2882. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26418-L26419` → after: `L25949-L25950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25949-L25950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25949-L25950) · [Before (L26418-L26419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26418-L26419)

```diff
-       kO: 250,
-       MO: {
+       LG: 250,
+       UG: {
```

#### 2883. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26424` → after: `L25955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25955) · [Before (L26424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26424)

```diff
-               YO: "catmull-rom-spline",
+               CG: "catmull-rom-spline",
```

#### 2884. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26430` → after: `L25961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25961) · [Before (L26430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26430)

```diff
-               YO: "catmull-rom-spline",
+               CG: "catmull-rom-spline",
```

#### 2885. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26436` → after: `L25967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25967) · [Before (L26436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26436)

```diff
-               YO: "catmull-rom-spline",
+               CG: "catmull-rom-spline",
```

#### 2886. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26442` → after: `L25973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25973) · [Before (L26442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26442)

```diff
-               YO: "catmull-rom-spline",
+               CG: "catmull-rom-spline",
```

#### 2887. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26448` → after: `L25979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25979) · [Before (L26448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26448)

```diff
-               YO: "catmull-rom-spline",
+               CG: "catmull-rom-spline",
```

#### 2888. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26456` → after: `L25987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25987) · [Before (L26456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26456)

```diff
-   40138: (WW, iW, OW) => {
+   40172: (RR, JR, GR) => {
```

#### 2889. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26460` → after: `L25991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L25991) · [Before (L26460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26460)

```diff
-     var mW = OW(2365);
+     var yR = GR(2435);
```

#### 2890. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26472` → after: `L26003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26003) · [Before (L26472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26472)

```diff
-         mY: function(WW, OW) {
+         mC: function(RR, GR) {
```

#### 2891. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26481-L26482` → after: `L26012-L26013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26012-L26013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26012-L26013) · [Before (L26481-L26482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26481-L26482)

```diff
-         const OW = WW.EY.Vk(iW.rD),
-           EW = (0, mW.d)().JR(OW[0], OW[1], OW[2]);
+         const GR = RR.zC.vW(JR.Rm),
+           tR = (0, yR.e)().lT(GR[0], GR[1], GR[2]);
```

#### 2892. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26487` → after: `L26018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26018) · [Before (L26487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26487)

```diff
-   40023: (WW, iW, OW) => {
+   40046: (RR, JR, GR) => {
```

#### 2893. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26492-L26499` → after: `L26023-L26030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26023-L26030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26023-L26030) · [Before (L26492-L26499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26492-L26499)

```diff
-     var mW = OW(38369),
-       EW = OW(37575),
-       NW = OW(38235),
-       PW = OW(39083),
-       LW = OW(38532);
-     const cW = NW.fA.Up(),
-       wW = new NW.fA(0, -.5, .5),
-       tW = new NW.fA(.16, .01, .1).scaleInPlace(1.4),
+     var yR = GR(38329),
+       tR = GR(37494),
+       uR = GR(38195),
+       ZR = GR(39055),
+       qR = GR(38496);
+     const iR = uR.Fe.Up(),
+       fR = new uR.Fe(0, -.5, .5),
+       VR = new uR.Fe(.16, .01, .1).scaleInPlace(1.4),
```

#### 2894. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26526-L26528` → after: `L26057-L26059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26057-L26059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26057-L26059) · [Before (L26526-L26528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26526-L26528)

```diff
-         mY: function(iW, OW) {
-           if (OW._targetEId = (0, EW.b)(OW.lineToEId), !WW.EY.YG(OW.rD)) return console.warn(`Skipping line from entity ${OW.rD}, which has no position`), void WW.EY.mV(OW.rD, "lineToEntity");
-           OW._thisPos = NW.fA.Zero(), OW._targetPos = NW.fA.Zero(), OW._forward = NW.fA.Zero(), OW._right = NW.fA.Zero(), OW._up = NW.fA.Zero(), OW._quat = NW.Quaternion.Zero(), OW._displacement = NW.fA.Zero(), OW._cameraOffset = NW.fA.Zero(), OW._initialCameraOffset = NW.fA.Zero … [truncated]
+         mC: function(JR, GR) {
+           if (GR._targetEId = (0, tR.d)(GR.lineToEId), !RR.zC.f6(GR.Rm)) return console.warn(`Skipping line from entity ${GR.Rm}, which has no position`), void RR.zC.Zm(GR.Rm, "lineToEntity");
+           GR._thisPos = uR.Fe.Zero(), GR._targetPos = uR.Fe.Zero(), GR._forward = uR.Fe.Zero(), GR._right = uR.Fe.Zero(), GR._up = uR.Fe.Zero(), GR._quat = uR.Quaternion.Zero(), GR._displacement = uR.Fe.Zero(), GR._cameraOffset = uR.Fe.Zero(), GR._initialCameraOffset = uR.Fe.Zero … [truncated]
```

#### 2895. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26539` → after: `L26070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26070) · [Before (L26539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26539)

```diff
-           }()), OW._line.color = xW, OW._line.Fb = !1, WW.TZ.Wj(OW._line)
+           }()), GR._line.color = wR, GR._line.ZL = !1, RR.lK.iL(GR._line)
```

#### 2896. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26541` → after: `L26072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26072) · [Before (L26541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26541)

```diff
-         mH: function(WW, iW) {
+         eD: function(RR, JR) {
```

#### 2897. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26544` → after: `L26075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26075) · [Before (L26544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26544)

```diff
-         ZY: function(iW, OW) {
+         YC: function(JR, GR) {
```

#### 2898. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26551-L26554` → after: `L26082-L26085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26082-L26085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26082-L26085) · [Before (L26551-L26554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26551-L26554)

```diff
-       const OW = WW.EY.YG(iW._targetEId);
-       if (!OW) return iW._line.WK(!1), void(iW._enabled = null);
-       const mW = iW._thisPos.mZ(WW.EY.YG(iW.rD).Yz);
-       (0, LW.q)(iW._line, mW.x, mW.y, mW.z);
+       const GR = RR.zC.f6(JR._targetEId);
+       if (!GR) return JR._line.JA(!1), void(JR._enabled = null);
+       const yR = JR._thisPos.yK(RR.zC.f6(JR.Rm).B_);
+       (0, qR.i)(JR._line, yR.x, yR.y, yR.z);
```

#### 2899. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26558-L26560` → after: `L26089-L26091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26089-L26091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26089-L26091) · [Before (L26558-L26560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26558-L26560)

```diff
-               PW = WW.EY.MOW(iW._targetEId);
-             if (!PW) return EW.mZ(mW.Yz), sW.NON_HUMANOID;
-             const LW = WW.TZ.nD,
+               ZR = RR.zC.qyR(JR._targetEId);
+             if (!ZR) return tR.yK(yR.B_), WR.NON_HUMANOID;
+             const qR = RR.lK.RP,
```

#### 2900. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26562` → after: `L26093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26093) · [Before (L26562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26562)

```diff
-                 uD: cW
+                 JI: iR
```

#### 2901. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26567` → after: `L26098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26098) · [Before (L26567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26567)

```diff
-               return NW.fA.TransformCoordinatesToRef(wW, WW, EW), sW.THIRD_PERSON_HUMANOID
+               return uR.Fe.TransformCoordinatesToRef(fR, RR, tR), WR.THIRD_PERSON_HUMANOID
```

#### 2902. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26569-L26572` → after: `L26100-L26103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26100-L26103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26100-L26103) · [Before (L26569-L26572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26569-L26572)

```diff
-             if (iW._targetEId !== WW.Dv) return EW.mZ(mW.Yz), EW.y += .8, sW.THIRD_PERSON_HUMANOID;
-             const xW = WW.camera.pitch + WW.camera.bj[0],
-               lW = WW.camera.heading + WW.camera.bj[1],
-               AW = WW.camera.lZ + WW.camera.bj[2];
+             if (JR._targetEId !== RR.WH) return tR.yK(yR.B_), tR.y += .8, WR.THIRD_PERSON_HUMANOID;
+             const wR = RR.camera.pitch + RR.camera.nL[0],
+               rR = RR.camera.heading + RR.camera.nL[1],
+               eR = RR.camera.rK + RR.camera.nL[2];
```

#### 2903. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26574` → after: `L26105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26105) · [Before (L26574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26574)

```diff
-             const bW = WW.EY.YG(WW.camera.lG).Yz;
+             const aR = RR.zC.f6(RR.camera.R6).B_;
```

#### 2904. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26578` → after: `L26109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26109) · [Before (L26578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26578)

```diff
-           iW._targetPos.subtractToRef(OW, iW._displacement), null === iW._enabled ? EW === sW.FIRST_PERSON_HUMANOID ? (iW._initialCameraOffset.HJ(iW._cameraOffset), iW._enabled = !1, iW._line.WK(!1)) : (iW._enabled = !0, iW._line.WK(!0)) : !1 !== iW._enabled || EW === sW.FIRST_PE … [truncated]
+           JR._targetPos.subtractToRef(GR, JR._displacement), null === JR._enabled ? tR === WR.FIRST_PERSON_HUMANOID ? (JR._initialCameraOffset.vN(JR._cameraOffset), JR._enabled = !1, JR._line.JA(!1)) : (JR._enabled = !0, JR._line.JA(!0)) : !1 !== JR._enabled || tR === WR.FIRST_PE … [truncated]
```

#### 2905. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26583-L26584` → after: `L26114-L26115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26114-L26115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26114-L26115) · [Before (L26583-L26584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26583-L26584)

```diff
-         jW = NW.fA.CrossToRef(cW, xW, iW._right).normalizeToRef(iW._right),
-         UW = NW.fA.CrossToRef(xW, jW, iW._up),
+         LR = uR.Fe.CrossToRef(iR, wR, JR._right).normalizeToRef(JR._right),
+         nR = uR.Fe.CrossToRef(wR, LR, JR._up),
```

#### 2906. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26586` → after: `L26117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26117) · [Before (L26586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26586)

```diff
-       (0, LW.r)(iW._line, kW.x, kW.y, kW.z, kW.w);
+       (0, qR.l)(JR._line, UR.x, UR.y, UR.z, UR.w);
```

#### 2907. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26588` → after: `L26119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26119) · [Before (L26588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26588)

```diff
-       iW._line.YZ.set(1, MW, PW)
+       JR._line.MK.set(1, AR, ZR)
```

#### 2908. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26594` → after: `L26125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26125) · [Before (L26594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26594)

```diff
-   40141: (WW, iW, OW) => {
+   40176: (RR, JR, GR) => {
```

#### 2909. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26599-L26601` → after: `L26130-L26132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26130-L26132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26130-L26132) · [Before (L26599-L26601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26599-L26601)

```diff
-     var mW = OW(2350),
-       EW = OW(37626),
-       NW = OW(352),
+     var yR = GR(2421),
+       tR = GR(37537),
+       uR = GR(385),
```

#### 2910. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26603-L26606` → after: `L26134-L26137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26134-L26137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26134-L26137) · [Before (L26603-L26606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26603-L26606)

```diff
-       LW = OW(27),
-       cW = OW(2061),
-       wW = OW(2012),
-       tW = OW(7453),
+       qR = GR(32),
+       iR = GR(2163),
+       fR = GR(2102),
+       VR = GR(7588),
```

#### 2911. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26608-L26611` → after: `L26139-L26142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26139-L26142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26139-L26142) · [Before (L26608-L26611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26608-L26611)

```diff
-       xW = OW(745),
-       lW = OW(2365),
-       AW = OW(1217),
-       bW = OW(344);
+       wR = GR(798),
+       rR = GR(2435),
+       eR = GR(1317),
+       aR = GR(377);
```

#### 2912. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26616` → after: `L26147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26147) · [Before (L26616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26616)

```diff
-       return (0, xW.q)(ZW.d.get("clientEscMenuOptions").cameraFOV)
+       return (0, wR.v)(KR.d.get("clientEscMenuOptions").cameraFOV)
```

#### 2913. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26623` → after: `L26154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26154) · [Before (L26623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26623)

```diff
-         const iW = (0, lW.d)().getEyeCappingBodyHeight(WW.Dv);
+         const JR = (0, rR.e)().getEyeCappingBodyHeight(RR.WH);
```

#### 2914. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26625-L26626` → after: `L26156-L26157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26156-L26157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26156-L26157) · [Before (L26625-L26626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26625-L26626)

```diff
-         const OW = WW.TZ.o4();
-         return (0, xW.m)(iW, OW.near, OW.fov, (0, xW.l)(WW.TZ.engine))
+         const GR = RR.lK.Z2();
+         return (0, wR.r)(JR, GR.near, GR.fov, (0, wR.n)(RR.lK.engine))
```

#### 2915. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26628-L26629` → after: `L26159-L26160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26159-L26160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26159-L26160) · [Before (L26628-L26629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26628-L26629)

```diff
-       return cW.d.subscribe("movementBasedFovScale", (WW => {
-         iW = "number" === typeof WW && isFinite(WW) ? WW : 1
+       return iR.c.subscribe("movementBasedFovScale", (RR => {
+         JR = "number" === typeof RR && isFinite(RR) ? RR : 1
```

#### 2916. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26632-L26634` → after: `L26163-L26165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26163-L26165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26163-L26165) · [Before (L26632-L26634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26632-L26634)

```diff
-       })), LW.l.subscribe(`entityScale|${WW.Dv}`, (function() {
-         const iW = WW.EY.uOW(WW.camera.lG);
-         iW && ((0, lW.d)().removeFromEyeHeightCache(WW.Dv), iW.offset[1] = Math.min((0, lW.d)().getLifeformEyeHeight(WW.Dv), OW()))
+       })), qR.n.subscribe(`entityScale|${RR.WH}`, (function() {
+         const JR = RR.zC.nyR(RR.camera.R6);
+         JR && ((0, rR.e)().removeFromEyeHeightCache(RR.WH), JR.offset[1] = Math.min((0, rR.e)().getLifeformEyeHeight(RR.WH), GR()))
```

#### 2917. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26640` → after: `L26171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26171) · [Before (L26640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26640)

```diff
-           fovMultiplier: new EW.j,
+           fovMultiplier: new tR.k,
```

#### 2918. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26647` → after: `L26178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26178) · [Before (L26647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26647)

```diff
-         ZY: function(mW, EW) {
+         YC: function(yR, tR) {
```

#### 2919. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26649-L26653` → after: `L26180-L26184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26180-L26184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26180-L26184) · [Before (L26649-L26653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26649-L26653)

```diff
-             const EW = WW.EY.uOW(WW.camera.lG),
-               LW = WW.EY.getState(NW.rD, "movement"),
-               cW = WW.EY.HiW(NW.rD).physicsState,
-               kW = WW.EY.jB(NW.rD);
-             PW().set(jW, kW.Sj[0], cW.type === tW.p.GLIDER ? kW.Sj[1] : 0, kW.Sj[2]);
+             const tR = RR.zC.nyR(RR.camera.R6),
+               qR = RR.zC.getState(uR.Rm, "movement"),
+               iR = RR.zC.aGR(uR.Rm).physicsState,
+               UR = RR.zC.Lk(uR.Rm);
+             ZR().set(LR, UR.BL[0], iR.type === VR.k.GLIDER ? UR.BL[1] : 0, UR.BL[2]);
```

#### 2920. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26655` → after: `L26186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26186) · [Before (L26655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26655)

```diff
-               MW = 4 * (LW._flying ? WW.gM.flySpeedMultiplier : 1);
+               AR = 4 * (qR._flying ? RR.jW.flySpeedMultiplier : 1);
```

#### 2921. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26657-L26658` → after: `L26188-L26189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26188-L26189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26188-L26189) · [Before (L26657-L26658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26657-L26658)

```diff
-             sW > MW && (KW += Math.min(.033 * (sW - 4), .5) * iW), KW *= NW.fovMultiplier.getTotalMultipliedVal(), NW.zoomKeyPressed && WW.gM.canUseZoomKey && (KW *= .2), KW *= ZW.d.get("clientEscMenuOptions").cameraFOV / 100, KW = Math.min(KW, xW.g), NW.movementBasedFov = NW.mov … [truncated]
-             const SW = (0, lW.d)().getLifeformEyeHeight(NW.rD);
+             WR > AR && (CR += Math.min(.033 * (WR - 4), .5) * JR), CR *= uR.fovMultiplier.getTotalMultipliedVal(), uR.zoomKeyPressed && RR.jW.canUseZoomKey && (CR *= .2), CR *= KR.d.get("clientEscMenuOptions").cameraFOV / 100, CR = Math.min(CR, wR.h), uR.movementBasedFov = uR.mov … [truncated]
+             const XR = (0, rR.e)().getLifeformEyeHeight(uR.Rm);
```

#### 2922. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26660-L26661` → after: `L26191-L26192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26191-L26192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26191-L26192) · [Before (L26660-L26661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26660-L26661)

```diff
-               const iW = (0, lW.d)().getIsStoodOnBlock(NW.rD);
-               0 === sW || !1 === iW || 0 !== WW.camera.yG ? this.state.bobbleProgress = 0 : this.state.bobbleProgress += mW / (140 - 2 * (0, wW.f)(sW, 1, 100));
+               const JR = (0, rR.e)().getIsStoodOnBlock(uR.Rm);
+               0 === WR || !1 === JR || 0 !== RR.camera.w6 ? this.state.bobbleProgress = 0 : this.state.bobbleProgress += yR / (140 - 2 * (0, fR.e)(WR, 1, 100));
```

#### 2923. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26663` → after: `L26194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26194) · [Before (L26663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26663)

```diff
-               this.state.bobbleValue = (0, AW.Eb)(this.state.bobbleValue, OW, .1);
+               this.state.bobbleValue = (0, eR.lb)(this.state.bobbleValue, GR, .1);
```

#### 2924. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26667` → after: `L26198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26198) · [Before (L26667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26667)

```diff
-             const YW = (0, lW.d)().lF(NW.rD),
+             const MR = (0, rR.e)().p_(uR.Rm),
```

#### 2925. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26670` → after: `L26201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26201) · [Before (L26670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26670)

```diff
-               for (let WW = 0; WW < 3; WW++) EW.offset[WW] = (0, AW.Eb)(EW.offset[WW], UW[WW], yW);
+               for (let RR = 0; RR < 3; RR++) tR.offset[RR] = (0, eR.lb)(tR.offset[RR], nR[RR], BR);
```

#### 2926. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26679` → after: `L26210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26210) · [Before (L26679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26679)

```diff
-   40149: (WW, iW, OW) => {
+   40183: (RR, JR, GR) => {
```

#### 2927. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26683-L26684` → after: `L26214-L26215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26214-L26215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26214-L26215) · [Before (L26683-L26684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26683-L26684)

```diff
-     var mW = OW(5615),
-       EW = OW(182);
+     var yR = GR(5742),
+       tR = GR(203);
```

#### 2928. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26710-L26713` → after: `L26241-L26244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26241-L26244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26241-L26244) · [Before (L26710-L26713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26710-L26713)

```diff
-           const wW = WW.EY.Vk(WW.Dv),
-             tW = WW.camera.uF(),
-             ZW = WW.camera.SF();
-           iW[0] = wW[2], iW[1] = wW[1] + EW.f.ZU * EW.f.playerEyeToHeightRatio, iW[2] = wW[0], iW[3] = tW[2], iW[4] = tW[1], iW[5] = tW[0], iW[6] = ZW[2], iW[7] = ZW[1], iW[8] = ZW[0];
+           const fR = RR.zC.vW(RR.WH),
+             VR = RR.camera.m_(),
+             KR = RR.camera.N_();
+           JR[0] = fR[2], JR[1] = fR[1] + tR.g.Kn * tR.g.playerEyeToHeightRatio, JR[2] = fR[0], JR[3] = VR[2], JR[4] = VR[1], JR[5] = VR[0], JR[6] = KR[2], JR[7] = KR[1], JR[8] = KR[0];
```

#### 2929. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26719` → after: `L26250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26250) · [Before (L26719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26719)

```diff
-         ZY: null
+         YC: null
```

#### 2930. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26723` → after: `L26254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26254) · [Before (L26723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26723)

```diff
-   40152: (WW, iW, OW) => {
+   40185: (RR, JR, GR) => {
```

#### 2931. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26727` → after: `L26258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26258) · [Before (L26727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26727)

```diff
-     var mW = OW(352),
+     var yR = GR(385),
```

#### 2932. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26729-L26730` → after: `L26260-L26261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26260-L26261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26260-L26261) · [Before (L26729-L26730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26729-L26730)

```diff
-       NW = OW(27),
-       PW = OW(2061);
+       uR = GR(32),
+       ZR = GR(2163);
```

#### 2933. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26747-L26748` → after: `L26278-L26279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26278-L26279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26278-L26279) · [Before (L26747-L26748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26747-L26748)

```diff
-         mY: function(iW, OW) {
-           OW.thisPlayerTeleportSub = NW.l.subscribe(`otherPlayerTeleported|${iW}`, (iW => {
+         mC: function(JR, GR) {
+           GR.thisPlayerTeleportSub = uR.n.subscribe(`otherPlayerTeleported|${JR}`, (JR => {
```

#### 2934. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26752` → after: `L26283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26283) · [Before (L26752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26752)

```diff
-             const EW = WW.EY.Vk(WW.Dv);
+             const tR = RR.zC.vW(RR.WH);
```

#### 2935. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26754` → after: `L26285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26285) · [Before (L26754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26754)

```diff
-           })), OW.localPlayerTeleportSub = NW.l.subscribe("localPlayerTeleported", (mW => {
+           })), GR.localPlayerTeleportSub = uR.n.subscribe("localPlayerTeleported", (yR => {
```

#### 2936. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26760` → after: `L26291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26291) · [Before (L26760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26760)

```diff
-             const PW = WW.EY.getState(iW, "smoothToServerPos");
+             const ZR = RR.zC.getState(JR, "smoothToServerPos");
```

#### 2937. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26764-L26765` → after: `L26295-L26296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26295-L26296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26295-L26296) · [Before (L26764-L26765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26764-L26765)

```diff
-         mH: function(iW, OW) {
-           NW.l.unsubscribe(OW.thisPlayerTeleportSub), NW.l.unsubscribe(OW.localPlayerTeleportSub);
+         eD: function(JR, GR) {
+           uR.n.unsubscribe(GR.thisPlayerTeleportSub), uR.n.unsubscribe(GR.localPlayerTeleportSub);
```

#### 2938. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26767-L26768` → after: `L26298-L26299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26298-L26299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26298-L26299) · [Before (L26767-L26768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26767-L26768)

```diff
-             EY: mW
-           } = WW, EW = mW.jOW(iW);
+             zC: yR
+           } = RR, tR = yR.yyR(JR);
```

#### 2939. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26770` → after: `L26301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26301) · [Before (L26770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26770)

```diff
-           const PW = mW.getState(iW, mW.names.nZ);
+           const ZR = yR.getState(JR, yR.names.vK);
```

#### 2940. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26774` → after: `L26305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26305) · [Before (L26774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26774)

```diff
-           const mW = WW.EY.Vk(WW.Dv);
+           const yR = RR.zC.vW(RR.WH);
```

#### 2941. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26785` → after: `L26316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26316) · [Before (L26785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26785)

```diff
-             const iW = WW.EY.getState(EW.rD, "smoothToServerPos");
+             const JR = RR.zC.getState(tR.Rm, "smoothToServerPos");
```

#### 2942. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26796-L26797` → after: `L26327-L26328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26327-L26328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26327-L26328) · [Before (L26796-L26797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26796-L26797)

```diff
-         EY: mW
-       } = WW, EW = mW.jOW(iW.rD);
+         zC: yR
+       } = RR, tR = yR.yyR(JR.Rm);
```

#### 2943. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26799` → after: `L26330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26330) · [Before (L26799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26799)

```diff
-       const NW = mW.getState(iW.rD, mW.names.nZ);
+       const uR = yR.getState(JR.Rm, yR.names.vK);
```

#### 2944. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26815-L26816` → after: `L26346-L26347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26346-L26347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26346-L26347) · [Before (L26815-L26816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26815-L26816)

```diff
-         const EW = null === (OW = WW.EY.aiW(WW.Dv)) || void 0 === OW ? void 0 : OW.ridingVehicleEId;
-         return !!EW && EW === (null === (mW = WW.EY.aiW(iW.rD)) || void 0 === mW ? void 0 : mW.ridingVehicleEId)
+         const tR = null === (GR = RR.zC.oGR(RR.WH)) || void 0 === GR ? void 0 : GR.ridingVehicleEId;
+         return !!tR && tR === (null === (yR = RR.zC.oGR(JR.Rm)) || void 0 === yR ? void 0 : yR.ridingVehicleEId)
```

#### 2945. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26818` → after: `L26349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26349) · [Before (L26818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26818)

```diff
-         const iW = PW.d.get("gameCamera");
+         const JR = ZR.c.get("gameCamera");
```

#### 2946. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26820` → after: `L26351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26351) · [Before (L26820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26820)

```diff
-       }(iW.rD)
+       }(JR.Rm)
```

#### 2947. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26831` → after: `L26362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26362) · [Before (L26831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26831)

```diff
-   40157: (WW, iW, OW) => {
+   40188: (RR, JR, GR) => {
```

#### 2948. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26837` → after: `L26368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26368) · [Before (L26837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26837)

```diff
-     var mW = OW(352),
+     var yR = GR(385),
```

#### 2949. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26839-L26844` → after: `L26370-L26375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26370-L26375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26370-L26375) · [Before (L26839-L26844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26839-L26844)

```diff
-       NW = OW(37559),
-       PW = OW(37555),
-       LW = OW(5725),
-       cW = OW(2365),
-       wW = OW(39183),
-       tW = OW(39255);
+       uR = GR(37470),
+       ZR = GR(37466),
+       qR = GR(5844),
+       iR = GR(2435),
+       fR = GR(39153),
+       VR = GR(39227);
```

#### 2950. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26857` → after: `L26388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26388) · [Before (L26857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26857)

```diff
-         mY: (WW, iW) => {
+         mC: (RR, JR) => {
```

#### 2951. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26860` → after: `L26391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26391) · [Before (L26860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26860)

```diff
-         mH: null,
+         eD: null,
```

#### 2952. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26862` → after: `L26393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26393) · [Before (L26862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26862)

```diff
-           const mW = (0, cW.d)();
+           const yR = (0, iR.e)();
```

#### 2953. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26864-L26865` → after: `L26395-L26396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26395-L26396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26395-L26396) · [Before (L26864-L26865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26864-L26865)

```diff
-             if (!WW.EY.jOW(cW.rD).isAlive) continue;
-             const iW = WW.EY.HiW(cW.rD);
+             if (!RR.zC.yyR(iR.Rm).isAlive) continue;
+             const JR = RR.zC.aGR(iR.Rm);
```

#### 2954. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26868-L26870` → after: `L26399-L26401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26399-L26401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26399-L26401) · [Before (L26868-L26870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26868-L26870)

```diff
-             if (WW.bloxd.getResolvedPhysicsSettings(cW.rD, OW).disableFootstepSounds) continue;
-             const xW = WW.EY.Vk(cW.rD);
-             let AW = mW.Yk(Math.floor(xW[0]), Math.ceil(xW[1]) - 1, Math.floor(xW[2]));
+             if (RR.bloxd.getResolvedPhysicsSettings(iR.Rm, GR).disableFootstepSounds) continue;
+             const wR = RR.zC.vW(iR.Rm);
+             let eR = yR.rW(Math.floor(wR[0]), Math.ceil(wR[1]) - 1, Math.floor(wR[2]));
```

#### 2955. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26875` → after: `L26406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26406) · [Before (L26875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26875)

```diff
-             const bW = EW().TP(cW.lastPos, xW);
+             const aR = tR().xZ(iR.lastPos, wR);
```

#### 2956. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26877` → after: `L26408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26408) · [Before (L26877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26877)

```diff
-             const jW = (0, tW.getRigFootfallPhase)(WW, cW.rD);
+             const LR = (0, VR.getRigFootfallPhase)(RR, iR.Rm);
```

#### 2957. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26879-L26882` → after: `L26410-L26413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26410-L26413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26410-L26413) · [Before (L26879-L26882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26879-L26882)

```diff
-             const UW = Number.isNaN(jW) ? cW.distSinceLastSound > ZW : cW.stepPending;
-             if (iW.isOnGround() && 0 !== AW && (UW && !LW.j[AW].dl)) {
-               const WW = (0, NW.h)(`step_${(0,wW.b)(AW,!1)}`);
-               PW.c.play(WW, .15), cW.distSinceLastSound = 0, cW.stepPending = !1
+             const nR = Number.isNaN(LR) ? iR.distSinceLastSound > KR : iR.stepPending;
+             if (JR.isOnGround() && 0 !== eR && (nR && !qR.l[eR].Nr)) {
+               const RR = (0, uR.f)(`step_${(0,fR.d)(eR,!1)}`);
+               ZR.d.play(RR, .15), iR.distSinceLastSound = 0, iR.stepPending = !1
```

#### 2958. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26895` → after: `L26426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26426) · [Before (L26895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26895)

```diff
-   40160: (WW, iW, OW) => {
+   40193: (RR, JR, GR) => {
```

#### 2959. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26901-L26902` → after: `L26432-L26433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26432-L26433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26432-L26433) · [Before (L26901-L26902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26901-L26902)

```diff
-         mY: function(WW, iW) {},
-         mH: function(WW, iW) {},
+         mC: function(RR, JR) {},
+         eD: function(RR, JR) {},
```

#### 2960. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26910` → after: `L26441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26441) · [Before (L26910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26910)

```diff
-   40055: (WW, iW, OW) => {
+   40089: (RR, JR, GR) => {
```

#### 2961. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26915-L26916` → after: `L26446-L26447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26446-L26447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26446-L26447) · [Before (L26915-L26916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26915-L26916)

```diff
-     var mW = OW(2350),
-       EW = OW(352),
+     var yR = GR(2421),
+       tR = GR(385),
```

#### 2962. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26918-L26922` → after: `L26449-L26453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26449-L26453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26449-L26453) · [Before (L26918-L26922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26918-L26922)

```diff
-       PW = OW(2478),
-       LW = OW(40036),
-       cW = OW(1250),
-       wW = OW(38822),
-       tW = OW(38782);
+       ZR = GR(2532),
+       qR = GR(40059),
+       iR = GR(1349),
+       fR = GR(38818),
+       VR = GR(38779);
```

#### 2963. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26931` → after: `L26462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26462) · [Before (L26931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26931)

```diff
-           if (console.assert(1 === OW.length, "There should only be one entity with updateServerOfMovement."), WW.EY.jOW(WW.Dv).isAlive)
+           if (console.assert(1 === GR.length, "There should only be one entity with updateServerOfMovement."), RR.zC.yyR(RR.WH).isAlive)
```

#### 2964. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26934` → after: `L26465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26465) · [Before (L26934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26934)

```diff
-               const iW = WW.EY.YG(WW.Dv).JiW;
+               const JR = RR.zC.f6(RR.WH).rGR;
```

#### 2965. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26936-L26937` → after: `L26467-L26468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26467-L26468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26467-L26468) · [Before (L26936-L26937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26936-L26937)

```diff
-               const OW = WW.EY.aiW(LW.rD),
-                 xW = WW.EY.HiW(LW.rD),
+               const GR = RR.zC.oGR(qR.Rm),
+                 wR = RR.zC.aGR(qR.Rm),
```

#### 2966. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26939-L26956` → after: `L26470-L26487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26470-L26487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26470-L26487) · [Before (L26939-L26956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26939-L26956)

```diff
-                   bL: iW[0],
-                   jL: iW[1],
-                   UL: iW[2],
-                   sL: (0, wW.s)(WW.bloxd.getResolvedPhysicsSettings(LW.rD, xW.physicsState), xW.steeringHeading, tW.b.getPlayerFacingHeading(WW)),
-                   kL: OW.heading,
-                   ML: OW.speed,
-                   KL: OW.jumping,
-                   YL: OW.crouching,
-                   yL: OW.cameraPitch,
-                   TL: OW.armSwinging,
-                   JL: null !== (EW = WW.jiW) && void 0 !== EW ? EW : NW().copy(ZW, WW.camera.uF()),
-                   hL: OW.cameraDirection,
-                   HL: (0, mW.getLastReceivedPacketId)(),
-                   nL: WW.Wl,
-                   uL: OW.bunnyHopDisabled,
-                   oL: OW.toggleFly,
- ... (2 more removed lines; see GitHub link above)
+                   Aq: JR[0],
+                   Cq: JR[1],
+                   Xq: JR[2],
+                   Bq: (0, fR.t)(RR.bloxd.getResolvedPhysicsSettings(qR.Rm, wR.physicsState), wR.steeringHeading, VR.e.getPlayerFacingHeading(RR)),
+                   Mq: GR.heading,
+                   lq: GR.speed,
+                   gq: GR.jumping,
+                   bq: GR.crouching,
+                   vq: GR.cameraPitch,
+                   Oq: GR.armSwinging,
+                   xq: null !== (tR = RR.yGR) && void 0 !== tR ? tR : uR().copy(KR, RR.camera.m_()),
+                   Nq: GR.cameraDirection,
+                   Dq: (0, yR.getLastReceivedPacketId)(),
+                   Hq: RR.Fw,
+                   oq: GR.bunnyHopDisabled,
+                   cq: GR.toggleFly,
+ ... (2 more added lines; see GitHub link above)
```

#### 2967. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26958` → after: `L26489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26489) · [Before (L26958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26958)

```diff
-               isNaN(lW.ML) && (console.error("speed was NaN! Setting to 0"), lW.ML = 0);
+               isNaN(rR.lq) && (console.error("speed was NaN! Setting to 0"), rR.lq = 0);
```

#### 2968. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26972` → after: `L26503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26503) · [Before (L26972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26972)

```diff
-               AW.pitch = WW.camera.pitch, bW.speed = OW.speed, 0 === AW.pitch && (bW.speed *= 1.3), (0, mW.sendColyMessage)(PW.Jh, lW)
+               eR.pitch = RR.camera.pitch, aR.speed = GR.speed, 0 === eR.pitch && (aR.speed *= 1.3), (0, yR.sendColyMessage)(ZR.$h, rR)
```

#### 2969. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26982` → after: `L26513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26513) · [Before (L26982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26982)

```diff
-   40319: (WW, iW, OW) => {
+   40371: (RR, JR, GR) => {
```

#### 2970. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26985` → after: `L26516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26516) · [Before (L26985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26985)

```diff
-       e: () => sW
+       f: () => WR
```

#### 2971. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26987-L26998` → after: `L26518-L26529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26518-L26529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26518-L26529) · [Before (L26987-L26998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L26987-L26998)

```diff
-     var mW = OW(182),
-       EW = OW(2381),
-       NW = OW(1303),
-       PW = OW(1896),
-       LW = OW(35078),
-       cW = OW(5203),
-       wW = OW(2372),
-       tW = OW(4816),
-       ZW = OW(37260),
-       xW = OW(37717),
-       lW = OW(37724),
-       AW = OW(27);
+     var yR = GR(203),
+       tR = GR(2448),
+       uR = GR(1406),
+       ZR = GR(1974),
+       qR = GR(34980),
+       iR = GR(5310),
+       fR = GR(2445),
+       VR = GR(4928),
+       KR = GR(37178),
+       wR = GR(37627),
+       rR = GR(37633),
+       eR = GR(32);
```

#### 2972. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27005` → after: `L26536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26536) · [Before (L27005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27005)

```diff
-       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lW.u,
+       let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rR.A,
```

#### 2973. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27020` → after: `L26551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26551) · [Before (L27020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27020)

```diff
-         sW = new lW.b(PW, (() => 0), (WW => {
+         WR = new rR.e(ZR, (() => 0), (RR => {
```

#### 2974. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27025` → after: `L26556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26556) · [Before (L27025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27025)

```diff
-           const [iW, OW] = WW.oZ.VJ, EW = Math.max(mW.f.defaultChunkHorizAddDistance, iW - bW);
+           const [JR, GR] = RR.NK.FN, tR = Math.max(yR.g.defaultChunkHorizAddDistance, JR - aR);
```

#### 2975. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27031` → after: `L26562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26562) · [Before (L27031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27031)

```diff
-           return (0, cW.l)(EW), (0, cW.d)(WW.oZ, NW), (0, xW.r)(...(0, cW.g)(NW))
+           return (0, iR.r)(tR), (0, iR.e)(RR.NK, uR), (0, wR.o)(...(0, iR.i)(uR))
```

#### 2976. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27033` → after: `L26564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26564) · [Before (L27033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27033)

```diff
-         return null === OW ? (0, lW.h)(iW) && (LW = iW) : NW = -1 / 0, OW
+         return null === GR ? (0, rR.o)(JR) && (qR = JR) : uR = -1 / 0, GR
```

#### 2977. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27035-L27036` → after: `L26566-L26567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26566-L26567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26566-L26567) · [Before (L27035-L27036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27035-L27036)

```diff
-         1 === OW ? KW("shed", WW, mW, iW.memoryBytes()) : console.warn(`wasm memory: shed again (${WW}): shed ${OW}`, mW.wasmMemoryShed)
-       }), (() => WW.oZ.VJ[0])), (0, EW.Y)((() => {
+         1 === GR ? CR("shed", RR, yR, JR.memoryBytes()) : console.warn(`wasm memory: shed again (${RR}): shed ${GR}`, yR.wasmMemoryShed)
+       }), (() => RR.NK.FN[0])), (0, tR.M)((() => {
```

#### 2978. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27043-L27045` → after: `L26574-L26576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26574-L26576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26574-L26576) · [Before (L27043-L27045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27043-L27045)

```diff
-       const MW = AW.l.subscribe("appManagerUpdated|gameState", (WW => {
-         "inGame" === WW && (AW.l.unsubscribe(MW), (0, tW.e)((() => {
-           sW.reserveAtJoin((0, lW.f)(iW.memoryBytes())), ZW()
+       const AR = eR.n.subscribe("appManagerUpdated|gameState", (RR => {
+         "inGame" === RR && (eR.n.unsubscribe(AR), (0, VR.e)((() => {
+           WR.reserveAtJoin((0, rR.k)(JR.memoryBytes())), KR()
```

#### 2979. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27069-L27071` → after: `L26600-L26602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26600-L26602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26600-L26602) · [Before (L27069-L27071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27069-L27071)

```diff
-         cW = `${(0,lW.w)(iW)} (${iW}): ${EW}`,
-         wW = `wasm_memory_${WW}_${iW}_m${(0,ZW.h)(mW)}`;
-       (0, NW.ub)(new Error(cW), {
+         iR = `${(0,rR.D)(JR)} (${JR}): ${tR}`,
+         fR = `wasm_memory_${RR}_${JR}_m${(0,KR.g)(yR)}`;
+       (0, uR.ma)(new Error(iR), {
```

#### 2980. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27079` → after: `L26610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26610) · [Before (L27079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27079)

```diff
-   39923: (WW, iW, OW) => {
+   39924: (RR, JR, GR) => {
```

#### 2981. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27081-L27082` → after: `L26612-L26613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26612-L26613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26612-L26613) · [Before (L27081-L27082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27081-L27082)

```diff
-       c: () => NW,
-       g: () => PW
+       b: () => uR,
+       f: () => ZR
```

#### 2982. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27084-L27085` → after: `L26615-L26616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26615-L26616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26615-L26616) · [Before (L27084-L27085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27084-L27085)

```diff
-     var mW = OW(38443),
-       EW = OW(3827);
+     var yR = GR(38409),
+       tR = GR(3928);
```

#### 2983. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27090-L27091` → after: `L26621-L26622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26621-L26622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26621-L26622) · [Before (L27090-L27091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27090-L27091)

```diff
-       } = WW.TZ;
-       return "DA" in iW && iW._gl.isContextLost()
+       } = RR.lK;
+       return "Ye" in JR && JR._gl.isContextLost()
```

#### 2984. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27098` → after: `L26629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26629) · [Before (L27098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27098)

```diff
-       if (!("jD" in WW)) {
+       if (!("YH" in RR)) {
```

#### 2985. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27101` → after: `L26632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26632) · [Before (L27101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27101)

```diff
-         const WW = (0, EW.o)();
+         const RR = (0, tR.j)();
```

#### 2986. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27104` → after: `L26635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26635) · [Before (L27104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27104)

```diff
-           LW = (0, mW.c)(iW);
+           qR = (0, yR.e)(JR);
```

#### 2987. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27109-L27110` → after: `L26640-L26641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26640-L26641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26640-L26641) · [Before (L27109-L27110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27109-L27110)

```diff
-       const PW = WW.VA(),
-         LW = PW.DA.add((() => {
+       const ZR = RR.ke(),
+         qR = ZR.Ye.add((() => {
```

#### 2988. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27117-L27118` → after: `L26648-L26649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26648-L26649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26648-L26649) · [Before (L27117-L27118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27117-L27118)

```diff
-         cW = WW.jD.addOnce((() => {
-           PW.DA.remove(LW)
+         iR = RR.YH.addOnce((() => {
+           ZR.Ye.remove(qR)
```

#### 2989. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27121` → after: `L26652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26652) · [Before (L27121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27121)

```diff
-         PW.DA.remove(LW), WW.jD.remove(cW)
+         ZR.Ye.remove(qR), RR.YH.remove(iR)
```

#### 2990. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27125` → after: `L26656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26656) · [Before (L27125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27125)

```diff
-   40011: (WW, iW, OW) => {
+   40035: (RR, JR, GR) => {
```

#### 2991. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27127` → after: `L26658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26658) · [Before (L27127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27127)

```diff
-       b: () => xW
+       c: () => wR
```

#### 2992. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27129-L27133` → after: `L26660-L26664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26660-L26664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26660-L26664) · [Before (L27129-L27133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27129-L27133)

```diff
-     var mW = OW(38379),
-       EW = OW(38493),
-       NW = OW(38472),
-       PW = OW(38405),
-       LW = OW(38388);
+     var yR = GR(38349),
+       tR = GR(38456),
+       uR = GR(38437),
+       ZR = GR(38366),
+       qR = GR(38358);
```

#### 2993. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27136` → after: `L26667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26667) · [Before (L27136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27136)

```diff
-       return `\n\t\t\t\t${(0,LW.v)(WW,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       return `\n\t\t\t\t${(0,qR.y)(RR,"mat2","rotate",[{name:"ang",type:"float"}],`\
```

#### 2994. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27138` → after: `L26669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26669) · [Before (L27138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27138)

```diff
-         (0, LW.B)(WW, "float", "s", "sin(ang)")
+         (0, qR.G)(RR, "float", "s", "sin(ang)")
```

#### 2995. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27141` → after: `L26672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26672) · [Before (L27141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27141)

```diff
-         (0, LW.B)(WW, "float", "c", "cos(ang)")
+         (0, qR.G)(RR, "float", "c", "cos(ang)")
```

#### 2996. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27144` → after: `L26675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26675) · [Before (L27144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27144)

```diff
-         (0, LW.m)(WW, "mat2", "c", "s", "-s", "c")
+         (0, qR.n)(RR, "mat2", "c", "s", "-s", "c")
```

#### 2997. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27150-L27151` → after: `L26681-L26682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26681-L26682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26681-L26682) · [Before (L27150-L27151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27150-L27151)

```diff
-       let OW = (0, LW.Ib)(WW, "skele" + (iW - 1));
-       for (let EW = iW - 2; EW >= 0; EW--) OW = (0, LW.yb)(WW, `boneIdx == ${EW}`, (0, LW.Ib)(WW, `skele${EW}`), OW);
+       let GR = (0, qR.Jb)(RR, "skele" + (JR - 1));
+       for (let tR = JR - 2; tR >= 0; tR--) GR = (0, qR.Ab)(RR, `boneIdx == ${tR}`, (0, qR.Jb)(RR, `skele${tR}`), GR);
```

#### 2998. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27153` → after: `L26684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26684) · [Before (L27153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27153)

```diff
-       return `\n\t\t\t\t${(0,LW.B)(WW,"int","boneIdx",(0,LW.Db)(WW,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,LW.B)(WW,"vec3","bone",OW)}\n\t\t\t\t${(0,LW.B)(WW,"vec2","pivot",(0,LW.m)(WW,"vec2","0.0",`${(0,LW.Pb)(WW,"position")}.z`))}\n\t\t\t\t${(0,LW.ab)(WW)?`posit … [truncated]
+       return `\n\t\t\t\t${(0,qR.G)(RR,"int","boneIdx",(0,qR.Fb)(RR,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,qR.G)(RR,"vec3","bone",GR)}\n\t\t\t\t${(0,qR.G)(RR,"vec2","pivot",(0,qR.n)(RR,"vec2","0.0",`${(0,qR.Nb)(RR,"position")}.z`))}\n\t\t\t\t${(0,qR.db)(RR)?`posit … [truncated]
```

#### 2999. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27157` → after: `L26688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26688) · [Before (L27157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27157)

```diff
-       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,LW.m)(WW,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,qR.n)(RR,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 3000. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27163` → after: `L26694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26694) · [Before (L27163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27163)

```diff
-         mZ(WW, iW) {
+         yK(RR, JR) {
```

#### 3001. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27172-L27174` → after: `L26703-L26705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26703-L26705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26703-L26705) · [Before (L27172-L27174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27172-L27174)

```diff
-           ...(0, mW.c)("CAPE"),
-           BLOXD_CAPE_BONES: `${WW}`,
-           BLOXD_CAPE_MAX_Y: (0, EW.ob)(iW)
+           ...(0, yR.e)("CAPE"),
+           BLOXD_CAPE_BONES: `${RR}`,
+           BLOXD_CAPE_MAX_Y: (0, tR.eb)(JR)
```

#### 3002. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27180` → after: `L26711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26711) · [Before (L27180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27180)

```diff
-               name: `skele${OW}`,
+               name: `skele${GR}`,
```

#### 3003. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27187` → after: `L26718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26718) · [Before (L27187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27187)

```diff
-           for (let iW = 0; iW < this.skeleLen; iW++) WW.updateVector3(`skele${iW}`, ZW.mZ(this.skele, 3 * iW))
+           for (let JR = 0; JR < this.skeleLen; JR++) RR.updateVector3(`skele${JR}`, KR.yK(this.skele, 3 * JR))
```

#### 3004. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27200` → after: `L26731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26731) · [Before (L27200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27200)

```diff
-     (0, PW.m)(xW)
+     (0, ZR.n)(wR)
```

#### 3005. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27202` → after: `L26733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26733) · [Before (L27202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27202)

```diff
-   39915: (WW, iW, OW) => {
+   39922: (RR, JR, GR) => {
```

#### 3006. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27204-L27205` → after: `L26735-L26736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26735-L26736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26735-L26736) · [Before (L27204-L27205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27204-L27205)

```diff
-       b: () => tW,
-       d: () => ZW
+       e: () => VR,
+       f: () => KR
```

#### 3007. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27207-L27210` → after: `L26738-L26741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26738-L26741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26738-L26741) · [Before (L27207-L27210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27207-L27210)

```diff
-     var mW = OW(38379),
-       EW = OW(38472),
-       NW = OW(38388),
-       PW = OW(38405);
+     var yR = GR(38349),
+       tR = GR(38437),
+       uR = GR(38358),
+       ZR = GR(38366);
```

#### 3008. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27225` → after: `L26756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26756) · [Before (L27225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27225)

```diff
-         defines: () => (0, mW.c)("TEXT_SAMPLER"),
+         defines: () => (0, yR.e)("TEXT_SAMPLER"),
```

#### 3009. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27233-L27236` → after: `L26764-L26767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26764-L26767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26764-L26767) · [Before (L27233-L27236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27233-L27236)

```diff
-           const OW = (0, NW.K)(iW, `vec4 ${wW}(sampler2D s, vec2 uv, float bias)`, `fn ${wW}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
-             mW = (0, NW.K)(iW, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
-             EW = `${(0,NW.W)(iW,"vDiffuseUV")} + uvOffset`,
-             PW = (0, NW.K)(iW, `${wW}(diffuseSampler, ${EW}, ${(0,NW.Ib)(iW,LW)})`, `${wW}(diffuseSampler, diffuseSamplerSampler, ${EW}, ${(0,NW.Ib)(iW,LW)})`);
+           const GR = (0, uR.M)(JR, `vec4 ${fR}(sampler2D s, vec2 uv, float bias)`, `fn ${fR}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
+             yR = (0, uR.M)(JR, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
+             tR = `${(0,uR.V)(JR,"vDiffuseUV")} + uvOffset`,
+             ZR = (0, uR.M)(JR, `${fR}(diffuseSampler, ${tR}, ${(0,uR.Jb)(JR,qR)})`, `${fR}(diffuseSampler, diffuseSamplerSampler, ${tR}, ${(0,uR.Jb)(JR,qR)})`);
```

#### 3010. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27238-L27239` → after: `L26769-L26770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26769-L26770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26769-L26770) · [Before (L27238-L27239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27238-L27239)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${OW} {\n\t\t\t\t\t${(0,NW.B)(iW,"vec4","texel",mW)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,NW … [truncated]
-             [(0, NW.F)(iW)]: `baseColor = ${PW};`
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${GR} {\n\t\t\t\t\t${(0,uR.G)(JR,"vec4","texel",yR)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,uR … [truncated]
+             [(0, uR.I)(JR)]: `baseColor = ${ZR};`
```

#### 3011. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27243` → after: `L26774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26774) · [Before (L27243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27243)

```diff
-     (0, PW.m)(ZW)
+     (0, ZR.n)(KR)
```

#### 3012. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27245` → after: `L26776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26776) · [Before (L27245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27245)

```diff
-   40448: (WW, iW, OW) => {
+   40495: (RR, JR, GR) => {
```

#### 3013. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27252-L27256` → after: `L26783-L26787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26783-L26787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26783-L26787) · [Before (L27252-L27256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27252-L27256)

```diff
-     var mW = OW(100),
-       EW = OW(39),
-       NW = (OW(4675), OW(5961), OW(4666)),
-       PW = OW(7659);
-     OW(7637);
+     var yR = GR(103),
+       tR = GR(46),
+       uR = (GR(4781), GR(6080), GR(4776)),
+       ZR = GR(7802);
+     GR(7773);
```

#### 3014. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27266-L27267` → after: `L26797-L26798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26797-L26798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26797-L26798) · [Before (L27266-L27267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27266-L27267)

```diff
-           if ((0, NW.g)(mW.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), wW().then((WW => {
-             WW && EW.i.removeItem(NW.b)
+           if ((0, uR.l)(yR.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), fR().then((RR => {
+             RR && tR.i.removeItem(uR.e)
```

#### 3015. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27274` → after: `L26805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26805) · [Before (L27274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27274)

```diff
-         return (0, NW.c)(mW.featureFlags.settings.canUseShaderPacks)
+         return (0, uR.h)(yR.featureFlags.settings.canUseShaderPacks)
```

#### 3016. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27295` → after: `L26826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26826) · [Before (L27295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27295)

```diff
-         return this.compiling ??= Promise.all([OW.e(91), OW.e(157), OW.e(163)]).then((() => OW(53916))).then((WW => (WW.prefetchCompiler(), WW))), this.compiling
+         return this.compiling ??= Promise.all([GR.e(91), GR.e(157), GR.e(163)]).then((() => GR(53760))).then((RR => (RR.prefetchCompiler(), RR))), this.compiling
```

#### 3017. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27309` → after: `L26840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26840) · [Before (L27309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27309)

```diff
-       if (!(0, NW.i)(mW.featureFlags.settings.canUseShaderPacks)) return null;
+       if (!(0, uR.o)(yR.featureFlags.settings.canUseShaderPacks)) return null;
```

#### 3018. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27311-L27312` → after: `L26842-L26843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26842-L26843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26842-L26843) · [Before (L27311-L27312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27311-L27312)

```diff
-         const WW = await (0, PW.g)(!0);
-         return WW || EW.i.setItem(NW.b, !1), WW
+         const RR = await (0, ZR.d)(!0);
+         return RR || tR.i.setItem(uR.e, !1), RR
```

#### 3019. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27314` → after: `L26845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26845) · [Before (L27314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27314)

```diff
-         return console.error("Failed to read the stored shader pack", WW), EW.i.removeItem(NW.b), null
+         return console.error("Failed to read the stored shader pack", RR), tR.i.removeItem(uR.e), null
```

#### 3020. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27325` → after: `L26856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26856) · [Before (L27325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27325)

```diff
-   40491: (WW, iW, OW) => {
+   40534: (RR, JR, GR) => {
```

#### 3021. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27328` → after: `L26859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26859) · [Before (L27328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27328)

```diff
-       i: () => xW
+       f: () => wR
```

#### 3022. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27330-L27337` → after: `L26861-L26868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26861-L26868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26861-L26868) · [Before (L27330-L27337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27330-L27337)

```diff
-     var mW = OW(154),
-       EW = OW(172),
-       NW = OW(1567),
-       PW = OW(1888),
-       LW = OW(1584),
-       cW = OW(37709),
-       wW = OW(683),
-       tW = OW(40448);
+     var yR = GR(163),
+       tR = GR(188),
+       uR = GR(1633),
+       ZR = GR(1972),
+       qR = GR(1647),
+       iR = GR(37620),
+       fR = GR(726),
+       VR = GR(40495);
```

#### 3023. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27340` → after: `L26871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26871) · [Before (L27340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27340)

```diff
-       (0, PW.reportClientError)("matchmake_failed", WW, mW.k[mW.k.SHADER_PACK])
+       (0, ZR.reportClientError)("matchmake_failed", RR, yR.j[yR.j.SHADER_PACK])
```

#### 3024. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27345-L27346` → after: `L26876-L26877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26876-L26877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26876-L26877) · [Before (L27345-L27346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27345-L27346)

```diff
-         PW = (0, cW.c)();
-       mW && null !== PW && await LW.e.reportShaderPackSession(WW, {
+         ZR = (0, iR.b)();
+       yR && null !== ZR && await qR.c.reportShaderPackSession(RR, {
```

#### 3025. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27349` → after: `L26880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26880) · [Before (L27349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27349)

```diff
-         game: (0, NW.d)(iW, EW.G, "other"),
+         game: (0, uR.e)(JR, tR.D, "other"),
```

#### 3026. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27355` → after: `L26886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26886) · [Before (L27355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27355)

```diff
-   7637: (WW, iW, OW) => {
+   7773: (RR, JR, GR) => {
```

#### 3027. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27360` → after: `L26891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26891) · [Before (L27360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27360)

```diff
-     var mW = OW(5970);
+     var yR = GR(6084);
```

#### 3028. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27365` → after: `L26896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26896) · [Before (L27365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27365)

```diff
-       return NW ??= Promise.all([OW.e(85), OW.e(126)]).then((() => OW(42015))).then((WW => {
+       return uR ??= Promise.all([GR.e(85), GR.e(126)]).then((() => GR(42031))).then((RR => {
```

#### 3029. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27371` → after: `L26902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26902) · [Before (L27371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27371)

```diff
-         return EW ??= (0, mW.o)(OW, NW, iW), EW
+         return tR ??= (0, yR.j)(GR, uR, JR), tR
```

#### 3030. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27380` → after: `L26911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26911) · [Before (L27380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27380)

```diff
-   35150: (WW, iW, OW) => {
+   35064: (RR, JR, GR) => {
```

#### 3031. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27385` → after: `L26916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26916) · [Before (L27385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27385)

```diff
-       c: () => mW
+       b: () => yR
```

#### 3032. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27388` → after: `L26919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26919) · [Before (L27388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27388)

```diff
-   40814: (WW, iW, OW) => {
+   40801: (RR, JR, GR) => {
```

#### 3033. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27391-L27392` → after: `L26922-L26923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26922-L26923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26922-L26923) · [Before (L27391-L27392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27391-L27392)

```diff
-       g: () => LW,
-       k: () => cW
+       e: () => qR,
+       g: () => iR
```

#### 3034. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27403` → after: `L26934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26934) · [Before (L27403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27403)

```diff
-       return mW.set(WW, (null !== (iW = mW.get(WW)) && void 0 !== iW ? iW : 0) + 1), NW(), () => {
+       return yR.set(RR, (null !== (JR = yR.get(RR)) && void 0 !== JR ? JR : 0) + 1), uR(), () => {
```

#### 3035. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27417` → after: `L26948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26948) · [Before (L27417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27417)

```diff
-   40478: (WW, iW, OW) => {
+   40525: (RR, JR, GR) => {
```

#### 3036. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27430` → after: `L26961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26961) · [Before (L27430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27430)

```diff
-           }] = await Promise.all([Promise.resolve().then((() => OW(1856))), Promise.resolve().then((() => OW(1422)))]);
+           }] = await Promise.all([Promise.resolve().then((() => GR(1943))), Promise.resolve().then((() => GR(1493)))]);
```

#### 3037. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27446` → after: `L26977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26977) · [Before (L27446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27446)

```diff
-   40960: (WW, iW, OW) => {
+   40965: (RR, JR, GR) => {
```

#### 3038. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27449-L27450` → after: `L26980-L26981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26980-L26981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L26980-L26981) · [Before (L27449-L27450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27449-L27450)

```diff
-       h: () => NW,
-       k: () => EW
+       e: () => uR,
+       f: () => tR
```

#### 3039. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27484` → after: `L27015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27015) · [Before (L27484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27484)

```diff
-   40943: (WW, iW, OW) => {
+   40942: (RR, JR, GR) => {
```

#### 3040. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27486` → after: `L27017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27017) · [Before (L27486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27486)

```diff
-       b: () => EW
+       e: () => tR
```

#### 3041. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27488` → after: `L27019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27019) · [Before (L27488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27488)

```diff
-     var mW = OW(2012);
+     var yR = GR(2102);
```

#### 3042. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27491` → after: `L27022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27022) · [Before (L27491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27491)

```diff
-       return (0, mW.l)(WW, iW) < OW
+       return (0, yR.h)(RR, JR) < GR
```

#### 3043. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27494` → after: `L27025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27025) · [Before (L27494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27494)

```diff
-   38185: (WW, iW, OW) => {
+   38142: (RR, JR, GR) => {
```

#### 3044. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27496` → after: `L27027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27027) · [Before (L27496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27496)

```diff
-       e: () => mW.j
+       c: () => yR.l
```

#### 3045. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27498` → after: `L27029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27029) · [Before (L27498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27498)

```diff
-     var mW = OW(5725)
+     var yR = GR(5844)
```

#### 3046. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27500` → after: `L27031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27031) · [Before (L27500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27500)

```diff
-   38192: (WW, iW, OW) => {
+   38144: (RR, JR, GR) => {
```

#### 3047. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27502` → after: `L27033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27033) · [Before (L27502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27502)

```diff
-       e: () => mW.n
+       e: () => yR.o
```

#### 3048. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27504` → after: `L27035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27035) · [Before (L27504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27504)

```diff
-     var mW = OW(38195)
+     var yR = GR(38150)
```

#### 3049. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27506` → after: `L27037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27037) · [Before (L27506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27506)

```diff
-   38176: (WW, iW, OW) => {
+   38134: (RR, JR, GR) => {
```

#### 3050. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27510` → after: `L27041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27041) · [Before (L27510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27510)

```diff
-     const mW = [() => OW(38185).e, () => OW(38192).e, () => OW(37768).b, () => OW(38219).f, () => OW(38803).getCaughtUpMeshRotation, () => OW(38839).tickMovementPrePhysics, () => OW(38866).b, () => [OW(38918).tickMovementInputsPrePhysics, OW(38963).z, OW(39204).b, OW(39220).d], ( … [truncated]
+     const yR = [() => GR(38142).c, () => GR(38144).e, () => GR(37694).b, () => GR(38178).g, () => GR(38804).getCaughtUpMeshRotation, () => GR(38831).tickMovementPrePhysics, () => GR(38853).c, () => [GR(38909).tickMovementInputsPrePhysics, GR(38950).B, GR(39179).c, GR(39198).e], ( … [truncated]
```

#### 3051. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27513` → after: `L27044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27044) · [Before (L27513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27513)

```diff
-       return await WW(), OW(40941)
+       return await RR(), GR(40933)
```

#### 3052. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27516` → after: `L27047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27047) · [Before (L27516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27516)

```diff
-   40941: (WW, iW, OW) => {
+   40933: (RR, JR, GR) => {
```

#### 3053. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27518-L27519` → after: `L27049-L27050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27049-L27050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27049-L27050) · [Before (L27518-L27519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27518-L27519)

```diff
-       InGameUi: () => EW.b,
-       LobbyLeaderboard: () => TW.e,
+       InGameUi: () => tR.d,
+       LobbyLeaderboard: () => lR.b,
```

#### 3054. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27526-L27533` → after: `L27057-L27064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27057-L27064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27057-L27064) · [Before (L27526-L27533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27526-L27533)

```diff
-     var mW = OW(37575),
-       EW = OW(37743),
-       NW = OW(1111),
-       PW = OW(2478),
-       LW = OW(10354),
-       cW = OW(1194),
-       wW = OW(1301),
-       tW = OW(37727);
+     var yR = GR(37494),
+       tR = GR(37660),
+       uR = GR(1201),
+       ZR = GR(2532),
+       qR = GR(10456),
+       iR = GR(1295),
+       fR = GR(1397),
+       VR = GR(37640);
```

#### 3055. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27549-L27550` → after: `L27080-L27081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27080-L27081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27080-L27081) · [Before (L27549-L27550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27549-L27550)

```diff
-         const iW = "string" === typeof WW ? WW : JSON.stringify(WW);
-         return Promise.reject(new Error(`Matchmake answer holds no seat (${typeof WW}): ${String(iW).slice(0,150)}`))
+         const JR = "string" === typeof RR ? RR : JSON.stringify(RR);
+         return Promise.reject(new Error(`Matchmake answer holds no seat (${typeof RR}): ${String(JR).slice(0,150)}`))
```

#### 3056. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27555` → after: `L27086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27086) · [Before (L27555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27555)

```diff
-           if (WW.aborted) return void mW((0, cW.f)(WW));
+           if (RR.aborted) return void yR((0, iR.g)(RR));
```

#### 3057. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27558` → after: `L27089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27089) · [Before (L27558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27558)

```diff
-               EW.giveUp((0, cW.f)(WW))
+               tR.giveUp((0, iR.g)(RR))
```
