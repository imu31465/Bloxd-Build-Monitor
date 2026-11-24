# Changed — Bundle Modifications Report (Part 010 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `10 / 65` (**282** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 009](part-009.md) · [Part 011 →](part-011.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/158.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/158.js` (83 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056)

#### 62. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L765-L783` → after: `L2386-L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R2386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L2386-L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L2386-L2393) · [Before (L765-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L765-L783)

```diff
-   },
-   36467: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => UD,
-       f: () => RD,
-       i: () => fD,
-       m: () => AD
-     });
-     var pD = wD(351),
-       sD = wD(648),
-       KD = wD(663),
-       rD = wD(35);
-     const LD = {
-         idStorageKey: "playSessionId",
-         lastActivityStorageKey: "playSessionLastActivityMs",
-         expiryMs: 3e5
- ... (3 more removed lines; see GitHub link above)
+     var Xc = cp(2537),
+       lc = cp(4496),
+       Qc = cp(2522),
+       Jc = cp(2476);
+     const Bc = pp => {
+       const ip = yi.p * ("sides" === pp ? window.innerWidth : window.innerHeight);
+       return Math.min(64, 2 * Math.floor(ip / 2))
+     };
```

#### 63. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L785-L787` → after: `L2395-L2397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R2395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L2395-L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L2395-L2397) · [Before (L785-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L785-L787)

```diff
-     function RD() {
-       let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD.k;
-       (0, KD.j)(DD, LD)
+     function Nc(pp, ip, cp) {
+       const [Op, op, Ip, Sp] = pp;
+       return "sides" === ip ? [Op, cp, Ip, cp] : [cp, op, cp, Sp]
```

#### 64. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L790-L791` → after: `L2402-L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R2402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L2402-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L2402-L2449) · [Before (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L790-L791)

```diff
-     function AD() {
-       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD.k).setItem(gD, !0)
+     function bc(pp) {
+       let {
+         safe: ip,
+         onPreview: cp,
+         onCommit: Ip
+       } = pp;
+       const {
+         t: Sp
+       } = (0, Op.H)(), xp = (0, yi.x)(null !== ip && void 0 !== ip ? ip : Tc, window.innerWidth, window.innerHeight, si(document).map(Math.round)), Lp = (0, op.useRef)(null !== ip && void 0 !== ip ? ip : Tc);
+       Lp.current = null !== ip && void 0 !== ip ? ip : Tc;
+       const Dp = pp => {
+         const ip = Math.min(Bc(pp), "sides" === pp ? Math.max(xp[1], xp[3]) : Math.max(xp[0], xp[2]));
+         return (0, ep.jsx)(Wp.i, {
+           name: Sp("sides" === pp ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
+           min: 0,
+           max: Bc(pp),
+ ... (32 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L795-L819` → after: `L2453-L2729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R2453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L2453-L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L2453-L2729) · [Before (L795-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L795-L819)

```diff
-       let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD.k;
-       return (0, KD.e)(DD, LD)
-     }
- 
-     function fD(DD) {
-       let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rD.k;
-       const wD = (0, KD.e)(zD, LD),
-         RD = function(DD) {
-           const zD = DD.getItem(cD);
-           return "string" !== typeof zD ? null : zD
-         }(zD),
-         AD = function() {
-           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD.k).getItem(gD)
-         }(zD);
-       let UD;
-       return UD = null !== wD && null !== RD && (0, KD.h)(zD, LD) && function(DD, zD, wD) {
- ... (9 more removed lines; see GitHub link above)
+       const {
+         t: pp
+       } = (0, Op.H)(), ip = (0, Xp.Z)(), {
+         clientEscMenuOptions: cp
+       } = (0, Dp.o)(["clientEscMenuOptions"]), Ip = (0, Xc.i)(), Sp = ip.hudLayouts[Ip], [xp, Lp] = (0, op.useState)(null), {
+         rowIconsOpen: Ap,
+         onRowIconsOpen: Pp,
+         select: yp
+       } = function(pp, ip) {
+         const [cp, Op] = (0, op.useState)((() => Xp.A.some((ip => void 0 !== pp.hudElements[ip] || pp.hudLocked.includes(ip))))), Ip = (0, op.useCallback)((pp => {
+           ip(pp), (0, Xp.K)(pp) && Op(!0)
+         }), [ip]);
+         return {
+           rowIconsOpen: cp,
+           onRowIconsOpen: Op,
+           select: Ip
+ ... (261 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L821-L844` → after: `L2731-L2835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R2731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L2731-L2835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L2731-L2835) · [Before (L821-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L821-L844)

```diff
-   },
-   36463: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => JD,
-       d: () => ED
-     });
-     var pD = wD(1008),
-       sD = wD(212),
-       KD = wD(348),
-       rD = wD(625),
-       LD = wD(351),
-       cD = wD(1017),
-       gD = wD(638),
-       RD = wD(676),
-       AD = wD(4540),
-       UD = wD(103),
- ... (8 more removed lines; see GitHub link above)
+     const ac = 350;
+     const nc = [function() {
+       const {
+         t: pp
+       } = (0, Op.H)(), [ip, cp] = (0, op.useState)(!1), Ip = (0, op.useRef)(null);
+       return (0, op.useEffect)((() => {
+         var pp;
+         ip && (null === (pp = Ip.current) || void 0 === pp || pp.scrollIntoView({
+           block: "start",
+           behavior: "smooth"
+         }))
+       }), [ip]), (0, ep.jsxs)("div", {
+         className: "HudLayoutSection",
+         children: [(0, ep.jsx)(qp.b, {
+           ref: Ip,
+           icon: "arrows-up-down-left-right",
+ ... (89 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L847-L848` → after: `L2838-L2840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R2838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L2838-L2840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L2838-L2840) · [Before (L847-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L847-L848)

```diff
-       var DD, zD;
-       return [...null !== (DD = navigator.languages) && void 0 !== DD ? DD : [null !== (zD = navigator.language) && void 0 !== zD ? zD : "none"], "en-gb"]
+       return (0, ep.jsx)(ep.Fragment, {
+         children: nc.map(((pp, ip) => (0, ep.jsx)(pp, {}, ip)))
+       })
```

#### 68. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L851-L863` → after: `L2844-L2880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R2844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L2844-L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L2844-L2880) · [Before (L851-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L851-L863)

```diff
-     function ED(DD, zD, wD, ED, QD) {
-       const XD = (0, pD.l)(zD) ? (0, pD.o)(zD) : null,
-         VD = DD.isLoggedIn() && void 0 !== (0, sD.d)(KD.k, fD.v) ? (0, MD.u)() : null,
-         PD = {
-           cookies: (0, ID.getAllCookiesForGameNameWithVariation)(zD),
-           isMobile: (0, UD.isMobile)(),
-           isUsingCustomGameTexturePack: null !== XD && QD(XD),
-           generalCookies: {
-             joinDiscord: !!hD.h.getItem("DiscordPressed"),
-             newGo: AD.b,
-             ...DD.getMetricsCookies(),
-             trafficCode: ED,
-             compliance: UD.compliance
+     function Gc() {
+       const {
+         t: pp
+       } = (0, Op.H)(), {
+         isTouchScreen: ip,
+         clientEscMenuOptions: cp,
+         gameState: Sp
+       } = (0, Dp.o)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), xp = (0, yp.i)("ezBridging"), Lp = (0, yp.i)("ezTowering"), wp = "inGame" !== Sp || !0 === xp, vp = (0, Up.h)(), Hp = null !== vp && ("inGame" !== Sp || !0 === Lp), [, dp] = (0, op.useReducer)((pp => pp  … [truncated]
+       return (0, ep.jsxs)("div", {
+         className: "SettingsMenuRightInner",
+         children: [jp && (0, ep.jsxs)("div", {
+           className: "SettingBox SettingBoxWithButton",
+           children: [(0, ep.jsx)("div", {
+             children: pp("controller:settingsControlsNote")
+           }), (0, ep.jsx)(Yp.S, {
+             onClick: () => {
+ ... (21 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L865-L871` → after: `L2882-L2889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R2882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L2882-L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L2882-L2889) · [Before (L865-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L865-L871)

```diff
-           browserInfo: {
-             ua: window.navigator.userAgent,
-             name: (0, UD.getBrowserName)(),
-             version: (0, UD.getBrowserVersion)(),
-             platform: navigator.platform,
-             platformType: (0, UD.getPlatformType)(),
-             deviceType: (0, BD.e)()
+           circleInfoText: pp("settingsMenu:ezBridgingInfo")
+         }), Hp && (0, ep.jsx)(Wp.b, {
+           label: pp("settingsMenu:ezTowering"),
+           checked: cp.ezTowering,
+           onClick: pp => {
+             Dp.c.setClientEscMenuOptions({
+               ezTowering: pp
+             })
```

#### 70. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L873-L884` → after: `L2891-L2898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R2891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L2891-L2898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L2891-L2898) · [Before (L873-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L873-L884)

```diff
-           isLoggedIn: DD.isLoggedIn(),
-           lobbyName: wD,
-           languages: JD(),
-           version: rD.e,
-           siteUsed: fD.v,
-           subsiteUsed: fD.D,
-           playSessionId: (0, GD.i)(zD),
-           visitSessionId: (0, nD.d)(),
-           clientReason: gD.n.reason,
-           budgetBasis: (0, OD.i)(),
-           ...null !== RD.q && {
-             diagClaim: RD.q.claimId
+           circleInfoText: pp("jump" === vp ? "ezTowering:jumpInfo" : "settingsMenu:ezToweringInfo")
+         }), (0, ep.jsx)(Wp.b, {
+           label: pp("settingsMenu:crouchToggle"),
+           checked: cp.crouchIsToggle,
+           onClick: pp => {
+             Dp.c.setClientEscMenuOptions({
+               crouchIsToggle: pp
+             })
```

#### 71. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L886-L887` → after: `L2900-L2919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R2900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L2900-L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L2900-L2919) · [Before (L886-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L886-L887)

```diff
-           ...null !== VD && {
-             webGpuLoss: VD
+           circleInfoText: pp("settingsMenu:crouchToggleInfo")
+         }), (0, ep.jsx)(Wp.b, {
+           label: pp("settingsMenu:hideUiToggle"),
+           checked: cp.hideUiIsToggle,
+           onClick: pp => {
+             Dp.c.setClientEscMenuOptions({
+               hideUiIsToggle: pp
+             })
+           },
+           circleInfoText: pp("settingsMenu:hideUiToggleInfo")
+         }), "mouseOnly" !== (0, Pp.c)() && (0, ep.jsx)(Wp.i, {
+           name: pp("settingsMenu:touchscreenSensitivity"),
+           min: 1,
+           max: 900,
+           step: 1,
+           initValue: cp.touchscreenSensitivity,
+ ... (4 more added lines; see GitHub link above)
```

#### 72. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L889-L895` → after: `L2921-L3011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R2921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L2921-L3011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L2921-L3011) · [Before (L889-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L889-L895)

```diff
-         };
-       return null !== XD && (0, LD.Dc)(XD) ? (PD.lobbyName = (0, pD.k)(XD, (0, pD.m)(zD), wD), {
-         roomName: `classic_${cD.e}`,
-         joinOptions: PD
-       }) : {
-         roomName: zD,
-         joinOptions: PD
+         }), !(0, Ap.isMobile)() && (0, ep.jsx)(Wp.i, {
+           name: pp("settingsMenu:mouseSensitivity"),
+           min: 1,
+           max: 200,
+           step: 1,
+           initValue: cp.mouseSensitivity,
+           onChange: pp => {
+             Dp.c.setClientEscMenuOptions({
+               mouseSensitivity: pp
+             })
+           }
+         }), !(0, Ap.isMobile)() && (0, ep.jsxs)("div", {
+           className: "ControlsContainer",
+           children: [(0, ep.jsx)("div", {
+             className: "SliderText",
+             children: pp("settingsMenu:keyBindings")
+ ... (75 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L899` → after: `L3114-L3154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R3114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L3114-L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L3114-L3154) · [Before (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L899)

```diff
-   39042: (DD, zD, wD) => {
+   9006: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp
+     });
+     var Op = cp(62),
+       op = cp(1060),
+       Ip = cp(1112);
+     const Sp = (0, Op.forwardRef)((function(pp, ip) {
+       let {
+         icon: cp,
+         title: Op,
+         sub: Sp,
+         expanded: xp,
+         onClick: Lp
+       } = pp;
+       return (0, Ip.jsxs)("button", {
+ ... (25 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L905-L906` → after: `L3160-L3161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R3160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L3160-L3161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L3160-L3161) · [Before (L905-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L905-L906)

```diff
-       n: () => cD,
-       p: () => rD
+       k: () => Hp,
+       o: () => Pp
```

#### 75. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L908-L937` → after: `L3163-L3197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R3163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L3163-L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L3163-L3197) · [Before (L908-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L908-L937)

```diff
-     var pD = wD(197);
-     const sD = 3e3,
-       KD = 15e3;
- 
-     function rD(DD) {
-       const zD = DD.endsWith(pD.j);
-       return {
-         text: (zD ? DD.slice(0, -pD.j.length) : DD) || null,
-         dropsCache: zD
-       }
-     }
-     const LD = "Either your internet isn't working or this is a bug.";
- 
-     function cD(DD, zD) {
-       const wD = RD(DD);
-       return null !== wD.name && "" === pD.e[wD.name].text && null !== zD ? zD : wD.reason
- ... (14 more removed lines; see GitHub link above)
+     var Op = cp(1677),
+       op = cp(1770);
+     const Ip = pp => pp >= 56320 && pp <= 57343,
+       Sp = pp => pp >= 55296 && pp <= 56319,
+       xp = (pp, ip) => ip >= 2 && Ip(pp.charCodeAt(ip - 1)) && Sp(pp.charCodeAt(ip - 2)) ? ip - 2 : Math.max(0, ip - 1),
+       Lp = (pp, ip) => {
+         let cp;
+         var Op, op;
+         return cp = pp.start !== pp.end ? ip < 0 ? pp.start : pp.end : ip < 0 ? xp(pp.value, pp.start) : (Op = pp.value, (op = pp.start) + 1 < Op.length && Sp(Op.charCodeAt(op)) && Ip(Op.charCodeAt(op + 1)) ? op + 2 : Math.min(Op.length, op + 1)), {
+           value: pp.value,
+           start: cp,
+           end: cp
+         }
+       },
+       Yp = ["text", "search", "url", "email", "tel", "password", "number"],
+       Dp = pp => !(!(0, op.b)(pp) || pp.isContentEditable || pp.hasAttribute("data-pad-no-osk")) && (pp instanceof HTMLTextAreaElement || pp instanceof HTMLInputElement && Yp.includes(pp.type)),
+ ... (19 more added lines; see GitHub link above)
```

#### 76. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L939-L949` → after: `L3199-L3233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R3199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L3199-L3233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L3199-L3233) · [Before (L939-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L939-L949)

```diff
-       const {
-         text: KD,
-         canReconnect: rD = !1
-       } = pD.e[sD], cD = DD === pD.e.outdatedVersion.code || DD === pD.e.loadRecaptchaError.code;
-       return {
-         code: DD,
-         name: sD,
-         reason: "" !== KD ? KD : null !== wD && void 0 !== wD ? wD : DD === pD.e.gameOrPluginKick.code ? gD : `Code: ${DD}`,
-         canReconnect: rD,
-         automaticallyReconnect: DD === pD.e.customGameUpdated.code || DD === pD.e.duplicateLobbyNameError.code,
-         requiresRefresh: cD
+     let yp = !1;
+     const Up = (pp, ip) => !!document.execCommand(pp, !1, ip) || (yp || (yp = !0, console.warn(`execCommand("${pp}") failed; the on-screen keyboard is setting the value directly`)), !1),
+       wp = (pp, ip) => {
+         Up("insertText", ip) || Wp(pp, function(pp, ip) {
+           let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
+           const Op = pp.value.slice(0, pp.start),
+             op = pp.value.slice(pp.end);
+           let Ip = cp < 0 ? ip.length : Math.max(0, cp - Op.length - op.length);
+           Ip > 0 && Ip < ip.length && Sp(ip.charCodeAt(Ip - 1)) && Ip--;
+           const xp = ip.slice(0, Ip),
+             Lp = Op.length + xp.length;
+           return {
+             value: Op + xp + op,
+             start: Lp,
+             end: Lp
+           }
+ ... (19 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L953` → after: `L3255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R3255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L3255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L3255) · [Before (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L953)

```diff
-   36821: (DD, zD, wD) => {
+   8972: (pp, ip, cp) => {
```

#### 78. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L960-L963` → after: `L3261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R3261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L3261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L3261) · [Before (L960-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L960-L963)

```diff
-       l: () => gD,
-       m: () => AD,
-       n: () => RD,
-       p: () => rD
+       k: () => xp
```

#### 79. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L965-L987` → after: `L3263-L3302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R3263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L3263-L3302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L3263-L3302) · [Before (L965-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L965-L987)

```diff
-     var pD = wD(1245);
-     let sD = function(DD) {
-         return DD[DD.Join = 0] = "Join", DD[DD.Leave = 1] = "Leave", DD[DD.Push = 2] = "Push", DD[DD.Cursor = 3] = "Cursor", DD[DD.Submit = 4] = "Submit", DD[DD.ReloadAsVariation = 5] = "ReloadAsVariation", DD[DD.CreateFile = 6] = "CreateFile", DD[DD.RenameFile = 7] = "RenameFile … [truncated]
-       }({}),
-       KD = function(DD) {
-         return DD[DD.Joined = 0] = "Joined", DD[DD.Updates = 1] = "Updates", DD[DD.Presence = 2] = "Presence", DD[DD.RemoteCursor = 3] = "RemoteCursor", DD[DD.ForceClose = 4] = "ForceClose", DD[DD.LobbyFilesChanged = 5] = "LobbyFilesChanged", DD[DD.EngineSettings = 6] = "EngineSe … [truncated]
-       }({});
- 
-     function rD(DD) {
-       return "lobby" === DD.kind ? `lobby:${DD.path}` : `codeBlock:${DD.pos[0]},${DD.pos[1]},${DD.pos[2]}`
-     }
- 
-     function LD(DD) {
-       if ("lobby" === DD) return {
-         kind: "lobby",
-         path: pD.f
- ... (7 more removed lines; see GitHub link above)
+     var Op = cp(1989);
+     const op = "controllerPadShopOpen",
+       Ip = pp => Op.g.includes(pp),
+       Sp = pp => Object.values(pp).some((pp => !1 !== pp.canBuy && !pp.isRewardedAd)),
+       xp = (pp, ip, cp) => {
+         var Op, op, Sp, xp;
+         const Lp = pp.filter((pp => !Ip(pp))),
+           Yp = null !== ip && pp.includes(ip) ? ip : null;
+         return null !== Yp && !Ip(Yp) && cp(Yp) ? Yp : null !== (Op = null !== (op = null !== (Sp = null !== (xp = Lp.find(cp)) && void 0 !== xp ? xp : Lp[0]) && void 0 !== Sp ? Sp : Yp) && void 0 !== op ? op : pp[0]) && void 0 !== Op ? Op : null
+       },
+       Lp = pp => pp.userInput || pp.isRewardedAd || "boolean" === typeof pp.isSelected ? null : JSON.stringify([pp.image, pp.cost, pp.currency, pp.amount, pp.customTitle, pp.buyButtonText, pp.description, pp.canBuy])
+   },
+   8995: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Yp,
+       f: () => Dp
+ ... (24 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L1019-L1027` → after: `L3305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R3305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L3305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L3305) · [Before (L1019-L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L1019-L1027)

```diff
-   38950: (DD, zD, wD) => {
-     function pD(DD, zD, wD, pD, sD) {
-       var KD = {};
-       return Object.keys(pD).forEach((function(DD) {
-         KD[DD] = pD[DD]
-       })), KD.enumerable = !!KD.enumerable, KD.configurable = !!KD.configurable, ("value" in KD || KD.initializer) && (KD.writable = !0), KD = wD.slice().reverse().reduce((function(wD, pD) {
-         return pD(DD, zD, wD) || wD
-       }), KD), sD && void 0 !== KD.initializer && (KD.value = KD.initializer ? KD.initializer.call(sD) : void 0, KD.initializer = void 0), void 0 === KD.initializer && (Object.defineProperty(DD, zD, KD), KD = null), KD
-     }
+   8816: (pp, ip, cp) => {
```

#### 81. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L1029-L1030` → after: `L3307-L3376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R3307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L3307-L3376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L3307-L3376) · [Before (L1029-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L1029-L1030)

```diff
-       d: () => pD
-     })
+       C: () => Pp,
+       b: () => Op,
+       e: () => Yp,
+       i: () => Up,
+       l: () => Ap,
+       p: () => yp,
+       t: () => Ip,
+       v: () => Wp,
+       z: () => Sp
+     });
+     const Op = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(", … [truncated]
+       op = (pp, ip) => {
+         if ("function" === typeof pp.checkVisibility) return !pp.checkVisibility({
+           visibilityProperty: !0,
+           checkVisibilityCSS: !0,
+           opacityProperty: ip,
+ ... (54 more added lines; see GitHub link above)
```

#### 82. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L1032-L1040` → after: `L3378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R3378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L3378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L3378) · [Before (L1032-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L1032-L1040)

```diff
-   38941: (DD, zD, wD) => {
-     function pD(DD, zD, wD, pD) {
-       wD && Object.defineProperty(DD, zD, {
-         enumerable: wD.enumerable,
-         configurable: wD.configurable,
-         writable: wD.writable,
-         value: wD.initializer ? wD.initializer.call(pD) : void 0
-       })
-     }
+   8803: (pp, ip, cp) => {
```

#### 83. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L1042-L1043` → after: `L3380-L3520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R3380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L3380-L3520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/158.js#L3380-L3520) · [Before (L1042-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/158.js#L1042-L1043)

```diff
-       c: () => pD
-     })
+       B: () => Lp,
+       F: () => Dp,
+       b: () => vp,
+       c: () => Rp,
+       e: () => ep,
+       g: () => dp,
+       k: () => yp,
+       m: () => Up,
+       n: () => Pp,
+       o: () => Wp,
+       p: () => mp,
+       q: () => Yp,
+       r: () => qp,
+       t: () => jp,
+       v: () => kp,
+       z: () => wp
+ ... (125 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/159.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/159.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb)

#### 1. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L4` → after: `L4-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L4-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/159.js#L4-L169) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/159.js#L4)

```diff
-   8925: (DD, zD, wD) => {
+   36804: (pp, ip, cp) => {
+     cp.d(ip, {
+       A: () => yp,
+       E: () => tp,
+       b: () => Ip,
+       d: () => Up,
+       f: () => wp,
+       j: () => xp,
+       n: () => Pp,
+       q: () => vp,
+       u: () => Ap,
+       w: () => Hp
+     });
+     var Op = cp(25),
+       op = cp(34);
+     const Ip = "clientGameInventoryButtonsChanged",
+ ... (150 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L6-L42` → after: `L171-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L171-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/159.js#L171-L206) · [Before (L6-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/159.js#L6-L42)

```diff
-       pageBody: () => pD
-     });
-     const pD = {
-       whatIs: ["Protect your bed, destroy theirs. That's the whole idea of Bedwars, the team PvP strategy mode that's free to play online. Every team starts on its own floating island with a bed to protect. Collect resources, buy gear and team upgrades, then bridge across to the  … [truncated]
-       howToPlay: ["Play Bedwars Solos, Duos, Trios, 4v4, 4v4v4v4 or 1v1. Generators on your island drop Coal, Iron Bars and Diamond. Spend them at the Item Shop on blocks, weapons, armour and tools, or at the Upgrades shopkeeper on team upgrades like Protection, Damage, Feather F … [truncated]
-       features: ["Solos, Duos, Trios, 4v4v4v4 and 4v4", "Ranked Bedwars Lobby", "Team Upgrades: Protection, Damage, Feather Falling, Health Regeneration and Alarm", "Match Modifiers like Lucky Chaos, Weapon Roulette, Treasure Guardians and Specialists", "Dozens of Maps", "Leaderb … [truncated]
-       tips: ["Rush other teams' beds before they can upgrade their defences", "Split up attack and defence with your team", "Upgrade your gear in the shop before leaving your island", "Bridging backwards is faster than ez bridging", "Fight for the centre generators, because Diamo … [truncated]
-       similarGames: ["luckyBedwars", "skywars", "luckyTowers"],
-       faq: [{
-         question: "What is Bedwars?",
-         answer: "Bedwars is a team PvP strategy game where you protect your bed and destroy everyone else's. Bloxd's version adds team upgrades, match modifiers and a Ranked lobby."
-       }, {
-         question: "How do you win Bedwars?",
-         answer: "Be the last team standing. Destroy the other teams' beds so they can't respawn, then eliminate them before the arena shrinks."
-       }, {
-         question: "What happens after your bed is destroyed?",
- ... (21 more removed lines; see GitHub link above)
+       getClientGameMapKey: () => Op.o,
+       shopIsEmpty: () => op.b
+     });
+     var Op = cp(36799),
+       op = cp(8895)
+   },
+   8897: (pp, ip, cp) => {
+     function Op(pp, ip) {
+       return !pp.hidden && (ip || !pp.isRewardedAd)
+     }
+ 
+     function op(pp) {
+       return "object" === typeof pp ? pp.option : pp
+     }
+ 
+     function Ip(pp, ip) {
+ ... (20 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/160.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/160.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786)

#### 1. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L4` → after: `L4-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L4-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/160.js#L4-L199) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/160.js#L4)

```diff
-   8931: (DD, zD, wD) => {
+   39261: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Ip,
+       e: () => Sp
+     });
+     var Op = cp(34);
+     let op = !1;
+ 
+     function Ip() {
+       return op
+     }
+ 
+     function Sp(pp) {
+       op !== pp && (op = pp, Op.m.GA("replayViewer|videoExportChanged"))
+     }
+   },
+ ... (180 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6-L7` → after: `L201-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L201-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/160.js#L201-L556) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/160.js#L6-L7)

```diff
-       pageBody: () => pD
-     });
+       LOOK_DEBUG_HEADER: () => Dp,
+       endLookDebugTake: () => vp,
+       noteLookDroppedCopy: () => tp,
+       saveLookCapture: () => Hp,
+       startLookDebug: () => wp
+     });
+     var Op = cp(4911),
+       op = cp(2908),
+       Ip = cp(1927);
+     const Sp = new Map(Object.entries(Op.h).map((pp => {
+       let [ip, cp] = pp;
+       return [cp, ip]
+     })));
+ 
+     function xp(pp) {
+       return (0, Ip.C)(pp).toFixed(1)
+ ... (340 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L9-L32` → after: `L558-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L558-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/160.js#L558-L845) · [Before (L9-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/160.js#L9-L32)

```diff
-       whatIs: ["What if every sword, block and piece of armour came from a Lucky Block? Lucky Bedwars is the Bedwars mode where they do. Four teams of up to four players each get their own base and a bed to protect. Open Lucky Blocks for random weapons, armour, blocks and wild su … [truncated]
-       howToPlay: ["Before the match, your lobby votes on a map. You start with four Lucky Blocks. The first Basic Building and Basic Weapon blocks you open give you team wool and a weapon, so you're ready to go. Generators at your base and in the centre of the map keep the loot c … [truncated]
-       features: ["4 Teams of up to 4 Players", "Building, Weapon, Armour and Food Lucky Blocks in Basic, Rare and Super Rarities", "Evil Lucky Blocks with Nasty Surprises", "Wild Items: Lucky Bombs, Swap Orbs, Fireballs, Iceballs, Toxin Balls and Void Nets", "Random Events: Blood … [truncated]
-       tips: ["Open your four starting Lucky Blocks straight away to get wool and a weapon", "Chip in for the Bed Trap early. Evil Lucky Blocks around your bed can seal raiders in obsidian, poison them or send them home", "Save any Obsidian from Super Building blocks for your bed, … [truncated]
-       similarGames: ["bedwars", "luckyTowers", "skywars"],
-       faq: [{
-         question: "What is Bloxd Lucky Bedwars?",
-         answer: "It's Bedwars with a twist: all your gear comes from Lucky Blocks. Four teams of up to four players defend their beds and try to be the last team standing."
-       }, {
-         question: "How do you play Lucky Bedwars?",
-         answer: "Open Lucky Blocks for weapons, armour and blocks, protect your bed and break the other teams' beds. You respawn while your bed stands. Without it, one death makes you a spectator."
-       }, {
-         question: "How is Lucky Bedwars different from normal Bedwars?",
-         answer: "Your loot comes from Lucky Blocks, so every match is random. You earn Clovers to buy more Lucky Blocks and team upgrades, and random events change up each game."
-       }, {
-         question: "What are Clovers in Lucky Bedwars?",
- ... (8 more removed lines; see GitHub link above)
+         seat: "seat_timeout",
+         socket_unopened: "socket_timeout_unopened",
+         socket: "socket_timeout"
+       },
+       xp = {
+         seat: "seat_lost",
+         socket_unopened: "socket_unopened",
+         socket: "socket_closed"
+       };
+ 
+     function Lp(pp, ip) {
+       if (pp instanceof op.f) return {
+         at: Sp[ip],
+         code: 0
+       };
+       const cp = (0, Op.f)(pp),
+ ... (272 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/161.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/161.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907)

#### 1. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/161.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/161.js#L4)

```diff
-   8937: (DD, zD, wD) => {
+   9062: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/161.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/161.js#L9-L13)

```diff
-       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
-       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
-       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
-       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
-       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
+       whatIs: ["Protect your bed, destroy theirs. That's the whole idea of Bedwars, the team PvP strategy mode that's free to play online. Every team starts on its own floating island with a bed to protect. Collect resources, buy gear and team upgrades, then bridge across to the  … [truncated]
+       howToPlay: ["Play Bedwars Solos, Duos, Trios, 4v4, 4v4v4v4 or 1v1. Generators on your island drop Coal, Iron Bars and Diamond. Spend them at the Item Shop on blocks, weapons, armour and tools, or at the Upgrades shopkeeper on team upgrades like Protection, Damage, Feather F … [truncated]
+       features: ["Solos, Duos, Trios, 4v4v4v4 and 4v4", "Ranked Bedwars Lobby", "Team Upgrades: Protection, Damage, Feather Falling, Health Regeneration and Alarm", "Match Modifiers like Lucky Chaos, Weapon Roulette, Treasure Guardians and Specialists", "Dozens of Maps", "Leaderb … [truncated]
+       tips: ["Rush other teams' beds before they can upgrade their defences", "Split up attack and defence with your team", "Upgrade your gear in the shop before leaving your island", "Bridging backwards is faster than ez bridging", "Fight for the centre generators, because Diamo … [truncated]
+       similarGames: ["luckyBedwars", "skywars", "luckyTowers"],
```

#### 3. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/161.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/161.js#L15-L16)

```diff
-         question: "What is Bloxd Skywars?",
-         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
+         question: "What is Bedwars?",
+         answer: "Bedwars is a team PvP strategy game where you protect your bed and destroy everyone else's. Bloxd's version adds team upgrades, match modifiers and a Ranked lobby."
```

#### 4. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/161.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/161.js#L18-L19)

```diff
-         question: "How do you win in Skywars?",
-         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
+         question: "How do you win Bedwars?",
+         answer: "Be the last team standing. Destroy the other teams' beds so they can't respawn, then eliminate them before the arena shrinks."
```

#### 5. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/161.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/161.js#L21-L22)

```diff
-         question: "Can I play Skywars in my browser?",
-         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
+         question: "What happens after your bed is destroyed?",
+         answer: "You can't respawn. If you die after your bed is gone, you become a spectator."
```

#### 6. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/161.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/161.js#L24-L25)

```diff
-         question: "What are the best Skywars kits?",
-         answer: "Honestly, it depends how you like to play. Sniper has a one-shot crossbow and Catapult can knock enemies off the map. Ghost can turn invisible, and Builder starts with extra blocks for bridging. You unlock more kits with Gold and Gems."
+         question: "What do the Bedwars generators do?",
+         answer: "Your island's generators drop Coal, Iron Bars and Diamond for items and upgrades. The generators in the centre drop Diamond and Moonstone for the most powerful items."
```

#### 7. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/161.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/161.js#L27-L28)

```diff
-         question: "What do perks do in Bloxd Skywars?",
-         answer: "Perks give you bonuses while you play. Maniac gives you more damage after kills, Bridger gives you a chance to get placed blocks back and Leech heals you after kills. You can upgrade them to make them stronger."
+         question: "What modes can I play in Bloxd Bedwars?",
+         answer: "Solos, Duos, Trios, 4v4, 4v4v4v4 and 1v1. There's also a Ranked Bedwars lobby if you want to climb the leaderboards."
```

#### 8. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/161.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/161.js#L30-L31)

```diff
-         question: "How do I get Gold in Skywars?",
-         answer: "Every kill earns Gold, and you get an extra 20 Gold for winning a match."
+         question: "What are match modifiers?",
+         answer: "Some matches add a twist. In Supercharged, every generator starts at Level 2. In Boom, explosives are half price. Weapon Roulette gives you a new random weapon every respawn, and in Specialists you pick a role with special perks."
```

#### 9. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/161.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/161.js#L33-L34)

```diff
-         question: "How many players fit in one Skywars match?",
-         answer: "Up to 12 players fight it out in each free-for-all match."
+         question: "Can I attack my teammates?",
+         answer: "No, you can't attack players on your own team."
```

#### 10. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L36-L37` → after: `L36-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L36-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/161.js#L36-L40) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/161.js#L36-L37)

```diff
-         question: "What does the compass do in Skywars?",
-         answer: "After 7 minutes, or once only two players are left, everyone still alive gets a compass that points to the nearest player."
+         question: "How many Bedwars maps are there?",
+         answer: "Dozens, including Scary Hollow, Wood Factory, Ahoy!, Colosseum and Rooftops."
+       }, {
+         question: "What's the difference between Bedwars and Lucky Bedwars?",
+         answer: "In Bedwars you collect Coal, Iron Bars, Diamond and Moonstone from generators and choose what to buy. Lucky Bedwars hands out gear through Lucky Blocks instead, so no two matches play out the same."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/162.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/162.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e)

#### 1. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/162.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/162.js#L4)

```diff
-   8939: (DD, zD, wD) => {
+   9069: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/162.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/162.js#L9-L13)

```diff
-       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
-       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
-       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
-       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
-       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
+       whatIs: ["What if every sword, block and piece of armour came from a Lucky Block? Lucky Bedwars is the Bedwars mode where they do. Four teams of up to four players each get their own base and a bed to protect. Open Lucky Blocks for random weapons, armour, blocks and wild su … [truncated]
+       howToPlay: ["Before the match, your lobby votes on a map. You start with four Lucky Blocks. The first Basic Building and Basic Weapon blocks you open give you team wool and a weapon, so you're ready to go. Generators at your base and in the centre of the map keep the loot c … [truncated]
+       features: ["4 Teams of up to 4 Players", "Building, Weapon, Armour and Food Lucky Blocks in Basic, Rare and Super Rarities", "Evil Lucky Blocks with Nasty Surprises", "Wild Items: Lucky Bombs, Swap Orbs, Fireballs, Iceballs, Toxin Balls and Void Nets", "Random Events: Blood … [truncated]
+       tips: ["Open your four starting Lucky Blocks straight away to get wool and a weapon", "Chip in for the Bed Trap early. Evil Lucky Blocks around your bed can seal raiders in obsidian, poison them or send them home", "Save any Obsidian from Super Building blocks for your bed, … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skywars"],
```

#### 3. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/162.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/162.js#L15-L16)

```diff
-         question: "What is Lucky Towers?",
-         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
+         question: "What is Bloxd Lucky Bedwars?",
+         answer: "It's Bedwars with a twist: all your gear comes from Lucky Blocks. Four teams of up to four players defend their beds and try to be the last team standing."
```

#### 4. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/162.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/162.js#L18-L19)

```diff
-         question: "How do you win in Bloxd Lucky Towers?",
-         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
+         question: "How do you play Lucky Bedwars?",
+         answer: "Open Lucky Blocks for weapons, armour and blocks, protect your bed and break the other teams' beds. You respawn while your bed stands. Without it, one death makes you a spectator."
```

#### 5. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/162.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/162.js#L21-L22)

```diff
-         question: "How often do you get items in Lucky Towers?",
-         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
+         question: "How is Lucky Bedwars different from normal Bedwars?",
+         answer: "Your loot comes from Lucky Blocks, so every match is random. You earn Clovers to buy more Lucky Blocks and team upgrades, and random events change up each game."
```

#### 6. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/162.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/162.js#L24-L25)

```diff
-         question: "What items can you get in Lucky Towers?",
-         answer: "Blocks, seedlings, beds, food, potions, weapons, arrows, armour and explosives. There are special items too, like the Bouncy Bomb, Respawn Totem, Floor Creator, SnowDash, Updraft, Steal Ball, Chaos Potion and Moonstone Remote Explosive."
+         question: "What are Clovers in Lucky Bedwars?",
+         answer: "Clovers are the in-game currency. Earn them by opening Lucky Blocks, getting kills, breaking beds, recycling loot and surviving events. Spend them at the Lucky Trader or on team upgrades."
```

#### 7. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/162.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/162.js#L27-L28)

```diff
-         question: "Which random events can happen in Lucky Towers?",
-         answer: "Chest Drop, Jump Boost, Double Speed, Lava Rise and Bombardment. You'll get an announcement when each one starts."
+         question: "What's inside Evil Lucky Blocks?",
+         answer: "Bad luck! The Bed Trap upgrade puts Evil Lucky Blocks around your bed. Anyone who opens one could get trapped in obsidian, dropped in lava, webbed, poisoned, blinded, chased by guard dogs or sent home."
```

#### 8. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L30-L34` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/162.js#L30-L31) · [Before (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/162.js#L30-L34)

```diff
-         question: "Which maps are in Lucky Towers?",
-         answer: "The OG, Desert, Icy, Space and Forest. There's also a Spooky map in October and a Holiday map in December and January."
-       }, {
-         question: "How is Lucky Towers different from Lucky Blocks Battlegrounds?",
-         answer: "Lucky Towers is last player standing. Items arrive on their own, and once you're knocked out you spectate. Lucky Blocks Battlegrounds is a kills race in a shared arena where you open Lucky Blocks, and the top player wins when it resets."
+         question: "What are the Lucky Bedwars events?",
+         answer: "Twice a match a random event starts: Blood Moon, Lucky Crown, Masquerade, Simon Says, Lucky Storm or Tiny Titans. You get a 30-second warning, and beds can't be broken while an event runs."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/163.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/163.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838)

#### 1. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/163.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/163.js#L4)

```diff
-   8944: (DD, zD, wD) => {
+   9072: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/163.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/163.js#L9-L13)

```diff
-       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
-       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
-       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
-       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
-       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
+       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
+       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
+       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
+       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
```

#### 3. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/163.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/163.js#L15-L16)

```diff
-         question: "What is Lucky Blocks Battlegrounds?",
-         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
+         question: "What is Bloxd Skywars?",
+         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
```

#### 4. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/163.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/163.js#L18-L19)

```diff
-         question: "How do you win Lucky Blocks Battlegrounds?",
-         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
+         question: "How do you win in Skywars?",
+         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
```

#### 5. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/163.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/163.js#L21-L22)

```diff
-         question: "How do I get Lucky Blocks?",
-         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
+         question: "Can I play Skywars in my browser?",
+         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
```

#### 6. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/163.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/163.js#L24-L25)

```diff
-         question: "What is the Ultra Lucky Block?",
-         answer: "An extra-special Lucky Block. One shows up in the middle of the arena every 90 seconds for everyone to race for, and you get your own in your base every 5 minutes as well."
+         question: "What are the best Skywars kits?",
+         answer: "Honestly, it depends how you like to play. Sniper has a one-shot crossbow and Catapult can knock enemies off the map. Ghost can turn invisible, and Builder starts with extra blocks for bridging. You unlock more kits with Gold and Gems."
```

#### 7. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/163.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/163.js#L27-L28)

```diff
-         question: "What's inside Bloxd lucky blocks?",
-         answer: "Pretty much anything, from weapons and armour to pets and funny surprises. Weapon Lucky Blocks and Pet Lucky Blocks give you a better chance of a weapon or a pet."
+         question: "What do perks do in Bloxd Skywars?",
+         answer: "Perks give you bonuses while you play. Maniac gives you more damage after kills, Bridger gives you a chance to get placed blocks back and Leech heals you after kills. You can upgrade them to make them stronger."
```

#### 8. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/163.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/163.js#L30-L31)

```diff
-         question: "Can other players attack me in my base?",
-         answer: "Nope. Other players can't get into your base, break its blocks or open its chests."
+         question: "How do I get Gold in Skywars?",
+         answer: "Every kill earns Gold, and you get an extra 20 Gold for winning a match."
```

#### 9. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L33-L34` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/163.js#L33-L37) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/163.js#L33-L34)

```diff
-         question: "Do I lose my items when the Lucky Block Battlegrounds arena resets?",
-         answer: "No, your inventory stays with you. Everyone's kills go back to zero for the new round, though."
+         question: "How many players fit in one Skywars match?",
+         answer: "Up to 12 players fight it out in each free-for-all match."
+       }, {
+         question: "What does the compass do in Skywars?",
+         answer: "After 7 minutes, or once only two players are left, everyone still alive gets a compass that points to the nearest player."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/164.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/164.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711)

#### 1. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/164.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/164.js#L4)

```diff
-   8950: (DD, zD, wD) => {
+   9079: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/164.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/164.js#L9-L13)

```diff
-       whatIs: ["Mine, craft and survive in a huge block world that keeps running even when you log off. Bloxd Survival is an online multiplayer SMP. You explore, dig for ores, craft tools and armour, and build a base alongside everyone else on the server. It's free and runs strai … [truncated]
-       howToPlay: ["Gather some resources and craft your first tools. Then dig deeper for iron, gold, diamonds and moonstone to make better gear. Keep an eye out for mobs. Draugr Zombies, Skeletons and Knights, Frost Zombies and Skeletons, Cave Golems and Frost Golems all roam the … [truncated]
-       features: ["Persistent SMP Worlds That Save Your Progress", "Mining, Crafting and Base Building", "PvP, Looting and Raiding", "Land Protection with Protectors and Tribe Protectors", "Draugr, Golems, Frost Mobs and Wild Animals to Battle", "Free Private Servers with Owner Co … [truncated]
-       tips: ["Build away from spawn, or your base will get reset", "Get a Protector crafted from diamonds as soon as you can, to keep griefers out", "Don't log out mid-fight. If you're under 80 health and a player hit you in the last 8 seconds, you'll lose your items", "Log in to … [truncated]
-       similarGames: ["classic_smp2", "classic_survivalDayNight", "classic_survivalGuns", "survivalFactory", "skyblock", "classic"],
+       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
+       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
+       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
+       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
+       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
```

#### 3. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/164.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/164.js#L15-L16)

```diff
-         question: "What is Bloxd Survival?",
-         answer: "A multiplayer survival game on Bloxd.io. You mine, craft, build and fight to survive in a shared block world that carries on while you're away."
+         question: "What is Lucky Towers?",
+         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
```

#### 4. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/164.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/164.js#L18-L19)

```diff
-         question: "How do I protect my base in Bloxd Survival?",
-         answer: "Craft a Protector from diamonds and place it in your base. Other players then can't change blocks or open chests in that chunk. Tribes can use Tribe Protectors instead. Protectors disappear if you're away for more than 30 days."
+         question: "How do you win in Bloxd Lucky Towers?",
+         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
```

#### 5. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/164.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/164.js#L21-L22)

```diff
-         question: "Why did my build disappear?",
-         answer: "Blocks near spawn reset every few hours, so build outside that area. Private lobbies reset only if their owner turns on Enable Spawn Reset."
+         question: "How often do you get items in Lucky Towers?",
+         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
```

#### 6. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/164.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/164.js#L24-L25)

```diff
-         question: "Is stealing and griefing allowed in Bloxd Survival?",
-         answer: "It is. Raiding, stealing and griefing are all part of the game, so protect your chests and only share your base with people you trust."
+         question: "What items can you get in Lucky Towers?",
+         answer: "Blocks, seedlings, beds, food, potions, weapons, arrows, armour and explosives. There are special items too, like the Bouncy Bomb, Respawn Totem, Floor Creator, SnowDash, Updraft, Steal Ball, Chaos Potion and Moonstone Remote Explosive."
```

#### 7. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/164.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/164.js#L27-L28)

```diff
-         question: "Can I make a private server in Bloxd Survival?",
-         answer: "Yes. You can make a private server for free, invite your friends and use owner commands to run it however you like."
+         question: "Which random events can happen in Lucky Towers?",
+         answer: "Chest Drop, Jump Boost, Double Speed, Lava Rise and Bombardment. You'll get an announcement when each one starts."
```

#### 8. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/164.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/164.js#L30-L31)

```diff
-         question: "What happens if I log out during a fight?",
-         answer: "Log out with less than 80 health within 8 seconds of being hit by a player and you'll lose your items. Get somewhere safe and heal up before you leave."
+         question: "Which maps are in Lucky Towers?",
+         answer: "The OG, Desert, Icy, Space and Forest. There's also a Spooky map in October and a Holiday map in December and January."
```

#### 9. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L33-L37` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/164.js#L33-L34) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/164.js#L33-L37)

```diff
-         question: "Will my world still be there tomorrow?",
-         answer: "Yes. Survival worlds are persistent and keep running while you're gone. Signing in to an account keeps your progress safe even if your browser data gets cleared."
-       }, {
-         question: "Which Bloxd survival mode should I play?",
-         answer: "Survival is the classic one, with mobs, PvP and raiding. Peaceful is much calmer: no hostile mobs, no PvP and no health bar. Day & Night Survival is all about the day-night cycle and a Days Survived leaderboard. Survival with Guns adds craftable guns and armed mo … [truncated]
+         question: "How is Lucky Towers different from Lucky Blocks Battlegrounds?",
+         answer: "Lucky Towers is last player standing. Items arrive on their own, and once you're knocked out you spectate. Lucky Blocks Battlegrounds is a kills race in a shared arena where you open Lucky Blocks, and the top player wins when it resets."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/165.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/165.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c)

#### 1. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/165.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/165.js#L4)

```diff
-   8953: (DD, zD, wD) => {
+   9081: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/165.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/165.js#L9-L13)

```diff
-       whatIs: ["All the fun of survival with none of the stress. Bloxd Peaceful Survival is a calm sandbox where you explore a shared block world with other players. You mine, gather, craft and build, and there are no hostile mobs, no PvP and no health bar. Basically it's Surviva … [truncated]
-       howToPlay: ["Spawn into the shared world and start collecting resources. Chop some trees, mine for ores, craft better tools and get building on your dream base. Only passive animals spawn, and they've got so little health you can beat them with your fist. Health is switched … [truncated]
-       features: ["No Hostile Mobs, No PvP and No Health Bar", "Shared Multiplayer World to Explore with Friends", "Mining, Crafting and Base Building", "Protect Your Land and Chests with Protectors", "Relaxing and Great for New Players and Builders"],
-       tips: ["Pick a spot to build 200+ blocks out, where blocks don't reset every few hours", "Craft a Protector from diamonds to keep your builds and chests safe", "Don't bother with a sword. Passive animals are weak enough to beat with your fist", "Just starting out? Practise  … [truncated]
-       similarGames: ["classic_survival", "classic_survivalDayNight", "classic_creative", "skyblock", "oneBlock"],
+       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
+       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
+       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
+       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
+       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
```

#### 3. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/165.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/165.js#L15-L16)

```diff
-         question: "What is Bloxd Peaceful?",
-         answer: "It's Bloxd's no-danger survival mode. You explore, build and gather in a shared block world, with no hostile mobs and no health bar."
+         question: "What is Lucky Blocks Battlegrounds?",
+         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
```

#### 4. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/165.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/165.js#L18-L19)

```diff
-         question: "Can you die in Bloxd Peaceful?",
-         answer: "No. There's no health bar, so mobs and other players can't hurt you."
+         question: "How do you win Lucky Blocks Battlegrounds?",
+         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
```

#### 5. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/165.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/165.js#L21-L22)

```diff
-         question: "Is there PvP in Bloxd Peaceful?",
-         answer: "There isn't. Players can't attack each other in Peaceful."
+         question: "How do I get Lucky Blocks?",
+         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
```

#### 6. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/165.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/165.js#L24-L25)

```diff
-         question: "Are there mobs in Bloxd Peaceful?",
-         answer: "Only passive animals. None of them can attack you, and you can beat them with your fist."
+         question: "What is the Ultra Lucky Block?",
+         answer: "An extra-special Lucky Block. One shows up in the middle of the arena every 90 seconds for everyone to race for, and you get your own in your base every 5 minutes as well."
```

#### 7. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/165.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/165.js#L27-L28)

```diff
-         question: "What's the difference between Peaceful and Survival in Bloxd?",
-         answer: "The world works the same way, with the same mining, crafting and building. Survival has hostile mobs, PvP and a health bar. Peaceful takes all of that away so you can explore and build without worrying."
+         question: "What's inside Bloxd lucky blocks?",
+         answer: "Pretty much anything, from weapons and armour to pets and funny surprises. Weapon Lucky Blocks and Pet Lucky Blocks give you a better chance of a weapon or a pet."
```

#### 8. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/165.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/165.js#L30-L31)

```diff
-         question: "Is Bloxd Peaceful good for beginners?",
-         answer: "Definitely. It's a safe place to learn the basics. If you die early on in Survival, the game will even offer to move you over to Peaceful."
+         question: "Can other players attack me in my base?",
+         answer: "Nope. Other players can't get into your base, break its blocks or open its chests."
```

#### 9. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L33-L40` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/165.js#L33-L34) · [Before (L33-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/165.js#L33-L40)

```diff
-         question: "Can I play Bloxd Peaceful with friends?",
-         answer: "Yes. Everyone's in the same shared world, so you can meet up and build together."
-       }, {
-         question: "How do I keep my builds safe in Peaceful?",
-         answer: "Blocks near spawn reset every few hours, so build outside that area (a message shows when you cross its edge). Then put down a Protector and other players won't be able to break your builds or open your chests."
-       }, {
-         question: "How do I save my progress in Bloxd Peaceful?",
-         answer: "Sign in to an account. If you don't, your progress can be lost when your browser's cookies get cleared."
+         question: "Do I lose my items when the Lucky Block Battlegrounds arena resets?",
+         answer: "No, your inventory stays with you. Everyone's kills go back to zero for the new round, though."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/166.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/166.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122)

#### 1. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/166.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/166.js#L4)

```diff
-   8957: (DD, zD, wD) => {
+   9090: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/166.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/166.js#L9-L13)

```diff
-       whatIs: ["When the sun goes down, the monsters come out. Bloxd Day & Night Survival is a survival mode built around the clock. You mine, craft and build while it's light, then protect your base once it gets dark. Light up your world with torches and see if you can make it t … [truncated]
-       howToPlay: ["Use the daylight to gather resources, craft tools and build somewhere safe. Time goes from dawn to day, then dusk to night. The game announces the time, and there's a progress bar showing how far through the cycle you are. Once dusk hits, get ready. At night it … [truncated]
-       features: ["Dawn, Day, Dusk and Night Cycle with Time Announcements", "Hostile Mobs That Spawn on the Surface at Night", "Torches to Keep Monsters Away from Your Base", "Free Torches When You First Join", "Sleep in a Bed to Skip the Night", "Days Survived and Days Played Le … [truncated]
-       tips: ["Get torches up around your base before dusk", "Use the free torches you start with straight away", "Keep an eye on the progress bar so the night doesn't sneak up on you", "Not ready to fight? Stay inside at night", "Wait for sunrise, because monsters left out in the … [truncated]
-       similarGames: ["classic_survival", "classic", "classic_survivalGuns", "skyblock"],
+       whatIs: ["Mine, craft and survive in a huge block world that keeps running even when you log off. Bloxd Survival is an online multiplayer SMP. You explore, dig for ores, craft tools and armour, and build a base alongside everyone else on the server. It's free and runs strai … [truncated]
+       howToPlay: ["Gather some resources and craft your first tools. Then dig deeper for iron, gold, diamonds and moonstone to make better gear. Keep an eye out for mobs. Draugr Zombies, Skeletons and Knights, Frost Zombies and Skeletons, Cave Golems and Frost Golems all roam the … [truncated]
+       features: ["Persistent SMP Worlds That Save Your Progress", "Mining, Crafting and Base Building", "PvP, Looting and Raiding", "Land Protection with Protectors and Tribe Protectors", "Draugr, Golems, Frost Mobs and Wild Animals to Battle", "Free Private Servers with Owner Co … [truncated]
+       tips: ["Build away from spawn, or your base will get reset", "Get a Protector crafted from diamonds as soon as you can, to keep griefers out", "Don't log out mid-fight. If you're under 80 health and a player hit you in the last 8 seconds, you'll lose your items", "Log in to … [truncated]
+       similarGames: ["classic_smp2", "classic_survivalDayNight", "classic_survivalGuns", "survivalFactory", "skyblock", "classic"],
```

#### 3. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/166.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/166.js#L15-L16)

```diff
-         question: "What is Bloxd Day and Night Survival?",
-         answer: "A survival mode on Bloxd.io with a day-night cycle. You build and explore during the day, then use torches to protect your base from the monsters that come out at night."
+         question: "What is Bloxd Survival?",
+         answer: "A multiplayer survival game on Bloxd.io. You mine, craft, build and fight to survive in a shared block world that carries on while you're away."
```

#### 4. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/166.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/166.js#L18-L19)

```diff
-         question: "How do I stop monsters spawning near my base in Bloxd?",
-         answer: "Torches. Hostile mobs won't spawn near light, so light up your base and the area around it before night falls."
+         question: "How do I protect my base in Bloxd Survival?",
+         answer: "Craft a Protector from diamonds and place it in your base. Other players then can't change blocks or open chests in that chunk. Tribes can use Tribe Protectors instead. Protectors disappear if you're away for more than 30 days."
```

#### 5. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/166.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/166.js#L21-L22)

```diff
-         question: "How do I skip the night in Day & Night Survival?",
-         answer: "Sleep in a bed. By default the night gets skipped once more than half the players are asleep. Private-server owners can change that or turn sleeping off."
+         question: "Why did my build disappear?",
+         answer: "Blocks near spawn reset every few hours, so build outside that area. Private lobbies reset only if their owner turns on Enable Spawn Reset."
```

#### 6. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/166.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/166.js#L24-L25)

```diff
-         question: "What happens to monsters when the sun comes up?",
-         answer: "Hostile mobs standing in direct sunlight start to burn. Mobs in caves or under cover are safe, so stay alert if you're underground."
+         question: "Is stealing and griefing allowed in Bloxd Survival?",
+         answer: "It is. Raiding, stealing and griefing are all part of the game, so protect your chests and only share your base with people you trust."
```

#### 7. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/166.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/166.js#L27-L28)

```diff
-         question: "How are Days Survived counted?",
-         answer: "One day is a full cycle of day, dusk, night and dawn. Days Survived is how many days in a row you've stayed alive, and it resets when you die. Days Played keeps going no matter what. You'll see both on the lobby leaderboard."
+         question: "Can I make a private server in Bloxd Survival?",
+         answer: "Yes. You can make a private server for free, invite your friends and use owner commands to run it however you like."
```

#### 8. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L30-L31` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/166.js#L30-L37) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/166.js#L30-L31)

```diff
-         question: "Can I change the day and night settings on my own server?",
-         answer: "Yes. On your free private server you can pause the cycle, set the time, pick how many players need to sleep and turn the leaderboard on or off, plus a few other options."
+         question: "What happens if I log out during a fight?",
+         answer: "Log out with less than 80 health within 8 seconds of being hit by a player and you'll lose your items. Get somewhere safe and heal up before you leave."
+       }, {
+         question: "Will my world still be there tomorrow?",
+         answer: "Yes. Survival worlds are persistent and keep running while you're gone. Signing in to an account keeps your progress safe even if your browser data gets cleared."
+       }, {
+         question: "Which Bloxd survival mode should I play?",
+         answer: "Survival is the classic one, with mobs, PvP and raiding. Peaceful is much calmer: no hostile mobs, no PvP and no health bar. Day & Night Survival is all about the day-night cycle and a Days Survived leaderboard. Survival with Guns adds craftable guns and armed mo … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/167.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/167.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9)

#### 1. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/167.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/167.js#L4)

```diff
-   8964: (DD, zD, wD) => {
+   9096: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/167.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/167.js#L9-L13)

```diff
-       whatIs: ["What if the mobs had guns, and so did you? Bloxd Survival with Guns takes the classic Bloxd Survival world and adds craftable guns and armed mobs. You still mine, craft and build in a shared multiplayer world. The difference is you can also craft guns and vehicles … [truncated]
-       howToPlay: ["Start off by gathering wood. Your first gun, the M1911, only takes 10 Maple Wood Planks. Mine Messy Stone, iron, gold, diamonds and moonstone to craft stronger Bloxd guns, like the AK-47, the Striker-12, the AWP and even the Minigun.", "Be careful, because the  … [truncated]
-       features: ["17 Craftable Guns, from the M1911 to the Minigun", "Armed Mobs That Fight Back", "Tame Pets That Fight with Guns", "Craftable Vehicles: Cars, Karts, Speedboats and Hovercraft", "Salvage Guns Back into Materials", "Gunfights on Top of Mining, Crafting and Base Bu … [truncated]
-       tips: ["Make an M1911 from 10 Maple Wood Planks as soon as you spawn", "Mine iron and gold early on to unlock better guns", "Feed a Sheep an Apple to tame it and get your first armed pet", "Save up Diamonds and Gold Bars for a Deagle", "Got guns you don't use anymore? Salva … [truncated]
-       similarGames: ["classic_survival", "shooting", "classic_survivalDayNight", "classic"],
+       whatIs: ["All the fun of survival with none of the stress. Bloxd Peaceful Survival is a calm sandbox where you explore a shared block world with other players. You mine, gather, craft and build, and there are no hostile mobs, no PvP and no health bar. Basically it's Surviva … [truncated]
+       howToPlay: ["Spawn into the shared world and start collecting resources. Chop some trees, mine for ores, craft better tools and get building on your dream base. Only passive animals spawn, and they've got so little health you can beat them with your fist. Health is switched … [truncated]
+       features: ["No Hostile Mobs, No PvP and No Health Bar", "Shared Multiplayer World to Explore with Friends", "Mining, Crafting and Base Building", "Protect Your Land and Chests with Protectors", "Relaxing and Great for New Players and Builders"],
+       tips: ["Pick a spot to build 200+ blocks out, where blocks don't reset every few hours", "Craft a Protector from diamonds to keep your builds and chests safe", "Don't bother with a sword. Passive animals are weak enough to beat with your fist", "Just starting out? Practise  … [truncated]
+       similarGames: ["classic_survival", "classic_survivalDayNight", "classic_creative", "skyblock", "oneBlock"],
```

#### 3. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/167.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/167.js#L15-L16)

```diff
-         question: "What is Bloxd Survival with Guns?",
-         answer: "It's Bloxd Survival, but with craftable guns and armed mobs. You mine, craft, build and team up or battle in a shared multiplayer world."
+         question: "What is Bloxd Peaceful?",
+         answer: "It's Bloxd's no-danger survival mode. You explore, build and gather in a shared block world, with no hostile mobs and no health bar."
```

#### 4. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/167.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/167.js#L18-L19)

```diff
-         question: "How do you make a gun in Bloxd Survival with Guns?",
-         answer: "Craft an M1911 from 10 Maple Wood Planks. Stronger guns need materials like Iron Bars, Gold Bars, Diamonds and Moonstone."
+         question: "Can you die in Bloxd Peaceful?",
+         answer: "No. There's no health bar, so mobs and other players can't hurt you."
```

#### 5. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/167.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/167.js#L21-L22)

```diff
-         question: "How many guns are there in Survival with Guns?",
-         answer: "17 craftable guns, ranging from the M1911 and MP40 up to the AWP and the Minigun."
+         question: "Is there PvP in Bloxd Peaceful?",
+         answer: "There isn't. Players can't attack each other in Peaceful."
```

#### 6. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/167.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/167.js#L24-L25)

```diff
-         question: "Do mobs carry guns in Bloxd?",
-         answer: "They do. Each type of hostile mob carries its own guns. Draugr Skeletons have AK-47s and MP40s, for example, and Magma Golems carry a Minigun."
+         question: "Are there mobs in Bloxd Peaceful?",
+         answer: "Only passive animals. None of them can attack you, and you can beat them with your fist."
```

#### 7. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/167.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/167.js#L27-L28)

```diff
-         question: "Can my pets use guns?",
-         answer: "Yes. Tamed pets get guns and fight by your side. They won't hurt you or your other pets."
+         question: "What's the difference between Peaceful and Survival in Bloxd?",
+         answer: "The world works the same way, with the same mining, crafting and building. Survival has hostile mobs, PvP and a health bar. Peaceful takes all of that away so you can explore and build without worrying."
```

#### 8. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/167.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/167.js#L30-L31)

```diff
-         question: "Can I turn guns on in a private server?",
-         answer: "Yes. Private servers have a setting that turns on gun crafting and using. When it's on, mobs and pets get guns too."
+         question: "Is Bloxd Peaceful good for beginners?",
+         answer: "Definitely. It's a safe place to learn the basics. If you die early on in Survival, the game will even offer to move you over to Peaceful."
```

#### 9. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L33-L34` → after: `L33-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L33-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/167.js#L33-L40) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/167.js#L33-L34)

```diff
-         question: "How is Survival with Guns different from regular Survival?",
-         answer: "The world, mining and building all work the same. On top of that you can craft 17 guns and vehicles, mobs carry guns, and tamed pets fight alongside you with guns of their own."
+         question: "Can I play Bloxd Peaceful with friends?",
+         answer: "Yes. Everyone's in the same shared world, so you can meet up and build together."
+       }, {
+         question: "How do I keep my builds safe in Peaceful?",
+         answer: "Blocks near spawn reset every few hours, so build outside that area (a message shows when you cross its edge). Then put down a Protector and other players won't be able to break your builds or open your chests."
+       }, {
+         question: "How do I save my progress in Bloxd Peaceful?",
+         answer: "Sign in to an account. If you don't, your progress can be lost when your browser's cookies get cleared."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/168.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/168.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf)

#### 1. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/168.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/168.js#L4)

```diff
-   8966: (DD, zD, wD) => {
+   9101: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/168.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/168.js#L9-L13)

```diff
-       whatIs: ["Infinite blocks, custom tools and no limits on what you build. Bloxd Creative is the free building mode where you can get creating straight away. Build in a shared world with players from all over, or set up your own free build server and create with your friends  … [truncated]
-       howToPlay: ["Open the creative menu and grab any block or item you want. It's all sorted into categories like Building Blocks, Coloured Blocks, Nature, Decoration, Utility, Tools and Vehicles, and World Tools. Place as many as you like, fly around your build and make anythi … [truncated]
-       features: ["Infinite Blocks and Items from the Creative Menu", "Fly Freely Around Your Builds", "Superflat Worlds for Big Builds", "Teleport To Fresh Land for Uninterrupted Building", "Free Private Build Servers to Create with Friends", "Extra Tools for Server Owners, Inclu … [truncated]
-       tips: ["Teleport To Fresh Land is the quickest way to find some empty space", "In public lobbies, build away from spawn, because blocks near spawn reset every few hours", "Put down a Protector so other players can't change your build or open your chests", "Use /tp to get ar … [truncated]
-       similarGames: ["classic", "classic_survival", "plots", "skyblock", "oneBlock"],
+       whatIs: ["When the sun goes down, the monsters come out. Bloxd Day & Night Survival is a survival mode built around the clock. You mine, craft and build while it's light, then protect your base once it gets dark. Light up your world with torches and see if you can make it t … [truncated]
+       howToPlay: ["Use the daylight to gather resources, craft tools and build somewhere safe. Time goes from dawn to day, then dusk to night. The game announces the time, and there's a progress bar showing how far through the cycle you are. Once dusk hits, get ready. At night it … [truncated]
+       features: ["Dawn, Day, Dusk and Night Cycle with Time Announcements", "Hostile Mobs That Spawn on the Surface at Night", "Torches to Keep Monsters Away from Your Base", "Free Torches When You First Join", "Sleep in a Bed to Skip the Night", "Days Survived and Days Played Le … [truncated]
+       tips: ["Get torches up around your base before dusk", "Use the free torches you start with straight away", "Keep an eye on the progress bar so the night doesn't sneak up on you", "Not ready to fight? Stay inside at night", "Wait for sunrise, because monsters left out in the … [truncated]
+       similarGames: ["classic_survival", "classic", "classic_survivalGuns", "skyblock"],
```

#### 3. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/168.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/168.js#L15-L16)

```diff
-         question: "What is Bloxd Creative?",
-         answer: "Bloxd Creative is the creative building mode in Bloxd.io. You get infinite blocks and custom tools to build whatever you like, on your own or with friends."
+         question: "What is Bloxd Day and Night Survival?",
+         answer: "A survival mode on Bloxd.io with a day-night cycle. You build and explore during the day, then use torches to protect your base from the monsters that come out at night."
```

#### 4. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/168.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/168.js#L18-L19)

```diff
-         question: "Can you fly in Bloxd Creative?",
-         answer: "Yes, you can fly in Creative, so you can reach every bit of your build."
+         question: "How do I stop monsters spawning near my base in Bloxd?",
+         answer: "Torches. Hostile mobs won't spawn near light, so light up your base and the area around it before night falls."
```

#### 5. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/168.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/168.js#L21-L22)

```diff
-         question: "What is Superflat in Bloxd?",
-         answer: "A Creative world made of endless flat grass. It gives you a clean canvas for your biggest projects."
+         question: "How do I skip the night in Day & Night Survival?",
+         answer: "Sleep in a bed. By default the night gets skipped once more than half the players are asleep. Private-server owners can change that or turn sleeping off."
```

#### 6. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/168.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/168.js#L24-L25)

```diff
-         question: "How do I make a free build server in Bloxd?",
-         answer: "Start your own private lobby for free and invite your friends. As the owner you also get extra tools like WorldBuilder."
+         question: "What happens to monsters when the sun comes up?",
+         answer: "Hostile mobs standing in direct sunlight start to burn. Mobs in caves or under cover are safe, so stay alert if you're underground."
```

#### 7. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/168.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/168.js#L27-L28)

```diff
-         question: "Can you use TNT in Bloxd Creative?",
-         answer: "Not in public Creative worlds. You can't take explosives from the menu or craft them, so nobody can blow up other people's builds."
+         question: "How are Days Survived counted?",
+         answer: "One day is a full cycle of day, dusk, night and dawn. Days Survived is how many days in a row you've stayed alive, and it resets when you die. Days Played keeps going no matter what. You'll see both on the lobby leaderboard."
```

#### 8. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L30-L34` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/168.js#L30-L31) · [Before (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/168.js#L30-L34)

```diff
-         question: "Why did my build disappear in Bloxd Creative?",
-         answer: "In public lobbies, blocks near spawn reset every few hours; a message shows when you cross the edge of that area. Build further away, use Teleport To Fresh Land, or start a private build server, where nothing resets unless its owner turns on Enable Spawn Reset."
-       }, {
-         question: "What's the difference between Creative and Plots?",
-         answer: "Creative is an open shared world. You build wherever you want and guard areas with Protectors. In Plots you claim your own 91\xd791 plot that only you and the players you add can change, and it's saved for good once you've changed 500 blocks."
+         question: "Can I change the day and night settings on my own server?",
+         answer: "Yes. On your free private server you can pause the cycle, set the time, pick how many players need to sleep and turn the leaderboard on or off, plus a few other options."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/169.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/169.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2)

#### 1. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/169.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/169.js#L4)

```diff
-   8973: (DD, zD, wD) => {
+   9110: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/169.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/169.js#L9-L13)

```diff
-       whatIs: ["Your own little slice of the world to shape, share and show off. Bloxd Plots gives every player their own plot in a shared creative world. Each plot starts out completely blank, so you can build whatever you like with whoever you like. It's different from the open … [truncated]
-       howToPlay: ["Join Plots and claim a plot. Each one is a 91\xd791 block build area, with 5-block-wide roads between the plots. There's no height limit, so build as tall as you dare. You're in creative mode, which means no health to worry about and nothing stopping you from b … [truncated]
-       features: ["Your Own 91\xd791 Plot to Build On", "Own Up to 5 Plots", "No Height Limit", "Add Friends to Build Together", "Teleport to Any Plot with Coordinates", "Plots Saved Forever Once You've Built Enough", "Spawn Mobs on Your Own Plot"],
-       tips: ["Get to 500 changed blocks quickly, because unsaved plots can be reset", "Add Player to Plot lets a friend build with you", "If you don't want someone editing anymore, use Remove Player from Plot", "Starting something new? Get New Plot gives you a fresh one without l … [truncated]
-       similarGames: ["classic_creative", "greenville", "classic", "parkourPlace"],
+       whatIs: ["What if the mobs had guns, and so did you? Bloxd Survival with Guns takes the classic Bloxd Survival world and adds craftable guns and armed mobs. You still mine, craft and build in a shared multiplayer world. The difference is you can also craft guns and vehicles … [truncated]
+       howToPlay: ["Start off by gathering wood. Your first gun, the M1911, only takes 10 Maple Wood Planks. Mine Messy Stone, iron, gold, diamonds and moonstone to craft stronger Bloxd guns, like the AK-47, the Striker-12, the AWP and even the Minigun.", "Be careful, because the  … [truncated]
+       features: ["17 Craftable Guns, from the M1911 to the Minigun", "Armed Mobs That Fight Back", "Tame Pets That Fight with Guns", "Craftable Vehicles: Cars, Karts, Speedboats and Hovercraft", "Salvage Guns Back into Materials", "Gunfights on Top of Mining, Crafting and Base Bu … [truncated]
+       tips: ["Make an M1911 from 10 Maple Wood Planks as soon as you spawn", "Mine iron and gold early on to unlock better guns", "Feed a Sheep an Apple to tame it and get your first armed pet", "Save up Diamonds and Gold Bars for a Deagle", "Got guns you don't use anymore? Salva … [truncated]
+       similarGames: ["classic_survival", "shooting", "classic_survivalDayNight", "classic"],
```

#### 3. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/169.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/169.js#L15-L16)

```diff
-         question: "What is Bloxd Plots?",
-         answer: "A building mode where you get your own 91\xd791 plot and can build anything you like in creative mode."
+         question: "What is Bloxd Survival with Guns?",
+         answer: "It's Bloxd Survival, but with craftable guns and armed mobs. You mine, craft, build and team up or battle in a shared multiplayer world."
```

#### 4. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/169.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/169.js#L18-L19)

```diff
-         question: "How do I save my plot in Bloxd Plots?",
-         answer: "Change at least 500 blocks on it. From then on your plot is saved permanently. Plots that haven't been saved yet can be reset."
+         question: "How do you make a gun in Bloxd Survival with Guns?",
+         answer: "Craft an M1911 from 10 Maple Wood Planks. Stronger guns need materials like Iron Bars, Gold Bars, Diamonds and Moonstone."
```

#### 5. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/169.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/169.js#L21-L22)

```diff
-         question: "How do I build with friends in Bloxd Plots?",
-         answer: "Use Add Player to Plot to give a friend access. They can find it with Go To Shared Plot, and you can remove them whenever you want."
+         question: "How many guns are there in Survival with Guns?",
+         answer: "17 craftable guns, ranging from the M1911 and MP40 up to the AWP and the Minigun."
```

#### 6. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/169.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/169.js#L24-L25)

```diff
-         question: "Can other players break my build?",
-         answer: "No. Only you and the players you've added can change blocks on your plot. Changed your mind about someone? Use Remove Player from Plot."
+         question: "Do mobs carry guns in Bloxd?",
+         answer: "They do. Each type of hostile mob carries its own guns. Draugr Skeletons have AK-47s and MP40s, for example, and Magma Golems carry a Minigun."
```

#### 7. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/169.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/169.js#L27-L28)

```diff
-         question: "How big is a plot in Bloxd Plots?",
-         answer: "Each plot is a 91\xd791 block build area with no height limit. Roads 5 blocks wide run between them."
+         question: "Can my pets use guns?",
+         answer: "Yes. Tamed pets get guns and fight by your side. They won't hurt you or your other pets."
```

#### 8. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L30-L31` → after: `L30-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/169.js#L30-L34) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/169.js#L30-L31)

```diff
-         question: "How many plots can one player own?",
-         answer: "Up to 5 each."
+         question: "Can I turn guns on in a private server?",
+         answer: "Yes. Private servers have a setting that turns on gun crafting and using. When it's on, mobs and pets get guns too."
+       }, {
+         question: "How is Survival with Guns different from regular Survival?",
+         answer: "The world, mining and building all work the same. On top of that you can craft 17 guns and vehicles, mobs carry guns, and tamed pets fight alongside you with guns of their own."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/170.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/170.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251)

#### 1. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/170.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/170.js#L4)

```diff
-   8982: (DD, zD, wD) => {
+   9114: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/170.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/170.js#L9-L13)

```diff
-       whatIs: ["It all starts on one tiny island floating high in the sky. In Bloxd Skyblock, that little island becomes a full RPG. You'll level up skills, take on quests, beat dungeon bosses and trade at the auction house, and bit by bit your island turns into something special … [truncated]
-       howToPlay: ["Your first quest is an easy one. Gather logs on your island, craft a bridge and cross to the portal to get to the Hub. That's where everyone hangs out. Up Dog the auctioneer runs the Open Market, so you can buy and sell items with other players there. The Banke … [truncated]
-       features: ["Your Own Private Sky Island to Grow and Decorate", "5 Skills to Level Up: Foraging, Combat, Mining, Farming and Fishing", "Quests That Give You an Axe, Sword, Pickaxe, Hoe and Fishing Rod", "Explore the Hub, Manor Farm, Cragrock Mines and the Dungeons", "Timed D … [truncated]
-       tips: ["Do the skill starter quests early. The tools they give you make everything faster", "Level up Combat before you go into the Dungeons, since every level adds extra damage", "Start each dungeon on Easy and work your way up to Insane", "You can only trade in the Hub, s … [truncated]
-       similarGames: ["classic_survival", "oneBlock", "skyIslands", "survivalFactory"],
+       whatIs: ["Infinite blocks, custom tools and no limits on what you build. Bloxd Creative is the free building mode where you can get creating straight away. Build in a shared world with players from all over, or set up your own free build server and create with your friends  … [truncated]
+       howToPlay: ["Open the creative menu and grab any block or item you want. It's all sorted into categories like Building Blocks, Coloured Blocks, Nature, Decoration, Utility, Tools and Vehicles, and World Tools. Place as many as you like, fly around your build and make anythi … [truncated]
+       features: ["Infinite Blocks and Items from the Creative Menu", "Fly Freely Around Your Builds", "Superflat Worlds for Big Builds", "Teleport To Fresh Land for Uninterrupted Building", "Free Private Build Servers to Create with Friends", "Extra Tools for Server Owners, Inclu … [truncated]
+       tips: ["Teleport To Fresh Land is the quickest way to find some empty space", "In public lobbies, build away from spawn, because blocks near spawn reset every few hours", "Put down a Protector so other players can't change your build or open your chests", "Use /tp to get ar … [truncated]
+       similarGames: ["classic", "classic_survival", "plots", "skyblock", "oneBlock"],
```

#### 3. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/170.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/170.js#L15-L16)

```diff
-         question: "What is Bloxd Skyblock?",
-         answer: "It's a Skyblock RPG. You grow your own private sky island, level up skills, do quests, trade at the auction house and fight dungeon bosses."
+         question: "What is Bloxd Creative?",
+         answer: "Bloxd Creative is the creative building mode in Bloxd.io. You get infinite blocks and custom tools to build whatever you like, on your own or with friends."
```

#### 4. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/170.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/170.js#L18-L19)

```diff
-         question: "How do you play Bloxd Skyblock?",
-         answer: "Gather some logs, craft a bridge and cross to the portal to reach the Hub. After that, follow the quests, level your skills and go exploring in Manor Farm, Cragrock Mines and the Dungeons."
+         question: "Can you fly in Bloxd Creative?",
+         answer: "Yes, you can fly in Creative, so you can reach every bit of your build."
```

#### 5. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/170.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/170.js#L21-L22)

```diff
-         question: "What skills are in Bloxd Skyblock?",
-         answer: "Five of them: Foraging, Combat, Mining, Farming and Fishing. You level each one just by doing it, so breaking ores levels Mining and catching fish levels Fishing."
+         question: "What is Superflat in Bloxd?",
+         answer: "A Creative world made of endless flat grass. It gives you a clean canvas for your biggest projects."
```

#### 6. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/170.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/170.js#L24-L25)

```diff
-         question: "What are the Dungeons in Bloxd Skyblock?",
-         answer: "Timed challenges like the Crumbling Crypt and the Frozen Hollow. You fight through the rooms and then face a boss, such as the Gravewarden or the Frostbound Knight. You can play each dungeon on Easy, Medium, Hard or Insane, and your best times are saved."
+         question: "How do I make a free build server in Bloxd?",
+         answer: "Start your own private lobby for free and invite your friends. As the owner you also get extra tools like WorldBuilder."
```

#### 7. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/170.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/170.js#L27-L28)

```diff
-         question: "How do I trade in Bloxd Skyblock?",
-         answer: "Find Up Dog the auctioneer in the Hub and open the Open Market. That's where you buy and sell items with other players, and it only works in the Hub."
+         question: "Can you use TNT in Bloxd Creative?",
+         answer: "Not in public Creative worlds. You can't take explosives from the menu or craft them, so nobody can blow up other people's builds."
```

#### 8. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/170.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/170.js#L30-L31)

```diff
-         question: "Can I visit other players' islands?",
-         answer: "You can. Type /visit and a player's name, as long as they're in the same game and their island is open. Owners pick who's allowed in, and /home brings you back to your own island."
+         question: "Why did my build disappear in Bloxd Creative?",
+         answer: "In public lobbies, blocks near spawn reset every few hours; a message shows when you cross the edge of that area. Build further away, use Teleport To Fresh Land, or start a private build server, where nothing resets unless its owner turns on Enable Spawn Reset."
```

#### 9. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L33-L37` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/170.js#L33-L34) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/170.js#L33-L37)

```diff
-         question: "What happened at Cragrock Mines?",
-         answer: "A huge meteor crashed into it, and the dwarves who live there need your help. Take the portal from the Hub, explore the mines and dig for ores."
-       }, {
-         question: "Does my island save between sessions?",
-         answer: "Yep. Your island, skills, Gold Coins, quests and dungeon progress all save. Log in to an account so nothing gets lost if your browser data is cleared."
+         question: "What's the difference between Creative and Plots?",
+         answer: "Creative is an open shared world. You build wherever you want and guard areas with Protectors. In Plots you claim your own 91\xd791 plot that only you and the players you add can change, and it's saved for good once you've changed 500 blocks."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/171.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/171.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d)

#### 1. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/171.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/171.js#L4)

```diff
-   8991: (DD, zD, wD) => {
+   9118: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/171.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/171.js#L9-L13)

```diff
-       whatIs: ["One block, floating in the sky, with a nametag that says \"I'm your One Block, break me!\" That's how every Bloxd One Block island starts. Break it and it comes straight back as something new, so you keep getting blocks, items and chests. Survive up there, unlock  … [truncated]
-       howToPlay: ["Break your One Block. Then break it again. And again. The more blocks you mine, the more phases you unlock, from the Forest and Plains right up to the Volcano and the Moon. Each phase changes what your block turns into, so there's always something new popping u … [truncated]
-       features: ["17 Phases to Unlock, from Forest to the Moon", "Super Mining, Super Digging and Mega Chop Skills", "One Village Hub with Shops, a Bank and Treasure Chests", "Daily and Weekly Quests", "Painter's, Monster Hunter's and Farmer's Guilds", "Chat Events like Trivia, U … [truncated]
-       tips: ["Open every chest you find. That's where your Gold Coins come from.", "Put your coins in the bank, where your balance stays safe forever.", "Save 1,000, 50,000 or 1,000,000 coins in the bank to unlock gold portal skins.", "Level up your skills, then right click to us … [truncated]
-       similarGames: ["skyblock", "skyIslands", "classic_survival"],
+       whatIs: ["Your own little slice of the world to shape, share and show off. Bloxd Plots gives every player their own plot in a shared creative world. Each plot starts out completely blank, so you can build whatever you like with whoever you like. It's different from the open … [truncated]
+       howToPlay: ["Join Plots and claim a plot. Each one is a 91\xd791 block build area, with 5-block-wide roads between the plots. There's no height limit, so build as tall as you dare. You're in creative mode, which means no health to worry about and nothing stopping you from b … [truncated]
+       features: ["Your Own 91\xd791 Plot to Build On", "Own Up to 5 Plots", "No Height Limit", "Add Friends to Build Together", "Teleport to Any Plot with Coordinates", "Plots Saved Forever Once You've Built Enough", "Spawn Mobs on Your Own Plot"],
+       tips: ["Get to 500 changed blocks quickly, because unsaved plots can be reset", "Add Player to Plot lets a friend build with you", "If you don't want someone editing anymore, use Remove Player from Plot", "Starting something new? Get New Plot gives you a fresh one without l … [truncated]
+       similarGames: ["classic_creative", "greenville", "classic", "parkourPlace"],
```

#### 3. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/171.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/171.js#L15-L16)

```diff
-         question: "What is Bloxd One Block?",
-         answer: "A sky challenge where you start on a single floating block. Break it to get new blocks, items and chests, unlock phases and grow your island into an empire."
+         question: "What is Bloxd Plots?",
+         answer: "A building mode where you get your own 91\xd791 plot and can build anything you like in creative mode."
```

#### 4. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/171.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/171.js#L18-L19)

```diff
-         question: "Is Bloxd One Block a skyblock game?",
-         answer: "Sort of. You start with one block in the sky and build everything from there. Bloxd Skyblock is a different mode, though: that one's an RPG with skills, quests and dungeons, while One Block is all about breaking your block to unlock 17 phases."
+         question: "How do I save my plot in Bloxd Plots?",
+         answer: "Change at least 500 blocks on it. From then on your plot is saved permanently. Plots that haven't been saved yet can be reset."
```

#### 5. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/171.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/171.js#L21-L22)

```diff
-         question: "How many phases are in Bloxd One Block?",
-         answer: "17, from Forest and Plains through Ocean, Desert and Dungeon to the Volcano and the Moon. Mine enough blocks to unlock each one. When you've got them all, you can change phase."
+         question: "How do I build with friends in Bloxd Plots?",
+         answer: "Use Add Player to Plot to give a friend access. They can find it with Go To Shared Plot, and you can remove them whenever you want."
```

#### 6. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/171.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/171.js#L24-L25)

```diff
-         question: "How do I get to the Hub in One Block?",
-         answer: "Grab 3 Gold Coins from chests, bridge over to the portal island nearby and walk into your portal. Type /home to come back."
+         question: "Can other players break my build?",
+         answer: "No. Only you and the players you've added can change blocks on your plot. Changed your mind about someone? Use Remove Player from Plot."
```

#### 7. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/171.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/171.js#L27-L28)

```diff
-         question: "Where do One Block coins come from?",
-         answer: "Chests from your One Block and the Hub treasure chests, daily and weekly quests, or watching an ad for coins."
+         question: "How big is a plot in Bloxd Plots?",
+         answer: "Each plot is a 91\xd791 block build area with no height limit. Roads 5 blocks wide run between them."
```

#### 8. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L30-L34` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/171.js#L30-L31) · [Before (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/171.js#L30-L34)

```diff
-         question: "How do I open my portal in One Block?",
-         answer: "Type /open in chat. You can also add visitors in your island access settings, even if your portal is closed."
-       }, {
-         question: "Can I have more than one island?",
-         answer: "Yes. The Island Manager lets you create new islands, rename them, load another save or delete one, up to a maximum number of islands."
+         question: "How many plots can one player own?",
+         answer: "Up to 5 each."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/172.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/172.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413)

#### 1. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/172.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/172.js#L4)

```diff
-   9e3: (DD, zD, wD) => {
+   9123: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/172.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/172.js#L9-L13)

```diff
-       whatIs: ["Claim an island, grab the loot and fight for every diamond you can get. Bloxd Sky Islands is a scored PvP match across floating islands, where you explore, mine resources and battle for diamonds and glory. Each phase brings better loot, and whoever has the highest … [truncated]
-       howToPlay: ["Place your Protector on an island to claim it. Other players can't change blocks or open chests there, and you'll always respawn on it. You only get one island at a time, but you can release it and claim another later. Then off you go to explore, mine and grab  … [truncated]
-       features: ["Solo, Teams, Blitz and PvE Modes", "Claim Your Own Island with a Protector", "4 Phases: Gather, Arms Race, Escalation and Chaos", "Bows, Explosives, Guns, Rockets and Diamond Gear", "Loot Drops, Diamond Surges and Diamond Bounties", "Quests, Perks and Buried Tre … [truncated]
-       tips: ["Claim an island early so you've got a safe base to respawn on", "Grab tools and resources during Gather, before the big fights kick off", "Hang on to your diamonds. They count towards your score", "Watch the loot timer and get to new drops first", "Don't camp on the … [truncated]
-       similarGames: ["skywars", "bedwars", "skyblock", "oneBlock"],
+       whatIs: ["It all starts on one tiny island floating high in the sky. In Bloxd Skyblock, that little island becomes a full RPG. You'll level up skills, take on quests, beat dungeon bosses and trade at the auction house, and bit by bit your island turns into something special … [truncated]
+       howToPlay: ["Your first quest is an easy one. Gather logs on your island, craft a bridge and cross to the portal to get to the Hub. That's where everyone hangs out. Up Dog the auctioneer runs the Open Market, so you can buy and sell items with other players there. The Banke … [truncated]
+       features: ["Your Own Private Sky Island to Grow and Decorate", "5 Skills to Level Up: Foraging, Combat, Mining, Farming and Fishing", "Quests That Give You an Axe, Sword, Pickaxe, Hoe and Fishing Rod", "Explore the Hub, Manor Farm, Cragrock Mines and the Dungeons", "Timed D … [truncated]
+       tips: ["Do the skill starter quests early. The tools they give you make everything faster", "Level up Combat before you go into the Dungeons, since every level adds extra damage", "Start each dungeon on Easy and work your way up to Insane", "You can only trade in the Hub, s … [truncated]
+       similarGames: ["classic_survival", "oneBlock", "skyIslands", "survivalFactory"],
```

#### 3. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/172.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/172.js#L15-L16)

```diff
-         question: "What is Bloxd Sky Islands?",
-         answer: "A round-based PvP mode. You claim a floating island, gear up through four phases and battle other players for the top score."
+         question: "What is Bloxd Skyblock?",
+         answer: "It's a Skyblock RPG. You grow your own private sky island, level up skills, do quests, trade at the auction house and fight dungeon bosses."
```

#### 4. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/172.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/172.js#L18-L19)

```diff
-         question: "How is the winner decided in Bloxd Sky Islands?",
-         answer: "Whoever has the highest score when time runs out. Score is your kills plus the diamonds you're holding, and in Teams the highest-scoring team takes it."
+         question: "How do you play Bloxd Skyblock?",
+         answer: "Gather some logs, craft a bridge and cross to the portal to reach the Hub. After that, follow the quests, level your skills and go exploring in Manor Farm, Cragrock Mines and the Dungeons."
```

#### 5. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/172.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/172.js#L21-L22)

```diff
-         question: "How do I claim an island in Sky Islands?",
-         answer: "Put your Protector down on an island. Nobody else can change its blocks or open its chests, and you'll always respawn there."
+         question: "What skills are in Bloxd Skyblock?",
+         answer: "Five of them: Foraging, Combat, Mining, Farming and Fishing. You level each one just by doing it, so breaking ores levels Mining and catching fish levels Fishing."
```

#### 6. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/172.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/172.js#L24-L25)

```diff
-         question: "Which modes does Sky Islands have?",
-         answer: "Solo, Teams, Blitz (a faster match) and PvE. In PvE your score comes from mob kills instead of player kills, so you claim an island and go after mobs."
+         question: "What are the Dungeons in Bloxd Skyblock?",
+         answer: "Timed challenges like the Crumbling Crypt and the Frozen Hollow. You fight through the rooms and then face a boss, such as the Gravewarden or the Frostbound Knight. You can play each dungeon on Easy, Medium, Hard or Insane, and your best times are saved."
```

#### 7. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/172.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/172.js#L27-L28)

```diff
-         question: "Where do you find diamonds in Sky Islands?",
-         answer: "Mine them, grab them from loot drops and Diamond Surges, or win fights for them. Players drop some of their diamonds when they're knocked out."
+         question: "How do I trade in Bloxd Skyblock?",
+         answer: "Find Up Dog the auctioneer in the Hub and open the Open Market. That's where you buy and sell items with other players, and it only works in the Hub."
```

#### 8. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L30-L31` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/172.js#L30-L37) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/172.js#L30-L31)

```diff
-         question: "What is a diamond bounty?",
-         answer: "If you're one of the top three scorers and you stay on the diamond island too long, you get a bounty and hunters can see you. Move to another island to get rid of it."
+         question: "Can I visit other players' islands?",
+         answer: "You can. Type /visit and a player's name, as long as they're in the same game and their island is open. Owners pick who's allowed in, and /home brings you back to your own island."
+       }, {
+         question: "What happened at Cragrock Mines?",
+         answer: "A huge meteor crashed into it, and the dwarves who live there need your help. Take the portal from the Hub, explore the mines and dig for ores."
+       }, {
+         question: "Does my island save between sessions?",
+         answer: "Yep. Your island, skills, Gold Coins, quests and dungeon progress all save. Log in to an account so nothing gets lost if your browser data is cleared."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/173.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/173.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e)

#### 1. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/173.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/173.js#L4)

```diff
-   9008: (DD, zD, wD) => {
+   9127: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/173.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/173.js#L9-L13)

```diff
-       whatIs: ["The world is ending, and the only way out is up. Bloxd Build a Factory is the original factory mode on Bloxd. You automate a factory, build a rocket and launch it to escape before time runs out. It's a race against everyone else in your world, the fastest launches … [truncated]
-       howToPlay: ["Place your first Chest (or bed) and you'll get an Auto Miner and, in public lobbies, a Protector. Craft some Pipes and hook the Auto Miner up to the Chest. Open the Auto Miner, put some Coal in to fuel it, and now it mines for you.", "Next up, craft an Extracto … [truncated]
-       features: ["Factory Automation with a Rocket Race at the End", "Auto Miners, Auto Crafters and Auto Harvesters", "Pipes, Extractor, Splitter, Filter and Merger Pipes", "Solar Panels and Wire for Power", "Leaderboard for Best Launch Time and Rocket Stage", "Fresh World Every … [truncated]
-       tips: ["Follow the tutorial and you'll have your first Auto Miner running in no time", "Keep your Auto Miners topped up with Coal so they never stop", "Use Extractor Pipes to feed Chests into your Auto Crafters", "Filter and Splitter Pipes sort items into the right machines … [truncated]
-       similarGames: ["buildAFactory2", "skyblock", "oneBlock", "classic_survival"],
+       whatIs: ["One block, floating in the sky, with a nametag that says \"I'm your One Block, break me!\" That's how every Bloxd One Block island starts. Break it and it comes straight back as something new, so you keep getting blocks, items and chests. Survive up there, unlock  … [truncated]
+       howToPlay: ["Break your One Block. Then break it again. And again. The more blocks you mine, the more phases you unlock, from the Forest and Plains right up to the Volcano and the Moon. Each phase changes what your block turns into, so there's always something new popping u … [truncated]
+       features: ["17 Phases to Unlock, from Forest to the Moon", "Super Mining, Super Digging and Mega Chop Skills", "One Village Hub with Shops, a Bank and Treasure Chests", "Daily and Weekly Quests", "Painter's, Monster Hunter's and Farmer's Guilds", "Chat Events like Trivia, U … [truncated]
+       tips: ["Open every chest you find. That's where your Gold Coins come from.", "Put your coins in the bank, where your balance stays safe forever.", "Save 1,000, 50,000 or 1,000,000 coins in the bank to unlock gold portal skins.", "Level up your skills, then right click to us … [truncated]
+       similarGames: ["skyblock", "skyIslands", "classic_survival"],
```

#### 3. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/173.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/173.js#L15-L16)

```diff
-         question: "What is Bloxd Build a Factory?",
-         answer: "A factory automation race. You automate your factory, build a rocket and try to escape the dying world as fast as you can."
+         question: "What is Bloxd One Block?",
+         answer: "A sky challenge where you start on a single floating block. Break it to get new blocks, items and chests, unlock phases and grow your island into an empire."
```

#### 4. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/173.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/173.js#L18-L19)

```diff
-         question: "How do you build a rocket in Bloxd Build a Factory?",
-         answer: "Place your Rocket Ship from your inventory, then feed it resources from your factory to upgrade it stage by stage. Once it's finished, launch it to beat the game."
+         question: "Is Bloxd One Block a skyblock game?",
+         answer: "Sort of. You start with one block in the sky and build everything from there. Bloxd Skyblock is a different mode, though: that one's an RPG with skills, quests and dungeons, while One Block is all about breaking your block to unlock 17 phases."
```

#### 5. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/173.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/173.js#L21-L22)

```diff
-         question: "What's the goal in Build a Factory?",
-         answer: "Launch a rocket and escape the dying world. Your final time gets saved, and the quickest launches end up on the leaderboard."
+         question: "How many phases are in Bloxd One Block?",
+         answer: "17, from Forest and Plains through Ocean, Desert and Dungeon to the Volcano and the Moon. Mine enough blocks to unlock each one. When you've got them all, you can change phase."
```

#### 6. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/173.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/173.js#L24-L25)

```diff
-         question: "How often does the Build a Factory world reset?",
-         answer: "Every 6 hours. After you launch, you can jump into another lobby and play again, or hang around until your world resets."
+         question: "How do I get to the Hub in One Block?",
+         answer: "Grab 3 Gold Coins from chests, bridge over to the portal island nearby and walk into your portal. Type /home to come back."
```

#### 7. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/173.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/173.js#L27-L28)

```diff
-         question: "What is the Persistent world in Build a Factory?",
-         answer: "It's a Build a Factory world that never resets. You can build up to 5 Auto Miners, 5 Auto Crafters and 5 Auto Harvesters per chunk, and you launch rockets to climb the leaderboard and reach the Moon."
+         question: "Where do One Block coins come from?",
+         answer: "Chests from your One Block and the Hub treasure chests, daily and weekly quests, or watching an ad for coins."
```

#### 8. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/173.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/173.js#L30-L31)

```diff
-         question: "How do you get to the Moon in Build a Factory?",
-         answer: "In the Persistent world, launch a rocket. You'll land on the Moon, where you can mine Lunite. No rocket to get back? Open the shop to return home."
+         question: "How do I open my portal in One Block?",
+         answer: "Type /open in chat. You can also add visitors in your island access settings, even if your portal is closed."
```

#### 9. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L33-L37` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/173.js#L33-L34) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/173.js#L33-L37)

```diff
-         question: "What does Lunite do?",
-         answer: "You use it to craft Lunite Auto Miners, Auto Crafters and Auto Harvesters. They run 1.5\xd7 faster, and the Lunite Auto Crafter and Auto Harvester can sometimes give you extra items."
-       }, {
-         question: "What's the difference between Build a Factory and Build a Factory 2?",
-         answer: "Build a Factory is a race to launch a rocket in a shared world that resets. In Build a Factory 2 you get your own floating factory island that you grow at your own pace."
+         question: "Can I have more than one island?",
+         answer: "Yes. The Island Manager lets you create new islands, rename them, load another save or delete one, up to a maximum number of islands."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/174.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/174.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045)

#### 1. `bundles/bloxd.io/chunks/js/174.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/174.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/174.js#L4)

```diff
-   9017: (DD, zD, wD) => {
+   9133: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/174.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/174.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/174.js#L9-L13)

```diff
-       whatIs: ["Build machines on your own floating island and watch them work! That's Bloxd Build a Factory 2 in one line. You mine ore, link your machines up with conveyor belts and turn a couple of drills into a massive, fully automated factory. Never played a factory game bef … [truncated]
-       howToPlay: ["Use your Workbench to make a Machine Bench. Build a Burner Drill, stick it on an ore Deposit and give it fuel, and it starts mining by itself. Belt the ore into a Crusher to turn it into Grit (that's crushed ore), then into a Smelter to make bars. From there yo … [truncated]
-       features: ["Your Own Floating Factory Island", "Conveyor Belts, Fast Belts, Splitters, Sorting Gates, Belt Lifts and Tunnels", "Drills, Crushers, Smelters, Presses, Wire Mills, Assemblers and More", "Tier Up Your Core to Unlock New Machines, Then Build the Star Spire", "Pow … [truncated]
-       tips: ["Use Deposit Seeds to grow Deposits that never run out", "Crush ore into Grit before you smelt it and you'll get twice the bars", "Teach a Sorting Gate an item and it'll send that item down its own belt", "A Power Coupler makes Crushers, Smelters and Alloy Kilns twic … [truncated]
-       similarGames: ["survivalFactory", "skyblock", "oneBlock", "classic_survival"],
+       whatIs: ["Claim an island, grab the loot and fight for every diamond you can get. Bloxd Sky Islands is a scored PvP match across floating islands, where you explore, mine resources and battle for diamonds and glory. Each phase brings better loot, and whoever has the highest … [truncated]
+       howToPlay: ["Place your Protector on an island to claim it. Other players can't change blocks or open chests there, and you'll always respawn on it. You only get one island at a time, but you can release it and claim another later. Then off you go to explore, mine and grab  … [truncated]
+       features: ["Solo, Teams, Blitz and PvE Modes", "Claim Your Own Island with a Protector", "4 Phases: Gather, Arms Race, Escalation and Chaos", "Bows, Explosives, Guns, Rockets and Diamond Gear", "Loot Drops, Diamond Surges and Diamond Bounties", "Quests, Perks and Buried Tre … [truncated]
+       tips: ["Claim an island early so you've got a safe base to respawn on", "Grab tools and resources during Gather, before the big fights kick off", "Hang on to your diamonds. They count towards your score", "Watch the loot timer and get to new drops first", "Don't camp on the … [truncated]
+       similarGames: ["skywars", "bedwars", "skyblock", "oneBlock"],
```

#### 3. `bundles/bloxd.io/chunks/js/174.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/174.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/174.js#L15-L16)

```diff
-         question: "What is Build a Factory 2 on Bloxd?",
-         answer: "An idle factory builder. You build machines on your own floating island, connect them with conveyor belts and let them make everything for you."
+         question: "What is Bloxd Sky Islands?",
+         answer: "A round-based PvP mode. You claim a floating island, gear up through four phases and battle other players for the top score."
```

#### 4. `bundles/bloxd.io/chunks/js/174.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/174.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/174.js#L18-L19)

```diff
-         question: "Is Build a Factory 2 an idle factory game?",
-         answer: "Partly. Once it's set up, your factory runs by itself while you explore the Wilds or plan your next build. It pauses while you're offline and carries on where it stopped when you come back."
+         question: "How is the winner decided in Bloxd Sky Islands?",
+         answer: "Whoever has the highest score when time runs out. Score is your kills plus the diamonds you're holding, and in Teams the highest-scoring team takes it."
```

#### 5. `bundles/bloxd.io/chunks/js/174.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/174.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/174.js#L21-L22)

```diff
-         question: "How do I unlock new machines in Build a Factory 2?",
-         answer: "Tier up your Core by giving it the parts it asks for, like Motors and, later on, Logic Boards. Every new tier unlocks more machines and items."
+         question: "How do I claim an island in Sky Islands?",
+         answer: "Put your Protector down on an island. Nobody else can change its blocks or open its chests, and you'll always respawn there."
```

#### 6. `bundles/bloxd.io/chunks/js/174.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/174.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/174.js#L24-L25)

```diff
-         question: "What's the best way to power my factory?",
-         answer: "You've got a few options. Burn Coal or Charcoal in a Generator, build Solar Panels (they keep running at night at half power), or run Volt Engines on Voltite Cells for loads of power. Add Charge Vaults to store more."
+         question: "Which modes does Sky Islands have?",
+         answer: "Solo, Teams, Blitz (a faster match) and PvE. In PvE your score comes from mob kills instead of player kills, so you claim an island and go after mobs."
```

#### 7. `bundles/bloxd.io/chunks/js/174.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/174.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/174.js#L27-L28)

```diff
-         question: "What are the Wilds?",
-         answer: "The land below your island. Drop down to mine rare ore, loot ruin chests for Salvage, explore the Old Works and break fallen comets for Comet Cores."
+         question: "Where do you find diamonds in Sky Islands?",
+         answer: "Mine them, grab them from loot drops and Diamond Surges, or win fights for them. Players drop some of their diamonds when they're knocked out."
```

#### 8. `bundles/bloxd.io/chunks/js/174.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/174.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/174.js#L30-L31)

```diff
-         question: "Can friends help build my factory?",
-         answer: "Definitely. Invite friends to a shared co-op island, or use /visit to have a look around other players' islands."
+         question: "What is a diamond bounty?",
+         answer: "If you're one of the top three scorers and you stay on the diamond island too long, you get a bounty and hunters can see you. Move to another island to get rid of it."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/175.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/175.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9)

#### 1. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/175.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/175.js#L4)

```diff
-   9023: (DD, zD, wD) => {
+   9142: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/175.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/175.js#L9-L13)

```diff
-       whatIs: ["Build a home, earn some gold and take life at your own pace. Bloxd Greenville is a chill social sandbox and life sim set in a laid-back town. You work jobs, play mini-games and hang out with other players, and there's no rush to do any of it."],
-       howToPlay: ["Press B to pick your starting house, then take the portal to the Town Square and start earning gold. Choose a job. You could help customers at the Market, smash blocks and buildings in Demolition, dig for minerals in Mining, or try Woodcutting and Farming. Jobs … [truncated]
-       features: ["Unlock and Switch Between Houses and Plots", "Build Your Own House on an Empty Plot", "5 Jobs to Level Up: Market, Demolition, Mining, Woodcutting and Farming", "PvP Arena and Spleef Mini-Games", "Unlock Fast Travel to Get Around Quickly", "Host Parties and Choo … [truncated]
-       tips: ["Rest in your bed when your mood drops. Low mood means lower earnings.", "A better bed means bigger earnings, so upgrade it when you can", "Sell the items you collect in the shop for extra gold", "In Mining, head back up to sell when your backpack's full", "Some mine … [truncated]
-       similarGames: ["plots", "classic_creative", "fishing", "classic"],
+       whatIs: ["The world is ending, and the only way out is up. Bloxd Build a Factory is the original factory mode on Bloxd. You automate a factory, build a rocket and launch it to escape before time runs out. It's a race against everyone else in your world, the fastest launches … [truncated]
+       howToPlay: ["Place your first Chest (or bed) and you'll get an Auto Miner and, in public lobbies, a Protector. Craft some Pipes and hook the Auto Miner up to the Chest. Open the Auto Miner, put some Coal in to fuel it, and now it mines for you.", "Next up, craft an Extracto … [truncated]
+       features: ["Factory Automation with a Rocket Race at the End", "Auto Miners, Auto Crafters and Auto Harvesters", "Pipes, Extractor, Splitter, Filter and Merger Pipes", "Solar Panels and Wire for Power", "Leaderboard for Best Launch Time and Rocket Stage", "Fresh World Every … [truncated]
+       tips: ["Follow the tutorial and you'll have your first Auto Miner running in no time", "Keep your Auto Miners topped up with Coal so they never stop", "Use Extractor Pipes to feed Chests into your Auto Crafters", "Filter and Splitter Pipes sort items into the right machines … [truncated]
+       similarGames: ["buildAFactory2", "skyblock", "oneBlock", "classic_survival"],
```

#### 3. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/175.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/175.js#L15-L16)

```diff
-         question: "What is Bloxd Greenville?",
-         answer: "A town life sim where you build a home, earn gold from jobs and play mini-games with other players."
+         question: "What is Bloxd Build a Factory?",
+         answer: "A factory automation race. You automate your factory, build a rocket and try to escape the dying world as fast as you can."
```

#### 4. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/175.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/175.js#L18-L19)

```diff
-         question: "How do I earn gold in Greenville?",
-         answer: "Work jobs like Market, Demolition, Mining, Woodcutting and Farming, eliminate players in the Arena and Spleef, and sell what you collect. Keep your mood up as well, because low mood cuts your earnings."
+         question: "How do you build a rocket in Bloxd Build a Factory?",
+         answer: "Place your Rocket Ship from your inventory, then feed it resources from your factory to upgrade it stage by stage. Once it's finished, launch it to beat the game."
```

#### 5. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/175.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/175.js#L21-L22)

```diff
-         question: "Can I build my own house in Greenville?",
-         answer: "Yes! Pick one of the ready-made houses in the shop, or unlock an Empty Plot and build from scratch."
+         question: "What's the goal in Build a Factory?",
+         answer: "Launch a rocket and escape the dying world. Your final time gets saved, and the quickest launches end up on the leaderboard."
```

#### 6. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/175.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/175.js#L24-L25)

```diff
-         question: "How do I change my house in Bloxd Greenville?",
-         answer: "Unlock new houses in the Houses section of the shop, then switch to whichever one you like."
+         question: "How often does the Build a Factory world reset?",
+         answer: "Every 6 hours. After you launch, you can jump into another lobby and play again, or hang around until your world resets."
```

#### 7. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/175.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/175.js#L27-L28)

```diff
-         question: "Can my friends visit my house?",
-         answer: "Sure. Turn on Allow Entry, add friends to your whitelist, or host a party to invite everyone over. You also get to choose who's allowed to edit your home."
+         question: "What is the Persistent world in Build a Factory?",
+         answer: "It's a Build a Factory world that never resets. You can build up to 5 Auto Miners, 5 Auto Crafters and 5 Auto Harvesters per chunk, and you launch rockets to climb the leaderboard and reach the Moon."
```

#### 8. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L30-L31` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/175.js#L30-L37) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/175.js#L30-L31)

```diff
-         question: "Which mini-games are in Greenville?",
-         answer: "Spleef, where you try to make every other player fall, and the Arena, where you battle other players in PvP. Both pay out gold."
+         question: "How do you get to the Moon in Build a Factory?",
+         answer: "In the Persistent world, launch a rocket. You'll land on the Moon, where you can mine Lunite. No rocket to get back? Open the shop to return home."
+       }, {
+         question: "What does Lunite do?",
+         answer: "You use it to craft Lunite Auto Miners, Auto Crafters and Auto Harvesters. They run 1.5\xd7 faster, and the Lunite Auto Crafter and Auto Harvester can sometimes give you extra items."
+       }, {
+         question: "What's the difference between Build a Factory and Build a Factory 2?",
+         answer: "Build a Factory is a race to launch a rocket in a shared world that resets. In Build a Factory 2 you get your own floating factory island that you grow at your own pace."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/176.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/176.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c)

#### 1. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/176.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/176.js#L4)

```diff
-   9028: (DD, zD, wD) => {
+   9149: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/176.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/176.js#L9-L13)

```diff
-       whatIs: ["A string of unique islands, a mysterious land and 114 fish just waiting to be caught. Bloxd Fishing is a relaxing fishing simulator where you explore, catch fish and slowly uncover the secrets of the islands. Take it at your own pace. It's free, there's nothing to … [truncated]
-       howToPlay: ["Cast your line and wait for a bite. When something bites, a catch minigame kicks in. Some fish need a well-timed click, while others use a progress bar or a gravity bar. Win the minigame and the fish is yours. Every fish has its own weight and rarity, going fro … [truncated]
-       features: ["5 Islands and Lots of Fishing Spots to Explore", "114 Fish Species to Catch", "7 Rarities, from Common to Mythic", "3 Different Catch Minigames", "16 Fishing Rods, from the Rusty Rod to the Mythic Rod", "Boats, plus Luck Potions in Four Strengths", "A Bestiary t … [truncated]
-       tips: ["Sell your early catches and save up for a better rod", "Check the rod shops on each island for new rods", "Some spots don't allow every rod, so check before you cast", "Drink a Luck Potion before you fish if you're after rare catches", "Wait untill a luck event to g … [truncated]
-       similarGames: ["greenville", "skyblock", "oneBlock", "classic"],
+       whatIs: ["Build machines on your own floating island and watch them work! That's Bloxd Build a Factory 2 in one line. You mine ore, link your machines up with conveyor belts and turn a couple of drills into a massive, fully automated factory. Never played a factory game bef … [truncated]
+       howToPlay: ["Use your Workbench to make a Machine Bench. Build a Burner Drill, stick it on an ore Deposit and give it fuel, and it starts mining by itself. Belt the ore into a Crusher to turn it into Grit (that's crushed ore), then into a Smelter to make bars. From there yo … [truncated]
+       features: ["Your Own Floating Factory Island", "Conveyor Belts, Fast Belts, Splitters, Sorting Gates, Belt Lifts and Tunnels", "Drills, Crushers, Smelters, Presses, Wire Mills, Assemblers and More", "Tier Up Your Core to Unlock New Machines, Then Build the Star Spire", "Pow … [truncated]
+       tips: ["Use Deposit Seeds to grow Deposits that never run out", "Crush ore into Grit before you smelt it and you'll get twice the bars", "Teach a Sorting Gate an item and it'll send that item down its own belt", "A Power Coupler makes Crushers, Smelters and Alloy Kilns twic … [truncated]
+       similarGames: ["survivalFactory", "skyblock", "oneBlock", "classic_survival"],
```

#### 3. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/176.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/176.js#L15-L16)

```diff
-         question: "What is Bloxd Fishing?",
-         answer: "A relaxing fishing game. You explore 5 islands, win catch minigames to reel in fish and fill your Bestiary with rare species."
+         question: "What is Build a Factory 2 on Bloxd?",
+         answer: "An idle factory builder. You build machines on your own floating island, connect them with conveyor belts and let them make everything for you."
```

#### 4. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/176.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/176.js#L18-L19)

```diff
-         question: "How many fish are in Bloxd Fishing?",
-         answer: "114 fish species, spread across 5 islands, in 7 rarities from Common to Mythic."
+         question: "Is Build a Factory 2 an idle factory game?",
+         answer: "Partly. Once it's set up, your factory runs by itself while you explore the Wilds or plan your next build. It pauses while you're offline and carries on where it stopped when you come back."
```

#### 5. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/176.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/176.js#L21-L22)

```diff
-         question: "How do I catch Mythic fish in Bloxd Fishing?",
-         answer: "Use a better rod, drink a Luck Potion and fish during luck events. Then cross your fingers!"
+         question: "How do I unlock new machines in Build a Factory 2?",
+         answer: "Tier up your Core by giving it the parts it asks for, like Motors and, later on, Logic Boards. Every new tier unlocks more machines and items."
```

#### 6. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/176.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/176.js#L24-L25)

```diff
-         question: "Where can I get better rods?",
-         answer: "Sell your fish for coins, then buy new rods from the rod shops on the islands."
+         question: "What's the best way to power my factory?",
+         answer: "You've got a few options. Burn Coal or Charcoal in a Generator, build Solar Panels (they keep running at night at half power), or run Volt Engines on Voltite Cells for loads of power. Add Charge Vaults to store more."
```

#### 7. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/176.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/176.js#L27-L28)

```diff
-         question: "How do I travel between islands?",
-         answer: "You start on Sunhaven. Spend coins to unlock Gloomtide, Eldermire, Embertide and Frostfell, and once an island's unlocked, use the shop to travel there."
+         question: "What are the Wilds?",
+         answer: "The land below your island. Drop down to mine rare ore, loot ruin chests for Salvage, explore the Old Works and break fallen comets for Comet Cores."
```

#### 8. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/176.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/176.js#L30-L31)

```diff
-         question: "What are the catch minigames?",
-         answer: "There are three: a timed click, a progress bar and a gravity bar. Each fish uses one of them."
+         question: "Can friends help build my factory?",
+         answer: "Definitely. Invite friends to a shared co-op island, or use /visit to have a look around other players' islands."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/177.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/177.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046)

#### 1. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/177.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/177.js#L4)

```diff
-   9037: (DD, zD, wD) => {
+   9157: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/177.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/177.js#L9-L13)

```diff
-       whatIs: ["Sharp aim and quick feet are what separate top frag from instant respawn. Bloxd Cube Warfare is a fast, free block FPS where the firefights don't stop. You can play Free-For-All, Team Deathmatch or Gun Game, and you'll unlock over 15 guns along the way. If you'd r … [truncated]
-       howToPlay: ["Join a match and vote on the map. In Free-For-All it's every player for themselves. Team Deathmatch puts you on a side, and your team has to outscore the other one. Rounds last 10 minutes. Get taken down and you'll respawn with 8 seconds of invincibility, thoug … [truncated]
-       features: ["Free-For-All, Team Deathmatch and Gun Game", "Over 15 Guns, Including the AK-47, AWP, Deagle, Striker-12 and GPMG", "Killstreak Rewards Across 3 Tiers", "Place Blocks for Cover with Killstreak Rewards", "Match Modifiers: Collect Diamonds and Explosives", "Maps I … [truncated]
-       tips: ["Keep moving. Standing still makes you an easy target", "Go for headshots, especially once you've got the Goodaimer killstreak", "Use those 8 seconds of respawn invincibility to get back into position", "Stay alive to keep your killstreak going, because it resets whe … [truncated]
-       similarGames: ["frontline", "classic_survivalGuns", "infection", "skywars"],
+       whatIs: ["Build a home, earn some gold and take life at your own pace. Bloxd Greenville is a chill social sandbox and life sim set in a laid-back town. You work jobs, play mini-games and hang out with other players, and there's no rush to do any of it."],
+       howToPlay: ["Press B to pick your starting house, then take the portal to the Town Square and start earning gold. Choose a job. You could help customers at the Market, smash blocks and buildings in Demolition, dig for minerals in Mining, or try Woodcutting and Farming. Jobs … [truncated]
+       features: ["Unlock and Switch Between Houses and Plots", "Build Your Own House on an Empty Plot", "5 Jobs to Level Up: Market, Demolition, Mining, Woodcutting and Farming", "PvP Arena and Spleef Mini-Games", "Unlock Fast Travel to Get Around Quickly", "Host Parties and Choo … [truncated]
+       tips: ["Rest in your bed when your mood drops. Low mood means lower earnings.", "A better bed means bigger earnings, so upgrade it when you can", "Sell the items you collect in the shop for extra gold", "In Mining, head back up to sell when your backpack's full", "Some mine … [truncated]
+       similarGames: ["plots", "classic_creative", "fishing", "classic"],
```

#### 3. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/177.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/177.js#L15-L16)

```diff
-         question: "What is Cube Warfare?",
-         answer: "A fast block shooter with 10-minute rounds, killstreak rewards and over 15 guns to unlock."
+         question: "What is Bloxd Greenville?",
+         answer: "A town life sim where you build a home, earn gold from jobs and play mini-games with other players."
```

#### 4. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/177.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/177.js#L18-L19)

```diff
-         question: "What modes are in Cube Warfare?",
-         answer: "Free-For-All, Team Deathmatch and Gun Game. You'll be in Free-For-All by default."
+         question: "How do I earn gold in Greenville?",
+         answer: "Work jobs like Market, Demolition, Mining, Woodcutting and Farming, eliminate players in the Arena and Spleef, and sell what you collect. Keep your mood up as well, because low mood cuts your earnings."
```

#### 5. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/177.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/177.js#L21-L22)

```diff
-         question: "How does team deathmatch work in Cube Warfare?",
-         answer: "Pick Team Deathmatch and work with your team to outscore the other side before the 10-minute round is up."
+         question: "Can I build my own house in Greenville?",
+         answer: "Yes! Pick one of the ready-made houses in the shop, or unlock an Empty Plot and build from scratch."
```

#### 6. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/177.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/177.js#L24-L25)

```diff
-         question: "What is Gun Game in Bloxd Cube Warfare?",
-         answer: "It's a mode with its own queue. Each elimination upgrades your weapon, and a final takedown with the sword wins it."
+         question: "How do I change my house in Bloxd Greenville?",
+         answer: "Unlock new houses in the Houses section of the shop, then switch to whichever one you like."
```

#### 7. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/177.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/177.js#L27-L28)

```diff
-         question: "How do I unlock new guns in Cube Warfare?",
-         answer: "Through the shop. Once they're unlocked you can take them into Free-For-All or Team Deathmatch, and Gun Game lets you try the lot."
+         question: "Can my friends visit my house?",
+         answer: "Sure. Turn on Allow Entry, add friends to your whitelist, or host a party to invite everyone over. You also get to choose who's allowed to edit your home."
```

#### 8. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L30-L43` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/177.js#L30-L31) · [Before (L30-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/177.js#L30-L43)

```diff
-         question: "How many guns are in Cube Warfare?",
-         answer: "Over 15. That includes the AK-47, AWP, M16, MP40, SKAR, Deagle and Striker-12."
-       }, {
-         question: "What are killstreaks in Cube Warfare?",
-         answer: "Rewards for taking down opponents without being eliminated, like Healthup, Hitem, Speedy and Autoblocks. There are 3 tiers, and your streak resets when you go down."
-       }, {
-         question: "What is Collect Diamonds?",
-         answer: "A match modifier for Free-For-All and Team Deathmatch. You need 30 diamonds to win in FFA, or 100 as a team. When someone's taken down they drop all their diamonds, so you can steal theirs. Shoot the diamonds placed around the map and they'll drop too. Those resp … [truncated]
-       }, {
-         question: "What is the Explosives modifier?",
-         answer: "You keep getting explosives all match, and every takedown gives you more."
-       }, {
-         question: "What maps are in Cube Warfare?",
-         answer: "Snowbase, Sienna and Cabins, among others. You get to vote for the next one."
+         question: "Which mini-games are in Greenville?",
+         answer: "Spleef, where you try to make every other player fall, and the Arena, where you battle other players in PvP. Both pay out gold."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/178.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/178.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2)

#### 1. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/178.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/178.js#L4)

```diff
-   9042: (DD, zD, wD) => {
+   9162: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/178.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/178.js#L9-L13)

```diff
-       whatIs: ["Capture the points, hold the line, win the fight. Bloxd Frontline is a 12v12 FPS where Red and Blue go head to head in fast domination rounds. It's free to play online and there's nothing to install. Gear up at the Armorer, pick one of 17 kits, jump in a vehicle a … [truncated]
-       howToPlay: ["You'll join Red or Blue and spawn at your base. Head to the Armorer to choose a kit, then get out there and capture the lettered points on the map. Every point you hold earns your team tickets. First team to 100 tickets takes the round. There's a timer as well, … [truncated]
-       features: ["Domination Rounds: Capture Points and Race to 100 Tickets", "17 Unique Kits, Including Combat Medic, Ninja, Juggernaut, Wrecker and Marksman", "Vehicles to Drive into Battle", "Quartermaster Buffs: Fleet Footed, Rapid Deploy, Fast Hands and Sure Grip", "Shielded … [truncated]
-       tips: ["Capture points together and hold them so your tickets keep climbing", "Try a few kits at the Armorer until you find one that fits how you play", "Play Combat Medic to keep your team in the fight", "Buy buffs early. They stop selling in the last minute of a round", " … [truncated]
-       similarGames: ["shooting", "pirates", "bedwars", "skywars"],
+       whatIs: ["A string of unique islands, a mysterious land and 114 fish just waiting to be caught. Bloxd Fishing is a relaxing fishing simulator where you explore, catch fish and slowly uncover the secrets of the islands. Take it at your own pace. It's free, there's nothing to … [truncated]
+       howToPlay: ["Cast your line and wait for a bite. When something bites, a catch minigame kicks in. Some fish need a well-timed click, while others use a progress bar or a gravity bar. Win the minigame and the fish is yours. Every fish has its own weight and rarity, going fro … [truncated]
+       features: ["5 Islands and Lots of Fishing Spots to Explore", "114 Fish Species to Catch", "7 Rarities, from Common to Mythic", "3 Different Catch Minigames", "16 Fishing Rods, from the Rusty Rod to the Mythic Rod", "Boats, plus Luck Potions in Four Strengths", "A Bestiary t … [truncated]
+       tips: ["Sell your early catches and save up for a better rod", "Check the rod shops on each island for new rods", "Some spots don't allow every rod, so check before you cast", "Drink a Luck Potion before you fish if you're after rare catches", "Wait untill a luck event to g … [truncated]
+       similarGames: ["greenville", "skyblock", "oneBlock", "classic"],
```

#### 3. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/178.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/178.js#L15-L16)

```diff
-         question: "What is Bloxd Frontline?",
-         answer: "A 12v12 team shooter on Bloxd.io. You capture points, pick kits and drive vehicles to win domination rounds."
+         question: "What is Bloxd Fishing?",
+         answer: "A relaxing fishing game. You explore 5 islands, win catch minigames to reel in fish and fill your Bestiary with rare species."
```

#### 4. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/178.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/178.js#L18-L19)

```diff
-         question: "How does a team win in Bloxd Frontline?",
-         answer: "By holding points to earn tickets. The first team to reach 100 tickets wins the round."
+         question: "How many fish are in Bloxd Fishing?",
+         answer: "114 fish species, spread across 5 islands, in 7 rarities from Common to Mythic."
```

#### 5. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/178.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/178.js#L21-L22)

```diff
-         question: "What do kits do in Bloxd Frontline?",
-         answer: "They decide your weapons and abilities. Combat Medic brings strong healing, the Ninja has smoke grenades and the Juggernaut carries a belt-fed GPMG."
+         question: "How do I catch Mythic fish in Bloxd Fishing?",
+         answer: "Use a better rod, drink a Luck Potion and fish during luck events. Then cross your fingers!"
```

#### 6. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/178.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/178.js#L24-L25)

```diff
-         question: "How do I unlock new kits?",
-         answer: "Spend gold on a mystery kit draw. Draw one you already own and you'll get gems instead, which you can use to buy a specific locked kit."
+         question: "Where can I get better rods?",
+         answer: "Sell your fish for coins, then buy new rods from the rod shops on the islands."
```

#### 7. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/178.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/178.js#L27-L28)

```diff
-         question: "Does Bloxd Frontline have vehicles?",
-         answer: "Yep. They spawn at each base and around the map. Guns and explosives can destroy them, so drive carefully."
+         question: "How do I travel between islands?",
+         answer: "You start on Sunhaven. Spend coins to unlock Gloomtide, Eldermire, Embertide and Frostfell, and once an island's unlocked, use the shop to travel there."
```

#### 8. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L30-L34` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/178.js#L30-L31) · [Before (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/178.js#L30-L34)

```diff
-         question: "How is Frontline different from Cube Warfare?",
-         answer: "Frontline is 12v12 objective play with points, kits and vehicles. Cube Warfare is quicker Free-For-All, Team Deathmatch and Gun Game fights where killstreaks matter most."
-       }, {
-         question: "Can I squad up with friends in Bloxd Frontline?",
-         answer: "Yes. Party up with your friends and you'll play together as a squad."
+         question: "What are the catch minigames?",
+         answer: "There are three: a timed click, a progress bar and a gravity bar. Each fish uses one of them."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/179.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/179.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14)

#### 1. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/179.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/179.js#L4)

```diff
-   9044: (DD, zD, wD) => {
+   9165: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/179.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/179.js#L9-L13)

```diff
-       whatIs: ["Set sail for messy sea fights where good timing and teamwork decide who rules the waves. In Bloxd Pirates your crew fires cannons, grabs loot and races to destroy the other team's spawn blocks. It doesn't cost a thing and it loads straight in your browser."],
-       howToPlay: ["You'll join a team, usually Red or Blue, though Classic (4 Teams) and Treasure Island have 4. Each team has spawn blocks to protect. Break the enemy's spawn blocks and they can't respawn any more, then use your Compass to hunt down the rest of their crew. Last  … [truncated]
-       features: ["Team Cannon Battles on the High Seas", "Destroy Spawn Blocks to Stop the Enemy Respawning", "26 Kits, from Swashbuckler and Pegleg to Ghost and Portalmaster", "Perks like Bridger, Leech and Inferno", "11 Maps, Including 4-Team Classic and Treasure Island", "Loot … [truncated]
-       tips: ["Fire your cannons early, then get moving while they reload", "Break the enemy's cannons and they can't fire back for a while", "Guard your spawn blocks. Once they're all gone, you can't respawn", "Switch your Compass between Nearest Player and Nearest Spawn", "Don't … [truncated]
-       similarGames: ["bedwars", "skywars", "shooting", "luckyBedwars"],
+       whatIs: ["Sharp aim and quick feet are what separate top frag from instant respawn. Bloxd Cube Warfare is a fast, free block FPS where the firefights don't stop. You can play Free-For-All, Team Deathmatch or Gun Game, and you'll unlock over 15 guns along the way. If you'd r … [truncated]
+       howToPlay: ["Join a match and vote on the map. In Free-For-All it's every player for themselves. Team Deathmatch puts you on a side, and your team has to outscore the other one. Rounds last 10 minutes. Get taken down and you'll respawn with 8 seconds of invincibility, thoug … [truncated]
+       features: ["Free-For-All, Team Deathmatch and Gun Game", "Over 15 Guns, Including the AK-47, AWP, Deagle, Striker-12 and GPMG", "Killstreak Rewards Across 3 Tiers", "Place Blocks for Cover with Killstreak Rewards", "Match Modifiers: Collect Diamonds and Explosives", "Maps I … [truncated]
+       tips: ["Keep moving. Standing still makes you an easy target", "Go for headshots, especially once you've got the Goodaimer killstreak", "Use those 8 seconds of respawn invincibility to get back into position", "Stay alive to keep your killstreak going, because it resets whe … [truncated]
+       similarGames: ["frontline", "classic_survivalGuns", "infection", "skywars"],
```

#### 3. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/179.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/179.js#L15-L16)

```diff
-         question: "What is Bloxd Pirates?",
-         answer: "A team battle mode where pirate crews clash in chaotic sea fights, with cannons, kits and loot."
+         question: "What is Cube Warfare?",
+         answer: "A fast block shooter with 10-minute rounds, killstreak rewards and over 15 guns to unlock."
```

#### 4. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/179.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/179.js#L18-L19)

```diff
-         question: "How do you win in Bloxd Pirates?",
-         answer: "Destroy every one of the enemy team's spawn blocks so they can't respawn, then take down whoever's left. The last team standing wins."
+         question: "What modes are in Cube Warfare?",
+         answer: "Free-For-All, Team Deathmatch and Gun Game. You'll be in Free-For-All by default."
```

#### 5. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/179.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/179.js#L21-L22)

```diff
-         question: "How do cannons work in Bloxd Pirates?",
-         answer: "Click your team's coloured glass to fire. Each cannon takes 15 seconds to reload, and you can break enemy cannons to knock them out for a while."
+         question: "How does team deathmatch work in Cube Warfare?",
+         answer: "Pick Team Deathmatch and work with your team to outscore the other side before the 10-minute round is up."
```

#### 6. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/179.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/179.js#L24-L25)

```diff
-         question: "Which kits can I pick in Bloxd Pirates?",
-         answer: "There are 26, each with its own items or powers. The Scout can double jump, the Scoundrel can go invisible and the Portalmaster makes portals. You pick one in the lobby and unlock more with Gold or gems."
+         question: "What is Gun Game in Bloxd Cube Warfare?",
+         answer: "It's a mode with its own queue. Each elimination upgrades your weapon, and a final takedown with the sword wins it."
```

#### 7. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/179.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/179.js#L27-L28)

```diff
-         question: "How do I get Gold in Bloxd Pirates?",
-         answer: "A win is worth 25 Gold. You also get 5 Gold for every spawn block you break and every final kill."
+         question: "How do I unlock new guns in Cube Warfare?",
+         answer: "Through the shop. Once they're unlocked you can take them into Free-For-All or Team Deathmatch, and Gun Game lets you try the lot."
```

#### 8. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L30-L31` → after: `L30-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L30-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/179.js#L30-L43) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/179.js#L30-L31)

```diff
-         question: "What maps are in Bloxd Pirates?",
-         answer: "There are 11: Classic, Classic (4 Teams), Scurvy Shore, Cutthroat Cliffs, Treasure Island, Double Trouble, Stowaway Seas, Woesome Waters, Cannon Storm, Scorched Sails and Dynasty Docks."
+         question: "How many guns are in Cube Warfare?",
+         answer: "Over 15. That includes the AK-47, AWP, M16, MP40, SKAR, Deagle and Striker-12."
+       }, {
+         question: "What are killstreaks in Cube Warfare?",
+         answer: "Rewards for taking down opponents without being eliminated, like Healthup, Hitem, Speedy and Autoblocks. There are 3 tiers, and your streak resets when you go down."
+       }, {
+         question: "What is Collect Diamonds?",
+         answer: "A match modifier for Free-For-All and Team Deathmatch. You need 30 diamonds to win in FFA, or 100 as a team. When someone's taken down they drop all their diamonds, so you can steal theirs. Shoot the diamonds placed around the map and they'll drop too. Those resp … [truncated]
+       }, {
+         question: "What is the Explosives modifier?",
+         answer: "You keep getting explosives all match, and every takedown gives you more."
+       }, {
+         question: "What maps are in Cube Warfare?",
+         answer: "Snowbase, Sienna and Cabins, among others. You get to vote for the next one."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/180.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/180.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19)

#### 1. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/180.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/180.js#L4)

```diff
-   9047: (DD, zD, wD) => {
+   9167: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/180.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/180.js#L9-L13)

```diff
-       whatIs: ["Don't get infected... or do. Bloxd Infection is a humans vs zombies game where the virus spreads fast and anyone could end up against you. As a human you're racing through obstacles to escape. As a zombie you're part of the horde trying to stop them getting away." … [truncated]
-       howToPlay: ["Everyone starts out human. After 15 seconds, 3 players turn into the first zombies. Humans follow the arrows and get through the obstacles before the zombies catch up. If a zombie takes you down, that's it, you're infected and on the zombie team now.", "Humans  … [truncated]
-       features: ["Up to 18 Players per Match", "Play as Humans or Zombies", "9 Human Kits, Including Veteran, Medic, Scout and Bombardier", "5 Zombie Kits, Including Sprinter, Tank, Puker and Bomber", "Unlock New Sections and Buy Guns with Points", "5 Maps: Hospital, Bunker, Subw … [truncated]
-       tips: ["Stick together as humans. Zombies find it much harder to pick you off", "Shoot the diamonds for extra points. They'll come back after a while", "Grab a gun at a gun station as soon as you can afford one", "The Medic kit lets you heal yourself and your teammates", "P … [truncated]
-       similarGames: ["murderMystery", "containmentBreach", "shooting", "hideseek"],
+       whatIs: ["Capture the points, hold the line, win the fight. Bloxd Frontline is a 12v12 FPS where Red and Blue go head to head in fast domination rounds. It's free to play online and there's nothing to install. Gear up at the Armorer, pick one of 17 kits, jump in a vehicle a … [truncated]
+       howToPlay: ["You'll join Red or Blue and spawn at your base. Head to the Armorer to choose a kit, then get out there and capture the lettered points on the map. Every point you hold earns your team tickets. First team to 100 tickets takes the round. There's a timer as well, … [truncated]
+       features: ["Domination Rounds: Capture Points and Race to 100 Tickets", "17 Unique Kits, Including Combat Medic, Ninja, Juggernaut, Wrecker and Marksman", "Vehicles to Drive into Battle", "Quartermaster Buffs: Fleet Footed, Rapid Deploy, Fast Hands and Sure Grip", "Shielded … [truncated]
+       tips: ["Capture points together and hold them so your tickets keep climbing", "Try a few kits at the Armorer until you find one that fits how you play", "Play Combat Medic to keep your team in the fight", "Buy buffs early. They stop selling in the last minute of a round", " … [truncated]
+       similarGames: ["shooting", "pirates", "bedwars", "skywars"],
```

#### 3. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/180.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/180.js#L15-L16)

```diff
-         question: "What is Bloxd Infection?",
-         answer: "A humans vs zombies mode for up to 18 players. Humans try to escape through maps full of obstacles, and zombies try to infect everyone before they do."
+         question: "What is Bloxd Frontline?",
+         answer: "A 12v12 team shooter on Bloxd.io. You capture points, pick kits and drive vehicles to win domination rounds."
```

#### 4. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/180.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/180.js#L18-L19)

```diff
-         question: "How does the infection spread in Bloxd Infection?",
-         answer: "Humans follow the arrows and get past the obstacles while zombies chase them. Anyone a zombie takes down becomes a zombie too."
+         question: "How does a team win in Bloxd Frontline?",
+         answer: "By holding points to earn tickets. The first team to reach 100 tickets wins the round."
```

#### 5. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/180.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/180.js#L21-L22)

```diff
-         question: "How do humans win?",
-         answer: "Get through all the obstacles and escape before you're infected."
+         question: "What do kits do in Bloxd Frontline?",
+         answer: "They decide your weapons and abilities. Combat Medic brings strong healing, the Ninja has smoke grenades and the Juggernaut carries a belt-fed GPMG."
```

#### 6. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/180.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/180.js#L24-L25)

```diff
-         question: "How do zombies win?",
-         answer: "By infecting every human before they escape."
+         question: "How do I unlock new kits?",
+         answer: "Spend gold on a mystery kit draw. Draw one you already own and you'll get gems instead, which you can use to buy a specific locked kit."
```

#### 7. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/180.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/180.js#L27-L28)

```diff
-         question: "How are points earned?",
-         answer: "Humans get 100 points for taking down a zombie and 25 for an assist, plus extra for shooting diamonds."
+         question: "Does Bloxd Frontline have vehicles?",
+         answer: "Yep. They spawn at each base and around the map. Guns and explosives can destroy them, so drive carefully."
```

#### 8. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/180.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/180.js#L30-L31)

```diff
-         question: "What kits are in Bloxd Infection?",
-         answer: "Humans can pick kits like Veteran, who starts with an AK-47, or Scout, who has a sniper rifle. On the zombie side there's Puker, who can puke acid, and Tank, who has more health. Win awards to earn gold for the kit shop."
+         question: "How is Frontline different from Cube Warfare?",
+         answer: "Frontline is 12v12 objective play with points, kits and vehicles. Cube Warfare is quicker Free-For-All, Team Deathmatch and Gun Game fights where killstreaks matter most."
```

#### 9. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/180.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/180.js#L33-L34)

```diff
-         question: "What's the player limit in Infection?",
-         answer: "18 players per match."
+         question: "Can I squad up with friends in Bloxd Frontline?",
+         answer: "Yes. Party up with your friends and you'll play together as a squad."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/181.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/181.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8)

#### 1. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/181.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/181.js#L4)

```diff
-   9055: (DD, zD, wD) => {
+   9172: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/181.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/181.js#L9-L13)

```diff
-       whatIs: ["Trust no one. In Bloxd Murder Mystery friends go quiet, roles stay secret and every round turns into a guessing game full of twists and close calls. It's a social deduction game for up to 12 players. Can you work out who the Murderer is before it's too late?"],
-       howToPlay: ["When a round starts, everyone gets a secret role. Most of you will be Innocents, and your job is simply to stay alive as long as you can. One player is the Detective and gets a gun to find and stop the Murderer. And one player is the Murderer. They get their we … [truncated]
-       features: ["Up to 12 Players per Round", "Three Secret Roles: Innocent, Detective and Murderer", "Collect Moonstone to Earn a Gun", "4 Maps That Change Every Round: Mansion, Laboratory, Dinosaur and Water Park", "Map Secrets like Trapdoors, Poisoned Water, Reactor Doors and … [truncated]
-       tips: ["As an Innocent, keep moving and pick up Moonstone whenever you can", "Watch how people act. The Murderer will be trying to blend in", "As the Detective, only shoot when you're sure", "If the Detective goes down, grab that dropped gun", "As the Murderer, catch player … [truncated]
-       similarGames: ["hideseek", "infection", "horrorHotel", "ninetyNineNights"],
+       whatIs: ["Set sail for messy sea fights where good timing and teamwork decide who rules the waves. In Bloxd Pirates your crew fires cannons, grabs loot and races to destroy the other team's spawn blocks. It doesn't cost a thing and it loads straight in your browser."],
+       howToPlay: ["You'll join a team, usually Red or Blue, though Classic (4 Teams) and Treasure Island have 4. Each team has spawn blocks to protect. Break the enemy's spawn blocks and they can't respawn any more, then use your Compass to hunt down the rest of their crew. Last  … [truncated]
+       features: ["Team Cannon Battles on the High Seas", "Destroy Spawn Blocks to Stop the Enemy Respawning", "26 Kits, from Swashbuckler and Pegleg to Ghost and Portalmaster", "Perks like Bridger, Leech and Inferno", "11 Maps, Including 4-Team Classic and Treasure Island", "Loot … [truncated]
+       tips: ["Fire your cannons early, then get moving while they reload", "Break the enemy's cannons and they can't fire back for a while", "Guard your spawn blocks. Once they're all gone, you can't respawn", "Switch your Compass between Nearest Player and Nearest Spawn", "Don't … [truncated]
+       similarGames: ["bedwars", "skywars", "shooting", "luckyBedwars"],
```

#### 3. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/181.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/181.js#L15-L16)

```diff
-         question: "What is Bloxd Murder Mystery?",
-         answer: "A social deduction mode. One player is secretly the Murderer, one is the Detective, and everyone else tries to survive and work out who the Murderer is."
+         question: "What is Bloxd Pirates?",
+         answer: "A team battle mode where pirate crews clash in chaotic sea fights, with cannons, kits and loot."
```

#### 4. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/181.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/181.js#L18-L19)

```diff
-         question: "What are the roles in Murder Mystery?",
-         answer: "Innocents try to stay alive. The Detective tries to find and stop the Murderer. The Murderer tries to take out every other player."
+         question: "How do you win in Bloxd Pirates?",
+         answer: "Destroy every one of the enemy team's spawn blocks so they can't respawn, then take down whoever's left. The last team standing wins."
```

#### 5. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/181.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/181.js#L21-L22)

```diff
-         question: "Who wins a round of Murder Mystery?",
-         answer: "If the Murderer takes out all the Innocents, they win. Everyone else wins by stopping the Murderer or surviving until the 4-minute timer runs out."
+         question: "How do cannons work in Bloxd Pirates?",
+         answer: "Click your team's coloured glass to fire. Each cannon takes 15 seconds to reload, and you can break enemy cannons to knock them out for a while."
```

#### 6. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/181.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/181.js#L24-L25)

```diff
-         question: "How do I get a gun?",
-         answer: "Collect 10 Moonstone, or pick up the Detective's gun if it's been dropped. On the Dinosaur map the dino might hand you one too."
+         question: "Which kits can I pick in Bloxd Pirates?",
+         answer: "There are 26, each with its own items or powers. The Scout can double jump, the Scoundrel can go invisible and the Portalmaster makes portals. You pick one in the lobby and unlock more with Gold or gems."
```

#### 7. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/181.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/181.js#L27-L28)

```diff
-         question: "How long is a round?",
-         answer: "4 minutes."
+         question: "How do I get Gold in Bloxd Pirates?",
+         answer: "A win is worth 25 Gold. You also get 5 Gold for every spawn block you break and every final kill."
```

#### 8. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L30-L37` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/181.js#L30-L31) · [Before (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/181.js#L30-L37)

```diff
-         question: "How many people do you need to play Murder Mystery?",
-         answer: "You need at least 2 to start, and a round can hold up to 12."
-       }, {
-         question: "Can I play Murder Mystery with friends?",
-         answer: "Yes. Jump into the same game and see which of you spots the Murderer first."
-       }, {
-         question: "How do I earn gold?",
-         answer: "Survive, collect Moonstone, stop the Murderer or win as the Murderer. Rewards only kick in when there are at least 5 players in the game."
+         question: "What maps are in Bloxd Pirates?",
+         answer: "There are 11: Classic, Classic (4 Teams), Scurvy Shore, Cutthroat Cliffs, Treasure Island, Double Trouble, Stowaway Seas, Woesome Waters, Cannon Storm, Scorched Sails and Dynasty Docks."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/182.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/182.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa)

#### 1. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/182.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/182.js#L4)

```diff
-   9060: (DD, zD, wD) => {
+   9179: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/182.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/182.js#L9-L13)

```diff
-       whatIs: ["Can your team last 99 nights of darkness? Bloxd Escape the Forest is a co-op horror survival game for teams of up to 6, and you can jump in for free straight from your browser. Make camp, keep the fire going, search for the missing children and watch out for whate … [truncated]
-       howToPlay: ["Your team starts around the campfire. During the day you'll gather wood, hunt Pigs and Cows for meat and explore the landmarks dotted around the forest. Throw fuel into the fire to level it up. Each new level unlocks crafting recipes and helps you find the lost … [truncated]
-       features: ["Co-op with Up to 6 Players", "Survive 99 Nights, Then See How Much Longer You Can Last", "Level Up the Campfire to Unlock New Recipes", "Rescue the Lost Kids and Send Them Home", "Quests from the Travelling Trader and Maverick the Wizard", "Explore Landmarks lik … [truncated]
-       tips: ["Keep the fire fuelled. It's your best protection at night", "Cook Raw Morsels and Steak on the fire before you eat them", 'Get back to camp as soon as you see "Night Approaches"', "Bring Monster Hearts to the fire to reach the higher levels", "Place your Radar near  … [truncated]
-       similarGames: ["horrorHotel", "containmentBreach", "classic_survivalDayNight", "backrooms"],
+       whatIs: ["Don't get infected... or do. Bloxd Infection is a humans vs zombies game where the virus spreads fast and anyone could end up against you. As a human you're racing through obstacles to escape. As a zombie you're part of the horde trying to stop them getting away." … [truncated]
+       howToPlay: ["Everyone starts out human. After 15 seconds, 3 players turn into the first zombies. Humans follow the arrows and get through the obstacles before the zombies catch up. If a zombie takes you down, that's it, you're infected and on the zombie team now.", "Humans  … [truncated]
+       features: ["Up to 18 Players per Match", "Play as Humans or Zombies", "9 Human Kits, Including Veteran, Medic, Scout and Bombardier", "5 Zombie Kits, Including Sprinter, Tank, Puker and Bomber", "Unlock New Sections and Buy Guns with Points", "5 Maps: Hospital, Bunker, Subw … [truncated]
+       tips: ["Stick together as humans. Zombies find it much harder to pick you off", "Shoot the diamonds for extra points. They'll come back after a while", "Grab a gun at a gun station as soon as you can afford one", "The Medic kit lets you heal yourself and your teammates", "P … [truncated]
+       similarGames: ["murderMystery", "containmentBreach", "shooting", "hideseek"],
```

#### 3. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/182.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/182.js#L15-L16)

```diff
-         question: "What is Bloxd Escape the Forest?",
-         answer: "A co-op horror survival mode for up to 6 players. You team up, survive 99 nights, rescue the lost kids and send them home through the portal."
+         question: "What is Bloxd Infection?",
+         answer: "A humans vs zombies mode for up to 18 players. Humans try to escape through maps full of obstacles, and zombies try to infect everyone before they do."
```

#### 4. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/182.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/182.js#L18-L19)

```diff
-         question: "In Escape the Forest, how do you survive 99 nights?",
-         answer: "Keep the campfire fuelled and stay close to it at night, because monsters are scared of fire. Level the fire up, cook your food and stick with your team."
+         question: "How does the infection spread in Bloxd Infection?",
+         answer: "Humans follow the arrows and get past the obstacles while zombies chase them. Anyone a zombie takes down becomes a zombie too."
```

#### 5. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/182.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/182.js#L21-L22)

```diff
-         question: "How many players can team up in Escape the Forest?",
-         answer: "Up to 6 in each game, and others can join to spectate."
+         question: "How do humans win?",
+         answer: "Get through all the obstacles and escape before you're infected."
```

#### 6. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/182.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/182.js#L24-L25)

```diff
-         question: "Where are the lost kids?",
-         answer: "Out in the forest. Level up your fire to find more of them, then go searching. Every kid you find adds to your day count."
+         question: "How do zombies win?",
+         answer: "By infecting every human before they escape."
```

#### 7. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/182.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/182.js#L27-L28)

```diff
-         question: "What happens if you go down?",
-         answer: "A teammate can revive you with a Revive Splash Potion. You can fire a Call for Help flare too, and the Respawn Pod can bring back players who die."
+         question: "How are points earned?",
+         answer: "Humans get 100 points for taking down a zombie and 25 for an assist, plus extra for shooting diamonds."
```

#### 8. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/182.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/182.js#L30-L31)

```diff
-         question: "How do you escape the forest?",
-         answer: "Follow Maverick the wizard's guidance to the frozen forest, collect the portal keystones, open the portal and send the kids home."
+         question: "What kits are in Bloxd Infection?",
+         answer: "Humans can pick kits like Veteran, who starts with an AK-47, or Scout, who has a sniper rifle. On the zombie side there's Puker, who can puke acid, and Tank, who has more health. Win awards to earn gold for the kit shop."
```

#### 9. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/182.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/182.js#L33-L34)

```diff
-         question: "Is there anything after night 99?",
-         answer: "You've beaten the challenge by then, but how much longer can you survive? Your best number of nights survived shows on your nametag."
+         question: "What's the player limit in Infection?",
+         answer: "18 players per match."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/183.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/183.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad)

#### 1. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/183.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/183.js#L4)

```diff
-   9066: (DD, zD, wD) => {
+   9187: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/183.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/183.js#L9-L13)

```diff
-       whatIs: ["Something's broken loose in an abandoned research lab, and your squad has been sent in to deal with it. Bloxd Containment Breach is a co-op PvE survival horror shooter. You fight through the infested halls, contain the anomaly before the breach spreads, and then t … [truncated]
-       howToPlay: ["Get your squad together in the lobby and visit the Loadout NPC. That's where you choose a primary gun, a secondary, throwables, healing items, armour and a perk. Then step onto a queue pad: Normal takes up to 6 players and Hard takes up to 4. You need at least  … [truncated]
-       features: ["Normal (Up to 6 Players) and Hard (Up to 4 Players) Difficulties", "A New Chain of Lab Rooms Every Run", "9 Anomaly Bosses to Find and Contain", "Encounters That Adapt as You Play", "Loadouts with Guns, Throwables, Healing, Armour and Perks", "Upgrade Your Gear  … [truncated]
-       tips: ["Stick with your squad. Being alone in the dark is how you go down", "Carry splash healing potions so you can revive teammates", "Open every loot chest you come across", "Turned into a ghost? Use Open Path to help your team", "Contain anomalies to earn boss parts for … [truncated]
-       similarGames: ["ninetyNineNights", "horrorHotel", "infection", "backrooms"],
+       whatIs: ["Trust no one. In Bloxd Murder Mystery friends go quiet, roles stay secret and every round turns into a guessing game full of twists and close calls. It's a social deduction game for up to 12 players. Can you work out who the Murderer is before it's too late?"],
+       howToPlay: ["When a round starts, everyone gets a secret role. Most of you will be Innocents, and your job is simply to stay alive as long as you can. One player is the Detective and gets a gun to find and stop the Murderer. And one player is the Murderer. They get their we … [truncated]
+       features: ["Up to 12 Players per Round", "Three Secret Roles: Innocent, Detective and Murderer", "Collect Moonstone to Earn a Gun", "4 Maps That Change Every Round: Mansion, Laboratory, Dinosaur and Water Park", "Map Secrets like Trapdoors, Poisoned Water, Reactor Doors and … [truncated]
+       tips: ["As an Innocent, keep moving and pick up Moonstone whenever you can", "Watch how people act. The Murderer will be trying to blend in", "As the Detective, only shoot when you're sure", "If the Detective goes down, grab that dropped gun", "As the Murderer, catch player … [truncated]
+       similarGames: ["hideseek", "infection", "horrorHotel", "ninetyNineNights"],
```

#### 3. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/183.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/183.js#L15-L16)

```diff
-         question: "What is Bloxd Containment Breach?",
-         answer: "A co-op PvE horror shooter. Your squad fights through an abandoned research lab to find and contain a dangerous anomaly."
+         question: "What is Bloxd Murder Mystery?",
+         answer: "A social deduction mode. One player is secretly the Murderer, one is the Detective, and everyone else tries to survive and work out who the Murderer is."
```

#### 4. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/183.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/183.js#L18-L19)

```diff
-         question: "How many players can play Containment Breach?",
-         answer: "Up to 6 on Normal, or up to 4 on Hard."
+         question: "What are the roles in Murder Mystery?",
+         answer: "Innocents try to stay alive. The Detective tries to find and stop the Murderer. The Murderer tries to take out every other player."
```

#### 5. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/183.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/183.js#L21-L22)

```diff
-         question: "Can I play Containment Breach solo?",
-         answer: "Not on your own, sorry. A run needs at least 2 players, so bring a friend or team up with someone in the lobby."
+         question: "Who wins a round of Murder Mystery?",
+         answer: "If the Murderer takes out all the Innocents, they win. Everyone else wins by stopping the Murderer or surviving until the 4-minute timer runs out."
```

#### 6. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/183.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/183.js#L24-L25)

```diff
-         question: "What happens when you go down in Containment Breach?",
-         answer: "You become a ghost until a teammate revives you with a splash healing potion. If everyone ends up as a ghost, the run is lost."
+         question: "How do I get a gun?",
+         answer: "Collect 10 Moonstone, or pick up the Detective's gun if it's been dropped. On the Dinosaur map the dino might hand you one too."
```

#### 7. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/183.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/183.js#L27-L28)

```diff
-         question: "How do I upgrade guns in Containment Breach?",
-         answer: "Go to the Loadout NPC and spend gold and boss parts there. Gold comes from kills, and your squad gets a boss part every time it contains an anomaly."
+         question: "How long is a round?",
+         answer: "4 minutes."
```

#### 8. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L30-L31` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/183.js#L30-L37) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/183.js#L30-L31)

```diff
-         question: "Can I choose which anomaly I fight?",
-         answer: "Yes. Buy a Locator from the Locator NPC and arm it before you deploy. It shatters after one use."
+         question: "How many people do you need to play Murder Mystery?",
+         answer: "You need at least 2 to start, and a round can hold up to 12."
+       }, {
+         question: "Can I play Murder Mystery with friends?",
+         answer: "Yes. Jump into the same game and see which of you spots the Murderer first."
+       }, {
+         question: "How do I earn gold?",
+         answer: "Survive, collect Moonstone, stop the Murderer or win as the Murderer. Rewards only kick in when there are at least 5 players in the game."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/184.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/184.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e)

#### 1. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/184.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/184.js#L4)

```diff
-   9071: (DD, zD, wD) => {
+   9194: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/184.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/184.js#L9-L13)

```diff
-       whatIs: ["You might not be the only one checking in. Bloxd Horror Hotel sends you down an infinite hallway of hotel rooms, collecting items so you can level up and decorate a room of your own. Anyone can play for free, straight from a browser tab. Just be careful what's wai … [truncated]
-       howToPlay: ["Your stay starts in a tiny room, so first things first: go and complain to the manager. The first upgrade is free. After that, upgrades cost items, beginning with a red bed you'll have to \"borrow\" from someone else's room. Head down the corridor to find what  … [truncated]
-       features: ["An Infinite Hallway of Hotel Rooms to Explore", "Forest, Mining, Maze and Buried Treasure Rooms", "Quirky Guests Who Need Your Help", "Upgrade Your Room All the Way to Level 22", "Pick from a Range of Room Colours", "Invite Friends and Control PvP, Visitors and  … [truncated]
-       tips: ["Talk to the manager first and grab your free room upgrade", "Check what your next upgrade costs, then go looking for those items in other rooms", "Help guests with their requests, like the thirsty guest in the desert room", "Use the home button on the left to fast t … [truncated]
-       similarGames: ["ninetyNineNights", "containmentBreach", "backrooms", "murderMystery"],
+       whatIs: ["Can your team last 99 nights of darkness? Bloxd Escape the Forest is a co-op horror survival game for teams of up to 6, and you can jump in for free straight from your browser. Make camp, keep the fire going, search for the missing children and watch out for whate … [truncated]
+       howToPlay: ["Your team starts around the campfire. During the day you'll gather wood, hunt Pigs and Cows for meat and explore the landmarks dotted around the forest. Throw fuel into the fire to level it up. Each new level unlocks crafting recipes and helps you find the lost … [truncated]
+       features: ["Co-op with Up to 6 Players", "Survive 99 Nights, Then See How Much Longer You Can Last", "Level Up the Campfire to Unlock New Recipes", "Rescue the Lost Kids and Send Them Home", "Quests from the Travelling Trader and Maverick the Wizard", "Explore Landmarks lik … [truncated]
+       tips: ["Keep the fire fuelled. It's your best protection at night", "Cook Raw Morsels and Steak on the fire before you eat them", 'Get back to camp as soon as you see "Night Approaches"', "Bring Monster Hearts to the fire to reach the higher levels", "Place your Radar near  … [truncated]
+       similarGames: ["horrorHotel", "containmentBreach", "classic_survivalDayNight", "backrooms"],
```

#### 3. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/184.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/184.js#L15-L16)

```diff
-         question: "What is Bloxd Horror Hotel?",
-         answer: "A spooky exploration game. You wander an endless hotel, collect items from other rooms and use them to upgrade and decorate your own."
+         question: "What is Bloxd Escape the Forest?",
+         answer: "A co-op horror survival mode for up to 6 players. You team up, survive 99 nights, rescue the lost kids and send them home through the portal."
```

#### 4. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/184.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/184.js#L18-L19)

```diff
-         question: "Does Horror Hotel really have infinite rooms?",
-         answer: "It does. The hallway just keeps going, with bedrooms, forests, mines, mazes and buried treasure rooms to find. There's even a secret room hidden somewhere."
+         question: "In Escape the Forest, how do you survive 99 nights?",
+         answer: "Keep the campfire fuelled and stay close to it at night, because monsters are scared of fire. Level the fire up, cook your food and stick with your team."
```

#### 5. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/184.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/184.js#L21-L22)

```diff
-         question: "How do I upgrade my room in Horror Hotel?",
-         answer: "Talk to the manager. The first upgrade's free, then each level costs items you find around the hotel, starting with a red bed."
+         question: "How many players can team up in Escape the Forest?",
+         answer: "Up to 6 in each game, and others can join to spectate."
```

#### 6. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/184.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/184.js#L24-L25)

```diff
-         question: "What is the max room level in Horror Hotel?",
-         answer: "Level 22. Once you hit it, your room is maxed out."
+         question: "Where are the lost kids?",
+         answer: "Out in the forest. Level up your fire to find more of them, then go searching. Every kid you find adds to your day count."
```

#### 7. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/184.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/184.js#L27-L28)

```diff
-         question: "Can friends visit my hotel room?",
-         answer: "Yes, as long as their room level is high enough. You can also choose whether to allow visitors, editors and PvP."
+         question: "What happens if you go down?",
+         answer: "A teammate can revive you with a Revive Splash Potion. You can fire a Call for Help flare too, and the Respawn Pod can bring back players who die."
```

#### 8. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L30-L31` → after: `L30-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/184.js#L30-L34) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/184.js#L30-L31)

```diff
-         question: "Is Horror Hotel scary?",
-         answer: "A bit! It's spooky, with odd guests, eerie sounds and a skinwalker lurking about. It's creepy rather than gory, and you can explore at your own pace."
+         question: "How do you escape the forest?",
+         answer: "Follow Maverick the wizard's guidance to the frozen forest, collect the portal keystones, open the portal and send the kids home."
+       }, {
+         question: "Is there anything after night 99?",
+         answer: "You've beaten the challenge by then, but how much longer can you survive? Your best number of nights survived shows on your nametag."
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/185.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/185.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072)

#### 1. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4-L7242` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/185.js#L4) · [Before (L4-L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/185.js#L4-L7242)

```diff
-   9186: (DD, zD) => {
-     zD.discordURLBuilder = function(DD) {
-       var zD;
-       const wD = (null === (zD = null === window || void 0 === window ? void 0 : window.location) || void 0 === zD ? void 0 : zD.hostname) || "localhost",
-         pD = DD.hostname.split("."),
-         sD = !DD.hostname.includes("trycloudflare.com") && !DD.hostname.includes("discordsays.com") && pD.length > 2 ? `/${pD[0]}` : "";
-       return DD.pathname.startsWith("/.proxy") ? `${DD.protocol}//${wD}${sD}${DD.pathname}${DD.search}` : `${DD.protocol}//${wD}/.proxy/colyseus${sD}${DD.pathname}${DD.search}`
-     }
-   },
-   9179: (DD, zD, wD) => {
-     var pD, sD, KD, rD, LD = wD(9100),
-       cD = wD(9183),
-       gD = wD(9158);
-     pD = new WeakMap, sD = new WeakMap, KD = new WeakMap, rD = new WeakMap, zD.Auth = class {
-       constructor(DD) {
-         this.http = DD, this.settings = {
- ... (7223 more removed lines; see GitHub link above)
+   9201: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L7244-L7784` → after: `L6-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L6-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/185.js#L6-L32) · [Before (L7244-L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/185.js#L7244-L7784)

```diff
-       __addDisposableResource: () => lD,
-       __assign: () => KD,
-       __asyncDelegator: () => VD,
-       __asyncGenerator: () => XD,
-       __asyncValues: () => PD,
-       __await: () => QD,
-       __awaiter: () => ID,
-       __classPrivateFieldGet: () => dD,
-       __classPrivateFieldIn: () => iD,
-       __classPrivateFieldSet: () => SD,
-       __createBinding: () => GD,
-       __decorate: () => LD,
-       __disposeResources: () => ND,
-       __esDecorate: () => gD,
-       __exportStar: () => hD,
-       __extends: () => sD,
- ... (525 more removed lines; see GitHub link above)
+       pageBody: () => Op
+     });
+     const Op = {
+       whatIs: ["Something's broken loose in an abandoned research lab, and your squad has been sent in to deal with it. Bloxd Containment Breach is a co-op PvE survival horror shooter. You fight through the infested halls, contain the anomaly before the breach spreads, and then t … [truncated]
+       howToPlay: ["Get your squad together in the lobby and visit the Loadout NPC. That's where you choose a primary gun, a secondary, throwables, healing items, armour and a perk. Then step onto a queue pad: Normal takes up to 6 players and Hard takes up to 4. You need at least  … [truncated]
+       features: ["Normal (Up to 6 Players) and Hard (Up to 4 Players) Difficulties", "A New Chain of Lab Rooms Every Run", "9 Anomaly Bosses to Find and Contain", "Encounters That Adapt as You Play", "Loadouts with Guns, Throwables, Healing, Armour and Perks", "Upgrade Your Gear  … [truncated]
+       tips: ["Stick with your squad. Being alone in the dark is how you go down", "Carry splash healing potions so you can revive teammates", "Open every loot chest you come across", "Turned into a ghost? Use Open Path to help your team", "Contain anomalies to earn boss parts for … [truncated]
+       similarGames: ["ninetyNineNights", "horrorHotel", "infection", "backrooms"],
+       faq: [{
+         question: "What is Bloxd Containment Breach?",
+         answer: "A co-op PvE horror shooter. Your squad fights through an abandoned research lab to find and contain a dangerous anomaly."
+       }, {
+         question: "How many players can play Containment Breach?",
+         answer: "Up to 6 on Normal, or up to 4 on Hard."
+       }, {
+         question: "Can I play Containment Breach solo?",
+ ... (11 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/186.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/186.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f)

#### 1. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/186.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/186.js#L4-L7)

```diff
-   9286: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => sD,
-       e: () => KD
+   9207: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       pageBody: () => Op
```

#### 2. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L9-L1367` → after: `L8-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L8-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/186.js#L8-L33) · [Before (L9-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/186.js#L9-L1367)

```diff
-     var pD = wD(9236);
-     const sD = "Air",
-       KD = Object.freeze(new pD.h(sD, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
-   },
-   27041: DD => {
-     DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
-   },
-   33241: DD => {
-     DD.exports = "data:model/gltf-binary;base64,Z2xURgIAAADsSwAAtDQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjM2fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlw … [truncated]
-   },
-   33245: DD => {
-     DD.exports = "data:model/gltf-binary;base64,Z2xURgIAAABkWAAACBEAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiZXh0cmFzIjp7ImJsb3hkQnVpbGRIYXNoIjoiZDk5YzM4OTQifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyNSwi … [truncated]
-   },
-   27044: DD => {
-     DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
-   },
- ... (1343 more removed lines; see GitHub link above)
+     const Op = {
+       whatIs: ["You might not be the only one checking in. Bloxd Horror Hotel sends you down an infinite hallway of hotel rooms, collecting items so you can level up and decorate a room of your own. Anyone can play for free, straight from a browser tab. Just be careful what's wai … [truncated]
+       howToPlay: ["Your stay starts in a tiny room, so first things first: go and complain to the manager. The first upgrade is free. After that, upgrades cost items, beginning with a red bed you'll have to \"borrow\" from someone else's room. Head down the corridor to find what  … [truncated]
+       features: ["An Infinite Hallway of Hotel Rooms to Explore", "Forest, Mining, Maze and Buried Treasure Rooms", "Quirky Guests Who Need Your Help", "Upgrade Your Room All the Way to Level 22", "Pick from a Range of Room Colours", "Invite Friends and Control PvP, Visitors and  … [truncated]
+       tips: ["Talk to the manager first and grab your free room upgrade", "Check what your next upgrade costs, then go looking for those items in other rooms", "Help guests with their requests, like the thirsty guest in the desert room", "Use the home button on the left to fast t … [truncated]
+       similarGames: ["ninetyNineNights", "containmentBreach", "backrooms", "murderMystery"],
+       faq: [{
+         question: "What is Bloxd Horror Hotel?",
+         answer: "A spooky exploration game. You wander an endless hotel, collect items from other rooms and use them to upgrade and decorate your own."
+       }, {
+         question: "Does Horror Hotel really have infinite rooms?",
+         answer: "It does. The hallway just keeps going, with bedrooms, forests, mines, mazes and buried treasure rooms to find. There's even a secret room hidden somewhere."
+       }, {
+         question: "How do I upgrade my room in Horror Hotel?",
+         answer: "Talk to the manager. The first upgrade's free, then each level costs items you find around the hotel, starting with a red bed."
+       }, {
+ ... (10 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/187.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/187.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3)

#### 1. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L4-L5` → after: `L4-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L4-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/187.js#L4-L304) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/187.js#L4-L5)

```diff
-   37713: (DD, zD, wD) => {
-     var pD = wD(37718);
+   9322: (pp, ip) => {
+     ip.discordURLBuilder = function(pp) {
+       var ip;
+       const cp = (null === (ip = null === window || void 0 === window ? void 0 : window.location) || void 0 === ip ? void 0 : ip.hostname) || "localhost",
+         Op = pp.hostname.split("."),
+         op = !pp.hostname.includes("trycloudflare.com") && !pp.hostname.includes("discordsays.com") && Op.length > 2 ? `/${Op[0]}` : "";
+       return pp.pathname.startsWith("/.proxy") ? `${pp.protocol}//${cp}${op}${pp.pathname}${pp.search}` : `${pp.protocol}//${cp}/.proxy/colyseus${op}${pp.pathname}${pp.search}`
+     }
+   },
+   9314: (pp, ip, cp) => {
+     var Op, op, Ip, Sp, xp = cp(9230),
+       Lp = cp(9318),
+       Yp = cp(9281);
+     Op = new WeakMap, op = new WeakMap, Ip = new WeakMap, Sp = new WeakMap, ip.Auth = class {
+       constructor(pp) {
+         this.http = pp, this.settings = {
+ ... (285 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L8-L10` → after: `L307-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L307-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/187.js#L307-L354) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/187.js#L8-L10)

```diff
-       for (var zD, wD, sD = 0, KD = DD.length, rD = 0; rD < DD.length;) {
-         for (zD = DD[rD], wD = 0; rD < KD && DD[rD] === zD;) ++rD, ++wD;
-         sD += pD.log2(wD) / 7 | 0, sD += pD.log2(zD >>> 0) / 7 | 0, sD += 2
+       var ip = Object.create(null);
+       return pp && Object.keys(pp).forEach((function(cp) {
+         if ("default" !== cp) {
+           var Op = Object.getOwnPropertyDescriptor(pp, cp);
+           Object.defineProperty(ip, cp, Op.get ? Op : {
+             enumerable: !0,
+             get: function() {
+               return pp[cp]
+             }
+           })
+         }
+       })), ip.default = pp, Object.freeze(ip)
+     }
+     var Ip = op(cp(9310));
+     ip.HTTP = class {
+       constructor(pp) {
+ ... (32 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L14-L22` → after: `L357-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L357-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/187.js#L357-L377) · [Before (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/187.js#L14-L22)

```diff
-     zD.size = sD, zD.encode = function(DD, zD) {
-       zD || (zD = new Uint8Array(sD(DD)));
-       for (var wD, pD, KD = 0, rD = zD.length, LD = 0; LD < DD.length;) {
-         for (wD = DD[LD], pD = 0; LD < DD.length && DD[LD] === wD;) ++LD, ++pD;
-         for (; KD < rD && pD >= 128;) zD[KD++] = 128 + (127 & pD), pD >>>= 7;
-         if (KD >= rD) throw new Error("RLE buffer overflow");
-         for (zD[KD++] = pD, wD >>>= 0; KD < rD && wD >= 128;) zD[KD++] = 128 + (127 & wD), wD >>>= 7;
-         if (KD >= rD) throw new Error("RLE buffer overflow");
-         zD[KD++] = wD
+   },
+   9271: (pp, ip) => {
+     var cp, Op;
+     ip.Protocol = void 0, (cp = ip.Protocol || (ip.Protocol = {}))[cp.HANDSHAKE = 9] = "HANDSHAKE", cp[cp.JOIN_ROOM = 10] = "JOIN_ROOM", cp[cp.ERROR = 11] = "ERROR", cp[cp.LEAVE_ROOM = 12] = "LEAVE_ROOM", cp[cp.ROOM_DATA = 13] = "ROOM_DATA", cp[cp.ROOM_STATE = 14] = "ROOM_STATE", … [truncated]
+   },
+   9242: (pp, ip, cp) => {
+     var Op = cp(9246),
+       op = cp(9271),
+       Ip = cp(9276),
+       Sp = cp(9281),
+       xp = cp(9289),
+       Lp = cp(9253),
+       Yp = cp(9291),
+       Dp = cp(9237),
+       Ap = cp(9298);
+     class Pp {
+ ... (5 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L24-L32` → after: `L379-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L379-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/187.js#L379-L419) · [Before (L24-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/187.js#L24-L32)

```diff
-       return zD
-     }, zD.decode = function(DD, zD) {
-       for (var wD, pD, sD, KD, rD = zD.length, LD = DD.length, cD = 0, gD = 0; gD < LD;) {
-         for (wD = 0, pD = 0; gD < LD && DD[gD] >= 128;) wD += (127 & DD[gD++]) << pD, pD += 7;
-         if (wD += DD[gD++] << pD, gD >= LD) throw new Error("RLE buffer underrun");
-         if (cD + wD > rD) throw new Error("Chunk buffer overflow");
-         for (sD = 0, pD = 0; gD < LD && DD[gD] >= 128;) sD += (127 & DD[gD++]) << pD, pD += 7;
-         if (gD >= LD) throw new Error("RLE buffer underrun");
-         for (sD += DD[gD++] << pD, KD = 0; KD < wD; ++KD) zD[cD++] = sD
+       connect(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
+           op = arguments.length > 3 ? arguments[3] : void 0,
+           Ip = arguments.length > 4 ? arguments[4] : void 0;
+         const Sp = new Op.Connection(op.protocol);
+         if (cp.connection = Sp, Sp.events.onmessage = Pp.prototype.onMessageCallback.bind(cp), Sp.events.onclose = function(pp) {
+             var Op;
+             if (!cp.hasJoined) return null === (Op = console.warn) || void 0 === Op || Op.call(console, `Room connection was closed unexpectedly (${pp.code}): ${pp.reason}`), void cp.onError.invoke(pp.code, pp.reason);
+             pp.code === Dp.CloseCode.DEVMODE_RESTART && ip ? ip() : (cp.Eu.invoke(pp.code, pp.reason), cp.destroy())
+           }, Sp.events.onerror = function(pp) {
+             var ip;
+             null === (ip = console.warn) || void 0 === ip || ip.call(console, `Room, onError (${pp.code}): ${pp.reason}`), cp.onError.invoke(pp.code, pp.reason)
+           }, "h3" === op.protocol) {
+           const ip = new URL(pp);
+           Sp.connect(ip.origin, op)
+         } else Sp.connect(pp, Ip)
+ ... (25 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L37-L88` → after: `L694-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L694-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/187.js#L694-L845) · [Before (L37-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/187.js#L37-L88)

```diff
-   37718: (DD, zD) => {
-     function wD(DD) {
-       var zD = 32;
-       return (DD &= -DD) && zD--, 65535 & DD && (zD -= 16), 16711935 & DD && (zD -= 8), 252645135 & DD && (zD -= 4), 858993459 & DD && (zD -= 2), 1431655765 & DD && (zD -= 1), zD
-     }
-     zD.INT_BITS = 32, zD.INT_MAX = 2147483647, zD.INT_MIN = -1 << 31, zD.sign = function(DD) {
-       return (DD > 0) - (DD < 0)
-     }, zD.abs = function(DD) {
-       var zD = DD >> 31;
-       return (DD ^ zD) - zD
-     }, zD.min = function(DD, zD) {
-       return zD ^ (DD ^ zD) & -(DD < zD)
-     }, zD.max = function(DD, zD) {
-       return DD ^ (DD ^ zD) & -(DD < zD)
-     }, zD.isPow2 = function(DD) {
-       return !(DD & DD - 1) && !!DD
- ... (36 more removed lines; see GitHub link above)
+   9249: (pp, ip, cp) => {
+     var Op = cp(9230),
+       op = cp(9253);
+     ip.H3TransportTransport = class {
+       constructor(pp) {
+         this.events = pp, this.isOpen = !1, this.lengthPrefixBuffer = new Uint8Array(9)
+       }
+       connect(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         const cp = ip.fingerprint && {
+           serverCertificateHashes: [{
+             algorithm: "sha-256",
+             value: new Uint8Array(ip.fingerprint).buffer
+           }]
+         } || void 0;
+         this.wt = new WebTransport(pp, cp), this.wt.ready.then((pp => {
+ ... (136 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L91` → after: `L848-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L848-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/187.js#L848-L880) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/187.js#L91)

```diff
-   39740: (DD, zD, wD) => {
+   9263: pp => {
+     pp.exports = function() {
+       throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
+     }
+   },
+   9310: (pp, ip, cp) => {
+     function Op(pp, ip) {
+       ip.headers = pp.headers || {}, ip.statusMessage = pp.statusText, ip.statusCode = pp.status, ip.data = pp.response
+     }
+ 
+     function op(pp, ip, cp) {
+       return new Promise((function(op, Ip) {
+         cp = cp || {};
+         var Sp, xp, Lp, Yp = new XMLHttpRequest,
+           Dp = cp.body,
+           Ap = cp.headers || {};
+ ... (17 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L93-L95` → after: `L882-L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L882-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/187.js#L882-L887) · [Before (L93-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/187.js#L93-L95)

```diff
-       emptyColumnHeight: () => OD,
-       loadHeatmapSchematic: () => JD,
-       readSchematicBlocks: () => ED
+       del: () => Lp,
+       get: () => Ip,
+       patch: () => xp,
+       post: () => Sp,
+       put: () => Yp,
+       send: () => op
```

#### 8. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L97-L168` → after: `L889-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L889-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/187.js#L889-L935) · [Before (L97-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/187.js#L97-L168)

```diff
-     var pD = wD(3760),
-       sD = wD.n(pD),
-       KD = wD(3750),
-       rD = wD(37713),
-       LD = wD(197),
-       cD = wD(9198);
-     const gD = [{
-         name: "x",
-         type: "int"
-       }, {
-         name: "y",
-         type: "int"
-       }, {
-         name: "z",
-         type: "int"
-       }],
- ... (56 more removed lines; see GitHub link above)
+     var Ip = op.bind(op, "GET"),
+       Sp = op.bind(op, "POST"),
+       xp = op.bind(op, "PATCH"),
+       Lp = op.bind(op, "DELETE"),
+       Yp = op.bind(op, "PUT")
+   },
+   9298: (pp, ip, cp) => {
+     var Op, op, Ip;
+     cp.r(ip), cp.d(ip, {
+       ALWAYS: () => zi,
+       C1: () => ep,
+       DECIMAL_FIT: () => Ki,
+       DECIMAL_ROUND: () => si,
+       Decoder: () => Di,
+       Encoder: () => ri,
+       FLOAT32_OPTIONS: () => Ui,
+ ... (31 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L170-L196` → after: `L937-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L937-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/187.js#L937-L1003) · [Before (L170-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/187.js#L170-L196)

```diff
-         Water: [63, 118, 228],
-         Lava: [232, 110, 30]
-       },
-       GD = [150, 150, 150],
-       hD = 16,
-       nD = 4096,
-       MD = LD.f.CI,
-       OD = -2147483648;
-     async function JD(DD) {
-       const zD = await ED(new Uint8Array(await DD.arrayBuffer()), await async function() {
-         const {
-           averageColors: DD
-         } = await wD.e(204).then((() => wD(34299))), zD = new Map;
-         return wD => {
-           var pD, sD, KD, rD, LD;
-           const gD = zD.get(wD);
- ... (11 more removed lines; see GitHub link above)
+         useRecords: !1,
+         mapsAsObjects: !0
+       };
+     class dp {}
+     const ep = new dp;
+     ep.name = "MessagePack 0xC1";
+     var jp, kp, mp, Rp = !1,
+       qp = 2;
+     try {
+       new Function("")
+     } catch (Sc) {
+       qp = 1 / 0
+     }
+     class Mp {
+       constructor(pp) {
+         pp && (!1 === pp.useRecords && void 0 === pp.mapsAsObjects && (pp.mapsAsObjects = !0), pp.sequential && !1 !== pp.trusted && (pp.trusted = !0, pp.structures || 0 == pp.useRecords || (pp.structures = [], pp.maxSharedStructures || (pp.maxSharedStructures = 0))), pp.structur … [truncated]
+ ... (51 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L199-L248` → after: `L1006-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L1006-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/187.js#L1006-L1050) · [Before (L199-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/187.js#L199-L248)

```diff
-     async function ED(DD, zD) {
-       var wD;
-       if (DD.byteLength < 4) throw new Error("The file is too short to be a schematic.");
-       const pD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength).getUint32(0, !0);
-       if (pD > ID) throw new Error("The file isn't a schematic this version of Bloxd can read.");
-       const sD = (pD >= fD ? UD : AD).decode(KD.nI.from(DD.subarray(4)), 0).value;
-       if (!sD) throw new Error("The file isn't a schematic.");
-       if (0 === sD.chunkData.length) throw new Error("The schematic has no blocks in it.");
-       const LD = null !== (wD = sD.pasteOffset) && void 0 !== wD ? wD : {
-           x: 0,
-           y: 0,
-           z: 0
-         },
-         cD = [LD.x, LD.y, LD.z].map((DD => Math.floor(DD / MD))),
-         gD = sD.chunkData.map((DD => ({
-           x: DD.x + cD[0],
- ... (34 more removed lines; see GitHub link above)
+ 
+     function Cp(pp) {
+       try {
+         if (!Up.trusted && !Rp) {
+           let pp = Lp.sharedLength || 0;
+           pp < Lp.length && (Lp.length = pp)
+         }
+         let ip;
+         if (Up.randomAccessStructure && op[Sp] < 64 && op[Sp] >= 32 && jp ? (ip = jp(op, Sp, Ip, Up), op = null, pp && pp.lazy || !ip || (ip = ip.toJSON()), Sp = Ip) : ip = Xp(), Dp && (Sp = Dp.postBundlePosition, Dp = null), Rp && (Lp.restoreStructures = null), Sp == Ip) Lp && L … [truncated]
+         else {
+           if (Sp > Ip) throw new Error("Unexpected end of MessagePack data");
+           if (!Rp) {
+             let pp;
+             try {
+               pp = JSON.stringify(ip, ((pp, ip) => "bigint" === typeof ip ? `${ip}n` : ip)).slice(0, 100)
+             } catch (Sc) {
+ ... (29 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L250-L271` → after: `L1052-L1219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L1052-L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/187.js#L1052-L1219) · [Before (L250-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/187.js#L250-L271)

```diff
-               const cD = DD[BD(KD, sD, rD)];
-               if (0 === cD) continue;
-               const gD = wD[0] + KD,
-                 RD = wD[1] + sD,
-                 AD = wD[2] + rD,
-                 UD = zD(cD);
-               if (null === UD) continue;
-               const fD = rD * MD + KD;
-               RD > LD.heights[fD] && (LD.heights[fD] = RD, LD.colours.set(UD, 3 * fD));
-               !QD(cD) && (QD(pD(KD + 1, sD, rD)) || QD(pD(KD - 1, sD, rD)) || QD(pD(KD, sD + 1, rD)) || QD(pD(KD, sD - 1, rD)) || QD(pD(KD, sD, rD + 1)) || QD(pD(KD, sD, rD - 1))) && (JD.push(gD, RD, AD), ED.push(UD[0], UD[1], UD[2]))
-             }
-         KD % hD === hD - 1 && await VD()
-       }
-       if (0 === JD.length) throw new Error("The schematic has no blocks in it.");
-       return {
-         name: sD.name,
- ... (6 more removed lines; see GitHub link above)
+               let pp = Vp();
+               "__proto__" === pp && (pp = "__proto_"), ip[pp] = Xp()
+             }
+             return ip
+           } {
+             let ip = new Map;
+             for (let cp = 0; cp < pp; cp++) ip.set(Xp(), Xp());
+             return ip
+           }
+         } {
+           pp -= 144;
+           let ip = new Array(pp);
+           for (let cp = 0; cp < pp; cp++) ip[cp] = Xp();
+           return Up.freezeData ? Object.freeze(ip) : ip
+         }
+       }
+ ... (152 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L276-L278` → after: `L1225-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L1225-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/187.js#L1225-L1227) · [Before (L276-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/187.js#L276-L278)

```diff
-       if (0 === DD) return !0;
-       const zD = cD.l[DD];
-       return void 0 === zD || zD.Af || zD.transTex || !1 === zD.solid
+       let ip = new Array(pp);
+       for (let cp = 0; cp < pp; cp++) ip[cp] = Xp();
+       return Up.freezeData ? Object.freeze(ip) : ip
```

#### 13. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L282-L289` → after: `L1231-L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L1231-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/187.js#L1231-L1333) · [Before (L282-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/187.js#L282-L289)

```diff
-       let zD = 1 / 0,
-         wD = -1 / 0,
-         pD = 1 / 0,
-         sD = -1 / 0;
-       for (const {
-           chunkX: ID,
-           chunkZ: BD,
-           heights: GD
+       if (Up.mapsAsObjects) {
+         let ip = {};
+         for (let cp = 0; cp < pp; cp++) {
+           let pp = Vp();
+           "__proto__" === pp && (pp = "__proto_"), ip[pp] = Xp()
+         }
+         return ip
+       } {
+         let ip = new Map;
+         for (let cp = 0; cp < pp; cp++) ip.set(Xp(), Xp());
+         return ip
+       }
+     }
+     var gp = String.fromCharCode;
+ 
+     function Gp(pp) {
+ ... (87 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/187.js` (Changed code · before: `L330-L332` → after: `L1339-L7784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3R1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ecdceb37e1d7ec2943e19ae387cada6651900f9a70c96641384ca65be9a5edf3) · [After (L1339-L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/187.js#L1339-L7784) · [Before (L330-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/187.js#L330-L332)

```diff
-       return new Promise((DD => {
-         setTimeout(DD, 0)
-       }))
+       let pp, ip = op[Sp++];
+       if (ip < 192) pp = ip - 160;
+       else switch (ip) {
+         case 217:
+           pp = op[Sp++];
+           break;
+         case 218:
+           pp = Pp.getUint16(Sp), Sp += 2;
+           break;
+         case 219:
+           pp = Pp.getUint32(Sp), Sp += 4;
+           break;
+         default:
+           throw new Error("Expected string")
+       }
+       return ap(pp)
+ ... (6430 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/188.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/188.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071)

#### 1. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L4-L13` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/188.js#L4) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/188.js#L4-L13)

```diff
-   40415: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       FORMER_BLOCK_IMAGE_NAMES: () => pD.d,
-       textureAnimationData: () => sD.v,
-       textureNameToIndex: () => sD.z
-     });
-     var pD = wD(38698),
-       sD = wD(9198)
-   },
-   9286: (DD, zD, wD) => {
+   9436: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L15-L16` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/188.js#L6-L7) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/188.js#L15-L16)

```diff
-       c: () => sD,
-       e: () => KD
+       d: () => op,
+       h: () => Ip
```

#### 3. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L18` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/188.js#L9) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/188.js#L18)

```diff
-     var pD = wD(9236);
+     var Op = cp(9385);
```

#### 4. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L20` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/188.js#L11) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/188.js#L20)

```diff
-       KD = Object.freeze(new pD.h(sD, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
+       Ip = Object.freeze(new Op.e(op, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
```

#### 5. `bundles/bloxd.io/chunks/js/188.js` (Changed code · before: `L22-L32` → after: `L13-L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ba03af99f28a2fee79aeba9ce3fe5622d65ceeb368a98e4c9444772c6a847071) · [After (L13-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/188.js#L13-L1367) · [Before (L22-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/188.js#L22-L32)

```diff
-   38698: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => pD,
-       g: () => sD
-     });
-     const pD = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((DD => [DD, `${DD}_block`])));
- 
-     function sD(DD) {
-       var zD;
-       return null !== (zD = pD.get(DD)) && void 0 !== zD ? zD : DD
-     }
+   27343: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
+   },
+   33475: pp => {
+     pp.exports = "data:model/gltf-binary;base64,Z2xURgIAAADsSwAAtDQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjM2fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlw … [truncated]
+   },
+   33477: pp => {
+     pp.exports = "data:model/gltf-binary;base64,Z2xURgIAAABkWAAACBEAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiZXh0cmFzIjp7ImJsb3hkQnVpbGRIYXNoIjoiZDk5YzM4OTQifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyNSwi … [truncated]
+   },
+   27351: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
+   },
+   27354: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAHHUlEQVR4nO3dP2vkRhgGcDX7YVxsYzfTuDl3Smdz1ZKwgnQGE8xyMTHxBULOcezjmgSTS2PwQbKBI80Rc+Ai5AO4MiFNiu2uSLmFmzBBy84yO9Y7mpFmpJHmKZ7Ca2lW0vx2RtLoTzJ+up+IDDc2a0Uuy2V56ZNdJ2Fb … [truncated]
+   },
+   33485: pp => {
+ ... (1339 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/189.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/189.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63)

#### 1. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L4-L20` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L4-L5) · [Before (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L4-L20)

```diff
-   40540: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => cD,
-       e: () => LD,
-       i: () => rD
-     });
-     var pD = wD(40544),
-       sD = wD(4817),
-       KD = wD(40550);
- 
-     function rD(DD) {
-       return DD.payloadKind === sD.pc.Msgpack ? (0, pD.b)(DD.payload) : void 0
-     }
- 
-     function LD(DD, zD) {
-       if (zD.payloadKind === sD.pc.Bytes || zD.payloadKind === sD.pc.MsgpackBin) return (0, KD.d)(DD, zD.payload)
- ... (1 more removed lines; see GitHub link above)
+   37951: (pp, ip, cp) => {
+     var Op = cp(37956);
```

#### 2. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L23-L61` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L8-L10) · [Before (L23-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L23-L61)

```diff
-       return null !== DD && "object" === typeof DD
-     }
-   },
-   40558: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => AD,
-       f: () => UD,
-       h: () => fD,
-       l: () => RD,
-       n: () => GD
-     });
-     var pD = wD(4817),
-       sD = wD(40562);
-     const KD = new Map,
-       rD = new Set,
-       LD = new Set;
- ... (23 more removed lines; see GitHub link above)
+       for (var ip, cp, op = 0, Ip = pp.length, Sp = 0; Sp < pp.length;) {
+         for (ip = pp[Sp], cp = 0; Sp < Ip && pp[Sp] === ip;) ++Sp, ++cp;
+         op += Op.log2(cp) / 7 | 0, op += Op.log2(ip >>> 0) / 7 | 0, op += 2
```

#### 3. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L64-L71` → after: `L14-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L14-L22) · [Before (L64-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L64-L71)

```diff
-     const ID = "A raw message listener threw";
- 
-     function BD(DD) {
-       let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rD;
-       for (const pD of zD) try {
-         pD()
-       } catch (wD) {
-         DD ? (0, sD.k)(wD, ID) : console.error(ID, wD)
+     ip.size = op, ip.encode = function(pp, ip) {
+       ip || (ip = new Uint8Array(op(pp)));
+       for (var cp, Op, Ip = 0, Sp = ip.length, xp = 0; xp < pp.length;) {
+         for (cp = pp[xp], Op = 0; xp < pp.length && pp[xp] === cp;) ++xp, ++Op;
+         for (; Ip < Sp && Op >= 128;) ip[Ip++] = 128 + (127 & Op), Op >>>= 7;
+         if (Ip >= Sp) throw new Error("RLE buffer overflow");
+         for (ip[Ip++] = Op, cp >>>= 0; Ip < Sp && cp >= 128;) ip[Ip++] = 128 + (127 & cp), cp >>>= 7;
+         if (Ip >= Sp) throw new Error("RLE buffer overflow");
+         ip[Ip++] = cp
```

#### 4. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L73-L90` → after: `L24-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L24-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L24-L32) · [Before (L73-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L73-L90)

```diff
-     }
-     const GD = {
-       fire: function(DD) {
-         if ("connection" === DD.type) {
-           const zD = DD.phase === pD.D.Activated && DD.conn !== cD && DD.conn > gD,
-             wD = (DD.phase === pD.D.Left || DD.phase === pD.D.Closed) && DD.conn === cD;
-           return void(zD || wD ? (cD = zD ? DD.conn : 0, BD(!0)) : DD.phase === pD.D.Resumed && 0 !== cD && DD.conn > gD && (cD = DD.conn, BD(!0, LD)))
-         }
-         const zD = KD.get(DD.lg);
-         if (zD && DD.conn === cD && 0 !== cD)
-           for (const pD of zD) try {
-             pD(DD)
-           } catch (wD) {
-             (0, sD.k)(wD, ID)
-           }
-       },
- ... (2 more removed lines; see GitHub link above)
+       return ip
+     }, ip.decode = function(pp, ip) {
+       for (var cp, Op, op, Ip, Sp = ip.length, xp = pp.length, Lp = 0, Yp = 0; Yp < xp;) {
+         for (cp = 0, Op = 0; Yp < xp && pp[Yp] >= 128;) cp += (127 & pp[Yp++]) << Op, Op += 7;
+         if (cp += pp[Yp++] << Op, Yp >= xp) throw new Error("RLE buffer underrun");
+         if (Lp + cp > Sp) throw new Error("Chunk buffer overflow");
+         for (op = 0, Op = 0; Yp < xp && pp[Yp] >= 128;) op += (127 & pp[Yp++]) << Op, Op += 7;
+         if (Yp >= xp) throw new Error("RLE buffer underrun");
+         for (op += pp[Yp++] << Op, Ip = 0; Ip < cp; ++Ip) ip[Lp++] = op
```

#### 5. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L94-L126` → after: `L37-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L37-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L37-L88) · [Before (L94-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L94-L126)

```diff
-   40529: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => gD,
-       d: () => cD,
-       h: () => LD
-     });
-     var pD = wD(1270),
-       sD = wD(40506);
-     const KD = new TextDecoder,
-       rD = new TextEncoder;
- 
-     function LD(DD, zD) {
-       const wD = DD.queries.entityName(zD);
-       if (wD === sD.Ec) return;
-       const rD = DD.memoryData(DD.scratch(), 4 + wD, 4, "entity_name's answer");
-       if (!rD) return;
- ... (17 more removed lines; see GitHub link above)
+   37956: (pp, ip) => {
+     function cp(pp) {
+       var ip = 32;
+       return (pp &= -pp) && ip--, 65535 & pp && (ip -= 16), 16711935 & pp && (ip -= 8), 252645135 & pp && (ip -= 4), 858993459 & pp && (ip -= 2), 1431655765 & pp && (ip -= 1), ip
+     }
+     ip.INT_BITS = 32, ip.INT_MAX = 2147483647, ip.INT_MIN = -1 << 31, ip.sign = function(pp) {
+       return (pp > 0) - (pp < 0)
+     }, ip.abs = function(pp) {
+       var ip = pp >> 31;
+       return (pp ^ ip) - ip
+     }, ip.min = function(pp, ip) {
+       return ip ^ (pp ^ ip) & -(pp < ip)
+     }, ip.max = function(pp, ip) {
+       return pp ^ (pp ^ ip) & -(pp < ip)
+     }, ip.isPow2 = function(pp) {
+       return !(pp & pp - 1) && !!pp
+ ... (36 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L129-L132` → after: `L91-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L91-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L91-L95) · [Before (L129-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L129-L132)

```diff
-   40544: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => sD,
-       d: () => RD
+   40009: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       emptyColumnHeight: () => dp,
+       loadHeatmapSchematic: () => ep,
+       readSchematicBlocks: () => jp
```

#### 7. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L134-L248` → after: `L97-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L97-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L97-L120) · [Before (L134-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L134-L248)

```diff
-     const pD = new TextDecoder;
- 
-     function sD(DD) {
-       const zD = new KD(DD),
-         wD = zD.value();
-       if (zD.at !== DD.length) throw new Error(`msgpack: ${DD.length-zD.at} bytes after the value`);
-       return wD
-     }
-     class KD {
-       constructor(DD) {
-         this.bytes = DD, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(DD.buffer, DD.byteOffset, DD.byteLength)
-       }
-       value() {
-         const DD = this.u8();
-         if (DD <= 127) return DD;
-         if (DD >= 224) return DD - 256;
- ... (99 more removed lines; see GitHub link above)
+     var Op = cp(3844),
+       op = cp.n(Op),
+       Ip = cp(3824),
+       Sp = cp(37951),
+       xp = cp(195),
+       Lp = cp(9338);
+     const Yp = [{
+         name: "x",
+         type: "int"
+       }, {
+         name: "y",
+         type: "int"
+       }, {
+         name: "z",
+         type: "int"
+       }],
+ ... (8 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L250-L271` → after: `L122-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L122-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L122-L126) · [Before (L250-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L250-L271)

```diff
-         return pD.decode(wD.subarray(zD, zD + DD))
-       }
-       bin(DD) {
-         const zD = this.take(DD);
-         return this.bytes.subarray(zD, zD + DD)
-       }
-       enter() {
-         if (++this.depth > 512) throw new Error("msgpack: nested too deep")
-       }
-       array(DD) {
-         this.enter();
-         const zD = [];
-         for (let wD = 0; wD < DD; wD++) zD.push(this.value());
-         return this.depth--, zD
-       }
-       map(DD) {
- ... (6 more removed lines; see GitHub link above)
+       }, {
+         name: "dimensions",
+         type: {
+           type: "record",
+           fields: Yp
```

#### 9. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L273-L292` → after: `L128-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L128-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L128-L137) · [Before (L273-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L273-L292)

```diff
-         return this.depth--, zD
-       }
-       ext(DD) {
-         const zD = this.view.getInt8(this.take(1)),
-           wD = this.take(DD);
-         if (0 !== zD) {
-           if (-1 === zD) {
-             if (1 === DD) return new Date(NaN);
-             if (4 === DD) return new Date(1e3 * this.view.getUint32(wD, !1));
-             if (8 === DD) {
-               const DD = this.view.getUint32(wD, !1),
-                 zD = DD >>> 2,
-                 pD = 4294967296 * (3 & DD) + this.view.getUint32(wD + 4, !1);
-               return new Date(1e3 * pD + zD / 1e6)
-             }
-             if (12 === DD) {
- ... (4 more removed lines; see GitHub link above)
+       }, {
+         name: "chunkData",
+         type: {
+           type: "array",
+           items: {
+             type: "record",
+             fields: [...Yp, {
+               name: "rle",
+               type: "bytes"
+             }]
```

#### 10. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L296-L340` → after: `L140-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L140-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L140-L156) · [Before (L296-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L296-L340)

```diff
-       }
-     }
-     const rD = new TextEncoder,
-       LD = -(2n ** 63n),
-       cD = 2n ** 63n - 1n,
-       gD = 2n ** 64n - 1n;
- 
-     function RD(DD) {
-       const zD = new AD;
-       return zD.value(DD, 0), zD.bytes()
-     }
-     class AD {
-       constructor() {
-         this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
-       }
-       bytes() {
- ... (29 more removed lines; see GitHub link above)
+       }],
+       Ap = op().Type.forSchema({
+         type: "record",
+         fields: Dp
+       }),
+       Pp = op().Type.forSchema({
+         type: "record",
+         fields: [...Dp, {
+           name: "blockData",
+           type: {
+             type: "array",
+             items: {
+               type: "record",
+               fields: [...Yp, {
+                 name: "data",
+                 type: "bytes"
+ ... (1 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L424-L453` → after: `L159-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L159-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L159-L163) · [Before (L424-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L424-L453)

```diff
-           return DD
-         }
-         return sD.decode(this.buf.subarray(zD, wD))
-       }
-       bytes() {
-         return this.fixed(this.size())
-       }
-       fixed(DD) {
-         const zD = this.take(DD);
-         return this.buf.slice(zD, zD + DD)
-       }
-       index(DD) {
-         const zD = this.long();
-         if (!(zD >= 0 && zD < DD)) throw new RangeError(`avro: index ${zD} of ${DD}`);
-         return zD
-       }
- ... (14 more removed lines; see GitHub link above)
+         }, {
+           name: "pasteOffset",
+           type: {
+             type: "record",
+             fields: Yp
```

#### 12. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L455-L538` → after: `L165-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L165-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L165-L173) · [Before (L455-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L455-L538)

```diff
-         }
-         return zD
-       }
-       end() {
-         if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
-       }
-       block(DD) {
-         let zD = DD;
-         if (zD < 0 && (zD = -zD, this.long()), zD > this.buf.length - this.at) throw new RangeError(`avro: block of ${zD} items in ${this.buf.length-this.at} bytes`);
-         return zD
-       }
-       floats() {
-         return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
-       }
-       size() {
-         const DD = this.long();
- ... (68 more removed lines; see GitHub link above)
+         }]
+       }),
+       Wp = 2,
+       yp = 6,
+       Up = {
+         Water: [63, 118, 228],
+         Lava: [232, 110, 30]
+       },
+       wp = [150, 150, 150],
```

#### 13. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L540-L1046` → after: `L175-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L175-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L175-L191) · [Before (L540-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L540-L1046)

```diff
-       ED = 86,
-       QD = 60,
-       XD = 17,
-       VD = 56,
-       PD = 100,
-       CD = 81;
- 
-     function xD(DD, zD) {
-       switch (DD) {
-         case pD:
-           return function(DD) {
-             return {
-               yK: tD(DD),
-               kK: DD.float(),
-               mK: DD.long()
-             }
- ... (491 more removed lines; see GitHub link above)
+       tp = 4096,
+       Hp = xp.g.Qy,
+       dp = -2147483648;
+     async function ep(pp) {
+       const ip = await jp(new Uint8Array(await pp.arrayBuffer()), await async function() {
+         const {
+           averageColors: pp
+         } = await cp.e(207).then((() => cp(34510))), ip = new Map;
+         return cp => {
+           var Op, op, Ip, Sp, xp;
+           const Yp = ip.get(cp);
+           if (void 0 !== Yp) return Yp;
+           const Dp = null !== (Op = null === (op = Lp.e[cp]) || void 0 === op ? void 0 : op.name) && void 0 !== Op ? Op : "",
+             Ap = null !== (Ip = pp[Dp]) && void 0 !== Ip ? Ip : pp[Dp.split("|")[0]],
+             Pp = Up[Dp.split("|")[0]],
+             Wp = null !== (Sp = null !== (xp = null === Ap || void 0 === Ap ? void 0 : Ap[0]) && void 0 !== xp ? xp : Pp) && void 0 !== Sp ? Sp : 0 === (null === Ap || void 0 === Ap ? void 0 : Ap.length) ? null : wp;
+ ... (1 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L1048-L1101` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L193) · [Before (L1048-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L1048-L1101)

```diff
-       }(DD)
-     }
- 
-     function Qz(DD) {
-       return {
-         blockName: DD.str(),
-         hD: DD.bool(),
-         nD: DD.bool(),
-         MD: DD.bool(),
-         OD: DD.float(),
-         JD: DD.float(),
-         ED: DD.long(),
-         QD: Ez(DD)
-       }
-     }
- 
- ... (38 more removed lines; see GitHub link above)
+       }());
```

#### 15. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L1103-L1108` → after: `L195-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L195-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L195-L261) · [Before (L1103-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L1103-L1108)

```diff
-         blockName: DD.str(),
-         radius: DD.long(),
-         WD: DD.long(),
-         LD: DD.long(),
-         cD: DD.long(),
-         ND: DD.float()
+         surface: ip.surface,
+         topDown: mp(ip.columnTops)
+       }
+     }
+     async function jp(pp, ip) {
+       var cp;
+       if (pp.byteLength < 4) throw new Error("The file is too short to be a schematic.");
+       const Op = new DataView(pp.buffer, pp.byteOffset, pp.byteLength).getUint32(0, !0);
+       if (Op > yp) throw new Error("The file isn't a schematic this version of Bloxd can read.");
+       const op = (Op >= Wp ? Pp : Ap).decode(Ip.my.from(pp.subarray(4)), 0).value;
+       if (!op) throw new Error("The file isn't a schematic.");
+       if (0 === op.chunkData.length) throw new Error("The schematic has no blocks in it.");
+       const xp = null !== (cp = op.pasteOffset) && void 0 !== cp ? cp : {
+           x: 0,
+           y: 0,
+           z: 0
+ ... (51 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L1110-L1116` → after: `L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L263) · [Before (L1110-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L1110-L1116)

```diff
-     }
- 
-     function jz(DD) {
-       return DD.OI(bz)
-     }
- 
-     function dz(DD) {
+       if (0 === ep.length) throw new Error("The schematic has no blocks in it.");
```

#### 17. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L1118-L1124` → after: `L265-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L265-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L265-L271) · [Before (L1118-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L1118-L1124)

```diff
-         LD: DD.long(),
-         cD: DD.long(),
-         gD: DD.long(),
-         RD: DD.bool(),
-         AD: Vz(DD),
-         xD: Tz(DD),
-         iD: jz(DD)
+         name: op.name,
+         surface: {
+           positions: Int32Array.from(ep),
+           colours: Uint8Array.from(jp),
+           count: ep.length / 3
+         },
+         columnTops: [...tp.values()]
```

#### 18. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L1129` → after: `L276-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L276-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L276-L278) · [Before (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L1129)

```diff
-       return DD.OI(dz)
+       if (0 === pp) return !0;
+       const ip = Lp.e[pp];
+       return void 0 === ip || ip.tW || ip.transTex || !1 === ip.solid
```

#### 19. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L1133-L1136` → after: `L282-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L282-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L282-L289) · [Before (L1133-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L1133-L1136)

```diff
-       return 0 === DD.index(2) ? null : function(DD) {
-         return {
-           name: DD.str(),
-           mD: SD(DD)
+       let ip = 1 / 0,
+         cp = -1 / 0,
+         Op = 1 / 0,
+         op = -1 / 0;
+       for (const {
+           chunkX: yp,
+           chunkZ: Up,
+           heights: wp
```

#### 20. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L1138-L1145` → after: `L291-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L291-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L291-L312) · [Before (L1138-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L1138-L1145)

```diff
-       }(DD)
-     }
- 
-     function lz(DD) {
-       return 0 === DD.index(2) ? null : function(DD) {
-         return {
-           terrain: iz(DD),
-           eD: jz(DD)
+         of pp) wp.forEach(((pp, Ip) => {
+         if (pp === dp) return;
+         const Sp = yp * Hp + Ip % Hp,
+           xp = Up * Hp + Math.floor(Ip / Hp);
+         ip = Math.min(ip, Sp), cp = Math.max(cp, Sp), Op = Math.min(Op, xp), op = Math.max(op, xp)
+       }));
+       const Ip = cp - ip + 1,
+         Sp = op - Op + 1,
+         xp = Math.max(1, Math.ceil(Ip / tp), Math.ceil(Sp / tp)),
+         Lp = Math.ceil(Ip / xp),
+         Yp = Math.ceil(Sp / xp),
+         Dp = document.createElement("canvas");
+       Dp.width = Lp, Dp.height = Yp;
+       const Ap = Dp.getContext("2d");
+       if (!Ap) throw new Error("Couldn't draw the schematic from above.");
+       const Pp = Ap.createImageData(Lp, Yp),
+ ... (6 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L1147-L1222` → after: `L314-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L314-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L314-L325) · [Before (L1147-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L1147-L1222)

```diff
-       }(DD)
-     }
- 
-     function Wz(DD) {
-       return 0 === DD.index(2) ? null : function(DD) {
-         return {
-           layers: Sz(DD),
-           ZD: lz(DD)
-         }
-       }(DD)
-     }
-   },
-   40522: (DD, zD, wD) => {
-     wD.d(zD, {
-       $: () => nD,
-       A: () => VD,
- ... (60 more removed lines; see GitHub link above)
+         of pp) wp.forEach(((pp, ip) => {
+         const op = yp * Hp + ip % Hp,
+           Ip = Up * Hp + Math.floor(ip / Hp),
+           Sp = Math.floor((Ip - Op) / xp) * Lp + Math.floor((cp - op) / xp);
+         pp === dp || pp <= Wp[Sp] || (Wp[Sp] = pp, Pp.data.set(vp.subarray(3 * ip, 3 * ip + 3), 4 * Sp), Pp.data[4 * Sp + 3] = 255)
+       }));
+       return Ap.putImageData(Pp, 0, 0), {
+         maxX: cp,
+         minZ: Op,
+         width: Lp * xp,
+         depth: Yp * xp,
+         canvas: Dp
```

#### 22. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L1308-L1333` → after: `L329-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L329-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L329-L331) · [Before (L1308-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L1308-L1333)

```diff
-     function CD(DD) {
-       return null === (zD = DD) || "object" !== typeof zD ? zD : [rD(zD.kr), rD(zD.mr)];
-       var zD
-     }
- 
-     function xD(DD) {
-       return rD(DD)
-     }
- 
-     function TD(DD) {
-       return UD(DD)
-     }
- 
-     function bD(DD) {
-       return UD(DD)
-     }
- ... (10 more removed lines; see GitHub link above)
+     function Rp() {
+       return new Promise((pp => {
+         setTimeout(pp, 0)
```

#### 23. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L1342` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L335) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L1342)

```diff
-   9286: (DD, zD, wD) => {
+   9436: (pp, ip, cp) => {
```

#### 24. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L1344-L1345` → after: `L337-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L337-L338) · [Before (L1344-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L1344-L1345)

```diff
-       c: () => sD,
-       e: () => KD
+       d: () => op,
+       h: () => Ip
```

#### 25. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L1347` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L340) · [Before (L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L1347)

```diff
-     var pD = wD(9236);
+     var Op = cp(9385);
```

#### 26. `bundles/bloxd.io/chunks/js/189.js` (Changed code · before: `L1349-L1366` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-c7374bdf4a8900feebc3c06cc25d62eb9fbb822f9abf8ab08119d9092e535e63) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/189.js#L342) · [Before (L1349-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/189.js#L1349-L1366)

```diff
-       KD = Object.freeze(new pD.h(sD, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
-   },
-   39209: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => KD,
-       i: () => LD
-     });
-     var pD = wD(351),
-       sD = wD(4486);
-     const KD = new Set(sD.r),
-       rD = new Map;
- 
-     function LD(DD, zD) {
-       let wD = rD.get(zD);
-       void 0 === wD && (wD = new Map, rD.set(zD, wD));
-       let sD = wD.get(DD);
- ... (2 more removed lines; see GitHub link above)
+       Ip = Object.freeze(new Op.e(op, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/190.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/190.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f)

#### 1. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/190.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/190.js#L2)

```diff
- export const ids = [51, 190];
+ export const ids = [190];
```

#### 2. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L4-L7` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/190.js#L4-L8) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/190.js#L4-L7)

```diff
-   38621: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => sD,
-       g: () => KD
+   40670: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       FORMER_BLOCK_IMAGE_NAMES: () => Op.e,
+       textureAnimationData: () => op.l,
+       textureNameToIndex: () => op.p
```

#### 3. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L9-L42` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/190.js#L10-L11) · [Before (L9-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/190.js#L9-L42)

```diff
-     const pD = new WeakMap;
- 
-     function sD(DD, zD) {
-       return pD.set(DD, zD), DD
-     }
- 
-     function KD(DD) {
-       var zD;
-       return null !== (zD = pD.get(DD)) && void 0 !== zD ? zD : null
-     }
-   },
-   38524: (DD, zD, wD) => {
-     function pD(DD, zD, wD) {
-       var pD;
-       const {
-         width: sD,
- ... (18 more removed lines; see GitHub link above)
+     var Op = cp(38954),
+       op = cp(9338)
```

#### 4. `bundles/bloxd.io/chunks/js/190.js` (Changed code · before: `L44` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5fR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f6b96cdb231db32cfc4d4f75a5fef7d01823db42f3495314b0bf2ca58f375f5f) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/190.js#L13) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/190.js#L44)

```diff
-   38533: (DD, zD, wD) => {
+   9436: (pp, ip, cp) => {
```
