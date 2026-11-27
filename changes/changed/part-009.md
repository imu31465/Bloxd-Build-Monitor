# Changed — Bundle Modifications Report (Part 009 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `9 / 82` (**298** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 008](part-008.md) · [Part 010 →](part-010.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/140.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/140.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846)

#### 7. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L65-L67` → after: `L18339-L19183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R18339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L18339-L19183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/140.js#L18339-L19183) · [Before (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/140.js#L65-L67)

```diff
-         const ee = be.b[He];
-         if (null === ee || void 0 === ee || !ee.purchasable) return (0, ke.jsx)(Fe.NavigatePreserveSearch, {
-           to: "/"
+         if ("string" === typeof WW) return ZP(WW, iW);
+         var OW = Object.prototype.toString.call(WW).slice(8, -1);
+         return "Object" === OW && WW.constructor && (OW = WW.constructor.name), "Map" === OW || "Set" === OW ? Array.from(WW) : "Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW) ? ZP(WW, iW) : void 0
+       }
+     }
+ 
+     function ZP(WW, iW) {
+       (null == iW || iW > WW.length) && (iW = WW.length);
+       for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
+       return mW
+     }
+ 
+     function xP(WW) {
+       var iW = wP(WW, 2),
+         OW = iW[0],
+         mW = iW[1],
+ ... (829 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/140.js` (Changed code · before: `L70-L106` → after: `L19186-L19871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846R19186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e9508f25de47ef3fbde5a6916b64991b1dacf2aea30d1d3abb26e276626b6846) · [After (L19186-L19871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/140.js#L19186-L19871) · [Before (L70-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/140.js#L70-L106)

```diff
-       const pe = He ? be.b[He] : null,
-         Xe = He ? Me.l[(0, Ke.k)(He)] : null,
-         ze = void 0 !== (null === pe || void 0 === pe ? void 0 : pe.characterSet) || null !== pe && void 0 !== pe && pe.singleItem ? pe.displayName : `${null!==(ee=null===pe||void 0===pe?void 0:pe.displayName)&&void 0!==ee?ee:He} Pack`,
-         Be = Date.now(),
-         Ee = ie((0, Te.n)(Be).nameKey),
-         ge = pe ? `Your ${ze} is Ready!` : `Welcome To ${Ee}!`,
-         Oe = pe ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
-         de = pe ? !oe.getOwnedCosmeticPacks().includes(He) : !(0, Te.j)(oe.getPlayerRanks(), Be),
-         We = pe ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : `You should get ${Ee} instantly, but it could take up to an hour to apply. If you don't have ${Ee} after an hour,  … [truncated]
-       return (0, ke.jsxs)("div", {
-         className: "PurchaseWelcome AnimFadeInScaleUp",
-         children: [Xe && (0, ke.jsx)(Xe, {}), !pe && (0, ke.jsx)(qe, {
-           iconName: "bolt",
-           iconCountPerGroup: 10,
-           animation: "Fall",
-           midShowerStart: !0,
- ... (21 more removed lines; see GitHub link above)
+   },
+   7098: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => xW,
+       g: () => ZW
+     });
+     var mW = OW(6940);
+ 
+     function EW(WW) {
+       return EW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
+         return typeof WW
+       } : function(WW) {
+         return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
+       }, EW(WW)
+     }
+ 
+ ... (670 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/141.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/141.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5)

#### 1. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/141.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/141.js#L4)

```diff
-   7186: (ee, ie, He) => {
+   7416: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L6` → after: `L7-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L7-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/141.js#L7-L13) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/141.js#L6)

```diff
-       default: () => ke
+       Graph: () => fW,
+       debug: () => oO,
+       default: () => eO,
+       graphlib: () => NW,
+       layout: () => bO,
+       util: () => dO,
+       version: () => Ni
```

#### 3. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L8-L25` → after: `L15-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L15-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/141.js#L15-L511) · [Before (L8-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/141.js#L8-L25)

```diff
-     var ye = He(1320),
-       be = He(59),
-       Me = He(103),
-       Ke = He(1515),
-       Ue = He(1178),
-       Fe = He(335),
-       Je = He(645);
-     const oe = new URL(Ue.m[Fe.d.PRODUCTION]).origin;
-     var Re = He(1228);
- 
-     function ke() {
-       const ee = (0, Ke.B)();
-       return (0, be.useEffect)((() => {
-         const ie = Me.currentUrl.getSearchParam("code");
-         Me.currentUrl.removeSearchParam("code"), null === ie && (console.error("No authorization code found in the URL"), window.close());
-         const He = {
- ... (2 more removed lines; see GitHub link above)
+     var mW = Object.defineProperty,
+       EW = (WW, iW, OW) => ((WW, iW, OW) => iW in WW ? mW(WW, iW, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: OW
+       }) : WW[iW] = OW)(WW, "symbol" != typeof iW ? iW + "" : iW, OW),
+       NW = {};
+     ((WW, iW) => {
+       for (var OW in iW) mW(WW, OW, {
+         get: iW[OW],
+         enumerable: !0
+       })
+     })(NW, {
+       Graph: () => fW,
+       alg: () => UW
+ ... (481 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L27` → after: `L513-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L513-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/141.js#L513-L618) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/141.js#L27)

```diff
-         for (const ee of (be = window.location.origin) === oe ? [be, `https://${Je.c}`] : [be]) {
+         if (OW.push(PW), null == (LW = WW.successors(PW)) || LW.forEach((function(WW) {
+             if (WW in mW) {
+               let iW = mW[WW];
+               null != iW && iW.onStack && (cW.lowlink = Math.min(cW.lowlink, iW.index))
+             } else {
+               NW(WW);
+               let iW = mW[WW];
+               iW && (cW.lowlink = Math.min(cW.lowlink, iW.lowlink))
+             }
+           })), cW.lowlink === cW.index) {
+           let WW, iW = [];
+           do {
+             WW = OW.pop();
+             let EW = mW[WW];
+             EW && (EW.onStack = !1), iW.push(WW)
+           } while (PW !== WW);
+ ... (90 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L29` → after: `L620-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L620-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/141.js#L620-L660) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/141.js#L29)

```diff
-           null === (ye = window.opener) || void 0 === ye || ye.postMessage(He, ee)
+           return null != (OW = WW.isDirected() ? WW.successors(iW) : WW.neighbors(iW)) ? OW : []
+         },
+         PW = {};
+       return iW.forEach((function(iW) {
+         if (!WW.hasNode(iW)) throw new Error("Graph does not have node: " + iW);
+         EW = eW(WW, iW, "post" === OW, PW, NW, mW, EW)
+       })), EW
+     }
+ 
+     function eW(WW, iW, OW, mW, EW, NW, PW) {
+       return iW in mW || (mW[iW] = !0, OW || (PW = NW(PW, iW)), EW(iW).forEach((function(iW) {
+         PW = eW(WW, iW, OW, mW, EW, NW, PW)
+       })), OW && (PW = NW(PW, iW))), PW
+     }
+ 
+     function vW(WW, iW, OW) {
+ ... (25 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/141.js` (Changed code · before: `L32-L39` → after: `L704-L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-acdf9ffef1f2e0b65bf2e0d0b16fece1b822a2d043e8ad466f01f48fa6d334b5) · [After (L704-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/141.js#L704-L1303) · [Before (L32-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/141.js#L32-L39)

```diff
-         setTimeout((() => {
-           window.close()
-         }), 1e3)
-       })), (0, Re.jsx)("div", {
-         className: "AuthCallback",
-         children: (0, Re.jsx)(ye.b, {
-           showFace: !0,
-           loading: !0
+         return null != (OW = WW.outEdges(iW)) ? OW : []
+       })
+     }
+     var fW = cW;
+ 
+     function CW(WW, iW, OW, mW) {
+       let EW = mW;
+       for (; WW.hasNode(EW);) EW = QW(mW);
+       return OW.dummy = iW, WW.setNode(EW, OW), EW
+     }
+ 
+     function XW(WW) {
+       let iW = new fW({
+         multigraph: WW.isMultigraph()
+       }).setGraph(WW.graph());
+       return WW.nodes().forEach((OW => {
+ ... (584 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/142.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/142.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0)

#### 1. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L4-L32` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/142.js#L4-L7) · [Before (L4-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/142.js#L4-L32)

```diff
-   7193: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       default: () => xe
-     });
-     var ye = He(59),
-       be = He(1515),
-       Me = He(1053),
-       Ke = He.n(Me),
-       Ue = He(335),
-       Fe = He(7206),
-       Je = He(1323),
-       oe = He(1502),
-       Re = He(4947),
-       ke = He(1438),
-       qe = He(3442),
-       fe = He(4953),
- ... (13 more removed lines; see GitHub link above)
+   37898: (WW, iW, OW) => {
+     function mW(WW, iW, OW, mW) {
+       return !(OW && !WW.aimable) && (!iW || WW.gun && "head" !== mW)
+     }
```

#### 2. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L35-L67` → after: `L10-L3364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L10-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/142.js#L10-L3364) · [Before (L35-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/142.js#L35-L67)

```diff
-       let {
-         pack: ie,
-         view: He,
-         favourite: ye,
-         notice: be
-       } = ee;
-       const {
-         width: Me,
-         height: Ue
-       } = Fe.s.thumb, {
-         live: Re
-       } = ie;
-       return (0, we.jsx)("div", {
-         className: "ShaderPackCard",
-         children: (0, we.jsxs)("div", {
-           className: "ShaderPackCardTile",
- ... (17 more removed lines; see GitHub link above)
+       return Math.max(.1 * WW, 1)
+     }
+ 
+     function NW(WW, iW) {
+       return !WW && iW
+     }
+     OW.d(iW, {
+       d: () => NW,
+       f: () => EW,
+       i: () => mW
+     })
+   },
+   37902: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => LW,
+       h: () => PW
+ ... (3339 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L69-L97` → after: `L3366-L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R3366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L3366-L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/142.js#L3366-L3742) · [Before (L69-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/142.js#L69-L97)

```diff
-             }), (0, we.jsxs)("div", {
-               className: "ShaderPackCardText",
-               children: [be && (0, we.jsx)("div", {
-                 className: Ke()("ShaderPackCardNotice", {
-                   Warning: "warning" === be.tone
-                 }),
-                 children: be.text
-               }), (0, we.jsx)("div", {
-                 className: "ShaderPackCardName SmallTextBold",
-                 children: ie.name
-               })]
-             })]
-           }), Re && (0, we.jsxs)("div", {
-             className: "ShaderPackCardStats",
-             children: [(0, we.jsxs)("div", {
-               className: "ShaderPackCardUses SmallTextBold",
- ... (13 more removed lines; see GitHub link above)
+             }
+           WW[OW] = {
+             positions: NW
+           }
+         }
+         return WW
+       }(),
+       "Solar Panel": {
+         positions: [{
+           block: "Solar Panel",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Solar Panel SE",
+           x: 1,
+ ... (361 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L101-L106` → after: `L3879-L3880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R3879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L3879-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/142.js#L3879-L3880) · [Before (L101-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/142.js#L101-L106)

```diff
-         results: ie,
-         loading: He,
-         failed: ye,
-         onRetry: be,
-         view: Me,
-         previewView: Ue
+         dx: iW,
+         dz: OW
```

#### 5. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L108-L154` → after: `L3882-L3887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R3882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L3882-L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/142.js#L3882-L3887) · [Before (L108-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/142.js#L108-L154)

```diff
-       const {
-         t: Fe
-       } = (0, Oe.v)(), Je = (0, Pe.l)(), oe = Date.now(), Re = null === ie ? 0 : "owned" === ie.kind ? ie.packs.length : ie.page.results.length;
-       return (0, we.jsxs)("div", {
-         className: Ke()("ShaderPackBrowseResults", {
-           Loading: He && null !== ie
-         }),
-         children: [He && null === ie && (0, we.jsx)("div", {
-           className: "ShaderPackBrowseMessage",
-           children: (0, we.jsx)(de.b, {})
-         }), ye && (0, we.jsxs)("div", {
-           className: "ShaderPackBrowseMessage",
-           children: [Fe("shaderPackListing:loadFailed"), (0, we.jsx)(ke.c, {
-             onClick: be,
-             children: Fe("general:tryAgain")
-           })]
- ... (31 more removed lines; see GitHub link above)
+       return [iW, 0, OW]
+     }));
+ 
+     function LW(WW) {
+       const iW = mW.j[WW];
+       return !!iW && WW !== mW.d && !iW.model && !iW.dl && !1 !== iW.solid && !iW.sj
```

#### 6. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L158` → after: `L3966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R3966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/142.js#L3966) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/142.js#L158)

```diff
-       return "mine" === ee.section ? "shaderPackListing:noOwnPacks" : (0, te.w)(ee) ? "general:noResults" : "favourites" === ee.section ? "shaderPackListing:noFavourites" : "general:noResults"
+       return PW <= WW && WW <= LW
```

#### 7. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L160-L165` → after: `L3968-L3972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L3968-L3972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/142.js#L3968-L3972) · [Before (L160-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/142.js#L160-L165)

```diff
-     var Ve = He(7227);
-     const ae = 24,
-       ce = {
-         favourites: "general:favourites",
-         mine: "shaderPackListing:mine"
-       };
+     const wW = new Uint8Array(LW - PW + 1);
+     for (let TW = PW; TW <= LW; TW++) wW[TW - PW] = (0, EW.w)(mW.j[TW].meta.metaStr);
+     const tW = 64,
+       ZW = tW * tW,
+       [xW, lW, AW, bW] = [0, 1, 2, 3];
```

#### 8. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L167-L180` → after: `L3974-L3991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R3974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L3974-L3991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/142.js#L3974-L3991) · [Before (L167-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/142.js#L167-L180)

```diff
-     function xe() {
-       var ee, ie, He, Me;
-       const {
-         t: de
-       } = (0, Oe.v)(), We = (0, oe.useNavigatePreserveSearch)(), Ze = (0, be.u)(), {
-         userContext: De,
-         isUserContextUpdating: Ye
-       } = (0, Xe.b)(), [xe, Le] = (0, Pe.i)(), [Ce, ve] = (0, Pe.e)(), ue = (0, ye.useRef)(!1), [me, le] = (0, Re.l)(), Se = (0, te.H)(me), [ne, je] = (0, ye.useState)(null !== (ee = Se.searchQuery) && void 0 !== ee ? ee : ""), se = (0, ye.useRef)(null), {
-         searchQuery: Ie
-       } = Se;
-       (0, ye.useEffect)((() => {
-         je(null !== Ie && void 0 !== Ie ? Ie : ""), se.current && (se.current.value = null !== Ie && void 0 !== Ie ? Ie : "")
-       }), [Ie]);
-       const [he, Ne] = (0, ye.useState)(null), [Ge, re] = (0, ye.useState)(!1), [Qe, ei] = (0, ye.useState)(!1), [ii, Hi] = (0, ye.useState)(0), yi = (0, ye.useRef)(0), bi = JSON.stringify(Se), Mi = (0, te.p)();
+     function jW(WW) {
+       var iW, OW;
+       return "string" === typeof(null === WW || void 0 === WW || null === (iW = WW.persisted) || void 0 === iW || null === (OW = iW.shared) || void 0 === OW ? void 0 : OW.text)
+     }
+ 
+     function UW(WW) {
+       return jW(WW) && "" !== WW.persisted.shared.text.trim()
+     }
+ 
+     function kW(WW, iW) {
+       let [OW, , mW] = iW;
+       const [NW, , PW] = EW.y[WW][lW];
+       return OW * NW + mW * PW
+     }
+ 
+     function sW(WW, iW, OW) {
+ ... (2 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L182-L186` → after: `L3993-L4025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R3993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L3993-L4025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/142.js#L3993-L4025) · [Before (L182-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/142.js#L182-L186)

```diff
-       function Ki() {
-         null !== Mi ? (We(Mi), ze.e.set({
-           openEverythingMenuName: Ue.r.SETTINGS,
-           openSettingsCategory: "Zf"
-         })) : We("/")
+     function MW(WW, iW, OW, NW, LW) {
+       var cW;
+       let tW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : WW(iW[0], iW[1], iW[2]);
+       if (!(wW[tW - PW] & 1 << OW)) return null;
+       const [ZW, xW, lW] = EW.y[LW][OW], AW = [iW[0] + ZW, iW[1] + xW, iW[2] + lW], bW = WW(AW[0], AW[1], AW[2]), jW = null === (cW = mW.j[bW]) || void 0 === cW ? void 0 : cW.meta;
+       return (null === jW || void 0 === jW ? void 0 : jW.rootId) === NW && jW.rot === LW && wW[bW - PW] & 1 << (1 ^ OW) ? AW : null
+     }
+ 
+     function KW(WW, iW, OW, NW) {
+       const PW = WW(iW, OW, NW);
+       if (!cW(PW)) return null;
+       const {
+         rootId: LW,
+         rot: wW
+       } = mW.j[PW].meta, ZW = (iW, OW) => {
+         let mW = iW,
+ ... (17 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L189-L196` → after: `L4046-L4072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R4046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L4046-L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/142.js#L4046-L4072) · [Before (L189-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/142.js#L189-L196)

```diff
-       function Ui(ee) {
-         le((ie => {
-           (0, te.rb)(ie, {
-             ...Se,
-             pageNumber: 1,
-             ...ee
-           })
-         }))
+     function YW(WW, iW, OW, EW, NW) {
+       const PW = WW(OW, EW, NW);
+       if (!cW(PW)) return null;
+       const {
+         rootId: LW,
+         rot: wW
+       } = mW.j[PW].meta, tW = [
+         [OW, EW, NW]
+       ], xW = new Set([tW[0].join()]);
+       let lW = tW[0],
+         AW = null;
+       for (let mW = 0; mW < tW.length; mW++) {
+         const OW = tW[mW];
+         if (sW(wW, OW, lW) < 0 && (lW = OW), jW(iW(OW[0], OW[1], OW[2]))) {
+           const iW = KW(WW, OW[0], OW[1], OW[2]);
+           (!AW || sW(wW, iW.anchor, AW.anchor) < 0) && (AW = iW)
+ ... (11 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L199-L205` → after: `L4076-L4261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R4076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L4076-L4261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/142.js#L4076-L4261) · [Before (L199-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/142.js#L199-L205)

```diff
-       function Fi() {
-         const ee = ne.trim() || null;
-         Ui({
-           searchQuery: ee,
-           ...null !== ee && !ue.current && (0, te.r)(Se) && {
-             withFeatures: [],
-             withoutFeatures: []
+     function yW(WW, iW, OW, PW, LW) {
+       if (null !== OW && cW(OW)) {
+         const {
+           rootName: WW,
+           rot: iW
+         } = mW.j[OW].meta;
+         if (EW.y[iW].some((WW => {
+             let [iW, OW, mW] = WW;
+             return iW === PW[0] && OW === PW[1] && mW === PW[2]
+           }))) return {
+           root: WW,
+           rot: iW
+         }
+       }
+       const [wW, tW] = EW.r[LW], ZW = WW(iW[0] - wW, iW[1], iW[2] - tW);
+       return {
+ ... (170 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L207-L231` → after: `L4263-L4269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R4263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L4263-L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/142.js#L4263-L4269) · [Before (L207-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/142.js#L207-L231)

```diff
-         })
-       }(0, pe.c)(Ki), (0, Pe.b)(), (0, ye.useEffect)((() => {
-         if (Ye) return;
-         const ee = ++yi.current,
-           ie = JSON.parse(bi);
-         re(!0), ei(!1), async function(ee) {
-           if ("mine" === ee.section) return {
-             kind: "owned",
-             packs: await Be.b.getOwnedShaderPacks(De)
-           };
-           const ie = "favourites" === ee.section,
-             He = ie && (0, te.r)(ee),
-             ye = await Be.b.getShaderPacks(De, {
-               sort: ie ? te.g : ee.sort,
-               features: He ? [] : ee.withFeatures,
-               withoutFeatures: He ? [] : ee.withoutFeatures,
- ... (9 more removed lines; see GitHub link above)
+         },
+         "Iron Mining Drill": {
+           ...tW,
+           meshItemName: "INTERNAL_MESH_Iron Mining Drill",
+           physicsState: {
+             type: mW.p.CAR,
+             tier: mW.g.IRON_MINING_DRILL
```

#### 13. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L233-L407` → after: `L4271-L4292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R4271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L4271-L4292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/142.js#L4271-L4292) · [Before (L233-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/142.js#L233-L407)

```diff
-         }(ie).then((ie => {
-           yi.current === ee && Ne(ie)
-         })).catch((ie => {
-           yi.current === ee && (console.error("Failed to get shader packs", ie), Ne(null), ei(!0))
-         })).finally((() => {
-           yi.current === ee && re(!1)
-         }))
-       }), [bi, De, Ye, ii]);
-       const [Ji, oi] = (0, ye.useState)(null), Ri = null !== (He = null === (Me = ("listing" === (null === he || void 0 === he ? void 0 : he.kind) ? he.page.results : (null !== (ie = null === he || void 0 === he ? void 0 : he.packs) && void 0 !== ie ? ie : []).flatMap((ee => ee.l … [truncated]
-       (0, ye.useEffect)((() => {
-         null !== Ri && oi(Ri)
-       }), [Ri]);
-       const ki = "mine" === Se.section,
-         qi = (0, te.t)(De),
-         fi = ee => {
-           "explore" !== Se.section && (ee.stopPropagation(), ee.preventDefault(), Ui({
- ... (159 more removed lines; see GitHub link above)
+         },
+         "Diamond Mining Drill": {
+           ...tW,
+           meshItemName: "INTERNAL_MESH_Diamond Mining Drill",
+           physicsState: {
+             type: mW.p.CAR,
+             tier: mW.g.DIAMOND_MINING_DRILL
+           }
+         },
+         "Moonstone Mining Drill": {
+           ...tW,
+           meshItemName: "INTERNAL_MESH_Moonstone Mining Drill",
+           physicsState: {
+             type: mW.p.CAR,
+             tier: mW.g.MOONSTONE_MINING_DRILL
+           }
+ ... (6 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L409-L418` → after: `L4294-L4309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R4294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L4294-L4309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/142.js#L4294-L4309) · [Before (L409-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/142.js#L409-L418)

```diff
-           view: Se,
-           previewView: xe
-         }), "listing" === (null === he || void 0 === he ? void 0 : he.kind) && (0, we.jsx)(fe.d, {
-           className: "ShaderPackBrowsePagination",
-           page: he.page.pageNumber,
-           totalPages: he.page.totalPages,
-           onSetPage: ee => {
-             le((ie => {
-               (0, Re.k)(ie, ee)
-             }))
+           validBlockIds: "solidBlocks",
+           meshSize: 4,
+           placeSound: null,
+           seats: [{
+             role: "driver",
+             localOffset: [0, .25, -.2]
+           }, {
+             role: "passenger",
+             localOffset: [0, .25, -1.2]
+           }]
+         },
+         "Light Blue Car": {
+           meshItemName: "INTERNAL_MESH_Car",
+           physicsState: {
+             type: mW.p.CAR,
+             tier: mW.g.CAR
```

#### 15. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L420-L424` → after: `L4311-L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R4311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L4311-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/142.js#L4311-L4372) · [Before (L420-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/142.js#L420-L424)

```diff
-           getPageHref: function(ee) {
-             const ie = new URLSearchParams(me);
-             (0, Re.k)(ie, ee);
-             const He = ie.toString();
-             return He ? `${Ze.pathname}?${He}` : Ze.pathname
+           validBlockIds: "solidBlocks",
+           meshSize: 4,
+           placeSound: null
+         }
+       },
+       xW = Object.values(ZW).map((WW => WW.meshItemName));
+ 
+     function lW(WW) {
+       for (const iW of EW.c)
+         if (ZW[iW].meshItemName === WW) return iW;
+       return null
+     }
+ 
+     function AW(WW, iW) {
+       const OW = WW.validBlockIds;
+       if (Array.isArray(OW)) return OW.includes(iW);
+ ... (46 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/142.js` (Changed code · before: `L426-L427` → after: `L4374-L4573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0R4374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d19df4524e250909c5ad29125ebe6ad8742e8d7fd4fc7f06e6f6ba84cd6581d0) · [After (L4374-L4573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/142.js#L4374-L4573) · [Before (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/142.js#L426-L427)

```diff
-         })]
-       })
+         },
+         "Orange Balloon": {
+           ...bW,
+           physicsState: {
+             type: mW.p.BALLOON,
+             tier: mW.d.ORANGE
+           }
+         },
+         "Magenta Balloon": {
+           ...bW,
+           physicsState: {
+             type: mW.p.BALLOON,
+             tier: mW.d.MAGENTA
+           }
+         },
+         "Lime Balloon": {
+ ... (184 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/143.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/143.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8)

#### 1. `bundles/bloxd.io/chunks/js/143.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/143.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/143.js#L4)

```diff
-   7210: (ee, ie, He) => {
+   7459: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/143.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/143.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/143.js#L6)

```diff
-       b: () => Ue
+       c: () => mW
```

#### 3. `bundles/bloxd.io/chunks/js/143.js` (Changed code · before: `L286-L396` → after: `L9-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8) · [After (L9-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/143.js#L9-L47) · [Before (L286-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/143.js#L286-L396)

```diff
-         popular: "shaderPackListing:sortPopular",
-         updated: "shaderPackListing:sortUpdated",
-         newest: "shaderPackListing:sortNewest"
-       },
-       ce = {
-         forest: "shaderPackListing:viewForest",
-         desert: "shaderPackListing:viewDesert",
-         water: "shaderPackListing:viewWater",
-         night: "shaderPackListing:viewNight",
-         cave: "shaderPackListing:viewCave"
-       };
- 
-     function xe(ee) {
-       return Math.round(100 * Math.max(0, 1 - 1 / ee))
-     }
- 
- ... (95 more removed lines; see GitHub link above)
+       canChange: !0,
+       blockReach: 6,
+       ezBridging: !0,
+       ezBridgingGrowMs: null,
+       ezTowering: !0,
+       ezToweringGrowMs: null,
+       speedMultiplier: 1,
+       crouchingSpeed: 2,
+       walkingSpeed: 4,
+       runningSpeed: 7,
+       jumpAmount: 8,
+       airJumpCount: 0,
+       jumpHoldThrust: null,
+       bunnyhopMaxMultiplier: 1.3,
+       music: null,
+       musicVolumeLevel: .6,
+ ... (23 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/143.js` (Changed code · before: `L399-L439` → after: `L50-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c410012f12053c55bf73e51a8ece01f45853d2335cb416392fe5cef393d6a0c8) · [After (L50-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/143.js#L50-L172) · [Before (L399-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/143.js#L399-L439)

```diff
-       Me = ["popular", "updated", "newest"],
-       Ke = 3,
-       Ue = 32,
-       Fe = 300;
- 
-     function Je(ee, ie) {
-       return ee.slice(0, ie).replace(/[\uD800-\uDBFF]$/, "")
-     }
-     const oe = 64,
-       Re = 512,
-       ke = 18e5;
- 
-     function qe(ee) {
-       const ie = ee,
-         He = null === ie || void 0 === ie ? void 0 : ie.files;
-       return "number" === typeof(null === ie || void 0 === ie ? void 0 : ie.apiVersion) && "string" === typeof ie.name && (null === ie.author || "string" === typeof ie.author) && (void 0 === ie.keepCircleShadows || "boolean" === typeof ie.keepCircleShadows) && "object" === typeof … [truncated]
- ... (25 more removed lines; see GitHub link above)
+       canCustomiseChar: !0,
+       defaultBlock: "Block of Gold",
+       cantChangeError: "You cannot modify this block",
+       cantBreakError: null,
+       cantBuildError: null,
+       touchscreenActionButton: null,
+       strictFluidBuckets: !0,
+       preserveProtectedFluidSources: !1,
+       fillBrokenBlocksWithWater: !1,
+       fluidFlow: !1,
+       canUseZoomKey: !0,
+       canAltAction: !0,
+       canSeeNametagsThroughWalls: !0,
+       showBasicMovementControls: !0,
+       survivalOnboarding: null,
+       middleTextTop: "",
+ ... (107 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/144.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/144.js` (47 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5)

#### 1. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L2)

```diff
- export const ids = [144];
+ export const ids = [144, 714];
```

#### 2. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L4)

```diff
-   42144: (ee, ie, He) => {
+   37468: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L6)

```diff
-       ShaderPackCategory: () => Ye
+       default: () => Di
```

#### 4. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L8-L31` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L8-L18) · [Before (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L8-L31)

```diff
-     var ye = He(59),
-       be = He(1515),
-       Me = He(1438),
-       Ke = He(1502),
-       Ue = He(1127),
-       Fe = He(97),
-       Je = He(18),
-       oe = He(1620),
-       Re = He(7249),
-       ke = He(325),
-       qe = He(7290),
-       fe = He(7283),
-       Te = He(7296),
-       pe = He(7201),
-       Xe = He(5501),
-       ze = He(5557),
- ... (8 more removed lines; see GitHub link above)
+     var mW = OW(327),
+       EW = OW(4746),
+       NW = OW(4787),
+       PW = OW(4779),
+       LW = OW(4776),
+       cW = OW(1172),
+       wW = OW(39),
+       tW = OW(1856),
+       ZW = OW(1434),
+       xW = OW(1532),
+       lW = OW(1089),
```

#### 5. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L33-L100` → after: `L20-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L20-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L20-L40) · [Before (L33-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L33-L100)

```diff
-       We = He(5563),
-       te = He(1323),
-       Ze = He(7242),
-       we = He(1228);
-     const De = {
-       ready: "shaderPack:statusReady",
-       readyAfterReload: "shaderPack:statusReadyAfterReload",
-       noWebGpu: "shaderPack:statusNoWebGpu",
-       offNoWebGpu: "shaderPack:statusOffNoWebGpu",
-       failed: "shaderPack:statusFailed",
-       failedRecheck: "shaderPack:statusFailedRecheck",
-       wrongApiVersion: "shaderPack:statusWrongApiVersion",
-       checking: "shaderPack:statusChecking",
-       unchecked: "shaderPack:statusUnchecked",
-       noCompiler: "shaderPack:statusNoCompiler"
-     };
- ... (52 more removed lines; see GitHub link above)
+       bW = OW(1782),
+       jW = OW(62),
+       UW = OW(80),
+       kW = OW(3245),
+       sW = OW(1365),
+       MW = OW(1713),
+       KW = OW(1107),
+       SW = OW(4619),
+       YW = OW(5261),
+       yW = OW(3582),
+       TW = OW(2021),
+       JW = OW(4738),
+       hW = OW(1873),
+       HW = OW(1584),
+       nW = OW(2991),
+       uW = OW(1383),
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L104` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L45) · [Before (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L104)

```diff
-         setApplySettingsCallback: ie
+         eventName: OW
```

#### 7. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L108-L134` → after: `L49-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L49-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L49-L59) · [Before (L108-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L108-L134)

```diff
-       } = (0, Ue.v)(), [be, Ke] = (0, ye.useState)(null), [Je, oe] = (0, ye.useState)(null), [Ee, Oe] = (0, ye.useState)(null), [de] = (0, ye.useState)(ke.m), [We, te] = (0, ye.useState)(!0), [Ze, De] = (0, ye.useState)(!1), {
-         loading: Pe,
-         error: Ye,
-         setError: ae,
-         onFiles: ce
-       } = (0, Be.f)((async ee => {
-         const ie = await (0, Re.loadPageShaderPackCompiler)();
-         if (!ie) return void ae(He("shaderPack:compilerUnavailable"));
-         oe(ie);
-         const ye = (0, qe.toStoredShaderPack)(ee, await (0, fe.g)(ie, ee.files));
-         await (0, qe.saveShaderPack)(ye, ie) ? (Ke(ye), xe(be, ye, ie)) : ae(He("shaderPack:saveFailed"))
-       }));
- 
-       function xe(ee, He, ye) {
-         (function(ee, ie, He, ye) {
-           return He || ge(ee, ye) || ge(ie, ye)
- ... (11 more removed lines; see GitHub link above)
+       } = (0, cW.B)(), EW = hW.d[OW], [NW, PW] = (0, jW.useState)((() => Date.now() >= EW.endsAt.getTime())), [LW, wW] = (0, jW.useState)("overall"), tW = function(WW, iW) {
+         const {
+           userContext: OW,
+           isUserContextUpdating: mW
+         } = (0, KW.e)(), EW = `${WW}:${iW}`, [NW, PW] = (0, jW.useState)({
+           requestKey: EW,
+           leaderboard: {
+             status: "loading"
+           }
+         });
+         return (0, jW.useEffect)((() => {
```

#### 8. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L136-L140` → after: `L61-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L61-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L61-L86) · [Before (L136-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L136-L140)

```diff
-           Oe(be);
-           const Me = await ye;
-           if (!ee && (oe(Me), null !== He && be && null !== Me && (0, qe.shaderPackNeedsCheck)(He, Me))) {
-             const ie = await (0, fe.e)(He, Me);
-             ee || Ke((ee => ee === He ? ie : ee))
+           let NW, LW = !1;
+           const cW = async () => {
+             if ("visible" === document.visibilityState) try {
+               const mW = await HW.e.getGameEventLeaderboard(OW, {
+                 event: WW,
+                 scope: iW
+               });
+               LW || PW({
+                 requestKey: EW,
+                 leaderboard: {
+                   status: "loaded",
+                   leaderboard: mW
+                 }
+               })
+             } catch {
+               LW || PW((WW => WW.requestKey === EW && "loaded" === WW.leaderboard.status ? WW : {
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L142-L147` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L88-L89) · [Before (L142-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L142-L147)

```diff
-         }().catch((ie => {
-           console.error("Failed to load the stored shader pack", ie), ee || ae(He("shaderPack:unexpectedError"))
-         })).finally((() => {
-           ee || (te(!1), De(!1))
-         })), () => {
-           ee = !0
+         }), [WW, iW, EW, OW, mW]), NW.requestKey === EW ? NW.leaderboard : {
+           status: "loading"
```

#### 10. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L149-L168` → after: `L91-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L91-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L91-L129) · [Before (L149-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L149-L168)

```diff
-       }), []), (0, we.jsxs)("div", {
-         className: "ShaderPackCategory SettingsMenuRightInner",
-         children: [(0, we.jsx)("div", {
-           className: "ShaderPackIntro",
-           children: He("shaderPack:intro")
-         }), (0, we.jsx)(Ve, {
-           to: pe.Y,
-           className: "ShaderPackBrowseLink",
-           children: (0, we.jsx)(Me.m, {
-             className: "ShaderPackBrowseButton",
-             children: He("shaderPackListing:browse")
-           })
-         }), !1 === Ee && (0, we.jsx)("div", {
-           className: "SettingsBoxWarning",
-           children: He(de ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
-         }), null !== Ye && (0, we.jsxs)("div", {
- ... (4 more removed lines; see GitHub link above)
+       }(OW, LW), ZW = function(WW) {
+         const iW = (0, jW.useRef)(null),
+           OW = (0, jW.useRef)(0),
+           mW = (0, jW.useRef)(),
+           [EW, NW] = (0, jW.useState)({});
+         return (0, jW.useEffect)((() => {
+           const EW = null === WW || void 0 === WW ? void 0 : WW.entries;
+           if (!EW) return;
+           const PW = new Map(EW.map((WW => [WW.player.name, WW.value]))),
+             LW = iW.current;
+           if (iW.current = PW, null === LW) return;
+           const cW = {};
+           for (const [WW, iW] of PW) {
+             const mW = LW.get(WW);
+             void 0 !== mW && iW > mW && (cW[WW] = {
+               amount: iW - mW,
+ ... (23 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L170` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L131) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L170)

```diff
-             className: "ShaderPackSummaryHeader",
+             className: "GameEventPanelInfo",
```

#### 12. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L172-L189` → after: `L133-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L133-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L133-L240) · [Before (L172-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L172-L189)

```diff
-               children: [(0, we.jsx)("div", {
-                 className: "ShaderPackName",
-                 children: be.manifest.name
-               }), be.manifest.author && (0, we.jsx)("div", {
-                 className: "ShaderPackAuthor",
-                 children: (0, ze.i)(He, "shaderPack:byAuthor", {
-                   author: be.manifest.author
-                 })
-               }), be.manifest.description && (0, we.jsx)("div", {
-                 className: "ShaderPackDescription",
-                 children: be.manifest.description
-               }), be.listing && (0, we.jsx)("div", {
-                 className: "ShaderPackAuthor",
-                 children: (0, we.jsx)(Ve, {
-                   to: (0, pe.eb)(be.listing.packId),
-                   className: "ShaderPackListingLink",
- ... (2 more removed lines; see GitHub link above)
+               className: "GameEventPanelStatus",
+               children: [(0, eW.jsxs)("span", {
+                 className: "GameEventPanelLive",
+                 children: [(0, eW.jsx)("span", {
+                   className: "GameEventPanelLiveDot"
+                 }), mW("gameEvents:live")]
+               }), (0, eW.jsxs)("span", {
+                 className: "GameEventPanelEndsIn",
+                 children: [mW("gameEvents:endsIn"), (0, eW.jsx)(yW.c, {
+                   toTime: EW.endsAt,
+                   onReachEndOfCountdown: () => {
+                     PW(!0)
+                   }
+                 })]
+               })]
+             }), (0, eW.jsx)("h2", {
+ ... (92 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L206-L210` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L244) · [Before (L206-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L206-L210)

```diff
-         }), (0, we.jsx)(Be.b, {
-           busy: We || Pe || Ze,
-           disabled: We || Pe || Ze || !0 !== Ee,
-           onFiles: ce
-         })]
+         })
```

#### 14. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L216-L218` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L250-L251) · [Before (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L216-L218)

```diff
-         to: ie,
-         className: He,
-         children: ye
+         event: iW,
+         progress: OW
```

#### 15. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L221-L233` → after: `L254-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L254-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L254-L291) · [Before (L221-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L221-L233)

```diff
-         gameState: Me
-       } = (0, Je.m)(["gameState"]), {
-         pathname: Ue,
-         search: Fe
-       } = (0, be.u)(), Re = "landingPage" !== Me && "studio" !== Me;
-       return (0, we.jsx)(Ke.LinkPreserveSearch, {
-         to: ie,
-         className: He,
-         target: Re ? "_blank" : void 0,
-         onClick: () => {
-           Re || ((0, pe.J)(`${Ue}${Fe}`), (0, oe.e)())
-         },
-         children: ye
+         t: mW
+       } = (0, cW.B)(), EW = null !== OW && iW.prizeGoals.some(((WW, iW) => OW[iW] >= WW.target));
+       return (0, eW.jsxs)("div", {
+         className: "GameEventPanelGoals",
+         children: [(0, eW.jsx)("div", {
+           className: "GameEventPanelGoalsHeading",
+           children: mW(EW ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
+         }), (0, eW.jsx)("div", {
+           className: "GameEventPanelGoalRow",
+           children: iW.prizeGoals.map(((WW, iW) => {
+             const EW = null === OW ? null : Math.min(OW[iW], WW.target);
+             return (0, eW.jsxs)(jW.Fragment, {
+               children: [iW > 0 && (0, eW.jsx)("div", {
+                 className: "GameEventPanelGoalsOr",
+                 children: mW("gameEvents:goalsOr")
+               }), (0, eW.jsxs)("div", {
+ ... (22 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L236-L269` → after: `L294-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L294-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L294-L298) · [Before (L236-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L236-L269)

```diff
-   },
-   7201: (ee, ie, He) => {
-     He.d(ie, {
-       C: () => fe,
-       F: () => Xe,
-       H: () => we,
-       J: () => oe,
-       N: () => Pe,
-       P: () => Te,
-       T: () => Ce,
-       V: () => xe,
-       Y: () => Ke,
-       ab: () => Le,
-       c: () => ze,
-       eb: () => Fe,
-       g: () => te,
- ... (18 more removed lines; see GitHub link above)
+     var pW = OW(1642),
+       fW = OW(1697),
+       CW = OW(1078),
+       XW = OW(754),
+       BW = OW(4718);
```

#### 17. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L272` → after: `L301-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L301-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L301-L394) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L272)

```diff
-       return `${Ke}/${encodeURIComponent(ee)}`
+       let {
+         gameNameWithVariation: iW
+       } = WW;
+       const OW = (0, pW.B)(iW),
+         [mW, EW] = (0, jW.useState)(null);
+       if ((0, jW.useEffect)((() => {
+           if (!OW) return;
+           let WW = !0;
+           return (0, fW.g)(OW).then((iW => {
+             WW && EW(iW)
+           })).catch((WW => {
+             console.error(`Failed to load the page copy for ${OW.name}`, WW)
+           })), () => {
+             WW = !1
+           }
+         }), [OW]), !OW || !mW || mW.name !== OW.name) return null;
+ ... (78 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L274` → after: `L396-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L396-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L396-L418) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L274)

```diff
-     let Je = null;
+     var RW = OW(1391),
+       GW = OW(100),
+       IW = OW(1111),
+       aW = OW(35272),
+       rW = OW(1747),
+       zW = OW(1616),
+       FW = OW(1605),
+       QW = OW(1707),
+       Wi = OW(1544),
+       ii = OW(1422),
+       Oi = OW(37474),
+       mi = OW(1223),
+       Ei = OW(1052),
+       Ni = OW(344),
+       Pi = OW(1065),
+       Li = OW(1638),
+ ... (7 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L277-L285` → after: `L421-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L421-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L421-L442) · [Before (L277-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L277-L285)

```diff
-       Je = ee
-     }
- 
-     function Re() {
-       return Je
-     }
- 
-     function ke() {
-       Je = null
+       let {
+         preview: iW,
+         isBroken: OW
+       } = WW;
+       const mW = null === iW ? null : (0, NW.f)(iW, "small"),
+         PW = (0, EW.f)(null !== mW && void 0 !== mW ? mW : NW.t);
+       return null === iW ? (0, eW.jsx)("div", {
+         className: AW()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
+           FeaturedGamesPopupSlotThumbnailBroken: OW
+         }),
+         children: (0, eW.jsx)(RW.c, {
+           name: OW ? "triangle-exclamation" : "star"
+         })
+       }) : (0, eW.jsx)("div", {
+         className: AW()("FeaturedGamesPopupSlotThumbnail", LW.j),
+         style: (0, LW.f)(PW),
+ ... (6 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L289-L297` → after: `L446-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L446-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L446-L469) · [Before (L289-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L289-L297)

```diff
-       return ee.playerHasRank("developer") || ee.playerHasRank("admin")
-     }
-     const fe = ["terrain", "water", "models", "sunShadows", "strict"],
-       Te = {
-         terrain: "shaderPackListing:filterTerrain",
-         water: "shaderPackListing:filterWater",
-         models: "shaderPackListing:filterModels",
-         sunShadows: "shaderPackListing:filterShadows",
-         strict: "shaderPackListing:filterAllGames"
+       let {
+         schematicId: iW,
+         gameName: OW
+       } = WW;
+       const {
+         userContext: EW
+       } = (0, KW.e)(), NW = (0, Ai.c)(), [PW, LW] = (0, jW.useState)(null), [cW, wW] = (0, jW.useState)(null), [tW, ZW] = (0, jW.useState)(!1), lW = (0, jW.useCallback)((() => {
+         wW(null), HW.e.getFeaturedGames(EW).then((WW => {
+           NW.current && LW(WW.slots)
+         })).catch((WW => {
+           console.error("Failed to get featured games", WW), NW.current && wW("Failed to load featured games")
+         }))
+       }), [EW, NW]);
+       (0, jW.useEffect)((() => {
+         lW()
+       }), [lW]);
+ ... (8 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L299-L305` → after: `L471-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L471-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L471-L551) · [Before (L299-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L299-L305)

```diff
- 
-     function pe(ee, ie) {
-       return ee.withFeatures.includes(ie) ? "with" : ee.withoutFeatures.includes(ie) ? "without" : null
-     }
- 
-     function Xe(ee) {
-       return null === ee ? "with" : "with" === ee ? "without" : null
+       return (0, eW.jsxs)("div", {
+         className: "FeaturedGamesPopupBody",
+         children: [(0, eW.jsx)("h1", {
+           className: "FeaturedGamesPopupTitle",
+           children: "Featured Games"
+         }), !PW && !cW && (0, eW.jsx)("div", {
+           className: "FeaturedGamesPopupLoader",
+           children: (0, eW.jsx)(uW.d, {})
+         }), cW && (0, eW.jsx)("div", {
+           className: "FeaturedGamesPopupError",
+           children: cW
+         }), PW && (0, eW.jsxs)(eW.Fragment, {
+           children: [(0, eW.jsx)("div", {
+             className: "FeaturedGamesPopupSlots",
+             children: PW.map((WW => {
+               const OW = WW.schematicId === iW,
+ ... (65 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L309` → after: `L560-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L560-L582) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L309)

```diff
-       return "with" === ee ? "only" : null === ee ? "include" : void 0
+       let {
+         customLobbies: iW,
+         favouriteLobbies: OW,
+         toggleLikeLobby: mW,
+         showReport: EW
+       } = WW;
+       const [NW, PW] = (0, jW.useState)(Mi);
+       return (0, jW.useEffect)((() => {
+         if (NW >= iW.length) return;
+         let WW = !0;
+         return (0, si.c)().then((() => {
+           WW && PW(NW + Ki)
+         })), () => {
+           WW = !1
+         }
+       }), [NW, iW.length]), (0, eW.jsx)(eW.Fragment, {
+ ... (7 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L313-L314` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L614) · [Before (L313-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L313-L314)

```diff
-       const He = pe(ee, ie),
-         ye = ee => ee.filter((ee => ee !== ie));
+       const OW = Zi.g[WW.schematicId];
```

#### 24. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L316-L317` → after: `L616-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L616-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L616-L630) · [Before (L316-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L316-L317)

```diff
-         withFeatures: null === He ? [...ee.withFeatures, ie] : ye(ee.withFeatures),
-         withoutFeatures: "with" === He ? [...ee.withoutFeatures, ie] : ye(ee.withoutFeatures)
+         listedVariations: [],
+         backgroundImage: (0, NW.f)(WW, "large"),
+         badges: [],
+         category: WW.gameCategory,
+         title: void 0 !== (null === OW || void 0 === OW ? void 0 : OW.title) ? iW(OW.title) : WW.name,
+         variationTitle: null,
+         description: void 0 !== (null === OW || void 0 === OW ? void 0 : OW.description) ? iW(OW.description) : WW.description,
+         ownerSocialPreviewWithoutLocation: "owner" in WW ? WW.owner : null,
+         ccu: WW.ccu,
+         favourites: WW.favourites,
+         isFavourite: null,
+         useRejoinLastLobbyButton: "persistWorld" in WW ? WW.persistWorld : null,
+         showWorldsInsteadOfCustomLobbies: !1,
+         canCreateCustomLobbies: !0,
+         countdownInformation: null
```

#### 25. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L330-L341` → after: `L636-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L636-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L636-L693) · [Before (L330-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L330-L341)

```diff
-       const Ke = ee.get(Ee),
-         Ue = (null !== (ie = ee.get(Oe)) && void 0 !== ie ? ie : Ze).split(","),
-         Fe = ee.get(We);
-       return {
-         section: "favourites" === Ke || "mine" === Ke ? Ke : "explore",
-         sort: null !== (He = ye.w.find((ie => ie === ee.get(ge)))) && void 0 !== He ? He : te,
-         withFeatures: fe.filter((ee => Ue.includes(ee) && !Ue.includes(`-${ee}`))),
-         withoutFeatures: fe.filter((ee => Ue.includes(`-${ee}`))),
-         searchQuery: (null === (be = ee.get(de)) || void 0 === be ? void 0 : be.slice(0, ye.G)) || null,
-         pageNumber: (0, Me.g)(ee.get(Me.e)),
-         banned: "only" === Fe ? "with" : "include" === Fe ? null : "without"
-       }
+       return null !== (iW = null !== (OW = (0, ui.h)() ? function(WW) {
+         for (const [iW, OW] of Object.entries(oi)) {
+           const mW = [iW, ...OW.map((WW => (0, Ni.Pb)(iW, WW)))];
+           if (mW.includes(WW)) return mW
+         }
+         return null
+       }(WW) : null) && void 0 !== OW ? OW : null === (mW = Zi.d[WW]) || void 0 === mW ? void 0 : mW.listedVariations) && void 0 !== iW ? iW : null
+     }
+ 
+     function Di() {
+       const {
+         gameNameWithVariation: WW
+       } = (0, zW.z)();
+       if ((0, jW.useEffect)(Ji.n, []), WW && (0, mi.r)(WW)) return (0, eW.jsx)(Vi, {
+         urlId: WW
+       }, WW);
+ ... (42 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L345-L347` → after: `L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L697) · [Before (L345-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L345-L347)

```diff
-       var He;
-       const ye = Ve(ie);
-       (0, Me.i)(ee, Ee, "explore" === ie.section ? null : ie.section), (0, Me.i)(ee, ge, ie.sort === te ? null : ie.sort), (0, Me.i)(ee, Oe, ye === Ze ? null : ye), (0, Me.i)(ee, de, ie.searchQuery), (0, Me.i)(ee, We, null !== (He = ze(ie.banned)) && void 0 !== He ? He : null), ( … [truncated]
+       (0, FW.navigateToHomePage)(), (0, ni.c)(WW, iW)
```

#### 27. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L351-L360` → after: `L701-L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L701-L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L701-L1284) · [Before (L351-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L351-L360)

```diff
-       const ie = new URLSearchParams;
-       return De(ie, {
-         section: "explore",
-         sort: te,
-         withFeatures: "strict" === ee ? [ee] : [ee, "strict"],
-         withoutFeatures: [],
-         searchQuery: null,
-         pageNumber: 1,
-         banned: "without"
-       }), `${Ke}?${ie.toString()}`
+       var iW, OW, PW, lW, hW, nW, uW, dW;
+       let {
+         gameNameWithVariation: vW,
+         knownCustomGame: gW = null
+       } = WW;
+       const {
+         t: VW
+       } = (0, cW.B)();
+       (0, ti.j)();
+       const fW = (0, ti.m)(),
+         {
+           userContext: CW,
+           isUserContextUpdating: XW
+         } = (0, KW.e)(),
+         BW = (0, Ti.h)(),
+         IW = (0, FW.useNavigatePreserveSearch)(),
+ ... (568 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L364` → after: `L1288-L1316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1288-L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1288-L1316) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L364)

```diff
-       return Ve(ee) === Ze
+       let {
+         variation: iW,
+         isSelected: OW,
+         children: mW
+       } = WW;
+       const cW = Zi.d[iW],
+         tW = (0, NW.n)(iW, (0, NW.p)(cW)),
+         ZW = (0, EW.f)(tW),
+         xW = (0, PW.d)([(0, NW.j)(iW, (0, NW.c)(cW))]);
+       return (0, eW.jsxs)(FW.LinkPreserveSearch, {
+         to: (0, pW.w)(iW),
+         replace: !0,
+         className: AW()("GameInformationVariation", LW.j, {
+           SelectedGameInformationVariation: OW
+         }),
+         onClick: WW => {
+ ... (13 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L368` → after: `L1337-L1378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1337-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1337-L1378) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L368)

```diff
-       return null !== ee.searchQuery || "with" === ee.banned || Ve(ee) !== Ze
+       let {
+         info: iW,
+         className: OW
+       } = WW;
+       const {
+         statusText: mW,
+         rowText: EW
+       } = (0, lW.h)();
+       return (0, AW.jsxs)("div", {
+         className: xW()("GameApprovalInfoDetails", OW),
+         children: [(0, AW.jsxs)("div", {
+           className: xW()("GameApprovalInfoSummary", iW.overallPassed ? "Passed" : "Failed"),
+           children: [(0, AW.jsx)(tW.c, {
+             name: iW.overallPassed ? "circle-check" : "circle-xmark"
+           }), (0, AW.jsx)("span", {
+             children: mW(iW.status)
+ ... (26 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L372-L375` → after: `L1384-L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1384-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1384-L1391) · [Before (L372-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L372-L375)

```diff
-       return fe.flatMap((ie => {
-         const He = pe(ee, ie);
-         return "with" === He ? [ie] : "without" === He ? [`-${ie}`] : []
-       })).join(",")
+       UW.NotificationProvider.showCustomPopup({
+         body: () => (0, AW.jsx)(sW, {
+           ...WW
+         }),
+         middleScreenPopupClassName: "ApprovalInfoPopup",
+         onClose: () => {},
+         unlockPointerKey: "approvalInfoPopup"
+       })
```

#### 31. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L391` → after: `L1395-L1484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1395-L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1395-L1484) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L391)

```diff
-       return Math.round(100 * Math.max(0, 1 - 1 / ee))
+       let {
+         schematicId: iW,
+         canOverride: OW,
+         onApprovalChanged: ZW
+       } = WW;
+       const {
+         t: xW
+       } = (0, jW.B)(), {
+         userContext: lW
+       } = (0, LW.e)(), UW = (0, PW.c)(), [kW, sW] = (0, mW.useState)(null), [MW, KW] = (0, mW.useState)(null), [SW, YW] = (0, mW.useState)(!1), yW = (0, mW.useCallback)((() => {
+         KW(null), NW.e.getGameApprovalInfo(lW, iW).then((WW => {
+           UW.current && sW(WW)
+         })).catch((WW => {
+           console.error("Failed to get game approval info", WW), UW.current && KW(xW("studio:approvalLoadFailed"))
+         }))
+       }), [lW, iW, UW, xW]);
+ ... (74 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L394-L400` → after: `L1503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1503) · [Before (L394-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L394-L400)

```diff
-     function Le(ee, ie, He, be) {
-       const Me = [];
-       ee.isBanned && Me.push({
-         tone: "warning",
-         text: be("shaderPackListing:ownerBanned"),
-         detail: null
-       });
+     function PW() {
```

#### 33. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L402-L423` → after: `L1505-L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1505-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1505-L1561) · [Before (L402-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L402-L423)

```diff
-         pending: Ke
-       } = ee;
-       if (null === ee.brokenError || Ke && !Ke.error || Me.push({
-           tone: "warning",
-           text: be("shaderPackListing:ownerBroken"),
-           detail: ee.brokenError
-         }), null !== Ke && void 0 !== Ke && Ke.error) Me.push({
-         tone: "warning",
-         text: be(ie ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
-         detail: (0, ye.l)(Ke.error) ? null : Ke.error
-       });
-       else if (Ke) {
-         const ee = null === Ke.renderNotBefore ? 0 : Ke.renderNotBefore - He,
-           ye = String(Math.ceil(ee / 6e4)),
-           Ue = be(ie ? ee > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : ee > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
-             minutes: ye
- ... (6 more removed lines; see GitHub link above)
+         t: WW,
+         selectedLanguage: iW
+       } = (0, EW.B)();
+       return {
+         statusText: iW => WW(NW[iW]),
+         rowText: OW => {
+           const NW = (WW, OW) => (0, mW.$)((0, EW.k)(iW.code, WW), 0, OW),
+             PW = (iW, OW) => null === OW ? iW : WW("studio:approvalWithMinDays", {
+               value: iW,
+               days: OW
+             });
+           switch (OW.kind) {
+             case "ownerAccountAge": {
+               const iW = OW.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
+               return {
+                 label: WW("studio:approvalAccountAgeLabel"),
+ ... (41 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L433` → after: `L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1566) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L433)

```diff
-       return Math.max(1, Math.round(ee / 1024))
+       return null === WW.manualOverride && WW.rows.some((WW => "reportHold" === WW.kind && !WW.passed))
```

#### 35. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L436-L437` → after: `L1576-L1585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1576-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1576-L1585) · [Before (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L436-L437)

```diff
-     function ve(ee, ie, He) {
-       return ee instanceof be.b && ee.errorMessageForUser ? ee.errorMessageForUser : ie(He)
+     function NW() {
+       const [WW, iW] = (0, mW.useState)(!1);
+       return (0, mW.useLayoutEffect)((() => {
+         let WW = !0;
+         return (0, EW.c)().then((() => {
+           WW && iW(!0)
+         })), () => {
+           WW = !1
+         }
+       }), []), WW
```

#### 36. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L440` → after: `L1588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1588) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L440)

```diff
-   7206: (ee, ie, He) => {
+   10176: (WW, iW, OW) => {
```

#### 37. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L442-L459` → after: `L1590-L1591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1590-L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1590-L1591) · [Before (L442-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L442-L459)

```diff
-       A: () => Ke,
-       C: () => ye,
-       D: () => ke,
-       G: () => oe,
-       H: () => Ee,
-       L: () => Re,
-       M: () => Je,
-       d: () => fe,
-       h: () => pe,
-       i: () => Te,
-       j: () => qe,
-       l: () => Be,
-       m: () => Oe,
-       o: () => Fe,
-       s: () => be,
-       t: () => ge,
- ... (2 more removed lines; see GitHub link above)
+       b: () => jW,
+       c: () => UW
```

#### 38. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L461-L479` → after: `L1593-L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1593-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1593-L1605) · [Before (L461-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L461-L479)

```diff
-     const ye = ["forest", "desert", "water", "night", "cave"];
-     const be = {
-         full: {
-           width: 3840,
-           height: 2160
-         },
-         large: {
-           width: 1920,
-           height: 1080
-         },
-         thumb: {
-           width: 640,
-           height: 360
-         }
-       },
-       Me = ["popular", "updated", "newest"],
- ... (3 more removed lines; see GitHub link above)
+     var mW = OW(154),
+       EW = OW(182),
+       NW = OW(1052),
+       PW = OW(1065),
+       LW = OW(1217),
+       cW = OW(2037),
+       wW = OW(3245),
+       tW = OW(1584),
+       ZW = OW(1422),
+       xW = OW(1111),
+       lW = OW(10181),
+       AW = OW(1605),
+       bW = OW(1638);
```

#### 39. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L482` → after: `L1608-L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1608-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1608-L1635) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L482)

```diff
-       return ee.slice(0, ie).replace(/[\uD800-\uDBFF]$/, "")
+       const OW = !0 === iW.debugResult.gameRefused,
+         NW = OW || iW.code === mW.k.REQUEST_TO_MATCHMAKING ? (0, lW.h)(iW.message) : null;
+       if (null !== NW) return KW(WW, WW((0, lW.n)(NW)), WW(lW.k[NW])), !0;
+       if (OW) return async function(WW) {
+         const {
+           gameNameWithVariation: iW,
+           lobbyName: OW,
+           shownLobbyName: mW
+         } = cW.gameBridge.latest("connectedGame"), EW = "classic" === iW && (0, LW.M)(OW) ? mW : await (0, wW.i)(WW, iW, OW);
+         return "" !== EW ? WW("general:cantJoinGame", {
+           game: EW
+         }) : WW("general:cantJoinThisGame")
+       }(WW).then((OW => {
+         KW(WW, OW, iW.message)
+       })), !0;
+       const {
+ ... (12 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L488-L491` → after: `L1638-L1645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1638-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1638-L1645) · [Before (L488-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L488-L491)

```diff
-     function qe(ee) {
-       const ie = ee,
-         He = null === ie || void 0 === ie ? void 0 : ie.files;
-       return "number" === typeof(null === ie || void 0 === ie ? void 0 : ie.apiVersion) && "string" === typeof ie.name && (null === ie.author || "string" === typeof ie.author) && (void 0 === ie.keepCircleShadows || "boolean" === typeof ie.keepCircleShadows) && "object" === typeof … [truncated]
+     function UW(WW, iW) {
+       !0 !== (null === iW || void 0 === iW ? void 0 : iW.takenDown) ? KW(WW, WW("general:cantJoinThisGame"), EW.e.customGameTakenDown.text) : sW(WW, "lock", WW("studio:gameTakenDownTitle", {
+         game: iW.name
+       }), WW("studio:viewInStudio"), iW.schematicId)
+     }
+ 
+     function kW() {
+       return (0, NW.n)(cW.gameBridge.latest("connectedGame").gameNameWithVariation)
```

#### 41. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L493-L494` → after: `L1647-L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1647-L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1647-L1679) · [Before (L493-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L493-L494)

```diff
-     const fe = "Bloxdhub",
-       Te = "https://bloxdhub.com/shaders";
+     async function sW(WW, iW, OW, mW, EW) {
+       !0 === await ZW.NotificationProvider.showPromptPopup({
+         icon: iW,
+         title: OW,
+         confirmText: mW,
+         cancelText: WW("general:cancel")
+       }).getResult() && (0, AW.navigatePreserveSearch)((0, bW.v)((0, PW.d)(EW), "manage"))
+     }
+     async function MW(WW) {
+       try {
+         return await tW.e.getGame(await xW.userContextManager.getCurrentUserContext(), WW, !0)
+       } catch (iW) {
+         return (0, tW.f)(iW) || console.error(`Failed to get game ${WW}`, iW), null
+       }
+     }
+ 
+ ... (17 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L497` → after: `L1682-L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1682-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1682-L1703) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L497)

```diff
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(ee)}`
+       return WW = function(WW, iW) {
+         var OW;
+         const mW = new URLSearchParams(iW),
+           EW = mW.get("lobby"),
+           NW = mW.get("vm"),
+           PW = null !== (OW = EW) && void 0 !== OW ? OW : WW.lobbyName,
+           LW = null !== NW && void 0 !== NW ? NW : WW.directJoinVmUrl;
+         if (PW === WW.lobbyName && LW === WW.directJoinVmUrl) return WW;
+         return {
+           ...WW,
+           lobbyName: PW,
+           directJoinVmUrl: LW
+         }
+       }(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), WW = function(WW) {
+         if ((0, NW.K)(WW.directJoinVmUrl)) return WW;
+         const iW = (0, EW.fb)(WW.directJoinVmUrl);
+ ... (6 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L499-L500` → after: `L1705-L1715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1705-L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1705-L1715) · [Before (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L499-L500)

```diff
-     const Xe = "Screenshot generation failed.",
-       ze = "Its screenshots couldn't be generated:";
+   },
+   10181: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => NW,
+       f: () => PW,
+       h: () => LW,
+       k: () => wW,
+       n: () => cW
+     });
+     var mW = OW(182),
+       EW = OW(5318);
```

#### 44. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L503-L504` → after: `L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1718) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L503-L504)

```diff
-       var ie;
-       return ee === Xe || null !== (ie = null === ee || void 0 === ee ? void 0 : ee.startsWith(ze)) && void 0 !== ie && ie
+       return PW(WW) === mW.e.gameOrPluginOnPlayerAuthRejected.code
```

#### 45. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L507-L508` → after: `L1721-L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1721-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1721-L1722) · [Before (L507-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L507-L508)

```diff
-     function Ee(ee, ie) {
-       return `shaderPacks/${ee}/${ie}.json`
+     function PW(WW) {
+       return "object" === typeof WW && null !== WW ? WW.code : void 0
```

#### 46. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L511-L512` → after: `L1725-L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1725-L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1725-L1727) · [Before (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L511-L512)

```diff
-     function ge(ee, ie, He, ye) {
-       return null === ie.renderId ? Oe(ee, ie.baselineVersion, He, ye) : `${ee}/${function(ee,ie,He,ye){return`shaderPacks/${ee}/${ie}/${He}-${ye}.webp`}(ie.packId,ie.renderId,He,ye)}`
+     function LW(WW) {
+       var iW;
+       return null !== (iW = Object.keys(EW.d).find((iW => EW.d[iW] === WW))) && void 0 !== iW ? iW : null
```

#### 47. `bundles/bloxd.io/chunks/js/144.js` (Changed code · before: `L515-L516` → after: `L1730-L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5R1730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea6fdf9fdbb3b3d310ae70822675f022b28094ae4368281c67dda31af0c95bd5) · [After (L1730-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/144.js#L1730-L1737) · [Before (L515-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/144.js#L515-L516)

```diff
-     function Oe(ee, ie, He, ye) {
-       return `${ee}/${function(ee,ie,He){return`shaderPacks/baseline/${ee}/${ie}-${He}.webp`}(ie,He,ye)}`
+     function cW(WW) {
+       return "notWhitelisted" === WW ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
+     }
+     const wW = {
+       private: "customLobby:cantJoinPrivate",
+       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
+       banned: "customLobby:cantJoinBanned",
+       adminLocked: "customLobby:cantJoinAdminLocked"
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/145.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/145.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977)

#### 1. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/145.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/145.js#L2)

```diff
- export const ids = [145, 152, 153];
+ export const ids = [145];
```

#### 2. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/145.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/145.js#L4)

```diff
-   41618: (ee, ie, He) => {
+   9972: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L7-L20` → after: `L7-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L7-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/145.js#L7-L141) · [Before (L7-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/145.js#L7-L20)

```diff
-       installListedShaderPack: () => oe
-     });
-     var ye = He(7206),
-       be = He(5570),
-       Me = He(1141),
-       Ke = He(7249),
-       Ue = He(5563),
-       Fe = He(7290),
-       Je = He(7283);
-     async function oe(ee) {
-       const ie = await (0, Ke.loadPageShaderPackCompiler)();
-       if (null === ie) return {
-         kind: "failed",
-         reason: "compiler"
+       e: () => NW
+     });
+     var mW = OW(2095);
+     const EW = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
+       NW = WW => "string" === typeof WW.icon && "" !== WW.icon && "string" === typeof WW.keycode && EW.test(WW.keycode),
+       PW = WW => "Space" === WW ? "_" : mW.h[WW]
+   },
+   37735: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW,
+       g: () => NW
+     });
+     let mW = !1;
+ 
+     function EW() {
+       return mW
+ ... (119 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L22-L44` → after: `L143-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L143-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/145.js#L143-L213) · [Before (L22-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/145.js#L22-L44)

```diff
-       const He = await Re(ee, ie);
-       return "failed" === He.kind ? He : await (0, Fe.saveShaderPack)(He.stored, ie) ? ((0, Fe.markShaderPackChangePending)(), He) : {
-         kind: "failed",
-         reason: "save"
-       }
-     }
-     async function Re(ee, ie) {
-       const He = await async function(ee) {
-         let {
-           packId: ie,
-           sourceHash: He
-         } = ee;
-         try {
-           const ee = await fetch(`${Me.clientSideServerUrls.s3Url}/${(0,ye.H)(ie,He)}`, {
-             headers: {
-               Accept: "application/json"
- ... (7 more removed lines; see GitHub link above)
+     class sW {
+       constructor(WW) {
+         this.source = WW, this.keyListeners = [], this.actionsListeners = [], this.pointerLockListeners = [], this.BL = new Uint8Array(bW.c.length), this.heldCount = 0, this.actionBits = 0, this.typing = !1, this.pointerLocked = !1, this.mouseButtons = 0, this.keyTable = null, WW … [truncated]
+           this.keyTable = null
+         }))
+       }
+       onKey(WW) {
+         return KW(this.keyListeners, WW)
+       }
+       onUnboundKey(WW) {
+         return this.onKey(((iW, OW, mW, EW, NW, PW) => {
+           OW && EW && !mW && WW(iW, PW)
+         }))
+       }
+       onActions(WW) {
+         return KW(this.actionsListeners, WW)
+ ... (55 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L46-L173` → after: `L215-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L215-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/145.js#L215-L234) · [Before (L46-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/145.js#L46-L173)

```diff
-       }(ee);
-       if (null === He) return {
-         kind: "failed",
-         reason: "download"
-       };
-       if (!(0, Ue.h)(He.apiVersion)) return {
-         kind: "failed",
-         reason: "apiVersion"
-       };
-       const Ke = (0, be.r)(He.files);
-       if ("string" === typeof Ke) return console.error(`A listed shader pack breaks the pack rules: ${Ke}`), {
-         kind: "failed",
-         reason: "invalid"
-       };
-       const oe = await (0, Je.g)(ie, Ke);
-       if (!1 === (null === oe || void 0 === oe ? void 0 : oe.ok)) return {
- ... (112 more removed lines; see GitHub link above)
+       }
+       releaseAll() {
+         let WW = !1;
+         for (let iW = 0; this.heldCount > 0 && iW < this.BL.length; iW++) WW = this.release(iW) || WW;
+         this.mouseButtons = 0, WW && this.updateActionBits()
+       }
+       release(WW) {
+         const iW = this.BL[WW];
+         if (0 === iW) return !1;
+         this.BL[WW] = 0, this.heldCount--;
+         const OW = 0 !== (iW - 1 & 2);
+         return this.emit(WW, !1, 0 !== (iW - 1 & 1), OW, 0 !== (iW - 1 & 4)), OW
+       }
+       updateActionBits() {
+         let WW = 0;
+         if (this.heldCount > 0) {
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L176-L203` → after: `L237-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L237-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/145.js#L237-L284) · [Before (L176-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/145.js#L176-L203)

```diff
-       }(ee, ie, qe, Te);
-       return void 0 === pe || (await (0, oe.replaceShaderPack)(ee, pe, Te) ? (null !== pe && pe.files === ee.files || (0, oe.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
-     }
-   },
-   7290: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       forgetShaderPackActiveHint: () => De,
-       isOtherApiVersion: () => We,
-       isShaderPackActive: () => Ee,
-       isShaderPackChangePending: () => de,
-       markShaderPackChangePending: () => Oe,
-       pageShaderPackValidationVersion: () => te,
-       reconcileStoredShaderPackHint: () => we,
-       removeShaderPack: () => Be,
-       replaceShaderPack: () => pe,
-       saveShaderPack: () => Te,
- ... (12 more removed lines; see GitHub link above)
+         if (WW === this.actionBits) return;
+         this.actionBits = WW;
+         const iW = this.source.now();
+         for (const OW of this.actionsListeners) OW(WW, iW)
+       }
+       getKeyTable() {
+         return this.keyTable ??= function(WW, iW) {
+           const OW = new Uint8Array(bW.c.length),
+             mW = new Uint16Array(bW.c.length);
+           OW[0] = 1;
+           for (const EW of jW) OW[(0, bW.e)(EW)] = 1;
+           for (const [EW, NW] of Object.entries(WW)) {
+             if (iW.has(EW)) continue;
+             const WW = kW[EW],
+               PW = void 0 === WW ? 0 : (0, bW.j)(WW);
+             for (const iW of NW) {
+ ... (32 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L206-L227` → after: `L287-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L287-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/145.js#L287-L353) · [Before (L206-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/145.js#L206-L227)

```diff
-     function Re(ee, ie, He) {
-       return {
-         manifest: ee.manifest,
-         files: (0, ye.s)(ee.files),
-         validation: ie,
-         ...He && {
-           listing: He
-         }
-       }
-     }
- 
-     function ke(ee) {
-       return Object.keys(ee.files).map((ie => ({
-         path: ie,
-         source: ee.files[ie]
-       })))
- ... (6 more removed lines; see GitHub link above)
+     function TW() {
+       var WW;
+       return (null !== (WW = EW.d.get("customButtons")) && void 0 !== WW ? WW : []).filter(wW.e).map((WW => WW.keycode))
+     }
+ 
+     function JW() {
+       return null === yW && "0" !== String(xW.i.getItem(SW)) && (yW = new sW({
+         isInPlay: () => "inGame" === mW.d.get("gameState") && !(0, LW.l)() && !(0, NW.e)(),
+         isTyping: tW.isTextEntry,
+         getBindings: () => ({
+           ...ZW.v,
+           customButtons: TW(),
+           pageKeys: (0, cW.g)()
+         }),
+         ignoredActions: YW,
+         onBindingsChanged: WW => {
+ ... (51 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L231-L253` → after: `L357-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L357-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/145.js#L357-L376) · [Before (L231-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/145.js#L231-L253)

```diff
-       return fe((() => Xe(ee, ie)))
-     }
- 
-     function pe(ee, ie, He) {
-       return fe((async () => JSON.stringify(await (0, Ue.h)()) === JSON.stringify(ee) && (null === ie ? (await ze(), !0) : Xe(ie, He))))
-     }
-     async function Xe(ee, ie) {
-       const He = await Me.e.setItem(Ue.e, ee);
-       return He && Pe(ee, ie), He
-     }
-     async function ze() {
-       await Me.e.removeItem(Ue.e), Me.i.removeItem(Ke.b)
-     }
- 
-     function Be() {
-       return fe(ze)
- ... (7 more removed lines; see GitHub link above)
+       return LW(iW) > LW(WW) ? iW : WW
+     }
+   },
+   7502: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => mW,
+       e: () => NW,
+       g: () => LW,
+       j: () => wW
+     });
+     const mW = ["Unidentified", ...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((WW => `Key${WW}`)), ...Array.from({
+         length: 10
+       }, ((WW, iW) => `Digit${iW}`)), ...Array.from({
+         length: 12
+       }, ((WW, iW) => `F${iW+1}`)), "Escape", "Tab", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "Space", "Enter", "Backspace", "Delete", "Insert", "Home", "End", "PageUp", "PageDown", "ArrowUp", "ArrowDown … [truncated]
+         length: 10
+ ... (4 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/145.js` (Changed code · before: `L255-L497` → after: `L378-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dd03f5928c928db5eb3769c6f67ce4191ba0f0658d1ef9698ff0b9c232b4e977) · [After (L378-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/145.js#L378-L388) · [Before (L255-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/145.js#L255-L497)

```diff
-       return null === ee ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : We(ee) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (He = ee.validation) || void 0 === He ? void 0 : He.ok) || ee.validation.fromRecheck ? null === ie ? {
-         kind: "none",
-         reason: "noCompiler"
-       } : Ze(ee, ie) ? {
-         kind: "blocked",
-         messageKey: "shaderPack:failedUnchecked"
-       } : ee.validation.ok ? {
-         kind: "active"
-       } : {
-         kind: "blocked",
- ... (227 more removed lines; see GitHub link above)
+       return null !== (iW = EW.get(WW)) && void 0 !== iW ? iW : 0
+     }
+     const PW = new Set(["Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "IntlBackslash", "Semicolon", "Quote", "Backquote", "Comma", "Period", "Slash", "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal"]);
+ 
+     function LW(WW) {
+       return /^Key[A-Z]$/.test(WW) ? "letter" : /^(Digit|Numpad)\d$/.test(WW) ? "digit" : PW.has(WW) ? "symbol" : null
+     }
+     const cW = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"];
+ 
+     function wW(WW) {
+       return 1 << cW.indexOf(WW)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/146.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/146.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af)

#### 1. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L2)

```diff
- export const ids = [146];
+ export const ids = [146, 147];
```

#### 2. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L4)

```diff
-   44943: (ee, ie, He) => {
+   7532: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L6)

```diff
-       startHarnessShaderPack: () => Re
+       d: () => EW
```

#### 4. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L8-L132` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L8) · [Before (L8-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L8-L132)

```diff
-     var ye = He(7206),
-       be = He(5570),
-       Me = He(7276),
-       Ke = He(7249),
-       Ue = He(5563),
-       Fe = He(40056),
-       Je = He(7262),
-       oe = He(7283);
-     async function Re(ee, ie) {
-       const {
-         stored: He,
-         info: Re
-       } = await async function(ee, ie) {
-         const He = await async function(ee) {
-           const ie = await fetch(ee);
-           if (!ie.ok) throw new Error(`Couldn't fetch the shader pack at ${ee}: HTTP ${ie.status}`);
- ... (109 more removed lines; see GitHub link above)
+     var mW = OW(1283);
```

#### 5. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L135-L184` → after: `L11-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L11-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L11-L24) · [Before (L135-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L135-L184)

```diff
-       const ie = qe.then(ee);
-       return qe = ie.catch((() => {})), ie
-     }
- 
-     function Te(ee, ie) {
-       return fe((() => Xe(ee, ie)))
-     }
- 
-     function pe(ee, ie, He) {
-       return fe((async () => JSON.stringify(await (0, Ue.h)()) === JSON.stringify(ee) && (null === ie ? (await ze(), !0) : Xe(ie, He))))
-     }
-     async function Xe(ee, ie) {
-       const He = await Me.e.setItem(Ue.e, ee);
-       return He && Pe(ee, ie), He
-     }
-     async function ze() {
- ... (34 more removed lines; see GitHub link above)
+       let {
+         href: iW,
+         children: OW
+       } = WW;
+       return (0, mW.jsxs)("a", {
+         className: "WorldCodeAiExternalLink",
+         href: iW,
+         target: "_blank",
+         rel: "noreferrer noopener",
+         children: [OW, " ", (0, mW.jsx)("span", {
+           "aria-hidden": "true",
+           children: "\u2197"
+         })]
+       })
```

#### 6. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L188` → after: `L43-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L43-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L43-L51) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L188)

```diff
-       Me.m.setItem(Je, performance.timeOrigin)
+       const {
+         t: WW
+       } = (0, mW.B)();
+       return (0, NW.jsxs)(NW.Fragment, {
+         children: [WW("superBotXd:deepSeekNotice"), " ", (0, NW.jsx)(EW.d, {
+           href: PW,
+           children: WW("superBotXd:deepSeekPrivacyPolicy")
+         })]
+       })
```

#### 7. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L192` → after: `L55-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L55-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L55-L66) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L192)

```diff
-       return Me.m.getItem(Je) === performance.timeOrigin
+       const {
+         t: WW
+       } = (0, mW.B)();
+       return (0, NW.jsxs)(NW.Fragment, {
+         children: [WW("aiHelperChatGpt:notice"), " ", (0, NW.jsx)(EW.d, {
+           href: LW,
+           children: WW("aiHelperChatGpt:terms")
+         }), " ", (0, NW.jsx)(EW.d, {
+           href: cW,
+           children: WW("aiHelperChatGpt:privacyPolicy")
+         })]
+       })
```

#### 8. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L196` → after: `L87-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L87-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L87-L202) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L196)

```diff
-       return !(0, be.h)(ee.manifest.apiVersion)
+       let {
+         allowsPersonalizedAds: iW
+       } = WW;
+       return (0, AW.jsxs)(AW.Fragment, {
+         children: [(0, AW.jsx)("h2", {
+           children: "4. Cookies and Tracking Technologies"
+         }), (0, AW.jsx)("h3", {
+           children: "4.1 What Are Cookies?"
+         }), (0, AW.jsx)("p", {
+           children: "Cookies are small data files stored on your device that help identify you when you visit a website. They allow the site to remember your preferences and provide a smoother experience."
+         }), (0, AW.jsx)("h3", {
+           children: "4.2 Types of Cookies We Use"
+         }), (0, AW.jsx)("p", {
+           children: "We use different types of cookies to enhance your experience and ensure that Bloxd.io\xa0functions properly. Here\u2019s what each type of cookie does:"
+         }), (0, AW.jsxs)("table", {
+           children: [(0, AW.jsxs)("tr", {
+ ... (100 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L200-L205` → after: `L206-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L206-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L206-L558) · [Before (L200-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L200-L205)

```diff
-       return oe ??= ee.cV((0, Fe.shaderPackTextures)()), oe
-     }
- 
-     function Ze(ee, ie) {
-       var He;
-       return (null === (He = ee.validation) || void 0 === He ? void 0 : He.headerVersion) !== te(ie)
+       let {
+         allowsPersonalizedAds: iW
+       } = WW;
+       return (0, AW.jsxs)(AW.Fragment, {
+         children: [(0, AW.jsx)("h2", {
+           children: "2. Information We Collect, Why We Collect It, and How It Is Used"
+         }), (0, AW.jsx)("h3", {
+           children: "2.1 Visitors"
+         }), (0, AW.jsx)("h4", {
+           children: "2.1.1 Data Collection and Usage"
+         }), (0, AW.jsxs)("p", {
+           children: ["When you interact with Bloxd.io, certain data is collected to ensure the website operates correctly and securely. By default, we apply the highest level of privacy protection for all visitors. This means that we collect only the minimal amount of information … [truncated]
+         }), (0, AW.jsxs)("table", {
+           children: [(0, AW.jsxs)("tr", {
+             children: [(0, AW.jsx)("td", {
+               children: (0, AW.jsx)("p", {
+ ... (337 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L209-L217` → after: `L562-L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L562-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L562-L957) · [Before (L209-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L209-L217)

```diff
-       return fe((async () => {
-         Pe(await (0, Ue.h)(!0), ee)
-       }))
-     }
- 
-     function De() {
-       return fe((async () => {
-         Me.i.removeItem(Ke.b)
-       }))
+       let {
+         allowsPersonalizedAds: iW
+       } = WW;
+       return (0, AW.jsxs)(AW.Fragment, {
+         children: [(0, AW.jsx)("h3", {
+           children: "3.3 Service Providers"
+         }), (0, AW.jsx)("p", {
+           children: "We work with trusted third-party service providers to help operate the website and deliver services effectively. These providers only receive the data necessary to perform their functions and are required to maintain the confidentiality and security of your i … [truncated]
+         }), (0, AW.jsx)("h4", {
+           children: "Hosting and Data Storage"
+         }), (0, AW.jsxs)("table", {
+           children: [(0, AW.jsxs)("tr", {
+             children: [(0, AW.jsx)("td", {
+               children: (0, AW.jsx)("p", {
+                 children: "Service Provider"
+               })
+ ... (380 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L328-L330` → after: `L960-L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L960-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L960-L1086) · [Before (L328-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L328-L330)

```diff
-         full: {
-           width: 3840,
-           height: 2160
+         CA: {
+           name: "Canada",
+           status: "bySubdivision"
+         },
+         US: {
+           name: "the United States",
+           status: "bySubdivision"
+         },
+         AT: {
+           name: "Austria",
+           status: "off"
+         },
+         AX: {
+           name: "\xc5land",
+           status: "off"
+         },
+ ... (111 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L332-L334` → after: `L1088-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L1088-L1090) · [Before (L332-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L332-L334)

```diff
-         large: {
-           width: 1920,
-           height: 1080
+         MQ: {
+           name: "Martinique",
+           status: "off"
```

#### 13. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L336-L338` → after: `L1092-L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L1092-L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L1092-L1134) · [Before (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L336-L338)

```diff
-         thumb: {
-           width: 640,
-           height: 360
+         MT: {
+           name: "Malta",
+           status: "off"
+         },
+         NL: {
+           name: "the Netherlands",
+           status: "off"
+         },
+         NO: {
+           name: "Norway",
+           status: "off"
+         },
+         PL: {
+           name: "Poland",
+           status: "off"
+         },
+ ... (27 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L341-L344` → after: `L1137-L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L1137-L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L1137-L1395) · [Before (L341-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L341-L344)

```diff
-       Me = ["popular", "updated", "newest"],
-       Ke = 3,
-       Ue = 32,
-       Fe = 300;
+       sW = {
+         "CA-QC": {
+           name: "Quebec",
+           status: "linked"
+         },
+         "CA-AB": {
+           name: "Alberta",
+           status: "linked"
+         },
+         "CA-BC": {
+           name: "British Columbia",
+           status: "linked"
+         },
+         "CA-MB": {
+           name: "Manitoba",
+           status: "linked"
+ ... (243 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L347` → after: `L1398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR1398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L1398) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L347)

```diff
-       return ee.slice(0, ie).replace(/[\uD800-\uDBFF]$/, "")
+       return WW.replace(/^the /, "").localeCompare(iW.replace(/^the /, ""))
```

#### 16. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L349-L351` → after: `L1400-L1402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR1400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L1400-L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L1400-L1402) · [Before (L349-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L349-L351)

```diff
-     const oe = 64,
-       Re = 512,
-       ke = 18e5;
+     const KW = new Intl.ListFormat("en-GB", {
+       type: "conjunction"
+     });
```

#### 17. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L353-L356` → after: `L1404-L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR1404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L1404-L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L1404-L1450) · [Before (L353-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L353-L356)

```diff
-     function qe(ee) {
-       const ie = ee,
-         He = null === ie || void 0 === ie ? void 0 : ie.files;
-       return "number" === typeof(null === ie || void 0 === ie ? void 0 : ie.apiVersion) && "string" === typeof ie.name && (null === ie.author || "string" === typeof ie.author) && (void 0 === ie.keepCircleShadows || "boolean" === typeof ie.keepCircleShadows) && "object" === typeof … [truncated]
+     function SW() {
+       const {
+         countries: WW,
+         subdivisions: iW
+       } = function(WW) {
+         const iW = [],
+           OW = [];
+         for (const [mW, EW] of Object.entries(kW))
+           if ("bySubdivision" === EW.status) {
+             const iW = Object.entries(sW).filter((iW => {
+               let [OW, EW] = iW;
+               return OW.startsWith(`${mW}-`) && WW(EW)
+             })).map((WW => {
+               let [, iW] = WW;
+               return iW.name
+             }));
+ ... (31 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L361-L362` → after: `L1453-L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L1453-L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L1453-L1483) · [Before (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L361-L362)

```diff
-     function pe(ee) {
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(ee)}`
+     function YW() {
+       return (0, AW.jsxs)(AW.Fragment, {
+         children: [(0, AW.jsx)("h3", {
+           id: "session-recordings",
+           children: "2.5 Session Recordings"
+         }), (0, AW.jsx)("p", {
+           children: "To fix problems in the game, we pick some players at random when they join Bloxd, players of any age and guests too, and record every visit they make for the next 90 days, once they have agreed to Bloxd\u2019s privacy popup. We record on bloxd.io in a web bro … [truncated]
+         }), (0, AW.jsx)("p", {
+           children: "What we record: your screen in the game and on Bloxd\u2019s pages as you see them, including chat, usernames, other players\u2019 characters and builds; where you move, click, tap and scroll, and which keys and buttons you press; which pages, games and menus  … [truncated]
+         }), (0, AW.jsx)("p", {
+           children: "Each recording is linked to your player ID: your account\u2019s when you are logged in, else your guest ID, so our staff can watch a picked player\u2019s recordings together. It also keeps a scrambled code made from your internet (IP) address, never the addre … [truncated]
+         }), (0, AW.jsx)("p", {
+           children: "Why: to fix problems in the game, which is in our legitimate interest. Recording the same player for 90 days shows us bugs that only appear over time, such as lost progress, and whether our fixes work. Only Bloxd staff can watch recordings, and we never use o … [truncated]
+         }), (0, AW.jsx)("p", {
+           children: "Where we never record: we only record when your IP address shows which country you\u2019re in and your device\u2019s time zone is in the same country, never when your IP address belongs to a VPN, proxy or hosting service, and never in these places:"
+         }), (0, AW.jsx)(SW, {}), (0, AW.jsx)("p", {
+ ... (15 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L367-L369` → after: `L1486-L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR1486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L1486-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L1486-L1495) · [Before (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L367-L369)

```diff
-     function Be(ee) {
-       var ie;
-       return ee === Xe || null !== (ie = null === ee || void 0 === ee ? void 0 : ee.startsWith(ze)) && void 0 !== ie && ie
+     function yW() {
+       return (0, AW.jsxs)(AW.Fragment, {
+         children: [(0, AW.jsx)("h3", {
+           children: "2.6 Our Staff Analytics Tool"
+         }), (0, AW.jsx)("p", {
+           children: "Bloxd staff use a tool we run ourselves, PostHog, on servers at Hetzner in Finland, to watch session recordings (section 2.5), which Amazon Web Services stores in the United States, and to search our analytics data. Through it, staff can see how players use B … [truncated]
+         }), (0, AW.jsx)("p", {
+           children: "Only Bloxd staff can use it. We use each kind of data only for the reasons this policy gives for collecting it: for example, shared AI Helper conversations only to improve the AI Helper. Besides parts of session recordings, the tool keeps staff accounts, save … [truncated]
+         })]
+       })
```

#### 20. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L372-L373` → after: `L1498-L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR1498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L1498-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L1498-L1810) · [Before (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L372-L373)

```diff
-     function Ee(ee, ie) {
-       return `shaderPacks/${ee}/${ie}.json`
+     function TW() {
+       return (0, AW.jsxs)(AW.Fragment, {
+         children: [(0, AW.jsx)("h2", {
+           children: "8. Your Rights"
+         }), (0, AW.jsx)("h3", {
+           children: "8.1 Your Choices and Control"
+         }), (0, AW.jsx)("p", {
+           children: "As a user of Bloxd.io, you have the right to:"
+         }), (0, AW.jsxs)("ul", {
+           children: [(0, AW.jsx)("li", {
+             children: "Access Your Data: Request a copy of the personal information we hold about you."
+           }), (0, AW.jsx)("li", {
+             children: "Correct Your Data: Ask us to correct any inaccurate or incomplete information."
+           }), (0, AW.jsx)("li", {
+             children: "Delete Your Data: Request the deletion of your personal information when it is no longer needed."
+           }), (0, AW.jsx)("li", {
+ ... (297 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L376-L377` → after: `L1813-L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L1813-L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L1813-L1830) · [Before (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L376-L377)

```diff
-     function ge(ee, ie, He, ye) {
-       return null === ie.renderId ? Oe(ee, ie.baselineVersion, He, ye) : `${ee}/${function(ee,ie,He,ye){return`shaderPacks/${ee}/${ie}/${He}-${ye}.webp`}(ie.packId,ie.renderId,He,ye)}`
+     function HW() {
+       const {
+         adMobPrivacyOptionsRequired: WW
+       } = (0, wW.p)(["adMobPrivacyOptionsRequired"]);
+       if (!WW) return null;
+       return (0, AW.jsx)(LW.f, {
+         className: "PrivacyChoicesButton",
+         onClick: () => {
+           (async () => {
+             try {
+               await tW.d.request("ads.showPrivacyOptions", {})
+             } catch (WW) {
+               console.error("Failed to open AdMob privacy options:", WW)
+             }
+           })()
+         },
+ ... (2 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/146.js` (Changed code · before: `L380-L381` → after: `L1833-L1850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3afR1833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-83c0862426a4a70946f3baa5b431d148ba281a092db2c6fcfecf66720db1e3af) · [After (L1833-L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/146.js#L1833-L1850) · [Before (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/146.js#L380-L381)

```diff
-     function Oe(ee, ie, He, ye) {
-       return `${ee}/${function(ee,ie,He){return`shaderPacks/baseline/${ee}/${ie}-${He}.webp`}(ie,He,ye)}`
+     function nW() {
+       return (0, mW.useEffect)((() => {
+         const WW = window.location.hash.slice(1);
+         var iW;
+         "" !== WW && (null === (iW = document.getElementById(WW)) || void 0 === iW || iW.scrollIntoView())
+       }), []), (0, AW.jsxs)(AW.Fragment, {
+         children: [(0, NW.isDiscordClient)() && (0, AW.jsx)(AW.Fragment, {
+           children: (0, AW.jsx)(LW.f, {
+             className: "PrivacyChoicesButton",
+             onClick: () => {
+               (0, cW.q)()
+             },
+             children: "Adjust Discord Privacy Choices"
+           })
+         }), (0, AW.jsx)(HW, {}), (0, AW.jsx)(lW.c, {
+           className: "PrivacyPolicyLinks"
+ ... (2 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/147.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/147.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05)

#### 1. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/147.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/147.js#L2)

```diff
- export const ids = [147, 214];
+ export const ids = [147];
```

#### 2. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/147.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/147.js#L4)

```diff
-   34872: (ee, ie, He) => {
+   7525: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L6-L56` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/147.js#L6-L7) · [Before (L6-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/147.js#L6-L56)

```diff
-       c: () => Me
-     });
-     var ye = He(347),
-       be = He(34880);
- 
-     function Me(ee, ie, He) {
-       const Me = Object.entries(ie).sort(((ee, ie) => ie[1] - ee[1])),
-         Ke = (0, ye.Cb)(ee);
-       Ke.push(ee ? "\n\n" : "\n");
-       for (const [be, fe] of Me) {
-         var Ue, Fe, Je;
-         const ee = null !== (Ue = null === He || void 0 === He || null === (Fe = He[be]) || void 0 === Fe ? void 0 : Fe.icon) && void 0 !== Ue ? Ue : `${be} Enchantment`;
-         Ke.push({
-           icon: ee,
-           style: {
-             fontSize: "1.5rem"
- ... (35 more removed lines; see GitHub link above)
+       WorldCodeAiChatGptNotice: () => tW,
+       WorldCodeAiDeepSeekNotice: () => wW,
```

#### 4. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L58-L589` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/147.js#L9-L10) · [Before (L58-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/147.js#L58-L589)

```diff
-       e: () => ze,
-       i: () => pe,
-       m: () => Fe,
-       p: () => Xe,
-       s: () => oe,
-       v: () => ke,
-       x: () => Te
-     });
-     var ye = He(335),
-       be = He(610),
-       Me = He(347),
-       Ke = He(4585),
-       Ue = He(34872);
- 
-     function Fe(ee, ie) {
-       var He;
- ... (516 more removed lines; see GitHub link above)
+       f: () => cW,
+       i: () => LW
```

#### 5. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L591-L635` → after: `L12-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/147.js#L12-L17) · [Before (L591-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/147.js#L591-L635)

```diff
-     var ye = He(59),
-       be = He(34765),
-       Me = He(1294),
-       Ke = He(4922),
-       Ue = He(2415),
-       Fe = He(97),
-       Je = He(2029),
-       oe = He(1320),
-       Re = He(1228);
- 
-     function ke(ee) {
-       let {
-         show: ie,
-         onClose: He
-       } = ee;
-       const {
- ... (29 more removed lines; see GitHub link above)
+     var mW = OW(1172),
+       EW = OW(7532),
+       NW = OW(1283);
+     const PW = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
+       LW = "https://openai.com/policies/terms-of-use/",
+       cW = "https://openai.com/policies/privacy-policy/";
```

#### 6. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L790-L804` → after: `L22-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/147.js#L22-L26) · [Before (L790-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/147.js#L790-L804)

```diff
-       } = (0, be.v)(), [Fe, Je] = (0, Me.i)();
-       return (0, Ue.jsxs)("div", {
-         className: "CopyTextRow",
-         children: [(0, Ue.jsx)("div", {
-           className: "CopyTextRowText",
-           children: ie
-         }), (0, Ue.jsx)(Ke.c, {
-           className: "CopyTextRowButton",
-           onClick: () => {
-             (0, ye.e)(ie).catch((ee => {
-               console.error("Failed to copy text:", ee)
-             })), Je()
-           },
-           disabled: Fe,
-           children: He(Fe ? "general:copied" : "general:copy")
+       } = (0, mW.B)();
+       return (0, NW.jsxs)(NW.Fragment, {
+         children: [WW("superBotXd:deepSeekNotice"), " ", (0, NW.jsx)(EW.d, {
+           href: PW,
+           children: WW("superBotXd:deepSeekPrivacyPolicy")
```

#### 7. `bundles/bloxd.io/chunks/js/147.js` (Changed code · before: `L1300-L1325` → after: `L33-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4634e2dc0515f89b04ab591dbeebdcdb3e3414e0ca8395d82dc19f17bb023e05) · [After (L33-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/147.js#L33-L42) · [Before (L1300-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/147.js#L1300-L1325)

```diff
-         width: ee,
-         height: ie,
-         scale: He
-       } = function(ee, ie, He) {
-         const ye = Math.max(1, ee),
-           be = Math.max(1, ie),
-           Me = Math.min(Math.max(1, He), Math.sqrt(Ue / (ye * be)));
-         return {
-           width: Math.round(ye * Me),
-           height: Math.round(be * Me),
-           scale: Me
-         }
-       }(window.innerWidth, window.innerHeight, window.devicePixelRatio), {
-         blob: ye
-       } = await be.devTools.capturePhoto(ee, ie, {
-         scale: He,
- ... (10 more removed lines; see GitHub link above)
+         t: WW
+       } = (0, mW.B)();
+       return (0, NW.jsxs)(NW.Fragment, {
+         children: [WW("aiHelperChatGpt:notice"), " ", (0, NW.jsx)(EW.d, {
+           href: LW,
+           children: WW("aiHelperChatGpt:terms")
+         }), " ", (0, NW.jsx)(EW.d, {
+           href: cW,
+           children: WW("aiHelperChatGpt:privacyPolicy")
+         })]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/148.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/148.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162)

#### 1. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/148.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/148.js#L2)

```diff
- export const ids = [148, 152, 153];
+ export const ids = [148];
```

#### 2. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/148.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/148.js#L4-L6)

```diff
-   7242: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ke
+   7541: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => NW
```

#### 3. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L8-L16` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/148.js#L8-L9) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/148.js#L8-L16)

```diff
-     var ye = He(5557),
-       be = He(1228);
-     const Me = {
-       strict: "shaderPack:variantStrict",
-       nonStrict: "shaderPack:variantNonStrict",
-       terrain: "shaderPack:variantTerrain",
-       liquid: "shaderPack:variantLiquid",
-       model: "shaderPack:variantModel"
-     };
+     var mW = OW(1172),
+       EW = OW(1283);
```

#### 4. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L18-L21` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/148.js#L11-L12) · [Before (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/148.js#L18-L21)

```diff
-     function Ke(ee) {
-       let {
-         diagnostics: ie,
-         more: He = 0,
+     function NW() {
+       const {
```

#### 5. `bundles/bloxd.io/chunks/js/148.js` (Changed code · before: `L23-L47` → after: `L14-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e659346fd591923a8de17b38152ffb6b05fd552b4bbce0c734b8fefef603f162) · [After (L14-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/148.js#L14-L219) · [Before (L23-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/148.js#L23-L47)

```diff
-       } = ee;
-       return (0, be.jsxs)("ul", {
-         className: "ShaderPackDiagnostics",
-         children: [ie.map(((ee, ie) => {
-           const He = (0, ye.e)(ee),
-             Ue = function(ee, ie) {
-               const He = (0, ye.d)(null !== ee && void 0 !== ee ? ee : []);
-               if (0 === He.length) return null;
-               return He.map((ee => ee.map((ee => ie(Me[ee]))).join(", "))).join("; ")
-             }(ee.variants, Ke);
-           return (0, be.jsxs)("li", {
-             children: [He && (0, be.jsx)("span", {
-               className: "ShaderPackDiagnosticLocation",
-               children: He
-             }), ee.message, Ue && (0, be.jsx)("span", {
-               className: "ShaderPackDiagnosticVariants",
- ... (9 more removed lines; see GitHub link above)
+       } = (0, mW.B)();
+       return (0, EW.jsxs)("div", {
+         className: "LegalText",
+         children: [(0, EW.jsx)("div", {
+           className: "BloxdInformationHeader FullyFancyText",
+           children: WW("homePage:termsOfService")
+         }), (0, EW.jsx)("p", {
+           children: (0, EW.jsx)("em", {
+             children: "Last updated: July 15, 2025"
+           })
+         }), (0, EW.jsx)("p", {
+           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
+         }), (0, EW.jsx)("h3", {
+           children: "1. General Information"
+         }), (0, EW.jsx)("p", {
+           children: "We may update these Terms at any time. When we do, we\u2019ll post the revised version on our website with the new effective date. Your continued use of Bloxd.io after the changes take effect means you accept the updated Terms. If you do not agree to the chan … [truncated]
+ ... (190 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/149.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/149.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353)

#### 1. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/149.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/149.js#L4)

```diff
-   7249: (ee, ie, He) => {
+   7545: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/149.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/149.js#L6)

```diff
-       loadPageShaderPackCompiler: () => qi
+       default: () => jW
```

#### 3. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L8-L44` → after: `L8-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L8-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/149.js#L8-L35) · [Before (L8-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/149.js#L8-L44)

```diff
-     var ye = {};
-     He.r(ye), He.d(ye, {
-       hMe: () => be,
-       vie: () => Me,
-       default: () => ne,
-       NMe: () => Ke,
-       GMe: () => Ue,
-       initSync: () => Se,
-       uR: () => Fe,
-       Lbe: () => Je,
-       rMe: () => oe,
-       QMe: () => Re,
-       mV: () => ke,
-       eKe: () => qe,
-       cV: () => fe,
-       iKe: () => Te
- ... (21 more removed lines; see GitHub link above)
+     var mW = OW(1616),
+       EW = OW(1653),
+       NW = OW(4058),
+       PW = OW(3147),
+       LW = OW(1532),
+       cW = OW(1605),
+       wW = OW(1107),
+       tW = OW(62),
+       ZW = OW(1391),
+       xW = OW(1283);
+ 
+     function lW(WW) {
+       let {
+         iconName: iW,
+         iconCountPerGroup: OW,
+         animation: mW,
+ ... (12 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L46-L102` → after: `L37-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L37-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/149.js#L37-L50) · [Before (L46-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/149.js#L46-L102)

```diff
-       }
-       get features() {
-         const ee = ue.HTih(this.__wbg_ptr);
-         var ie = Be(ee[0], ee[1]);
-         return ue.tO2i(ee[0], 4 * ee[1], 4), ie
-       }
-       get hooks() {
-         const ee = ue.UWDQ(this.__wbg_ptr);
-         var ie = Ee(ee[0], ee[1]).slice();
-         return ue.tO2i(ee[0], 1 * ee[1], 1), ie
-       }
-       mapValidationMessage(ee, ie, He, ye, be) {
-         let Me, Ke;
-         try {
-           const Je = ue.W6Qr(this.__wbg_ptr, ee, ie, He, ze(ye), ze(be));
-           var Ue = Je[0],
- ... (41 more removed lines; see GitHub link above)
+         LW(WW)
+       }), [OW, EW]), (0, xW.jsx)("div", {
+         className: `IconShower IconShowerAnimation${mW} ${null!==NW&&void 0!==NW?NW:""}`,
+         children: Object.keys(PW).map((WW => PW[WW].map((OW => (0, xW.jsx)("div", {
+           className: `Icon IconGroup${WW}`,
+           style: {
+             left: OW.left,
+             animationDelay: OW.animationDelay
+           },
+           children: (0, xW.jsx)(ZW.c, {
+             name: iW
+           })
+         }, OW.left)))))
+       })
```

#### 5. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L104-L123` → after: `L52-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/149.js#L52-L53) · [Before (L104-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/149.js#L104-L123)

```diff
- 
-     function Me(ee, ie, He, ye, Me, Ke, Ue) {
-       const Fe = Ye(ee, ue.pMyQ),
-         Je = me,
-         oe = Ye(ie, ue.pMyQ),
-         Re = me,
-         ke = Ye(He, ue.pMyQ),
-         qe = me,
-         fe = Ae(ye, ue.pMyQ),
-         Te = me,
-         pe = Ye(Me, ue.pMyQ),
-         Xe = me,
-         ze = Ye(Ke, ue.pMyQ),
-         Be = me,
-         Ee = Ye(Ue, ue.pMyQ),
-         ge = me,
- ... (4 more removed lines; see GitHub link above)
+     var AW = OW(1172),
+       bW = OW(3210);
```

#### 6. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L126-L163` → after: `L56-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L56-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/149.js#L56-L68) · [Before (L126-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/149.js#L126-L163)

```diff
-       const ee = ue.rVVm();
-       var ie = Be(ee[0], ee[1]);
-       return ue.tO2i(ee[0], 4 * ee[1], 4), ie
-     }
- 
-     function Ue() {
-       const ee = ue.Ixxl();
-       var ie = Be(ee[0], ee[1]);
-       return ue.tO2i(ee[0], 4 * ee[1], 4), ie
-     }
- 
-     function Fe() {
-       ue.dbYX()
-     }
- 
-     function Je(ee, ie, He, ye, be) {
- ... (22 more removed lines; see GitHub link above)
+       var WW;
+       const {
+         t: iW
+       } = (0, AW.B)(), {
+         pack: OW
+       } = (0, mW.z)(), {
+         userContext: tW
+       } = (0, wW.e)();
+       if (OW) {
+         const WW = EW.e[OW];
+         if (null === WW || void 0 === WW || !WW.purchasable) return (0, xW.jsx)(cW.NavigatePreserveSearch, {
+           to: "/"
+         })
```

#### 7. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L165-L459` → after: `L70-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L70-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/149.js#L70-L104) · [Before (L165-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/149.js#L165-L459)

```diff
-     }
- 
-     function oe() {
-       let ee, ie;
-       try {
-         const He = ue.O2JA();
-         return ee = He[0], ie = He[1], de(He[0], He[1])
-       } finally {
-         ue.tO2i(ee, ie, 1)
-       }
-     }
- 
-     function Re(ee) {
-       let ie, He;
-       try {
-         const Me = ue.ttqV(ee);
- ... (279 more removed lines; see GitHub link above)
+       const jW = OW ? EW.e[OW] : null,
+         UW = OW ? NW.m[(0, PW.j)(OW)] : null,
+         kW = void 0 !== (null === jW || void 0 === jW ? void 0 : jW.characterSet) || null !== jW && void 0 !== jW && jW.singleItem ? jW.displayName : `${null!==(WW=null===jW||void 0===jW?void 0:jW.displayName)&&void 0!==WW?WW:OW} Pack`,
+         sW = Date.now(),
+         MW = iW((0, bW.o)(sW).nameKey),
+         KW = jW ? `Your ${kW} is Ready!` : `Welcome To ${MW}!`,
+         SW = jW ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
+         YW = jW ? !tW.getOwnedCosmeticPacks().includes(OW) : !(0, bW.h)(tW.getPlayerRanks(), sW),
+         yW = jW ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : `You should get ${MW} instantly, but it could take up to an hour to apply. If you don't have ${MW} after an hour,  … [truncated]
+       return (0, xW.jsxs)("div", {
+         className: "PurchaseWelcome AnimFadeInScaleUp",
+         children: [UW && (0, xW.jsx)(UW, {}), !jW && (0, xW.jsx)(lW, {
+           iconName: "bolt",
+           iconCountPerGroup: 10,
+           animation: "Fall",
+           midShowerStart: !0,
+ ... (19 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/149.js` (Changed code · before: `L461-L754` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ea07873ccbf661e20348b847f989a143a83424086e988cac9e6286c5422ba353) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/149.js#L106-L107) · [Before (L461-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/149.js#L461-L754)

```diff
-         } catch (ie) {
-           throw new Ie("instantiate", ie)
-         }
-         return he = ye, he
-       }(), Ne.then(void 0, (() => {
-         Ne = null
-       }))), Ne)
-     }
-     var re = He(7268);
- 
-     function Qe(ee) {
-       let [ie, He, ye, be] = ee;
-       const Me = {
-         file: ie,
-         line: He,
-         message: ye
- ... (278 more removed lines; see GitHub link above)
+         })]
+       })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/150.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/150.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166)

#### 1. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L4-L13` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/150.js#L4-L6) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/150.js#L4-L13)

```diff
-   39553: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Je,
-       e: () => ke,
-       f: () => qe,
-       i: () => pe,
-       j: () => Re,
-       k: () => oe,
-       m: () => Ke,
-       n: () => fe
+   7551: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => xW
```

#### 2. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L15-L292` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/150.js#L8-L16) · [Before (L15-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/150.js#L15-L292)

```diff
-     var ye = He(330),
-       be = He(1728);
-     const Me = "A valid external Instance reference no longer exists.";
- 
-     function Ke(ee) {
-       return ee.includes(Me)
-     }
-     const Ue = [
-         [1e4, "<10s", "lt10s"],
-         [6e4, "<1m", "lt1m"],
-         [3e5, "<5m", "lt5m"],
-         [18e5, "<30m", "lt30m"],
-         [1 / 0, "30m+", "ge30m"]
-       ],
-       Fe = [
-         [1e3, "lt1s"],
- ... (262 more removed lines; see GitHub link above)
+     var mW = OW(1383),
+       EW = OW(62),
+       NW = OW(109),
+       PW = OW(1616),
+       LW = OW(1220),
+       cW = OW(327),
+       wW = OW(671);
+     const tW = new URL(LW.m[cW.c.PRODUCTION]).origin;
+     var ZW = OW(1283);
```

#### 3. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L295-L362` → after: `L19-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L19-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/150.js#L19-L29) · [Before (L295-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/150.js#L295-L362)

```diff
-       return {
-         icon: "face-dizzy",
-         title: "wasmScreens:turnstilePageTitle",
-         help: "wasmScreens:turnstilePageHelp",
-         helpValues: {},
-         discordLink: !1,
-         confirm: "general:ok",
-         cancel: null
-       }
-     }
- 
-     function oe(ee, ie, He) {
-       return {
-         icon: "wifi",
-         title: "wasmScreens:disconnectedTitle",
-         help: He ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
- ... (52 more removed lines; see GitHub link above)
+       const WW = (0, PW.z)();
+       return (0, EW.useEffect)((() => {
+         const iW = NW.currentUrl.getSearchParam("code");
+         NW.currentUrl.removeSearchParam("code"), null === iW && (console.error("No authorization code found in the URL"), window.close());
+         const OW = {
+           type: `oauth_authentication_${WW.providerName}`,
+           code: iW
+         };
+         for (const WW of (EW = window.location.origin) === tW ? [EW, `https://${wW.e}`] : [EW]) {
+           var mW;
+           null === (mW = window.opener) || void 0 === mW || mW.postMessage(OW, WW)
```

#### 4. `bundles/bloxd.io/chunks/js/150.js` (Changed code · before: `L364-L450` → after: `L31-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3188b45b52d344a1ba08afe4d0d9cb945dd1ab72a46fb1affd79fe4b06476166) · [After (L31-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/150.js#L31-L40) · [Before (L364-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/150.js#L364-L450)

```diff
-       }();
-     let ge = !1;
- 
-     function Oe() {
-       return Ee && !ge
-     }
-     class de {
-       worker = null;
-       failed = !1;
-       constructor() {
-         if (Oe()) try {
-           this.worker = te(), qe(Xe, this.worker, ["error", () => {
-             this.failed = !0
-           }])
-         } catch {
-           this.stop()
- ... (71 more removed lines; see GitHub link above)
+         var EW;
+         setTimeout((() => {
+           window.close()
+         }), 1e3)
+       })), (0, ZW.jsx)("div", {
+         className: "AuthCallback",
+         children: (0, ZW.jsx)(mW.d, {
+           showFace: !0,
+           loading: !0
+         })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/151.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/151.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b)

#### 1. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L4)

```diff
-   36934: (ee, ie, He) => {
+   7560: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L6)

```diff
-       WasmTextureWorker: () => ze
+       default: () => gW
```

#### 3. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L8-L24` → after: `L8-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L8-L32) · [Before (L8-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L8-L24)

```diff
-     var ye = He(604),
-       be = He(3517),
-       Me = He(36938),
-       Ke = He.n(Me);
- 
-     function Ue() {
-       return Ke()('(()=>{var ee={d:(ie,He)=>{for(var ye in He)ee.o(He,ye)&&!ee.o(ie,ye)&&Object.defineProperty(ie,ye,{enumerable:!0,get:He[ye]})},o:(ee,ie)=>Object.prototype.hasOwnProperty.call(ee,ie),r:ee=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e … [truncated]
-     }
-     var Fe = He(36942),
-       Je = He(3543),
-       oe = He(3572),
-       Re = He(3559),
-       ke = He(3520);
- 
-     function qe(ee) {
-       return "" === ee ? [] : ee.split("\0")
- ... (1 more removed lines; see GitHub link above)
+     var mW = OW(62),
+       EW = OW(1616),
+       NW = OW(1089),
+       PW = OW.n(NW),
+       LW = OW(327),
+       cW = OW(7570),
+       wW = OW(1391),
+       tW = OW(1605),
+       ZW = OW(5268),
+       xW = OW(1532),
+       lW = OW(4292),
+       AW = OW(5271),
+       bW = OW(1782),
+       jW = OW(5261),
+       UW = OW(1107),
+       kW = OW(25),
+ ... (9 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L27-L81` → after: `L35-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L35-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L35-L95) · [Before (L27-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L27-L81)

```diff
-       if ("" !== ee)
-         for (const ie of ee.split("\n")) console.error(ie)
-     }
- 
-     function Te(ee, ie) {
-       return async function(ee, ie) {
-         const He = Object.keys(ee),
-           ye = [],
-           be = new Map,
-           Me = new Uint32Array(He.length);
-         for (const [Ke, Ue] of He.entries()) {
-           const {
-             url: ie
-           } = ee[Ue];
-           be.has(ie) || (be.set(ie, ye.length), ye.push(ie)), Me[Ke] = be.get(ie)
-         }
- ... (39 more removed lines; see GitHub link above)
+       let {
+         pack: iW,
+         view: OW,
+         favourite: mW,
+         notice: EW
+       } = WW;
+       const {
+         width: NW,
+         height: LW
+       } = cW.n.thumb, {
+         live: ZW
+       } = iW;
+       return (0, hW.jsx)("div", {
+         className: "ShaderPackCard",
+         children: (0, hW.jsxs)("div", {
+           className: "ShaderPackCardTile",
+ ... (45 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L85-L162` → after: `L100-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L100-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L100-L136) · [Before (L85-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L85-L162)

```diff
-       return ee.message ? new Error(`the texture worker failed: ${ee.message}`) : new oe.k(oe.j.Load, "the texture worker failed to start")
-     }
-     class ze {
-       constructor(ee) {
-         this.worker = ee, this.failure = void 0, this.abandonStep = null, ee.addEventListener("error", (ee => {
-           ee.preventDefault(), this.failure ??= Xe(ee)
-         }))
-       }
-       static async generateRequired(ee, ie, He, Me) {
-         let Ke = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : oe.d,
-           Je = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-         const ke = (0, Fe.g)();
-         if (null !== ke) throw pe(new oe.k(oe.j.Load, ke), !1);
-         let qe;
-         const Xe = new AbortController;
-         try {
- ... (62 more removed lines; see GitHub link above)
+       let {
+         results: iW,
+         loading: OW,
+         failed: mW,
+         onRetry: EW,
+         view: NW,
+         previewView: LW
+       } = WW;
+       const {
+         t: cW
+       } = (0, SW.B)(), wW = (0, nW.j)(), tW = Date.now(), ZW = null === iW ? 0 : "owned" === iW.kind ? iW.packs.length : iW.page.results.length;
+       return (0, hW.jsxs)("div", {
+         className: PW()("ShaderPackBrowseResults", {
+           Loading: OW && null !== iW
+         }),
+         children: [OW && null === iW && (0, hW.jsx)("div", {
+ ... (21 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L194-L243` → after: `L139-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L139-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L139-L142) · [Before (L194-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L194-L243)

```diff
-             return He
-           }(de, We.imagesPerAtlas.length)), fe(Ze), {
-             assets: We,
-             layerCap: te,
-             worker: qe
-           }
-         } catch (Ee) {
-           var Be;
-           throw Xe.abort(), null === (Be = qe) || void 0 === Be || Be.terminate(), pe(Ee, !1)
-         }
-       }
-       async generateOptional() {
-         let ee;
-         try {
-           ee = await this.request({
-             type: "optional"
- ... (34 more removed lines; see GitHub link above)
+           }, WW.packId)))
+         }), "owned" === (null === iW || void 0 === iW ? void 0 : iW.kind) && ZW > 0 && (0, hW.jsx)("div", {
+           className: "ShaderPackBrowseGrid",
+           children: iW.packs.map((WW => {
```

#### 7. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L245-L325` → after: `L144-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L144-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L144-L154) · [Before (L245-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L245-L325)

```diff
-             null === (ee = Ue) || void 0 === ee || ee.stop(), this.abandonStep = null, this.worker.onmessage = null, this.worker.onerror = null, this.worker.onmessageerror = null
-           };
-           this.abandonStep = () => {
-             Fe(), be(new Error("the texture worker was terminated"))
-           }, this.worker.onmessage = ie => {
-             let {
-               data: Je
-             } = ie;
-             var Re;
-             if ("progress" === Je.type) return Me = Je.stage, Ke = Je.wasmBytes, void(null === (Re = Ue) || void 0 === Re || Re.restart(Me === oe.o.Generating ? oe.f : oe.g));
-             "sheet" === Je.type && He ? He(Je.sheet, Je.pixels) : (Fe(), "failed" === Je.type ? be(Je.moduleLoad ? new oe.k(oe.j.Load, Je.reason) : function(ee, ie) {
-               let {
-                 reason: He,
-                 stack: ye
-               } = ee;
-               const be = new Error(Be(He, ie));
- ... (65 more removed lines; see GitHub link above)
+             return (0, hW.jsx)(HW, {
+               pack: WW,
+               view: LW,
+               notice: WW.owner ? (0, TW._)(WW.owner, !(null === (iW = WW.live) || void 0 === iW || !iW.renderId), tW, cW)[0] : void 0
+             }, WW.packId)
+           }))
+         }), null !== iW && 0 === ZW && (0, hW.jsx)("div", {
+           className: "ShaderPackBrowseMessage",
+           children: cW(oW(NW))
+         })]
+       })
```

#### 8. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L347` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L158) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L347)

```diff
-       return ee.pathname.slice(ee.pathname.lastIndexOf("/") + 1)
+       return "mine" === WW.section ? "shaderPackListing:noOwnPacks" : (0, TW.u)(WW) ? "general:noResults" : "favourites" === WW.section ? "shaderPackListing:noFavourites" : "general:noResults"
```

#### 9. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L351-L373` → after: `L168-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L168-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L168-L180) · [Before (L351-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L351-L373)

```diff
-       try {
-         if ("undefined" === typeof localStorage) return null;
-         const ee = JSON.parse(localStorage.getItem(Je) ?? "[]");
-         return Array.isArray(ee) ? ee.filter((ee => "string" === typeof ee)) : []
-       } catch (ee) {
-         return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", ee), null
-       }
-     }
-     const qe = Reflect.apply,
-       fe = "undefined" === typeof Worker ? void 0 : Worker,
-       Te = fe?.prototype.postMessage,
-       pe = fe?.prototype.terminate,
-       Xe = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
-       ze = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
-       Be = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
-       Ee = function() {
- ... (7 more removed lines; see GitHub link above)
+       var WW, iW, OW, NW;
+       const {
+         t: YW
+       } = (0, SW.B)(), yW = (0, tW.useNavigatePreserveSearch)(), JW = (0, EW.u)(), {
+         userContext: HW,
+         isUserContextUpdating: oW
+       } = (0, UW.e)(), [gW, DW] = (0, nW.f)(), [VW, pW] = (0, nW.c)(), fW = (0, mW.useRef)(!1), [CW, XW] = (0, ZW.q)(), BW = (0, TW.G)(CW), [qW, RW] = (0, mW.useState)(null !== (WW = BW.searchQuery) && void 0 !== WW ? WW : ""), GW = (0, mW.useRef)(null), {
+         searchQuery: IW
+       } = BW;
+       (0, mW.useEffect)((() => {
+         RW(null !== IW && void 0 !== IW ? IW : ""), GW.current && (GW.current.value = null !== IW && void 0 !== IW ? IW : "")
+       }), [IW]);
+       const [aW, rW] = (0, mW.useState)(null), [zW, FW] = (0, mW.useState)(!1), [QW, Wi] = (0, mW.useState)(!1), [ii, Oi] = (0, mW.useState)(0), mi = (0, mW.useRef)(0), Ei = JSON.stringify(BW), Ni = (0, TW.l)();
```

#### 10. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L375-L441` → after: `L182-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L182-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L182-L186) · [Before (L375-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L375-L441)

```diff
-     function Oe() {
-       return Ee && !ge
-     }
-     class de {
-       worker = null;
-       failed = !1;
-       constructor() {
-         if (Oe()) try {
-           this.worker = te(), qe(Xe, this.worker, ["error", () => {
-             this.failed = !0
-           }])
-         } catch {
-           this.stop()
-         }
-       }
-       take() {
- ... (51 more removed lines; see GitHub link above)
+       function Pi() {
+         null !== Ni ? (yW(Ni), kW.d.set({
+           openEverythingMenuName: LW.m.SETTINGS,
+           openSettingsCategory: "kA"
+         })) : yW("/")
```

#### 11. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L443-L450` → after: `L188-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L188-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L188-L196) · [Before (L443-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L443-L450)

```diff
-       markWorkerFailed() {
-         ge = !0
-       }
-       fail(ee) {
-         this.reject(ee), this.terminate()
-       }
-       terminate() {
-         qe(pe, this.worker, [])
+ 
+       function Li(WW) {
+         XW((iW => {
+           (0, TW.kb)(iW, {
+             ...BW,
+             pageNumber: 1,
+             ...WW
+           })
+         }))
```

#### 12. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L454-L479` → after: `L199-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L199-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L199-L205) · [Before (L454-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L454-L479)

```diff
-     function te() {
-       if (globalThis.Worker !== fe) throw new Error("Worker is not the one the page loaded with");
-       return new Worker(new URL(He.p + He.u(79), He.b), {
-         name: "wasmZstdDecoder",
-         type: "module"
-       })
-     }
-     const Ze = Reflect.apply,
-       we = ArrayBuffer,
-       De = "undefined" === typeof Response ? void 0 : Response,
-       Pe = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
-       Ae = function() {
-         let ee;
-         void 0 !== Pe && new Pe({
-           __proto__: null,
-           start(ie) {
- ... (10 more removed lines; see GitHub link above)
+       function ci() {
+         const WW = qW.trim() || null;
+         Li({
+           searchQuery: WW,
+           ...null !== WW && !fW.current && (0, TW.p)(BW) && {
+             withFeatures: [],
+             withoutFeatures: []
```

#### 13. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L481-L521` → after: `L207-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L207-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L207-L231) · [Before (L481-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L481-L521)

```diff
-         }, {
-           __proto__: null
-         });
-         return ee
-       }(),
-       Ye = function() {
-         try {
-           return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== Ae && (0, Ke.l)(De, "Response", !0) && (0, Ke.l)(Pe, "ReadableStream", !0) && (0, Ke.l)(Ae.enqueue, "enqueue") && (0, Ke.l)(Ae.close, "close") && (0, Ke.l)(Ae.e … [truncated]
-         } catch {
-           return !1
-         }
-       }();
-     async function Ve(ee, ie, He, ye, Me, Ke, Je) {
-       const oe = new we(ie),
-         {
-           controller: Re,
- ... (25 more removed lines; see GitHub link above)
+         })
+       }(0, jW.c)(Pi), (0, nW.b)(), (0, mW.useEffect)((() => {
+         if (oW) return;
+         const WW = ++mi.current,
+           iW = JSON.parse(Ei);
+         FW(!0), Wi(!1), async function(WW) {
+           if ("mine" === WW.section) return {
+             kind: "owned",
+             packs: await sW.e.getOwnedShaderPacks(HW)
+           };
+           const iW = "favourites" === WW.section,
+             OW = iW && (0, TW.p)(WW),
+             mW = await sW.e.getShaderPacks(HW, {
+               sort: iW ? TW.e : WW.sort,
+               features: OW ? [] : WW.withFeatures,
+               withoutFeatures: OW ? [] : WW.withoutFeatures,
+ ... (9 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L523-L528` → after: `L233-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L233-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L233-L246) · [Before (L523-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L523-L528)

```diff
-         }(ee),
-         {
-           enqueue: qe,
-           close: fe,
-           error: Te
-         } = Ae,
+         }(iW).then((iW => {
+           mi.current === WW && rW(iW)
+         })).catch((iW => {
+           mi.current === WW && (console.error("Failed to get shader packs", iW), rW(null), Wi(!0))
+         })).finally((() => {
+           mi.current === WW && FW(!1)
+         }))
+       }), [Ei, HW, oW, ii]);
+       const [wi, ti] = (0, mW.useState)(null), Zi = null !== (OW = null === (NW = ("listing" === (null === aW || void 0 === aW ? void 0 : aW.kind) ? aW.page.results : (null !== (iW = null === aW || void 0 === aW ? void 0 : aW.packs) && void 0 !== iW ? iW : []).flatMap((WW => WW.l … [truncated]
+       (0, mW.useEffect)((() => {
+         null !== Zi && ti(Zi)
+       }), [Zi]);
+       const xi = "mine" === BW.section,
+         li = (0, TW.q)(HW),
```

#### 15. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L530-L591` → after: `L248-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L248-L250) · [Before (L530-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L530-L591)

```diff
-           try {
-             Ze(Te, Re, [ee])
-           } catch {}
-         };
-       let Xe = 0;
-       const ze = (He, ye) => {
-         if (Xe + ye > ie) throw new Error(`${ee} decoded past its module's ${ie} bytes`);
-         Ze(Fe.Z, new Fe.l(oe), [new Fe.l(He), Xe]);
-         try {
-           Ze(qe, Re, [new Fe.l(oe, Xe, ye)])
-         } catch {}
-         Xe += ye
-       };
-       let Be, Ee;
-       try {
-         Be = new We(ee, ie, ze, ye, Je)
- ... (46 more removed lines; see GitHub link above)
+           "explore" !== BW.section && (WW.stopPropagation(), WW.preventDefault(), Li({
+             section: "explore"
+           }))
```

#### 16. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L593-L657` → after: `L252-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L252-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L252-L268) · [Before (L593-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L593-L657)

```diff
-         for ((0, be.r)(Be.decoded, qe, qe);;) {
-           let ie;
-           try {
-             ie = await Ze(Fe.W, ke, [])
-           } catch (te) {
-             throw new Error(`Downloading ${ee} failed: ${(0,Ue.e)(te)}`)
-           }
-           if (ie.done) break;
-           ye(), Be.push(ie.value)
-         }
-         if (Oe = !0, Be.end(), await Be.decoded, Me(), Xe !== ie) throw new Error(`${ee} ended before its module did`)
-       } catch (te) {
-         throw pe(te), ge(te), te
-       }
-       Be.terminate();
-       try {
- ... (49 more removed lines; see GitHub link above)
+       return (0, hW.jsxs)("div", {
+         className: "ShaderPackBrowse AnimFadeIn",
+         children: [(0, hW.jsx)(xW.b, {
+           onClick: Pi,
+           children: YW(null === Ni ? "homePage:backToGames" : "shaderPackListing:backToSettings")
+         }), (0, hW.jsxs)("div", {
+           className: "ShaderPackBrowseHeader",
+           children: [(0, hW.jsxs)("div", {
+             className: "ShaderPackBrowseHeaderRow",
+             children: [(0, hW.jsx)("h1", {
+               className: "VisuallyHidden",
+               children: YW("shaderPackListing:title")
+             }), (0, hW.jsxs)("div", {
+               className: "ShaderPackBrowseTabs",
+               children: [(0, hW.jsx)("div", {
+                 className: PW()("ShaderPackBrowseSort", {
+ ... (1 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L659-L763` → after: `L270-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L270-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L270-L321) · [Before (L659-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L659-L763)

```diff
-                 Me = await (0, be.q)([He, ye]);
-               return !!Me?.ok && ((0, Fe.U)(Me.body.cancel()), !0)
-             } catch {
-               return !1
-             } finally {
-               clearTimeout(He)
-             }
-           }(ee.url())) return Me?.stop(), await async function(ee, ie, He, ye) {
-           let be = !1;
-           const Me = He && {
-             sha256: He.sha256,
-             onMismatch: () => {
-               be = !0
-             }
-           };
-           try {
- ... (89 more removed lines; see GitHub link above)
+                 onMouseDownCapture: Ai,
+                 onTouchEndCapture: Ai,
+                 children: (0, hW.jsx)(lW.e, {
+                   options: cW.u.map((WW => ({
+                     value: WW,
+                     label: YW(TW.cb[WW])
+                   }))),
+                   value: BW.sort,
+                   onChange: WW => {
+                     Li({
+                       section: "explore",
+                       sort: WW.value
+                     })
+                   }
+                 })
+               }), Object.keys(vW).map((WW => (0, hW.jsx)(xW.Z, {
+ ... (36 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L765-L826` → after: `L323-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L323-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L323-L407) · [Before (L765-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L765-L826)

```diff
-               retries: {
-                 onRetry: () => {
-                   ye.downloaded = !1, null !== Se && He.abort()
-                 }
-               }
-             }),
-             cancel: He,
-             downloaded: !1,
-             state: "compiling"
-           };
-         return je.set(ee.name, ye), (0, be.h)((ie => {
-           (0, be.r)(ye.compiled, (() => {
-             ye.downloaded = !0, ye.state = "compiled", ie()
-           }), (be => {
-             ye.state = "failed", He.signal.aborted || console.warn(`Bloxd wasm: ${ee.name}'s compile ahead of the load failed: the load compiles it afresh`, be), ie()
-           }))
- ... (46 more removed lines; see GitHub link above)
+               children: [YW("shaderPackListing:filter"), " ", (0, hW.jsx)(wW.c, {
+                 name: VW ? "angle-up" : "angle-down"
+               })]
+             }), (0, hW.jsx)("div", {
+               className: "ShaderPackBrowseSpace"
+             }), KW.featureFlags.settings.canUseShaderPacks && (0, hW.jsxs)(xW.n, {
+               onClick: () => {
+                 yW(TW.bb)
+               },
+               children: [(0, hW.jsx)(wW.c, {
+                 name: "upload"
+               }), " ", YW("shaderPackListing:publish")]
+             })]
+           }), !xi && VW && (0, hW.jsxs)("div", {
+             className: "ShaderPackBrowseFeatures",
+             children: [TW.B.map((WW => {
+ ... (69 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/151.js` (Changed code · before: `L828-L882` → after: `L409-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007bR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-91622a71d47767100d25f614b38a1312c2b50dcf413a9702f000075f3526007b) · [After (L409-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/151.js#L409-L427) · [Before (L828-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/151.js#L828-L882)

```diff
-           Ue = () => {
-             (0, be.r)(bi(ee), (ee => {
-               let {
-                 module: ie,
-                 path: He
-               } = ee;
-               Ke(ie, He)
-             }), Me)
-           };
-         void 0 === ye ? Ue() : (0, be.r)(ye.compiled, (ee => {
-           Ke(ee, "ahead")
-         }), Ue)
-       }))
-     }
-     async function yi(ee, ie) {
-       const {
- ... (39 more removed lines; see GitHub link above)
+           view: BW,
+           previewView: gW
+         }), "listing" === (null === aW || void 0 === aW ? void 0 : aW.kind) && (0, hW.jsx)(AW.c, {
+           className: "ShaderPackBrowsePagination",
+           page: aW.page.pageNumber,
+           totalPages: aW.page.totalPages,
+           onSetPage: WW => {
+             XW((iW => {
+               (0, ZW.m)(iW, WW)
+             }))
+           },
+           getPageHref: function(WW) {
+             const iW = new URLSearchParams(CW);
+             (0, ZW.m)(iW, WW);
+             const OW = iW.toString();
+             return OW ? `${JW.pathname}?${OW}` : JW.pathname
+ ... (3 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/152.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/152.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f)

#### 1. `bundles/bloxd.io/chunks/js/152.js` (Changed code · before: `L4-L25` → after: `L4-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9a9c406d82229e61231716d2a633f813140236f477fe411fc994cfc3a7842b0f) · [After (L4-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/152.js#L4-L188) · [Before (L4-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/152.js#L4-L25)

```diff
-   7262: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       loadShaderPackTextures: () => Ke,
-       shaderPackTextures: () => Ue
-     });
-     var ye = He(5570);
-     let be = null,
-       Me = null;
- 
-     function Ke() {
-       return Me ??= Promise.all([He.e(84), He.e(206)]).then((() => He(41616))).then((ee => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: ie,
-           textureNameToIndex: He,
-           textureAnimationData: Me
-         } = ee;
- ... (6 more removed lines; see GitHub link above)
+   7574: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => LW
+     });
+     var mW = OW(1089),
+       EW = OW.n(mW),
+       NW = OW(1172),
+       PW = OW(1283);
+ 
+     function LW(WW) {
+       let {
+         item: iW,
+         className: OW
+       } = WW;
+       const {
+         t: mW
+ ... (169 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/153.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/153.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3)

#### 1. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/153.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/153.js#L2)

```diff
- export const ids = [152, 153];
+ export const ids = [153];
```

#### 2. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/153.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/153.js#L4)

```diff
-   7290: (ee, ie, He) => {
+   42556: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L6-L19` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/153.js#L6) · [Before (L6-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/153.js#L6-L19)

```diff
-       forgetShaderPackActiveHint: () => De,
-       isOtherApiVersion: () => We,
-       isShaderPackActive: () => Ee,
-       isShaderPackChangePending: () => de,
-       markShaderPackChangePending: () => Oe,
-       pageShaderPackValidationVersion: () => te,
-       reconcileStoredShaderPackHint: () => we,
-       removeShaderPack: () => Be,
-       replaceShaderPack: () => pe,
-       saveShaderPack: () => Te,
-       shaderPackNeedsCheck: () => Ze,
-       storedPackOutcome: () => ge,
-       storedShaderPackFiles: () => ke,
-       toStoredShaderPack: () => Re
+       ShaderPackCategory: () => oW
```

#### 4. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L21-L27` → after: `L8-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L8-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/153.js#L8-L273) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/153.js#L21-L27)

```diff
-     var ye = He(5570),
-       be = He(5563),
-       Me = He(35),
-       Ke = He(3808),
-       Ue = He(7296),
-       Fe = He(7262);
-     const Je = "shaderPackChangePending";
+     var mW = OW(62),
+       EW = OW(1616),
+       NW = OW(1532),
+       PW = OW(1605),
+       LW = OW(1172),
+       cW = OW(100),
+       wW = OW(25),
+       tW = OW(1729),
+       ZW = OW(7621),
+       xW = OW(315),
+       lW = OW(7656),
+       AW = OW(7648),
+       bW = OW(7659),
+       jW = OW(7567),
+       UW = OW(5910),
+       kW = OW(5952),
+ ... (250 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L31-L36` → after: `L437-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L437-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/153.js#L437-L473) · [Before (L31-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/153.js#L31-L36)

```diff
-       return {
-         manifest: ee.manifest,
-         files: (0, ye.s)(ee.files),
-         validation: ie,
-         ...He && {
-           listing: He
+       return WW instanceof EW.c && WW.errorMessageForUser ? WW.errorMessageForUser : iW(OW)
+     }
+   },
+   7570: (WW, iW, OW) => {
+     OW.d(iW, {
+       B: () => PW,
+       F: () => mW,
+       G: () => xW,
+       K: () => tW,
+       L: () => MW,
+       M: () => ZW,
+       N: () => wW,
+       c: () => AW,
+       d: () => jW,
+       e: () => bW,
+       f: () => lW,
+ ... (21 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L38-L77` → after: `L475-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L475-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/153.js#L475-L502) · [Before (L38-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/153.js#L38-L77)

```diff
-       }
-     }
- 
-     function ke(ee) {
-       return Object.keys(ee.files).map((ie => ({
-         path: ie,
-         source: ee.files[ie]
-       })))
-     }
-     let qe = Promise.resolve();
- 
-     function fe(ee) {
-       const ie = qe.then(ee);
-       return qe = ie.catch((() => {})), ie
-     }
- 
- ... (24 more removed lines; see GitHub link above)
+       },
+       NW = ["popular", "updated", "newest"],
+       PW = 3,
+       LW = 32,
+       cW = 300;
+ 
+     function wW(WW, iW) {
+       return WW.slice(0, iW).replace(/[\uD800-\uDBFF]$/, "")
+     }
+     const tW = 64,
+       ZW = 512,
+       xW = 18e5;
+ 
+     function lW(WW) {
+       const iW = WW,
+         OW = null === iW || void 0 === iW ? void 0 : iW.files;
+ ... (12 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/153.js` (Changed code · before: `L79-L161` → after: `L504-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-639654147e3bed4b7df94bfb56846460035a3ac8b91d2e0e2cc17f5112b566b3) · [After (L504-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/153.js#L504-L516) · [Before (L79-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/153.js#L79-L161)

```diff
-       return null === ee ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : We(ee) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (He = ee.validation) || void 0 === He ? void 0 : He.ok) || ee.validation.fromRecheck ? null === ie ? {
-         kind: "none",
-         reason: "noCompiler"
-       } : Ze(ee, ie) ? {
-         kind: "blocked",
-         messageKey: "shaderPack:failedUnchecked"
-       } : ee.validation.ok ? {
-         kind: "active"
-       } : {
-         kind: "blocked",
- ... (67 more removed lines; see GitHub link above)
+       return WW === UW || null !== (iW = null === WW || void 0 === WW ? void 0 : WW.startsWith(kW)) && void 0 !== iW && iW
+     }
+ 
+     function MW(WW, iW) {
+       return `shaderPacks/${WW}/${iW}.json`
+     }
+ 
+     function KW(WW, iW, OW, mW) {
+       return null === iW.renderId ? SW(WW, iW.baselineVersion, OW, mW) : `${WW}/${function(WW,iW,OW,mW){return`shaderPacks/${WW}/${iW}/${OW}-${mW}.webp`}(iW.packId,iW.renderId,OW,mW)}`
+     }
+ 
+     function SW(WW, iW, OW, mW) {
+       return `${WW}/${function(WW,iW,OW){return`shaderPacks/baseline/${WW}/${iW}-${OW}.webp`}(iW,OW,mW)}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/154.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/154.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df)

#### 1. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/154.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/154.js#L2)

```diff
- export const ids = [154];
+ export const ids = [154, 159, 160];
```

#### 2. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/154.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/154.js#L4)

```diff
-   7268: (ee, ie, He) => {
+   42022: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L9` → after: `L435-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L435-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/154.js#L435-L440) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/154.js#L9)

```diff
-       k: () => Xe
+       i: () => SW,
+       j: () => cW,
+       n: () => EW,
+       q: () => KW,
+       u: () => NW,
+       x: () => LW
```

#### 4. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L11-L12` → after: `L442-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L442-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/154.js#L442-L457) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/154.js#L11-L12)

```diff
-     var ye = He(7276);
-     const be = 6,
+     const mW = ["forest", "desert", "water", "night", "cave"];
+     const EW = {
+         full: {
+           width: 3840,
+           height: 2160
+         },
+         large: {
+           width: 1920,
+           height: 1080
+         },
+         thumb: {
+           width: 640,
+           height: 360
+         }
+       },
+       NW = ["popular", "updated", "newest"],
```

#### 5. `bundles/bloxd.io/chunks/js/154.js` (Changed code · before: `L20-L245` → after: `L460-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14dfR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be73e222e6d4603a909160ad191de9cb930b256aee825a53f15afa8c9b9b14df) · [After (L460-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/154.js#L460-L498) · [Before (L20-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/154.js#L20-L245)

```diff
-       ke = 64,
-       qe = 128,
-       fe = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];
- 
-     function Te(ee) {
-       if (!ee) return 0;
-       const ie = fe.indexOf(ee);
-       if (ie <= 0) throw new Error(`"${ee}" is not a shader pack hook function`);
-       return ie
-     }
- 
-     function pe(ee) {
-       if (0 === ee) return null;
-       const ie = fe[ee];
-       if (void 0 === ie) throw new Error(`${ee} is not a shader pack hook function id`);
-       return ie
- ... (210 more removed lines; see GitHub link above)
+       cW = 300;
+ 
+     function wW(WW, iW) {
+       return WW.slice(0, iW).replace(/[\uD800-\uDBFF]$/, "")
+     }
+     const tW = 64,
+       ZW = 512,
+       xW = 18e5;
+ 
+     function lW(WW) {
+       const iW = WW,
+         OW = null === iW || void 0 === iW ? void 0 : iW.files;
+       return "number" === typeof(null === iW || void 0 === iW ? void 0 : iW.apiVersion) && "string" === typeof iW.name && (null === iW.author || "string" === typeof iW.author) && (void 0 === iW.keepCircleShadows || "boolean" === typeof iW.keepCircleShadows) && "object" === typeof … [truncated]
+     }
+     const AW = "Bloxdhub",
+       bW = "https://bloxdhub.com/shaders";
+ ... (23 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/155.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/155.js` (47 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe)

#### 1. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L4)

```diff
-   34712: (ee, ie, He) => {
+   53928: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L6-L2393` → after: `L6-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L6-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L6-L28) · [Before (L6-L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L6-L2393)

```diff
-       c: () => Ue,
-       e: () => Ke
-     });
-     var ye = He(260),
-       be = He(123),
-       Me = He(34717);
- 
-     function Ke() {
-       var ee, ie, He;
-       return null !== (ee = (0, ye.j)(null !== (ie = null === (He = (0, be.p)()) || void 0 === He ? void 0 : He.renderer) && void 0 !== ie ? ie : null, (0, be.n)())) && void 0 !== ee ? ee : "unknown"
-     }
- 
-     function Ue(ee, ie, He, ye, be) {
-       const Ke = null === ie ? "untimed" : `${Math.round(ie)} ms`;
-       return `frames stalled, ${He}, gpu ${(0,Me.d)(be)}, blocking ${Ke}, drawn ${Math.round(ee)} ms apart, timers ${ye.timers}, timer gap ${Math.round(ye.longestGapMs)} ms`
-     }
- ... (2372 more removed lines; see GitHub link above)
+       startHarnessShaderPack: () => ZW
+     });
+     var mW = OW(7570),
+       EW = OW(5970),
+       NW = OW(7646),
+       PW = OW(7621),
+       LW = OW(5961),
+       cW = OW(40448),
+       wW = OW(7637),
+       tW = OW(7648);
+     async function ZW(WW, iW) {
+       const {
+         stored: OW,
+         info: ZW
+       } = await async function(WW, iW) {
+         const OW = await async function(WW) {
+ ... (7 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L2395-L2400` → after: `L30-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L30-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L30-L40) · [Before (L2395-L2400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L2395-L2400)

```diff
-           resent: 0,
-           refetched: 0,
-           delivered: He.filter((ee => this.drawn.has(ee))).length
-         };
-         return He.forEach(((ee, ie) => {
-           const {
+             manifest: {
+               apiVersion: OW.apiVersion,
+               name: OW.name,
+               author: OW.author,
+               description: null,
+               keepCircleShadows: !0 === OW.keepCircleShadows
+             },
+             files: OW.files,
+             validation: null
+           },
+           ZW = {
```

#### 4. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L2402-L2461` → after: `L42-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L42-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L42-L54) · [Before (L2402-L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L2402-L2461)

```diff
-             inPlaceOf: Me
-           } = ye[ie], Ke = this.pending.get(ee);
-           if (void 0 !== Ke) {
-             if (Ke.lJ || void 0 === Ke.url) return void(Ke.recheck = !0);
-             if (Ke.url === He) return;
-             be.refetched++;
-             const ie = this.gR(ee, Ke.ask);
-             return ie.recheck = Ke.recheck, void this.fetch(ee, ie, He, Me)
-           }
-           const Ue = this.written.get(ee);
-           void 0 === Ue ? this.drawn.get(ee) !== (null !== He && void 0 !== He ? He : void 0) && (be.resent++, this.fetch(ee, this.gR(ee, !1), He, Me)) : Ue.url !== (null !== He && void 0 !== He ? He : "") && (Ue.attempt.recheck = !0)
-         })), be
-       }
-       taken(ee, ie) {
-         const He = new Set,
-           ye = new Set;
- ... (44 more removed lines; see GitHub link above)
+             name: OW.name,
+             features: [],
+             errors: [],
+             runsInMode: !1
+           },
+           xW = (0, EW.x)(OW.files);
+         if ("string" === typeof xW) return ZW.errors = [{
+           file: null,
+           line: 0,
+           message: xW
+         }], {
+           stored: cW,
+           info: ZW
```

#### 5. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L2463-L2591` → after: `L56-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L56-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L56-L62) · [Before (L2463-L2591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L2463-L2591)

```diff
-         this.pending.set(ee, He);
-         for (let ye = this.ready.length - 1; ye >= 0; ye--) this.ready[ye].file === ee && this.ready.splice(ye, 1);
-         return He
-       }
-       async wanted(ee) {
-         const ie = await this.files.url(ee);
-         return null !== ie && this.refusedPack.get(ee) === ie ? {
-           url: await this.files.shippedUrl(ee),
-           inPlaceOf: ie
-         } : {
-           url: ie,
-           inPlaceOf: void 0
-         }
-       }
-       fetchWanted(ee, ie) {
-         const He = this.files.url(ee);
- ... (113 more removed lines; see GitHub link above)
+         const lW = await (0, PW.loadPageShaderPackCompiler)();
+         if (!lW) throw new Error("The shader pack compiler couldn't load");
+         const AW = await (0, tW.g)(lW, xW);
+         if (!AW) throw new Error("No WebGPU device could validate the shader pack");
+         if (ZW.errors = [...AW.errors], AW.ok) {
+           const WW = lW.dWW(xW, (0, wW.shaderPackTextures)());
+           ZW.features = (0, EW.v)(WW), ZW.runsInMode = (0, NW.j)(WW.variants, iW)
```

#### 6. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L2593-L2744` → after: `L64-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L64-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L64-L67) · [Before (L2593-L2744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L2593-L2744)

```diff
-       }
-     }
- 
-     function fe(ee) {
-       return new ke(`presentation refused ${Te(ee)}`)
-     }
- 
-     function Te(ee) {
-       return ee.startsWith("data:") ? `${ee.slice(0,Math.min(Math.max(ee.indexOf(","),5),64))},...` : ee
-     }
-   },
-   41925: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ke,
-       h: () => Me,
-       k: () => oe,
- ... (136 more removed lines; see GitHub link above)
+         return {
+           stored: {
+             ...cW,
+             validation: AW
```

#### 7. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L2746-L2761` → after: `L69-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L69-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L69-L77) · [Before (L2746-L2761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L2746-L2761)

```diff
-           ke = Je.map((ee => {
-             let [ie, He] = ee;
-             return [ie, ee => {
-               const ie = He(ee);
-               (0, ye.k)(ie) && oe(ie)
-             }]
-           })),
-           qe = () => {
-             for (const [ee, ie] of ke) null === Ke || void 0 === Ke || Ke.removeEventListener(ee, ie)
-           };
-         for (const [ee, ie] of ke) null === Ke || void 0 === Ke || Ke.addEventListener(ee, ie);
-         let fe;
-         try {
-           fe = He()
-         } catch (Te) {
-           return void Re(Te)
+           info: ZW
+         }
+       }(WW, iW), [xW] = ZW.errors;
+       if (xW) {
+         const WW = null === xW.file ? "" : `${xW.file}:${xW.line}: `,
+           iW = ZW.errors.length > 1 ? ` (${ZW.errors.length-1} more)` : "";
+         return {
+           info: ZW,
+           problem: `The shader pack doesn't compile: ${WW}${xW.message}${iW}`
```

#### 8. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L2987-L3011` → after: `L80-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L80-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L80-L85) · [Before (L2987-L3011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L2987-L3011)

```diff
-     }
-   },
-   41846: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Je,
-       e: () => Ue,
-       g: () => oe,
-       k: () => Ke
-     });
-     var ye = He(345),
-       be = He(634);
-     let Me;
- 
-     function Ke(ee) {
-       var ie;
-       const He = Me;
- ... (9 more removed lines; see GitHub link above)
+       return ZW.runsInMode ? ((0, cW.setHarnessUrlShaderPack)(OW, iW), {
+         info: ZW,
+         problem: null
+       }) : {
+         info: ZW,
+         problem: `The shader pack runs nothing in ${iW} mode`
```

#### 9. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3032-L3040` → after: `L89-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L89-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L89-L104) · [Before (L3032-L3040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3032-L3040)

```diff
-   41878: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => te,
-       g: () => ge,
-       i: () => Ee,
-       l: () => We,
-       n: () => Pe,
-       p: () => De,
-       t: () => Ae
+   7656: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       forgetShaderPackActiveHint: () => HW,
+       isOtherApiVersion: () => yW,
+       isShaderPackActive: () => MW,
+       isShaderPackChangePending: () => YW,
+       markShaderPackChangePending: () => SW,
+       pageShaderPackValidationVersion: () => TW,
+       reconcileStoredShaderPackHint: () => hW,
+       removeShaderPack: () => sW,
+       replaceShaderPack: () => jW,
+       saveShaderPack: () => bW,
+       shaderPackNeedsCheck: () => JW,
+       storedPackOutcome: () => KW,
+       storedShaderPackFiles: () => xW,
+       toStoredShaderPack: () => ZW
```

#### 10. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3042-L3073` → after: `L106-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L106-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L106-L113) · [Before (L3042-L3073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3042-L3073)

```diff
-     var ye = He(5279),
-       be = He(41882),
-       Me = He(34717);
-     const Ke = 1,
-       Ue = 18,
-       Fe = 19,
-       Je = 20,
-       oe = 21,
-       Re = 22,
-       ke = {
-         [Ke]: "link",
-         2: "draw",
-         3: "draw base vertex",
-         4: "draw no index buffer",
-         7: "draw missing block",
-         8: "draw small binding",
- ... (16 more removed lines; see GitHub link above)
+     var mW = OW(5970),
+       EW = OW(5961),
+       NW = OW(39),
+       PW = OW(4666),
+       LW = OW(7659),
+       cW = OW(7637);
+     const wW = "shaderPackChangePending";
+     let tW = null;
```

#### 11. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3076` → after: `L116-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L116-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L116-L123) · [Before (L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3076)

```diff
-       return ee === Ue ? "program retry" : ee === Ke ? "program link" : ee === oe || ee === Re ? "program link stall" : ee === Fe || ee === Je ? `program ${ie} ${He}` : "program"
+       return {
+         manifest: WW.manifest,
+         files: (0, mW.A)(WW.files),
+         validation: iW,
+         ...OW && {
+           listing: OW
+         }
+       }
```

#### 12. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3125-L3126` → after: `L126-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L126-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L126-L130) · [Before (L3125-L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3125-L3126)

```diff
-     function Ee(ee, ie) {
-       return ee === ye.o.RenderSerialLinks && void 0 !== Xe[ie]
+     function xW(WW) {
+       return Object.keys(WW.files).map((iW => ({
+         path: iW,
+         source: WW.files[iW]
+       })))
```

#### 13. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3129-L3130` → after: `L134-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L134-L136) · [Before (L3129-L3130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3129-L3130)

```diff
-     function ge(ee, ie) {
-       return ee === ye.o.RenderSerialLinks && void 0 !== Be[15 & ie]
+     function AW(WW) {
+       const iW = lW.then(WW);
+       return lW = iW.catch((() => {})), iW
```

#### 14. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3142-L3147` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L140) · [Before (L3142-L3147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3142-L3147)

```diff
-       var He;
-       return null !== (He = ee[ie]) && void 0 !== He ? He : (0, Me.d)(ie)
-     }
- 
-     function We() {
-       return (0, Me.d)((0, be.b)())
+       return AW((() => UW(WW, iW)))
```

#### 15. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3150-L3229` → after: `L143-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L143-L144) · [Before (L3150-L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3150-L3229)

```diff
-     function te(ee, ie) {
-       switch (ee) {
-         case ye.o.RenderSceneRowNotDrawn:
-           return {
-             words: ` ${de(Te,ie)}`, instance: String(ie), group: String(ee)
-           };
-         case ye.o.RenderChunkMeshNotDrawn: {
-           const He = 0 === (128 & ie) ? "" : " shortage",
-             ye = ie >>> 8;
-           return {
-             words: ` ${de(pe,127&ie)}${He}${0===ye?"":` kind ${(0,Me.d)(ye)}`}`,
-             instance: String(ie),
-             group: String(ee)
-           }
-         }
-         case ye.o.RenderInternal: {
- ... (64 more removed lines; see GitHub link above)
+     function jW(WW, iW, OW) {
+       return AW((async () => JSON.stringify(await (0, LW.g)()) === JSON.stringify(WW) && (null === iW ? (await kW(), !0) : UW(iW, OW))))
```

#### 16. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3231-L3239` → after: `L146-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L146-L148) · [Before (L3231-L3239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3231-L3239)

```diff
-     const Ze = 2,
-       we = new Map;
- 
-     function De(ee) {
-       let {
-         group: ie,
-         instance: He
-       } = ee, ye = we.get(ie);
-       return void 0 === ye && (ye = [], we.set(ie, ye)), !ye.includes(He) && (ye.length >= Ze || (ye.push(He), !1))
+     async function UW(WW, iW) {
+       const OW = await NW.f.setItem(LW.c, WW);
+       return OW && nW(WW, iW), OW
```

#### 17. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3241-L3243` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L150-L151) · [Before (L3241-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3241-L3243)

```diff
- 
-     function Pe() {
-       return we.size > 0
+     async function kW() {
+       await NW.f.removeItem(LW.c), NW.i.removeItem(PW.b)
```

#### 18. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3247` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L155) · [Before (L3247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3247)

```diff
-       we.clear()
+       return AW(kW)
```

#### 19. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3297-L3298` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L159) · [Before (L3297-L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3297-L3298)

```diff
-       const He = (0, Ue.d)(ie.variants);
-       return ee.setShaderPack(He.variantFlags, He.hooks, He.moduleCodes, (0, Fe.x)(ie.layers), Fe.n[ie.policy], ie.keepCircleShadows)
+       return "active" === KW(WW, iW).kind
```

#### 20. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3309-L3315` → after: `L164-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L164-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L164-L177) · [Before (L3309-L3315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3309-L3315)

```diff
-       const ye = null !== (He = null === ee || void 0 === ee ? void 0 : ee.reason) && void 0 !== He ? He : "none";
-       return fe.has(ye) ? {
-         messageKey: ie ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
-         noAdapter: !0
-       } : "not_requested" === ye && "override" === (null === ee || void 0 === ee ? void 0 : ee.source) ? {
-         messageKey: "shaderPack:failedRendererOverride",
-         noAdapter: !1
+       return null === WW ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : yW(WW) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.ok) || WW.validation.fromRecheck ? null === iW ? {
+         kind: "none",
+         reason: "noCompiler"
+       } : JW(WW, iW) ? {
+         kind: "blocked",
+         messageKey: "shaderPack:failedUnchecked"
+       } : WW.validation.ok ? {
+         kind: "active"
```

#### 21. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3317-L3439` → after: `L179-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L179-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L179-L183) · [Before (L3317-L3439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3317-L3439)

```diff
-         messageKey: Te.has(ye) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
-         noAdapter: !1
-       }
-     }
-     class Xe extends Error {
-       constructor(ee) {
-         super(`the shader pack can't run in this game: ${ee}`), this.messageKey = ee, this.name = "ShaderPackJoinError"
-       }
-     }
-     const ze = "strict";
-     class Be {
-       constructor(ee) {
-         this.deps = ee, this.pagePack = void 0, this.loaded = null, this.policy = ze, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, t … [truncated]
-           status: "none"
-         }))).then((ee => (this.loaded = ee, "active" === ee.status && (this.handOverToPreviews(ee), null !== ee.harnessPolicy && (this.policy = ee.harnessPolicy, this.handOver())), ee)))
-       }
- ... (107 more removed lines; see GitHub link above)
+         kind: "blocked",
+         messageKey: "shaderPack:failedValidation"
+       } : {
+         kind: "none",
+         reason: "failedWhenLoaded"
```

#### 22. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3444-L3516` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L187-L188) · [Before (L3444-L3516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3444-L3516)

```diff
-     function ge(ee, ie, He, ye) {
-       return be.h.subscribe(Ee, (ee => {
-         let {
-           translationKey: ie,
-           stillCurrent: He,
-           reasonKey: ye
-         } = ee;
-         He() && be.h.yR("chat", (0, Me.j)(ie, ye))
-       })), new Be({
-         load: Oe,
-         policyOf: de,
-         core: ee,
-         previews: ie,
-         noWebGpu: He,
-         notify: (ee, ie, He) => {
-           const ye = {
- ... (57 more removed lines; see GitHub link above)
+     function SW() {
+       NW.j.setItem(wW, performance.timeOrigin)
```

#### 23. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3519-L3557` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L191-L192) · [Before (L3519-L3557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3519-L3557)

```diff
-     function Fe(ee) {
-       if (!ee.startsWith(Me)) return null;
-       const ie = Number(ee.slice(Me.length));
-       return Number.isInteger(ie) && ie >= 0 ? ie : null
-     }
-     async function Je() {
-       const ee = await He.e(228).then((() => He(34995)));
-       return {
-         atlasSheets: ee.blockAtlasUrls,
-         texture: ie => {
-           var He, ye, Me;
-           return null !== (He = null !== (ye = null !== (Me = ee.animatedBlockTextures[ie]) && void 0 !== Me ? Me : ee.rotatedBlockTextures[ie]) && void 0 !== ye ? ye : be.e[ie]) && void 0 !== He ? He : null
-         }
-       }
-     }
-     async function oe(ee) {
- ... (23 more removed lines; see GitHub link above)
+     function YW() {
+       return NW.j.getItem(wW) === performance.timeOrigin
```

#### 24. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3562-L3768` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L196) · [Before (L3562-L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3562-L3768)

```diff
-       const {
-         width: ie,
-         height: He
-       } = ee, be = Math.max(1, Math.min(He, Re)), Me = (0, ye.f)(ie, be, {
-         willReadFrequently: !0
-       });
-       if (!Me) throw new Error("no 2D context to read the texture back");
-       Me.globalCompositeOperation = "copy";
-       const Ke = new Uint8Array(ie * He * 4);
-       for (let ye = 0; ye < He; ye += be) {
-         const Ue = Math.min(be, He - ye);
-         Me.drawImage(ee, 0, ye, ie, Ue, 0, 0, ie, Ue), Ke.set(Me.getImageData(0, 0, ie, Ue).data, ye * ie * 4)
-       }
-       return {
-         width: ie,
-         height: He,
- ... (191 more removed lines; see GitHub link above)
+       return !(0, EW.g)(WW.manifest.apiVersion)
```

#### 25. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3784-L3791` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L199-L200) · [Before (L3784-L3791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3784-L3791)

```diff
-     function Je() {
-       if (Ue.g) return;
-       const ee = (0, be.pageOperatingSystem)();
-       if ("android" !== ee && "windows" !== ee || (0, Ue.d)("webgl_default")) return;
-       if ("windows" === ee) return ee => "qualcomm" === (0, be.normaliseGpuVendor)((0, Ke.e)(ee).vendor);
-       const ie = (0, Me.p)(),
-         He = null === ie ? (0, ye.m)() : (0, ye.i)(ie.vendor, ie.renderer);
-       return null !== He && Fe.has(He) ? ee => (0, ye.k)((0, Ke.e)(ee).vendor, He) : void 0
+     function TW(WW) {
+       return tW ??= WW.IH((0, cW.shaderPackTextures)()), tW
```

#### 26. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3795-L3809` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L204-L205) · [Before (L3795-L3809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3795-L3809)

```diff
-       return ee ? () => !0 : ie()
-     }
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
-       }
+       var OW;
+       return (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.headerVersion) !== TW(iW)
```

#### 27. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3822` → after: `L209-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L209-L211) · [Before (L3822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3822)

```diff
-       return ee.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
+       return AW((async () => {
+         nW(await (0, LW.g)(!0), WW)
+       }))
```

#### 28. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3827-L3833` → after: `L215-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L215-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L215-L217) · [Before (L3827-L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3827-L3833)

```diff
-       if (null === Ue) try {
-         ee = (0, ye.getBrowserName)(), ie = (0, ye.getBrowserVersion)(), He = (0, ye.getOperatingSystem)(), be = (0, ye.getOperatingSystemVersion)(), Ue = `${ee.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===ie?"unknown":Ke(ie)}-${He}${void 0===be?"":`_${Ke(be)}`}`
-       } catch (Me) {
-         console.warn("The user agent couldn't be read for its browser code", Me), Ue = "unknown"
-       }
-       var ee, ie, He, be;
-       return Ue
+       return AW((async () => {
+         NW.i.removeItem(PW.b)
+       }))
```

#### 29. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3836-L3878` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L220-L221) · [Before (L3836-L3878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3836-L3878)

```diff
-     function Je() {
-       let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
-       const ie = `WGPU-${Fe()}`,
-         ye = (ee, ye) => {
-           const {
-             reason: Ke,
-             message: Ue
-           } = ye;
-           if ((0, be.m)(String(Ue))) return;
-           const Fe = {
-             pipeline: null !== ee && void 0 !== ee ? ee : "",
-             reason: String(Ke),
-             browserMessage: String(Ue)
-           };
-           Promise.resolve().then((() => He(41864))).then((ee => {
-             let {
- ... (27 more removed lines; see GitHub link above)
+     function nW(WW, iW) {
+       MW(WW, iW) ? NW.i.setItem(PW.b, !0) : NW.i.removeItem(PW.b)
```

#### 30. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3881` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L224) · [Before (L3881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3881)

```diff
-   41844: (ee, ie, He) => {
+   7648: (WW, iW, OW) => {
```

#### 31. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3884` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L227) · [Before (L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3884)

```diff
-       e: () => Fe
+       g: () => LW
```

#### 32. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3886-L3890` → after: `L229-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L229-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L229-L251) · [Before (L3886-L3890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3886-L3890)

```diff
-     var ye = He(123);
-     let be = !1;
- 
-     function Me() {
-       let ee = null;
+     var mW = OW(7656),
+       EW = OW(7637),
+       NW = OW(119);
+     const PW = 100;
+     async function LW(WW, iW) {
+       var OW;
+       let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (OW = navigator.gpu) && void 0 !== OW ? OW : null;
+       const PW = WW.dWW(iW, (0, EW.shaderPackTextures)());
+       if (PW.errors.length > 0) return wW(WW, PW.errors, PW.offInStrict);
+       const LW = await async function(WW) {
+         if (!WW) return null;
+         try {
+           const iW = await (0, NW.r)(WW);
+           return iW ? await iW.requestDevice() : null
+         } catch (iW) {
+           return console.error("Couldn't get a WebGPU device to validate the shader pack.", iW), null
+ ... (7 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3892-L3894` → after: `L253-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L253-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L253-L274) · [Before (L3892-L3894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3892-L3894)

```diff
-         return ee = document.createElement("canvas").getContext("webgl2"), null !== ee
-       } catch {
-         return !1
+         const iW = await Promise.all(PW.validationModules.map((iW => async function(WW, iW, OW) {
+           iW.pushErrorScope("validation");
+           const mW = iW.createShaderModule({
+               code: OW.code
+             }),
+             EW = iW.popErrorScope(),
+             {
+               messages: NW
+             } = await mW.getCompilationInfo(),
+             PW = NW.filter((WW => "error" === WW.type)).map((iW => WW.mapValidationMessage(OW, iW))),
+             LW = await EW;
+           LW && 0 === PW.length && PW.push({
+             file: null,
+             line: 0,
+             message: LW.message,
+             variants: [OW.key]
+ ... (6 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3896-L3899` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L276) · [Before (L3896-L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3896-L3899)

```diff
-         try {
-           var ie, He;
-           null === (ie = ee) || void 0 === ie || null === (He = ie.getExtension("WEBGL_lose_context")) || void 0 === He || He.loseContext()
-         } catch {}
+         LW.destroy()
```

#### 35. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3902-L3908` → after: `L279-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L279-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L279-L292) · [Before (L3902-L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3902-L3908)

```diff
- 
-     function Ke() {
-       "hidden" === document.visibilityState && (be = !1, document.removeEventListener("visibilitychange", Ke))
-     }
- 
-     function Ue() {
-       be || "visible" !== document.visibilityState || !(0, ye.t)() && !Me() || (be = !0, document.addEventListener("visibilitychange", Ke))
+     async function cW(WW, iW) {
+       var OW;
+       if (!(0, mW.shaderPackNeedsCheck)(WW, iW) || (0, mW.isOtherApiVersion)(WW)) return WW;
+       const EW = await LW(iW, (0, mW.storedShaderPackFiles)(WW));
+       if (!EW) return WW;
+       const NW = !1 === (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.ok) && !WW.validation.fromRecheck,
+         PW = {
+           ...WW,
+           validation: NW ? EW : {
+             ...EW,
+             fromRecheck: !0
+           }
+         };
+       return await (0, mW.replaceShaderPack)(WW, PW, iW) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), PW
```

#### 36. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3911-L3935` → after: `L295-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L295-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L295-L301) · [Before (L3911-L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3911-L3935)

```diff
-     function Fe() {
-       return be || Me()
-     }
-   },
-   41972: (ee, ie, He) => {
-     ee.exports = He.p + "static/media/bloxd_wasm_models_bg.e21e4a54752216afcd2d.wasm"
-   },
-   41963: (ee, ie, He) => {
-     ee.exports = He.p + "static/media/bloxd_wasm_workers_bg.007bf444610b634de8e6.wasm"
-   },
-   41955: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => be,
-       e: () => ye
-     });
-     const ye = {
- ... (9 more removed lines; see GitHub link above)
+     function wW(WW, iW, OW) {
+       return {
+         headerVersion: (0, mW.pageShaderPackValidationVersion)(WW),
+         ok: 0 === iW.length,
+         errors: iW.slice(0, PW),
+         moreErrors: Math.max(0, iW.length - PW),
+         offInStrict: OW
```

#### 37. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3939` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L305) · [Before (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3939)

```diff
-   7268: (ee, ie, He) => {
+   7570: (WW, iW, OW) => {
```

#### 38. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3944` → after: `L319-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L319-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L319-L324) · [Before (L3944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3944)

```diff
-       k: () => Xe
+       i: () => SW,
+       j: () => cW,
+       n: () => EW,
+       q: () => KW,
+       u: () => NW,
+       x: () => LW
```

#### 39. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3946-L3947` → after: `L326-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L326-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L326-L341) · [Before (L3946-L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3946-L3947)

```diff
-     var ye = He(7276);
-     const be = 6,
+     const mW = ["forest", "desert", "water", "night", "cave"];
+     const EW = {
+         full: {
+           width: 3840,
+           height: 2160
+         },
+         large: {
+           width: 1920,
+           height: 1080
+         },
+         thumb: {
+           width: 640,
+           height: 360
+         }
+       },
+       NW = ["popular", "updated", "newest"],
```

#### 40. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3955-L3979` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L344) · [Before (L3955-L3979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3955-L3979)

```diff
-       ke = 64,
-       qe = 128,
-       fe = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];
- 
-     function Te(ee) {
-       if (!ee) return 0;
-       const ie = fe.indexOf(ee);
-       if (ie <= 0) throw new Error(`"${ee}" is not a shader pack hook function`);
-       return ie
-     }
- 
-     function pe(ee) {
-       if (0 === ee) return null;
-       const ie = fe[ee];
-       if (void 0 === ie) throw new Error(`${ee} is not a shader pack hook function id`);
-       return ie
- ... (9 more removed lines; see GitHub link above)
+       cW = 300;
```

#### 41. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3981-L3982` → after: `L346-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L346-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L346-L347) · [Before (L3981-L3982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3981-L3982)

```diff
-     function ze(ee) {
-       return Number(ee.strict) * ye.d.length + ye.d.indexOf(ee.program)
+     function wW(WW, iW) {
+       return WW.slice(0, iW).replace(/[\uD800-\uDBFF]$/, "")
```

#### 42. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3986` → after: `L354-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L354-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L354-L356) · [Before (L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3986)

```diff
-       return "" === ee ? [] : ee.split(" ")
+       const iW = WW,
+         OW = null === iW || void 0 === iW ? void 0 : iW.files;
+       return "number" === typeof(null === iW || void 0 === iW ? void 0 : iW.apiVersion) && "string" === typeof iW.name && (null === iW.author || "string" === typeof iW.author) && (void 0 === iW.keepCircleShadows || "boolean" === typeof iW.keepCircleShadows) && "object" === typeof … [truncated]
```

#### 43. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L3990-L4001` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L362) · [Before (L3990-L4001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L3990-L4001)

```diff
-       const ie = {
-         variantFlags: new Uint8Array(be),
-         hooks: new Uint8Array(be * Me),
-         moduleCodes: Array(be).fill(""),
-         reads: Array(2 * be).fill("")
-       };
-       for (const He of ee) {
-         const ee = ze(He.key),
-           ye = (ee, ie) => null === He.hooks.surface || He.reads.fragment.includes(ee) ? 0 : ie;
-         ie.variantFlags[ee] = (He.sceneDepth ? Ke : 0) | (He.movesVertices ? Ue : 0) | (He.sunShadow ? Fe : 0) | (He.airShadow ? Je : 0) | (He.discards ? oe : 0) | ye("localPosition", Re) | ye("enchantSpeed", ke) | ye("enchantTier", qe), ie.hooks[ee * Me] = Te(He.hooks.vertex), i … [truncated]
-       }
-       return ie
+       return `https://bloxdhub.com/workshop/${encodeURIComponent(WW)}`
```

#### 44. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4005-L4099` → after: `L368-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L368-L369) · [Before (L4005-L4099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L4005-L4099)

```diff
-       const {
-         hooks: ie,
-         moduleCodes: He,
-         reads: ye
-       } = ee;
-       return Array.from(ee.variantFlags, ((ee, be) => {
-         const Re = be * Me;
-         return {
-           key: Xe(be),
-           hooks: {
-             vertex: pe(ie[Re]),
-             surface: pe(ie[Re + 1]),
-             light: pe(ie[Re + 2])
-           },
-           moduleCode: He[be],
-           sceneDepth: 0 !== (ee & Ke),
- ... (79 more removed lines; see GitHub link above)
+       var iW;
+       return WW === UW || null !== (iW = null === WW || void 0 === WW ? void 0 : WW.startsWith(kW)) && void 0 !== iW && iW
```

#### 45. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4103-L4106` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L373) · [Before (L4103-L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L4103-L4106)

```diff
-       const He = new DataView(ee, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, ke),
-         [ye, be, Me, Ke, Ue, Fe] = Re;
-       He.setFloat32(ye.offset, ie.seconds, !0), He.setUint32(be.offset, ie.lit ? 1 : 0, !0);
-       for (let Je = 0; Je < 3; Je++) He.setInt32(Me.offset + 4 * Je, ie.renderOffset[Je], !0), He.setFloat32(Ke.offset + 4 * Je, ie.Sie[Je], !0), He.setFloat32(Ue.offset + 4 * Je, ie.eyePosition[Je], !0), He.setFloat32(Fe.offset + 4 * Je, ie.shadowDirection[Je], !0)
+       return `shaderPacks/${WW}/${iW}.json`
```

#### 46. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4109-L4117` → after: `L376-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L376-L377) · [Before (L4109-L4117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L4109-L4117)

```diff
-     function Te(ee) {
-       const ie = new Uint32Array(Math.max(1, ee.length));
-       return ee.forEach(((ee, He) => {
-         let {
-           id: ye,
-           rotation: be
-         } = ee;
-         ie[He] = 65535 & ye | (3 & be) << 16
-       })), ie
+     function KW(WW, iW, OW, mW) {
+       return null === iW.renderId ? SW(WW, iW.baselineVersion, OW, mW) : `${WW}/${function(WW,iW,OW,mW){return`shaderPacks/${WW}/${iW}/${OW}-${mW}.webp`}(iW.packId,iW.renderId,OW,mW)}`
```

#### 47. `bundles/bloxd.io/chunks/js/155.js` (Changed code · before: `L4119-L4122` → after: `L379-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efeR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e67fdcb910711e0ea4b2ab353000260828e709ccf1b9ad0c13c9b8df5f066efe) · [After (L379-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/155.js#L379-L381) · [Before (L4119-L4122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/155.js#L4119-L4122)

```diff
-     const pe = {
-       off: 0,
-       strict: 1,
-       allow: 2
+ 
+     function SW(WW, iW, OW, mW) {
+       return `${WW}/${function(WW,iW,OW){return`shaderPacks/baseline/${WW}/${iW}-${OW}.webp`}(iW,OW,mW)}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/156.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/156.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4)

#### 1. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L2)

```diff
- export const ids = [156];
+ export const ids = [156, 159, 160];
```

#### 2. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L4-L8)

```diff
-   44931: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       compilePagePack: () => Je,
-       prefetchCompiler: () => Ue,
-       reconcileHint: () => Fe
+   7609: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L10-L21` → after: `L8-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L8-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L8-L69) · [Before (L10-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L10-L21)

```diff
-     var ye = He(7249),
-       be = He(7290),
-       Me = He(7262),
-       Ke = He(7283);
- 
-     function Ue() {
-       (0, ye.loadPageShaderPackCompiler)()
-     }
-     async function Fe() {
-       const ee = await (0, ye.loadPageShaderPackCompiler)();
-       await (ee ? (0, be.reconcileStoredShaderPackHint)(ee) : (0, be.forgetShaderPackActiveHint)())
-     }
+     var mW = OW(5952),
+       EW = OW(1283);
+     const NW = {
+       strict: "shaderPack:variantStrict",
+       nonStrict: "shaderPack:variantNonStrict",
+       terrain: "shaderPack:variantTerrain",
+       liquid: "shaderPack:variantLiquid",
+       model: "shaderPack:variantModel"
+     };
+ 
+     function PW(WW) {
+       let {
+         diagnostics: iW,
+         more: OW = 0,
+         t: PW
+       } = WW;
+ ... (46 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L23-L40` → after: `L71-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L71-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L71-L196) · [Before (L23-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L23-L40)

```diff
-       const ie = await (0, ye.loadPageShaderPackCompiler)();
-       if (!ie) return {
-         status: "none"
-       };
-       const He = await (0, Ke.e)(ee, ie),
-         Ue = (0, be.storedPackOutcome)(He, ie);
-       if ("none" === Ue.kind) return {
-         status: "none"
-       };
-       const Fe = ie.vie((0, be.storedShaderPackFiles)(He), (0, Me.shaderPackTextures)());
-       if ("blocked" === Ue.kind) return {
-         status: "blocked",
-         messageKey: Ue.messageKey,
-         variants: 0 === Fe.errors.length ? Fe.variants : null
-       };
-       if (Fe.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", Fe.errors), {
- ... (2 more removed lines; see GitHub link above)
+       const iW = (0, xW.t)(WW);
+       if (iW) {
+         if (iW.size > lW) throw new xW.e("shaderPack:loadZipTooBig", {
+           megabytes: String(lW / 1048576)
+         });
+         return async function(WW) {
+           return UW((0, xW.j)(WW, AW).map((iW => ({
+             path: iW.path,
+             read: OW => (0, xW.p)(WW, iW, OW)
+           }))))
+         }(new Uint8Array(await iW.arrayBuffer()))
+       }
+       return UW(WW.map((WW => ({
+         path: (0, xW.n)(WW),
+         read: iW => async function(WW, iW) {
+           return WW.size > iW ? null : new Uint8Array(await WW.arrayBuffer())
+ ... (110 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L42-L44` → after: `L198-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L198-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L198-L243) · [Before (L42-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L42-L44)

```diff
-         name: Je,
-         keepCircleShadows: oe
-       } = He.manifest;
+         t: EW
+       } = (0, wW.B)(), {
+         getRootProps: tW,
+         getInputProps: ZW,
+         isDragActive: xW,
+         open: lW
+       } = (0, PW.e)({
+         onDrop: mW,
+         noClick: !0,
+         noKeyboard: !0,
+         useFsAccessApi: !1,
+         disabled: OW
+       });
+       return (0, KW.jsxs)("div", {
+         ...tW({
+           className: NW()("ShaderPackDropZone", {
+ ... (30 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L46-L50` → after: `L245-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L245-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L245-L258) · [Before (L46-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L46-L50)

```diff
-         status: "active",
-         pack: {
-           name: Je,
-           variants: Fe.variants,
-           keepCircleShadows: !0 === oe
+         loading: OW,
+         error: NW,
+         setError: PW,
+         onFiles: async function(OW) {
+           if (!LW.current) {
+             LW.current = !0, EW(!0), PW(null);
+             try {
+               await WW(await jW(OW))
+             } catch (mW) {
+               mW instanceof xW.e ? PW((0, sW.h)(iW, mW.translationKey, mW.params)) : (console.error("Failed to load the shader pack", mW), PW(iW("shaderPack:unexpectedError")))
+             } finally {
+               LW.current = !1, EW(!1)
+             }
+           }
```

#### 7. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L55` → after: `L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L263) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L55)

```diff
-   7290: (ee, ie, He) => {
+   7656: (WW, iW, OW) => {
```

#### 8. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L72-L77` → after: `L280-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L280-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L280-L285) · [Before (L72-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L72-L77)

```diff
-     var ye = He(5570),
-       be = He(5563),
-       Me = He(35),
-       Ke = He(3808),
-       Ue = He(7296),
-       Fe = He(7262);
+     var mW = OW(5970),
+       EW = OW(5961),
+       NW = OW(39),
+       PW = OW(4666),
+       LW = OW(7659),
+       cW = OW(7637);
```

#### 9. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L84` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L292) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L84)

```diff
-         files: (0, ye.s)(ee.files),
+         files: (0, mW.A)(WW.files),
```

#### 10. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L110` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L318) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L110)

```diff
-       return fe((async () => JSON.stringify(await (0, Ue.h)()) === JSON.stringify(ee) && (null === ie ? (await ze(), !0) : Xe(ie, He))))
+       return AW((async () => JSON.stringify(await (0, LW.g)()) === JSON.stringify(WW) && (null === iW ? (await kW(), !0) : UW(iW, OW))))
```

#### 11. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L113` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L321) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L113)

```diff
-       const He = await Me.e.setItem(Ue.e, ee);
+       const OW = await NW.f.setItem(LW.c, WW);
```

#### 12. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L117` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L325) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L117)

```diff
-       await Me.e.removeItem(Ue.e), Me.i.removeItem(Ke.b)
+       await NW.f.removeItem(LW.c), NW.i.removeItem(PW.b)
```

#### 13. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L154` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L362) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L154)

```diff
-       Me.m.setItem(Je, performance.timeOrigin)
+       NW.j.setItem(wW, performance.timeOrigin)
```

#### 14. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L158-L166` → after: `L366-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L366-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L366-L374) · [Before (L158-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L158-L166)

```diff
-       return Me.m.getItem(Je) === performance.timeOrigin
-     }
- 
-     function We(ee) {
-       return !(0, be.h)(ee.manifest.apiVersion)
-     }
- 
-     function te(ee) {
-       return oe ??= ee.cV((0, Fe.shaderPackTextures)()), oe
+       return NW.j.getItem(wW) === performance.timeOrigin
+     }
+ 
+     function yW(WW) {
+       return !(0, EW.g)(WW.manifest.apiVersion)
+     }
+ 
+     function TW(WW) {
+       return tW ??= WW.IH((0, cW.shaderPackTextures)()), tW
```

#### 15. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L176` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L384) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L176)

```diff
-         Pe(await (0, Ue.h)(!0), ee)
+         nW(await (0, LW.g)(!0), WW)
```

#### 16. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L190` → after: `L398-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L398-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L398-L423) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L190)

```diff
-   7283: (ee, ie, He) => {
+   7637: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       loadShaderPackTextures: () => PW,
+       shaderPackTextures: () => LW
+     });
+     var mW = OW(5970);
+     let EW = null,
+       NW = null;
+ 
+     function PW() {
+       return NW ??= Promise.all([OW.e(85), OW.e(126)]).then((() => OW(42015))).then((WW => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: iW,
+           textureNameToIndex: OW,
+           textureAnimationData: NW
+         } = WW;
+ ... (10 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L192` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L425) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L192)

```diff
-       e: () => Fe,
+       c: () => cW,
```

#### 18. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L195-L197` → after: `L428-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L428-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L428-L430) · [Before (L195-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L195-L197)

```diff
-     var ye = He(7290),
-       be = He(7262),
-       Me = He(115);
+     var mW = OW(7656),
+       EW = OW(7637),
+       NW = OW(119);
```

#### 19. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L201-L202` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L434-L435) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L201-L202)

```diff
-       let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (He = navigator.gpu) && void 0 !== He ? He : null;
-       const Ke = ee.vie(ie, (0, be.shaderPackTextures)());
+       let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (OW = navigator.gpu) && void 0 !== OW ? OW : null;
+       const PW = WW.dWW(iW, (0, EW.shaderPackTextures)());
```

#### 20. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L207` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L440) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L207)

```diff
-           const ie = await (0, Me.v)(ee);
+           const iW = await (0, NW.r)(WW);
```

#### 21. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L238` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L471) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L238)

```diff
-         return Fe ? null : Je(ee, ee.Lbe(ie.flat()), Ke.offInStrict)
+         return cW ? null : wW(WW, WW.smW(iW.flat()), PW.offInStrict)
```

#### 22. `bundles/bloxd.io/chunks/js/156.js` (Changed code · before: `L253` → after: `L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ac6e12e173a8e1ade76c859faf7a1a96b56f3c7b2c6070b21ca83c872c35b8f4) · [After (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/156.js#L486) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/156.js#L253)

```diff
-           validation: Me ? be : {
+           validation: NW ? EW : {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/157.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/157.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076)

#### 1. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L4` → after: `L4-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L4-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/157.js#L4-L601) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/157.js#L4)

```diff
-   7311: (ee, ie, He) => {
+   7621: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       loadPageShaderPackCompiler: () => li
+     });
+     var mW = {};
+     OW.r(mW), OW.d(mW, {
+       mNW: () => EW,
+       dWW: () => NW,
+       default: () => qW,
+       ENW: () => PW,
+       NNW: () => LW,
+       initSync: () => BW,
+       qt: () => cW,
+       smW: () => wW,
+       PNW: () => tW,
+       LNW: () => ZW,
+ ... (582 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L6` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/157.js#L603) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/157.js#L6)

```diff
-       encodeBinaryMessageWithMetricsCookies: () => be
+       c: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L8-L11` → after: `L605-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L605-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/157.js#L605-L754) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/157.js#L8-L11)

```diff
-     var ye = He(4142);
- 
-     function be(ee) {
-       return ye.p.toBuffer(ee)
+     var mW = OW(2388);
+     const EW = {
+       bloxd_wasm: () => "102e63c69ba1846a7ef3e4f3119d9407d849792a77d386b77d132cbd19000baf",
+       bloxd_wasm_client: () => "828553d657b63b8b78489e1c312c1521bbff4059679c6442f668bd5b77b44d26",
+       bloxd_wasm_workers: () => "c3e0f9c9d3450b1b58eeeabddc49241fbc8ffeffe05a0e2cd8e7c4d8847442a4",
+       bloxd_wasm_models: () => "77704cdcef014d8f1aa72c519a652297b25e80d6cafc34478014bd291b97f37e",
+       bloxd_wasm_webgpu: () => "603e3bc645f5c3d0c95d7f24327b193ab3d090814bbdb68c6ad2438495025f9d",
+       bloxd_wasm_webgl: () => "8157beb90345cb7dcaa6d28e4816f7951234731f38d297579b1de22172034862",
+       bloxd_wasm_webgl1: () => "ac00e7c2f783046413779c397bcab25db7aaf3ceb5743e39ab05f2fc699b197b",
+       bloxd_wasm_replay: () => "a585d75239773f442a258771a295653a54d6e99e4b872f0a2a4512a7fceaca4a",
+       bloxd_wasm_recorder: () => "1c3da6ac9b656d482455def4919768325136d09e94b6b18afdb7ecc55287a265",
+       bloxd_wasm_anim: () => "95aba8d7de72cdcce081f679def0f8248e845944fba77b065315103503401e53",
+       bloxd_wasm_textures: () => "378f24688349d1dc6f860f72e8fafaf79ead5d9fccc14eb96ca959801b415d82",
+       bloxd_wasm_shader_pack: () => "fa64ff9ddba4399ee91af4ff8bb1c0cc63df7e9ee2ebb4a275be7918ce6cdefd"
+     };
+     var NW = OW(5427);
+ ... (134 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/158.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/158.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056)

#### 1. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L4-L8` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/158.js#L4-L9) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/158.js#L4-L8)

```diff
-   7325: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       BloxdDiscordSDK: () => Te,
-       DiscordLoginCancelledError: () => fe,
-       discordPopupTimeoutMs: () => qe
+   37265: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => LW,
+       e: () => wW,
+       i: () => PW,
+       m: () => ZW
```

#### 2. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L10-L21` → after: `L11-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L11-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/158.js#L11-L111) · [Before (L10-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/158.js#L10-L21)

```diff
-     var ye = He(153),
-       be = He(1178),
-       Me = He(1083),
-       Ke = He(1097),
-       Ue = He.n(Ke),
-       Fe = He(1141),
-       Je = He(35),
-       oe = He(610),
-       Re = He(1340),
-       ke = He(1150);
-     const qe = 6e5;
-     class fe extends Error {
+     var mW = OW(37257),
+       EW = OW(13);
+     const NW = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
+ 
+     function PW(WW) {
+       if (WW instanceof WebAssembly.RuntimeError) return !0;
+       const iW = WW instanceof Error ? WW.stack : void 0;
+       return "string" === typeof iW && NW.test(iW)
+     }
+ 
+     function LW(WW, iW, OW) {
+       var EW;
+       const PW = WW instanceof Error ? WW.name : "thrown",
+         LW = (WW instanceof Error && null !== (EW = WW.stack) && void 0 !== EW ? EW : "").split("\n").filter((WW => NW.test(WW))).slice(0, 8).map((WW => WW.trim())),
+         cW = null === iW ? "wasm memory unknown" : `wasm memory ${Math.round(iW/2**20)} MB`,
+         wW = null === OW.panic ? "" : `, panic: ${(0,mW.h)(OW.panic)}`,
+ ... (85 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L23` → after: `L113-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L113-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/158.js#L113-L128) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/158.js#L23)

```diff
-         super(...arguments), this.name = Me.discordLoginCancelledErrorName
+         if (SW()) try {
+           this.worker = TW(), lW(UW, this.worker, ["error", () => {
+             this.failed = !0
+           }])
+         } catch {
+           this.stop()
+         }
+       }
+       take() {
+         const WW = this.worker;
+         if (this.worker = null, null !== WW && this.failed) throw lW(jW, WW, []), new Error("it did not run");
+         return WW
+       }
+       stop() {
+         const WW = this.worker;
+         this.worker = null, null !== WW && lW(jW, WW, [])
```

#### 4. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L27-L96` → after: `L132-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L132-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/158.js#L132-L211) · [Before (L27-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/158.js#L27-L96)

```diff
-       constructor() {
-         this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirect … [truncated]
-         const ee = new URL(this.discordRedirectUrl).origin;
-         window.addEventListener("message", (ie => {
-           var He;
-           if (ie.origin !== ee || "oauth_authentication_discord" !== (null === (He = ie.data) || void 0 === He ? void 0 : He.type)) return;
-           if ("string" !== typeof ie.data.code || !ie.data.code) return void this.failPopup(new fe("Discord authentication was cancelled on Discord"));
-           const ye = this.popupWindowPromiseResolve;
-           this.resetPopupState(), null === ye || void 0 === ye || ye(ie.data.code)
-         }))
-       }
-       resetPopupState() {
-         null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseRe … [truncated]
-       }
-       failPopup(ee) {
-         var ie;
- ... (54 more removed lines; see GitHub link above)
+       decoded;
+       worker;
+       reject;
+       constructor(WW, iW, OW, mW, NW) {
+         try {
+           this.worker = NW?.take() ?? TW()
+         } catch (wW) {
+           throw KW = !0, new Error(`The zstd decoder's worker did not start: ${(0,LW.h)(wW)}`)
+         }
+         const PW = this.worker;
+         this.decoded = (0, EW.l)(((iW, EW) => {
+           this.reject = EW;
+           const NW = (WW, iW) => {
+             lW(UW, PW, [WW, iW])
+           };
+           NW("message", (WW => {
+ ... (64 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L98-L100` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/158.js#L213) · [Before (L98-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/158.js#L98-L100)

```diff
-           retries: 0
-         }, ie.getMetricsCookies())), {
-           retries: 3
+           __proto__: null
```

#### 6. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L102-L110` → after: `L215-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L215-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/158.js#L215-L289) · [Before (L102-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/158.js#L102-L110)

```diff
-         return Je.c.setItem(this.bloxdDiscordRefreshTokenKey, ye), He
-       }
-       hasCurrentUser() {
-         const ee = Je.c.getItem(this.bloxdDiscordRefreshTokenKey);
-         return !(0, oe.P)(ee)
-       }
-       async getCurrentUser(ee) {
-         const ie = Je.c.getItem(this.bloxdDiscordRefreshTokenKey);
-         if (!ie) return null;
+         return WW
+       }(),
+       oW = function() {
+         try {
+           return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== uW && (0, PW.j)(HW, "Response", !0) && (0, PW.j)(nW, "ReadableStream", !0) && (0, PW.j)(uW.enqueue, "enqueue") && (0, PW.j)(uW.close, "close") && (0, PW.j)(uW.e … [truncated]
+         } catch {
+           return !1
+         }
+       }();
+     async function dW(WW, iW, OW, mW, NW, PW, wW) {
+       const tW = new hW(iW),
+         {
+           controller: ZW,
+           compiled: xW
+         } = function(WW) {
+           try {
+ ... (59 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L113` → after: `L292-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L292-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/158.js#L292-L383) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/158.js#L113)

```diff
-           const ye = await Ue()((async () => {
+           PW = await fetch(WW, {
+             signal: OW
+           })
+         } catch (TW) {
+           throw new Error(`Fetching ${WW} failed: ${(0,LW.h)(TW)}`)
+         }
+         const {
+           ok: wW,
+           status: tW,
+           body: ZW
+         } = function(WW, iW) {
+           try {
+             const {
+               ok: WW,
+               status: OW
+             } = iW;
+ ... (76 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L115-L119` → after: `L385-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L385-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/158.js#L385-L441) · [Before (L115-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/158.js#L115-L119)

```diff
-               return await (0, Me.postJsonWithMetricsCookiesAndJsonResponse)(`${Fe.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
-                 refreshToken: ie
-               }, {
-                 retries: 0
-               }, ee.getMetricsCookies())
+               const OW = fetch(WW.href, {
+                   cache: "only-if-cached",
+                   mode: "same-origin",
+                   signal: iW.signal
+                 }),
+                 NW = await (0, EW.t)([OW, mW]);
+               return !!NW?.ok && ((0, cW.P)(NW.body.cancel()), !0)
+             } catch {
+               return !1
+             } finally {
+               clearTimeout(OW)
+             }
+           }(WW.url())) return NW?.stop(), await async function(WW, iW, OW, mW) {
+           let EW = !1;
+           const NW = OW && {
+             sha256: OW.sha256,
+ ... (41 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L121-L122` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/158.js#L443) · [Before (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/158.js#L121-L122)

```diff
-               if (pe(He)) throw new(Ue().AbortError)(He);
-               throw He
+               console.warn(`Bloxd wasm: ${OW} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, EW)
```

#### 10. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L124-L141` → after: `L445-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L445-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/158.js#L445-L654) · [Before (L124-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/158.js#L124-L141)

```diff
-           }), {
-             retries: 3
-           });
-           He = ye.accessToken, Je.c.setItem(this.bloxdDiscordRefreshTokenKey, ye.refreshToken)
-         } catch (ye) {
-           return pe(ye) ? (Je.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", ye), null)
-         }
-         return {
-           accessToken: He
-         }
-       }
-       signOut() {
-         this.failPopup(new fe("Signed out of Discord during login")), Je.c.removeItem(this.bloxdDiscordRefreshTokenKey)
-       }
-     }
- 
- ... (2 more removed lines; see GitHub link above)
+           }(WW.url()), OW.onDownloaded?.()
+         }
+       })
+     }
+     async function XW(WW, iW, OW, mW) {
+       if (!oW || !SW()) return null;
+       const EW = WW.url(),
+         NW = `${EW.href}${vW}`;
+       try {
+         return await (0, cW.Z)(NW, ((WW, EW, PW) => dW(NW, iW, WW, EW, PW, OW, mW)))
+       } catch (PW) {
+         return console.warn(`${(0,LW.h)(PW)}: loading ${EW.href} instead`), null
+       }
+     }
+     let BW = null,
+       qW = !1;
+ ... (194 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/159.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/159.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb)

#### 1. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/159.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/159.js#L4)

```diff
-   7327: (ee, ie, He) => {
+   7637: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/159.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/159.js#L6)

```diff
-       BloxdFirebaseSdk: () => ke
+       loadShaderPackTextures: () => PW,
+       shaderPackTextures: () => LW
```

#### 3. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L8-L161` → after: `L9-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/159.js#L9-L26) · [Before (L8-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/159.js#L8-L161)

```diff
-     var ye = He(1892),
-       be = He(3142),
-       Me = He(103),
-       Ke = He(97),
-       Ue = He(1682),
-       Fe = He(2095);
-     const Je = {
-       apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
-       authDomain: "bloxd-ee1aa.firebaseapp.com",
-       projectId: "bloxd-ee1aa",
-       storageBucket: "bloxd-ee1aa.appspot.com",
-       messagingSenderId: "758847442742",
-       appId: "1:758847442742:web:7bb74eb261641e30f02d97"
-     };
-     var oe = He(1814),
-       Re = He(1720);
- ... (138 more removed lines; see GitHub link above)
+     var mW = OW(5970);
+     let EW = null,
+       NW = null;
+ 
+     function PW() {
+       return NW ??= Promise.all([OW.e(85), OW.e(126)]).then((() => OW(42015))).then((WW => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: iW,
+           textureNameToIndex: OW,
+           textureAnimationData: NW
+         } = WW;
+         return EW ??= (0, mW.o)(OW, NW, iW), EW
+       })), NW
+     }
+ 
+     function LW() {
+ ... (2 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/160.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/160.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786)

#### 1. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/160.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/160.js#L2)

```diff
- export const ids = [160];
+ export const ids = [159, 160];
```

#### 2. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/160.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/160.js#L4)

```diff
-   7335: (ee, ie, He) => {
+   7656: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6` → after: `L6-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/160.js#L6-L19) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/160.js#L6)

```diff
-       BloxdDiscordActivitySdk: () => Be
+       forgetShaderPackActiveHint: () => HW,
+       isOtherApiVersion: () => yW,
+       isShaderPackActive: () => MW,
+       isShaderPackChangePending: () => YW,
+       markShaderPackChangePending: () => SW,
+       pageShaderPackValidationVersion: () => TW,
+       reconcileStoredShaderPackHint: () => hW,
+       removeShaderPack: () => sW,
+       replaceShaderPack: () => jW,
+       saveShaderPack: () => bW,
+       shaderPackNeedsCheck: () => JW,
+       storedPackOutcome: () => KW,
+       storedShaderPackFiles: () => xW,
+       toStoredShaderPack: () => ZW
```

#### 4. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L8-L133` → after: `L21-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L21-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/160.js#L21-L36) · [Before (L8-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/160.js#L8-L133)

```diff
-     var ye = He(7342),
-       be = He(1178),
-       Me = He(1127),
-       Ke = He(610),
-       Ue = He(1196),
-       Fe = He(1768),
-       Je = He(1305),
-       oe = He(780),
-       Re = He(18),
-       ke = He(1150),
-       qe = He(2418),
-       fe = function(ee) {
-         return ee.APPLICATION_COMMANDS = "applications.commands", ee.IDENTIFY = "identify", ee.EMAIL = "email", ee.GUILDS = "guilds", ee.READ_DM_CHANNELS = "dm_channels.read", ee.WRITE_ACTIVITIES = "rpc.activities.write", ee
-       }(fe || {}),
-       Te = function(ee) {
-         return ee[ee.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", ee[ee.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", ee[ee.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", ee[ee.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", ee[ee.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", ee[ee.RATELIMITE … [truncated]
- ... (110 more removed lines; see GitHub link above)
+     var mW = OW(5970),
+       EW = OW(5961),
+       NW = OW(39),
+       PW = OW(4666),
+       LW = OW(7659),
+       cW = OW(7637);
+     const wW = "shaderPackChangePending";
+     let tW = null;
+ 
+     function ZW(WW, iW, OW) {
+       return {
+         manifest: WW.manifest,
+         files: (0, mW.A)(WW.files),
+         validation: iW,
+         ...OW && {
+           listing: OW
```

#### 5. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L136-L153` → after: `L39-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L39-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/160.js#L39-L98) · [Before (L136-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/160.js#L136-L153)

```diff
-       async getGameVerbAndTitle(ee) {
-         var ie;
-         const He = "Playing";
-         if ((0, Ke.P)(ee)) return {
-           verb: He,
-           title: "Bloxd"
-         };
-         const ye = (0, oe.k)(ee);
-         var be;
-         if (null !== ye) return {
-           verb: null !== (be = ze[ee]) && void 0 !== be ? be : Xe[ye.type],
-           title: await (0, Me.t)(Ue.c.ENGLISH, ye.title)
-         };
-         const Fe = await (0, qe.e)(ee);
-         return {
-           verb: null !== (ie = Fe && Xe[Fe.gameCategory]) && void 0 !== ie ? ie : He,
- ... (2 more removed lines; see GitHub link above)
+     }
+ 
+     function xW(WW) {
+       return Object.keys(WW.files).map((iW => ({
+         path: iW,
+         source: WW.files[iW]
+       })))
+     }
+     let lW = Promise.resolve();
+ 
+     function AW(WW) {
+       const iW = lW.then(WW);
+       return lW = iW.catch((() => {})), iW
+     }
+ 
+     function bW(WW, iW) {
+ ... (44 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L155-L271` → after: `L100-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L100-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/160.js#L100-L161) · [Before (L155-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/160.js#L155-L271)

```diff
-       getCurrentChannelType() {
-         const {
-           channelId: ee,
-           guildId: ie
-         } = this.getCurrentChannelAndGuild();
-         return null !== ie ? be.b.GUILD : null !== ee ? be.b.DM : null
-       }
-       getRequiredScopeForCurrentChannel() {
-         const ee = this.getCurrentChannelType(),
-           ie = [fe.APPLICATION_COMMANDS, fe.IDENTIFY, fe.EMAIL, fe.GUILDS, fe.WRITE_ACTIVITIES];
-         switch (ee) {
-           case be.b.DM:
-           case be.b.GUILD:
-             return [...ie];
-           default:
-             throw new Error(`Unknown Discord channel type: ${ee}`)
- ... (101 more removed lines; see GitHub link above)
+     }
+ 
+     function SW() {
+       NW.j.setItem(wW, performance.timeOrigin)
+     }
+ 
+     function YW() {
+       return NW.j.getItem(wW) === performance.timeOrigin
+     }
+ 
+     function yW(WW) {
+       return !(0, EW.g)(WW.manifest.apiVersion)
+     }
+ 
+     function TW(WW) {
+       return tW ??= WW.IH((0, cW.shaderPackTextures)()), tW
+ ... (46 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/161.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/161.js` (211 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907)

#### 1. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L4)

```diff
-   7342: (ee, ie, He) => {
+   35086: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L7)

```diff
-       d: () => LH
+       c: () => PW
```

#### 3. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L9-L10` → after: `L9-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L9-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L9-L58) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L9-L10)

```diff
-     var ye = {};
-     He.r(ye), He.d(ye, {
+     var mW = OW(248),
+       EW = OW(131),
+       NW = OW(35089);
+ 
+     function PW() {
+       var WW, iW, OW;
+       return null !== (WW = (0, mW.m)(null !== (iW = null === (OW = (0, EW.j)()) || void 0 === OW ? void 0 : OW.renderer) && void 0 !== iW ? iW : null, (0, EW.f)())) && void 0 !== WW ? WW : "unknown"
+     }
+ 
+     function LW(WW, iW, OW, mW, EW) {
+       const PW = null === iW ? "untimed" : `${Math.round(iW)} ms`;
+       return `frames stalled, ${OW}, gpu ${(0,NW.d)(EW)}, blocking ${PW}, drawn ${Math.round(WW)} ms apart, timers ${mW.timers}, timer gap ${Math.round(mW.longestGapMs)} ms`
+     }
+   },
+   40267: (WW, iW, OW) => {
+     OW.d(iW, {
+ ... (34 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L15-L28` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L63) · [Before (L15-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L15-L28)

```diff
-       o: () => NH,
-       r: () => Ay,
-       t: () => ey,
-       u: () => ay,
-       w: () => Wy,
-       y: () => Vy,
-       A: () => rH,
-       E: () => Zy,
-       G: () => Py,
-       K: () => Yy,
-       O: () => QH,
-       M: () => yy,
-       S: () => Dy,
-       U: () => wy
+       n: () => cW
```

#### 5. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L30` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L65-L66) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L30)

```diff
-     var be = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};
+     var mW = OW(182),
+       EW = OW(5318);
```

#### 6. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L33` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L69) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L33)

```diff
-       return ee && ee.__esModule && Object.prototype.hasOwnProperty.call(ee, "default") ? ee.default : ee
+       return PW(WW) === mW.e.gameOrPluginOnPlayerAuthRejected.code
```

#### 7. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L42` → after: `L72-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L72-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L72-L74) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L42)

```diff
-       function ye() {}
+     function PW(WW) {
+       return "object" === typeof WW && null !== WW ? WW.code : void 0
+     }
```

#### 8. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L44-L46` → after: `L76-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L76-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L76-L79) · [Before (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L44-L46)

```diff
-       function be(ee, ie, He) {
-         this.oR = ee, this.context = ie, this.once = He || !1
-       }
+     function LW(WW) {
+       var iW;
+       return null !== (iW = Object.keys(EW.d).find((iW => EW.d[iW] === WW))) && void 0 !== iW ? iW : null
+     }
```

#### 9. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L48-L53` → after: `L81-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L81-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L81-L106) · [Before (L48-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L48-L53)

```diff
-       function Me(ee, ie, ye, Me, Ke) {
-         if ("function" !== typeof ye) throw new TypeError("The listener must be a function");
-         var Ue = new be(ye, Me || ee, Ke),
-           Fe = He ? He + ie : ie;
-         return ee._events[Fe] ? ee._events[Fe].oR ? ee._events[Fe] = [ee._events[Fe], Ue] : ee._events[Fe].push(Ue) : (ee._events[Fe] = Ue, ee._eventsCount++), ee
-       }
+     function cW(WW) {
+       return "notWhitelisted" === WW ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
+     }
+     const wW = {
+       private: "customLobby:cantJoinPrivate",
+       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
+       banned: "customLobby:cantJoinBanned",
+       adminLocked: "customLobby:cantJoinAdminLocked"
+     }
+   },
+   35089: (WW, iW, OW) => {
+     function mW(WW) {
+       return String(WW).replace(/\d/g, (WW => String.fromCharCode(97 + Number(WW))))
+     }
+     OW.d(iW, {
+       d: () => mW
+ ... (10 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L55-L56` → after: `L108-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L108-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L108-L112) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L55-L56)

```diff
-       function Ke(ee, ie) {
-         0 === --ee._eventsCount ? ee._events = new ye : delete ee._events[ie]
+     function EW(WW) {
+       const iW = WW.endsWith(mW.j);
+       return {
+         text: (iW ? WW.slice(0, -mW.j.length) : WW) || null,
+         dropsCache: iW
```

#### 11. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L59-L60` → after: `L123-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L123-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L123-L145) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L59-L60)

```diff
-       function Ue() {
-         this._events = new ye, this._eventsCount = 0
+     function cW(WW) {
+       var iW;
+       let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+       const EW = null !== (iW = Object.keys(mW.e).find((iW => mW.e[iW].code === WW))) && void 0 !== iW ? iW : null;
+       if (null === EW) return {
+         code: WW,
+         name: EW,
+         reason: null !== OW && void 0 !== OW ? OW : `${NW}\nCode: ${WW}`,
+         canReconnect: !1,
+         automaticallyReconnect: !1,
+         requiresRefresh: !1
+       };
+       const {
+         text: PW,
+         canReconnect: cW = !1
+       } = mW.e[EW], wW = WW === mW.e.outdatedVersion.code || WW === mW.e.loadRecaptchaError.code;
+ ... (7 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L62-L198` → after: `L147-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L147-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L147-L157) · [Before (L62-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L62-L198)

```diff
-       Object.create && (ye.prototype = Object.create(null), (new ye).__proto__ || (He = !1)), Ue.prototype.eventNames = function() {
-         var ee, ye, be = [];
-         if (0 === this._eventsCount) return be;
-         for (ye in ee = this._events) ie.call(ee, ye) && be.push(He ? ye.slice(1) : ye);
-         return Object.getOwnPropertySymbols ? be.concat(Object.getOwnPropertySymbols(ee)) : be
-       }, Ue.prototype.listeners = function(ee) {
-         var ie = He ? He + ee : ee,
-           ye = this._events[ie];
-         if (!ye) return [];
-         if (ye.oR) return [ye.oR];
-         for (var be = 0, Me = ye.length, Ke = new Array(Me); be < Me; be++) Ke[be] = ye[be].oR;
-         return Ke
-       }, Ue.prototype.listenerCount = function(ee) {
-         var ie = He ? He + ee : ee,
-           ye = this._events[ie];
-         return ye ? ye.oR ? 1 : ye.length : 0
- ... (121 more removed lines; see GitHub link above)
+     }
+   },
+   42158: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => mW,
+       g: () => tW,
+       j: () => PW,
+       m: () => EW,
+       n: () => LW,
+       p: () => wW
+     });
```

#### 13. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L200-L259` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L159-L160) · [Before (L200-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L200-L259)

```diff
-       constructor(ee) {
-         var ie;
-         super(), ie = this, this.issues = [], this.addIssue = ee => {
-           this.issues = [...this.issues, ee]
-         }, this.addIssues = function() {
-           let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
-           ie.issues = [...ie.issues, ...ee]
-         };
-         const He = new.target.prototype;
-         Object.setPrototypeOf ? Object.setPrototypeOf(this, He) : this.__proto__ = He, this.name = "ZodError", this.issues = ee
-       }
-       get errors() {
-         return this.issues
-       }
-       format(ee) {
-         const ie = ee || function(ee) {
- ... (44 more removed lines; see GitHub link above)
+       constructor() {
+         super(...arguments), this.name = "CoreCorruption"
```

#### 14. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L261-L262` → after: `L162-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L162-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L162-L264) · [Before (L261-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L261-L262)

```diff
-       get formErrors() {
-         return this.flatten()
+     }
+ 
+     function EW(WW) {
+       return WW instanceof RangeError && /call stack/i.test(WW.message) || WW instanceof Error && "InternalError" === WW.name && /recursion/i.test(WW.message)
+     }
+     const NW = /wasm:\/\/|wasm-function\[|\[wasm code\]/;
+ 
+     function PW(WW) {
+       var iW;
+       return WW instanceof WebAssembly.RuntimeError || WW instanceof mW || EW(WW) && NW.test(null !== (iW = WW.stack) && void 0 !== iW ? iW : "")
+     }
+ 
+     function LW(WW, iW) {
+       if (PW(WW)) throw WW;
+       console.error(iW, WW)
+     }
+ ... (87 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L265-L266` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L268-L269) · [Before (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L265-L266)

```diff
-     qe.create = ee => new qe(ee);
-     const fe = (ee, ie) => {
+ 
+     function gW(WW) {
```

#### 16. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L268-L318` → after: `L271-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L271-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L271-L276) · [Before (L268-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L268-L318)

```diff
-       switch (ee.code) {
-         case ke.invalid_type:
-           He = ee.received === oe.undefined ? "Required" : `Expected ${ee.expected}, received ${ee.received}`;
-           break;
-         case ke.invalid_literal:
-           He = `Invalid literal value, expected ${JSON.stringify(ee.expected,Ue.jsonStringifyReplacer)}`;
-           break;
-         case ke.unrecognized_keys:
-           He = `Unrecognized key(s) in object: ${Ue.joinValues(ee.keys,", ")}`;
-           break;
-         case ke.invalid_union:
-           He = "Invalid input";
-           break;
-         case ke.invalid_union_discriminator:
-           He = `Invalid discriminator value. Expected ${Ue.joinValues(ee.options)}`;
-           break;
- ... (35 more removed lines; see GitHub link above)
+       try {
+         iW = WW.getContext("webgl", {
+           powerPreference: MW.b
+         })
+       } catch {
+         iW = null
```

#### 17. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L320-L321` → after: `L278-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L278-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L278-L284) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L320-L321)

```diff
-       return {
-         message: He
+       if (null === iW) return null;
+       let OW = null;
+       try {
+         const WW = iW.getParameter(iW.MAX_TEXTURE_SIZE);
+         OW = "number" === typeof WW && WW > 0 ? WW : null
+       } catch {
+         OW = null
```

#### 18. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L323-L324` → after: `L286-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L286-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L286-L292) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L323-L324)

```diff
-     };
-     let Te = fe;
+       try {
+         var mW;
+         null === (mW = iW.getExtension("WEBGL_lose_context")) || void 0 === mW || mW.loseContext()
+       } catch {}
+       return OW
+     }
+     const DW = new Set(["android_arm", "chromeos_other", "chromeos_intel", "windows_intel_low", "ios"]);
```

#### 19. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L327` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L295) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L327)

```diff
-       return Te
+       return "ios" === (0, xW.getOperatingSystem)() ? "ios" : "other"
```

#### 20. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L329-L350` → after: `L297-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L297-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L297-L300) · [Before (L329-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L329-L350)

```diff
-     const Xe = ee => {
-       const {
-         data: ie,
-         path: He,
-         errorMaps: ye,
-         issueData: be
-       } = ee, Me = [...He, ...be.path || []], Ke = {
-         ...be,
-         path: Me
-       };
-       let Ue = "";
-       const Fe = ye.filter((ee => !!ee)).slice().reverse();
-       for (const Je of Fe) Ue = Je(Ke, {
-         data: ie,
-         defaultError: Ue
-       }).message;
- ... (6 more removed lines; see GitHub link above)
+     const pW = "mali_valhall",
+       fW = new Set(["nvidia_pre_turing"]),
+       CW = new Set(["intel_gen7_8"]),
+       XW = new Set(["powervr_rogue"]);
```

#### 21. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L352-L359` → after: `L302-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L302-L303) · [Before (L352-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L352-L359)

```diff
-     function ze(ee, ie) {
-       const He = Xe({
-         issueData: ie,
-         data: ee.data,
-         path: ee.path,
-         errorMaps: [ee.common.contextualErrorMap, ee.schemaErrorMap, pe(), fe].filter((ee => !!ee))
-       });
-       ee.common.issues.push(He)
+     function BW(WW, iW, OW) {
+       return DW.has(WW) ? "android_arm" === WW && iW === pW && "mobileAndroid" !== OW ? "webgpu_default" : "webgl_default" : null
```

#### 22. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L361-L403` → after: `L305-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L305-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L305-L311) · [Before (L361-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L361-L403)

```diff
-     class Be {
-       constructor() {
-         this.value = "valid"
-       }
-       yT() {
-         "valid" === this.value && (this.value = "yT")
-       }
-       abort() {
-         "aborted" !== this.value && (this.value = "aborted")
-       }
-       static mergeArray(ee, ie) {
-         const He = [];
-         for (const ye of ie) {
-           if ("aborted" === ye.status) return Ee;
-           "yT" === ye.status && ee.yT(), He.push(ye.value)
-         }
- ... (27 more removed lines; see GitHub link above)
+ 
+     function qW(WW) {
+       return function(WW) {
+         try {
+           return WW()
+         } catch {
+           return null
```

#### 23. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L407-L430` → after: `L389-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L389-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L389-L402) · [Before (L407-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L407-L430)

```diff
-     const Ee = Object.freeze({
-         status: "aborted"
-       }),
-       ge = ee => ({
-         status: "yT",
-         value: ee
-       }),
-       Oe = ee => ({
-         status: "valid",
-         value: ee
-       }),
-       de = ee => "aborted" === ee.status,
-       We = ee => "yT" === ee.status,
-       te = ee => "valid" === ee.status,
-       Ze = ee => "undefined" !== typeof Promise && ee instanceof Promise;
-     var we;
- ... (8 more removed lines; see GitHub link above)
+ 
+     function GW() {
+       let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+       if ((0, LW.t)("render") && "webgl1" === (0, LW.p)("renderer")) return "webgl1";
+       const iW = [() => new URLSearchParams(window.location.search).get(tW.e), () => bW.i.getItem(tW.h), () => {
+         const iW = localStorage.getItem(uW);
+         return null !== iW && WW && localStorage.removeItem(uW), "1" === iW ? "webgl2" : null
+       }];
+       for (const OW of iW) {
+         let WW = null;
+         try {
+           WW = aW(OW())
+         } catch {}
+         if (null !== WW) return WW
```

#### 24. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L432-L433` → after: `L404-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L404-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L404-L411) · [Before (L432-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L432-L433)

```diff
-       get path() {
-         return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
+       return null
+     }
+ 
+     function IW(WW) {
+       try {
+         return WW()
+       } catch {
+         return !1
```

#### 25. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L436-L447` → after: `L414-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L414-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L414-L450) · [Before (L436-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L436-L447)

```diff
-     const Pe = (ee, ie) => {
-       if (te(ie)) return {
-         success: !0,
-         data: ie.value
-       };
-       if (!ee.common.issues.length) throw new Error("Validation failed but no issues detected.");
-       return {
-         success: !1,
-         get error() {
-           if (this._error) return this._error;
-           const ie = new qe(ee.common.issues);
-           return this._error = ie, this._error
+ 
+     function aW(WW) {
+       return "lite" === WW ? "webgpu" : "webgl2" === WW || "babylon" === WW ? "webgl" : null
+     }
+ 
+     function rW(WW) {
+       return "none" === WW || "compatibility_mode" === WW
+     }
+     async function zW() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RW();
+       const iW = await async function(WW) {
+         const iW = QW(WW),
+           {
+             source: OW
+           } = iW,
+           mW = !iW.asked,
+ ... (21 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L450` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L494) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L450)

```diff
-     };
+     }
```

#### 27. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L452-L458` → after: `L496-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L496-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L496-L499) · [Before (L452-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L452-L458)

```diff
-     function Ae(ee) {
-       if (!ee) return {};
-       const {
-         errorMap: ie,
-         invalid_type_error: He,
-         required_error: ye,
-         description: be
+     function FW(WW, iW) {
+       let {
+         source: OW,
+         asked: mW
```

#### 28. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L460-L463` → after: `L501-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L501-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L501-L516) · [Before (L460-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L460-L463)

```diff
-       if (ie && (He || ye)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
-       if (ie) return {
-         errorMap: ie,
-         description: be
+       return mW || "default" === OW ? (0, hW.k)(mW, WW.defaultCompatibility) : void 0
+     }
+ 
+     function QW(WW) {
+       const iW = WW.override(),
+         OW = WW.webGpuSetting(),
+         mW = null === iW && !0 !== OW && WW.kA(),
+         EW = null !== iW || null !== OW || mW ? null : WW.claimed(),
+         NW = null !== iW ? "override" : !0 === OW ? "setting" : mW ? "pack" : !1 === OW ? "setting" : null !== EW ? "claim" : "default",
+         PW = function(WW) {
+           return "override" === WW || "setting" === WW
+         }(NW);
+       if ("webgl" === iW || "webgl1" === iW || "webgl" === EW || "setting" === NW && !1 === OW) return {
+         source: NW,
+         asked: PW,
+         refused: "not_requested"
```

#### 29. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L465-L473` → after: `L518-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L518-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L518-L538) · [Before (L465-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L465-L473)

```diff
-       return {
-         errorMap: (ee, ie) => "invalid_type" !== ee.code ? {
-           message: ie.defaultError
-         } : "undefined" === typeof ie.data ? {
-           message: null !== ye && void 0 !== ye ? ye : ie.defaultError
-         } : {
-           message: null !== He && void 0 !== He ? He : ie.defaultError
-         },
-         description: be
+       if (!WW.gpu) return {
+         source: NW,
+         asked: PW,
+         refused: "no_webgpu_api"
+       };
+       const LW = "default" === NW && WW.heldBack();
+       if (LW && !WW.windows()) return {
+         source: NW,
+         asked: PW,
+         refused: "webgl_holdback"
+       };
+       const cW = PW ? null : WW.offAfterLoss("pack" === NW) ? "off_after_loss" : WW.fewWasmMemories() ? "few_wasm_memories" : null;
+       return null !== cW ? {
+         source: NW,
+         asked: PW,
+         refused: LW ? "webgl_holdback" : cW
+ ... (5 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L476-L645` → after: `L541-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L541-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L541-L554) · [Before (L476-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L476-L645)

```diff
-     class Ye {
-       constructor(ee) {
-         this.spa = this.safeParseAsync, this._def = ee, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine  … [truncated]
-       }
-       get description() {
-         return this._def.description
-       }
-       _getType(ee) {
-         return Re(ee.data)
-       }
-       _getOrReturnCtx(ee, ie) {
-         return ie || {
-           common: ee.parent.common,
-           data: ee.data,
-           parsedType: Re(ee.data),
-           schemaErrorMap: this._def.errorMap,
- ... (154 more removed lines; see GitHub link above)
+ 
+     function Wi() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
+           ...RW(),
+           override: () => GW(!1)
+         },
+         iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xW.isWebKit,
+         OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VW;
+       try {
+         if (!iW()) return !1;
+         const mW = QW(WW);
+         if (!("gpu" in mW) || mW.heldBack) return !1;
+         const EW = "default" === mW.source ? BW(OW(), "apple", lW.siteUsed) : null;
+         return null === EW || !WW.gpuClassOnWebGl(EW)
```

#### 31. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L647-L671` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L556) · [Before (L647-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L647-L671)

```diff
-         const ie = "function" === typeof ee ? ee : () => ee;
-         return new ti({
-           ...Ae(this._def),
-           innerType: this,
-           catchValue: ie,
-           typeName: ai.ZodCatch
-         })
-       }
-       describe(ee) {
-         return new(0, this.constructor)({
-           ...this._def,
-           description: ee
-         })
-       }
-       pipe(ee) {
-         return Pi.create(this, ee)
- ... (9 more removed lines; see GitHub link above)
+         return console.warn("[bloxd-wasm-client] the WebGPU guess failed: guessing WebGL2", mW), !1
```

#### 32. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L674-L876` → after: `L559-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L559-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L559-L566) · [Before (L674-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L674-L876)

```diff
-     const Ve = /^c[^\s-]{8,}$/i,
-       ae = /^[a-z][a-z0-9]*$/,
-       ce = /^[0-9A-HJKMNP-TV-Z]{26}$/,
-       xe = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
-       Le = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
-     let Ce;
-     const ve = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
-       ue = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1, … [truncated]
-     class me extends Ye {
-       _parse(ee) {
-         this._def.coerce && (ee.data = String(ee.data));
-         if (this._getType(ee) !== oe.string) {
-           const ie = this._getOrReturnCtx(ee);
-           return ze(ie, {
-             code: ke.invalid_type,
-             expected: oe.string,
- ... (187 more removed lines; see GitHub link above)
+     let ii = !1;
+     async function Oi(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RW();
+       if (null === WW) return null;
+       const OW = await zW(iW);
+       return ii = !("missing" in OW) && "webgpu" === OW.backend && "claim" === OW.source, "missing" in OW ? OW : {
+         ...OW,
+         load: WW[OW.backend]
```

#### 33. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L878` → after: `L568-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L568-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L568-L577) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L878)

```diff
-       datetime(ee) {
+     }
+     async function mi(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RW().gpu,
+         mW = arguments.length > 3 ? arguments[3] : void 0;
+       if ("webgpu" !== WW.backend) return !1;
+       const EW = Zi(WW, iW, "indirectDraws", "off", "on");
+       if (null !== EW) return EW;
+       if (null !== WW.adapter && (0, UW.n)(WW.adapter, mW)) return !0;
+       if (null === OW) return !1;
+       try {
```

#### 34. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L880-L1004` → after: `L579-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L579-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L579-L584) · [Before (L880-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L880-L1004)

```diff
-         return "string" === typeof ee ? this._addCheck({
-           kind: "datetime",
-           precision: null,
-           offset: !1,
-           message: ee
-         }) : this._addCheck({
-           kind: "datetime",
-           precision: "undefined" === typeof(null === ee || void 0 === ee ? void 0 : ee.precision) ? null : null === ee || void 0 === ee ? void 0 : ee.precision,
-           offset: null !== (ie = null === ee || void 0 === ee ? void 0 : ee.offset) && void 0 !== ie && ie,
-           ...we.errToObj(null === ee || void 0 === ee ? void 0 : ee.message)
-         })
-       }
-       regex(ee, ie) {
-         return this._addCheck({
-           kind: "regex",
-           regex: ee,
- ... (109 more removed lines; see GitHub link above)
+         const WW = await (0, yW.o)(OW.requestAdapter({
+           powerPreference: "low-power"
+         }).then((async WW => (null !== WW && await (0, KW.c)(WW), WW))), Si, `the low-power requestAdapter didn't settle in ${Si/1e3} s`);
+         return (0, UW.n)(null !== (NW = null === WW || void 0 === WW ? void 0 : WW.info) && void 0 !== NW ? NW : {}, mW)
+       } catch (PW) {
+         return PW instanceof yW.g
```

#### 35. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1009-L1012` → after: `L596-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L596-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L596-L598) · [Before (L1009-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1009-L1012)

```diff
-       const He = (ee.toString().split(".")[1] || "").length,
-         ye = (ie.toString().split(".")[1] || "").length,
-         be = He > ye ? He : ye;
-       return parseInt(ee.toFixed(be).replace(".", "")) % parseInt(ie.toFixed(be).replace(".", "")) / Math.pow(10, be)
+       if ("webgpu" !== WW.backend) return !1;
+       const OW = Zi(WW, iW, "skyOrder", "early", "last");
+       return null !== OW ? OW : null !== WW.adapter && (0, NW.f)(WW.adapter.vendor, WW.adapter.architecture) === pW
```

#### 36. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1014-L1074` → after: `L600-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L600-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L600-L651) · [Before (L1014-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1014-L1074)

```diff
-     me.create = ee => {
-       var ie;
-       return new me({
-         checks: [],
-         typeName: ai.ZodString,
-         coerce: null !== (ie = null === ee || void 0 === ee ? void 0 : ee.coerce) && void 0 !== ie && ie,
-         ...Ae(ee)
-       })
-     };
-     class Se extends Ye {
-       constructor() {
-         super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
-       }
-       _parse(ee) {
-         this._def.coerce && (ee.data = Number(ee.data));
-         if (this._getType(ee) !== oe.number) {
- ... (45 more removed lines; see GitHub link above)
+ 
+     function Pi(WW, iW) {
+       if ("webgpu" !== WW.backend) return !1;
+       const OW = Zi(WW, iW, "uploadCopies", "off", "on");
+       return null !== OW ? OW : null !== WW.adapter && "powervr_rogue" === (0, NW.f)(WW.adapter.vendor, WW.adapter.architecture)
+     }
+ 
+     function Li(WW, iW, OW) {
+       if ("webgpu" !== WW.backend) return !1;
+       const mW = Zi(WW, iW, "sceneDepth", "off", "on");
+       return null !== mW ? mW : null !== WW.adapter && (0, UW.j)(WW.adapter, OW)
+     }
+ 
+     function ci(WW, iW) {
+       return "webgl" === WW.backend ? Zi(WW, iW, "instancedTerrain", "1", "0") : null
+     }
+ ... (36 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1077-L1190` → after: `L669-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L669-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L669-L710) · [Before (L1077-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1077-L1190)

```diff
-       gte(ee, ie) {
-         return this.setLimit("min", ee, !0, we.toString(ie))
-       }
-       gt(ee, ie) {
-         return this.setLimit("min", ee, !1, we.toString(ie))
-       }
-       lte(ee, ie) {
-         return this.setLimit("max", ee, !0, we.toString(ie))
-       }
-       lt(ee, ie) {
-         return this.setLimit("max", ee, !1, we.toString(ie))
-       }
-       setLimit(ee, ie, He, ye) {
-         return new Se({
-           ...this._def,
-           checks: [...this._def.checks, {
- ... (98 more removed lines; see GitHub link above)
+     }
+ 
+     function Ui(WW) {
+       return !!ki(WW) || WW instanceof Error && !(WW instanceof WebAssembly.RuntimeError) && WW.message.startsWith(`${SW.o.RenderSurfaceUnusable}:`)
+     }
+ 
+     function ki(WW) {
+       const {
+         name: iW,
+         message: OW
+       } = null !== WW && void 0 !== WW ? WW : {};
+       return "InvalidStateError" === iW && "string" === typeof OW && OW.startsWith("GPUDevice.")
+     }
+ 
+     function si(WW) {
+       const iW = WW;
+ ... (26 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1193-L1197` → after: `L713-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L713-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L713-L722) · [Before (L1193-L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1193-L1197)

```diff
-     Se.create = ee => new Se({
-       checks: [],
-       typeName: ai.ZodNumber,
-       coerce: (null === ee || void 0 === ee ? void 0 : ee.coerce) || !1,
-       ...Ae(ee)
+ 
+     function Ji(WW) {
+       try {
+         WW.free()
+       } catch {}
+     }
+   },
+   42356: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => mW
```

#### 39. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1199-L1243` → after: `L724-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L724-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L724-L759) · [Before (L1199-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1199-L1243)

```diff
-     class ne extends Ye {
-       constructor() {
-         super(...arguments), this.min = this.gte, this.max = this.lte
-       }
-       _parse(ee) {
-         this._def.coerce && (ee.data = BigInt(ee.data));
-         if (this._getType(ee) !== oe.bigint) {
-           const ie = this._getOrReturnCtx(ee);
-           return ze(ie, {
-             code: ke.invalid_type,
-             expected: oe.bigint,
-             received: ie.parsedType
-           }), Ee
-         }
-         let ie;
-         const He = new Be;
- ... (29 more removed lines; see GitHub link above)
+     const mW = {
+       destroy_stage_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAK0lEQVQYlWP8//8/IwMewIRPknQFjIyM/wmaYGdn9w9FE7IjYSagiFHsCwCM7A/Ccc+NjAAAAABJRU5ErkJggg==",
+       destroy_stage_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAQklEQVQYlYWPMQ4AIAgDOeO7+v9XWScMOGinpjmgYJt4aKQB/ASqKtwASeuGZxrbAEhyRJxe1JJ1debtRIZt6PfmBqYNG36KBWHbAAAAAElFTkSuQmCC",
+       destroy_stage_2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAARUlEQVQYlYWPwQnAMAwDdaVr2ftPVfWVIBJC9DI6LMvYRpIAjzn1rMaq9wQAbwnd/SWUJNkmb1eVkx07zPK5PaLTu37xA3+wH3UI6vmHAAAAAElFTkSuQmCC",
+       destroy_stage_3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAASUlEQVQYlW2PwQ3AMAjEfFXXYv+x3A+pSNqT+IBPMlEDkEQ6awdwMaJGzYTfVJUL4GydUFW5AbM5j2o+DrMEcE+g5dKzf/FrDjw47TfQdOS/BAAAAABJRU5ErkJggg==",
+       destroy_stage_4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATklEQVQYlYWPsRHDQAzDQF/W4u8/lZEmn5PtwuwkETwqagCSyE97B3AwpEbNNH8A1lpn2wvwN824tqpp6yN2G+dRzaPDhLgPm56peXvzC7EqSTSAXQcxAAAAAElFTkSuQmCC",
+       destroy_stage_5: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATElEQVQYlW2PwREAMQgCIX1p/1Xd3idmNBN/iotowJJkG+2q2WkARwRD2LUkKTO/m44I7mWVyxDrxIsEvCqg7ZOhAyNx0d3Vrzc7+AM+lEvjLYgPSwAAAABJRU5ErkJggg==",
+       destroy_stage_6: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAT0lEQVQYlW2PyQ2AQAwDx9tXtv+qGD4ERQt+RY7lI2oAksiD5gBWH1WlGjUtTuIC2HtfHHi5qvJ0mRxt27nzqWZ1VhJnuU/Js8u77m/mFNyVEDqzHRw/iwAAAABJRU5ErkJggg==",
+       destroy_stage_7: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJklEQVQYlWNgQAK2trb/GXABXJIsuCThYsiSMDZBq7AqoEw3Pp0AAAYX+aJ4oVQAAAAASUVORK5CYII=",
+       destroy_stage_8: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAUUlEQVQYlV2PwQ3AMAwCoepazvDJXr1+apWEl40BYQHWh6pCAcACDLiq6DlFtySNMZ4kt6RcOiW5LdI2eZxzXmpBurPLVqjda60/Ob84uwB+AVXlTrnZ3+XVAAAAAElFTkSuQmCC",
+       destroy_stage_9: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAUElEQVQYlW2OyQ3AMAgEhyhtQfF2X9m8IKvIvBDMHkgKSQGQmcJGUtBAZsr3hm6Aqnr4zUBOt4vfJh8gIuTPtdZFK1ztXUbtcXvvz/nU3F1eyBpW2eqlL9QAAAAASUVORK5CYII="
+     }
+   },
+   42270: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => AW,
+ ... (20 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1245-L1246` → after: `L761-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L761-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L761-L770) · [Before (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1245-L1246)

```diff
-       gt(ee, ie) {
-         return this.setLimit("min", ee, !1, we.toString(ie))
+     }
+ 
+     function tW() {
+       if (null === PW) {
+         const WW = NW();
+         PW = WW, WW.then((iW => {
+           PW === WW && (LW = iW)
+         }), (() => {
+           PW === WW && (PW = null)
+         }))
```

#### 41. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1248-L1249` → after: `L772-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L772-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L772-L795) · [Before (L1248-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1248-L1249)

```diff
-       lte(ee, ie) {
-         return this.setLimit("max", ee, !0, we.toString(ie))
+       return PW
+     }
+ 
+     function ZW() {
+       tW().catch((() => {}))
+     }
+ 
+     function xW() {
+       cW.resolve()
+     }
+ 
+     function lW(WW, iW, OW, mW) {
+       if (null === WW) return {
+         errorKind: iW,
+         fingerprint: EW,
+         dedupe: `${iW}|${mW}`
+ ... (8 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1251-L1252` → after: `L797-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L797-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L797-L814) · [Before (L1251-L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1251-L1252)

```diff
-       lt(ee, ie) {
-         return this.setLimit("max", ee, !1, we.toString(ie))
+     }
+ 
+     function AW(WW, iW, OW, mW) {
+       return null === LW ? mW ? (ZW(), lW(null, WW, iW, OW)) : null : lW(LW, WW, iW, OW)
+     }
+     async function bW(WW, iW, OW) {
+       let EW;
+       const NW = new Promise((WW => {
+         EW = setTimeout((() => {
+           WW(null)
+         }), mW)
+       }));
+       try {
+         return lW(await Promise.race([tW(), NW, cW.promise]), WW, iW, OW)
+       } catch {
+         return lW(null, WW, iW, OW)
+ ... (2 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1254-L1257` → after: `L816-L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L816-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L816-L1100) · [Before (L1254-L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1254-L1257)

```diff
-       setLimit(ee, ie, He, ye) {
-         return new ne({
-           ...this._def,
-           checks: [...this._def.checks, {
+     }
+   },
+   42266: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       BUILT_IN_ANIMATIONS_SITE: () => Wi,
+       CAMERA_DIRECTOR_SITE: () => Pi,
+       CORE_ERRORS_SITE: () => BW,
+       EVENT_OVERFLOW_SITE: () => QW,
+       FIRST_VIEW_SITE: () => mi,
+       GraphicsLostError: () => NO,
+       JOIN_SITE: () => RW,
+       LEAVE_SITE: () => GW,
+       MAIN_THREAD_SITE: () => Ei,
+       MODEL_FEED_SITE: () => IW,
+       MODEL_POOL_SITE: () => aW,
+       NON_FATAL_LOKI_REPORTS_PER_PAGE: () => wi,
+ ... (269 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1259-L1308` → after: `L1102-L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1102-L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1102-L1146) · [Before (L1259-L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1259-L1308)

```diff
-             value: ie,
-             inclusive: He,
-             message: we.toString(ye)
-           }]
-         })
-       }
-       _addCheck(ee) {
-         return new ne({
-           ...this._def,
-           checks: [...this._def.checks, ee]
-         })
-       }
-       positive(ee) {
-         return this._addCheck({
-           kind: "min",
-           value: BigInt(0),
- ... (34 more removed lines; see GitHub link above)
+             code: cW,
+             site: wW,
+             fatal: tW,
+             message: ZW,
+             details: xW
+           } = WW;
+           Xi((() => {
+             (tW ? console.error : console.warn)(`${XW} ${LW} ${cW} at ${wW}: ${ZW}`, xW, null !== iW && void 0 !== iW ? iW : "")
+           }));
+           const lW = Yi[LW],
+             AW = null !== (NW = null !== (PW = Si[LW]) && void 0 !== PW ? PW : lW) && void 0 !== NW ? NW : null;
+           EW || null === AW || Di((async () => {
+             const {
+               reportCappedWasmFailure: iW,
+               reportUncappedWasmFailure: mW,
+               reportWasmFailure: EW
+ ... (29 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1310-L1313` → after: `L1148-L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1148-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1148-L1192) · [Before (L1310-L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1310-L1313)

```diff
-       get minValue() {
-         let ee = null;
-         for (const ie of this._def.checks) "min" === ie.kind && (null === ee || ie.value > ee) && (ee = ie.value);
-         return ee
+       return xW
+     }
+ 
+     function Di(WW) {
+       Bi("counts", (async () => {
+         const {
+           peekVisitSessionId: iW
+         } = await Promise.resolve().then((() => OW(683)));
+         null !== iW() && (await WW(), Ji = !0)
+       }))
+     }
+ 
+     function Vi() {
+       Promise.all([Promise.resolve().then((() => OW(683))), OW.e(218).then((() => OW(35078)))]).catch((WW => {
+         console.warn(`${XW} the counts' modules didn't load ahead`, WW)
+       }))
+ ... (29 more added lines; see GitHub link above)
```
