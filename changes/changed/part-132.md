# Changed — Bundle Modifications Report (Part 132 / 133)

- **Updated at**: `2026-11-20T23:38 JST`
- **Part**: `132 / 133` (**293** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 131](part-131.md) · [Part 133 →](part-133.md)

## `bloxd.io` · `bundles/bloxd.io/main.js` (qepqb8.0352199c → bcgkc.38229551 · continued)

- **File**: `bundles/bloxd.io/main.js` (1187 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 630. `bundles/bloxd.io/main.js` (Changed code · before: `L9922-L9924` → after: `L26452-L26472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26452-L26472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L26452-L26472) · [Before (L9922-L9924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9922-L9924)

```diff
-                 }, {
-                   test: function(vv) {
-                     return "playstation 4" === vv.getOSName(!0)
+                 }), [TT])
+               }(kT), cT) return null;
+             const YT = (0, VT.purchasesAllowed)(),
+               BT = YT && (0, JT.jsx)(aT.c, {
+                 delayShow: 0,
+                 hoverOnly: !0,
+                 tooltipInner: (0, JT.jsx)("div", {
+                   children: xT("store:title")
+                 }),
+                 children: (0, JT.jsxs)("button", {
+                   type: "button",
+                   className: "HomeHeaderAccountButton HomeHeaderStoreButton",
+                   "aria-label": xT("store:title"),
+                   ...GT.g,
+                   onPointerEnter: ET.r,
+                   onPointerDown: ET.r,
+ ... (5 more added lines; see GitHub link above)
```

#### 631. `bundles/bloxd.io/main.js` (Changed code · before: `L9926-L9933` → after: `L26474-L26661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26474-L26661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L26474-L26661) · [Before (L9926-L9933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9926-L9933)

```diff
-                   describe: function() {
-                     return {
-                       type: ev.PLATFORMS_MAP.tv
-                     }
-                   }
-                 }, {
-                   test: function(vv) {
-                     return "roku" === vv.getOSName(!0)
+                   children: [(0, JT.jsx)(jT.e, {
+                     name: "store"
+                   }), null !== UT && (0, JT.jsx)("span", {
+                     className: "HomeHeaderStoreDot"
+                   })]
+                 })
+               }),
+               WT = () => {
+                 hT.e.set({
+                   openEverythingMenuName: NT.o.SETTINGS
+                 })
+               };
+             return (0, JT.jsx)("header", {
+               className: IT()("HomeHeader", {
+                 HomeHeaderHidden: !kT,
+                 HomeHeaderVisible: kT
+ ... (172 more added lines; see GitHub link above)
```

#### 632. `bundles/bloxd.io/main.js` (Changed code · before: `L9935-L9941` → after: `L26663-L27012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26663-L27012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L26663-L27012) · [Before (L9935-L9941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9935-L9941)

```diff
-                   describe: function() {
-                     return {
-                       type: ev.PLATFORMS_MAP.tv
-                     }
-                   }
-                 }];
-               zv.default = gv, vv.exports = zv.default
+                   children: [(0, ST.jsx)(AT.e, {
+                     name: "magnifying-glass"
+                   }), !kT && cT("general:search")]
+                 })
+               }), (0, ST.jsx)(IT.c, {
+                 delayShow: 0,
+                 hoverOnly: !0,
+                 tooltipInner: (0, ST.jsx)("div", {
+                   children: FT(cT("general:create"), cT("studio:goToStudio"))
+                 }),
+                 children: (0, ST.jsxs)(xT.P, {
+                   className: "HomeLinkButton HomeLinkButtonStudio",
+                   href: "/studio",
+                   showPress: !0,
+                   onClick: () => {
+                     lT("/studio")
+ ... (334 more added lines; see GitHub link above)
```

#### 633. `bundles/bloxd.io/main.js` (Changed code · before: `L9943-L9946` → after: `L27014-L27187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27014-L27187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27014-L27187) · [Before (L9943-L9946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9943-L9946)

```diff
-             95: function(vv, zv, Pv) {
-               zv.__esModule = !0, zv.default = void 0;
-               var hv, Sv = (hv = Pv(17)) && hv.__esModule ? hv : {
-                   default: hv
+             vT = {
+               id: "LobbyLeaderboard",
+               icon: "list",
+               noaAction: "OpenLobbyLeaderboard",
+               open: () => {
+                 KT.e.set({
+                   openEverythingMenuName: MT.o.LOBBY_LEADERBOARD
+                 })
+               },
+               hudId: "scoreboard"
+             },
+             tT = {
+               id: "LobbyManage",
+               icon: "users-gear",
+               noaAction: null,
+               open: () => {
+ ... (158 more added lines; see GitHub link above)
```

#### 634. `bundles/bloxd.io/main.js` (Changed code · before: `L9948-L10000` → after: `L27189-L27289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27189-L27289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27189-L27289) · [Before (L9948-L10000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L9948-L10000)

```diff
-                 ev = Pv(18),
-                 gv = [{
-                   test: function(vv) {
-                     return "microsoft edge" === vv.getBrowserName(!0)
-                   },
-                   describe: function(vv) {
-                     if (/\sedg\//i.test(vv)) return {
-                       name: ev.ENGINE_MAP.Blink
-                     };
-                     var zv = Sv.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, vv);
-                     return {
-                       name: ev.ENGINE_MAP.EdgeHTML,
-                       version: zv
-                     }
-                   }
-                 }, {
- ... (37 more removed lines; see GitHub link above)
+                 children: cT > 0 ? cT : "\u221e"
+               }) : null]
+             })
+           }
+           const hT = 1,
+             NT = 5,
+             QT = 2e3,
+             ST = "undefined" !== typeof ResizeObserverEntry && "devicePixelContentBoxSize" in ResizeObserverEntry.prototype;
+ 
+           function DT(TT) {
+             let {
+               itemName: kT,
+               iconsVersion: cT
+             } = TT;
+             const {
+               iconRef: lT,
+ ... (85 more added lines; see GitHub link above)
```

#### 635. `bundles/bloxd.io/main.js` (Changed code · before: `L10003-L10075` → after: `L27295-L27298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27295-L27298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27295-L27298) · [Before (L10003-L10075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10003-L10075)

```diff
-                 }, {
-                   test: [/(apple)?webkit/i],
-                   describe: function(vv) {
-                     var zv = {
-                         name: ev.ENGINE_MAP.WebKit
-                       },
-                       Pv = Sv.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, vv);
-                     return Pv && (zv.version = Pv), zv
-                   }
-                 }];
-               zv.default = gv, vv.exports = zv.default
-             }
-           })
-         }, , , , (vv, zv, Pv) => {
-           Pv.r(zv), Pv.d(zv, {
-             currentUrl: () => Sv
- ... (57 more removed lines; see GitHub link above)
+                 })), document.addEventListener("animationend", mT, !0), document.addEventListener("transitionend", mT, !0)), PT.set(TT, kT), wT.observe(TT, ST ? {
+                   box: "device-pixel-content-box"
+                 } : void 0), () => {
+                   PT.delete(TT), wT.unobserve(TT)
```

#### 636. `bundles/bloxd.io/main.js` (Changed code · before: `L10077-L10080` → after: `L27300-L27306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27300-L27306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27300-L27306) · [Before (L10077-L10080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10077-L10080)

```diff
-                 const gv = zv + Pv[0],
-                   pv = vv[gv];
-                 return pv ? Sv = pv : (Sv = ev.TgIWQA(Sv), vv[gv] = Sv), Sv
-               }, ev(vv, zv)
+               }(lT, IT);
+               return () => {
+                 OT = -1, clearTimeout(KT), CT()
+               }
+             }), [TT, kT]), {
+               iconRef: cT,
+               iconUrl: lT
```

#### 637. `bundles/bloxd.io/main.js` (Changed code · before: `L10083-L10113` → after: `L27310-L27325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27310-L27325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27310-L27325) · [Before (L10083-L10113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10083-L10113)

```diff
-             function gv() {
-               const vv = ["mJbUrLPlDMO", "oxz4EK5sEq", "odrRuxfsENu", "nhLfCfzcAG", "mtC2ntm2ywnOCfLs", "nJeXndyZD3fxA3jr", "nZuZnty0z3Dzwuvs", "odmYmdLUq0PkBKO", "mtyXoti3n1z1ENziDG", "nhjOCvn2ta", "mtC4nZq5q0v2DvLI", "ntG1mZC1sfnOBMjh"];
-               return (gv = function() {
-                 return vv
-               })()
-             }
-             window.addEventListener("message", (function(vv) {
-                 var zv, Pv;
-                 "string" === typeof(null === (zv = vv.data) || void 0 === zv ? void 0 : zv.type) && "updateSearchParam" === (null === (Pv = vv.data) || void 0 === Pv ? void 0 : Pv.type) && (console.log(`Adding search param ${vv.data.name} with value ${vv.data.value}`), Sv.setSear … [truncated]
-               })),
-               function(vv) {
-                 const zv = ev,
-                   Pv = vv();
-                 for (;;) try {
-                   if (183486 === parseInt(zv(393)) / 1 * (parseInt(zv(398)) / 2) + parseInt(zv(388)) / 3 * (-parseInt(zv(392)) / 4) + parseInt(zv(394)) / 5 + parseInt(zv(397)) / 6 * (parseInt(zv(390)) / 7) + parseInt(zv(399)) / 8 * (-parseInt(zv(396)) / 9) + parseInt(zv(395)) / 1 … [truncated]
-                   Pv.push(Pv.shift())
- ... (15 more removed lines; see GitHub link above)
+           function zT(TT) {
+             let {
+               iconName: kT,
+               url: cT,
+               tintColor: MT
+             } = TT;
+             return MT && (0, lT.b)(MT) ? (0, xT.jsxs)("div", {
+               className: "TwoDImageIcon",
+               children: [(0, xT.jsx)("div", {
+                 className: "TwoDItemGrayscaleDropOuter",
+                 children: (0, xT.jsx)("img", {
+                   src: cT,
+                   className: "TwoDItemGrayscale",
+                   alt: "",
+                   style: {
+                     filter: `drop-shadow(1em 0 0 ${MT})`
```

#### 638. `bundles/bloxd.io/main.js` (Changed code · before: `L10116` → after: `L27328-L27469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27328-L27469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27328-L27469) · [Before (L10116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10116)

```diff
-               })()
+               }), (0, xT.jsx)("img", {
+                 src: cT,
+                 className: "TwoDItemGrayscaleVisiblePng",
+                 alt: kT
+               })]
+             }) : (0, xT.jsx)("div", {
+               className: "TwoDImageIcon",
+               style: {
+                 backgroundImage: jT(cT)
+               }
+             })
+           }
+ 
+           function JT(TT) {
+             let {
+               url: kT,
+ ... (126 more added lines; see GitHub link above)
```

#### 639. `bundles/bloxd.io/main.js` (Changed code · before: `L10118` → after: `L27471-L27472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27471-L27472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27471-L27472) · [Before (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10118)

```diff
-         }, , , , , (vv, zv, Pv) => {
+         },
+         2619: (TT, kT, cT) => {
```

#### 640. `bundles/bloxd.io/main.js` (Changed code · before: `L10120` → after: `L27474-L27475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27474-L27475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27474-L27475) · [Before (L10120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10120)

```diff
-             b: () => sv
+             b: () => fT,
+             c: () => yT
```

#### 641. `bundles/bloxd.io/main.js` (Changed code · before: `L10122-L10145` → after: `L27477-L27479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27477-L27479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27477-L27479) · [Before (L10122-L10145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10122-L10145)

```diff
-           var hv = "undefined" !== typeof window ? window : {
-               screen: {},
-               navigator: {}
-             },
-             Sv = (hv.matchMedia || function() {
-               return {
-                 matches: !1
-               }
-             }).bind(hv),
-             ev = {
-               get passive() {
-                 return !0
-               }
-             },
-             gv = function() {};
-           hv.addEventListener && hv.addEventListener("p", gv, ev), hv.removeEventListener && hv.removeEventListener("p", gv, !1);
- ... (8 more removed lines; see GitHub link above)
+           var lT = cT(71),
+             MT = cT(2623);
+           let KT = null;
```

#### 642. `bundles/bloxd.io/main.js` (Changed code · before: `L10148` → after: `L27482-L27496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27482-L27496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27482-L27496) · [Before (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10148)

```diff
-             return av
+             return KT || (KT = Promise.resolve().then((() => cT(4649))).then((TT => {
+               const kT = TT.matchmakingLibrariesPromise.then((TT => (0, MT.e)(TT.loadCharacterPreview(), (TT => TT.CharacterPreview))));
+               return Promise.all([TT.ensureGameSetup(), kT]).then((TT => {
+                 let [, kT] = TT;
+                 return kT
+               }))
+             })), KT.catch((() => {
+               KT = null
+             })), KT)
+           }
+ 
+           function yT() {
+             OT().catch((TT => {
+               console.warn("Failed to preload the character preview", TT)
+             }))
```

#### 643. `bundles/bloxd.io/main.js` (Changed code · before: `L10150` → after: `L27498-L27500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27498-L27500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27498-L27500) · [Before (L10150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10150)

```diff
-         }, , , , (vv, zv, Pv) => {
+           const fT = (0, lT.lazy)((() => Promise.resolve().then((() => cT(4649))).then((TT => (TT.needGameClientAfterPaint(), OT())))))
+         },
+         2485: (TT, kT, cT) => {
```

#### 644. `bundles/bloxd.io/main.js` (Changed code · before: `L10152-L10155` → after: `L27502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27502) · [Before (L10152-L10155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10152-L10155)

```diff
-             A: () => Tv,
-             b: () => Cv,
-             d: () => gv,
-             f: () => Nv,
+             c: () => tT,
```

#### 645. `bundles/bloxd.io/main.js` (Changed code · before: `L10159-L10164` → after: `L27505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27505) · [Before (L10159-L10164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10159-L10164)

```diff
-             l: () => Wv,
-             m: () => ev.l,
-             n: () => ev.p,
-             p: () => sv,
-             t: () => av,
-             w: () => wv
+             l: () => jT
```

#### 646. `bundles/bloxd.io/main.js` (Changed code · before: `L10166-L10168` → after: `L27507-L27515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27507-L27515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27507-L27515) · [Before (L10166-L10168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10166-L10168)

```diff
-           var hv = Pv(77),
-             Sv = Pv.n(hv),
-             ev = Pv(93);
+           var lT = cT(71),
+             MT = cT(328),
+             KT = cT(31),
+             OT = cT(1497),
+             yT = cT(1974),
+             fT = cT(2487);
+           let xT = null,
+             IT = 0;
+           const AT = new Set;
```

#### 647. `bundles/bloxd.io/main.js` (Changed code · before: `L10171-L10172` → after: `L27518-L27535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27518-L27535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27518-L27535) · [Before (L10171-L10172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10171-L10172)

```diff
-             var zv;
-             return !1 === (null === (zv = vv.features) || void 0 === zv ? void 0 : zv.has("shader-f16")) && pv(vv)
+             xT = {
+               ...TT,
+               seq: ++IT
+             }, (0, OT.reportAnalyticsClick)({
+               id: "lobby_manage.open",
+               value: TT.source
+             });
+             for (const kT of AT) kT(xT);
+             KT.e.set({
+               openEverythingMenuName: MT.o.LOBBY_LEADERBOARD
+             })
+           }
+ 
+           function jT() {
+             const [TT, kT] = (0, lT.useState)(xT);
+             return (0, lT.useEffect)((() => (AT.add(kT), kT(xT), () => {
+ ... (2 more added lines; see GitHub link above)
```

#### 648. `bundles/bloxd.io/main.js` (Changed code · before: `L10177-L10179` → after: `L27540-L27543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27540-L27543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27540-L27543) · [Before (L10177-L10179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10177-L10179)

```diff
-             if ("intel" !== (null === (zv = vv.info) || void 0 === zv ? void 0 : zv.vendor) || "gen-9" !== vv.info.architecture) return !1;
-             const Pv = Sv().getParser(navigator.userAgent);
-             return "windows" === Pv.getOSName(!0) && "Blink" === Pv.getEngineName()
+             if ((null === (kT = xT) || void 0 === kT ? void 0 : kT.seq) === TT) {
+               xT = null;
+               for (const TT of AT) TT(null)
+             }
```

#### 649. `bundles/bloxd.io/main.js` (Changed code · before: `L10183-L10185` → after: `L27552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27552) · [Before (L10183-L10185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10183-L10185)

```diff
-             var zv, Pv;
-             let hv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (zv = null === (Pv = globalThis.navigator) || void 0 === Pv ? void 0 : Pv.userAgent) && void 0 !== zv ? zv : "";
-             return "intel" === vv.vendor && "gen-12lp" === vv.architecture && hv.includes("Windows")
+             return null !== TT && Object.keys(TT).some((kT => "name" !== kT && !0 !== TT[kT].hidden))
```

#### 650. `bundles/bloxd.io/main.js` (Changed code · before: `L10189-L10191` → after: `L27556-L27561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27556-L27561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27556-L27561) · [Before (L10189-L10191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10189-L10191)

```diff
-             var zv, Pv;
-             let hv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (zv = null === (Pv = globalThis.navigator) || void 0 === Pv ? void 0 : Pv.userAgent) && void 0 !== zv ? zv : "";
-             return "qualcomm" === vv.vendor && !hv.includes("Windows")
+             let {
+               you: kT,
+               visibility: cT,
+               listing: lT
+             } = TT;
+             return kT.canSetVisibility || "whitelist" === cT && kT.canEditWhitelist || "public" === cT && null !== lT
```

#### 651. `bundles/bloxd.io/main.js` (Changed code · before: `L10195-L10205` → after: `L27565-L27603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27565-L27603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27565-L27603) · [Before (L10195-L10205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10195-L10205)

```diff
-             var zv, Pv;
-             let hv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (zv = null === (Pv = globalThis.navigator) || void 0 === Pv ? void 0 : Pv.userAgent) && void 0 !== zv ? zv : "";
-             return "qualcomm" === vv.vendor && "adreno-7xx" === vv.architecture && hv.includes("Windows")
-           }
-           const Tv = "webGpuOldIntelDriver",
-             Wv = "liteFellBack",
-             wv = "webGpuIntelGen9",
-             av = "webGpuGpuClassWebGl",
-             sv = "webGlHoldbackSpared",
-             Cv = "Intel driver too old for Lite (no shader-f16)"
-         }, , , (vv, zv, Pv) => {
+             return null !== TT && "whitelist" === TT.visibility && MT(TT) ? "joining" : "players"
+           }
+ 
+           function OT(TT, kT) {
+             const cT = kT ? ["leaderboard", "players"] : ["players"];
+             return MT(TT) && cT.push("joining"), TT.rules.length > 0 && cT.push("rules"), cT
+           }
+ 
+           function yT(TT, kT) {
+             if (kT) return TT.length - 1;
+             const cT = TT.findLastIndex((TT => TT <= 1));
+             return Math.max(0, cT)
+           }
+           cT.d(kT, {
+             b: () => KT,
+             f: () => OT,
+ ... (23 more added lines; see GitHub link above)
```

#### 652. `bundles/bloxd.io/main.js` (Changed code · before: `L10208-L10211` → after: `L27606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27606) · [Before (L10208-L10211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10208-L10211)

```diff
-             h: () => ev,
-             k: () => pv,
-             l: () => dv,
-             p: () => Sv
+             i: () => GT
```

#### 653. `bundles/bloxd.io/main.js` (Changed code · before: `L10213-L10227` → after: `L27608-L27659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27608-L27659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27608-L27659) · [Before (L10213-L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10213-L10227)

```diff
-           var hv = Pv(101);
-           async function Sv(vv) {
-             var zv, Pv, Sv;
-             let pv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-             const dv = await vv.requestAdapter({
-               powerPreference: hv.b
-             });
-             if (!dv) return "no_adapter";
-             if (await ev(dv), null !== (zv = null !== (Pv = null === (Sv = dv.info) || void 0 === Sv ? void 0 : Sv.isFallbackAdapter) && void 0 !== Pv ? Pv : dv.isFallbackAdapter) && void 0 !== zv && zv) return "software_adapter";
-             if (pv) {
-               const {
-                 vendor: vv,
-                 architecture: zv
-               } = gv(dv);
-               (0, hv.x)(vv, zv)
+           var lT = cT(71),
+             MT = cT(1130),
+             KT = cT(1195),
+             OT = cT(1348),
+             yT = cT(1853),
+             fT = cT(1888),
+             xT = cT(328),
+             IT = cT(118),
+             AT = cT(1710),
+             CT = cT(2080),
+             jT = cT(1847),
+             vT = cT(159),
+             tT = cT(31),
+             hT = cT(1316),
+             NT = cT(1061),
+             QT = cT(1486),
+ ... (36 more added lines; see GitHub link above)
```

#### 654. `bundles/bloxd.io/main.js` (Changed code · before: `L10229` → after: `L27661-L27808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27661-L27808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27661-L27808) · [Before (L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10229)

```diff
-             return dv
+             const vT = IT.isLoggedIn() && IT.availableUserContextTypes.includes(kT),
+               tT = IT.availableUserContextTypes.some((TT => TT !== yT.e.ANONYMOUS && TT !== kT));
+             return (0, zT.jsxs)("div", {
+               className: "LoginButtonContainer",
+               children: [AT && (0, zT.jsx)("div", {
+                 className: "LoggingInLoader",
+                 children: (0, zT.jsx)(OT.d, {})
+               }), (0, zT.jsxs)("button", {
+                 type: "button",
+                 className: mT()("LoginButton", {
+                   LoginButtonsLoggedIn: IT.isLoggedIn(),
+                   LoginButtonLinked: vT
+                 }),
+                 "aria-disabled": IT.isLoggedIn() || void 0,
+                 tabIndex: IT.isLoggedIn() ? -1 : void 0,
+                 ...(0, bT.e)({
+ ... (132 more added lines; see GitHub link above)
```

#### 655. `bundles/bloxd.io/main.js` (Changed code · before: `L10231-L10232` → after: `L27810-L27843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27810-L27843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27810-L27843) · [Before (L10231-L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10231-L10232)

```diff
-           async function ev(vv) {
-             void 0 === vv.info && void 0 !== vv.requestAdapterInfo && (vv.info = await vv.requestAdapterInfo())
+ 
+           function VT() {
+             const {
+               t: TT
+             } = (0, KT.B)(), {
+               userContext: kT,
+               isUserContextUpdating: cT
+             } = (0, MT.b)(), lT = GT({
+               showProgressUpdateMessage: !0,
+               enabled: !cT && !kT.isLoggedIn(),
+               withGameAccounts: !1
+             });
+             return cT || kT.isLoggedIn() ? null : null === lT ? (0, zT.jsx)(OT.d, {}) : lT.length > 1 ? (0, zT.jsx)("div", {
+               className: "LoginButtonContainer",
+               children: (0, zT.jsxs)("button", {
+                 type: "button",
+ ... (18 more added lines; see GitHub link above)
```

#### 656. `bundles/bloxd.io/main.js` (Changed code · before: `L10236-L10240` → after: `L27860-L27904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27860-L27904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27860-L27904) · [Before (L10236-L10240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10236-L10240)

```diff
-             var zv, Pv, hv, Sv;
-             return {
-               vendor: null !== (zv = null === (Pv = vv.info) || void 0 === Pv ? void 0 : Pv.vendor) && void 0 !== zv ? zv : "",
-               architecture: null !== (hv = null === (Sv = vv.info) || void 0 === Sv ? void 0 : Sv.architecture) && void 0 !== hv ? hv : ""
-             }
+             let {
+               onPress: kT,
+               showProgressUpdateMessage: cT
+             } = TT;
+             const {
+               t: lT
+             } = (0, MT.B)(), {
+               isUserContextUpdating: KT
+             } = (0, OT.b)(), {
+               gameState: AT
+             } = (0, yT.n)(["gameState"]), CT = "inGame" === AT, jT = (0, fT.i)({
+               showProgressUpdateMessage: cT,
+               enabled: !KT && !CT,
+               onPress: kT
+             });
+             return CT ? (0, IT.jsx)("div", {
+ ... (29 more added lines; see GitHub link above)
```

#### 657. `bundles/bloxd.io/main.js` (Changed code · before: `L10244-L10245` → after: `L27908-L27930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27908-L27930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27908-L27930) · [Before (L10244-L10245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10244-L10245)

```diff
-             var zv, Pv, hv, Sv;
-             return /swiftshader/i.test(`${null!==(zv=null===(Pv=vv.info)||void 0===Pv?void 0:Pv.vendor)&&void 0!==zv?zv:""} ${null!==(hv=null===(Sv=vv.info)||void 0===Sv?void 0:Sv.architecture)&&void 0!==hv?hv:""}`)
+             let {
+               titleKey: kT,
+               onLogin: cT,
+               showProgressUpdateMessage: KT,
+               close: yT
+             } = TT;
+             const {
+               t: fT
+             } = (0, MT.B)(), {
+               userContext: xT
+             } = (0, OT.b)(), CT = xT.isLoggedIn();
+             return (0, lT.useEffect)((() => {
+               CT && yT()
+             }), [CT, yT]), (0, IT.jsxs)("div", {
+               className: "LoginPopupInner",
+               children: [(0, IT.jsx)("div", {
+ ... (7 more added lines; see GitHub link above)
```

#### 658. `bundles/bloxd.io/main.js` (Changed code · before: `L10247-L10249` → after: `L27932-L28062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27932-L28062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L27932-L28062) · [Before (L10247-L10249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10247-L10249)

```diff
-           async function dv(vv) {
-             const zv = await Sv(vv);
-             return "string" === typeof zv ? null : zv
+         },
+         1348: (TT, kT, cT) => {
+           cT.d(kT, {
+             d: () => IT
+           });
+           var lT = cT(1046),
+             MT = cT.n(lT),
+             KT = cT(71),
+             OT = cT(118),
+             yT = cT(1061),
+             fT = cT(1356),
+             xT = cT(1099);
+           const IT = (0, KT.memo)((function(TT) {
+             let {
+               loading: kT = !0,
+               progress: cT,
+ ... (115 more added lines; see GitHub link above)
```

#### 659. `bundles/bloxd.io/main.js` (Changed code · before: `L10251` → after: `L28064-L28065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28064-L28065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28064-L28065) · [Before (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10251)

```diff
-         }, , , , , , , , (vv, zv, Pv) => {
+         },
+         4560: (TT, kT, cT) => {
```

#### 660. `bundles/bloxd.io/main.js` (Changed code · before: `L10253-L10262` → after: `L28067-L28068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28067-L28068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28067-L28068) · [Before (L10253-L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10253-L10262)

```diff
-             B: () => lv,
-             b: () => iv,
-             e: () => Cv,
-             i: () => av,
-             m: () => Wv,
-             p: () => gv,
-             s: () => wv,
-             t: () => ev,
-             w: () => sv,
-             x: () => Tv
+             d: () => WT,
+             g: () => BT
```

#### 661. `bundles/bloxd.io/main.js` (Changed code · before: `L10264-L10265` → after: `L28070-L28176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28070-L28176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28070-L28176) · [Before (L10264-L10265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10264-L10265)

```diff
-           let hv = null,
-             Sv = !1;
+           var lT = cT(4611),
+             MT = cT(1020),
+             KT = cT(761),
+             OT = cT(1046),
+             yT = cT.n(OT),
+             fT = cT(71),
+             xT = cT(1333),
+             IT = cT(4566),
+             AT = cT(1195),
+             CT = cT(1363),
+             jT = cT(3440),
+             vT = cT(1130),
+             tT = cT(1530),
+             hT = cT(31),
+             NT = cT(1379),
+             QT = cT(1518),
+ ... (91 more added lines; see GitHub link above)
```

#### 662. `bundles/bloxd.io/main.js` (Changed code · before: `L10268-L10299` → after: `L28179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28179) · [Before (L10268-L10299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10268-L10299)

```diff
-             return Sv = !0, hv ??= function() {
-               let vv = null,
-                 zv = !1;
-               try {
-                 var Pv, hv;
-                 let Sv = cv({
-                   failIfMajorPerformanceCaveat: !0
-                 });
-                 if (Sv || (Sv = cv({}), zv = null !== Sv), !Sv) return null;
-                 vv = Sv.gl;
-                 const ev = vv.getExtension("WEBGL_debug_renderer_info"),
-                   gv = {
-                     vendor: null !== (Pv = vv.getParameter(null !== (hv = null === ev || void 0 === ev ? void 0 : ev.UNMASKED_VENDOR_WEBGL) && void 0 !== hv ? hv : vv.VENDOR)) && void 0 !== Pv ? Pv : "",
-                     renderer: ev ? String(vv.getParameter(ev.UNMASKED_RENDERER_WEBGL)) : "",
-                     majorPerformanceCaveat: zv
-                   };
- ... (16 more removed lines; see GitHub link above)
+             return Promise.all([cT.e(106), cT.e(107), cT.e(102), cT.e(104), cT.e(209), cT.e(390)]).then((() => cT(36138)))
```

#### 663. `bundles/bloxd.io/main.js` (Changed code · before: `L10303` → after: `L28183-L28194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28183-L28194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28183-L28194) · [Before (L10303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10303)

```diff
-             return Sv ? hv : void 0
+             const {
+               t: TT
+             } = (0, AT.B)();
+             return (0, oT.jsxs)(oT.Fragment, {
+               children: [(0, oT.jsx)("div", {
+                 className: "MyWorldsTitle SmallTextBold",
+                 children: TT("game:worlds")
+               }), (0, oT.jsx)("div", {
+                 className: "MyWorldsDescription SmallTextLight",
+                 children: TT("game:worldsDescription")
+               })]
+             })
```

#### 664. `bundles/bloxd.io/main.js` (Changed code · before: `L10309-L10312` → after: `L28197-L28376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28197-L28376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28197-L28376) · [Before (L10309-L10312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10309-L10312)

```diff
-           function lv(vv, zv) {
-             "" !== zv && (pv ??= {
-               vendor: vv,
-               renderer: zv
+           function LT(TT) {
+             let {
+               closePopup: kT,
+               startFirstWorld: cT
+             } = TT;
+             const {
+               t: lT
+             } = (0, AT.B)(), {
+               userContext: MT,
+               isUserContextUpdating: KT
+             } = (0, vT.b)(), [OT, yT] = (0, fT.useState)(null);
+             (0, fT.useLayoutEffect)((() => {
+               KT || null !== OT || (MT.getPersonalWorldLobbyName() ? yT("worlds") : (yT("firstWorld"), cT(MT)))
+             }), [KT, OT, MT, cT]);
+             const [xT, IT] = (0, fT.useState)(!1);
+             if ((0, fT.useEffect)((() => {
+ ... (164 more added lines; see GitHub link above)
```

#### 665. `bundles/bloxd.io/main.js` (Changed code · before: `L10316-L10319` → after: `L28381-L28385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28381-L28385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28381-L28385) · [Before (L10316-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10316-L10319)

```diff
-           function Tv(vv, zv) {
-             "" === vv && "" === zv || (dv ??= {
-               vendor: vv,
-               architecture: zv
+           function UT(TT) {
+             CT.NotificationProvider.showAlertPopup({
+               title: "Failed to create world",
+               subtitle: TT.message,
+               confirmText: "general:ok"
```

#### 666. `bundles/bloxd.io/main.js` (Changed code · before: `L10337-L10338` → after: `L28390-L28393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28390-L28393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28390-L28393) · [Before (L10337-L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10337-L10338)

```diff
-             var zv, Pv;
-             Nv ??= null !== (zv = null === (Pv = vv.getSupportedExtensions()) || void 0 === Pv ? void 0 : Pv.includes("KHR_parallel_shader_compile")) && void 0 !== zv ? zv : null
+             return CT.NotificationProvider.showCustomPopup({
+               body: TT,
+               middleScreenPopupClassName: "MyWorldsPopup"
+             })
```

#### 667. `bundles/bloxd.io/main.js` (Changed code · before: `L10342` → after: `L28397-L28455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28397-L28455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28397-L28455) · [Before (L10342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10342)

```diff
-             return Nv
+             const {
+               userContext: TT
+             } = (0, vT.b)(), kT = (0, tT.useNavigatePreserveSearch)(), MT = TT.getPersonalWorldLobbyName(), KT = (0, fT.useRef)(!1), OT = (0, fT.useRef)(null), yT = (0, fT.useCallback)((TT => {
+               (0, hT.l)("worldCreation"), kT((0, xT.c)("classic", TT))
+             }), [kT]), AT = (0, fT.useCallback)((() => {
+               const TT = OT.current;
+               return OT.current = null, null === TT || void 0 === TT || TT.tearDownNotification(), null !== TT
+             }), []), jT = (0, fT.useCallback)((TT => {
+               KT.current = !0, (0, gT.j)(lT.y), IT.c.createPersonalWorld(null).then((kT => {
+                 TT(kT), AT() && yT(kT)
+               })).catch((TT => {
+                 console.error("Failed to create personal world:", TT), AT(), UT(TT)
+               })).finally((() => {
+                 KT.current = !1
+               }))
+             }), [yT, AT]), NT = (0, fT.useCallback)((TT => {
+ ... (43 more added lines; see GitHub link above)
```

#### 668. `bundles/bloxd.io/main.js` (Changed code · before: `L10346-L10355` → after: `L28458-L28497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28458-L28497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28458-L28497) · [Before (L10346-L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10346-L10355)

```diff
-           function cv(vv) {
-             const zv = document.createElement("canvas");
-             for (const Pv of ["webgl2", "experimental-webgl2", "webgl", "experimental-webgl"]) {
-               const hv = zv.getContext(Pv, vv);
-               if (hv) return {
-                 gl: hv,
-                 webGl2: Pv.endsWith("webgl2")
-               }
-             }
-             return null
+           function WT() {
+             var TT;
+             const {
+               t: kT
+             } = (0, AT.B)(), {
+               handleClick: cT
+             } = BT(), lT = (0, jT.k)(), OT = (0, bT.s)(), fT = null === (TT = KT.e[MT.k]) || void 0 === TT ? void 0 : TT.cardEyebrow;
+             return (0, oT.jsx)("div", {
+               "data-pad-focusable": !0,
+               className: yT()("MyWorldButton", {
+                 MyWorldButtonPad: OT
+               }),
+               style: {
+                 "--homeRowSize": lT
+               },
+               onClick: () => cT(!1),
+ ... (24 more added lines; see GitHub link above)
```

#### 669. `bundles/bloxd.io/main.js` (Changed code · before: `L10357` → after: `L28499-L28500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28499-L28500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28499-L28500) · [Before (L10357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10357)

```diff
-         }, , , , , , , (vv, zv, Pv) => {
+         },
+         4598: (TT, kT, cT) => {
```

#### 670. `bundles/bloxd.io/main.js` (Changed code · before: `L10359-L10361` → after: `L28502-L28503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28502-L28503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28502-L28503) · [Before (L10359-L10361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10359-L10361)

```diff
-             b: () => cv,
-             c: () => mv,
-             f: () => iv,
+             d: () => fT,
+             g: () => jT,
```

#### 671. `bundles/bloxd.io/main.js` (Changed code · before: `L10363` → after: `L28505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28505) · [Before (L10363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10363)

```diff
-             k: () => dv,
+             j: () => tT,
```

#### 672. `bundles/bloxd.io/main.js` (Changed code · before: `L10365-L10368` → after: `L28507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28507) · [Before (L10365-L10368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10365-L10368)

```diff
-             o: () => sv,
-             q: () => Nv,
-             r: () => Tv,
-             v: () => Cv
+             n: () => AT
```

#### 673. `bundles/bloxd.io/main.js` (Changed code · before: `L10370-L10373` → after: `L28509-L28513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28509-L28513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28509-L28513) · [Before (L10370-L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10370-L10373)

```diff
-           var hv = Pv(144),
-             Sv = Pv(39),
-             ev = Pv(81),
-             gv = Pv(114);
+           var lT = cT(4611),
+             MT = cT(1497),
+             KT = cT(1514),
+             OT = cT(314),
+             yT = cT(4602);
```

#### 674. `bundles/bloxd.io/main.js` (Changed code · before: `L10376` → after: `L28516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28516) · [Before (L10376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10376)

```diff
-             return ev.currentUrl.hasSearchParam("referrer") ? ev.currentUrl.getSearchParam("referrer") : window.location !== window.parent.location && document.referrer && "" !== document.referrer ? document.referrer : document.location.href
+             return "setup" === OT.d.first_world_setup_v2
```

#### 675. `bundles/bloxd.io/main.js` (Changed code · before: `L10379-L10544` → after: `L28519-L28522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28519-L28522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28519-L28522) · [Before (L10379-L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10379-L10544)

```diff
-               bloxd: {
-                 enabled: !0,
-                 showPrivacyPolicy: !0,
-                 adConfig: {
-                   playPrerollOnJoin: !0,
-                   showRewardedAds: !0,
-                   canUseBanners: !0,
-                   bannerSupportRules: [],
-                   checkBannerViewability: !0
-                 }
-               },
-               crazygames: {
-                 enabled: !0,
-                 showPrivacyPolicy: !1,
-                 adConfig: {
-                   playPrerollOnJoin: !1,
- ... (150 more removed lines; see GitHub link above)
+             dayNight: "night",
+             fallDamage: "fall",
+             survivalGuns: "guns"
+           };
```

#### 676. `bundles/bloxd.io/main.js` (Changed code · before: `L10546-L10547` → after: `L28524-L28529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28524-L28529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28524-L28529) · [Before (L10546-L10547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10546-L10547)

```diff
-           function av(vv) {
-             return wv.includes(vv) && dv[vv].enabled
+           function IT(TT, kT) {
+             const cT = `v2.${OT.d.first_world_setup_v2}:${(0,yT.d)()}`;
+             (0, MT.reportAnalyticsClick)({
+               id: TT,
+               value: kT ? `${cT}:${kT}` : cT
+             })
```

#### 677. `bundles/bloxd.io/main.js` (Changed code · before: `L10594` → after: `L28533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28533) · [Before (L10594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10594)

```diff
-             return "discord" === sv
+             (0, OT.m)("first_world_setup_v2"), IT("first_world.start"), (0, KT.flushClientAnalyticsEvents)()
```

#### 678. `bundles/bloxd.io/main.js` (Changed code · before: `L10598` → after: `L28537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28537) · [Before (L10598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10598)

```diff
-             return "crazygames" === sv && "crazyGamesNinetyNineNightsBundle" === Cv
+             IT("first_world.shown")
```

#### 679. `bundles/bloxd.io/main.js` (Changed code · before: `L10602` → after: `L28541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28541) · [Before (L10602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10602)

```diff
-             return !cv()
+             IT("first_world.leave")
```

#### 680. `bundles/bloxd.io/main.js` (Changed code · before: `L10613-L10629` → after: `L28544-L28546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28544-L28546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28544-L28546) · [Before (L10613-L10629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10613-L10629)

```diff
-           function gv() {
-             if (void 0 === ev) {
-               var vv, zv;
-               const Pv = null === (vv = window.ReactNativeWebView) || void 0 === vv || null === (zv = vv.injectedObjectJson) || void 0 === zv ? void 0 : zv.call(vv);
-               ev = "string" === typeof Pv ? function(vv) {
-                 let zv;
-                 try {
-                   zv = JSON.parse(vv)
-                 } catch (ev) {
-                   return console.warn("App bridge: the app's injected object isn't JSON:", ev), null
-                 }
-                 if ("object" !== typeof zv || null === zv || !Object.prototype.hasOwnProperty.call(zv, Sv.b)) return null;
-                 const Pv = Sv.h.safeParse(zv[Sv.b]);
-                 return Pv.success ? Pv.data : (console.warn(`App bridge: the app's injected hello is invalid: ${hv.I(Pv.error)}`), null)
-               }(Pv) : null
-             }
- ... (1 more removed lines; see GitHub link above)
+           function vT(TT) {
+             let kT;
+             kT = "plugin" in TT ? `${xT[TT.plugin]}.${TT.enabled?"on":"off"}` : "defaultGamemode" in TT ? `gamemode.${TT.defaultGamemode}` : `map.${TT.mapType}`, IT("first_world.pick", kT)
```

#### 681. `bundles/bloxd.io/main.js` (Changed code · before: `L10632-L10637` → after: `L28549-L28552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28549-L28552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28549-L28552) · [Before (L10632-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10632-L10637)

```diff
-           function pv() {
-             const vv = function(vv) {
-               const zv = /(?:^|\s)BloxdApp\/(\d+)(?=\s|$)/.exec(vv);
-               return null === zv ? null : Number(zv[1])
-             }(navigator.userAgent);
-             return void 0 !== window.ReactNativeWebView && null !== vv && vv >= 2
+           function tT(TT) {
+             const kT = lT.n.filter((kT => TT.plugins[kT])).map((TT => xT[TT])),
+               cT = kT.length > 0 ? kT.join("-") : "none";
+             IT("first_world.play", `${TT.defaultGamemode}:${TT.mapType}:${cT}`)
```

#### 682. `bundles/bloxd.io/main.js` (Changed code · before: `L10639` → after: `L28554-L28555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28554-L28555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28554-L28555) · [Before (L10639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10639)

```diff
-         }, , , , , , , , (vv, zv, Pv) => {
+         },
+         1370: (TT, kT, cT) => {
```

#### 683. `bundles/bloxd.io/main.js` (Changed code · before: `L10642-L10663` → after: `L28560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28560) · [Before (L10642-L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10642-L10663)

```diff
-             f: () => Iz,
-             i: () => Vz,
-             k: () => Bz,
-             o: () => bz,
-             q: () => Lz,
-             s: () => kz,
-             t: () => hP,
-             w: () => Dz,
-             C: () => Zz,
-             D: () => zP,
-             E: () => pP,
-             I: () => Rv,
-             J: () => Ez,
-             K: () => fz,
-             N: () => Az,
-             Q: () => nz,
- ... (6 more removed lines; see GitHub link above)
+             i: () => vT
```

#### 684. `bundles/bloxd.io/main.js` (Changed code · before: `L10666-L10733` → after: `L28574-L28575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28574-L28575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28574-L28575) · [Before (L10666-L10733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10666-L10733)

```diff
-           function hv(vv, zv, Pv) {
-             function hv(Pv, hv) {
-               if (Pv._zod || Object.defineProperty(Pv, "_zod", {
-                   value: {
-                     def: hv,
-                     constr: gv,
-                     traits: new Set
-                   },
-                   enumerable: !1
-                 }), Pv._zod.traits.has(vv)) return;
-               Pv._zod.traits.add(vv), zv(Pv, hv);
-               const Sv = gv.prototype,
-                 ev = Object.keys(Sv);
-               for (let vv = 0; vv < ev.length; vv++) {
-                 const zv = ev[vv];
-                 zv in Pv || (Pv[zv] = Sv[zv].bind(Pv))
- ... (52 more removed lines; see GitHub link above)
+           function vT() {
+             return jT > 0
```

#### 685. `bundles/bloxd.io/main.js` (Changed code · before: `L10737-L10746` → after: `L28579-L28614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28579-L28614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28579-L28614) · [Before (L10737-L10746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10737-L10746)

```diff
-             return {
-               get value() {
-                 {
-                   const zv = vv();
-                   return Object.defineProperty(this, "value", {
-                     value: zv
-                   }), zv
-                 }
-               }
-             }
+             let {
+               body: kT,
+               middleScreenPopupContainerClassName: cT,
+               middleScreenPopupClassName: MT,
+               close: yT,
+               disableExitButton: fT,
+               disableBackground: IT,
+               disablePressBackgroundToClose: AT,
+               disablePadClose: vT
+             } = TT;
+             return (0, lT.useEffect)((() => (jT++, () => {
+               jT--
+             })), []), (0, lT.useEffect)((() => {
+               const TT = TT => {
+                 "Escape" !== TT.key || AT || (yT(), TT.stopPropagation())
+               };
+ ... (20 more added lines; see GitHub link above)
```

#### 686. `bundles/bloxd.io/main.js` (Changed code · before: `L10750-L10764` → after: `L28618-L28645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28618-L28645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28618-L28645) · [Before (L10750-L10764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10750-L10764)

```diff
-             const zv = vv.startsWith("^") ? 1 : 0,
-               Pv = vv.endsWith("$") ? vv.length - 1 : vv.length;
-             return vv.slice(zv, Pv)
-           }
-           const Wv = Symbol("evaluating");
- 
-           function wv(vv, zv, Pv) {
-             let hv;
-             Object.defineProperty(vv, zv, {
-               get() {
-                 if (hv !== Wv) return void 0 === hv && (hv = Wv, hv = Pv()), hv
-               },
-               set(Pv) {
-                 Object.defineProperty(vv, zv, {
-                   value: Pv
+             let {
+               icon: kT,
+               title: cT,
+               subtitle: lT,
+               confirm: OT,
+               secondary: fT,
+               cancel: AT,
+               textOpts: jT,
+               destructive: vT = !1,
+               padStartsOn: tT = "confirm",
+               className: hT,
+               children: NT
+             } = TT;
+             const {
+               t: QT
+             } = (0, yT.B)(), ST = vT && "confirm" === tT ? "cancel" : tT, DT = vT ? KT.I : KT.m, aT = vT ? KT.i : KT.I;
+ ... (12 more added lines; see GitHub link above)
```

#### 687. `bundles/bloxd.io/main.js` (Changed code · before: `L10766-L10767` → after: `L28647-L28689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28647-L28689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28647-L28689) · [Before (L10766-L10767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10766-L10767)

```diff
-               },
-               configurable: !0
+               }), (0, CT.jsx)("div", {
+                 className: "PromptGenericPopupTitle SmallTextBold",
+                 children: QT(cT, null === jT || void 0 === jT ? void 0 : jT.title)
+               }), lT && (0, CT.jsx)("div", {
+                 className: "PromptGenericPopupSubtitle SmallTextLight",
+                 children: "string" === typeof lT ? QT(lT, null === jT || void 0 === jT ? void 0 : jT.subtitle) : lT
+               }), NT, (0, CT.jsxs)("div", {
+                 className: "PromptGenericPopupBody",
+                 children: [fT && (0, CT.jsx)(KT.e, {
+                   className: "PromptGenericPopupBodyButton",
+                   onClick: fT.onClick,
+                   touchPressOn: "pointerup",
+                   children: QT(fT.text)
+                 }), OT && (0, CT.jsx)(MT.c, {
+                   tooltipInner: (0, CT.jsx)("div", {
+                     className: "PromptGenericPopupBodyButtonTooltip",
+ ... (27 more added lines; see GitHub link above)
```

#### 688. `bundles/bloxd.io/main.js` (Changed code · before: `L10771-L10776` → after: `L28693-L28771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28693-L28771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28693-L28771) · [Before (L10771-L10776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10771-L10776)

```diff
-           function av(vv, zv, Pv) {
-             Object.defineProperty(vv, zv, {
-               value: Pv,
-               writable: !0,
-               enumerable: !0,
-               configurable: !0
+           function NT(TT) {
+             let {
+               icon: kT,
+               title: cT,
+               subtitle: MT,
+               textOpts: OT,
+               placeholderText: fT,
+               prefixText: jT,
+               initialValue: vT = "",
+               maxLength: tT,
+               multiline: hT = !1,
+               allowEmptySubmit: NT = !1,
+               submitText: QT,
+               onSubmit: ST,
+               validate: DT,
+               secondaryButtonText: aT,
+ ... (63 more added lines; see GitHub link above)
```

#### 689. `bundles/bloxd.io/main.js` (Changed code · before: `L10779-L10789` → after: `L28774-L28792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28774-L28792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28774-L28792) · [Before (L10779-L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10779-L10789)

```diff
- 
-           function sv() {
-             const vv = {};
-             for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
-             for (const Sv of Pv) {
-               const zv = Object.getOwnPropertyDescriptors(Sv);
-               Object.assign(vv, zv)
-             }
-             return Object.defineProperties({}, vv)
-           }
-           const Cv = "captureStackTrace" in Error ? Error.captureStackTrace : function() {};
+         },
+         2176: (TT, kT, cT) => {
+           cT.d(kT, {
+             b: () => hT,
+             c: () => NT,
+             g: () => jT,
+             k: () => vT,
+             l: () => tT
+           });
+           var lT = cT(1575),
+             MT = cT(1244),
+             KT = cT(2260),
+             OT = cT(328),
+             yT = cT(1195),
+             fT = cT(31),
+             xT = cT(1061),
+ ... (3 more added lines; see GitHub link above)
```

#### 690. `bundles/bloxd.io/main.js` (Changed code · before: `L10792` → after: `L28795-L28796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28795-L28796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28795-L28796) · [Before (L10792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10792)

```diff
-             return "object" === typeof vv && null !== vv && !Array.isArray(vv)
+             var kT, cT;
+             return null !== (kT = null === (cT = lT.c[TT]) || void 0 === cT ? void 0 : cT.displayName) && void 0 !== kT ? kT : TT
```

#### 691. `bundles/bloxd.io/main.js` (Changed code · before: `L10804-L10809` → after: `L28800-L28803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28800-L28803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28800-L28803) · [Before (L10804-L10809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10804-L10809)

```diff
-             if (!1 === iv(vv)) return !1;
-             const zv = vv.constructor;
-             if (void 0 === zv) return !0;
-             if ("function" !== typeof zv) return !0;
-             const Pv = zv.prototype;
-             return !1 !== iv(Pv) && !1 !== Object.prototype.hasOwnProperty.call(Pv, "isPrototypeOf")
+             let kT = 0;
+             for (const cT of MT.u)
+               for (const lT in KT.e[cT]) KT.e[cT][lT].cosmeticPack === TT && kT++;
+             return 1 === kT
```

#### 692. `bundles/bloxd.io/main.js` (Changed code · before: `L10814-L10815` → after: `L28806-L28809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28806-L28809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28806-L28809) · [Before (L10814-L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10814-L10815)

```diff
-           function mv(vv) {
-             return vv.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
+           function tT() {
+             fT.e.set({
+               openEverythingMenuName: OT.o.CUSTOMISATION
+             })
```

#### 693. `bundles/bloxd.io/main.js` (Changed code · before: `L10818-L10820` → after: `L28812-L28824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28812-L28824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28812-L28824) · [Before (L10818-L10820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10818-L10820)

```diff
-           function jv(vv, zv, Pv) {
-             const hv = new vv._zod.constr(zv ?? vv._zod.def);
-             return zv && !Pv?.parent || (hv._zod.parent = vv), hv
+           function hT(TT) {
+             let {
+               pack: kT
+             } = TT;
+             const cT = IT.f[`profileEffect_${kT}`];
+             return cT ? (0, CT.jsx)("div", {
+               className: "CosmeticPackGrantedIcon",
+               children: (0, CT.jsx)(cT, {
+                 simple: !0
+               })
+             }) : (0, CT.jsx)(xT.e, {
+               name: "shirt"
+             })
```

#### 694. `bundles/bloxd.io/main.js` (Changed code · before: `L10824-L10836` → after: `L28828-L28863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28828-L28863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28828-L28863) · [Before (L10824-L10836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10824-L10836)

```diff
-             const zv = vv;
-             if (!zv) return {};
-             if ("string" === typeof zv) return {
-               error: () => zv
-             };
-             if (void 0 !== zv?.message) {
-               if (void 0 !== zv?.error) throw new Error("Cannot specify both `message` and `error` params");
-               zv.error = zv.message
-             }
-             return delete zv.message, "string" === typeof zv.error ? {
-               ...zv,
-               error: () => zv.error
-             } : zv
+             let {
+               pack: kT,
+               showKeys: cT,
+               hide: lT
+             } = TT;
+             const {
+               t: MT
+             } = (0, yT.B)();
+             return (0, CT.jsxs)("div", {
+               className: "NotificationToast NotificationToastNamed",
+               children: [(0, CT.jsx)("div", {
+                 className: "NotificationToastIcon",
+                 children: (0, CT.jsx)(hT, {
+                   pack: kT
+                 })
+               }), (0, CT.jsxs)("div", {
+ ... (20 more added lines; see GitHub link above)
```

#### 695. `bundles/bloxd.io/main.js` (Changed code · before: `L10838` → after: `L28865-L28875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28865-L28875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28865-L28875) · [Before (L10838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10838)

```diff
-           Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_VALUE, Number.MAX_VALUE;
+         },
+         2390: (TT, kT, cT) => {
+           cT.d(kT, {
+             b: () => fT,
+             d: () => xT
+           });
+           var lT = cT(1333),
+             MT = cT(1195),
+             KT = cT(2395),
+             OT = cT(2408),
+             yT = cT(1099);
```

#### 696. `bundles/bloxd.io/main.js` (Changed code · before: `L10841-L10845` → after: `L28878-L28883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28878-L28883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28878-L28883) · [Before (L10841-L10845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10841-L10845)

```diff
-             let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-             if (!0 === vv.aborted) return !0;
-             for (let Pv = zv; Pv < vv.issues.length; Pv++)
-               if (!0 !== vv.issues[Pv]?.continue) return !0;
-             return !1
+             let {
+               invite: kT
+             } = TT;
+             return (0, yT.jsx)(OT.e, {
+               cosmetics: kT.fromPlayerCosmetics
+             })
```

#### 697. `bundles/bloxd.io/main.js` (Changed code · before: `L10848-L10852` → after: `L28886-L28912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28886-L28912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28886-L28912) · [Before (L10848-L10852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10848-L10852)

```diff
-           function Yv(vv, zv) {
-             return zv.map((zv => {
-               var Pv;
-               return (Pv = zv).path ?? (Pv.path = []), zv.path.unshift(vv), zv
-             }))
+           function xT(TT) {
+             let {
+               invite: kT
+             } = TT;
+             const {
+               t: cT
+             } = (0, MT.B)(), {
+               destination: OT
+             } = kT, fT = (0, KT.b)("game" === OT.kind ? OT.gameNameWithVariation : null, "game" === OT.kind ? OT.lobbyName : null);
+             return "party" === OT.kind ? (0, yT.jsx)(yT.Fragment, {
+               children: cT("notifications:partyInvite", {
+                 player: kT.fromPlayerName
+               })
+             }) : (0, lT.i)(OT.gameNameWithVariation, OT.lobbyName) ? (0, yT.jsx)(yT.Fragment, {
+               children: cT("notifications:worldInvite", {
+                 player: kT.fromPlayerName
+ ... (11 more added lines; see GitHub link above)
```

#### 698. `bundles/bloxd.io/main.js` (Changed code · before: `L10856` → after: `L28944-L29011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R28944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L28944-L29011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L28944-L29011) · [Before (L10856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10856)

```diff
-             return "string" === typeof vv ? vv : vv?.message
+             let {
+               notification: kT,
+               isUnread: cT,
+               onOpen: lT,
+               onDismiss: MT
+             } = TT;
+             const {
+               t: yT
+             } = (0, OT.B)(), {
+               payload: fT
+             } = kT, xT = "friendRequest" === fT.kind ? "notifications:hide" : "notifications:dismiss", IT = yT(xT);
+             return (0, wT.jsxs)("div", {
+               className: KT()("NotificationRow", {
+                 NotificationRowUnread: cT,
+                 NotificationRowWithActions: "friendRequest" === fT.kind
+               }),
+ ... (52 more added lines; see GitHub link above)
```

#### 699. `bundles/bloxd.io/main.js` (Changed code · before: `L10859-L10866` → after: `L29014-L29150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29014-L29150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29014-L29150) · [Before (L10859-L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10859-L10866)

```diff
-           function Ov(vv, zv, Pv) {
-             const hv = {
-               ...vv,
-               path: vv.path ?? []
-             };
-             if (!vv.message) {
-               const Sv = nv(vv.inst?._zod.def?.error?.(vv)) ?? nv(zv?.error?.(vv)) ?? nv(Pv.customError?.(vv)) ?? nv(Pv.localeError?.(vv)) ?? "Invalid input";
-               hv.message = Sv
+           function bT(TT) {
+             let {
+               notification: kT
+             } = TT;
+             const {
+               t: cT
+             } = (0, OT.B)(), {
+               payload: lT
+             } = kT;
+             switch (lT.kind) {
+               case "updateLog":
+                 return (0, wT.jsxs)(wT.Fragment, {
+                   children: [lT.image && (0, wT.jsx)("div", {
+                     className: "NotificationRowImage",
+                     children: (0, wT.jsx)("img", {
+                       src: `/textures/updateImages/${lT.image}`,
+ ... (121 more added lines; see GitHub link above)
```

#### 700. `bundles/bloxd.io/main.js` (Changed code · before: `L10888-L10891` → after: `L29155-L29164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29155-L29164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29155-L29164) · [Before (L10888-L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10888-L10891)

```diff
-             const zv = [],
-               Pv = vv.map((vv => "object" === typeof vv ? vv.key : vv));
-             for (const hv of Pv) "number" === typeof hv ? zv.push(`[${hv}]`) : "symbol" === typeof hv ? zv.push(`[${JSON.stringify(String(hv))}]`) : /[^\w$]/.test(hv) ? zv.push(`[${JSON.stringify(hv)}]`) : (zv.length && zv.push("."), zv.push(hv));
-             return zv.join("")
+             let {
+               createdAt: kT
+             } = TT;
+             return (0, wT.jsx)("div", {
+               className: "NotificationRowDate",
+               children: new Date(kT).toLocaleTimeString([], {
+                 hour: "numeric",
+                 minute: "2-digit"
+               })
+             })
```

#### 701. `bundles/bloxd.io/main.js` (Changed code · before: `L10895-L10898` → after: `L29174-L29305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29174-L29305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29174-L29305) · [Before (L10895-L10898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10895-L10898)

```diff
-             const zv = [],
-               Pv = [...vv.issues].sort(((vv, zv) => (vv.path ?? []).length - (zv.path ?? []).length));
-             for (const hv of Pv) zv.push(`\u2716 ${hv.message}`), hv.path?.length && zv.push(`  \u2192 at ${Uv(hv.path)}`);
-             return zv.join("\n")
+             var kT, cT;
+             let {
+               containerRef: MT,
+               anchorRect: fT,
+               alignment: xT,
+               close: DT
+             } = TT;
+             (0, AT.q)("overlay", MT, DT);
+             const {
+               t: aT
+             } = (0, OT.B)(), {
+               loading: FT,
+               notifications: rT,
+               unreadCount: PT
+             } = (0, yT.i)(), [bT, zT] = (0, lT.useState)(null);
+             (0, lT.useLayoutEffect)((() => {
+ ... (116 more added lines; see GitHub link above)
```

#### 702. `bundles/bloxd.io/main.js` (Changed code · before: `L10900-L10922` → after: `L29307-L29324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29307-L29324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29307-L29324) · [Before (L10900-L10922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10900-L10922)

```diff
-           const xv = vv => (zv, Pv, hv, ev) => {
-               const gv = hv ? Object.assign(hv, {
-                   async: !1
-                 }) : {
-                   async: !1
-                 },
-                 dv = zv._zod.run({
-                   value: Pv,
-                   issues: []
-                 }, gv);
-               if (dv instanceof Promise) throw new Sv;
-               if (dv.issues.length) {
-                 const zv = new(ev?.Err ?? vv)(dv.issues.map((vv => Ov(vv, gv, pv()))));
-                 throw Cv(zv, ev?.callee), zv
-               }
-               return dv.value
- ... (7 more removed lines; see GitHub link above)
+           var ZT = cT(1486);
+           const uT = 9;
+ 
+           function XT(TT) {
+             let {
+               placement: kT
+             } = TT;
+             const {
+               t: cT
+             } = (0, OT.B)(), {
+               unreadCount: MT
+             } = (0, yT.i)(), [IT, AT] = (0, lT.useState)(null), CT = (0, lT.useRef)(null), jT = (0, lT.useRef)(null), vT = null !== IT, tT = (0, lT.useCallback)((() => {
+               AT(null)
+             }), []);
+             (0, lT.useEffect)((() => {
+               if (!vT) return;
+ ... (2 more added lines; see GitHub link above)
```

#### 703. `bundles/bloxd.io/main.js` (Changed code · before: `L10924-L10938` → after: `L29326-L29346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29326-L29346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29326-L29346) · [Before (L10924-L10938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10924-L10938)

```diff
-               let gv = zv._zod.run({
-                 value: Pv,
-                 issues: []
-               }, ev);
-               if (gv instanceof Promise && (gv = await gv), gv.issues.length) {
-                 const zv = new(Sv?.Err ?? vv)(gv.issues.map((vv => Ov(vv, ev, pv()))));
-                 throw Cv(zv, Sv?.callee), zv
-               }
-               return gv.value
-             }, Iv = qv(Vv), Qv = vv => (zv, Pv, hv) => {
-               const ev = hv ? {
-                   ...hv,
-                   async: !1
-                 } : {
-                   async: !1
+               return window.addEventListener("resize", TT), document.addEventListener("scroll", TT, !0), () => {
+                 window.removeEventListener("resize", TT), document.removeEventListener("scroll", TT, !0)
+               }
+             }), [vT]), (0, fT.d)(jT, tT, CT);
+             const hT = MT > 0;
+             return (0, wT.jsxs)("div", {
+               className: KT()("NotificationBellContainer", "NotificationBell" + ("socialBar" === kT ? "SocialBar" : "HeaderIcon")),
+               children: [(0, wT.jsxs)("button", {
+                 type: "button",
+                 className: "NotificationBell",
+                 "data-pad-notifications": !0,
+                 ref: CT,
+                 "aria-label": cT("notifications:title"),
+                 "aria-expanded": vT,
+                 title: hT ? cT("notifications:unreadCount", {
+                   count: MT
+ ... (5 more added lines; see GitHub link above)
```

#### 704. `bundles/bloxd.io/main.js` (Changed code · before: `L10940-L11004` → after: `L29348-L29429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29348-L29429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29348-L29429) · [Before (L10940-L11004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L10940-L11004)

```diff
-                 gv = zv._zod.run({
-                   value: Pv,
-                   issues: []
-                 }, ev);
-               if (gv instanceof Promise) throw new Sv;
-               return gv.issues.length ? {
-                 success: !1,
-                 error: new(vv ?? Kv)(gv.issues.map((vv => Ov(vv, ev, pv()))))
-               } : {
-                 success: !0,
-                 data: gv.value
-               }
-             }, Zv = Qv(Vv), Av = vv => async (zv, Pv, hv) => {
-               const Sv = hv ? Object.assign(hv, {
-                 async: !0
-               }) : {
- ... (49 more removed lines; see GitHub link above)
+                 children: [(0, wT.jsx)(xT.e, {
+                   icon: "bell"
+                 }), hT && (0, wT.jsx)("span", {
+                   className: "NotificationBellBadge",
+                   children: MT > uT ? `${uT}+` : MT
+                 })]
+               }), vT && (0, wT.jsx)(ET, {
+                 containerRef: jT,
+                 anchorRect: IT,
+                 alignment: "socialBar" === kT ? "left" : "right",
+                 close: tT
+               })]
+             })
+           }
+         },
+         3634: (TT, kT, cT) => {
+ ... (66 more added lines; see GitHub link above)
```

#### 705. `bundles/bloxd.io/main.js` (Changed code · before: `L11007-L11011` → after: `L29432-L29437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29432-L29437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29432-L29437) · [Before (L11007-L11011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11007-L11011)

```diff
-             }));
-           const Ev = {
-               major: 4,
-               minor: 3,
-               patch: 6
+             })), KT
+           }
+           var CT = Object.values || function(TT) {
+               return Object.keys(TT).map((function(kT) {
+                 return TT[kT]
+               }))
```

#### 706. `bundles/bloxd.io/main.js` (Changed code · before: `L11013-L11042` → after: `L29439-L29444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29439-L29444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29439-L29444) · [Before (L11013-L11042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11013-L11042)

```diff
-             ov = hv("$ZodType", ((vv, zv) => {
-               var Pv;
-               vv ?? (vv = {}), vv._zod.def = zv, vv._zod.bag = vv._zod.bag || {}, vv._zod.version = Ev;
-               const hv = [...vv._zod.def.checks ?? []];
-               vv._zod.traits.has("$ZodCheck") && hv.unshift(vv);
-               for (const Sv of hv)
-                 for (const zv of Sv._zod.onattach) zv(vv);
-               if (0 === hv.length)(Pv = vv._zod).deferred ?? (Pv.deferred = []), vv._zod.deferred?.push((() => {
-                 vv._zod.run = vv._zod.parse
-               }));
-               else {
-                 const zv = (vv, zv, Pv) => {
-                     let hv, ev = Fv(vv);
-                     for (const gv of zv) {
-                       if (gv._zod.def.when) {
-                         if (!gv._zod.def.when(vv)) continue
- ... (14 more removed lines; see GitHub link above)
+             jT = function(TT) {
+               function kT(kT, cT) {
+                 var lT, MT = (lT = TT.call(this, kT, cT) || this).handleExited.bind((0, OT.b)(lT));
+                 return lT.state = {
+                   contextValue: {
+                     isMounting: !0
```

#### 707. `bundles/bloxd.io/main.js` (Changed code · before: `L11044-L11068` → after: `L29446-L29454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29446-L29454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29446-L29454) · [Before (L11044-L11068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11044-L11068)

```diff
-                   Pv = (Pv, ev, gv) => {
-                     if (Fv(Pv)) return Pv.aborted = !0, Pv;
-                     const pv = zv(ev, hv, gv);
-                     if (pv instanceof Promise) {
-                       if (!1 === gv.async) throw new Sv;
-                       return pv.then((zv => vv._zod.parse(zv, gv)))
-                     }
-                     return vv._zod.parse(pv, gv)
-                   };
-                 vv._zod.run = (ev, gv) => {
-                   if (gv.skipChecks) return vv._zod.parse(ev, gv);
-                   if ("backward" === gv.direction) {
-                     const zv = vv._zod.parse({
-                       value: ev.value,
-                       issues: []
-                     }, {
- ... (9 more removed lines; see GitHub link above)
+                   handleExited: MT,
+                   firstRender: !0
+                 }, lT
+               }(0, yT.c)(kT, TT);
+               var cT = kT.prototype;
+               return cT.componentDidMount = function() {
+                 this.mounted = !0, this.setState({
+                   contextValue: {
+                     isMounting: !1
```

#### 708. `bundles/bloxd.io/main.js` (Changed code · before: `L11070` → after: `L29456-L29472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29456-L29472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29456-L29472) · [Before (L11070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11070)

```diff
-                   return zv(pv, hv, gv)
+                 })
+               }, cT.componentWillUnmount = function() {
+                 this.mounted = !1
+               }, kT.getDerivedStateFromProps = function(TT, kT) {
+                 var cT, MT, KT = kT.children,
+                   OT = kT.handleExited;
+                 return {
+                   children: kT.firstRender ? (cT = TT, MT = OT, xT(cT.children, (function(TT) {
+                     return (0, lT.cloneElement)(TT, {
+                       onExited: MT.bind(null, TT),
+                       in: !0,
+                       appear: IT(TT, "appear", cT),
+                       enter: IT(TT, "enter", cT),
+                       exit: IT(TT, "exit", cT)
+                     })
+                   }))) : AT(TT, KT, OT),
+ ... (1 more added lines; see GitHub link above)
```

#### 709. `bundles/bloxd.io/main.js` (Changed code · before: `L11072-L11087` → after: `L29474-L29479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29474-L29479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29474-L29479) · [Before (L11072-L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11072-L11087)

```diff
-               }
-               wv(vv, "~standard", (() => ({
-                 validate: zv => {
-                   try {
-                     const Pv = Zv(vv, zv);
-                     return Pv.success ? {
-                       value: Pv.data
-                     } : {
-                       issues: Pv.error?.issues
-                     }
-                   } catch (Pv) {
-                     return Lv(vv, zv).then((vv => vv.success ? {
-                       value: vv.data
-                     } : {
-                       issues: vv.error?.issues
-                     }))
+               }, cT.handleExited = function(TT, kT) {
+                 var cT = xT(this.props.children);
+                 TT.key in cT || (TT.props.onExited && TT.props.onExited(kT), this.mounted && this.setState((function(kT) {
+                   var cT = (0, KT.b)({}, kT.children);
+                   return delete cT[TT.key], {
+                     children: cT
```

#### 710. `bundles/bloxd.io/main.js` (Changed code · before: `L11089-L11151` → after: `L29481-L29526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29481-L29526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29481-L29526) · [Before (L11089-L11151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11089-L11151)

```diff
-                 },
-                 vendor: "zod",
-                 version: 1
-               })))
-             })),
-             bv = hv("$ZodString", ((vv, zv) => {
-               var Pv;
-               ov.init(vv, zv), vv._zod.pattern = [...vv?._zod.bag?.patterns ?? []].pop() ?? (Pv = vv._zod.bag, new RegExp(`^${Pv?`[\\s\\S]{${Pv?.minimum??0},${Pv?.maximum??""}}`:"[\\s\\S]*"}$`)), vv._zod.parse = (Pv, hv) => {
-                 if (zv.coerce) try {
-                   Pv.value = String(Pv.value)
-                 } catch (hv) {}
-                 return "string" === typeof Pv.value || Pv.issues.push({
-                   expected: "string",
-                   code: "invalid_type",
-                   input: Pv.value,
-                   inst: vv
- ... (47 more removed lines; see GitHub link above)
+                 })))
+               }, cT.render = function() {
+                 var TT = this.props,
+                   kT = TT.component,
+                   cT = TT.childFactory,
+                   KT = (0, MT.c)(TT, ["component", "childFactory"]),
+                   OT = this.state.contextValue,
+                   yT = CT(this.state.children).map(cT);
+                 return delete KT.appear, delete KT.enter, delete KT.exit, null === kT ? lT.createElement(fT.e.Provider, {
+                   value: OT
+                 }, yT) : lT.createElement(fT.e.Provider, {
+                   value: OT
+                 }, lT.createElement(kT, KT, yT))
+               }, kT
+             }(lT.Component);
+           jT.propTypes = {}, jT.defaultProps = {
+ ... (30 more added lines; see GitHub link above)
```

#### 711. `bundles/bloxd.io/main.js` (Changed code · before: `L11153-L11173` → after: `L29528-L29569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29528-L29569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29528-L29569) · [Before (L11153-L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11153-L11173)

```diff
-           function vz(vv, zv, Pv) {
-             vv.issues.length && zv.issues.push(...Yv(Pv, vv.issues)), zv.value[Pv] = vv.value
-           }
-           const zz = hv("$ZodArray", ((vv, zv) => {
-             ov.init(vv, zv), vv._zod.parse = (Pv, hv) => {
-               const Sv = Pv.value;
-               if (!Array.isArray(Sv)) return Pv.issues.push({
-                 expected: "array",
-                 code: "invalid_type",
-                 input: Sv,
-                 inst: vv
-               }), Pv;
-               Pv.value = Array(Sv.length);
-               const ev = [];
-               for (let vv = 0; vv < Sv.length; vv++) {
-                 const gv = Sv[vv],
- ... (5 more removed lines; see GitHub link above)
+           function dT(TT, kT) {
+             const cT = new Map(kT.map((TT => [TT.name, TT]))),
+               lT = kT.some((TT => TT.isError));
+             return TT.flatMap((TT => {
+               const kT = cT.get(TT);
+               return kT ? "offline" === kT.location.status ? [] : [{
+                 name: TT,
+                 preview: kT
+               }] : lT ? [{
+                 name: TT,
+                 preview: null
+               }] : []
+             }))
+           }
+ 
+           function LT(TT, kT) {
+ ... (26 more added lines; see GitHub link above)
```

#### 712. `bundles/bloxd.io/main.js` (Changed code · before: `L11177` → after: `L29572-L29592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29572-L29592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29572-L29592) · [Before (L11177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11177)

```diff
-           }));
+             return (0, ZT.o)(MT.status) && "inGame" === bT.e.get("gameState") && (0, XT.d)() ? {
+               id: `invite|${lT.name}`,
+               kind: "invite",
+               labelKey: "general:invite",
+               run: () => {
+                 (0, PT.i)(lT.name, "game")
+               }
+             } : null
+           }
+           var RT = cT(2395),
+             gT = cT(2408),
+             UT = cT(1061),
+             YT = cT(2168),
+             BT = cT(2413),
+             WT = cT(1497),
+             nT = cT(4279),
+ ... (5 more added lines; see GitHub link above)
```

#### 713. `bundles/bloxd.io/main.js` (Changed code · before: `L11179-L11184` → after: `L29594-L29597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29594-L29597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29594-L29597) · [Before (L11179-L11184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11179-L11184)

```diff
-           function Pz(vv, zv, Pv, hv, Sv) {
-             if (vv.issues.length) {
-               if (Sv && !(Pv in hv)) return;
-               zv.issues.push(...Yv(Pv, vv.issues))
-             }
-             void 0 === vv.value ? Pv in hv && (zv.value[Pv] = void 0) : zv.value[Pv] = vv.value
+           function kk(TT) {
+             var kT, cT;
+             const lT = TT.find(mT.f);
+             return null !== (kT = null !== (cT = null !== lT && void 0 !== lT ? lT : TT.find((TT => "notification" === TT.kind && "friendRequest" === TT.notification.payload.kind))) && void 0 !== cT ? cT : TT.find(ck)) && void 0 !== kT ? kT : null
```

#### 714. `bundles/bloxd.io/main.js` (Changed code · before: `L11188-L11198` → after: `L29601-L29609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29601-L29609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29601-L29609) · [Before (L11188-L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11188-L11198)

```diff
-             const zv = Object.keys(vv.shape);
-             for (const Sv of zv)
-               if (!vv.shape?.[Sv]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${Sv}": expected a Zod schema`);
-             const Pv = (hv = vv.shape, Object.keys(hv).filter((vv => "optional" === hv[vv]._zod.optin && "optional" === hv[vv]._zod.optout)));
-             var hv;
-             return {
-               ...vv,
-               keys: zv,
-               keySet: new Set(zv),
-               numKeys: zv.length,
-               optionalKeys: new Set(Pv)
+             switch (TT.kind) {
+               case "friendRequests":
+               case "friendsOnline":
+               case "friendAdded":
+               case "worldOwnerOffer":
+                 return !0;
+               case "notification":
+               case "message":
+                 return !1
```

#### 715. `bundles/bloxd.io/main.js` (Changed code · before: `L11202-L11257` → after: `L29613-L29678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29613-L29678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29613-L29678) · [Before (L11202-L11257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11202-L11257)

```diff
-           function Sz(vv, zv, Pv, hv, Sv, ev) {
-             const gv = [],
-               pv = Sv.keySet,
-               dv = Sv.catchall._zod,
-               Nv = dv.def.type,
-               lv = "optional" === dv.optout;
-             for (const Tv in zv) {
-               if (pv.has(Tv)) continue;
-               if ("never" === Nv) {
-                 gv.push(Tv);
-                 continue
-               }
-               const Sv = dv.run({
-                 value: zv[Tv],
-                 issues: []
-               }, hv);
- ... (40 more removed lines; see GitHub link above)
+           function lk() {
+             const TT = bT.e.get("isUiHidden") || bT.e.get("isUiHiddenByCamera") ? null : function(TT) {
+               const kT = kk(TT);
+               if ("notification" === (null === kT || void 0 === kT ? void 0 : kT.kind) && "invite" === kT.notification.payload.kind) return wT.g.getShownForMs(kT.key) >= 500 ? {
+                 kind: "invite",
+                 inviteId: kT.notification.payload.invite.id
+               } : null;
+               if ("notification" === (null === kT || void 0 === kT ? void 0 : kT.kind) && "friendRequest" === kT.notification.payload.kind) return wT.g.getActionShownForMs(kT.key, qT) >= iT ? {
+                 kind: "request",
+                 playerName: kT.notification.payload.from.name
+               } : null;
+               if ("friendRequests" === (null === kT || void 0 === kT ? void 0 : kT.kind)) return wT.g.getActionShownForMs(kT.key, sT) >= iT ? {
+                 kind: "firstRequest"
+               } : null;
+               return null
+             }(wT.g.getShown());
+ ... (50 more added lines; see GitHub link above)
```

#### 716. `bundles/bloxd.io/main.js` (Changed code · before: `L11259-L11282` → after: `L29680-L29721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29680-L29721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29680-L29721) · [Before (L11259-L11282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11259-L11282)

```diff
-             vv._zod.parse = (zv, Pv) => {
-               gv ?? (gv = hv.value);
-               const pv = zv.value;
-               if (!Sv(pv)) return zv.issues.push({
-                 expected: "object",
-                 code: "invalid_type",
-                 input: pv,
-                 inst: vv
-               }), zv;
-               zv.value = {};
-               const dv = [],
-                 Nv = gv.shape;
-               for (const vv of gv.keys) {
-                 const hv = Nv[vv],
-                   Sv = "optional" === hv._zod.optout,
-                   ev = hv._zod.run({
- ... (8 more removed lines; see GitHub link above)
+             return hT = tT ? tT.preview ? (0, yk.jsx)(xk, {
+               location: tT.preview.location
+             }) : yT("notifications:friendOnlineStatus") : 1 === vT.length ? yT("notifications:twoFriendsOnlineStatus", {
+               second: vT[0].name
+             }) : yT("notifications:moreFriendsOnlineStatus", {
+               count: vT.length
+             }), (0, yk.jsxs)("div", {
+               className: "NotificationToast NotificationToastNamed",
+               children: [(0, yk.jsxs)("div", {
+                 className: "NotificationToastIcon",
+                 children: [(null === tT || void 0 === tT ? void 0 : tT.preview) && (0, yk.jsx)(gT.e, {
+                   cosmetics: tT.preview.cosmetics
+                 }), !(null !== tT && void 0 !== tT && tT.preview) && (0, yk.jsx)(UT.e, {
+                   name: tT ? "user" : "user-group"
+                 })]
+               }), (0, yk.jsxs)("div", {
+ ... (26 more added lines; see GitHub link above)
```

#### 717. `bundles/bloxd.io/main.js` (Changed code · before: `L11284-L11293` → after: `L29723-L29736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29723-L29736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29723-L29736) · [Before (L11284-L11293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11284-L11293)

```diff
-           function gz(vv, zv, Pv, hv) {
-             for (const ev of vv)
-               if (0 === ev.issues.length) return zv.value = ev.value, zv;
-             const Sv = vv.filter((vv => !Fv(vv)));
-             return 1 === Sv.length ? (zv.value = Sv[0].value, Sv[0]) : (zv.issues.push({
-               code: "invalid_union",
-               input: zv.value,
-               inst: Pv,
-               errors: vv.map((vv => vv.issues.map((vv => Ov(vv, hv, pv())))))
-             }), zv)
+           function xk(TT) {
+             let {
+               location: kT
+             } = TT;
+             const {
+               t: cT
+             } = (0, aT.B)(), lT = (0, RT.b)("inGame" === kT.status ? kT.inGameNameWithVariation : null, "inGame" === kT.status ? kT.inLobbyName : null);
+             return "inGame" !== kT.status ? (0, yk.jsx)(yk.Fragment, {
+               children: cT("notifications:friendOnlineStatus")
+             }) : (0, yk.jsx)(yk.Fragment, {
+               children: lT ? cT("notifications:friendPlayingStatus", {
+                 game: lT
+               }) : cT("notifications:friendInGameStatus")
+             })
```

#### 718. `bundles/bloxd.io/main.js` (Changed code · before: `L11295-L11402` → after: `L29738-L29758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29738-L29758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29738-L29758) · [Before (L11295-L11402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11295-L11402)

```diff
-           const pz = hv("$ZodUnion", ((vv, zv) => {
-             ov.init(vv, zv), wv(vv._zod, "optin", (() => zv.options.some((vv => "optional" === vv._zod.optin)) ? "optional" : void 0)), wv(vv._zod, "optout", (() => zv.options.some((vv => "optional" === vv._zod.optout)) ? "optional" : void 0)), wv(vv._zod, "values", (() => {
-               if (zv.options.every((vv => vv._zod.values))) return new Set(zv.options.flatMap((vv => Array.from(vv._zod.values))))
-             })), wv(vv._zod, "pattern", (() => {
-               if (zv.options.every((vv => vv._zod.pattern))) {
-                 const vv = zv.options.map((vv => vv._zod.pattern));
-                 return new RegExp(`^(${vv.map((vv=>Tv(vv.source))).join("|")})$`)
-               }
-             }));
-             const Pv = 1 === zv.options.length,
-               hv = zv.options[0]._zod.run;
-             vv._zod.parse = (Sv, ev) => {
-               if (Pv) return hv(Sv, ev);
-               let gv = !1;
-               const pv = [];
-               for (const vv of zv.options) {
- ... (92 more removed lines; see GitHub link above)
+ 
+           function Ik(TT) {
+             let {
+               toastKey: kT,
+               from: cT,
+               showKeys: MT,
+               hide: KT
+             } = TT;
+             const {
+               t: OT
+             } = (0, aT.B)(), {
+               isTouchScreen: yT
+             } = (0, bT.n)(["isTouchScreen"]);
+             return (0, lT.useEffect)((() => {
+               MT && wT.g.noteActionShown(kT, qT)
+             }), [kT, MT]), (0, yk.jsxs)("div", {
+ ... (5 more added lines; see GitHub link above)
```

#### 719. `bundles/bloxd.io/main.js` (Changed code · before: `L11404-L11430` → after: `L29760-L29840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29760-L29840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29760-L29840) · [Before (L11404-L11430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11404-L11430)

```diff
-               } else {
-                 Pv.value = {};
-                 for (const gv of Reflect.ownKeys(Sv)) {
-                   if ("__proto__" === gv) continue;
-                   let dv = zv.keyType._zod.run({
-                     value: gv,
-                     issues: []
-                   }, hv);
-                   if (dv instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
-                   if ("string" === typeof gv && Hv.test(gv) && dv.issues.length) {
-                     const vv = zv.keyType._zod.run({
-                       value: Number(gv),
-                       issues: []
-                     }, hv);
-                     if (vv instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
-                     0 === vv.issues.length && (dv = vv)
- ... (11 more removed lines; see GitHub link above)
+               }), (0, yk.jsxs)("div", {
+                 className: "NotificationToastText",
+                 children: [(0, yk.jsx)("div", {
+                   className: "NotificationToastName",
+                   children: cT.name
+                 }), (0, yk.jsx)("div", {
+                   className: "NotificationToastStatus",
+                   children: OT("notifications:friendRequestStatus")
+                 })]
+               }), (0, yk.jsxs)("div", {
+                 className: "NotificationToastButtons",
+                 children: [(0, yk.jsx)(YT.g, {
+                   accept: {
+                     analyticsClick: {
+                       id: "social.accept_friend_request",
+                       value: "toast"
+ ... (65 more added lines; see GitHub link above)
```

#### 720. `bundles/bloxd.io/main.js` (Changed code · before: `L11432-L11438` → after: `L29842-L29952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29842-L29952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29842-L29952) · [Before (L11432-L11438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11432-L11438)

```diff
-                   const Nv = zv.valueType._zod.run({
-                     value: Sv[gv],
-                     issues: []
-                   }, hv);
-                   Nv instanceof Promise ? ev.push(Nv.then((vv => {
-                     vv.issues.length && Pv.issues.push(...Yv(gv, vv.issues)), Pv.value[dv.value] = vv.value
-                   }))) : (Nv.issues.length && Pv.issues.push(...Yv(gv, Nv.issues)), Pv.value[dv.value] = Nv.value)
+                 },
+                 showKeys: MT,
+                 hide: KT
+               })]
+             })
+           }
+ 
+           function Ck(TT) {
+             var kT;
+             let {
+               toastKey: cT,
+               friendName: MT,
+               showKeys: KT,
+               hide: OT
+             } = TT;
+             const {
+ ... (95 more added lines; see GitHub link above)
```

#### 721. `bundles/bloxd.io/main.js` (Changed code · before: `L11440-L11442` → after: `L29954-L30071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R29954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L29954-L30071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L29954-L30071) · [Before (L11440-L11442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11440-L11442)

```diff
-               }
-               return ev.length ? Promise.all(ev).then((() => Pv)) : Pv
-             }
+               })]
+             })
+           }
+           var Nk = cT(4284),
+             Qk = cT(2120),
+             Sk = cT(1122);
+           const Dk = (0, lT.memo)((function(TT) {
+             let {
+               placement: kT
+             } = TT;
+             const {
+               notifications: cT
+             } = (0, FT.i)(), MT = (0, zT.e)(), {
+               gameState: KT,
+               isTouchScreen: OT,
+               openEverythingMenuName: yT,
+ ... (102 more added lines; see GitHub link above)
```

#### 722. `bundles/bloxd.io/main.js` (Changed code · before: `L11484-L11487` → after: `L30075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30075) · [Before (L11484-L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11484-L11487)

```diff
-             return vv.issues.length && void 0 === zv ? {
-               issues: [],
-               value: void 0
-             } : vv
+             return TT.some((TT => TT.id === kT))
```

#### 723. `bundles/bloxd.io/main.js` (Changed code · before: `L11516-L11517` → after: `L30078-L30108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30078-L30108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30078-L30108) · [Before (L11516-L11517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11516-L11517)

```diff
-           function iz(vv, zv) {
-             return void 0 === vv.value && (vv.value = zv.defaultValue), vv
+           function Fk(TT) {
+             let {
+               children: kT,
+               ...cT
+             } = TT;
+             const MT = (0, lT.useRef)(null);
+             return (0, yk.jsx)(tT.d, {
+               ...cT,
+               nodeRef: MT,
+               timeout: {
+                 enter: 0,
+                 exit: 500
+               },
+               addEndListener: TT => {
+                 const kT = MT.current,
+                   cT = lT => {
+ ... (15 more added lines; see GitHub link above)
```

#### 724. `bundles/bloxd.io/main.js` (Changed code · before: `L11519-L11526` → after: `L30110-L30191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30110-L30191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30110-L30191) · [Before (L11519-L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11519-L11526)

```diff
-           const cz = hv("$ZodPipe", ((vv, zv) => {
-             ov.init(vv, zv), wv(vv._zod, "values", (() => zv.in._zod.values)), wv(vv._zod, "optin", (() => zv.in._zod.optin)), wv(vv._zod, "optout", (() => zv.out._zod.optout)), wv(vv._zod, "propValues", (() => zv.in._zod.propValues)), vv._zod.parse = (vv, Pv) => {
-               if ("backward" === Pv.direction) {
-                 const hv = zv.out._zod.run(vv, Pv);
-                 return hv instanceof Promise ? hv.then((vv => Gz(vv, zv.in, Pv))) : Gz(hv, zv.in, Pv)
-               }
-               const hv = zv.in._zod.run(vv, Pv);
-               return hv instanceof Promise ? hv.then((vv => Gz(vv, zv.out, Pv))) : Gz(hv, zv.out, Pv)
+ 
+           function rk(TT) {
+             let {
+               toast: kT,
+               showKeys: cT,
+               hide: lT
+             } = TT;
+             const {
+               t: MT
+             } = (0, aT.B)();
+             if ("friendsOnline" === kT.kind) return (0, yk.jsx)(fk, {
+               toastKey: kT.key,
+               friendNames: kT.friendNames,
+               showKeys: cT,
+               hide: lT
+             });
+ ... (66 more added lines; see GitHub link above)
```

#### 725. `bundles/bloxd.io/main.js` (Changed code · before: `L11528` → after: `L30193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30193) · [Before (L11528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11528)

```diff
-           }));
+           }
```

#### 726. `bundles/bloxd.io/main.js` (Changed code · before: `L11530-L11534` → after: `L30195-L30232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30195-L30232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30195-L30232) · [Before (L11530-L11534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11530-L11534)

```diff
-           function Gz(vv, zv, Pv) {
-             return vv.issues.length ? (vv.aborted = !0, vv) : zv._zod.run({
-               value: vv.value,
-               issues: vv.issues
-             }, Pv)
+           function Pk(TT) {
+             let {
+               invite: kT,
+               showKeys: cT,
+               hide: lT
+             } = TT;
+             const {
+               t: MT
+             } = (0, aT.B)();
+             return (0, yk.jsxs)("div", {
+               className: "NotificationToast",
+               children: [(0, yk.jsx)("div", {
+                 className: "NotificationToastIcon",
+                 children: (0, yk.jsx)(GT.b, {
+                   invite: kT
+                 })
+ ... (22 more added lines; see GitHub link above)
```

#### 727. `bundles/bloxd.io/main.js` (Changed code · before: `L11536-L11564` → after: `L30234-L30284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30234-L30284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30234-L30284) · [Before (L11536-L11564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11536-L11564)

```diff
-           var mz;
-           Symbol("ZodOutput"), Symbol("ZodInput");
-           class jz {
-             constructor() {
-               this._map = new WeakMap, this._idmap = new Map
-             }
-             add(vv) {
-               const zv = arguments.length <= 1 ? void 0 : arguments[1];
-               return this._map.set(vv, zv), zv && "object" === typeof zv && "id" in zv && this._idmap.set(zv.id, vv), this
-             }
-             clear() {
-               return this._map = new WeakMap, this._idmap = new Map, this
-             }
-             remove(vv) {
-               const zv = this._map.get(vv);
-               return zv && "object" === typeof zv && "id" in zv && this._idmap.delete(zv.id), this._map.delete(vv), this
- ... (13 more removed lines; see GitHub link above)
+         },
+         2278: (TT, kT, cT) => {
+           cT.d(kT, {
+             c: () => NT,
+             f: () => ST,
+             g: () => hT,
+             j: () => QT
+           });
+           var lT = cT(328),
+             MT = cT(1195),
+             KT = cT(31),
+             OT = cT(1061),
+             yT = cT(2286),
+             fT = cT(2168),
+             xT = cT(2176),
+             IT = cT(1099);
+ ... (35 more added lines; see GitHub link above)
```

#### 728. `bundles/bloxd.io/main.js` (Changed code · before: `L11566-L11572` → after: `L30286-L30312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30286-L30312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30286-L30312) · [Before (L11566-L11572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11566-L11572)

```diff
-               return this._map.get(vv)
-             }
-             has(vv) {
-               return this._map.has(vv)
-             }
-           }(mz = globalThis).__zod_globalRegistry ?? (mz.__zod_globalRegistry = new jz);
-           globalThis.__zod_globalRegistry;
+             },
+             vT = {
+               own: {
+                 unknown: "revoked"
+               },
+               sent: {
+                 unknown: "giftSentRevoked"
+               },
+               received: {
+                 unknown: "giftReceivedRevoked"
+               }
+             };
+           const tT = {
+             paid: (TT, kT) => AT[kT],
+             revoked: function(TT, kT) {
+               var cT;
+ ... (11 more added lines; see GitHub link above)
```

#### 729. `bundles/bloxd.io/main.js` (Changed code · before: `L11575-L11579` → after: `L30315-L30331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30315-L30331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30315-L30331) · [Before (L11575-L11579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11575-L11579)

```diff
-             return new Jv({
-               check: "string_format",
-               format: "regex",
-               ...fv(zv),
-               pattern: vv
+             var cT, lT, MT;
+             const KT = function(TT, kT) {
+                 const cT = [];
+                 kT.superDays > 0 && cT.push(1 === kT.superDays ? TT("paymentHistory:superRankOneDay") : TT("paymentHistory:superRankDays", {
+                   count: kT.superDays
+                 }));
+                 for (const lT of kT.cosmeticPacks) cT.push(TT("paymentHistory:cosmeticPack", {
+                   packName: (0, xT.g)(lT)
+                 }));
+                 return kT.premiumCurrency > 0 && cT.push(1 === kT.premiumCurrency ? TT("paymentHistory:onePremiumCurrency") : TT("paymentHistory:premiumCurrency", {
+                   count: kT.premiumCurrency
+                 })), cT.join(", ")
+               }(TT, kT.items),
+               OT = kT.gift ? null !== (cT = kT.gift.otherPlayer) && void 0 !== cT ? cT : TT("paymentHistory:deletedPlayer") : "";
+             return TT(`paymentHistory:${tT[kT.event](kT,null!==(lT=null===(MT=kT.gift)||void 0===MT?void 0:MT.direction)&&void 0!==lT?lT:"own")}`, {
+               items: KT,
+ ... (1 more added lines; see GitHub link above)
```

#### 730. `bundles/bloxd.io/main.js` (Changed code · before: `L11611-L11616` → after: `L30336-L30354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30336-L30354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30336-L30354) · [Before (L11611-L11616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11611-L11616)

```diff
-             return function(vv, zv) {
-               return new vv({
-                 type: "string",
-                 ...fv(zv)
-               })
-             }(Yz, vv)
+             let {
+               entry: kT
+             } = TT;
+             const {
+               superDays: cT,
+               cosmeticPacks: lT,
+               premiumCurrency: MT
+             } = kT.items;
+             return (0, IT.jsxs)("div", {
+               className: "PaymentEntryIcon",
+               children: [cT > 0 && (0, IT.jsx)(OT.e, {
+                 name: "bolt"
+               }), 0 === cT && lT.length > 0 && (0, IT.jsx)(xT.b, {
+                 pack: lT[0]
+               }), 0 === cT && 0 === lT.length && MT > 0 && (0, IT.jsx)(yT.f, {}), "revoked" === kT.event && (0, IT.jsx)(OT.e, {
+                 name: "circle-xmark",
+ ... (3 more added lines; see GitHub link above)
```

#### 731. `bundles/bloxd.io/main.js` (Changed code · before: `L11622-L11629` → after: `L30357-L30361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30357-L30361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30357-L30361) · [Before (L11622-L11629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11622-L11629)

```diff
-           function Dz(vv) {
-             return function(vv, zv) {
-               return new vv({
-                 type: "number",
-                 checks: [],
-                 ...fv(zv)
-               })
-             }(Oz, vv)
+           function QT() {
+             KT.e.set({
+               openEverythingMenuName: lT.o.SETTINGS,
+               openSettingsCategory: "account"
+             })
```

#### 732. `bundles/bloxd.io/main.js` (Changed code · before: `L11636-L11652` → after: `L30365-L30394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30365-L30394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30365-L30394) · [Before (L11636-L11652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11636-L11652)

```diff
-             return function(vv, zv) {
-               return new vv({
-                 type: "boolean",
-                 ...fv(zv)
-               })
-             }(Kz, vv)
-           }
-           const Uz = hv("ZodMiniUnknown", ((vv, zv) => {
-             Xv.init(vv, zv), Fz.init(vv, zv)
-           }));
- 
-           function Rz() {
-             return function(vv) {
-               return new vv({
-                 type: "unknown"
-               })
- ... (1 more removed lines; see GitHub link above)
+             let {
+               entry: kT,
+               showKeys: cT,
+               hide: lT
+             } = TT;
+             const {
+               t: KT
+             } = (0, MT.B)();
+             return (0, IT.jsxs)("div", {
+               className: "NotificationToast",
+               children: [(0, IT.jsx)("div", {
+                 className: "NotificationToastIcon",
+                 children: (0, IT.jsx)(NT, {
+                   entry: kT
+                 })
+               }), (0, IT.jsx)("div", {
+ ... (14 more added lines; see GitHub link above)
```

#### 733. `bundles/bloxd.io/main.js` (Changed code · before: `L11654-L11656` → after: `L30396-L30425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30396-L30425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30396-L30425) · [Before (L11654-L11656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11654-L11656)

```diff
-           const xz = hv("ZodMiniNever", ((vv, zv) => {
-             uv.init(vv, zv), Fz.init(vv, zv)
-           }));
+         },
+         2143: (TT, kT, cT) => {
+           cT.d(kT, {
+             d: () => NT,
+             g: () => tT,
+             j: () => hT,
+             k: () => ST,
+             n: () => QT
+           });
+           var lT = cT(71),
+             MT = cT(328),
+             KT = cT(1195),
+             OT = cT(1061),
+             yT = cT(2130),
+             fT = cT(2146),
+             xT = cT(1497),
+ ... (14 more added lines; see GitHub link above)
```

#### 734. `bundles/bloxd.io/main.js` (Changed code · before: `L11659-L11664` → after: `L30428-L30441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30428-L30441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30428-L30441) · [Before (L11659-L11664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11659-L11664)

```diff
-             return function(vv, zv) {
-               return new vv({
-                 type: "never",
-                 ...fv(zv)
-               })
-             }(xz, vv)
+             let {
+               payload: kT
+             } = TT;
+             switch (kT.kind) {
+               case "appDownload":
+                 return (0, jT.jsx)(OT.e, {
+                   name: "appStore" === kT.store ? "apple" : "google-play",
+                   kit: "brands"
+                 });
+               case "signIn":
+                 return (0, jT.jsx)(OT.e, {
+                   name: "user"
+                 })
+             }
```

#### 735. `bundles/bloxd.io/main.js` (Changed code · before: `L11670-L11674` → after: `L30444-L30452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30444-L30452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30444-L30452) · [Before (L11670-L11674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11670-L11674)

```diff
-           function Iz(vv, zv) {
-             return new qz({
-               type: "array",
-               element: vv,
-               ...fv(zv)
+           function hT(TT) {
+             let {
+               payload: kT
+             } = TT;
+             const {
+               t: cT
+             } = (0, KT.B)();
+             return (0, jT.jsx)(jT.Fragment, {
+               children: cT(vT[kT.kind].title)
```

#### 736. `bundles/bloxd.io/main.js` (Changed code · before: `L11690-L11695` → after: `L30456-L30464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30456-L30464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30456-L30464) · [Before (L11690-L11695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11690-L11695)

```diff
-           function Az(vv, zv) {
-             return new Qz({
-               type: "object",
-               shape: vv,
-               catchall: tz(),
-               ...fv(zv)
+           function NT(TT) {
+             let {
+               payload: kT
+             } = TT;
+             const {
+               t: cT
+             } = (0, KT.B)();
+             return (0, jT.jsx)(jT.Fragment, {
+               children: cT(vT[kT.kind].action)
```

#### 737. `bundles/bloxd.io/main.js` (Changed code · before: `L11699-L11706` → after: `L30468-L30478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30468-L30478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30468-L30478) · [Before (L11699-L11706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11699-L11706)

```diff
-           function Lz(vv, zv) {
-             return function(vv, zv) {
-               if (!cv(zv)) throw new Error("Invalid input to extend: expected a plain object");
-               const Pv = vv._zod.def.checks;
-               if (Pv && Pv.length > 0) {
-                 const Pv = vv._zod.def.shape;
-                 for (const vv in zv)
-                   if (void 0 !== Object.getOwnPropertyDescriptor(Pv, vv)) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")
+           function QT(TT, kT, cT) {
+             if ("signIn" !== kT.kind || "inGame" !== AT.e.get("gameState")) {
+               switch ((0, xT.reportAnalyticsClick)({
+                   id: "prompt.accept",
+                   value: `${cT}:${kT.kind}`
+                 }), kT.kind) {
+                 case "appDownload":
+                   window.open(MT.qb[kT.store]), (0, fT.k)();
+                   break;
+                 case "signIn":
+                   (0, IT.b)()
```

#### 738. `bundles/bloxd.io/main.js` (Changed code · before: `L11708-L11718` → after: `L30480-L30481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30480-L30481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30480-L30481) · [Before (L11708-L11718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11708-L11718)

```diff
-               const hv = sv(vv._zod.def, {
-                 get shape() {
-                   const Pv = {
-                     ...vv._zod.def.shape,
-                     ...zv
-                   };
-                   return av(this, "shape", Pv), Pv
-                 }
-               });
-               return jv(vv, hv)
-             }(vv, zv)
+               yT.f.dismiss(TT)
+             } else(0, IT.b)()
```

#### 739. `bundles/bloxd.io/main.js` (Changed code · before: `L11724-L11728` → after: `L30484-L30523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30484-L30523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30484-L30523) · [Before (L11724-L11728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11724-L11728)

```diff
-           function Mz(vv, zv) {
-             return new Hz({
-               type: "union",
-               options: vv,
-               ...fv(zv)
+           function ST(TT) {
+             let {
+               notificationId: kT,
+               payload: cT,
+               showKeys: MT,
+               hide: OT
+             } = TT;
+             const {
+               t: IT
+             } = (0, KT.B)();
+             return (0, lT.useEffect)((() => {
+               (0, fT.g)(cT.kind)
+             }), [cT.kind]), (0, jT.jsxs)("div", {
+               className: "NotificationToast",
+               children: [(0, jT.jsx)("div", {
+                 className: "NotificationToastIcon",
+ ... (24 more added lines; see GitHub link above)
```

#### 740. `bundles/bloxd.io/main.js` (Changed code · before: `L11731-L11733` → after: `L30526-L30539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30526-L30539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30526-L30539) · [Before (L11731-L11733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11731-L11733)

```diff
-           const yz = hv("ZodMiniDiscriminatedUnion", ((vv, zv) => {
-             dz.init(vv, zv), Fz.init(vv, zv)
-           }));
+         },
+         2168: (TT, kT, cT) => {
+           cT.d(kT, {
+             d: () => IT,
+             g: () => AT,
+             i: () => CT
+           });
+           var lT = cT(1046),
+             MT = cT.n(lT),
+             KT = cT(1195),
+             OT = cT(1470),
+             yT = cT(2002),
+             fT = cT(1061),
+             xT = cT(1099);
```

#### 741. `bundles/bloxd.io/main.js` (Changed code · before: `L11735-L11740` → after: `L30541-L30562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30541-L30562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30541-L30562) · [Before (L11735-L11740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11735-L11740)

```diff
-           function Bz(vv, zv, Pv) {
-             return new yz({
-               type: "union",
-               options: zv,
-               discriminator: vv,
-               ...fv(Pv)
+           function IT(TT) {
+             let {
+               action: kT,
+               showKeys: cT,
+               hide: lT
+             } = TT;
+             const MT = null !== kT && void 0 !== kT && kT.isWatch ? OT.i : OT.m;
+             return (0, xT.jsxs)("div", {
+               className: "NotificationToastButtons",
+               children: [kT && (0, xT.jsxs)(MT, {
+                 className: "NotificationToastButton SmallTextLight",
+                 onClick: kT.onClick,
+                 analyticsClick: kT.analyticsClick,
+                 children: [kT.label, cT && kT.answersToY && (0, xT.jsx)(yT.b, {
+                   keyCode: "KeyY",
+                   padHidesKey: !0,
+ ... (6 more added lines; see GitHub link above)
```

#### 742. `bundles/bloxd.io/main.js` (Changed code · before: `L11747-L11752` → after: `L30566-L30602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30566-L30602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30566-L30602) · [Before (L11747-L11752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11747-L11752)

```diff
-           function Ez(vv, zv, Pv) {
-             return new Jz({
-               type: "record",
-               keyType: vv,
-               valueType: zv,
-               ...fv(Pv)
+           function AT(TT) {
+             let {
+               accept: kT,
+               decline: cT,
+               isIconOnly: lT,
+               showKeys: IT
+             } = TT;
+             const {
+               t: AT
+             } = (0, KT.B)(), CT = MT()("NotificationToastButton SmallTextLight", {
+               NotificationToastAnswer: lT
+             });
+             return (0, xT.jsxs)(xT.Fragment, {
+               children: [(0, xT.jsxs)(OT.e, {
+                 className: CT,
+                 onClick: kT.onClick,
+ ... (21 more added lines; see GitHub link above)
```

#### 743. `bundles/bloxd.io/main.js` (Changed code · before: `L11759-L11764` → after: `L30606-L30625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30606-L30625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30606-L30625) · [Before (L11759-L11764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11759-L11764)

```diff
-           function bz(vv, zv) {
-             const Pv = Array.isArray(vv) ? Object.fromEntries(vv.map((vv => [vv, vv]))) : vv;
-             return new oz({
-               type: "enum",
-               entries: Pv,
-               ...fv(zv)
+           function CT(TT) {
+             let {
+               showKeys: kT,
+               hide: cT
+             } = TT;
+             const {
+               t: lT
+             } = (0, KT.B)();
+             return (0, xT.jsxs)("button", {
+               type: "button",
+               className: "NotificationToastClose",
+               "aria-label": lT("notifications:close"),
+               title: lT("notifications:close"),
+               onClick: cT,
+               children: [(0, xT.jsx)(fT.e, {
+                 name: "xmark"
+ ... (4 more added lines; see GitHub link above)
```

#### 744. `bundles/bloxd.io/main.js` (Changed code · before: `L11767-L11769` → after: `L30628-L30641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30628-L30641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30628-L30641) · [Before (L11767-L11769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11767-L11769)

```diff
-           const rz = hv("ZodMiniLiteral", ((vv, zv) => {
-             Tz.init(vv, zv), Fz.init(vv, zv)
-           }));
+         },
+         3565: (TT, kT, cT) => {
+           cT.d(kT, {
+             c: () => IT
+           });
+           var lT = cT(71),
+             MT = cT(3574),
+             KT = cT(1195),
+             OT = cT(3589),
+             yT = cT(1099);
+           const fT = {
+               stealing: "user"
+             },
+             xT = ["other"];
```

#### 745. `bundles/bloxd.io/main.js` (Changed code · before: `L11771-L11775` → after: `L30643-L30686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30643-L30686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30643-L30686) · [Before (L11771-L11775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11771-L11775)

```diff
-           function kz(vv, zv) {
-             return new rz({
-               type: "literal",
-               values: Array.isArray(vv) ? vv : [vv],
-               ...fv(zv)
+           function IT(TT) {
+             let {
+               reported: kT,
+               chatMessage: cT,
+               inGame: IT,
+               submitting: AT = !1,
+               onCancel: CT
+             } = TT;
+             const [jT, vT] = (0, lT.useState)(null), [tT, hT] = (0, lT.useState)(""), {
+               t: NT
+             } = (0, KT.B)(), QT = (0, lT.useMemo)((() => function(TT) {
+               const kT = Object.assign({}, TT),
+                 cT = {};
+               for (const lT of xT) kT[lT] && (cT[lT] = kT[lT], delete kT[lT]);
+               return Object.assign({}, kT, fT, cT)
+             }(OT.j)), []), ST = null !== jT && OT.k.has(jT), DT = !IT && ST, aT = null !== jT && void 0 !== fT[jT], FT = null !== jT && !aT && !ST, rT = "worldCodeLine" === kT.kind ? OT.q : Object.keys(QT).filter((TT => {
+ ... (28 more added lines; see GitHub link above)
```

#### 746. `bundles/bloxd.io/main.js` (Changed code · before: `L11778-L11780` → after: `L30689-L30721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30689-L30721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30689-L30721) · [Before (L11778-L11780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11778-L11780)

```diff
-           const Xz = hv("ZodMiniTransform", ((vv, zv) => {
-             Wz.init(vv, zv), Fz.init(vv, zv)
-           }));
+         },
+         3e3: (TT, kT, cT) => {
+           cT.d(kT, {
+             e: () => DT,
+             f: () => ST
+           });
+           var lT = cT(71),
+             MT = cT(1046),
+             KT = cT.n(MT),
+             OT = cT(2374),
+             yT = cT(2947),
+             fT = cT(2972),
+             xT = cT(1195),
+             IT = cT(1130),
+             AT = cT(1136),
+             CT = cT(1470),
+ ... (17 more added lines; see GitHub link above)
```

#### 747. `bundles/bloxd.io/main.js` (Changed code · before: `L11783-L11785` → after: `L30724-L30826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30724-L30826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30724-L30826) · [Before (L11783-L11785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11783-L11785)

```diff
-             return new Xz({
-               type: "transform",
-               transform: vv
+             let {
+               className: kT,
+               gift: cT,
+               highlightSku: MT
+             } = TT;
+             const {
+               t: DT
+             } = (0, xT.B)(), {
+               userContext: aT
+             } = (0, IT.b)(), {
+               bundles: FT,
+               loadFailed: rT,
+               retry: PT
+             } = (0, yT.useBillingOfferings)("gemShop"), {
+               purchaseUnderWay: wT,
+               notice: mT,
+ ... (87 more added lines; see GitHub link above)
```

#### 748. `bundles/bloxd.io/main.js` (Changed code · before: `L11788-L11790` → after: `L30829-L30852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30829-L30852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30829-L30852) · [Before (L11788-L11790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11788-L11790)

```diff
-           const vP = hv("ZodMiniOptional", ((vv, zv) => {
-             az.init(vv, zv), Fz.init(vv, zv)
-           }));
+         },
+         2944: (TT, kT, cT) => {
+           cT.d(kT, {
+             c: () => wT
+           });
+           var lT = cT(2355),
+             MT = cT(3013),
+             KT = cT(1195),
+             OT = cT(1363),
+             yT = cT(2696),
+             fT = cT(2947),
+             xT = cT(2972),
+             IT = cT(1470),
+             AT = cT(2931),
+             CT = cT(2308),
+             jT = cT(3e3),
+ ... (8 more added lines; see GitHub link above)
```

#### 749. `bundles/bloxd.io/main.js` (Changed code · before: `L11793-L11795` → after: `L30855-L30897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30855-L30897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30855-L30897) · [Before (L11793-L11795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11793-L11795)

```diff
-             return new vP({
-               type: "optional",
-               innerType: vv
+             let {
+               priced: {
+                 product: kT
+               }
+             } = TT;
+             const {
+               t: cT
+             } = (0, KT.B)();
+             let MT, OT, yT;
+             if ("superRank" === kT.kind) MT = (0, aT.jsx)("div", {
+               className: "PremiumCurrencyPurchaseIcon PremiumCurrencyPurchaseIconSuperRank",
+               children: (0, aT.jsx)("img", {
+                 src: "/textures/charSkins/previews/cape_super_preview.png",
+                 alt: ""
+               })
+             }), OT = cT("homePage:superRank"), yT = cT("store:purchaseDays", {
+ ... (27 more added lines; see GitHub link above)
```

#### 750. `bundles/bloxd.io/main.js` (Changed code · before: `L11803-L11805` → after: `L30902-L30967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30902-L30967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30902-L30967) · [Before (L11803-L11805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11803-L11805)

```diff
-             return new PP({
-               type: "nullable",
-               innerType: vv
+             var kT;
+             let {
+               shortBy: cT,
+               logInToBuy: lT
+             } = TT;
+             const {
+               t: MT
+             } = (0, KT.B)(), {
+               bundles: OT,
+               loadFailed: yT,
+               retry: AT
+             } = (0, fT.useBillingOfferings)("topUp"), {
+               purchaseUnderWay: CT,
+               notice: NT,
+               buy: QT
+             } = (0, xT.e)(lT);
+ ... (50 more added lines; see GitHub link above)
```

#### 751. `bundles/bloxd.io/main.js` (Changed code · before: `L11812-L11821` → after: `L30971-L31027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R30971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L30971-L31027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L30971-L31027) · [Before (L11812-L11821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11812-L11821)

```diff
-           function eP(vv, zv) {
-             return new SP({
-               type: "default",
-               innerType: vv,
-               get defaultValue() {
-                 return "function" === typeof zv ? zv() : cv(vv = zv) ? {
-                   ...vv
-                 } : Array.isArray(vv) ? [...vv] : vv;
-                 var vv
-               }
+           function PT(TT) {
+             let {
+               priced: kT,
+               giftRecipient: cT,
+               onDecide: lT
+             } = TT;
+             const {
+               t: MT
+             } = (0, KT.B)(), OT = (0, yT.g)(), fT = null === OT ? 0 : kT.price - OT;
+             return (0, aT.jsxs)("div", {
+               className: "PremiumCurrencyPurchase",
+               children: [(0, aT.jsx)("div", {
+                 className: "PremiumCurrencyPurchaseTitle SmallTextBold",
+                 children: MT("store:purchaseTitle")
+               }), cT && (0, aT.jsxs)("div", {
+                 className: "PremiumCurrencyPurchaseBanner PremiumCurrencyPurchaseBannerGift",
+ ... (41 more added lines; see GitHub link above)
```

#### 752. `bundles/bloxd.io/main.js` (Changed code · before: `L11829-L11833` → after: `L31032-L31048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31032-L31048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31032-L31048) · [Before (L11829-L11833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11829-L11833)

```diff
-             return new gP({
-               type: "pipe",
-               in: vv,
-               out: zv
-             })
+             const cT = (0, MT.f)(TT);
+             return cT ? new Promise((TT => {
+               OT.NotificationProvider.showCustomPopup({
+                 body: lT => (0, aT.jsx)(PT, {
+                   priced: cT,
+                   giftRecipient: kT,
+                   onDecide: kT => {
+                     TT(kT), lT()
+                   }
+                 }),
+                 middleScreenPopupClassName: "PremiumCurrencyPurchasePopup",
+                 disableExitButton: !0,
+                 unlockPointerKey: "PremiumCurrencyConfirm"
+               }).getResult().then((() => {
+                 TT(!1)
+               }))
+ ... (1 more added lines; see GitHub link above)
```

#### 753. `bundles/bloxd.io/main.js` (Changed code · before: `L11835` → after: `L31050-L31051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31050-L31051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31050-L31051) · [Before (L11835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11835)

```diff
-         }, , , , , , , (vv, zv, Pv) => {
+         },
+         2286: (TT, kT, cT) => {
```

#### 754. `bundles/bloxd.io/main.js` (Changed code · before: `L11837-L11841` → after: `L31053-L31054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31053-L31054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31053-L31054) · [Before (L11837-L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11837-L11841)

```diff
-             b: () => Nv,
-             e: () => pv,
-             h: () => gv,
-             k: () => lv,
-             n: () => dv
+             d: () => fT,
+             f: () => yT
```

#### 755. `bundles/bloxd.io/main.js` (Changed code · before: `L11843-L11865` → after: `L31056-L31060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31056-L31060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31056-L31060) · [Before (L11843-L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11843-L11865)

```diff
-           var hv = Pv(122),
-             Sv = Pv(138);
-           const ev = hv.C({
-               safeArea: Sv.j,
-               notificationCanAsk: hv.i(),
-               pushToken: hv.t(hv.Q()),
-               privacyOptionsRequired: hv.t(hv.i())
-             }),
-             gv = hv.C({
-               protocol: hv.w(),
-               platform: hv.o(["ios", "android"]),
-               appVersion: hv.Q(),
-               build: hv.Q(),
-               capabilities: hv.J(hv.Q(), hv.w())
-             }),
-             pv = hv.q(gv, {
- ... (7 more removed lines; see GitHub link above)
+           var lT = cT(1046),
+             MT = cT.n(lT);
+           cT(71);
+           const KT = cT.p + "static/media/superGem.c1f678d63014e29926031a861d0a0671.svg";
+           var OT = cT(1099);
```

#### 756. `bundles/bloxd.io/main.js` (Changed code · before: `L11867-L11869` → after: `L31062-L31071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31062-L31071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31062-L31071) · [Before (L11867-L11869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11867-L11869)

```diff
-           function lv(vv, zv) {
-             let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-             return Object.prototype.hasOwnProperty.call(vv.capabilities, zv) && vv.capabilities[zv] >= Pv
+           function yT(TT) {
+             let {
+               className: kT
+             } = TT;
+             return (0, OT.jsx)("img", {
+               className: MT()("PremiumCurrencyIcon", kT),
+               src: KT,
+               alt: "",
+               draggable: !1
+             })
```

#### 757. `bundles/bloxd.io/main.js` (Changed code · before: `L11871` → after: `L31073-L31088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31073-L31088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31073-L31088) · [Before (L11871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11871)

```diff
-         }, , , , , , , , , (vv, zv, Pv) => {
+ 
+           function fT(TT) {
+             let {
+               amount: kT,
+               className: cT
+             } = TT;
+             return (0, OT.jsxs)("span", {
+               className: MT()("PremiumCurrencyAmount", cT),
+               children: [(0, OT.jsx)(yT, {}), null === kT ? (0, OT.jsx)("span", {
+                 className: "PremiumCurrencyAmountPending",
+                 children: (0).toLocaleString()
+               }) : kT.toLocaleString()]
+             })
+           }
+         },
+         3004: (TT, kT, cT) => {
```

#### 758. `bundles/bloxd.io/main.js` (Changed code · before: `L11873-L11892` → after: `L31090-L31100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31090-L31100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31090-L31100) · [Before (L11873-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11873-L11892)

```diff
-             c: () => gv,
-             f: () => ev,
-             j: () => Sv
-           });
-           var hv = Pv(122);
-           const Sv = hv.C({
-               top: hv.w(),
-               right: hv.w(),
-               bottom: hv.w(),
-               left: hv.w()
-             }),
-             ev = {
-               setOrientation: hv.C({
-                 orientation: hv.o(["portrait", "landscape", "default"])
-               })
-             },
- ... (4 more removed lines; see GitHub link above)
+             c: () => IT,
+             g: () => AT,
+             k: () => xT
+           });
+           var lT = cT(1046),
+             MT = cT.n(lT),
+             KT = cT(2315),
+             OT = cT(1195),
+             yT = cT(1470),
+             fT = cT(1099);
+ 
```

#### 759. `bundles/bloxd.io/main.js` (Changed code · before: `L11894` → after: `L31102-L31114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31102-L31114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31102-L31114) · [Before (L11894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11894)

```diff
-             return "noGamePlayed" === vv || "leftGame" === vv
+             let {
+               notice: kT,
+               className: cT
+             } = TT;
+             const {
+               t: lT
+             } = (0, OT.B)();
+             return null === kT ? null : (0, fT.jsx)("div", {
+               className: MT()("CheckoutNotice", cT, {
+                 CheckoutNoticeInfo: "info" === kT.kind
+               }),
+               children: lT(kT.key, kT.values)
+             })
```

#### 760. `bundles/bloxd.io/main.js` (Changed code · before: `L11898` → after: `L31118-L31127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31118-L31127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31118-L31127) · [Before (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11898)

```diff
-             return "inGame" === vv.status && !0 === vv.inMatch
+             let {
+               className: kT
+             } = TT;
+             return (0, fT.jsx)(xT, {
+               notice: (0, KT.checkoutOpensTab)() ? {
+                 kind: "info",
+                 key: "homePage:allowPopupsToPay"
+               } : null,
+               className: kT
+             })
```

#### 761. `bundles/bloxd.io/main.js` (Changed code · before: `L11902` → after: `L31131-L31150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31131-L31150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31131-L31150) · [Before (L11902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11902)

```diff
-             return "inGame" === vv.status && !0 === vv.lobbyFull
+             let {
+               retry: kT,
+               noticeClassName: cT
+             } = TT;
+             const {
+               t: lT
+             } = (0, OT.B)();
+             return (0, fT.jsxs)("div", {
+               className: "BundlesLoadFailed",
+               children: [(0, fT.jsx)(xT, {
+                 notice: {
+                   kind: "error",
+                   key: "homePage:premiumCurrencyBundlesUnavailable"
+                 },
+                 className: cT
+               }), (0, fT.jsx)(yT.e, {
+ ... (4 more added lines; see GitHub link above)
```

#### 762. `bundles/bloxd.io/main.js` (Changed code · before: `L11904-L11919` → after: `L31152-L31161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31152-L31161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31152-L31161) · [Before (L11904-L11919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11904-L11919)

```diff
-           Pv.d(zv, {
-             A: () => ev,
-             B: () => Tv,
-             C: () => Wv,
-             F: () => lv,
-             J: () => av,
-             N: () => sv,
-             P: () => iv,
-             c: () => dv,
-             g: () => Cv,
-             k: () => wv,
-             o: () => Nv,
-             q: () => gv,
-             r: () => pv,
-             v: () => hv,
-             z: () => Sv
+         },
+         1530: (TT, kT, cT) => {
+           cT.r(kT), cT.d(kT, {
+             LinkPreserveSearch: () => NT,
+             NavigatePreserveSearch: () => QT,
+             PrevLocationProvider: () => mT,
+             getPreviousLocation: () => wT,
+             navigatePreserveSearch: () => tT,
+             navigateToHomePage: () => ST,
+             useNavigatePreserveSearch: () => hT
```

#### 763. `bundles/bloxd.io/main.js` (Changed code · before: `L11921-L11928` → after: `L31163-L31181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31163-L31181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31163-L31181) · [Before (L11921-L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L11921-L11928)

```diff
-           const gv = 3e5,
-             pv = 3e4;
-           class dv extends Error {
-             constructor(vv, zv, Pv, hv) {
-               let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-                 ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
-               super(zv), this.httpCode = vv, this.errorMessageForUser = Pv, this.errorMessageTranslationParams = hv, this.responseBody = Sv, this.retryAfterMs = ev, this.name = "BadHttpCodeError"
-             }
+           var lT = cT(1535),
+             MT = cT(1532),
+             KT = cT(127),
+             OT = cT(1546),
+             yT = cT(31),
+             fT = cT(71),
+             xT = cT(159),
+             IT = cT(1554),
+             AT = cT(1625),
+             CT = cT(1478),
+             jT = cT(1486),
+             vT = cT(1099);
+ 
+           function tT(TT) {
+             const kT = yT.e.get("router"),
+               cT = KT.currentUrl.mergeSearchParamsInto(TT);
+ ... (3 more added lines; see GitHub link above)
```

#### 764. `bundles/bloxd.io/main.js` (Changed code · before: `L12016-L12017` → after: `L31184-L31191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31184-L31191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31184-L31191) · [Before (L12016-L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12016-L12017)

```diff
-           function Nv(vv) {
-             return dv.test(vv.trim())
+           function hT() {
+             const TT = (0, lT.t)();
+             return (0, fT.useCallback)(((kT, cT) => {
+               const lT = DT(kT);
+               "number" !== typeof lT ? (0, OT.e)(lT, (() => {
+                 TT(lT, cT)
+               })) : TT(lT)
+             }), [TT])
```

#### 765. `bundles/bloxd.io/main.js` (Changed code · before: `L12021` → after: `L31195-L31213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31195-L31213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31195-L31213) · [Before (L12021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12021)

```diff
-             return ev.test(vv) || gv.test(vv) || pv.test(vv)
+             let {
+               to: kT,
+               onClick: cT,
+               showPress: KT = !1,
+               ...OT
+             } = TT;
+             const yT = (0, lT.t)();
+             return (0, vT.jsx)(MT.e, {
+               draggable: !1,
+               ...KT ? jT.g : {},
+               ...OT,
+               to: DT(kT),
+               onClick: TT => {
+                 null === cT || void 0 === cT || cT(TT), TT.defaultPrevented || !(0, CT.c)(TT) || OT.target || (TT.preventDefault(), yT(DT(kT), {
+                   replace: OT.replace,
+                   state: OT.state
+ ... (3 more added lines; see GitHub link above)
```

#### 766. `bundles/bloxd.io/main.js` (Changed code · before: `L12025-L12027` → after: `L31217-L31232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31217-L31232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31217-L31232) · [Before (L12025-L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12025-L12027)

```diff
-             if (null === vv) return "no_webgl";
-             const zv = `${vv.vendor} ${vv.renderer}`;
-             return Sv.test(zv) ? "vm" : vv.majorPerformanceCaveat && (lv(zv) || Nv(vv.renderer)) ? "browser_fallback" : ev.test(zv) ? "no_driver" : gv.test(zv) ? "mesa" : pv.test(zv) ? "other_software" : "none"
+             let {
+               to: kT
+             } = TT;
+             return (0, vT.jsx)(lT.e, {
+               to: DT(kT)
+             })
+           }
+ 
+           function ST() {
+             (0, xT.m)() ? tT("/"): tT(function() {
+               for (let TT = FT.length - 2; TT >= 0; TT--) {
+                 const kT = FT[TT];
+                 if ("/" === kT || "/custom-games" === kT || kT.startsWith(IT.r) || kT.startsWith("/place/")) return kT
+               }
+               return "/"
+             }())
```

#### 767. `bundles/bloxd.io/main.js` (Changed code · before: `L12031` → after: `L31236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31236) · [Before (L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12031)

```diff
-             return "vm" === vv || hv.g.includes(vv)
+             return "string" === typeof TT ? KT.currentUrl.mergeSearchParamsInto(TT) : "number" === typeof TT ? -1 === TT && 1 === FT.length && FT[0].startsWith("/game") ? KT.currentUrl.mergeSearchParamsInto("/") : FT.length > 1 ? TT : KT.currentUrl.mergeSearchParamsInto("/") : (c … [truncated]
```

#### 768. `bundles/bloxd.io/main.js` (Changed code · before: `L12033-L12036` → after: `L31238-L31240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31238-L31240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31238-L31240) · [Before (L12033-L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12033-L12036)

```diff
-           const wv = {
-             antiAliasing: !1,
-             pixelScale: 2
-           };
+           const aT = (0, fT.createContext)([]),
+             FT = [],
+             rT = new Map;
```

#### 769. `bundles/bloxd.io/main.js` (Changed code · before: `L12038-L12043` → after: `L31242-L31245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31242-L31245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31242-L31245) · [Before (L12038-L12043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12038-L12043)

```diff
-           function av(vv, zv) {
-             var Pv, hv;
-             const Sv = {};
-             (null !== (Pv = vv.antiAliasing) && void 0 !== Pv ? Pv : zv.antiAliasing) && zv.antiAliasing && (Sv.antiAliasing = vv.antiAliasing);
-             const ev = null !== (hv = vv.pixelScale) && void 0 !== hv ? hv : zv.pixelScale;
-             return ev < wv.pixelScale && ev === zv.pixelScale && (Sv.pixelScale = vv.pixelScale), Sv
+           function PT() {
+             var TT;
+             const kT = null === (TT = window.history.state) || void 0 === TT ? void 0 : TT.idx;
+             return "number" === typeof kT ? kT : null
```

#### 770. `bundles/bloxd.io/main.js` (Changed code · before: `L12046-L12051` → after: `L31248-L31251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31248-L31251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31248-L31251) · [Before (L12046-L12051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12046-L12051)

```diff
-           function sv(vv, zv, Pv) {
-             const hv = {};
-             var Sv, ev;
-             void 0 !== zv.antiAliasing && vv.antiAliasing === wv.antiAliasing && (hv.antiAliasing = null !== (Sv = zv.antiAliasing) && void 0 !== Sv ? Sv : Pv.antiAliasing);
-             void 0 !== zv.pixelScale && vv.pixelScale === wv.pixelScale && (hv.pixelScale = null !== (ev = zv.pixelScale) && void 0 !== ev ? ev : Pv.pixelScale);
-             return hv
+           function wT() {
+             var TT;
+             const kT = PT();
+             return null === kT || 0 === kT ? null : null !== (TT = rT.get(kT - 1)) && void 0 !== TT ? TT : null
```

#### 771. `bundles/bloxd.io/main.js` (Changed code · before: `L12053-L12088` → after: `L31253-L31270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31253-L31270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31253-L31270) · [Before (L12053-L12088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12053-L12088)

```diff
-         }, , , , , , (vv, zv, Pv) => {
-           Pv.d(zv, {
-             C: () => Cv,
-             G: () => Sv,
-             H: () => gv,
-             I: () => av,
-             K: () => sv,
-             b: () => Wv,
-             d: () => Tv,
-             g: () => iv,
-             j: () => dv,
-             m: () => Nv,
-             q: () => lv,
-             s: () => hv,
-             v: () => pv,
-             y: () => wv
- ... (20 more removed lines; see GitHub link above)
+ 
+           function mT(TT) {
+             let {
+               children: kT
+             } = TT;
+             const cT = (0, lT.s)(),
+               MT = (0, lT.u)();
+             return (0, fT.useEffect)((() => {
+               const TT = cT.pathname + cT.search,
+                 kT = PT();
+               null !== kT && rT.set(kT, TT), "REPLACE" === MT && (0 === FT.length ? FT.push(TT) : FT[FT.length - 1] = TT), "PUSH" === MT && FT.push(TT), "POP" === MT && (0 !== FT.length && FT[FT.length - 1] === TT || FT.push(TT))
+             }), [cT, MT]), (0, vT.jsxs)(aT.Provider, {
+               value: FT,
+               children: [(0, vT.jsx)(AT.d, {}), kT]
+             })
+           }
+ ... (2 more added lines; see GitHub link above)
```

#### 772. `bundles/bloxd.io/main.js` (Changed code · before: `L12094-L12205` → after: `L31273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31273) · [Before (L12094-L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12094-L12205)

```diff
-             h: () => Wv,
-             j: () => dv,
-             m: () => wv,
-             p: () => ev,
-             q: () => sv,
-             r: () => lv,
-             t: () => gv,
-             x: () => Nv,
-             y: () => Sv
-           });
-           const hv = "_unloaded",
-             Sv = ["mobile", "tablet", "desktop", "_unloaded"],
-             ev = ["touchOnly", "mouseOnly", "hybrid", "_unloaded"],
-             gv = ["windows", "macos", "linux", "android", "ios", "chrome_os", "other", "_unloaded"],
-             pv = ["portalCrossPromotion", "other", "_unloaded"],
-             dv = ["homePageDiscover", "homePageSearch", "homePageRecentlyPlayed", "gameInformationPageDirect", "friendJoin", "friendOnlineToast", "sameNetworkJoin", "partyJoin", "gameInvite", "customGamesBrowse", "customGamePlace", "studioLeaderboard", "customLobbyCard", "worldCr … [truncated]
- ... (96 more removed lines; see GitHub link above)
+             g: () => PT
```

#### 773. `bundles/bloxd.io/main.js` (Changed code · before: `L12207-L12665` → after: `L31275-L31306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31275-L31306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31275-L31306) · [Before (L12207-L12665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12207-L12665)

```diff
-           var hv = Pv(194),
-             Sv = Pv(218);
-           const ev = {
-               standing: [0, 0, 0],
-               sitting: [0, -.25, 0],
-               zombie: [0, 0, 0],
-               gliding: [0, -.25, 0],
-               driving: [0, -.25, 0],
-               sleeping: [0, -.58, 0],
-               riding: [0, -.25, 0]
-             },
-             gv = {
-               droppedBlockSize: .3,
-               pG: .5,
-               lG: 1.8,
-               playerHitboxHeights: {
- ... (443 more removed lines; see GitHub link above)
+           var lT = cT(71),
+             MT = cT(1046),
+             KT = cT.n(MT),
+             OT = cT(1195),
+             yT = cT(1530),
+             fT = cT(1478),
+             xT = cT(3449),
+             IT = cT(3491),
+             AT = cT(3482),
+             CT = cT(1130),
+             jT = cT(4552),
+             vT = cT(1518),
+             tT = cT(761),
+             hT = cT(1559),
+             NT = cT(1018),
+             QT = cT(1061),
+ ... (16 more added lines; see GitHub link above)
```

#### 774. `bundles/bloxd.io/main.js` (Changed code · before: `L12668` → after: `L31309-L31410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31309-L31410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31309-L31410) · [Before (L12668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12668)

```diff
-             return vv < pv.serverDisconnected.code
+             let {
+               onlyCustomGames: kT = !1
+             } = TT;
+             const {
+               t: cT
+             } = (0, OT.B)(), MT = function(TT) {
+               const {
+                 t: kT,
+                 selectedLanguage: cT
+               } = (0, OT.B)(), {
+                 userContext: MT,
+                 isUserContextUpdating: KT
+               } = (0, CT.b)(), [yT, fT] = (0, lT.useState)({}), {
+                 handleClick: xT
+               } = (0, DT.g)(), AT = TT.flatMap((TT => "custom" === TT.type ? [TT.schematicId] : [])).join(",");
+               (0, lT.useEffect)((() => {
+ ... (86 more added lines; see GitHub link above)
```

#### 775. `bundles/bloxd.io/main.js` (Changed code · before: `L12670-L12675` → after: `L31412-L31476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31412-L31476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31412-L31476) · [Before (L12670-L12675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12670-L12675)

```diff
-           const lv = atob("I0lW"),
-             Tv = new Set;
-           for (const Wv in pv) {
-             const vv = pv[Wv].code;
-             if (Tv.has(vv)) throw new Error(`Duplicate leave code: ${vv}`);
-             Tv.add(vv)
+ 
+           function mT(TT) {
+             let {
+               itemKeys: kT,
+               children: cT
+             } = TT;
+             const MT = (0, lT.useRef)(null),
+               {
+                 after: OT
+               } = (0, jT.b)(MT, "x", kT);
+             return (0, rT.jsx)("div", {
+               ref: MT,
+               className: KT()("RecentlyPlayedGameScroll", {
+                 RecentlyPlayedGameScrollFadeRight: OT
+               }),
+               "data-pad-row": !0,
+ ... (49 more added lines; see GitHub link above)
```

#### 776. `bundles/bloxd.io/main.js` (Changed code · before: `L12677` → after: `L31478-L31479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31478-L31479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31478-L31479) · [Before (L12677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12677)

```diff
-         }, , , , , , , , , (vv, zv, Pv) => {
+         },
+         4590: (TT, kT, cT) => {
```

#### 777. `bundles/bloxd.io/main.js` (Changed code · before: `L12679` → after: `L31481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31481) · [Before (L12679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12679)

```diff
-             e: () => ev
+             b: () => OT
```

#### 778. `bundles/bloxd.io/main.js` (Changed code · before: `L12681-L12712` → after: `L31483-L31486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31483-L31486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31483-L31486) · [Before (L12681-L12712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12681-L12712)

```diff
-           var hv = Pv(202),
-             Sv = Pv(209);
-           const ev = {
-             localGameName: null,
-             devOnlyGameNames: ["testGym", "schematicTester"],
-             allowDuplicateIds: !1,
-             useLocalDatabase: !1,
-             useBillingSandbox: !1,
-             useBillingTestProjects: !1,
-             greenlightChecksEnabled: !0,
-             offlineMode: !1,
-             useYoutubeApi: !1,
-             localDomain: "localhost",
-             useAdsInDev: !1,
-             msnDevPublicKey: null
-           };
- ... (16 more removed lines; see GitHub link above)
+           var lT = cT(71),
+             MT = cT(1486),
+             KT = cT(1099);
+ 
```

#### 779. `bundles/bloxd.io/main.js` (Changed code · before: `L12714` → after: `L31488-L31516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31488-L31516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31488-L31516) · [Before (L12714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12714)

```diff
-             return "__proto__" === vv || vv in Object.prototype
+             let {
+               lobbyGroups: kT,
+               onLobbyClick: cT,
+               keyPrefix: OT = "",
+               padIgnoreFrom: yT
+             } = TT;
+             const fT = kT.filter((TT => TT.length > 0));
+             if (0 === fT.length) return null;
+             let xT = 0;
+             return (0, KT.jsx)("div", {
+               className: "RecentlyPlayedLobbies",
+               children: fT.map(((TT, kT) => (0, KT.jsxs)(lT.Fragment, {
+                 children: [kT > 0 && (0, KT.jsx)("div", {
+                   className: "RecentlyPlayedLobbiesDivider"
+                 }), TT.map(((TT, kT) => {
+                   const lT = void 0 !== yT && xT >= yT;
+ ... (13 more added lines; see GitHub link above)
```

#### 780. `bundles/bloxd.io/main.js` (Changed code · before: `L12717-L12718` → after: `L31532-L31544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31532-L31544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31532-L31544) · [Before (L12717-L12718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12717-L12718)

```diff
-           function Sv(vv, zv) {
-             return void 0 !== vv && Object.hasOwn(vv, zv) ? vv[zv] : void 0
+           function fT() {
+             return OT
+           }
+ 
+           function xT() {
+             const [TT, kT] = (0, lT.useState)(OT);
+             return (0, lT.useEffect)((() => (kT(OT), yT.add(kT))), []), TT
+           }
+ 
+           function IT(TT) {
+             OT !== TT && (MT.gameBridge.send("setReplayViewerOpen", TT), OT = TT, yT.forEach((kT => {
+               kT(TT)
+             })))
```

#### 781. `bundles/bloxd.io/main.js` (Changed code · before: `L12722` → after: `L31548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31548) · [Before (L12722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12722)

```diff
-             return Object.create(null)
+             IT(!1)
```

#### 782. `bundles/bloxd.io/main.js` (Changed code · before: `L12725-L12729` → after: `L31553-L31700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31553-L31700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31553-L31700) · [Before (L12725-L12729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12725-L12729)

```diff
-             b: () => Sv,
-             e: () => hv,
-             h: () => ev
-           })
-         }, , , , , , , (vv, zv, Pv) => {
+             d: () => xT,
+             g: () => fT
+           });
+           var lT = cT(3589),
+             MT = cT(1195),
+             KT = cT(1370),
+             OT = cT(1692),
+             yT = (cT(3580), cT(1099));
+ 
+           function fT(TT) {
+             let {
+               title: kT,
+               titleOpts: cT,
+               quotedLine: fT,
+               reasonIds: xT,
+               selectedReason: IT,
+ ... (132 more added lines; see GitHub link above)
```

#### 783. `bundles/bloxd.io/main.js` (Changed code · before: `L12732-L12734` → after: `L31703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31703) · [Before (L12732-L12734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12732-L12734)

```diff
-             h: () => gv,
-             k: () => Cv,
-             m: () => ev
+             g: () => yT
```

#### 784. `bundles/bloxd.io/main.js` (Changed code · before: `L12736-L12740` → after: `L31705-L31725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31705-L31725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31705-L31725) · [Before (L12736-L12740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12736-L12740)

```diff
-           var hv = Pv(218);
-           const Sv = !1;
- 
-           function ev() {
-             return !1
+           var lT = cT(71),
+             MT = cT(1363),
+             KT = cT(3574),
+             OT = cT(1099);
+           async function yT(TT, kT) {
+             const cT = {
+                 selectedPolicyId: null,
+                 LO: null
+               },
+               lT = MT.NotificationProvider.showCustomPopup({
+                 body: lT => (0, OT.jsx)(fT, {
+                   popupParams: kT,
+                   reportPolicyIds: TT,
+                   selectionRef: cT,
+                   closePopup: lT
+                 }),
+ ... (5 more added lines; see GitHub link above)
```

#### 785. `bundles/bloxd.io/main.js` (Changed code · before: `L12743-L12747` → after: `L31728-L31761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31728-L31761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31728-L31761) · [Before (L12743-L12747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12743-L12747)

```diff
-           function gv() {
-             {
-               if ("undefined" === typeof window) return !1;
-               const vv = window.location.hostname;
-               return vv.includes("preprod") || vv.includes(hv.b)
+           function fT(TT) {
+             let {
+               popupParams: kT,
+               reportPolicyIds: cT,
+               selectionRef: MT,
+               closePopup: yT
+             } = TT;
+             const [fT, xT] = (0, lT.useState)(null), [IT, AT] = (0, lT.useState)("");
+             return (0, OT.jsx)(KT.g, {
+               title: kT.title,
+               quotedLine: null,
+               reasonIds: cT,
+               selectedReason: fT,
+               onSelectReason: xT,
+               details: null !== fT ? IT : null,
+               onDetailsChange: AT,
+ ... (18 more added lines; see GitHub link above)
```

#### 786. `bundles/bloxd.io/main.js` (Changed code · before: `L12750-L12761` → after: `L31764-L31801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31764-L31801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31764-L31801) · [Before (L12750-L12761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12750-L12761)

```diff
-           const pv = [8, 11, 15, 16, 17, 18, 19],
-             dv = [];
-           for (let iv = 0; iv <= 30; iv++) pv.includes(iv) || dv.push(10 * iv);
-           const Nv = dv;
-           Nv.filter((vv => 0 !== vv));
-           const lv = function(vv) {
-               if (void 0 === vv || "" === vv) return 0;
-               const zv = Number(vv);
-               if (!Nv.includes(zv)) throw new Error(`Invalid port offset "${vv}". Must be one of: ${Nv.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
-               return zv
-             }("0"),
-             Tv = 4500;
+         },
+         3056: (TT, kT, cT) => {
+           cT.d(kT, {
+             d: () => fT
+           });
+           var lT = cT(1046),
+             MT = cT.n(lT),
+             KT = cT(71),
+             OT = cT(1316),
+             yT = cT(1099);
+ 
+           function fT(TT) {
+             let {
+               className: kT
+             } = TT;
+             const cT = (0, KT.useRef)(null);
+ ... (22 more added lines; see GitHub link above)
```

#### 787. `bundles/bloxd.io/main.js` (Changed code · before: `L12764-L12766` → after: `L31804-L31821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31804-L31821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31804-L31821) · [Before (L12764-L12766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12764-L12766)

```diff
-             const Pv = {};
-             for (const hv of Object.keys(vv)) Pv[hv] = vv[hv] + zv;
-             return Pv
+             lT.NotificationProvider.showPromptPopup({
+               icon: "face-dizzy",
+               title: "shaderPack:failedTitle",
+               subtitle: TT,
+               confirmText: "shaderPack:removePack",
+               destructive: !0,
+               cancelText: "general:back"
+             }).getResult().then((async TT => {
+               if ("notificationTornDown" !== TT) {
+                 if (!0 === TT) {
+                   const {
+                     removeShaderPack: TT
+                   } = await cT.e(128).then((() => cT(6641)));
+                   await TT()
+                 }
+                 kT ? kT() : !0 === TT && (0, OT.reloadBloxd)("/")
+ ... (2 more added lines; see GitHub link above)
```

#### 788. `bundles/bloxd.io/main.js` (Changed code · before: `L12768-L12833` → after: `L31823-L31875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31823-L31875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31823-L31875) · [Before (L12768-L12833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12768-L12833)

```diff
-           const wv = {
-               1: 6585,
-               2: 6586,
-               3: 6587
-             },
-             av = {
-               1: 6585,
-               2: 6586,
-               3: 6587,
-               4: 6588,
-               5: 6589,
-               6: 6590,
-               7: 6591,
-               8: 6592,
-               9: 6593,
-               10: 6594,
- ... (50 more removed lines; see GitHub link above)
+ 
+           function AT(TT, kT) {
+             if (fT.gameBridge.latest("connectedGame").replay) return fT.gameBridge.send("holdReplayForShaderPackFailure", TT), void IT(TT, (() => {
+               fT.gameBridge.send("leaveGame", {
+                 reloadPath: "/"
+               })
+             }));
+             const cT = fT.gameBridge.lookup("leaveGameReloadsPage", null) && yT.g.setItem(xT, TT);
+             fT.gameBridge.send("leaveGame", {
+               reloadPath: "/"
+             }), cT || (kT("/"), IT(TT))
+           }
+           async function CT() {
+             const TT = yT.g.getItem(xT);
+             null !== TT && (yT.g.removeItem(xT), await (0, MT.x)(KT.f.get().getCurrentLanguageCode(), TT), IT(TT))
+           }
+ ... (37 more added lines; see GitHub link above)
```

#### 789. `bundles/bloxd.io/main.js` (Changed code · before: `L12835-L12848` → after: `L31877-L31923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31877-L31923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31877-L31923) · [Before (L12835-L12848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12835-L12848)

```diff
-           const Cv = function(vv) {
-             const zv = gv() ? wv : av;
-             return {
-               indexServerPort: Tv + vv,
-               staticServerPort: Tv + vv,
-               staticServerNginxPort: Tv + vv - 1e3,
-               matchmakingServerPort: 6522 + vv,
-               matchmakingServerNginxPort: 5522 + vv,
-               socialServerPorts: Wv(zv, vv),
-               socialServerNginxPorts: Wv(sv, vv),
-               localDynamoDbPort: 8e3 + vv
-             }
-           }(lv)
-         }, , , , , , , , , (vv, zv, Pv) => {
+             return (0, tT.jsxs)("div", {
+               className: "CopyFriendLink",
+               onPointerEnter: rT,
+               onPointerDown: rT,
+               onFocus: rT,
+               children: [(0, tT.jsxs)(CT.P, {
+                 className: KT()("CopyFriendLinkButton", {
+                   ActiveSecondaryButton: ST
+                 }),
+                 disabled: NT,
+                 onClick: () => {
+                   const TT = (0, fT.e)(window.location.origin, hT);
+                   (0, vT.d)(TT, {
+                     useShareSheet: QT,
+                     shareText: MT("socialBar:friendLinkShareText"),
+                     onOutcome: cT => {
+ ... (31 more added lines; see GitHub link above)
```

#### 790. `bundles/bloxd.io/main.js` (Changed code · before: `L12853-L12855` → after: `L31927-L32028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R31927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L31927-L32028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L31927-L32028) · [Before (L12853-L12855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12853-L12855)

```diff
-           const hv = "1219647973806571553",
-             Sv = "1336701983750492191"
-         }, , vv => {
+           cT(71);
+           var lT = cT(1195),
+             MT = (cT(2051), cT(2065)),
+             KT = cT(1061),
+             OT = cT(1379),
+             yT = cT(1099);
+ 
+           function fT(TT) {
+             let {
+               explainedFor: kT
+             } = TT;
+             const {
+               t: cT
+             } = (0, lT.B)(), fT = cT("profileCard:friend"), xT = (0, yT.jsx)("span", {
+               className: "FriendBadge",
+               role: "img",
+ ... (86 more added lines; see GitHub link above)
```

#### 791. `bundles/bloxd.io/main.js` (Changed code · before: `L12857-L12858` → after: `L32030-L32230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R32030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L32030-L32230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L32030-L32230) · [Before (L12857-L12858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12857-L12858)

```diff
-             var zv = new Error("Cannot find module '" + vv + "'");
-             throw zv.code = "MODULE_NOT_FOUND", zv
+             let {
+               title: kT,
+               subtitle: cT,
+               links: KT,
+               children: OT
+             } = TT;
+             return (0, MT.jsxs)("div", {
+               className: "LinksPopup",
+               children: [(0, MT.jsxs)("div", {
+                 className: "LinksPopupHeader",
+                 children: [(0, MT.jsx)("div", {
+                   className: "LinksPopupLabel",
+                   children: cT
+                 }), (0, MT.jsx)("div", {
+                   className: "LinksPopupTitle",
+                   children: kT
+ ... (185 more added lines; see GitHub link above)
```

#### 792. `bundles/bloxd.io/main.js` (Changed code · before: `L12860-L12867` → after: `L32232-L32235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R32232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L32232-L32235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L32232-L32235) · [Before (L12860-L12867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12860-L12867)

```diff
-           zv.keys = () => [], zv.resolve = zv, zv.id = 220, vv.exports = zv
-         }, , , , , , , , , (vv, zv, Pv) => {
-           Pv.r(zv), Pv.d(zv, {
-             canonicaliseZonesWhenIdle: () => cv,
-             countryTimezones: () => lv,
-             isTimezoneCountryOneOf: () => Gv,
-             shouldUseUkPrivacyPolicy: () => mv,
-             ukCountryCodes: () => Tv
+         },
+         3547: (TT, kT, cT) => {
+           cT.d(kT, {
+             c: () => jT
```

#### 793. `bundles/bloxd.io/main.js` (Changed code · before: `L12869` → after: `L32237-L32238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R32237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L32237-L32238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L32237-L32238) · [Before (L12869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12869)

```diff
-           var hv = Pv(237),
+           cT(71);
+           var lT = cT(1046),
```

#### 794. `bundles/bloxd.io/main.js` (Changed code · before: `L12871-L12963` → after: `L32240-L32247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R32240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L32240-L32247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L32240-L32247) · [Before (L12871-L12963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12871-L12963)

```diff
-             ev = Pv(245),
-             gv = Pv.n(ev),
-             pv = Pv(247),
-             dv = Pv.n(pv),
-             Nv = Pv(250);
-           Sv().extend(gv()), Sv().extend(dv());
-           const lv = {
-               AT: ["Europe/Vienna"],
-               BE: ["Europe/Brussels"],
-               BG: ["Europe/Sofia"],
-               HR: ["Europe/Zagreb"],
-               CY: ["Asia/Famagusta", "Asia/Nicosia"],
-               CZ: ["Europe/Prague"],
-               DK: ["Europe/Copenhagen"],
-               EE: ["Europe/Tallinn"],
-               FI: ["Europe/Helsinki"],
- ... (77 more removed lines; see GitHub link above)
+             KT = cT(1195),
+             OT = cT(118),
+             yT = cT(3544),
+             fT = cT(1379),
+             xT = cT(1061),
+             IT = cT(3551),
+             AT = cT(3560),
+             CT = cT(1099);
```

#### 795. `bundles/bloxd.io/main.js` (Changed code · before: `L12966-L12972` → after: `L32250-L32285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R32250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L32250-L32285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L32250-L32285) · [Before (L12966-L12972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12966-L12972)

```diff
-             try {
-               return new Intl.DateTimeFormat("en", {
-                 timeZone: vv
-               }).resolvedOptions().timeZone
-             } catch {
-               return null
-             }
+             let {
+               playerName: kT,
+               className: cT,
+               onAction: lT
+             } = TT;
+             const {
+               t: jT
+             } = (0, KT.B)(), vT = (0, yT.i)(kT);
+             return (0, CT.jsx)(CT.Fragment, {
+               children: (0, IT.e)(vT, OT.featureFlags.useSocialFeatures).map((TT => {
+                 const {
+                   icon: KT,
+                   text: OT,
+                   info: yT
+                 } = IT.k[TT];
+                 return (0, CT.jsx)(fT.c, {
+ ... (20 more added lines; see GitHub link above)
```

#### 796. `bundles/bloxd.io/main.js` (Changed code · before: `L12974-L12975` → after: `L32287-L32299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R32287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L32287-L32299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L32287-L32299) · [Before (L12974-L12975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12974-L12975)

```diff
-           const wv = lv,
-             av = new Map;
+         },
+         2660: (TT, kT, cT) => {
+           cT.d(kT, {
+             e: () => IT,
+             h: () => xT
+           });
+           cT(71);
+           var lT = cT(1195),
+             MT = cT(1470),
+             KT = cT(1379),
+             OT = cT(1524),
+             yT = cT(2600),
+             fT = cT(1099);
```

#### 797. `bundles/bloxd.io/main.js` (Changed code · before: `L12977-L12979` → after: `L32301-L32336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R32301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L32301-L32336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L32301-L32336) · [Before (L12977-L12979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12977-L12979)

```diff
-           function sv(vv, zv) {
-             let Pv = av.get(zv);
-             return void 0 === Pv && (Pv = Wv(zv), null === Pv && console.error(`LocationDetection: "${zv}" (listed for ${vv}) is not a timezone this browser recognises`), av.set(zv, Pv)), Pv
+           function xT(TT) {
+             let {
+               playerSocialPreview: kT,
+               isFriend: cT = !1,
+               hideFriendBadge: lT = !1,
+               onFriendRemoved: MT,
+               zIndex: KT,
+               status: OT,
+               showLocation: xT = void 0 === OT,
+               onSendFriendRequest: IT,
+               padDefaultFocus: AT,
+               opensProfileCard: CT,
+               children: jT
+             } = TT;
+             return (0, fT.jsxs)("div", {
+               className: "PlayerRow",
+ ... (20 more added lines; see GitHub link above)
```

#### 798. `bundles/bloxd.io/main.js` (Changed code · before: `L12982-L12984` → after: `L32339-L32376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R32339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L32339-L32376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L32339-L32376) · [Before (L12982-L12984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12982-L12984)

```diff
-           function Cv(vv, zv) {
-             var Pv;
-             return (null !== (Pv = wv[vv]) && void 0 !== Pv ? Pv : []).some((Pv => sv(vv, Pv) === zv))
+           function IT(TT) {
+             let {
+               friend: kT,
+               followsLeader: cT,
+               entrySource: yT = "friendJoin",
+               analyticsSurface: xT
+             } = TT;
+             const {
+               t: IT
+             } = (0, lT.B)(), AT = (0, OT.h)(kT.location, cT);
+             if (!AT) return null;
+             const {
+               isInMatch: CT,
+               canJoinLobby: jT,
+               isLobbyFull: vT,
+               isCurrentLocation: tT,
+ ... (22 more added lines; see GitHub link above)
```

#### 799. `bundles/bloxd.io/main.js` (Changed code · before: `L12987-L12988` → after: `L32389-L32390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R32389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L32389-L32390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L32389-L32390) · [Before (L12987-L12988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12987-L12988)

```diff
-           function iv(vv, zv) {
-             return vv.some((vv => Cv(vv, zv)))
+           function OT(TT) {
+             return "urlId" in TT ? `urlId:${TT.urlId}` : `name:${TT.lowerCaseName}`
```

#### 800. `bundles/bloxd.io/main.js` (Changed code · before: `L12992-L13005` → after: `L32394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R32394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L32394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L32394) · [Before (L12992-L13005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L12992-L13005)

```diff
-             const zv = [...new Set([...vv, ...Object.keys(wv)])].flatMap((vv => {
-               var zv;
-               return (null !== (zv = wv[vv]) && void 0 !== zv ? zv : []).map((zv => ({
-                 code: vv,
-                 zone: zv
-               })))
-             }));
-             let Pv = 0;
-             const hv = vv => {
-               const Sv = Math.min(Pv + 8, zv.length);
-               for (; Pv < Sv && vv.timeRemaining() > 0;) sv(zv[Pv].code, zv[Pv].zone), Pv++;
-               Pv < zv.length && (0, Nv.e)(hv)
-             };
-             (0, Nv.e)(hv)
+             return `${TT.type}:${TT.whamm}`
```

#### 801. `bundles/bloxd.io/main.js` (Changed code · before: `L13009-L13016` → after: `L32398-L32402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R32398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L32398-L32402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L32398-L32402) · [Before (L13009-L13016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13009-L13016)

```diff
-             const zv = Wv(Sv().tz.guess());
-             if (null === zv || !iv(vv, zv)) return !1;
-             const Pv = Object.keys(wv).find((vv => Cv(vv, zv)));
-             return void 0 !== Pv && vv.includes(Pv)
-           }
-           const mv = () => {
-             const vv = Wv(Sv().tz.guess());
-             return null !== vv && iv(Tv, vv)
+             return TT.urlId ? {
+               urlId: TT.urlId
+             } : {
+               lowerCaseName: TT.name.toLowerCase()
+             }
```

#### 802. `bundles/bloxd.io/main.js` (Changed code · before: `L13018-L13199` → after: `L32404-L32469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R32404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L32404-L32469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L32404-L32469) · [Before (L13018-L13199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13018-L13199)

```diff
-         }, , , , , , , , function(vv) {
-           vv.exports = function() {
-             var vv = 1e3,
-               zv = 6e4,
-               Pv = 36e5,
-               hv = "millisecond",
-               Sv = "second",
-               ev = "minute",
-               gv = "hour",
-               pv = "day",
-               dv = "week",
-               Nv = "month",
-               lv = "quarter",
-               Tv = "year",
-               Wv = "date",
-               wv = "Invalid Date",
- ... (166 more removed lines; see GitHub link above)
+           const xT = new class {
+             constructor() {
+               let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
+               this.now = TT, this.profiles = new Map
+             }
+             get(TT, kT) {
+               const cT = OT(kT),
+                 lT = yT(TT),
+                 KT = this.getFresh(cT, lT);
+               if (KT) return KT.profile;
+               const fT = MT.d.getPlayerProfile(TT, kT),
+                 xT = {
+                   fetchedAt: this.now(),
+                   viewer: lT,
+                   profile: fT,
+                   loaded: null
+ ... (50 more added lines; see GitHub link above)
```

#### 803. `bundles/bloxd.io/main.js` (Changed code · before: `L13201-L13348` → after: `L32471-L32950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R32471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L32471-L32950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L32471-L32950) · [Before (L13201-L13348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13201-L13348)

```diff
-                 }, iv.endOf = function(vv) {
-                   return this.startOf(vv, !1)
-                 }, iv.$set = function(vv, zv) {
-                   var Pv, dv = nv.p(vv),
-                     lv = "set" + (this.$u ? "UTC" : ""),
-                     wv = (Pv = {}, Pv[pv] = lv + "Date", Pv[Wv] = lv + "Date", Pv[Nv] = lv + "Month", Pv[Tv] = lv + "FullYear", Pv[gv] = lv + "Hours", Pv[ev] = lv + "Minutes", Pv[Sv] = lv + "Seconds", Pv[hv] = lv + "Milliseconds", Pv)[dv],
-                     av = dv === pv ? this.$D + (zv - this.$W) : zv;
-                   if (dv === Nv || dv === Tv) {
-                     var sv = this.clone().set(Wv, 1);
-                     sv.$d[wv](av), sv.init(), this.$d = sv.set(Wv, Math.min(this.$D, sv.daysInMonth())).$d
-                   } else wv && this.$d[wv](av);
-                   return this.init(), this
-                 }, iv.set = function(vv, zv) {
-                   return this.clone().$set(vv, zv)
-                 }, iv.get = function(vv) {
-                   return this[nv.p(vv)]()
- ... (132 more removed lines; see GitHub link above)
+                 });
+                 let lT = !1;
+                 return xT.get(kT, fT(TT)).then((TT => {
+                   lT || yT({
+                     key: MT,
+                     state: {
+                       status: "loaded",
+                       profile: TT
+                     }
+                   })
+                 })).catch((kT => {
+                   console.error(`Failed to load ${TT.name}'s profile for their profile card`, kT), lT || yT({
+                     key: MT,
+                     state: {
+                       status: "error"
+                     }
+ ... (464 more added lines; see GitHub link above)
```

#### 804. `bundles/bloxd.io/main.js` (Changed code · before: `L13350-L13384` → after: `L32952-L33553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R32952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L32952-L33553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L32952-L33553) · [Before (L13350-L13384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13350-L13384)

```diff
-                   return wv ? av : nv.a(av)
-                 }, iv.daysInMonth = function() {
-                   return this.endOf(Nv).$D
-                 }, iv.$locale = function() {
-                   return mv[this.$L]
-                 }, iv.locale = function(vv, zv) {
-                   if (!vv) return this.$L;
-                   var Pv = this.clone(),
-                     hv = Fv(vv, zv, !0);
-                   return hv && (Pv.$L = hv), Pv
-                 }, iv.clone = function() {
-                   return nv.w(this.$d, this)
-                 }, iv.toDate = function() {
-                   return new Date(this.valueOf())
-                 }, iv.toJSON = function() {
-                   return this.isValid() ? this.toISOString() : null
- ... (19 more removed lines; see GitHub link above)
+                 }, TT.preview.name)))
+               })]
+             })
+           }
+ 
+           function QT() {
+             const {
+               leftGame: TT,
+               coPlayers: kT
+             } = hT(!0);
+             return null === TT || 0 === kT.length ? null : (0, tT.jsx)(NT, {
+               leftGame: TT,
+               coPlayers: kT,
+               inSidebar: !1
+             })
+           }
+ ... (586 more added lines; see GitHub link above)
```

#### 805. `bundles/bloxd.io/main.js` (Changed code · before: `L13386-L13403` → after: `L33555-L33595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R33555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L33555-L33595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L33555-L33595) · [Before (L13386-L13403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13386-L13403)

```diff
-             })), Yv.extend = function(vv, zv) {
-               return vv.$i || (vv(zv, Ov, Yv), vv.$i = !0), Yv
-             }, Yv.locale = Fv, Yv.isDayjs = fv, Yv.unix = function(vv) {
-               return Yv(1e3 * vv)
-             }, Yv.en = mv[Gv], Yv.Ls = mv, Yv.p = {}, Yv
-           }()
-         }, , , , , , , , function(vv) {
-           vv.exports = function() {
-             var vv = "minute",
-               zv = /[+-]\d\d(?::?\d\d)?/g,
-               Pv = /([+-]|\d\d)/g;
-             return function(hv, Sv, ev) {
-               var gv = Sv.prototype;
-               ev.utc = function(vv) {
-                 return new Sv({
-                   date: vv,
- ... (2 more removed lines; see GitHub link above)
+             };
+             return (0, FT.jsx)("div", {
+               className: "OwnProfilePreview",
+               children: (0, FT.jsxs)("div", {
+                 className: "OwnProfilePreviewCard",
+                 ...(0, OT.X)({
+                   focusOnClick: !1
+                 }),
+                 ...aT.g,
+                 "data-pad-focusable": !0,
+                 onClick: () => {
+                   tT.e.set({
+                     openEverythingMenuName: IT.o.SETTINGS,
+                     openSettingsCategory: "account"
+                   })
+                 },
+ ... (25 more added lines; see GitHub link above)
```

#### 806. `bundles/bloxd.io/main.js` (Changed code · before: `L13405-L13414` → after: `L33597-L33717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R33597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L33597-L33717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L33597-L33717) · [Before (L13405-L13414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13405-L13414)

```diff
-               }, gv.utc = function(zv) {
-                 var Pv = ev(this.toDate(), {
-                   locale: this.$L,
-                   utc: !0
-                 });
-                 return zv ? Pv.add(this.utcOffset(), vv) : Pv
-               }, gv.local = function() {
-                 return ev(this.toDate(), {
-                   locale: this.$L,
-                   utc: !1
+               }), (0, FT.jsx)("div", {
+                 className: "OwnProfilePreviewLoginWarningText",
+                 children: TT("socialBar:logInToSaveProgress")
+               })]
+             })
+           }
+           var mT = cT(2642),
+             bT = cT(2660),
+             zT = cT(2665),
+             JT = cT(2572),
+             oT = cT(2668),
+             HT = cT(2065),
+             eT = cT(2315),
+             GT = cT(159),
+             VT = cT(2305),
+             ET = cT(2687),
+ ... (105 more added lines; see GitHub link above)
```

#### 807. `bundles/bloxd.io/main.js` (Changed code · before: `L13416-L13473` → after: `L33719-L34392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R33719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L33719-L34392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L33719-L34392) · [Before (L13416-L13473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13416-L13473)

```diff
-               };
-               var pv = gv.parse;
-               gv.parse = function(vv) {
-                 vv.utc && (this.$u = !0), this.$utils().u(vv.$offset) || (this.$offset = vv.$offset), pv.call(this, vv)
-               };
-               var dv = gv.init;
-               gv.init = function() {
-                 if (this.$u) {
-                   var vv = this.$d;
-                   this.$y = vv.getUTCFullYear(), this.$M = vv.getUTCMonth(), this.$D = vv.getUTCDate(), this.$W = vv.getUTCDay(), this.$H = vv.getUTCHours(), this.$m = vv.getUTCMinutes(), this.$s = vv.getUTCSeconds(), this.$ms = vv.getUTCMilliseconds()
-                 } else dv.call(this)
-               };
-               var Nv = gv.utcOffset;
-               gv.utcOffset = function(hv, Sv) {
-                 var ev = this.$utils().u;
-                 if (ev(hv)) return this.$u ? 0 : ev(this.$offset) ? Nv.call(this) : this.$offset;
- ... (42 more removed lines; see GitHub link above)
+               })
+             })
+           }
+ 
+           function iT(TT) {
+             var kT;
+             let {
+               inStudio: cT
+             } = TT;
+             const {
+               t: lT
+             } = (0, xT.B)(), {
+               hideSocialLocationFrom: MT
+             } = (0, tT.n)(["hideSocialLocationFrom", "initSdkSelectorFinished"]), {
+               userContext: fT
+             } = (0, yT.b)(), NT = (0, VT.I)(), {
+ ... (658 more added lines; see GitHub link above)
```

#### 808. `bundles/bloxd.io/main.js` (Changed code · before: `L13476-L13517` → after: `L34395-L34460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34395-L34460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34395-L34460) · [Before (L13476-L13517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13476-L13517)

```diff
-           }()
-         }, , function(vv) {
-           vv.exports = function() {
-             var vv = {
-                 year: 0,
-                 month: 1,
-                 day: 2,
-                 hour: 3,
-                 minute: 4,
-                 second: 5
-               },
-               zv = {};
-             return function(Pv, hv, Sv) {
-               var ev, gv = function(vv, Pv, hv) {
-                   void 0 === hv && (hv = {});
-                   var Sv = new Date(vv),
- ... (26 more removed lines; see GitHub link above)
+           }
+         },
+         2367: (TT, kT, cT) => {
+           cT.d(kT, {
+             C: () => jT,
+             e: () => OT,
+             i: () => AT,
+             l: () => CT,
+             n: () => NT,
+             p: () => fT,
+             t: () => vT,
+             u: () => xT,
+             y: () => hT
+           });
+           var lT = cT(339),
+             MT = cT(2355),
+ ... (50 more added lines; see GitHub link above)
```

#### 809. `bundles/bloxd.io/main.js` (Changed code · before: `L13519-L13523` → after: `L34462-L34468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34462-L34468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34462-L34468) · [Before (L13519-L13523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13519-L13523)

```diff
-                   var Wv = ev[3],
-                     wv = 24 === Wv ? 0 : Wv,
-                     av = ev[0] + "-" + ev[1] + "-" + ev[2] + " " + wv + ":" + ev[4] + ":" + ev[5] + ":000",
-                     sv = +zv;
-                   return (Sv.utc(av).valueOf() - (sv -= sv % 1e3)) / 6e4
+                 }(xT),
+                 kT = "found" === xT.status ? xT.ownedPacks : [],
+                 cT = "found" === xT.status && xT.isSubscriber;
+               return {
+                 superRank: {
+                   state: cT ? "recipientSubscribed" : TT,
+                   urgent: !1
```

#### 810. `bundles/bloxd.io/main.js` (Changed code · before: `L13525-L13540` → after: `L34470-L34478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34470-L34478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34470-L34478) · [Before (L13525-L13540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13525-L13540)

```diff
-                 dv = hv.prototype;
-               dv.tz = function(vv, zv) {
-                 void 0 === vv && (vv = ev);
-                 var Pv, hv = this.utcOffset(),
-                   gv = this.toDate(),
-                   pv = gv.toLocaleString("en-US", {
-                     timeZone: vv
-                   }),
-                   dv = Math.round((gv - new Date(pv)) / 1e3 / 60),
-                   Nv = 15 * -Math.round(gv.getTimezoneOffset() / 15) - dv;
-                 if (Number(Nv)) {
-                   if (Pv = Sv(pv, {
-                       locale: this.$L
-                     }).$set("millisecond", this.$ms).utcOffset(Nv, !0), zv) {
-                     var lv = Pv.utcOffset();
-                     Pv = Pv.add(hv - lv, "minute")
+                 superRankDaysLeft: AT,
+                 packs: fT.map((cT => {
+                   const lT = "gift" === TT ? IT(cT, kT) : null;
+                   return "owned" === lT ? {
+                     pack: cT,
+                     state: "recipientOwns"
+                   } : {
+                     pack: cT,
+                     state: "sharesOwned" === lT ? "recipientSharesOwned" : TT
```

#### 811. `bundles/bloxd.io/main.js` (Changed code · before: `L13542-L13551` → after: `L34480-L34521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34480-L34521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34480-L34521) · [Before (L13542-L13551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13542-L13551)

```diff
-                 } else Pv = this.utcOffset(0, zv);
-                 return Pv.$x.$timezone = vv, Pv
-               }, dv.offsetName = function(vv) {
-                 var zv = this.$x.$timezone || Sv.tz.guess(),
-                   Pv = gv(this.valueOf(), zv, {
-                     timeZoneName: vv
-                   }).find((function(vv) {
-                     return "timezonename" === vv.type.toLowerCase()
-                   }));
-                 return Pv && Pv.value
+                 })),
+                 recipientHasSuperRank: "found" === xT.status && xT.hasSuperRank && !cT
+               }
+             }
+             const jT = AT > 0;
+             return {
+               superRank: {
+                 state: cT ? (0, lT.vc)(MT, KT) ? "subscribed" : jT ? "recharge" : "buy" : "login",
+                 urgent: jT && AT <= yT
+               },
+               superRankDaysLeft: AT,
+               packs: fT.map((TT => {
+                 var kT;
+                 return {
+                   pack: TT,
+                   state: cT ? null !== (kT = IT(TT, OT)) && void 0 !== kT ? kT : "buy" : "login"
+ ... (26 more added lines; see GitHub link above)
```

#### 812. `bundles/bloxd.io/main.js` (Changed code · before: `L13553-L13579` → after: `L34523-L34563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34523-L34563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34523-L34563) · [Before (L13553-L13579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13553-L13579)

```diff
-               var Nv = dv.startOf;
-               dv.startOf = function(vv, zv) {
-                 if (!this.$x || !this.$x.$timezone) return Nv.call(this, vv, zv);
-                 var Pv = Sv(this.format("YYYY-MM-DD HH:mm:ss:SSS"), {
-                   locale: this.$L
-                 });
-                 return Nv.call(Pv, vv, zv).tz(this.$x.$timezone, !0)
-               }, Sv.tz = function(vv, zv, Pv) {
-                 var hv = Pv && zv,
-                   gv = Pv || zv || ev,
-                   dv = pv(+Sv(), gv);
-                 if ("string" != typeof vv) return Sv(vv).tz(gv);
-                 var Nv = function(vv, zv, Pv) {
-                     var hv = vv - 60 * zv * 1e3,
-                       Sv = pv(hv, Pv);
-                     if (zv === Sv) return [hv, zv];
- ... (11 more removed lines; see GitHub link above)
+             for (const jT of cT) {
+               var IT, AT, CT;
+               const TT = lT.find((TT => TT.name.toLowerCase() === jT.name.toLowerCase()));
+               xT(null !== (IT = null === TT || void 0 === TT ? void 0 : TT.name) && void 0 !== IT ? IT : jT.name, "recent", null !== (AT = null !== (CT = null === TT || void 0 === TT ? void 0 : TT.cosmetics) && void 0 !== CT ? CT : jT.cosmetics) && void 0 !== AT ? AT : null, null … [truncated]
+             }
+             for (const jT of kT) xT(jT.name, "online_friend", jT.cosmetics, jT);
+             for (const jT of lT) xT(jT.name, "friend", jT.cosmetics, jT);
+             return fT
+           }
+ 
+           function jT(TT, kT) {
+             let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
+             return [kT, ...TT.filter((TT => TT.name.toLowerCase() !== kT.name.toLowerCase()))].slice(0, cT)
+           }
+ 
+           function vT(TT) {
+ ... (25 more added lines; see GitHub link above)
```

#### 813. `bundles/bloxd.io/main.js` (Changed code · before: `L13582-L13583` → after: `L34568-L34582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34568-L34582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34568-L34582) · [Before (L13582-L13583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13582-L13583)

```diff
-           }()
-         }, , , (vv, zv, Pv) => {
+           }
+ 
+           function NT(TT, kT) {
+             const cT = "superRank" === (lT = TT.item) || kT.includes(lT) ? TT.item : void 0;
+             var lT;
+             return cT || (0, KT.e)(TT.item) ? {
+               mode: TT.mode,
+               source: "loginResume",
+               giftRecipientName: "gift" === TT.mode && TT.recipient ? TT.recipient : void 0,
+               openItem: cT,
+               highlight: TT.item
+             } : null
+           }
+         },
+         2305: (TT, kT, cT) => {
```

#### 814. `bundles/bloxd.io/main.js` (Changed code · before: `L13585` → after: `L34584-L34595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34584-L34595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34584-L34595) · [Before (L13585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13585)

```diff
-             e: () => Sv
+             B: () => GT,
+             E: () => aT,
+             I: () => oT,
+             e: () => tT,
+             h: () => vT,
+             k: () => wT,
+             o: () => mT,
+             p: () => DT,
+             r: () => ST,
+             t: () => eT,
+             x: () => NT,
+             z: () => JT
```

#### 815. `bundles/bloxd.io/main.js` (Changed code · before: `L13587-L13591` → after: `L34597-L34630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34597-L34630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34597-L34630) · [Before (L13587-L13591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13587-L13591)

```diff
-           const hv = {
-               timeRemaining: () => 1 / 0
-             },
-             Sv = function(vv) {
-               var zv;
+           var lT = cT(71),
+             MT = cT(1567),
+             KT = cT(328),
+             OT = cT(31),
+             yT = cT(1530),
+             fT = cT(2308),
+             xT = cT(2362),
+             IT = cT(2367);
+           let AT = null,
+             CT = 0;
+           const jT = new Set;
+ 
+           function vT(TT) {
+             return "superRank" === TT ? {
+               kind: "superRank"
+             } : {
+ ... (18 more added lines; see GitHub link above)
```

#### 816. `bundles/bloxd.io/main.js` (Changed code · before: `L13593-L13611` → after: `L34632-L34720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34632-L34720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34632-L34720) · [Before (L13593-L13611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13593-L13611)

```diff
-                 timeoutMs: Pv
-               } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-               const Sv = globalThis,
-                 ev = null !== (zv = Sv.nativeRequestIdleCallback) && void 0 !== zv ? zv : Sv.requestIdleCallback,
-                 gv = Sv.cancelIdleCallback;
-               if ("function" === typeof ev && "function" === typeof gv) {
-                 const zv = void 0 === Pv ? ev.call(globalThis, vv) : ev.call(globalThis, vv, {
-                   timeout: Pv
-                 });
-                 return () => {
-                   gv.call(globalThis, zv)
-                 }
-               }
-               const pv = setTimeout((() => {
-                 vv(hv)
-               }), 100);
- ... (3 more removed lines; see GitHub link above)
+                 prefetchBillingOfferings: kT
+               } = TT;
+               kT()
+             }), (TT => {
+               console.warn("Store: couldn't load the SuperGem bundle prefetch", TT)
+             }))
+           }
+ 
+           function ST(TT) {
+             QT(), "mouse" === TT.pointerType && (0, fT.z)()
+           }
+ 
+           function DT(TT) {
+             QT(), AT = {
+               ...TT,
+               seq: ++CT
+ ... (73 more added lines; see GitHub link above)
```

#### 817. `bundles/bloxd.io/main.js` (Changed code · before: `L13613` → after: `L34722-L34724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34722-L34724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34722-L34724) · [Before (L13613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13613)

```diff
-         }, , , , , , , , (vv, zv, Pv) => {
+           }
+         },
+         2362: (TT, kT, cT) => {
```

#### 818. `bundles/bloxd.io/main.js` (Changed code · before: `L13616-L13617` → after: `L34727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34727) · [Before (L13616-L13617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13616-L13617)

```diff
-             f: () => lv,
-             j: () => dv
+             f: () => jT
```

#### 819. `bundles/bloxd.io/main.js` (Changed code · before: `L13619-L13623` → after: `L34729-L34742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34729-L34742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34729-L34742) · [Before (L13619-L13623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13619-L13623)

```diff
-           var hv = Pv(263),
-             Sv = Pv(266),
-             ev = Pv(73),
-             gv = Pv(101);
-           let pv = null;
+           var lT = cT(71),
+             MT = cT(1535),
+             KT = cT(328),
+             OT = cT(1567),
+             yT = cT(31),
+             fT = cT(2315),
+             xT = cT(1530);
+           const IT = {
+             kind: "board"
+           };
+ 
+           function AT(TT) {
+             return (0, fT.purchasesAllowed)() && /^\/((custom-games|store)(\/.*)?)?$/i.test(TT)
+           }
```

#### 820. `bundles/bloxd.io/main.js` (Changed code · before: `L13626-L13630` → after: `L34745-L34834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34745-L34834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34745-L34834) · [Before (L13626-L13630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13626-L13630)

```diff
-             var vv, zv, Pv, Sv;
-             if (null !== pv) return pv;
-             if ("intel" !== (0, ev.getGpuVendor)()) return !0;
-             const dv = null !== (vv = null !== (zv = null === (Pv = (0, gv.m)()) || void 0 === Pv ? void 0 : Pv.renderer) && void 0 !== zv ? zv : null === (Sv = (0, gv.t)()) || void 0 === Sv ? void 0 : Sv.renderer) && void 0 !== vv ? vv : "";
-             return Tv((0, hv.k)(dv).family)
+             var TT;
+             const kT = null === (TT = window.history.state) || void 0 === TT ? void 0 : TT.idx;
+             return "number" === typeof kT ? kT : null
+           }
+ 
+           function jT() {
+             const TT = (0, MT.s)(),
+               kT = (0, MT.t)(),
+               cT = (0, xT.useNavigatePreserveSearch)(),
+               {
+                 openEverythingMenuName: fT
+               } = (0, yT.n)(["openEverythingMenuName"]),
+               jT = fT === KT.o.COSMETIC_SHOP,
+               vT = AT(TT.pathname),
+               tT = vT && (0, OT.h)(TT.pathname),
+               hT = tT ? (0, OT.d)(TT.pathname) : null,
+ ... (74 more added lines; see GitHub link above)
```

#### 821. `bundles/bloxd.io/main.js` (Changed code · before: `L13634-L13637` → after: `L34838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34838) · [Before (L13634-L13637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13634-L13637)

```diff
-             if (null === vv || "" === vv.vendor) return null;
-             if ("intel" !== (0, ev.normaliseGpuVendor)(vv.vendor)) return !0;
-             const zv = (0, Sv.h)(vv.vendor, vv.architecture);
-             return "other_intel" === zv ? null : Tv(zv)
+             return `/textures/games/${TT}/${yT(TT).smallPicture}.jpg`
```

#### 822. `bundles/bloxd.io/main.js` (Changed code · before: `L13641` → after: `L34842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34842) · [Before (L13641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13641)

```diff
-             pv = Nv(vv)
+             return yT(TT).type
```

#### 823. `bundles/bloxd.io/main.js` (Changed code · before: `L13645` → after: `L34846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34846) · [Before (L13645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13645)

```diff
-             return "intel_arc" === vv || "intel_xe_lpg_plus" === vv
+             return (0, MT.x)(TT)
```

#### 824. `bundles/bloxd.io/main.js` (Changed code · before: `L13647` → after: `L34848-L34849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34848-L34849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34848-L34849) · [Before (L13647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13647)

```diff
-         }, , , , , (vv, zv, Pv) => {
+         },
+         1921: (TT, kT, cT) => {
```

#### 825. `bundles/bloxd.io/main.js` (Changed code · before: `L13649-L13654` → after: `L34851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34851) · [Before (L13649-L13654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13649-L13654)

```diff
-             d: () => iv,
-             f: () => dv,
-             h: () => wv,
-             k: () => Tv,
-             m: () => lv,
-             p: () => av
+             b: () => PT
```

#### 826. `bundles/bloxd.io/main.js` (Changed code · before: `L13656-L13657` → after: `L34853-L34872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34853-L34872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34853-L34872) · [Before (L13656-L13657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13656-L13657)

```diff
-           var hv = Pv(73),
-             Sv = Pv(101);
+           var lT = cT(71),
+             MT = cT(1046),
+             KT = cT.n(MT),
+             OT = cT(602),
+             yT = cT(328),
+             fT = cT(337),
+             xT = cT(1061),
+             IT = cT(1930),
+             AT = cT(1943),
+             CT = cT(1195),
+             jT = cT(1274),
+             vT = cT(2002),
+             tT = cT(1953),
+             hT = cT(2009),
+             NT = cT(31),
+             QT = cT(1409),
+ ... (4 more added lines; see GitHub link above)
```

#### 827. `bundles/bloxd.io/main.js` (Changed code · before: `L13660-L13672` → after: `L34875-L34925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R34875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L34875-L34925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L34875-L34925) · [Before (L13660-L13672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13660-L13672)

```diff
-             switch (vv) {
-               case "windows":
-                 return "intel" === zv ? `windows_intel_${Pv()}` : "nvidia" === zv || "amd" === zv ? `windows_${zv}` : "other";
-               case "macos":
-                 return "apple" === zv ? "mac_apple" : "mac_other";
-               case "chrome_os":
-                 return "intel" === zv ? "chromeos_intel" : "chromeos_other";
-               case "android":
-                 return "qualcomm" === zv || "arm" === zv ? `android_${zv}` : "android_other";
-               case "ios":
-                 return "ios";
-               default:
-                 return "other"
+             return TT.flatMap((TT => {
+               let lT, MT;
+               if ("object" === typeof TT && "translationKey" in TT ? lT = TT : "object" === typeof TT && "str" in TT && "object" === typeof TT.str && "translationKey" in TT.str && !TT.clickableUrl && (lT = TT.str, MT = TT.style), !lT) return [TT];
+               const KT = kT(lT.translationKey, (0, CT.m)(lT.params, cT));
+               return KT.every((TT => "string" === typeof TT)) ? [TT] : KT.map((TT => {
+                 var kT, cT, lT;
+                 return "string" === typeof TT ? {
+                   str: TT,
+                   style: MT
+                 } : {
+                   icon: TT.icon,
+                   style: {
+                     fontSize: (lT = null === (kT = MT) || void 0 === kT ? void 0 : kT.fontSize, lT ? `calc(${lT} * ${FT})` : `${FT}em`),
+                     opacity: null === (cT = MT) || void 0 === cT ? void 0 : cT.opacity
+                   }
+                 }
+ ... (35 more added lines; see GitHub link above)
```

#### 828. `bundles/bloxd.io/main.js` (Changed code · before: `L13728-L13729` → after: `L35036-L35459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35036-L35459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35036-L35459) · [Before (L13728-L13729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13728-L13729)

```diff
-             var zv, Pv;
-             return null === (zv = /\(0x(?:0000)?([0-9a-f]{4})\)/i.exec(vv)) || void 0 === zv || null === (Pv = zv[1]) || void 0 === Pv ? void 0 : Pv.toLowerCase()
+             let {
+               binding: kT
+             } = TT;
+             const {
+               isTouchScreen: cT
+             } = (0, NT.n)(["isTouchScreen"]), lT = (0, QT.s)(), MT = (0, ST.d)(kT.action), KT = lT && MT ? null : (0, hT.w)(kT.action, cT);
+             return null !== KT ? (0, aT.jsx)(PT, {
+               text: [{
+                 str: KT,
+                 style: kT.style
+               }]
+             }) : (0, aT.jsx)(vT.b, {
+               noaAction: kT.action,
+               className: "TextFromServerKeyBinding",
+               style: kT.style
+             })
+ ... (408 more added lines; see GitHub link above)
```

#### 829. `bundles/bloxd.io/main.js` (Changed code · before: `L13732-L13754` → after: `L35462-L35474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35462-L35474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35462-L35474) · [Before (L13732-L13754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13732-L13754)

```diff
-           function Tv(vv) {
-             const zv = vv.toLowerCase(),
-               Pv = lv(zv);
-             if (void 0 !== Pv) {
-               for (const [vv, zv, hv] of gv)
-                 if (vv.includes(Pv)) return {
-                   family: zv,
-                   tier: hv
-                 };
-               for (const [vv, zv, hv] of pv)
-                 if (vv.includes(Pv.slice(0, 2))) return {
-                   family: zv,
-                   tier: hv
-                 }
-             }
-             for (const [hv, Sv, ev] of Nv)
- ... (7 more removed lines; see GitHub link above)
+           function JT() {
+             const TT = ["mtu3mtiZmMHuCwr6BW", "mZaYodjbBvzfwe8", "oteZnde5AgHbvuft", "mJq1ntyXmtbsrw9lseS", "nZy3mZG0vuXRDuHq", "m2rSy29lCq", "mti0nfHgzgTgtq", "mtaZmM9gtNbuza", "mJK1DNnRtwzj", "mty2ndiWExzqshny"];
+             return (JT = function() {
+               return TT
+             })()
+           }(function(TT) {
+             const kT = zT,
+               cT = TT();
+             for (;;) try {
+               if (711121 === -parseInt(kT(374)) / 1 + parseInt(kT(369)) / 2 * (parseInt(kT(365)) / 3) + -parseInt(kT(366)) / 4 * (parseInt(kT(368)) / 5) + -parseInt(kT(367)) / 6 * (parseInt(kT(371)) / 7) + -parseInt(kT(370)) / 8 + -parseInt(kT(372)) / 9 + parseInt(kT(373)) / 10)  … [truncated]
+               cT.push(cT.shift())
+             } catch (lT) {
+               cT.push(cT.shift())
```

#### 830. `bundles/bloxd.io/main.js` (Changed code · before: `L13756-L13757` → after: `L35476-L35503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35476-L35503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35476-L35503) · [Before (L13756-L13757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13756-L13757)

```diff
-           }
-           let Wv = null;
+           })(JT), (() => {
+             let TT = !1;
+             const kT = TextDecoder.prototype.decode;
+             let cT = 59;
+             const lT = function() {
+               for (var lT = arguments.length, MT = new Array(lT), KT = 0; KT < lT; KT++) MT[KT] = arguments[KT];
+               return cT++, 60 === cT && ((0, DT.k)() && (TT || (0, aT.j)(), TT = !0), cT = 0), kT.apply(this, MT)
+             };
+             TextDecoder.prototype.decode = lT, setInterval((() => {
+               let kT = 0;
+               TT ? kT = 2 : (0, MT.getPropVal)("wio643") ? kT = 3 : window.jklkjefwn ? kT = 4 : TextDecoder.prototype.decode !== lT ? kT = 6 : !0 !== Object.getOwnPropertyDescriptor(Function.prototype, "toString").writable && (kT = 7), (0, MT.sendColyMessage)(IT.Ig, kT, !0)
+             }), 4e3)
+           })()
+         },
+         2290: (TT, kT, cT) => {
+           cT.d(kT, {
+ ... (12 more added lines; see GitHub link above)
```

#### 831. `bundles/bloxd.io/main.js` (Changed code · before: `L13759-L13766` → after: `L35505-L35534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35505-L35534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35505-L35534) · [Before (L13759-L13766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13759-L13766)

```diff
-           function wv() {
-             var vv;
-             return Wv ??= function() {
-               const vv = (0, hv.getOperatingSystem)();
-               if ("windows" !== vv) return sv(vv, (0, hv.getGpuVendor)());
-               const zv = (0, Sv.t)();
-               return null === zv ? null : Cv(zv)
-             }(), null !== (vv = Wv) && void 0 !== vv ? vv : "other"
+           function CT(TT) {
+             let {
+               displayAllUpdateLogs: kT,
+               close: cT
+             } = TT;
+             const {
+               t: OT
+             } = (0, lT.B)(), [fT, IT] = (0, yT.useState)(null), CT = (0, yT.useRef)(null);
+             return (0, yT.useEffect)((() => () => {
+               kT ? (0, MT.m)() : CT.current && (0, MT.m)(CT.current)
+             }), []), (0, yT.useEffect)((() => {
+               const TT = TT => {
+                 0 !== TT.length ? (CT.current = TT[0].date, IT(TT)) : cT()
+               };
+               if (!kT) return KT.e.getItem(xT.yb) <= 3 ? ((0, MT.m)(), void cT()) : void(0, MT.f)().then(TT);
+               (0, MT.e)().then(TT)
+ ... (14 more added lines; see GitHub link above)
```

#### 832. `bundles/bloxd.io/main.js` (Changed code · before: `L13770-L13775` → after: `L35538-L35610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35538-L35610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35538-L35610) · [Before (L13770-L13775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13770-L13775)

```diff
-             if (null !== Wv) return Wv;
-             const zv = (0, hv.getOperatingSystem)(),
-               Pv = (0, Sv.p)();
-             if ("windows" === zv) return Pv ? Cv(Pv) : null;
-             const ev = vv || (null === Pv || void 0 === Pv ? void 0 : Pv.vendor);
-             return ev ? sv(zv, (0, hv.normaliseGpuVendor)(ev)) : null
+             var kT, cT;
+             let {
+               updateLog: KT,
+               index: xT,
+               close: CT
+             } = TT;
+             const {
+               t: jT
+             } = (0, lT.B)(), [vT, tT] = (0, yT.useState)(!1), hT = (0, IT.i)(), NT = Array.isArray(KT.author) ? KT.author : [KT.author];
+             let QT = OT.e;
+             return "gold" === (null === (kT = KT.callToActionButton) || void 0 === kT ? void 0 : kT.color) ? QT = OT.m : "rainbow" === (null === (cT = KT.callToActionButton) || void 0 === cT ? void 0 : cT.color) && (QT = OT.C), (0, yT.useEffect)((() => {
+               KT.callToActionButton && (KT.callToActionButton.shouldShow ? KT.callToActionButton.shouldShow().then((TT => {
+                 tT(TT)
+               })).catch((TT => {
+                 console.warn("Failed to decide whether to show the update log's button", TT)
+               })) : tT(!0))
+ ... (57 more added lines; see GitHub link above)
```

#### 833. `bundles/bloxd.io/main.js` (Changed code · before: `L13779` → after: `L35660-L35664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35660-L35664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35660-L35664) · [Before (L13779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13779)

```diff
-             return ev(vv, zv, (() => "unknown"))
+             return function(TT) {
+               let kT = 2166136261;
+               for (let cT = 0; cT < TT.length; cT++) kT = Math.imul(kT ^ TT.charCodeAt(cT), 16777619);
+               return kT = Math.imul(kT ^ kT >>> 16, 2246822507), kT = Math.imul(kT ^ kT >>> 13, 3266489909), ((kT ^ kT >>> 16) >>> 0) / 4294967296
+             }(`${null!==TT&&void 0!==TT?TT:""}:${null!==kT&&void 0!==kT?kT:""}`)
```

#### 834. `bundles/bloxd.io/main.js` (Changed code · before: `L13783` → after: `L35668-L35689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35668-L35689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35668-L35689) · [Before (L13783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13783)

```diff
-             return ev("windows", (0, hv.normaliseGpuVendor)(vv.vendor), (() => Tv(vv.renderer).tier))
+             let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+             const cT = TT.get("game"),
+               KT = null !== cT && function(TT) {
+                 return void 0 !== (0, lT.d)(OT.e, TT) || (0, MT.j)(TT)
+               }(cT) ? cT : null,
+               fT = null === KT ? null : TT.get("lobby") || null,
+               vT = function() {
+                 const TT = yT.g.getItem(xT);
+                 return "number" !== typeof(null === TT || void 0 === TT ? void 0 : TT.startedAtMs) || "number" !== typeof(null === TT || void 0 === TT ? void 0 : TT.returnAtMs) ? null : TT
+               }();
+             if (null !== vT && vT.gameNameWithVariation === KT && vT.lobbyName === fT && kT < vT.returnAtMs + jT) return vT;
+             const tT = function(TT, kT) {
+                 let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+                 return Math.round(IT + JT(TT, kT) * AT + cT() * CT)
+               }(KT, fT),
+               hT = {
+ ... (6 more added lines; see GitHub link above)
```

#### 835. `bundles/bloxd.io/main.js` (Changed code · before: `L13787-L13788` → after: `L35693-L35696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35693-L35696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35693-L35696) · [Before (L13787-L13788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13787-L13788)

```diff
-             const Pv = vv * zv / 1e6;
-             return Pv < 1 ? "under_1" : Pv < 2 ? "1_to_2" : Pv < 4 ? "2_to_4" : "4_plus"
+             const cT = new URLSearchParams;
+             null !== TT && (cT.set("game", TT), null !== kT && cT.set("lobby", kT));
+             const lT = cT.toString();
+             return lT ? `${fT}?${lT}` : fT
```

#### 836. `bundles/bloxd.io/main.js` (Changed code · before: `L13903` → after: `L35699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35699) · [Before (L13903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13903)

```diff
-           function sv(vv, zv) {
+           function eT(TT) {
```

#### 837. `bundles/bloxd.io/main.js` (Changed code · before: `L13905-L13908` → after: `L35701-L35704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35701-L35704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35701-L35704) · [Before (L13905-L13908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13905-L13908)

```diff
-             return null === (Pv = vv.find((vv => {
-               let [Pv] = vv;
-               return Pv.test(zv)
-             }))) || void 0 === Pv ? void 0 : Pv[1]
+             let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+             return null === TT.gameNameWithVariation || function(TT) {
+               return TT.length >= aT
+             }(cT) ? "/" : (0, KT.c)(TT.gameNameWithVariation, null !== (kT = TT.lobbyName) && void 0 !== kT ? kT : void 0)
```

#### 838. `bundles/bloxd.io/main.js` (Changed code · before: `L13911-L13945` → after: `L35707-L35733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35707-L35733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35707-L35733) · [Before (L13911-L13945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13911-L13945)

```diff
-           function Cv(vv, zv) {
-             var Pv, Sv;
-             if ((0, ev.f)(zv)) return "unknown";
-             if ((0, ev.h)(zv)) return "other";
-             const av = zv.toLowerCase().trim();
-             var Cv;
-             if (/\b(mali|immortalis)\b/.test(av)) return null !== (Cv = sv(pv, av)) && void 0 !== Cv ? Cv : "other_arm";
-             const iv = /\badreno\D*(\d)\d\d/.exec(av);
-             var cv;
-             if (iv) return null !== (cv = dv[iv[1]]) && void 0 !== cv ? cv : "other_qualcomm";
-             if (/powervr|\bimg\b/.test(av)) return /rogue|\bg[emt]\d{4}/.test(av) ? "powervr_rogue" : /[bd]-series|\b[bd]x[met]\b/.test(av) ? "powervr_b_d" : "other_powervr";
-             if (/xclipse/.test(av)) return "samsung_xclipse";
-             if (/\bapple\b/.test(av)) return "apple";
-             const Gv = null !== (Pv = sv(Wv, av)) && void 0 !== Pv ? Pv : (0, hv.normaliseGpuVendor)(vv),
-               mv = gv.f.test(av) ? void 0 : function(vv, zv) {
-                 switch (vv) {
- ... (19 more removed lines; see GitHub link above)
+           function GT(TT) {
+             let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+             const cT = function(TT) {
+                 const kT = yT.g.getItem(rT);
+                 return Array.isArray(kT) ? kT.filter((kT => "number" === typeof kT && TT - kT < FT)) : []
+               }(kT),
+               lT = eT(TT, cT);
+             return yT.g.removeItem(xT), yT.g.setItem(rT, [...cT, kT]), null !== TT.gameNameWithVariation && "/" !== lT && yT.g.setItem(PT, {
+               gameNameWithVariation: TT.gameNameWithVariation,
+               atMs: kT
+             }), lT
+           }
+           const VT = {
+             serverVersion: null,
+             lastAnsweredAtMs: null,
+             newReleaseAtMs: null
+ ... (11 more added lines; see GitHub link above)
```

#### 839. `bundles/bloxd.io/main.js` (Changed code · before: `L13948-L13952` → after: `L35736-L35741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35736-L35741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35736-L35741) · [Before (L13948-L13952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13948-L13952)

```diff
-           function iv(vv, zv) {
-             var Pv, Sv, ev;
-             const gv = (0, hv.normaliseGpuVendor)(vv),
-               pv = zv.toLowerCase().replace(/[^a-z0-9]/g, "");
-             return null !== (Pv = null !== (Sv = null === (ev = av[gv]) || void 0 === ev ? void 0 : ev[pv]) && void 0 !== Sv ? Sv : wv[gv]) && void 0 !== Pv ? Pv : "other"
+           function ZT(TT, kT, cT, lT) {
+             if (!cT) return "offline";
+             if (kT < TT.returnAtMs) return "counting";
+             const MT = kT - TT.startedAtMs,
+               KT = null !== lT.lastAnsweredAtMs && kT - lT.lastAnsweredAtMs < ST;
+             return (null === lT.newReleaseAtMs ? KT && MT >= DT || kT - TT.returnAtMs >= vT : kT >= lT.newReleaseAtMs + JT(TT.gameNameWithVariation, TT.lobbyName) * tT) ? "ready" : "almostReady"
```

#### 840. `bundles/bloxd.io/main.js` (Changed code · before: `L13956-L13962` → after: `L35744-L35746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35744-L35746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35744-L35746) · [Before (L13956-L13962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13956-L13962)

```diff
-           function Gv() {
-             return cv ??= function() {
-               const vv = (0, Sv.m)();
-               if (null !== vv) return Cv(vv.vendor, vv.renderer);
-               const zv = (0, Sv.i)();
-               return null === zv ? null : iv(zv.vendor, zv.architecture)
-             }(), cv
+           function uT(TT) {
+             let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
+             return Math.round(Math.min(hT * 2 ** TT, NT) * (.75 + .5 * kT()))
```

#### 841. `bundles/bloxd.io/main.js` (Changed code · before: `L13966` → after: `L35750-L35761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35750-L35761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35750-L35761) · [Before (L13966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13966)

```diff
-             return "nvidia_pre_turing" === vv
+             let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+             const cT = yT.g.getItem(PT);
+             return null !== cT && void 0 !== cT && (yT.g.removeItem(PT), cT.gameNameWithVariation === TT && "number" === typeof cT.atMs && kT - cT.atMs < wT)
+           }
+ 
+           function dT(TT) {
+             let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
+             return Math.round(Math.min(bT * 2 ** TT, zT) * (.75 + .5 * kT()))
+           }
+ 
+           function LT(TT, kT, cT) {
+             return kT === mT && cT ? null : TT
```

#### 842. `bundles/bloxd.io/main.js` (Changed code · before: `L13970-L13989` → after: `L35765-L35787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35765-L35787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35765-L35787) · [Before (L13970-L13989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13970-L13989)

```diff
-             if (vv) {
-               const zv = vv.trim(),
-                 Pv = gv.f.test(zv),
-                 hv = function(vv) {
-                   var zv, Pv, hv;
-                   const Sv = /^angle \((.*)\)$/i.exec(vv);
-                   if (!Sv) return vv;
-                   const ev = Sv[1].split(", "),
-                     gv = null !== (zv = ev[1]) && void 0 !== zv ? zv : ev[0];
-                   return null !== (Pv = null === (hv = /^vulkan [\d.]+ \((.*)\)$/i.exec(gv)) || void 0 === hv ? void 0 : hv[1]) && void 0 !== Pv ? Pv : gv.replace(/^angle metal renderer:\s*/i, "")
-                 }(zv.replace(gv.f, "")).replace(/\s+(direct3d\d*|d3d\d+|opengl|vulkan|metal)\b.*$/i, ""),
-                 Sv = (0, gv.m)(hv),
-                 ev = `${void 0===Sv?"":`:${Sv}`}${Pv?":similar":""}`;
-               return `${hv.replace(/\(0x[0-9a-f]+\)/gi,"").replace(/\((r|tm)\)|[\xae\u2122]/gi,"").toLowerCase().replace(/[^a-z0-9.-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,64-ev.length)}${ev}`
-             }
-             if (zv) {
- ... (4 more removed lines; see GitHub link above)
+             return new Promise((cT => {
+               let lT = null;
+               const MT = TT => {
+                   null !== lT && clearTimeout(lT), window.removeEventListener("online", yT), kT.removeEventListener("abort", KT), cT(TT)
+                 },
+                 KT = () => {
+                   MT(!1)
+                 },
+                 OT = () => {
+                   lT = setTimeout((() => {
+                     MT(!0)
+                   }), TT)
+                 },
+                 yT = () => {
+                   window.removeEventListener("online", yT), OT()
+                 };
+ ... (7 more added lines; see GitHub link above)
```

#### 843. `bundles/bloxd.io/main.js` (Changed code · before: `L13991` → after: `L35789-L35790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35789-L35790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35789-L35790) · [Before (L13991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13991)

```diff
-         }, , , , , , , (vv, zv, Pv) => {
+         },
+         2753: (TT, kT, cT) => {
```

#### 844. `bundles/bloxd.io/main.js` (Changed code · before: `L13993-L13994` → after: `L35792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35792) · [Before (L13993-L13994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13993-L13994)

```diff
-             d: () => Sv,
-             e: () => ev
+             b: () => MT
```

#### 845. `bundles/bloxd.io/main.js` (Changed code · before: `L13996-L13997` → after: `L35794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35794) · [Before (L13996-L13997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13996-L13997)

```diff
-           var hv = Pv(39);
-           const Sv = "antiAliasing";
+           var lT = cT(71);
```

#### 846. `bundles/bloxd.io/main.js` (Changed code · before: `L13999-L14000` → after: `L35796-L35808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35796-L35808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35796-L35808) · [Before (L13999-L14000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L13999-L14000)

```diff
-           function ev() {
-             return null === hv.h.getItem(Sv) || null === hv.h.getItem("pixelScale")
+           function MT(TT) {
+             let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+             const [cT, MT] = (0, lT.useState)(Date.now);
+             return (0, lT.useEffect)((() => {
+               if (!kT) return;
+               MT(Date.now());
+               const cT = setInterval((() => {
+                 MT(Date.now())
+               }), TT);
+               return () => {
+                 clearInterval(cT)
+               }
+             }), [TT, kT]), cT
```

#### 847. `bundles/bloxd.io/main.js` (Changed code · before: `L14002` → after: `L35810-L35811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35810-L35811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35810-L35811) · [Before (L14002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14002)

```diff
-         }, , , , , (vv, zv, Pv) => {
+         },
+         1470: (TT, kT, cT) => {
```

#### 848. `bundles/bloxd.io/main.js` (Changed code · before: `L14004-L14007` → after: `L35813-L35815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35813-L35815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35813-L35815) · [Before (L14004-L14007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14004-L14007)

```diff
-             C: () => nv,
-             d: () => sv,
-             g: () => Dv,
-             k: () => jv,
+             b: () => ZT,
+             e: () => QT,
+             i: () => ST,
```

#### 849. `bundles/bloxd.io/main.js` (Changed code · before: `L14009` → after: `L35817-L35819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35817-L35819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35817-L35819) · [Before (L14009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14009)

```diff
-             p: () => fv,
+             m: () => NT,
+             o: () => bT,
+             r: () => aT,
```

#### 850. `bundles/bloxd.io/main.js` (Changed code · before: `L14011-L14012` → after: `L35821-L35831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35821-L35831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35821-L35831) · [Before (L14011-L14012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14011-L14012)

```diff
-             w: () => Fv,
-             z: () => mv
+             v: () => DT,
+             z: () => zT,
+             C: () => rT,
+             F: () => HT,
+             I: () => FT,
+             L: () => JT,
+             N: () => VT,
+             P: () => wT,
+             S: () => eT,
+             V: () => jT,
+             X: () => tT
```

#### 851. `bundles/bloxd.io/main.js` (Changed code · before: `L14014-L14024` → after: `L35833-L35842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35833-L35842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35833-L35842) · [Before (L14014-L14024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14014-L14024)

```diff
-           var hv, Sv = Pv(302),
-             ev = Pv(312),
-             gv = Pv(284),
-             pv = Pv(73),
-             dv = Pv(295),
-             Nv = Pv(39);
-           const lv = "webGpuUnreportedLosses",
-             Tv = 24192e5,
-             Wv = 3,
-             wv = 1e4,
-             av = "ignore_hidden" === gv.d.webgpu_hidden_loss_v1;
+           var lT = cT(71),
+             MT = cT(1474),
+             KT = cT(1348),
+             OT = cT(1061),
+             yT = cT(1478),
+             fT = cT(1486),
+             xT = cT(1488),
+             IT = cT(1497),
+             AT = cT(1099);
+           const CT = cT(1046);
```

#### 852. `bundles/bloxd.io/main.js` (Changed code · before: `L14026-L14027` → after: `L35844-L35850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35844-L35850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35844-L35850) · [Before (L14026-L14027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14026-L14027)

```diff
-           function sv() {
-             return `${(0,pv.getBrowserName)()} ${String((0,pv.getBrowserVersion)()).split(".")[0]}`
+           function jT(TT) {
+             const kT = document.activeElement;
+             kT instanceof HTMLElement && !TT.contains(kT) && kT.blur()
+           }
+ 
+           function vT(TT) {
+             TT.preventDefault(), jT(TT.currentTarget)
```

#### 853. `bundles/bloxd.io/main.js` (Changed code · before: `L14031-L14038` → after: `L35854-L35869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R35854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L35854-L35869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L35854-L35869) · [Before (L14031-L14038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14031-L14038)

```diff
-             let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nv.h.getItem(Sv.dc);
-             if (null === vv) return null;
-             if ("object" === typeof vv && vv.browser === sv()) {
-               let zv = vv;
-               if (void 0 === zv.at && (zv = {
-                   ...zv,
-                   at: Date.now()
-                 }, Nv.h.setItem(Sv.dc, zv)), Date.now() - zv.at < Tv) return zv
+             let {
+               disabled: TT,
+               keys: kT = ["Enter", " "],
+               stopPropagation: cT = !1,
+               focusOnClick: lT = !0
+             } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+             return {
+               role: "button",
+               tabIndex: TT ? -1 : 0,
+               "aria-disabled": !!TT || void 0,
+               ...lT ? {} : {
+                 onMouseDown: vT
+               },
+               onKeyDown: TT ? void 0 : TT => {
+                 kT.includes(TT.key) && (TT.preventDefault(), cT && TT.stopPropagation(), TT.currentTarget.click())
+               }
```

#### 854. `bundles/bloxd.io/main.js` (Changed code · before: `L14044` → after: `L36056-L36060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36056-L36060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36056-L36060) · [Before (L14044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14044)

```diff
-             return "number" === typeof vv.hiddenLosses ? vv.hiddenLosses : null
+             return (0, lT.forwardRef)(((kT, cT) => (0, AT.jsx)(wT, {
+               ...kT,
+               className: CT(TT, kT.className),
+               ref: cT
+             })))
```

#### 855. `bundles/bloxd.io/main.js` (Changed code · before: `L14046-L14048` → after: `L36062-L36064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36062-L36064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36062-L36064) · [Before (L14046-L14048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14046-L14048)

```diff
-           const cv = Nv.h.getItem(Sv.dc),
-             Gv = Cv(cv),
-             mv = null === Gv ? "none" : null !== (hv = Gv.firstPage) && void 0 !== hv ? hv : "visible";
+           const bT = mT("GoldSecondaryButton"),
+             zT = mT("PurpleSecondaryButton"),
+             JT = mT("RedSecondaryButton");
```

#### 856. `bundles/bloxd.io/main.js` (Changed code · before: `L14051-L14055` → after: `L36067-L36098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36067-L36098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36067-L36098) · [Before (L14051-L14055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14051-L14055)

```diff
-             let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-               zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
-             const Pv = (0, dv.e)(),
-               hv = null !== Pv && (zv - Pv < wv || null !== vv && Pv > vv);
-             return document.hidden || hv ? "hidden" : "visible"
+             return (0, AT.jsx)("svg", {
+               className: "RainbowSecondaryButtonGradientDefs",
+               "aria-hidden": !0,
+               focusable: !1,
+               children: (0, AT.jsx)("defs", {
+                 children: (0, AT.jsxs)("linearGradient", {
+                   id: "RainbowSecondaryButtonGradient",
+                   children: [(0, AT.jsx)("stop", {
+                     offset: "0%",
+                     stopColor: "#ff6b9d"
+                   }), (0, AT.jsx)("stop", {
+                     offset: "16.6%",
+                     stopColor: "#ffa64d"
+                   }), (0, AT.jsx)("stop", {
+                     offset: "33.3%",
+                     stopColor: "#ffd700"
+ ... (16 more added lines; see GitHub link above)
```

#### 857. `bundles/bloxd.io/main.js` (Changed code · before: `L14059-L14091` → after: `L36130-L36151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36130-L36151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36130-L36151) · [Before (L14059-L14091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14059-L14091)

```diff
-             var zv, Pv;
-             const hv = Nv.h.setItem(Sv.dc, function(vv, zv, Pv) {
-                 var hv, Sv;
-                 const gv = null === vv ? 0 : iv(vv),
-                   pv = null !== vv && Pv - vv.at < ev.k ? (null !== (hv = vv.losses) && void 0 !== hv ? hv : 1) + 1 : 1;
-                 if ("hidden" === zv && null !== gv) {
-                   if (null === vv) return {
-                     browser: sv(),
-                     at: Pv,
-                     hiddenLosses: 1,
-                     firstPage: zv,
-                     losses: pv
-                   };
-                   const hv = av && gv + 1 <= Wv;
-                   return {
-                     ...vv,
- ... (17 more removed lines; see GitHub link above)
+             let {
+               children: kT,
+               onClick: cT,
+               isLiked: lT,
+               className: MT,
+               isLoading: KT = !1,
+               disabled: OT = !1,
+               padSecondary: yT = !1
+             } = TT;
+             return (0, AT.jsx)(ET, {
+               onClick: cT,
+               isLoading: KT,
+               disabled: OT,
+               padSecondaryLabelKey: yT ? "controller:menusFavourite" : void 0,
+               showConfetti: lT,
+               className: CT("LikeButton", {
+ ... (6 more added lines; see GitHub link above)
```

#### 858. `bundles/bloxd.io/main.js` (Changed code · before: `L14094-L14095` → after: `L36154-L36172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36154-L36172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36154-L36172) · [Before (L14094-L14095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14094-L14095)

```diff
-           function Fv() {
-             return null !== Yv()
+           function VT(TT) {
+             let {
+               children: kT,
+               onClick: cT,
+               className: lT,
+               isLoading: MT = !1,
+               disabled: KT = !1
+             } = TT;
+             return (0, AT.jsx)(ET, {
+               onClick: cT,
+               isLoading: MT,
+               disabled: KT,
+               showConfetti: !1,
+               className: CT("ReportButton", {
+                 [lT]: lT
+               }),
+ ... (3 more added lines; see GitHub link above)
```

#### 859. `bundles/bloxd.io/main.js` (Changed code · before: `L14098-L14102` → after: `L36175-L36319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36175-L36319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36175-L36319) · [Before (L14098-L14102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14098-L14102)

```diff
-           function Yv() {
-             const vv = Cv();
-             if (null === vv) return null;
-             const zv = iv(vv);
-             return av && null !== zv && zv <= Wv ? null : vv
+           function ET(TT) {
+             let {
+               children: kT,
+               onClick: cT,
+               showConfetti: lT,
+               className: yT,
+               confettiClassName: fT,
+               icon: xT,
+               isLoading: IT = !1,
+               disabled: jT = !1,
+               padSecondaryLabelKey: vT
+             } = TT;
+             return (0, AT.jsxs)("div", {
+               ...tT({
+                 disabled: IT || jT,
+                 stopPropagation: !0
+ ... (129 more added lines; see GitHub link above)
```

#### 860. `bundles/bloxd.io/main.js` (Changed code · before: `L14106-L14108` → after: `L36323-L36328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36323-L36328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36323-L36328) · [Before (L14106-L14108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14106-L14108)

```diff
-             var vv;
-             const zv = Yv();
-             return null !== zv && ("ios" !== (0, pv.getOperatingSystem)() || (null !== (vv = zv.losses) && void 0 !== vv ? vv : 1) > 1)
+             try {
+               var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
+             } catch (TT) {}
+             return (jT = function() {
+               return !!TT
+             })()
```

#### 861. `bundles/bloxd.io/main.js` (Changed code · before: `L14111-L14117` → after: `L36495-L36511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36495-L36511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36495-L36511) · [Before (L14111-L14117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14111-L14117)

```diff
-           function Ov() {
-             var vv, zv;
-             const Pv = "none" === mv ? null : Nv.h.getItem(lv);
-             return null !== Pv && Nv.h.removeItem(lv), {
-               hidden: null !== (vv = null === Pv || void 0 === Pv ? void 0 : Pv.hidden) && void 0 !== vv ? vv : null,
-               visible: null !== (zv = null === Pv || void 0 === Pv ? void 0 : Pv.visible) && void 0 !== zv ? zv : null
-             }
+           function FT(TT) {
+             let {
+               className: kT,
+               name: cT,
+               checked: lT,
+               onChange: MT,
+               disabled: KT,
+               ariaLabel: OT
+             } = TT;
+             return (0, aT.jsx)(DT, {
+               className: kT,
+               name: cT,
+               checked: lT,
+               onChange: MT,
+               disabled: KT,
+               "aria-label": OT
+ ... (1 more added lines; see GitHub link above)
```

#### 862. `bundles/bloxd.io/main.js` (Changed code · before: `L14120-L14121` → after: `L36531-L36549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36531-L36549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36531-L36549) · [Before (L14120-L14121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14120-L14121)

```diff
-           function Dv() {
-             return null !== Cv()
+           function jT(TT) {
+             let {
+               className: kT = "",
+               hoverInfo: cT,
+               placement: lT = "bottom",
+               icon: MT = "circle-info"
+             } = TT;
+             return (0, CT.jsx)(tT, {
+               delayShow: 0,
+               tooltipInner: (0, CT.jsx)("div", {
+                 className: "CircleInfoTooltip",
+                 children: cT
+               }),
+               placement: lT,
+               children: (0, CT.jsx)(fT.e, {
+                 name: MT,
+ ... (3 more added lines; see GitHub link above)
```

#### 863. `bundles/bloxd.io/main.js` (Changed code · before: `L14125-L14129` → after: `L36553-L36556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36553-L36556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36553-L36556) · [Before (L14125-L14129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14125-L14129)

```diff
-             return {
-               atLoad: cv,
-               now: Nv.h.getItem(Sv.dc),
-               unreported: Nv.h.getItem(lv)
-             }
+             var TT;
+             const kT = null !== (TT = document.querySelector(".WholeAppWrapperInner")) && void 0 !== TT ? TT : document.body,
+               cT = (0, AT.h)();
+             return null === cT || cT.contains(kT) ? kT : cT
```

#### 864. `bundles/bloxd.io/main.js` (Changed code · before: `L14142-L14159` → after: `L36560-L36581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36560-L36581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36560-L36581) · [Before (L14142-L14159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14142-L14159)

```diff
-             return function(vv, zv) {
-               const Pv = Sv.l[vv].bucketWeights;
-               let hv = 0;
-               for (const Sv in Pv) hv += Pv[Sv];
-               let ev = 0;
-               for (const Sv in Pv)
-                 if (ev += Pv[Sv], zv <= ev / hv) return Sv;
-               throw new Error(`Failed to determine A/B testing bucket: test key=${vv} user percentile=${zv} bucket weights=${JSON.stringify(Pv)}`)
-             }(vv, function(vv) {
-               const zv = `ab_p_${vv}`;
-               let Pv = NaN;
-               try {
-                 Pv = parseFloat(hv.h.getItem(zv))
-               } catch (Sv) {
-                 console.error(`Failed to parse user percentile for "${vv}", defaulting to a random percentile:`, Sv)
-               }
- ... (2 more removed lines; see GitHub link above)
+             let {
+               children: kT,
+               tooltipInner: cT,
+               hideTooltip: lT = !1,
+               delayShow: MT = 600,
+               delayHide: KT = 100,
+               placement: yT = "bottom",
+               hoverOnly: fT = !1,
+               tooltipClassName: xT = ""
+             } = TT;
+             const [IT, AT] = (0, OT.useState)(null), [jT] = (0, OT.useState)((() => new ST(AT)));
+             return jT.delayShow = MT, jT.delayHide = KT, jT.hoverOnly = fT, (0, CT.jsxs)(CT.Fragment, {
+               children: [(0, OT.cloneElement)(kT, {
+                 ref: jT.setRef
+               }), null !== IT && !lT && (0, CT.jsx)(hT, {
+                 reference: IT,
+ ... (6 more added lines; see GitHub link above)
```

#### 865. `bundles/bloxd.io/main.js` (Changed code · before: `L14169` → after: `L36585-L36602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36585-L36602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36585-L36602) · [Before (L14169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14169)

```diff
-             return `ab_exposed_${vv}`
+             let {
+               reference: kT,
+               placement: cT,
+               className: lT,
+               onPressOutside: KT,
+               children: OT
+             } = TT;
+             return (0, xT.s)() ? (0, yT.createPortal)((0, CT.jsx)(IT, {
+               trigger: kT,
+               className: MT()("tooltip-container SmallTextLight", lT),
+               children: OT
+             }), vT()) : (0, CT.jsx)(DT, {
+               reference: kT,
+               placement: cT,
+               className: lT,
+               onPressOutside: KT,
+ ... (2 more added lines; see GitHub link above)
```

#### 866. `bundles/bloxd.io/main.js` (Changed code · before: `L14173` → after: `L36606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36606) · [Before (L14173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14173)

```diff
-             pv.add(vv), hv.h.setItem(dv(vv), !0)
+             return "touch" === TT.pointerType || "pen" === TT.pointerType && 0 !== (1 & TT.buttons)
```

#### 867. `bundles/bloxd.io/main.js` (Changed code · before: `L14175-L14177` → after: `L36608-L36619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36608-L36619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36608-L36619) · [Before (L14175-L14177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14175-L14177)

```diff
- 
-           function lv(vv) {
-             return pv.has(vv) || !0 === hv.h.getItem(dv(vv))
+           let QT = !1;
+           if ("undefined" !== typeof document) {
+             const TT = TT => {
+               QT = NT(TT)
+             };
+             document.addEventListener("pointerdown", TT, {
+               capture: !0,
+               passive: !0
+             }), document.addEventListener("pointermove", TT, {
+               capture: !0,
+               passive: !0
+             })
```

#### 868. `bundles/bloxd.io/main.js` (Changed code · before: `L14179-L14181` → after: `L36621-L36645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36621-L36645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36621-L36645) · [Before (L14179-L14181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14179-L14181)

```diff
- 
-           function Tv() {
-             return "off" !== gv.ez_towering_v1
+           class ST {
+             constructor(TT) {
+               this.onShownOnChange = TT, this.delayShow = 0, this.delayHide = 0, this.hoverOnly = !1, this.element = null, this.shownOn = null, this.timer = void 0, this.setRef = TT => {
+                 null !== this.element && (this.element.removeEventListener("mouseenter", this.onMouseEnter), this.element.removeEventListener("mouseleave", this.onMouseLeave), this.element.removeEventListener("pointermove", this.onPointerMoveAfterTap)), this.element = TT, null != … [truncated]
+               }, this.onPressOutside = () => {
+                 this.schedule(!1, this.delayHide)
+               }, this.onMouseEnter = () => {
+                 var TT;
+                 this.hoverOnly && QT ? null === (TT = this.element) || void 0 === TT || TT.addEventListener("pointermove", this.onPointerMoveAfterTap) : this.schedule(!0, this.delayShow)
+               }, this.onPointerMoveAfterTap = TT => {
+                 var kT;
+                 NT(TT) || (null === (kT = this.element) || void 0 === kT || kT.removeEventListener("pointermove", this.onPointerMoveAfterTap), this.schedule(!0, this.delayShow))
+               }, this.onMouseLeave = () => {
+                 var TT;
+                 null === (TT = this.element) || void 0 === TT || TT.removeEventListener("pointermove", this.onPointerMoveAfterTap), this.schedule(!1, this.delayHide)
+               }
+ ... (9 more added lines; see GitHub link above)
```

#### 869. `bundles/bloxd.io/main.js` (Changed code · before: `L14183` → after: `L36647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36647) · [Before (L14183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14183)

```diff
-         }, , , , , , , , (vv, zv, Pv) => {
+ 
```

#### 870. `bundles/bloxd.io/main.js` (Changed code · before: `L14185` → after: `L36649-L36688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36649-L36688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36649-L36688) · [Before (L14185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14185)

```diff
-             return vv in dv
+             let {
+               reference: kT,
+               placement: cT,
+               className: lT,
+               onPressOutside: fT,
+               children: xT
+             } = TT;
+             const {
+               getArrowProps: IT,
+               getTooltipProps: AT,
+               setTooltipRef: jT,
+               setTriggerRef: tT,
+               tooltipRef: hT
+             } = (0, KT.e)({
+               placement: cT,
+               trigger: null,
+ ... (24 more added lines; see GitHub link above)
```

#### 871. `bundles/bloxd.io/main.js` (Changed code · before: `L14188-L14194` → after: `L36693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36693) · [Before (L14188-L14194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14188-L14194)

```diff
-             b: () => ev,
-             c: () => pv,
-             g: () => gv,
-             h: () => Sv,
-             l: () => dv,
-             n: () => hv,
-             q: () => Nv
+             d: () => fT
```

#### 872. `bundles/bloxd.io/main.js` (Changed code · before: `L14196-L14406` → after: `L36695-L36720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36695-L36720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36695-L36720) · [Before (L14196-L14406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14196-L14406)

```diff
-           const Sv = "firefox_exempt",
-             ev = "unexposed",
-             gv = "not_preturing_webgl",
-             pv = "not_intel_gen7_8",
-             dv = {
-               bedwars_tutorial_v1: {
-                 bucketWeights: {
-                   off: 50,
-                   on: 50
-                 },
-                 recordCcuAnalytics: !0,
-                 ccuAnalyticsOtherLabels: ["game_name_with_variation"]
-               },
-               pirates_tutorial_v1: {
-                 bucketWeights: {
-                   off: 50,
- ... (195 more removed lines; see GitHub link above)
+           var lT = cT(71),
+             MT = cT(1195),
+             KT = cT(1061),
+             OT = cT(1470),
+             yT = cT(1099);
+ 
+           function fT(TT) {
+             let {
+               errorString: kT
+             } = TT;
+             const {
+               t: cT
+             } = (0, MT.B)(), [fT, xT] = (0, lT.useState)(!1);
+             return (0, yT.jsxs)("div", {
+               className: "CopyErrorBox",
+               children: [(0, yT.jsx)("div", {
+ ... (10 more added lines; see GitHub link above)
```

#### 873. `bundles/bloxd.io/main.js` (Changed code · before: `L14408-L14414` → after: `L36722-L36735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36722-L36735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36722-L36735) · [Before (L14408-L14414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14408-L14414)

```diff
-                 recordCcuAnalytics: !0,
-                 ccuAnalyticsOtherLabels: ["hN", "kd"],
-                 primaryMetric: "visit_play_minutes"
-               }
-             },
-             Nv = new Set(["wasm_holdback_v1"])
-         }, , , (vv, zv, Pv) => {
+                 children: [fT && (0, yT.jsxs)(yT.Fragment, {
+                   children: [(0, yT.jsx)(KT.e, {
+                     name: "check"
+                   }), " ", cT("general:copied")]
+                 }), !fT && (0, yT.jsxs)(yT.Fragment, {
+                   children: [(0, yT.jsx)(KT.e, {
+                     name: "copy"
+                   }), " ", cT("general:copy")]
+                 })]
+               })]
+             })
+           }
+         },
+         3428: (TT, kT, cT) => {
```

#### 874. `bundles/bloxd.io/main.js` (Changed code · before: `L14416-L14419` → after: `L36737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36737) · [Before (L14416-L14419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14416-L14419)

```diff
-             b: () => dv,
-             e: () => pv,
-             i: () => Nv,
-             l: () => gv
+             b: () => OT
```

#### 875. `bundles/bloxd.io/main.js` (Changed code · before: `L14421-L14433` → after: `L36739-L36741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36739-L36741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36739-L36741) · [Before (L14421-L14433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14421-L14433)

```diff
-           let hv = null,
-             Sv = null,
-             ev = !1;
- 
-           function gv() {
-             ev || (ev = !0, document.addEventListener("visibilitychange", (() => {
-               hv = performance.now()
-             })))
-           }
- 
-           function pv() {
-             return hv
-           }
+           var lT = cT(71),
+             MT = cT(2938),
+             KT = cT(1099);
```

#### 876. `bundles/bloxd.io/main.js` (Changed code · before: `L14436` → after: `L36744-L36775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36744-L36775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36744-L36775) · [Before (L14436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14436)

```diff
-             Sv = vv
+             let {
+               toTime: kT,
+               onReachEndOfCountdown: cT = () => {}
+             } = TT;
+             const OT = (0, MT.b)(),
+               yT = (0, lT.useRef)(!1);
+             return (0, lT.useEffect)((() => {
+               const TT = setInterval((() => {
+                 OT()
+               }), 1e3);
+               return () => {
+                 clearInterval(TT)
+               }
+             }), [OT]), (0, KT.jsx)("div", {
+               className: "CountdownTime",
+               children: function(TT) {
+ ... (16 more added lines; see GitHub link above)
```

#### 877. `bundles/bloxd.io/main.js` (Changed code · before: `L14439-L14440` → after: `L36786-L36808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36786-L36808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36786-L36808) · [Before (L14439-L14440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14439-L14440)

```diff
-           function Nv() {
-             return Sv
+           function OT(TT) {
+             let {
+               options: kT,
+               value: cT,
+               onChange: OT,
+               controlClassName: yT = "",
+               arrowClassName: fT = "",
+               menuClassName: xT = "",
+               disabled: IT = !1
+             } = TT;
+             const {
+               t: AT
+             } = (0, MT.B)();
+             return (0, KT.jsx)(lT.c, {
+               controlClassName: `BloxdDropdownControl SmallTextLight ${null!==yT&&void 0!==yT?yT:""}`,
+               arrowClassName: `BloxdDropdownArrow SmallTextLight ${null!==fT&&void 0!==fT?fT:""}`,
+ ... (7 more added lines; see GitHub link above)
```

#### 878. `bundles/bloxd.io/main.js` (Changed code · before: `L14442` → after: `L36810-L36811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36810-L36811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36810-L36811) · [Before (L14442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14442)

```diff
-         }, , , , , , , (vv, zv, Pv) => {
+         },
+         4515: (TT, kT, cT) => {
```

#### 879. `bundles/bloxd.io/main.js` (Changed code · before: `L14444-L14490` → after: `L36813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36813) · [Before (L14444-L14490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14444-L14490)

```diff
-             Ab: () => wv,
-             B: () => Sv,
-             C: () => ev,
-             D: () => iv,
-             E: () => cv,
-             Eb: () => Wv,
-             G: () => ov,
-             Ib: () => Xv,
-             K: () => Fv,
-             Lb: () => uv,
-             O: () => lv,
-             Ob: () => Dv,
-             Pb: () => fv,
-             Q: () => Gv,
-             R: () => Tv,
-             Rb: () => vz,
- ... (31 more removed lines; see GitHub link above)
+             c: () => AT
```

#### 880. `bundles/bloxd.io/main.js` (Changed code · before: `L14492-L14552` → after: `L36815-L36822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36815-L36822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36815-L36822) · [Before (L14492-L14552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14492-L14552)

```diff
-           var hv = Pv(308);
-           const Sv = {
-               characters: "fa-solid fa-user-astronaut",
-               hat: "fa-solid fa-hat-witch",
-               head: "fa-solid fa-scissors",
-               body: "fa-solid fa-shirt",
-               legs: "fa-solid fa-pants",
-               shoes: "fa-solid fa-shoe",
-               eyebrows: "fa-solid fa-face-raised-eyebrow",
-               eyes: "fa-solid fa-eye",
-               skin: "fa-solid fa-person",
-               back: "fa-solid fa-backpack",
-               cape: "fa-solid fa-bolt",
-               nameColour: "fa-solid fa-palette",
-               profileEffect: "fa-solid fa-star",
-               emote: "fa-solid fa-hand-wave"
- ... (45 more removed lines; see GitHub link above)
+           var lT = cT(71),
+             MT = cT(1046),
+             KT = cT.n(MT),
+             OT = cT(4521),
+             yT = cT(4528),
+             fT = cT(1289),
+             xT = cT(4535),
+             IT = cT(1099);
```

#### 881. `bundles/bloxd.io/main.js` (Changed code · before: `L14555-L14562` → after: `L36825-L36894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36825-L36894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36825-L36894) · [Before (L14555-L14562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14555-L14562)

```diff
-             return "custom" === vv.type ? vv.text : "event" === vv.type ? [{
-               translationKey: "homePage:eventBadge"
-             }] : dv[vv.type]
-           }
-           const lv = ["Minigames", "Puzzle", "Escape", "Parkour", "Cool Parkour", "Two Player Parkour", "Clutch Parkour", "Challenging Parkour", "Progressive Parkour", "Themed Parkour", "Obby", "Tower", "Roleplay", "Arena", "Duels", "Shooting", "Survival", "Simulator", "Tycoon",  … [truncated]
-             Tv = ["minigames", "pvp", "moddedSurvival", "simulator", "parkourObby", "pve", "horror", "roleplay", "other"],
-             Wv = ["customGames", "minigames", "pvp", "moddedSurvival", "newCustomGames", "updatedCustomGames", "simulator", "parkourObby", "pve", "horror", "roleplay", "other", "boostedGames"],
-             wv = 7;
+             let {
+               close: kT,
+               className: cT = "",
+               show: MT = !0,
+               children: AT = null,
+               togglePointerLock: CT = !0,
+               escDoesExit: jT = !0,
+               closeClassnameList: vT = [],
+               forcePointerUnlock: tT,
+               centerChildren: hT = !0,
+               closeOnPressBackground: NT = !0,
+               preventContextMenu: QT = !1,
+               globallyUniqueKey: ST,
+               pointerDown: DT = null,
+               pointerUp: aT = null,
+               doGameplayStartStopOnShow: FT = !1,
+ ... (54 more added lines; see GitHub link above)
```

#### 882. `bundles/bloxd.io/main.js` (Changed code · before: `L14564-L14567` → after: `L36896-L36901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36896-L36901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36896-L36901) · [Before (L14564-L14567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14564-L14567)

```diff
-           function av(vv, zv) {
-             return zv * function(vv) {
-               return "customGames" === vv ? 2 : 1
-             }(vv)
+             function ET(TT) {
+               for (const kT of ["GameBackgroundScreen", ...vT])
+                 for (const cT of TT.target.classList)
+                   if (kT === cT) return !0;
+               return !1
+             }
```

#### 883. `bundles/bloxd.io/main.js` (Changed code · before: `L14571` → after: `L36933-L36941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36933-L36941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36933-L36941) · [Before (L14571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14571)

```diff
-             return "boostedGames" === vv
+             return TT ? {
+               visibility: "visible",
+               opacity: 1
+             } : {
+               position: "absolute",
+               visibility: "hidden",
+               opacity: 0,
+               pointerEvents: "none"
+             }
```

#### 884. `bundles/bloxd.io/main.js` (Changed code · before: `L14575-L14580` → after: `L36962-L37014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R36962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L36962-L37014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L36962-L37014) · [Before (L14575-L14580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14575-L14580)

```diff
-             if ("customGames" === vv) return "Top Custom Games";
-             if ("newCustomGames" === vv) return "New Games";
-             if ("updatedCustomGames" === vv) return "Updated Games";
-             if ("boostedGames" === vv) return "Boosted Games";
-             const zv = Gv[vv];
-             return zv.endsWith("games") ? zv : `${zv} Games`
+             let {
+               noaAction: kT,
+               keyCode: cT,
+               className: MT = "",
+               style: tT,
+               padHidesKey: hT = !1,
+               padMenuShortcut: NT
+             } = TT;
+             (0, xT.B)();
+             const {
+               isTouchScreen: QT
+             } = (0, IT.n)(["isTouchScreen"]), ST = (0, CT.s)(), DT = function(TT, kT) {
+               const [, cT] = (0, lT.useReducer)((TT => TT + 1), 0);
+               if ((0, fT.g)("customBindingsChanged", cT), TT) return (0, yT.u)(TT);
+               return null !== kT && void 0 !== kT ? kT : null
+             }(kT, cT), aT = function(TT) {
+ ... (37 more added lines; see GitHub link above)
```

#### 885. `bundles/bloxd.io/main.js` (Changed code · before: `L14583-L14590` → after: `L37024-L37025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37024-L37025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37024-L37025) · [Before (L14583-L14590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14583-L14590)

```diff
-             top_custom_game_row_1_from_end: {
-               categoryGroup: "customGames",
-               positionFromEnd: 1
-             },
-             top_custom_game_row_end: {
-               categoryGroup: "customGames",
-               positionFromEnd: 0
-             }
+             first: 0,
+             last: -1
```

#### 886. `bundles/bloxd.io/main.js` (Changed code · before: `L14593-L14598` → after: `L37028-L37047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37028-L37047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37028-L37047) · [Before (L14593-L14598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14593-L14598)

```diff
-           function cv(vv, zv) {
-             const {
-               categoryGroup: Pv,
-               positionFromEnd: hv
-             } = iv[vv];
-             return av(Pv, zv) - 1 - hv
+           function OT(TT, kT, cT) {
+             let lT = 0,
+               MT = window.innerHeight;
+             if (TT) {
+               const kT = TT.getBoundingClientRect();
+               lT = kT.top, MT = kT.bottom
+             }
+             const [KT, OT] = function(TT, kT) {
+               const cT = TT.trim().split(/\s+/),
+                 lT = cT[0],
+                 MT = cT[cT.length >= 3 ? 2 : 0],
+                 KT = TT => TT.endsWith("%") ? parseFloat(TT) / 100 * kT : parseFloat(TT);
+               return [KT(lT), KT(MT)]
+             }(cT, MT - lT);
+             lT -= KT, MT += OT;
+             for (const yT of kT) {
+ ... (4 more added lines; see GitHub link above)
```

#### 887. `bundles/bloxd.io/main.js` (Changed code · before: `L14616-L14617` → after: `L37051-L37121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37051-L37121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37051-L37121) · [Before (L14616-L14617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14616-L14617)

```diff
-             var zv;
-             return null !== (zv = mv[vv]) && void 0 !== zv ? zv : vv
+             let {
+               lazyLoadedClassName: kT,
+               children: cT,
+               observerUpdateDeps: yT,
+               observerRoot: fT = null,
+               rootMargin: xT = "0% 0% 0% 0%",
+               observing: IT = !0
+             } = TT;
+             const AT = (0, lT.useRef)(null),
+               [CT, jT] = (0, lT.useState)(KT);
+             return (0, lT.useEffect)((() => {
+               const TT = AT.current,
+                 kT = null !== fT ? TT.closest(`.${fT}`) : null,
+                 cT = function(TT, kT) {
+                   const cT = [];
+                   let lT = getComputedStyle(TT).position;
+ ... (55 more added lines; see GitHub link above)
```

#### 888. `bundles/bloxd.io/main.js` (Changed code · before: `L14621-L14625` → after: `L37137-L37196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37137-L37196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37137-L37196) · [Before (L14621-L14625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14621-L14625)

```diff
-             const zv = vv.trim().toLowerCase();
-             return zv ? lv.filter((vv => {
-               const Pv = jv(vv).toLowerCase();
-               return vv.toLowerCase().includes(zv) || Pv.includes(zv)
-             })) : []
+             let {
+               page: kT,
+               totalPages: cT,
+               onSetPage: MT,
+               getPageHref: IT,
+               className: AT
+             } = TT;
+             if (cT <= 1) return null;
+             const CT = Math.min(Math.max(kT, 1), cT),
+               jT = function(TT, kT) {
+                 const cT = new Set([1, TT, kT]);
+                 let lT = xT - cT.size,
+                   MT = TT,
+                   KT = TT;
+                 for (; lT > 0 && (MT > 1 || KT < kT);) MT -= 1, KT += 1, KT < kT && (cT.add(KT), lT -= 1), lT > 0 && MT > 1 && (cT.add(MT), lT -= 1);
+                 return Array.from(cT).sort(((TT, kT) => TT - kT))
+ ... (44 more added lines; see GitHub link above)
```

#### 889. `bundles/bloxd.io/main.js` (Changed code · before: `L14628-L14636` → after: `L37209-L37216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37209-L37216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37209-L37216) · [Before (L14628-L14636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14628-L14636)

```diff
-               parkourObby: ["Puzzle", "Escape", "Parkour", "Cool Parkour", "Obby", "Tower", "Two Player Parkour", "Clutch Parkour", "Challenging Parkour", "Progressive Parkour", "Themed Parkour"],
-               roleplay: ["Roleplay"],
-               pvp: ["Arena", "Duels", "Shooting"],
-               simulator: ["Simulator", "Tycoon", "Clicker"],
-               pve: ["Building", "Lucky Block", "PvE", "Adventure"],
-               minigames: ["Minigames"],
-               horror: ["Horror"],
-               moddedSurvival: ["Survival"],
-               other: ["Cool Build", "Other", "Racing", "Driving"]
+               wide: {
+                 width: 16,
+                 height: 9
+               },
+               square: {
+                 width: 12,
+                 height: 12
+               }
```

#### 890. `bundles/bloxd.io/main.js` (Changed code · before: `L14638-L14647` → after: `L37218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37218) · [Before (L14638-L14647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14638-L14647)

```diff
-             Yv = {};
-           for (const hz of Tv)
-             for (const vv of Fv[hz]) Yv[vv] = hz;
- 
-           function nv(vv) {
-             return Yv[vv]
-           }
-           let Ov = function(vv) {
-             return vv[vv.SETTINGS = 0] = "SETTINGS", vv[vv.CUSTOMISATION = 1] = "CUSTOMISATION", vv[vv.SHOP = 2] = "SHOP", vv[vv.LOBBY_LEADERBOARD = 3] = "LOBBY_LEADERBOARD", vv[vv.COSMETIC_SHOP = 4] = "COSMETIC_SHOP", vv[vv.SOCIAL = 5] = "SOCIAL", vv
-           }({});
+             yT = new Map;
```

#### 891. `bundles/bloxd.io/main.js` (Changed code · before: `L14649` → after: `L37220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37220) · [Before (L14649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14649)

```diff
-           function Dv(vv) {
+           function fT(TT, kT) {
```

#### 892. `bundles/bloxd.io/main.js` (Changed code · before: `L14651-L14655` → after: `L37222-L37291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37222-L37291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37222-L37291) · [Before (L14651-L14655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14651-L14655)

```diff
-             return (0, hv.e)(null !== (zv = null === vv || void 0 === vv ? void 0 : vv.color) && void 0 !== zv ? zv : null === vv || void 0 === vv ? void 0 : vv.colour)
-           }
- 
-           function Kv(vv) {
-             return "object" === typeof vv && "type" in vv && "ProgressBar" === vv.type
+             const lT = `${kT}:${TT}`;
+             let MT = yT.get(lT);
+             return void 0 === MT && (MT = function(TT, kT) {
+               const {
+                 width: cT,
+                 height: lT
+               } = OT[kT], MT = function(TT, kT, cT) {
+                 if (void 0 === AT) {
+                   AT = new Int8Array(128).fill(-1);
+                   for (let TT = 0; TT < xT.length; TT++) AT[xT.charCodeAt(TT)] = TT
+                 }
+                 const lT = AT,
+                   MT = (kT, cT) => {
+                     let MT = 0;
+                     for (let KT = kT; KT < cT; KT++) {
+                       const kT = TT.charCodeAt(KT);
+ ... (54 more added lines; see GitHub link above)
```

#### 893. `bundles/bloxd.io/main.js` (Changed code · before: `L14659` → after: `L37299-L37306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37299-L37306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37299-L37306) · [Before (L14659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14659)

```diff
-             return "object" === typeof vv && "type" in vv && "StyledKeyBinding" === vv.type
+             let kT = CT.get(TT);
+             if (void 0 === kT) {
+               kT = new Float64Array(TT * IT);
+               for (let cT = 0; cT < TT; cT++)
+                 for (let lT = 0; lT < IT; lT++) kT[cT * IT + lT] = Math.cos(Math.PI * cT * lT / TT);
+               CT.set(TT, kT)
+             }
+             return kT
```

#### 894. `bundles/bloxd.io/main.js` (Changed code · before: `L14664-L14669` → after: `L37310-L37311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37310-L37311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37310-L37311) · [Before (L14664-L14669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14664-L14669)

```diff
-             const zv = [];
-             let Pv = 0;
-             for (const hv of vv.matchAll(Uv)) hv.index > Pv && zv.push(vv.slice(Pv, hv.index)), zv.push({
-               icon: hv[1]
-             }), Pv = hv.index + hv[0].length;
-             return Pv < vv.length && zv.push(vv.slice(Pv)), zv
+             const kT = TT / 255;
+             return kT <= .04045 ? kT / 12.92 : Math.pow((kT + .055) / 1.055, 2.4)
```

#### 895. `bundles/bloxd.io/main.js` (Changed code · before: `L14673-L14676` → after: `L37315-L37316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37315-L37316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37315-L37316) · [Before (L14673-L14676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14673-L14676)

```diff
-             return vv.replace(/(\s*)\[\[([^[\]]+)\]\]/g, ((zv, Pv, hv, Sv) => {
-               const ev = vv.slice(0, Sv);
-               return [hv, `${hv}s`, `${hv}es`].some((vv => ev.endsWith(vv))) ? "" : Pv + hv
-             }))
+             const kT = Math.max(0, Math.min(1, TT));
+             return kT <= .0031308 ? Math.trunc(12.92 * kT * 255 + .5) : Math.trunc(255 * (1.055 * Math.pow(kT, 1 / 2.4) - .055) + .5)
```

#### 896. `bundles/bloxd.io/main.js` (Changed code · before: `L14678-L14798` → after: `L37318-L37321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37318-L37321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37318-L37321) · [Before (L14678-L14798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14678-L14798)

```diff
-           const tv = {
-               creative: "Creative",
-               survival: "Survival",
-               peaceful: "Peaceful",
-               survivaladventure: "Survival Adventure",
-               peacefuladventure: "Peaceful Adventure",
-               spectator: "Spectator"
-             },
-             qv = {
-               creative: "/textures/games/classic_creative/bloxd_creative_thumbnail_small.jpg",
-               survival: "/textures/games/classic_survival/bloxd_survival_thumbnail_small.jpg",
-               peaceful: "/textures/games/classic/bloxd_peaceful_thumbnail_small.jpg",
-               survivaladventure: "/textures/games/classic_survival/bloxd_survival_thumbnail_small.jpg",
-               peacefuladventure: "/textures/games/classic/bloxd_peaceful_thumbnail_small.jpg",
-               spectator: "/textures/games/classic_creative/bloxd_creative_thumbnail_small.jpg"
-             },
- ... (105 more removed lines; see GitHub link above)
+           const hT = 54;
+           var NT = cT(1356),
+             QT = cT(1099);
+           const ST = "ProgressiveImageHost";
```

#### 897. `bundles/bloxd.io/main.js` (Changed code · before: `L14801` → after: `L37324-L37326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37324-L37326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37324-L37326) · [Before (L14801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14801)

```diff
-             return "string" === typeof vv && vv.length <= Sv && hv.test(vv)
+             return null !== TT.src ? {
+               backgroundImage: `url(${TT.src})`
+             } : {}
```

#### 898. `bundles/bloxd.io/main.js` (Changed code · before: `L14805` → after: `L37330-L37356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37330-L37356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37330-L37356) · [Before (L14805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14805)

```diff
-             return ev(vv) ? vv : void 0
+             let {
+               image: kT,
+               yieldsToCssBackground: cT = !1
+             } = TT;
+             const [MT, OT] = (0, lT.useState)(null), [yT, xT] = (0, lT.useState)(!1), IT = (0, lT.useRef)(null);
+             (0, lT.useLayoutEffect)((() => {
+               var TT;
+               const kT = null === (TT = IT.current) || void 0 === TT ? void 0 : TT.parentElement;
+               cT && kT && "none" !== getComputedStyle(kT).backgroundImage && xT(!0)
+             }), []);
+             const AT = yT || null !== kT.src && (!kT.fadeIn || MT === kT.src),
+               CT = AT || void 0 === kT.blurhash || kT.failed ? void 0 : fT(kT.blurhash, kT.aspect),
+               jT = !AT && void 0 === CT && kT.isLoading;
+             return (0, NT.b)(IT, jT), AT ? null : (0, QT.jsx)("div", {
+               ref: IT,
+               className: KT()("ProgressiveImagePlaceholder", {
+ ... (11 more added lines; see GitHub link above)
```

#### 899. `bundles/bloxd.io/main.js` (Changed code · before: `L14807` → after: `L37358-L37359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37358-L37359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37358-L37359) · [Before (L14807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14807)

```diff
-         }, , , , (vv, zv, Pv) => {
+         },
+         2108: (TT, kT, cT) => {
```

#### 900. `bundles/bloxd.io/main.js` (Changed code · before: `L14809-L14906` → after: `L37361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37361) · [Before (L14809-L14906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14809-L14906)

```diff
-             $b: () => Yv,
-             Ac: () => xv,
-             Ad: () => Lz,
-             B: () => cv,
-             Bc: () => Fz,
-             Bd: () => Bz,
-             Cb: () => Kz,
-             Db: () => tz,
-             Dc: () => ov,
-             E: () => Lv,
-             Ed: () => tv,
-             G: () => yv,
-             Gb: () => Uz,
-             Gc: () => Ev,
-             Gd: () => ez,
-             I: () => uv,
- ... (82 more removed lines; see GitHub link above)
+             b: () => MT
```

#### 901. `bundles/bloxd.io/main.js` (Changed code · before: `L14908-L14943` → after: `L37363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37363) · [Before (L14908-L14943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14908-L14943)

```diff
-           var hv = Pv(321),
-             Sv = Pv(327),
-             ev = Pv.n(Sv),
-             gv = Pv(598),
-             pv = Pv(626),
-             dv = Pv(602),
-             Nv = Pv(144),
-             lv = Pv(609),
-             Tv = Pv(302);
- 
-           function Wv(vv, zv, Pv, hv) {
-             return function(vv, zv) {
-               if (!vv || !zv) return !1;
-               const {
-                 tool: Pv
-               } = zv;
- ... (20 more removed lines; see GitHub link above)
+           var lT = cT(1099);
```

#### 902. `bundles/bloxd.io/main.js` (Changed code · before: `L14946-L14958` → after: `L37366-L37374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37366-L37374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37366-L37374) · [Before (L14946-L14958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14946-L14958)

```diff
-             let zv;
-             ! function(vv) {
-               vv[vv.M = 1e3] = "M", vv[vv.CM = 900] = "CM", vv[vv.D = 500] = "D", vv[vv.CD = 400] = "CD", vv[vv.C = 100] = "C", vv[vv.XC = 90] = "XC", vv[vv.L = 50] = "L", vv[vv.XL = 40] = "XL", vv[vv.X = 10] = "X", vv[vv.IX = 9] = "IX", vv[vv.V = 5] = "V", vv[vv.IV = 4] = "IV",  … [truncated]
-             }(zv || (zv = {}));
-             let Pv, hv = "";
-             if (vv < 0) console.error("Bad number to convertNumberToRomanNumeral", vv);
-             else {
-               if (0 === vv) return "N";
-               if (!(vv > 3999)) {
-                 for (Pv in zv)
-                   if (isNaN(Number(Pv)))
-                     for (; vv >= Number(zv[Pv]);) hv += Pv, vv -= Number(zv[Pv]);
-                 return hv
+             let {
+               top: kT = "-2px",
+               right: cT = "-2px"
+             } = TT;
+             return (0, lT.jsx)("div", {
+               className: "Dot",
+               style: {
+                 top: kT,
+                 right: cT
```

#### 903. `bundles/bloxd.io/main.js` (Changed code · before: `L14960-L14961` → after: `L37376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37376) · [Before (L14960-L14961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14960-L14961)

```diff
-               console.error("Bad number to convertNumberToRomanNumeral", vv)
-             }
+             })
```

#### 904. `bundles/bloxd.io/main.js` (Changed code · before: `L14964-L14965` → after: `L37391-L37399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37391-L37399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37391-L37399) · [Before (L14964-L14965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14964-L14965)

```diff
-           function sv(vv) {
-             return (vv < 10 ? "0" : "") + vv
+           function IT() {
+             const {
+               t: TT
+             } = (0, OT.B)(), kT = (0, lT.s)(), cT = (0, KT.l)(kT.pathname) || (0, MT.f)(kT.pathname) ? null : (0, KT.P)(kT.pathname, (kT => TT(kT)));
+             return cT ? (0, xT.jsx)(fT.b, {
+               meta: cT
+             }) : "default" === kT.key || (0, yT.c)(kT.state) ? null : (0, xT.jsx)(fT.b, {
+               meta: (0, KT.bb)()
+             })
```

#### 905. `bundles/bloxd.io/main.js` (Changed code · before: `L14967` → after: `L37401-L37408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37401-L37408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37401-L37408) · [Before (L14967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14967)

```diff
-           let Cv = !1;
+         },
+         1637: (TT, kT, cT) => {
+           cT.d(kT, {
+             b: () => OT
+           });
+           var lT = cT(1640),
+             MT = cT(1559),
+             KT = cT(1099);
```

#### 906. `bundles/bloxd.io/main.js` (Changed code · before: `L14970` → after: `L37411-L37433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37411-L37433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37411-L37433) · [Before (L14970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14970)

```diff
-             return vv.charAt(0).toUpperCase() + vv.slice(1).toLowerCase()
+             let {
+               meta: kT
+             } = TT;
+             return (0, KT.jsxs)(lT.e, {
+               children: [(0, KT.jsx)("title", {
+                 children: kT.title
+               }), (0, MT.X)(kT).map((TT => {
+                 var kT, cT;
+                 let {
+                   tag: lT,
+                   attributes: MT
+                 } = TT;
+                 const OT = `${lT}:${null!==(kT=null!==(cT=MT.name)&&void 0!==cT?cT:MT.property)&&void 0!==kT?kT:MT.rel}`;
+                 return "link" === lT ? (0, KT.jsx)("link", {
+                   ...MT
+                 }, OT) : (0, KT.jsx)("meta", {
+ ... (7 more added lines; see GitHub link above)
```

#### 907. `bundles/bloxd.io/main.js` (Changed code · before: `L14972-L14974` → after: `L37435-L37498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37435-L37498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37435-L37498) · [Before (L14972-L14974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14972-L14974)

```diff
- 
-           function cv(vv) {
-             return vv.charAt(0).toUpperCase() + vv.slice(1)
+         },
+         1692: (TT, kT, cT) => {
+           cT.d(kT, {
+             b: () => yT
+           });
+           var lT = cT(71),
+             MT = cT(617),
+             KT = cT(1701),
+             OT = cT(1099);
+           const yT = TT => {
+             let {
+               className: kT = "",
+               placeholderText: cT,
+               maxLength: yT = 1e3,
+               defaultValue: fT = "",
+               onValueChange: xT,
+ ... (48 more added lines; see GitHub link above)
```

#### 908. `bundles/bloxd.io/main.js` (Changed code · before: `L14978` → after: `L37523-L37616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37523-L37616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37523-L37616) · [Before (L14978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14978)

```diff
-             return vv.split(" ").map(((vv, zv) => 0 === zv ? vv.toLowerCase() : iv(vv))).join("")
+             var kT, cT;
+             let {
+               className: MT = "",
+               icon: ST,
+               noaAction: DT = null,
+               keyboardButtonClassname: aT = "",
+               keyboardHint: FT = null,
+               onClick: rT = null,
+               onPointerDown: PT = null,
+               onPointerUp: wT = null,
+               onPointerCancel: mT = null,
+               showTouchTutorialPubSubId: bT = null,
+               touchTutorialRequested: zT = !1,
+               showRedDotPubSubId: JT = null,
+               touchIconPosition: oT = "topright",
+               isButton: HT = !1,
+ ... (78 more added lines; see GitHub link above)
```

#### 909. `bundles/bloxd.io/main.js` (Changed code · before: `L14982-L14984` → after: `L37628-L37630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37628-L37630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37628-L37630) · [Before (L14982-L14984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14982-L14984)

```diff
-             return Gv(function(vv) {
-               return vv.replace(/-/g, " ")
-             }(vv))
+             (0, KT.e)("Escape", (kT => {
+               kT.repeat || (0, lT.s)() || (kT.stopPropagation(), (0, MT.i)() || TT())
+             }))
```

#### 910. `bundles/bloxd.io/main.js` (Changed code · before: `L14987-L14988` → after: `L37639-L37643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37639-L37643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37639-L37643) · [Before (L14987-L14988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14987-L14988)

```diff
-           function jv(vv) {
-             return vv.split(" ").map((vv => vv.toLowerCase())).join("_")
+           function MT() {
+             const [, TT] = (0, lT.useState)(0);
+             return (0, lT.useCallback)((() => {
+               TT((TT => TT + 1))
+             }), [])
```

#### 911. `bundles/bloxd.io/main.js` (Changed code · before: `L14991-L14995` → after: `L37654-L37666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37654-L37666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37654-L37666) · [Before (L14991-L14995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14991-L14995)

```diff
-           function fv(vv) {
-             return {
-               str: vv,
-               style: {
-                 color: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Jz.serverUiText
+           function OT(TT, kT) {
+             let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+             const {
+               t: OT,
+               selectedLanguage: yT
+             } = (0, MT.B)(), [fT, xT] = (0, lT.useState)(null);
+             return (0, lT.useEffect)((() => {
+               if (!TT) return void xT("");
+               let lT = !1;
+               return xT(null), (0, KT.c)(OT, TT, kT, cT).catch((TT => (console.error("Failed to get game title", TT), ""))).then((TT => {
+                 lT || xT(TT)
+               })), () => {
+                 lT = !0
```

#### 912. `bundles/bloxd.io/main.js` (Changed code · before: `L14997` → after: `L37668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37668) · [Before (L14997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L14997)

```diff
-             }
+             }), [yT.code, TT, kT, cT]), fT
```

#### 913. `bundles/bloxd.io/main.js` (Changed code · before: `L15000-L15001` → after: `L37677-L37682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37677-L37682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37677-L37682) · [Before (L15000-L15001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15000-L15001)

```diff
-           function Fv(vv) {
-             return Math.floor(Math.random() * vv.length)
+           function MT() {
+             const {
+               isUiHidden: TT,
+               isUiHiddenByCamera: kT
+             } = (0, lT.n)(["isUiHidden", "isUiHiddenByCamera"]);
+             return TT || kT
```

#### 914. `bundles/bloxd.io/main.js` (Changed code · before: `L15005` → after: `L37692-L37695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37692-L37695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37692-L37695) · [Before (L15005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15005)

```diff
-             return "cart-shopping"
+             const TT = (0, lT.useRef)(!0);
+             return (0, lT.useEffect)((() => (TT.current = !0, () => {
+               TT.current = !1
+             })), []), TT
```

#### 915. `bundles/bloxd.io/main.js` (Changed code · before: `L15007-L15066` → after: `L37697-L37704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37697-L37704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37697-L37704) · [Before (L15007-L15066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15007-L15066)

```diff
-           Cv = Cv && !1;
-           const nv = ["Yellow", "White", "Red", "Purple", "Pink", "Orange", "Magenta", "Lime", "Light Gray", "Light Blue", "Green", "Gray", "Cyan", "Brown", "Blue", "Black"],
-             Ov = ["Torch", ...nv.map((vv => `${vv} Torch`))];
- 
-           function Dv(vv) {
-             var zv;
-             return "rock" === vv.heldToolType ? vv.harvestLevel > (null !== (zv = vv.heldToolLevel) && void 0 !== zv ? zv : 0) : "rock" === vv.blockHarvestType && 0 !== vv.blockHarvestLevel
-           }
-           const Kv = ["Arrow", "Arrow of Slowness", "Arrow of Poison", "Arrow of Instant Damage", "Arrow of Instant Healing", "Arrow of Regeneration", "Arrow of Weakness", "Arrow of Strength", "Arrow of Defense", "Arrow of Jumping", "Arrow of Speed", "Arrow of Knockback", "Arrow  … [truncated]
-             Vv = ["Wood Spade", "Stone Spade", "Iron Spade", "Gold Spade", "Diamond Spade", ...hv.k.map((vv => `${vv} Spade`))],
-             Uv = ["Maple Wood Planks", "Aspen Wood Planks", "Plum Wood Planks", "Jungle Wood Planks", "Pine Wood Planks", "Cedar Wood Planks", "Palm Wood Planks", "Pear Wood Planks", "Cherry Wood Planks", "Spectral Wood Planks", "Mango Wood Planks"],
-             Rv = ["Red Wool", "Yellow Wool", "White Wool", "Purple Wool", "Pink Wool", "Orange Wool", "Magenta Wool", "Lime Wool", "Light Gray Wool", "Light Blue Wool", "Green Wool", "Gray Wool", "Cyan Wool", "Brown Wool", "Blue Wool", "Black Wool"],
-             xv = ["Maple Ladder", "Pine Ladder", "Plum Ladder", "Cedar Ladder", "Aspen Ladder", "Jungle Ladder", "Palm Ladder", "Pear Ladder", "Cherry Ladder", "Spectral Ladder", "Mango Ladder", "Iron Ladder"],
-             tv = ["Maple Log", "Aspen Log", "Plum Log", "Jungle Log", "Pine Log", "Cedar Log", "Palm Log", "Pear Log", "Cherry Log", "Spectral Log", "Mango Log"],
-             qv = ["Maple Log", "Barkless Maple Log"],
-             Iv = ["Aspen Log", "Barkless Aspen Log"],
- ... (44 more removed lines; see GitHub link above)
+         },
+         1117: (TT, kT, cT) => {
+           cT.d(kT, {
+             e: () => MT,
+             h: () => KT,
+             i: () => OT
+           });
+           var lT = cT(1122);
```

#### 916. `bundles/bloxd.io/main.js` (Changed code · before: `L15069` → after: `L37707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37707) · [Before (L15069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15069)

```diff
-             return vv === zv ? 0 !== vv || 0 !== zv || 1 / vv === 1 / zv : vv !== vv && zv !== zv
+             return kT >= TT
```

#### 917. `bundles/bloxd.io/main.js` (Changed code · before: `L15073-L15086` → after: `L37711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37711) · [Before (L15073-L15086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15073-L15086)

```diff
-             if (sz(vv, zv)) return !0;
-             if ("object" !== typeof vv || null === vv || "object" !== typeof zv || null === zv) return !1;
-             const Pv = Object.keys(vv),
-               hv = Object.keys(zv);
-             if (Pv.length !== hv.length) return !1;
-             for (let Sv = 0; Sv < Pv.length; Sv++)
-               if (!az.call(zv, Pv[Sv]) || !sz(vv[Pv[Sv]], zv[Pv[Sv]])) return !1;
-             return !0
-           }
-           "function" === typeof ArrayBuffer && ArrayBuffer.isView;
- 
-           function iz(vv) {
-             for (const zv in vv) return !1;
-             return !0
+             return kT >= TT && TT <= 600
```

#### 918. `bundles/bloxd.io/main.js` (Changed code · before: `L15090-L15096` → after: `L37714-L37715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37714-L37715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37714-L37715) · [Before (L15090-L15096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15090-L15096)

```diff
-           function Gz(vv) {
-             if (null === vv) return 0;
-             if ("" === vv.trim() || isNaN(vv)) return null;
-             for (let Pv = 0; Pv < vv.length; Pv++)
-               if ("Ee+-".includes(vv.at(Pv))) return null;
-             const zv = Number(vv);
-             return Number.isInteger(zv) && zv >= 0 && zv < 1e16 ? zv : null
+           function OT() {
+             return (0, lT.i)(lT.f)
```

#### 919. `bundles/bloxd.io/main.js` (Changed code · before: `L15098-L15099` → after: `L37717-L37722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37717-L37722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37717-L37722) · [Before (L15098-L15099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15098-L15099)

```diff
-           const mz = 21,
-             jz = /^[A-Za-z0-9_-]{21}$/;
+         },
+         3352: (TT, kT, cT) => {
+           cT.d(kT, {
+             e: () => MT
+           });
+           var lT = cT(71);
```

#### 920. `bundles/bloxd.io/main.js` (Changed code · before: `L15101-L15102` → after: `L37724-L37745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37724-L37745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37724-L37745) · [Before (L15101-L15102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15101-L15102)

```diff
-           function fz(vv) {
-             return !!vv && vv.length === mz && jz.test(vv)
+           function MT(TT, kT) {
+             const cT = (0, lT.useRef)({
+               matches: TT,
+               callback: kT
+             });
+             (0, lT.useLayoutEffect)((() => {
+               cT.current = {
+                 matches: TT,
+                 callback: kT
+               }
+             })), (0, lT.useEffect)((() => {
+               const TT = TT => {
+                 const {
+                   matches: kT,
+                   callback: lT
+                 } = cT.current;
+ ... (6 more added lines; see GitHub link above)
```

#### 921. `bundles/bloxd.io/main.js` (Changed code · before: `L15104` → after: `L37747-L37758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37747-L37758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37747-L37758) · [Before (L15104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15104)

```diff
-           const Fz = ["Today", "This week", "All Time"];
+         },
+         1628: (TT, kT, cT) => {
+           cT.d(kT, {
+             c: () => yT,
+             e: () => xT
+           });
+           var lT = cT(71),
+             MT = cT(1535),
+             KT = cT(1530);
+           const OT = {
+             isPagePath: !0
+           };
```

#### 922. `bundles/bloxd.io/main.js` (Changed code · before: `L15107-L15109` → after: `L37761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R37761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/ba76399e3292e16c00bb712ea1abdbb16d03433e...build/bloxd.io/bcgkc.38229551#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L37761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bcgkc.38229551/bundles/bloxd.io/main.js#L37761) · [Before (L15107-L15109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/ba76399e3292e16c00bb712ea1abdbb16d03433e/bundles/bloxd.io/main.js#L15107-L15109)

```diff
-             let zv = 2166136261;
-             for (let Pv = 0; Pv < vv.length; Pv++) zv ^= vv.charCodeAt(Pv), zv = Math.imul(zv, 16777619);
-             return (zv >>> 0).toString(36)
+             return !0 === (null === TT || void 0 === TT ? void 0 : TT.isPagePath)
```
