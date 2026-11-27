# Changed — Bundle Modifications Report (Part 017 / 154)

- **Updated at**: `2026-11-28T07:18 JST`
- **Part**: `17 / 154` (**397** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 016](part-016.md) · [Part 018 →](part-018.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/109.js` (1yqdn.8419f1e1 → 4udp6d.2845de07 · continued)

- **File**: `bundles/bloxd.io/chunks/js/109.js` (3996 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df)

#### 3058. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27569` → after: `L27100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27100) · [Before (L27569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27569)

```diff
-         return null !== (WW = null === (iW = this.seatRequest) || void 0 === iW ? void 0 : iW.leg) && void 0 !== WW ? WW : this.lastLeg
+         return null !== (RR = null === (JR = this.seatRequest) || void 0 === JR ? void 0 : JR.leg) && void 0 !== RR ? RR : this.lastLeg
```

#### 3059. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27573` → after: `L27104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27104) · [Before (L27573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27573)

```diff
-         if (null !== OW && void 0 !== OW && OW.givenUp) throw new tW.c(OW.leg);
+         if (null !== GR && void 0 !== GR && GR.givenUp) throw new VR.g(GR.leg);
```

#### 3060. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27580-L27581` → after: `L27111-L27112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27111-L27112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27111-L27112) · [Before (L27580-L27581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27580-L27581)

```diff
-         this.reject = WW, this.room = null, this.opened = !1, this.wasGivenUp = !1, this.countdown = void 0, this.countdown = new tW.b((() => {
-           this.giveUp(new tW.c(this.leg))
+         this.reject = RR, this.room = null, this.opened = !1, this.wasGivenUp = !1, this.countdown = void 0, this.countdown = new VR.d((() => {
+           this.giveUp(new VR.g(this.leg))
```

#### 3061. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27595` → after: `L27126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27126) · [Before (L27595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27595)

```diff
-             this.opened = !0, this.countdown.socketOpened(), (0, wW.p)("wasm_socket_open", performance.now())
+             this.opened = !0, this.countdown.socketOpened(), (0, fR.y)("wasm_socket_open", performance.now())
```

#### 3062. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27612-L27615` → after: `L27143-L27146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27143-L27146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27143-L27146) · [Before (L27612-L27615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27612-L27615)

```diff
-     var lW = OW(1185),
-       AW = OW(39904),
-       bW = OW(39965),
-       jW = OW(37250),
+     var rR = GR(1282),
+       eR = GR(39897),
+       aR = GR(39961),
+       LR = GR(37162),
```

#### 3063. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27617-L27628` → after: `L27148-L27159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27148-L27159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27148-L27159) · [Before (L27617-L27628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27617-L27628)

```diff
-       kW = OW(37700),
-       sW = OW(40448),
-       MW = OW(35150),
-       KW = OW(38454),
-       SW = OW(5371),
-       YW = OW(1351),
-       yW = OW(2365),
-       TW = OW(38161),
-       JW = OW(2037),
-       hW = OW(1230),
-       HW = OW(2350),
-       nW = OW(40943);
+       UR = GR(37605),
+       WR = GR(40495),
+       AR = GR(35064),
+       CR = GR(38417),
+       XR = GR(5474),
+       MR = GR(1449),
+       BR = GR(2435),
+       lR = GR(38125),
+       pR = GR(2134),
+       gR = GR(1336),
+       bR = GR(2421),
+       vR = GR(40942);
```

#### 3064. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27632-L27635` → after: `L27163-L27166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27163-L27166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27163-L27166) · [Before (L27632-L27635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27632-L27635)

```diff
-           const OW = (0, yW.h)();
-           if (!OW || null !== (iW = OW.EY.aiW(OW.Dv)) && void 0 !== iW && iW.crouching) return !1;
-           const mW = (0, yW.d)();
-           return (0, nW.b)(mW.getLifeformEyePos(OW.Dv, !1), WW, mW.getBlockReach(OW.Dv))
+           const GR = (0, BR.i)();
+           if (!GR || null !== (JR = GR.zC.oGR(GR.WH)) && void 0 !== JR && JR.crouching) return !1;
+           const yR = (0, BR.e)();
+           return (0, vR.e)(yR.getLifeformEyePos(GR.WH, !1), RR, yR.getBlockReach(GR.WH))
```

#### 3065. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27642-L27644` → after: `L27173-L27175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27173-L27175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27173-L27175) · [Before (L27642-L27644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27642-L27644)

```diff
-               aL: !1,
-               hP: WW,
-               HP: null
+               Ri: !1,
+               DZ: RR,
+               HZ: null
```

#### 3066. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27646` → after: `L27177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27177) · [Before (L27646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27646)

```diff
-             (0, HW.sendColyMessage)(PW.jh, {
+             (0, bR.sendColyMessage)(ZR.vh, {
```

#### 3067. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27648-L27649` → after: `L27179-L27180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27179-L27180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27179-L27180) · [Before (L27648-L27649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27648-L27649)

```diff
-               IL: hW.c.DownFirePrimary
-             }, !0), (0, HW.sendColyMessage)(PW.jh, {
+               hq: gR.e.DownFirePrimary
+             }, !0), (0, bR.sendColyMessage)(ZR.vh, {
```

#### 3068. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27651` → after: `L27182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27182) · [Before (L27651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27651)

```diff
-               IL: hW.c.UpFirePrimary
+               hq: gR.e.UpFirePrimary
```

#### 3069. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27656` → after: `L27187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27187) · [Before (L27656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27656)

```diff
-     var dW = OW(352),
+     var NR = GR(385),
```

#### 3070. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27658` → after: `L27189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27189) · [Before (L27658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27658)

```diff
-       vW = OW(39615);
+       HR = GR(39594);
```

#### 3071. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27662` → after: `L27193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27193) · [Before (L27662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27662)

```diff
-       (0, HW.sendColyMessage)(PW.th, WW, !0)
+       (0, bR.sendColyMessage)(ZR.Ih, RR, !0)
```

#### 3072. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27666-L27668` → after: `L27197-L27199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27197-L27199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27197-L27199) · [Before (L27666-L27668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27666-L27668)

```diff
-       (0, HW.sendColyMessage)(PW.uh, {
-         XL: WW,
-         BL: "a"
+       (0, bR.sendColyMessage)(ZR.Lh, {
+         kq: RR,
+         Qq: "a"
```

#### 3073. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27673` → after: `L27204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27204) · [Before (L27673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27673)

```diff
-         const iW = (0, yW.h)();
+         const JR = (0, BR.i)();
```

#### 3074. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27696` → after: `L27227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27227) · [Before (L27696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27696)

```diff
-         vW.g.setMultiplierType(vW.d, WW)
+         HR.e.setMultiplierType(HR.c, RR)
```

#### 3075. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27699-L27702` → after: `L27230-L27233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27230-L27233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27230-L27233) · [Before (L27699-L27702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27699-L27702)

```diff
-         (0, HW.sendColyMessage)(PW.cj);
-         const WW = (0, yW.h)(),
-           iW = WW.EY.jB(WW.Dv);
-         iW && (eW().set(iW.Sj, 0, 0, 0), eW().set(iW.eC, 0, 0, 0), eW().set(iW.gC, 0, 0, 0))
+         (0, bR.sendColyMessage)(ZR.rj);
+         const RR = (0, BR.i)(),
+           JR = RR.zC.Lk(RR.WH);
+         JR && (DR().set(JR.BL, 0, 0, 0), DR().set(JR.bY, 0, 0, 0), DR().set(JR.vY, 0, 0, 0))
```

#### 3076. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27706-L27707` → after: `L27237-L27238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27237-L27238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27237-L27238) · [Before (L27706-L27707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27706-L27707)

```diff
-         iW = WW, (0, HW.sendColyMessage)(PW.pj, {
-           rw: iW
+         JR = RR, (0, bR.sendColyMessage)(ZR.Lj, {
+           GV: JR
```

#### 3077. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27711-L27714` → after: `L27242-L27245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27242-L27245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27242-L27245) · [Before (L27711-L27714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27711-L27714)

```diff
-     var fW = OW(39366),
-       CW = OW(27),
-       XW = OW(37968),
-       BW = OW(2072);
+     var mR = GR(39341),
+       zR = GR(32),
+       SR = GR(37914),
+       jR = GR(2170);
```

#### 3078. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27740` → after: `L27271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27271) · [Before (L27740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27740)

```diff
-         xL: NW
+         nq: uR
```

#### 3079. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27742` → after: `L27273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27273) · [Before (L27742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27742)

```diff
-       const PW = (0, yW.d)(),
+       const ZR = (0, BR.e)(),
```

#### 3080. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27767` → after: `L27298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27298) · [Before (L27767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27767)

```diff
-         xL: NW,
+         nq: uR,
```

#### 3081. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27776` → after: `L27307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27307) · [Before (L27776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27776)

```diff
-       crafting: (0, BW.r)((function() {
+       crafting: (0, jR.l)((function() {
```

#### 3082. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27781-L27783` → after: `L27312-L27314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27312-L27314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27312-L27314) · [Before (L27781-L27783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27781-L27783)

```diff
-         const WW = (0, yW.h)(),
-           iW = WW.Dv;
-         if (!WW.EY.QiW(iW)) return RW = {
+         const RR = (0, BR.i)(),
+           JR = RR.WH;
+         if (!RR.zC.mGR(JR)) return ER = {
```

#### 3083. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27788` → after: `L27319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27319) · [Before (L27788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27788)

```diff
-         const OW = WW.EY.ziW(iW),
+         const GR = RR.zC.PGR(JR),
```

#### 3084. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27791` → after: `L27322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27322) · [Before (L27791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27791)

```diff
-           } = (0, yW.d)(),
+           } = (0, BR.e)(),
```

#### 3085. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27796` → after: `L27327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27327) · [Before (L27796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27796)

```diff
-             } = mW.getRecipesForItem(iW, WW.name)[WW.xL];
+             } = yR.getRecipesForItem(JR, RR.name)[RR.nq];
```

#### 3086. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27799` → after: `L27330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27330) · [Before (L27799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27799)

```diff
-               xL: WW.xL,
+               nq: RR.nq,
```

#### 3087. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27811` → after: `L27342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27342) · [Before (L27811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27811)

```diff
-       }), [...BW.g, "syncedInvenFromServer", "craftingRecipesEdited", GW])
+       }), [...jR.h, "syncedInvenFromServer", "craftingRecipesEdited", YR])
```

#### 3088. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27822` → after: `L27353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27353) · [Before (L27822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27822)

```diff
-         } = (0, yW.d)(), NW = (0, yW.h)().Dv;
+         } = (0, BR.e)(), uR = (0, BR.i)().WH;
```

#### 3089. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27833` → after: `L27364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27364) · [Before (L27833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27833)

```diff
-         for (let cW = 0; cW < XW.c; cW++) {
+         for (let iR = 0; iR < SR.f; iR++) {
```

#### 3090. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27855` → after: `L27386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27386) · [Before (L27855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27855)

```diff
-         qW = WW, CW.l.iZ(GW)
+         dR = RR, zR.n.JK(YR)
```

#### 3091. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27860` → after: `L27391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27391) · [Before (L27860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27860)

```diff
-           xL: OW,
+           nq: GR,
```

#### 3092. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27863-L27867` → after: `L27394-L27398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27394-L27398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27394-L27398) · [Before (L27863-L27867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27863-L27867)

```diff
-         const EW = (0, yW.h)(),
-           NW = (0, yW.d)(),
-           LW = NW.craftingManager.craftItem(EW.Dv, EW.EY.ziW(EW.Dv), iW, OW, null !== mW && void 0 !== mW ? mW : 1 / 0);
-         if (LW.lL > 0) {
-           const WW = NW.client.inventoryPrediction.record(fW.b.craft(NW.craftingManager, EW.Dv, iW, OW, LW.lL));
+         const tR = (0, BR.i)(),
+           uR = (0, BR.e)(),
+           qR = uR.craftingManager.craftItem(tR.WH, tR.zC.PGR(tR.WH), JR, GR, null !== yR && void 0 !== yR ? yR : 1 / 0);
+         if (qR.Uq > 0) {
+           const RR = uR.client.inventoryPrediction.record(mR.e.craft(uR.craftingManager, tR.WH, JR, GR, qR.Uq));
```

#### 3093. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27869-L27873` → after: `L27400-L27404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27400-L27404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27400-L27404) · [Before (L27869-L27873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27869-L27873)

```diff
-             (0, HW.sendColyMessage)(PW.Ig, {
-               ZL: WW,
-               xL: iW,
-               lL: OW,
-               NP: mW
+             (0, bR.sendColyMessage)(ZR.Ug, {
+               Lq: RR,
+               nq: JR,
+               Uq: GR,
+               KZ: yR
```

#### 3094. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27875` → after: `L27406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27406) · [Before (L27875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27875)

```diff
-           }(iW, OW, LW.lL, WW)
+           }(JR, GR, qR.Uq, RR)
```

#### 3095. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27885-L27887` → after: `L27416-L27418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27416-L27418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27416-L27418) · [Before (L27885-L27887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27885-L27887)

```diff
-         const EW = (0, yW.d)(),
-           NW = (0, yW.h)(),
-           LW = EW.craftingManager.salvageItem(NW.EY.ziW(NW.Dv), iW, OW, mW);
+         const tR = (0, BR.e)(),
+           uR = (0, BR.i)(),
+           qR = tR.craftingManager.salvageItem(uR.zC.PGR(uR.WH), JR, GR, yR);
```

#### 3096. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27889-L27892` → after: `L27420-L27423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27420-L27423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27420-L27423) · [Before (L27889-L27892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27889-L27892)

```diff
-         return LW && (cW = iW, wW = mW, tW = EW.client.inventoryPrediction.record(fW.b.salvage(EW.craftingManager, iW, mW)), (0, HW.sendColyMessage)(PW.dj, {
-           gP: cW,
-           DP: wW,
-           NP: tW
+         return qR && (iR = JR, fR = yR, VR = tR.client.inventoryPrediction.record(mR.e.salvage(tR.craftingManager, JR, yR)), (0, bR.sendColyMessage)(ZR.uj, {
+           SZ: iR,
+           jZ: fR,
+           KZ: VR
```

#### 3097. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27902-L27905` → after: `L27433-L27436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27433-L27436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27433-L27436) · [Before (L27902-L27905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27902-L27905)

```diff
-         EW = iW, NW = OW, LW = mW, (0, HW.sendColyMessage)(PW.Og, {
-           Tt: EW,
-           ht: NW,
-           Jt: LW
+         tR = JR, uR = GR, qR = yR, (0, bR.sendColyMessage)(ZR._g, {
+           vV: tR,
+           xV: uR,
+           OV: qR
```

#### 3098. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27909-L27917` → after: `L27440-L27448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27440-L27448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27440-L27448) · [Before (L27909-L27917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27909-L27917)

```diff
-     var QW = OW(38195),
-       Wi = OW(38767),
-       ii = OW(182),
-       Oi = OW(5725),
-       mi = OW(7453),
-       Ei = OW(639),
-       Ni = OW(5187),
-       Pi = OW(38782),
-       Li = OW(39345),
+     var hR = GR(38150),
+       RJ = GR(38771),
+       JJ = GR(203),
+       GJ = GR(5844),
+       yJ = GR(7588),
+       tJ = GR(671),
+       uJ = GR(5290),
+       ZJ = GR(38779),
+       qJ = GR(39323),
```

#### 3099. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27919` → after: `L27450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27450) · [Before (L27919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27919)

```diff
-     const wi = ii.f.entityInteractReach + 1;
+     const fJ = JJ.g.entityInteractReach + 1;
```

#### 3100. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27923` → after: `L27454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27454) · [Before (L27923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27923)

```diff
-       return null !== (iW = Pi.b.aimsFromBody(WW) ? WW.jiW : null) && void 0 !== iW ? iW : WW.camera.uF()
+       return null !== (JR = ZJ.e.aimsFromBody(RR) ? RR.yGR : null) && void 0 !== JR ? JR : RR.camera.m_()
```

#### 3101. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27928-L27929` → after: `L27459-L27460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27459-L27460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27459-L27460) · [Before (L27928-L27929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27928-L27929)

```diff
-       const EW = (0, yW.h)(),
-         NW = null !== (iW = null === (OW = EW.EY.riW(EW.Dv)) || void 0 === OW ? void 0 : OW.selectedItem) && void 0 !== iW ? iW : null,
+       const tR = (0, BR.i)(),
+         uR = null !== (JR = null === (GR = tR.zC.cGR(tR.WH)) || void 0 === GR ? void 0 : GR.selectedItem) && void 0 !== JR ? JR : null,
```

#### 3102. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27931` → after: `L27462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27462) · [Before (L27931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27931)

```diff
-       if ((0, Ni.f)(null === NW || void 0 === NW ? void 0 : NW.typeObj.type) && EW.EY.aiW(EW.Dv).crouching) return;
+       if ((0, uJ.c)(null === uR || void 0 === uR ? void 0 : uR.typeObj.type) && tR.zC.oGR(tR.WH).crouching) return;
```

#### 3103. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27933-L27934` → after: `L27464-L27465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27464-L27465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27464-L27465) · [Before (L27933-L27934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27933-L27934)

```diff
-         const iW = (0, yW.h)().EY.YG((0, yW.h)().Dv).position;
-         for (const OW of (0, yW.d)().client.iterateEntityIds())
+         const JR = (0, BR.i)().zC.f6((0, BR.i)().WH).position;
+         for (const GR of (0, BR.e)().client.iterateEntityIds())
```

#### 3104. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27937-L27941` → after: `L27468-L27472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27468-L27472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27468-L27472) · [Before (L27937-L27941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27937-L27941)

```diff
-       }(PW) ? yW.l.localPlayerPickActionHelper.pickCameraRayEntity(WW, ii.f.entityInteractReach) : null;
-       return LW && (0, Wi.d)(LW.eId) ? (0, Wi.b)(LW.eId) : null !== (mW = function(WW) {
-         const iW = (0, yW.h)(),
-           OW = (0, yW.d)(),
-           mW = null === iW.jiW || WW === iW.jiW ? iW.WiW : iW.pickBlock(null, WW, OW.getBlockReach(iW.Dv), iW.QWW);
+       }(ZR) ? BR.k.localPlayerPickActionHelper.pickCameraRayEntity(RR, JJ.g.entityInteractReach) : null;
+       return qR && (0, RJ.g)(qR.eId) ? (0, RJ.c)(qR.eId) : null !== (yR = function(RR) {
+         const JR = (0, BR.i)(),
+           GR = (0, BR.e)(),
+           yR = null === JR.yGR || RR === JR.yGR ? JR.IJR : JR.pickBlock(null, RR, GR.getBlockReach(JR.WH), JR.PJR);
```

#### 3105. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27944` → after: `L27475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27475) · [Before (L27944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27944)

```diff
-           X3: EW,
+           U3: tR,
```

#### 3106. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27947` → after: `L27478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27478) · [Before (L27947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27947)

```diff
-         if ((0, Oi.t)((0, Oi.f)(EW))) return Oi.j[EW].meta.open ? ci.h.close : ci.h.open;
+         if ((0, GJ.u)((0, GJ.h)(tR))) return GJ.l[tR].meta.open ? iJ.h.close : iJ.h.open;
```

#### 3107. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27951` → after: `L27482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27482) · [Before (L27951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27951)

```diff
-         if ((0, Li.k)(PW) || (0, Li.C)(PW, OW.playerCanChangePos(iW.Dv, ...NW))) return ci.h.open;
+         if ((0, qJ.p)(ZR) || (0, qJ.G)(ZR, GR.playerCanChangePos(JR.WH, ...uR))) return iJ.h.open;
```

#### 3108. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27953` → after: `L27484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27484) · [Before (L27953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27953)

```diff
-       }(WW)) && void 0 !== mW ? mW : LW ? function(WW, iW, OW) {
+       }(RR)) && void 0 !== yR ? yR : qR ? function(RR, JR, GR) {
```

#### 3109. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27960` → after: `L27491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27491) · [Before (L27960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27960)

```diff
-           } = (0, yW.d)(),
+           } = (0, BR.e)(),
```

#### 3110. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27962` → after: `L27493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27493) · [Before (L27962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27962)

```diff
-           wW = (0, Li.w)(PW, NW, iW);
+           fR = (0, qJ.y)(ZR, uR, JR);
```

#### 3111. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27964` → after: `L27495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27495) · [Before (L27964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27964)

```diff
-         const tW = null !== (mW = null === cW || void 0 === cW ? void 0 : cW.ownerDbId) && void 0 !== mW ? mW : null,
+         const VR = null !== (yR = null === iR || void 0 === iR ? void 0 : iR.ownerDbId) && void 0 !== yR ? yR : null,
```

#### 3112. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27966-L27973` → after: `L27497-L27504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27497-L27504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27497-L27504) · [Before (L27966-L27973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27966-L27973)

```diff
-         if ((0, Li.j)(NW, PW)) {
-           if (null === tW && (0, Li.v)(NW, PW)) return ci.h.tame;
-           const WW = null === tW && (0, Li.r)(NW, PW) ? (0, Li.A)(NW) : void 0;
-           return void 0 !== WW ? (0, ci.v)(WW) : ZW && (0, Li.p)(NW, PW) ? ci.h.feed : void 0
-         }
-         const xW = (0, yW.h)(),
-           lW = xW.EY.HiW(xW.Dv).physicsState.type === mi.p.DEFAULT,
-           AW = null === OW || (0, Ni.f)(OW.typeObj.type);
+         if ((0, qJ.m)(uR, ZR)) {
+           if (null === VR && (0, qJ.x)(uR, ZR)) return iJ.h.tame;
+           const RR = null === VR && (0, qJ.w)(uR, ZR) ? (0, qJ.C)(uR) : void 0;
+           return void 0 !== RR ? (0, iJ.z)(RR) : KR && (0, qJ.u)(uR, ZR) ? iJ.h.feed : void 0
+         }
+         const wR = (0, BR.i)(),
+           rR = wR.zC.aGR(wR.WH).physicsState.type === yJ.k.DEFAULT,
+           eR = null === GR || (0, uJ.c)(GR.typeObj.type);
```

#### 3113. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27979` → after: `L27510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27510) · [Before (L27979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27979)

```diff
-       const OW = (0, yW.h)().EY.YG(WW);
+       const GR = (0, BR.i)().zC.f6(RR);
```

#### 3114. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27985-L27986` → after: `L27516-L27517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27516-L27517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27516-L27517) · [Before (L27985-L27986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27985-L27986)

```diff
-       const EW = (0, yW.h)();
-       if (null !== (OW = EW.sV[EW.Dv][WW]) && void 0 !== OW && OW.interactable) return !0;
+       const tR = (0, BR.i)();
+       if (null !== (GR = tR.Qm[tR.WH][RR]) && void 0 !== GR && GR.interactable) return !0;
```

#### 3115. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27990-L27991` → after: `L27521-L27522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27521-L27522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27521-L27522) · [Before (L27990-L27991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27990-L27991)

```diff
-         } = (0, yW.d)();
-       return null !== NW && ((0, Li.j)(NW, iW) || null !== (0, Li.w)(iW, NW, 0) || "Saddled" === (null === (mW = PW.getColyseusEntity(WW)) || void 0 === mW ? void 0 : mW.metaInfo))
+         } = (0, BR.e)();
+       return null !== uR && ((0, qJ.m)(uR, JR) || null !== (0, qJ.y)(JR, uR, 0) || "Saddled" === (null === (yR = ZR.getColyseusEntity(RR)) || void 0 === yR ? void 0 : yR.metaInfo))
```

#### 3116. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27998` → after: `L27529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27529) · [Before (L27998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L27998)

```diff
-         const iW = (0, yW.h)(),
+         const JR = (0, BR.i)(),
```

#### 3117. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28001-L28003` → after: `L27532-L27534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27532-L27534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27532-L27534) · [Before (L28001-L28003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28001-L28003)

```diff
-           } = (0, yW.d)(),
-           mW = iW.sV[iW.Dv],
-           EW = iW.EY.YG(iW.Dv).position,
+           } = (0, BR.e)(),
+           yR = JR.Qm[JR.WH],
+           tR = JR.zC.f6(JR.WH).position,
```

#### 3118. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28011` → after: `L27542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27542) · [Before (L28011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28011)

```diff
-           const [tW, ZW, lW] = iW.EY.YG(xW).position, AW = OW.getColyseusEntity(xW);
+           const [VR, KR, rR] = JR.zC.f6(wR).position, eR = GR.getColyseusEntity(wR);
```

#### 3119. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28023-L28024` → after: `L27554-L27555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27554-L27555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27554-L27555) · [Before (L28023-L28024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28023-L28024)

```diff
-       const OW = null === (iW = (0, yW.h)().EY.ZOW(WW)) || void 0 === iW ? void 0 : iW.lifeformType;
-       return Ei.k.includes(OW) ? OW : null
+       const GR = null === (JR = (0, BR.i)().zC.sGR(RR)) || void 0 === JR ? void 0 : JR.lifeformType;
+       return tJ.l.includes(GR) ? GR : null
```

#### 3120. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28026` → after: `L27557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27557) · [Before (L28026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28026)

```diff
-     var ji = OW(2061);
+     var LJ = GR(2163);
```

#### 3121. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28057` → after: `L27588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27588) · [Before (L28057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28057)

```diff
-         }, this.pickaxe = new ci.d, this.touchCandidates = new Ai
+         }, this.pickaxe = new iJ.e, this.touchCandidates = new eJ
```

#### 3122. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28061-L28062` → after: `L27592-L27593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27592-L27593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27592-L27593) · [Before (L28061-L28062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28061-L28062)

```diff
-         const mW = (0, yW.h)(),
-           EW = (0, yW.d)();
+         const yR = (0, BR.i)(),
+           tR = (0, BR.e)();
```

#### 3123. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28064` → after: `L27595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27595) · [Before (L28064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28064)

```diff
-         if ("off" !== si && null !== (WW = ji.d.get("canAltAction")) && void 0 !== WW && WW) {
+         if ("off" !== WJ && null !== (RR = LJ.c.get("canAltAction")) && void 0 !== RR && RR) {
```

#### 3124. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28071-L28076` → after: `L27602-L27607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27602-L27607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27602-L27607) · [Before (L28071-L28076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28071-L28076)

```diff
-             const EW = iW ? ti(mW) : null !== (PW = mW.jiW) && void 0 !== PW ? PW : mW.camera.uF(),
-               ZW = mW.EY.Vk(mW.Dv),
-               xW = iW && null !== (LW = null === (cW = mW.WiW) || void 0 === cW ? void 0 : cW.X3) && void 0 !== LW ? LW : 0,
-               lW = iW ? null === (wW = mW.EY.riW(mW.Dv)) || void 0 === wW || null === (tW = wW.selectedItem) || void 0 === tW ? void 0 : tW.name : void 0,
-               AW = iW && mW.EY.aiW(mW.Dv).crouching,
-               bW = iW ? mW.camera.JG : 0,
+             const tR = JR ? VJ(yR) : null !== (ZR = yR.yGR) && void 0 !== ZR ? ZR : yR.camera.m_(),
+               KR = yR.zC.vW(yR.WH),
+               wR = JR && null !== (qR = null === (iR = yR.IJR) || void 0 === iR ? void 0 : iR.U3) && void 0 !== qR ? qR : 0,
+               rR = JR ? null === (fR = yR.zC.cGR(yR.WH)) || void 0 === fR || null === (VR = fR.selectedItem) || void 0 === VR ? void 0 : VR.name : void 0,
+               eR = JR && yR.zC.oGR(yR.WH).crouching,
+               aR = JR ? yR.camera.I6 : 0,
```

#### 3125. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28083-L28084` → after: `L27614-L27615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27614-L27615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27614-L27615) · [Before (L28083-L28084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28083-L28084)

```diff
-                   const iW = (0, Wi.h)(null, WW);
-                   if (null !== iW) return (0, Wi.b)(iW)
+                   const JR = (0, RJ.i)(null, RR);
+                   if (null !== JR) return (0, RJ.c)(JR)
```

#### 3126. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28087` → after: `L27618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27618) · [Before (L28087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28087)

```diff
-               WW.shown === PW && WW.label === (null !== mW && void 0 !== mW ? mW : null) || (WW.shown = PW, WW.label = null !== mW && void 0 !== mW ? mW : null, NW = !0)
+               RR.shown === ZR && RR.label === (null !== yR && void 0 !== yR ? yR : null) || (RR.shown = ZR, RR.label = null !== yR && void 0 !== yR ? yR : null, uR = !0)
```

#### 3127. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28091` → after: `L27622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27622) · [Before (L28091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28091)

```diff
-         const ZW = null === (iW = mW.WiW) || void 0 === iW ? void 0 : iW.X3;
+         const KR = null === (JR = yR.IJR) || void 0 === JR ? void 0 : JR.U3;
```

#### 3128. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28096-L28097` → after: `L27627-L27628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27627-L27628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27627-L27628) · [Before (L28096-L28097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28096-L28097)

```diff
-           this.block.prevBlockId !== iW && (this.block.prevClientOptStr = `${WW.rootName}CrosshairText`, this.block.prevBlockId = iW);
-           const OW = null !== (xW = EW.getClientPredictedOption(mW.Dv, this.block.prevClientOptStr)) && void 0 !== xW ? xW : EW.getDefaultItemStat(iW, "CrosshairText");
+           this.block.prevBlockId !== JR && (this.block.prevClientOptStr = `${RR.rootName}CrosshairText`, this.block.prevBlockId = JR);
+           const GR = null !== (wR = tR.getClientPredictedOption(yR.WH, this.block.prevClientOptStr)) && void 0 !== wR ? wR : tR.getDefaultItemStat(JR, "CrosshairText");
```

#### 3129. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28102-L28103` → after: `L27633-L27634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27633-L27634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27633-L27634) · [Before (L28102-L28103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28102-L28103)

```diff
-             const iW = (0, yW.h)(),
-               OW = iW.EY.UOW(iW.Dv).fistItem;
+             const JR = (0, BR.i)(),
+               GR = JR.zC.tyR(JR.WH).fistItem;
```

#### 3130. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28105` → after: `L27636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27636) · [Before (L28105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28105)

```diff
-             const mW = null !== OW.targetedPosition ? iW.Yk(OW.targetedPosition) : 0;
+             const yR = null !== GR.targetedPosition ? JR.rW(GR.targetedPosition) : 0;
```

#### 3131. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28107-L28109` → after: `L27638-L27640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27638-L27640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27638-L27640) · [Before (L28107-L28109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28107-L28109)

```diff
-             const EW = (0, yW.d)();
-             if (EW.getBlockTypeIsHarvestable(iW.Dv, mW)) return null;
-             const NW = null !== (WW = EW.getItemStat(iW.Dv, mW, "harvestLevel")) && void 0 !== WW ? WW : 0;
+             const tR = (0, BR.e)();
+             if (tR.getBlockTypeIsHarvestable(JR.WH, yR)) return null;
+             const uR = null !== (RR = tR.getItemStat(JR.WH, yR, "harvestLevel")) && void 0 !== RR ? RR : 0;
```

#### 3132. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28113` → after: `L27644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27644) · [Before (L28113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28113)

```diff
-         return this.target = (0, BW.t)(lW, {
+         return this.target = (0, jR.m)(rR, {
```

#### 3133. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28117` → after: `L27648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27648) · [Before (L28117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28117)

```diff
-           blockText: null !== (OW = this.block.text) && void 0 !== OW ? OW : null,
+           blockText: null !== (GR = this.block.text) && void 0 !== GR ? GR : null,
```

#### 3134. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28126` → after: `L27657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27657) · [Before (L28126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28126)

```diff
-           return null !== (WW = null === (iW = Si) || void 0 === iW ? void 0 : iW.target) && void 0 !== WW ? WW : ki
+           return null !== (RR = null === (JR = XJ) || void 0 === JR ? void 0 : JR.target) && void 0 !== RR ? RR : UJ
```

#### 3135. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28131` → after: `L27662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27662) · [Before (L28131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28131)

```diff
-           const OW = (0, wW.t)((() => {
+           const GR = (0, fR.F)((() => {
```

#### 3136. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28144` → after: `L27675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27675) · [Before (L28144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28144)

```diff
-     var Ti = OW(38354);
+     var lJ = GR(38309);
```

#### 3137. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28147` → after: `L27678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27678) · [Before (L28147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28147)

```diff
-       return (0, CW.n)(`otherEntitySettingsClientifiedEId|${(0,yW.h)().Dv}|_isAlive`, WW)
+       return (0, zR.q)(`otherEntitySettingsClientifiedEId|${(0,BR.i)().WH}|_isAlive`, RR)
```

#### 3138. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28154-L28156` → after: `L27685-L27687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27685-L27687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27685-L27687) · [Before (L28154-L28156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28154-L28156)

```diff
-             const OW = (0, yW.h)(),
-               mW = null === (WW = OW.sV[OW.Dv]) || void 0 === WW ? void 0 : WW[OW.Dv];
-             return void 0 !== mW && "_isAlive" in mW && (null !== (iW = mW._isAlive) && void 0 !== iW ? iW : Ti.b._isAlive)
+             const GR = (0, BR.i)(),
+               yR = null === (RR = GR.Qm[GR.WH]) || void 0 === RR ? void 0 : RR[GR.WH];
+             return void 0 !== yR && "_isAlive" in yR && (null !== (JR = yR._isAlive) && void 0 !== JR ? JR : lJ.e._isAlive)
```

#### 3139. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28167` → after: `L27698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27698) · [Before (L28167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28167)

```diff
-           const EW = (0, yW.d)(),
+           const tR = (0, BR.e)(),
```

#### 3140. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28176` → after: `L27707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27707) · [Before (L28176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28176)

```diff
-           watch: WW => (0, CW.n)("EffectUpdate", (iW => {
+           watch: RR => (0, zR.q)("EffectUpdate", (JR => {
```

#### 3141. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28178` → after: `L27709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27709) · [Before (L28178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28178)

```diff
-               FN: OW,
+               tZ: GR,
```

#### 3142. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28181` → after: `L27712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27712) · [Before (L28181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28181)

```diff
-             (0, mW.g)(OW) && WW(EW)
+             (0, yR.l)(GR) && RR(tR)
```

#### 3143. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28192` → after: `L27723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27723) · [Before (L28192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28192)

```diff
-             RN: OW,
+             hu: GR,
```

#### 3144. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28194` → after: `L27725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27725) · [Before (L28194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28194)

```diff
-             GN: EW
+             RZ: tR
```

#### 3145. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28196` → after: `L27727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27727) · [Before (L28196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28196)

```diff
-           (0, yW.d)().client.gameRecorder.recordFlyingMiddleText(iW, OW, mW, EW)
+           (0, BR.e)().client.gameRecorder.recordFlyingMiddleText(JR, GR, yR, tR)
```

#### 3146. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28201-L28202` → after: `L27732-L27733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27732-L27733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27732-L27733) · [Before (L28201-L28202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28201-L28202)

```diff
-         this.inventoryOpen = !1, CW.l.subscribe("DropItemKeyPressed", (WW => {
-           this.inventoryOpen ? CW.l.iZ("DropInvenItem", WW) : CW.l.iZ("DropHotbarItem", WW)
+         this.inventoryOpen = !1, zR.n.subscribe("DropItemKeyPressed", (RR => {
+           this.inventoryOpen ? zR.n.JK("DropInvenItem", RR) : zR.n.JK("DropHotbarItem", RR)
```

#### 3147. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28209-L28213` → after: `L27740-L27744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27740-L27744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27740-L27744) · [Before (L28209-L28213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28209-L28213)

```diff
-     var di = OW(39374),
-       ei = OW(39185),
-       vi = OW(39384),
-       gi = OW(40459),
-       Di = OW(1217);
+     var xJ = GR(39350),
+       NJ = GR(39156),
+       DJ = GR(39360),
+       HJ = GR(40514),
+       oJ = GR(1317);
```

#### 3148. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28217-L28218` → after: `L27748-L27749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27748-L27749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27748-L27749) · [Before (L28217-L28218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28217-L28218)

```diff
-       const OW = (0, yW.d)(),
-         mW = OW.ZZ.metadatas[WW];
+       const GR = (0, BR.e)(),
+         yR = GR.KK.metadatas[RR];
```

#### 3149. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28220` → after: `L27751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27751) · [Before (L28220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28220)

```diff
-       const EW = (0, yW.h)().Dv,
+       const tR = (0, BR.i)().WH,
```

#### 3150. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28226` → after: `L27757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27757) · [Before (L28226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28226)

```diff
-       const LW = null === (iW = yW.l.itemsClient[WW]) || void 0 === iW ? void 0 : iW.armourReduction;
+       const qR = null === (JR = BR.k.itemsClient[RR]) || void 0 === JR ? void 0 : JR.armourReduction;
```

#### 3151. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28237` → after: `L27768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27768) · [Before (L28237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28237)

```diff
-             for (const iW of Object.keys((0, yW.d)().ZZ.metadatas)) {
+             for (const JR of Object.keys((0, BR.e)().KK.metadatas)) {
```

#### 3152. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28242` → after: `L27773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27773) · [Before (L28242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28242)

```diff
-           }(), (0, BW.w)((WW => {
+           }(), (0, jR.p)((RR => {
```

#### 3153. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28259` → after: `L27790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27790) · [Before (L28259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28259)

```diff
-               EW = null === WW ? null : (0, BW.t)(iW[mW], WW);
+               tR = null === RR ? null : (0, jR.m)(JR[yR], RR);
```

#### 3154. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28276-L28277` → after: `L27807-L27808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27807-L27808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27807-L27808) · [Before (L28276-L28277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28276-L28277)

```diff
-       const WW = (0, yW.h)();
-       return WW.EY.QiW(WW.Dv) ? WW.EY.FiW(WW.Dv) : null
+       const RR = (0, BR.i)();
+       return RR.zC.mGR(RR.WH) ? RR.zC.IGR(RR.WH) : null
```

#### 3155. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28284` → after: `L27815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27815) · [Before (L28284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28284)

```diff
-         attributes: (0, ei.h)(WW.attributes)
+         attributes: (0, NJ.f)(RR.attributes)
```

#### 3156. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28290-L28291` → after: `L27821-L27822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27821-L27822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27821-L27822) · [Before (L28290-L28291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28290-L28291)

```diff
-       if (!WW.EO || null === WW.LO) return null;
-       const iW = [...WW.LO];
+       if (!RR.yG || null === RR.uG) return null;
+       const JR = [...RR.uG];
```

#### 3157. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28293` → after: `L27824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27824) · [Before (L28293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28293)

```diff
-       if ("Iron" === WW.PO) {
+       if ("Iron" === RR.tG) {
```

#### 3158. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28295` → after: `L27826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27826) · [Before (L28295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28295)

```diff
-         const WW = (0, yW.d)(),
+         const RR = (0, BR.e)(),
```

#### 3159. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28298` → after: `L27829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27829) · [Before (L28298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28298)

```diff
-           rL: [...null !== (mW = WW.client.ironChestPasskeyCache.getCachedPasskeyForChest(iW)) && void 0 !== mW ? mW : [0, 0, 0, 0]]
+           Ji: [...null !== (yR = RR.client.ironChestPasskeyCache.getCachedPasskeyForChest(JR)) && void 0 !== yR ? yR : [0, 0, 0, 0]]
```

#### 3160. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28304` → after: `L27835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27835) · [Before (L28304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28304)

```diff
-         type: WW.PO,
+         type: RR.tG,
```

#### 3161. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28306` → after: `L27837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27837) · [Before (L28306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28306)

```diff
-         numSlots: WW.EO.numSlots,
+         numSlots: RR.yG.numSlots,
```

#### 3162. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28322` → after: `L27853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27853) · [Before (L28322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28322)

```diff
-       const LW = (0, yW.d)(),
+       const qR = (0, BR.e)(),
```

#### 3163. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28330` → after: `L27861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27861) · [Before (L28330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28330)

```diff
-         displayName: null !== (iW = PW.attributes.customDisplayName) && void 0 !== iW ? iW : LW.getItemStat((0, yW.h)().Dv, cW, "displayName"),
+         displayName: null !== (JR = ZR.attributes.customDisplayName) && void 0 !== JR ? JR : qR.getItemStat((0, BR.i)().WH, iR, "displayName"),
```

#### 3164. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28332` → after: `L27863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27863) · [Before (L28332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28332)

```diff
-         clipSize: null !== (OW = null !== (mW = null === (EW = PW.attributes.customAttributes.gunStats) || void 0 === EW ? void 0 : EW.clipSize) && void 0 !== mW ? mW : null === (NW = ji.d.get(`${cW}GunStats`)) || void 0 === NW ? void 0 : NW.clipSize) && void 0 !== OW ? OW : WW.t … [truncated]
+         clipSize: null !== (GR = null !== (yR = null === (tR = ZR.attributes.customAttributes.gunStats) || void 0 === tR ? void 0 : tR.clipSize) && void 0 !== yR ? yR : null === (uR = LJ.c.get(`${iR}GunStats`)) || void 0 === uR ? void 0 : uR.clipSize) && void 0 !== GR ? GR : RR.t … [truncated]
```

#### 3165. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28338` → after: `L27869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27869) · [Before (L28338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28338)

```diff
-         inventory: (0, BW.r)((function() {
+         inventory: (0, jR.l)((function() {
```

#### 3166. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28349` → after: `L27880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27880) · [Before (L28349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28349)

```diff
-           WW.EO ? iW = WW.EO.items.map(qi) : WW.inCreative && (Ri ??= vi.c.map((WW => ({
+           RR.yG ? JR = RR.yG.items.map(SJ) : RR.inCreative && (jJ ??= DJ.d.map((RR => ({
```

#### 3167. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28351-L28352` → after: `L27882-L27883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27882-L27883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27882-L27883) · [Before (L28351-L28352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28351-L28352)

```diff
-             amount: (0, yW.d)().getItemTypeObj(WW).stackable ? 1 : null,
-             attributes: (0, ei.j)(WW)
+             amount: (0, BR.e)().getItemTypeObj(RR).stackable ? 1 : null,
+             attributes: (0, NJ.g)(RR)
```

#### 3168. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28363-L28364` → after: `L27894-L27895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27894-L27895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27894-L27895) · [Before (L28363-L28364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28363-L28364)

```diff
-         }), [...BW.g, "chestToggleFromServer", "syncedInvenFromServer", Qi], (0, BW.o)("creative")),
-         hotbar: (0, BW.r)((function() {
+         }), [...jR.h, "chestToggleFromServer", "syncedInvenFromServer", TJ], (0, jR.j)("creative")),
+         hotbar: (0, jR.l)((function() {
```

#### 3169. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28377` → after: `L27908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27908) · [Before (L28377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28377)

```diff
-         }), [...BW.g, "localPlayerNewShotsLeft"], (0, BW.k)("DisplayName", "GunStats")),
+         }), [...jR.h, "localPlayerNewShotsLeft"], (0, jR.i)("DisplayName", "GunStats")),
```

#### 3170. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28383-L28384` → after: `L27914-L27915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27914-L27915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27914-L27915) · [Before (L28383-L28384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28383-L28384)

```diff
-               } = (0, yW.d)(), iW = (0, yW.h)().Dv, OW = {};
-               for (const EW of Object.keys(QW.n)) WW.getPossibleEnchantments(iW, EW).length > 0 && (OW[EW] = !0);
+               } = (0, BR.e)(), JR = (0, BR.i)().WH, GR = {};
+               for (const tR of Object.keys(hR.o)) RR.getPossibleEnchantments(JR, tR).length > 0 && (GR[tR] = !0);
```

#### 3171. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28386` → after: `L27917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27917) · [Before (L28386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28386)

```diff
-               for (const EW of Object.keys(gi.e)) mW[EW] = !0;
+               for (const tR of Object.keys(HJ.g)) yR[tR] = !0;
```

#### 3172. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28397-L28399` → after: `L27928-L27930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27928-L27930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27928-L27930) · [Before (L28397-L28399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28397-L28399)

```diff
-         creativeVisibility: (0, BW.r)((function() {
-           const WW = (0, yW.d)(),
-             iW = (0, yW.h)().Dv,
+         creativeVisibility: (0, jR.l)((function() {
+           const RR = (0, BR.e)(),
+             JR = (0, BR.i)().WH,
```

#### 3173. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28401` → after: `L27932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27932) · [Before (L28401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28401)

```diff
-           for (const mW of vi.c) {
+           for (const yR of DJ.d) {
```

#### 3174. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28406` → after: `L27937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27937) · [Before (L28406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28406)

```diff
-             publicLobby: (0, Di.R)((0, YW.d)().lobbyName),
+             publicLobby: (0, oJ.E)((0, MR.d)().lobbyName),
```

#### 3175. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28409` → after: `L27940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27940) · [Before (L28409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28409)

```diff
-         }), ["connectedGameChanged"], (0, BW.k)("ShowInCreativeInven"))
+         }), ["connectedGameChanged"], (0, jR.i)("ShowInCreativeInven"))
```

#### 3176. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28427` → after: `L27958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27958) · [Before (L28427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28427)

```diff
-           NL: OW
+           Vq: GR
```

#### 3177. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28431` → after: `L27962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27962) · [Before (L28431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28431)

```diff
-           blockName: (0, yW.d)().getMetaInfo(OW).rootName
+           blockName: (0, BR.e)().getMetaInfo(GR).rootName
```

#### 3178. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28437-L28438` → after: `L27968-L27969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27968-L27969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27968-L27969) · [Before (L28437-L28438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28437-L28438)

```diff
-       const WW = (0, yW.h)();
-       return WW.EY.FiW(WW.Dv)
+       const RR = (0, BR.i)();
+       return RR.zC.IGR(RR.WH)
```

#### 3179. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28442` → after: `L27973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27973) · [Before (L28442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28442)

```diff
-         const iW = (0, yW.h)();
+         const JR = (0, BR.i)();
```

#### 3180. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28444` → after: `L27975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27975) · [Before (L28444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28444)

```diff
-         iW.EY.ziW(iW.Dv).setSelectedSlotIndex(WW), OW = WW, (0, HW.sendColyMessage)(PW.Qh, OW)
+         JR.zC.PGR(JR.WH).setSelectedSlotIndex(RR), GR = RR, (0, bR.sendColyMessage)(ZR.fi, GR)
```

#### 3181. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28452` → after: `L27983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27983) · [Before (L28452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28452)

```diff
-         return di.e.removeItemClient(mO(), iW, OW, mW)
+         return xJ.c.removeItemClient(JG(), JR, GR, yR)
```

#### 3182. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28459` → after: `L27990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27990) · [Before (L28459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28459)

```diff
-         return di.e.swapPosClient(mO(), iW, OW)
+         return xJ.c.swapPosClient(JG(), JR, GR)
```

#### 3183. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28467` → after: `L27998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L27998) · [Before (L28467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28467)

```diff
-         return di.e.movePosWithAmtClient(mO(), iW, OW, mW)
+         return xJ.c.movePosWithAmtClient(JG(), JR, GR, yR)
```

#### 3184. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28476` → after: `L28007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28007) · [Before (L28476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28476)

```diff
-         return di.e.moveItemIntoIdxsClient(mO(), OW, mW, iW, EW).primarySlotIdx
+         return xJ.c.moveItemIntoIdxsClient(JG(), GR, yR, JR, tR).primarySlotIdx
```

#### 3185. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28480-L28482` → after: `L28011-L28013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28011-L28013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28011-L28013) · [Before (L28480-L28482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28480-L28482)

```diff
-         WW = (0, yW.d)().client.inventoryPrediction.predict(fW.b.closeChest()), (0, HW.sendColyMessage)(PW.sg, {
-           NP: WW
-         }), CW.l.iZ(Qi)
+         RR = (0, BR.e)().client.inventoryPrediction.predict(mR.e.closeChest()), (0, bR.sendColyMessage)(ZR.Kg, {
+           KZ: RR
+         }), zR.n.JK(TJ)
```

#### 3186. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28490` → after: `L28021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28021) · [Before (L28490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28490)

```diff
-           rL: OW
+           Ji: GR
```

#### 3187. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28493-L28495` → after: `L28024-L28026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28024-L28026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28024-L28026) · [Before (L28493-L28495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28493-L28495)

```diff
-           (0, HW.sendColyMessage)(PW.Yf, {
-             CE: WW,
-             rL: iW
+           (0, bR.sendColyMessage)(ZR.tg, {
+             Ft: RR,
+             Ji: JR
```

#### 3188. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28502` → after: `L28033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28033) · [Before (L28502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28502)

```diff
-           rL: OW
+           Ji: GR
```

#### 3189. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28505-L28507` → after: `L28036-L28038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28036-L28038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28036-L28038) · [Before (L28505-L28507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28505-L28507)

```diff
-           (0, HW.sendColyMessage)(PW.Uh, {
-             CE: WW,
-             rL: iW
+           (0, bR.sendColyMessage)(ZR.hi, {
+             Ft: RR,
+             Ji: JR
```

#### 3190. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28515` → after: `L28046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28046) · [Before (L28515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28515)

```diff
-           (0, HW.sendColyMessage)(PW.xh, WW)
+           (0, bR.sendColyMessage)(ZR.Oh, RR)
```

#### 3191. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28519-L28521` → after: `L28050-L28052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28050-L28052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28050-L28052) · [Before (L28519-L28521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28519-L28521)

```diff
-     var PO = OW(7444),
-       LO = OW(40289),
-       cO = OW(40955);
+     var tG = GR(7581),
+       uG = GR(40336),
+       ZG = GR(40957);
```

#### 3192. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28528` → after: `L28059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28059) · [Before (L28528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28528)

```diff
-           const mW = (0, yW.h)();
+           const yR = (0, BR.i)();
```

#### 3193. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28543` → after: `L28074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28074) · [Before (L28543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28543)

```diff
-           const cW = iW.events.map((WW => (0, CW.n)(WW, LW)));
+           const iR = JR.events.map((RR => (0, zR.q)(RR, qR)));
```

#### 3194. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28552-L28554` → after: `L28083-L28085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28083-L28085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28083-L28085) · [Before (L28552-L28554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28552-L28554)

```diff
-         health: ci.r,
-         aura: ci.i,
-         heldItemAim: (0, BW.r)((function() {
+         health: iJ.t,
+         aura: iJ.l,
+         heldItemAim: (0, jR.l)((function() {
```

#### 3195. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28556-L28557` → after: `L28087-L28088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28087-L28088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28087-L28088) · [Before (L28556-L28557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28556-L28557)

```diff
-           const OW = (0, yW.h)(),
-             mW = null === (WW = OW.EY.UOW(OW.Dv)) || void 0 === WW ? void 0 : WW.nS,
+           const GR = (0, BR.i)(),
+             yR = null === (RR = GR.zC.tyR(GR.WH)) || void 0 === RR ? void 0 : RR.gC,
```

#### 3196. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28568-L28569` → after: `L28099-L28100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28099-L28100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28099-L28100) · [Before (L28568-L28569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28568-L28569)

```diff
-           const iW = (0, yW.h)();
-           return !0 === (null === iW || void 0 === iW || null === (WW = iW.EY.aiW(iW.Dv)) || void 0 === WW ? void 0 : WW.crouching)
+           const JR = (0, BR.i)();
+           return !0 === (null === JR || void 0 === JR || null === (RR = JR.zC.oGR(JR.WH)) || void 0 === RR ? void 0 : RR.crouching)
```

#### 3197. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28572-L28573` → after: `L28103-L28104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28103-L28104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28103-L28104) · [Before (L28572-L28573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28572-L28573)

```diff
-           const WW = (0, yW.h)();
-           return WW ? (0, Li.c)(WW) : 0
+           const RR = (0, BR.i)();
+           return RR ? (0, qJ.e)(RR) : 0
```

#### 3198. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28577-L28578` → after: `L28108-L28109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28108-L28109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28108-L28109) · [Before (L28577-L28578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28577-L28578)

```diff
-             const OW = (0, yW.h)();
-             return (0, Li.l)(null === (WW = OW.EY.riW(OW.Dv)) || void 0 === WW || null === (iW = WW.selectedItem) || void 0 === iW ? void 0 : iW.name)
+             const GR = (0, BR.i)();
+             return (0, qJ.t)(null === (RR = GR.zC.cGR(GR.WH)) || void 0 === RR || null === (JR = RR.selectedItem) || void 0 === JR ? void 0 : JR.name)
```

#### 3199. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28583-L28587` → after: `L28114-L28118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28114-L28118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28114-L28118) · [Before (L28583-L28587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28583-L28587)

```diff
-           const WW = (0, yW.h)(),
-             iW = null === WW || void 0 === WW ? void 0 : WW.EY.HiW(WW.Dv);
-           if (!iW) return (0, ci.p)(!1, !1);
-           const OW = (0, PO.g)(!0 === ji.d.get("creative"), iW.physicsState.type) && WW.EY.jOW(WW.Dv).isAlive;
-           return (0, ci.p)(OW, iW._flying)
+           const RR = (0, BR.i)(),
+             JR = null === RR || void 0 === RR ? void 0 : RR.zC.aGR(RR.WH);
+           if (!JR) return (0, iJ.s)(!1, !1);
+           const GR = (0, tG.f)(!0 === LJ.c.get("creative"), JR.physicsState.type) && RR.zC.yyR(RR.WH).isAlive;
+           return (0, iJ.s)(GR, JR._flying)
```

#### 3200. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28592` → after: `L28123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28123) · [Before (L28592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28592)

```diff
-           const iW = (0, yW.h)().Av;
+           const JR = (0, BR.i)().UH;
```

#### 3201. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28595-L28597` → after: `L28126-L28128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28126-L28128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28126-L28128) · [Before (L28595-L28597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28595-L28597)

```diff
-               EE: OW,
-               NE: mW,
-               PE: EW
+               Zt: GR,
+               ft: yR,
+               Vt: tR
```

#### 3202. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28601-L28602` → after: `L28132-L28133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28132-L28133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28132-L28133) · [Before (L28601-L28602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28601-L28602)

```diff
-               NE: mW,
-               PE: EW
+               ft: yR,
+               Vt: tR
```

#### 3203. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28606` → after: `L28137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28137) · [Before (L28606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28606)

```diff
-         shotDamageToShow: (0, ci.t)((WW => {
+         shotDamageToShow: (0, iJ.v)((RR => {
```

#### 3204. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28608-L28609` → after: `L28139-L28140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28139-L28140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28139-L28140) · [Before (L28608-L28609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28608-L28609)

```diff
-           const OW = (0, yW.h)();
-           return !0 === (null === (iW = OW.sV[OW.Dv][WW]) || void 0 === iW ? void 0 : iW.showDamageAmounts)
+           const GR = (0, BR.i)();
+           return !0 === (null === (JR = GR.Qm[GR.WH][RR]) || void 0 === JR ? void 0 : JR.showDamageAmounts)
```

#### 3205. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28619-L28620` → after: `L28150-L28151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28150-L28151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28150-L28151) · [Before (L28619-L28620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28619-L28620)

```diff
-             } = (0, yW.d)();
-             return (0, cO.b)(iW, OW, WW)
+             } = (0, BR.e)();
+             return (0, ZG.e)(JR, GR, RR)
```

#### 3206. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28629` → after: `L28160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28160) · [Before (L28629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28629)

```diff
-           (0, yW.d)().client.cameraController.applyTemporaryThirdPerson(iW)
+           (0, BR.e)().client.cameraController.applyTemporaryThirdPerson(JR)
```

#### 3207. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28643` → after: `L28174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28174) · [Before (L28643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28643)

```diff
-           (0, HW.sendColyMessage)(PW.vh, {
+           (0, bR.sendColyMessage)(ZR.Mh, {
```

#### 3208. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28652` → after: `L28183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28183) · [Before (L28652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28652)

```diff
-           (0, HW.sendColyMessage)(PW.yg, WW, !0)
+           (0, bR.sendColyMessage)(ZR.Ng, RR, !0)
```

#### 3209. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28661-L28663` → after: `L28192-L28194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28192-L28194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28192-L28194) · [Before (L28661-L28663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28661-L28663)

```diff
-         mW = iW, EW = OW, (0, HW.sendColyMessage)(PW.Xg, {
-           bt: mW,
-           jt: EW
+         yR = JR, tR = GR, (0, bR.sendColyMessage)(ZR.dh, {
+           WV: yR,
+           AV: tR
```

#### 3210. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28669` → after: `L28200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28200) · [Before (L28669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28669)

```diff
-           ct: OW
+           wV: GR
```

#### 3211. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28672-L28675` → after: `L28203-L28206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28203-L28206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28203-L28206) · [Before (L28672-L28675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28672-L28675)

```diff
-         mW = iW, EW = OW, (0, HW.sendColyMessage)(PW.Dj, {
-           jP: mW,
-           UP: EW,
-           kP: 5
+         yR = JR, tR = GR, (0, bR.sendColyMessage)(ZR.Uj, {
+           XZ: yR,
+           MZ: tR,
+           BZ: 5
```

#### 3212. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28681` → after: `L28212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28212) · [Before (L28681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28681)

```diff
-           ct: OW
+           wV: GR
```

#### 3213. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28684` → after: `L28215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28215) · [Before (L28684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28684)

```diff
-           (0, HW.sendColyMessage)(PW.Bj, {
+           (0, bR.sendColyMessage)(ZR.Tj, {
```

#### 3214. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28686` → after: `L28217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28217) · [Before (L28686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28686)

```diff
-             ct: iW
+             wV: JR
```

#### 3215. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28691-L28693` → after: `L28222-L28224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28222-L28224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28222-L28224) · [Before (L28691-L28693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28691-L28693)

```diff
-     var AO = OW(39285),
-       bO = OW(40203),
-       jO = OW(100);
+     var wG = GR(39261),
+       rG = GR(40246),
+       eG = GR(103);
```

#### 3216. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28709` → after: `L28240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28240) · [Before (L28709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28709)

```diff
-           lifeformType: null === WW && null !== LW && void 0 !== LW ? LW : null,
+           lifeformType: null === RR && null !== qR && void 0 !== qR ? qR : null,
```

#### 3217. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28715-L28716` → after: `L28246-L28247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28246-L28247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28246-L28247) · [Before (L28715-L28716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28715-L28716)

```diff
-       const cW = (0, yW.d)(),
-         wW = (0, mW.g)(EW),
+       const iR = (0, BR.e)(),
+         fR = (0, yR.l)(tR),
```

#### 3218. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28722-L28723` → after: `L28253-L28254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28253-L28254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28253-L28254) · [Before (L28722-L28723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28722-L28723)

```diff
-         lifeformType: null === tW && null !== (iW = null !== ZW && void 0 !== ZW ? ZW : LW) && void 0 !== iW ? iW : null,
-         colour: PW || (0, bO.j)(EW, "killfeedColour") || (wW ? "#2727f1" : "#912c2c"),
+         lifeformType: null === VR && null !== (JR = null !== KR && void 0 !== KR ? KR : qR) && void 0 !== JR ? JR : null,
+         colour: ZR || (0, rG.f)(tR, "killfeedColour") || (fR ? "#2727f1" : "#912c2c"),
```

#### 3219. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28725` → after: `L28256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28256) · [Before (L28725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28725)

```diff
-         realName: "Player" === ZW && null !== (OW = cW.getRawEntityName(EW)) && void 0 !== OW ? OW : null
+         realName: "Player" === KR && null !== (GR = iR.getRawEntityName(tR)) && void 0 !== GR ? GR : null
```

#### 3220. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28729` → after: `L28260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28260) · [Before (L28729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28729)

```diff
-         players: (0, BW.r)((function() {
+         players: (0, jR.l)((function() {
```

#### 3221. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28731` → after: `L28262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28262) · [Before (L28731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28731)

```diff
-           const iW = (0, yW.d)();
+           const JR = (0, BR.e)();
```

#### 3222. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28742` → after: `L28273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28273) · [Before (L28742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28742)

```diff
-               name: null !== (EW = iW.getRawEntityName(PW)) && void 0 !== EW ? EW : null,
+               name: null !== (tR = JR.getRawEntityName(ZR)) && void 0 !== tR ? tR : null,
```

#### 3223. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28744` → after: `L28275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28275) · [Before (L28744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28744)

```diff
-               cosmetics: null !== (NW = AO.d[PW]) && void 0 !== NW ? NW : null
+               cosmetics: null !== (uR = wG.e[ZR]) && void 0 !== uR ? uR : null
```

#### 3224. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28750` → after: `L28281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28281) · [Before (L28750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28750)

```diff
-             localId: null !== (WW = (0, yW.h)().Av) && void 0 !== WW ? WW : null
+             localId: null !== (RR = (0, BR.i)().UH) && void 0 !== RR ? RR : null
```

#### 3225. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28753` → after: `L28284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28284) · [Before (L28753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28753)

```diff
-         lobbyLeaderboardRows: (0, BW.r)((function() {
+         lobbyLeaderboardRows: (0, jR.l)((function() {
```

#### 3226. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28755` → after: `L28286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28286) · [Before (L28755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28755)

```diff
-           for (const PW of null !== (iW = null === (OW = (0, yW.d)()) || void 0 === OW ? void 0 : OW.getPlayerIds()) && void 0 !== iW ? iW : []) {
+           for (const ZR of null !== (JR = null === (GR = (0, BR.e)()) || void 0 === GR ? void 0 : GR.getPlayerIds()) && void 0 !== JR ? JR : []) {
```

#### 3227. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28758-L28760` → after: `L28289-L28291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28289-L28291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28289-L28291) · [Before (L28758-L28760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28758-L28760)

```diff
-               colour: null !== (mW = (0, bO.j)(PW, "colorInLobbyLeaderboard")) && void 0 !== mW ? mW : null,
-               values: null !== (EW = (0, bO.j)(PW, "lobbyLeaderboardValues")) && void 0 !== EW ? EW : null,
-               tags: null !== (NW = (0, bO.j)(PW, "lobbyLeaderboardTags")) && void 0 !== NW ? NW : null
+               colour: null !== (yR = (0, rG.f)(ZR, "colorInLobbyLeaderboard")) && void 0 !== yR ? yR : null,
+               values: null !== (tR = (0, rG.f)(ZR, "lobbyLeaderboardValues")) && void 0 !== tR ? tR : null,
+               tags: null !== (uR = (0, rG.f)(ZR, "lobbyLeaderboardTags")) && void 0 !== uR ? uR : null
```

#### 3228. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28769` → after: `L28300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28300) · [Before (L28769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28769)

```diff
-             const iW = (0, CW.n)("playerKilled", (iW => {
+             const JR = (0, zR.q)("playerKilled", (JR => {
```

#### 3229. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28789` → after: `L28320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28320) · [Before (L28789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28789)

```diff
-               OW = (0, CW.n)("customKillfeed", (iW => {
+               GR = (0, zR.q)("customKillfeed", (JR => {
```

#### 3230. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28807` → after: `L28338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28338) · [Before (L28807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28807)

```diff
-         chatReceived: (0, ci.k)((function(WW) {
+         chatReceived: (0, iJ.n)((function(RR) {
```

#### 3231. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28809` → after: `L28340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28340) · [Before (L28809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28809)

```diff
-           const mW = (0, yW.d)(),
+           const yR = (0, BR.e)(),
```

#### 3232. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28813-L28815` → after: `L28344-L28346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28344-L28346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28344-L28346) · [Before (L28813-L28815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28813-L28815)

```diff
-             name: null !== EW && void 0 !== EW ? EW : null,
-             local: EW === mW.getRawEntityName((0, yW.h)().Dv),
-             profileEffect: null !== (iW = null === (OW = AO.d[WW]) || void 0 === OW ? void 0 : OW.profileEffect) && void 0 !== iW ? iW : null
+             name: null !== tR && void 0 !== tR ? tR : null,
+             local: tR === yR.getRawEntityName((0, BR.i)().WH),
+             profileEffect: null !== (JR = null === (GR = wG.e[RR]) || void 0 === GR ? void 0 : GR.profileEffect) && void 0 !== JR ? JR : null
```

#### 3233. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28818` → after: `L28349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28349) · [Before (L28818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28818)

```diff
-         chatRemoved: ci.o
+         chatRemoved: iJ.q
```

#### 3234. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28823` → after: `L28354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28354) · [Before (L28823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28823)

```diff
-           (0, HW.sendColyMessage)(PW.fj, WW)
+           (0, bR.sendColyMessage)(ZR.Bj, RR)
```

#### 3235. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28833` → after: `L28364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28364) · [Before (L28833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28833)

```diff
-           (0, HW.sendColyMessage)(PW.nh, {
+           (0, bR.sendColyMessage)(ZR.zh, {
```

#### 3236. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28836` → after: `L28367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28367) · [Before (L28836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28836)

```diff
-             shopVersion: ji.d.get("_shopVersion"),
+             shopVersion: LJ.c.get("_shopVersion"),
```

#### 3237. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28844-L28847` → after: `L28375-L28378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28375-L28378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28375-L28378) · [Before (L28844-L28847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28844-L28847)

```diff
-       (0, HW.sendColyMessage)(PW.Pj, {
-         et: WW,
-         vt: iW,
-         gt: OW,
+       (0, bR.sendColyMessage)(ZR.fk, {
+         PV: RR,
+         IV: JR,
+         mV: GR,
```

#### 3238. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28849` → after: `L28380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28380) · [Before (L28849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28849)

```diff
-         PL: EW
+         Kq: tR
```

#### 3239. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28855` → after: `L28386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28386) · [Before (L28855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28855)

```diff
-           tP: iW,
+           LZ: JR,
```

#### 3240. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28864` → after: `L28395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28395) · [Before (L28864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28864)

```diff
-           return CW.l.iZ("chat", WW), !1
+           return zR.n.JK("chat", RR), !1
```

#### 3241. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28867-L28869` → after: `L28398-L28400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28398-L28400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28398-L28400) · [Before (L28867-L28869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28867-L28869)

```diff
-           (0, HW.sendColyMessage)(PW._f, {
-             tP: WW,
-             ZP: iW
+           (0, bR.sendColyMessage)(ZR.wg, {
+             LZ: RR,
+             nZ: JR
```

#### 3242. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28875-L28876` → after: `L28406-L28407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28406-L28407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28406-L28407) · [Before (L28875-L28876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28875-L28876)

```diff
-         iW = WW, (0, HW.sendColyMessage)(PW.ih, {
-           Nt: iW
+         JR = RR, (0, bR.sendColyMessage)(ZR.sh, {
+           fV: JR
```

#### 3243. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28899` → after: `L28430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28430) · [Before (L28899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28899)

```diff
-           (0, HW.sendColyMessage)(PW._i, WW)
+           (0, bR.sendColyMessage)(ZR.mj, RR)
```

#### 3244. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28909` → after: `L28440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28440) · [Before (L28909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28909)

```diff
-           (0, HW.sendColyMessage)("customGame" === WW ? PW.Mg : PW.Bh, {
+           (0, bR.sendColyMessage)("customGame" === RR ? ZR.Vg : ZR.Ph, {
```

#### 3245. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28911` → after: `L28442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28442) · [Before (L28911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28911)

```diff
-             PL: OW
+             Kq: GR
```

#### 3246. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28917-L28918` → after: `L28448-L28449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28448-L28449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28448-L28449) · [Before (L28917-L28918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28917-L28918)

```diff
-           (0, HW.sendColyMessage)(PW.di, {
-             LL: WW
+           (0, bR.sendColyMessage)(ZR.ti, {
+             wq: RR
```

#### 3247. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28924` → after: `L28455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28455) · [Before (L28924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28924)

```diff
-           (0, HW.sendColyMessage)(PW.Ij, WW)
+           (0, bR.sendColyMessage)(ZR._j, RR)
```

#### 3248. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28928-L28929` → after: `L28459-L28460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28459-L28460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28459-L28460) · [Before (L28928-L28929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28928-L28929)

```diff
-     var yO = OW(40957),
-       TO = OW(3323);
+     var XG = GR(40959),
+       MG = GR(3452);
```

#### 3249. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28935` → after: `L28466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28466) · [Before (L28935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28935)

```diff
-           Oc: mW,
+           Zi: yR,
```

#### 3250. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28939-L28943` → after: `L28470-L28474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28470-L28474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28470-L28474) · [Before (L28939-L28943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28939-L28943)

```diff
-           (0, HW.sendColyMessage)(PW.Fj, {
-             QL: WW,
-             Wc: iW,
-             Oc: OW,
-             mc: mW
+           (0, bR.sendColyMessage)(ZR.Vj, {
+             ti: RR,
+             ui: JR,
+             Zi: GR,
+             qi: yR
```

#### 3251. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28954-L28957` → after: `L28485-L28488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28485-L28488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28485-L28488) · [Before (L28954-L28957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28954-L28957)

```diff
-         EW = iW, NW = OW, LW = mW, (0, HW.sendColyMessage)(PW.Gj, {
-           Ut: EW,
-           kt: NW,
-           st: LW
+         tR = JR, uR = GR, qR = yR, (0, bR.sendColyMessage)(ZR.Xj, {
+           CV: tR,
+           XV: uR,
+           MV: qR
```

#### 3252. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28962` → after: `L28493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28493) · [Before (L28962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28962)

```diff
-           (0, HW.sendColyMessage)(PW.Jj, WW)
+           (0, bR.sendColyMessage)(ZR.ak, RR)
```

#### 3253. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28971-L28973` → after: `L28502-L28504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28502-L28504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28502-L28504) · [Before (L28971-L28973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28971-L28973)

```diff
-         mW = iW, EW = (0, yO.c)(OW), (0, HW.sendColyMessage)(PW.ej, {
-           NL: EW,
-           EL: mW
+         yR = JR, tR = (0, XG.c)(GR), (0, bR.sendColyMessage)(ZR.yj, {
+           Vq: tR,
+           fq: yR
```

#### 3254. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28978` → after: `L28509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28509) · [Before (L28978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28978)

```diff
-           (0, HW.sendColyMessage)(PW.vg, WW, (0, TO.h)(WW))
+           (0, bR.sendColyMessage)(ZR.Mg, RR, (0, MG.e)(RR))
```

#### 3255. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28982-L28985` → after: `L28513-L28516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28513-L28516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28513-L28516) · [Before (L28982-L28985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28982-L28985)

```diff
-     var hO = OW(38841),
-       HO = OW(38952),
-       nO = OW(40298),
-       uO = OW(39213);
+     var lG = GR(38836),
+       pG = GR(38943),
+       gG = GR(40353),
+       bG = GR(39192);
```

#### 3256. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28990` → after: `L28521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28521) · [Before (L28990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28990)

```diff
-         rb: NW,
+         tL: uR,
```

#### 3257. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28992-L28993` → after: `L28523-L28524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28523-L28524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28523-L28524) · [Before (L28992-L28993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28992-L28993)

```diff
-       } = WW.TZ, LW = WW.TZ.NmW(), cW = iW * (null !== (mW = null === LW || void 0 === LW ? void 0 : LW.renderWidth) && void 0 !== mW ? mW : PW.getRenderWidth()), wW = OW * (null !== (EW = null === LW || void 0 === LW ? void 0 : LW.renderHeight) && void 0 !== EW ? EW : PW.getRend … [truncated]
-       return LW ? (0, uO.f)(LW, cW, wW) : NW.createPickingRay(cW, wW, null, null)
+       } = RR.lK, qR = RR.lK.EyR(), iR = JR * (null !== (yR = null === qR || void 0 === qR ? void 0 : qR.renderWidth) && void 0 !== yR ? yR : ZR.getRenderWidth()), fR = GR * (null !== (tR = null === qR || void 0 === qR ? void 0 : qR.renderHeight) && void 0 !== tR ? tR : ZR.getRend … [truncated]
+       return qR ? (0, bG.g)(qR, iR, fR) : uR.createPickingRay(iR, fR, null, null)
```

#### 3258. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28995-L28996` → after: `L28526-L28527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28526-L28527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28526-L28527) · [Before (L28995-L28996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28995-L28996)

```diff
-     var dO = OW(39265),
-       eO = OW(40960);
+     var OG = GR(39245),
+       xG = GR(40965);
```

#### 3259. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L28998-L29002` → after: `L28529-L28533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28529-L28533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28529-L28533) · [Before (L28998-L29002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L28998-L29002)

```diff
-         fullInventory: (0, BW.r)((function() {
-           return (0, nO.b)((0, yW.h)())
-         }), ["playerInventoryComponentChanged"], (0, BW.o)("useInventory", "useFullInventory")),
-         freeCamera: (0, BW.r)((function() {
-           const WW = (0, yW.d)().client.freeCameraController;
+         fullInventory: (0, jR.l)((function() {
+           return (0, gG.b)((0, BR.i)())
+         }), ["playerInventoryComponentChanged"], (0, jR.j)("useInventory", "useFullInventory")),
+         freeCamera: (0, jR.l)((function() {
+           const RR = (0, BR.e)().client.freeCameraController;
```

#### 3260. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29011-L29012` → after: `L28542-L28543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28542-L28543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28542-L28543) · [Before (L29011-L29012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29011-L29012)

```diff
-           const WW = (0, yW.h)();
-           return WW.EY.Vk(WW.Dv)
+           const RR = (0, BR.i)();
+           return RR.zC.vW(RR.WH)
```

#### 3261. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29016` → after: `L28547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28547) · [Before (L29016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29016)

```diff
-           return null !== (WW = null === (iW = (0, yW.h)().WiW) || void 0 === iW ? void 0 : iW.position) && void 0 !== WW ? WW : null
+           return null !== (RR = null === (JR = (0, BR.i)().IJR) || void 0 === JR ? void 0 : JR.position) && void 0 !== RR ? RR : null
```

#### 3262. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29023` → after: `L28554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28554) · [Before (L29023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29023)

```diff
-           const mW = (0, yW.h)(),
+           const yR = (0, BR.i)(),
```

#### 3263. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29029` → after: `L28560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28560) · [Before (L29029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29029)

```diff
-           (0, yW.d)().sF(PW, PW);
+           (0, BR.e)().x_(ZR, ZR);
```

#### 3264. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29033` → after: `L28564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28564) · [Before (L29033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29033)

```diff
-           return (0, eO.h)(((WW, iW, OW) => (LW = mW.oZ.jR(WW, iW, OW), 0 !== LW)), PW, [NW.x, NW.y, NW.z], eO.d, cW, wW) ? {
+           return (0, xG.e)(((RR, JR, GR) => (qR = yR.NK.eT(RR, JR, GR), 0 !== qR)), ZR, [uR.x, uR.y, uR.z], xG.d, iR, fR) ? {
```

#### 3265. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29036` → after: `L28567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28567) · [Before (L29036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29036)

```diff
-             name: (0, Oi.f)(LW)
+             name: (0, GJ.h)(qR)
```

#### 3266. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29042-L29045` → after: `L28573-L28576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28573-L28576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28573-L28576) · [Before (L29042-L29045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29042-L29045)

```diff
-             EY: NW,
-             Dv: PW
-           } = (0, yW.h)(), LW = null === (WW = NW.riW(PW)) || void 0 === WW ? void 0 : WW.selectedItem;
-           return null !== LW && void 0 !== LW && null !== (iW = LW.attributes) && void 0 !== iW && null !== (OW = iW.customAttributes) && void 0 !== OW && null !== (mW = OW.enchantments) && void 0 !== mW && mW.Momentum && null !== (EW = NW.UOW(PW).fistItem.momentumFrac) && void 0 … [truncated]
+             zC: uR,
+             WH: ZR
+           } = (0, BR.i)(), qR = null === (RR = uR.cGR(ZR)) || void 0 === RR ? void 0 : RR.selectedItem;
+           return null !== qR && void 0 !== qR && null !== (JR = qR.attributes) && void 0 !== JR && null !== (GR = JR.customAttributes) && void 0 !== GR && null !== (yR = GR.enchantments) && void 0 !== yR && yR.Momentum && null !== (tR = uR.tyR(ZR).fistItem.momentumFrac) && void 0 … [truncated]
```

#### 3267. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29047-L29048` → after: `L28578-L28579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28578-L28579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28578-L28579) · [Before (L29047-L29048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29047-L29048)

```diff
-         screenPos: WW => (0, dO.h)((0, yW.h)(), WW),
-         cameraZoom: () => (0, yW.d)().client.cameraController.getZoomDistance(),
+         screenPos: RR => (0, OG.i)((0, BR.i)(), RR),
+         cameraZoom: () => (0, BR.e)().client.cameraController.getZoomDistance(),
```

#### 3268. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29050-L29051` → after: `L28581-L28582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28581-L28582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28581-L28582) · [Before (L29050-L29051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29050-L29051)

```diff
-           const WW = (0, yW.h)();
-           return (0, yW.d)().client.freeCameraController.isEnabled() ? WW.EY.Vk(WW.camera.lG) : null
+           const RR = (0, BR.i)();
+           return (0, BR.e)().client.freeCameraController.isEnabled() ? RR.zC.vW(RR.camera.R6) : null
```

#### 3269. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29054-L29056` → after: `L28585-L28587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28585-L28587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28585-L28587) · [Before (L29054-L29056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29054-L29056)

```diff
-           const WW = (0, yW.h)(),
-             iW = WW.EY.jB(WW.Dv);
-           if (!iW || WW.EY.HiW(WW.Dv)._flying) return !1;
+           const RR = (0, BR.i)(),
+             JR = RR.zC.Lk(RR.WH);
+           if (!JR || RR.zC.aGR(RR.WH)._flying) return !1;
```

#### 3270. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29060` → after: `L28591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28591) · [Before (L29060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29060)

```diff
-           } = WW.EY.YG(WW.Dv), EW = {
+           } = RR.zC.f6(RR.WH), tR = {
```

#### 3271. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29062` → after: `L28593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28593) · [Before (L29062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29062)

```diff
-             Sj: iW.Sj,
+             BL: JR.BL,
```

#### 3272. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29065` → after: `L28596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28596) · [Before (L29065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29065)

```diff
-           return (0, HO.d)(EW, (0, HO.b)(WW))
+           return (0, pG.c)(tR, (0, pG.b)(RR))
```

#### 3273. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29068-L29069` → after: `L28599-L28600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28599-L28600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28599-L28600) · [Before (L29068-L29069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29068-L29069)

```diff
-           const WW = (0, yW.h)();
-           return (0, hO.g)(WW, WW.Dv, !1).map((WW => (0, Oi.f)(WW)))
+           const RR = (0, BR.i)();
+           return (0, lG.g)(RR, RR.WH, !1).map((RR => (0, GJ.h)(RR)))
```

#### 3274. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29074` → after: `L28605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28605) · [Before (L29074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29074)

```diff
-           (0, yW.d)().client.cameraController.setCameraZoom(WW)
+           (0, BR.e)().client.cameraController.setCameraZoom(RR)
```

#### 3275. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29077` → after: `L28608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28608) · [Before (L29077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29077)

```diff
-           (0, yW.d)().client.freeCameraController.setMovesFly(WW)
+           (0, BR.e)().client.freeCameraController.setMovesFly(RR)
```

#### 3276. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29080` → after: `L28611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28611) · [Before (L29080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29080)

```diff
-           (0, yW.h)().PiW(WW && {
+           (0, BR.i)().EJR(RR && {
```

#### 3277. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29086` → after: `L28617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28617) · [Before (L29086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29086)

```diff
-     var VO = OW(40969);
+     var oG = GR(40974);
```

#### 3278. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29089-L29090` → after: `L28620-L28621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28620-L28621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28620-L28621) · [Before (L29089-L29090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29089-L29090)

```diff
-       const WW = (0, yW.h)(),
-         iW = (0, yW.d)();
+       const RR = (0, BR.i)(),
+         JR = (0, BR.e)();
```

#### 3279. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29094` → after: `L28625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28625) · [Before (L29094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29094)

```diff
-           const OW = null === (iW = WW.EY.YG(WW.Dv)) || void 0 === iW ? void 0 : iW.position;
+           const GR = null === (JR = RR.zC.f6(RR.WH)) || void 0 === JR ? void 0 : JR.position;
```

#### 3280. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29098` → after: `L28629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28629) · [Before (L29098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29098)

```diff
-           const OW = WW.oZ.PmW(iW[0], iW[1], iW[2]);
+           const GR = RR.NK.YyR(JR[0], JR[1], JR[2]);
```

#### 3281. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29101` → after: `L28632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28632) · [Before (L29101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29101)

```diff
-         blockName: WW => (0, Oi.f)(WW),
+         blockName: RR => (0, GJ.h)(RR),
```

#### 3282. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29104` → after: `L28635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28635) · [Before (L29104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29104)

```diff
-           const mW = WW.EY.ziW(WW.Dv);
+           const yR = RR.zC.PGR(RR.WH);
```

#### 3283. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29106` → after: `L28637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28637) · [Before (L29106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29106)

```diff
-             slots: (null !== (iW = null === mW || void 0 === mW ? void 0 : mW.items) && void 0 !== iW ? iW : []).map((WW => WW ? {
+             slots: (null !== (JR = null === yR || void 0 === yR ? void 0 : yR.items) && void 0 !== JR ? JR : []).map((RR => RR ? {
```

#### 3284. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29110` → after: `L28641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28641) · [Before (L29110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29110)

```diff
-             heldSlot: null !== (OW = null === mW || void 0 === mW ? void 0 : mW.getSelectedSlotIndex()) && void 0 !== OW ? OW : 0
+             heldSlot: null !== (GR = null === yR || void 0 === yR ? void 0 : yR.getSelectedSlotIndex()) && void 0 !== GR ? GR : 0
```

#### 3285. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29118` → after: `L28649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28649) · [Before (L29118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29118)

```diff
-             if (String(PW) === String(WW.Dv) || PW === WW.Av) continue;
+             if (String(ZR) === String(RR.WH) || ZR === RR.UH) continue;
```

#### 3286. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29120` → after: `L28651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28651) · [Before (L29120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29120)

```diff
-               cW = null === (EW = WW.EY.YG(PW)) || void 0 === EW ? void 0 : EW.position;
+               iR = null === (tR = RR.zC.f6(ZR)) || void 0 === tR ? void 0 : tR.position;
```

#### 3287. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29124-L29125` → after: `L28655-L28656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28655-L28656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28655-L28656) · [Before (L29124-L29125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29124-L29125)

```diff
-               kind: "Player" === wW ? "player" : "Player" === LW ? null !== wW && void 0 !== wW ? wW : "NPC" : LW,
-               name: null !== (NW = iW.getRawEntityName(PW)) && void 0 !== NW ? NW : null,
+               kind: "Player" === fR ? "player" : "Player" === qR ? null !== fR && void 0 !== fR ? fR : "NPC" : qR,
+               name: null !== (uR = JR.getRawEntityName(ZR)) && void 0 !== uR ? uR : null,
```

#### 3288. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29133` → after: `L28664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28664) · [Before (L29133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29133)

```diff
-           for (const mW of iW.client.iterateItemIds()) WW.EY.liW(mW, "itemState") && OW++;
+           for (const yR of JR.client.iterateItemIds()) RR.zC.RGR(yR, "itemState") && GR++;
```

#### 3289. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29139-L29140` → after: `L28670-L28671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28670-L28671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28670-L28671) · [Before (L29139-L29140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29139-L29140)

```diff
-       worldCodeAiChunk: WW => Promise.resolve((0, VO.d)(pO(), WW)),
-       worldCodeAiGameState: () => Promise.resolve((0, VO.e)(pO()))
+       worldCodeAiChunk: RR => Promise.resolve((0, oG.b)(cG(), RR)),
+       worldCodeAiGameState: () => Promise.resolve((0, oG.d)(cG()))
```

#### 3290. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29142-L29145` → after: `L28673-L28676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28673-L28676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28673-L28676) · [Before (L29142-L29145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29142-L29145)

```diff
-     var CO = OW(38101),
-       XO = OW(38105),
-       BO = OW(38126),
-       qO = OW(38134);
+     var IG = GR(38047),
+       mG = GR(38053),
+       zG = GR(38073),
+       SG = GR(38085);
```

#### 3291. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29149` → after: `L28680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28680) · [Before (L29149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29149)

```diff
-         if (!OW) throw new Error(XO.e.viewerLoadFailed.text);
+         if (!GR) throw new Error(mG.d.viewerLoadFailed.text);
```

#### 3292. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29152` → after: `L28683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28683) · [Before (L29152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29152)

```diff
-           mW = (0, BO.e)(WW)
+           yR = (0, zG.b)(RR)
```

#### 3293. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29154` → after: `L28685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28685) · [Before (L29154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29154)

```diff
-           throw EW instanceof qO.i && EW.older ? new Error(XO.e.replayTooOld.text, {
+           throw tR instanceof SG.k && tR.older ? new Error(mG.d.replayTooOld.text, {
```

#### 3294. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29165` → after: `L28696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28696) · [Before (L29165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29165)

```diff
-         return null === WW ? null : (0, BO.f)(WW)
+         return null === RR ? null : (0, zG.c)(RR)
```

#### 3295. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29169` → after: `L28700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28700) · [Before (L29169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29169)

```diff
-         return null !== (WW = null === (iW = this.replayer()) || void 0 === iW ? void 0 : iW.getFileHandle()) && void 0 !== WW ? WW : null
+         return null !== (RR = null === (JR = this.replayer()) || void 0 === JR ? void 0 : JR.getFileHandle()) && void 0 !== RR ? RR : null
```

#### 3296. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29178` → after: `L28709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28709) · [Before (L29178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29178)

```diff
-         return null !== (WW = null === (iW = this.replayer()) || void 0 === iW ? void 0 : iW.getRecording()) && void 0 !== WW ? WW : null
+         return null !== (RR = null === (JR = this.replayer()) || void 0 === JR ? void 0 : JR.getRecording()) && void 0 !== RR ? RR : null
```

#### 3297. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29182` → after: `L28713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28713) · [Before (L29182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29182)

```diff
-         return null === (WW = (0, yW.d)().client) || void 0 === WW ? void 0 : WW.gameReplayer
+         return null === (RR = (0, BR.e)().client) || void 0 === RR ? void 0 : RR.gameReplayer
```

#### 3298. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29185-L29187` → after: `L28716-L28718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28716-L28718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28716-L28718) · [Before (L29185-L29187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29185-L29187)

```diff
-     var GO = OW(2051);
-     var IO = OW(40287),
-       aO = OW(37735);
+     var dG = GR(2152);
+     var EG = GR(40333),
+       YG = GR(37651);
```

#### 3299. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29192` → after: `L28723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28723) · [Before (L29192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29192)

```diff
-       return null === (WW = (0, yW.d)()) || void 0 === WW || null === (iW = WW.client) || void 0 === iW ? void 0 : iW.gameReplayer
+       return null === (RR = (0, BR.e)()) || void 0 === RR || null === (JR = RR.client) || void 0 === JR ? void 0 : JR.gameReplayer
```

#### 3300. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29197` → after: `L28728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28728) · [Before (L29197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29197)

```diff
-       return null === (WW = (0, yW.d)()) || void 0 === WW || null === (iW = WW.client) || void 0 === iW ? void 0 : iW.gameRecorder
+       return null === (RR = (0, BR.e)()) || void 0 === RR || null === (JR = RR.client) || void 0 === JR ? void 0 : JR.gameRecorder
```

#### 3301. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29209` → after: `L28740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28740) · [Before (L29209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29209)

```diff
-         const OW = rO.map((OW => (0, CW.n)(OW, (() => {
+         const GR = kG.map((GR => (0, zR.q)(GR, (() => {
```

#### 3302. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29231-L29232` → after: `L28762-L28763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28762-L28763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28762-L28763) · [Before (L29231-L29232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29231-L29232)

```diff
-                 mW = null !== (iW = null === OW || void 0 === OW ? void 0 : OW.getRecording()) && void 0 !== iW ? iW : null;
-               return OW && null !== mW ? (WW = (0, BW.t)(WW, {
+                 yR = null !== (JR = null === GR || void 0 === GR ? void 0 : GR.getRecording()) && void 0 !== JR ? JR : null;
+               return GR && null !== yR ? (RR = (0, jR.m)(RR, {
```

#### 3303. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29234` → after: `L28765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28765) · [Before (L29234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29234)

```diff
-                 hZ: OW.getLastAppliedTickIndex(),
+                 gK: GR.getLastAppliedTickIndex(),
```

#### 3304. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29236` → after: `L28767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28767) · [Before (L29236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29236)

```diff
-                 Fv: mW.meta.Fv,
+                 lH: yR.meta.lH,
```

#### 3305. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29240` → after: `L28771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28771) · [Before (L29240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29240)

```diff
-                 freecam: (0, yW.d)().client.freeCameraController.isEnabled()
+                 freecam: (0, BR.e)().client.freeCameraController.isEnabled()
```

#### 3306. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29257` → after: `L28788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28788) · [Before (L29257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29257)

```diff
-                 cW = null !== (NW = null === LW || void 0 === LW || null === (PW = LW.getRecording()) || void 0 === PW ? void 0 : PW.editState) && void 0 !== NW ? NW : null;
+                 iR = null !== (uR = null === qR || void 0 === qR || null === (ZR = qR.getRecording()) || void 0 === ZR ? void 0 : ZR.editState) && void 0 !== uR ? uR : null;
```

#### 3307. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29262` → after: `L28793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28793) · [Before (L29262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29262)

```diff
-               return null !== WW && cW === iW && wW === OW && tW === mW && ZW === EW || (iW = cW, OW = wW, mW = tW, EW = ZW, WW = (0, BW.t)(WW, {
+               return null !== RR && iR === JR && fR === GR && VR === yR && KR === tR || (JR = iR, GR = fR, yR = VR, tR = KR, RR = (0, jR.m)(RR, {
```

#### 3308. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29284` → after: `L28815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28815) · [Before (L29284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29284)

```diff
-               return WW = (0, BW.t)(WW, {
+               return RR = (0, jR.m)(RR, {
```

#### 3309. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29298` → after: `L28829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28829) · [Before (L29298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29298)

```diff
-                     NW && null === OW ? OW = (0, wW.t)(mW) : NW || null === OW || (OW(), OW = null), WW(EW)
+                     uR && null === GR ? GR = (0, fR.F)(yR) : uR || null === GR || (GR(), GR = null), RR(tR)
```

#### 3310. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29300` → after: `L28831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28831) · [Before (L29300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29300)

```diff
-                   EW = ["gameRecorder|setRecording", "gameRecorder|setClipping", "gameRecorder|clipSettingsChanged"].map((WW => (0, CW.n)(WW, mW)));
+                   tR = ["gameRecorder|setRecording", "gameRecorder|setClipping", "gameRecorder|clipSettingsChanged"].map((RR => (0, zR.q)(RR, yR)));
```

#### 3311. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29309` → after: `L28840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28840) · [Before (L29309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29309)

```diff
-           replayVideoExporting: (0, BW.r)(IO.b, ["replayViewer|videoExportChanged"])
+           replayVideoExporting: (0, jR.l)(EG.b, ["replayViewer|videoExportChanged"])
```

#### 3312. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29347` → after: `L28878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28878) · [Before (L29347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29347)

```diff
-               hZ: OW,
+               gK: GR,
```

#### 3313. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29419` → after: `L28950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28950) · [Before (L29419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29419)

```diff
-             if ((0, aO.g)(WW)) {
+             if ((0, YG.i)(RR)) {
```

#### 3314. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29424` → after: `L28955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28955) · [Before (L29424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29424)

```diff
-                 throw (0, aO.g)(!WW), OW
+                 throw (0, YG.i)(!RR), GR
```

#### 3315. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29426` → after: `L28957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28957) · [Before (L29426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29426)

```diff
-               CW.l.iZ("replayViewer|openChanged", WW)
+               zR.n.JK("replayViewer|openChanged", RR)
```

#### 3316. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29434` → after: `L28965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28965) · [Before (L29434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29434)

```diff
-             const mW = (0, yW.h)();
+             const yR = (0, BR.i)();
```

#### 3317. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29436` → after: `L28967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28967) · [Before (L29436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29436)

```diff
-               0 === iW && 0 === OW || (WW.camera.bR.dx = iW, WW.camera.bR.dy = OW, WW.camera.WG = 1, WW.camera.JI(!0), WW.camera.WG = 0)
+               0 === JR && 0 === GR || (RR.camera.wT.dx = JR, RR.camera.wT.dy = GR, RR.camera.K9 = 1, RR.camera.U_(!0), RR.camera.K9 = 0)
```

#### 3318. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29440` → after: `L28971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28971) · [Before (L29440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29440)

```diff
-             (0, yW.d)().client.freeCameraController.setAnalogueMove(WW)
+             (0, BR.e)().client.freeCameraController.setAnalogueMove(RR)
```

#### 3319. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29445` → after: `L28976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28976) · [Before (L29445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29445)

```diff
-               BL: OW
+               Qq: GR
```

#### 3320. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29447` → after: `L28978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28978) · [Before (L29447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29447)

```diff
-             (0, yW.d)().client.freeCameraController.handlefreeCamKeyPress(iW, null, OW)
+             (0, BR.e)().client.freeCameraController.handlefreeCamKeyPress(JR, null, GR)
```

#### 3321. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29465` → after: `L28996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR28996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L28996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L28996) · [Before (L29465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29465)

```diff
-             } = (0, yW.h)(), OW = iW.Vk(), mW = iW.XF();
+             } = (0, BR.i)(), GR = JR.vW(), yR = JR.S_();
```

#### 3322. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29471` → after: `L29002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29002) · [Before (L29471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29471)

```diff
-           leaveGameReloadsPage: () => (0, yW.d)().client.leaveGameReloadsPage()
+           leaveGameReloadsPage: () => (0, BR.e)().client.leaveGameReloadsPage()
```

#### 3323. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29476-L29487` → after: `L29007-L29018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29007-L29018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29007-L29018) · [Before (L29476-L29487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29476-L29487)

```diff
-     var Em = OW(37705),
-       Nm = OW(344),
-       Pm = OW(745),
-       Lm = OW(3305),
-       cm = OW(3308),
-       wm = OW(38918),
-       tm = OW(2012),
-       Zm = OW(5525),
-       xm = OW(37861),
-       lm = OW(40274),
-       Am = OW(39560),
-       bm = OW(40292);
+     var Gy = GR(37612),
+       yy = GR(377),
+       ty = GR(798),
+       uy = GR(3428),
+       Zy = GR(3437),
+       qy = GR(38909),
+       iy = GR(2102),
+       fy = GR(5658),
+       Vy = GR(37789),
+       Ky = GR(40323),
+       wy = GR(39533),
+       ry = GR(40345);
```

#### 3324. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29491-L29492` → after: `L29022-L29023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29022-L29023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29022-L29023) · [Before (L29491-L29492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29491-L29492)

```diff
-       const iW = (0, yW.h)();
-       return null === (WW = iW.EY.UOW(iW.Dv)) || void 0 === WW ? void 0 : WW.nS
+       const JR = (0, BR.i)();
+       return null === (RR = JR.zC.tyR(JR.WH)) || void 0 === RR ? void 0 : RR.gC
```

#### 3325. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29498` → after: `L29029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29029) · [Before (L29498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29498)

```diff
-       } = (0, yW.h)();
+       } = (0, BR.i)();
```

#### 3326. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29501` → after: `L29032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29032) · [Before (L29501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29501)

```diff
-       NW ? null === mW || void 0 === mW || mW.LmW() : null === mW || void 0 === mW || mW.cmW(), (0, lm.j)(NW ? hW.c.UpFireSecondary : hW.c.UpFirePrimary), (0, lm.g)(!1)
+       uR ? null === yR || void 0 === yR || yR.kyR() : null === yR || void 0 === yR || yR.QyR(), (0, Ky.k)(uR ? gR.e.UpFireSecondary : gR.e.UpFirePrimary), (0, Ky.f)(!1)
```

#### 3327. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29505-L29507` → after: `L29036-L29038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29036-L29038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29036-L29038) · [Before (L29505-L29507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29505-L29507)

```diff
-       WW === xm.d.Attack ? Um("primary-fire", iW, mW, OW) : WW === xm.d.Use ? Um("alt-fire", iW, mW, OW) : WW === xm.d.Action1 ? (! function(WW) {
-         (0, HW.sendColyMessage)(PW.xj, WW)
-       }(iW), iW && null !== OW && void 0 !== OW && OW.isGun() && OW.reload(Date.now())) : WW === xm.d.Action2 ? iW ? null === OW || void 0 === OW || OW.touchDownSecondary() : null === OW || void 0 === OW || OW.touchUpSecondary() : iW ? null === OW || void 0 === OW || OW.touchDown … [truncated]
+       RR === Vy.b.Attack ? ay("primary-fire", JR, yR, GR) : RR === Vy.b.Use ? ay("alt-fire", JR, yR, GR) : RR === Vy.b.Action1 ? (! function(RR) {
+         (0, bR.sendColyMessage)(ZR.Rj, RR)
+       }(JR), JR && null !== GR && void 0 !== GR && GR.isGun() && GR.reload(Date.now())) : RR === Vy.b.Action2 ? JR ? null === GR || void 0 === GR || GR.touchDownSecondary() : null === GR || void 0 === GR || GR.touchUpSecondary() : JR ? null === GR || void 0 === GR || GR.touchDown … [truncated]
```

#### 3328. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29511` → after: `L29042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29042) · [Before (L29511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29511)

```diff
-       (0, lm.j)(hW.c.DownFireSecondary), (0, lm.j)(hW.c.UpFireSecondary)
+       (0, Ky.k)(gR.e.DownFireSecondary), (0, Ky.k)(gR.e.UpFireSecondary)
```

#### 3329. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29515` → after: `L29046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29046) · [Before (L29515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29515)

```diff
-         this.aimAtCentre = WW, this.touchCodes = new Map, this.pressedItems = new Map, this.interactTouches = new Map, this.boostTouches = new Set, this.attackRepeat = new bm.d, this.queuedBoost = null, this.boostCooldownEnd = 0
+         this.aimAtCentre = RR, this.touchCodes = new Map, this.pressedItems = new Map, this.interactTouches = new Map, this.boostTouches = new Set, this.attackRepeat = new ry.c, this.queuedBoost = null, this.boostCooldownEnd = 0
```

#### 3330. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29524` → after: `L29055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29055) · [Before (L29524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29524)

```diff
-         if (iW === xm.d.Interact) return this.interactTouches.set(WW, {
+         if (JR === Vy.b.Interact) return this.interactTouches.set(RR, {
```

#### 3331. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29529-L29530` → after: `L29060-L29061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29060-L29061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29060-L29061) · [Before (L29529-L29530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29529-L29530)

```diff
-         }), void(0, lm.g)(!0);
-         if (iW === xm.d.Boost) return this.boostTouches.add(WW), void this.boost();
+         }), void(0, Ky.f)(!0);
+         if (JR === Vy.b.Boost) return this.boostTouches.add(RR), void this.boost();
```

#### 3332. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29533` → after: `L29064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29064) · [Before (L29533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29533)

```diff
-           this.pressedItems.set(iW, WW), km(iW, !0, WW, OW), iW === xm.d.Attack && this.attackRepeat.start()
+           this.pressedItems.set(JR, RR), Ly(JR, !0, RR, GR), JR === Vy.b.Attack && this.attackRepeat.start()
```

#### 3333. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29542` → after: `L29073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29073) · [Before (L29542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29542)

```diff
-         return EW ? (this.move(WW, iW, OW), this.interactTouches.delete(WW), (0, lm.g)(!1), EW.qte || EW.dragged || this.interact(), !0) : this.release(WW, mW)
+         return tR ? (this.move(RR, JR, GR), this.interactTouches.delete(RR), (0, Ky.f)(!1), tR.qte || tR.dragged || this.interact(), !0) : this.release(RR, yR)
```

#### 3334. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29545` → after: `L29076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29076) · [Before (L29545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29545)

```diff
-         if (this.interactTouches.delete(WW) || this.boostTouches.delete(WW)) return (0, lm.g)(!1), !0;
+         if (this.interactTouches.delete(RR) || this.boostTouches.delete(RR)) return (0, Ky.f)(!1), !0;
```

#### 3335. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29551` → after: `L29082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29082) · [Before (L29551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29551)

```diff
-         return OW === xm.d.Attack && this.attackRepeat.stop(), km(OW, !1, this.pressedItems.get(OW), iW), this.pressedItems.delete(OW), !0
+         return GR === Vy.b.Attack && this.attackRepeat.stop(), Ly(GR, !1, this.pressedItems.get(GR), JR), this.pressedItems.delete(GR), !0
```

#### 3336. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29562-L29565` → after: `L29093-L29096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29093-L29096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29093-L29096) · [Before (L29562-L29565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29562-L29565)

```diff
-         (0, lm.g)(!0);
-         const OW = (0, yW.h)();
-         if (iW || 0 === (0, Li.c)(OW)) return;
-         const mW = OW.EY.HiW(OW.Dv),
+         (0, Ky.f)(!0);
+         const GR = (0, BR.i)();
+         if (JR || 0 === (0, qJ.e)(GR)) return;
+         const yR = GR.zC.aGR(GR.WH),
```

#### 3337. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29577-L29579` → after: `L29108-L29110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29108-L29110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29108-L29110) · [Before (L29577-L29579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29577-L29579)

```diff
-             const WW = (0, yW.h)(),
-               OW = WW.EY.HiW(WW.Dv);
-             0 !== (0, Li.c)(WW) && OW.gliderFuelCooldownEnd === iW && (this.aimAtCentre(), this.boostOnceCooled(OW))
+             const RR = (0, BR.i)(),
+               GR = RR.zC.aGR(RR.WH);
+             0 !== (0, qJ.e)(RR) && GR.gliderFuelCooldownEnd === JR && (this.aimAtCentre(), this.boostOnceCooled(GR))
```

#### 3338. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29588` → after: `L29119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29119) · [Before (L29588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29588)

```diff
-         void 0 !== Zi(ti((0, yW.h)())) && (this.aimAtCentre(), null === (WW = jm()) || void 0 === WW || WW._performAltAction(), sm())
+         void 0 !== KJ(VJ((0, BR.i)())) && (this.aimAtCentre(), null === (RR = ey()) || void 0 === RR || RR._performAltAction(), ny())
```

#### 3339. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29591-L29592` → after: `L29122-L29123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29122-L29123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29122-L29123) · [Before (L29591-L29592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29591-L29592)

```diff
-     var Km = OW(37848);
-     var Sm = OW(10106);
+     var Wy = GR(37773);
+     var Ay = GR(10234);
```

#### 3340. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29602` → after: `L29133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29133) · [Before (L29602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29602)

```diff
-       (0, cm.k)(om), Ym ??= CW.l.dU("leaveGame", (() => {
+       (0, Zy.m)(vy), Cy ??= zR.n.pU("leaveGame", (() => {
```

#### 3341. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29605-L29606` → after: `L29136-L29137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29136-L29137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29136-L29137) · [Before (L29605-L29606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29605-L29606)

```diff
-             Ym && (CW.l.unsubscribe(Ym), Ym = null);
-             ym = !1, dm(!1), fm(!1), (0, cm.k)(null)
+             Cy && (zR.n.unsubscribe(Cy), Cy = null);
+             Xy = !1, Oy(!1), cy(!1), (0, Zy.m)(null)
```

#### 3342. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29611-L29612` → after: `L29142-L29143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29142-L29143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29142-L29143) · [Before (L29611-L29612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29611-L29612)

```diff
-       if (WW === Lm.k.UiCapture && 0 !== (iW & Lm.y.TouchControls) && (ym = 0 !== (EW & Lm.y.TouchControls)), WW === Lm.k.UiCapture && 0 !== (iW & Lm.y.ScreenshotMode) && dm(0 !== (EW & Lm.y.ScreenshotMode)), fm(ym), pm()) switch (WW) {
-         case Lm.k.Joystick:
+       if (RR === uy.j.UiCapture && 0 !== (JR & uy.C.TouchControls) && (Xy = 0 !== (tR & uy.C.TouchControls)), RR === uy.j.UiCapture && 0 !== (JR & uy.C.ScreenshotMode) && Oy(0 !== (tR & uy.C.ScreenshotMode)), cy(Xy), oy()) switch (RR) {
+         case uy.j.Joystick:
```

#### 3343. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29615` → after: `L29146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29146) · [Before (L29615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29615)

```diff
-         case Lm.k.TouchButton:
+         case uy.j.TouchButton:
```

#### 3344. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29621-L29624` → after: `L29152-L29155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29152-L29155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29152-L29155) · [Before (L29621-L29624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29621-L29624)

```diff
-               case Lm.v.Jump: {
-                 const WW = (0, yW.h)();
-                 WW.EY.YOW().touchJump = iW, WW.EY.aiW(WW.Dv).jumping = iW;
-                 const mW = WW.EY.HiW(WW.Dv);
+               case uy.z.Jump: {
+                 const RR = (0, BR.i)();
+                 RR.zC.VyR().touchJump = JR, RR.zC.oGR(RR.WH).jumping = JR;
+                 const yR = RR.zC.aGR(RR.WH);
```

#### 3345. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29628` → after: `L29159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29159) · [Before (L29628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29628)

```diff
-               case Lm.v.Crouch:
+               case uy.z.Crouch:
```

#### 3346. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29630` → after: `L29161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29161) · [Before (L29630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29630)

```diff
-                   const WW = (0, yW.h)().EY.HiW((0, yW.h)().Dv);
+                   const RR = (0, BR.i)().zC.aGR((0, BR.i)().WH);
```

#### 3347. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29634-L29635` → after: `L29165-L29166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29165-L29166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29165-L29166) · [Before (L29634-L29635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29634-L29635)

```diff
-               case Lm.v.Pov:
-                 iW && CW.l.iZ("SwapCameraZoom");
+               case uy.z.Pov:
+                 JR && zR.n.JK("SwapCameraZoom");
```

#### 3348. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29637` → after: `L29168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29168) · [Before (L29637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29637)

```diff
-               case Lm.v.Zoom:
+               case uy.z.Zoom:
```

#### 3349. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29640-L29642` → after: `L29171-L29173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29171-L29173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29171-L29173) · [Before (L29640-L29642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29640-L29642)

```diff
-               case Lm.v.Drop:
-               case Lm.v.DropStack:
-                 iW && CW.l.iZ("DropItemKeyPressed", WW === Lm.v.DropStack);
+               case uy.z.Drop:
+               case uy.z.DropStack:
+                 JR && zR.n.JK("DropItemKeyPressed", RR === uy.z.DropStack);
```

#### 3350. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29644-L29645` → after: `L29175-L29176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29175-L29176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29175-L29176) · [Before (L29644-L29645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29644-L29645)

```diff
-               case Lm.v.Fly:
-                 iW && ((0, yW.h)().EY.YOW().toggleFly = !0, OW && Hm && gm(hm, !1))
+               case uy.z.Fly:
+                 JR && ((0, BR.i)().zC.VyR().toggleFly = !0, GR && py && Ny(ly, !1))
```

#### 3351. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29647` → after: `L29178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29178) · [Before (L29647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29647)

```diff
-           }(iW, 0 !== (EW & cm.c))
+           }(JR, 0 !== (tR & Zy.e))
```

#### 3352. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29653` → after: `L29184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29184) · [Before (L29653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29653)

```diff
-       WW !== Tm && (Tm = WW, null === (iW = (0, yW.h)()) || void 0 === iW || iW.ciW(WW))
+       RR !== My && (My = RR, null === (JR = (0, BR.i)()) || void 0 === JR || JR.QJR(RR))
```

#### 3353. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29657` → after: `L29188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29188) · [Before (L29657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29657)

```diff
-       const OW = (0, yW.h)().EY.YOW();
+       const GR = (0, BR.i)().zC.VyR();
```

#### 3354. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29661` → after: `L29192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29192) · [Before (L29661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29661)

```diff
-       }, (0, wm.updateTouchMoveSpeed)((0, yW.h)())
+       }, (0, qy.updateTouchMoveSpeed)((0, BR.i)())
```

#### 3355. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29669` → after: `L29200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29200) · [Before (L29669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29669)

```diff
-       const WW = (0, yW.h)(),
+       const RR = (0, BR.i)(),
```

#### 3356. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29671` → after: `L29202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29202) · [Before (L29671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29671)

```diff
-       WW.EY.YOW().touchCrouch = iW, WW.EY.aiW(WW.Dv).setCrouching(iW), (0, wm.updateTouchMoveSpeed)(WW)
+       RR.zC.VyR().touchCrouch = JR, RR.zC.oGR(RR.WH).setCrouching(JR), (0, qy.updateTouchMoveSpeed)(RR)
```

#### 3357. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29675` → after: `L29206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29206) · [Before (L29675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29675)

```diff
-       WW !== nm && (nm = WW, (0, yW.d)().client.cameraController.setZoomKeyHeld("touch", WW))
+       RR !== gy && (gy = RR, (0, BR.e)().client.cameraController.setZoomKeyHeld("touch", RR))
```

#### 3358. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29683` → after: `L29214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29214) · [Before (L29683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29683)

```diff
-       if (WW === pm() || WW && !(0, yW.h)()) return;
+       if (RR === oy() || RR && !(0, BR.i)()) return;
```

#### 3359. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29685-L29686` → after: `L29216-L29217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29216-L29217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29216-L29217) · [Before (L29685-L29686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29685-L29686)

```diff
-       vW.g.setMultiplierType(vW.d, (0, Pm.s)(UW.d.get("clientEscMenuOptions")));
-       const iW = (0, yW.h)().EY.YOW();
+       HR.e.setMultiplierType(HR.c, (0, ty.x)(nR.d.get("clientEscMenuOptions")));
+       const JR = (0, BR.i)().zC.VyR();
```

#### 3360. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29689-L29691` → after: `L29220-L29222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29220-L29222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29220-L29222) · [Before (L29689-L29691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29689-L29691)

```diff
-         const iW = (0, yW.h)(),
-           OW = () => (0, yW.d)().client.scriptedCameraController,
-           mW = () => !Pi.b.aimsFromBody(iW) || OW().aimsAtCursor,
+         const JR = (0, BR.i)(),
+           GR = () => (0, BR.e)().client.scriptedCameraController,
+           yR = () => !ZJ.e.aimsFromBody(JR) || GR().aimsAtCursor,
```

#### 3361. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29693` → after: `L29224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29224) · [Before (L29693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29693)

```diff
-             iW.lU = (0, yW.d)().getBlockReach(iW.Dv), Pi.b.aimsFromBody(iW) || (iW.biW = null, iW.jiW = null)
+             JR.Ln = (0, BR.e)().getBlockReach(JR.WH), ZJ.e.aimsFromBody(JR) || (JR.GGR = null, JR.yGR = null)
```

#### 3362. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29696` → after: `L29227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29227) · [Before (L29696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29696)

```diff
-             xW(), EW(), iW.miW()
+             wR(), tR(), JR.SJR()
```

#### 3363. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29700-L29701` → after: `L29231-L29232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29231-L29232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29231-L29232) · [Before (L29700-L29701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29700-L29701)

```diff
-             if (EW.aimsAtCursor) return EW.aimAtClientPoint(WW, mW), void iW.miW();
-             if (Pi.b.aimsFromBody(iW)) return;
+             if (tR.aimsAtCursor) return tR.aimAtClientPoint(RR, yR), void JR.SJR();
+             if (ZJ.e.aimsFromBody(JR)) return;
```

#### 3364. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29707` → after: `L29238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29238) · [Before (L29707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29707)

```diff
-             iW.biW = [PW.x, PW.y, PW.z], iW.jiW = [isNaN(LW.x) ? 1 : LW.x, isNaN(LW.y) ? 0 : LW.y, isNaN(LW.z) ? 0 : LW.z];
+             JR.GGR = [ZR.x, ZR.y, ZR.z], JR.yGR = [isNaN(qR.x) ? 1 : qR.x, isNaN(qR.y) ? 0 : qR.y, isNaN(qR.z) ? 0 : qR.z];
```

#### 3365. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29710-L29714` → after: `L29241-L29245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29241-L29245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29241-L29245) · [Before (L29710-L29714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29710-L29714)

```diff
-             (0, yW.d)().sF(cW, cW);
-             const tW = (0, yW.d)().getBlockReach(iW.Dv),
-               ZW = iW.pickBlock(cW, wW, iW.camera.yG + tW, (WW => 0 !== WW));
-             if (ZW && ZW.X3 && (0, tm.l)((0, yW.d)().getLifeformEyePos(iW.Dv, !1), ZW.position) < tW) return iW.lU = iW.camera.yG + tW, void iW.miW();
-             iW.lU = 0
+             (0, BR.e)().x_(iR, iR);
+             const VR = (0, BR.e)().getBlockReach(JR.WH),
+               KR = JR.pickBlock(iR, fR, JR.camera.w6 + VR, (RR => 0 !== RR));
+             if (KR && KR.U3 && (0, iy.h)((0, BR.e)().getLifeformEyePos(JR.WH, !1), KR.position) < VR) return JR.Ln = JR.camera.w6 + VR, void JR.SJR();
+             JR.Ln = 0
```

#### 3366. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29724` → after: `L29255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29255) · [Before (L29724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29724)

```diff
-             ZW(), tW && (tW = !1, iW.EY.kOW(iW.Dv).cmW())
+             KR(), VR && (VR = !1, JR.zC.uyR(JR.WH).QyR())
```

#### 3367. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29728` → after: `L29259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29259) · [Before (L29728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29728)

```diff
-             if (cW = WW, OW.qte || NW.BL) return;
+             if (iR = RR, GR.qte || uR.Qq) return;
```

#### 3368. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29730-L29733` → after: `L29261-L29264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29261-L29264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29261-L29264) · [Before (L29730-L29733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29730-L29733)

```diff
-             const LW = null !== (mW = iW.jiW) && void 0 !== mW ? mW : iW.camera.uF(),
-               ZW = yW.l.localPlayerPickActionHelper.getPickEntityResult(LW);
-             if (!iW.EiW && !ZW) return;
-             const xW = null === (EW = iW.EiW) || void 0 === EW ? void 0 : EW.position.join("|");
+             const qR = null !== (yR = JR.yGR) && void 0 !== yR ? yR : JR.camera.m_(),
+               KR = BR.k.localPlayerPickActionHelper.getPickEntityResult(qR);
+             if (!JR.jJR && !KR) return;
+             const wR = null === (tR = JR.jJR) || void 0 === tR ? void 0 : tR.position.join("|");
```

#### 3369. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29737-L29741` → after: `L29268-L29272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29268-L29272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29268-L29272) · [Before (L29737-L29741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29737-L29741)

```diff
-               const mW = null !== (WW = iW.jiW) && void 0 !== WW ? WW : iW.camera.uF(),
-                 EW = yW.l.localPlayerPickActionHelper.getPickEntityResult(mW);
-               if (!iW.EiW && !EW) return;
-               const NW = null === (OW = iW.EiW) || void 0 === OW ? void 0 : OW.position.join("|");
-               (xW === NW && xW || ZW === EW && ZW) && ((0, lm.j)(hW.c.TouchDownLong), iW.EY.kOW(iW.Dv).wmW(), tW = !0)
+               const yR = null !== (RR = JR.yGR) && void 0 !== RR ? RR : JR.camera.m_(),
+                 tR = BR.k.localPlayerPickActionHelper.getPickEntityResult(yR);
+               if (!JR.jJR && !tR) return;
+               const uR = null === (GR = JR.jJR) || void 0 === GR ? void 0 : GR.position.join("|");
+               (wR === uR && wR || KR === tR && KR) && ((0, Ky.k)(gR.e.TouchDownLong), JR.zC.uyR(JR.WH).FyR(), VR = !0)
```

#### 3370. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29745` → after: `L29276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29276) · [Before (L29745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29745)

```diff
-             cW = null, tW = !1, ZW(), NW.holds(xm.d.Attack) || NW.holds(xm.d.Use) || (iW.EY.kOW(iW.Dv).cmW(), (0, lm.j)(hW.c.UpFirePrimary)), EW()
+             iR = null, VR = !1, KR(), uR.holds(Vy.b.Attack) || uR.holds(Vy.b.Use) || (JR.zC.uyR(JR.WH).QyR(), (0, Ky.k)(gR.e.UpFirePrimary)), tR()
```

#### 3371. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29748` → after: `L29279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29279) · [Before (L29748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29748)

```diff
-             NW.release(WW, iW) || LW.delete(WW) && ((0, lm.g)(!1), WW === cW && AW())
+             uR.release(RR, JR) || qR.delete(RR) && ((0, Ky.f)(!1), RR === iR && eR())
```

#### 3372. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29751-L29752` → after: `L29282-L29283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29282-L29283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29282-L29283) · [Before (L29751-L29752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29751-L29752)

```diff
-             for (const iW of NW.ids())(0, Km.c)(WW.touches, iW) || bW(iW, WW);
-             for (const iW of LW.keys())(0, Km.c)(WW.touches, iW) || bW(iW, WW)
+             for (const JR of uR.ids())(0, Wy.i)(RR.touches, JR) || aR(JR, RR);
+             for (const JR of qR.keys())(0, Wy.i)(RR.touches, JR) || aR(JR, RR)
```

#### 3373. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29773` → after: `L29304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29304) · [Before (L29773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29773)

```diff
-               const ZW = xm.g.hitZone(wW, tW);
+               const KR = Vy.h.hitZone(fR, VR);
```

#### 3374. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29775` → after: `L29306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29306) · [Before (L29775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29775)

```diff
-                 ZW.code !== xm.d.Interact && (xW(), EW(), iW.miW()), NW.press(PW, ZW.code, OW, wW, tW);
+                 KR.code !== Vy.b.Interact && (wR(), tR(), JR.SJR()), uR.press(ZR, KR.code, GR, fR, VR);
```

#### 3375. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29785` → after: `L29316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29316) · [Before (L29785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29785)

```diff
-               LW.set(PW, AW), (0, lm.g)(!0), null === cW && lW(PW, AW)
+               qR.set(ZR, eR), (0, Ky.f)(!0), null === iR && rR(ZR, eR)
```

#### 3376. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29798` → after: `L29329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29329) · [Before (L29798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29798)

```diff
-               tW && (sW(tW, EW, wW), OW === cW && (NW.BL || PW(EW, wW), !mW() && tW.dragged && xW()))
+               VR && (WR(VR, tR, fR), GR === iR && (uR.Qq || ZR(tR, fR), !yR() && VR.dragged && wR()))
```

#### 3377. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29811` → after: `L29342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29342) · [Before (L29811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29811)

```diff
-               LW.delete(EW), (0, lm.g)(!1), sW(ZW, wW, tW);
+               qR.delete(tR), (0, Ky.f)(!1), WR(KR, fR, VR);
```

#### 3378. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29814` → after: `L29345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29345) · [Before (L29814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29814)

```diff
-               (lW || xW && !NW.BL) && PW(wW, tW), lW && ((0, lm.j)(hW.c.TouchShort), (0, Am.i)(), iW.EY.kOW(iW.Dv).xmW()), (xW || lW) && AW()
+               (rR || wR && !uR.Qq) && ZR(fR, VR), rR && ((0, Ky.k)(gR.e.TouchShort), (0, wy.d)(), JR.zC.uyR(JR.WH).hyR()), (wR || rR) && eR()
```

#### 3379. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29828-L29829` → after: `L29359-L29360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29359-L29360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29359-L29360) · [Before (L29828-L29829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29828-L29829)

```diff
-       Tm && (0, yW.h)().ciW(!0);
-       const mW = ji.d.subscribe("canCrouch", (WW => {
+       My && (0, BR.i)().QJR(!0);
+       const yR = LJ.c.subscribe("canCrouch", (RR => {
```

#### 3380. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29832-L29833` → after: `L29363-L29364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29363-L29364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29363-L29364) · [Before (L29832-L29833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29832-L29833)

```diff
-         EW = (0, CW.n)(Sm.b, (() => {
-           (0, wm.updateTouchMoveSpeed)((0, yW.h)())
+         tR = (0, zR.q)(Ay.d, (() => {
+           (0, qy.updateTouchMoveSpeed)((0, BR.i)())
```

#### 3381. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29837-L29838` → after: `L29368-L29369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29368-L29369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29368-L29369) · [Before (L29837-L29838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29837-L29838)

```diff
-         const WW = (0, yW.h)();
-         iW.touchJump = !1, WW.EY.aiW(WW.Dv).jumping = !1, gm(!1, !1), Vm(!1), iW.isTouchscreen = !1
+         const RR = (0, BR.i)();
+         JR.touchJump = !1, RR.zC.oGR(RR.WH).jumping = !1, Ny(!1, !1), Hy(!1), JR.isTouchscreen = !1
```

#### 3382. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29842` → after: `L29373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29373) · [Before (L29842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29842)

```diff
-     const Bm = [1, 232, 0, "h", 3, 9, "g", "e", "f", "d", 8, 255, "length", 125, 78, "undefined", void 0, 226, 185, 39, 17, 63, 6, "fromCodePoint", 7, 12, "push", 100, 235, 58, 91, 5, 131, 8191, 88, 13, 14, 4, "a", 2, 134, "c", 120, "i", 70, 16, "b", 512, 67, 44, 42, 113, 246, 15 … [truncated]
+     const my = ["b", 0, 1, 8, 3, 145, 9, "g", 5, 6, 4, 255, "length", 152, "e", 236, "undefined", void 0, 2, "c", 131, 63, "fromCodePoint", 7, 12, "push", 151, 16, 241, "a", 51, 91, 37, 8191, 88, 13, 14, 184, 124, 127, 128, 181, 245, "h", 90, 117, "f", !1, !0, 95, 223, 33, "s", " … [truncated]
```

#### 3383. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29845-L29862` → after: `L29376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29376) · [Before (L29845-L29862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29845-L29862)

```diff
-       return WW[Bm[12]] = Bm[0], typeof xE !== Bm[15] && xE ? (new xE).decode(new lE(WW[Bm[2]])) : typeof AE !== Bm[15] && AE ? AE.from(WW[Bm[2]]).toString("utf-8") : UE(WW[Bm[2]])
-     }
- 
-     function Rm(...WW) {
-       if (WW[Bm[12]] = Bm[4], WW[Bm[2]] === function(...WW) {
-           return WW[Bm[12]] = Bm[0], typeof Cm[WW[Bm[2]]] === Bm[15] ? Cm[WW[Bm[2]]] = function(...WW) {
-             for (Im(WW[Bm[12]] = Bm[0], WW[Bm[29]] = '|yx"%=+>6:VeTo&A(fzB47Qp2Rrs^Sn{C!whFUc.$JHj9vI*#quP,;dO1k]5/3K<iXtGMmbLa@[)E?gYD}_~W0`8NlZ', WW[Bm[27]] = "" + (WW[Bm[2]] || ""), WW[Bm[28]] = WW[Bm[27]].length, WW[Bm[37]] = [], WW[Bm[31]] = Bm[2], WW[Bm[32]] = Bm[2], WW[Bm[ … [truncated]
-               if (WW[Bm[5]] = WW[Bm[29]].indexOf(WW[Bm[27]][WW[Bm[3]]]), WW[Bm[5]] !== -Bm[0])
-                 if (WW[Bm[6]] < Bm[2]) WW[Bm[6]] = WW[Bm[5]];
-                 else {
-                   Im(WW[Bm[6]] += WW[Bm[5]] * Bm[30], WW[Bm[31]] |= WW[Bm[6]] << WW[Bm[32]], WW[Bm[32]] += (WW[Bm[6]] & Bm[33]) > Bm[34] ? Bm[35] : Bm[36]);
-                   do {
-                     Im(WW[Bm[37]].push(WW[Bm[31]] & Bm[11]), WW[Bm[31]] >>= Bm[10], WW[Bm[32]] -= Bm[10])
-                   } while (WW[Bm[32]] > Bm[24]);
-                   WW[Bm[6]] = -Bm[0]
-                 } return WW[Bm[6]] > -Bm[0] && WW[Bm[37]].push((WW[Bm[31]] | WW[Bm[6]] << WW[Bm[32]]) & Bm[11]), qm(WW[Bm[37]])
- ... (2 more removed lines; see GitHub link above)
+       return RR[my[12]] = my[2], typeof it !== my[16] && it ? (new it).decode(new ft(RR[my[1]])) : typeof Vt !== my[16] && Vt ? Vt.from(RR[my[1]]).toString("utf-8") : rt(RR[my[1]])
```

#### 3384. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29870-L29871` → after: `L29384-L29385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29384-L29385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29384-L29385) · [Before (L29870-L29871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29870-L29871)

```diff
-     Im(Cm = {}, Xm = ["PBAd.x*Z_)^T_3wTb4+", "xoY%q_;5~^|i]dv.*cx/fqsr#;Txa]BX#9dA34SM&%9", "aI$Nxi:fj=B/23y24cG>v_s~,1/14EY.mBsLg:}", "JQH&+N[Tn=OLTEX/Q>C=F(JzA)>sfgM;Wr_1ez1M{N%Ec5/[e))%", "9Zd7lrO~q%[(n.d~h8(0}G?{H)Y.%]P|d$:u]c%%T;MxR5<|KIG>(EL2d!?q+", "U8m/%hLkHt#sB:s/oX4uQN^ … [truncated]
-         Im(WW[Bm[12]] = Bm[2], WW[-Bm[14]] = [function() {
+     jy(Py = {}, Iy = ['DlE8y*(A/PFq$sin8kUME9MS_ZX04sCEg*J"0A)R', 'zk(e9K*Erb4W9Ei?;q6hrz(C0p=~,:"sZhQ@P}5E}GS097m(=,{SE', "/vbSWU6E)rb!G&]^uF*Q%}#Z?8np<e6:0x", "pk?[5cnb*+90~fEVd5D*M3uYW{Nbl&ZUpF<vd7dE@8??obZN+uHeVd$a/Q", "]k/hBpg%J2tKbApMoINLt)fWbPSPW(dm5m^8)`~tB", 'Lk8exU7nGpr … [truncated]
+         jy(RR[my[12]] = my[1], RR[my[14]] = [function() {
```

#### 3385. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29879` → after: `L29393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29393) · [Before (L29879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29879)

```diff
-         }], WW[Bm[0]] = Bm[16], WW[Bm[9]] = []);
+         }], RR[my[2]] = my[17], RR[my[7]] = []);
```

#### 3386. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29881` → after: `L29395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29395) · [Before (L29881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29881)

```diff
-           Im(WW[Bm[0]] = Object, WW[Bm[9]][Bm[26]]("".__proto__.constructor.name))
+           jy(RR[my[2]] = Object, RR[my[7]][my[25]]("".__proto__.constructor.name))
```

#### 3387. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29883-L29886` → after: `L29397-L29400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29397-L29400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29397-L29400) · [Before (L29883-L29886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29883-L29886)

```diff
-         WW: for (WW[Bm[13]] = Bm[2]; WW[Bm[13]] < WW[-Bm[14]][Bm[12]]; WW[Bm[13]]++) try {
-           for (WW[Bm[0]] = WW[-Bm[14]][WW[Bm[13]]](), WW[Bm[8]] = Bm[2]; WW[Bm[8]] < WW[Bm[9]][Bm[12]]; WW[Bm[8]]++)
-             if (typeof WW[Bm[0]][WW[Bm[9]][WW[Bm[8]]]] === Bm[15]) continue WW;
-           return WW[Bm[0]]
+         RR: for (RR[-my[13]] = my[1]; RR[-my[13]] < RR[my[14]][my[12]]; RR[-my[13]]++) try {
+           for (RR[my[2]] = RR[my[14]][RR[-my[13]]](), RR[-my[15]] = my[1]; RR[-my[15]] < RR[my[7]][my[12]]; RR[-my[15]]++)
+             if (typeof RR[my[2]][RR[my[7]][RR[-my[15]]]] === my[16]) continue RR;
+           return RR[my[2]]
```

#### 3388. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29888-L29891` → after: `L29402-L29404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29402-L29404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29402-L29404) · [Before (L29888-L29891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29888-L29891)

```diff
-         return WW[Bm[0]] || this
-       }() || {}, xE = ZE.TextDecoder, lE = ZE.Uint8Array, AE = ZE.OZ, bE = ZE.String || String, jE = ZE.Array || Array, UE = function() {
-         var WW, iW, OW = new jE(Bm[63]);
-         return Im(WW = bE[Bm[23]] || bE.fromCharCode, iW = []),
+         return RR[my[2]] || this
+       }() || {}, it = qt.TextDecoder, ft = qt.Uint8Array, Vt = qt.GK, Kt = qt.String || String, wt = qt.Array || Array, rt = function(...RR) {
+         return jy(RR[my[12]] = my[1], RR[-my[26]] = new wt(my[40]), RR[-my[27]] = Kt[my[22]] || Kt.fromCharCode, RR[my[18]] = []),
```

#### 3389. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29893-L29894` → after: `L29406-L29407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29406-L29407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29406-L29407) · [Before (L29893-L29894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29893-L29894)

```diff
-             for (Im(mW[Bm[12]] = Bm[0], mW[-Bm[20]] = Bm[16], mW[-Bm[19]] = Bm[16], mW[-Bm[18]] = mW[Bm[2]][Bm[12]], iW[Bm[12]] = Bm[2]), mW[-Bm[17]] = Bm[2]; mW[-Bm[17]] < mW[-Bm[18]];) Im(mW[-Bm[19]] = mW[Bm[2]][mW[-Bm[17]]++], mW[-Bm[19]] <= Bm[60] ? mW[-Bm[20]] = mW[-Bm[19]]  … [truncated]
-             return iW.join("")
+             for (jy(JR[my[12]] = my[2], JR[my[20]] = my[17], JR[my[0]] = my[17], JR[my[19]] = JR[my[1]][my[12]], RR[my[18]][my[12]] = my[1]), JR[my[10]] = my[1]; JR[my[10]] < JR[my[19]];) jy(JR[my[0]] = JR[my[1]][JR[my[10]]++], JR[my[0]] <= my[39] ? JR[my[20]] = JR[my[0]] : JR[my … [truncated]
+             return RR[my[18]].join("")
```

#### 3390. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29898-L29901` → after: `L29411-L29414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29411-L29414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29411-L29414) · [Before (L29898-L29901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29898-L29901)

```diff
-         return WW[Bm[12]] = Bm[0], typeof Cm[WW[Bm[2]]] === Bm[15] ? Cm[WW[Bm[2]]] = function(...WW) {
-           for (Im(WW[Bm[12]] = Bm[0], WW[Bm[0]] = '}+?]uyv,%=1t85gDjI`;!USZ2.d|b~f/LWhTk[:VXR9H6oMCG0nBpN>(wrEQ_qc"{)^Y$i#47szAx&JleF@3<mPOa*K', WW[-Bm[1]] = "" + (WW[Bm[2]] || ""), WW[Bm[4]] = WW[-Bm[1]].length, WW[Bm[9]] = [], WW[Bm[7]] = Bm[2], WW[Bm[8]] = Bm[2], WW[Bm[6]] = - … [truncated]
-             if (WW[Bm[5]] = WW[Bm[0]].indexOf(WW[-Bm[1]][WW[Bm[3]]]), WW[Bm[5]] !== -Bm[0])
-               if (WW[Bm[6]] < Bm[2]) WW[Bm[6]] = WW[Bm[5]];
+         return RR[my[12]] = my[2], typeof Py[RR[my[1]]] === my[16] ? Py[RR[my[1]]] = function(...RR) {
+           for (jy(RR[my[12]] = my[2], RR[my[5]] = 'xRCfeDBTQ1"+ZbO{^Fl%5PitEsN:,gM.[@?aA&(UmnVu#I/)khcLSr8>|9G2J!pW_4o~q}HvX0*Yy;3Kd7`jz<6=]$w', RR[my[0]] = "" + (RR[my[1]] || ""), RR[my[4]] = RR[my[0]].length, RR[my[10]] = [], RR[my[8]] = my[1], RR[my[9]] = my[1], RR[my[7]] = -m … [truncated]
+             if (RR[my[6]] = RR[my[5]].indexOf(RR[my[0]][RR[my[3]]]), RR[my[6]] !== -my[2])
+               if (RR[my[7]] < my[1]) RR[my[7]] = RR[my[6]];
```

#### 3391. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29903` → after: `L29416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29416) · [Before (L29903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29903)

```diff
-                 Im(WW[Bm[6]] += WW[Bm[5]] * Bm[30], WW[Bm[7]] |= WW[Bm[6]] << WW[Bm[8]], WW[Bm[8]] += (WW[Bm[6]] & Bm[33]) > Bm[34] ? Bm[35] : Bm[36]);
+                 jy(RR[my[7]] += RR[my[6]] * my[31], RR[my[8]] |= RR[my[7]] << RR[my[9]], RR[my[9]] += (RR[my[7]] & my[33]) > my[34] ? my[35] : my[36]);
```

#### 3392. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L29905-L30083` → after: `L29418-L29435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29418-L29435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29418-L29435) · [Before (L29905-L30083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L29905-L30083)

```diff
-                   Im(WW[Bm[9]].push(WW[Bm[7]] & Bm[11]), WW[Bm[7]] >>= Bm[10], WW[Bm[8]] -= Bm[10])
-                 } while (WW[Bm[8]] > Bm[24]);
-                 WW[Bm[6]] = -Bm[0]
-               } return WW[Bm[6]] > -Bm[0] && WW[Bm[9]].push((WW[Bm[7]] | WW[Bm[6]] << WW[Bm[8]]) & Bm[11]), qm(WW[Bm[9]])
-         }(Xm[WW[Bm[2]]]) : Cm[WW[Bm[2]]]
-       }(107) + "N" in Gm && function(...WW) {
-         Im(WW[Bm[12]] = Bm[2], WW[Bm[38]] = function(...WW) {
-           function iW(...WW) {
-             return WW[Bm[12]] = Bm[0], LW(NW(tW(WW[Bm[2]])))
-           }
- 
-           function OW(...WW) {
-             return WW[Bm[12]] = Bm[39], LW(PW(tW(WW[Bm[2]]), tW(WW[Bm[0]])))
-           }
- 
-           function mW(WW, iW) {
- ... (163 more removed lines; see GitHub link above)
+                   jy(RR[my[10]].push(RR[my[8]] & my[11]), RR[my[8]] >>= my[3], RR[my[9]] -= my[3])
+                 } while (RR[my[9]] > my[23]);
+                 RR[my[7]] = -my[2]
+               } return RR[my[7]] > -my[2] && RR[my[10]].push((RR[my[8]] | RR[my[7]] << RR[my[9]]) & my[11]), zy(RR[my[10]])
+         }(Iy[RR[my[1]]]) : Py[RR[my[1]]]
+       }(my[45]) + "C" in Sy && function(...RR) {
+         function JR(...RR) {
+           for (jy(RR[my[12]] = my[2], RR[my[29]] = 'L"VcJSRDAMFpGsemkEjbNtZXYBUPHgIlOrfCWa?;o6^uh3QKn@i4%Tvdq|:w#]8}>7&z1_x*<y`0[${~.+,(925)!/=', RR[-my[28]] = "" + (RR[my[1]] || ""), RR[my[19]] = RR[-my[28]].length, RR[-my[37]] = [], RR[my[8]] = my[1], RR[-my[32]] = my[1], RR[my … [truncated]
+             if (RR[-my[30]] = RR[my[29]].indexOf(RR[-my[28]][RR[my[3]]]), RR[-my[30]] !== -my[2])
+               if (RR[my[23]] < my[1]) RR[my[23]] = RR[-my[30]];
+               else {
+                 jy(RR[my[23]] += RR[-my[30]] * my[31], RR[my[8]] |= RR[my[23]] << RR[-my[32]], RR[-my[32]] += (RR[my[23]] & my[33]) > my[34] ? my[35] : my[36]);
+                 do {
+                   jy(RR[-my[37]].push(RR[my[8]] & my[11]), RR[my[8]] >>= my[3], RR[-my[32]] -= my[3])
+                 } while (RR[-my[32]] > my[23]);
+                 RR[my[23]] = -my[2]
+ ... (2 more added lines; see GitHub link above)
```

#### 3393. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30085-L30096` → after: `L29437-L29440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29437-L29440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29437-L29440) · [Before (L30085-L30096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30085-L30096)

```diff
-           function SW(...WW) {
-             return Im(WW[Bm[12]] = Bm[39], WW[-Bm[73]] = (WW[Bm[2]] & Bm[72]) + (WW[Bm[0]] & Bm[72]), WW[Bm[4]] = (WW[Bm[2]] >> Bm[45]) + (WW[Bm[0]] >> Bm[45]) + (WW[-Bm[73]] >> Bm[45])), WW[Bm[4]] << Bm[45] | WW[-Bm[73]] & Bm[72]
-           }
-           return Im(WW[Bm[12]] = Bm[2], WW[Bm[38]] = Bm[2], WW[Bm[0]] = ""), WW[Bm[39]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193 … [truncated]
-             hex: iW,
-             b64: mW,
-             any: EW,
-             hex_hmac: OW,
-             b64_hmac: mW,
-             any_hmac: EW
-           }
-         }(), console.log(WW[Bm[38]]))
+         function GR(...RR) {
+           return RR[my[12]] = my[2], typeof Py[RR[my[1]]] === my[16] ? Py[RR[my[1]]] = JR(Iy[RR[my[1]]]) : Py[RR[my[1]]]
+         }
+         RR[my[12]] = my[1], jy(RR[my[38]] = GR(118) + GR(119) + GR(120) + GR(121), RR[my[41]] = GR(122) + GR(123) + GR(my[38]) + GR(125) + GR(126) + GR(my[39]) + GR(my[40]), RR[my[18]] = GR(129) + GR(130) + GR(my[20]) + GR(132) + GR(133) + GR(134), RR[my[38]].match(RR[my[41]] + R … [truncated]
```

#### 3394. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30098-L30104` → after: `L29442-L29446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29442-L29446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29442-L29446) · [Before (L30098-L30104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30098-L30104)

```diff
-         if (Bm[83]) {
-           function WW(WW) {
-             var iW, OW, mW, EW, NW, PW, LW;
-             for (Im(iW = "" + (WW || ""), OW = iW.length, mW = [], EW = Bm[2], NW = Bm[2], PW = -Bm[0]), LW = Bm[2]; LW < OW; LW++) {
-               var cW = 'cism)pxd4jFM?AORVw{;(Zn~8:6Br=|IX#5Egqk[_Y/1]<$7,D^09J`eP3o*!z.G&@}L2H%+yT>WKu"NQClfSaUtbhv'.indexOf(iW[LW]);
-               if (cW !== -Bm[0])
-                 if (PW < Bm[2]) PW = cW;
+         if (my[48]) {
+           function RR(...RR) {
+             for (jy(RR[my[12]] = my[2], RR[-my[44]] = 'GDNUsBpQfarMEgtTJLbWXHeACjimO,!voYz%FhI#K0qPRZVld_cS`n5:x&@^24>{*?[)u8"(w$.+~3|/}1;]y=9<76k', RR[-my[42]] = "" + (RR[my[1]] || ""), RR[my[19]] = RR[-my[42]].length, RR[my[10]] = [], RR[my[14]] = my[1], RR[my[9]] = my[1], RR[- … [truncated]
+               if (RR[my[21]] = RR[-my[44]].indexOf(RR[-my[42]][RR[my[43]]]), RR[my[21]] !== -my[2])
+                 if (RR[-my[13]] < my[1]) RR[-my[13]] = RR[my[21]];
```

#### 3395. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30106` → after: `L29448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29448) · [Before (L30106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30106)

```diff
-                   Im(PW += cW * Bm[30], EW |= PW << NW, NW += (PW & Bm[33]) > Bm[34] ? Bm[35] : Bm[36]);
+                   jy(RR[-my[13]] += RR[my[21]] * my[31], RR[my[14]] |= RR[-my[13]] << RR[my[9]], RR[my[9]] += (RR[-my[13]] & my[33]) > my[34] ? my[35] : my[36]);
```

#### 3396. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30108-L30113` → after: `L29450-L29453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29450-L29453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29450-L29453) · [Before (L30108-L30113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30108-L30113)

```diff
-                     Im(mW.push(EW & Bm[11]), EW >>= Bm[10], NW -= Bm[10])
-                   } while (NW > Bm[24]);
-                   PW = -Bm[0]
-                 }
-             }
-             return PW > -Bm[0] && mW.push((EW | PW << NW) & Bm[11]), qm(mW)
+                     jy(RR[my[10]].push(RR[my[14]] & my[11]), RR[my[14]] >>= my[3], RR[my[9]] -= my[3])
+                   } while (RR[my[9]] > my[23]);
+                   RR[-my[13]] = -my[2]
+                 } return RR[-my[13]] > -my[2] && RR[my[10]].push((RR[my[14]] | RR[-my[13]] << RR[my[9]]) & my[11]), zy(RR[my[10]])
```

#### 3397. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30116-L30117` → after: `L29456-L29457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29456-L29457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29456-L29457) · [Before (L30116-L30117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30116-L30117)

```diff
-           function iW(iW) {
-             return typeof Cm[iW] === Bm[15] ? Cm[iW] = WW(Xm[iW]) : Cm[iW]
+           function JR(...JR) {
+             return JR[my[12]] = my[2], typeof Py[JR[my[1]]] === my[16] ? Py[JR[my[1]]] = RR(Iy[JR[my[1]]]) : Py[JR[my[1]]]
```

#### 3398. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30167-L30178` → after: `L29484-L29489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29484-L29489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29484-L29489) · [Before (L30167-L30178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30167-L30178)

```diff
-                   return WW[Bm[12]] = Bm[0], typeof Cm[WW[Bm[2]]] === Bm[15] ? Cm[WW[Bm[2]]] = iW(Xm[WW[Bm[2]]]) : Cm[WW[Bm[2]]]
-                 }
-                 const mW = new Set(process.argv.slice(Bm[39]));
-                 if (!mW.has(OW(123))) {
-                   if (mW.size !== Bm[0]) return Bm[79];
-                   if (!mW.has("-v")) return Bm[79]
-                 }
-                 return await (async (iW, OW) => {
-                   function mW(...WW) {
-                     for (Im(WW[Bm[12]] = Bm[0], WW[Bm[0]] = 'M6cCZXWtQjpSBIFEUGiw]%Ko_zh$4{lJdb`HvRu@NV&P"[T<#x*(18~Y;=|:)>D3f?/rs0LnOe}+7yk!^,g29mqAa5.', WW[Bm[46]] = "" + (WW[Bm[2]] || ""), WW[-Bm[81]] = WW[Bm[46]].length, WW[Bm[37]] = [], WW[Bm[42]] = Bm[2], WW[-Bm[80]] = Bm[2 … [truncated]
-                       if (WW[Bm[82]] = WW[Bm[0]].indexOf(WW[Bm[46]][WW[Bm[3]]]), WW[Bm[82]] !== -Bm[0])
-                         if (WW[Bm[6]] < Bm[2]) WW[Bm[6]] = WW[Bm[82]];
+                   return RR[my[12]] = my[2], typeof Py[RR[my[1]]] === my[16] ? Py[RR[my[1]]] = function(RR) {
+                     var JR, GR, yR, tR, uR, ZR, qR;
+                     for (jy(JR = "" + (RR || ""), GR = JR.length, yR = [], tR = my[1], uR = my[1], ZR = -my[2]), qR = my[1]; qR < GR; qR++) {
+                       var iR = 'x:;+?Mz%j0|}sp$wvT=bqWmYG]S1_ZXHhkeu24L^yt93/{oaQR)"<n#lV*E[DFK.!,cC@5g~IO7&U>6PNd8BJfr`iA('.indexOf(JR[qR]);
+                       if (iR !== -my[2])
+                         if (ZR < my[1]) ZR = iR;
```

#### 3399. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30180` → after: `L29491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29491) · [Before (L30180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30180)

```diff
-                           Im(WW[Bm[6]] += WW[Bm[82]] * Bm[30], WW[Bm[42]] |= WW[Bm[6]] << WW[-Bm[80]], WW[-Bm[80]] += (WW[Bm[6]] & Bm[33]) > Bm[34] ? Bm[35] : Bm[36]);
+                           jy(ZR += iR * my[31], tR |= ZR << uR, uR += (ZR & my[33]) > my[34] ? my[35] : my[36]);
```

#### 3400. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30182-L30193` → after: `L29493-L29508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29493-L29508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29493-L29508) · [Before (L30182-L30193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30182-L30193)

```diff
-                             Im(WW[Bm[37]].push(WW[Bm[42]] & Bm[11]), WW[Bm[42]] >>= Bm[10], WW[-Bm[80]] -= Bm[10])
-                           } while (WW[-Bm[80]] > Bm[24]);
-                           WW[Bm[6]] = -Bm[0]
-                         } return WW[Bm[6]] > -Bm[0] && WW[Bm[37]].push((WW[Bm[42]] | WW[Bm[6]] << WW[-Bm[80]]) & Bm[11]), qm(WW[Bm[37]])
-                   }
- 
-                   function EW(...WW) {
-                     return WW[Bm[12]] = Bm[0], typeof Cm[WW[Bm[2]]] === Bm[15] ? Cm[WW[Bm[2]]] = mW(Xm[WW[Bm[2]]]) : Cm[WW[Bm[2]]]
-                   }
-                   return OW === await WW() ? EW(126) + "l)" : ""
-                 })(), Bm[83]
-               }), !OW && (0, yW[Bm[3]])()) {
+                             jy(yR.push(tR & my[11]), tR >>= my[3], uR -= my[3])
+                           } while (uR > my[23]);
+                           ZR = -my[2]
+                         }
+                     }
+                     return ZR > -my[2] && yR.push((tR | ZR << uR) & my[11]), zy(yR)
+                   }(Iy[RR[my[1]]]) : Py[RR[my[1]]]
+                 }
+                 return void 0 === await RR() ? JR(140) + "l)" : ""
+               })(), my[48]
+             }
+           }
+           JR(135) in Sy && GR();
+           let yR = my[47];
+           jy(setInterval((() => {
+             if (!yR && (0, BR[my[53]])()) {
```

#### 3401. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30195-L30197` → after: `L29510-L29512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29510-L29512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29510-L29512) · [Before (L30195-L30197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30195-L30197)

```diff
-                 for (Im(WW[Bm[12]] = Bm[0], WW[Bm[38]] = 'HG=|76@FuNy.Ta4Un0~"+c*S_z$3{k(/^M;>}<Dq!h)I,xm[v5tA9CobPLg2rB1&8J:]i?jYVKwX#%Z`fdQWselREOp', WW[Bm[46]] = "" + (WW[Bm[2]] || ""), WW[-Bm[84]] = WW[Bm[46]].length, WW[Bm[9]] = [], WW[-Bm[87]] = Bm[2], WW[-Bm[88]] = Bm[2],  … [truncated]
-                   if (WW[Bm[43]] = WW[Bm[38]].indexOf(WW[Bm[46]][WW[Bm[85]]]), WW[Bm[43]] !== -Bm[0])
-                     if (WW[-Bm[86]] < Bm[2]) WW[-Bm[86]] = WW[Bm[43]];
+                 for (jy(RR[my[12]] = my[2], RR[my[29]] = 'pXzPda8o{nA?%"sZS9.lROtHec37xLM#WI2uB`|CD=J5,4qG1b0rEjyfU]6<^*hm;gQ@FY$!_&kwN}Ti:vVK[>~+/()', RR[-my[49]] = "" + (RR[my[1]] || ""), RR[my[4]] = RR[-my[49]].length, RR[-my[50]] = [], RR[my[14]] = my[1], RR[my[46]] = my[1],  … [truncated]
+                   if (RR[my[51]] = RR[my[29]].indexOf(RR[-my[49]][RR[my[3]]]), RR[my[51]] !== -my[2])
+                     if (RR[my[23]] < my[1]) RR[my[23]] = RR[my[51]];
```

#### 3402. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30199` → after: `L29514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29514) · [Before (L30199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30199)

```diff
-                       Im(WW[-Bm[86]] += WW[Bm[43]] * Bm[30], WW[-Bm[87]] |= WW[-Bm[86]] << WW[-Bm[88]], WW[-Bm[88]] += (WW[-Bm[86]] & Bm[33]) > Bm[34] ? Bm[35] : Bm[36]);
+                       jy(RR[my[23]] += RR[my[51]] * my[31], RR[my[14]] |= RR[my[23]] << RR[my[46]], RR[my[46]] += (RR[my[23]] & my[33]) > my[34] ? my[35] : my[36]);
```

#### 3403. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30201-L30204` → after: `L29516-L29519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29516-L29519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29516-L29519) · [Before (L30201-L30204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30201-L30204)

```diff
-                         Im(WW[Bm[9]].push(WW[-Bm[87]] & Bm[11]), WW[-Bm[87]] >>= Bm[10], WW[-Bm[88]] -= Bm[10])
-                       } while (WW[-Bm[88]] > Bm[24]);
-                       WW[-Bm[86]] = -Bm[0]
-                     } return WW[-Bm[86]] > -Bm[0] && WW[Bm[9]].push((WW[-Bm[87]] | WW[-Bm[86]] << WW[-Bm[88]]) & Bm[11]), qm(WW[Bm[9]])
+                         jy(RR[-my[50]].push(RR[my[14]] & my[11]), RR[my[14]] >>= my[3], RR[my[46]] -= my[3])
+                       } while (RR[my[46]] > my[23]);
+                       RR[my[23]] = -my[2]
+                     } return RR[my[23]] > -my[2] && RR[-my[50]].push((RR[my[14]] | RR[my[23]] << RR[my[46]]) & my[11]), zy(RR[-my[50]])
```

#### 3404. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30208` → after: `L29523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29523) · [Before (L30208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30208)

```diff
-                 return WW[Bm[12]] = Bm[0], typeof Cm[WW[Bm[2]]] === Bm[15] ? Cm[WW[Bm[2]]] = iW(Xm[WW[Bm[2]]]) : Cm[WW[Bm[2]]]
+                 return JR[my[12]] = my[2], typeof Py[JR[my[1]]] === my[16] ? Py[JR[my[1]]] = RR(Iy[JR[my[1]]]) : Py[JR[my[1]]]
```

#### 3405. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30222-L30230` → after: `L29526-L29534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29526-L29534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29526-L29534) · [Before (L30222-L30230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30222-L30230)

```diff
-                 "1d": mW(Bm[63]) + mW(129),
-                 [mW(Bm[66]) + mW(Bm[32])]: mW(132) + mW(133),
-                 [mW(Bm[40]) + Bm[91]]: mW(135) + Bm[91],
-                 [mW(Bm[81]) + mW(137)]: mW(138) + "z",
-                 [mW(139) + "4o"]: mW(140) + mW(141) + "48",
-                 [mW(142) + mW(143)]: mW(144),
-                 [mW(145) + "6"]: mW(146),
-                 [mW(147) + "5"]: mW(148) + "gl",
-                 [mW(149) + mW(150)]: mW(151) + mW(152)
+                 "1d": JR(141) + JR(142),
+                 [JR(143) + JR(144)]: JR(my[5]) + JR(146),
+                 [JR(147) + my[52]]: JR(148) + my[52],
+                 [JR(149) + JR(150)]: JR(my[26]) + "z",
+                 [JR(my[13]) + "4o"]: JR(153) + JR(154) + "48",
+                 [JR(155) + JR(156)]: JR(157),
+                 [JR(158) + "6"]: JR(159),
+                 [JR(160) + "5"]: JR(161) + "gl",
+                 [JR(162) + JR(163)]: JR(164) + JR(165)
```

#### 3406. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30232` → after: `L29536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29536) · [Before (L30232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30232)

```diff
-               Im(OW = Bm[83], (0, HW[mW(153)])(PW.Ai, NW))
+               jy(yR = my[48], (0, bR[JR(166)])(ZR.Ri, GR))
```

#### 3407. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30234-L30235` → after: `L29538-L29554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29538-L29554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29538-L29554) · [Before (L30234-L30235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30234-L30235)

```diff
-           }), 3049), (0, HW[iW(154) + iW(155)])((() => {
-             OW = Bm[79]
+           }), 7853), (0, bR[JR(167) + JR(168)])((() => {
+             (function(...RR) {
+               return RR[my[12]] = my[2], typeof Py[RR[my[1]]] === my[16] ? Py[RR[my[1]]] = function(...RR) {
+                 for (jy(RR[my[12]] = my[2], RR[my[29]] = '~UnjHLSkWDVKIZYGsoN*qug.}hp)<CBO:wP|r?(5{l1y>^9XAf6]#3ab;+c,dM!JQTimxE_"0RFet7=`2$v8/[z4%@&', RR[my[0]] = "" + (RR[my[1]] || ""), RR[my[19]] = RR[my[0]].length, RR[my[54]] = [], RR[my[8]] = my[1], RR[my[9]] = my[1], RR[my[ … [truncated]
+                   if (RR[my[53]] = RR[my[29]].indexOf(RR[my[0]][RR[-my[9]]]), RR[my[53]] !== -my[2])
+                     if (RR[my[23]] < my[1]) RR[my[23]] = RR[my[53]];
+                     else {
+                       jy(RR[my[23]] += RR[my[53]] * my[31], RR[my[8]] |= RR[my[23]] << RR[my[9]], RR[my[9]] += (RR[my[23]] & my[33]) > my[34] ? my[35] : my[36]);
+                       do {
+                         jy(RR[my[54]].push(RR[my[8]] & my[11]), RR[my[8]] >>= my[3], RR[my[9]] -= my[3])
+                       } while (RR[my[9]] > my[23]);
+                       RR[my[23]] = -my[2]
+                     } return RR[my[23]] > -my[2] && RR[my[54]].push((RR[my[8]] | RR[my[23]] << RR[my[9]]) & my[11]), zy(RR[my[54]])
+               }(Iy[RR[my[1]]]) : Py[RR[my[1]]]
+             })(169) in Sy && function(...RR) {
+               RR[my[12]] = my[1]
+ ... (1 more added lines; see GitHub link above)
```

#### 3408. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30239-L30244` → after: `L29558-L29563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29558-L29563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29558-L29563) · [Before (L30239-L30244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30239-L30244)

```diff
-     var am = OW(673),
-       rm = OW(40319),
-       zm = OW(4433);
-     var Fm = OW(38866),
-       Qm = OW(40987),
-       WE = OW(4025);
+     var dy = GR(715),
+       Ey = GR(40371),
+       Yy = GR(4526);
+     var ky = GR(38853),
+       Qy = GR(40985),
+       Fy = GR(4115);
```

#### 3409. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30247` → after: `L29566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29566) · [Before (L30247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30247)

```diff
-       return OW.e(251).then((() => OW(44895)))
+       return GR.e(251).then((() => GR(44991)))
```

#### 3410. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30251` → after: `L29570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29570) · [Before (L30251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30251)

```diff
-       return OW.e(610).then((() => OW(44898)))
+       return GR.e(610).then((() => GR(44996)))
```

#### 3411. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30254-L30255` → after: `L29573-L29574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29573-L29574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29573-L29574) · [Before (L30254-L30255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30254-L30255)

```diff
-       if (AW.e.hasPlayedFirstGame) return;
-       const WW = await AW.e.initialSetup();
+       if (eR.b.hasPlayedFirstGame) return;
+       const RR = await eR.b.initialSetup();
```

#### 3412. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30261` → after: `L29580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29580) · [Before (L30261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30261)

```diff
-       return UW.d.get("clientEscMenuOptions").useWebGpu || (0, MW.c)(sW.shaderPackPage.prefetchHint(), UW.d.isWebGpuDefaultOff())
+       return nR.d.get("clientEscMenuOptions").useWebGpu || (0, AR.b)(WR.shaderPackPage.prefetchHint(), nR.d.isWebGpuDefaultOff())
```

#### 3413. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30263` → after: `L29582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29582) · [Before (L30263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30263)

```diff
-     JW.gameBridge.attach(mm), (0, CO.f)(new RO), (0, CW.n)("EffectUpdate", (WW => {
+     pR.gameBridge.attach(Jy), (0, IG.e)(new jG), (0, zR.q)("EffectUpdate", (RR => {
```

#### 3414. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30265` → after: `L29584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29584) · [Before (L30265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30265)

```diff
-         FN: iW,
+         tZ: JR,
```

#### 3415. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30272` → after: `L29591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29591) · [Before (L30272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30272)

```diff
-       (0, mW.g)(iW) && GO.c.update(OW, {
+       (0, yR.l)(JR) && dG.d.update(GR, {
```

#### 3416. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30275-L30276` → after: `L29594-L29595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29594-L29595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29594-L29595) · [Before (L30275-L30276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30275-L30276)

```diff
-         displayName: null !== PW && void 0 !== PW ? PW : null,
-         durationMs: null !== LW && void 0 !== LW ? LW : null
+         displayName: null !== ZR && void 0 !== ZR ? ZR : null,
+         durationMs: null !== qR && void 0 !== qR ? qR : null
```

#### 3417. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30278` → after: `L29597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29597) · [Before (L30278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30278)

```diff
-     })), (0, CW.n)("RemoveEffect", (WW => {
+     })), (0, zR.q)("RemoveEffect", (RR => {
```

#### 3418. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30280` → after: `L29599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29599) · [Before (L30280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30280)

```diff
-         FN: iW,
+         tZ: JR,
```

#### 3419. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30283-L30289` → after: `L29602-L29608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29602-L29608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29602-L29608) · [Before (L30283-L30289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30283-L30289)

```diff
-       (0, mW.g)(iW) && GO.c.remove(OW)
-     })), (0, CW.n)("replayViewer|replayLoaded", (() => {
-       GO.c.clear()
-     })), (0, CW.n)("replayViewer|openChanged", (() => {
-       GO.c.clear()
-     })), (0, bW.q)(EE()), sW.shaderPackPage.preload(), (0, kW.d)(), (0, jW.g)();
-     const NE = (0, Em.d)((async function(WW, iW) {
+       (0, yR.l)(JR) && dG.d.remove(GR)
+     })), (0, zR.q)("replayViewer|replayLoaded", (() => {
+       dG.d.clear()
+     })), (0, zR.q)("replayViewer|openChanged", (() => {
+       dG.d.clear()
+     })), (0, aR.n)(Rt()), WR.shaderPackPage.preload(), (0, UR.e)(), (0, LR.f)();
+     const Jt = (0, Gy.e)((async function(RR, JR) {
```

#### 3420. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30303` → after: `L29622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29622) · [Before (L30303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30303)

```diff
-         PW = (0, am.Y)("js", (() => function(WW, iW) {
+         ZR = (0, dy.S)("js", (() => function(RR, JR) {
```

#### 3421. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30305-L30306` → after: `L29624-L29625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29624-L29625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29624-L29625) · [Before (L30305-L30306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30305-L30306)

```diff
-           const PW = (0, yW.h)(),
-             LW = null === PW || void 0 === PW ? void 0 : PW.oZ;
+           const ZR = (0, BR.i)(),
+             qR = null === ZR || void 0 === ZR ? void 0 : ZR.NK;
```

#### 3422. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30308-L30311` → after: `L29627-L29630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29627-L29630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29627-L29630) · [Before (L30308-L30311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30308-L30311)

```diff
-             renderDistance: null !== (OW = null === LW || void 0 === LW ? void 0 : LW.VJ[0]) && void 0 !== OW ? OW : null,
-             renderDistanceVertical: null !== (mW = null === LW || void 0 === LW ? void 0 : LW.VJ[1]) && void 0 !== mW ? mW : null,
-             knownChunks: null !== (EW = null === LW || void 0 === LW ? void 0 : LW.Pj.count()) && void 0 !== EW ? EW : null,
-             liveParticleSystems: null !== (NW = null === PW || void 0 === PW ? void 0 : PW.TZ.lmW()) && void 0 !== NW ? NW : null,
+             renderDistance: null !== (GR = null === qR || void 0 === qR ? void 0 : qR.FN[0]) && void 0 !== GR ? GR : null,
+             renderDistanceVertical: null !== (yR = null === qR || void 0 === qR ? void 0 : qR.FN[1]) && void 0 !== yR ? yR : null,
+             knownChunks: null !== (tR = null === qR || void 0 === qR ? void 0 : qR.eL.count()) && void 0 !== tR ? tR : null,
+             liveParticleSystems: null !== (uR = null === ZR || void 0 === ZR ? void 0 : ZR.lK.RtR()) && void 0 !== uR ? uR : null,
```

#### 3423. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30314` → after: `L29633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29633) · [Before (L30314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30314)

```diff
-             ...(0, zm.b)(WW)
+             ...(0, Yy.d)(RR)
```

#### 3424. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30319` → after: `L29638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29638) · [Before (L30319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30319)

```diff
-         const WW = AW.e.hasPlayedFirstGame ? await AW.e.playOnSubsequentGame(EW, iW) : await AW.e.playOnFirstGame(EW, iW);
+         const RR = eR.b.hasPlayedFirstGame ? await eR.b.playOnSubsequentGame(tR, JR) : await eR.b.playOnFirstGame(tR, JR);
```

#### 3425. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30327` → after: `L29646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29646) · [Before (L30327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30327)

```diff
-       (0, KW.k)(), (0, bW.n)(EE()), (0, SW.d)();
+       (0, CR.l)(), (0, aR.l)(Rt()), (0, XR.d)();
```

#### 3426. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30330` → after: `L29649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29649) · [Before (L30330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30330)

```diff
-       return (0, Qm.b)(mW) && Fm.e.ensureWorker(), NE(...iW)
+       return (0, Qy.c)(yR) && ky.g.ensureWorker(), Jt(...JR)
```

#### 3427. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30332-L30333` → after: `L29651-L29652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29651-L29652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29651-L29652) · [Before (L30332-L30333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30332-L30333)

```diff
-     CW.l.subscribe("appManagerUpdated|gameState", (WW => {
-       "landingPage" === WW && Fm.e.stopWorker()
+     zR.n.subscribe("appManagerUpdated|gameState", (RR => {
+       "landingPage" === RR && ky.g.stopWorker()
```

#### 3428. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30343` → after: `L29662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29662) · [Before (L30343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30343)

```diff
-     const kE = [2, 0, 1, "h", 65, "a", 143, "g", "e", 230, "d", 8, 255, "length", "b", "c", 3, 56, "undefined", void 0, 16, 125, 63, 6, "fromCodePoint", 7, 12, "push", 247, 222, 123, 124, 116, 127, 128, 91, 8191, 88, 13, 14, 121, 216, 146, 167, 132, 86, 4, 240, 79, !1, 200, null, … [truncated]
+     const et = [1, 2, 0, "h", 3, "i", 7, "e", "f", "d", 8, 255, "length", "c", "a", "undefined", void 0, 4, 63, 6, "fromCodePoint", 12, "push", "b", null, 10, 91, 101, 102, 94, 168, 52, 80, 8191, 88, 13, 14, 207, 5, 198, 115, 66, 164, "g", 127, 100, 81, 39, 220, 187, 121, !1, 204 … [truncated]
```

#### 3429. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30346-L30349` → after: `L29665-L29668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29665-L29668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29665-L29668) · [Before (L30346-L30349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30346-L30349)

```diff
-       return WW[kE[13]] = kE[2], typeof wE[WW[kE[1]]] === kE[18] ? wE[WW[kE[1]]] = function(...WW) {
-         for (uE(WW[kE[13]] = kE[2], WW[kE[5]] = 'GhnjsA1agKHcpSltCoJXIZbx%"|`qTY>keVwFP9m@?Q,O;L/d<RBr)uUDE{[fMN~7yv$Wi=4^:]2z.#&3860!(5*+}_', WW[kE[0]] = "" + (WW[kE[1]] || ""), WW[-kE[4]] = WW[kE[0]].length, WW[kE[10]] = [], WW[kE[8]] = kE[1], WW[kE[9]] = kE[1], WW[kE[7]] = -kE … [truncated]
-           if (WW[-kE[6]] = WW[kE[5]].indexOf(WW[kE[0]][WW[kE[3]]]), WW[-kE[6]] !== -kE[2])
-             if (WW[kE[7]] < kE[1]) WW[kE[7]] = WW[-kE[6]];
+       return RR[et[12]] = et[0], typeof ut[RR[et[2]]] === et[15] ? ut[RR[et[2]]] = function(...RR) {
+         for (gt(RR[et[12]] = et[0], RR[et[0]] = 'fEa1mckHjGlDsWIqgTohULONF+z?Z<2Y!:CQ&eXurKn9/p3*7M>y,)`.d]$@}40R5ti^S"_6[%;P|b~Bv{J#VAwx(=8', RR[et[1]] = "" + (RR[et[2]] || ""), RR[et[4]] = RR[et[1]].length, RR[et[9]] = [], RR[et[7]] = et[2], RR[et[8]] = et[2], RR[et[6]] = -et[0 … [truncated]
+           if (RR[et[5]] = RR[et[0]].indexOf(RR[et[1]][RR[et[3]]]), RR[et[5]] !== -et[0])
+             if (RR[et[6]] < et[2]) RR[et[6]] = RR[et[5]];
```

#### 3430. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30351` → after: `L29670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29670) · [Before (L30351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30351)

```diff
-               uE(WW[kE[7]] += WW[-kE[6]] * kE[35], WW[kE[8]] |= WW[kE[7]] << WW[kE[9]], WW[kE[9]] += (WW[kE[7]] & kE[36]) > kE[37] ? kE[38] : kE[39]);
+               gt(RR[et[6]] += RR[et[5]] * et[26], RR[et[7]] |= RR[et[6]] << RR[et[8]], RR[et[8]] += (RR[et[6]] & et[33]) > et[34] ? et[35] : et[36]);
```

#### 3431. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30353-L30357` → after: `L29672-L29676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29672-L29676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29672-L29676) · [Before (L30353-L30357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30353-L30357)

```diff
-                 uE(WW[kE[10]].push(WW[kE[8]] & kE[12]), WW[kE[8]] >>= kE[11], WW[kE[9]] -= kE[11])
-               } while (WW[kE[9]] > kE[25]);
-               WW[kE[7]] = -kE[2]
-             } return WW[kE[7]] > -kE[2] && WW[kE[10]].push((WW[kE[8]] | WW[kE[7]] << WW[kE[9]]) & kE[12]), ME(WW[kE[10]])
-       }(tE[WW[kE[1]]]) : wE[WW[kE[1]]]
+                 gt(RR[et[9]].push(RR[et[7]] & et[11]), RR[et[7]] >>= et[10], RR[et[8]] -= et[10])
+               } while (RR[et[8]] > et[6]);
+               RR[et[6]] = -et[0]
+             } return RR[et[6]] > -et[0] && RR[et[9]].push((RR[et[7]] | RR[et[6]] << RR[et[8]]) & et[11]), nt(RR[et[9]])
+       }(Zt[RR[et[2]]]) : ut[RR[et[2]]]
```

#### 3432. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30361` → after: `L29680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29680) · [Before (L30361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30361)

```diff
-       return WW[kE[13]] = kE[2], typeof xE !== kE[18] && xE ? (new xE).decode(new lE(WW[kE[1]])) : typeof AE !== kE[18] && AE ? AE.from(WW[kE[1]]).toString("utf-8") : UE(WW[kE[1]])
+       return RR[et[12]] = et[0], typeof it !== et[15] && it ? (new it).decode(new ft(RR[et[2]])) : typeof Vt !== et[15] && Vt ? Vt.from(RR[et[2]]).toString("utf-8") : rt(RR[et[2]])
```

#### 3433. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30365-L30366` → after: `L29684-L29685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29684-L29685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29684-L29685) · [Before (L30365-L30366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30365-L30366)

```diff
-     uE(wE = {}, tE = ["iQg#U~Yp)S`oes`q^N:g09uWZSRcp`xTTVxequgrsu@", "YWgKe4[h", "BIlaD6Ux0u+83j!VVdVk(0cX;D;:dCi>?|[T|0]@Sl", "3IeBpdea[N#cNPW9U4uq.i>?!7jCptNFvuMa", "%WK`e/1FBf_8=i.X*ouUff]{x7~~H83mf|QkHi0T{I*kXn", "<E#4I0FpJKA&&jEV9x=>eMsJi{ZjpmexmEn^sVxaa", "O1#qm2i?}ljY|8e>P … [truncated]
-       uE(WW[kE[13]] = kE[1], WW[-kE[17]] = [function() {
+     gt(ut = {}, Zt = ["YSVzA@^NGt_mE", 'L3c;P"sj4o__H1', '1QSlw6Z&qocN7?]KrN*mk"7,5}+7|?eox7NGXd%<(t5IX4E9L`}Y6}Fj6U', "JkO|L>cWB}Sm/#}&Pd=k:@ajtsU[f[gzkM6%w>_s%T;DPzI", 'dyx`z%c"*qaPS@Urh;|),PH+DT3YxzHe(y:P+~j$K$R_Iz!n0edG', "J%gk5B_o:]Te<m", "ye0Z#6_sOW,vY>(OYGH:q#/sAh]+l{FCPN[ … [truncated]
+       gt(RR[et[12]] = et[2], RR[et[14]] = [function() {
```

#### 3434. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30374` → after: `L29693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29693) · [Before (L30374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30374)

```diff
-       }], WW[kE[14]] = kE[19], WW[kE[15]] = []);
+       }], RR[et[0]] = et[16], RR[et[13]] = []);
```

#### 3435. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30376` → after: `L29695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29695) · [Before (L30376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30376)

```diff
-         uE(WW[kE[14]] = Object, WW[kE[15]][kE[27]]("".__proto__.constructor.name))
+         gt(RR[et[0]] = Object, RR[et[13]][et[22]]("".__proto__.constructor.name))
```

#### 3436. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30378-L30381` → after: `L29697-L29700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29697-L29700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29697-L29700) · [Before (L30378-L30381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30378-L30381)

```diff
-       WW: for (WW[kE[16]] = kE[1]; WW[kE[16]] < WW[-kE[17]][kE[13]]; WW[kE[16]]++) try {
-         for (WW[kE[14]] = WW[-kE[17]][WW[kE[16]]](), WW[kE[8]] = kE[1]; WW[kE[8]] < WW[kE[15]][kE[13]]; WW[kE[8]]++)
-           if (typeof WW[kE[14]][WW[kE[15]][WW[kE[8]]]] === kE[18]) continue WW;
-         return WW[kE[14]]
+       RR: for (RR[et[4]] = et[2]; RR[et[4]] < RR[et[14]][et[12]]; RR[et[4]]++) try {
+         for (RR[et[0]] = RR[et[14]][RR[et[4]]](), RR[et[7]] = et[2]; RR[et[7]] < RR[et[13]][et[12]]; RR[et[7]]++)
+           if (typeof RR[et[0]][RR[et[13]][RR[et[7]]]] === et[15]) continue RR;
+         return RR[et[0]]
```

#### 3437. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30383-L30385` → after: `L29702-L29704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29702-L29704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29702-L29704) · [Before (L30383-L30385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30383-L30385)

```diff
-       return WW[kE[14]] || this
-     }() || {}, xE = ZE.TextDecoder, lE = ZE.Uint8Array, AE = ZE.OZ, bE = ZE.String || String, jE = ZE.Array || Array, UE = function(...WW) {
-       return uE(WW[kE[13]] = kE[1], WW[kE[28]] = new jE(kE[34]), WW[-kE[29]] = bE[kE[24]] || bE.fromCharCode, WW[-kE[20]] = []),
+       return RR[et[0]] || this
+     }() || {}, it = qt.TextDecoder, ft = qt.Uint8Array, Vt = qt.GK, Kt = qt.String || String, wt = qt.Array || Array, rt = function(...RR) {
+       return gt(RR[et[12]] = et[2], RR[et[14]] = new wt(et[56]), RR[et[23]] = Kt[et[20]] || Kt.fromCharCode, RR[-et[4]] = []),
```

#### 3438. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30387-L30388` → after: `L29706-L29707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29706-L29707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29706-L29707) · [Before (L30387-L30388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30387-L30388)

```diff
-           for (uE(iW[kE[13]] = kE[2], iW[kE[22]] = kE[19], iW[kE[14]] = kE[19], iW[kE[15]] = iW[kE[1]][kE[13]], WW[-kE[20]][kE[13]] = kE[1]), iW[kE[21]] = kE[1]; iW[kE[21]] < iW[kE[15]];) uE(iW[kE[14]] = iW[kE[1]][iW[kE[21]]++], iW[kE[14]] <= kE[33] ? iW[kE[22]] = iW[kE[14]] : iW … [truncated]
-           return WW[-kE[20]].join("")
+           for (gt(JR[et[12]] = et[0], JR[et[14]] = et[16], JR[et[1]] = et[16], JR[et[4]] = JR[et[2]][et[12]], RR[-et[4]][et[12]] = et[2]), JR[et[17]] = et[2]; JR[et[17]] < JR[et[4]];) gt(JR[et[1]] = JR[et[2]][JR[et[17]]++], JR[et[1]] <= et[44] ? JR[et[14]] = JR[et[1]] : JR[et[1]] … [truncated]
+           return RR[-et[4]].join("")
```

#### 3439. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30391-L30398` → after: `L29710-L29717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29710-L29717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29710-L29717) · [Before (L30391-L30398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30391-L30398)

```diff
-     const SE = atob(sE(113) + sE(114) + sE(115) + "Vy"),
-       YE = atob(sE(kE[32]) + sE(117) + sE(118)),
-       yE = atob(sE(119) + sE(120) + sE(kE[40]) + "Q="),
-       TE = atob(sE(122) + sE(kE[30]) + sE(kE[31])),
-       JE = atob(sE(kE[21]) + sE(kE[30]) + sE(kE[31])),
-       hE = atob(sE(kE[32]) + sE(126)),
-       HE = atob(sE(kE[33]) + "g="),
-       nE = atob(sE(kE[34]) + "h0");
+     const Wt = atob(Lt(et[26]) + Lt(92) + Lt(93) + "Vy"),
+       At = atob(Lt(et[29]) + Lt(95) + Lt(96)),
+       Ct = atob(Lt(97) + Lt(98) + Lt(99) + "Q="),
+       Xt = atob(Lt(et[45]) + Lt(et[27]) + Lt(et[28])),
+       Mt = atob(Lt(103) + Lt(et[27]) + Lt(et[28])),
+       Bt = atob(Lt(et[29]) + Lt(104)),
+       lt = atob(Lt(105) + "g="),
+       pt = atob(Lt(106) + "h0");
```

#### 3440. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30404-L30410` → after: `L29723-L29727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29723-L29727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29723-L29727) · [Before (L30404-L30410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30404-L30410)

```diff
-       function iW(...WW) {
-         return WW[kE[13]] = kE[2], typeof wE[WW[kE[1]]] === kE[18] ? wE[WW[kE[1]]] = function(WW) {
-           var iW, OW, mW, EW, NW, PW, LW;
-           for (uE(iW = "" + (WW || ""), OW = iW.length, mW = [], EW = kE[1], NW = kE[1], PW = -kE[2]), LW = kE[1]; LW < OW; LW++) {
-             var cW = '3BHUnOj2|ae4^t;,s/Lg0iAuC*G~VNkPF5!%qDwJISl]W6zQd?}7>y`1xYp(bc#m@.ZvE{<M&9$XR=T8"fh)K_or+:['.indexOf(iW[LW]);
-             if (cW !== -kE[2])
-               if (PW < kE[1]) PW = cW;
+       function JR(RR) {
+         return typeof ut[RR] === et[15] ? ut[RR] = function(...RR) {
+           for (gt(RR[et[12]] = et[0], RR[et[0]] = '(0a#2dYL9W*t45uA?>T_vm=pK@6EwF;|"x/SnG`:,~c3]eM)Js!yrjlRU{ZhoXQkbI&7^VqBiz$P+<NC}Df.g1H8[O%', RR[-et[30]] = "" + (RR[et[2]] || ""), RR[et[13]] = RR[-et[30]].length, RR[-et[37]] = [], RR[-et[31]] = et[2], RR[et[32]] = et[2], RR[et … [truncated]
+             if (RR[et[5]] = RR[et[0]].indexOf(RR[-et[30]][RR[et[3]]]), RR[et[5]] !== -et[0])
+               if (RR[et[6]] < et[2]) RR[et[6]] = RR[et[5]];
```

#### 3441. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30412` → after: `L29729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29729) · [Before (L30412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30412)

```diff
-                 uE(PW += cW * kE[35], EW |= PW << NW, NW += (PW & kE[36]) > kE[37] ? kE[38] : kE[39]);
+                 gt(RR[et[6]] += RR[et[5]] * et[26], RR[-et[31]] |= RR[et[6]] << RR[et[32]], RR[et[32]] += (RR[et[6]] & et[33]) > et[34] ? et[35] : et[36]);
```

#### 3442. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30414-L30426` → after: `L29731-L29747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29731-L29747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29731-L29747) · [Before (L30414-L30426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30414-L30426)

```diff
-                   uE(mW.push(EW & kE[12]), EW >>= kE[11], NW -= kE[11])
-                 } while (NW > kE[25]);
-                 PW = -kE[2]
-               }
-           }
-           return PW > -kE[2] && mW.push((EW | PW << NW) & kE[12]), ME(mW)
-         }(tE[WW[kE[1]]]) : wE[WW[kE[1]]]
-       }
-       WW[kE[13]] = kE[1], iW(129) + kE[5] in KE && function(...WW) {
-         uE(WW[kE[13]] = kE[1], WW[kE[44]] = function(...WW) {
-           for (uE(WW[kE[13]] = kE[2], WW[kE[39]] = kE[1], WW[-kE[41]] = {}, WW[-kE[42]] = kE[1], WW[kE[10]] = kE[1], WW[kE[43]] = kE[1], WW[-kE[40]] = WW[kE[1]].length), WW[kE[7]] = kE[1]; WW[kE[7]] < WW[-kE[40]]; WW[kE[7]]++) {
-             for (uE(WW[-kE[41]] = {}, WW[-kE[42]] = kE[1], WW[kE[10]] = kE[2]), WW[kE[3]] = WW[kE[7]] + kE[2]; WW[kE[3]] < WW[-kE[40]]; WW[kE[3]]++) WW[kE[1]][WW[kE[7]]].x !== WW[kE[1]][WW[kE[3]]].x || WW[kE[1]][WW[kE[7]]].y !== WW[kE[1]][WW[kE[3]]].y ? (WW[kE[1]][WW[kE[7]]].y == … [truncated]
-             uE(WW[-kE[42]] += WW[kE[10]], WW[kE[39]] = Math.max(WW[kE[39]], WW[-kE[42]]))
+                   gt(RR[-et[37]].push(RR[-et[31]] & et[11]), RR[-et[31]] >>= et[10], RR[et[32]] -= et[10])
+                 } while (RR[et[32]] > et[6]);
+                 RR[et[6]] = -et[0]
+               } return RR[et[6]] > -et[0] && RR[-et[37]].push((RR[-et[31]] | RR[et[6]] << RR[et[32]]) & et[11]), nt(RR[-et[37]])
+         }(Zt[RR]) : ut[RR]
+       }
+       RR[et[12]] = et[2], JR(107) in Ut && function(...RR) {
+         gt(RR[et[12]] = et[2], RR[-et[41]] = function(...RR) {
+           for (gt(RR[et[12]] = et[0], RR[et[14]] = RR[et[2]].length, RR[et[40]] = [], RR[et[39]] = et[2], RR[et[18]] = et[2], RR[et[2]].sort(((RR, JR) => RR - JR))), RR[et[38]] = et[2]; RR[et[38]] < RR[et[14]]; RR[et[38]]++)
+             if (!(RR[et[38]] > et[2] && RR[et[2]][RR[et[38]]] === RR[et[2]][RR[et[38]] - et[0]]))
+               for (gt(RR[et[39]] = RR[et[38]] + et[0], RR[et[18]] = RR[et[14]] - et[0]); RR[et[39]] < RR[et[18]];)
+                 if (RR[et[2]][RR[et[38]]] + RR[et[2]][RR[et[39]]] + RR[et[2]][RR[et[18]]] < et[2]) RR[et[39]]++;
+                 else if (RR[et[2]][RR[et[38]]] + RR[et[2]][RR[et[39]]] + RR[et[2]][RR[et[18]]] > et[2]) RR[et[18]]--;
+           else {
+             for (RR[et[40]].push([RR[et[2]][RR[et[38]]], RR[et[2]][RR[et[39]]], RR[et[2]][RR[et[18]]]]); RR[et[39]] < RR[et[18]] && RR[et[2]][RR[et[39]]] === RR[et[2]][RR[et[39]] + et[0]];) RR[et[39]]++;
+             for (; RR[et[39]] < RR[et[18]] && RR[et[2]][RR[et[18]]] === RR[et[2]][RR[et[18]] - et[0]];) RR[et[18]]--;
+ ... (1 more added lines; see GitHub link above)
```

#### 3443. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30428-L30430` → after: `L29749-L29751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29749-L29751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29749-L29751) · [Before (L30428-L30430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30428-L30430)

```diff
-           return WW[kE[39]]
-         }, console.log(WW[kE[44]]))
-       }(), WW[kE[14]] = kE[19];
+           return RR[et[40]]
+         }, console.log(RR[-et[41]]))
+       }(), RR[et[14]] = et[16];
```

#### 3444. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30432-L30440` → after: `L29753-L29759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29753-L29759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29753-L29759) · [Before (L30432-L30440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30432-L30440)

```diff
-         [iW(130) + iW(131)]: OW, [iW(kE[44]) + iW(133) + iW(134) + iW(135)]: EW, [iW(136) + iW(137)]: LW
-       } = (kE[1], YW[kE[10]])();
-       if (!(kE[1], yW[kE[10]])() || OW === kE[51]) {
-         function ZW(WW) {
-           var iW, OW, mW, EW, NW, PW, LW;
-           for (uE(iW = "" + (WW || ""), OW = iW.length, mW = [], EW = kE[1], NW = kE[1], PW = -kE[2]), LW = kE[1]; LW < OW; LW++) {
-             var cW = '1BerMDLSsZKIRcPqJu70k]5O&A6l8`,#:"j_X*Co@[HtU<^vTVpG}Yd~!b|mizEFnf4.Nwa=h)g{>;2%9Q/$(+?3yWx'.indexOf(iW[LW]);
-             if (cW !== -kE[2])
-               if (PW < kE[1]) PW = cW;
+         [JR(108) + JR(109)]: GR, [JR(110) + JR(111) + JR(112) + JR(113)]: tR, [JR(114) + JR(et[40])]: qR
+       } = (et[2], MR[et[9]])();
+       if (!(et[2], BR[et[7]])() || GR === et[24]) {
+         function KR(...RR) {
+           for (gt(RR[et[12]] = et[0], RR[-et[42]] = '0mz)o<U%O!?]I9;13s7aFRfv}uZ(+tcEDn2XjQ{N/b86[~K=GxC4JVLi`5PrT",B_Yp$@#SAkW|g&h^eyw*ql>:d.HM', RR[et[23]] = "" + (RR[et[2]] || ""), RR[et[4]] = RR[et[23]].length, RR[et[9]] = [], RR[et[38]] = et[2], RR[et[8]] = et[2], RR[et[43]] … [truncated]
+             if (RR[et[5]] = RR[-et[42]].indexOf(RR[et[23]][RR[et[3]]]), RR[et[5]] !== -et[0])
+               if (RR[et[43]] < et[2]) RR[et[43]] = RR[et[5]];
```

#### 3445. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30442` → after: `L29761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29761) · [Before (L30442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30442)

```diff
-                 uE(PW += cW * kE[35], EW |= PW << NW, NW += (PW & kE[36]) > kE[37] ? kE[38] : kE[39]);
+                 gt(RR[et[43]] += RR[et[5]] * et[26], RR[et[38]] |= RR[et[43]] << RR[et[8]], RR[et[8]] += (RR[et[43]] & et[33]) > et[34] ? et[35] : et[36]);
```

#### 3446. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30444-L30449` → after: `L29763-L29766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29763-L29766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29763-L29766) · [Before (L30444-L30449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30444-L30449)

```diff
-                   uE(mW.push(EW & kE[12]), EW >>= kE[11], NW -= kE[11])
-                 } while (NW > kE[25]);
-                 PW = -kE[2]
-               }
-           }
-           return PW > -kE[2] && mW.push((EW | PW << NW) & kE[12]), ME(mW)
+                   gt(RR[et[9]].push(RR[et[38]] & et[11]), RR[et[38]] >>= et[10], RR[et[8]] -= et[10])
+                 } while (RR[et[8]] > et[6]);
+                 RR[et[43]] = -et[0]
+               } return RR[et[43]] > -et[0] && RR[et[9]].push((RR[et[38]] | RR[et[43]] << RR[et[8]]) & et[11]), nt(RR[et[9]])
```

#### 3447. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30453` → after: `L29770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29770) · [Before (L30453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30453)

```diff
-           return WW[kE[13]] = kE[2], typeof wE[WW[kE[1]]] === kE[18] ? wE[WW[kE[1]]] = ZW(tE[WW[kE[1]]]) : wE[WW[kE[1]]]
+           return RR[et[12]] = et[0], typeof ut[RR[et[2]]] === et[15] ? ut[RR[et[2]]] = KR(Zt[RR[et[2]]]) : ut[RR[et[2]]]
```

#### 3448. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30457-L30463` → after: `L29774-L29784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29774-L29784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29774-L29784) · [Before (L30457-L30463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30457-L30463)

```diff
-           uE(WW[kE[13]] = kE[1], WW[-kE[50]] = function(iW) {
-             var OW = [];
-             return (iW === kE[2] || iW >= kE[46]) && WW[kE[45]](OW, [], iW, kE[1]), OW
-           }, WW[kE[45]] = function(...iW) {
-             for (iW[kE[13]] = kE[46], iW[-kE[47]] = iW[kE[16]]; iW[-kE[47]] < iW[kE[0]]; iW[-kE[47]]++) {
-               if (iW[kE[2]].length !== iW[-kE[47]]) return;
-               for (iW[kE[48]] = kE[1]; iW[kE[48]] < iW[kE[0]]; iW[kE[48]]++) WW[kE[0]](iW[kE[2]], [iW[-kE[47]], iW[kE[48]]]) && (uE(iW[kE[2]].push([iW[-kE[47]], iW[kE[48]]]), WW[kE[45]](iW[kE[1]], iW[kE[2]], iW[kE[0]], iW[-kE[47]] + kE[2])), iW[kE[2]].length === iW[kE[0]] && iW[k … [truncated]
+           RR[et[12]] = et[2];
+           const JR = require("big-integer");
+           gt(RR[-et[44]] = class {
+             static randomPrime(...RR) {
+               RR[et[12]] = et[0];
+               const GR = JR.one.shiftLeft(RR[et[2]] - et[0]),
+                 yR = JR.one.shiftLeft(RR[et[2]]).prev();
+               for (; et[55];) {
+                 let RR = JR.randBetween(GR, yR);
+                 if (RR.isProbablePrime(256)) return RR
+               }
```

#### 3449. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30465-L30469` → after: `L29786-L29796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29786-L29796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29786-L29796) · [Before (L30465-L30469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30465-L30469)

```diff
-           }, WW[kE[10]] = function(WW) {
-             var iW, OW, mW = [];
-             for (iW = WW.length, OW = kE[1]; OW < iW; OW++) {
-               var EW;
-               for (mW[OW] = "", EW = kE[1]; EW < iW; EW++) mW[OW] += WW[OW][kE[2]] === EW ? "Q" : "."
+             static generate(RR) {
+               const GR = JR(65537);
+               let yR, tR, uR;
+               do {
+                 gt(yR = this.randomPrime(RR / et[1]), tR = this.randomPrime(RR / et[1]), uR = JR.lcm(yR.prev(), tR.prev()))
+               } while (JR.gcd(GR, uR).notEquals(et[0]) || yR.minus(tR).abs().shiftRight(RR / et[1] - et[45]).isZero());
+               return {
+                 e: GR,
+                 n: yR.multiply(tR),
+                 d: GR.modInv(uR)
+               }
```

#### 3450. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30471-L30476` → after: `L29798-L29799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29798-L29799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29798-L29799) · [Before (L30471-L30476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30471-L30476)

```diff
-             return mW
-           }, WW[kE[0]] = function(WW, iW) {
-             var OW, mW = WW.length;
-             for (OW = kE[1]; OW < mW; OW++) {
-               if (WW[OW][kE[1]] === iW[kE[1]] || WW[OW][kE[2]] === iW[kE[2]]) return kE[49];
-               if (Math.abs((WW[OW][kE[1]] - iW[kE[1]]) / (WW[OW][kE[2]] - iW[kE[2]])) === kE[2]) return kE[49]
+             static encrypt(...RR) {
+               return RR[et[12]] = et[4], JR(RR[et[2]]).modPow(RR[et[1]], RR[et[0]])
```

#### 3451. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30478-L30481` → after: `L29801-L29881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29801-L29881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29801-L29881) · [Before (L30478-L30481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30478-L30481)

```diff
-             return !0
-           }, console.log(WW[-kE[50]]))
-         }
-         return void(xW(138) + "_" in KE && AW())
+             static decrypt(...RR) {
+               return RR[et[12]] = et[4], JR(RR[et[2]]).modPow(RR[et[0]], RR[et[1]])
+             }
+             static encode(...RR) {
+               RR[et[12]] = et[0];
+               const GR = RR[et[2]].split("").map((RR => RR.charCodeAt())).join("");
+               return JR(GR)
+             }
+             static decode(...RR) {
+               RR[et[12]] = et[0];
+               const JR = RR[et[2]].toString();
+               RR[et[14]] = "";
+               for (let GR = et[2]; GR < JR.length; GR += et[1]) {
+                 let yR = Number(JR.substr(GR, et[1]));
+                 yR <= 30 ? (RR[et[14]] += String.fromCharCode(Number(JR.substr(GR, et[4]))), GR++) : RR[et[14]] += String.fromCharCode(yR)
+               }
+ ... (65 more added lines; see GitHub link above)
```

#### 3452. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30483-L30488` → after: `L29883-L29885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29883-L29885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29883-L29885) · [Before (L30483-L30488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30483-L30488)

```diff
-       const cW = (kE[1], yW[kE[10]])()[iW(139)][iW(140)]();
-       if (cW === kE[51]) return;
-       const wW = lW[iW(141)][iW(142) + iW(kE[6]) + iW(144) + iW(145) + "rl"](OW),
-         tW = (kE[1], yW[kE[3]])();
-       (kE[1], NW[iW(kE[42]) + iW(147) + iW(148)])("" + wW + (iW(149) + iW(150) + iW(151) + iW(152)), (kE[1], PW[kE[53]])(PW.rh, {
-         [kE[5]]: String(EW),
+       const fR = rR[JR(125)][JR(126) + JR(et[44]) + JR(et[56]) + JR(et[61]) + "rl"](GR),
+         VR = (et[2], BR[et[5]])();
+       (et[2], uR[JR(130) + JR(131) + JR(132) + JR(133) + et[7]])("" + fR + (JR(134) + JR(135) + JR(136)), (et[2], ZR[et[5]])(ZR.Gh, {
```

#### 3453. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30490-L30501` → after: `L29887-L29899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29887-L29899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29887-L29899) · [Before (L30490-L30501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30490-L30501)

```diff
-         [kE[15]]: cW,
-         [kE[10]]: cE(tW[kE[52]][SE]),
-         [kE[8]]: cE(tW[kE[52]][YE]),
-         [kE[57]]: cE(tW[kE[52]][yE]),
-         [kE[7]]: cE(tW[kE[52]][TE]),
-         [kE[3]]: cE(tW[kE[52]][JE]),
-         [kE[59]]: cE(tW.GWW),
-         [kE[53]]: cE((WW[kE[14]] = tW[kE[54]].HiW(tW.Dv)) === kE[51] || WW[kE[14]] === void kE[1] ? void kE[1] : WW[kE[14]][hE]),
-         k: cE(tW[kE[54]][kE[55]](kE[2])[HE]),
-         l: cE(tW[kE[54]][kE[55]](kE[2])[nE]),
-         m: cE((kE[1], mW[kE[10]])()),
-         n: cE((kE[1], yW[kE[3]])()[kE[54]].jB(kE[2]).FP)
+         [et[23]]: String(qR),
+         [et[13]]: iR,
+         [et[9]]: tt(VR[et[57]][Wt]),
+         [et[7]]: tt(VR[et[57]][At]),
+         [et[8]]: tt(VR[et[57]][Ct]),
+         [et[43]]: tt(VR[et[57]][Xt]),
+         [et[3]]: tt(VR[et[57]][Mt]),
+         [et[5]]: tt(VR.xJR),
+         j: tt((RR[et[14]] = VR[et[59]].aGR(VR.WH)) === et[24] || RR[et[14]] === void et[2] ? void et[2] : RR[et[14]][Bt]),
+         [et[58]]: tt(VR[et[59]][et[60]](et[0])[lt]),
+         l: tt(VR[et[59]][et[60]](et[0])[pt]),
+         m: tt((et[2], yR[et[3]])()),
+         n: tt((et[2], BR[et[5]])()[et[59]].Lk(et[0]).yq)
```

#### 3454. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L30503-L30509` → after: `L29901-L29907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR29901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L29901-L29907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/109.js#L29901-L29907) · [Before (L30503-L30509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/109.js#L30503-L30509)

```diff
-         [iW(153) + "s"]: kE[16]
-       })[iW(154)](((...WW) => {
-         WW[kE[13]] = kE[2], console[function(WW) {
-           return typeof wE[WW] === kE[18] ? wE[WW] = function(...WW) {
-             for (uE(WW[kE[13]] = kE[2], WW[-kE[60]] = 'OWwTnP`$EK[Fsel4/5;)gSM<B^IG{t!vi2YL+d(AzUHpJ|&RC?8,q%"mNf9jQ*kaV.bcrho_DZ6}u17=x~y3>]0@#:X', WW[kE[56]] = "" + (WW[kE[1]] || ""), WW[kE[16]] = WW[kE[56]].length, WW[kE[46]] = [], WW[kE[8]] = kE[1], WW[kE[57]] = kE[1], WW[-kE … [truncated]
-               if (WW[kE[59]] = WW[-kE[60]].indexOf(WW[kE[56]][WW[kE[58]]]), WW[kE[59]] !== -kE[2])
-                 if (WW[-kE[61]] < kE[1]) WW[-kE[61]] = WW[kE[59]];
+         [JR(137) + "s"]: et[4]
+       })[JR(138)](((...RR) => {
+         RR[et[12]] = et[0], console[function(...RR) {
+           return RR[et[12]] = et[0], typeof ut[RR[et[2]]] === et[15] ? ut[RR[et[2]]] = function(...RR) {
+             for (gt(RR[et[12]] = et[0], RR[et[0]] = 'E"[fDbe27tW9x/,^wQ!d_ck.&y|g8FS]6pvIJ{0~rHZ=XaMOCu$VNzs+;o3j#:hYi)nK5*B}Ulq1>mA(G?RT%L`4<@P', RR[et[23]] = "" + (RR[et[2]] || ""), RR[et[4]] = RR[et[23]].length, RR[et[17]] = [], RR[-et[61]] = et[2], RR[et[64]] = et[2], RR[et[6 … [truncated]
+               if (RR[et[5]] = RR[et[0]].indexOf(RR[et[23]][RR[-et[62]]]), RR[et[5]] !== -et[0])
+                 if (RR[et[63]] < et[2]) RR[et[63]] = RR[et[5]];
```
