# Changed — Bundle Modifications Report (Part 032 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `32 / 82` (**303** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 031](part-031.md) · [Part 033 →](part-033.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (408 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 124. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5153-L5154` → after: `L4377-L4382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4377-L4382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4377-L4382) · [Before (L5153-L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5153-L5154)

```diff
-     function eK(ee, ie) {
-       return `${ee}\x1f${ie}`
+     function YW(WW, iW, OW) {
+       const [mW, EW] = WW.arm ? SW[WW.arm] : [0, 0], NW = Math.round(iW * OW);
+       return {
+         left: sW(WW.x + mW * NW, OW),
+         top: sW(WW.y + EW * NW, OW)
+       }
```

#### 125. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5157-L5158` → after: `L4385-L4390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4385-L4390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4385-L4390) · [Before (L5157-L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5157-L5158)

```diff
-     function iK(ee, ie) {
-       return !(0, aH.P)(ie) && !(0, aH.P)(ee) && ie in ee
+     function yW(WW) {
+       return WW.arm ? {
+         "data-arm": WW.arm,
+         "data-x": WW.x,
+         "data-y": WW.y
+       } : {}
```

#### 126. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5160-L5161` → after: `L4392-L4393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4392-L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4392-L4393) · [Before (L5160-L5161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5160-L5161)

```diff
-     const HK = (0, ye.memo)((function(ee) {
-       var ie, He;
+ 
+     function TW(WW) {
```

#### 127. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5163` → after: `L4395-L4400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4395-L4400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4395-L4400) · [Before (L5163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5163)

```diff
-         show: be
+         settings: iW,
+         inPreview: OW,
+         inEditor: mW,
+         pressed: LW = !1,
+         spread: wW,
+         spreadRef: tW
```

#### 128. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5165-L5492` → after: `L4402-L4412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4402-L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4402-L4412) · [Before (L5165-L5492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5165-L5492)

```diff
-       const Ke = (0, iH.g)("players", FK),
-         Ue = (0, iH.g)("players", JK),
-         oe = (0, ub.d)(),
-         [qe, fe] = (0, ye.useState)({
-           shopInfo: {},
-           userInputsPerItem: {},
-           redDotInfo: QM.fromShopInfo({}),
-           currencyAmounts: {},
-           selectedCategoryKey: null,
-           onBoughtInfo: null,
-           awaitingPurchase: !1
-         }),
-         pe = (0, ye.useRef)(""),
-         Xe = (0, ye.useRef)(null),
-         Be = (0, ye.useRef)(null),
-         Ee = (0, ye.useRef)(0),
- ... (312 more removed lines; see GitHub link above)
+       const ZW = (0, NW.useRef)(null),
+         {
+           box: AW,
+           dpr: bW
+         } = function(WW) {
+           const [iW, OW] = (0, NW.useState)({
+             box: {
+               left: 0,
+               top: 0,
+               width: 0,
+               height: 0
```

#### 129. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5494-L5530` → after: `L4414-L4427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4414-L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4414-L4427) · [Before (L5494-L5530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5494-L5530)

```diff
-             children: [qe.redDotInfo.itemHasRedDot(Se, ee) && (0, Re.jsx)(Fe.e, {
-               top: "-6px",
-               right: "-6px"
-             }), Ue.badge && (0, Re.jsx)("div", {
-               className: "ShopBadgeContainer",
-               children: (0, Re.jsx)("div", {
-                 className: Me()("ShopBadgeMain", Ue.badge.type),
-                 children: (0, Re.jsx)(ab.e, {
-                   text: Ue.badge.text
-                 })
-               })
-             }), (0, Re.jsx)("div", {
-               className: "ShopItemLeft",
-               children: Ue.image && (0, Re.jsx)(yK, {
-                 item: Ue,
-                 minWidth: 5,
- ... (21 more removed lines; see GitHub link above)
+             dpr: 1
+           });
+           return (0, NW.useLayoutEffect)((() => {
+             const iW = WW.current;
+             if (!iW) return;
+             const mW = () => {
+               const WW = iW.getBoundingClientRect(),
+                 mW = window.devicePixelRatio || 1;
+               OW((iW => iW.dpr === mW && iW.box.left === WW.left && iW.box.top === WW.top && iW.box.width === WW.width && iW.box.height === WW.height ? iW : {
+                 box: {
+                   left: WW.left,
+                   top: WW.top,
+                   width: WW.width,
+                   height: WW.height
```

#### 130. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5532-L5640` → after: `L4429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4429) · [Before (L5532-L5640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5532-L5640)

```diff
-                 children: [(0, Re.jsx)(KK, {
-                   item: Ue,
-                   currInput: oe,
-                   updateInput: ie => {
-                     ((ee, ie, He) => {
-                       const ye = eK(ee, ie),
-                         be = {
-                           ...qe.userInputsPerItem
-                         };
-                       be[ye] = He, ce({
-                         userInputsPerItem: be
-                       })
-                     })(Se, ee, ie)
-                   },
-                   onSubmit: ee => {
-                     Xe(ee)
- ... (93 more removed lines; see GitHub link above)
+                 dpr: mW
```

#### 131. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5642-L5704` → after: `L4431-L4447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4431-L4447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4431-L4447) · [Before (L5642-L5704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5642-L5704)

```diff
-             })]
-           }), (0, Re.jsxs)("div", {
-             className: "MenuBody ShopMenuBody",
-             children: [se && (0, Re.jsx)(rM, {
-               show: be,
-               shopInfo: qe.shopInfo,
-               selectedCategoryKey: Se,
-               buy: (ee, ie, He) => {
-                 ve(ee, ie, He)
-               },
-               canAfford: ne,
-               message: qe.onBoughtInfo
-             }), null === Ie && (0, Re.jsxs)(Re.Fragment, {
-               children: [(0, Re.jsx)("div", {
-                 className: Me()("ShopOnBoughtInfo", {
-                   ShopOnBoughtInfoShow: null !== qe.onBoughtInfo
- ... (47 more removed lines; see GitHub link above)
+             };
+             mW();
+             const EW = new ResizeObserver(mW);
+             return EW.observe(iW), window.addEventListener("resize", mW), window.addEventListener("scroll", mW, !0), () => {
+               EW.disconnect(), window.removeEventListener("resize", mW), window.removeEventListener("scroll", mW, !0)
+             }
+           }), [WW]), iW
+         }(ZW),
+         jW = (0, NW.useRef)(bW);
+       jW.current = bW;
+       const UW = cW(iW, bW, LW && iW.growOnClick ? lW : 1),
+         kW = function(WW, iW, OW) {
+           const mW = Math.round((WW.left + WW.width / 2) * OW - iW / 2),
+             EW = Math.round((WW.top + WW.height / 2) * OW - iW / 2);
+           return {
+             x: mW / OW - WW.left,
+ ... (1 more added lines; see GitHub link above)
```

#### 132. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5706-L5731` → after: `L4449-L4466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4449-L4466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4449-L4466) · [Before (L5706-L5731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5706-L5731)

```diff
-         })
-       });
-       var Fe, Je;
-       if ((0, Vb.e)(be)) return (0, Re.jsx)("div", {
-         className: "ShopBlock",
-         style: {
-           minWidth: `${He}rem`,
-           height: "0",
-           minHeight: `${ye}rem`
-         },
-         children: (0, Re.jsx)(Vb.c, {
-           itemName: be,
-           amount: null !== (Fe = ie.amount) && void 0 !== Fe ? Fe : 0,
-           amountFontSize: ye / 4 + "rem",
-           enchantmentTier: null === (Je = ie.enchant) || void 0 === Je ? void 0 : Je.tier
-         })
- ... (10 more removed lines; see GitHub link above)
+         }(AW, UW.cell, bW),
+         sW = (0, PW.m)(iW.color),
+         SW = (0, PW.m)(iW.outlineColor),
+         TW = (0, NW.useRef)(0);
+       (0, NW.useLayoutEffect)((() => {
+         if (tW) return tW.current = WW => {
+           var iW;
+           TW.current = WW, null === (iW = ZW.current) || void 0 === iW || iW.querySelectorAll("[data-arm]").forEach((iW => {
+             Object.assign(iW.style, YW(function(WW) {
+               return {
+                 x: Number(WW.dataset.x),
+                 y: Number(WW.dataset.y),
+                 arm: WW.dataset.arm
+               }
+             }(iW), WW, jW.current))
+           }))
+ ... (2 more added lines; see GitHub link above)
```

#### 133. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5733-L5746` → after: `L4468-L4475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4468-L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4468-L4475) · [Before (L5733-L5746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5733-L5746)

```diff
-       })
-     }
- 
-     function bK(ee) {
-       let {
-         image: ie,
-         minWidth: He
-       } = ee;
-       const {
-         gameNameWithVariation: ye
-       } = (0, iH.k)("connectedGame"), be = ie.endsWith(".jpg");
-       return (0, Re.jsx)("img", {
-         className: Me()({
-           ShopPixelImage: !be
+       }), [tW]);
+       const JW = null !== wW && void 0 !== wW ? wW : TW.current;
+       return (0, xW.jsx)("div", {
+         ref: ZW,
+         className: EW()("CrosshairShapes", {
+           CrosshairInPreview: OW,
+           CrosshairInEditor: mW || OW,
+           CrosshairSpreads: void 0 !== tW
```

#### 134. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5748-L5769` → after: `L4477-L4478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4477-L4478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4477-L4478) · [Before (L5748-L5769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5748-L5769)

```diff
-         style: {
-           width: `${be?1.6*He:He}rem`,
-           height: "auto",
-           fontSize: "1.25rem"
-         },
-         src: `/textures/games/${(0,Le.Xb)(ye)}/${ie}`,
-         alt: ie,
-         draggable: !1
-       })
-     }
- 
-     function MK(ee) {
-       let {
-         item: ie,
-         cost: He,
-         currencyAmounts: ye
- ... (6 more removed lines; see GitHub link above)
+         children: (0, xW.jsx)("div", {
+           className: "CrosshairShapesOrigin",
```

#### 135. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5771` → after: `L4480-L4482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4480-L4482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4480-L4482) · [Before (L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5771)

```diff
-             color: ye[ie.currency].iconColour
+             left: kW.x,
+             top: kW.y,
+             opacity: iW.opacity / 100
```

#### 136. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5773-L5780` → after: `L4484-L4500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4484-L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4484-L4500) · [Before (L5773-L5780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5773-L5780)

```diff
-           className: "BuyItemIcon",
-           children: (0, Re.jsx)(oK, {
-             iconName: ye[ie.currency].icon
-           })
-         }), (0, Re.jsx)("div", {
-           className: "BuyItemCost",
-           children: (0, Re.jsx)(ab.e, {
-             text: Me
+           children: (0, xW.jsxs)("div", {
+             className: "CrosshairShapesPress",
+             children: [UW.ringOutline && (0, xW.jsx)("div", {
+               className: "CrosshairRing",
+               style: KW(UW.ringOutline, bW, SW)
+             }), UW.outlines.map(((WW, iW) => (0, xW.jsx)("div", {
+               className: "CrosshairPart",
+               ...yW(WW),
+               style: MW(WW, JW, bW, SW)
+             }, `o${iW}`))), UW.ring && (0, xW.jsx)("div", {
+               className: "CrosshairRing",
+               style: KW(UW.ring, bW, sW)
+             }), UW.fills.map(((WW, iW) => (0, xW.jsx)("div", {
+               className: "CrosshairPart",
+               ...yW(WW),
+               style: MW(WW, JW, bW, sW)
+ ... (1 more added lines; see GitHub link above)
```

#### 137. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5782` → after: `L4502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4502) · [Before (L5782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5782)

```diff
-         })]
+         })
```

#### 138. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5787-L5838` → after: `L4522-L4534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4522-L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4522-L4534) · [Before (L5787-L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5787-L5838)

```diff
-       let {
-         item: ie,
-         currInput: He,
-         updateInput: be,
-         onSubmit: Me
-       } = ee;
-       const {
-         t: Ue
-       } = (0, Ke.v)(), Fe = (0, ye.useRef)(null);
-       if ((0, ye.useEffect)((() => {
-           const ee = Fe.current;
-           ee && ee.value !== He && document.activeElement !== ee && (ee.value = null !== He && void 0 !== He ? He : "")
-         }), [He]), !ie.userInput) return null;
-       let Je = ie.userInput;
-       if (Xe.featureFlags.sanitizeShopInput && "text" === ie.userInput.type && (Je = {
-           type: "number",
- ... (36 more removed lines; see GitHub link above)
+       let iW = 90;
+       for (const OW of WW) iW = 31 * iW + OW & 255;
+       return iW
+     }
+     const xW = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
+       lW = BigInt(xW.length);
+ 
+     function AW(WW, iW) {
+       let OW = 0n;
+       for (const EW of WW) {
+         const WW = xW.indexOf(EW);
+         if (WW < 0) return null;
+         OW = OW * lW + BigInt(WW)
```

#### 139. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5840-L5853` → after: `L4536-L4539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4536-L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4536-L4539) · [Before (L5840-L5853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5840-L5853)

```diff
-       return "player" === Je.type ? (0, Re.jsx)(UK, {
-         userInput: Je,
-         currInput: He,
-         updateInput: be
-       }) : "color" === Je.type ? (0, Re.jsx)("div", {
-         className: "ShopItemUserInput ShopItemUserInputColor",
-         children: (0, Re.jsx)("input", {
-           type: "color",
-           value: He,
-           onChange: ee => {
-             be(ee.target.value)
-           }
-         })
-       }) : null
+       if (OW >> BigInt(8 * iW) !== 0n) return null;
+       const mW = [];
+       for (let EW = 0; EW < iW; EW++) mW.unshift(Number(0xffn & OW)), OW >>= 8n;
+       return mW
```

#### 140. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5857-L5885` → after: `L4543-L4565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4543-L4565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4543-L4565) · [Before (L5857-L5885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5857-L5885)

```diff
-       let {
-         userInput: ie,
-         currInput: He,
-         updateInput: ye
-       } = ee;
-       const be = (0, iH.k)("players"),
-         Me = (0, iH.k)("hiddenPlayerNames"),
-         Ke = (0, Pb.h)(be.ids, be.localId, ie);
-       return (0, Re.jsx)("div", {
-         className: "ShopItemUserInput ShopItemUserInputDropdown",
-         children: (0, Re.jsx)(Qi.e, {
-           options: Ke.map((ee => {
-             const {
-               name: ie
-             } = be.byId[ee];
-             return {
- ... (13 more removed lines; see GitHub link above)
+       let iW = "shapes" === WW.style ? 1 : 0;
+       NW.forEach(((OW, mW) => {
+         WW[OW] && (iW |= 1 << mW + 1)
+       }));
+       const OW = [iW];
+       for (const EW of LW) {
+         const iW = (0, mW.i)(EW, WW[EW]);
+         OW.push(iW >> 16 & 255, iW >> 8 & 255, 255 & iW)
+       }
+       for (const EW of PW) {
+         const {
+           min: iW,
+           step: NW
+         } = mW.e[EW];
+         OW.push(Math.round(((0, mW.i)(EW, WW[EW]) - iW) / NW))
+       }
+ ... (7 more added lines; see GitHub link above)
```

#### 141. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5889-L5892` → after: `L4569-L4573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4569-L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4569-L4573) · [Before (L5889-L5892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5889-L5892)

```diff
-       let {
-         ids: ie
-       } = ee;
-       return ie
+       for (const iW of WW.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${wW}})`, "gi"))) {
+         const WW = UW(AW(iW[1], cW));
+         if (WW) return WW
+       }
+       return null
```

#### 142. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5896-L5898` → after: `L4577-L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4577-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4577-L4594) · [Before (L5896-L5898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5896-L5898)

```diff
-       let {
-         localId: ie
-       } = ee;
+       if (!WW || WW.length !== cW || ZW(WW.slice(0, -1)) !== WW[WW.length - 1]) return null;
+       const iW = WW[0],
+         OW = {
+           ...mW.g,
+           style: 1 & iW ? "shapes" : "classic"
+         };
+       NW.forEach(((WW, mW) => {
+         OW[WW] = 0 !== (iW & 1 << mW + 1)
+       }));
+       let EW = 1;
+       for (const mW of LW) OW[mW] = WW[EW] << 16 | WW[EW + 1] << 8 | WW[EW + 2], EW += 3;
+       for (const NW of PW) {
+         const {
+           min: iW,
+           step: PW
+         } = mW.e[NW];
+ ... (2 more added lines; see GitHub link above)
```

#### 143. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5903-L5912` → after: `L4714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4714) · [Before (L5903-L5912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5903-L5912)

```diff
-       let {
-         iconName: ie
-       } = ee;
-       return ze.gameBridge.lookup("isItemName", ie) ? (0, Re.jsx)(Vb.c, {
-         itemName: ie,
-         amount: 1
-       }) : (0, Re.jsx)(Ue.e, {
-         name: ie,
-         className: "2x"
-       })
+       return LW(WW, EW)
```

#### 144. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5924-L5927` → after: `L4718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4718) · [Before (L5924-L5927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5924-L5927)

```diff
-       let {
-         show: ie
-       } = ee;
-       return ie ? (0, Re.jsx)(pK, {}) : null
+       return `#${WW.toString(16).padStart(6,"0")}`
```

#### 145. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5930-L5942` → after: `L4721-L4723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4721-L4723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4721-L4723) · [Before (L5930-L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5930-L5942)

```diff
-     function pK() {
-       const ee = (0, ub.d)();
-       return (0, Re.jsxs)(Re.Fragment, {
-         children: [(0, Re.jsx)(kK, {}), (0, Re.jsxs)(ye.Suspense, {
-           fallback: (0, Re.jsx)("div", {
-             className: "CharacterCustomisationLoading",
-             children: (0, Re.jsx)(Oe.b, {})
-           }),
-           children: [ee && (0, Re.jsx)(fK, {
-             leaderboard: (0, Re.jsx)(qK, {})
-           }), !ee && (0, Re.jsx)(qK, {})]
-         })]
-       })
+     function tW(WW) {
+       const iW = /^#?([0-9a-f]{6})$/i.exec(WW.trim());
+       return iW ? parseInt(iW[1], 16) : null
```

#### 146. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5944-L5955` → after: `L4725-L4737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4725-L4737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4725-L4737) · [Before (L5944-L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5944-L5955)

```diff
-     var XK = He(1553),
-       zK = He(2405),
-       BK = He(1768),
-       EK = He(3335),
-       gK = He(2854),
-       OK = He(1488),
-       dK = He(1441),
-       WK = He(3259),
-       tK = He(3269),
-       ZK = He(2382);
-     const wK = "storeRecentGiftRecipients",
-       DK = new Map;
+   },
+   35209: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => ZW,
+       g: () => xW
+     });
+     var mW = OW(62),
+       EW = OW(39),
+       NW = OW(35205),
+       PW = OW(35181);
+     const LW = "crosshairCode";
+     let cW = null;
+     const wW = new Set;
```

#### 147. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5958` → after: `L4740-L4741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4740-L4741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4740-L4741) · [Before (L5958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5958)

```diff
-       try {
+       if (null === cW) {
+         var WW;
```

#### 148. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5960-L5965` → after: `L4743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4743) · [Before (L5960-L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5960-L5965)

```diff
-         return Array.isArray(ee) ? ee.filter((ee => "string" === typeof(null === ee || void 0 === ee ? void 0 : ee.name) && ee.name.length > 0)).map((ee => ({
-           name: ee.name,
-           cosmetics: ee.cosmetics && "object" === typeof ee.cosmetics ? ee.cosmetics : null
-         }))) : []
-       } catch {
-         return []
+         cW = null !== (WW = "string" === typeof iW ? (0, NW.e)(iW) : null) && void 0 !== WW ? WW : PW.g
```

#### 149. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5969-L5977` → after: `L4748-L4751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4748-L4751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4748-L4751) · [Before (L5969-L5977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5969-L5977)

```diff
-     function AK(ee, ie) {
-       var He;
-       const [be, Me] = (0, ye.useState)(""), [Ke, Ue] = (0, ye.useState)("search"), [Fe, Je] = (0, ye.useState)(null), [oe, Re] = (0, ye.useState)(null), ke = (0, ye.useRef)(null), qe = (0, ye.useRef)(null);
-       (0, ye.useEffect)((() => () => {
-         ke.current && clearTimeout(ke.current)
-       }), []), (0, ye.useEffect)((() => {
-         ie || pe()
-       }), [ie]);
-       const fe = null !== (He = null === Fe || void 0 === Fe ? void 0 : Fe.name) && void 0 !== He ? He : null;
+     function ZW(WW) {
+       cW = WW, (0, PW.q)(WW) ? EW.i.removeItem(LW) : EW.i.setItem(LW, (0, NW.h)(WW));
+       for (const iW of wW) iW()
+     }
```

#### 150. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5979-L5981` → after: `L4753-L4780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4753-L4780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4753-L4780) · [Before (L5979-L5981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5979-L5981)

```diff
-       function Te() {
-         ke.current && (clearTimeout(ke.current), ke.current = null)
-       }
+     function xW() {
+       const [WW, iW] = (0, mW.useState)(tW);
+       return (0, mW.useEffect)((() => {
+         const WW = () => {
+           iW(tW())
+         };
+         return WW(), OW = WW, wW.add(OW), () => {
+           wW.delete(OW)
+         };
+         var OW
+       }), []), WW
+     }
+   },
+   39244: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => wW,
+ ... (12 more added lines; see GitHub link above)
```

#### 151. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5983-L5992` → after: `L4782-L4792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4782-L4792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4782-L4792) · [Before (L5983-L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5983-L5992)

```diff
-       function pe() {
-         Te(), Me(""), Ue("search"), Je(null)
-       }(0, ye.useEffect)((() => {
-         if (null === fe || ee === De.NULL_USER_CONTEXT) return;
-         const ie = fe.toLowerCase();
-         if (ie === ee.getPlayerName().toLowerCase()) return void Re({
-           name: fe,
-           result: {
-             giftRecipientFound: !1,
-             giftRecipientError: "store:giftRecipientIsYou"
+     function wW() {
+       const WW = EW,
+         iW = NW,
+         OW = WW - iW / 2,
+         mW = (2 * WW - 2 * iW) / (2 * cW - 1),
+         PW = [];
+       for (const EW of [-OW, OW])
+         for (const NW of [-OW, OW])
+           for (let OW = 0; OW < cW; OW++) {
+             const LW = -WW + iW + mW * (2 * OW + .5);
+             PW.push([mW, iW, iW, LW, EW, NW]), PW.push([iW, mW, iW, EW, LW, NW]), PW.push([iW, iW, mW, EW, NW, LW])
```

#### 152. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L5994-L6022` → after: `L4794-L4829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4794-L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4794-L4829) · [Before (L5994-L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L5994-L6022)

```diff
-         });
-         const He = DK.get(ie);
-         if (He) return void Re({
-           name: fe,
-           result: He
-         });
-         let ye = !1;
-         return async function(ee, ie) {
-           try {
-             const He = await (0, De.postJsonWithMetricsCookiesAndJsonResponse)(`${Pi.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
-               giftRecipientName: ie
-             }, {
-               retries: 1
-             }, ee.getMetricsCookies());
-             if ("boolean" !== typeof(null === He || void 0 === He ? void 0 : He.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(He)}`);
-             return He
- ... (13 more removed lines; see GitHub link above)
+       for (const EW of [-OW, OW])
+         for (const WW of [-OW, OW])
+           for (const mW of [-OW, OW]) PW.push([iW, iW, iW, EW, WW, mW]);
+       return PW
+     }
+   },
+   5424: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => tW
+     });
+     var mW = OW(25),
+       EW = OW(27),
+       NW = OW(1294),
+       PW = OW(3866);
+     const LW = 3e4,
+       cW = 1e3;
+ ... (20 more added lines; see GitHub link above)
```

#### 153. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6024-L6025` → after: `L4831-L4910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4831-L4910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4831-L4910) · [Before (L6024-L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6024-L6025)

```diff
-         })), () => {
-           ye = !0
+         }))
+       }))
+     }
+   },
+   35093: (WW, iW, OW) => {
+     function mW(WW, iW) {
+       return 0 === WW.length ? 0 : WW[Math.min(WW.length - 1, Math.floor(iW * WW.length))]
+     }
+ 
+     function EW(WW) {
+       return WW.toFixed(1)
+     }
+     OW.d(iW, {
+       c: () => EW,
+       d: () => mW
+     })
+ ... (64 more added lines; see GitHub link above)
```

#### 154. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6027-L6031` → after: `L4912-L4924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4912-L4924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4912-L4924) · [Before (L6027-L6031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6027-L6031)

```diff
-       }), [fe, ee]);
-       const Xe = (0, ye.useMemo)((() => {
-         const ee = be.trim();
-         if (!ee) return {
-           status: "none"
+       }
+       applied(WW, iW, OW) {
+         const mW = this.jobs.get(iW);
+         this.jobs.delete(iW), void 0 !== mW && this.show(WW, mW, OW, (WW => WW.meshJobId === iW))
+       }
+       emptied(WW, iW) {
+         const OW = {
+           sentAt: iW,
+           receivedAt: iW,
+           ahead: 0,
+           inFlight: 0,
+           aZ: 0,
+           jobMs: 0
```

#### 155. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6033-L6035` → after: `L4926-L4946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4926-L4946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4926-L4946) · [Before (L6033-L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6033-L6035)

```diff
-         if (!Fe || Fe.name !== ee || (null === oe || void 0 === oe ? void 0 : oe.name) !== Fe.name) return {
-           status: "pending",
-           name: ee
+         this.show(WW, OW, iW, (() => !0))
+       }
+       show(WW, iW, OW, mW) {
+         const EW = this.pending.get(WW);
+         if (!EW) return;
+         const NW = EW.filter((EW => !mW(EW) || (this.record(WW, EW.editAt, iW, OW), !1)));
+         NW.length > 0 ? this.pending.set(WW, NW) : this.pending.delete(WW)
+       }
+       wZ(WW) {
+         this.reported += WW, this === lW && this.reported >= PW && null !== AW && (AW(), AW = null)
+       }
+       record(WW, iW, OW, mW) {
+         const EW = {
+           totalMs: mW - iW,
+           slotMs: OW.sentAt - iW,
+           workerMs: OW.receivedAt - OW.sentAt,
+ ... (5 more added lines; see GitHub link above)
```

#### 156. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6037-L6047` → after: `L4948-L4956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4948-L4956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4948-L4956) · [Before (L6037-L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6037-L6047)

```diff
-         const ie = oe.result;
-         return !1 === ie.giftRecipientFound ? {
-           status: "error",
-           name: Fe.name,
-           error: ie.giftRecipientError
-         } : {
-           status: "found",
-           name: ie.giftRecipientName,
-           ownedPacks: ie.giftRecipientOwnedPacks,
-           hasSuperRank: ie.giftRecipientHasSuperRank,
-           isSubscriber: ie.giftRecipientIsSubscriber
+         if (this.edits[this.nextEdit] = EW, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(EW.totalMs), this.wZ(1), EW.totalMs < 100 || ++this.outliers > 5) return;
+         const PW = WW => Math.round(WW);
+         (0, NW.m)("remesh", `slow edit (${WW}) shown in ${PW(EW.totalMs)} ms: slot ${PW(EW.slotMs)}, worker ${PW(EW.workerMs)} (${EW.ahead} ahead, ${EW.inFlight}/${EW.aZ} in flight; job ${PW(EW.jobMs)}), apply ${PW(EW.applyMs)}`)
+       }
+       summarise(WW) {
+         const iW = (WW - this.windowStart) / 1e3;
+         for (const [OW, mW] of this.pending) {
+           const iW = mW.filter((iW => WW - iW.editAt <= 1e4));
+           this.gaveUp += mW.length - iW.length, this.wZ(mW.length - iW.length), iW.length > 0 ? this.pending.set(OW, iW) : this.pending.delete(OW)
```

#### 157. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6049-L6096` → after: `L4958-L4963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R4958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L4958-L4963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L4958-L4963) · [Before (L6049-L6096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6049-L6096)

```diff
-       }), [be, Fe, oe]);
-       (0, ye.useEffect)((() => {
-         "found" === Xe.status && "typed" === (null === Fe || void 0 === Fe ? void 0 : Fe.source) && qe.current !== Xe.name && (qe.current = Xe.name, (0, Xi.reportAnalyticsClick)({
-           id: "store.gift_recipient",
-           value: "typed"
-         }))
-       }), [Xe, Fe]);
-       const ze = (null === oe || void 0 === oe ? void 0 : oe.name) === (null === Fe || void 0 === Fe ? void 0 : Fe.name) ? null === oe || void 0 === oe ? void 0 : oe.result : null,
-         Be = !0 === (null === ze || void 0 === ze ? void 0 : ze.giftRecipientFound) ? ze.giftRecipientCosmetics : null;
-       return {
-         query: be,
-         via: Ke,
-         recipient: Xe,
-         recipientCosmetics: Be,
-         type: function(ee) {
-           Me(ee), Ue("search"), Te();
- ... (32 more removed lines; see GitHub link above)
+         for (const [OW, mW] of this.jobs) WW - mW.sentAt > (mW.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(OW);
+         if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
+           const WW = cW(this.roundTrips),
+             OW = cW(this.windowEdits),
+             mW = Math.max(0, this.outliers - 5);
+           (0, NW.m)("remesh", `${Math.round(this.frames/iW)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,EW.d)(WW,.5))} max ${Math.round((0,EW … [truncated]
```

#### 158. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6100-L6108` → after: `L5000-L5003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5000-L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L5000-L5003) · [Before (L6100-L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6100-L6108)

```diff
-     var YK = He(2379),
-       VK = He(5071),
-       aK = He(242),
-       cK = He(3136);
-     const xK = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
-     var LK = He(2337),
-       CK = He(602),
-       vK = He(2425),
-       uK = He(2749);
+     let lW = null,
+       AW = null,
+       bW = !1,
+       jW = null;
```

#### 159. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6110-L6119` → after: `L5005-L5008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5005-L5008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L5005-L5008) · [Before (L6110-L6119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6110-L6119)

```diff
-     function mK(ee) {
-       let {
-         cosmetics: ie
-       } = ee;
-       return (0, Re.jsx)("span", {
-         className: "StoreRecipientAvatar",
-         children: (0, Re.jsx)(vK.c, {
-           cosmetics: ie
-         })
-       })
+     function UW() {
+       return new Promise((WW => {
+         null !== lW && lW.reported >= PW ? WW() : AW = WW
+       }))
```

#### 160. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6122-L6137` → after: `L5011-L5017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5011-L5017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L5011-L5017) · [Before (L6122-L6137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6122-L6137)

```diff
-     function lK(ee, ie) {
-       var He, ye;
-       const be = null !== (He = ee.friend) && void 0 !== He ? He : {
-         isError: !1,
-         name: ee.name,
-         ranks: [],
-         cosmetics: null !== (ye = ee.cosmetics) && void 0 !== ye ? ye : {},
-         nameColour: CK.d,
-         location: {
-           status: "noGamePlayed"
-         }
-       };
-       return ie ? {
-         ...be,
-         cosmetics: ie
-       } : be
+     function kW() {
+       const WW = new ZW;
+       return lW = WW, (0, NW.l)("remesh", (() => WW.dump())), (0, NW.e)("remeshStats", (() => {
+         console.log(WW.stats())
+       })), bW || (bW = !0, (0, mW.c)((WW => {
+         (0, NW.m)("remesh", WW)
+       }), UW)), WW
```

#### 161. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6141-L6147` → after: `L5021-L5024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5021-L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L5021-L5024) · [Before (L6141-L6147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6141-L6147)

```diff
-       let {
-         pending: ie
-       } = ee;
-       return (0, Re.jsx)("span", {
-         className: "StoreRecipientLoader",
-         children: ie && (0, Re.jsx)(Oe.b, {})
-       })
+       const iW = kW();
+       jW = new xW(iW, WW), WW.bY.meshProbe = jW, WW.on("beforeRender", (() => {
+         iW.frame(performance.now())
+       }))
```

#### 162. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6150` → after: `L5027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L5027) · [Before (L6150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6150)

```diff
-     function nK(ee) {
+     function MW(WW, iW, OW) {
```

#### 163. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6152-L6173` → after: `L5029-L5116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5029-L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L5029-L5116) · [Before (L6152-L6173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6152-L6173)

```diff
-       let {
-         selfName: He,
-         giftRecipient: be,
-         suggestionsVersion: Fe,
-         pulseSignal: oe,
-         disabled: ke
-       } = ee;
-       const {
-         t: qe
-       } = (0, Ke.v)(), fe = (0, Ie.k)(), Te = (0, ye.useRef)(null), pe = (0, ye.useRef)(null), {
-         query: ze,
-         via: Be,
-         recipient: Ee,
-         recipientCosmetics: Oe
-       } = be, de = (0, ZK.i)(ze), We = (0, ye.useMemo)((() => {
-         const ee = Xe.featureFlags.useSocialFeatures ? fe.friends.filter((ee => !ee.isError)) : [];
- ... (6 more removed lines; see GitHub link above)
+       null === (mW = jW) || void 0 === mW || mW.edit(WW, iW, OW)
+     }
+   },
+   39374: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => tW
+     });
+     var mW = OW(39379),
+       EW = OW(39191),
+       NW = OW(2350),
+       PW = OW(2478),
+       LW = OW(37555),
+       cW = OW(2365),
+       wW = OW(39366);
+     let tW;
+     var ZW;
+ ... (72 more added lines; see GitHub link above)
```

#### 164. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6190-L6327` → after: `L5145-L5150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5145-L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L5145-L5150) · [Before (L6190-L6327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6190-L6327)

```diff
-       function ce(ee) {
-         var ie, He;
-         if (ke) return;
-         if (" " === ee.key || "Enter" === ee.key) return ee.preventDefault(), void ee.currentTarget.click();
-         const ye = Array.from(null !== (ie = null === (He = pe.current) || void 0 === He ? void 0 : He.querySelectorAll("[role=radio]")) && void 0 !== ie ? ie : []),
-           be = ye.indexOf(ee.currentTarget);
-         let Me;
-         "ArrowRight" === ee.key || "ArrowDown" === ee.key ? Me = ye[(be + 1) % ye.length] : "ArrowLeft" === ee.key || "ArrowUp" === ee.key ? Me = ye[(be - 1 + ye.length) % ye.length] : "Home" === ee.key ? Me = ye[0] : "End" === ee.key && (Me = ye[ye.length - 1]), Me && (ee.preven … [truncated]
-       }(0, ye.useEffect)((() => {
-         var ee;
-         oe > Ye.current && !ke && (Ye.current = oe, null === (ee = Te.current) || void 0 === ee || ee.focus())
-       }), [oe, ke]);
-       const xe = "self" === de,
-         Le = null !== (ie = null === Ze || void 0 === Ze ? void 0 : Ze.name) && void 0 !== ie ? ie : null,
-         Ce = "error" === Ee.status ? Ee.error : null,
-         ve = "store:giftRecipientLookupFailed" === Ce;
- ... (122 more removed lines; see GitHub link above)
+     function PW(WW, iW, OW) {
+       return new EW.Color3(WW / 255, iW / 255, OW / 255)
+     }
+ 
+     function LW(WW, iW, OW, mW) {
+       return new EW.c(WW / 255, iW / 255, OW / 255, mW)
```

#### 165. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6340` → after: `L5154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L5154) · [Before (L6340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6340)

```diff
-       return "needsRecipient" === ee || "lookingUp" === ee || "gift" === ee || "recipientOwns" === ee || "recipientSharesOwned" === ee || "recipientSubscribed" === ee
+       return PW(WW[0], WW[1], WW[2])
```

#### 166. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6344-L6352` → after: `L5158-L33899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R5158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L5158-L33899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L5158-L33899) · [Before (L6344-L6352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6344-L6352)

```diff
-       const {
-         onKeyDown: ie,
-         ...He
-       } = (0, Je.R)();
-       return {
-         ...He,
-         "aria-label": ee,
-         onKeyDown: ee => {
-           ee.target === ee.currentTarget && (null === ie || void 0 === ie || ie(ee))
+       return LW(WW[0], WW[1], WW[2], WW[3])
+     }
+ 
+     function tW(WW, iW) {
+       if ((0, mW.K)(iW.aW) || (WW.direction1._x = iW.aW[0], WW.direction1._y = iW.aW[1], WW.direction1._z = iW.aW[2]), (0, mW.K)(iW.rW) || (WW.direction2._x = iW.rW[0], WW.direction2._y = iW.rW[1], WW.direction2._z = iW.rW[2]), (0, mW.K)(iW.zW) || (WW.minSize = iW.zW), (0, mW.K)( … [truncated]
+         var OW;
+         const mW = iW.Wi,
+           EW = null !== (OW = WW.getColorGradients()) && void 0 !== OW ? OW : [];
+         if (EW.length === mW.length)
+           for (let WW = 0; WW < mW.length; WW++) EW[WW].gradient = mW[WW].timeFraction, EW[WW].color1 = wW(mW[WW].minColor), EW[WW].color2 = wW(mW[WW].maxColor);
+         else {
+           for (const iW of [...EW]) WW.removeColorGradient(iW.gradient);
+           for (const iW of mW) WW.addColorGradient(iW.timeFraction, wW(iW.minColor), wW(iW.maxColor))
+         }
+       }
+       if (!(0, mW.K)(iW.QW)) {
+ ... (28726 more added lines; see GitHub link above)
```

#### 167. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6612-L6690` → after: `L33973-L33976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R33973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L33973-L33976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L33973-L33976) · [Before (L6612-L6690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6612-L6690)

```diff
-     function qU(ee) {
-       var ie, He;
-       let {
-         wearer: be,
-         active: Ue,
-         tryOn: Fe = kU,
-         className: Je
-       } = ee;
-       const {
-         t: oe
-       } = (0, Ke.v)(), ke = (0, ye.useRef)(null), [qe] = (0, ye.useState)(cK.g), fe = function(ee) {
-         const [ie, He] = (0, ye.useState)(!1);
-         return (0, ye.useEffect)((() => {
-           const ie = new IntersectionObserver((ee => {
-             He(ee[ee.length - 1].isIntersecting)
-           }));
- ... (63 more removed lines; see GitHub link above)
+     function ZW(WW, iW, OW, mW) {
+       var EW, NW, PW;
+       const LW = tW[WW];
+       return null !== (EW = null === LW || void 0 === LW || null === (NW = LW.isDisabled) || void 0 === NW ? void 0 : NW.call(LW, iW)) && void 0 !== EW && EW || !OW || !mW && null !== (PW = null === LW || void 0 === LW ? void 0 : LW.devOnly) && void 0 !== PW && PW
```

#### 168. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6692-L6694` → after: `L33978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R33978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L33978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L33978) · [Before (L6692-L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6692-L6694)

```diff
-     var TU = He(4645);
- 
-     function pU(ee) {
+     cW.filter((WW => {
```

#### 169. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6696-L6771` → after: `L33980-L33981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R33980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L33980-L33981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L33980-L33981) · [Before (L6696-L6771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6696-L6771)

```diff
-       return null !== (ie = (0, fb.h)(ee)) && void 0 !== ie ? ie : fb.j[fb.j.length - 1]
-     }
- 
-     function XU(ee, ie) {
-       return ee.tiers.flatMap((ee => {
-         var He;
-         return null !== (He = ee[ie]) && void 0 !== He ? He : []
-       }))
-     }
- 
-     function zU(ee) {
-       return XU(ee, "hyper").filter((ee => "cosmetic" === ee.kind))
-     }
- 
-     function BU(ee, ie) {
-       const He = XU(ee, ie).find((ee => "xpBoost" === ee.kind));
- ... (60 more removed lines; see GitHub link above)
+       return !(null !== (iW = tW[WW]) && void 0 !== iW && iW.devOnly)
+     })), cW.filter((WW => !ZW(WW, !0, !0, !1)));
```

#### 170. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6774-L6795` → after: `L33984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R33984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L33984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L33984) · [Before (L6774-L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6774-L6795)

```diff
-       const {
-         t: ee
-       } = (0, Ke.v)();
-       return (0, Re.jsxs)("div", {
-         className: "HyperRankPerkTiles",
-         children: [(0, Re.jsx)(dU, {}), EU(ee).map((ee => (0, Re.jsxs)("div", {
-           className: "HyperRankPerkTile",
-           children: [(0, Re.jsx)("span", {
-             className: "HyperRankPerkIcon",
-             children: (0, Re.jsx)(Ue.e, {
-               name: ee.icon
-             })
-           }), (0, Re.jsxs)("div", {
-             className: "HyperRankPerkText",
-             children: [(0, Re.jsx)("b", {
-               children: ee.title
- ... (6 more removed lines; see GitHub link above)
+       return Object.fromEntries(NW.t.map((WW => [(0, PW.Zb)(WW), AW(WW, [`Mob ${WW} Spawn Egg`])])))
```

#### 171. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6799-L6865` → after: `L33988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R33988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L33988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L33988) · [Before (L6799-L6865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6799-L6865)

```diff
-       const {
-         t: ee,
-         selectedLanguage: ie
-       } = (0, Ke.v)(), He = pU(Date.now()), ye = zU(He), be = function(ee) {
-         return zU(ee).filter((ee => null !== (0, oU.t)(ee) || null !== (0, oU.x)(ee))).reverse()
-       }(He).slice(0, 4), Me = BU(He, "hyper"), Fe = BU(He, "free"), Je = (0, Ke.f)(ie.code, "store:battlePassTiersEnds", He.endsAtMs, {
-         month: "long",
-         day: "numeric"
-       });
-       return (0, Re.jsxs)("div", {
-         className: "HyperRankPerkTile HyperRankBattlePassPerk",
-         children: [(0, Re.jsx)("span", {
-           className: "HyperRankPerkIcon",
-           children: (0, Re.jsx)(Ue.e, {
-             name: "crown"
-           })
- ... (51 more removed lines; see GitHub link above)
+       return Object.fromEntries(NW.t.map((WW => [(0, PW._b)(WW), AW(WW, [`${WW} Mob Spawner Block`])])))
```

#### 172. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L6869-L7000` → after: `L33992-L33997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R33992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L33992-L33997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L33992-L33997) · [Before (L6869-L7000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L6869-L7000)

```diff
-       return Object.keys(ee.cosmetics).some((ee => ee in ie.cosmetics))
-     }
- 
-     function tU(ee) {
-       let {
-         wearer: ie
-       } = ee;
-       const {
-         t: He
-       } = (0, Ke.v)(), be = (0, ye.useMemo)((() => function(ee) {
-         const ie = pU(Date.now()).tiers.flatMap((ie => {
-           const He = ie.hyper;
-           if ("cosmetic" !== (null === He || void 0 === He ? void 0 : He.kind) || "profileEffect" === He.cosmeticKind || "pet" === He.cosmeticKind || null === (0, oU.t)(He)) return [];
-           const ye = (0, oU.p)(He);
-           return null !== ye && Object.keys(ye.cosmetics).length > 0 ? [{
-             id: He.id,
- ... (116 more removed lines; see GitHub link above)
+       const OW = NW.g.includes(WW);
+       return {
+         altNames: iW,
+         showOnlyInSearch: OW,
+         isDisabled: OW ? wW : void 0
+       }
```

#### 173. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7002-L7049` → after: `L33999-L34086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R33999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L33999-L34086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L33999-L34086) · [Before (L7002-L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7002-L7049)

```diff
- 
-     function PU(ee) {
-       let {
-         tierId: ie,
-         wearer: He,
-         onBack: ye,
-         cta: be,
-         recipient: Ue,
-         afterCta: Fe
-       } = ee;
-       const {
-         t: oe
-       } = (0, Ke.v)(), ke = "hyper" === (0, ue.k)(ie).look;
-       return (0, Re.jsxs)("div", {
-         className: Me()("StoreSuperRankDetail", {
-           StoreHyperRankDetail: ke
- ... (32 more removed lines; see GitHub link above)
+   },
+   39185: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => kW,
+       h: () => jW,
+       j: () => UW,
+       k: () => sW
+     });
+     var mW = OW(632),
+       EW = OW(643);
+     const NW = {
+       "Sun Panel": "Solar Panel",
+       "Shaft Hopper": "Forge Hopper"
+     };
+     const PW = {
+         ...NW,
+ ... (72 more added lines; see GitHub link above)
```

#### 174. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7053-L7082` → after: `L34089-L34100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34089-L34100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34089-L34100) · [Before (L7053-L7082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7053-L7082)

```diff
-     function YU(ee) {
-       let {
-         price: ie,
-         perks: He
-       } = ee;
-       const {
-         t: ye
-       } = (0, Ke.v)();
-       return (0, Re.jsxs)("div", {
-         className: "StoreSubscriptionTerms",
-         children: [He, (0, Re.jsx)("div", {
-           className: "SmallTextLight",
-           children: ye("payments:subscriptionRenewsMonthly", {
-             price: ie
-           })
-         }), (0, Re.jsxs)("div", {
- ... (14 more removed lines; see GitHub link above)
+     function wW(WW, iW) {
+       if (WW in PW) return PW[WW];
+       const OW = WW.indexOf("|");
+       if (-1 !== OW) {
+         var mW;
+         const EW = null !== (mW = null === iW || void 0 === iW ? void 0 : iW.rootName) && void 0 !== mW ? mW : WW.substring(0, OW);
+         if (EW in PW) {
+           const mW = iW ? iW.metaStr ? `|${iW.metaStr}` : "" : WW.substring(OW);
+           return `${PW[EW]}${mW}`
+         }
+       }
+       return WW
```

#### 175. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7084-L7086` → after: `L34102-L34115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34102-L34115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34102-L34115) · [Before (L7084-L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7084-L7086)

```diff
-     var VU = He(3375),
-       aU = He(3382),
-       cU = He(3307);
+ 
+     function tW(WW, iW) {
+       if (!iW) return void(WW.amount = null);
+       const OW = WW.amount;
+       null === OW || void 0 === OW ? WW.amount = 1 : Number.isInteger(OW) || (WW.amount = function(WW) {
+         const iW = "number" === typeof WW || "string" === typeof WW || "boolean" === typeof WW ? Number(WW) : NaN;
+         return iW > 0 && iW !== 1 / 0 ? Math.max(1, Math.floor(iW)) : 0
+       }(OW))
+     }
+     var ZW = OW(38195),
+       xW = OW(39189),
+       lW = OW(37992),
+       AW = OW(182),
+       bW = OW(38986);
```

#### 176. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7089-L7095` → after: `L34118-L34119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34118-L34119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34118-L34119) · [Before (L7089-L7095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7089-L7095)

```diff
-       const {
-         userContext: ie
-       } = (0, fe.b)(), {
-         purchaseUnderWay: He,
-         notice: be,
-         subscribe: Me
-       } = (0, cU.c)(), [Ke, Ue] = (0, ye.useState)(null), [Fe, Je] = (0, ye.useState)(0), oe = (0, kH.c)(), Re = ie !== De.NULL_USER_CONTEXT, ke = Re && (ie.mayBuy() || (0, Se.guestsMayBuy)()), qe = null !== Ke && Ke.loadedFor === ie ? Ke.offer : null, Te = null === be || void 0  … [truncated]
+       return WW && JSON.parse(JSON.stringify(WW))
+     }
```

#### 177. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7097-L7098` → after: `L34121-L34126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34121-L34126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34121-L34126) · [Before (L7097-L7098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7097-L7098)

```diff
-       function Xe() {
-         Je((ee => ee + 1))
+     function UW(WW, iW) {
+       return (0, xW.c)(ZW.n[WW], iW)
+     }
+     class kW {
+       constructor(WW, iW, OW) {
+         this.Hx = void 0, this.state = void 0, this.numSlots = void 0, this.items = void 0, this._selectedSlotI = 0, this.temporaryClone = null, this.updatesHeld = !1, this.heldUpdate = null, this.Hx = WW, this.state = iW, this.numSlots = OW, this.items = new Array(this.numSlots) … [truncated]
```

#### 178. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7100-L7105` → after: `L34128-L34165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34128-L34165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34128-L34165) · [Before (L7100-L7105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7100-L7105)

```diff
-       return (0, ye.useEffect)((() => {
-         void 0 !== pe.current && void 0 === Te && Xe(), pe.current = Te
-       }), [Te]), (0, ye.useEffect)((() => {
-         if (!Re) return;
-         let He = !1;
-         return async function(ee, ie) {
+       stringify() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items.length;
+         const OW = [];
+         for (let EW = WW; EW < iW; EW++)
+           if (this.items[EW]) {
+             var mW;
+             const {
+               name: WW,
+               amount: iW,
+               attributes: NW
+             } = this.items[EW];
+             OW.push({
+               name: null !== (mW = ZW.n[WW]) && void 0 !== mW && mW.keepMetaInChest ? WW : this.Hx.bloxd.getMetaInfo(WW).rootName,
+               amount: iW,
+               attributes: NW
+ ... (22 more added lines; see GitHub link above)
```

#### 179. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7107-L7116` → after: `L34167-L34228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34167-L34228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34167-L34228) · [Before (L7107-L7116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7107-L7116)

```diff
-             offering: He
-           } = await (0, Qe.getBillingClient)().getOfferings(ee), ye = null === He || void 0 === He ? void 0 : He.packages.find(re.isPricedPackage);
-           if (void 0 === ye) return {
-             kind: "unavailable"
-           };
-           if (!ie) return {
-             kind: "loaded",
-             pkg: ye,
-             preview: {
-               kind: "none"
+             name: iW,
+             amount: OW
+           } = WW, NW = UW(iW, WW.attributes);
+           NW.customAttributes || (NW.customAttributes = {}), this.items[LW] = {
+             name: iW,
+             amount: OW,
+             attributes: NW,
+             typeObj: this.Hx.bloxd.getItemTypeObj(iW)
+           }
+         }
+         this.update(!0, iW)
+       }
+       cloneZeroAlloc() {
+         const {
+           inventory: WW,
+           items: iW
+ ... (46 more added lines; see GitHub link above)
```

#### 180. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7119-L7123` → after: `L34245-L34267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34245-L34267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34245-L34267) · [Before (L7119-L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7119-L7123)

```diff
-           try {
-             return {
-               kind: "loaded",
-               pkg: ye,
-               preview: await (0, aU.e)(ye.productId)
+           EW -= Math.min(EW, AW.f.maxItemStackSize)
+         } while (EW > 0);
+         return EW !== WW.amount ? {
+           amountPickedUp: WW.amount - EW,
+           slotIdx: NW,
+           amountAddedToSlot: PW
+         } : 0 === EW ? {
+           amountPickedUp: WW.amount,
+           slotIdx: NW,
+           amountAddedToSlot: PW
+         } : OW
+       }
+       removeItem(WW, iW) {
+         return null !== this.items[WW] && (null === this.items[WW].amount ? this.items[WW] = null : (this.items[WW].amount <= 0 && console.error(new Error(`Found item with amount less than or equal to zero ${this.items[WW].name} ${this.items[WW].amount}`)), this.items[WW].amount  … [truncated]
+       }
+       removeItemName(WW, iW) {
+ ... (7 more added lines; see GitHub link above)
```

#### 181. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7125-L7139` → after: `L34269-L34294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34269-L34294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34269-L34294) · [Before (L7125-L7139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7125-L7139)

```diff
-           } catch (be) {
-             if ((0, aU.g)(be)) return {
-               kind: "unavailable"
-             };
-             throw be
-           }
-         }(ee, ke).catch((ie => (console.error(`Billing: loading the ${ee} subscription or its preview failed:`, ie), {
-           kind: "loadFailed"
-         }))).then((ee => {
-           He || Ue((He => "loadFailed" === ee.kind && (null === He || void 0 === He ? void 0 : He.loadedFor) === ie ? He : {
-             loadedFor: ie,
-             offer: ee
-           }))
-         })), () => {
-           He = !0
+             if (EW.amount <= 0) this.items[mW] = null;
+             else {
+               if (EW.amount >= iW) return EW.amount -= iW, 0 === EW.amount && (this.items[mW] = null), this.update(!0), OW;
+               iW -= EW.amount, this.items[mW] = null
+             }
+           }
+         }
+         return this.update(!0), OW - iW
+       }
+       findItem(WW) {
+         for (let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; iW < this.items.length; iW++) {
+           const OW = this.items[iW];
+           if ((null === OW || void 0 === OW ? void 0 : OW.name) === WW) return iW
+         }
+         return null
+       }
+ ... (10 more added lines; see GitHub link above)
```

#### 182. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7141-L7152` → after: `L34296-L34349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34296-L34349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34296-L34349) · [Before (L7141-L7152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7141-L7152)

```diff
-       }), [ee, ie, Re, ke, Fe]), {
-         offer: qe,
-         purchaseUnderWay: He,
-         notice: be,
-         pendingIntentId: Te,
-         mountedRef: oe,
-         checkOut: async function(ee) {
-           const He = await Me(ee);
-           oe.current && ("unknownPackage" === He.kind && Ue({
-             loadedFor: ie,
-             offer: {
-               kind: "unavailable"
+         this.update(!0)
+       }
+       getFreeInventoryPosition() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mW.d.length;
+         return this.getFreeSlotBoundIdxs(0, this.items.length - WW)
+       }
+       getNumFreeSlots() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mW.d.length,
+           iW = 0;
+         for (let OW = 0; OW < this.items.length - WW; OW++) null === this.items[OW] && iW++;
+         return iW
+       }
+       getFreeSlotBoundIdxs(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items.length - mW.d.length;
+         for (let OW = WW; OW < Math.min(iW, this.items.length); OW++)
+           if (null === this.items[OW]) return OW;
+ ... (38 more added lines; see GitHub link above)
```

#### 183. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7154` → after: `L34351-L34368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34351-L34368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34351-L34368) · [Before (L7154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7154)

```diff
-           }), Xe())
+             if (OW.amount <= 0) {
+               console.error(new Error(`Found item ${OW.name} with amount ${OW.amount}`).stack);
+               continue
+             }
+             iW += OW.amount
+           } return iW
+       }
+       getHotBar() {
+         return this.items.slice(0, 10)
+       }
+       getItems() {
+         return this.items.slice(0, this.items.length)
+       }
+       getFreeSlotCount() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mW.d.length,
+           iW = 0;
+ ... (2 more added lines; see GitHub link above)
```

#### 184. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7160-L7279` → after: `L34380-L34385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34380-L34385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34380-L34385) · [Before (L7160-L7279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7160-L7279)

```diff
-       let {
-         onOfferedChange: ie
-       } = ee;
-       return (0, Se.usePurchasesAllowed)() && (0, Se.subscriptionsSold)() ? (0, Re.jsx)(CU, {
-         onOfferedChange: ie
-       }) : null
-     }
- 
-     function CU(ee) {
-       let {
-         onOfferedChange: ie
-       } = ee;
-       const {
-         t: He
-       } = (0, Ke.v)(), {
-         offer: be,
- ... (104 more removed lines; see GitHub link above)
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+         OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+         mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : EW.k;
+       return new kW(WW, MW(iW, (WW => {
+         null === OW || void 0 === OW || OW(WW)
+       })), mW)
```

#### 185. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7283-L7285` → after: `L34389-L34395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34389-L34395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34389-L34395) · [Before (L7283-L7285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7283-L7285)

```diff
-       return 1 === ie ? ee("store:oneDayLeft") : ee("store:daysLeft", {
-         days: ie
-       })
+       return {
+         rD: WW,
+         selectedItem: null,
+         inventory: null,
+         opWrapper: null,
+         onInventoryUpdate: iW
+       }
```

#### 186. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7287-L7308` → after: `L34397-L34490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34397-L34490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34397-L34490) · [Before (L7287-L7308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7287-L7308)

```diff
- 
-     function mU(ee) {
-       let {
-         daysLeft: ie,
-         totalDays: He,
-         urgent: ye
-       } = ee;
-       const {
-         t: be
-       } = (0, Ke.v)(), Ue = He > 0 ? Math.min(1, Math.max(.03, ie / He)) : 1;
-       return (0, Re.jsxs)("div", {
-         className: Me()("StoreSuperRankMeterArea", {
-           StoreSuperRankMeterUrgent: ye
-         }),
-         children: [(0, Re.jsx)("span", {
-           className: "StoreSuperRankDaysLeft",
- ... (6 more removed lines; see GitHub link above)
+   },
+   39379: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => tW
+     });
+     var mW = OW(632),
+       EW = OW(182),
+       NW = OW(39384),
+       PW = OW(643),
+       LW = OW(39185),
+       cW = OW(37992),
+       wW = OW(344);
+     class tW {
+       constructor(WW, iW, OW) {
+         this.callbacks = OW, this.Hx = void 0, this.playerInventory = void 0, this.EO = null, this.PO = null, this.LO = null, this.inCreative = !1, this.chestsWithUpdatesHeld = null, this.Hx = WW, this.playerInventory = iW
+       }
+ ... (78 more added lines; see GitHub link above)
```

#### 187. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7367-L7470` → after: `L34493-L34603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34493-L34603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34493-L34603) · [Before (L7367-L7470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7367-L7470)

```diff
-         }), De && (0, Re.jsx)("div", {
-           className: "StoreGiftRibbon"
-         }), (0, Re.jsxs)("div", {
-           className: "StoreTileContent",
-           children: [Je && (0, Re.jsx)("span", {
-             className: "StoreChip StoreChipGift",
-             title: Ye,
-             children: Ye
-           }), (0, Re.jsx)("div", {
-             className: "StoreTileTitle StoreSuperRankTitle",
-             children: (0, Re.jsx)(ue.h, {
-               tierId: (0, Ce.h)(We).id
-             })
-           }), De && (0, Re.jsx)("div", {
-             className: "StoreTilePitch",
-             children: Oe("store:giftPitch", {
- ... (88 more removed lines; see GitHub link above)
+         const xW = this.getFreeSlotBoundIdxs(WW, iW);
+         if (null !== xW) {
+           const WW = PW.amount;
+           return this.setItemAtIdx(xW, {
+             name: PW.name,
+             amount: tW,
+             typeObj: PW.typeObj,
+             attributes: (0, LW.h)(PW.attributes)
+           }), PW.amount -= tW, PW.amount <= 0 && (this.setItemAtIdx(OW, null), PW.amount < 0 && !(this.inCreative && !this.EO && OW >= this.playerInventory.numSlots) && console.error(new Error(`Moved too much item: tried to move ${tW} ${PW.name} from slot ${OW} that had ${WW} ${P … [truncated]
+             actualMovedAmt: wW,
+             primarySlotIdx: xW
+           }
+         }
+         return this.update(), null === wW ? NW : {
+           actualMovedAmt: wW - tW,
+           primarySlotIdx: ZW
+ ... (95 more added lines; see GitHub link above)
```

#### 188. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7472-L7478` → after: `L34605-L34636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34605-L34636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34605-L34636) · [Before (L7472-L7478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7472-L7478)

```diff
-     var rU = He(3369);
-     const QU = {
-         common: "StoreCharacterCardCommon",
-         rare: "StoreCharacterCardRare",
-         epic: "StoreCharacterCardEpic",
-         legendary: "StoreCharacterCardLegendary",
-         mythic: "StoreCharacterCardMythic"
+   },
+   39654: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => jW,
+       g: () => AW,
+       k: () => lW,
+       l: () => tW,
+       o: () => xW,
+       s: () => ZW,
+       t: () => PW
+     });
+     var mW = OW(2012),
+       EW = OW(4379),
+       NW = OW(3083);
+     const PW = 430,
+       LW = .5,
+ ... (16 more added lines; see GitHub link above)
```

#### 189. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7480-L7534` → after: `L34638-L34653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34638-L34653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34638-L34653) · [Before (L7480-L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7480-L7534)

```diff
-       eF = new Set(["wildSpirits"]);
- 
-     function iF(ee) {
-       var ie;
-       let {
-         tile: He,
-         design: be,
-         canGoLive: Fe,
-         live: Je,
-         busy: oe,
-         highlight: ke,
-         onLiveStart: qe,
-         onLiveEnd: fe,
-         onOpen: Te,
-         onAct: pe,
-         onNeedRecipient: Xe,
- ... (39 more removed lines; see GitHub link above)
+       jW = {
+         Player: {
+           handler: "Lifeform",
+           meshMetadata: {
+             type: "humanoidMesh",
+             isClientAuth: !0,
+             walkingLegSwingDuration: PW,
+             defaultRotationsPerSecond: .5,
+             childrenNodeParams: [{
+               nodeName: "HeadMesh",
+               softTolerance: tW,
+               hardTolerance: tW,
+               rotationsPerSecond: 1e3
+             }],
+             meshNamesWithVisibleBackFaces: ["HairMesh"],
+             meshNamesWithHairLayer: ["HeadMesh"]
```

#### 190. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7536-L7545` → after: `L34655-L34687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34655-L34687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34655-L34687) · [Before (L7536-L7545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7536-L7545)

```diff
-           children: [(0, Re.jsxs)("div", {
-             className: "StoreCharacterStage",
-             children: [(0, Re.jsx)("div", {
-               className: "StoreCharacterHalo"
-             }), (0, Re.jsx)("div", {
-               className: Me()("StoreCharacterFigure", {
-                 StoreCharacterFigureCovered: Ve
-               }),
-               style: {
-                 backgroundImage: `url(${(0,LK.u)(Ee)})`
+           armour: bW
+         },
+         Pig: {
+           handler: "Mob",
+           meshMetadata: {
+             type: "fourLeggedMesh",
+             isClientAuth: !1,
+             walkingLegSwingDuration: 160,
+             defaultRotationsPerSecond: LW,
+             childrenNodeParams: wW
+           }
+         },
+         Cow: {
+           handler: "Mob",
+           meshMetadata: {
+             type: "fourLeggedMesh",
+ ... (17 more added lines; see GitHub link above)
```

#### 191. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7547-L7551` → after: `L34689-L34702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34689-L34702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34689-L34702) · [Before (L7547-L7551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7547-L7551)

```diff
-             }), Je && void 0 !== de && (0, Re.jsx)(GU, {
-               character: de,
-               drawn: Ve,
-               onDrawn: () => {
-                 ae(!0)
+             }
+           }
+         },
+         Horse: {
+           handler: "SaddledMob",
+           meshMetadata: {
+             type: "fourLeggedMesh",
+             isClientAuth: !1,
+             walkingLegSwingDuration: 390,
+             defaultRotationsPerSecond: LW,
+             childrenNodeParams: wW,
+             meshGroupsWithDifferentAtlases: {
+               Saddle: {
+                 numTexturesInAtlas: 4
```

#### 192. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7553-L7634` → after: `L34704-L34781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34704-L34781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34704-L34781) · [Before (L7553-L7634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7553-L7634)

```diff
-             })]
-           }), (0, Re.jsx)("div", {
-             className: "StoreCharacterName",
-             children: null !== (ie = Oe.displayName) && void 0 !== ie ? ie : Ee
-           }), (0, Re.jsxs)("div", {
-             className: "StoreCharacterTierLine",
-             children: [(0, Re.jsx)(rK.b, {
-               tier: we
-             }), De && (0, Re.jsxs)("span", {
-               className: "StoreTierLabel StoreCharacterAnimated",
-               children: [(0, Re.jsx)(Ue.e, {
-                 name: "film"
-               }), Be("packPerks:badgeAnimated")]
-             })]
-           })]
-         }), (0, Re.jsx)("div", {
- ... (66 more removed lines; see GitHub link above)
+             }
+           }
+         },
+         Camel: {
+           handler: "SaddledMob",
+           meshMetadata: {
+             type: "fourLeggedMesh",
+             isClientAuth: !1,
+             walkingLegSwingDuration: 420,
+             defaultRotationsPerSecond: LW,
+             childrenNodeParams: wW,
+             meshGroupsWithDifferentAtlases: {
+               Saddle: {
+                 numTexturesInAtlas: 1
+               }
+             }
+ ... (62 more added lines; see GitHub link above)
```

#### 193. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7636-L7637` → after: `L34783-L34885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34783-L34885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34783-L34885) · [Before (L7636-L7637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7636-L7637)

```diff
-           onAct: () => {
-             Ke(ee.pack)
+           armour: {
+             atlasTexture: "Gold Watermelon Stag_Armour",
+             numTexturesInAtlas: 1,
+             textureOffsets: {
+               "BackLeftLeg|Armour": 1,
+               "BackRightLeg|Armour": 1,
+               "FrontLeftLeg|Armour": 1,
+               "FrontRightLeg|Armour": 1,
+               "Body|Armour": 0,
+               "Helmet|Armour": 0
+             },
+             isArmourVisibleByDefault: !0
+           }
+         },
+         Gorilla: yW(),
+         Wildcat: {
+ ... (87 more added lines; see GitHub link above)
```

#### 194. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7639-L7641` → after: `L34887-L34900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34887-L34900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34887-L34900) · [Before (L7639-L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7639-L7641)

```diff
-           onNeedRecipient: Ue,
-           onLogin: () => {
-             Fe(ee.pack)
+           armour: bW
+         },
+         67: {
+           handler: "Mob",
+           meshMetadata: {
+             type: "humanoidMesh",
+             isClientAuth: !1,
+             walkingLegSwingDuration: 400,
+             defaultRotationsPerSecond: LW,
+             childrenNodeParams: [{
+               nodeName: "HeadMesh",
+               softTolerance: cW,
+               hardTolerance: cW
+             }]
```

#### 195. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7643-L7677` → after: `L34902-L35139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R34902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L34902-L35139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L34902-L35139) · [Before (L7643-L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7643-L7677)

```diff
-         }, ee.pack)))
-       })
-     }
-     var yF = He(34936);
- 
-     function bF(ee) {
-       let {
-         title: ie
-       } = ee;
-       return (0, Re.jsx)("h2", {
-         className: "StoreSectionDivider",
-         children: (0, Re.jsx)("span", {
-           className: "StoreSectionDividerTitle",
-           children: ie
-         })
-       })
- ... (19 more removed lines; see GitHub link above)
+         },
+         "Bobino Musculino": {
+           handler: "Mob",
+           meshMetadata: {
+             type: "humanoidMesh",
+             isClientAuth: !1,
+             walkingLegSwingDuration: PW,
+             defaultRotationsPerSecond: .5,
+             childrenNodeParams: [{
+               nodeName: "HeadMesh",
+               softTolerance: tW,
+               hardTolerance: tW
+             }]
+           }
+         },
+         "Capitano Explovissimo": {
+ ... (222 more added lines; see GitHub link above)
```

#### 196. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7680-L7784` → after: `L35142-L35157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R35142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L35142-L35157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L35142-L35157) · [Before (L7680-L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7680-L7784)

```diff
-       let {
-         layout: ie,
-         mountAtOnce: He,
-         bundleGift: be,
-         superRankTotalDays: Me,
-         busy: Ue,
-         highlightItem: Fe,
-         onOpen: Je,
-         onAct: oe,
-         onNeedRecipient: ke,
-         onLogin: qe,
-         dailyDropTile: fe,
-         dealBanner: Te,
-         rankWearer: pe
-       } = ee;
-       const {
- ... (89 more removed lines; see GitHub link above)
+       return {
+         handler: "Mob",
+         meshMetadata: {
+           type: "humanoidMesh",
+           isClientAuth: !1,
+           walkingLegSwingDuration: 430,
+           defaultRotationsPerSecond: .35,
+           childrenNodeParams: [{
+             nodeName: "HeadMesh",
+             softTolerance: tW,
+             hardTolerance: null,
+             rotationsPerSecond: LW
+           }],
+           lifeformTypeForModelOverride: WW
+         }
+       }
```

#### 197. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7788-L7808` → after: `L35161-L35181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R35161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L35161-L35181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L35161-L35181) · [Before (L7788-L7808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7788-L7808)

```diff
-       let {
-         giftName: ie,
-         onChooseRecipient: He
-       } = ee;
-       const {
-         t: ye
-       } = (0, Ke.v)();
-       return ie ? (0, Re.jsxs)("span", {
-         className: "StoreDetailRecipient",
-         title: ye("store:giftFor", {
-           name: ie
-         }),
-         children: [ZK.c, " ", ye("store:giftFor", {
-           name: ie
-         })]
-       }) : (0, Re.jsxs)("div", {
- ... (5 more removed lines; see GitHub link above)
+       return {
+         handler: "Mob",
+         meshMetadata: {
+           type: "humanoidMesh",
+           isClientAuth: !1,
+           walkingLegSwingDuration: 430,
+           defaultRotationsPerSecond: .35,
+           childrenNodeParams: [{
+             nodeName: "HeadMesh",
+             softTolerance: (0, mW.i)(60),
+             hardTolerance: null,
+             rotationsPerSecond: LW
+           }, {
+             nodeName: "LowerBody",
+             softTolerance: (0, mW.i)(60),
+             hardTolerance: null,
+ ... (5 more added lines; see GitHub link above)
```

#### 198. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7812-L7816` → after: `L35185-L35200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R35185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L35185-L35200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L35185-L35200) · [Before (L7812-L7816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7812-L7816)

```diff
-       return (0, Ce.e)(Date.now()) ? (0, Re.jsx)(oF, {
-         ...ee
-       }) : (0, Re.jsx)(JF, {
-         ...ee
-       })
+       return {
+         handler: "Mob",
+         meshMetadata: {
+           type: "humanoidMesh",
+           isClientAuth: !1,
+           walkingLegSwingDuration: 490,
+           defaultRotationsPerSecond: LW,
+           childrenNodeParams: [{
+             nodeName: "HeadMesh",
+             softTolerance: tW,
+             hardTolerance: null
+           }],
+           meshNamesWithVisibleBackFaces: ["BodyMesh"],
+           lifeformTypeForModelOverride: WW
+         }
+       }
```

#### 199. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7820-L7869` → after: `L35204-L35219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R35204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L35204-L35219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L35204-L35219) · [Before (L7820-L7869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7820-L7869)

```diff
-       let {
-         state: ie,
-         wearer: He,
-         mode: ye,
-         giftName: be,
-         busy: Me,
-         highlight: Ue,
-         purchaseError: Fe,
-         onBack: Je,
-         onChooseRecipient: oe,
-         onAct: ke,
-         onLogin: qe
-       } = ee;
-       const {
-         t: fe
-       } = (0, Ke.v)(), Te = ki("gift" !== ye);
- ... (34 more removed lines; see GitHub link above)
+       return {
+         handler: "Mob",
+         meshMetadata: {
+           type: "humanoidMesh",
+           isClientAuth: !1,
+           walkingLegSwingDuration: 490,
+           defaultRotationsPerSecond: LW,
+           childrenNodeParams: [{
+             nodeName: "HeadMesh",
+             softTolerance: tW,
+             hardTolerance: null
+           }],
+           meshNamesWithVisibleBackFaces: ["BodyMesh"],
+           lifeformTypeForModelOverride: WW
+         }
+       }
```

#### 200. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7873-L7971` → after: `L35223-L35238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R35223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L35223-L35238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L35223-L35238) · [Before (L7873-L7971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7873-L7971)

```diff
-       let {
-         state: ie,
-         daysLeft: He,
-         wearer: be,
-         mode: Me,
-         giftName: Ue,
-         busy: Fe,
-         highlight: Je,
-         purchaseError: oe,
-         onBack: ke,
-         onChooseRecipient: qe,
-         onAct: Te,
-         onLogin: pe
-       } = ee;
-       const {
-         t: Xe
- ... (83 more removed lines; see GitHub link above)
+       return {
+         handler: "CollaredMob",
+         meshMetadata: {
+           type: "fourLeggedMesh",
+           isClientAuth: !1,
+           walkingLegSwingDuration: 350,
+           defaultRotationsPerSecond: LW,
+           childrenNodeParams: wW,
+           meshGroupsWithDifferentAtlases: {
+             Collar: {
+               numTexturesInAtlas: "default"
+             }
+           },
+           lifeformTypeForModelOverride: WW,
+           heldItemPositionParams: {
+             itemOffset: [0, -.1, 0]
```

#### 201. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L7973-L8015` → after: `L35240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R35240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L35240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L35240) · [Before (L7973-L8015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L7973-L8015)

```diff
-         },
-         className: "StoreTempSubscribe SmallTextBold"
-       });
-       const fe = (0, Mi.h)(ke),
-         Te = (0, Xe.isMobileApp)() && (0, Re.jsx)(YU, {
-           price: fe,
-           perks: (0, Re.jsx)(vU, {})
-         });
-       if (Fe && "refund" === qe.kind) {
-         const {
-           refundedMs: ie,
-           forfeitedMs: ye,
-           premiumCurrency: be
-         } = qe, Me = ye + (0 === be ? ie : 0), [Ke, Fe] = RF("payments:subscribeRefundsGemRank", ie), [pe, Xe] = RF("payments:subscribeForfeitsGemRank", Me);
-         return (0, Re.jsxs)("div", {
-           className: "StoreTempSubscribe SmallTextBold",
- ... (27 more removed lines; see GitHub link above)
+         }
```

#### 202. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8039-L8081` → after: `L35245-L35263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R35245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L35245-L35263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L35245-L35263) · [Before (L8039-L8081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8039-L8081)

```diff
-       let {
-         state: ie,
-         view: He,
-         claiming: be,
-         onOpen: Ue
-       } = ee;
-       const {
-         t: oe
-       } = (0, Ke.v)(), ke = (0, ye.useRef)(null), qe = "ready" === He.kind;
-       return (0, IU.e)(ke, qe), (0, Re.jsxs)("div", {
-         ref: ke,
-         className: Me()("DailyDropTile", {
-           DailyDropTileReady: qe
-         }),
-         children: [qe && (0, Re.jsx)(Fe.e, {
-           top: "0.25rem",
- ... (27 more removed lines; see GitHub link above)
+       return {
+         handler: "SaddledMob",
+         meshMetadata: {
+           type: "fourLeggedMesh",
+           isClientAuth: !1,
+           walkingLegSwingDuration: 350,
+           defaultRotationsPerSecond: LW,
+           childrenNodeParams: wW,
+           lifeformTypeForModelOverride: WW,
+           meshGroupsWithDifferentAtlases: {
+             Saddle: {
+               numTexturesInAtlas: 1
+             }
+           },
+           heldItemPositionParams: {
+             rotation: [0, Math.PI, 0]
+ ... (3 more added lines; see GitHub link above)
```

#### 203. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8087-L8099` → after: `L35267-L35281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R35267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L35267-L35281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L35267-L35281) · [Before (L8087-L8099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8087-L8099)

```diff
-       return ee / (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 24) * 2 * Math.PI
-     }
- 
-     function BF(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
-       const ye = (ee / (2 * Math.PI / He) % He + He) % He;
-       let be = null,
-         Me = 1 / 0;
-       for (let Ke = 0; Ke < He; Ke++) {
-         if (!ie[Ke]) continue;
-         const ee = Math.abs(Ke - ye),
-           Ue = Math.min(ee, He - ee);
-         Ue < Me && (be = Ke, Me = Ue)
+       return {
+         handler: "SaddledMob",
+         meshMetadata: {
+           type: "fourLeggedMesh",
+           isClientAuth: !1,
+           walkingLegSwingDuration: 350,
+           defaultRotationsPerSecond: LW,
+           childrenNodeParams: wW,
+           lifeformTypeForModelOverride: WW,
+           meshGroupsWithDifferentAtlases: {
+             Saddle: {
+               numTexturesInAtlas: 1
+             }
+           }
+         }
```

#### 204. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8114-L8127` → after: `L35286-L35308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R35286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L35286-L35308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L35286-L35308) · [Before (L8114-L8127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8114-L8127)

```diff
-       if (0 === ee.width || 0 === ee.height) return !0;
-       const ie = document.createElement("canvas");
-       ie.width = gF, ie.height = gF;
-       const He = ie.getContext("2d", {
-         willReadFrequently: !0
-       });
-       if (!He) return !0;
-       He.drawImage(ee, 0, 0, gF, gF);
-       const {
-         data: ye
-       } = He.getImageData(0, 0, gF, gF);
-       for (let be = 3; be < ye.length; be += 4)
-         if (ye[be] > 0) return !1;
-       return !0
+       return {
+         handler: "SaddledMob",
+         meshMetadata: {
+           type: "humanoidMesh",
+           isClientAuth: !1,
+           walkingLegSwingDuration: 390,
+           defaultRotationsPerSecond: LW,
+           childrenNodeParams: [{
+             nodeName: "HeadMesh",
+             softTolerance: tW,
+             hardTolerance: null
+           }],
+           heldItemPositionParams: {
+             itemOffset: [0, .3, 0]
+           },
+           lifeformTypeForModelOverride: WW,
+ ... (7 more added lines; see GitHub link above)
```

#### 205. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8131-L8134` → after: `L35336-L35337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R35336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L35336-L35337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L35336-L35337) · [Before (L8131-L8134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8131-L8134)

```diff
-       const ie = document.createElement("canvas");
-       ie.width = ee.width, ie.height = ee.height;
-       const He = ie.getContext("2d");
-       return He ? (He.drawImage(ee, 0, 0), ie) : null
+       var iW;
+       return null !== (iW = PW[WW]) && void 0 !== iW ? iW : null
```

#### 206. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8138-L8146` → after: `L35392-L35394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R35392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L35392-L35394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L35392-L35394) · [Before (L8138-L8146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8138-L8146)

```diff
-       let {
-         cosmetics: ie
-       } = ee;
-       return (0, Re.jsx)("div", {
-         className: "DailyDropRevealHead",
-         children: (0, Re.jsx)(vK.c, {
-           cosmetics: ie
-         })
-       })
+       const iW = {};
+       for (const OW of WW) cW(OW, iW);
+       return iW
```

#### 207. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8150-L8156` → after: `L35398-L35399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R35398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L35398-L35399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L35398-L35399) · [Before (L8150-L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8150-L8156)

```diff
-       let {
-         worn: ie,
-         te: He,
-         Ze: be,
-         prompting: Fe,
-         className: Je
-       } = ee;
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       if ("string" === typeof WW) return;
```

#### 208. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8158-L8189` → after: `L35401-L36188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R35401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L35401-L36188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L35401-L36188) · [Before (L8158-L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8158-L8189)

```diff
-         t: oe
-       } = (0, Ke.v)(), ke = (0, ye.useRef)(null), [qe, fe] = (0, ye.useState)(null), [Te, pe] = (0, ye.useState)(!1), [Xe, ze] = (0, ye.useState)(!1), Be = (0, ye.useRef)([]), Ee = (0, ye.useRef)(null), ge = (0, ye.useRef)(0), de = (0, ye.useRef)(null), We = (0, ye.useRef)(!0), t … [truncated]
-         const ee = Ee.current,
-           ie = Be.current,
-           He = BF(ge.current, ie),
-           ye = null === He ? null : ie[He],
-           be = null === ee || void 0 === ee ? void 0 : ee.getContext("2d");
-         ee && ye && be && (ee.width === ye.width && ee.height === ye.height || (ee.width = ye.width, ee.height = ye.height), be.clearRect(0, 0, ee.width, ee.height), be.drawImage(ye, 0, 0))
-       }), []);
-       async function Ze(ee, ie) {
-         const He = performance.now();
-         let ye = 0;
-         for (const be of function() {
-             let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24;
-             const ie = [],
-               He = new Set;
- ... (16 more removed lines; see GitHub link above)
+         nodeName: OW,
+         collapsesTo: mW,
+         children: EW
+       } = WW;
+       if (mW && (iW[OW] = mW), EW)
+         for (const NW of EW) cW(NW, iW)
+     }
+   },
+   39648: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => EW
+     });
+     const mW = {
+       Pig: {
+         default: {
+           atlasIdx1: 0,
+ ... (772 more added lines; see GitHub link above)
```

#### 209. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8194-L8307` → after: `L36193-L36278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36193-L36278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36193-L36278) · [Before (L8194-L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8194-L8307)

```diff
-       function we(ee) {
-         var ie, He;
-         (null === (ie = de.current) || void 0 === ie ? void 0 : ie.pointerId) === ee.pointerId && (de.current = null, We.current || (ge.current = EF(ge.current, Be.current), te(), null === (He = ke.current) || void 0 === He || He.turnCamera(ge.current)))
-       }(0, ye.useEffect)((() => {
-         "stills" === qe && te()
-       }), [qe, te]), (0, ye.useEffect)((() => () => {
-         for (const ee of Be.current) ee && (ee.width = 0, ee.height = 0);
-         Be.current = []
-       }), []);
-       const De = Fe && !Xe,
-         Pe = De ? {
-           onPointerDown: ee => {
-             null === de.current && (ee.currentTarget.setPointerCapture(ee.pointerId), de.current = {
-               pointerId: ee.pointerId,
-               startX: ee.clientX,
-               startTurn: ge.current
- ... (98 more removed lines; see GitHub link above)
+     function EW(WW, iW) {
+       return mW[WW][iW]
+     }
+   },
+   39311: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => mW
+     });
+     const mW = ["head", "body", "shoes", "legs", "eyebrows", "eyes", "skin"]
+   },
+   38841: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => cW,
+       g: () => rW,
+       k: () => fW
+     });
+ ... (70 more added lines; see GitHub link above)
```

#### 210. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8323-L8360` → after: `L36282-L36290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36282-L36290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36282-L36290) · [Before (L8323-L8360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8323-L8360)

```diff
-       let {
-         drop: ie,
-         onClose: He
-       } = ee;
-       const {
-         t: be
-       } = (0, Ke.v)(), {
-         userContext: Fe
-       } = (0, fe.b)(), {
-         state: oe,
-         view: ke
-       } = (0, TH.w)(), [qe, Te] = (0, ye.useState)("closed"), [pe] = (0, ye.useState)((() => ({
-         ...Fe.getPlayerCosmetics()
-       }))), [Xe] = (0, ye.useState)((() => (0, TH.j)(ie, pe))), [ze, Be] = (0, ye.useState)(!1), [Ee, ge] = (0, ye.useState)(!1), [Oe] = (0, ye.useState)((() => null === oe ? Promise.resolve(null) : EH(oe))), [de, te] = (0, ye.useState)(null), Ze = (0, kH.c)(), {
-         gameState: we
-       } = (0, We.m)(["gameState"]);
- ... (22 more removed lines; see GitHub link above)
+       const iW = WW.ZZ;
+       TW = iW;
+       const OW = yW.length;
+       JW = new Uint8Array(OW), hW = new Int32Array(OW), HW = new Int8Array(OW), nW = new Uint8Array(OW);
+       for (let mW = 0; mW < OW; mW++) {
+         if (0 !== mW && void 0 === iW.metadatas[mW]) continue;
+         const OW = WW.getMetaInfo(mW),
+           EW = null === OW || void 0 === OW ? void 0 : OW.rot;
+         OW && Number.isInteger(OW.rootId) && !(Math.abs(OW.rootId) > 2147483647) && (null == EW || Number.isInteger(EW) && EW >= 0 && EW <= 127) && (JW[mW] = 1, hW[mW] = OW.rootId, HW[mW] = null !== EW && void 0 !== EW ? EW : 0, nW[mW] = OW.open ? 1 : 0)
```

#### 211. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8363-L8376` → after: `L36312-L36352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36312-L36352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36312-L36352) · [Before (L8363-L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8363-L8376)

```diff
-       function Pe(ee) {
-         null !== de && function(ee, ie) {
-           zH.i.setItem(ee.askedKey, !0), (0, RH.l)(), (0, TH.r)("daily_drop.remind", ie ? "yes" : "no"), ie && OH(ee.requester)
-         }(de, ee), He()
-       }(0, ye.useEffect)((() => {
-         (0, TH.r)("daily_drop.reveal_step", qe)
-       }), [qe]), (0, ye.useEffect)((() => {
-         const ee = wF[qe];
-         if (void 0 === ee) return;
-         const ie = setTimeout((() => {
-           Te(ZF[qe])
-         }), ee);
-         return () => {
-           clearTimeout(ie)
+     function fW(WW, iW, OW) {
+       WW.ZZ !== TW && dW(WW);
+       const EW = WW.Hx.EY.YG(iW).JiW,
+         NW = WW.getPlayerReader(iW),
+         PW = XW(WW, OW, tW, wW),
+         LW = WW.sF(EW, DW),
+         cW = LW[0],
+         ZW = LW[1],
+         xW = LW[2],
+         lW = ZW + mW.f.ZU,
+         AW = .5 * (OW.Mx.max[0] - OW.Mx.base[0]),
+         bW = 1e-4,
+         kW = AW - bW,
+         uW = AW + .25,
+         fW = AW + tW;
+       let CW = 0,
+ ... (25 more added lines; see GitHub link above)
```

#### 212. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8378-L8526` → after: `L36354-L36388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36354-L36388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36354-L36388) · [Before (L8378-L8526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8378-L8526)

```diff
-       }), [qe]);
-       const Ae = be(`dailyDrop:kind_${Xe.te}`),
-         Ye = oe && be("dailyDrop:collected", {
-           count: oe.collected.length,
-           total: oe.total
-         }),
-         Ve = "revealed" === qe || "shrinking" === qe,
-         ae = "equip" !== qe && "remind" !== qe;
-       return (0, Re.jsx)(tb.e, {
-         className: "DailyDropRevealScreen",
-         close: "remind" === qe ? () => {
-           Pe(!1)
-         } : He,
-         togglePointerLock: !1,
-         closeOnPressBackground: !1,
-         children: (0, Re.jsxs)("div", {
- ... (133 more removed lines; see GitHub link above)
+         if (TW & YW.jumpPad) {
+           zW = !0;
+           const WW = ZW - tW;
+           if (WW >= 0 && WW < UW) {
+             const WW = jW[MW];
+             WW > FW && (FW = WW)
+           }
+         }
+         if (TW & YW.conveyor && !Wi) {
+           Math.abs(ZW - (tW + KW[MW])) < SW && !(cW - kW > wW + 1 || cW + kW < wW || xW - kW > sW + 1 || xW + kW < sW) && (QW = MW, Wi = Math.floor(cW) === wW && Math.floor(xW) === sW)
+         }
+         if (dW) {
+           let iW, mW, EW;
+           if (1 === JW[MW]) iW = hW[MW], mW = HW[MW], EW = 1 === nW[MW];
+           else {
+             const OW = WW.getMetaInfo(MW);
+ ... (19 more added lines; see GitHub link above)
```

#### 213. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8530-L8549` → after: `L36393-L36403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36393-L36403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36393-L36403) · [Before (L8530-L8549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8530-L8549)

```diff
-       const {
-         t: He
-       } = (0, Ke.v)(), be = function(ee, ie) {
-         const {
-           state: He,
-           view: be
-         } = (0, TH.w)(), [Me, Ke] = (0, ye.useState)(!1), [Ue, Fe] = (0, ye.useState)(!1), [Je, oe] = (0, ye.useState)(null), Re = (0, ye.useRef)(null), ke = (0, ye.useRef)(!1), qe = ie && "ready" === (null === be || void 0 === be ? void 0 : be.kind);
-         (0, ye.useEffect)((() => {
-           ee ? qe && !ke.current && (ke.current = !0, (0, TH.r)("daily_drop.shown", "tile")) : ke.current = !1
-         }), [ee, qe]), (0, ye.useEffect)((() => {
-           ee || (Xe(), Fe(!1))
-         }), [ee]);
-         const fe = ee && null === Je && !(0, TH.o)(be);
-         (0, ye.useEffect)((() => {
-           fe && We.e.set({
-             openEverythingMenuName: Yi.r.CUSTOMISATION
- ... (4 more removed lines; see GitHub link above)
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+         mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       const EW = iW.Mx.base,
+         NW = iW.Mx.max,
+         PW = CW;
+       return PW[0] = EW[0] - OW, PW[1] = EW[1] - mW, PW[2] = EW[2] - OW, PW[3] = NW[0] + OW, PW[4] = NW[1] + mW, PW[5] = NW[2] + OW, IW(WW.Hx, PW)
+     }
+     const BW = [null, null, null, null].map((() => [0, 0, 0])),
+       qW = [null, null, null, null].map((() => [0, 0, 0])),
+       RW = [null, null, null, null].map((() => [0, 0, 0]));
+     const GW = [];
```

#### 214. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8551-L8599` → after: `L36405-L36425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36405-L36425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36405-L36425) · [Before (L8551-L8599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8551-L8599)

```diff
-         function Xe() {
-           null !== Re.current && (Re.current = null, oe(null))
-         }
-         return pe.current = ee, {
-           state: He,
-           view: be,
-           claiming: Me,
-           claimFailed: Ue,
-           reveal: Je,
-           open: async function() {
-             if (!Te.current) {
-               Te.current = !0, Ke(!0), Fe(!1);
-               try {
-                 const {
-                   state: ee,
-                   drop: ie
- ... (33 more removed lines; see GitHub link above)
+     function IW(WW, iW) {
+       const OW = WW.Wl;
+       let mW = 0;
+       const EW = ii(iW),
+         NW = OW[0],
+         PW = OW[1],
+         LW = OW[2],
+         cW = Math.floor(iW[1] + PW),
+         wW = Math.floor(iW[4] + PW),
+         tW = Math.floor(iW[1] + .5 * (iW[4] - iW[1]) + PW),
+         ZW = tW !== cW && tW !== wW;
+       for (let xW = 0; xW < 4; xW++) {
+         const WW = EW[xW],
+           iW = WW[0],
+           OW = WW[1],
+           PW = BW[xW],
+ ... (5 more added lines; see GitHub link above)
```

#### 215. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8604-L8616` → after: `L36484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36484) · [Before (L8604-L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8604-L8616)

```diff
-       let {
-         show: ie
-       } = ee;
-       const He = PF(ie, ie);
-       return (0, Fi.J)(ie && He.shown, (0, Fi.K)(), (ee => {
-         (0, TH.r)("daily_drop.store_only_open", ee)
-       })), ie && He.shown ? (0, Re.jsxs)("div", {
-         className: "Store StoreDailyDropOnly",
-         children: [He.claimFailed, He.tile && (0, Re.jsx)("div", {
-           className: "StoreDailyDropOnlyTile",
-           children: He.tile
-         }), He.reveal]
-       }) : null
+       return Wi[0][0] = WW[3], Wi[0][1] = WW[2], Wi[1][0] = WW[0], Wi[1][1] = WW[2], Wi[2][0] = WW[3], Wi[2][1] = WW[5], Wi[3][0] = WW[0], Wi[3][1] = WW[5], Wi
```

#### 216. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8618-L8620` → after: `L36486-L36507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36486-L36507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36486-L36507) · [Before (L8618-L8620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8618-L8620)

```diff
-     var YF = He(2694),
-       VF = He(34945),
-       aF = He(34951);
+   },
+   39606: (WW, iW, OW) => {
+     OW.d(iW, {
+       C: () => yW,
+       F: () => KW,
+       G: () => MW,
+       J: () => xW,
+       M: () => bW,
+       N: () => UW,
+       O: () => EW,
+       c: () => tW,
+       f: () => cW,
+       j: () => sW,
+       l: () => wW,
+       n: () => LW,
+       q: () => PW,
+ ... (6 more added lines; see GitHub link above)
```

#### 217. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8623-L8667` → after: `L36510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36510) · [Before (L8623-L8667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8623-L8667)

```diff
-       let {
-         view: ie,
-         highlight: He,
-         scrollSignal: be,
-         onScrolledIntoView: Me
-       } = ee;
-       const {
-         t: Ue
-       } = (0, Ke.v)(), {
-         purchaseUnderWay: Fe,
-         notice: Je,
-         needsLogin: oe,
-         buyPack: ke
-       } = (0, aF.h)("banner");
-       (0, YF.O)(ie.arm, "banner");
-       const qe = (0, ye.useRef)(null);
- ... (29 more removed lines; see GitHub link above)
+       return Math.floor(WW).toLocaleString("en-US")
```

#### 218. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8669-L8670` → after: `L36512-L36518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36512-L36518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36512-L36518) · [Before (L8669-L8670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8669-L8670)

```diff
-     He(34947);
-     var xF = He(2697);
+     const NW = 2e3,
+       PW = .005,
+       LW = .001,
+       cW = 2,
+       wW = "Fluid Tank",
+       tW = "Coolant Mixer",
+       ZW = 144;
```

#### 219. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8673-L8702` → after: `L36521-L36532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36521-L36532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36521-L36532) · [Before (L8673-L8702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8673-L8702)

```diff
-       let {
-         wallet: ie,
-         close: He
-       } = ee;
-       const {
-         t: ye
-       } = (0, Ke.v)();
-       return (0, Re.jsxs)("div", {
-         className: "NewPlayerDealGiftNotice",
-         children: [(0, Re.jsxs)("div", {
-           className: "NewPlayerDealGiftNoticeRows",
-           children: [(0, Re.jsx)("span", {
-             children: ye("newPlayerDeal:giftable")
-           }), (0, Re.jsx)(sK.d, {
-             amount: (0, gK.c)(ie)
-           }), (0, Re.jsx)("span", {
- ... (14 more removed lines; see GitHub link above)
+       const iW = WW.split("|")[0];
+       return (0, mW.p)(iW) ? iW === mW.e ? "cryo" : "water" : null
+     }
+     const lW = [
+         [1, 0, 0],
+         [-1, 0, 0],
+         [0, 1, 0],
+         [0, -1, 0],
+         [0, 0, 1],
+         [0, 0, -1]
+       ],
+       AW = 63;
```

#### 220. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8705-L8712` → after: `L36535-L36552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36535-L36552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36535-L36552) · [Before (L8705-L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8705-L8712)

```diff
-       bi.NotificationProvider.showCustomPopup({
-         body: ie => (0, Re.jsx)(LF, {
-           wallet: ee,
-           close: ie
-         }),
-         middleScreenPopupClassName: "NewPlayerDealGiftNoticePopup",
-         disableExitButton: !0
-       })
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+       const OW = iW ? function(WW, iW, OW) {
+         const mW = lW.findIndex((mW => {
+           let [EW, NW, PW] = mW;
+           return EW === WW && NW === iW && PW === OW
+         }));
+         return mW < 0 ? 0 : 1 << mW
+       }(iW[0], iW[1], iW[2]) : 0;
+       return "maker" === WW ? {
+         kind: WW,
+         faces: OW
+       } : "user" === WW ? {
+         kind: WW,
+         faces: AW & ~OW
+       } : {
+         kind: WW,
+ ... (2 more added lines; see GitHub link above)
```

#### 221. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8720-L8846` → after: `L36556-L36613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36556-L36613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36556-L36613) · [Before (L8720-L8846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8720-L8846)

```diff
-       return "found" === ee.status || "error" === ee.status && "store:giftRecipientLookupFailed" === ee.error ? ee.name : null
-     }(0, Fi.y)(re.prefetchBillingOfferings);
-     const lF = (0, ye.memo)((function(ee) {
-       var ie;
-       let {
-         show: be
-       } = ee;
-       const {
-         t: Ue
-       } = (0, Ke.v)(), {
-         userContext: Fe
-       } = (0, fe.b)(), Je = (0, Se.usePurchasesAllowed)(), oe = Fe !== De.NULL_USER_CONTEXT, ke = AK(Fe, be), [qe, Te] = (0, pe.b)(), {
-         page: Xe,
-         urlMode: ze,
-         goTo: Be
-       } = (0, YK.d)(), Ee = function(ee) {
- ... (111 more removed lines; see GitHub link above)
+       return "pipe" === WW || "tank" === WW || "maker" === WW
+     }
+ 
+     function UW(WW, iW, OW) {
+       return 0 !== (WW.faces & 1 << OW) && 0 !== (iW.faces & 1 << (1 ^ OW)) && (jW(WW.kind) || jW(iW.kind))
+     }
+     const kW = (WW, iW, OW, mW) => ({
+         input: WW,
+         inputAmount: mW,
+         output: iW,
+         outputAmount: OW
+       }),
+       sW = {
+         Condenser: {
+           kind: "Condenser",
+           opMs: 2e3,
+ ... (42 more added lines; see GitHub link above)
```

#### 222. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8848-L8909` → after: `L36615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36615) · [Before (L8848-L8909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8848-L8909)

```diff
-       }), [ae]);
-       const ii = Fe.superRankInfo,
-         Hi = Fe.isLoggedIn() || (0, Se.guestsMayBuy)(),
-         yi = Fe.getOwnedCosmeticPacks(),
-         bi = (0, ZK.i)(ke.query),
-         Mi = (0, ZK.e)({
-           mode: bi,
-           loggedIn: oe ? Hi : null,
-           superRankInfo: ii,
-           soldTierId: (0, ue.r)(Date.now()).product.tierId,
-           now: Date.now(),
-           ownedPacks: yi,
-           packs: XK.p,
-           recipient: ke.recipient
-         });
-       (0, ye.useEffect)((() => {
- ... (46 more removed lines; see GitHub link above)
+       };
```

#### 223. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8911-L8913` → after: `L36617-L36619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36617-L36619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36617-L36619) · [Before (L8911-L8913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8911-L8913)

```diff
-       function gi(ee) {
-         (0, EK.b)(ee, "gift" === bi ? ke.query.trim() : null)
-       }
+     function MW(WW, iW) {
+       return 1e3 * (null !== iW && void 0 !== iW ? iW : 0) / WW.opMs
+     }
```

#### 224. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8915-L8920` → after: `L36621-L36635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36621-L36635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36621-L36635) · [Before (L8915-L8920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8915-L8920)

```diff
-       function Oi(ee, ie) {
-         (0, Xi.reportAnalyticsClick)({
-           id: "store.purchase_done",
-           value: `${ie?"gift":"self"}:${ee}`
-         }), ie && (ke.recordGift(ie.name, ee), di(ie))
-       }
+     function KW(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+       const OW = MW(sW["Coolant Mixer"], ZW) * iW;
+       return WW <= 0 ? 0 : Math.ceil(WW / OW - 1e-9)
+     }
+     const SW = "baf2Water",
+       YW = "baf2waterclose",
+       yW = "baf2wateropen"
+   },
+   39183: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => EW,
+       d: () => NW
+     });
+     var mW = OW(5725);
```

#### 225. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8922-L8936` → after: `L36637-L36653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36637-L36653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36637-L36653) · [Before (L8922-L8936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8922-L8936)

```diff
-       function di(ee) {
-         ! function(ee) {
-           try {
-             zH.i.setItem(wK, (0, ZK.r)(PK(), ee))
-           } catch {}
-         }({
-           name: ee.name,
-           cosmetics: ee.cosmetics
-         }), Be(vF), ce((ie => {
-           var He;
-           return {
-             name: ee.name,
-             seq: (null !== (He = null === ie || void 0 === ie ? void 0 : ie.seq) && void 0 !== He ? He : 0) + 1
-           }
-         }))
+     function EW(WW, iW) {
+       const OW = {
+           rock: "stone",
+           wood: "wood",
+           granule: "gravel",
+           cuttable: "grass",
+           none1: "glass",
+           none2: "sand",
+           none3: "snow",
+           none4: "cloth"
+         },
+         EW = mW.j[WW].soundType,
+         NW = iW ? "break" : "place";
+       if (void 0 !== (null === EW || void 0 === EW ? void 0 : EW[NW])) return EW[NW];
+       {
+         const EW = mW.j[WW].harvestType;
+ ... (1 more added lines; see GitHub link above)
```

#### 226. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8938-L8954` → after: `L36655-L36692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36655-L36692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36655-L36692) · [Before (L8938-L8954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8938-L8954)

```diff
-       async function Wi(ee) {
-         var ie, He;
-         if (se.current) return;
-         if (!Hi) return void gi(ee);
-         Ve(null), Le(null);
-         const ye = "gift" === bi ? {
-           name: mF(ke.recipient),
-           cosmetics: ke.recipientCosmetics
-         } : null;
-         if (ye && !ye.name) return void Ne();
-         const be = "superRank" === ee ? (0, ue.r)(Date.now()).id : (0, zK.b)(ee);
-         se.current = !0;
-         const Me = await (0, tK.d)(be, null !== (ie = null === ye || void 0 === ye ? void 0 : ye.name) && void 0 !== ie ? ie : null);
-         if (se.current = !1, !Me) return;
-         Ae(ee);
-         const Ke = await gK.h.purchase(be, null !== (He = null === ye || void 0 === ye ? void 0 : ye.name) && void 0 !== He ? He : null);
- ... (1 more removed lines; see GitHub link above)
+     }
+     const NW = {
+       gunHeadshot: .96,
+       bulletShellBounce: .18,
+       firstPersonReload: .24,
+       thirdPersonReload: .08,
+       gunShot: .4
+     }
+   },
+   38715: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => mW,
+       f: () => EW,
+       g: () => cW,
+       i: () => LW,
+       l: () => PW,
+ ... (22 more added lines; see GitHub link above)
```

#### 227. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L8956-L9004` → after: `L36694-L36695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36694-L36695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36694-L36695) · [Before (L8956-L9004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L8956-L9004)

```diff
-       const ti = Me()("Store", {
-         StoreGift: "gift" === bi,
-         StorePortrait: fi,
-         StoreCompact: Ti
-       });
-       if ("pack" === Xe.kind) {
-         const ee = Xe.pack,
-           ie = Mi.packs.find((ie => ie.pack === ee));
-         return (0, Re.jsx)("div", {
-           ref: le,
-           className: "CosmeticShopContainer",
-           children: (0, Re.jsx)(WK.f, {
-             pack: ee,
-             onBack: () => {
-               Be(vF)
-             },
- ... (33 more removed lines; see GitHub link above)
+       get slots() {
+         return this._slots
```

#### 228. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9006-L9029` → after: `L36697-L36711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36697-L36711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36697-L36711) · [Before (L9006-L9029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9006-L9029)

```diff
-       var Zi;
-       return "superRank" === Xe.kind ? (0, Re.jsx)("div", {
-         ref: le,
-         className: Me()(ti, "StoreDetailView"),
-         children: (0, Re.jsx)(FF, {
-           state: Mi.superRank.state,
-           daysLeft: Mi.superRankDaysLeft,
-           wearer: Ei,
-           mode: bi,
-           giftName: zi,
-           busy: Bi,
-           highlight: "superRank" === xe,
-           purchaseError: Ye,
-           onBack: () => {
-             Be(vF)
-           },
- ... (8 more removed lines; see GitHub link above)
+       compileClip(WW) {
+         try {
+           const iW = WW();
+           return this.provisional.length = 0, iW
+         } catch (iW) {
+           for (const WW of this.provisional) this._slots.delete(WW);
+           throw this.provisional.length = 0, iW
+         }
+       }
+       reserve(WW) {
+         for (const iW of WW.matchAll(EW)) {
+           const WW = iW[1].toLowerCase();
+           if (!this._slots.has(WW)) {
+             if (this._slots.size >= 256) return !1;
+             this._slots.set(WW, this._slots.size), this.provisional.push(WW)
```

#### 229. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9031-L9124` → after: `L36713-L36718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36713-L36718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36713-L36718) · [Before (L9031-L9124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9031-L9124)

```diff
-         })
-       }) : (0, Re.jsxs)("div", {
-         ref: le,
-         className: ti,
-         onScroll: ee => {
-           je.current = ee.currentTarget.scrollTop
-         },
-         children: [(0, Re.jsx)("div", {
-           className: "StoreTopRow",
-           children: (0, Re.jsx)(nK, {
-             selfName: oe ? Fe.getPlayerName() : "",
-             giftRecipient: ke,
-             suggestionsVersion: null !== (ie = null === ae || void 0 === ae ? void 0 : ae.seq) && void 0 !== ie ? ie : 0,
-             pulseSignal: Ze,
-             disabled: Bi || !oe
-           })
- ... (78 more removed lines; see GitHub link above)
+         }
+         return !0
+       }
+       createValues() {
+         return new Float64Array(this._slots.size)
+       }
```

#### 230. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9127-L9166` → after: `L36721-L36725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36721-L36725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36721-L36725) · [Before (L9127-L9166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9127-L9166)

```diff
-     function UJ() {
-       const {
-         t: ee
-       } = (0, Ke.v)(), {
-         followsLeader: ie
-       } = (0, IF.c)(), {
-         loading: He,
-         friends: be,
-         requests: Fe,
-         invites: oe
-       } = (0, Ie.k)(), {
-         userContext: ke
-       } = (0, fe.b)(), [qe, Te] = (0, ye.useState)(MJ.l);
-       (0, ye.useEffect)((() => {
-         (0, MJ.c)()
-       }), []);
- ... (24 more removed lines; see GitHub link above)
+     function PW(WW, iW) {
+       return {
+         still: LW(WW),
+         timeless: cW(WW),
+         standsAfterSeconds: wW(WW, iW)
```

#### 231. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9426-L9444` → after: `L36730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36730) · [Before (L9426-L9444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9426-L9444)

```diff
-       let {
-         count: ie,
-         claiming: He
-       } = ee;
-       const {
-         t: ye
-       } = (0, Ke.v)();
-       return 0 === ie ? null : (0, Re.jsx)(Je.m, {
-         className: "SeasonPassClaimAllButton",
-         loading: He,
-         onClick: () => {
-           JJ.f.claimAll().catch((ee => {
-             console.error("Failed to claim all season pass rewards", ee)
-           }))
-         },
-         children: ye("seasonPass:claimAll", {
- ... (3 more removed lines; see GitHub link above)
+       return 0 === WW.startDelaySeconds && null === WW.animTimeUpdate && null !== xW(WW.blendWeight) && WW.bones.every((WW => ZW(WW.rotation) && ZW(WW.position) && ZW(WW.scale)))
```

#### 232. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9448-L9544` → after: `L36734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36734) · [Before (L9448-L9544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9448-L9544)

```diff
-       let {
-         view: ie,
-         claiming: He
-       } = ee;
-       const {
-         t: ye
-       } = (0, Ke.v)(), {
-         userContext: be
-       } = (0, fe.b)(), {
-         config: Me,
-         state: Fe,
-         tier: Je,
-         xpIntoTier: oe,
-         xpForNextTier: ke
-       } = ie, qe = Date.now(), Te = (0, kJ.j)(ie, qe), pe = Je >= Me.tierCount, Xe = Te && !pe && ke > 0, ze = ke > 0 && !pe ? Math.min(100, oe / ke * 100) : 100, Be = Fe.xpToday >= Me.maxXpPerDay, Ee = null !== ie.xpBoost && ie.xpBoost.endsAtMs > qe && !Be ? ie.xpBoost : null;
-       return (0, Re.jsxs)("header", {
- ... (81 more removed lines; see GitHub link above)
+       return !tW(WW, (WW => WW.readsClock))
```

#### 233. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9549-L9550` → after: `L36737-L36741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36737-L36741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36737-L36741) · [Before (L9549-L9550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9549-L9550)

```diff
-     function XJ(ee) {
-       return null !== (0, oU.x)(ee) || null !== (0, oU.p)(ee)
+     function wW(WW, iW) {
+       if (WW.loop === mW.i.Loop || null !== WW.animTimeUpdate) return 1 / 0;
+       if (WW.loop === mW.i.Hold && WW.lengthSeconds > 0) return WW.startDelaySeconds + WW.lengthSeconds;
+       const OW = tW(WW, (WW => WW.readsAnimTime));
+       return OW ? 1 / 0 : WW.startDelaySeconds + iW + 2 * mW.m
```

#### 234. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9554-L9556` → after: `L36744-L36746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36744-L36746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36744-L36746) · [Before (L9554-L9556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9554-L9556)

```diff
-     function BJ() {
-       var ee;
-       null === (ee = zJ) || void 0 === ee || ee.tearDownNotification()
+     function tW(WW, iW) {
+       const OW = WW => "number" !== typeof WW && iW(WW);
+       return OW(WW.blendWeight) || WW.bones.some((WW => [WW.rotation, WW.position, WW.scale].some((WW => null !== WW && WW.keyframes.some((WW => [0, 1, 2].some((iW => OW(WW.pre[iW]) || OW(WW.post[iW])))))))))
```

#### 235. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9560-L9583` → after: `L36750-L36759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36750-L36759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36750-L36759) · [Before (L9560-L9583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9560-L9583)

```diff
-       let {
-         reward: ie
-       } = ee;
-       const {
-         t: He
-       } = (0, Ke.v)(), {
-         userContext: ye
-       } = (0, fe.b)(), be = (0, oU.x)(ie);
-       return (0, Re.jsxs)("div", {
-         className: "PromptGenericPopup SeasonPassRewardPreview",
-         children: [(0, Re.jsx)("div", {
-           className: "PromptGenericPopupTitle SmallTextBold",
-           children: (0, oU.j)(ie, He)
-         }), null !== be && (0, Re.jsx)("div", {
-           className: "SeasonPassRewardPreviewProfileEffect",
-           children: (0, Re.jsx)(TJ.d, {
- ... (8 more removed lines; see GitHub link above)
+       var iW;
+       if (null === WW) return !0;
+       const OW = null === (iW = WW.keyframes[0]) || void 0 === iW ? void 0 : iW.pre;
+       return WW.keyframes.every((WW => {
+         for (let iW = 0; iW < 3; iW++) {
+           const mW = xW(OW[iW]);
+           if (null === mW || xW(WW.pre[iW]) !== mW || xW(WW.post[iW]) !== mW) return !1
+         }
+         return !0
+       }))
```

#### 236. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9587-L9615` → after: `L36763-L36792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36763-L36792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36763-L36792) · [Before (L9587-L9615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9587-L9615)

```diff
-       let {
-         reward: ie
-       } = ee;
-       const {
-         userContext: He
-       } = (0, fe.b)(), be = (0, ye.useRef)(null), {
-         previewEmote: Me,
-         playEmote: Ke
-       } = (0, pJ.d)(), Ue = (0, ye.useMemo)((() => (0, oU.p)(ie)), [ie]), Fe = Ue.emote;
-       return (0, Re.jsx)("div", {
-         className: "SeasonPassRewardPreviewCharacter",
-         children: (0, Re.jsx)(ye.Suspense, {
-           fallback: (0, Re.jsx)(Oe.b, {}),
-           children: (0, Re.jsx)(IK.c, {
-             ref: be,
-             framing: "store",
- ... (13 more removed lines; see GitHub link above)
+       return "number" === typeof WW ? WW : WW.constant
+     }
+     var lW = OW(38745),
+       AW = OW(38717),
+       bW = OW(38728);
+     const jW = ["1.8.0", "1.10.0"],
+       UW = 524288,
+       kW = 1e6,
+       sW = 128,
+       MW = new Map([
+         ["rotation", mW.g.Rotation],
+         ["position", mW.g.Position],
+         ["scale", mW.g.Scale]
+       ]),
+       KW = new Set(["sound_effects", "particle_effects", "timeline"]),
+       SW = new Set(["loop", "animation_length", "override_previous_animation", "anim_time_update", "blend_weight", "start_delay", "loop_delay", "bones"]);
+ ... (14 more added lines; see GitHub link above)
```

#### 237. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9618-L9640` → after: `L36795-L36931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36795-L36931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36795-L36931) · [Before (L9618-L9640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9618-L9640)

```diff
-     function OJ(ee) {
-       let {
-         waitingCount: ie
-       } = ee;
-       const {
-         t: He
-       } = (0, Ke.v)();
-       return (0, Se.usePurchasesAllowed)() ? (0, Re.jsxs)("div", {
-         className: "SeasonPassHyperUpsell",
-         children: [ie > 0 && (0, Re.jsx)("span", {
-           className: "SeasonPassHyperUpsellText",
-           children: 1 === ie ? He("seasonPass:hyperRewardWaiting") : He("seasonPass:hyperRewardsWaiting", {
-             count: ie
-           })
-         }), (0, Re.jsxs)("span", {
-           className: "SeasonPassHyperUpsellButtonWrapper",
- ... (7 more removed lines; see GitHub link above)
+     function yW(WW, iW) {
+       return {
+         clips: [],
+         diagnostics: [{
+           severity: mW.e.Error,
+           source: WW,
+           message: iW
+         }]
+       }
+     }
+     class TW {
+       constructor(WW, iW) {
+         this.source = WW, this.variables = iW, this.diagnostics = [], this.suppressedDiagnostics = 0, this.keyframeCount = 0, this.molangChars = 0
+       }
+       compile(WW) {
+         if (!(0, AW.j)(WW)) return yW(this.source, "the file is not a JSON object");
+ ... (121 more added lines; see GitHub link above)
```

#### 238. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9642-L9649` → after: `L36933-L36997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R36933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L36933-L36997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L36933-L36997) · [Before (L9642-L9649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9642-L9649)

```diff
-             },
-             children: [(0, Re.jsx)(ue.e, {}), " ", He("homePage:getHyperRank")]
-           }), ie > 0 && (0, Re.jsx)("span", {
-             className: "SeasonPassHyperUpsellCount",
-             children: ie
-           })]
-         })]
-       }) : null
+             }
+           }
+         }
+         if (0 === EW.length) throw new AW.c(`${OW} has no keyframes`);
+         if (this.keyframeCount += EW.length, this.keyframeCount > 2e4) throw new AW.c("the file has over 20000 keyframes");
+         EW.sort(((WW, iW) => WW.time - iW.time));
+         for (let NW = 1; NW < EW.length; NW++)
+           if (EW[NW].time - EW[NW - 1].time < mW.m) throw new AW.c(`${OW} has two keyframes at ${EW[NW].time}s`);
+         return (0, AW.h)(EW), {
+           keyframes: EW.map((WW => this.compileKeyframe(WW, OW)))
+         }
+       }
+       compileKeyframe(WW, iW) {
+         const OW = this.compileTriple(WW.dataPoints[0], iW),
+           mW = WW.dataPoints.length > 1 ? this.compileTriple(WW.dataPoints[WW.dataPoints.length - 1], iW) : OW;
+         return {
+ ... (49 more added lines; see GitHub link above)
```

#### 239. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9654-L9676` → after: `L37001-L37048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37001-L37048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37001-L37048) · [Before (L9654-L9676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9654-L9676)

```diff
-       let {
-         stub: ie,
-         name: He
-       } = ee;
-       const {
-         t: ye
-       } = (0, Ke.v)();
-       return (0, Re.jsxs)("span", {
-         className: "SeasonPassTrackLabelName",
-         children: [(0, Re.jsx)("span", {
-           className: "SeasonPassTicketStub",
-           children: ie
-         }), (0, Re.jsxs)("span", {
-           className: "SeasonPassTicketBody",
-           children: [(0, Re.jsx)("span", {
-             className: "SeasonPassTicketPass",
- ... (7 more removed lines; see GitHub link above)
+       if (void 0 === WW || !1 === WW) return mW.i.Once;
+       if (!0 === WW) return mW.i.Loop;
+       if ("hold_on_last_frame" === WW) return mW.i.Hold;
+       throw new AW.c(`loop ${JSON.stringify(WW)} is not supported (true, false or "hold_on_last_frame")`)
+     }
+     class HW {
+       constructor(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !1;
+         this.byId = new Map, this.fileById = new Map, this.byShortName = new Map, this.variables = new NW, this.diagnostics = [];
+         for (const OW of WW) {
+           const WW = YW(OW.text, OW.name, this.variables);
+           this.diagnostics.push(...WW.diagnostics);
+           for (const EW of WW.clips) {
+             const WW = this.fileById.get(EW.id);
+             if (void 0 !== WW && iW(OW.name) && iW(WW)) continue;
+             if (void 0 !== WW) {
+ ... (32 more added lines; see GitHub link above)
```

#### 240. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9680-L9703` → after: `L37052-L37062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37052-L37062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37052-L37062) · [Before (L9680-L9703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9680-L9703)

```diff
-       var ie, He;
-       let {
-         view: be,
-         claimingKeys: Me,
-         hyperWaitingCount: Fe,
-         onClaim: Je
-       } = ee;
-       const {
-         t: oe
-       } = (0, Ke.v)(), ke = (0, ye.useRef)(null), {
-         config: qe,
-         tier: fe,
-         xpIntoTier: Te,
-         xpForNextTier: pe,
-         state: Xe
-       } = be, ze = (0, kJ.j)(be), Be = (0, ye.useRef)(!1), Ee = null !== (ie = null === (He = be.claimable[0]) || void 0 === He ? void 0 : He.tier) && void 0 !== ie ? ie : Math.min(fe + 1, qe.tierCount);
- ... (8 more removed lines; see GitHub link above)
+       return WW.slice(WW.lastIndexOf(".") + 1)
+     }
+   },
+   38759: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => tW,
+       e: () => NW,
+       h: () => PW
+     });
+     var mW = OW(38721);
+     const EW = .001;
```

#### 241. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9705-L9706` → after: `L37064-L37076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37064-L37076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37064-L37076) · [Before (L9705-L9706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9705-L9706)

```diff
-         function ie(ie) {
-           Be.current = !0, Math.abs(ie.deltaY) <= Math.abs(ie.deltaX) || ee.scrollWidth <= ee.clientWidth || (ie.preventDefault(), ee.scrollLeft += ie.deltaY)
+     function NW(WW, iW) {
+       const OW = iW - WW.startDelaySeconds;
+       if (OW < 0) return NaN;
+       const NW = WW.lengthSeconds;
+       if (NW <= 0) return OW;
+       switch (WW.loop) {
+         case mW.i.Once:
+           return OW;
+         case mW.i.Hold:
+           return Math.min(OW, NW);
+         case mW.i.Loop: {
+           const iW = NW + WW.loopDelaySeconds;
+           return Math.min((OW - EW) % iW + EW, NW)
```

#### 242. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9708-L9711` → after: `L37078-L37102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37078-L37102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37078-L37102) · [Before (L9708-L9711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9708-L9711)

```diff
-         return ee.addEventListener("wheel", ie, {
-           passive: !1
-         }), () => {
-           ee.removeEventListener("wheel", ie)
+       }
+     }
+ 
+     function PW(WW, iW, OW, EW, NW) {
+       const PW = WW.keyframes;
+       if (1 === PW.length) return void wW(PW[0], iW, EW, NW);
+       const LW = function(WW, iW) {
+           let OW = 0,
+             mW = WW.length;
+           for (; OW < mW;) {
+             const EW = OW + mW >>> 1;
+             WW[EW].time < iW ? OW = EW + 1 : mW = EW
+           }
+           return OW - 1
+         }(PW, iW),
+         ZW = LW + 1 < PW.length ? LW + 1 : -1,
+ ... (9 more added lines; see GitHub link above)
```

#### 243. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9713-L9780` → after: `L37104-L37185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37104-L37185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37104-L37185) · [Before (L9713-L9780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9713-L9780)

```diff
-       }), []);
-       const ge = pe > 0 ? Te / pe : 1;
-       return (0, Re.jsxs)("div", {
-         className: "SeasonPassTrack",
-         children: [(0, Re.jsxs)("div", {
-           className: "SeasonPassTrackLabels",
-           children: [(0, Re.jsxs)("div", {
-             className: "SeasonPassTrackLabel SeasonPassTrackLabelHyper",
-             children: [(0, Re.jsx)(WJ, {
-               stub: (0, Re.jsx)(ue.e, {}),
-               name: oe("seasonPass:hyperTrack")
-             }), !Xe.hasHyperRank && (0, Re.jsx)(OJ, {
-               waitingCount: Fe
-             })]
-           }), (0, Re.jsxs)("div", {
-             className: "SeasonPassTrackLabel SeasonPassTrackLabelFree",
- ... (52 more removed lines; see GitHub link above)
+         return
+       }
+       let jW = PW[LW - 1],
+         UW = PW[LW + 2];
+       OW && PW.length >= 3 && (jW ??= PW[PW.length - 2], UW ??= PW[1]);
+       for (let mW = 0; mW < 3; mW++) NW[mW] = cW(jW, xW, lW, UW, mW, bW, EW)
+     }
+     const LW = [0, 0, 0, 0];
+ 
+     function cW(WW, iW, OW, mW, EW, NW, PW) {
+       const cW = LW;
+       let wW = 0;
+       void 0 === WW || iW.hasPrePost || (cW[wW++] = tW(WW.post[EW], PW)), cW[wW++] = tW(iW.post[EW], PW), cW[wW++] = tW(OW.pre[EW], PW), void 0 === mW || OW.hasPrePost || (cW[wW++] = tW(mW.pre[EW], PW));
+       return function(WW, iW, OW) {
+         const mW = (iW - 1) * OW,
+           EW = Math.min(Math.floor(mW), iW - 1),
+ ... (66 more added lines; see GitHub link above)
```

#### 244. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9844-L9883` → after: `L37189-L37194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37189-L37194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37189-L37194) · [Before (L9844-L9883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9844-L9883)

```diff
-       let {
-         tier: ie,
-         track: He,
-         reward: ye,
-         tileState: be,
-         claiming: Me,
-         padlock: Ke,
-         onClaim: Ue
-       } = ee;
-       return ye ? (0, Re.jsx)("div", {
-         className: `SeasonPassTrackSlot SeasonPassTrackSlot-${He}`,
-         children: (0, Re.jsx)(TU.e, {
-           reward: ye,
-           tileState: be,
-           track: He,
-           size: "large",
- ... (24 more removed lines; see GitHub link above)
+       let iW = 0,
+         OW = !1;
+       for (const NW of WW.keyframes) iW = Math.max(iW, lW(NW.pre) + (NW.hasPrePost ? lW(NW.post) : 0)), OW ||= NW.catmullRom;
+       const mW = WW.keyframes.length,
+         EW = Math.ceil(Math.log2(mW));
+       return OW && mW > 1 ? PW + EW + (mW >= 3 ? cW : mW) * iW : NW + EW + Math.min(LW, mW) * iW
```

#### 245. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9887-L9890` → after: `L37198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37198) · [Before (L9887-L9890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9887-L9890)

```diff
-       let {
-         show: ie
-       } = ee;
-       return ie ? (0, Re.jsx)(PJ, {}) : null
+       return AW(WW[0]) + AW(WW[1]) + AW(WW[2])
```

#### 246. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9893-L9921` → after: `L37201-L37202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37201-L37202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37201-L37202) · [Before (L9893-L9921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9893-L9921)

```diff
-     function PJ() {
-       const {
-         t: ee
-       } = (0, Ke.v)(), ie = (0, JJ.i)();
-       return (0, ye.useEffect)((() => BJ), []), (0, Re.jsxs)("div", {
-         className: "SeasonPassScreen",
-         children: ["loading" === ie.status && (0, Re.jsx)(Oe.b, {}), "error" === ie.status && (0, Re.jsxs)("div", {
-           className: "SeasonPassScreenNotice",
-           children: [(0, Re.jsx)("p", {
-             className: "SeasonPassScreenMessage",
-             children: ee("seasonPass:errorLoad")
-           }), (0, Re.jsx)(Je.c, {
-             className: "SeasonPassScreenRetry",
-             onClick: () => {
-               JJ.f.retry()
-             },
- ... (13 more removed lines; see GitHub link above)
+     function AW(WW) {
+       return "number" === typeof WW ? 0 : WW.cost
```

#### 247. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9925-L9953` → after: `L37206-L37212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37206-L37212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37206-L37212) · [Before (L9925-L9953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9925-L9953)

```diff
-       let {
-         view: ie,
-         claimingKeys: He
-       } = ee;
-       const ye = ie.config.tiers.filter((ee => "needsHyper" === ie.tileState({
-           tier: ee.tier,
-           track: "hyper"
-         }))).length,
-         be = He.size > 0;
-       return (0, Re.jsxs)("div", {
-         className: "SeasonPassScreenLoaded",
-         children: [(0, Re.jsx)(fJ, {
-           view: ie,
-           claiming: be
-         }), (0, Re.jsx)(tJ, {
-           view: ie,
- ... (13 more removed lines; see GitHub link above)
+       let iW = 0;
+       for (const OW of WW.layers) {
+         let WW = null === OW.fallback ? 0 : jW(OW.fallback);
+         for (const iW of OW.states.values()) WW = Math.max(WW, jW(iW));
+         iW += WW
+       }
+       return iW
```

#### 248. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L9957-L9959` → after: `L37216-L37255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37216-L37255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37216-L37255) · [Before (L9957-L9959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L9957-L9959)

```diff
-       JJ.f.claim(ee).catch((ee => {
-         console.error("Failed to claim season pass reward", ee)
-       }))
+       let iW = 0,
+         OW = 0;
+       for (const mW of WW.children) {
+         const WW = ZW(mW.clip.clip);
+         WW > iW ? (OW = iW, iW = WW) : WW > OW && (OW = WW)
+       }
+       return iW + OW + wW * WW.children.length
+     }
+   },
+   38753: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW,
+       g: () => NW,
+       h: () => EW,
+       i: () => wW,
+       m: () => cW
+ ... (24 more added lines; see GitHub link above)
```

#### 249. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10046-L10256` → after: `L37258-L37262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37258-L37262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37258-L37262) · [Before (L10046-L10256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10046-L10256)

```diff
-         function Ve() {
-           Ye() || Pe()
-         }(0, ye.useEffect)((() => (0, RK.s)(Ye)), [Ye]);
-         const ae = (0, ye.useMemo)((() => "inGame" === ie ? {
-             text: ee("settingsMenu:exitGame"),
-             onClick: () => {
-               (0, nF.c)()
-             }
-           } : (0, we.isDiscordClient)() ? {
-             text: ee("settingsMenu:exitGame"),
-             onClick: () => {
-               Ai.l.discordActivity().then((ee => {
-                 ee.exit("User exited the game")
-               }))
-             }
-           } : null), [ie, ee]),
- ... (195 more removed lines; see GitHub link above)
+     function wW(WW, iW) {
+       const OW = WW.gate < 0 ? 1 : iW[WW.gate],
+         mW = (iW[WW.from] * WW.scale + WW.offset) * OW;
+       return Math.min(WW.max, Math.max(WW.min, mW))
+     }
```

#### 250. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10258` → after: `L37264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37264) · [Before (L10258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10258)

```diff
-   34945: (ee, ie, He) => {
+   38304: (WW, iW, OW) => {
```

#### 251. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10260-L10261` → after: `L37266-L37271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37266-L37271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37266-L37271) · [Before (L10260-L10261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10260-L10261)

```diff
-       d: () => fe,
-       g: () => pe
+       b: () => mW,
+       f: () => wW,
+       h: () => tW,
+       l: () => PW,
+       n: () => NW,
+       o: () => ZW
```

#### 252. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10263-L10274` → after: `L37273-L37274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37273-L37274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37273-L37274) · [Before (L10263-L10274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10263-L10274)

```diff
-     He(34947);
-     var ye = He(59),
-       be = He(1053),
-       Me = He.n(be),
-       Ke = He(1127),
-       Ue = He(1438),
-       Fe = He(2714),
-       Je = He(1323),
-       oe = He(2479),
-       Re = He(3349),
-       ke = He(2337),
-       qe = He(1228);
+     const mW = Math.PI / 180,
+       EW = 180 / Math.PI;
```

#### 253. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10276-L10288` → after: `L37276-L37280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37276-L37280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37276-L37280) · [Before (L10276-L10288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10276-L10288)

```diff
-     function fe(ee) {
-       let {
-         endsAt: ie,
-         className: He
-       } = ee;
-       return (0, qe.jsxs)("span", {
-         className: Me()("NewPlayerDealClock", He),
-         children: [(0, qe.jsx)(Je.e, {
-           name: "hourglass"
-         }), (0, qe.jsx)(Fe.f, {
-           toTime: ie
-         })]
-       })
+     function NW(WW, iW, OW, EW) {
+       const NW = WW * mW * .5,
+         PW = iW * mW * .5,
+         cW = OW * mW * .5;
+       LW(Math.cos(NW), Math.sin(NW), Math.cos(PW), Math.sin(PW), Math.cos(cW), Math.sin(cW), EW)
```

#### 254. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10291-L10336` → after: `L37283-L37284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37283-L37284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37283-L37284) · [Before (L10291-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10291-L10336)

```diff
-     function Te(ee) {
-       let {
-         offered: ie,
-         needsLogin: He,
-         busy: ye,
-         highlight: be,
-         onBuy: Fe
-       } = ee;
-       const {
-         t: Je
-       } = (0, Ke.v)(), {
-         pack: fe
-       } = ie, Te = (0, Re.h)(ie.package);
-       return (0, qe.jsxs)("div", {
-         className: Me()("NewPlayerDealPack", {
-           NewPlayerDealPackHighlight: be
- ... (30 more removed lines; see GitHub link above)
+     function PW(WW, iW, OW, mW, EW) {
+       cW(mW, 0, WW), cW(mW, 3, iW), cW(mW, 6, OW), LW(mW[1], mW[2], mW[4], mW[5], mW[7], mW[8], EW)
```

#### 255. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10339-L10373` → after: `L37287-L37322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37287-L37322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37287-L37322) · [Before (L10339-L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10339-L10373)

```diff
-     function pe(ee) {
-       let {
-         view: ie,
-         needsLogin: He,
-         busy: be,
-         highlight: Ue,
-         onBuy: Fe
-       } = ee;
-       const {
-         t: Je
-       } = (0, Ke.v)();
-       return (0, qe.jsxs)("div", {
-         className: Me()("NewPlayerDealPacks", ie.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
-         children: [ie.packs.map(((ee, ie) => (0, qe.jsxs)(ye.Fragment, {
-           children: [ie > 0 && (0, qe.jsx)("div", {
-             className: "NewPlayerDealDivider",
- ... (19 more removed lines; see GitHub link above)
+     function LW(WW, iW, OW, mW, EW, NW, PW) {
+       PW[0] = iW * OW * EW - WW * mW * NW, PW[1] = WW * mW * EW + iW * OW * NW, PW[2] = WW * OW * NW - iW * mW * EW, PW[3] = WW * OW * EW + iW * mW * NW
+     }
+ 
+     function cW(WW, iW, OW) {
+       if (WW[iW] !== OW) {
+         const EW = OW * mW * .5;
+         WW[iW] = OW, WW[iW + 1] = Math.cos(EW), WW[iW + 2] = Math.sin(EW)
+       }
+     }
+ 
+     function wW(WW, iW, OW, mW, NW) {
+       const PW = 1 - 2 * (iW * iW + OW * OW),
+         LW = 2 * (WW * iW - mW * OW),
+         cW = 2 * (WW * iW + mW * OW),
+         wW = 1 - 2 * (WW * WW + OW * OW),
+ ... (20 more added lines; see GitHub link above)
```

#### 256. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10376` → after: `L37325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37325) · [Before (L10376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10376)

```diff
-   34951: (ee, ie, He) => {
+   38711: (WW, iW, OW) => {
```

#### 257. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10378-L10379` → after: `L37327-L37334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37327-L37334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37327-L37334) · [Before (L10378-L10379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10378-L10379)

```diff
-       d: () => te,
-       h: () => we
+       e: () => vW,
+       i: () => eW,
+       l: () => VW,
+       m: () => DW,
+       p: () => IW,
+       q: () => rW,
+       u: () => BW,
+       v: () => GW
```

#### 258. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10381-L10401` → after: `L37336-L37348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37336-L37348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37336-L37348) · [Before (L10381-L10401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10381-L10401)

```diff
-     He(34947);
-     var ye = He(3345),
-       be = He(1464),
-       Me = He(2330),
-       Ke = He(3335),
-       Ue = He(3307),
-       Fe = He(3341),
-       Je = He(3293),
-       oe = He(1127),
-       Re = He(1340),
-       ke = He(1075),
-       qe = He(1438),
-       fe = He(1323),
-       Te = He(2479),
-       pe = He(2854),
-       Xe = He(2694),
- ... (5 more removed lines; see GitHub link above)
+     var mW = OW(639),
+       EW = OW(632),
+       NW = OW(38208),
+       PW = OW(38715),
+       LW = OW(38717);
+     class cW extends Error {}
+ 
+     function wW(WW) {
+       return {
+         constant: WW,
+         input: -1
+       }
+     }
```

#### 259. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10404-L10407` → after: `L37351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37351) · [Before (L10404-L10407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10404-L10407)

```diff
-       null !== ee && (0, Xe.q)(ee) || ((0, be.reportAnalyticsClick)({
-         id: "store.purchase_done",
-         value: `self:${ie.pack.packageId}`
-       }), null !== ee && (0, Xe.t)(ee), te(ie.pack.gems))
+       return void 0 === WW ? 0 : lW(WW, 0, .001, 1e3, iW)
```

#### 260. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10410-L10427` → after: `L37354-L37357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37354-L37357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37354-L37357) · [Before (L10410-L10427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10410-L10427)

```diff
-     function We(ee, ie, He) {
-       const be = (0, Xe.c)(ie);
-       switch (ee.kind) {
-         case "completed":
-           de(be, He);
-           break;
-         case "pending":
-           Me = ee.intentId, Ke = () => {
-             pe.h.refresh(), de(be, He)
-           }, Oe || (Oe = !0, ge.listen()), ge.follow(Me, Ke);
-           break;
-         case "unknownPackage":
-           (0, Xe.H)(ie, null);
-           break;
-         case "failed":
-           ee.errorKey === ye.c.newPlayerDealUnavailable && (0, Xe.H)(ie, null)
- ... (2 more removed lines; see GitHub link above)
+     function ZW(WW, iW) {
+       if (void 0 === WW || "add" === WW) return PW.g.Add;
+       if ("override" === WW) return PW.g.Override;
+       throw new cW(`${iW} must be "add" or "override"`)
```

#### 261. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10430-L10438` → after: `L37360-L37365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37360-L37365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37360-L37365) · [Before (L10430-L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10430-L10438)

```diff
-     function te(ee) {
-       Re.NotificationProvider.showCustomPopup({
-         body: ie => (0, Ee.jsx)(Ze, {
-           gems: ee,
-           close: ie
-         }),
-         middleScreenPopupClassName: "NewPlayerDealAddedPopup",
-         disableExitButton: !0
-       })
+     function xW(WW, iW) {
+       if (void 0 === WW) return null;
+       if (!Array.isArray(WW) || 0 === WW.length || WW.length > 128) throw new cW(`${iW} must list 1-128 bone names`);
+       for (const OW of WW)
+         if ("string" !== typeof OW || 0 === OW.length || OW.length > 128) throw new cW(`${iW} must list bone names`);
+       return WW
```

#### 262. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10441-L10465` → after: `L37368-L37416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37368-L37416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37368-L37416) · [Before (L10441-L10465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10441-L10465)

```diff
-     function Ze(ee) {
-       let {
-         gems: ie,
-         close: He
-       } = ee;
-       const {
-         t: ye
-       } = (0, oe.v)();
-       return (0, Ee.jsxs)("div", {
-         className: "NewPlayerDealAdded",
-         children: [(0, Ee.jsxs)("div", {
-           className: "NewPlayerDealAddedHead",
-           children: [(0, Ee.jsx)(fe.e, {
-             name: "circle-check"
-           }), (0, Ee.jsx)(Te.d, {
-             amount: ie
- ... (9 more removed lines; see GitHub link above)
+     function lW(WW, iW, OW, mW, EW) {
+       if (void 0 === WW) return iW;
+       if ("number" !== typeof WW || !Number.isFinite(WW) || WW < OW || WW > mW) throw new cW(`${EW} must be a number from ${OW} to ${mW}`);
+       return WW
+     }
+ 
+     function AW(WW, iW) {
+       if (!(0, LW.j)(WW)) throw new cW(`${iW} must be an object`);
+       return WW
+     }
+ 
+     function bW(WW, iW, OW) {
+       for (const mW of Object.keys(WW))
+         if (!iW.includes(mW)) throw new cW(`${OW}: unknown key "${mW}"`)
+     }
+     var jW = OW(38736),
+ ... (33 more added lines; see GitHub link above)
```

#### 263. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10469-L10488` → after: `L37420-L37563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37420-L37563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37420-L37563) · [Before (L10469-L10488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10469-L10488)

```diff
-       let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ke.b;
-       const {
-         userContext: He
-       } = (0, ke.b)(), {
-         purchaseUnderWay: ye,
-         notice: be,
-         buy: Fe
-       } = (0, Ue.c)(ie), Je = (0, ze.k)(), oe = He.mayBuy() || (0, Me.guestsMayBuy)(), Re = null === Je ? !oe : Je.guest && !He.isLoggedIn();
-       return {
-         purchaseUnderWay: ye,
-         notice: be,
-         needsLogin: Re,
-         buyPack: function(ye, be) {
-           (0, Xe.z)("new_player_deal.buy", (0, Be.b)(ye.arm, ee, be.pack.packageId)), null === Je ? Fe(function(ee) {
-             return {
-               sku: ee.pack.packageId,
- ... (4 more removed lines; see GitHub link above)
+       if (WW.length > MW) return null;
+       try {
+         const iW = JSON.parse(WW);
+         return (0, LW.j)(iW) && "string" === typeof iW.target ? iW.target : null
+       } catch {
+         return null
+       }
+     }
+     class JW {
+       constructor(WW, iW) {
+         this.source = WW, this.options = iW, this.inputIndexByName = new Map;
+         for (const [OW, mW] of sW.g) this.inputIndexByName.set(OW, mW)
+       }
+       compile(WW) {
+         const iW = AW(WW, "the file");
+         if (bW(iW, ["format_version", "target", "inputs", "variables", "layers", "actions"], "the file"), iW.format_version !== PW.c) throw new cW(`format_version must be "${PW.c}"`);
+ ... (128 more added lines; see GitHub link above)
```

#### 264. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10490-L10494` → after: `L37565-L37614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37565-L37614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37565-L37614) · [Before (L10490-L10494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10490-L10494)

```diff
-           }(be), null, {
-             followPending: !1
-           }).then((ee => {
-             We(ee, He, be)
-           })) : Re ? ie(be.pack.packageId, null) : de((0, Xe.c)(He), be)
+             const wW = this.compileState(LW, mW, `${iW} state "${mW}"`);
+             return OW.set(mW, wW), wW
+           };
+         for (const PW of mW) NW(PW)
+       }
+       compileState(WW, iW, OW) {
+         const mW = AW(WW, OW);
+         bW(mW, SW, OW);
+         const EW = void 0 === mW.rate ? wW(1) : this.valueSource(mW.rate, `${OW}.rate`);
+         if (EW.input < 0 && EW.constant < 0) throw new cW(`${OW}.rate must not be negative`);
+         const NW = function(WW, iW) {
+             if (void 0 === WW) return 0;
+             const OW = lW(WW, 0, .001, 1, iW),
+               mW = Math.round(1 / OW);
+             if (mW > 32 || Math.abs(OW - 1 / mW) > 5e-4) throw new cW(`${iW} must divide a cycle evenly into at most 32 parts (1, 0.5, 0.333, 0.25, ...)`);
+             return 1 / mW
+ ... (34 more added lines; see GitHub link above)
```

#### 265. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10497-L10537` → after: `L37617-L37629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37617-L37629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37617-L37629) · [Before (L10497-L10537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10497-L10537)

```diff
-     }
-   },
-   5358: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => pe
-     });
-     var ye = He(1053),
-       be = He.n(ye),
-       Me = He(5030),
-       Ke = He(1127),
-       Ue = He(1323),
-       Fe = He(1438),
-       Je = He(1490),
-       oe = He(1340),
-       Re = He(2613),
-       ke = He(1228);
- ... (25 more removed lines; see GitHub link above)
+       compileBlendChild(WW, iW) {
+         const OW = Array.isArray(WW) ? {
+           clip: WW[0],
+           at: WW[1],
+           stride: WW[2]
+         } : AW(WW, iW);
+         if (Array.isArray(WW) && (WW.length < 2 || WW.length > 3)) throw new cW(`${iW} must be [clip, at] or [clip, at, stride]`);
+         if (bW(OW, ["clip", "at", "stride"], iW), "number" !== typeof OW.at) throw new cW(`${iW}.at must be a number`);
+         return {
+           clip: this.clip(OW.clip, `${iW}.clip`),
+           at: lW(OW.at, 0, -1e6, KW, `${iW}.at`),
+           strideBlocks: tW(OW.stride, `${iW}.stride`)
+         }
```

#### 266. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10539` → after: `L37631-L37695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37631-L37695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37631-L37695) · [Before (L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10539)

```diff
-     };
+       compileActions(WW) {
+         const iW = AW(WW, "actions"),
+           OW = Object.keys(iW);
+         if (OW.length > 64) throw new cW("actions: at most 64");
+         const mW = new Map;
+         for (const EW of OW) {
+           const WW = `actions.${EW}`;
+           if (!YW.test(EW)) throw new cW(`${WW}: action names must be identifiers`);
+           const OW = AW(iW[EW], WW);
+           bW(OW, ["clip", "mode", "bones", "fadeIn", "fadeOut"], WW);
+           const NW = this.clip(OW.clip, `${WW}.clip`);
+           if (PW.i.has(EW) && NW.clip.loop !== kW.i.Once) throw new cW(`${WW}: the game plays this action, so its clip must end (not loop or hold on its last frame)`);
+           mW.set(EW, {
+             name: EW,
+             clip: NW,
+             mode: void 0 === OW.mode ? PW.g.Override : ZW(OW.mode, `${WW}.mode`),
+ ... (49 more added lines; see GitHub link above)
```

#### 267. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10542-L10556` → after: `L37698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37698) · [Before (L10542-L10556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10542-L10556)

```diff
-       let {
-         platform: ie
-       } = ee;
-       const He = "youtube" === ie;
-       return (0, ke.jsxs)("span", {
-         className: be()("PlayerProfileSocialLinkIcon", {
-           PlayerProfileSocialLinkIconYoutube: He
-         }),
-         children: [He && (0, ke.jsx)(Re.c, {
-           variant: "white"
-         }), !He && (0, ke.jsx)(Ue.e, {
-           name: qe[ie].icon,
-           kit: "brands"
-         })]
-       })
+       return fW.has(WW)
```

#### 268. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10560-L10570` → after: `L37702-L37704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37702-L37704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37702-L37704) · [Before (L10560-L10570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10560-L10570)

```diff
-       let {
-         platform: ie,
-         link: He,
-         editable: ye,
-         userContext: be,
-         onLinksUpdated: Re
-       } = ee;
-       const {
-         t: Te
-       } = (0, Ke.v)(), pe = qe[ie];
-       if (!He && !ye) return null;
+       return BW(WW) ? pW : gW
+     }
+     const RW = new Map([...CW].map((WW => [WW.toLowerCase(), WW])));
```

#### 269. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10572` → after: `L37706-L37729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37706-L37729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37706-L37729) · [Before (L10572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10572)

```diff
-       function Xe() {
+     function GW(WW, iW) {
+       const OW = "builtIn" === iW,
+         mW = OW ? XW : CW,
+         EW = [],
+         NW = (WW, iW) => {
+           EW.push({
+             severity: kW.e.Error,
+             source: WW,
+             message: iW
+           })
+         },
+         PW = Object.keys(WW);
+       let LW = 0;
+       for (const bW of PW) LW += bW.length + ("string" === typeof WW[bW] ? WW[bW].length : 0);
+       if (!OW && (PW.length > nW || LW > uW)) return NW("animations", `${PW.length} files and ${LW} characters, over the ${nW} file or ${uW} character limit`), {
+         pool: new jW.d([]),
+ ... (8 more added lines; see GitHub link above)
```

#### 270. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10574-L10597` → after: `L37731-L37750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37731-L37750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37731-L37750) · [Before (L10574-L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10574-L10597)

```diff
-         if (!be || !Re) return;
-         oe.NotificationProvider.showInputPopup({
-           title: "homePage:profileSocialLinkEditTitle",
-           textOpts: {
-             title: {
-               platform: pe.name
-             }
-           },
-           prefixText: Me.x[ie],
-           placeholderText: "playBloxd",
-           initialValue: null !== (ee = null === He || void 0 === He ? void 0 : He.handle) && void 0 !== ee ? ee : "",
-           maxLength: 30,
-           submitText: "general:save",
-           secondaryButtonText: He ? "general:remove" : void 0
-         }).getResult().then((async ee => {
-           if ("notificationTornDown" !== ee && null !== ee) try {
- ... (8 more removed lines; see GitHub link above)
+         const iW = WW[bW],
+           EW = null === (ZW = oW.exec(bW)) || void 0 === ZW ? void 0 : ZW[1];
+         if ("string" !== typeof iW || void 0 === EW) NW(bW, "not an animation file: name it <name>.animation.json or <name>.binding.json");
+         else if ("animation" === EW) {
+           cW.push({
+             name: bW,
+             text: iW
+           });
+           const WW = OW ? void 0 : RW.get(bW.slice(0, -dW.length).toLowerCase());
+           void 0 !== WW && (tW.has(WW) ? NW(bW, `${WW} already has a clip file, ${tW.get(WW).name}`) : tW.set(WW, {
+             name: bW,
+             text: iW
+           }))
+         } else {
+           const WW = TW(iW);
+           null === WW ? NW(bW, 'has no target: set "target" to the mob or vehicle it animates') : eW.has(WW) && !OW ? NW(bW, `packs can't animate ${WW}`) : mW.has(WW) ? wW.has(WW) ? NW(bW, `${WW} already has a binding, in ${wW.get(WW).name}`) : wW.set(WW, {
+ ... (4 more added lines; see GitHub link above)
```

#### 271. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10599-L10638` → after: `L37752-L37769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37752-L37769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37752-L37769) · [Before (L10599-L10638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10599-L10638)

```diff
-       if (He) {
-         const ee = `@${He.handle}`;
-         return (0, ke.jsxs)("a", {
-           className: "PlayerProfileSocialLink",
-           style: {
-             background: pe.color
-           },
-           href: He.profileUrl,
-           target: "_blank",
-           rel: "noopener noreferrer",
-           children: [(0, ke.jsxs)("div", {
-             className: "PlayerProfileSocialLinkMain",
-             children: [(0, ke.jsx)(fe, {
-               platform: ie
-             }), (0, ke.jsx)("span", {
-               className: "PlayerProfileSocialLinkText",
- ... (24 more removed lines; see GitHub link above)
+       const xW = new Set([...tW.values()].map((WW => {
+           let {
+             name: iW
+           } = WW;
+           return iW
+         }))),
+         lW = new jW.d(cW, (WW => xW.has(WW)));
+       EW.push(...lW.diagnostics);
+       const AW = new Map;
+       for (const [bW, UW] of tW) AW.set(bW, {
+         file: UW.name,
+         pool: new jW.d([UW])
+       });
+       return {
+         pool: lW,
+         bindings: wW,
+ ... (2 more added lines; see GitHub link above)
```

#### 272. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10670-L10691` → after: `L37773-L37780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37773-L37780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37773-L37780) · [Before (L10670-L10691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10670-L10691)

```diff
-     function pe(ee) {
-       let {
-         socialLinks: ie,
-         editable: He = !1,
-         userContext: ye,
-         onLinksUpdated: be
-       } = ee;
-       if (!He && 0 === ie.length) return null;
-       const Ke = new Map(ie.map((ee => [ee.platform, ee]))),
-         Ue = He ? Me.v : ie.map((ee => ee.platform));
-       return (0, ke.jsx)("div", {
-         className: "PlayerProfileSocialLinks",
-         children: (0, ke.jsx)("div", {
-           className: "PlayerProfileSocialLinksList",
-           children: Ue.map((ee => (0, ke.jsx)(Te, {
-             platform: ee,
- ... (6 more removed lines; see GitHub link above)
+     function IW(WW, iW, OW) {
+       const mW = WW.bindings.get(iW);
+       return void 0 === mW ? {
+         binding: null,
+         diagnostics: []
+       } : yW(mW.text, mW.name, {
+         stateNames: qW(iW),
+         pools: [WW.pool, ...OW]
```

#### 273. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10694-L10700` → after: `L37783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37783) · [Before (L10694-L10700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10694-L10700)

```diff
-   },
-   34936: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Me
-     });
-     var ye = He(59),
-       be = He(3791);
+     const aW = 0;
```

#### 274. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10702-L10709` → after: `L37785-L37825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37785-L37825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37785-L37825) · [Before (L10702-L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10702-L10709)

```diff
-     function Me() {
-       const [ee, ie] = (0, ye.useState)(!1);
-       return (0, ye.useLayoutEffect)((() => {
-         let ee = !0;
-         return (0, be.f)().then((() => {
-           ee && ie(!0)
-         })), () => {
-           ee = !1
+     function rW(WW, iW, OW) {
+       const mW = qW(OW),
+         EW = WW.targetClips.get(OW),
+         NW = WW.bindings.get(OW);
+       if (void 0 !== NW) {
+         const OW = void 0 === EW ? [WW.pool, iW.pool] : [EW.pool, WW.pool, iW.pool];
+         return yW(NW.text, NW.name, {
+           stateNames: mW,
+           pools: OW
+         })
+       }
+       if (void 0 === EW) return {
+         binding: null,
+         diagnostics: []
+       };
+       const PW = iW.bindings.get(OW);
+ ... (25 more added lines; see GitHub link above)
```

#### 275. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10711` → after: `L37827-L37836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37827-L37836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37827-L37836) · [Before (L10711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10711)

```diff
-       }), []), ee
+       }
+       return LW
+     }
+ 
+     function zW(WW, iW) {
+       return {
+         severity: kW.e.Warning,
+         source: WW,
+         message: iW
+       }
```

#### 276. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10714` → after: `L37839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37839) · [Before (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10714)

```diff
-   34836: (ee, ie, He) => {
+   38755: (WW, iW, OW) => {
```

#### 277. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10717` → after: `L37842-L37843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37842-L37843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37842-L37843) · [Before (L10717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10717)

```diff
-       f: () => fe
+       c: () => PW,
+       e: () => NW
```

#### 278. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10719-L10779` → after: `L37845-L37854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37845-L37854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37845-L37854) · [Before (L10719-L10779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10719-L10779)

```diff
-     He(34844);
-     var ye = He(1053),
-       be = He.n(ye),
-       Me = He(59),
-       Ke = He(34829);
- 
-     function Ue(ee, ie) {
-       return Math.max(1, Math.round(ee * ie))
-     }
- 
-     function Fe(ee, ie) {
-       const He = ie * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
-         ye = function(ee, ie) {
-           if (ee.lines) return Ue(ee.lineThickness, ie) % 2;
-           if (ee.dot) return Ue(ee.dotSize, ie) % 2;
-           return Je(ee, ie) % 2
- ... (45 more removed lines; see GitHub link above)
+     var mW = OW(38721);
+     class EW {
+       constructor(WW, iW) {
+         this.binding = WW, this.rig = iW, this.boneIndicesByClip = new Map, this.layerMasks = void 0, this.actionMasks = void 0, this.diagnostics = [], this.missing = new Set, this.animatesRig = !1, this.layerMasks = WW.layers.map((WW => {
+           for (const iW of LW(WW)) this.boneIndices(iW);
+           return this.mask(WW.bones, `layer "${WW.name}"`)
+         }));
+         const OW = new Map;
+         for (const mW of WW.actions.values()) this.boneIndices(mW.clip.clip), OW.set(mW.name, this.mask(mW.bones, `action "${mW.name}"`));
+         this.actionMasks = OW
```

#### 279. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10781-L10796` → after: `L37856-L37857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37856-L37857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37856-L37857) · [Before (L10781-L10796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10781-L10796)

```diff
-       const qe = ke.map((ee => ({
-         ...ee,
-         x: ee.x - Fe,
-         y: ee.y - Fe,
-         w: ee.w + 2 * Fe,
-         h: ee.h + 2 * Fe
-       })));
-       let fe = null,
-         Te = null;
-       if (ee.circle) {
-         const ie = Ue(ee.circleThickness, He),
-           Me = function(ee, ie) {
-             return ee + (ee % 2 === ie ? 0 : 1)
-           }(Je(ee, He), ye),
-           Ke = (be - Me) / 2;
-         fe = Re(Ke, Me, ie), Fe > 0 && (Te = Re(Ke - Fe, Me + 2 * Fe, ie + 2 * Fe))
+       get missingBones() {
+         return this.missing
```

#### 280. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10798-L10803` → after: `L37859-L37886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37859-L37886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37859-L37886) · [Before (L10798-L10803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10798-L10803)

```diff
-       return {
-         cell: be,
-         fills: ke,
-         outlines: Fe > 0 ? qe : [],
-         ring: fe,
-         ringOutline: Te
+       get animatesAnyBone() {
+         return this.animatesRig
+       }
+       boneIndices(WW) {
+         let iW = this.boneIndicesByClip.get(WW);
+         if (void 0 === iW) {
+           iW = Int32Array.from(WW.bones, (WW => this.rig.indexOf(WW.name)));
+           const OW = WW.bones.filter(((WW, OW) => iW[OW] < 0));
+           for (const WW of OW) this.missing.add(WW.name);
+           this.animatesRig ||= WW.bones.some((WW => this.rig.namesBone(WW.name))), OW.length > 0 && this.warn(`${WW.id} animates bones ${this.rig.id} does not have: ${OW.map((WW=>WW.name)).join(", ")}`), this.boneIndicesByClip.set(WW, iW)
+         }
+         return iW
+       }
+       mask(WW, iW) {
+         if (null === WW) return null;
+         const OW = new Uint8Array(this.rig.boneCount);
+ ... (12 more added lines; see GitHub link above)
```

#### 281. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10807-L10808` → after: `L37890-L37902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37890-L37902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37890-L37902) · [Before (L10807-L10808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10807-L10808)

```diff
-     function Je(ee, ie) {
-       return Math.round(ee.circleRadius * ie * 2 + Ue(ee.circleThickness, ie))
+     function NW(WW) {
+       const iW = new Set,
+         OW = (WW, OW) => {
+           const mW = null === OW ? null : new Set(OW.map((WW => WW.toLowerCase())));
+           for (const EW of WW.bones) {
+             const WW = EW.name.toLowerCase();
+             (null === mW || mW.has(WW)) && iW.add(WW)
+           }
+         };
+       for (const mW of WW.layers)
+         for (const WW of LW(mW)) OW(WW, mW.bones);
+       for (const mW of WW.actions.values()) OW(mW.clip.clip, mW.bones);
+       return iW
```

#### 282. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10811-L10812` → after: `L37905-L37907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37905-L37907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37905-L37907) · [Before (L10811-L10812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10811-L10812)

```diff
-     function oe(ee, ie) {
-       return Math.max(2 - ie, 2 * Math.round((ee - ie) / 2) + ie)
+     function* PW(WW) {
+       for (const iW of WW.layers) yield* cW(iW);
+       for (const iW of WW.actions.values()) yield iW.clip
```

#### 283. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10815-L10823` → after: `L37910-L37911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37910-L37911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37910-L37911) · [Before (L10815-L10823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10815-L10823)

```diff
-     function Re(ee, ie, He) {
-       const ye = 2 * He >= ie - 1;
-       return {
-         x: ee,
-         y: ee,
-         size: ie,
-         border: Math.min(He, Math.floor(ie / 2)),
-         filled: ye
-       }
+     function* LW(WW) {
+       for (const iW of cW(WW)) yield iW.clip
```

#### 284. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10828-L10829` → after: `L37914-L37919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37914-L37919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37914-L37919) · [Before (L10828-L10829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10828-L10829)

```diff
-     function fe(ee, ie) {
-       return ee && ie ? `scale(${qe})` : "scale(1)"
+     function* cW(WW) {
+       for (const OW of [...WW.states.values(), WW.fallback])
+         for (const WW of null !== (iW = null === OW || void 0 === OW ? void 0 : OW.children) && void 0 !== iW ? iW : []) {
+           var iW;
+           yield WW.clip
+         }
```

#### 285. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10833-L10852` → after: `L37939-L37964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37939-L37964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37939-L37964) · [Before (L10833-L10852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10833-L10852)

```diff
-       return "classic" === ee.settings.style ? (0, ke.jsx)(ze, {
-         ...ee
-       }) : (0, ke.jsx)(te, {
-         ...ee
-       })
-     }
-     const pe = .125;
- 
-     function Xe(ee, ie) {
-       const He = {};
-       if (ee.color !== Ke.e.color && (He.color = (0, Ke.j)(ee.color)), ee.opacity !== Ke.e.opacity && (He.opacity = ee.opacity / 100), ee.outline !== Ke.e.outline || ee.outlineColor !== Ke.e.outlineColor) {
-         const ie = ee.outline,
-           ye = (0, Ke.j)(ee.outlineColor);
-         He.textShadow = ie > 0 ? `-${ie}px 0 ${ye}, 0 ${ie}px ${ye}, ${ie}px 0 ${ye}, 0 -${ie}px ${ye}` : "none"
-       }
-       if (ee.size !== Ke.e.size) {
- ... (4 more removed lines; see GitHub link above)
+       return "" === WW || "0" === WW || WW.length > EW.e ? WW : NW.test(WW) ? (-parseFloat(WW)).toString() : function(WW, iW) {
+         if (WW.includes("return ")) return function(WW, iW) {
+           let OW = "",
+             mW = 0,
+             EW = 0;
+           for (;;) {
+             const NW = WW.indexOf("return ", EW);
+             if (-1 === NW) break;
+             const PW = NW + 7,
+               LW = tW(WW, PW);
+             if (-1 !== LW) {
+               if (OW += WW.substring(mW, PW) + iW(WW.substring(PW, LW)), mW = LW, LW === WW.length) break;
+               EW = LW + 1
+             } else EW = ZW(WW, PW) + 1
+           }
+           return OW + WW.substring(mW)
+ ... (10 more added lines; see GitHub link above)
```

#### 286. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10856-L10876` → after: `L37968-L37990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37968-L37990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37968-L37990) · [Before (L10856-L10876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10856-L10876)

```diff
-       let {
-         settings: ie,
-         touch: He,
-         inPreview: ye,
-         inEditor: Me,
-         pressed: Ke = !1,
-         pressRef: Ue
-       } = ee;
-       return (0, ke.jsx)("div", {
-         className: be()("Crosshair", {
-           Touch: He,
-           CrosshairInPreview: ye,
-           CrosshairInEditor: Me || ye
-         }),
-         ref: Ue,
-         style: {
- ... (5 more removed lines; see GitHub link above)
+       let iW, OW = !0,
+         mW = 0,
+         EW = "";
+       for (const NW of WW) {
+         if (0 === mW) {
+           let WW, mW = !0;
+           if ("-" === NW && "*" !== iW && "/" !== iW) {
+             OW || iW || (EW += "+"), OW = !1;
+             continue
+           }
+           if (" " === NW || "\n" === NW) mW = !1;
+           else {
+             if ("+" === NW && "*" !== iW && "/" !== iW) {
+               EW += "-", OW = !1;
+               continue
+             }
+ ... (7 more added lines; see GitHub link above)
```

#### 287. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10880` → after: `L37994-L37999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R37994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L37994-L37999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L37994-L37999) · [Before (L10880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10880)

```diff
-       return ee / ie + "px"
+       if (iW >= WW.length || xW(WW[iW])) return -1;
+       for (let OW = iW + 1; OW < WW.length; OW++) {
+         if (";" === WW[OW]) return OW;
+         if (xW(WW[OW])) return -1
+       }
+       return WW.length
```

#### 288. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10883-L10889` → after: `L38002-L38025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38002-L38025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L38002-L38025) · [Before (L10883-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10883-L10889)

```diff
-     function Ee(ee, ie, He, ye) {
-       return {
-         ...de(ee, ie, He),
-         width: Be(ee.w, He),
-         height: Be(ee.h, He),
-         background: ye
-       }
+     function ZW(WW, iW) {
+       for (let OW = iW; OW < WW.length; OW++)
+         if (xW(WW[OW])) return OW;
+       return WW.length
+     }
+ 
+     function xW(WW) {
+       return "\n" === WW || "\r" === WW || "\u2028" === WW || "\u2029" === WW
+     }
+     class lW extends Error {}
+     const AW = 3600,
+       bW = /^(\d+(\.\d*)?|\.\d+)$/;
+ 
+     function jW(WW, iW) {
+       const OW = bW.test(WW) ? Number(WW) : NaN;
+       if (!(OW >= 0 && OW <= AW)) throw new lW(`${iW}: keyframe time "${WW}" must be a number of seconds from 0 to ${AW}`);
+ ... (8 more added lines; see GitHub link above)
```

#### 289. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10893-L10900` → after: `L38029-L38036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38029-L38036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L38029-L38036) · [Before (L10893-L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10893-L10900)

```diff
-       return {
-         left: Be(ee.x, ie),
-         top: Be(ee.y, ie),
-         width: Be(ee.size, ie),
-         height: Be(ee.size, ie),
-         borderWidth: Be(ee.border, ie),
-         borderColor: He,
-         background: ee.filled ? He : void 0
+       if (YW(WW)) {
+         const mW = WW.pre,
+           EW = WW.post,
+           NW = [];
+         mW && NW.push(sW(mW, iW, OW));
+         const PW = Array.isArray(mW) && Array.isArray(EW) && mW.length === EW.length && mW.every(((WW, iW) => WW === EW[iW]));
+         if (EW && !PW && NW.push(sW(EW, iW, OW)), 0 === NW.length) throw new lW(`${OW}: a keyframe needs "post" and optionally "pre"`);
+         return NW
```

#### 290. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10911-L10914` → after: `L38042-L38074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38042-L38074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L38042-L38074) · [Before (L10911-L10914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10911-L10914)

```diff
-       const [ye, be] = ee.arm ? Oe[ee.arm] : [0, 0], Me = Math.round(ie * He);
-       return {
-         left: Be(ee.x + ye * Me, He),
-         top: Be(ee.y + be * Me, He)
+       if ("number" === typeof WW || "string" === typeof WW) return [WW, WW, WW];
+       if (Array.isArray(WW)) return function(WW, iW) {
+         switch (iW) {
+           case mW.g.Position:
+             return [MW(WW[0]), WW[1], WW[2]];
+           case mW.g.Rotation:
+             return [MW(WW[0]), MW(WW[1]), WW[2]];
+           case mW.g.Scale:
+             return WW
+         }
+       }(function(WW, iW) {
+         for (const OW of WW)
+           if ("number" !== typeof OW && "string" !== typeof OW) throw new lW(`${iW}: vector elements must be numbers or Molang strings`);
+         if (1 === WW.length) {
+           const iW = WW[0];
+           return [iW, iW, iW]
+ ... (17 more added lines; see GitHub link above)
```

#### 291. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10919-L10923` → after: `L38080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L38080) · [Before (L10919-L10923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10919-L10923)

```diff
-       return ee.arm ? {
-         "data-arm": ee.arm,
-         "data-x": ee.x,
-         "data-y": ee.y
-       } : {}
+       WW.step = !0, WW.catmullRom = !1
```

#### 292. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10927-L10980` → after: `L38084-L38306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38084-L38306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L38084-L38306) · [Before (L10927-L10980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10927-L10980)

```diff
-       let {
-         settings: ie,
-         inPreview: He,
-         inEditor: ye,
-         pressed: Ue = !1,
-         spread: Je,
-         spreadRef: oe
-       } = ee;
-       const Re = (0, Me.useRef)(null),
-         {
-           box: fe,
-           dpr: Te
-         } = function(ee) {
-           const [ie, He] = (0, Me.useState)({
-             box: {
-               left: 0,
- ... (38 more removed lines; see GitHub link above)
+       return "object" === typeof WW && null !== WW && !Array.isArray(WW)
+     }
+   },
+   38708: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => WO
+     });
+     const mW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"67","inputs":{"speed":{"from":"groundSpeed","rise":12,"fall":12},"swing":{"from":"groundSpeed","scale":9.17,"offset":14.9,"min":51.6,"max":80.2,"rise":12,"fall":12},"armsFree":{"from":"aiming","sca … [truncated]
+       EW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Armored Car","inputs":{"turn":{"from":"turnRate","scale":1.688,"min":-3.4,"max":3.4,"rise":10,"fall":8},"fwd":{"from":"forwardSpeed","min":-40,"max":40,"rise":6,"fall":6},"fwd_lag":{"from":"forwardSpee … [truncated]
+       NW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Armour Collector","inputs":{"speed":{"from":"groundSpeed","rise":12,"fall":12},"swing":{"from":"groundSpeed","scale":7.794,"offset":12.665,"min":43.86,"max":68.17,"rise":12,"fall":12},"armsFree":{"from … [truncated]
+       PW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Bear","inputs":{"speed":{"from":"groundSpeed","rise":12,"fall":12},"swing":{"from":"groundSpeed","scale":9.17,"offset":14.9,"min":51.6,"max":80.2,"rise":12,"fall":12}},"variables":{"swing":"swing","fac … [truncated]
+       LW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Black Kart","inputs":{"turn":{"from":"turnRate","scale":1.406,"min":-5.3,"max":5.3,"rise":10,"fall":8},"fwd":{"from":"forwardSpeed","min":-40,"max":40,"rise":6,"fall":6}},"variables":{"turn":"turn","fw … [truncated]
+       cW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Blue Kart","inputs":{"turn":{"from":"turnRate","scale":1.406,"min":-5.3,"max":5.3,"rise":10,"fall":8},"fwd":{"from":"forwardSpeed","min":-40,"max":40,"rise":6,"fall":6}},"variables":{"turn":"turn","fwd … [truncated]
+       wW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Bobino Musculino","inputs":{"speed":{"from":"groundSpeed","rise":12,"fall":12},"swing":{"from":"groundSpeed","scale":9.17,"offset":14.9,"min":51.6,"max":80.2,"rise":12,"fall":12},"armsFree":{"from":"ai … [truncated]
+       tW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Brown Kart","inputs":{"turn":{"from":"turnRate","scale":1.406,"min":-5.3,"max":5.3,"rise":10,"fall":8},"fwd":{"from":"forwardSpeed","min":-40,"max":40,"rise":6,"fall":6}},"variables":{"turn":"turn","fw … [truncated]
+       ZW = JSON.parse('{"format_version":"bloxd.animation.binding.1","target":"Camel","inputs":{"speed":{"from":"groundSpeed","rise":12,"fall":12},"swing":{"from":"groundSpeed","scale":9.17,"offset":14.9,"min":51.6,"max":80.2,"rise":12,"fall":12}},"variables":{"swing":"swing","hi … [truncated]
+ ... (207 more added lines; see GitHub link above)
```

#### 293. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10982-L10987` → after: `L38308-L38687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38308-L38687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L38308-L38687) · [Before (L10982-L10987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10982-L10987)

```diff
-         }(fe, Xe.cell, Te),
-         Be = (0, Ke.j)(ie.color),
-         Oe = (0, Ke.j)(ie.outlineColor),
-         te = (0, Me.useRef)(0);
-       (0, Me.useLayoutEffect)((() => {
-         if (oe) return oe.current = ee => {
+           return WW => WW.queries[OW] * NW
+         }
+         if (void 0 !== iW.variable) {
+           const OW = iW.variable;
+           switch (WW) {
+             case "+":
+               return WW => WW.variables[OW] + NW;
+             case "-":
+               return WW => WW.variables[OW] - NW
+           }
+           return WW => WW.variables[OW] * NW
+         }
+         switch (WW) {
+           case "+":
+             return WW => mW(WW) + NW;
+           case "-":
+ ... (364 more added lines; see GitHub link above)
```

#### 294. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L10989-L10999` → after: `L38689-L38695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38689-L38695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L38689-L38695) · [Before (L10989-L10999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L10989-L10999)

```diff
-           te.current = ee, null === (ie = Re.current) || void 0 === ie || ie.querySelectorAll("[data-arm]").forEach((ie => {
-             Object.assign(ie.style, de(function(ee) {
-               return {
-                 x: Number(ee.dataset.x),
-                 y: Number(ee.dataset.y),
-                 arm: ee.dataset.arm
-               }
-             }(ie), ee, pe.current))
-           }))
-         }, () => {
-           oe.current = null
+           const EW = this.peek(),
+             NW = EW.kind === uW.Operator ? MW.get(EW.text) : void 0;
+           if (void 0 === NW || NW.precedence < WW) return iW;
+           this.index++;
+           const PW = this.parseBinary(NW.rightAssociative ? NW.precedence : NW.precedence + 1),
+             LW = null !== (OW = mW(EW.text, iW, PW)) && void 0 !== OW ? OW : KW(EW.text, iW.evaluate, PW.evaluate);
+           iW = this.compositeNode([iW, PW], LW)
```

#### 295. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11001-L11036` → after: `L38697-L38844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38697-L38844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L38697-L38844) · [Before (L11001-L11036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11001-L11036)

```diff
-       }), [oe]);
-       const Ze = null !== Je && void 0 !== Je ? Je : te.current;
-       return (0, ke.jsx)("div", {
-         ref: Re,
-         className: be()("CrosshairShapes", {
-           CrosshairInPreview: He,
-           CrosshairInEditor: ye || He,
-           CrosshairSpreads: void 0 !== oe
-         }),
-         children: (0, ke.jsx)("div", {
-           className: "CrosshairShapesOrigin",
-           style: {
-             left: ze.x,
-             top: ze.y,
-             opacity: ie.opacity / 100
-           },
- ... (20 more removed lines; see GitHub link above)
+       }
+       parseUnary() {
+         const WW = this.peek();
+         if (WW.kind !== uW.Operator || "-" !== WW.text && "+" !== WW.text && "!" !== WW.text) return this.parsePrimary();
+         this.index++, this.enterNesting();
+         const iW = this.parseUnary();
+         this.depth--;
+         const OW = iW.evaluate;
+         return "-" === WW.text ? this.compositeNode([iW], (WW => 0 - OW(WW))) : "+" === WW.text ? this.compositeNode([iW], (WW => 0 + OW(WW))) : this.compositeNode([iW], (WW => 0 === OW(WW) ? 1 : 0))
+       }
+       parsePrimary() {
+         const WW = this.peek();
+         if (this.index++, WW.kind === uW.Number) return this.constantNode(Number.parseFloat(WW.text));
+         if (WW.kind === uW.Identifier) return this.parseIdentifier(WW);
+         if ("(" === WW.text) {
+           const WW = this.parseExpression();
+ ... (132 more added lines; see GitHub link above)
```

#### 296. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11039` → after: `L38847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L38847) · [Before (L11039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11039)

```diff
-   34851: (ee, ie, He) => {
+   39595: (WW, iW, OW) => {
```

#### 297. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11041-L11043` → after: `L38849-L38850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38849-L38850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L38849-L38850) · [Before (L11041-L11043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11041-L11043)

```diff
-       e: () => oe,
-       h: () => pe,
-       j: () => Te
+       c: () => dW,
+       f: () => eW
```

#### 298. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11045-L11052` → after: `L38852-L38870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38852-L38870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L38852-L38870) · [Before (L11045-L11052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11045-L11052)

```diff
-     var ye = He(34829);
-     const be = "XH1-",
-       Me = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
-       Ke = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
-       Ue = ["color", "outlineColor"],
-       Fe = 1 + 3 * Ue.length + Ke.length + 1,
-       Je = Math.ceil(8 * Fe / Math.log2(62)),
-       oe = be.length + Je;
+     var mW = OW(5725),
+       EW = OW(5754);
+     const NW = [
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 0, 1],
+       [0, 0, -1],
+       [0, 1, 0],
+       [0, -1, 0]
+     ];
+     var PW = OW(5772),
+       LW = OW(39392),
+       cW = OW(5766);
+     const wW = {
+       1: [0, -1],
+       2: [-1, 0],
+ ... (3 more added lines; see GitHub link above)
```

#### 299. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11055-L11057` → after: `L38873-L38874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38873-L38874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L38873-L38874) · [Before (L11055-L11057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11055-L11057)

```diff
-       let ie = 90;
-       for (const He of ee) ie = 31 * ie + He & 255;
-       return ie
+       let [iW, OW] = WW;
+       return [-OW, iW]
```

#### 300. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11063-L11072` → after: `L38878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L38878) · [Before (L11063-L11072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11063-L11072)

```diff
-       let He = 0n;
-       for (const be of ee) {
-         const ee = ke.indexOf(be);
-         if (ee < 0) return null;
-         He = He * qe + BigInt(ee)
-       }
-       if (He >> BigInt(8 * ie) !== 0n) return null;
-       const ye = [];
-       for (let be = 0; be < ie; be++) ye.unshift(Number(0xffn & He)), He >>= 8n;
-       return ye
+       return WW[0] === iW[0] && WW[1] === iW[1]
```

#### 301. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11076-L11083` → after: `L38910-L38931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38910-L38931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L38910-L38931) · [Before (L11076-L11083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11076-L11083)

```diff
-       let ie = "shapes" === ee.style ? 1 : 0;
-       Me.forEach(((He, ye) => {
-         ee[He] && (ie |= 1 << ye + 1)
-       }));
-       const He = [ie];
-       for (const be of Ue) {
-         const ie = (0, ye.f)(be, ee[be]);
-         He.push(ie >> 16 & 255, ie >> 8 & 255, 255 & ie)
+       var iW, OW;
+       return null !== (iW = null === (OW = mW.j[WW]) || void 0 === OW ? void 0 : OW.meta.rootName) && void 0 !== iW ? iW : ""
+     }
+ 
+     function YW(WW) {
+       return SW(WW) === AW.i && (0, AW.V)(mW.j[WW].name)
+     }
+     var yW = OW(5762),
+       TW = OW(5780);
+     const JW = [
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 0, 1],
+       [0, 0, -1]
+     ];
+ 
+ ... (6 more added lines; see GitHub link above)
```

#### 302. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11085` → after: `L38933-L38965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38933-L38965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L38933-L38965) · [Before (L11085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11085)

```diff
-       for (const be of Ke) {
+     }
+ 
+     function HW(WW, iW, OW, mW) {
+       return hW(WW(iW, OW, mW))
+     }
+ 
+     function nW(WW, iW, OW, mW, EW) {
+       let {
+         rot: NW,
+         half: PW
+       } = EW;
+       const [LW, cW] = (0, TW.h)(NW, PW), wW = HW(WW, iW + LW, OW, mW + cW);
+       return null !== wW && wW.rot === NW && wW.half === TW.l[PW]
+     }
+     var uW = OW(39602);
+     const oW = [new class {
+ ... (17 more added lines; see GitHub link above)
```

#### 303. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11087-L11090` → after: `L38967-L38973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38967-L38973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L38967-L38973) · [Before (L11087-L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11087-L11090)

```diff
-           min: ie,
-           step: Me
-         } = ye.d[be];
-         He.push(Math.round(((0, ye.f)(be, ee[be]) - ie) / Me))
+           rot: iW,
+           halfblockPlacement: OW
+         } = mW.j[WW].meta;
+         return {
+           rot: iW,
+           half: OW
+         }
```

#### 304. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11092-L11098` → after: `L38975-L39122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R38975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L38975-L39122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L38975-L39122) · [Before (L11092-L11098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11092-L11098)

```diff
-       return He.push(Re(He)), be + function(ee, ie) {
-         let He = 0n;
-         for (const be of ee) He = He << 8n | BigInt(be);
-         let ye = "";
-         for (let be = 0; be < ie; be++) ye = ke[Number(He % qe)] + ye, He /= qe;
-         return ye
-       }(He, Je)
+       stairsAt(WW, iW, OW, mW) {
+         const EW = WW(iW, OW, mW);
+         return this.handles(EW) ? this.stairsOf(EW) : null
+       }
+       cornerAt(WW, iW, OW, mW, EW) {
+         let {
+           rot: NW,
+           half: PW
+         } = EW;
+         const LW = wW[NW],
+           cW = EW => {
+             let [LW, cW] = EW;
+             const wW = this.stairsAt(WW, iW + LW, OW, mW + cW);
+             return null !== wW && wW.rot === NW && wW.half === PW
+           },
+           lW = this.stairsAt(WW, iW + LW[0], OW, mW + LW[1]);
+ ... (132 more added lines; see GitHub link above)
```

#### 305. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11102-L11104` → after: `L39126-L39128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39126-L39128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39126-L39128) · [Before (L11102-L11104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11102-L11104)

```diff
-       for (const ie of ee.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Je}})`, "gi"))) {
-         const ee = Xe(fe(ie[1], Fe));
-         if (ee) return ee
+       for (const mW of oW) {
+         var iW, OW;
+         if (mW.handles(WW)) return null !== (iW = null === (OW = mW.placedBy) || void 0 === OW ? void 0 : OW.call(mW, WW)) && void 0 !== iW ? iW : null
```

#### 306. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11109-L11117` → after: `L39149-L39175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39149-L39175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39149-L39175) · [Before (L11109-L11117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11109-L11117)

```diff
-     function Xe(ee) {
-       if (!ee || ee.length !== Fe || Re(ee.slice(0, -1)) !== ee[ee.length - 1]) return null;
-       const ie = ee[0],
-         He = {
-           ...ye.e,
-           style: 1 & ie ? "shapes" : "classic"
-         };
-       Me.forEach(((ee, ye) => {
-         He[ee] = 0 !== (ie & 1 << ye + 1)
+     function xW(WW, iW, OW) {
+       const mW = new Set([NW.h, NW.e, ZW, ...iW, ...OW, ...WW ? [PW.l] : []]);
+       return {
+         makers: new Set(iW),
+         roots: mW
+       }
+     }
+     const lW = {
+         water: xW(!0, ["Condenser"], ["Centrifuge", "Synthesizer", PW.c]),
+         cryo: xW(!1, [PW.c], [])
+       },
+       AW = new Set([...lW.water.roots, ...lW.cryo.roots]),
+       bW = {
+         nx: [-1, 0, 0],
+         ny: [0, -1, 0],
+         nz: [0, 0, -1],
+ ... (11 more added lines; see GitHub link above)
```

#### 307. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11119-L11126` → after: `L39177-L39279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39177-L39279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39177-L39279) · [Before (L11119-L11126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11119-L11126)

```diff
-       let be = 1;
-       for (const ye of Ue) He[ye] = ee[be] << 16 | ee[be + 1] << 8 | ee[be + 2], be += 3;
-       for (const Me of Ke) {
-         const {
-           min: ie,
-           step: Ke
-         } = ye.d[Me];
-         He[Me] = (0, ye.f)(Me, ie + ee[be] * Ke), be++
+ 
+     function kW(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
+       const OW = mW.j[WW],
+         EW = null === OW || void 0 === OW ? void 0 : OW.meta.rootName,
+         xW = lW[iW];
+       if (!EW || !xW.roots.has(EW)) return null;
+       if ((0, NW.p)(EW)) return (0, PW.J)(OW.name) === iW ? cW : null;
+       if (EW === PW.l) return wW;
+       if (EW === ZW) return OW.name.endsWith("|Water") ? tW : null;
+       const [AW, bW] = LW.h[(OW.meta.rot || 1) - 1];
+       return (0, PW.M)(xW.makers.has(EW) ? "maker" : "user", [-AW, 0, -bW])
+     }
+ 
+     function sW(WW, iW, OW, EW) {
+       let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
+ ... (87 more added lines; see GitHub link above)
```

#### 308. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11131` → after: `L39283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39283) · [Before (L11131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11131)

```diff
-   34829: (ee, ie, He) => {
+   39629: (WW, iW, OW) => {
```

#### 309. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11133-L11140` → after: `L39285-L39286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39285-L39286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39285-L39286) · [Before (L11133-L11140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11133-L11140)

```diff
-       d: () => ye,
-       e: () => be,
-       f: () => Me,
-       j: () => Je,
-       k: () => Fe,
-       l: () => oe,
-       n: () => Ue,
-       o: () => Ke
+       b: () => LW,
+       d: () => cW
```

#### 310. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11142-L11191` → after: `L39288-L39299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39288-L39299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39288-L39299) · [Before (L11142-L11191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11142-L11191)

```diff
-     const ye = {
-         opacity: {
-           min: 5,
-           max: 100,
-           step: 1
-         },
-         outline: {
-           min: 0,
-           max: 4,
-           step: .1
-         },
-         size: {
-           min: 25,
-           max: 400,
-           step: 5
-         },
- ... (34 more removed lines; see GitHub link above)
+     var mW = OW(352),
+       EW = OW.n(mW),
+       NW = OW(39638),
+       PW = OW.n(NW);
+ 
+     function LW(WW) {
+       return {
+         name: "collideEntitiesProjectile",
+         order: 70,
+         state: {
+           callback: null,
+           _lastPos: null
```

#### 311. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11193-L11196` → after: `L39301-L39309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39301-L39309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39301-L39309) · [Before (L11193-L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11193-L11196)

```diff
-         outlineColor: {
-           min: 0,
-           max: 16777215,
-           step: 1
+         mY: function(WW, iW) {},
+         mH: null,
+         system: function(iW, OW) {
+           ! function(WW) {
+             const iW = WW.EY.RD("collideEntitiesProjectile");
+             if (0 === iW.length) return;
+             const OW = xW(WW);
+             for (const mW of iW) mW && ZW(WW, mW, OW)
+           }(WW)
```

#### 312. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11198-L11218` → after: `L39311-L39312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39311-L39312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39311-L39312) · [Before (L11198-L11218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11198-L11218)

```diff
-       },
-       be = Object.freeze({
-         style: "classic",
-         color: 16777215,
-         opacity: 100,
-         outline: 1.2,
-         outlineColor: 0,
-         growOnClick: !0,
-         size: 100,
-         lines: !0,
-         lineLength: 6,
-         lineThickness: 2,
-         gap: 3,
-         tStyle: !1,
-         dot: !1,
-         dotSize: 2,
- ... (5 more removed lines; see GitHub link above)
+       }
+     }
```

#### 313. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11222-L11230` → after: `L39316-L39320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39316-L39320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39316-L39320) · [Before (L11222-L11230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11222-L11230)

```diff
-       const {
-         min: Me,
-         max: Ke,
-         step: Ue
-       } = ye[ee];
-       if (!Number.isFinite(ie)) return be[ee];
-       const Fe = (null !== (He = String(Ue).split(".")[1]) && void 0 !== He ? He : "").length,
-         Je = Number((Math.round(ie / Ue) * Ue).toFixed(Fe));
-       return Math.min(Ke, Math.max(Me, Je))
+       const mW = xW(WW),
+         NW = WW.EY.jB(iW),
+         PW = WW.EY.YG(iW),
+         LW = [NW.Mx.base[0] + PW.width / 2, NW.Mx.base[1] + PW.height / 2, NW.Mx.base[2] + PW.width / 2];
+       EW().add(LW, LW, null !== (OW = PW.Wl) && void 0 !== OW ? OW : WW.Wl), ZW(WW, WW.EY.getState(iW, "collideEntitiesProjectile"), mW, LW)
```

#### 314. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11234-L11237` → after: `L39326-L39336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39326-L39336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39326-L39336) · [Before (L11234-L11237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11234-L11237)

```diff
-       const ye = "number" === typeof He ? Me(ie, He) : He;
-       return {
-         ...ee,
-         [ie]: ye
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.EY.Vk(iW.rD);
+       if (null === iW._lastPos) return void(iW._lastPos = EW().clone(mW));
+       EW().sub(wW, mW, iW._lastPos);
+       const NW = EW().length(wW);
+       0 === NW && (wW[0] = 1e-4);
+       for (let EW = 0; EW < tW.length; EW++) {
+         const mW = OW[EW];
+         if (!WW.EY.liW(mW.rD, "collideEntities")) continue;
+         if (!mW.UmW) continue;
+         const ZW = PW().distance(iW._lastPos, wW, tW[EW]);
+         if (LW = iW._lastPos, cW = tW[EW], (LW[0] >= cW[0][0] && LW[0] <= cW[1][0] && LW[1] >= cW[0][1] && LW[1] <= cW[1][1] && LW[2] >= cW[0][2] && LW[2] <= cW[1][2] || Math.abs(ZW) <= NW) && (iW.callback(mW.rD), !WW.EY.liW(iW.rD, "collideEntitiesProjectile"))) break
```

#### 315. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11239-L11243` → after: `L39338-L39339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39338-L39339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39338-L39339) · [Before (L11239-L11243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11239-L11243)

```diff
-     }
- 
-     function Ue(ee, ie) {
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-       return Object.keys(be).every((ye => He.includes(ye) || ee[ye] === ie[ye]))
+       var LW, cW;
+       EW().copy(iW._lastPos, mW)
```

#### 316. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11247` → after: `L39343-L39396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39343-L39396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39343-L39396) · [Before (L11247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11247)

```diff
-       return Ue(ee, be)
+       const iW = WW.EY.RD("collideEntities");
+       for (let NW = 0; NW < iW.length; NW++) {
+         var OW, mW;
+         const PW = WW.EY.YG(iW[NW].rD),
+           LW = iW[NW].bmW / 2,
+           cW = iW[NW].jmW / 2;
+         tW[NW] = [
+           [PW.WmW[0] - LW, PW.WmW[1] - cW, PW.WmW[2] - LW],
+           [PW.WmW[3] + LW, PW.WmW[4] + cW, PW.WmW[5] + LW]
+         ], EW().add(tW[NW][0], tW[NW][0], null !== (OW = PW.Wl) && void 0 !== OW ? OW : WW.Wl), EW().add(tW[NW][1], tW[NW][1], null !== (mW = PW.Wl) && void 0 !== mW ? mW : WW.Wl)
+       }
+       return tW.length = iW.length, iW.slice()
+     }
+   },
+   38862: (WW, iW, OW) => {
+     OW.d(iW, {
+ ... (38 more added lines; see GitHub link above)
```

#### 317. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11251` → after: `L39401-L39402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39401-L39402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39401-L39402) · [Before (L11251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11251)

```diff
-       return `#${ee.toString(16).padStart(6,"0")}`
+       const iW = WW.EY.HiW(WW.Dv);
+       return LW && cW && (iW.isInCobweb !== LW || iW.isInFluid !== cW)
```

#### 318. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11255-L11256` → after: `L39406-L39451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39406-L39451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39406-L39451) · [Before (L11255-L11256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11255-L11256)

```diff
-       const ie = /^#?([0-9a-f]{6})$/i.exec(ee.trim());
-       return ie ? parseInt(ie[1], 16) : null
+       return {
+         name: "movement",
+         order: 30,
+         stateConstructor: PW,
+         mY: (iW, OW) => {
+           OW.Hx = WW, LW = OW.isInCobweb, cW = OW.isInFluid
+         },
+         mH: null,
+         system: function(WW, iW) {}
+       }
+     }
+   },
+   38354: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => mW
+     });
+ ... (30 more added lines; see GitHub link above)
```

#### 319. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11259` → after: `L39454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39454) · [Before (L11259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11259)

```diff
-   34859: (ee, ie, He) => {
+   38979: (WW, iW, OW) => {
```

#### 320. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11262` → after: `L39457-L39464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39457-L39464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39457-L39464) · [Before (L11262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11262)

```diff
-       f: () => ke
+       e: () => PW,
+       i: () => lW,
+       j: () => ZW,
+       k: () => tW,
+       m: () => cW,
+       p: () => xW,
+       s: () => bW,
+       t: () => AW
```

#### 321. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11264-L11270` → after: `L39466-L39468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39466-L39468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39466-L39468) · [Before (L11264-L11270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11264-L11270)

```diff
-     var ye = He(59),
-       be = He(35),
-       Me = He(34851),
-       Ke = He(34829);
-     const Ue = "crosshairCode";
-     let Fe = null;
-     const Je = new Set;
+     var mW = OW(182),
+       EW = OW(5725),
+       NW = OW(38986);
```

#### 322. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11272-L11276` → after: `L39470-L39487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39470-L39487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39470-L39487) · [Before (L11272-L11276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11272-L11276)

```diff
-     function oe() {
-       if (null === Fe) {
-         var ee;
-         const ie = be.i.getItem(Ue);
-         Fe = null !== (ee = "string" === typeof ie ? (0, Me.h)(ie) : null) && void 0 !== ee ? ee : Ke.e
+     function PW(WW, iW) {
+       return null !== iW && void 0 !== iW ? iW : WW ? 0 : mW.f.ezBridgeGrowMs
+     }
+     const LW = [
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 0, 1],
+       [0, 0, -1]
+     ];
+ 
+     function cW(WW, iW, OW, mW, EW) {
+       for (const [NW, PW, cW] of LW) {
+         if (EW) {
+           const WW = iW + .5 + .5 * NW,
+             OW = mW + .5 + .5 * cW;
+           if (NW * (EW[0] - WW) + cW * (EW[2] - OW) <= 0) continue
+ ... (2 more added lines; see GitHub link above)
```

#### 323. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11278` → after: `L39489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39489) · [Before (L11278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11278)

```diff
-       return Fe
+       return !1
```

#### 324. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11282-L11283` → after: `L39496-L39497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39496-L39497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39496-L39497) · [Before (L11282-L11283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11282-L11283)

```diff
-       Fe = ee, (0, Ke.k)(ee) ? be.i.removeItem(Ue) : be.i.setItem(Ue, (0, Me.j)(ee));
-       for (const ie of Je) ie()
+       const iW = EW.j[WW];
+       return !!iW && (!(WW in NW.e) && (iW.model ? "Slab" === iW.model : !iW.twoDBlockItem))
```

#### 325. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11286-L11296` → after: `L39500-L39519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39500-L39519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39500-L39519) · [Before (L11286-L11296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11286-L11296)

```diff
-     function ke() {
-       const [ee, ie] = (0, ye.useState)(oe);
-       return (0, ye.useEffect)((() => {
-         const ee = () => {
-           ie(oe())
-         };
-         return ee(), He = ee, Je.add(He), () => {
-           Je.delete(He)
-         };
-         var He
-       }), []), ee
+     function lW(WW, iW, OW) {
+       const mW = iW - WW;
+       if (mW <= 0) return tW;
+       const EW = Math.min(1, Math.max(0, (OW - WW) / mW));
+       return wW + (tW - wW) * EW
+     }
+ 
+     function AW(WW, iW, OW) {
+       const mW = lW(WW.startedAtMs, WW.endsAtMs, OW);
+       return lW(iW.startedAtMs, iW.endsAtMs, OW) >= mW ? iW : WW
+     }
+ 
+     function bW(WW, iW, OW) {
+       let mW = 1 / 0;
+       for (let EW = 0; EW < 3; EW++) {
+         if (0 === iW[EW]) continue;
+ ... (4 more added lines; see GitHub link above)
```

#### 326. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11299` → after: `L39523-L39526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39523-L39526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39523-L39526) · [Before (L11299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11299)

```diff
-   34824: (ee, ie, He) => {
+   38911: (WW, iW, OW) => {
+     function mW(WW) {
+       return "string" !== typeof WW || 2 !== WW.length && ":" !== WW[2] ? null : WW[0] + WW[1]
+     }
```

#### 327. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11301-L11302` → after: `L39528-L39537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39528-L39537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39528-L39537) · [Before (L11301-L11302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11301-L11302)

```diff
-       b: () => Me,
-       e: () => be
+       c: () => jW,
+       g: () => SW,
+       i: () => KW,
+       l: () => YW,
+       o: () => LW,
+       q: () => PW,
+       s: () => NW,
+       v: () => cW,
+       x: () => UW,
+       y: () => bW
```

#### 328. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11304` → after: `L39539-L39558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39539-L39558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39539-L39558) · [Before (L11304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11304)

```diff
-     var ye = He(18);
+     const EW = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];
+ 
+     function NW(WW) {
+       if (function(WW) {
+           for (let iW = 0; iW < EW.length; iW++)
+             if (WW === EW[iW]) return !0;
+           return !1
+         }(WW)) return !1;
+       const iW = mW(WW);
+       return "op" === iW || "ep" === iW || "wi" === iW || "pp" === iW || "fp:call" === WW || "fp:t" === WW
+     }
+ 
+     function PW(WW) {
+       return "fp" === mW(WW) && !NW(WW)
+     }
+ 
+ ... (4 more added lines; see GitHub link above)
```

#### 329. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11307` → after: `L39561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39561) · [Before (L11307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11307)

```diff
-       return ee && !ie
+       return `~${function(WW){return WW.length<2?WW:":"===WW[1]?WW[0]:WW[0]+WW[1]}(iW)}~${WW}`
```

#### 330. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11310-L11311` → after: `L39565-L39638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39565-L39638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39565-L39638) · [Before (L11310-L11311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11310-L11311)

```diff
-     function Me() {
-       return be(ye.e.get("isTouchScreen"), ye.e.get("clientEscMenuOptions").touchActionButtons)
+     function tW(WW) {
+       let iW = WW.length - 1;
+       for (let OW = 0; OW < 2; OW++) {
+         const OW = iW;
+         for (; iW >= 0 && WW[iW] >= "0" && WW[iW] <= "9";) iW--;
+         if (iW < 0 || iW === OW || ":" !== WW[iW]) return -1;
+         iW--
+       }
+       return iW + 1
+     }
+ 
+     function ZW(WW) {
+       return "unknown" === WW || tW(WW) >= 0
+     }
+ 
+     function xW(WW, iW) {
+ ... (58 more added lines; see GitHub link above)
```

#### 331. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11314` → after: `L39641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39641) · [Before (L11314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11314)

```diff
-   5175: (ee, ie, He) => {
+   39359: (WW, iW, OW) => {
```

#### 332. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11318` → after: `L39645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39645) · [Before (L11318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11318)

```diff
-       i: () => be
+       h: () => wW
```

#### 333. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11320` → after: `L39647-L39649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39647-L39649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39647-L39649) · [Before (L11320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11320)

```diff
-     let ye = null;
+     var mW = OW(7453),
+       EW = OW(344),
+       NW = OW(643);
```

#### 334. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11323` → after: `L39652-L39653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39652-L39653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39652-L39653) · [Before (L11323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11323)

```diff
-       ye = ee
+       var iW;
+       return !0 === (null === WW || void 0 === WW || null === (iW = WW.name) || void 0 === iW ? void 0 : iW.includes("Firecracker"))
```

#### 335. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11326-L11327` → after: `L39656-L39659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39656-L39659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39656-L39659) · [Before (L11326-L11327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11326-L11327)

```diff
-     function Me() {
-       return ye
+     function LW(WW) {
+       for (let iW = 0; iW < NW.o; iW++)
+         if (PW(WW.getItemAtIdx(iW))) return iW;
+       return null
```

#### 336. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11331` → after: `L39663-L39679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39663-L39679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39663-L39679) · [Before (L11331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11331)

```diff
-       return "bloxd" === ee.site && !ee.isMobileApp && !ee.isTouchScreen
+       let iW = 0;
+       for (let mW = 0; mW < NW.o; mW++) {
+         const EW = WW.getItemAtIdx(mW);
+         var OW;
+         if (PW(EW)) iW += null !== (OW = EW.amount) && void 0 !== OW ? OW : 1
+       }
+       return iW
+     }
+ 
+     function wW(WW, iW, OW, NW) {
+       if (OW !== mW.m.GLIDING && NW !== mW.m.GLIDING) return;
+       const PW = WW.EY.HiW(iW);
+       if (PW.gliderFuelCooldownEnd = 0, OW === mW.m.GLIDING) {
+         var cW;
+         const OW = null === (cW = WW.EY.riW(iW)) || void 0 === cW ? void 0 : cW.inventory;
+         OW && null !== LW(OW) && WW.bloxd.startGliderFuelCooldown(iW, PW, EW.h.getFirecrackerCooldownMultiplier(OW.getItemAtSelectedSlot()))
+ ... (1 more added lines; see GitHub link above)
```

#### 337. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11334` → after: `L39682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39682) · [Before (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11334)

```diff
-   34786: (ee, ie, He) => {
+   37992: (WW, iW, OW) => {
```

#### 338. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11336` → after: `L39684-L39685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39684-L39685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39684-L39685) · [Before (L11336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11336)

```diff
-       return ee && !ie
+       var OW, mW, EW, NW, PW, LW, cW, wW;
+       return WW.name === iW.name && ((null === (OW = WW.attributes) || void 0 === OW || null === (mW = OW.customAttributes) || void 0 === mW ? void 0 : mW.stackKey) === (null === (EW = iW.attributes) || void 0 === EW || null === (NW = EW.customAttributes) || void 0 === NW ? void  … [truncated]
```

#### 339. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11339` → after: `L39688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39688) · [Before (L11339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11339)

```diff
-       b: () => ye
+       c: () => mW
```

#### 340. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11342` → after: `L39691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39691) · [Before (L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11342)

```diff
-   34807: (ee, ie, He) => {
+   39191: (WW, iW, OW) => {
```

#### 341. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11344` → after: `L39693-L39699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39693-L39699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39693-L39699) · [Before (L11344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11344)

```diff
-       c: () => Me
+       c: () => NW,
+       f: () => cW,
+       g: () => PW,
+       i: () => wW,
+       j: () => ZW,
+       l: () => tW,
+       n: () => EW
```

#### 342. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11346` → after: `L39701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39701) · [Before (L11346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11346)

```diff
-     var ye = He(1268);
+     var mW = OW(2955);
```

#### 343. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11348-L11350` → after: `L39703-L39705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39703-L39705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39703-L39705) · [Before (L11348-L11350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11348-L11350)

```diff
-     function be() {
-       var ee, ie;
-       return null !== (ee = null === (ie = screen.orientation) || void 0 === ie ? void 0 : ie.type) && void 0 !== ee ? ee : innerWidth > innerHeight ? "landscape" : "portrait"
+     function EW(WW) {
+       const iW = new mW.g(`blockBreakDrop|${WW}`);
+       return () => iW.next()
```

#### 344. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11352-L11387` → after: `L39707-L39731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39707-L39731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39707-L39731) · [Before (L11352-L11387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11352-L11387)

```diff
-     const Me = new class {
-       constructor() {
-         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
-           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
-         }
-       }
-       isHeld() {
-         return this.holding && be() !== this.heldOrientation && (this.holding = !1), this.holding
-       }
-       hold() {
-         this.heldOrientation = be(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
-           this.holding && (0, ye.vT)(new Error("Game view size held for 60 s"))
-         }), 6e4)
-       }
-       release() {
-         clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
- ... (20 more removed lines; see GitHub link above)
+ 
+     function NW(WW) {
+       WW.gravityMultiplier = 2, WW.friction = 4, WW.FP = .02, WW.zx = 0, WW.fluidDrag = .2
+     }
+ 
+     function PW(WW, iW) {
+       return [WW[0] + .2 * iW() + .4, WW[1] + .5, WW[2] + .2 * iW() + .4]
+     }
+     const LW = .01;
+ 
+     function cW(WW) {
+       return [LW - WW() * LW * 2, .05, LW - WW() * LW * 2]
+     }
+ 
+     function wW(WW) {
+       const iW = Math.hypot(WW[0], WW[1], WW[2]);
+ ... (9 more added lines; see GitHub link above)
```

#### 345. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11390` → after: `L39734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39734) · [Before (L11390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11390)

```diff
-   34758: (ee, ie, He) => {
+   39352: (WW, iW, OW) => {
```

#### 346. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11392-L11395` → after: `L39736-L39737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39736-L39737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39736-L39737) · [Before (L11392-L11395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11392-L11395)

```diff
-       e: () => ze,
-       i: () => Je,
-       j: () => Te,
-       l: () => fe
+       b: () => mW,
+       e: () => NW
```

#### 347. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11397-L11407` → after: `L39739-L39758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39739-L39758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39739-L39758) · [Before (L11397-L11407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11397-L11407)

```diff
-     var ye = He(153),
-       be = He(1207),
-       Me = He(1141),
-       Ke = He(1083),
-       Ue = He(1763);
-     const Fe = {
-       offline: "homePage:onboardingNameNoAccount",
-       outdated: "general:updatedReloading",
-       busy: "homePage:changeNameTooFast",
-       server: "homePage:changeNameFailed"
-     };
+     const mW = ["Chest", "Loot Chest", "Moonstone Chest"],
+       EW = [{
+         name: "Workbench",
+         exactMatch: !0
+       }, {
+         name: "Furnace",
+         exactMatch: !0
+       }, {
+         name: "Artisan Bench",
+         exactMatch: !0
+       }, {
+         name: "Potion Table",
+         exactMatch: !0
+       }, {
+         name: "Salvaging Table",
+         exactMatch: !0
+ ... (4 more added lines; see GitHub link above)
```

#### 348. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11410` → after: `L39761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39761) · [Before (L11410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11410)

```diff
-       return Fe[ee]
+       return EW.find((iW => iW.exactMatch ? WW === iW.name : WW.includes(iW.name)))
```

#### 349. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11412` → after: `L39763-L39764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39763-L39764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39763-L39764) · [Before (L11412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11412)

```diff
- 
+   },
+   38097: (WW, iW, OW) => {
```

#### 350. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11414` → after: `L39766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39766) · [Before (L11414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11414)

```diff
-       return (0, Ue.b)(ee) ? "outdated" : ee instanceof ye.b ? 429 === ee.httpCode ? "busy" : "server" : "offline"
+       return WW.includes("Leaf Bed")
```

#### 351. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11417-L11423` → after: `L39769-L39770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39769-L39770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39769-L39770) · [Before (L11417-L11423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11417-L11423)

```diff
-     function Re(ee, ie, He) {
-       return (0, Ke.postJsonWithMetricsCookiesAndJsonResponse)(`${Me.clientSideServerUrls.indexUrl}${ie}`, He, {
-         retries: 3
-       }, ee.getMetricsCookies()).catch((ee => (console.error("Bad response from the server when trying to change name:", ie, ee), {
-         outcome: "failed",
-         failure: oe(ee)
-       })))
+     function EW(WW) {
+       return / Bed(?: Head)?(?:\||$)/.test(WW) && !mW(WW)
```

#### 352. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11427` → after: `L39774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39774) · [Before (L11427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11427)

```diff
-       return "outcome" in ee && "failed" === ee.outcome
+       return WW.includes(" Strongbed")
```

#### 353. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11431-L11434` → after: `L39778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39778) · [Before (L11431-L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11431-L11434)

```diff
-       return console.error("Error when trying to get with new name from DB", ee), {
-         outcome: "refused",
-         message: ee
-       }
+       return mW(WW) || EW(WW) || NW(WW)
```

#### 354. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11436-L11452` → after: `L39780-L39804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39780-L39804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39780-L39804) · [Before (L11436-L11452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11436-L11452)

```diff
-     async function fe(ee) {
-       const ie = await Re(ee, "/index/name/random", {});
-       return ke(ie) ? ie : "err" in ie ? qe(ie.err) : (ee.setPlayerName(ie.name), {
-         outcome: "changed",
-         name: ie.name
-       })
-     }
-     async function Te(ee, ie) {
-       const He = await Re(ee, "/index/name/update", {
-         name: ie
-       });
-       return ke(He) ? He : "err" in He ? qe(He.err) : He.nameExists ? {
-         outcome: "taken"
-       } : (ee.setPlayerName(ie), {
-         outcome: "changed",
-         name: ie
- ... (1 more removed lines; see GitHub link above)
+     OW.d(iW, {
+       d: () => PW,
+       f: () => mW,
+       j: () => NW,
+       l: () => EW
+     })
+   },
+   38088: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => wW
+     });
+     var mW = OW(38097),
+       EW = OW(5725);
+     const NW = [],
+       PW = [],
+       LW = [],
+ ... (9 more added lines; see GitHub link above)
```

#### 355. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11456-L11469` → after: `L39821-L39830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39821-L39830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39821-L39830) · [Before (L11456-L11469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11456-L11469)

```diff
-       let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
-       const ye = 1 === ie ? 1 : 10 ** (ie - 1),
-         Me = String(ye + Math.floor(He() * (10 ** ie - ye)));
-       return `${ee.slice(0,be.g-ie)}${Me}`
-     }
-     const Xe = [1, 2, 3, 4];
-     async function ze(ee, ie) {
-       const He = await Te(ee, ie);
-       if ("taken" !== He.outcome) return He;
-       for (const ye of Xe) {
-         const He = pe(ie, ye),
-           be = await Te(ee, He);
-         if ("taken" !== be.outcome) return be
-       }
+       var OW;
+       const tW = (0, mW.c)(iW),
+         ZW = tW.physicsBodyDimensions.width,
+         xW = tW.physicsBodyDimensions.height,
+         lW = tW.hitBoxDimensions.width,
+         AW = tW.hitBoxDimensions.height,
+         bW = Math.min(Math.max(ZW * WW, PW), EW.f),
+         jW = Math.min(Math.max(xW * WW, LW), EW.e),
+         UW = Math.max(lW * Math.min(WW, EW.f / ZW), cW),
+         kW = Math.max(AW * Math.min(WW, EW.e / xW), wW);
```

#### 356. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11471` → after: `L39832-L39836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39832-L39836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39832-L39836) · [Before (L11471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11471)

```diff
-         outcome: "taken"
+         physicsBodyWidth: bW,
+         physicsBodyHeight: jW,
+         collideEntitiesWidthExpand: Math.max(0, UW - bW),
+         collideEntitiesHeightExpand: Math.max(0, kW - jW),
+         shadowSize: NW * WW * (null !== (OW = tW.modelScale) && void 0 !== OW ? OW : 1)
```

#### 357. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11475` → after: `L39840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39840) · [Before (L11475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11475)

```diff
-   34790: (ee, ie, He) => {
+   38895: (WW, iW, OW) => {
```

#### 358. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11478` → after: `L39843-L39844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39843-L39844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39843-L39844) · [Before (L11478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11478)

```diff
-       f: () => Fe
+       i: () => wW,
+       l: () => LW
```

#### 359. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11480-L11483` → after: `L39846-L39848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39846-L39848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39846-L39848) · [Before (L11480-L11483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11480-L11483)

```diff
-     var ye = He(18);
-     const be = 24,
-       Me = "farNametags",
-       Ke = 1e5;
+     var mW = OW(38900),
+       EW = OW(3891),
+       NW = OW.n(EW);
```

#### 360. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11485-L11487` → after: `L39850-L39851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39850-L39851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39850-L39851) · [Before (L11485-L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11485-L11487)

```diff
-     function Ue() {
-       var ee;
-       return null === (ee = ye.e.get("showDistantNametags")) || void 0 === ee || ee
+     function PW(WW, iW, OW) {
+       return `${WW}|${iW}|${OW}`
```

#### 361. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11490-L11496` → after: `L39854-L39856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39854-L39856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39854-L39856) · [Before (L11490-L11496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11490-L11496)

```diff
-     function Fe() {
-       var ee;
-       return null !== (ee = function() {
-         const ee = new URLSearchParams(window.location.search).get(Me),
-           ie = null === ee || "" === ee ? NaN : Number(ee);
-         return Number.isFinite(ie) && ie >= 0 ? Math.min(ie, Ke) : null
-       }()) && void 0 !== ee ? ee : Ue() ? 0 : be
+     function LW(WW) {
+       const [iW, OW, mW] = WW.split("|");
+       return [Number(iW), Number(OW), Number(mW)]
```

#### 362. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11499` → after: `L39866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39866) · [Before (L11499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11499)

```diff
-   34815: (ee, ie, He) => {
+   38822: (WW, iW, OW) => {
```

#### 363. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11501` → after: `L39868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39868) · [Before (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11501)

```diff
-       c: () => Je,
+       b: () => TW,
```

#### 364. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11503` → after: `L39870-L39875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39870-L39875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39870-L39875) · [Before (L11503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11503)

```diff
-       e: () => oe
+       l: () => nW,
+       h: () => HW,
+       o: () => uW,
+       r: () => JW,
+       s: () => dW,
+       w: () => oW
```

#### 365. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11505-L11510` → after: `L39877-L39991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39877-L39991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39877-L39991) · [Before (L11505-L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11505-L11510)

```diff
-     var ye = He(260),
-       be = He(97),
-       Me = He(123),
-       Ke = He(120),
-       Ue = He(643);
-     const Fe = new Set(["mali_bifrost"]);
+     var mW = OW(7453),
+       EW = OW(38824),
+       NW = OW(344);
+     const PW = {
+         FP: .25,
+         fluidDrag: 2,
+         fluidDragHorizontal: 0,
+         fluidDragVertical: 2,
+         gravityMultiplier: 2,
+         width: .5,
+         height: 1.2,
+         canRun: !1,
+         jumpMultiplier: 0,
+         canAutoStep: !1,
+         canAutoStepByBlock: Object.fromEntries(NW.nc.map((WW => [WW, !0]))),
+         pose: "sitting",
+ ... (99 more added lines; see GitHub link above)
```

#### 366. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11512-L11519` → after: `L39993-L40007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R39993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L39993-L40007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L39993-L40007) · [Before (L11512-L11519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11512-L11519)

```diff
-     function Je() {
-       if (Ue.g) return;
-       const ee = (0, be.pageOperatingSystem)();
-       if ("android" !== ee && "windows" !== ee || (0, Ue.d)("webgl_default")) return;
-       if ("windows" === ee) return ee => "qualcomm" === (0, be.normaliseGpuVendor)((0, Ke.e)(ee).vendor);
-       const ie = (0, Me.p)(),
-         He = null === ie ? (0, ye.m)() : (0, ye.i)(ie.vendor, ie.renderer);
-       return null !== He && Fe.has(He) ? ee => (0, ye.k)((0, Ke.e)(ee).vendor, He) : void 0
+     function xW(WW, iW) {
+       return {
+         ...ZW,
+         speedMultiplier: iW,
+         fluidSpeedMultiplier: .02,
+         effect: {
+           name: "Driving",
+           icon: WW
+         },
+         horizontalBounciness: 0,
+         steering: {
+           ...tW,
+           turnRate: 1.65
+         }
+       }
```

#### 367. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11522-L11523` → after: `L40072-L40082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40072-L40082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40072-L40082) · [Before (L11522-L11523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11522-L11523)

```diff
-     function oe(ee, ie) {
-       return ee ? () => !0 : ie()
+     function AW(WW) {
+       return {
+         model: "cameraDirection",
+         maxSpeed: WW,
+         minSpeed: .5,
+         pitchAcceleration: .0125,
+         friction: 0,
+         impulseDecayTicks: 100,
+         biasMagnitude: 1.5,
+         excessVelocityBleedPerTick: .5
+       }
```

#### 368. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11525-L11536` → after: `L40084-L40157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40084-L40157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40084-L40157) · [Before (L11525-L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11525-L11536)

```diff
-     async function Re(ee) {
-       try {
-         const ie = oe(ee, Je),
-           He = navigator.gpu;
-         if (void 0 === ie || void 0 === He) return !1;
-         const ye = await (0, Ke.q)(He, {
-           seed: !1,
-           compatibility: ie
-         });
-         return "string" !== typeof ye && ye.compatibility && !(0, Ke.l)(ye.adapter)
-       } catch (ie) {
-         return console.error("WebGPU compatibility-mode adapter request failed.", ie), !1
+     const bW = {
+         gravityMultiplier: 0,
+         width: .5,
+         height: 1.4,
+         canRun: !0,
+         canAutoStep: !0,
+         pose: "gliding",
+         effect: {
+           name: "Gliding",
+           icon: "Gliding"
+         },
+         airborneMode: {
+           activeMovementType: mW.m.GLIDING,
+           durationMs: null,
+           exitsVehicleOnEnd: !1
+         },
+ ... (58 more added lines; see GitHub link above)
```

#### 369. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11539-L11725` → after: `L40160-L40348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40160-L40348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40160-L40348) · [Before (L11539-L11725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11539-L11725)

```diff
-   },
-   34905: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => be,
-       h: () => Ke
-     });
-     const ye = [{
-       threshold: 10n ** 180n,
-       suffix: "NoQig"
-     }, {
-       threshold: 10n ** 177n,
-       suffix: "OcQig"
-     }, {
-       threshold: 10n ** 174n,
-       suffix: "SpQig"
-     }, {
- ... (171 more removed lines; see GitHub link above)
+     const MW = {
+       [mW.s.ROTATION_1]: {
+         fixedHeading: 0
+       },
+       [mW.s.ROTATION_2]: {
+         fixedHeading: Math.PI / 2
+       },
+       [mW.s.ROTATION_3]: {
+         fixedHeading: Math.PI
+       },
+       [mW.s.ROTATION_4]: {
+         fixedHeading: -Math.PI / 2
+       }
+     };
+     var KW = OW(5725),
+       SW = function(WW) {
+ ... (173 more added lines; see GitHub link above)
```

#### 370. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11727-L11747` → after: `L40350-L40353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40350-L40353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40350-L40353) · [Before (L11727-L11747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11727-L11747)

```diff
-     function be(ee) {
-       let ie, He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
-       if ("number" === typeof ee) {
-         if (!Number.isFinite(ee)) return "0";
-         if (Math.abs(ee) < 100) {
-           const ie = ee < 0 ? "-" : "",
-             He = Math.abs(ee);
-           return He >= 10 ? `${ie}${He.toFixed(1).replace(/\.0$/,"")}` : `${ie}${He.toFixed(2).replace(/\.?0+$/,"")}`
-         }
-         ie = BigInt(Math.floor(ee))
-       } else ie = ee;
-       const be = ie < 0n ? -ie : ie,
-         Me = ie < 0n ? "-" : "",
-         Ke = be.toString();
-       if (Ke.length <= He) return `${Me}${Ke}`;
-       const Ue = 3 * Math.floor((Ke.length - 1) / 3);
- ... (5 more removed lines; see GitHub link above)
+     function* uW() {
+       for (const WW in hW) {
+         const iW = Number(WW);
+         yield iW
```

#### 371. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11772-L11785` → after: `L40357-L40363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40357-L40363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40357-L40363) · [Before (L11772-L11785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11772-L11785)

```diff
-     function Ke(ee) {
-       const ie = Math.abs(ee),
-         He = ee < 0 ? "-" : "";
-       for (const {
-           threshold: ye,
-           suffix: be
-         }
-         of Me)
-         if (ie >= ye) {
-           const ee = ie / ye;
-           if (ee >= 1e3) return `${He}${ie.toExponential(2).replace("e+","e")}`;
-           let Me;
-           return Me = ee >= 100 ? Math.floor(ee).toString() : ee >= 10 ? ee.toFixed(1).replace(/\.0$/, "") : ee.toFixed(2).replace(/\.?0+$/, ""), `${He}${Me}${be}`
-         } return `${He}${ie}`
+     function oW(WW, iW, OW) {
+       const mW = iW ? WW.fluidSpeedMultiplier : OW ? WW.landSpeedMultiplier : WW.airSpeedMultiplier;
+       return WW.speedMultiplier * mW
+     }
+ 
+     function dW(WW, iW, OW) {
+       return null !== WW.fixedHeading ? WW.fixedHeading : WW.steering ? iW : OW
```

#### 372. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11788` → after: `L40366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40366) · [Before (L11788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11788)

```diff
-   34880: (ee, ie, He) => {
+   38855: (WW, iW, OW) => {
```

#### 373. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11790-L11795` → after: `L40368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40368) · [Before (L11790-L11795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11790-L11795)

```diff
-       e: () => oe,
-       i: () => ke,
-       l: () => Re,
-       o: () => Ke,
-       s: () => Je,
-       w: () => Fe
+       d: () => PW
```

#### 374. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11797-L11801` → after: `L40370-L40374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40370-L40374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40370-L40374) · [Before (L11797-L11801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11797-L11801)

```diff
-     var ye = He(347);
-     const be = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
-       Me = {
-         Damage: {
-           translationKey: "enchantments:damageDescription"
+     var mW = OW(5725),
+       EW = OW(344);
+     const NW = {
+         Vines: {
+           upForceScalar: 1.05
```

#### 375. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11803-L11804` → after: `L40376-L40377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40376-L40377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40376-L40377) · [Before (L11803-L11804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11803-L11804)

```diff
-         "Attack Speed": {
-           translationKey: "enchantments:attackSpeedDescription"
+         "Maple Ladder": {
+           upForceScalar: 1.05
```

#### 376. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11806-L11807` → after: `L40379-L40380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40379-L40380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40379-L40380) · [Before (L11806-L11807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11806-L11807)

```diff
-         "Critical Damage": {
-           translationKey: "enchantments:criticalDamageDescription"
+         "Pine Ladder": {
+           upForceScalar: 1.05
```

#### 377. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11809-L11810` → after: `L40382-L40383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40382-L40383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40382-L40383) · [Before (L11809-L11810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11809-L11810)

```diff
-         Protection: {
-           translationKey: "enchantments:protectionDescription"
+         "Plum Ladder": {
+           upForceScalar: 1.05
```

#### 378. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11812-L11813` → after: `L40385-L40386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40385-L40386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40385-L40386) · [Before (L11812-L11813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11812-L11813)

```diff
-         Health: {
-           translationKey: "enchantments:healthDescription"
+         "Cedar Ladder": {
+           upForceScalar: 1.25
```

#### 379. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11815-L11816` → after: `L40388-L40389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40388-L40389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40388-L40389) · [Before (L11815-L11816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11815-L11816)

```diff
-         "Health Regen": {
-           translationKey: "enchantments:healthRegenDescription"
+         "Aspen Ladder": {
+           upForceScalar: 1.05
```

#### 380. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11818-L11819` → after: `L40391-L40392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40391-L40392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40391-L40392) · [Before (L11818-L11819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11818-L11819)

```diff
-         "Stomp Damage": {
-           translationKey: "enchantments:stompDamageDescription"
+         "Jungle Ladder": {
+           upForceScalar: 1.25
```

#### 381. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11821-L11822` → after: `L40394-L40395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40394-L40395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40394-L40395) · [Before (L11821-L11822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11821-L11822)

```diff
-         "Knockback Resist": {
-           translationKey: "enchantments:knockbackResistDescription"
+         "Palm Ladder": {
+           upForceScalar: 1.25
```

#### 382. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11824-L11825` → after: `L40397-L40398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40397-L40398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40397-L40398) · [Before (L11824-L11825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11824-L11825)

```diff
-         "Arrow Speed": {
-           translationKey: "enchantments:arrowSpeedDescription"
+         "Pear Ladder": {
+           upForceScalar: 1.05
```

#### 383. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11827-L11828` → after: `L40400-L40401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40400-L40401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40400-L40401) · [Before (L11827-L11828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11827-L11828)

```diff
-         "Arrow Damage": {
-           translationKey: "enchantments:arrowDamageDescription"
+         "Cherry Ladder": {
+           upForceScalar: 1.05
```

#### 384. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11830-L11831` → after: `L40403-L40404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40403-L40404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40403-L40404) · [Before (L11830-L11831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11830-L11831)

```diff
-         "Quick Charge": {
-           translationKey: "enchantments:quickChargeDescription"
+         "Spectral Ladder": {
+           upForceScalar: 1.05
```

#### 385. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11833-L11834` → after: `L40406-L40407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40406-L40407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40406-L40407) · [Before (L11833-L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11833-L11834)

```diff
-         "Break Speed": {
-           translationKey: "enchantments:breakSpeedDescription"
+         "Mango Ladder": {
+           upForceScalar: 1.05
```

#### 386. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11836-L11837` → after: `L40409-L40410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40409-L40410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40409-L40410) · [Before (L11836-L11837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11836-L11837)

```diff
-         Momentum: {
-           translationKey: "enchantments:momentumDescription"
+         "Iron Ladder": {
+           upForceScalar: 1.4
```

#### 387. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11839-L11840` → after: `L40412-L40413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40412-L40413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40412-L40413) · [Before (L11839-L11840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11839-L11840)

```diff
-         "Mining Yield": {
-           translationKey: "enchantments:miningYieldDescription"
+         "Maple Trapdoor": {
+           upForceScalar: .95
```

#### 388. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11842-L11843` → after: `L40415-L40416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40415-L40416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40415-L40416) · [Before (L11842-L11843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11842-L11843)

```diff
-         "Farming Yield": {
-           translationKey: "enchantments:farmingYieldDescription"
+         "Pine Trapdoor": {
+           upForceScalar: .95
```

#### 389. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11845-L11846` → after: `L40418-L40419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40418-L40419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40418-L40419) · [Before (L11845-L11846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11845-L11846)

```diff
-         "Mining Aura": {
-           translationKey: "enchantments:miningAuraDescription"
+         "Plum Trapdoor": {
+           upForceScalar: .95
```

#### 390. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11848-L11849` → after: `L40421-L40422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40421-L40422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40421-L40422) · [Before (L11848-L11849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11848-L11849)

```diff
-         "Digging Aura": {
-           translationKey: "enchantments:diggingAuraDescription"
+         "Cedar Trapdoor": {
+           upForceScalar: .95
```

#### 391. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11851-L11852` → after: `L40424-L40425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40424-L40425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40424-L40425) · [Before (L11851-L11852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11851-L11852)

```diff
-         "Lumber Aura": {
-           translationKey: "enchantments:lumberAuraDescription"
+         "Aspen Trapdoor": {
+           upForceScalar: .95
```

#### 392. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11854-L11855` → after: `L40427-L40428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40427-L40428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40427-L40428) · [Before (L11854-L11855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11854-L11855)

```diff
-         "Farming Aura": {
-           translationKey: "enchantments:farmingAuraDescription"
+         "Jungle Trapdoor": {
+           upForceScalar: .95
```

#### 393. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11857-L11858` → after: `L40430-L40431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40430-L40431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40430-L40431) · [Before (L11857-L11858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11857-L11858)

```diff
-         "Horizontal Knockback": {
-           translationKey: "enchantments:horizontalKnockbackDescription"
+         "Palm Trapdoor": {
+           upForceScalar: .95
```

#### 394. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11860-L11861` → after: `L40433-L40434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40433-L40434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40433-L40434) · [Before (L11860-L11861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11860-L11861)

```diff
-         "Vertical Knockback": {
-           translationKey: "enchantments:verticalKnockbackDescription"
+         "Pear Trapdoor": {
+           upForceScalar: .95
```

#### 395. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11863-L11864` → after: `L40436-L40437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40436-L40437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40436-L40437) · [Before (L11863-L11864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11863-L11864)

```diff
-         "Firecracker Cooldown": {
-           translationKey: "enchantments:firecrackerCooldownDescription"
+         "Cherry Trapdoor": {
+           upForceScalar: .95
```

#### 396. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11866-L11867` → after: `L40439-L40440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40439-L40440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40439-L40440) · [Before (L11866-L11867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11866-L11867)

```diff
-         "Firecracker Boost": {
-           translationKey: "enchantments:firecrackerBoostDescription"
+         "Spectral Trapdoor": {
+           upForceScalar: .95
```

#### 397. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11869-L11870` → after: `L40442-L40443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40442-L40443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40442-L40443) · [Before (L11869-L11870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11869-L11870)

```diff
-         "Gliding Speed": {
-           translationKey: "enchantments:glidingSpeedDescription"
+         "Mango Trapdoor": {
+           upForceScalar: .95
```

#### 398. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11872-L11878` → after: `L40445-L40454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40445-L40454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40445-L40454) · [Before (L11872-L11878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11872-L11878)

```diff
-       };
- 
-     function Ke(ee) {
-       var ie;
-       return null !== (ie = Me[ee]) && void 0 !== ie ? ie : {
-         translationKey: ""
-       }
+       },
+       PW = (0, EW._)(mW.p, (WW => {
+         var iW, OW, EW, PW, LW;
+         const cW = (0, mW.f)(WW);
+         return null !== (iW = null !== (OW = null === (EW = NW[cW]) || void 0 === EW ? void 0 : EW.upForceScalar) && void 0 !== OW ? OW : null === (PW = mW.p[WW]) || void 0 === PW || null === (LW = PW.climbableInside) || void 0 === LW ? void 0 : LW.upForceScalar) && void 0 !== iW … [truncated]
+       }), Float64Array)
+   },
+   38955: (WW, iW, OW) => {
+     function mW(WW, iW, OW, mW) {
+       return WW || iW && (OW > 0 || mW)
```

#### 399. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11881-L11930` → after: `L40464-L40465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40464-L40465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40464-L40465) · [Before (L11881-L11930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11881-L11930)

```diff
-       "Wood Enchanting Table": [{
-         min: 1,
-         max: 2
-       }, {
-         min: 3,
-         max: 4
-       }, {
-         min: 5,
-         max: 6
-       }],
-       "Stone Enchanting Table": [{
-         min: 2,
-         max: 4
-       }, {
-         min: 5,
-         max: 10
- ... (34 more removed lines; see GitHub link above)
+       sH: 0,
+       released: !1
```

#### 400. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11933-L11934` → after: `L40468-L40475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40468-L40475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40468-L40475) · [Before (L11933-L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11933-L11934)

```diff
-     function Fe(ee) {
-       return be.includes(ee)
+     function NW(WW, iW, OW, mW, NW, PW, LW) {
+       if (!iW || !OW || !mW) return EW;
+       if (WW.released) return WW;
+       const cW = NW ? WW.sH + PW : 0;
+       return {
+         sH: cW,
+         released: cW >= LW
+       }
```

#### 401. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11937-L11939` → after: `L40478-L40483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40478-L40483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40478-L40483) · [Before (L11937-L11939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11937-L11939)

```diff
-     function Je(ee) {
-       var ie;
-       return !0 === (null === ee || void 0 === ee || null === (ie = ee.customAttributes) || void 0 === ie ? void 0 : ie.cannotEnchant)
+     function PW(WW, iW, OW) {
+       return !WW.released && (OW || !iW)
+     }
+ 
+     function LW(WW, iW, OW, mW, EW) {
+       return WW && iW && (0 !== OW[0] && !mW || 0 !== OW[2] && !EW)
```

#### 402. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11943-L11946` → after: `L40495-L40509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40495-L40509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40495-L40509) · [Before (L11943-L11946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11943-L11946)

```diff
-       const {
-         max: He
-       } = Ue[ee].at(-1);
-       return ie <= He
+       return WW && iW === mW.p.DEFAULT
+     }
+     const NW = 150,
+       PW = 1.6,
+       LW = 65,
+       cW = 500,
+       wW = .6,
+       tW = .5;
+     class ZW {
+       constructor() {
+         this.RW = 0, this.GW = 0, this.yVelocity = 0
+       }
+       reset() {
+         this.RW = 0, this.GW = 0, this.yVelocity = 0
+       }
```

#### 403. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11949-L11975` → after: `L40512-L40931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40512-L40931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40512-L40931) · [Before (L11949-L11975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11949-L11975)

```diff
-     function Re(ee) {
-       const ie = Math.sin(ee / 80),
-         He = ee => {
-           if (ee <= 0) return 0;
-           if (ee > 1) return 1;
-           let ie = 0;
-           const He = [1, 7, 21, 35, 35, 21, 7, 1];
-           for (let ye = 0; ye < He.length; ye++) {
-             ie += (ye % 2 === 0 ? 1 : -1) * He[ye] * Math.pow(ee, 2 + ye) / (2 + ye)
-           }
-           return 72 * ie
-         },
-         ye = .3 - .78 * ie,
-         be = .5 - .78 * ie,
-         Me = .6 - .7 * ie,
-         Ke = .8 - .6 * ie;
- ... (11 more removed lines; see GitHub link above)
+     function xW(WW, iW, OW, mW) {
+       let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
+       WW.RW = iW ? Math.min(WW.RW + PW / NW * EW, PW) : 0, 0 === OW ? WW.GW = 0 : mW ? WW.GW = EW : WW.GW += EW;
+       const ZW = Math.min(WW.GW, NW) / NW,
+         xW = (LW + ZW * cW) * OW;
+       return WW.yVelocity *= Math.pow(wW, EW), Math.abs(WW.yVelocity) < tW && (WW.yVelocity = 0), xW
+     }
+   },
+   39667: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW,
+       f: () => mW
+     });
+     const mW = 25,
+       EW = 90;
+     Math.min(mW, EW)
+ ... (404 more added lines; see GitHub link above)
```

#### 404. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11979-L11986` → after: `L40980-L41051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R40980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L40980-L41051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L40980-L41051) · [Before (L11979-L11986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11979-L11986)

```diff
-     function ke(ee, ie) {
-       const {
-         min: He,
-         max: be
-       } = Ue[ee][ie], Me = ye.c.sampleUniformIntDistribution(He, be, "includeMax");
-       return {
-         ...Re(Me),
-         level: Me
+     function LW(WW, iW, OW) {
+       const mW = Math.floor(iW.base[0] + EW),
+         NW = Math.floor(iW.max[0] - EW),
+         PW = Math.floor(iW.base[2] + EW),
+         LW = Math.floor(iW.max[2] - EW);
+       for (let EW = mW; EW <= NW; EW++)
+         for (let iW = PW; iW <= LW; iW++)
+           if (WW(EW, OW, iW)) return !0;
+       return !1
+     }
+ 
+     function cW(WW) {
+       return WW.JC && WW.FP > 0 && WW.depenetrate && null === WW.nC
+     }
+     const wW = {
+       base: [0, 0, 0],
+ ... (56 more added lines; see GitHub link above)
```

#### 405. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11990-L11993` → after: `L41095-L41096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R41095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L41095-L41096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L41095-L41096) · [Before (L11990-L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11990-L11993)

```diff
-   34844: () => {},
-   34947: () => {},
-   13541: ee => {
-     ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC … [truncated]
+   39156: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
```

#### 406. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11995-L11996` → after: `L41098-L41099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R41098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L41098-L41099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L41098-L41099) · [Before (L11995-L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11995-L11996)

```diff
-   14679: ee => {
-     ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
+   39176: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
```

#### 407. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L11998-L11999` → after: `L41101-L41102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R41101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L41101-L41102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L41101-L41102) · [Before (L11998-L11999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L11998-L11999)

```diff
-   16131: ee => {
-     ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5E … [truncated]
+   39154: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
```

#### 408. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L12001-L12002` → after: `L41104-L41159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R41104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L41104-L41159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/90.js#L41104-L41159) · [Before (L12001-L12002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/90.js#L12001-L12002)

```diff
-   16665: ee => {
-     ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
+   39163: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
+   },
+   39145: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => mW,
+       g: () => NW,
+       i: () => EW,
+       m: () => LW,
+       p: () => PW
+     });
+     const mW = {
+         opaque: 1,
+         emissive: 2,
+         vegetation: 4,
+         dirt: 8,
+ ... (40 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/91.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/91.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619)

#### 1. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4-L6` → after: `L4-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/91.js#L4-L18) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/91.js#L4-L6)

```diff
-   5188: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       reportCarriedGlLossWait: () => be
+   5427: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => Bi,
+       e: () => lO,
+       i: () => Qi,
+       j: () => mO,
+       l: () => ri,
+       o: () => WO,
+       r: () => Vi,
+       s: () => Gi,
+       v: () => ni,
+       y: () => xO,
+       C: () => ZO,
+       F: () => Ii,
+       G: () => Di
```

#### 2. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L8-L12` → after: `L20-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L20-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/91.js#L20-L95) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/91.js#L8-L12)

```diff
-     var ye = He(4795);
- 
-     function be(ee) {
-       try {
-         (0, ye.b)(ee.message, ee.code, void 0, {}, {})
+     var mW = OW(2381);
+     const EW = Function.prototype.toString,
+       NW = RegExp.prototype.exec,
+       PW = Reflect.apply,
+       LW = Function.prototype.call,
+       cW = Function.prototype.apply,
+       wW = Function.prototype.bind,
+       tW = Object.defineProperty,
+       ZW = Uint8Array;
+     let xW, lW;
+     try {
+       xW = globalThis.crypto, lW = void 0 === xW || null === xW ? void 0 : xW.getRandomValues
+     } catch {}
+     const AW = "bloxdBindApply";
+     let bW;
+     try {
+ ... (60 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L14-L15` → after: `L97-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L97-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/91.js#L97-L504) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/91.js#L14-L15)

```diff
-         console.warn("Couldn't report the last page's WebGL context wait", ie)
-       }
+         throw YW = MW, AW
+       }
+       return uW = nW, mW
+     }
+     let dW = PW;
+ 
+     function eW() {
+       return (dW === PW ? 0 : 3) + uW
+     }
+ 
+     function vW() {
+       const WW = eW();
+       return dW = PW, WW
+     }
+ 
+     function gW(WW) {
+ ... (392 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (89 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 1. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L2)

```diff
- export const ids = [92, 108];
+ export const ids = [92, 220];
```

#### 2. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4-L23` → after: `L4-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L4-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L4-L38) · [Before (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L4-L23)

```diff
-     5311: (ee, ie, He) => {
-       He.d(ie, {
-         d: () => pe,
-         e: () => Xe
-       });
-       var ye = He(1053),
-         be = He.n(ye),
-         Me = He(59),
-         Ke = He(1127),
-         Ue = He(5317),
-         Fe = He(1956),
-         Je = He(2532),
-         oe = He(5319),
-         Re = He(1228);
-       const ke = new WeakMap;
-       let qe = 0;
- ... (4 more removed lines; see GitHub link above)
+   35111: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       EverythingMenu: () => Kt
+     });
+     var mW = OW(62),
+       EW = OW(1089),
+       NW = OW.n(EW),
+       PW = OW(1172),
+       LW = OW(1391),
+       cW = OW(2180),
+       wW = OW(1532),
+       tW = OW(1095),
+       ZW = OW(1283);
+ 
+     function xW(WW) {
+       let {
+ ... (19 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L27-L35` → after: `L119-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L119-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L119-L140) · [Before (L27-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L27-L35)

```diff
-         let {
-           piece: ie
-         } = ee;
-         return "space" === ie.kind ? (0, Re.jsx)(Re.Fragment, {
-           children: ie.text
-         }) : (0, Re.jsx)("span", {
-           className: "DialogueWord",
-           style: {
-             "--word-delay": `${ie.delayMs}ms`
+         const iW = "screenshot" === WW ? LW : NW;
+         iW(!0);
+         const OW = AW ? "normals" : jW ? "depth" : null;
+         TW.devTools.downloadScene(WW, {
+           width: cW,
+           height: xW,
+           colouring: OW
+         }).catch((WW => {
+           console.error("Couldn't download the scene", WW)
+         })).finally((() => {
+           iW(!1)
+         }))
+       }
+       return (0, ZW.jsxs)("div", {
+         className: "DeveloperToolsCategory",
+         children: [(0, ZW.jsx)(YW.e, {
+ ... (6 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L37-L39` → after: `L142-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L142-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L142-L266) · [Before (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L37-L39)

```diff
-           children: (0, Re.jsx)(Ue.c, {
-             text: "icon" === ie.kind ? `[[${ie.icon}]]` : ie.text
-           })
+           circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
+         }), TW.devTools.supports("ambientLight") && (0, ZW.jsx)(YW.k, {
+           name: "Ambient Lighting Intensity",
+           min: 0,
+           max: 1,
+           step: .01,
+           initValue: OW.ambientLightIntensity,
+           onChange: WW => {
+             TW.devTools.setAmbientLightIntensity(WW).then((() => {
+               yW.d.setClientEscMenuOptions({
+                 ambientLightIntensity: WW
+               })
+             })).catch((WW => {
+               console.error("Couldn't set the ambient light", WW)
+             }))
+           },
+ ... (109 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L42-L46` → after: `L288-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L288-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L288-L302) · [Before (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L42-L46)

```diff
- 
-       function pe(ee) {
-         let {
-           display: ie
-         } = ee;
+     }
+     var FW = OW(4076),
+       QW = OW(4085);
+     const Wi = {
+       cancel: !1,
+       resume: !1,
+       manage: !1
+     };
+ 
+     function ii(WW) {
+       return WW instanceof qW.c && "storeUnavailable" === WW.code ? (console.warn("Billing: the store didn't take a subscription change:", WW), "store:subscriptionStoreUnavailable") : WW instanceof qW.c && "subscriptionActionUnavailable" === WW.code ? (console.warn("Billing: a su … [truncated]
+     }
+     async function Oi() {
+       try {
+         var WW;
```

#### 6. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L48-L64` → after: `L304-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L304-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L304-L445) · [Before (L48-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L48-L64)

```diff
-           selectedLanguage: He
-         } = (0, Ke.v)(), ye = (0, Me.useMemo)((() => (0, oe.e)((0, oe.g)(ie).plan.pieces)), [ie, He.code]);
-         return (0, Re.jsxs)("div", {
-           className: be()("Dialogue", {
-             DialogueAnimateIn: !1 !== ie.animateIn
-           }),
-           children: [ie.speakerName && (0, Re.jsx)(Fe.e, {
-             text: ie.speakerName,
-             className: "DialogueSpeaker"
-           }), (0, Re.jsx)("p", {
-             className: "DialogueLine",
-             children: ye.map(((ee, ie) => 1 === ee.length && "space" === ee[0].kind ? ee[0].text : (0, Re.jsx)("span", {
-               className: "DialogueGlue",
-               children: ee.map(((ee, ie) => (0, Re.jsx)(Te, {
-                 piece: ee
-               }, ie)))
- ... (1 more removed lines; see GitHub link above)
+           offering: iW
+         } = await (0, QW.getBillingClient)().getOfferings((0, pW.l)(VW.g.id).placementId);
+         return null !== (WW = null === iW || void 0 === iW ? void 0 : iW.packages.find(FW.isPricedPackage)) && void 0 !== WW ? WW : null
+       } catch (iW) {
+         return console.warn("Billing: loading the rank plan's price failed:", iW), null
+       }
+     }
+ 
+     function mi(WW) {
+       const {
+         userContext: iW
+       } = (0, AW.e)(), {
+         superRankInfo: OW
+       } = iW, EW = (0, BW.usePurchasesAllowed)(), NW = (0, DW.sc)(OW), PW = WW && EW && (NW || iW.ranksMayChange), [LW, cW] = (0, mW.useState)(null), [wW, tW] = (0, mW.useState)(!1), [ZW, xW] = (0, mW.useState)(!1), [lW, bW] = (0, mW.useState)(null);
+       (0, mW.useEffect)((() => {
+         if (!PW) return;
+ ... (126 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L66` → after: `L447-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L447-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L447-L527) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L66)

```diff
-         })
+         }), YW && (0, ZW.jsxs)("div", {
+           className: "RankSubscriptionManageWarning SmallTextBold",
+           children: [(0, ZW.jsx)(LW.c, {
+             name: "triangle-exclamation"
+           }), " ", mW("store:paymentFailing", {
+             rank: SW
+           })]
+         }), (0, ZW.jsxs)("div", {
+           className: "RankSubscriptionManageActions",
+           children: [kW.manage && (0, ZW.jsx)(wW.h, {
+             disabled: xW,
+             onClick: () => {
+               bW()
+             },
+             children: mW(YW ? "store:updatePayment" : "payments:manageSubscription")
+           }), kW.resume && (0, ZW.jsx)(wW.f, {
+ ... (65 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L68-L78` → after: `L529-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L529-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L529-L679) · [Before (L68-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L68-L78)

```diff
-       const Xe = (0, Me.memo)((function() {
-         const ee = (0, Je.i)("dialogue");
-         return (0, Re.jsx)("div", {
-           className: "DialogueAnchor",
-           "data-camera-keeper": "",
-           role: "status",
-           "aria-live": "polite",
-           "aria-atomic": "true",
-           children: ee && (0, Re.jsx)(pe, {
-             display: ee
-           }, fe(ee))
+     }
+ 
+     function xi(WW) {
+       const {
+         t: iW,
+         selectedLanguage: OW
+       } = (0, PW.B)(), {
+         userContext: EW
+       } = (0, AW.e)(), {
+         superRankInfo: NW
+       } = EW, LW = (0, BW.usePurchasesAllowed)(), cW = WW && ((0, DW.sc)(NW) || EW.ranksMayChange) && LW, {
+         accountId: wW,
+         data: tW
+       } = (0, wi.g)(rW.e, cW);
+       if ((0, mW.useEffect)((() => {
+           if (cW) return rW.e.watchAccount(), IW.e.addRefetchListener("billing", (WW => {
+ ... (135 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L80-L116` → after: `L681-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L681-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L681-L746) · [Before (L80-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L80-L116)

```diff
-       }))
-     },
-     5191: (ee, ie, He) => {
-         He.r(ie), He.d(ie, {
-           default: () => iK
-         });
-         var ye = He(59),
-           be = He(1053),
-           Me = He.n(be),
-           Ke = He(1511),
-           Ue = He(1515),
-           Fe = He(18),
-           Je = He(77),
-           oe = He(5198),
-           Re = He(5209),
-           ke = He(5212),
- ... (21 more removed lines; see GitHub link above)
+       }), [OW]), cW && (0, Mi.e)(tW) ? (0, ZW.jsxs)("div", {
+         className: "AccountSettingsRestorePurchases",
+         children: [(0, ZW.jsx)(wW.h, {
+           className: "AccountSettingsRestorePurchasesButton",
+           loading: iW,
+           onClick: EW,
+           children: LW("payments:restorePurchases")
+         }), null !== OW && (0, ZW.jsx)("div", {
+           ref: xW,
+           className: NW()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
+             AccountSettingsRestorePurchasesFailed: OW.failed
+           }),
+           children: LW(OW.key)
+         })]
+       }) : null
+     }
+ ... (50 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L118-L127` → after: `L748-L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L748-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L748-L928) · [Before (L118-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L118-L127)

```diff
-             }), (0, fe.jsx)("img", {
-               src: Ke,
-               alt: ""
-             })]
-           }) : (0, fe.jsx)("img", {
-             className: Me()("DocsPixelIcon", ye),
-             src: Ke,
-             alt: "",
-             "aria-hidden": "true",
-             style: be
+             }))
+           })]
+         })]
+       })
+     }
+     var gi = OW(5378);
+ 
+     function Di(WW) {
+       let {
+         showing: iW
+       } = WW;
+       const {
+         userContext: OW,
+         isUserContextUpdating: EW
+       } = (0, AW.e)(), {
+         t: NW
+ ... (165 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L129-L130` → after: `L930-L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L930-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L930-L945) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L129-L130)

```diff
-         }
-         const Xe = 1500;
+         },
+         children: [(0, ZW.jsx)(LW.c, {
+           name: "bolt"
+         }), tW(Oi.giftKey)]
+       }), Ei = (0, pW.h)(MW.getPlayerRanks(), FW), Ni = (0, pW.m)(MW.superRankInfo, FW), Pi = QW.id !== VW.s.id, wi = Pi && !Ei && (0, DW.sc)(MW.superRankInfo) ? MW.superRankInfo : null, ti = rW ? tW("general:timeLeft", {
+         time: rW
+       }) : !(Pi && jW) && zW, [Zi, Ui] = (0, mW.useState)(!1), [ki, Mi] = (0, mW.useState)(!1), Ki = (0, mW.useRef)(null), Si = (0, mW.useRef)(null), Yi = (0, vW.f)({
+         showProgressUpdateMessage: !0,
+         enabled: !0
+       }), Ji = null === Yi, Hi = null !== Yi && void 0 !== Yi ? Yi : [], ni = MW !== HW.NULL_USER_CONTEXT && !MW.isLoggedIn(), ui = ni && 0 !== (null === Yi || void 0 === Yi ? void 0 : Yi.length), [oi, di] = (0, mW.useState)([]), [ei, vi] = (0, mW.useState)(!1), gi = MW.playerHas … [truncated]
+         lowerCaseName: MW.getPlayerName().toLowerCase()
+       }).then((WW => {
+         di(WW.socialLinks)
+       })).catch((WW => {
+         console.error("Failed to refresh social links", WW)
+       }))), [MW]);
```

#### 12. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L132-L140` → after: `L947-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L947-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L947-L1046) · [Before (L132-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L132-L140)

```diff
-         function ze() {
-           const [ee, ie] = (0, ye.useState)(null);
-           (0, ye.useEffect)((() => {
-             if (null === ee) return;
-             const He = setTimeout((() => {
-               ie(null)
-             }), Xe);
-             return () => {
-               clearTimeout(He)
+       function fi(WW) {
+         WW !== JW && ((0, dW.l)(WW) ? (WW = (0, dW.p)(WW), RW(tW("homePage:nameCharacters"))) : RW(null), Ki.current && (Ki.current.value = WW), CW(WW))
+       }
+       return (0, mW.useEffect)((() => (!0 === EW ? (clearInterval(Si.current), Si.current = setInterval(sW, 1e3)) : clearInterval(Si.current), () => {
+         clearInterval(Si.current)
+       })), [EW, sW]), (0, mW.useEffect)((() => {
+         var WW;
+         CW(null !== (WW = MW.getPlayerName()) && void 0 !== WW ? WW : "")
+       }), [MW]), (0, mW.useEffect)((() => {
+         if (!EW || !gi || TW) return;
+         let WW = !1;
+         return vi(!0), di([]), gW.e.getPlayerProfile(MW, {
+           lowerCaseName: MW.getPlayerName().toLowerCase()
+         }).then((iW => {
+           WW || di(iW.socialLinks)
+         })).catch((WW => {
+ ... (84 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L142-L152` → after: `L1048-L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1048-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1048-L1057) · [Before (L142-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L142-L152)

```diff
-           }), [ee]);
-           return [ee, ee => {
-             (0, qe.e)(ee).then((() => {
-               ie({
-                 text: ee,
-                 failed: !1
-               })
-             }), (He => {
-               console.error("Could not copy to the clipboard", He), ie({
-                 text: ee,
-                 failed: !0
+             return tW("settingsMenu:hideSocialLocation")
+           })(),
+           onClick: () => {
+             const WW = !(0, Ai.l)(bW);
+             (0, ji.reportAnalyticsClick)({
+               id: "social.hide_location",
+               value: WW ? "on" : "off"
+             }), Mi(!0), gW.e.setHideSocialLocation(MW, WW).then((() => {
+               yW.d.set({
+                 hideSocialLocationFrom: WW ? Date.now() : null
```

#### 14. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L193-L223` → after: `L1063-L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1063-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1063-L1101) · [Before (L193-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L193-L223)

```diff
-           Oe = 24;
- 
-         function de(ee) {
-           let {
-             code: ie,
-             lang: He,
-             compact: be = !1
-           } = ee;
-           const Ke = (0, ye.useMemo)((() => function(ee, ie) {
-               const He = Ee[ie];
-               return He ? oe.b.highlight(ee, {
-                 language: He
-               }).value : ee.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
-             }(ie, He)), [ie, He]),
-             Ue = ie.split("\n").length,
-             Fe = !be && Ue > Oe + 6,
- ... (15 more removed lines; see GitHub link above)
+           checked: (0, Ai.l)(bW),
+           disabled: ki
+         }), gi && (0, ZW.jsxs)("div", {
+           className: "SettingBox AccountSettingsSocialLinks",
+           children: [(0, ZW.jsx)("div", {
+             className: "AccountSettingsLabel",
+             children: tW("settingsMenu:socialLinks")
+           }), ei && (0, ZW.jsx)(SW.d, {}), !ei && (0, ZW.jsx)(bi.d, {
+             socialLinks: oi,
+             editable: !0,
+             userContext: MW,
+             onLinksUpdated: Vi
+           })]
+         }), (0, ZW.jsxs)("div", {
+           className: "SettingBox",
+           children: [(0, ZW.jsx)("div", {
+ ... (23 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L225-L235` → after: `L1103-L1107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1103-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/92.js#L1103-L1107) · [Before (L225-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/92.js#L225-L235)

```diff
-             }), (0, fe.jsx)("pre", {
-               children: (0, fe.jsx)("code", {
-                 className: "hljs",
-                 dangerouslySetInnerHTML: {
-                   __html: Ke
-                 }
-               })
-             }), Fe && (0, fe.jsxs)("button", {
-               type: "button",
-               className: "DocsCodeBlockExpand",
-               "aria-expanded": Je,
+             })]
+           }), UW.featureFlags.useLogin && (null !== MW.loggedInInfo || MW.isLoggedIn()) && (0, ZW.jsxs)(ZW.Fragment, {
+             children: [(0, ZW.jsx)("div", {
+               className: "AccountSettingsLoginDivider"
+             }), (0, ZW.jsxs)(wW.O, {
```
