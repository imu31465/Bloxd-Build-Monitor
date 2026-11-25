# Changed — Bundle Modifications Report (Part 009 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `9 / 56` (**296** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 008](part-008.md) · [Part 010 →](part-010.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/219.js` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/chunks/js/219.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217)

#### 11. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L160-L190` → after: `L1209-L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1209-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/219.js#L1209-L1226) · [Before (L160-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/219.js#L160-L190)

```diff
-         t: bG
-       } = (0, UG.w)(), ZG = (0, LG.v)(), wG = (0, uG.g)(), fG = (0, pG.e)({
-         refresh: !0
-       }), QG = ZG.customGamePlace;
-       if (!(0, yG.m)(QG)) return (0, hG.jsx)(VG.NavigatePreserveSearch, {
-         to: "/"
-       });
-       const KG = kG.d[QG],
-         dG = yG.e[QG],
-         JG = null !== (GG = null === fG || void 0 === fG ? void 0 : fG[QG]) && void 0 !== GG ? GG : null,
-         rG = [];
-       for (let SG = 0; SG < dG.length; SG++) {
-         var iG;
-         const GG = oG[SG];
-         if (!GG) continue;
-         const ZG = dG[SG];
- ... (15 more removed lines; see GitHub link above)
+         instance: iM,
+         module: OM
+       } = await async function(MM, rM) {
+         if ("function" === typeof Response && MM instanceof Response) {
+           if (!MM.ok) throw new Error(`failed to fetch Wasm: ${MM.status} ${MM.statusText} fetching '${MM.url}'`);
+           if ("function" === typeof WebAssembly.instantiateStreaming) try {
+             return await WebAssembly.instantiateStreaming(MM, rM)
+           } catch (iM) {
+             if (! function(MM) {
+                 switch (MM) {
+                   case "basic":
+                   case "cors":
+                   case "default":
+                     return !0
+                 }
+                 return !1
+ ... (2 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L192-L212` → after: `L1228-L1271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R1228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L1228-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/219.js#L1228-L1271) · [Before (L192-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/219.js#L192-L212)

```diff
-         }), (0, hG.jsx)("h1", {
-           className: "VisuallyHidden",
-           children: bG(KG.title)
-         }), (0, hG.jsx)("div", {
-           className: "CustomGamePlaceHeaderContainer",
-           children: (0, hG.jsx)(YG.b, {
-             onClick: () => (0, VG.navigatePreserveSearch)("/"),
-             children: bG("homePage:backToGames")
-           })
-         }), !wG && (0, hG.jsx)(EG, {
-           categories: rG
-         }), wG && (0, hG.jsx)("div", {
-           className: SG()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
-           children: rG.map((GG => (0, hG.jsx)(zG, {
-             category: GG.category,
-             title: GG.title,
- ... (5 more removed lines; see GitHub link above)
+           const OM = await MM.arrayBuffer();
+           return await WebAssembly.instantiate(OM, rM)
+         } {
+           const iM = await WebAssembly.instantiate(MM, rM);
+           return iM instanceof WebAssembly.Instance ? {
+             instance: iM,
+             module: MM
+           } : iM
+         }
+       }(await MM, rM);
+       return Gr(iM, OM)
+     }
+   },
+   37244: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => aM,
+ ... (28 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/220.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/220.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc)

#### 1. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/220.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/220.js#L2)

```diff
- export const ids = [220, 296];
+ export const ids = [220];
```

#### 2. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/220.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/220.js#L4)

```diff
-   41704: (GG, bG, ZG) => {
+   34920: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/220.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/220.js#L6)

```diff
-       CharacterCustomisationUI: () => Sb
+       ALL_DEV_TOOLS: () => aM,
+       coreDevTools: () => QM,
+       devTools: () => nM
```

#### 4. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L8-L30` → after: `L10-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/220.js#L10-L17) · [Before (L8-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/220.js#L8-L30)

```diff
-     var wG = ZG(51),
-       SG = ZG(3004),
-       LG = ZG(1092),
-       yG = ZG(1006),
-       kG = ZG.n(yG),
-       UG = ZG(1198),
-       YG = ZG(580),
-       VG = ZG(1151),
-       pG = ZG(2222),
-       fG = ZG(1509),
-       QG = ZG(2537);
-     const KG = UG.x.filter((GG => !fG.h.includes(GG)));
- 
-     function hG(GG, bG) {
-       return KG.includes(GG) && "string" === typeof bG && (0, QG.h)(GG, bG)
-     }
- ... (7 more removed lines; see GitHub link above)
+     var OM = iM(656),
+       SM = iM(1327),
+       jM = iM(34926);
+     const aM = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
+     async function PM() {
+       const {
+         noaDevTools: MM
+       } = await iM.e(260).then((() => iM(42174)));
```

#### 5. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L33-L133` → after: `L20-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/220.js#L20-L22) · [Before (L33-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/220.js#L33-L133)

```diff
- 
-     function JG(GG) {
-       return 0 === Object.keys(GG).length
-     }
- 
-     function rG(GG, bG) {
-       return Object.entries(GG).every((GG => {
-         let [ZG, wG] = GG;
-         return bG[ZG] === wG
-       }))
-     }
-     var zG = ZG(2228),
-       EG = ZG(3083),
-       oG = ZG(1945),
-       XG = ZG(1393),
-       uG = ZG(2264),
- ... (85 more removed lines; see GitHub link above)
+     const nM = new class {
+         constructor() {
+           this.loadHost = PM, this.tools = aM
```

#### 6. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L135-L490` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/220.js#L24-L25) · [Before (L135-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/220.js#L135-L490)

```diff
-         this.sending = !1, GG && this.refresh()
-       }
-     }
-     const aG = new vG;
-     var cG = ZG(352),
-       lG = ZG(41710),
-       jG = ZG(1501),
-       PG = ZG(2320),
-       MG = ZG(2999),
-       AG = ZG(2157),
-       sG = ZG(2575),
-       qG = ZG(1016);
-     ZG(34515), ZG(3087);
-     Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
-     var nG = ZG(2266),
-       gG = ZG(1320),
- ... (340 more removed lines; see GitHub link above)
+         setHost(MM) {
+           this.tools = null === MM ? aM : MM.tools, this.loadHost = null === MM ? PM : async () => MM
```

#### 7. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L492-L528` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/220.js#L27-L28) · [Before (L492-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/220.js#L492-L528)

```diff
-         null !== (LG = DG.current) && void 0 !== LG && LG.isReady() && DG.current.updateCosmetic(GG, bG)
-       }
- 
-       function yb(GG) {
-         WG((bG => {
-           const ZG = {
-             ...bG
-           };
-           return delete ZG[GG], ZG
-         }))
-       }
- 
-       function kb(GG, bG) {
-         let {
-           undoable: ZG
-         } = bG;
- ... (21 more removed lines; see GitHub link above)
+         supports(MM) {
+           return this.tools.has(MM)
```

#### 8. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L530-L534` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/220.js#L30-L32) · [Before (L530-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/220.js#L530-L534)

```diff
-         bG && (RG.current = !0)
-       })), (0, wG.useEffect)((() => {
-         if (!hG) {
-           for (const [GG, bG] of Object.entries(KG.getPlayerCosmetics())) Lb(GG, bG, !1);
-           JG()
+         async downloadScene(MM, rM) {
+           const iM = await this.loadHost();
+           await iM.downloadScene(MM, rM)
```

#### 9. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L536-L578` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/220.js#L34-L36) · [Before (L536-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/220.js#L536-L578)

```diff
-       }), [hG]), (0, wG.useEffect)((() => () => {
-         Sb()
-       }), []);
-       const Ub = KG.getOwnedCosmeticPacks(),
-         Yb = function(GG, bG) {
-           return null === GG ? null : {
-             collected: new Set(GG.collected),
-             ownedPacks: bG
-           }
-         }(KG.dailyDrop, Ub),
-         Vb = (0, nG.usePurchasesAllowed)(),
-         pb = Object.keys(pG.f[ZG]).filter((GG => {
-           const bG = (0, pG.o)(ZG, GG),
-             wG = (0, PG.u)(ZG, GG, Ub);
-           return !(bG.purchasable && !wG && !Vb) && (bG.clientSelectable || wG)
-         })).sort(((GG, bG) => {
- ... (27 more removed lines; see GitHub link above)
+         async setAmbientLightIntensity(MM) {
+           const rM = await this.loadHost();
+           await rM.setAmbientLightIntensity(MM)
```

#### 10. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L580-L875` → after: `L38-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L38-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/220.js#L38-L55) · [Before (L580-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/220.js#L580-L875)

```diff
-         const LG = GG.map((GG => {
-           var SG;
-           const LG = bG.get(GG),
-             yG = GG ? null === (SG = jG.c[wG].colourGroups) || void 0 === SG ? void 0 : SG[GG] : void 0,
-             kG = !0 === (null === yG || void 0 === yG ? void 0 : yG.showSwatchSelector) && !Kb.has(`${wG}_${GG}`);
-           if (kG && yG) {
-             var UG;
-             const bG = null !== (UG = mG[`${wG}_${ZG}_${GG}`]) && void 0 !== UG ? UG : (0, jG.e)(yG.colours);
-             return {
-               groupName: GG,
-               showSwatch: kG,
-               cosmetics: LG.filter((GG => {
-                 const ZG = (0, pG.g)(GG);
-                 return !ZG || bG.toString() === ZG[1].toString()
-               }))
-             }
- ... (280 more removed lines; see GitHub link above)
+         async capturePhoto(MM, rM, iM) {
+           return (await this.loadHost()).capturePhoto(MM, rM, iM)
+         }
+       },
+       QM = {
+         tools: jM.e,
+         downloadScene: async () => {
+           throw new Error("This client can't download the scene")
+         },
+         setAmbientLightIntensity: async () => {
+           throw new Error("This client can't set the ambient light")
+         },
+         capturePhoto: async () => {
+           throw new Error("No game is drawing yet")
+         }
+       };
+ ... (2 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/221.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/221.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928)

#### 1. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L4` → after: `L4-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L4-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/221.js#L4-L521) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/221.js#L4)

```diff
-   36733: (GG, bG, ZG) => {
+   37320: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       isMoreOptionsInFooter: () => fM,
+       showOnboardingPopup: () => YM
+     });
+     var OM = iM(44),
+       SM = iM(1188),
+       jM = iM(1429),
+       aM = iM(1520),
+       PM = iM(1135),
+       nM = iM(4675),
+       QM = iM(1645),
+       zM = iM(1641),
+       LM = iM(2362),
+       mM = iM(1116),
+       HM = iM.n(mM),
+ ... (502 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L7-L8` → after: `L524-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L524-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/221.js#L524-L526) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/221.js#L7-L8)

```diff
-       g: () => mG,
-       k: () => zG
+       i: () => QM,
+       j: () => JM,
+       n: () => hM
```

#### 3. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L10-L94` → after: `L528-L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L528-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/221.js#L528-L583) · [Before (L10-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/221.js#L10-L94)

```diff
-     var wG = ZG(283),
-       SG = ZG(80);
-     const LG = new(ZG(36737).b)(new URL(ZG.p + ZG.u(3), ZG.b), {
-       name: "blockIconWorker",
-       type: "module"
-     });
-     var yG = ZG(1775),
-       kG = ZG(2130);
-     const UG = 1e4,
-       YG = 3e4;
-     let VG = null,
-       pG = null,
-       fG = null,
-       QG = !1,
-       KG = 0;
-     const hG = new Map;
- ... (69 more removed lines; see GitHub link above)
+     var OM = iM(143),
+       SM = iM(1279),
+       jM = iM(1202),
+       aM = iM(1144),
+       PM = iM(1826);
+     const nM = {
+       offline: "homePage:onboardingNameNoAccount",
+       outdated: "general:updatedReloading",
+       busy: "homePage:changeNameTooFast",
+       server: "homePage:changeNameFailed"
+     };
+ 
+     function QM(MM) {
+       return nM[MM]
+     }
+ 
+ ... (40 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L98-L118` → after: `L587-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L587-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/221.js#L587-L592) · [Before (L98-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/221.js#L98-L118)

```diff
-       let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-       GG.postMessage(bG, ZG)
-     }
- 
-     function iG(GG, bG, ZG, wG) {
-       let SG = bG.get(ZG);
-       return void 0 === SG && (SG = wG().then((async bG => {
-         let {
-           image: ZG,
-           request: wG
-         } = bG;
-         try {
-           const bG = await createImageBitmap(ZG);
-           uG(GG, wG(bG), [bG])
-         } catch (SG) {
-           EG(`could not take an image (${String(SG)})`)
- ... (5 more removed lines; see GitHub link above)
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+       const OM = 1 === rM ? 1 : 10 ** (rM - 1),
+         jM = String(OM + Math.floor(iM() * (10 ** rM - OM)));
+       return `${MM.slice(0,SM.g-rM)}${jM}`
+     }
+     const yM = [1, 2, 3, 4];
```

#### 5. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L120-L212` → after: `L594-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L594-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/221.js#L594-L596) · [Before (L120-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/221.js#L120-L212)

```diff
-       oG();
-       const ZG = pG;
-       if (null === ZG) return null;
-       if (await GG(ZG), pG !== ZG) return null;
-       const wG = ++KG;
-       return new Promise((GG => {
-         hG.set(wG, GG), uG(ZG, bG(wG)), XG()
-       }))
-     }
- 
-     function WG(GG, bG, ZG) {
-       return CG((bG => Promise.all([GG.top, GG.left, GG.right].map((GG => function(GG, bG) {
-         return iG(GG, JG, bG, (async () => ({
-           image: await zG(bG),
-           request: GG => ({
-             type: "texture",
- ... (77 more removed lines; see GitHub link above)
+       const iM = await JM(MM, rM);
+       if ("taken" !== iM.outcome) return iM;
+       for (const OM of yM) {
```

#### 6. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L214-L362` → after: `L598-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L598-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/221.js#L598-L602) · [Before (L214-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/221.js#L214-L362)

```diff
-           wG = LG.width * ZG,
-           SG = LG.height * ZG;
-         return {
-           left: (GG - wG) / 2,
-           top: (GG - SG) / 2,
-           width: wG,
-           height: SG
-         }
-       }(ZG, wG), pG = new Float32Array(SG.length);
-       for (let LG = 0; LG < SG.length; LG += 3) pG[LG] = VG.left + SG[LG] * VG.width, pG[LG + 1] = VG.top + SG[LG + 1] * VG.height, pG[LG + 2] = SG[LG + 2];
-       const QG = new Float32Array(ZG * ZG).fill(-1 / 0),
-         KG = new Uint8ClampedArray(ZG * ZG * 4),
-         hG = 255 * GG.alphaCutoff;
-       for (let LG = 0; LG < UG.length; LG += 3) {
-         const [GG, wG, SG] = [UG[LG], UG[LG + 1], UG[LG + 2]], [yG, VG, fG] = [3 * GG, 3 * wG, 3 * SG], [dG, JG, rG, zG, EG, oG] = [pG[yG], pG[yG + 1], pG[VG], pG[VG + 1], pG[fG], pG[fG + 1]], XG = (rG - dG) * (oG - JG) - (EG - dG) * (zG - JG);
-         if (Math.abs(XG) < 1e-9) continue;
- ... (133 more removed lines; see GitHub link above)
+           SM = await JM(MM, iM);
+         if ("taken" !== SM.outcome) return SM
+       }
+       return {
+         outcome: "taken"
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/222.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/222.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783)

#### 1. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L5-L74` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L4) · [Before (L5-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L5-L74)

```diff
-   39959: (GG, bG, ZG) => {
-     GG.exports = SG;
-     var wG = ZG(364);
- 
-     function SG(GG, bG) {
-       if (!(this instanceof SG)) return new SG(GG, bG);
-       var ZG = wG.create();
-       wG.add(ZG, GG, bG), this.base = wG.min(wG.create(), GG, ZG), this.vec = wG.clone(bG), this.max = wG.max(wG.create(), GG, ZG), this.mag = wG.length(this.vec)
-     }
-     var LG = SG.prototype;
-     LG.width = function() {
-       return this.vec[0]
-     }, LG.height = function() {
-       return this.vec[1]
-     }, LG.depth = function() {
-       return this.vec[2]
- ... (54 more removed lines; see GitHub link above)
+   34959: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L76-L77` → after: `L6-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L6-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L6-L14) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L76-L77)

```diff
-       c: () => kG,
-       d: () => LG
+       e: () => BM,
+       h: () => er,
+       i: () => Cr,
+       l: () => wr,
+       p: () => Qr,
+       q: () => Lr,
+       t: () => Hr,
+       v: () => br,
+       y: () => mr
```

#### 3. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L79-L83` → after: `L16-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L16-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L16-L48) · [Before (L79-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L79-L83)

```diff
-     var wG = ZG(4105);
-     let SG = null;
- 
-     function LG(GG) {
-       return null !== SG && GG === SG
+     var OM = iM(243),
+       SM = iM(19),
+       jM = iM(83),
+       aM = iM(1717),
+       PM = iM(4809),
+       nM = iM(3230),
+       QM = iM(3235),
+       zM = iM(30);
+     const {
+       windows: LM,
+       target: mM,
+       stepDown: HM,
+       stepUp: hM,
+       noGain: JM
+     } = QM.c, dM = 1e3 / 60 * 1.08, yM = 1e3 / 55, lM = 1e3 / 45, EM = 1e3 / 30 * .92, UM = 1e3 / 30 * 1.08;
+     class GM {
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L86-L88` → after: `L51-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L51-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L51-L67) · [Before (L86-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L86-L88)

```diff
-     function yG() {
-       this.bD = !1, this.stopPropagation = !1, this.ZD = !1, this.disabled = !1
-     }
+     function CM(MM, rM, iM) {
+       const {
+         fast: OM,
+         masked: SM,
+         longFrame: jM,
+         paced: aM
+       } = MM;
+       return !jM && (OM && !aM || rM) ? SM && !iM ? "hold" : "rise" : SM ? MM.dropping ? "break" : "hold" : (jM ? OM || rM : OM && !iM) ? "hold" : "break"
+     }
+     const eM = LM.windowMs,
+       bM = LM.settleMs,
+       wM = LM.graceMs,
+       tM = LM.minIntervals,
+       gM = 1e3 * tM / eM,
+       uM = Math.floor(1e4 / eM),
+       RM = JM.backoffMs,
+ ... (1 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L91-L120` → after: `L70-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L70-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L70-L198) · [Before (L91-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L91-L120)

```diff
-         this.version = "0.7.0";
-         var ZG = Object.assign({}, new yG, bG || {});
-         this.element = GG || document, this.bD = !!ZG.bD, this.stopPropagation = !!ZG.stopPropagation, this.ZD = !!ZG.ZD, this.disabled = !!ZG.disabled, this.filterEvents = (GG, bG) => !0, this.ignoreEvent = GG => !1, this.down = new wG.EventEmitter, this.up = new wG.EventEmitter … [truncated]
-           dx: 0,
-           dy: 0,
-           ibG: 0,
-           CbG: 0,
-           WbG: 0
-         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
-           lastX: 0,
-           lastY: 0,
-           currID: null
-         }, "loading" !== document.readyState ? YG(this) : document.addEventListener("DOMContentLoaded", (GG => {
-           YG(this)
-         }), {
-           once: !0
- ... (14 more removed lines; see GitHub link above)
+         let {
+           lowest: iM,
+           startStep: OM = 0,
+           noGain: SM = null,
+           upWait: jM = null
+         } = rM;
+         this.hooks = MM, this.step = void 0, this.lowest = void 0, this.phase = {
+           kind: "watch"
+         }, this.noGain = void 0, this.downUntilMs = void 0, this.downBackoffMs = void 0, this.noGainFps = void 0, this.keptFps = void 0, this.lenientUpFps = void 0, this.lenientUpAtMs = void 0, this.upFailures = void 0, this.upUntilMs = void 0, this.climbing = void 0, this.climbe … [truncated]
+         const aM = iM + 1;
+         this.downUntilMs = new Array(aM).fill(0), this.downBackoffMs = new Array(aM).fill(0), this.noGainFps = new Array(aM).fill(0), this.noGainFps[0] = null === SM ? 0 : SM.fps, this.keptFps = new Array(aM).fill(0), this.lenientUpFps = new Array(aM).fill(0), this.lenientUpAtMs  … [truncated]
+       }
+       currentStep() {
+         return this.step
+       }
+       frame(MM, rM, iM) {
+ ... (113 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L123-L128` → after: `L201-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L201-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L201-L221) · [Before (L123-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L123-L128)

```diff
-       getBindings() {
-         var GG = {};
-         for (var bG in this._keyBindmap) {
-           this._keyBindmap[bG].forEach((ZG => {
-             GG[ZG] = GG[ZG] || [], GG[ZG].push(bG)
-           }))
+       watch(MM, rM, iM, OM, SM, jM) {
+         const aM = this.climbed;
+         null !== aM && !OM && !SM && ++aM.heldWindows >= hM.heldWindows && (this.climbed = null, this.record(jM, MM, "sQ"), this.hooks.sQ(this.step)), OM ? (this.dropRun += rM, this.dropRunFpsSum += MM * rM, this.dropRunMasked ||= SM, SM || (this.dropRunClean += rM, this.dropRunC … [truncated]
+         const PM = null !== this.climbed ? hM : HM;
+         if (this.dropRun >= (this.dropRunMasked ? PM.maskedWindows : PM.dropWindows)) {
+           const rM = this.dropRunClean > 0 ? this.dropRunCleanFpsSum / this.dropRunClean : this.dropRunFpsSum / this.dropRun,
+             iM = this.dropRunClean >= HM.dropWindows && rM < this.noGainFps[this.step] * JM.heavierShare;
+           this.resetDropRun();
+           const OM = this.climbed;
+           return void(null !== OM ? (this.failUp(this.step, OM.from, MM, jM), this.climbed = OM.below) : this.step < this.lowest && (iM || this.waitOver(jM)) && (this.climbing = !1, this.phase = {
+             kind: "down",
+             from: this.step,
+             fromFps: rM,
+             early: !this.waitOver(jM),
+             judged: 0,
+             fpsSum: 0,
+ ... (5 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L130-L133` → after: `L223-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L223-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L223-L288) · [Before (L130-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L130-L133)

```diff
-         return GG
-       }
-       Tp() {
-         UG(this.pD), UG(this.pressCount), UG(this.releaseCount)
+         const nM = this.step - 1;
+         nM >= 0 && this.cleanRun >= (this.climbing ? hM.climbWindows : hM.cleanWindows) && jM >= this.upUntilMs[nM] && (this.phase = {
+           kind: "up",
+           from: this.step,
+           judged: 0,
+           fpsSum: 0,
+           holds: 0,
+           maskedHolds: 0,
+           fromClimbed: this.climbed
+         }, this.setStep(nM, MM, jM, "up"))
+       }
+       waitOver(MM) {
+         return !(0 === this.step && null !== this.noGain && MM < this.noGain.untilMs) && MM >= this.downUntilMs[this.step]
+       }
+       keptAfterDip(MM) {
+         return this.keptFps[MM] > 0
+ ... (50 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L137-L138` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L298-L299) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L137-L138)

```diff
-     function UG(GG) {
-       for (var bG in GG) GG[bG] = 0
+     function YM() {
+       return (0, nM.U)(SM.d.get("clientEscMenuOptions").pixelScale) * (0, nM.O)()
```

#### 9. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L141-L148` → after: `L302-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L302-L303) · [Before (L141-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L141-L148)

```diff
-     function YG(GG) {
-       window.addEventListener("keydown", dG.bind(null, GG, !0), !1), window.addEventListener("keyup", dG.bind(null, GG, !1), !1);
-       var bG = {
-         passive: !0
-       };
-       GG.element.addEventListener("touchstart", QG.bind(void 0, GG), {
-         passive: !1
-       }), GG.element.addEventListener("touchend", hG.bind(void 0, GG), bG), GG.element.addEventListener("mousedown", JG.bind(null, GG, !0), bG), window.document.addEventListener("mouseup", JG.bind(null, GG, !1), bG), GG.element.addEventListener("touchmove", rG.bind(null, GG), bG) … [truncated]
+     function NM() {
+       return (0, nM.w)(YM())
```

#### 10. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L154-L155` → after: `L306-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L306-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L306-L308) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L154-L155)

```diff
-     function QG(GG, bG) {
-       bG.preventDefault(), KG(bG)
+     function AM() {
+       const MM = zM.g.getItem(ZM);
+       return "object" !== typeof MM || null === MM || "string" !== typeof MM.gpu ? null : MM
```

#### 11. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L159-L166` → after: `L312-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L312-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L312-L315) · [Before (L159-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L159-L166)

```diff
-       let bG = !1;
-       for (let ZG = 0; ZG < GG.touches.length; ++ZG)
-         if (GG.touches[ZG].identifier === fG) {
-           bG = !0;
-           break
-         } if (!bG) {
-         const bG = GG.changedTouches[0];
-         VG = bG.clientX, pG = bG.clientY, fG = bG.identifier
+       return {
+         untilEpochMs: Date.now() + (MM.untilMs - performance.now()),
+         backoffMs: MM.backoffMs,
+         fps: MM.fps
```

#### 12. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L170-L171` → after: `L319-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L319-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L319-L324) · [Before (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L170-L171)

```diff
-     function hG(GG, bG) {
-       for (var ZG = bG.changedTouches, wG = 0; wG < ZG.length; ++wG) ZG[wG].identifier === fG && (fG = null)
+     function vM(MM) {
+       return void 0 === MM || "number" !== typeof MM.fps ? null : {
+         untilMs: performance.now() + (MM.untilEpochMs - Date.now()),
+         backoffMs: MM.backoffMs,
+         fps: MM.fps
+       }
```

#### 13. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L174-L178` → after: `L328-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L328-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L328-L331) · [Before (L174-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L174-L178)

```diff
-     function dG(GG, bG, ZG) {
-       if (!GG.ignoreEvent(ZG)) try {
-         iG(GG, ZG), bG && ZG.isTrusted && !ZG.repeat && GG._keyStates[ZG.code] && CG(GG, ZG.code)
-       } finally {
-         WG(ZG.code, bG, GG, ZG)
+     function BM() {
+       if (null === FM) {
+         const MM = new URLSearchParams(window.location.search).get("msaa");
+         FM = SM.d.get("clientEscMenuOptions").antiAliasing && ("0" === MM || "1" !== MM && !(0, PM.c)("antiAliasing") && (0, DM.d)())
```

#### 14. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L182-L197` → after: `L336-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L336-L338) · [Before (L182-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L182-L197)

```diff
-     function JG(GG, bG, ZG) {
-       if (!GG.ignoreEvent(ZG)) try {
-         iG(GG, ZG)
-       } finally {
-         ! function(GG, bG, ZG) {
-           if ("pointerId" in ZG)
-             if (bG) {
-               if (null !== GG._touches.currID) return;
-               GG._touches.currID = ZG.pointerId
-             } else {
-               if (GG._touches.currID !== ZG.pointerId) return;
-               GG._touches.currID = null
-             } var wG = "button" in ZG ? ZG.button + 1 : 1;
-           WG("Mouse" + wG, bG, GG, ZG)
-         }(GG, bG, ZG)
-       }
+     function XM(MM) {
+       const rM = "number" === typeof MM ? Date.now() - MM : -1;
+       return rM >= 0 && rM < oM
```

#### 15. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L200-L215` → after: `L342-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L342-L343) · [Before (L200-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L200-L215)

```diff
-     function rG(GG, bG) {
-       var ZG = bG.movementX || bG.mozMovementX || 0,
-         wG = bG.movementY || bG.mozMovementY || 0;
-       if (bG.touches && 0 === (ZG | wG)) {
-         var SG = function(GG) {
-           KG(GG);
-           for (let bG = 0; bG < GG.changedTouches.length; ++bG)
-             if (GG.changedTouches[bG].identifier == fG) {
-               const ZG = GG.changedTouches[bG],
-                 wG = [ZG.clientX - VG, ZG.clientY - pG];
-               return VG = ZG.clientX, pG = ZG.clientY, wG
-             } return console.error(`Did not find touch id ${fG}`), [0, 0]
-         }(bG);
-         ZG = SG[0], wG = SG[1]
-       }
-       GG.pD.dx += ZG, GG.pD.dy += wG
+     function KM() {
+       return IM ??= (0, jM.getDeviceDefaultPixelScale)(), qM(IM)
```

#### 16. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L218-L229` → after: `L346-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L346-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L346-L365) · [Before (L218-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L218-L229)

```diff
-     function zG(GG, bG) {
-       iG(GG, bG);
-       var ZG = 1;
-       switch (bG.deltaMode) {
-         case 0:
-           ZG = 1;
-           break;
-         case 1:
-           ZG = 12;
-           break;
-         case 2:
-           ZG = GG.element.clientHeight || window.innerHeight
+     function qM(MM) {
+       const rM = SM.d.get("clientEscMenuOptions");
+       return rM.pixelSmoothing && !(0, PM.c)("pixelScale") && rM.pixelScale === MM
+     }
+     let TM = null,
+       VM = 0;
+ 
+     function cM() {
+       if (null === TM || VM !== YM()) {
+         var MM;
+         VM = YM();
+         const rM = Number(null !== (MM = new URLSearchParams(window.location.search).get(fM)) && void 0 !== MM ? MM : ""),
+           iM = NM();
+         if (rM > 0 && rM <= 1) TM = (0, nM.G)(iM, iM[0] / rM);
+         else {
+           const MM = AM(),
+ ... (4 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L231` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L367) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L231)

```diff
-       GG.pD.ibG += (bG.deltaX || 0) * ZG, GG.pD.CbG += (bG.deltaY || 0) * ZG, GG.pD.WbG += (bG.deltaZ || 0) * ZG
+       return TM
```

#### 18. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L235` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L371) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L235)

```diff
-       if (!GG.ZD) return bG.preventDefault(), !1
+       return (0, nM.G)(MM, (0, nM.K)(rM))
```

#### 19. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L248-L249` → after: `L374-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L374-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L374-L376) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L248-L249)

```diff
-     function XG(GG, bG) {
-       return !!GG[oG[bG]] || ("AltRight" === bG || "ControlLeft" === bG) && "function" === typeof GG.getModifierState && !0 === GG.getModifierState("AltGraph")
+     function rr(MM, rM, iM) {
+       const OM = MM.length - 1;
+       return (0, jM.isMobile)() ? Math.min(OM, Math.max(iM, Mr(MM, rM) + QM.c.pixels.mobileRungsBelowStart)) : OM
```

#### 20. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L253-L263` → after: `L380-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L380-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L380-L393) · [Before (L253-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L253-L263)

```diff
-       for (var ZG in GG._modifiersHeldThroughBlur = {}, oG) GG._keyStates[ZG] && (GG._modifiersHeldThroughBlur[ZG] = !0);
-       bG && bG.isTrusted && function() {
-         try {
-           return window.self !== window.top
-         } catch (GG) {
-           return !0
-         }
-       }() && (clearTimeout(GG._blurRelease), GG._blurRelease = setTimeout((function() {
-         if (!document.hasFocus())
-           for (var bG in GG._modifiersHeldThroughBlur = {}, GG._keyStates) GG._keyStates[bG] && !/^Mouse\d/.test(bG) && CG(GG, bG)
-       }), 0))
+       var iM;
+       const OM = rM.indexOf(null !== (iM = MM.failedUpN) && void 0 !== iM ? iM : -1);
+       return OM >= 0 && XM(MM.failedUpAt) ? {
+         step: OM,
+         untilMs: performance.now() + QM.c.stepUp.failWaitsMs[0]
+       } : null
+     }
+     let Or = null,
+       Sr = !1,
+       jr = "";
+     const ar = new Set;
+ 
+     function Pr() {
+       for (const MM of ar) MM()
```

#### 21. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L266-L269` → after: `L396-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L396-L397) · [Before (L266-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L266-L269)

```diff
-     function iG(GG, bG) {
-       var ZG = GG._modifiersHeldThroughBlur;
-       if (ZG && bG.isTrusted && document.hasFocus())
-         for (var wG in ZG) delete ZG[wG], GG._keyStates[wG] && wG !== bG.code && (XG(bG, wG) || CG(GG, wG))
+     function nr() {
+       return Sr ? null : (dr(), null === Or ? (null !== IM || null !== (0, jM.peekGpuVendor)() ? KM() : qM(1)) ? cM() : null : KM() ? Or.currentStep() : null)
```

#### 22. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L272-L284` → after: `L400-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L400-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L400-L405) · [Before (L272-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L272-L284)

```diff
-     function CG(GG, bG) {
-       const ZG = {
-           code: bG,
-           preventDefault: () => {},
-           stopPropagation: () => {}
-         },
-         wG = SG;
-       SG = ZG;
-       try {
-         WG(bG, !1, GG, ZG)
-       } finally {
-         SG = wG
-       }
+     function Qr() {
+       const MM = nr();
+       if (null === MM) return null;
+       const rM = NM(),
+         iM = rM[Math.min(MM, rM.length - 1)];
+       return iM === zr() ? null : iM
```

#### 23. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L287-L303` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L408-L409) · [Before (L287-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L287-L303)

```diff
-     function WG(GG, bG, ZG, wG) {
-       var SG = ZG._keyBindmap[GG];
-       SG && (mG(ZG._keyStates[GG], bG) && (ZG._keyStates[GG] = bG, SG.forEach((GG => {
-         (!ZG.filterEvents || ZG.filterEvents(wG, GG)) && function(GG, bG, ZG, wG) {
-           var SG = bG ? ZG.pressCount : ZG.releaseCount;
-           SG[GG] = (SG[GG] || 0) + 1;
-           var LG = ZG._bindPressCount[GG] || 0;
-           (LG += bG ? 1 : -1) < 0 && (LG = 0);
-           ZG._bindPressCount[GG] = LG;
-           var yG = ZG.state[GG];
-           if (mG(yG, LG)) {
-             ZG.state[GG] = LG > 0;
-             var kG = bG ? ZG.down : ZG.up;
-             ZG.disabled || kG.emit(GG, wG)
-           }
-         }(GG, bG, ZG, wG)
- ... (1 more removed lines; see GitHub link above)
+     function zr() {
+       return (0, nM.B)(SM.d.get("clientEscMenuOptions").pixelScale, (0, nM.O)())
```

#### 24. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L306-L307` → after: `L412-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L412-L413) · [Before (L306-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L306-L307)

```diff
-     function mG(GG, bG) {
-       return GG ? !bG : bG
+     function Lr() {
+       return null !== Or && null !== Qr()
```

#### 25. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L309-L310` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L415) · [Before (L309-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L309-L310)

```diff
-   },
-   36874: (GG, bG) => {
+ 
```

#### 26. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L312-L314` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L417-L418) · [Before (L312-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L312-L314)

```diff
-       if (GG && "object" === typeof GG) {
-         var bG = GG.which || GG.keyCode || GG.charCode;
-         bG && (GG = bG)
+       return ar.add(MM), () => {
+         ar.delete(MM)
```

#### 27. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L320-L324` → after: `L421-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L421-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L421-L429) · [Before (L320-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L320-L324)

```diff
-     ZG.isEventKey = function(GG, bG) {
-       if (GG && "object" === typeof GG) {
-         var ZG = GG.which || GG.keyCode || GG.charCode;
-         if (null === ZG || void 0 === ZG) return !1;
-         if ("string" === typeof bG) {
+ 
+     function Hr(MM, rM, iM) {
+       var SM;
+       if (null !== Or || Sr || (0, DM.j)()) return;
+       const jM = (0, sM.c)(MM, rM, iM);
+       null !== jM && ((0, DM.n)(jM.vendor), "" !== jM.renderer && (0, OM.t)(jM.vendor, jM.renderer)), jr = `${MM}:${(null===jM||void 0===jM?void 0:jM.renderer)||(null===jM||void 0===jM?void 0:jM.vendor)||""}`, (null === (SM = AM()) || void 0 === SM ? void 0 : SM.gpu) !== jr && (z … [truncated]
+         gpu: jr
+       }), TM = null), Jr(), document.addEventListener("visibilitychange", (() => {
+         if (document.hidden) try {
```

#### 28. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L326-L419` → after: `L431-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L431-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L431-L460) · [Before (L326-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L326-L419)

```diff
-           if (LG = wG[bG.toLowerCase()]) return LG === ZG;
-           if (LG = SG[bG.toLowerCase()]) return LG === ZG
-         } else if ("number" === typeof bG) return bG === ZG;
-         return !1
-       }
-     };
-     var wG = (bG = GG.exports = ZG).code = bG.codes = {
-         backspace: 8,
-         tab: 9,
-         enter: 13,
-         shift: 16,
-         ctrl: 17,
-         alt: 18,
-         "pause/break": 19,
-         "caps lock": 20,
-         esc: 27,
- ... (78 more removed lines; see GitHub link above)
+           null === (MM = Or) || void 0 === MM || MM.hidden()
+         } catch (rM) {
+           br(), console.error("The quality steps stopped", rM)
+         }
+       }))
+     }
+     let hr = 0;
+ 
+     function Jr() {
+       var MM;
+       const rM = null !== (MM = AM()) && void 0 !== MM ? MM : {
+           gpu: jr
+         },
+         iM = NM();
+       hr = YM();
+       const OM = cM();
+ ... (14 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L421-L481` → after: `L462-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L462-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L462-L504) · [Before (L421-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L421-L481)

```diff
-               document.addEventListener("readystatechange", bG)
-             } else setTimeout(GG, 0)
-           }((() => {
-             ! function(GG) {
-               var bG = GG._data,
-                 ZG = bG.nowObject.now();
-               bG.lastTickStarted = ZG, bG.lastFrameStarted = ZG, bG.lastRenderStarted = ZG, bG.frameCB = () => function(GG) {
-                 var bG = GG._data;
-                 requestAnimationFrame(bG.frameCB), kG(GG);
-                 var ZG = bG.nowObject.now(),
-                   wG = ZG - bG.lastFrameStarted;
-                 if (bG.lastFrameStarted = ZG, GG.wq > 0) {
-                   bG.renderAccum += wG;
-                   var SG = 1e3 / GG.wq;
-                   if (bG.renderAccum < SG) return;
-                   bG.renderAccum -= SG, bG.renderAccum > SG && (bG.renderAccum = SG)
- ... (45 more removed lines; see GitHub link above)
+             (null === (rM = AM()) || void 0 === rM ? void 0 : rM.failedUpN) === iM && (OM.failedUpN = void 0), yr(OM)
+           },
+           upFailed: MM => {
+             yr({
+               failedUpN: NM()[MM],
+               failedUpAt: Date.now()
+             })
+           },
+           noGain: MM => {
+             yr({
+               noGain: null === MM ? void 0 : xM(MM)
+             })
+           }
+         }, {
+           lowest: rr(iM, hr, OM),
+           startStep: OM,
+ ... (27 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L485-L486` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L508) · [Before (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L485-L486)

```diff
-       let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
-       this.nowObject = performance || Date, this.pollTime = GG, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
+       null !== Or && YM() !== hr && (TM = null, Jr())
```

#### 31. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L492-L659` → after: `L512-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L512-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L512-L515) · [Before (L492-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L492-L659)

```diff
-       for (var bG = GG._data, ZG = 1e3 / GG.Fv, wG = bG.nowObject.now() + yG, SG = 0; bG.nowObject.now() >= bG.lastTickStarted + ZG && bG.nowObject.now() < wG && ++SG <= LG;) GG.gJ(ZG), bG.lastTickStarted += ZG;
-       var kG = 5 * (ZG + 5),
-         UG = bG.nowObject.now();
-       if (UG - bG.lastTickStarted > kG)
-         for (; UG >= bG.lastTickStarted + ZG;) bG.lastTickStarted += ZG
-     }
-   },
-   37052: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => yG
-     });
-     var wG = ZG(51);
-     const SG = wG.useLayoutEffect;
-     const LG = function(GG) {
-       var bG = (0, wG.useRef)(GG);
-       return SG((function() {
- ... (152 more removed lines; see GitHub link above)
+       zM.g.setItem(ZM, {
+         ...AM(),
+         ...MM,
+         gpu: jr
```

#### 32. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L662-L728` → after: `L518-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L518-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L518-L524) · [Before (L662-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L662-L728)

```diff
-     ZG.d(bG, {
-       b: () => wG
-     })
-   },
-   39086: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => LG
-     });
-     var wG = ZG(39093);
-     const SG = (GG, bG, ZG) => GG ? GG.getClassName && "Mesh" === GG.getClassName() ? null : !GG.getClassName || "SubMesh" !== GG.getClassName() && "PhysicsBody" !== GG.getClassName() ? GG.clone ? GG.clone() : Array.isArray(GG) ? GG.slice() : ZG && "object" === typeof GG ? {
-       ...GG
-     } : null : GG.clone(bG) : null;
-     class LG {
-       static DeepCopy(GG, bG, ZG, LG) {
-         let yG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const kG = function(GG) {
- ... (51 more removed lines; see GitHub link above)
+     let lr = 0,
+       Er = 0,
+       Ur = 0,
+       Gr = !1;
+ 
+     function Cr() {
+       lr++
```

#### 33. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L730-L736` → after: `L526-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L526-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L526-L529) · [Before (L730-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L730-L736)

```diff
-     class yG {
-       constructor(GG, bG, ZG) {
-         this.gradient = GG, this.factor1 = bG, this.factor2 = ZG
-       }
-       getFactor() {
-         return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
-       }
+ 
+     function er(MM, rM, iM) {
+       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       dr(), null !== Or && (MM - Ur >= 1e3 && (Gr = lr - Er > QM.c.sceneChange.meshesPerSecond, Er = lr, Ur = MM), kM.c.isHeld() ? Or.paused(MM) : Or.frame(MM, rM, iM && !document.hidden && KM(), Gr || OM > 0 || (0, aM.r)()))
```

#### 34. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L738-L746` → after: `L531-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L531-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L531-L540) · [Before (L738-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L738-L746)

```diff
-     class kG {
-       static GetCurrentGradient(GG, bG, ZG) {
-         if (bG[0].gradient > GG) return void ZG(bG[0], bG[0], 1);
-         for (let SG = 0; SG < bG.length - 1; SG++) {
-           const wG = bG[SG],
-             LG = bG[SG + 1];
-           if (GG >= wG.gradient && GG <= LG.gradient) {
-             return void ZG(wG, LG, (GG - wG.gradient) / (LG.gradient - wG.gradient))
-           }
+ 
+     function br() {
+       if (!Sr) {
+         Sr = !0, null !== Or && (Or = null, yr({
+           noGain: void 0
+         }));
+         try {
+           Pr()
+         } catch (MM) {
+           console.error("The quality steps' resize to the player's n failed", MM)
```

#### 35. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L752-L808` → after: `L544-L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L544-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L544-L547) · [Before (L752-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L752-L808)

```diff
-   },
-   39093: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => wG
-     });
-     class wG {
-       static _CheckLimit(GG, bG) {
-         let ZG = wG._LogLimitOutputs[GG];
-         return ZG ? ZG.current++ : (ZG = {
-           limit: bG,
-           current: 1
-         }, wG._LogLimitOutputs[GG] = ZG), ZG.current <= ZG.limit
-       }
-       static _GenerateLimitMessage(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const ZG = wG._LogLimitOutputs[GG];
- ... (41 more removed lines; see GitHub link above)
+ 
+     function wr() {
+       var MM;
+       null === (MM = Or) || void 0 === MM || MM.resized(performance.now())
```

#### 36. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L824` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L550) · [Before (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L824)

```diff
-   39119: (GG, bG, ZG) => {
+   34962: (MM, rM, iM) => {
```

#### 37. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L828-L1015` → after: `L554-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L554-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L554-L571) · [Before (L828-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L828-L1015)

```diff
-     var wG = ZG(37439),
-       SG = ZG(37471),
-       LG = ZG(39086);
-     class yG {
-       constructor() {
-         this.direction1 = new wG.p(0, 1, 0), this.direction2 = new wG.p(0, 1, 0), this.minEmitBox = new wG.p(-.5, -.5, -.5), this.maxEmitBox = new wG.p(.5, .5, .5)
-       }
-       startDirectionFunction(GG, bG, ZG, LG) {
-         const yG = (0, SG.RandomRange)(this.direction1.x, this.direction2.x),
-           kG = (0, SG.RandomRange)(this.direction1.y, this.direction2.y),
-           UG = (0, SG.RandomRange)(this.direction1.z, this.direction2.z);
-         if (LG) return bG.x = yG, bG.y = kG, void(bG.z = UG);
-         wG.p.TransformNormalFromFloatsToRef(yG, kG, UG, GG, bG)
-       }
-       startPositionFunction(GG, bG, ZG, LG) {
-         const yG = (0, SG.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
- ... (172 more removed lines; see GitHub link above)
+     var OM = iM(83),
+       SM = iM(114);
+ 
+     function jM(MM, rM, iM) {
+       if ("webgpu" === MM) return iM ? ((0, OM.seedGpuVendor)(iM), {
+         vendor: iM,
+         renderer: ""
+       }) : null;
+       try {
+         const iM = "webgl" === MM ? rM.getContext("webgl2") : rM.getContext("webgl");
+         "webgl" === MM && iM && (0, SM.C)(iM);
+         const jM = null === iM || void 0 === iM ? void 0 : iM.getExtension("WEBGL_debug_renderer_info");
+         if (iM && jM) {
+           const MM = String(iM.getParameter(jM.UNMASKED_VENDOR_WEBGL)),
+             rM = String(iM.getParameter(jM.UNMASKED_RENDERER_WEBGL));
+           return (0, OM.seedGpuVendor)(MM), (0, SM.I)(MM, rM), {
+ ... (2 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1102-L1191` → after: `L574-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L574-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/222.js#L574-L576) · [Before (L1102-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/222.js#L1102-L1191)

```diff
-         let gG = .6 - cG * cG - lG * lG - jG * jG;
-         if (gG < 0) pG = 0;
-         else {
-           const GG = 3 * wG[PG + 1 + SG[MG + 1 + SG[AG + 1]]];
-           gG *= gG, pG = gG * gG * (YG[GG] * cG + YG[GG + 1] * lG + YG[GG + 2] * jG)
-         }
-         return 32 * (kG + UG + VG + pG)
-       }
-       noise4D(GG, bG, ZG, wG) {
-         const SG = this.perm;
-         let LG, yG, YG, pG, fG;
-         const QG = (GG + bG + ZG + wG) * kG,
-           KG = Math.floor(GG + QG),
-           hG = Math.floor(bG + QG),
-           dG = Math.floor(ZG + QG),
-           JG = Math.floor(wG + QG),
- ... (74 more removed lines; see GitHub link above)
+         iM && (0, SM.I)(String(iM.getParameter(iM.VENDOR)), String(iM.getParameter(iM.RENDERER)))
+       } catch {}
+       return null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/223.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/223.js` (71 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e)

#### 1. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L4-L6)

```diff
-   41470: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       LobbyManageView: () => Xb
+   37546: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => JM,
+       e: () => CM
```

#### 2. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L8-L14` → after: `L9-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L9-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L9-L58) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L8-L14)

```diff
-     var wG = ZG(51),
-       SG = ZG(1415),
-       LG = ZG(37379),
-       yG = ZG(2428),
-       kG = ZG(2431),
-       UG = ZG(2409),
-       YG = ZG(36911);
+     iM(34999);
+     var OM = iM(44),
+       SM = iM(1516),
+       jM = iM(2039),
+       aM = iM(2084),
+       PM = iM(19),
+       nM = iM(2640),
+       QM = iM(37554),
+       zM = iM(37559),
+       LM = iM(34985),
+       mM = iM(34997),
+       HM = iM(35006),
+       hM = iM(1303);
+     const JM = (0, OM.memo)((function() {
+       var MM;
+       const {
+ ... (34 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L17-L28` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L61) · [Before (L17-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L17-L28)

```diff
-       const [GG, bG] = (0, wG.useState)(new Map);
-       return {
-         get: bG => GG.get(bG),
-         hold: (0, wG.useCallback)(((GG, ZG, wG) => {
-           bG((bG => new Map(bG).set(GG, ZG))), wG.then((() => {
-             bG((bG => {
-               const ZG = new Map(bG);
-               return ZG.delete(GG), ZG
-             }))
-           }))
-         }), [])
-       }
+       return jM.gameBridge.lookup("cameraZoom", null)
```

#### 4. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L30-L67` → after: `L63-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L63-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L63-L76) · [Before (L30-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L30-L67)

```diff
-     var pG = ZG(1006),
-       fG = ZG.n(pG),
-       QG = ZG(1151),
-       KG = ZG(1016),
-       hG = ZG(1302),
-       dG = ZG(2632),
-       JG = ZG(5039),
-       rG = ZG(3423);
-     var zG = ZG(1945),
-       EG = ZG(1393);
- 
-     function oG(GG, bG, ZG) {
-       const wG = GG.filter((GG => GG.name !== bG)),
-         SG = wG.filter((GG => "none" === GG.role)).sort(((GG, bG) => bG.at - GG.at)),
-         LG = wG.filter((GG => "none" !== GG.role)).sort(((GG, bG) => ZG.indexOf(GG.role) - ZG.indexOf(bG.role) || bG.at - GG.at));
-       return [...GG.some((GG => GG.name === bG)) && null !== bG ? [bG] : [], ...[...SG, ...LG].map((GG => GG.name))]
- ... (22 more removed lines; see GitHub link above)
+     const yM = [{
+         current: null
+       }, {
+         current: null
+       }, {
+         current: null
+       }, {
+         current: null
+       }],
+       lM = {
+         current: null
+       },
+       EM = {
+         current: null
```

#### 5. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L69-L106` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L78-L79) · [Before (L69-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L69-L106)

```diff
-       const SG = GG.away.find((GG => GG.name === bG));
-       return SG ? {
-         section: "away",
-         player: SG
-       } : {
-         section: "gone"
-       }
-     }
-     const iG = {
-       gamemode: !1,
-       roles: [],
-       fixedRole: null,
-       kick: !1,
-       ban: !1,
-       unban: !1
-     };
- ... (22 more removed lines; see GitHub link above)
+     let UM = 0,
+       GM = 0;
```

#### 6. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L109-L119` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L82) · [Before (L109-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L109-L119)

```diff
-       let {
-         status: bG
-       } = GG;
-       return (0, jG.jsx)("span", {
-         className: fG()("LobbyManageStatus", {
-           LobbyManageStatusRefused: !bG.ok
-         }),
-         children: (0, jG.jsx)(cG.c, {
-           text: bG.text
-         })
-       })
+       GM = MM, yM[0].current || lM.current || EM.current ? bM(MM) : UM = MM
```

#### 7. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L123-L159` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L86) · [Before (L123-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L123-L159)

```diff
-       let {
-         names: bG,
-         cap: ZG,
-         filterFrom: SG,
-         moreLabel: LG,
-         reveal: yG = null,
-         renderRow: kG
-       } = GG;
-       const {
-         t: UG
-       } = (0, QG.w)(), [YG, VG] = (0, wG.useState)(!1), [pG, fG] = (0, wG.useState)(""), hG = YG || null !== yG && bG.indexOf(yG) >= ZG, JG = (hG || bG.length <= ZG) && null !== SG && bG.length > SG, rG = pG.trim().toLowerCase();
-       let zG = hG ? bG : bG.slice(0, ZG);
-       return JG && "" !== rG && (zG = zG.filter((GG => GG.toLowerCase().includes(rG)))), (0, jG.jsxs)(jG.Fragment, {
-         children: [JG && (0, jG.jsx)(lG.b, {
-           className: "LobbyManageFilter",
-           placeholderText: UG("lobbyManage:findName"),
- ... (21 more removed lines; see GitHub link above)
+       return ((0, QM.g)(MM) - (0, QM.g)(0)) * window.innerHeight / 100
```

#### 8. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L163-L209` → after: `L90-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L90-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L90-L95) · [Before (L163-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L163-L209)

```diff
-       let {
-         value: bG,
-         placeholder: ZG,
-         ariaLabel: SG,
-         maxLength: LG,
-         wide: yG = !1,
-         onSave: kG
-       } = GG;
-       const UG = (0, wG.useRef)(null),
-         [YG, VG] = (0, wG.useState)(0),
-         pG = (0, wG.useRef)(!0),
-         QG = (0, wG.useRef)(null),
-         KG = (0, wG.useRef)({
-           value: bG,
-           onSave: kG
-         });
- ... (31 more removed lines; see GitHub link above)
+       var rM;
+       if (null === (rM = EM.current) || void 0 === rM || rM.call(EM, eM(MM)), yM[0].current) {
+         const rM = `${(0,QM.g)(MM)}vh`;
+         yM[0].current.style.transform = `translateX(calc(0px - ${rM}))`, yM[1].current.style.transform = `translateX(calc(0px + ${rM}))`, yM[2].current.style.transform = `translateY(calc(0px - ${rM}))`, yM[3].current.style.transform = `translateY(calc(0px + ${rM}))`
+       }
+       lM.current && (lM.current.style.filter = `blur(${Math.round(MM/10)}px)`)
```

#### 9. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L222-L228` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L100-L101) · [Before (L222-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L222-L228)

```diff
-         name: yG,
-         place: kG,
-         openedIn: UG,
-         isYou: YG,
-         manage: pG,
-         hiddenNames: fG,
-         zIndex: hG
+         custom: rM,
+         touch: iM
```

#### 10. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L230-L277` → after: `L103-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L103-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L103-L110) · [Before (L230-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L230-L277)

```diff
-       const {
-         t: dG,
-         selectedLanguage: JG
-       } = (0, QG.w)(), [rG, zG] = (0, wG.useState)(null), {
-         state: oG
-       } = pG, XG = `player:${yG}`, uG = function(GG, bG) {
-         if ("banned" === GG.section) return {
-           ...iG,
-           unban: !0
-         };
-         if ("gone" === GG.section) return iG;
-         const {
-           player: ZG
-         } = GG, wG = "here" === GG.section, SG = wG || "none" !== ZG.role ? ZG.can.roles : [];
-         return {
-           gamemode: wG && bG && null !== ZG.gamemode && ZG.can.gamemode,
- ... (32 more removed lines; see GitHub link above)
+       const jM = (0, SM.e)("aimingOverlay", "none"),
+         aM = "1.2vh",
+         PM = "0.3vh";
+       (0, OM.useEffect)((() => {
+         UM && bM(UM)
+       }), []);
+       const nM = (0, OM.useRef)(null !== rM);
+       return (0, OM.useLayoutEffect)((() => {
```

#### 11. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L279-L312` → after: `L112-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L112-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L112-L143) · [Before (L279-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L279-L312)

```diff
-         DG = `${dG("lobbyManage:roleConfirm",{playerName:yG,role:AG(rG.role)})} ${null!==(NG=nG(rG.role))&&void 0!==NG?NG:""}`
-       } else if (FG) DG = (0, jG.jsx)(PG, {
-         status: FG
-       });
-       else if (YG) DG = dG("lobbyManage:you");
-       else if ("here" === kG.section) "none" === kG.player.role && MG - kG.player.at < 6e5 && (DG = aG(dG, JG.code, "lobbyManage:joinedAgo", kG.player.at, MG));
-       else if ("away" === kG.section) {
-         if (kG.player.at > 0) {
-           const GG = "kicked" === kG.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
-           DG = aG(dG, JG.code, GG, kG.player.at, MG)
-         }
-       } else "banned" === kG.section ? null !== kG.bannedAt && (DG = aG(dG, JG.code, "lobbyManage:bannedAgo", kG.bannedAt, MG)) : "banned" === UG && (DG = dG("lobbyManageEntry:unbanned"));
-       return (0, jG.jsx)("div", {
-         className: "LobbyManagePlayerRow",
-         "data-lobby-manage-row": yG,
-         children: (0, jG.jsxs)(CG.h, {
- ... (18 more removed lines; see GitHub link above)
+         rM ? null === (MM = EM.current) || void 0 === MM || MM.call(EM, eM(GM)) : nM.current && bM(GM);
+         nM.current = null !== rM
+       }), [rM]), (0, hM.jsxs)(hM.Fragment, {
+         children: ["sniper" === jM && (0, hM.jsxs)("div", {
+           ref: lM,
+           className: "GunCrosshairOverlayWrapper",
+           children: [(0, hM.jsx)("div", {
+             className: "GunCrosshairOverlay"
+           }), (0, hM.jsx)("div", {
+             className: "GunCrosshairOverlayLine1"
+           }), (0, hM.jsx)("div", {
+             className: "GunCrosshairOverlayLine2"
+           }), (0, hM.jsx)("div", {
+             className: "GunCrosshairOverlayDot"
+           })]
+         }), (0, hM.jsxs)("div", {
+ ... (16 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L314-L324` → after: `L145-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L145-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L145-L152) · [Before (L314-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L314-L324)

```diff
-               children: [(0, jG.jsx)(KG.c, {
-                 name: "gavel"
-               }), (0, jG.jsx)("span", {
-                 className: "LobbyManageButtonLabel",
-                 children: dG("lobbyManageEntry:ban")
-               })]
-             }), "role" === rG.kind && (0, jG.jsx)(EG.d, {
-               className: "LobbyManageIconButton SmallTextLight",
-               analyticsClick: {
-                 id: "lobby_manage.set_role",
-                 value: rG.role
+               ref: yM[0]
+             }), (0, hM.jsx)("div", {
+               className: "GunCrosshair",
+               style: {
+                 width: aM,
+                 height: PM,
+                 top: "49.85vh",
+                 left: "calc(50vw - 0.6vh)"
```

#### 13. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L326-L327` → after: `L154-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L154-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L154-L161) · [Before (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L326-L327)

```diff
-               onClick: () => {
-                 zG(null), tG(rG.role)
+               ref: yM[1]
+             }), (0, hM.jsx)("div", {
+               className: "GunCrosshair",
+               style: {
+                 width: PM,
+                 height: aM,
+                 top: "49.4vh",
+                 left: "calc(50vw - 0.15vh)"
```

#### 14. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L329-L335` → after: `L163-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L163-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L163-L170) · [Before (L329-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L329-L335)

```diff
-               children: dG("lobbyManage:makeRole", {
-                 role: AG(rG.role)
-               })
-             }), (0, jG.jsx)(EG.h, {
-               className: "LobbyManageIconButton SmallTextLight",
-               onClick: () => {
-                 zG(null)
+               ref: yM[2]
+             }), (0, hM.jsx)("div", {
+               className: "GunCrosshair",
+               style: {
+                 width: PM,
+                 height: aM,
+                 top: "49.4vh",
+                 left: "calc(50vw - 0.15vh)"
```

#### 15. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L337-L437` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L172) · [Before (L337-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L337-L437)

```diff
-               children: dG("general:cancel")
-             })]
-           }), null === rG && (0, jG.jsxs)(jG.Fragment, {
-             children: [(0, jG.jsxs)("div", {
-               className: "LobbyManageChoices",
-               children: [uG.gamemode && null !== gG && (0, jG.jsx)(IG.b, {
-                 options: (null !== (bG = oG.gamemodes) && void 0 !== bG ? bG : []).map((GG => ({
-                   value: GG.value,
-                   label: vG(dG, GG.label, fG)
-                 }))),
-                 value: null !== (ZG = lG.get("gamemode")) && void 0 !== ZG ? ZG : gG.gamemode,
-                 disabled: cG,
-                 onChange: GG => {
-                   (0, SG.reportAnalyticsClick)({
-                     id: "lobby_manage.set_gamemode",
-                     value: GG.value
- ... (85 more removed lines; see GitHub link above)
+               ref: yM[3]
```

#### 16. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L584-L598` → after: `L178-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L178-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L178-L188) · [Before (L584-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L584-L598)

```diff
-     var eG = ZG(4655),
-       RG = ZG(1583),
-       TG = ZG(37055),
-       HG = ZG(37071),
-       tG = ZG(37067),
-       DG = ZG(37060),
-       NG = ZG(37093),
-       OG = ZG(37086),
-       xG = ZG(37089);
- 
-     function BG(GG) {
-       const bG = new Set;
-       for (const ZG of GG) bG.add(ZG.toLowerCase());
-       return bG
-     }
+   },
+   34997: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => JM,
+       e: () => hM
+     });
+     iM(34999);
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(44),
+       aM = iM(34989);
```

#### 17. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L600-L711` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L190-L191) · [Before (L600-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L600-L711)

```diff
-     function Gb(GG) {
-       var bG, ZG;
-       let {
-         state: SG,
-         lobbyName: LG,
-         listed: yG,
-         isListed: kG,
-         gJ: UG,
-         Kr: YG,
-         statusOf: VG
-       } = GG;
-       const {
-         t: pG,
-         selectedLanguage: fG
-       } = (0, QG.w)(), KG = (0, RG.k)(), hG = (0, zG.f)("players"), JG = null === hG.localId ? null : null !== (bG = null === (ZG = hG.byId[hG.localId]) || void 0 === ZG ? void 0 : ZG.name) && void 0 !== bG ? bG : null, rG = (0, wG.useMemo)((() => (0, DG.d)(KG.friends, LG, SG.her … [truncated]
-         let {
- ... (96 more removed lines; see GitHub link above)
+     function PM(MM, rM) {
+       return Math.max(1, Math.round(MM * rM))
```

#### 18. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L714-L734` → after: `L194-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L194-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L194-L243) · [Before (L714-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L714-L734)

```diff
-     function bb(GG) {
-       let {
-         manage: bG,
-         listing: ZG
-       } = GG;
-       const {
-         t: wG
-       } = (0, QG.w)(), LG = (GG, ZG) => ((0, SG.reportAnalyticsClick)({
-         id: "lobby_manage.set_listing",
-         value: GG
-       }), bG.send({
-         type: "setListing",
-         field: GG,
-         value: ZG
-       }, `listing:${GG}`)), yG = GG => {
-         const ZG = bG.statusOf(`listing:${GG}`);
- ... (5 more removed lines; see GitHub link above)
+     function nM(MM, rM) {
+       const iM = rM * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
+         OM = function(MM, rM) {
+           if (MM.lines) return PM(MM.lineThickness, rM) % 2;
+           if (MM.dot) return PM(MM.dotSize, rM) % 2;
+           return QM(MM, rM) % 2
+         }(MM, rM),
+         SM = zM(MM.lineThickness * iM, OM),
+         jM = PM(MM.lineLength, iM),
+         aM = Math.round(MM.gap * iM),
+         nM = MM.outline > 0 ? PM(MM.outline, iM) : 0,
+         mM = [];
+       if (MM.lines && (mM.push({
+           x: SM + aM,
+           y: 0,
+           w: jM,
+ ... (34 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L736-L820` → after: `L245-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L245-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L245-L269) · [Before (L736-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L736-L820)

```diff
-       };
-       return (0, jG.jsxs)("div", {
-         className: "LobbyManageBox LobbyManageListing",
-         children: [(0, jG.jsx)(dG.e, {
-           label: wG("lobbyManage:inWorldsList")
-         }), (0, jG.jsxs)("div", {
-           className: "LobbyManageRuleRow",
-           children: [(0, jG.jsx)("div", {
-             className: "SliderText",
-             children: wG("lobbyManage:description")
-           }), (0, jG.jsx)(AG, {
-             value: ZG.description,
-             ariaLabel: wG("lobbyManage:description"),
-             wide: !0,
-             onSave: GG => LG("description", GG)
-           })]
- ... (69 more removed lines; see GitHub link above)
+       }
+       const HM = mM.map((MM => ({
+         ...MM,
+         x: MM.x - nM,
+         y: MM.y - nM,
+         w: MM.w + 2 * nM,
+         h: MM.h + 2 * nM
+       })));
+       let hM = null,
+         JM = null;
+       if (MM.circle) {
+         const rM = PM(MM.circleThickness, iM),
+           jM = function(MM, rM) {
+             return MM + (MM % 2 === rM ? 0 : 1)
+           }(QM(MM, iM), OM),
+           aM = (SM - jM) / 2;
+ ... (9 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L823-L838` → after: `L272-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L272-L273) · [Before (L823-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L823-L838)

```diff
-     function wb(GG) {
-       let {
-         manage: bG
-       } = GG;
-       const {
-         lobbyName: ZG,
-         shownLobbyName: wG
-       } = (0, zG.f)("connectedGame");
-       return bG.state.you.canSetVisibility && null !== ZG ? (0, jG.jsx)(Lb, {
-         manage: bG,
-         lobbyName: ZG,
-         worldCode: null !== wG && void 0 !== wG ? wG : ZG
-       }, ZG) : (0, jG.jsx)(yb, {
-         manage: bG,
-         lobbyName: null !== ZG && void 0 !== ZG ? ZG : ""
-       })
+     function QM(MM, rM) {
+       return Math.round(MM.circleRadius * rM * 2 + PM(MM.circleThickness, rM))
```

#### 21. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L841-L842` → after: `L276-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L276-L277) · [Before (L841-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L841-L842)

```diff
-     function Sb(GG) {
-       return GG.map((GG => GG.toLowerCase())).sort().join(",")
+     function zM(MM, rM) {
+       return Math.max(2 - rM, 2 * Math.round((MM - rM) / 2) + rM)
```

#### 22. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L845-L983` → after: `L280-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L280-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L280-L288) · [Before (L845-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L845-L983)

```diff
-     function Lb(GG) {
-       var bG;
-       let {
-         manage: ZG,
-         lobbyName: LG,
-         worldCode: yG
-       } = GG;
-       const {
-         t: kG
-       } = (0, QG.w)(), {
-         settings: UG,
-         loading: YG,
-         change: VG,
-         retry: pG,
-         refresh: fG
-       } = (0, TG.j)(LG), KG = (0, RG.k)(), {
- ... (123 more removed lines; see GitHub link above)
+     function LM(MM, rM, iM) {
+       const OM = 2 * iM >= rM - 1;
+       return {
+         x: MM,
+         y: MM,
+         size: rM,
+         border: Math.min(iM, Math.floor(rM / 2)),
+         filled: OM
+       }
```

#### 23. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L986-L1054` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L293-L294) · [Before (L986-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L986-L1054)

```diff
-     function yb(GG) {
-       var bG;
-       let {
-         manage: ZG,
-         lobbyName: wG
-       } = GG;
-       const {
-         t: LG
-       } = (0, QG.w)(), {
-         state: yG
-       } = ZG, kG = VG(), UG = null !== (bG = yG.whitelist) && void 0 !== bG ? bG : [];
-       return (0, jG.jsxs)("div", {
-         className: "LobbyManagePage",
-         children: [(0, jG.jsxs)("div", {
-           className: "LobbyManageBox",
-           children: [(0, jG.jsx)(dG.e, {
- ... (53 more removed lines; see GitHub link above)
+     function hM(MM, rM) {
+       return MM && rM ? `scale(${HM})` : "scale(1)"
```

#### 24. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1169-L1217` → after: `L298-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L298-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L298-L301) · [Before (L1169-L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1169-L1217)

```diff
-       let {
-         names: bG,
-         pending: ZG,
-         onAction: SG
-       } = GG;
-       const {
-         t: LG
-       } = (0, QG.w)(), yG = (0, wG.useRef)(null), [kG, UG] = (0, wG.useState)(""), YG = () => {
-         const GG = kG.trim();
-         "" !== GG && (SG(GG, "add"), yG.current && (yG.current.value = ""), UG(""))
-       };
-       return (0, jG.jsxs)("div", {
-         className: "LobbyManageNames",
-         children: [bG.map((GG => (0, jG.jsxs)("div", {
-           className: "LobbyManageName",
-           children: [(0, jG.jsx)("span", {
- ... (33 more removed lines; see GitHub link above)
+       return "classic" === MM.settings.style ? (0, mM.jsx)(lM, {
+         ...MM
+       }) : (0, mM.jsx)(wM, {
+         ...MM
```

#### 25. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1220-L1226` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L304) · [Before (L1220-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1220-L1226)

```diff
-     const fb = [{
-       group: "gameplay",
-       title: "lobbyManage:gameplay"
-     }, {
-       group: "world",
-       title: "lobbyManage:world"
-     }];
+     const dM = .125;
```

#### 26. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1229-L1261` → after: `L307-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L307-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L307-L317) · [Before (L1229-L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1229-L1261)

```diff
-       return fb.map((ZG => {
-         let {
-           group: wG,
-           title: SG
-         } = ZG;
-         const LG = GG.filter((GG => GG.group === wG && void 0 === GG.parent)).map((ZG => {
-           const wG = !0 === bG(ZG) ? GG.filter((GG => GG.parent === ZG.key)) : [];
-           return {
-             rule: ZG,
-             children: wG
-           }
-         }));
-         return {
-           group: wG,
-           title: SG,
-           items: LG
- ... (17 more removed lines; see GitHub link above)
+       const iM = {};
+       if (MM.color !== aM.e.color && (iM.color = (0, aM.i)(MM.color)), MM.opacity !== aM.e.opacity && (iM.opacity = MM.opacity / 100), MM.outline !== aM.e.outline || MM.outlineColor !== aM.e.outlineColor) {
+         const rM = MM.outline,
+           OM = (0, aM.i)(MM.outlineColor);
+         iM.textShadow = rM > 0 ? `-${rM}px 0 ${OM}, 0 ${rM}px ${OM}, ${rM}px 0 ${OM}, 0 -${rM}px ${OM}` : "none"
+       }
+       if (MM.size !== aM.e.size) {
+         const OM = MM.size / 100;
+         iM.fontSize = rM ? `calc(max(1.3rem, 18px) * ${OM})` : `calc(1.3rem * ${OM})`, iM.marginTop = `-${dM}em`, iM.transformOrigin = `50% calc(50% + ${dM}em)`
+       }
+       return iM
```

#### 27. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1266-L1267` → after: `L322-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L322-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L322-L327) · [Before (L1266-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1266-L1267)

```diff
-         manage: bG,
-         rowsShown: ZG
+         settings: rM,
+         touch: iM,
+         inPreview: OM,
+         inEditor: jM,
+         pressed: aM = !1,
+         pressRef: PM
```

#### 28. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1316-L1497` → after: `L330-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L330-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L330-L334) · [Before (L1316-L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1316-L1497)

```diff
-         className: "LobbyManagePage LobbyManageRules",
-         children: pG.map((GG => {
-           let {
-             group: bG,
-             title: ZG,
-             items: SG
-           } = GG;
-           const yG = SG.filter((GG => {
-             let {
-               rule: bG
-             } = GG;
-             return hG(bG)
-           }));
-           return 0 === yG.length ? null : (0, jG.jsxs)(wG.Fragment, {
-             children: [(0, jG.jsx)(dG.e, {
-               label: LG(ZG)
- ... (166 more removed lines; see GitHub link above)
+         className: SM()("Crosshair", {
+           Touch: iM,
+           CrosshairInPreview: OM,
+           CrosshairInEditor: jM || OM
+         }),
```

#### 29. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1499-L1510` → after: `L336-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L336-L338) · [Before (L1499-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1499-L1510)

```diff
-         className: "MenuBody LobbyManageBody",
-         onScroll: () => {
-           null === zG.current ? qG() : Math.abs(UG.current.scrollTop - EG.current) > 1 && nG()
-         },
-         onClick: GG => {
-           var bG;
-           null !== (bG = VG.current) && void 0 !== bG && bG.contains(GG.target) || nG()
-         },
-         onFocus: GG => {
-           var bG;
-           const ZG = null === zG.current ? null : pG.current.get(zG.current);
-           !ZG || ZG.contains(GG.target) || null !== (bG = VG.current) && void 0 !== bG && bG.contains(GG.target) || nG()
+         style: {
+           transform: hM(aM, rM.growOnClick),
+           ...yM(rM, iM)
```

#### 30. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1512-L1561` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L340) · [Before (L1512-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1512-L1561)

```diff
-         children: [LG.length > 1 && (0, jG.jsx)("div", {
-           ref: VG,
-           className: "LobbyManageChips",
-           children: (0, jG.jsx)(JG.c, {
-             options: LG.map((GG => ({
-               value: GG,
-               label: (0, jG.jsx)(zb, {
-                 page: GG
-               }),
-               ariaLabel: ZG(db[GG].title)
-             }))),
-             value: uG,
-             padTabs: "2",
-             ariaLabel: ZG("lobbyManageEntry:manageLobby"),
-             reselectable: !0,
-             onChange: sG
- ... (34 more removed lines; see GitHub link above)
+         children: "+"
```

#### 31. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1565-L1569` → after: `L344-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L344-L345) · [Before (L1565-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1565-L1569)

```diff
-     function ob(GG) {
-       return void 0 === (null === GG || void 0 === GG ? void 0 : GG.page) ? null : {
-         page: GG.page,
-         seq: GG.seq
-       }
+     function EM(MM, rM) {
+       return MM / rM + "px"
```

#### 32. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1572-L1717` → after: `L348-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L348-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L348-L353) · [Before (L1572-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1572-L1717)

```diff
-     function Xb(GG) {
-       let {
-         leaderboard: bG
-       } = GG;
-       const ZG = function() {
-           const GG = (0, UG.i)("lobbyManage"),
-             [bG, ZG] = (0, wG.useReducer)((GG => GG + 1), 0),
-             [SG] = (0, wG.useState)((() => new YG.d(ZG)));
-           return (0, wG.useEffect)((() => {
-             const GG = SG.nextDeadline();
-             if (null === GG) return;
-             const bG = setTimeout((() => {
-               SG.expire(Date.now()), ZG()
-             }), Math.max(0, GG - Date.now()));
-             return () => {
-               clearTimeout(bG)
- ... (130 more removed lines; see GitHub link above)
+     function UM(MM, rM, iM, OM) {
+       return {
+         ...eM(MM, rM, iM),
+         width: EM(MM.w, iM),
+         height: EM(MM.h, iM),
+         background: OM
```

#### 33. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1747-L1757` → after: `L359-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L359-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L359-L365) · [Before (L1747-L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1747-L1757)

```diff
-         playerSocialPreview: null !== pG && void 0 !== pG ? pG : {
-           isError: !1,
-           name: bG,
-           ranks: YG ? [...UG.ranks] : [],
-           cosmetics: null !== VG && void 0 !== VG ? VG : {},
-           nameColour: null !== (yG = null === VG || void 0 === VG ? void 0 : VG.nameColour) && void 0 !== yG ? yG : wG.d,
-           location: {
-             status: "inGame"
-           }
-         },
-         isFriend: void 0 !== kG
+         left: EM(MM.x, rM),
+         top: EM(MM.y, rM),
+         width: EM(MM.size, rM),
+         height: EM(MM.size, rM),
+         borderWidth: EM(MM.border, rM),
+         borderColor: iM,
+         background: MM.filled ? iM : void 0
```

#### 34. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1760-L1914` → after: `L368-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L368-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L368-L389) · [Before (L1760-L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1760-L1914)

```diff
-   },
-   37089: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => pG
-     });
-     var wG = ZG(51),
-       SG = ZG(1006),
-       LG = ZG.n(SG),
-       yG = ZG(1621),
-       kG = ZG(1393),
-       UG = ZG(1302),
-       YG = ZG(1016),
-       VG = ZG(1067);
- 
-     function pG(GG) {
-       let {
- ... (139 more removed lines; see GitHub link above)
+     const CM = {
+       left: [-1, 0],
+       right: [1, 0],
+       up: [0, -1],
+       down: [0, 1]
+     };
+ 
+     function eM(MM, rM, iM) {
+       const [OM, SM] = MM.arm ? CM[MM.arm] : [0, 0], jM = Math.round(rM * iM);
+       return {
+         left: EM(MM.x + OM * jM, iM),
+         top: EM(MM.y + SM * jM, iM)
+       }
+     }
+ 
+     function bM(MM) {
+ ... (6 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1918-L1920` → after: `L393-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L393-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L393-L398) · [Before (L1918-L1920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1918-L1920)

```diff
-         Tp: bG,
-         children: ZG,
-         ...kG
+         settings: rM,
+         inPreview: iM,
+         inEditor: OM,
+         pressed: PM = !1,
+         spread: QM,
+         spreadRef: zM
```

#### 36. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1922-L1924` → after: `L400-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L400-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L400-L467) · [Before (L1922-L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1922-L1924)

```diff
-       const {
-         t: UG
-       } = (0, wG.w)();
+       const LM = (0, jM.useRef)(null),
+         {
+           box: hM,
+           dpr: JM
+         } = function(MM) {
+           const [rM, iM] = (0, jM.useState)({
+             box: {
+               left: 0,
+               top: 0,
+               width: 0,
+               height: 0
+             },
+             dpr: 1
+           });
+           return (0, jM.useLayoutEffect)((() => {
+             const rM = MM.current;
+ ... (52 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1926-L1932` → after: `L469-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L469-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L469-L481) · [Before (L1926-L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1926-L1932)

```diff
-         className: "WhitelistTickRow",
-         onClick: () => {
-           bG.onChange(!bG.on)
-         },
-         children: (0, yG.jsx)(SG.h, {
-           ...kG,
-           opensProfileCard: !1,
+         ref: LM,
+         className: SM()("CrosshairShapes", {
+           CrosshairInPreview: iM,
+           CrosshairInEditor: OM || iM,
+           CrosshairSpreads: void 0 !== zM
+         }),
+         children: (0, mM.jsx)("div", {
+           className: "CrosshairShapesOrigin",
+           style: {
+             left: lM.x,
+             top: lM.y,
+             opacity: rM.opacity / 100
+           },
```

#### 38. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1934-L1950` → after: `L483-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L483-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L483-L498) · [Before (L1934-L1950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1934-L1950)

```diff
-             className: "WhitelistTickRowActions",
-             onClick: GG => {
-               GG.stopPropagation()
-             },
-             children: [ZG, (0, yG.jsx)("label", {
-               className: "WhitelistTickRowTick",
-               children: (0, yG.jsx)(LG.e, {
-                 checked: bG.on,
-                 disabled: !1,
-                 ariaLabel: UG("worldSocial:letJoin", {
-                   playerName: kG.playerSocialPreview.name
-                 }),
-                 onChange: GG => {
-                   bG.onChange(GG.target.checked)
-                 }
-               })
- ... (1 more removed lines; see GitHub link above)
+             className: "CrosshairShapesPress",
+             children: [yM.ringOutline && (0, mM.jsx)("div", {
+               className: "CrosshairRing",
+               style: GM(yM.ringOutline, JM, CM)
+             }), yM.outlines.map(((MM, rM) => (0, mM.jsx)("div", {
+               className: "CrosshairPart",
+               ...bM(MM),
+               style: UM(MM, tM, JM, CM)
+             }, `o${rM}`))), yM.ring && (0, mM.jsx)("div", {
+               className: "CrosshairRing",
+               style: GM(yM.ring, JM, EM)
+             }), yM.fills.map(((MM, rM) => (0, mM.jsx)("div", {
+               className: "CrosshairPart",
+               ...bM(MM),
+               style: UM(MM, tM, JM, EM)
+             }, `f${rM}`)))]
```

#### 39. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1956` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L504) · [Before (L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1956)

```diff
-   37067: (GG, bG, ZG) => {
+   35003: (MM, rM, iM) => {
```

#### 40. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1958` → after: `L506-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L506-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L506-L508) · [Before (L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1958)

```diff
-       d: () => KG
+       b: () => zM,
+       f: () => dM,
+       i: () => JM
```

#### 41. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1960-L1970` → after: `L510-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L510-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L510-L517) · [Before (L1960-L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1960-L1970)

```diff
-     var wG = ZG(51),
-       SG = ZG(1151),
-       LG = ZG(1827),
-       yG = ZG(80),
-       kG = ZG(17),
-       UG = ZG(1415),
-       YG = ZG(2657),
-       VG = ZG(34376),
-       pG = ZG(1393),
-       fG = ZG(1016),
-       QG = ZG(1067);
+     var OM = iM(34989);
+     const SM = "XH1-",
+       jM = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
+       aM = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
+       PM = ["color", "outlineColor"],
+       nM = 1 + 3 * PM.length + aM.length + 1,
+       QM = Math.ceil(8 * nM / Math.log2(62)),
+       zM = SM.length + QM;
```

#### 42. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L1973-L2030` → after: `L520-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L520-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L520-L522) · [Before (L1973-L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L1973-L2030)

```diff
-       let {
-         worldCode: bG,
-         message: ZG
-       } = GG;
-       const {
-         t: KG
-       } = (0, SG.w)(), {
-         isTouchScreen: hG
-       } = (0, kG.o)(["isTouchScreen"]), dG = yG.featureFlags.canUseInviteLinks, JG = (0, VG.h)(dG && null === ZG), [rG, zG] = (0, YG.j)(), EG = (0, wG.useRef)(null);
-       if (null !== ZG) return (0, QG.jsxs)("div", {
-         className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
-         children: [(0, QG.jsx)(fG.c, {
-           name: "lock"
-         }), (0, QG.jsx)("span", {
-           children: ZG
-         })]
- ... (42 more removed lines; see GitHub link above)
+       let rM = 90;
+       for (const iM of MM) rM = 31 * rM + iM & 255;
+       return rM
```

#### 43. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2032-L2046` → after: `L524-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L524-L525) · [Before (L2032-L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2032-L2046)

```diff
-   },
-   37079: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => QG,
-       d: () => fG,
-       f: () => pG
-     });
-     var wG = ZG(580),
-       SG = ZG(1151),
-       LG = ZG(1583),
-       yG = ZG(2630),
-       kG = ZG(2575),
-       UG = ZG(1393),
-       YG = ZG(37086),
-       VG = ZG(1067);
+     const mM = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
+       HM = BigInt(mM.length);
```

#### 44. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2049-L2058` → after: `L528-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L528-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L528-L532) · [Before (L2049-L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2049-L2058)

```diff
-       var ZG;
-       return {
-         isError: !1,
-         name: GG,
-         ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
-         cosmetics: null !== bG && void 0 !== bG ? bG : {},
-         nameColour: null !== (ZG = null === bG || void 0 === bG ? void 0 : bG.nameColour) && void 0 !== ZG ? ZG : wG.d,
-         location: {
-           status: "offline"
-         }
+       let iM = 0n;
+       for (const SM of MM) {
+         const MM = mM.indexOf(SM);
+         if (MM < 0) return null;
+         iM = iM * HM + BigInt(MM)
```

#### 45. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2063-L2083` → after: `L541-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L541-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L541-L543) · [Before (L2063-L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2063-L2083)

```diff
-       let {
-         player: bG,
-         isFriend: ZG = !1,
-         status: wG,
-         showLocation: UG = void 0 === wG,
-         Tp: pG,
-         onSendFriendRequest: fG,
-         actions: QG,
-         zIndex: KG
-       } = GG;
-       const {
-         t: hG
-       } = (0, SG.w)();
-       let dG = wG;
-       null !== pG && void 0 !== pG && pG.on && (dG = (0, VG.jsxs)(VG.Fragment, {
-         children: [null !== wG && void 0 !== wG ? wG : (0, VG.jsx)(kG.d, {
- ... (5 more removed lines; see GitHub link above)
+       let rM = "shapes" === MM.style ? 1 : 0;
+       jM.forEach(((iM, OM) => {
+         MM[iM] && (rM |= 1 << OM + 1)
```

#### 46. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2085-L2105` → after: `L545-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L545-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L545-L563) · [Before (L2085-L2105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2085-L2105)

```diff
-       const JG = {
-         playerSocialPreview: bG,
-         isFriend: ZG,
-         hideFriendBadge: !0,
-         onFriendRemoved: ZG ? GG => {
-           LG.b.removeFriendFromState(GG)
-         } : void 0,
-         status: dG,
-         showLocation: UG,
-         onSendFriendRequest: fG,
-         zIndex: KG
-       };
-       return pG ? (0, VG.jsx)(YG.b, {
-         ...JG,
-         Tp: pG,
-         children: QG
- ... (5 more removed lines; see GitHub link above)
+       const iM = [rM];
+       for (const SM of PM) {
+         const rM = (0, OM.f)(SM, MM[SM]);
+         iM.push(rM >> 16 & 255, rM >> 8 & 255, 255 & rM)
+       }
+       for (const SM of aM) {
+         const {
+           min: rM,
+           step: jM
+         } = OM.d[SM];
+         iM.push(Math.round(((0, OM.f)(SM, MM[SM]) - rM) / jM))
+       }
+       return iM.push(LM(iM)), SM + function(MM, rM) {
+         let iM = 0n;
+         for (const SM of MM) iM = iM << 8n | BigInt(SM);
+         let OM = "";
+ ... (3 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2109-L2134` → after: `L567-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L567-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L567-L593) · [Before (L2109-L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2109-L2134)

```diff
-       let {
-         row: bG,
-         Tp: ZG,
-         canInvite: wG,
-         invited: LG,
-         onInvite: yG,
-         zIndex: kG
-       } = GG;
-       const {
-         t: YG
-       } = (0, SG.w)(), pG = "online" === bG.place ? UG.d : UG.h;
-       return (0, VG.jsx)(fG, {
-         player: bG.friend,
-         isFriend: !0,
-         status: "here" === bG.place ? YG("worldSocial:inThisWorld") : void 0,
-         showLocation: !0,
- ... (10 more removed lines; see GitHub link above)
+       for (const rM of MM.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${QM}})`, "gi"))) {
+         const MM = yM(hM(rM[1], nM));
+         if (MM) return MM
+       }
+       return null
+     }
+ 
+     function yM(MM) {
+       if (!MM || MM.length !== nM || LM(MM.slice(0, -1)) !== MM[MM.length - 1]) return null;
+       const rM = MM[0],
+         iM = {
+           ...OM.e,
+           style: 1 & rM ? "shapes" : "classic"
+         };
+       jM.forEach(((MM, OM) => {
+         iM[MM] = 0 !== (rM & 1 << OM + 1)
+ ... (11 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2137` → after: `L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L596) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2137)

```diff
-   37055: (GG, bG, ZG) => {
+   34989: (MM, rM, iM) => {
```

#### 49. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2140-L2141` → after: `L599-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L599-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L599-L605) · [Before (L2140-L2141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2140-L2141)

```diff
-       g: () => yG,
-       j: () => YG
+       e: () => SM,
+       f: () => jM,
+       i: () => QM,
+       j: () => nM,
+       m: () => zM,
+       p: () => PM,
+       t: () => aM
```

#### 50. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2143-L2145` → after: `L607-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L607-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L607-L709) · [Before (L2143-L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2143-L2145)

```diff
-     var wG = ZG(51),
-       SG = ZG(4611),
-       LG = ZG(1827);
+     const OM = {
+         opacity: {
+           min: 5,
+           max: 100,
+           step: 1
+         },
+         outline: {
+           min: 0,
+           max: 4,
+           step: .1
+         },
+         size: {
+           min: 25,
+           max: 400,
+           step: 5
+         },
+ ... (87 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2148-L2155` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L712) · [Before (L2148-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2148-L2155)

```diff
-       const bG = {
-         lobbyName: GG,
-         answer: null,
-         response: SG.d.getSocialSettings(GG)
-       };
-       return bG.response.then((GG => {
-         bG.answer = GG
-       })), bG
+       return PM(MM, SM)
```

#### 52. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2160` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L716) · [Before (L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2160)

```diff
-       kG.set(GG.lobbyName, GG)
+       return `#${MM.toString(16).padStart(6,"0")}`
```

#### 53. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2164-L2224` → after: `L720-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L720-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L720-L721) · [Before (L2164-L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2164-L2224)

```diff
-       const [bG] = (0, wG.useState)((() => function(GG) {
-         var bG;
-         const ZG = null !== (bG = kG.get(GG)) && void 0 !== bG ? bG : null;
-         return null !== ZG && void 0 !== ZG && ZG.answer && "error" in ZG.answer ? null : ZG
-       }(GG))), [ZG, yG] = (0, wG.useState)((() => null !== bG && void 0 !== bG && bG.answer && "settings" in bG.answer ? bG.answer.settings : null)), [UG, YG] = (0, wG.useState)(!0), [VG, pG] = (0, wG.useState)(null !== ZG), fG = (0, wG.useRef)(ZG);
-       fG.current = ZG;
-       const QG = (0, wG.useRef)(0),
-         KG = (0, wG.useRef)(0),
-         hG = (0, wG.useRef)(!1),
-         dG = (0, wG.useRef)(!0),
-         JG = (0, wG.useCallback)((async bG => {
-           const ZG = ++QG.current,
-             wG = await (null !== bG && void 0 !== bG ? bG : SG.d.getSocialSettings(GG));
-           dG.current && ZG === QG.current && (pG(!0), YG(!1), "error" in wG || yG(wG.settings))
-         }), [GG]),
-         rG = (0, wG.useCallback)((() => {
- ... (45 more removed lines; see GitHub link above)
+       const rM = /^#?([0-9a-f]{6})$/i.exec(MM.trim());
+       return rM ? parseInt(rM[1], 16) : null
```

#### 54. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2227` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L724) · [Before (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2227)

```diff
-   37093: (GG, bG, ZG) => {
+   35006: (MM, rM, iM) => {
```

#### 55. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2229` → after: `L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L726) · [Before (L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2229)

```diff
-       e: () => yG,
+       b: () => LM,
```

#### 56. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2232-L2233` → after: `L729-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L729-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L729-L735) · [Before (L2232-L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2232-L2233)

```diff
-     var wG = ZG(140);
-     const SG = new Map;
+     var OM = iM(44),
+       SM = iM(30),
+       jM = iM(35003),
+       aM = iM(34989);
+     const PM = "crosshairCode";
+     let nM = null;
+     const QM = new Set;
```

#### 57. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2235-L2238` → after: `L737-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L737-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L737-L743) · [Before (L2235-L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2235-L2238)

```diff
-     function LG(GG, bG) {
-       var ZG;
-       const wG = null !== (ZG = SG.get(GG)) && void 0 !== ZG ? ZG : new Map;
-       wG.set(bG, Date.now()), SG.set(GG, wG)
+     function zM() {
+       if (null === nM) {
+         var MM;
+         const rM = SM.g.getItem(PM);
+         nM = null !== (MM = "string" === typeof rM ? (0, jM.f)(rM) : null) && void 0 !== MM ? MM : aM.e
+       }
+       return nM
```

#### 58. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2242-L2271` → after: `L747-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L747-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L747-L748) · [Before (L2242-L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2242-L2271)

```diff
-       const bG = SG.get(GG);
-       if (!bG) return [];
-       const ZG = Date.now();
-       for (const [SG, LG] of bG) ZG - LG >= wG.i && bG.delete(SG);
-       return [...bG.keys()]
-     }
-   },
-   37060: (GG, bG, ZG) => {
-     function wG(GG, bG) {
-       const ZG = bG.toLowerCase();
-       for (const wG of GG)
-         if (wG.toLowerCase() === ZG) return !0;
-       return !1
-     }
- 
-     function SG(GG, bG, ZG) {
- ... (14 more removed lines; see GitHub link above)
+       nM = MM, (0, aM.j)(MM) ? SM.g.removeItem(PM) : SM.g.setItem(PM, (0, jM.i)(MM));
+       for (const rM of QM) rM()
```

#### 59. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2274-L2278` → after: `L751-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L751-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L751-L761) · [Before (L2274-L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2274-L2278)

```diff
-     function LG(GG, bG, ZG) {
-       const SG = [],
-         LG = GG.flatMap((GG => "here" === GG.place ? [GG.friend.name] : []));
-       for (const yG of [...LG, ...bG]) wG(SG, yG) || wG(ZG, yG) || SG.push(yG);
-       return SG
+     function mM() {
+       const [MM, rM] = (0, OM.useState)(zM);
+       return (0, OM.useEffect)((() => {
+         const MM = () => {
+           rM(zM())
+         };
+         return MM(), iM = MM, QM.add(iM), () => {
+           QM.delete(iM)
+         };
+         var iM
+       }), []), MM
```

#### 60. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2281-L2282` → after: `L773-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L773-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L773-L774) · [Before (L2281-L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2281-L2282)

```diff
-     function yG(GG, bG) {
-       return null === GG || void 0 === GG || !GG.canManage || wG(GG.whitelist, bG) ? "none" : "whitelist" === GG.visibility ? "required" : "quiet"
+     function jM(MM) {
+       return MM === (0, SM.f)().IMM ? (0, SM.f)().eD : MM
```

#### 61. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2286-L2290` → after: `L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L778) · [Before (L2286-L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2286-L2290)

```diff
-       if (null === GG) return !0;
-       const {
-         visibility: bG
-       } = GG;
-       return "public" === bG || "unlisted" === bG || "whitelist" === bG && GG.canManage
+       return !(0, OM.J)(MM) && jM(MM) === (0, SM.f)().eD
```

#### 62. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2293-L2296` → after: `L782-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L782-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L782-L999) · [Before (L2293-L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2293-L2296)

```diff
-     function UG(GG, bG, ZG) {
-       if (ZG) {
-         const ZG = bG.filter((bG => !wG(GG.whitelist, bG)));
-         return {
+     function nM() {
+       return (0, SM.f)().physics[PM][1]
+     }
+   },
+   37699: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => eM
+     });
+     var OM = iM(37705),
+       SM = iM(181),
+       jM = iM(5265),
+       aM = iM(37713),
+       PM = iM(37390),
+       nM = iM(37761),
+       QM = iM(37722),
+       zM = iM(347),
+ ... (202 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2298` → after: `L1001-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1001-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L1001-L1018) · [Before (L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2298)

```diff
-           whitelist: [...GG.whitelist, ...ZG]
+           Ti: () => OM !== this.idlePreloadGeneration,
+           fetchFile: MM => {
+             this.idlePreloads.delete(MM);
+             try {
+               return this.preload(MM), Promise.resolve()
+             } catch (rM) {
+               return Promise.reject(rM)
+             }
+           }
+         })
+       }
+       loadSound(MM, rM) {
+         const iM = MM[rM];
+         if (iM) return iM;
+         const SM = this.makeSound(MM, rM);
+         for (const aM of null !== (jM = (0, OM.q)(rM)) && void 0 !== jM ? jM : []) {
+ ... (2 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2301-L2303` → after: `L1022-L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1022-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L1022-L1032) · [Before (L2301-L2303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2301-L2303)

```diff
-       return {
-         ...GG,
-         whitelist: GG.whitelist.filter((GG => !wG(bG, GG)))
+       makeSound(MM, rM) {
+         (0, EM.c)(rM);
+         const iM = new CM(rM);
+         return iM.setGlobalVolume(JM.d.get("soundVolume")), MM[rM] = iM, iM
+       }
+       freeSoundsAfterGame() {
+         this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
+       }
+       freeSounds() {
+         for (const MM of [this.stereoSounds, this.spatialSounds])
+           for (const [rM, iM] of Object.entries(MM)) !yM.b.has((0, OM.j)(rM)) && iM.loaded() && (iM.unloadOnceIdle(), delete MM[rM])
```

#### 65. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2306` → after: `L1035-L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1035-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L1035-L1036) · [Before (L2306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2306)

```diff
- 
+   },
+   37787: (MM, rM, iM) => {
```

#### 66. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2308-L2310` → after: `L1038-L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1038-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L1038-L1059) · [Before (L2308-L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2308-L2310)

```diff
-       const ZG = [];
-       for (let wG = 0; wG < GG.length; wG += bG) ZG.push(GG.slice(wG, wG + bG));
-       return ZG
+       var iM, OM, SM, jM, aM, PM, nM, QM;
+       return MM.name === rM.name && ((null === (iM = MM.attributes) || void 0 === iM || null === (OM = iM.customAttributes) || void 0 === OM ? void 0 : OM.stackKey) === (null === (SM = rM.attributes) || void 0 === SM || null === (jM = SM.customAttributes) || void 0 === jM ? void  … [truncated]
+     }
+     iM.d(rM, {
+       d: () => OM
+     })
+   },
+   37858: (MM, rM, iM) => {
+     function OM(MM) {
+       return MM.includes("Leaf Bed")
+     }
+ 
+     function SM(MM) {
+       return / Bed(?: Head)?(?:\||$)/.test(MM) && !OM(MM)
+     }
+ 
+ ... (6 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2319` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L1064-L1065) · [Before (L2319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2319)

```diff
-       k: () => UG
+       h: () => jM,
+       l: () => SM
```

#### 68. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2322` → after: `L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L1068) · [Before (L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2322)

```diff
-   37379: (GG, bG, ZG) => {
+   37855: (MM, rM, iM) => {
```

#### 69. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2324` → after: `L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L1070) · [Before (L2324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2324)

```diff
-       e: () => LG
+       c: () => QM
```

#### 70. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2326-L2342` → after: `L1072-L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1072-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L1072-L1085) · [Before (L2326-L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2326-L2342)

```diff
-     var wG = ZG(51),
-       SG = ZG(2409);
- 
-     function LG() {
-       const GG = (0, SG.i)("lobbyLeaderboardInfo");
-       return (0, wG.useMemo)((() => function(GG) {
-         if (null === GG) return null;
-         const bG = Object.entries(GG),
-           ZG = bG.filter((GG => {
-             let [, bG] = GG;
-             return void 0 !== bG
-           }));
-         if (ZG.length === bG.length) return GG;
-         const wG = Object.fromEntries(ZG),
-           SG = Object.keys(GG).filter((GG => !Object.hasOwn(wG, GG)));
-         return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${SG.join(", ")}`), wG
- ... (1 more removed lines; see GitHub link above)
+     var OM = iM(37858),
+       SM = iM(9816);
+     const jM = [],
+       aM = [],
+       PM = [],
+       nM = [];
+     for (const zM of Object.keys(SM.p))(0, OM.g)(zM) ? jM.push(zM) : (0, OM.l)(zM) && aM.push(zM), (0, OM.h)(zM) && PM.push(zM), (zM.includes(" Bed Head") || zM.includes(" Strongbed Head")) && nM.push(zM);
+     const QM = {
+       leafBeds: jM,
+       woolBeds: aM,
+       strongBeds: PM,
+       beds: [...jM, ...aM, ...PM],
+       bedHeads: nM,
+       blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
```

#### 71. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L2344` → after: `L1087-L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L1087-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/223.js#L1087-L1088) · [Before (L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/223.js#L2344)

```diff
-   }
+   },
+   34999: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/224.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/224.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a)

#### 1. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L4-L9` → after: `L4-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L4-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L4-L29) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L4-L9)

```diff
-   37224: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => iG,
-       e: () => XG,
-       i: () => uG,
-       l: () => KG
+   35037: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       MAX_BLOCK_ID: () => OM,
+       armourReductionOf: () => AM,
+       clipSizeOf: () => NM,
+       creativeAltNames: () => ar,
+       creativeCategoryOf: () => VM,
+       creativeItemCategories: () => PM,
+       creativeItemCategoryIcons: () => nM,
+       creativeItemIds: () => TM,
+       descriptionOf: () => oM,
+       displayNameOf: () => ZM,
+       dropsNothing: () => FM,
+       enchantmentPerksOf: () => KM,
+       gunTypeOf: () => vM,
+       harvestsNullLevelOf: () => BM,
+ ... (10 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L11-L21` → after: `L31-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L31-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L31-L51) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L11-L21)

```diff
-     var wG = ZG(1006),
-       SG = ZG.n(wG),
-       LG = ZG(51),
-       yG = ZG(59),
-       kG = ZG(1329),
-       UG = ZG(1393),
-       YG = ZG(1320),
-       VG = ZG(1239),
-       pG = ZG(1151),
-       fG = ZG(37231),
-       QG = ZG(1067);
+     const OM = 8558,
+       SM = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
+       jM = "S-$SW$$R&$SG2$)$'$)$4$)$X*$I6$-$%$%$cC1$WD1$%%%$]5$b7$RH4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$O`0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TV3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
+       aM = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
+       PM = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
+       nM = {
+         building: "Stone Bricks",
+         colours: "Magenta Wool",
+         nature: "Grass Block",
+         decoration: "Lantern",
+         utility: "Workbench",
+         tools: "Iron Pickaxe",
+         combat: "Iron Sword",
+         food: "Apple",
+         mobs: "Pig Spawn Orb",
+         materials: "Iron Bar",
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L24-L31` → after: `L54-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L54-L58) · [Before (L24-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L24-L31)

```diff
-       const [bG, ZG] = (0, LG.useState)((() => (0, fG.o)(GG)));
-       return (0, LG.useEffect)((() => (ZG((0, fG.o)(GG)), (0, fG.F)((() => {
-         ZG((0, fG.o)(GG))
-       })))), [GG]), bG
-     }
- 
-     function hG(GG, bG) {
-       "function" === typeof GG ? GG(bG) : GG && (GG.current = bG)
+       let rM = null;
+       return iM => {
+         var OM;
+         return rM ??= (0, zM.y)(MM, 10096), null !== (OM = rM[iM]) && void 0 !== OM ? OM : 0
+       }
```

#### 4. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L34-L39` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L61) · [Before (L34-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L34-L39)

```diff
-     function dG(GG) {
-       let {
-         tutorial: bG,
-         step: ZG,
-         enabled: wG = !0
-       } = GG;
+     function HM(MM, rM, iM) {
```

#### 5. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L41-L65` → after: `L63-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L63-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L63-L68) · [Before (L41-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L41-L65)

```diff
-       return wG && SG === ZG
-     }
- 
-     function JG(GG, bG) {
-       const ZG = (0, fG.r)(GG),
-         wG = ZG.indexOf(bG);
-       return !ZG.slice(wG + 1).some((bG => (0, fG.x)(GG, bG)))
-     }
- 
-     function rG(GG, bG, ZG, wG) {
-       let {
-         tutorial: SG,
-         step: LG,
-         waitForClick: yG = !1,
-         onPrevious: kG
-       } = GG;
- ... (9 more removed lines; see GitHub link above)
+       let SM = null,
+         jM = [];
+       return MM => {
+         const aM = OM(MM);
+         if (0 !== aM) return null === SM && (SM = rM.split(zM.s), jM = new Array(SM.length)), jM[aM - 1] ??= iM(SM[aM - 1])
+       }
```

#### 6. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L69-L106` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L72) · [Before (L69-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L69-L106)

```diff
-       let {
-         tutorial: bG,
-         step: ZG,
-         text: wG,
-         waitForClick: SG = !1,
-         onPrevious: LG
-       } = GG;
-       const {
-         t: yG
-       } = (0, pG.w)(), kG = JG(bG, ZG);
-       return (0, QG.jsxs)(QG.Fragment, {
-         children: [(0, QG.jsx)("div", {
-           className: "TutorialStepText",
-           children: wG
-         }), (0, QG.jsxs)("div", {
-           className: "TutorialStepButtons",
- ... (22 more removed lines; see GitHub link above)
+       return MM
```

#### 7. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L111-L153` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L76) · [Before (L111-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L111-L153)

```diff
-       let {
-         rect: bG,
-         margin: ZG
-       } = GG;
-       const wG = Math.max(0, bG.top - ZG),
-         SG = bG.bottom + ZG,
-         LG = Math.max(0, bG.left - ZG),
-         yG = bG.right + ZG;
-       return (0, QG.jsxs)(QG.Fragment, {
-         children: [(0, QG.jsx)("div", {
-           className: "TutorialSpotlightBackdrop",
-           style: {
-             top: 0,
-             left: 0,
-             right: 0,
-             height: wG
- ... (27 more removed lines; see GitHub link above)
+       return MM === zM.g ? null : (0, zM.z)(MM)
```

#### 8. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L157-L232` → after: `L104-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L104-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L104-L108) · [Before (L157-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L157-L232)

```diff
-       let {
-         target: bG,
-         placement: ZG,
-         boxRef: wG,
-         className: UG,
-         spotlight: VG = !0,
-         spotlightMargin: pG = EG,
-         children: fG
-       } = GG;
-       const {
-         getArrowProps: KG,
-         getTooltipProps: hG,
-         setTooltipRef: dG,
-         setTriggerRef: JG,
-         update: rG
-       } = (0, kG.d)({
- ... (60 more removed lines; see GitHub link above)
+       const rM = dM(MM);
+       return null !== rM ? rM : GM(lM, MM, (() => {
+         const rM = (0, QM.g)(MM);
+         return void 0 === rM ? void 0 : (0, zM.F)(rM)
+       }))
```

#### 9. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L262-L297` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L112-L115) · [Before (L262-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L262-L297)

```diff
-       const bG = dG(GG),
-         ZG = (0, LG.useRef)(null);
-       return rG(GG, bG, ZG, null), bG ? (0, yG.createPortal)((0, QG.jsx)("div", {
-         className: "TutorialCentreBackdrop",
-         children: (0, QG.jsx)("div", {
-           ref: ZG,
-           className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
-           children: (0, QG.jsx)(zG, {
-             ...GG
-           })
-         })
-       }), (0, YG.k)()) : null
-     }
-   },
-   36955: (GG, bG, ZG) => {
-     ZG.d(bG, {
- ... (20 more removed lines; see GitHub link above)
+       const rM = yM(MM);
+       return null !== rM ? rM : GM(EM, MM, (() => {
+         var rM;
+         return null !== (rM = (0, zM.D)(ZM(MM))) && void 0 !== rM ? rM : void 0
```

#### 10. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L303` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L120) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L303)

```diff
-       UG = GG
+       return CM(MM)
```

#### 11. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L308-L322` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L124) · [Before (L308-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L308-L322)

```diff
-       VG = !0;
-       try {
-         GG.onClick()
-       } finally {
-         VG = !1
-       }
-       GG.panel && "clientGame" === wG.e.get("openInGameMenuName") && YG(GG.id)
-     }
- 
-     function fG() {
-       return VG
-     }
- 
-     function QG() {
-       return kG().filter((GG => GG.panel && !GG.disabled))
+       return eM(MM)
```

#### 12. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L326-L345` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L128) · [Before (L326-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L326-L345)

```diff
-       const bG = QG(),
-         ZG = bG.findIndex((GG => GG.id === UG));
-       return !(ZG < 0 || bG.length < 2) && (pG(bG[(ZG + GG + bG.length) % bG.length]), !0)
-     }
- 
-     function hG() {
-       return null !== UG && QG().length > 1
-     }
- 
-     function dG() {
-       YG(null)
-     }
- 
-     function JG() {
-       "inventory" !== wG.e.get("openInGameMenuName") && YG(null)
-     }
- ... (4 more removed lines; see GitHub link above)
+       return bM(MM)
```

#### 13. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L349-L351` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L132) · [Before (L349-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L349-L351)

```diff
-       return yG.set(GG.id, GG), SG.l.xh(LG, kG(), !0), () => {
-         yG.get(GG.id) === GG && (yG.delete(GG.id), SG.l.xh(LG, kG()))
-       }
+       return wM(MM)
```

#### 14. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L372-L383` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L135-L136) · [Before (L372-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L372-L383)

```diff
-     function YG() {
-       return UG
-     }
- 
-     function VG(GG, bG) {
-       const ZG = {
-         content: GG,
-         menu: bG
-       };
-       return UG = ZG, SG.l.xh(kG, UG, !0), () => {
-         UG === ZG && (UG = null, KG = !1, dG(), SG.l.xh(kG, null))
-       }
+     function xM(MM) {
+       return tM(MM)
```

#### 15. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L387-L388` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L139-L140) · [Before (L387-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L387-L388)

```diff
-     function fG() {
-       return pG
+     function vM(MM) {
+       return gM(MM)
```

#### 16. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L392-L394` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L144) · [Before (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L392-L394)

```diff
-       return pG = GG, () => {
-         pG === GG && (pG = null)
-       }
+       return 0 !== RM(MM)
```

#### 17. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L398-L403` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L147-L148) · [Before (L398-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L398-L403)

```diff
-     function hG() {
-       const GG = wG.e.get("openInGameMenuName");
-       "clientGame" !== GG && (KG = "inventory" === GG), (0, yG.k)() || (0, yG.h)(), (0, LG.z)(LG.e), wG.e.set({
-         openInGameMenuName: "clientGame",
-         openEverythingMenuName: null
-       })
+     function BM(MM) {
+       return pM(MM)
```

#### 18. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L406-L407` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L151-L152) · [Before (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L406-L407)

```diff
-     function dG() {
-       rG(!1)
+     function XM(MM) {
+       return 0 !== uM(MM)
```

#### 19. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L410-L411` → after: `L155-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L155-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L155-L159) · [Before (L410-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L410-L411)

```diff
-     function JG() {
-       rG(KG)
+     function IM(MM) {
+       const rM = WM(MM);
+       if (void 0 === rM || rM.startsWith(zM.o)) return null === rM || void 0 === rM ? void 0 : rM.slice(zM.o.length);
+       const iM = (0, QM.g)(MM);
+       return void 0 === iM ? void 0 : `${iM}${zM.s}${rM}`
```

#### 20. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L415-L417` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L163-L164) · [Before (L415-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L415-L417)

```diff
-       "clientGame" === wG.e.get("openInGameMenuName") && wG.e.set({
-         openInGameMenuName: GG ? "inventory" : null
-       }), GG || (0, yG.h)(), KG = !1
+       var rM;
+       return null !== (rM = sM(MM)) && void 0 !== rM ? rM : LM
```

#### 21. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L471-L480` → after: `L169-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L169-L174) · [Before (L471-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L471-L480)

```diff
-       if (!fG) {
-         const GG = wG.h.getItem(YG);
-         fG = {
-           codeBlockIntroShown: !1,
-           worldCodeIntroShown: !1,
-           welcomeComplete: !1,
-           docsOverviewComplete: !1,
-           aiHelperOverviewComplete: !1,
-           ..."object" === typeof GG && null !== GG ? GG : {}
-         }
+       if (null === qM) {
+         const MM = [],
+           rM = new zM.t(SM);
+         let iM = 0;
+         for (; !rM.done;) iM += (0, zM.I)(rM.next()), MM.push(iM);
+         qM = Object.freeze(MM)
```

#### 22. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L486-L503` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L180) · [Before (L486-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L486-L503)

```diff
-       const bG = EG();
-       bG[GG] || (fG = {
-         ...bG,
-         [GG]: !0
-       }, wG.h.setItem(YG, fG))
-     }
- 
-     function XG(GG) {
-       return "docsOverview" === GG ? LG : "aiHelperOverview" === GG ? yG : QG ? SG[QG] : []
-     }
- 
-     function uG(GG) {
-       return ("worldCodeButton" !== GG || !EG().worldCodeIntroShown) && !JG.has(GG)
-     }
- 
-     function iG(GG) {
- ... (2 more removed lines; see GitHub link above)
+       return DM(MM)
```

#### 23. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L517` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L185) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L517)

```diff
-       return null !== (bG = XG(GG).find((bG => CG(GG, bG)))) && void 0 !== bG ? bG : null
+       return 0 !== ((null !== (iM = kM(MM)) && void 0 !== iM ? iM : 0) & rM)
```

#### 24. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L521-L522` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L189) · [Before (L521-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L521-L522)

```diff
-       var bG;
-       oG(pG[GG]), (null === (bG = dG) || void 0 === bG ? void 0 : bG.name) === GG && (dG = null)
+       return cM(MM, zM.d.OnlyInSearch)
```

#### 25. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L526-L547` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L193) · [Before (L526-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L526-L547)

```diff
-       const bG = (dG ? [dG.name] : ["welcome", "docsOverview"]).find((bG => WG(bG) === GG));
-       if (!bG) return;
-       iG(bG).add(GG);
-       const ZG = VG[GG];
-       ZG && (oG(ZG), dG || hG.add(GG)), null === WG(bG) && mG(bG), zG()
-     }
- 
-     function FG(GG, bG) {
-       const ZG = XG(GG),
-         wG = iG(GG);
-       for (let SG = ZG.indexOf(bG) - 1; SG >= 0; SG--)
-         if (wG.has(ZG[SG]) && uG(ZG[SG])) return ZG[SG];
-       return null
-     }
- 
-     function vG(GG, bG) {
- ... (6 more removed lines; see GitHub link above)
+       return cM(MM, zM.d.OnlyInCategory)
```

#### 26. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L551-L554` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L197) · [Before (L551-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L551-L554)

```diff
-       mG(GG), "welcome" === GG && XG("welcome").forEach((GG => {
-         const bG = VG[GG];
-         bG && oG(bG)
-       })), zG()
+       return cM(MM, zM.d.DevOnly)
```

#### 27. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L558-L561` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L201) · [Before (L558-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L558-L561)

```diff
-       dG = {
-         name: GG,
-         stepsDone: new Set
-       }, zG()
+       return !cM(MM, zM.d.HiddenByDefault) && void 0
```

#### 28. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L564-L574` → after: `L204-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L204-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L204-L207) · [Before (L564-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L564-L574)

```diff
-     function jG() {
-       (dG || 0 !== KG.size || 0 !== hG.size) && (dG = null, KG.clear(), hG.clear(), zG())
-     }
- 
-     function PG(GG, bG) {
-       const ZG = bG ? GG : QG === GG ? null : QG;
-       ZG !== QG && (QG = ZG, zG())
-     }
- 
-     function MG(GG, bG) {
-       JG.has(GG) === bG && (bG ? JG.delete(GG) : JG.add(GG), zG())
+     function Sr(MM, rM, iM, OM) {
+       var SM;
+       const jM = null !== (SM = kM(MM)) && void 0 !== SM ? SM : 0;
+       return 0 !== (jM & zM.d.DisabledInPublicLobbies) && rM || 0 !== (jM & zM.d.DisabledInProduction) && !0 || !iM || !OM && 0 !== (jM & zM.d.DevOnly)
```

#### 29. `bundles/bloxd.io/chunks/js/224.js` (Changed code · before: `L577-L579` → after: `L211-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57aR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bba9acb318f5a7cf254e55539f4d7804f9c4a32b9a3951fd5e21ed41c595c57a) · [After (L211-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/224.js#L211-L223) · [Before (L577-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/224.js#L577-L579)

```diff
-     function AG(GG) {
-       return rG.add(GG), () => {
-         rG.delete(GG)
+     function ar() {
+       if (null === jr) {
+         const MM = aM.split(zM.s),
+           rM = new Map,
+           iM = new zM.t(jM);
+         let OM = 0,
+           SM = 0;
+         for (; !iM.done;) {
+           OM += (0, zM.I)(iM.next());
+           const jM = iM.next();
+           rM.set(OM, Object.freeze(MM.slice(SM, SM + jM))), SM += jM
+         }
+         jr = rM
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/225.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/225.js` (60 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789)

#### 1. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L4)

```diff
-   36955: (GG, bG, ZG) => {
+   44184: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L6-L15522` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L6-L9) · [Before (L6-L15522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L6-L15522)

```diff
-       b: () => LG,
-       f: () => hG,
-       h: () => dG,
-       j: () => kG,
-       k: () => fG,
-       m: () => JG,
-       p: () => pG,
-       r: () => zG,
-       t: () => KG,
-       x: () => rG
-     });
-     var wG = ZG(17),
-       SG = ZG(19);
-     const LG = "clientGameInventoryButtonsChanged",
-       yG = new Map;
- 
- ... (15501 more removed lines; see GitHub link above)
+       e: () => jM
+     });
+     var OM = iM(44),
+       SM = iM(3047);
```

#### 3. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15525-L15673` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L12) · [Before (L15525-L15673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L15525-L15673)

```diff
-       if (!ZG) return !1;
-       const wG = GG[0] + .5 - bG[0],
-         SG = GG[1] + .5 - bG[1],
-         LG = GG[2] + .5 - bG[2];
-       return wG * wG + SG * SG + LG * LG <= 576
-     }
- 
-     function jd(GG, bG) {
-       return Math.atan2(GG[0], GG[2]) + Math.PI + bG
-     }
- 
-     function Pd(GG, bG) {
-       const ZG = 2 * Math.PI;
-       return (GG + ZG * bG / 1e4) % ZG
-     }
-     class Md {
- ... (133 more removed lines; see GitHub link above)
+       const jM = (0, OM.useRef)(null),
```

#### 4. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L15675-L16409` → after: `L14-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L14-L20) · [Before (L15675-L16409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L15675-L16409)

```diff
-           positions: pG,
-           indices: fG
-         } = sd;
-       for (let QG = 0; QG < pG.length; QG += 3) {
-         const kG = pG[QG] * SG,
-           VG = pG[QG + 2] * yG;
-         GG.positions.push(bG + kG * UG + VG * YG, ZG + pG[QG + 1] * LG, wG - kG * YG + VG * UG)
-       }
-       for (const QG of fG) GG.indices.push(VG + QG)
-     }
- 
-     function nd(GG) {
-       let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-       return bG < 1 ? {
-         rgb: GG,
-         alpha: bG
- ... (719 more removed lines; see GitHub link above)
+           width: aM,
+           height: PM
+         } = (0, SM.d)(MM);
+       (0, OM.useEffect)((() => {
+         const iM = rM(MM.current);
+         return jM.current = iM, () => {
+           iM.close(), jM.current = null
```

#### 5. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16411-L16506` → after: `L22-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L22-L26) · [Before (L16411-L16506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16411-L16506)

```diff
-         return LG
-       }
-     }
-     const oJ = 500;
-     const XJ = (0, wG.memo)((function(GG) {
-       var bG, ZG;
-       let {
-         store: SG
-       } = GG;
-       const {
-         t: LG
-       } = (0, mS.w)(), [yG, kG] = (0, wG.useState)((() => SG.get()));
-       (0, wG.useEffect)((() => (kG(SG.get()), SG.subscribe((() => {
-         kG(SG.get())
-       })))), [SG]);
-       const {
- ... (80 more removed lines; see GitHub link above)
+       }), [MM, rM]), (0, OM.useEffect)((() => {
+         aM <= 0 || PM <= 0 || jM.current.resize(aM, PM)
+       }), [aM, PM]), (0, OM.useEffect)((() => {
+         jM.current.show(iM)
+       }), [iM])
```

#### 6. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16510` → after: `L39-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L39-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L39-L46) · [Before (L16510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16510)

```diff
-       return [Math.floor(GG[0] / bG), Math.floor(GG[1] / bG), Math.floor(GG[2] / bG)]
+       let [iM, OM, SM] = MM;
+       return [0, .5, 1].map((MM => ({
+         timeFraction: MM,
+         rotation: {
+           bS: "catmull-rom-spline",
+           point: [iM, OM, SM + (.5 === MM ? rM : 0)]
+         }
+       })))
```

#### 7. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16514-L16653` → after: `L50-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L50-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L50-L59) · [Before (L16514-L16653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16514-L16653)

```diff
-       return `${GG},${bG},${ZG}`
-     }
- 
-     function FJ(GG) {
-       const bG = GG.split("|")[0];
-       if (!YZ(bG)) return iJ;
-       const ZG = lb[bG];
-       if (bZ(ZG)) return CJ;
-       const wG = Wd(GG);
-       return ZZ(ZG) ? [
-         [-wG[0], -wG[1], -wG[2]]
-       ] : iS(ZG) ? function(GG, bG) {
-         const ZG = GG[0] - 2 * bG[0],
-           wG = GG[2] - 2 * bG[2],
-           SG = [];
-         for (let LG = -1; LG <= 1; LG++)
- ... (124 more removed lines; see GitHub link above)
+       return {
+         yS: 3200,
+         loop: !0,
+         GS: {
+           Root: {
+             timeline: [0, .5, 1].map((MM => ({
+               timeFraction: MM,
+               position: {
+                 bS: "catmull-rom-spline",
+                 point: [0, .5 === MM ? .18 : 0, 0]
```

#### 8. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16655-L16661` → after: `L61-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L61-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L61-L68) · [Before (L16655-L16661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16655-L16661)

```diff
-               of GG)
-               for (const [GG, yG, kG] of LG) {
-                 const LG = SG[0] + GG,
-                   UG = SG[1] + yG,
-                   YG = SG[2] + kG,
-                   VG = `${LG},${UG},${YG}`;
-                 ZG.has(VG) || (ZG.add(VG), bG(LG, UG, YG) && wG.push([LG, UG, YG]))
+             })))
+           },
+           HeadMesh: {
+             timeline: [0, .25, .75, 1].map((MM => ({
+               timeFraction: MM,
+               rotation: {
+                 bS: "catmull-rom-spline",
+                 point: [0, .25 === MM ? .12 : .75 === MM ? -.12 : 0, 0]
```

#### 9. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16663-L16761` → after: `L70-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L70-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L70-L76) · [Before (L16663-L16761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16663-L16761)

```diff
-             return wG
-           }([...this.chunks.values()].flatMap((GG => GG.machines)), ((bG, ZG, wG) => GG.isBlockInLoadedChunk(bG, ZG, wG) && 0 === GG.getBlockId(bG, ZG, wG))),
-           ZG = bG.join(";");
-         ZG !== this.shownKey && (this.shownKey = ZG, this.clearMeshes(GG), bG.length > 0 && (this.meshes = [this.build(GG, bG, !1), this.build(GG, bG, !0)]))
-       }
-       build(GG, bG, ZG) {
-         const wG = bG[0],
-           SG = [],
-           LG = [];
-         for (const [yG, kG, UG] of bG)(0, uJ.d)(SG, LG, [yG - wG[0] + .5, kG - wG[1] + .5, UG - wG[2] + .5], vJ, ZG);
-         return GG.createGameMesh({
-           positions: SG,
-           indices: LG
-         }, {
-           rgb: ZG ? cJ : aJ,
-           alpha: .4
- ... (83 more removed lines; see GitHub link above)
+             })))
+           },
+           ArmLeftMesh: {
+             timeline: jM(MM, iM)
+           },
+           ArmRightMesh: {
+             timeline: jM(rM, -iM)
```

#### 10. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16797` → after: `L81-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L81-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L81-L93) · [Before (L16797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16797)

```diff
-     const nJ = new Set(["Sky Spring"]);
+     const PM = aM([0, 0, 0], [0, 0, 0], .07),
+       nM = (0, SM.d)((0, OM.f)(PM), "mobIdle"),
+       QM = aM([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
+       zM = aM([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
+       LM = (0, SM.d)((0, OM.f)(QM), "gunReady"),
+       mM = (0, SM.d)((0, OM.f)(zM), "gunAimed")
+   },
+   39673: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => SM,
+       g: () => jM
+     });
+     const OM = new WeakMap;
```

#### 11. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16799-L16813` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L95-L96) · [Before (L16799-L16813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16799-L16813)

```diff
-     function gJ(GG, bG, ZG) {
-       const wG = GG.split("|")[0];
-       return "Air" !== bG || ZG || ! function(GG) {
-         const bG = GG.split("|")[0];
-         return void 0 !== yZ[bG] || nJ.has(bG)
-       }(wG) ? null : GG
-     }
-     class eJ {
-       constructor() {
-         this.lastTapAt = -1 / 0
-       }
-       isNewPress(GG) {
-         const bG = GG - this.lastTapAt >= 300;
-         return this.lastTapAt = GG, bG
-       }
+     function SM(MM, rM) {
+       return OM.set(MM, rM), MM
```

#### 12. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16815-L16829` → after: `L98-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L98-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L98-L101) · [Before (L16815-L16829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16815-L16829)

```diff
-     class RJ {
-       constructor() {
-         this.presses = new eJ, this.predicted = null
-       }
-       tap(GG, bG) {
-         const ZG = this.presses.isNewPress(bG);
-         return ZG && (this.predicted = {
-           station: GG,
-           at: bG
-         }), ZG
-       }
-       consumeServerOpen(GG, bG) {
-         const ZG = this.predicted;
-         return !(null === ZG || ZG.station !== GG || bG - ZG.at > 2e3) && (this.predicted = null, !0)
-       }
+ 
+     function jM(MM) {
+       var rM;
+       return null !== (rM = OM.get(MM)) && void 0 !== rM ? rM : null
```

#### 13. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16831-L16836` → after: `L103-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L103-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L103-L116) · [Before (L16831-L16836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16831-L16836)

```diff
-     class TJ {
-       constructor() {
-         this.thrustAt = -1 / 0
-       }
-       lit(GG, bG) {
-         return GG && (this.thrustAt = bG), bG - this.thrustAt < 200
+   },
+   35055: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => aM,
+       e: () => SM,
+       i: () => zM
+     });
+     var OM = iM(1645);
+ 
+     function SM(MM) {
+       var rM;
+       return {
+         ...aM.store,
+         yaw: aM.store.yaw + (null !== (rM = OM.d[MM].previewYaw) && void 0 !== rM ? rM : 0)
```

#### 14. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16839` → after: `L119-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L119-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L119-L124) · [Before (L16839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16839)

```diff
-     const HJ = [.1, .05, .1],
+     const jM = {
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
+       },
```

#### 15. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16841-L16900` → after: `L126-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L126-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L126-L130) · [Before (L16841-L16900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16841-L16900)

```diff
-         texture: "effect_5",
-         rp: Math.ceil(48),
-         minLifeTime: .35,
-         maxLifeTime: .8,
-         minEmitPower: 1,
-         maxEmitPower: 2,
-         minSize: .2,
-         maxSize: .45,
-         emitRate: 0,
-         gravity: [0, -2, 0],
-         dir1: [-.15, -1, -.15],
-         dir2: [.15, -1, .15],
-         colorGradients: [{
-           timeFraction: 0,
-           minColor: [255, 217, 77, 1],
-           maxColor: [255, 242, 128, 1]
- ... (44 more removed lines; see GitHub link above)
+         player: jM,
+         store: {
+           ...jM,
+           radius: 33,
+           target: [0, 3.9, 0]
```

#### 16. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16902-L16925` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L132) · [Before (L16902-L16925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16902-L16925)

```diff
-         const kG = null !== (wG = this.flames.get(ZG)) && void 0 !== wG ? wG : this.create(GG, ZG, LG),
-           UG = null !== (SG = GG.getDrawnHeading(ZG)) && void 0 !== SG ? SG : 0,
-           YG = this.at;
-         YG[0] = LG[0] - .35 * Math.sin(UG), YG[1] = LG[1] + 1.05, YG[2] = LG[2] - .35 * Math.cos(UG), kG.particles.moveTo(YG), this.setEmitting(kG, !0)
-       }
-       setEmitting(GG, bG) {
-         GG.emitting !== bG && (GG.emitting = bG, bG || (GG.offAt = performance.now()), GG.particles.setEmitRate(bG ? 60 : 0))
-       }
-       create(GG, bG, ZG) {
-         const wG = {
-           particles: GG.createParticles(tJ, {
-             pos: ZG,
-             half: HJ
-           }),
-           emitting: !1,
-           offAt: performance.now()
- ... (8 more removed lines; see GitHub link above)
+       };
```

#### 17. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16927-L16928` → after: `L134-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L134-L137) · [Before (L16927-L16928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16927-L16928)

```diff
-     function OJ(GG) {
-       return AZ("reactor", GG) && !NJ(GG) && (GG.startsWith("Reactor Glass") || GG.startsWith("Reactor Port"))
+     function PM(MM, rM) {
+       MM instanceof Promise ? MM.then(rM).catch((MM => {
+         console.error("Couldn't open the preview", MM)
+       })) : rM(MM)
```

#### 18. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16932-L16947` → after: `L140-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L140-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L140-L143) · [Before (L16932-L16947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16932-L16947)

```diff
-       constructor() {
-         this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [lS.l.subscribe("setDirectionArrow", (GG => {
-           let {
-             id: bG,
-             position: ZG
-           } = GG;
-           bG === xJ && (this.goal = ZG, this.checkedAt = -1 / 0)
-         })), lS.l.subscribe("clearDirectionArrow", (GG => {
-           let {
-             id: bG
-           } = GG;
-           null !== bG && bG !== xJ || (this.goal = null, this.open = null)
-         }))]
-       }
-       dispose() {
-         for (const GG of this.subs) lS.l.unsubscribe(GG)
+       constructor(MM) {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, PM(MM, (MM => {
+           this.closed ? MM.close() : (this.opened = MM, null !== this.size && MM.resize(this.size.width, this.size.height), null !== this.view && MM.show(this.view))
+         }))
```

#### 19. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16949-L16971` → after: `L145-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L145-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L145-L147) · [Before (L16949-L16971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16949-L16971)

```diff
-       sideOf(GG, bG, ZG, wG) {
-         const SG = this.goal;
-         if (!SG) return 0;
-         ZG - this.checkedAt > 1e3 && (this.checkedAt = ZG, this.open = function(GG, bG) {
-           const [ZG, wG, SG] = GG.map(Math.floor);
-           if (!OJ(bG(ZG, wG, SG))) return null;
-           for (const [LG, yG] of [
-               [1, 0],
-               [0, 1]
-             ]) {
-             const GG = bG(ZG + LG, wG, SG + yG),
-               kG = bG(ZG - LG, wG, SG - yG);
-             if (NJ(kG) && OJ(GG)) return [LG, 0, yG];
-             if (NJ(GG) && OJ(kG)) return [0 - LG, 0, 0 - yG]
-           }
-           return null
- ... (7 more removed lines; see GitHub link above)
+       show(MM) {
+         var rM;
+         this.view = MM, null === (rM = this.opened) || void 0 === rM || rM.show(MM)
```

#### 20. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16973-L16984` → after: `L149-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L149-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L149-L154) · [Before (L16973-L16984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16973-L16984)

```diff
-     }
-     class Gr {
-       constructor() {
-         this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), th … [truncated]
-           this.boxStale = !0
-         }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.PJ = () => {
-           this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
-         }, this.sizes = new ResizeObserver((GG => {
-           for (const bG of GG) bG.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(bG.target, bG.borderBoxSize[0].inlineSize / 2)
-         })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
-           this.queued = !1, this.pK || this.clear()
-         }, window.addEventListener("resize", this.PJ)
+       resize(MM, rM) {
+         var iM;
+         this.size = {
+           width: MM,
+           height: rM
+         }, null === (iM = this.opened) || void 0 === iM || iM.resize(MM, rM)
```

#### 21. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16986` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L156) · [Before (L16986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16986)

```diff
-       onAfterRender(GG, bG) {
+       close() {
```

#### 22. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16988` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L158) · [Before (L16988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16988)

```diff
-         this.api = GG, this.project = null !== (ZG = null === bG || void 0 === bG ? void 0 : bG.projectWorldPosToScreenPos) && void 0 !== ZG ? ZG : null, this.queued || this.pK || (this.queued = !0, queueMicrotask(this.run))
+         this.closed = !0, null === (MM = this.opened) || void 0 === MM || MM.close(), this.opened = null
```

#### 23. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16990-L16995` → after: `L160-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L160-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L160-L165) · [Before (L16990-L16995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16990-L16995)

```diff
-       dispose() {
-         this.pK = !0;
-         for (const GG of this.moved.keys()) GG.style.transform = "";
-         this.moved.clear();
-         for (const GG of this.sideLabels.keys()) GG.style.transform = "";
-         this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.PJ)
+     }
+     class QM {
+       constructor(MM) {
+         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(MM).then((MM => MM.ready)), PM(MM, (MM => {
+           this.closed ? MM.close() : (this.opened = MM, null !== this.size && MM.resize(this.size.width, this.size.height))
+         }))
```

#### 24. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16997-L17018` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L167-L168) · [Before (L16997-L17018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L16997-L17018)

```diff
-       clear() {
-         for (const LG of this.moved.keys()) LG.isConnected || this.moved.delete(LG);
-         for (const LG of this.sideLabels.keys()) LG.isConnected || this.sideLabels.delete(LG);
-         if (0 === this.arrows.length) return;
-         const GG = performance.now(),
-           bG = GG - this.refreshedAt > 1e3;
-         bG && (this.refreshedAt = GG, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
-         const ZG = this.trackerBox(),
-           wG = this.barsBox(),
-           SG = this.toastBox(bG);
-         (ZG || wG || SG) && bG && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
-         for (let LG = 0; LG < this.arrows.length; LG++) {
-           const bG = this.arrows[LG];
-           this.labelOffsets.set(bG, this.runLabelAside(bG, GG));
-           const yG = (ZG ? this.shiftLeftOf(bG, ZG) : 0) || this.shiftOnScreen(bG),
-             kG = Math.min(wG ? this.liftAbove(bG, wG, yG) : 0, SG ? this.liftAbove(bG, SG, yG) : 0),
- ... (6 more removed lines; see GitHub link above)
+       get dev() {
+         return this.opened.dev
```

#### 25. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17020` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L170) · [Before (L17020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17020)

```diff
-       trackerBox() {
+       isReady() {
```

#### 26. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17022-L17051` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L172) · [Before (L17022-L17051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17022-L17051)

```diff
-         const ZG = null !== (GG = this.tracker) && void 0 !== GG && GG.isConnected ? this.tracker : null !== (bG = this.trackers[0]) && void 0 !== bG ? bG : null;
-         if (ZG !== this.tracker && this.watch(ZG), this.boxStale && ZG) {
-           var wG, SG, LG;
-           this.boxStale = !1;
-           const GG = ZG.closest(".NoRoom") ? null : ZG.getBoundingClientRect(),
-             bG = GG && GG.width > 0 ? null === (wG = this.hud) || void 0 === wG ? void 0 : wG.getBoundingClientRect() : void 0,
-             yG = GG && bG ? Math.max(GG.top, bG.top) : null !== (SG = null === GG || void 0 === GG ? void 0 : GG.top) && void 0 !== SG ? SG : 0,
-             kG = GG && bG ? Math.min(GG.bottom, bG.bottom) : null !== (LG = null === GG || void 0 === GG ? void 0 : GG.bottom) && void 0 !== LG ? LG : 0;
-           this.box = GG && GG.width > 0 && kG > yG ? {
-             left: GG.left,
-             top: yG,
-             right: GG.right,
-             bottom: kG
-           } : null
-         }
-         return ZG ? this.box : null
- ... (14 more removed lines; see GitHub link above)
+         return null !== (MM = null === (rM = this.opened) || void 0 === rM ? void 0 : rM.isReady()) && void 0 !== MM && MM
```

#### 27. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17053` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L174) · [Before (L17053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17053)

```diff
-       toastBox(GG) {
+       setCosmetic(MM, rM) {
```

#### 28. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17055-L17066` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L176) · [Before (L17055-L17066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17055-L17066)

```diff
-         const ZG = null !== (bG = this.toasts[0]) && void 0 !== bG ? bG : null;
-         if (ZG !== this.toastEl || GG && ZG) {
-           this.toastEl = ZG;
-           const GG = null === ZG || void 0 === ZG ? void 0 : ZG.getBoundingClientRect();
-           this.toast = GG && GG.width > 0 && GG.height > 0 ? {
-             left: GG.left,
-             top: GG.top,
-             right: GG.right,
-             bottom: GG.bottom
-           } : null
-         }
-         return this.toast
+         null === (iM = this.opened) || void 0 === iM || iM.setCosmetic(MM, rM)
```

#### 29. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17068` → after: `L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L178) · [Before (L17068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17068)

```diff
-       liftAbove(GG, bG, ZG) {
+       playEmote(MM) {
```

#### 30. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17070-L17078` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L180) · [Before (L17070-L17078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17070-L17078)

```diff
-         const SG = this.anchorOf(GG);
-         if (!SG) return 0;
-         const LG = SG.x + ZG + (null !== (wG = this.labelOffsets.get(GG)) && void 0 !== wG ? wG : 0),
-           {
-             halfWidth: yG,
-             labelled: kG
-           } = this.extentOf(GG),
-           UG = SG.y + this.em * (kG ? 6.2 : 3);
-         return UG < bG.top - 6 || LG + yG < bG.left - 6 || LG - yG > bG.right + 6 ? 0 : bG.top - 6 - UG
+         null === (rM = this.opened) || void 0 === rM || rM.playEmote(MM)
```

#### 31. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17080-L17089` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L182) · [Before (L17080-L17089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17080-L17089)

```diff
-       watch(GG) {
-         var bG, ZG;
-         this.tracker && this.sizes.unobserve(this.tracker), null === (bG = this.hud) || void 0 === bG || bG.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = GG, this.hud = null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.closest(". … [truncated]
-           passive: !0
-         }), this.hudStyle.observe(this.hud, {
-           attributes: !0,
-           attributeFilter: ["style", "class"]
-         }))
-       }
-       shiftLeftOf(GG, bG) {
+       setOrbit(MM) {
```

#### 32. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17091-L17099` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L184) · [Before (L17091-L17099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17091-L17099)

```diff
-         const wG = this.anchorOf(GG);
-         if (!wG) return 0;
-         const {
-           y: SG
-         } = wG, LG = wG.x + (null !== (ZG = this.labelOffsets.get(GG)) && void 0 !== ZG ? ZG : 0), yG = this.em, {
-           halfWidth: kG,
-           labelled: UG
-         } = this.extentOf(GG), YG = SG - yG, VG = LG + kG;
-         return SG + yG * (UG ? 6.2 : 3) < bG.top || YG > bG.bottom || VG < bG.left - 6 || LG - kG > bG.right ? 0 : Math.max(bG.left - 6 - VG, 6 - (LG - kG))
+         null === (rM = this.opened) || void 0 === rM || rM.setOrbit(MM)
```

#### 33. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17101` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L186) · [Before (L17101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17101)

```diff
-       shiftOnScreen(GG) {
+       resetCamera() {
```

#### 34. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17103-L17108` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L188) · [Before (L17103-L17108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17103-L17108)

```diff
-         const ZG = this.anchorOf(GG);
-         if (!ZG) return 0;
-         const {
-           halfWidth: wG
-         } = this.extentOf(GG), SG = ZG.x + (null !== (bG = this.labelOffsets.get(GG)) && void 0 !== bG ? bG : 0), LG = SG + wG - (this.innerWidth - 6);
-         return LG > 0 ? -LG : Math.max(0, 6 - (SG - wG))
+         null === (MM = this.opened) || void 0 === MM || MM.resetCamera()
```

#### 35. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17110` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L190) · [Before (L17110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17110)

```diff
-       runLabelAside(GG, bG) {
+       async untilDrawn(MM) {
```

#### 36. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17112-L17133` → after: `L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L192) · [Before (L17112-L17133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17112-L17133)

```diff
-         let wG = null;
-         for (let yG = 0; yG < GG.children.length; yG++) GG.children[yG].classList.contains("DirectionArrowLabel") && (wG = GG.children[yG]);
-         if (!wG) return 0;
-         const SG = GG.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(GG) : null,
-           LG = (SG && this.api ? this.side.sideOf(this.api, {
-             x: SG.x / this.innerWidth * 100,
-             y: SG.y / this.innerHeight * 100
-           }, bG, this.project) : 0) * this.halfWidthOf(wG);
-         return LG !== (null !== (ZG = this.sideLabels.get(wG)) && void 0 !== ZG ? ZG : 0) && (wG.style.transform = 0 === LG ? "" : `translateX(-50%) translateX(${LG}px)`, 0 === LG ? this.sideLabels.delete(wG) : this.sideLabels.set(wG, LG)), LG
-       }
-       extentOf(GG) {
-         let bG = this.em,
-           ZG = !1;
-         for (let wG = 0; wG < GG.children.length; wG++) {
-           const SG = GG.children[wG],
-             LG = SG.classList.contains("DirectionArrowLabel");
- ... (6 more removed lines; see GitHub link above)
+         await this.ready, await (null === (rM = this.opened) || void 0 === rM ? void 0 : rM.untilDrawn(MM))
```

#### 37. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17135-L17140` → after: `L194-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L194-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L194-L199) · [Before (L17135-L17140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17135-L17140)

```diff
-       halfWidthOf(GG) {
-         let bG = this.halfWidths.get(GG);
-         return void 0 === bG && (bG = GG.offsetWidth / 2, this.halfWidths.set(GG, bG), this.sizes.observe(GG), this.labels.add(GG)), bG
-       }
-       forgetGoneLabels() {
-         for (const GG of this.labels) GG.isConnected || (this.sizes.unobserve(GG), this.halfWidths.delete(GG), this.labels.delete(GG))
+       resize(MM, rM) {
+         var iM;
+         this.size = {
+           width: MM,
+           height: rM
+         }, null === (iM = this.opened) || void 0 === iM || iM.resize(MM, rM)
```

#### 38. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17142-L17155` → after: `L201-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L201-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L201-L203) · [Before (L17142-L17155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17142-L17155)

```diff
-       anchorOf(GG) {
-         const bG = GG.style.translate,
-           ZG = this.anchors.get(GG);
-         if (ZG && ZG.translate === bG && ZG.innerWidth === this.innerWidth && ZG.innerHeight === this.innerHeight) return ZG;
-         const wG = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(bG);
-         if (!wG) return null;
-         const SG = {
-           translate: bG,
-           x: parseFloat(wG[1]) / 100 * this.innerWidth,
-           y: parseFloat(wG[2]) / 100 * this.innerHeight,
-           innerWidth: this.innerWidth,
-           innerHeight: this.innerHeight
-         };
-         return this.anchors.set(GG, SG), SG
+       close() {
+         var MM;
+         this.closed = !0, null === (MM = this.opened) || void 0 === MM || MM.close(), this.opened = null
```

#### 39. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17165-L17166` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L207-L208) · [Before (L17165-L17166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17165-L17166)

```diff
-       constructor(GG) {
-         this.select = GG, this.picks = new Map
+       constructor() {
+         this.host = null, this.makeDefault = null
```

#### 40. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17168-L17170` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L210-L211) · [Before (L17168-L17170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17168-L17170)

```diff
-       open(GG, bG, ZG) {
-         const wG = Zr(bG, GG);
-         null !== wG && this.Df(GG, wG, ZG)
+       setHost(MM) {
+         this.host = MM
```

#### 41. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17172-L17180` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L213-L214) · [Before (L17172-L17180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17172-L17180)

```diff
-       follow(GG, bG) {
-         if (kG())
-           for (const [ZG, {
-               item: wG,
-               had: SG
-             }] of this.picks) {
-             const LG = Zr(GG, ZG);
-             LG !== wG && (null !== LG && bG(wG) > SG ? this.Df(ZG, LG, bG) : this.picks.delete(ZG))
-           } else this.picks.clear()
+       setDefaultHost(MM) {
+         this.makeDefault = MM
```

#### 42. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17182-L17183` → after: `L216-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L216-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L216-L221) · [Before (L17182-L17183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17182-L17183)

```diff
-       clear() {
-         this.picks.clear()
+       current() {
+         if (null === this.host) {
+           if (null === this.makeDefault) throw new Error("no preview host");
+           this.host = this.makeDefault()
+         }
+         return this.host
```

#### 43. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17185-L17189` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L223-L224) · [Before (L17185-L17189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17185-L17189)

```diff
-       Df(GG, bG, ZG) {
-         this.picks.set(GG, {
-           item: bG,
-           had: ZG(bG)
-         }), this.select(GG, bG)
+       openMob(MM) {
+         return new nM(this.current().openMob(MM))
```

#### 44. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17191-L17197` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L226-L227) · [Before (L17191-L17197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17191-L17197)

```diff
-     }(jS.l);
- 
-     function Sr(GG) {
-       return bG => {
-         let ZG = 0;
-         for (const wG of GG.getInventoryItems())(null === wG || void 0 === wG ? void 0 : wG.name) === bG && (ZG += null === wG.amount ? 1 : Math.max(wG.amount, 0));
-         return ZG
+       openPet(MM) {
+         return new nM(this.current().openPet(MM))
```

#### 45. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17199-L17232` → after: `L229-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L229-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L229-L233) · [Before (L17199-L17232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17199-L17232)

```diff
-     }
- 
-     function Lr(GG, bG, ZG, wG) {
-       GG.getClientOption(bG, "canCraft") && "inventory" !== ES.e.get("openInGameMenuName") && (wr.open(ZG, wG.get(), Sr(GG)), lS.l.xh("toggleMenu", `inventory|${ZG}`))
-     }
-     let yr = null,
-       kr = !1;
- 
-     function Ur(GG) {
-       const bG = iL();
-       GG === yr && bG === kr || (yr = GG, kr = bG, (0, jS.n)(function(GG, bG) {
-         const ZG = new Map;
-         for (let wG = GG + 1; wG <= SG.length; wG++) {
-           const SG = TL(wG, GG, bG);
-           if (SG)
-             for (const bG of JG(wG).unlocks) ZG.set(bG, {
- ... (18 more removed lines; see GitHub link above)
+       openMobLineup(MM) {
+         return new nM(this.current().openMobLineup(MM))
+       }
+       openCharacter(MM, rM) {
+         return new QM(this.current().openCharacter(MM, rM))
```

#### 46. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17235-L17250` → after: `L236-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L236-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L236-L243) · [Before (L17235-L17250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17235-L17250)

```diff
- 
-     function pr(GG, bG, ZG) {
-       var wG, SG;
-       const LG = GG.getTargetedBlock();
-       if (!LG || ! function(GG, bG, ZG) {
-           if ("Chest" !== bG) return !1;
-           const wG = GG.split("|")[0];
-           if (!YZ(wG) || 0 === lb[wG].outputSlots.length) return !1;
-           const SG = Wd(GG);
-           return ZG[0] === SG[0] && ZG[1] === SG[1] && ZG[2] === SG[2]
-         }(ZG, null === (wG = GG.YZG(bG)) || void 0 === wG ? void 0 : wG.name, LG.normal)) return !1;
-       const [yG, kG, UG] = LG.Oh, YG = GG.getBlockId(yG, kG, UG);
-       return 0 === YG || !0 === (null === (SG = vG.l[YG]) || void 0 === SG ? void 0 : SG.canBePlacedOver)
-     }
-     var fr = ZG(37105);
-     const Qr = new Set(hZ.c);
+   },
+   35051: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => OM.d,
+       h: () => OM.e,
+       l: () => OM.i
+     });
+     var OM = iM(35055);
```

#### 47. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17253` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L246) · [Before (L17253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17253)

```diff
-         this.toasts = GG, this.lastAt = -1 / 0
+         this.load = MM, this.loaded = null, this.loading = null
```

#### 48. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17255-L17273` → after: `L248-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L248-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L248-L251) · [Before (L17255-L17273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17255-L17273)

```diff
-       onAltAction(GG, bG, ZG) {
-         const wG = GG.getTargetedBlock();
-         if (!wG || function(GG) {
-             const bG = GG.split("|")[0];
-             return YZ(bG) || null !== uw(bG) || CG(bG) || hZ.c.includes(bG)
-           }(ZG) && !Qr.has(ZG.split("|")[0])) return;
-         const SG = GG.YZG(bG);
-         if (!SG || !Qr.has(SG.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
-         const LG = SG.typeObj.id,
-           [yG, kG, UG] = wG.Oh,
-           YG = GG.getBlockId(yG, kG, UG),
-           VG = vG.l[YG];
-         (0 === YG || null !== VG && void 0 !== VG && VG.UQ || null !== VG && void 0 !== VG && VG.canBePlacedOver) && GG.isSolidToPlayerBlockId(LG) && GG.canModifyBlockAt(yG, kG, UG) && GG.vbG(yG, kG, UG, LG) && !GG.vbG(yG, kG, UG, LG, bG) && (this.lastAt = Date.now(), this.toasts … [truncated]
-           baf2ToastText: [(0, lG.ue)({
-             translationKey: "buildAFactory2Game:beltStepBack"
-           }, lG.O.whiteUiText)],
- ... (3 more removed lines; see GitHub link above)
+       run(MM) {
+         return null !== this.loaded ? MM(this.loaded) : (this.loading ??= this.load().then((MM => (this.loaded = MM, MM)), (MM => {
+           throw this.loading = null, MM
+         })), this.loading.then(MM))
```

#### 49. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17277-L17278` → after: `L255-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L255-L256) · [Before (L17277-L17278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17277-L17278)

```diff
-       constructor(GG) {
-         this.show = GG, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
+       constructor() {
+         this.mobScene = new SM((() => Promise.all([iM.e(84), iM.e(255), iM.e(254), iM.e(279), iM.e(111), iM.e(280), iM.e(87), iM.e(277), iM.e(85), iM.e(86), iM.e(287), iM.e(281), iM.e(286), iM.e(284), iM.e(276), iM.e(302), iM.e(251), iM.e(269), iM.e(282), iM.e(285), iM.e(89), iM. … [truncated]
```

#### 50. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17280-L17295` → after: `L258-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L258-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L258-L259) · [Before (L17280-L17295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17280-L17295)

```diff
-       onMining(GG, bG, ZG) {
-         var wG;
-         if (!bG) return this.started = null, void this.gatedThisHold.clear();
-         if (!GG) return void(this.started = null);
-         const SG = `${GG.x},${GG.y},${GG.z},${GG.Ik}`;
-         if (SG === this.started) return;
-         this.started = SG;
-         const LG = Aw(GG.y) ? YJ(GG.block, GG.Ik, GG.level) : null;
-         if (null === LG || this.gatedThisHold.has(SG)) return;
-         this.gatedThisHold.add(SG);
-         const yG = GG.block.split("|")[0];
-         ZG - (null !== (wG = this.hintedAt.get(yG)) && void 0 !== wG ? wG : -1 / 0) < 5e3 || (this.hintedAt.set(yG, ZG), this.show({
-           baf2ToastText: VJ(LG, GG.block),
-           baf2ToastMs: 2500,
-           baf2ToastStyle: "baf2ToastWarn"
-         }))
+       openMob(MM) {
+         return this.mobScene.run((rM => rM.openMobPreview(MM)))
```

#### 51. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17297-L17317` → after: `L261-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L261-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L261-L262) · [Before (L17297-L17317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17297-L17317)

```diff
-     }
-     var dr = ZG(29);
- 
-     function Jr(GG, bG) {
-       const ZG = [...GG.baf2CoreBankPaused];
-       for (const [SG] of GG.baf2CoreBanked) ZG.push(SG);
-       for (const yG of SG) {
-         for (const {
-             item: GG
-           }
-           of yG.cost) ZG.push(GG);
-         for (const GG of yG.newDeposits) ZG.push(GG.block);
-         for (const GG of yG.unlocks) ZG.push(GG, FG(GG));
-         yG.reward && ZG.push(yG.reward);
-         for (const {
-             item: GG
- ... (5 more removed lines; see GitHub link above)
+       openPet(MM) {
+         return this.mobScene.run((rM => rM.openPetPreview(MM)))
```

#### 52. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17319-L17321` → after: `L264-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L264-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L264-L268) · [Before (L17319-L17321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17319-L17321)

```diff
-       return {
-         message: GG,
-         itemNames: bG([...new Set(ZG)])
+       openMobLineup(MM) {
+         return this.mobScene.run((rM => rM.openMobLineupPreview(MM)))
+       }
+       openCharacter(MM, rM) {
+         return this.characterScene.run((iM => iM.openCharacterPreview(MM, rM)))
```

#### 53. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17324-L17326` → after: `L271-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L271-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L271-L288) · [Before (L17324-L17326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17324-L17326)

```diff
-     const rr = "baf2MultiblockGuide";
-     const zr = new Map;
-     const Er = function(GG, bG, ZG, SG) {
+     OM.i.setDefaultHost((() => new jM))
+   },
+   44401: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       FrontlineMvpLineup: () => LM
+     });
+     var OM = iM(44),
+       SM = iM(1116),
+       jM = iM.n(SM),
+       aM = iM(35051),
+       PM = iM(44187),
+       nM = iM(44184),
+       QM = iM(1303);
+ 
+     function zM(MM) {
+       return aM.l.openMobLineup(MM)
+ ... (2 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17328` → after: `L290-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L290-L291) · [Before (L17328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17328)

```diff
-         localPlayerId: LG
+         players: rM,
+         className: iM
```

#### 55. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17330-L17475` → after: `L293-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L293-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L293-L304) · [Before (L17330-L17475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17330-L17475)

```diff
-       const yG = new dk,
-         kG = new UQ,
-         YG = new hQ,
-         VG = new QQ(YG),
-         pG = (GG, bG) => {
-           bG ? VG.observe(GG) : VG.unobserve(GG)
-         },
-         fG = new fQ,
-         QG = new JQ(pG),
-         KG = GG => QG.covers(GG),
-         hG = new MQ;
-       let dG;
-       const JG = new sy((GG => {
-           dG.sendCommand(GG)
-         })),
-         rG = () => {
- ... (130 more removed lines; see GitHub link above)
+       const SM = (0, OM.useRef)(null),
+         aM = (0, OM.useMemo)((() => rM.map((MM => {
+           let {
+             cosmetics: rM,
+             size: iM,
+             heldGun: OM
+           } = MM;
+           return {
+             cosmetics: rM,
+             size: iM,
+             QG: OM.name,
+             animation: OM.aimed ? PM.b : PM.c
```

#### 56. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17477-L17546` → after: `L306-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L306-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L306-L311) · [Before (L17477-L17546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17477-L17546)

```diff
-           zb.push((0, zS.q)((0, wG.createElement)(wG.Fragment, null, (0, wG.createElement)(EQ, {
-             controller: QG
-           }), (0, wG.createElement)(fK, {
-             store: mG
-           }), (0, wG.createElement)(XJ, {
-             store: wb
-           }), (0, wG.createElement)(HQ, {
-             store: EG
-           }), (0, wG.createElement)(xQ, {
-             store: oG
-           }), (0, wG.createElement)(bK, {
-             store: uG
-           }), (0, wG.createElement)(LK, {
-             store: Yb
-           }), (0, wG.createElement)(rh, {
-             store: TG
- ... (54 more removed lines; see GitHub link above)
+         }))), [rM]),
+         LM = function(MM) {
+           const [rM, iM] = (0, OM.useState)([]);
+           return (0, OM.useEffect)((() => {
+             iM(MM.map((() => !1)));
+             const rM = MM.map(((MM, rM) => {
```

#### 57. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17548-L17549` → after: `L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L313) · [Before (L17548-L17549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17548-L17549)

```diff
-                 tutorial: LG,
-                 tutorialKnown: yG
+                 showAfterMs: OM
```

#### 58. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17551-L17605` → after: `L315-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L315-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L315-L318) · [Before (L17551-L17605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17551-L17605)

```diff
-               (null === (SG = ZG) || void 0 === SG ? void 0 : SG.tutorial) === LG && ZG.tutorialKnown === yG || (ZG = {
-                 tutorial: LG,
-                 tutorialKnown: yG
-               }, wG = (0, rS.r)({
-                 id: "baf2Tutorial",
-                 order: -1,
-                 labelKey: iV[LG],
-                 icon: {
-                   kind: "icon",
-                   name: uV[LG]
-                 },
-                 iconOnly: !0,
-                 disabled: !yG,
-                 className: "Baf2TutorialButton",
-                 onClick: () => {
-                   GG.next()
- ... (39 more removed lines; see GitHub link above)
+               return window.setTimeout((() => {
+                 iM((MM => MM.map(((MM, iM) => MM || iM === rM))))
+               }), OM)
+             }));
```

#### 59. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17607-L17864` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L320) · [Before (L17607-L17864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17607-L17864)

```diff
-               bG(), GG.style.removeProperty("--baf2-backpack-width")
-             }
-           }()), zb.push(function() {
-             const GG = document.documentElement;
-             return GG.classList.add(br), () => {
-               GG.classList.remove(br)
-             }
-           }()), zb.push((() => {
-             VG.dispose(), YG.dispose()
-           })), hG.start(dG), zb.push((() => {
-             hG.dispose(), Ub.dispose(), IG.dispose()
-           }))
-         },
-         onClose: () => {
-           (0, jS.p)([]), xS = null, OS = new Set, yr = null, (0, jS.n)(new Map), zr.clear();
-           for (const GG of zb) GG();
- ... (242 more removed lines; see GitHub link above)
+               for (const MM of rM) window.clearTimeout(MM)
```

#### 60. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17866-L17973` → after: `L322-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L322-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/225.js#L322-L332) · [Before (L17866-L17973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/225.js#L17866-L17973)

```diff
-             const ZG = (Sb = GG.baf2IslandsOpen, Lb = "islands" === (null === (Gb = kG.get()) || void 0 === Gb ? void 0 : Gb.kind), Vb = Jb, pb = Date.now(), Sb && !Lb && pb - Vb < cY);
-             Eb({
-               kind: "islands",
-               islands: GG,
-               arrivedAtMs: Date.now(),
-               backToCore: lY(kG.get())
-             }), ZG && (Jb = -1 / 0, db = Date.now(), JG.send(tG)), GG.baf2IslandsOpen && ("clientGame" !== ES.e.get("openInGameMenuName") && (0, oS.h)(), (0, zS.m)())
-           } else if ("baf2CoopTransfer" === GG) {
-             var wb;
-             const GG = bG;
-             GG.baf2TransferOn ? (Eb({
-               kind: "transfer",
-               transfer: GG,
-               arrivedAtMs: Date.now()
-             }), (0, zS.m)()) : "transfer" === (null === (wb = kG.get()) || void 0 === wb ? void 0 : wb.kind) && (0, zS.f)()
-           } else "baf2IslandLeft" === GG ? (uG.dropHeld(), null !== kG.get() && ob(), "inventory" === ES.e.get("openInGameMenuName") && (0, oS.h)()) : "baf2Arc" === GG ? yb.OJ(dG, bG) : "baf2Blade" === GG ? kb.onBlade(dG, bG) : "baf2JetFlame" === GG ? Ub.OJ(dG, bG) : "baf2GearPow … [truncated]
- ... (92 more removed lines; see GitHub link above)
+           }), [MM]), rM
+         }(rM),
+         mM = (0, OM.useMemo)((() => ({
+           figures: aM,
+           shown: LM
+         })), [aM, LM]);
+       return (0, nM.e)(SM, zM, mM), (0, QM.jsx)("div", {
+         className: jM()("MobPreview", iM),
+         ref: SM
+       })
+     }))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/226.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/226.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65)

#### 1. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L4-L153` → after: `L4-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L4-L17) · [Before (L4-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L4-L153)

```diff
-   36992: GG => {
-     GG.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
-       blue: [0, 0, 255],
-       blueviolet: [138, 43, 226],
-       brown: [165, 42, 42],
-       burlywood: [222, 184, 135],
-       cadetblue: [95, 158, 160],
- ... (134 more removed lines; see GitHub link above)
+   44180: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       MobPreview: () => LM
+     });
+     var OM = iM(44),
+       SM = iM(1116),
+       jM = iM.n(SM),
+       aM = iM(44184),
+       PM = iM(35051),
+       nM = iM(44187),
+       QM = iM(1303);
+ 
+     function zM(MM) {
+       return PM.l.openMob(MM)
```

#### 2. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L156-L165` → after: `L38-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L38-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L38-L43) · [Before (L156-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L156-L165)

```diff
-   36985: (GG, bG, ZG) => {
-     var wG = ZG(36992),
-       SG = ZG(36996),
-       LG = Object.hasOwnProperty,
-       yG = Object.create(null);
-     for (var kG in wG) LG.call(wG, kG) && (yG[wG[kG]] = kG);
-     var UG = GG.exports = {
-       to: {},
-       get: {}
-     };
+   44184: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => jM
+     });
+     var OM = iM(44),
+       SM = iM(3047);
```

#### 3. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L168-L197` → after: `L46-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L46-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L46-L54) · [Before (L168-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L168-L197)

```diff
-       return Math.min(Math.max(bG, GG), ZG)
-     }
- 
-     function VG(GG) {
-       var bG = Math.round(GG).toString(16).toUpperCase();
-       return bG.length < 2 ? "0" + bG : bG
-     }
-     UG.get = function(GG) {
-       var bG, ZG;
-       switch (GG.substring(0, 3).toLowerCase()) {
-         case "hsl":
-           bG = UG.get.hsl(GG), ZG = "hsl";
-           break;
-         case "hwb":
-           bG = UG.get.hwb(GG), ZG = "hwb";
-           break;
- ... (14 more removed lines; see GitHub link above)
+       const jM = (0, OM.useRef)(null),
+         {
+           width: aM,
+           height: PM
+         } = (0, SM.d)(MM);
+       (0, OM.useEffect)((() => {
+         const iM = rM(MM.current);
+         return jM.current = iM, () => {
+           iM.close(), jM.current = null
```

#### 4. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L199-L249` → after: `L56-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L56-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L56-L60) · [Before (L199-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L199-L249)

```diff
-         SG && (yG[3] = parseInt(SG, 16) / 255)
-       } else if (bG = GG.match(/^#([a-f0-9]{3,4})$/i)) {
-         for (SG = (bG = bG[1])[3], ZG = 0; ZG < 3; ZG++) yG[ZG] = parseInt(bG[ZG] + bG[ZG], 16);
-         SG && (yG[3] = parseInt(SG + SG, 16) / 255)
-       } else if (bG = GG.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
-         for (ZG = 0; ZG < 3; ZG++) yG[ZG] = parseInt(bG[ZG + 1], 0);
-         bG[4] && (bG[5] ? yG[3] = .01 * parseFloat(bG[4]) : yG[3] = parseFloat(bG[4]))
-       } else {
-         if (!(bG = GG.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) return (bG = GG.match(/^(\w+)$/)) ? "transparent" === bG[1] ? [0, 0, 0, 0] : LG.call(wG, bG[1]) ? ((yG = wG[bG[1]])[3] = 1, yG) :  … [truncated]
-         for (ZG = 0; ZG < 3; ZG++) yG[ZG] = Math.round(2.55 * parseFloat(bG[ZG + 1]));
-         bG[4] && (bG[5] ? yG[3] = .01 * parseFloat(bG[4]) : yG[3] = parseFloat(bG[4]))
-       }
-       for (ZG = 0; ZG < 3; ZG++) yG[ZG] = YG(yG[ZG], 0, 255);
-       return yG[3] = YG(yG[3], 0, 1), yG
-     }, UG.get.hsl = function(GG) {
-       if (!GG) return null;
- ... (35 more removed lines; see GitHub link above)
+       }), [MM, rM]), (0, OM.useEffect)((() => {
+         aM <= 0 || PM <= 0 || jM.current.resize(aM, PM)
+       }), [aM, PM]), (0, OM.useEffect)((() => {
+         jM.current.show(iM)
+       }), [iM])
```

#### 5. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L252-L258` → after: `L63-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L63-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L63-L70) · [Before (L252-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L252-L258)

```diff
-   36981: (GG, bG, ZG) => {
-     const wG = ZG(36985),
-       SG = ZG(37e3),
-       LG = ["keyword", "gray", "hex"],
-       yG = {};
-     for (const QG of Object.keys(SG)) yG[[...SG[QG].labels].sort().join("")] = QG;
-     const kG = {};
+   44187: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => mM,
+       c: () => LM,
+       d: () => nM
+     });
+     var OM = iM(38111),
+       SM = iM(39673);
```

#### 6. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L261-L384` → after: `L73-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L73-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L73-L78) · [Before (L261-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L261-L384)

```diff
-       if (!(this instanceof UG)) return new UG(GG, bG);
-       if (bG && bG in LG && (bG = null), bG && !(bG in SG)) throw new Error("Unknown model: " + bG);
-       let ZG, YG;
-       if (null == GG) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
-       else if (GG instanceof UG) this.model = GG.model, this.color = [...GG.color], this.valpha = GG.valpha;
-       else if ("string" === typeof GG) {
-         const bG = wG.get(GG);
-         if (null === bG) throw new Error("Unable to parse color from string: " + GG);
-         this.model = bG.model, YG = SG[this.model].channels, this.color = bG.value.slice(0, YG), this.valpha = "number" === typeof bG.value[YG] ? bG.value[YG] : 1
-       } else if (GG.length > 0) {
-         this.model = bG || "rgb", YG = SG[this.model].channels;
-         const ZG = Array.prototype.slice.call(GG, 0, YG);
-         this.color = fG(ZG, YG), this.valpha = "number" === typeof GG[YG] ? GG[YG] : 1
-       } else if ("number" === typeof GG) this.model = "rgb", this.color = [GG >> 16 & 255, GG >> 8 & 255, 255 & GG], this.valpha = 1;
-       else {
-         this.valpha = 1;
- ... (108 more removed lines; see GitHub link above)
+       let [iM, OM, SM] = MM;
+       return [0, .5, 1].map((MM => ({
+         timeFraction: MM,
+         rotation: {
+           bS: "catmull-rom-spline",
+           point: [iM, OM, SM + (.5 === MM ? rM : 0)]
```

#### 7. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L386-L483` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L80) · [Before (L386-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L386-L483)

```diff
-         return .2126 * bG[0] + .7152 * bG[1] + .0722 * bG[2]
-       },
-       contrast(GG) {
-         const bG = this.luminosity(),
-           ZG = GG.luminosity();
-         return bG > ZG ? (bG + .05) / (ZG + .05) : (ZG + .05) / (bG + .05)
-       },
-       level(GG) {
-         const bG = this.contrast(GG);
-         return bG >= 7 ? "AAA" : bG >= 4.5 ? "AA" : ""
-       },
-       isDark() {
-         const GG = this.rgb().color;
-         return (2126 * GG[0] + 7152 * GG[1] + 722 * GG[2]) / 1e4 < 128
-       },
-       isLight() {
- ... (82 more removed lines; see GitHub link above)
+       })))
```

#### 8. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L487-L492` → after: `L84-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L84-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L84-L111) · [Before (L487-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L487-L492)

```diff
-       GG = Array.isArray(GG) ? GG : [GG];
-       for (const wG of GG)(kG[wG] || (kG[wG] = []))[bG] = ZG;
-       return GG = GG[0],
-         function(wG) {
-           let SG;
-           return void 0 !== wG ? (ZG && (wG = ZG(wG)), SG = this[GG](), SG.color[bG] = wG, SG) : (SG = this[GG]().color[bG], ZG && (SG = ZG(SG)), SG)
+       return {
+         yS: 3200,
+         loop: !0,
+         GS: {
+           Root: {
+             timeline: [0, .5, 1].map((MM => ({
+               timeFraction: MM,
+               position: {
+                 bS: "catmull-rom-spline",
+                 point: [0, .5 === MM ? .18 : 0, 0]
+               }
+             })))
+           },
+           HeadMesh: {
+             timeline: [0, .25, .75, 1].map((MM => ({
+               timeFraction: MM,
+ ... (12 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L497-L498` → after: `L131-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L131-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L131-L134) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L497-L498)

```diff
-       return function(bG) {
-         return Math.max(0, Math.min(GG, bG))
+       var rM;
+       return {
+         ...aM.store,
+         yaw: aM.store.yaw + (null !== (rM = OM.d[MM].previewYaw) && void 0 !== rM ? rM : 0)
```

#### 10. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L503-L504` → after: `L153-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L153-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L153-L155) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L503-L504)

```diff
-       for (let ZG = 0; ZG < bG; ZG++) "number" !== typeof GG[ZG] && (GG[ZG] = 0);
-       return GG
+       MM instanceof Promise ? MM.then(rM).catch((MM => {
+         console.error("Couldn't open the preview", MM)
+       })) : rM(MM)
```

#### 11. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L506-L571` → after: `L157-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L157-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L157-L176) · [Before (L506-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L506-L571)

```diff
-     GG.exports = UG
-   },
-   37007: (GG, bG, ZG) => {
-     const wG = ZG(37016),
-       SG = {};
-     for (const yG of Object.keys(wG)) SG[wG[yG]] = yG;
-     const LG = {
-       rgb: {
-         channels: 3,
-         labels: "rgb"
-       },
-       hsl: {
-         channels: 3,
-         labels: "hsl"
-       },
-       hsv: {
- ... (50 more removed lines; see GitHub link above)
+     class nM {
+       constructor(MM) {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, PM(MM, (MM => {
+           this.closed ? MM.close() : (this.opened = MM, null !== this.size && MM.resize(this.size.width, this.size.height), null !== this.view && MM.show(this.view))
+         }))
+       }
+       show(MM) {
+         var rM;
+         this.view = MM, null === (rM = this.opened) || void 0 === rM || rM.show(MM)
+       }
+       resize(MM, rM) {
+         var iM;
+         this.size = {
+           width: MM,
+           height: rM
+         }, null === (iM = this.opened) || void 0 === iM || iM.resize(MM, rM)
+ ... (4 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L589-L631` → after: `L179-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L179-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L179-L183) · [Before (L589-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L589-L631)

```diff
-     LG.rgb.hsl = function(GG) {
-       const bG = GG[0] / 255,
-         ZG = GG[1] / 255,
-         wG = GG[2] / 255,
-         SG = Math.min(bG, ZG, wG),
-         LG = Math.max(bG, ZG, wG),
-         yG = LG - SG;
-       let kG, UG;
-       LG === SG ? kG = 0 : bG === LG ? kG = (ZG - wG) / yG : ZG === LG ? kG = 2 + (wG - bG) / yG : wG === LG && (kG = 4 + (bG - ZG) / yG), kG = Math.min(60 * kG, 360), kG < 0 && (kG += 360);
-       const YG = (SG + LG) / 2;
-       return UG = LG === SG ? 0 : YG <= .5 ? yG / (LG + SG) : yG / (2 - LG - SG), [kG, 100 * UG, 100 * YG]
-     }, LG.rgb.hsv = function(GG) {
-       let bG, ZG, wG, SG, LG;
-       const yG = GG[0] / 255,
-         kG = GG[1] / 255,
-         UG = GG[2] / 255,
- ... (27 more removed lines; see GitHub link above)
+     class QM {
+       constructor(MM) {
+         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(MM).then((MM => MM.ready)), PM(MM, (MM => {
+           this.closed ? MM.close() : (this.opened = MM, null !== this.size && MM.resize(this.size.width, this.size.height))
+         }))
```

#### 13. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L633-L690` → after: `L185-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L185-L186) · [Before (L633-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L633-L690)

```diff
-       var yG, kG;
-       return ZG
-     }, LG.keyword.rgb = function(GG) {
-       return wG[GG]
-     }, LG.rgb.xyz = function(GG) {
-       let bG = GG[0] / 255,
-         ZG = GG[1] / 255,
-         wG = GG[2] / 255;
-       bG = bG > .04045 ? ((bG + .055) / 1.055) ** 2.4 : bG / 12.92, ZG = ZG > .04045 ? ((ZG + .055) / 1.055) ** 2.4 : ZG / 12.92, wG = wG > .04045 ? ((wG + .055) / 1.055) ** 2.4 : wG / 12.92;
-       return [100 * (.4124 * bG + .3576 * ZG + .1805 * wG), 100 * (.2126 * bG + .7152 * ZG + .0722 * wG), 100 * (.0193 * bG + .1192 * ZG + .9505 * wG)]
-     }, LG.rgb.lab = function(GG) {
-       const bG = LG.rgb.xyz(GG);
-       let ZG = bG[0],
-         wG = bG[1],
-         SG = bG[2];
-       ZG /= 95.047, wG /= 100, SG /= 108.883, ZG = ZG > .008856 ? ZG ** (1 / 3) : 7.787 * ZG + 16 / 116, wG = wG > .008856 ? wG ** (1 / 3) : 7.787 * wG + 16 / 116, SG = SG > .008856 ? SG ** (1 / 3) : 7.787 * SG + 16 / 116;
- ... (42 more removed lines; see GitHub link above)
+       get dev() {
+         return this.opened.dev
```

#### 14. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L692-L732` → after: `L188-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L188-L190) · [Before (L692-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L692-L732)

```diff
-     }, LG.hsv.hsl = function(GG) {
-       const bG = GG[0],
-         ZG = GG[1] / 100,
-         wG = GG[2] / 100,
-         SG = Math.max(wG, .01);
-       let LG, yG;
-       yG = (2 - ZG) * wG;
-       const kG = (2 - ZG) * SG;
-       return LG = ZG * SG, LG /= kG <= 1 ? kG : 2 - kG, LG = LG || 0, yG /= 2, [bG, 100 * LG, 100 * yG]
-     }, LG.hwb.rgb = function(GG) {
-       const bG = GG[0] / 360;
-       let ZG = GG[1] / 100,
-         wG = GG[2] / 100;
-       const SG = ZG + wG;
-       let LG;
-       SG > 1 && (ZG /= SG, wG /= SG);
- ... (25 more removed lines; see GitHub link above)
+       isReady() {
+         var MM, rM;
+         return null !== (MM = null === (rM = this.opened) || void 0 === rM ? void 0 : rM.isReady()) && void 0 !== MM && MM
```

#### 15. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L734-L795` → after: `L192-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L192-L194) · [Before (L734-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L734-L795)

```diff
-       return [255 * YG, 255 * VG, 255 * pG]
-     }, LG.cmyk.rgb = function(GG) {
-       const bG = GG[0] / 100,
-         ZG = GG[1] / 100,
-         wG = GG[2] / 100,
-         SG = GG[3] / 100;
-       return [255 * (1 - Math.min(1, bG * (1 - SG) + SG)), 255 * (1 - Math.min(1, ZG * (1 - SG) + SG)), 255 * (1 - Math.min(1, wG * (1 - SG) + SG))]
-     }, LG.xyz.rgb = function(GG) {
-       const bG = GG[0] / 100,
-         ZG = GG[1] / 100,
-         wG = GG[2] / 100;
-       let SG, LG, yG;
-       return SG = 3.2406 * bG + -1.5372 * ZG + -.4986 * wG, LG = -.9689 * bG + 1.8758 * ZG + .0415 * wG, yG = .0557 * bG + -.204 * ZG + 1.057 * wG, SG = SG > .0031308 ? 1.055 * SG ** (1 / 2.4) - .055 : 12.92 * SG, LG = LG > .0031308 ? 1.055 * LG ** (1 / 2.4) - .055 : 12.92 * LG,  … [truncated]
-     }, LG.xyz.lab = function(GG) {
-       let bG = GG[0],
-         ZG = GG[1],
- ... (46 more removed lines; see GitHub link above)
+       setCosmetic(MM, rM) {
+         var iM;
+         null === (iM = this.opened) || void 0 === iM || iM.setCosmetic(MM, rM)
```

#### 16. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L797-L858` → after: `L196-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L196-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L196-L221) · [Before (L797-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L797-L858)

```diff
-       let bG;
-       GG -= 16;
-       return [Math.floor(GG / 36) / 5 * 255, Math.floor((bG = GG % 36) / 6) / 5 * 255, bG % 6 / 5 * 255]
-     }, LG.rgb.hex = function(GG) {
-       const bG = (((255 & Math.round(GG[0])) << 16) + ((255 & Math.round(GG[1])) << 8) + (255 & Math.round(GG[2]))).toString(16).toUpperCase();
-       return "000000".substring(bG.length) + bG
-     }, LG.hex.rgb = function(GG) {
-       const bG = GG.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
-       if (!bG) return [0, 0, 0];
-       let ZG = bG[0];
-       3 === bG[0].length && (ZG = ZG.split("").map((GG => GG + GG)).join(""));
-       const wG = parseInt(ZG, 16);
-       return [wG >> 16 & 255, wG >> 8 & 255, 255 & wG]
-     }, LG.rgb.hcg = function(GG) {
-       const bG = GG[0] / 255,
-         ZG = GG[1] / 255,
- ... (46 more removed lines; see GitHub link above)
+       playEmote(MM) {
+         var rM;
+         null === (rM = this.opened) || void 0 === rM || rM.playEmote(MM)
+       }
+       setOrbit(MM) {
+         var rM;
+         null === (rM = this.opened) || void 0 === rM || rM.setOrbit(MM)
+       }
+       resetCamera() {
+         var MM;
+         null === (MM = this.opened) || void 0 === MM || MM.resetCamera()
+       }
+       async untilDrawn(MM) {
+         var rM;
+         await this.ready, await (null === (rM = this.opened) || void 0 === rM ? void 0 : rM.untilDrawn(MM))
+       }
+ ... (10 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L902-L958` → after: `L224-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L224-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L224-L237) · [Before (L902-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L902-L958)

```diff
-   },
-   37e3: (GG, bG, ZG) => {
-     const wG = ZG(37007),
-       SG = ZG(37019),
-       LG = {};
-     Object.keys(wG).forEach((GG => {
-       LG[GG] = {}, Object.defineProperty(LG[GG], "channels", {
-         value: wG[GG].channels
-       }), Object.defineProperty(LG[GG], "labels", {
-         value: wG[GG].labels
-       });
-       const bG = SG(GG);
-       Object.keys(bG).forEach((ZG => {
-         const wG = bG[ZG];
-         LG[GG][ZG] = function(GG) {
-           const bG = function() {
- ... (41 more removed lines; see GitHub link above)
+     const zM = new class {
+       constructor() {
+         this.host = null, this.makeDefault = null
+       }
+       setHost(MM) {
+         this.host = MM
+       }
+       setDefaultHost(MM) {
+         this.makeDefault = MM
+       }
+       current() {
+         if (null === this.host) {
+           if (null === this.makeDefault) throw new Error("no preview host");
+           this.host = this.makeDefault()
```

#### 18. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L961-L966` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L241-L242) · [Before (L961-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L961-L966)

```diff
-       return bG
-     }
- 
-     function LG(GG, bG) {
-       return function(ZG) {
-         return bG(GG(ZG))
+       openMob(MM) {
+         return new nM(this.current().openMob(MM))
```

#### 19. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L968-L983` → after: `L244-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L244-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L244-L251) · [Before (L968-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L968-L983)

```diff
-     }
- 
-     function yG(GG, bG) {
-       const ZG = [bG[GG].parent, GG];
-       let SG = wG[bG[GG].parent][GG],
-         yG = bG[GG].parent;
-       for (; bG[yG].parent;) ZG.unshift(bG[yG].parent), SG = LG(wG[bG[yG].parent][yG], SG), yG = bG[yG].parent;
-       return SG.conversion = ZG, SG
-     }
-     GG.exports = function(GG) {
-       const bG = SG(GG),
-         ZG = {},
-         wG = Object.keys(bG);
-       for (let SG = wG.length, LG = 0; LG < SG; LG++) {
-         const GG = wG[LG];
-         null !== bG[GG].parent && (ZG[GG] = yG(GG, bG))
+       openPet(MM) {
+         return new nM(this.current().openPet(MM))
+       }
+       openMobLineup(MM) {
+         return new nM(this.current().openMobLineup(MM))
+       }
+       openCharacter(MM, rM) {
+         return new QM(this.current().openCharacter(MM, rM))
```

#### 20. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1140-L1153` → after: `L255-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L255-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L255-L269) · [Before (L1140-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L1140-L1153)

```diff
-   36996: (GG, bG, ZG) => {
-     var wG = ZG(36998),
-       SG = Array.prototype.concat,
-       LG = Array.prototype.slice,
-       yG = GG.exports = function(GG) {
-         for (var bG = [], ZG = 0, yG = GG.length; ZG < yG; ZG++) {
-           var kG = GG[ZG];
-           wG(kG) ? bG = SG.call(bG, LG.call(kG)) : bG.push(kG)
-         }
-         return bG
-       };
-     yG.wrap = function(GG) {
-       return function() {
-         return GG(yG(arguments))
+   35051: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => OM.d,
+       h: () => OM.e,
+       l: () => OM.i
+     });
+     var OM = iM(35055);
+     class SM {
+       constructor(MM) {
+         this.load = MM, this.loaded = null, this.loading = null
+       }
+       run(MM) {
+         return null !== this.loaded ? MM(this.loaded) : (this.loading ??= this.load().then((MM => (this.loaded = MM, MM)), (MM => {
+           throw this.loading = null, MM
+         })), this.loading.then(MM))
```

#### 21. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1156-L1159` → after: `L272-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L272-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/226.js#L272-L287) · [Before (L1156-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/226.js#L1156-L1159)

```diff
-   },
-   36998: GG => {
-     GG.exports = function(GG) {
-       return !(!GG || "string" === typeof GG) && (GG instanceof Array || Array.isArray(GG) || GG.length >= 0 && (GG.splice instanceof Function || Object.getOwnPropertyDescriptor(GG, GG.length - 1) && "String" !== GG.constructor.name))
+     class jM {
+       constructor() {
+         this.mobScene = new SM((() => Promise.all([iM.e(84), iM.e(255), iM.e(254), iM.e(279), iM.e(111), iM.e(280), iM.e(87), iM.e(277), iM.e(85), iM.e(86), iM.e(287), iM.e(281), iM.e(286), iM.e(284), iM.e(276), iM.e(302), iM.e(251), iM.e(269), iM.e(282), iM.e(285), iM.e(89), iM. … [truncated]
+       }
+       openMob(MM) {
+         return this.mobScene.run((rM => rM.openMobPreview(MM)))
+       }
+       openPet(MM) {
+         return this.mobScene.run((rM => rM.openPetPreview(MM)))
+       }
+       openMobLineup(MM) {
+         return this.mobScene.run((rM => rM.openMobLineupPreview(MM)))
+       }
+       openCharacter(MM, rM) {
+         return this.characterScene.run((iM => iM.openCharacterPreview(MM, rM)))
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/227.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/227.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c)

#### 1. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L4` → after: `L4-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L4-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/227.js#L4-L369) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/227.js#L4)

```diff
-   37105: (GG, bG, ZG) => {
+   37331: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => ir
+     });
+     var OM = iM(44);
+     const SM = "newPlayerDeal",
+       jM = 36e5,
+       aM = [4, 12, 20, 20, 30];
+     const PM = 12 * jM;
+ 
+     function nM(MM) {
+       return MM - PM
+     }
+ 
+     function QM(MM, rM, iM) {
+       const OM = nM(iM);
+ ... (350 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L7-L10` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/227.js#L372) · [Before (L7-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/227.js#L7-L10)

```diff
-       g: () => Ub,
-       i: () => pb,
-       j: () => Yb,
-       m: () => Vb
+       i: () => dM
```

#### 3. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L12-L128` → after: `L374-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L374-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/227.js#L374-L536) · [Before (L12-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/227.js#L12-L128)

```diff
-     const wG = JSON.parse('{"src":["/sounds/generatedSprites/gunSemiAutomatic.aef27960ef.ogg","/sounds/generatedSprites/gunSemiAutomatic.e56594fab5.m4a","/sounds/generatedSprites/gunSemiAutomatic.d3e434f4d0.mp3","/sounds/generatedSprites/gunSemiAutomatic.97d6a47358.ac3"],"sprite" … [truncated]
-       SG = JSON.parse('{"src":["/sounds/generatedSprites/gunSubmachineGun.9d869e4ca3.ogg","/sounds/generatedSprites/gunSubmachineGun.8736ce9068.m4a","/sounds/generatedSprites/gunSubmachineGun.0a429c7e98.mp3","/sounds/generatedSprites/gunSubmachineGun.1db2897c09.ac3"],"sprite":{"s … [truncated]
-       LG = JSON.parse('{"src":["/sounds/generatedSprites/gunPistol.7432a47272.ogg","/sounds/generatedSprites/gunPistol.adec2d9f75.m4a","/sounds/generatedSprites/gunPistol.a9f647182b.mp3","/sounds/generatedSprites/gunPistol.f363b9fa6d.ac3"],"sprite":{"pistol_cock_01":[0,510],"pist … [truncated]
-       yG = JSON.parse('{"src":["/sounds/generatedSprites/gunRifle.ca54b877ed.ogg","/sounds/generatedSprites/gunRifle.94dfb28886.m4a","/sounds/generatedSprites/gunRifle.f2eb64407a.mp3","/sounds/generatedSprites/gunRifle.d268c1da8d.ac3"],"sprite":{"rifle_cock_01":[0,705.30612244897 … [truncated]
-       kG = JSON.parse('{"src":["/sounds/generatedSprites/gunMisc.35b4609d1c.ogg","/sounds/generatedSprites/gunMisc.acc63e7fe9.m4a","/sounds/generatedSprites/gunMisc.4403caaad2.mp3","/sounds/generatedSprites/gunMisc.97552f11dc.ac3"],"sprite":{"bullet_shell_bounce_general_07":[0,82 … [truncated]
-       UG = JSON.parse('{"src":["/sounds/generatedSprites/gunShotgun.4e0220339e.ogg","/sounds/generatedSprites/gunShotgun.137d0e6b6f.m4a","/sounds/generatedSprites/gunShotgun.8b1144b235.mp3","/sounds/generatedSprites/gunShotgun.0b25a6370a.ac3"],"sprite":{"shotgun_cock_01":[0,914.2 … [truncated]
-       YG = JSON.parse('{"src":["/sounds/generatedSprites/dig.affb4a6f05.ogg","/sounds/generatedSprites/dig.082c5b232c.m4a","/sounds/generatedSprites/dig.71feb10d5c.mp3","/sounds/generatedSprites/dig.4913c53dc2.ac3"],"sprite":{"cloth1":[0,1671.8367346938776],"cloth2":[1773.3333333 … [truncated]
-       VG = JSON.parse('{"src":["/sounds/generatedSprites/step.52076ddc3a.ogg","/sounds/generatedSprites/step.d6260ef2cc.m4a","/sounds/generatedSprites/step.6e5286b3a8.mp3","/sounds/generatedSprites/step.cfb5f3dd8f.ac3"],"sprite":{"hit1":[0,557.2789115646258],"hit2":[660,650.15873 … [truncated]
-       pG = JSON.parse('{"src":["/sounds/generatedSprites/randomBeep.7b90315654.ogg","/sounds/generatedSprites/randomBeep.0e88f6aa33.m4a","/sounds/generatedSprites/randomBeep.47ff5e799a.mp3","/sounds/generatedSprites/randomBeep.444034b8b7.ac3"],"sprite":{"beep":[100,2455.510204081 … [truncated]
-       fG = JSON.parse('{"src":["/sounds/generatedSprites/randomCannon.f9d64818ea.ogg","/sounds/generatedSprites/randomCannon.52f7576d74.m4a","/sounds/generatedSprites/randomCannon.bde162aee8.mp3","/sounds/generatedSprites/randomCannon.4877805969.ac3"],"sprite":{"cannonFire1":[100 … [truncated]
-       QG = JSON.parse('{"src":["/sounds/generatedSprites/randomCash.8ff82dcd92.ogg","/sounds/generatedSprites/randomCash.a86426509f.m4a","/sounds/generatedSprites/randomCash.48929d75f1.mp3","/sounds/generatedSprites/randomCash.f687b943c4.ac3"],"sprite":{"cashRegister":[100,3819.6 … [truncated]
-       KG = JSON.parse('{"src":["/sounds/generatedSprites/randomExp.fa5a4c9798.ogg","/sounds/generatedSprites/randomExp.a7e2faf290.m4a","/sounds/generatedSprites/randomExp.b4baff1a37.mp3","/sounds/generatedSprites/randomExp.4974715bbd.ac3"],"sprite":{"exp_collect":[100,1009.206349 … [truncated]
-       hG = JSON.parse('{"src":["/sounds/generatedSprites/randomFallsmall.e0ec9ce0a7.ogg","/sounds/generatedSprites/randomFallsmall.a1f24b70c2.m4a","/sounds/generatedSprites/randomFallsmall.bcbd5fef60.mp3","/sounds/generatedSprites/randomFallsmall.a3b7d06594.ac3"],"sprite":{"falls … [truncated]
-       dG = JSON.parse('{"src":["/sounds/generatedSprites/randomItems.380c31a312.ogg","/sounds/generatedSprites/randomItems.6ae69434b9.m4a","/sounds/generatedSprites/randomItems.85b5c2f034.mp3","/sounds/generatedSprites/randomItems.cdadb8aa52.ac3"],"sprite":{"bow":[100,500],"bucke … [truncated]
-       JG = JSON.parse('{"src":["/sounds/generatedSprites/randomFire.06f418fc54.ogg","/sounds/generatedSprites/randomFire.7c5564dd14.m4a","/sounds/generatedSprites/randomFire.f61e3ab1f3.mp3","/sounds/generatedSprites/randomFire.5869bbefc8.ac3"],"sprite":{"fireBurn":[100,2827.39229 … [truncated]
-       rG = JSON.parse('{"src":["/sounds/generatedSprites/randomFirecracker.ddc99cbc73.ogg","/sounds/generatedSprites/randomFirecracker.128308b436.m4a","/sounds/generatedSprites/randomFirecracker.d5635f7e7d.mp3","/sounds/generatedSprites/randomFirecracker.e5afa15901.ac3"],"sprite" … [truncated]
- ... (101 more removed lines; see GitHub link above)
+     iM(35072);
+     var OM = iM(44),
+       SM = iM(1116),
+       jM = iM.n(SM),
+       aM = iM(1188),
+       PM = iM(1520),
+       nM = iM(2796),
+       QM = iM(1398),
+       zM = iM(2382),
+       LM = iM(3449),
+       mM = iM(2412),
+       HM = iM(1303);
+ 
+     function hM(MM) {
+       let {
+         endsAt: rM,
+ ... (147 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L130-L143` → after: `L538-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L538-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/227.js#L538-L606) · [Before (L130-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/227.js#L130-L143)

```diff
-     }
-     for (const Qb in Sb) {
-       const GG = Sb[Qb];
-       for (let bG = 0; bG < GG.src.length; bG++) GG.src[bG] = wb.clientSideServerUrls.staticUrl + GG.src[bG]
-     }
-     const kb = {};
- 
-     function Ub(GG) {
-       if (kb[GG]) return fb(kb[GG]);
-       {
-         const bG = [];
-         for (const ZG in Sb)
-           for (const wG in Sb[ZG].sprite) wG.startsWith(GG) && bG.push(wG);
-         return kb[GG] = bG, fb(bG)
+       var jM, aM
+     }
+ 
+     function wM(MM) {
+       LM.NotificationProvider.showCustomPopup({
+         body: rM => (0, UM.jsx)(tM, {
+           gems: MM,
+           close: rM
+         }),
+         middleScreenPopupClassName: "NewPlayerDealAddedPopup",
+         disableExitButton: !0
+       })
+     }
+ 
+     function tM(MM) {
+       let {
+ ... (53 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L146-L166` → after: `L609-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L609-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/227.js#L609-L610) · [Before (L146-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/227.js#L146-L166)

```diff
- 
-     function Yb(GG) {
-       const bG = yb[GG];
-       if (void 0 === bG) throw new Error(`Invalid sound name ${GG} (not in any sprite sheet)`);
-       return bG
-     }
- 
-     function Vb(GG, bG) {
-       if (!(GG in Sb)) throw new Error("Invalid spriteTrack name");
-       return bG in Sb[GG].sprite
-     }
- 
-     function pb(GG) {
-       if (!(GG in Sb)) throw new Error("Invalid spritesheet name");
-       return Sb[GG]
-     }
- ... (5 more removed lines; see GitHub link above)
+   },
+   35072: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/228.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/228.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba)

#### 1. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L4` → after: `L4-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L4-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/228.js#L4-L163) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/228.js#L4)

```diff
-   40021: (GG, bG, ZG) => {
+   35103: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => SM,
+       e: () => jM
+     });
+     var OM = iM(3657);
+ 
+     function SM() {
+       if ("undefined" === typeof BroadcastChannel) return null;
+       const MM = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
+       try {
+         const rM = new BroadcastChannel(OM.i);
+         rM.postMessage({
+           stored: MM
+         }), rM.close()
+       } catch {
+ ... (144 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L9-L31` → after: `L169-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L169-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/228.js#L169-L427) · [Before (L9-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/228.js#L9-L31)

```diff
-     const wG = "The world isn't loaded, so no blocks can be seen.",
-       SG = "The world isn't loaded, so nothing in it can be seen."
-   },
-   39519: (GG, bG, ZG) => {
-     function wG(GG) {
-       return !(!GG.lobbyLeaderboardInfo && !GG.lobbyManage)
-     }
-     ZG.d(bG, {
-       b: () => wG
-     })
-   },
-   37167: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => LG,
-       c: () => SG
-     });
- ... (7 more removed lines; see GitHub link above)
+     var OM = iM(1073),
+       SM = iM(2263),
+       jM = iM(3647),
+       aM = iM(3657),
+       PM = iM(35103),
+       nM = iM(35100),
+       QM = iM(53774),
+       zM = iM(42090),
+       LM = iM(42065),
+       mM = iM(5463);
+     const HM = {
+       pack: null,
+       gameSource: null
+     };
+     class hM {
+       constructor(MM) {
+ ... (243 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L34-L114` → after: `L430-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L430-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/228.js#L430-L436) · [Before (L34-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/228.js#L34-L114)

```diff
-   },
-   40984: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => hG,
-       d: () => zG,
-       e: () => rG,
-       g: () => dG
-     });
-     var wG = ZG(19),
-       SG = ZG(40986),
-       LG = ZG(40971),
-       yG = ZG(40989),
-       kG = ZG(40976),
-       UG = ZG(40993),
-       YG = ZG(41012);
- 
- ... (65 more removed lines; see GitHub link above)
+ 
+     function EM(MM) {
+       const rM = (0, aM.o)();
+       return null === rM ? () => {} : (rM.onmessage = rM => {
+         MM.readPlayerPack((0, PM.e)(rM.data))
+       }, () => {
+         rM.close()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/229.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/229.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0)

#### 1. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4-L7` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/229.js#L4-L9) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/229.js#L4-L7)

```diff
-   37274: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => oG,
-       i: () => EG
+   35106: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       packDisplayName: () => hM,
+       packModelMessage: () => JM,
+       packModelSummary: () => yM,
+       refusedPackModels: () => dM
```

#### 2. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L9-L26` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/229.js#L11-L18) · [Before (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/229.js#L9-L26)

```diff
-     var wG = ZG(4272),
-       SG = ZG(1389),
-       LG = ZG(51),
-       yG = ZG(6488),
-       kG = ZG(4261),
-       UG = ZG(1251),
-       YG = ZG(1895),
-       VG = ZG(1876),
-       pG = ZG(1393),
-       fG = ZG(1151),
-       QG = ZG(37283),
-       KG = ZG(1006),
-       hG = ZG.n(KG),
-       dG = ZG(1275),
-       JG = ZG(1016),
-       rG = ZG(1239),
- ... (2 more removed lines; see GitHub link above)
+     var OM = iM(35113),
+       SM = iM(35120);
+     const jM = "DRACO",
+       aM = 0,
+       PM = 1,
+       nM = 0,
+       QM = 1,
+       zM = 32768;
```

#### 3. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L28-L46` → after: `L20-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L20-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/229.js#L20-L36) · [Before (L28-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/229.js#L28-L46)

```diff
-     function oG() {
-       const {
-         t: GG
-       } = (0, fG.w)(), [bG, ZG] = (0, LG.useState)(!1), [KG, oG] = (0, LG.useState)(null), [uG, iG] = (0, LG.useState)(1), [CG, WG] = (0, LG.useState)(!1), [mG, IG] = (0, LG.useState)(!1), FG = (0, LG.useRef)(0), vG = (0, LG.useRef)(!1), aG = (0, LG.useRef)(!1), cG = (0, LG.useRe … [truncated]
- 
-       function jG() {
-         const GG = null !== KG && void 0 !== KG ? KG : "Rested Speed";
-         YG.gameBridge.send("wakeUp", mG ? GG : null), lG.current = null, ZG(!1), oG(null), iG(1), WG(!1), IG(!1)
-       }
- 
-       function PG() {
-         return !CG && (jG(), !0)
-       }
-       return (0, SG.g)("PlayerPhysicsTypeUpdate", (GG => {
-         GG !== lG.current && (lG.current = GG, GG === yG.q.SLEEPING ? (aG.current || (FG.current = YG.gameBridge.lookup("cameraZoom", null), aG.current = !0), vG.current = !0, YG.gameBridge.send("setCameraZoom", 3), ZG(!0), iG(function() {
-           for (const GG of YG.gameBridge.lookup("blocksStandingOn", null)) {
- ... (3 more removed lines; see GitHub link above)
+     function LM(MM) {
+       const rM = new DataView(MM.buffer, MM.byteOffset, MM.byteLength);
+       let iM = 0;
+       const OM = () => {
+           if (iM >= MM.byteLength) throw new RangeError("past the stream");
+           return MM[iM++]
+         },
+         SM = () => {
+           if (iM + 4 > MM.byteLength) throw new RangeError("past the stream");
+           const OM = rM.getUint32(iM, !0);
+           return iM += 4, OM
+         },
+         LM = () => {
+           let MM = 0;
+           for (let rM = 0; rM < 35; rM += 7) {
+             const iM = OM();
+ ... (1 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L48-L196` → after: `L38-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L38-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/229.js#L38-L90) · [Before (L48-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/229.js#L48-L196)

```diff
-           return 1
-         }())) : (aG.current = !1, ZG(!1), oG(null), iG(1)))
-       })), (0, LG.useEffect)((() => () => {
-         (0, UG.w)(EG)
-       }), []), (0, LG.useEffect)((() => {
-         bG ? (0, UG.z)(EG) : ((0, UG.w)(EG), vG.current && (YG.gameBridge.send("setCameraZoom", FG.current), vG.current = !1))
-       }), [bG]), (0, rG.w)("overlay", cG, PG, bG), (0, zG.jsx)(wG.e, {
-         className: "SleepingOverlay",
-         "data-camera-keeper": "",
-         in: bG,
-         timeout: 300,
-         nodeRef: cG,
-         unmountOnExit: !0,
-         children: (0, zG.jsx)("div", {
-           ref: cG,
-           onClick: GG => {
- ... (133 more removed lines; see GitHub link above)
+           throw new RangeError("varint too long")
+         };
+       try {
+         for (let MM = 0; MM < jM.length; MM++)
+           if (OM() !== jM.charCodeAt(MM)) return null;
+         const rM = OM(),
+           mM = OM(),
+           HM = OM(),
+           hM = OM(),
+           JM = OM() | OM() << 8;
+         if (2 !== rM) return null;
+         0 !== (JM & zM) && function(MM, rM, iM) {
+           const OM = () => {
+               rM(iM())
+             },
+             SM = () => {
+ ... (37 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L199-L491` → after: `L93-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L93-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/229.js#L93-L111) · [Before (L199-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/229.js#L199-L491)

```diff
-     class mG {
-       constructor(GG, bG) {
-         this.press = GG, this.release = bG, this.downAtMs = null, this.token = null, this.latched = !1
-       }
-       update(GG, bG, ZG, wG) {
-         if (GG && null === this.downAtMs) return this.downAtMs = ZG, this.latched = wG, void(this.token = this.press(wG));
-         null !== this.downAtMs && (this.latched ? GG && this.end() : !bG && ZG - this.downAtMs >= 40 && this.end())
-       }
-       isLatched() {
-         return null !== this.downAtMs && this.latched
-       }
-       unlatch() {
-         this.latched = !1
-       }
-       cancel() {
-         null !== this.downAtMs && this.end()
- ... (277 more removed lines; see GitHub link above)
+ 
+     function mM(MM, rM, iM) {
+       var OM, SM;
+       if (null === (OM = null === (SM = MM.extensionsUsed) || void 0 === SM ? void 0 : SM.includes("KHR_draco_mesh_compression")) || void 0 === OM || !OM) return null;
+       for (const hM of null !== (jM = MM.meshes) && void 0 !== jM ? jM : []) {
+         var jM;
+         for (const OM of hM.primitives) {
+           var aM, PM, nM, QM, zM, mM;
+           const SM = null === (aM = OM.extensions) || void 0 === aM ? void 0 : aM.KHR_draco_mesh_compression;
+           if ("object" !== typeof SM || null === SM) continue;
+           const jM = null === (PM = MM.bufferViews) || void 0 === PM ? void 0 : PM[SM.bufferView];
+           if (null === rM || void 0 === jM) return HM;
+           const hM = null !== (nM = jM.byteOffset) && void 0 !== nM ? nM : 0,
+             JM = LM(rM.subarray(hM, hM + jM.byteLength));
+           if (null === JM && !iM) continue;
+           const dM = null !== (QM = MM.accessors) && void 0 !== QM ? QM : [],
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L494-L525` → after: `L114-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L114-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/229.js#L114-L146) · [Before (L494-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/229.js#L494-L525)

```diff
-   },
-   40942: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => KG,
-       f: () => dG,
-       i: () => QG
-     });
-     var wG = ZG(1251),
-       SG = ZG(4293),
-       LG = ZG(8837),
-       yG = ZG(37274),
-       kG = ZG(1682),
-       UG = ZG(1148),
-       YG = ZG(8254),
-       VG = ZG(8750),
-       pG = ZG(8854);
- ... (16 more removed lines; see GitHub link above)
+       return null
+     }
+     const HM = "has a Draco stream whose counts don't match its accessors";
+ 
+     function hM(MM) {
+       var rM;
+       return null !== (rM = MM.name) && void 0 !== rM ? rM : MM.fromFolderName || MM.id
+     }
+ 
+     function JM(MM, rM, iM) {
+       return `Texture pack "${MM}": model "${rM}" was not loaded because it ${iM}. The default model is used instead.`
+     }
+ 
+     function dM(MM, rM, iM) {
+       let {
+         strictDraco: jM = !1
+ ... (17 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L527-L554` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/229.js#L148) · [Before (L527-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/229.js#L527-L554)

```diff
-   },
-   40935: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => SG,
-       i: () => UG,
-       l: () => kG,
-       o: () => VG,
-       s: () => yG,
-       t: () => LG,
-       u: () => YG,
-       v: () => pG
-     });
-     var wG = ZG(8205);
-     class SG {
-       constructor() {
-         this.fullTiltSinceMs = null
- ... (12 more removed lines; see GitHub link above)
+       return aM
```

#### 8. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L556-L683` → after: `L150-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L150-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/229.js#L150-L156) · [Before (L556-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/229.js#L556-L683)

```diff
-     const LG = (GG, bG, ZG, SG, LG) => {
-         let yG = 1;
-         return "boost" === ZG.lookCurve ? yG = GG.update(bG, ZG, LG) : GG.reset(),
-           function(GG, bG) {
-             let {
-               yawBoost: ZG = 1,
-               aiming: SG = !1
-             } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-             const LG = (0, wG.g)((0, wG.i)(GG, bG.lookDeadzone), bG.lookCurve),
-               yG = 220 * Math.PI / 180,
-               kG = SG ? bG.aimLookSensitivity / 100 : 1,
-               UG = bG.lookSensitivityX / 100 * kG,
-               YG = bG.lookSensitivityY / 100 * kG;
-             return {
-               yawRadPerSec: LG.x * yG * UG * ZG * (bG.invertLookX ? -1 : 1),
-               pitchRadPerSec: LG.y * yG * .7 * YG * (bG.invertLookY ? -1 : 1)
- ... (112 more removed lines; see GitHub link above)
+ 
+     function yM(MM, rM) {
+       const iM = Object.keys(rM);
+       if (0 === iM.length) return null;
+       if (1 === iM.length) return JM(MM, iM[0], rM[iM[0]]);
+       const OM = iM.map((MM => `"${MM}" ${rM[MM]}`)).join("; ");
+       return `Texture pack "${MM}": ${iM.length} models were not loaded (${OM}). The default models are used instead.`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/230.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/230.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26)

#### 1. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L4)

```diff
-   38874: (GG, bG, ZG) => {
+   35113: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L6)

```diff
-       e: () => KG
+       c: () => WM,
+       g: () => pM,
+       j: () => RM
```

#### 3. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L8-L24` → after: `L10-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L10-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L10-L21) · [Before (L8-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L8-L24)

```diff
-     var wG = ZG(188),
-       SG = ZG(38053);
-     const LG = 1.2,
-       yG = {
-         poseRig: "golem",
-         physicsBodyDimensions: {
-           width: .5,
-           height: 2.5
-         },
-         hitBoxDimensions: {
-           width: 2.2,
-           height: 2.8
-         },
-         eyeHeight: 2.3,
-         rideHeight: 2.3,
-         Ck: .5,
- ... (1 more removed lines; see GitHub link above)
+     var OM = iM(35120);
+     const SM = {
+         fileBytes: 4194304,
+         vertices: 65535,
+         indices: 196608,
+         accessorElements: 196608,
+         primitives: 64,
+         nodes: 128,
+         meshes: 64,
+         materials: 8,
+         images: 8,
+         imageSide: 1024
```

#### 4. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L27-L38` → after: `L24-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L24-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L24-L29) · [Before (L27-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L27-L38)

```diff
-         physicsBodyDimensions: {
-           width: .5,
-           height: 2.5
-         },
-         hitBoxDimensions: {
-           width: 1.8,
-           height: 2.6
-         },
-         eyeHeight: 2.3,
-         rideHeight: 2.3,
-         Ck: .5,
-         RbG: !1
+         items: 1024,
+         perFile: 1024,
+         surfaces: 256,
+         few: 64,
+         bounds: 16,
+         attributeMembers: 32
```

#### 5. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L41-L52` → after: `L36-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L36-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L36-L39) · [Before (L41-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L41-L52)

```diff
-         physicsBodyDimensions: {
-           width: wG.d.Hd,
-           height: wG.d.td
-         },
-         hitBoxDimensions: {
-           width: wG.d.Hd + .4,
-           height: wG.d.td + .6
-         },
-         eyeHeight: wG.d.td * wG.d.playerEyeToHeightRatio,
-         rideHeight: wG.d.td - .3,
-         Ck: .5,
-         RbG: !1
+         POSITION: "VEC3",
+         NORMAL: "VEC3",
+         TEXCOORD_0: "VEC2",
+         COLOR_0: "VEC4"
```

#### 6. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L55-L66` → after: `L42-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L42-L43) · [Before (L55-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L55-L66)

```diff
-         physicsBodyDimensions: {
-           width: .5,
-           height: .95
-         },
-         hitBoxDimensions: {
-           width: 1.6,
-           height: 1.1
-         },
-         eyeHeight: .9,
-         rideHeight: .5,
-         Ck: .5,
-         RbG: !1
+         type: "VEC2",
+         componentTypes: [5126, 5121, 5123]
```

#### 7. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L69-L80` → after: `L46-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L46-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L46-L54) · [Before (L69-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L69-L80)

```diff
-         physicsBodyDimensions: {
-           width: .5,
-           height: 1.8
-         },
-         hitBoxDimensions: {
-           width: 1.7,
-           height: 1.9
-         },
-         eyeHeight: 1.3,
-         rideHeight: 1.3,
-         Ck: .5,
-         RbG: !1
+         TANGENT: {
+           type: "VEC4",
+           componentTypes: [5126]
+         },
+         TEXCOORD_1: LM,
+         TEXCOORD_2: LM,
+         TEXCOORD_3: LM,
+         TEXCOORD_4: LM,
+         TEXCOORD_5: LM
```

#### 8. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L83-L108` → after: `L61-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L61-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L61-L65) · [Before (L83-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L83-L108)

```diff
-         physicsBodyDimensions: {
-           width: .5,
-           height: 1.9
-         },
-         hitBoxDimensions: {
-           width: 1.5,
-           height: 2.1
-         },
-         eyeHeight: 1.9,
-         rideHeight: 1,
-         Ck: .5,
-         RbG: !1
-       },
-       fG = {
-         physicsBodyDimensions: {
-           width: .5,
- ... (10 more removed lines; see GitHub link above)
+         1: "line",
+         2: "line loop",
+         3: "line strip",
+         5: "triangle strip",
+         6: "triangle fan"
```

#### 9. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L110-L607` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L67) · [Before (L110-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L110-L607)

```diff
-       QG = {
-         Player: {
-           defaultName: "Player",
-           physicsBodyDimensions: {
-             width: wG.d.Hd,
-             height: wG.d.td
-           },
-           hitBoxDimensions: {
-             width: wG.d.Hd + .4,
-             height: wG.d.td + .6
-           },
-           eyeHeight: wG.d.td * wG.d.playerEyeToHeightRatio,
-           rideHeight: wG.d.td - .1,
-           Ck: SG.f.Ck,
-           RbG: !0
-         },
- ... (482 more removed lines; see GitHub link above)
+       JM = 5126;
```

#### 10. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L610` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L70) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L610)

```diff
-       return QG[GG]
+       return MM.toLocaleString("en-US")
```

#### 11. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L612-L774` → after: `L72-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L72-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L72-L74) · [Before (L612-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L612-L774)

```diff
-   },
-   37420: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => wG
-     });
-     const wG = {
-       "skyblock:forged:astral-astral-astral": {
-         name: "Heart of the Cosmos",
-         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
-         damageMultiplier: 1.8,
-         cooldownMultiplier: .8,
-         ability: "starfall"
-       },
-       "skyblock:forged:astral-moonstone-sanguine": {
-         name: "Eclipse Edge",
-         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
- ... (147 more removed lines; see GitHub link above)
+ 
+     function yM(MM, rM, iM) {
+       return MM > rM ? `has ${dM(MM)} ${iM} (the limit is ${dM(rM)})` : null
```

#### 12. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L788-L800` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L77-L78) · [Before (L788-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L788-L800)

```diff
-     function JG(...GG) {
-       return GG[dG[12]] = dG[0], typeof kG[GG[dG[2]]] === dG[16] ? kG[GG[dG[2]]] = function(...GG) {
-         for (IG(GG[dG[12]] = dG[0], GG[dG[0]] = 'A{BIHRCiOKpgDVZjUx37!#%f.}^41d?s)]h~wm0EWn|*J,tGa8To>y6$vk&Su+(:"=_eQc9YbF<Xq;zr`L/5[lNM@P2', GG[dG[1]] = "" + (GG[dG[2]] || ""), GG[dG[4]] = GG[dG[1]].length, GG[dG[9]] = [], GG[dG[7]] = dG[2], GG[dG[8]] = dG[2], GG[dG[6]] = -dG[0 … [truncated]
-           if (GG[dG[5]] = GG[dG[0]].indexOf(GG[dG[1]][GG[-dG[3]]]), GG[dG[5]] !== -dG[0])
-             if (GG[dG[6]] < dG[2]) GG[dG[6]] = GG[dG[5]];
-             else {
-               IG(GG[dG[6]] += GG[dG[5]] * dG[33], GG[dG[7]] |= GG[dG[6]] << GG[dG[8]], GG[dG[8]] += (GG[dG[6]] & dG[36]) > dG[37] ? dG[38] : dG[39]);
-               do {
-                 IG(GG[dG[9]].push(GG[dG[7]] & dG[11]), GG[dG[7]] >>= dG[10], GG[dG[8]] -= dG[10])
-               } while (GG[dG[8]] > dG[6]);
-               GG[dG[6]] = -dG[0]
-             } return GG[dG[6]] > -dG[0] && GG[dG[9]].push((GG[dG[7]] | GG[dG[6]] << GG[dG[8]]) & dG[11]), rG(GG[dG[9]])
-       }(UG[GG[dG[2]]]) : kG[GG[dG[2]]]
+     function lM(MM, rM) {
+       return Number.isInteger(MM) && MM >= 0 && MM < (null !== rM && void 0 !== rM ? rM : 0)
```

#### 13. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L803-L804` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L81-L82) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L803-L804)

```diff
-     function rG(...GG) {
-       return GG[dG[12]] = dG[0], typeof VG !== dG[16] && VG ? (new VG).decode(new pG(GG[dG[2]])) : typeof fG !== dG[16] && fG ? fG.from(GG[dG[2]]).toString("utf-8") : hG(GG[dG[2]])
+     function EM(MM) {
+       return Number.isInteger(MM) && MM >= 0
```

#### 14. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L807-L860` → after: `L85-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L85-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L85-L101) · [Before (L807-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L807-L860)

```diff
-     function zG() {}
-     IG(kG = {}, UG = ["u6:H_t5d.=Mt{u_.O35;n`A", "]W@K$/I}/k44%R;Ebg?H9rV}*xX`6&uwPyQYL0(D&xF9_cG^", "dKe)Za:~(OE>BLI33{", "B3*b/,in.xtFW4Bwu!kC:<skIu/)DY}f4W6Hd>A", "Au|d6;^N8Ksqab,4b(Fo?z#i>62<^TY}EY/OCaViqZ_t{", "H<>y%qen^Z%qCRq0E6{)UYE7=kY`.Ha42Iud}0z.m6XdS9nE0(($0W&B", 'Y(X< … [truncated]
-       IG(GG[dG[12]] = dG[2], GG[-dG[15]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], GG[dG[1]] = dG[17], GG[-dG[13]] = []);
-       try {
-         IG(GG[dG[1]] = Object, GG[-dG[13]][dG[27]]("".__proto__.constructor.name))
-       } catch (UG) {}
-       GG: for (GG[dG[14]] = dG[2]; GG[dG[14]] < GG[-dG[15]][dG[12]]; GG[dG[14]]++) try {
-         for (GG[dG[1]] = GG[-dG[15]][GG[dG[14]]](), GG[-dG[3]] = dG[2]; GG[-dG[3]] < GG[-dG[13]][dG[12]]; GG[-dG[3]]++)
- ... (38 more removed lines; see GitHub link above)
+     function UM(MM, rM) {
+       return void 0 !== MM && (!Array.isArray(MM) || MM.length > rM)
+     }
+ 
+     function GM(MM, rM) {
+       return "object" === typeof MM && null !== MM && Object.keys(MM).length > rM
+     }
+ 
+     function CM(MM) {
+       var rM;
+       return `${MM.normalized?"normalized ":""}${null!==(rM=OM.e[MM.componentType])&&void 0!==rM?rM:MM.componentType} ${MM.type}`
+     }
+ 
+     function eM(MM) {
+       const rM = rM => {
+         var iM;
+ ... (1 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L863-L864` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L106-L107) · [Before (L863-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L863-L864)

```diff
-     function IG() {
-       IG = function() {}
+     function bM(MM) {
+       return MM.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((rM, iM) => MM[iM] === rM)) && 73 === MM[12] && 72 === MM[13] && 68 === MM[14] && 82 === MM[15]
```

#### 16. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L866-L905` → after: `L109-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L109-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L109-L212) · [Before (L866-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L866-L905)

```diff
-     yG = (...GG) => {
-       function bG(GG) {
-         return typeof kG[GG] === dG[16] ? kG[GG] = function(...GG) {
-           for (IG(GG[dG[12]] = dG[0], GG[-dG[55]] = 'C~teOFlIJu9vwrs"#MZ>E:iVa41!p{D3gd+6?;Q&f@B/G$n_.7zP}c]02j=`hAx^bT*KqoR|Yk)yHU8[%WNSXLm,<5(', GG[dG[1]] = "" + (GG[dG[2]] || ""), GG[dG[18]] = GG[dG[1]].length, GG[dG[14]] = [], GG[-dG[54]] = dG[2], GG[dG[24]] = dG[2], GG[dG[57 … [truncated]
-             if (GG[dG[56]] = GG[-dG[55]].indexOf(GG[dG[1]][GG[dG[30]]]), GG[dG[56]] !== -dG[0])
-               if (GG[dG[57]] < dG[2]) GG[dG[57]] = GG[dG[56]];
-               else {
-                 IG(GG[dG[57]] += GG[dG[56]] * dG[33], GG[-dG[54]] |= GG[dG[57]] << GG[dG[24]], GG[dG[24]] += (GG[dG[57]] & dG[36]) > dG[37] ? dG[38] : dG[39]);
-                 do {
-                   IG(GG[dG[14]].push(GG[-dG[54]] & dG[11]), GG[-dG[54]] >>= dG[10], GG[dG[24]] -= dG[10])
-                 } while (GG[dG[24]] > dG[6]);
-                 GG[dG[57]] = -dG[0]
-               } return GG[dG[57]] > -dG[0] && GG[dG[14]].push((GG[-dG[54]] | GG[dG[57]] << GG[dG[24]]) & dG[11]), rG(GG[dG[14]])
-         }(UG[GG]) : kG[GG]
-       }
-       GG[dG[12]] = dG[10], JG(dG[89]) in zG && function() {
- ... (24 more removed lines; see GitHub link above)
+ 
+     function wM(MM) {
+       return /^[aeiou]/i.test(MM) ? `an ${MM}` : `a ${MM}`
+     }
+ 
+     function tM(MM) {
+       const rM = MM.byteStride;
+       return void 0 === rM || Number.isInteger(rM) && rM >= 4 && rM <= 252 && rM % 4 === 0
+     }
+ 
+     function gM(MM, rM, iM) {
+       var OM, SM;
+       const jM = null === (OM = MM.bufferViews) || void 0 === OM ? void 0 : OM[iM];
+       if (!jM || !rM || 0 !== jM.buffer) return null;
+       const aM = null !== (SM = jM.byteOffset) && void 0 !== SM ? SM : 0;
+       return !EM(aM) || !EM(jM.byteLength) || aM + jM.byteLength > rM.byteLength ? null : rM.subarray(aM, aM + jM.byteLength)
+ ... (88 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L907-L908` → after: `L214-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L214-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L214-L219) · [Before (L907-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L907-L908)

```diff
-           static encrypt(...bG) {
-             return bG[dG[12]] = dG[4], GG(bG[dG[2]]).modPow(bG[dG[44]], bG[dG[0]])
+           if (null !== (LM = MM.animations) && void 0 !== LM && LM.length) return "has animations";
+           if (null !== (dM = MM.skins) && void 0 !== dM && dM.length) return "uses skins";
+           const XM = null !== (EM = MM.buffers) && void 0 !== EM ? EM : [];
+           for (const [OM, SM] of XM.entries()) {
+             if (void 0 !== SM.uri) return nM;
+             if (OM > 0 || !rM) return PM
```

#### 18. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L910-L911` → after: `L221-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L221-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L221-L223) · [Before (L910-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L910-L911)

```diff
-           static decrypt(...bG) {
-             return bG[dG[12]] = dG[4], GG(bG[dG[2]]).modPow(bG[dG[0]], bG[dG[44]])
+           for (const [OM, SM] of(null !== (IM = MM.bufferViews) && void 0 !== IM ? IM : []).entries()) {
+             var IM;
+             if (!gM(MM, rM, OM) || !tM(SM)) return PM
```

#### 19. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L913-L916` → after: `L225-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L225-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L225-L230) · [Before (L913-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L913-L916)

```diff
-           static encode(...bG) {
-             bG[dG[12]] = dG[0];
-             const ZG = bG[dG[2]].split("").map((GG => GG.charCodeAt())).join("");
-             return GG(ZG)
+           const KM = null !== (RM = MM.accessors) && void 0 !== RM ? RM : [];
+           for (const OM of KM) {
+             if (void 0 !== OM.sparse) return "uses sparse accessors";
+             const rM = Number.isInteger(OM.count) ? yM(OM.count, SM.accessorElements, "elements in an accessor") : null;
+             if (rM) return rM;
+             if (!uM(MM, OM)) return PM
```

#### 20. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L918-L924` → after: `L232-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L232-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L232-L248) · [Before (L918-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L918-L924)

```diff
-           static decode(...GG) {
-             GG[dG[12]] = dG[0];
-             const bG = GG[dG[2]].toString();
-             GG[dG[59]] = "";
-             for (let ZG = dG[2]; ZG < bG.length; ZG += dG[44]) {
-               let wG = Number(bG.substr(ZG, dG[44]));
-               wG <= 30 ? (GG[dG[59]] += String.fromCharCode(Number(bG.substr(ZG, dG[4]))), ZG++) : GG[dG[59]] += String.fromCharCode(wG)
+           const qM = null !== (pM = MM.scenes) && void 0 !== pM ? pM : [];
+           if (1 !== qM.length) return `has ${qM.length} scenes`;
+           const TM = (0, OM.B)(MM);
+           if (void 0 !== TM && 0 !== TM) return PM;
+           const VM = null !== (WM = MM.nodes) && void 0 !== WM ? WM : [],
+             cM = null !== (sM = MM.meshes) && void 0 !== sM ? sM : [],
+             Mr = null !== (DM = MM.materials) && void 0 !== DM ? DM : [],
+             rr = null !== (kM = MM.textures) && void 0 !== kM ? kM : [],
+             ir = null !== (ZM = MM.images) && void 0 !== ZM ? ZM : [],
+             Or = null !== (oM = null !== (fM = null !== (YM = yM(VM.length, SM.nodes, "nodes")) && void 0 !== YM ? YM : yM(cM.length, SM.meshes, "meshes")) && void 0 !== fM ? fM : yM(Mr.length, SM.materials, "materials")) && void 0 !== oM ? oM : yM(ir.length, SM.images, "images") … [truncated]
+           if (Or) return Or;
+           const Sr = new Set;
+           for (const OM of VM)
+             for (const MM of null !== (jr = OM.children) && void 0 !== jr ? jr : []) {
+               var jr;
+               if (!lM(MM, VM.length) || Sr.has(MM)) return PM;
+ ... (1 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L926` → after: `L250-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L250-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L250-L257) · [Before (L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L926)

```diff
-             return GG[dG[59]]
+           const ar = new Set,
+             Pr = MM => {
+               var rM;
+               return !ar.has(MM) && (ar.add(MM), (null !== (rM = VM[MM].children) && void 0 !== rM ? rM : []).every(Pr))
+             };
+           for (const OM of null !== (nr = qM[0].nodes) && void 0 !== nr ? nr : []) {
+             var nr;
+             if (!lM(OM, VM.length) || Sr.has(OM) || !Pr(OM)) return PM
```

#### 22. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L928-L950` → after: `L259-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L259-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L259-L270) · [Before (L928-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L928-L950)

```diff
-         }
-         module.exports = bG
-       }();
-       const ZG = GG[dG[2]][bG(dG[60])][bG(108) + bG(dG[87]) + bG(110)](GG[dG[0]]);
-       GG[-dG[61]] = GG[dG[2]][bG(dG[60])][bG(dG[51]) + bG(dG[52]) + bG(113) + "s"](ZG);
-       const wG = GG[-dG[61]] === dG[62] ? GG[dG[2]][bG(dG[60])][bG(dG[66]) + bG(dG[67]) + bG(dG[68]) + bG(dG[56])](GG[dG[0]], bG(dG[63]) + bG(dG[22]) + bG(dG[64]) + dG[65]) : GG[-dG[61]][bG(dG[63]) + bG(dG[22]) + bG(dG[64]) + dG[65]],
-         yG = GG[-dG[61]] === dG[62] ? GG[dG[2]][bG(dG[60])][bG(dG[66]) + bG(dG[67]) + bG(dG[68]) + bG(dG[56])](GG[dG[0]], bG(dG[69]) + bG(dG[70]) + bG(dG[71])) : GG[-dG[61]][bG(dG[69]) + bG(dG[70]) + bG(dG[71])];
-       IG(SG()[bG(dG[15])](EG, dG[2], dG[2], GG[dG[7]]), SG().ck(EG, EG, SG()[bG(125)], GG[dG[4]].heading), SG()[bG(126)](WG, GG[dG[9]].Sd), WG[dG[0]] = dG[2]);
-       const YG = GG[dG[44]][bG(dG[72]) + bG(dG[73])]();
-       if (IG(GG[-dG[61]] = GG[dG[2]][bG(dG[60])][bG(129) + bG(130) + bG(131) + bG(132)](ZG), GG[dG[47]] = GG[-dG[61]] === dG[62] ? GG[dG[2]][bG(dG[60])][bG(dG[66]) + bG(dG[67]) + bG(dG[68]) + bG(dG[56])](GG[dG[0]], bG(dG[3]) + bG(dG[74])) : GG[-dG[61]][bG(dG[3]) + bG(dG[74])]), ! … [truncated]
-         function KG(GG) {
-           var bG, ZG, wG, SG, LG, yG, kG;
-           for (IG(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = dG[2], LG = dG[2], yG = -dG[0]), kG = dG[2]; kG < ZG; kG++) {
-             var UG = 'wfVmiktroaSZWhvL=,C)P/p&AjKgY(D<74JTH_M`N#qsEe*B:0?UdG$}!I~{RlQ21|";Xz^9yFOb]cn3@>+ux[8.56%'.indexOf(bG[kG]);
-             if (UG !== -dG[0])
-               if (yG < dG[2]) yG = UG;
- ... (7 more removed lines; see GitHub link above)
+           for (const OM of VM) {
+             if (void 0 !== OM.matrix) return "uses node matrices";
+             if (void 0 !== OM.skin) return "uses skins";
+             if (void 0 !== OM.weights) return "uses morph targets";
+             if (void 0 !== OM.mesh && !lM(OM.mesh, cM.length)) return PM;
+             const MM = [
+               [OM.translation, 3],
+               [OM.rotation, 4],
+               [OM.scale, 3]
+             ];
+             for (const [rM, iM] of MM)
+               if (void 0 !== rM && (!Array.isArray(rM) || rM.length !== iM || !rM.every((MM => Number.isFinite(MM))))) return PM
```

#### 23. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L952-L966` → after: `L272-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L272-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L272-L313) · [Before (L952-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L952-L966)

```diff
-           return yG > -dG[0] && wG.push((SG | yG << LG) & dG[11]), rG(wG)
-         }
- 
-         function hG(...GG) {
-           return GG[dG[12]] = dG[0], typeof kG[GG[dG[2]]] === dG[16] ? kG[GG[dG[2]]] = KG(UG[GG[dG[2]]]) : kG[GG[dG[2]]]
-         }
-         IG(mG(oG, EG, WG), mG(XG, WG, EG), SG()[bG(dG[85])](uG, WG, XG));
-         const CG = SG()[hG(140)](WG),
-           FG = SG()[hG(141)](EG, WG) / GG[dG[7]] / CG,
-           vG = Math[hG(dG[84])](FG, dG[2]) + dG[0];
-         if (GG[dG[7]] * GG[dG[7]] < SG()[dG[77]](XG)) {
-           function aG(...GG) {
-             for (IG(GG[dG[12]] = dG[0], GG[dG[79]] = 'zYBbfXRVEAC<ue~PU`JTZ>x|$MNd15mS7,%&j;F:n!Is?]@W^k0}=oL2[iy{3G.rKvt_O*4#Q"qaw96pD(l)/h+Hgc8', GG[dG[44]] = "" + (GG[dG[2]] || ""), GG[dG[46]] = GG[dG[44]].length, GG[-dG[50]] = [], GG[dG[65]] = dG[2], GG[dG[78]] = dG[2], GG[dG … [truncated]
-               if (GG[dG[31]] = GG[dG[79]].indexOf(GG[dG[44]][GG[-dG[9]]]), GG[dG[31]] !== -dG[0])
-                 if (GG[dG[32]] < dG[2]) GG[dG[32]] = GG[dG[31]];
+           let Qr = -1,
+             zr = 0,
+             Lr = 0,
+             mr = null;
+           for (const SM of cM) {
+             if (void 0 !== SM.weights) return "uses morph targets";
+             if (0 === SM.primitives.length) return PM;
+             for (const iM of SM.primitives) {
+               var Hr, hr;
+               const SM = null !== (Hr = iM.mode) && void 0 !== Hr ? Hr : 4;
+               var Jr;
+               if (4 !== SM && 0 !== SM) return `uses ${null!==(Jr=hM[SM])&&void 0!==Jr?Jr:`mode ${SM}`} primitives`;
+               if (void 0 !== iM.targets) return "uses morph targets";
+               if (void 0 !== iM.material && !lM(iM.material, Mr.length)) return PM;
+               const jM = xM ? null === (hr = iM.extensions) || void 0 === hr ? void 0 : hr.KHR_draco_mesh_compression : void 0;
+               if (jM) {
+ ... (26 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L968-L986` → after: `L315-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L315-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L315-L321) · [Before (L968-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L968-L986)

```diff
-                   IG(GG[dG[32]] += GG[dG[31]] * dG[33], GG[dG[65]] |= GG[dG[32]] << GG[dG[78]], GG[dG[78]] += (GG[dG[32]] & dG[36]) > dG[37] ? dG[38] : dG[39]);
-                   do {
-                     IG(GG[-dG[50]].push(GG[dG[65]] & dG[11]), GG[dG[65]] >>= dG[10], GG[dG[78]] -= dG[10])
-                   } while (GG[dG[78]] > dG[6]);
-                   GG[dG[32]] = -dG[0]
-                 } return GG[dG[32]] > -dG[0] && GG[-dG[50]].push((GG[dG[65]] | GG[dG[32]] << GG[dG[78]]) & dG[11]), rG(GG[-dG[50]])
-           }
- 
-           function cG(...GG) {
-             return GG[dG[12]] = dG[0], typeof kG[GG[dG[2]]] === dG[16] ? kG[GG[dG[2]]] = aG(UG[GG[dG[2]]]) : kG[GG[dG[2]]]
-           }
- 
-           function lG(...GG) {
-             IG(GG[dG[12]] = dG[2], GG[dG[28]] = function(...bG) {
-               return IG(bG[dG[12]] = dG[0], bG[-dG[80]] = []), (bG[dG[2]] === dG[0] || bG[dG[2]] >= dG[9]) && GG[-dG[81]](bG[-dG[80]], [], bG[dG[2]], dG[2]), bG[-dG[80]]
-             }, GG[-dG[81]] = function(...bG) {
- ... (3 more removed lines; see GitHub link above)
+                   mr ??= new Map([
+                     [Qr, [zr, Lr]]
+                   ]);
+                   const rM = mr.get(jM.bufferView);
+                   if (rM && (rM[0] !== nM || rM[1] !== MM)) return PM;
+                   mr.set(jM.bufferView, null !== rM && void 0 !== rM ? rM : [nM, MM])
+                 }
```

#### 25. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L988-L995` → after: `L323-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L323-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L323-L332) · [Before (L988-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L988-L995)

```diff
-             }, GG[dG[14]] = function(...GG) {
-               for (IG(GG[dG[12]] = dG[0], GG[dG[0]] = [], GG[dG[44]] = GG[dG[2]].length), GG[dG[4]] = dG[2]; GG[dG[4]] < GG[dG[44]]; GG[dG[4]]++)
-                 for (GG[dG[0]][GG[dG[4]]] = "", GG[dG[9]] = dG[2]; GG[dG[9]] < GG[dG[44]]; GG[dG[9]]++) GG[dG[0]][GG[dG[4]]] += GG[dG[2]][GG[dG[4]]][dG[0]] === GG[dG[9]] ? "Q" : ".";
-               return GG[dG[0]]
-             }, GG[dG[18]] = function(...GG) {
-               for (IG(GG[dG[12]] = dG[44], GG[dG[44]] = GG[dG[2]].length), GG[dG[4]] = dG[2]; GG[dG[4]] < GG[dG[44]]; GG[dG[4]]++) {
-                 if (GG[dG[2]][GG[dG[4]]][dG[2]] === GG[dG[0]][dG[2]] || GG[dG[2]][GG[dG[4]]][dG[0]] === GG[dG[0]][dG[0]]) return dG[82];
-                 if (Math.abs((GG[dG[2]][GG[dG[4]]][dG[2]] - GG[dG[0]][dG[2]]) / (GG[dG[2]][GG[dG[4]]][dG[0]] - GG[dG[0]][dG[0]])) === dG[0]) return dG[82]
+               let QM = nM;
+               if (void 0 !== iM.indices) {
+                 if (!lM(iM.indices, KM.length)) return PM;
+                 const MM = KM[iM.indices];
+                 if ("SCALAR" !== MM.type) return PM;
+                 if (5121 === MM.componentType) return "uses 8-bit indices";
+                 var dr;
+                 if (5123 !== MM.componentType && 5125 !== MM.componentType) return `stores indices as ${null!==(dr=OM.e[MM.componentType])&&void 0!==dr?dr:MM.componentType}`;
+                 if (!jM && void 0 === MM.bufferView) return PM;
+                 QM = MM.count
```

#### 26. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L997-L998` → after: `L334-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L334-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L334-L335) · [Before (L997-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L997-L998)

```diff
-               return dG[83]
-             }, console.log(GG[dG[28]]))
+               if (4 === SM && QM % 3 !== 0) return PM
+             }
```

#### 27. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1000-L1049` → after: `L337-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L337-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L337-L343) · [Before (L1000-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L1000-L1049)

```diff
-           cG(143) + dG[1] in zG && lG(), SG()[cG(144)](EG, EG, XG, vG)
-         }
-         IG(GG[dG[47]] = (0, LG.x)(GG[dG[47]], 1, Math[hG(dG[84])](dG[0], Math[hG(145)](dG[2], -FG, dG[0] - CG / GG[dG[7]]))), SG()[hG(dG[94])](EG, EG, uG))
-       }
-       const VG = iG;
-       if (IG(SG()[bG(dG[85])](VG, EG, WG), VG[dG[0]] = dG[2], GG[dG[18]] = SG()[bG(147)](VG)), !YG) {
-         function jG(...GG) {
-           GG[dG[12]] = dG[2]
-         }
-         bG(148) + "U" in zG && jG(), GG[dG[18]] *= GG[dG[47]]
-       }
-       const pG = GG[dG[24]][bG(149) + bG(150) + bG(151)],
-         fG = pG ? Math[bG(152)](pG, GG[dG[18]]) : GG[dG[18]];
-       SG()[bG(153) + bG(dG[5])](VG, VG);
-       const QG = GG[dG[6]] !== dG[62] && void 0 !== GG[dG[6]] ? GG[dG[6]] : GG[dG[24]][bG(155) + bG(156) + bG(dG[93]) + bG(158)];
-       if (fG > dG[2]) {
- ... (34 more removed lines; see GitHub link above)
+           let yr = 0,
+             lr = 0,
+             Er = 0;
+           for (let OM = 0; OM < VM.length; OM++) {
+             const MM = VM[OM].mesh;
+             if (void 0 !== MM && ar.has(OM))
+               for (const rM of cM[MM].primitives) Er++, yr += KM[rM.attributes.POSITION].count, void 0 !== rM.indices && (lr += KM[rM.indices].count)
```

#### 28. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1051-L1053` → after: `L345-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L345-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L345-L359) · [Before (L1051-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L1051-L1053)

```diff
- 
-           function gG(...GG) {
-             return GG[dG[12]] = dG[0], typeof kG[GG[dG[2]]] === dG[16] ? kG[GG[dG[2]]] = nG(UG[GG[dG[2]]]) : kG[GG[dG[2]]]
+           const Ur = null !== (NM = null !== (AM = yM(yr, SM.vertices, "vertices")) && void 0 !== AM ? AM : yM(lr, SM.indices, "indices")) && void 0 !== NM ? NM : yM(Er, SM.primitives, "primitives");
+           if (Ur) return Ur;
+           for (const OM of Mr) {
+             var Gr, Cr;
+             if (void 0 !== OM.emissiveTexture) return "uses an emissive texture";
+             const rM = null !== (Gr = OM.alphaMode) && void 0 !== Gr ? Gr : "OPAQUE";
+             if ("OPAQUE" !== rM && "MASK" !== rM && "BLEND" !== rM) return PM;
+             const iM = null === (Cr = OM.pbrMetallicRoughness) || void 0 === Cr ? void 0 : Cr.baseColorTexture;
+             if (iM) {
+               var er, br, wr, tr, gr;
+               const rM = null !== (er = MM.extensionsUsed) && void 0 !== er && er.includes("KHR_texture_transform") ? null === (br = iM.extensions) || void 0 === br ? void 0 : br.KHR_texture_transform : void 0;
+               if (0 !== (null !== (wr = iM.texCoord) && void 0 !== wr ? wr : 0) || 0 !== (null !== (tr = null === rM || void 0 === rM ? void 0 : rM.texCoord) && void 0 !== tr ? tr : 0)) return "uses a second UV set";
+               const OM = rr[iM.index];
+               if (!OM || !lM(OM.source, ir.length) || void 0 !== OM.sampler && !lM(OM.sampler, null === (gr = MM.samplers) || void 0 === gr ? void 0 : gr.length)) return PM
+             }
```

#### 29. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1055-L1069` → after: `L361-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L361-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L361-L374) · [Before (L1055-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L1055-L1069)

```diff
-           sG *= GG[dG[44]][gG(162) + gG(dG[19])]
-         }
-         let qG = GG[dG[44]][MG(164) + MG(165) + "ss"] * fG;
-         if (fG < .3 && (qG *= fG), sG > qG) {
-           function eG(...GG) {
-             for (IG(GG[dG[12]] = dG[0], GG[dG[0]] = 'qvuA%I}yVi8^~S/JBl&@CgK.n>j[!X#orQfbW9w$d7;+Y<4?a"=P*,DRz0`EG|H_2NtZ5pOLFkxT1M:h]3mes{U)(6c', GG[dG[44]] = "" + (GG[dG[2]] || ""), GG[dG[4]] = GG[dG[44]].length, GG[-dG[95]] = [], GG[-dG[93]] = dG[2], GG[-dG[94]] = dG[2], GG[dG … [truncated]
-               if (GG[dG[47]] = GG[dG[0]].indexOf(GG[dG[44]][GG[dG[10]]]), GG[dG[47]] !== -dG[0])
-                 if (GG[dG[6]] < dG[2]) GG[dG[6]] = GG[dG[47]];
-                 else {
-                   IG(GG[dG[6]] += GG[dG[47]] * dG[33], GG[-dG[93]] |= GG[dG[6]] << GG[-dG[94]], GG[-dG[94]] += (GG[dG[6]] & dG[36]) > dG[37] ? dG[38] : dG[39]);
-                   do {
-                     IG(GG[-dG[95]].push(GG[-dG[93]] & dG[11]), GG[-dG[93]] >>= dG[10], GG[-dG[94]] -= dG[10])
-                   } while (GG[-dG[94]] > dG[6]);
-                   GG[dG[6]] = -dG[0]
-                 } return GG[dG[6]] > -dG[0] && GG[-dG[95]].push((GG[-dG[93]] | GG[dG[6]] << GG[-dG[94]]) & dG[11]), rG(GG[-dG[95]])
+           for (const OM of ir) {
+             if (void 0 !== OM.uri) return nM;
+             if (void 0 === OM.bufferView) return PM;
+             const iM = gM(MM, rM, OM.bufferView);
+             if (!iM) return PM;
+             if ("image/png" !== OM.mimeType) {
+               var ur, Rr, pr;
+               return `has ${wM(null!==(ur=null!==(Rr={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(pr=OM.mimeType)&&void 0!==pr?pr:""])&&void 0!==Rr?Rr:OM.mimeType)&&void 0!==ur?ur:"untyped")} image`
+             }
+             if (!bM(iM)) return `has ${wM(eM(iM))} image`;
+             const jM = new DataView(iM.buffer, iM.byteOffset, iM.byteLength),
+               aM = jM.getUint32(16),
+               QM = jM.getUint32(20);
+             if (aM > SM.imageSide || QM > SM.imageSide) return `has a ${aM} \xd7 ${QM} image (the limit is ${SM.imageSide})`
```

#### 30. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1072-L1074` → after: `L383-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L383-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L383-L421) · [Before (L1072-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L1072-L1074)

```diff
-           function RG(...GG) {
-             return GG[dG[12]] = dG[0], typeof kG[GG[dG[2]]] === dG[16] ? kG[GG[dG[2]]] = eG(UG[GG[dG[2]]]) : kG[GG[dG[2]]]
-           }
+     function WM(MM) {
+       const rM = RM(MM.byteLength);
+       if (rM) return rM;
+       try {
+         const {
+           json: rM,
+           bin: iM
+         } = (0, OM.E)(MM);
+         return pM(rM, iM)
+       } catch (iM) {
+         if (iM instanceof OM.p) return iM.reason;
+         throw iM
+       }
+     }
+   },
+   35120: (MM, rM, iM) => {
+ ... (23 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1076-L1079` → after: `L423-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L423-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L423-L427) · [Before (L1076-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L1076-L1079)

```diff
-           function TG(...GG) {
-             function bG(...GG) {
-               return GG[dG[12]] = dG[0], GG[dG[2]][dG[0]] * dG[97] + (GG[dG[2]][dG[2]] < dG[2] ? dG[96] | GG[dG[2]][dG[2]] : GG[dG[2]][dG[2]])
-             }
+     function aM(MM) {
+       return Reflect.get(MM, "scene")
+     }
+     const PM = 5130562,
+       nM = "is not a binary glTF 2.0 file";
```

#### 32. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1081-L1097` → after: `L429-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L429-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L429-L458) · [Before (L1081-L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L1081-L1097)

```diff
-             function ZG(...GG) {
-               switch (GG[dG[12]] = dG[0], ((GG[dG[2]] & dG[96]) !== dG[2]) * dG[0] + (GG[dG[2]] < dG[2]) * dG[44]) {
-                 case dG[2]:
-                   return [GG[dG[2]] % dG[96], Math.trunc(GG[dG[2]] / dG[97])];
-                 case dG[0]:
-                   return [GG[dG[2]] % dG[96] - dG[96], Math.trunc(GG[dG[2]] / dG[97]) + dG[0]];
-                 case dG[44]:
-                   return [((GG[dG[2]] + dG[96]) % dG[96] + dG[96]) % dG[96], Math.round(GG[dG[2]] / dG[97])];
-                 case dG[4]:
-                   return [GG[dG[2]] % dG[96], Math.trunc(GG[dG[2]] / dG[97])]
-               }
-             }
-             GG[dG[12]] = dG[2], IG(GG[dG[1]] = bG([dG[44], dG[9]]), GG[-dG[98]] = bG([dG[0], dG[44]]), GG[dG[66]] = GG[dG[1]] + GG[-dG[98]], GG[dG[65]] = GG[dG[66]] - GG[-dG[98]], GG[dG[9]] = GG[dG[65]] * dG[44], GG[dG[7]] = GG[dG[9]] / dG[44], console.log(ZG(GG[dG[66]])), consol … [truncated]
-           }
-           RG(166) in zG && TG(), sG = qG
-         }
- ... (1 more removed lines; see GitHub link above)
+     function QM(MM) {
+       var rM;
+       const iM = MM instanceof Uint8Array ? MM : new Uint8Array(MM),
+         jM = (0, OM.g)(iM);
+       if (null === jM) throw new SM(nM);
+       const aM = jM.json,
+         {
+           jsonEnd: QM,
+           length: zM
+         } = jM,
+         LM = new DataView(iM.buffer, iM.byteOffset, iM.byteLength);
+       let mM = -1,
+         HM = 0;
+       for (let dM = QM; dM < zM;) {
+         if (dM + 8 > zM) throw new SM(nM);
+         const MM = LM.getUint32(dM, !0),
+ ... (14 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1102` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L515) · [Before (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L1102)

```diff
-   38053: (GG, bG, ZG) => {
+   35126: (MM, rM, iM) => {
```

#### 34. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1104-L1105` → after: `L517-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L517-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L517-L519) · [Before (L1104-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L1104-L1105)

```diff
-       b: () => UG,
-       f: () => kG
+       d: () => SM,
+       g: () => jM,
+       j: () => aM
```

#### 35. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1107-L1149` → after: `L521-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L521-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L521-L522) · [Before (L1107-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L1107-L1149)

```diff
-     var wG = ZG(38056),
-       SG = ZG(1873);
-     const LG = 2,
-       yG = 1,
-       kG = {
-         Ck: 1,
-         fluidDrag: -1,
-         fluidDragHorizontal: -1,
-         fluidDragVertical: -1,
-         gravityMultiplier: 2,
-         width: .5,
-         height: 1.8,
-         canRun: !0,
-         jumpMultiplier: 1,
-         upwardImpulseOnUse: 0,
-         canAutoStep: !0,
- ... (27 more removed lines; see GitHub link above)
+     const OM = 1179937895,
+       SM = 1313821514;
```

#### 36. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1151-L1161` → after: `L524-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L524-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/230.js#L524-L554) · [Before (L1151-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/230.js#L1151-L1161)

```diff
-     function UG(GG, bG, ZG, kG, UG, YG, VG) {
-       if (UG.speed) return (0, wG.b)(bG, ZG, kG, UG, YG, VG, GG), void(UG.ticksToReachMaxIdleFriction = LG);
-       const pG = kG.isOnGround(),
-         fG = bG.bloxd.getSyncedClientOptions(bG.bloxd.getPlayerReader(ZG)),
-         QG = null === fG ? bG.bloxd.getClientPredictedOption(ZG, "groundFrictionScale") : fG.groundFrictionScale,
-         KG = null === fG ? bG.bloxd.getClientPredictedOption(ZG, "airFrictionScale") : fG.airFrictionScale,
-         hG = pG ? QG : KG,
-         dG = Math.max(yG, hG),
-         JG = UG.ticksToReachMaxIdleFriction / LG,
-         rG = (0, SG.x)(dG, hG, JG);
-       YG.friction = GG.standingFriction * ((null === fG ? bG.bloxd.getClientPredictedOption(ZG, "airMomentumConservation") : fG.airMomentumConservation) ? rG : hG), UG.ticksToReachMaxIdleFriction > 0 && UG.ticksToReachMaxIdleFriction--
+     function jM(MM) {
+       const rM = new DataView(MM.buffer, MM.byteOffset, MM.byteLength);
+       if (MM.byteLength < 20 || rM.getUint32(0, !0) !== OM || 2 !== rM.getUint32(4, !0)) return null;
+       const iM = Math.min(rM.getUint32(8, !0), MM.byteLength),
+         jM = rM.getUint32(12, !0);
+       if (rM.getUint32(16, !0) !== SM || 20 + jM > iM) return null;
+       let aM;
+       try {
+         aM = JSON.parse((new TextDecoder).decode(MM.subarray(20, 20 + jM)))
+       } catch {
+         return null
+       }
+       return "object" === typeof aM && null !== aM ? {
+         json: aM,
+         jsonEnd: 20 + jM,
+         length: iM
+ ... (15 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/231.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/231.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26)

#### 1. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/231.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/231.js#L4)

```diff
-   40175: (GG, bG, ZG) => {
+   35131: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L6-L10` → after: `L6-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/231.js#L6-L15) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/231.js#L6-L10)

```diff
-       getBlockFaces: () => fG,
-       getIngameIconUrl: () => hG,
-       getItemIconUrl: () => KG,
-       getItemTextureUrl: () => QG,
-       getParticleTextureUrl: () => dG
+       animatedBlockTextures: () => nM,
+       armourAtlasUrl: () => aM,
+       averageColors: () => QM,
+       blockAtlasUrls: () => jM,
+       blockAtlasWidth: () => OM,
+       buildHash: () => LM,
+       builtTextureIndexFingerprint: () => zM,
+       imagesPerAtlas: () => SM,
+       outputHash: () => mM,
+       rotatedBlockTextures: () => PM
```

#### 3. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L12-L162` → after: `L17-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L17-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/231.js#L17-L305) · [Before (L12-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/231.js#L12-L162)

```diff
-     var wG = ZG(4479),
-       SG = ZG(37396),
-       LG = ZG(9244),
-       yG = ZG(3137);
-     const kG = new Set,
-       UG = new Set;
-     let YG = null;
- 
-     function VG(GG) {
-       kG.has(GG) || (kG.add(GG), UG.add(GG), YG ??= setTimeout((() => {
-         console.warn(`Docs gallery: no default texture for ${UG.size} names`, [...UG]), UG.clear(), YG = null
-       }), 1e3))
-     }
- 
-     function pG(GG, bG) {
-       try {
- ... (135 more removed lines; see GitHub link above)
+     const OM = 8,
+       SM = [256, 256, 256, 256, 256, 256, 114],
+       jM = [iM(35139), iM(35143), iM(35152), iM(35161), iM(35169), iM(35175), iM(35180)],
+       aM = iM(35182),
+       PM = {
+         "alloy_kiln_top[rot[1": iM(35186),
+         "alloy_kiln_top[rot[2": iM(35190),
+         "alloy_kiln_top[rot[3": iM(35195),
+         "alloy_kiln_top[rot[4": iM(35198),
+         "auto_bench_top[rot[1": iM(35207),
+         "auto_bench_top[rot[2": iM(35211),
+         "auto_bench_top[rot[3": iM(35217),
+         "auto_bench_top[rot[4": iM(35221),
+         "belt_tunnel_exit_top[rot[1": iM(35226),
+         "belt_tunnel_exit_top[rot[2": iM(35233),
+         "belt_tunnel_exit_top[rot[3": iM(35235),
+ ... (273 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L164-L169` → after: `L307-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L307-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/231.js#L307-L521) · [Before (L164-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/231.js#L164-L169)

```diff
-       "skyblock:forged:moonstone-astral-moonstone": {
-         name: "Silver Tide",
-         lore: "Pulled by the same moon that pulls the sea.",
-         damageMultiplier: 1.4,
-         cooldownMultiplier: .84,
-         ability: "moonDash"
+       nM = {
+         "Active Radar2": iM(36777),
+         "Active Radar3": iM(36783),
+         "Active Radar4": iM(36787),
+         "Active Radar5": iM(36796),
+         "Active Radar|meta|rot22": iM(36777),
+         "Active Radar|meta|rot23": iM(36783),
+         "Active Radar|meta|rot24": iM(36787),
+         "Active Radar|meta|rot25": iM(36796),
+         "Active Radar|meta|rot32": iM(36777),
+         "Active Radar|meta|rot33": iM(36783),
+         "Active Radar|meta|rot34": iM(36787),
+         "Active Radar|meta|rot35": iM(36796),
+         "Active Radar|meta|rot42": iM(36777),
+         "Active Radar|meta|rot43": iM(36783),
+         "Active Radar|meta|rot44": iM(36787),
+ ... (199 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L171-L179` → after: `L523-L9830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L523-L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/231.js#L523-L9830) · [Before (L171-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/231.js#L171-L179)

```diff
-       "skyblock:forged:diamond-diamond-diamond": {
-         name: "Prism Fang",
-         lore: "Every facet catches a different light, and every strike finds a different weakness.",
-         damageMultiplier: 1.29,
-         cooldownMultiplier: .88,
-         ability: "gildedEdge",
-         traits: {
-           crit: 1.8
-         }
+       QM = {
+         Unloaded: [
+           [244, 0, 255],
+           [0, 0, 0]
+         ],
+         Dirt: [
+           [133, 98, 77],
+           [139, 102, 80],
+           [127, 92, 74]
+         ],
+         "Messy Dirt": [
+           [123, 87, 59],
+           [129, 90, 62],
+           [118, 81, 57]
+         ],
+         "Grass Block": [
+ ... (9292 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L181-L237` → after: `L9832-L10902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R9832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L9832-L10902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/231.js#L9832-L10902) · [Before (L181-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/231.js#L181-L237)

```diff
-       "skyblock:forged:diamond-moonstone-gold": {
-         name: "Jeweller's Pride",
-         lore: "Too pretty to fight with. Fight with it anyway.",
-         damageMultiplier: 1.24,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge"
-       },
-       "skyblock:forged:gold-gold-gold": {
-         name: "King's Ransom",
-         lore: "Worth more than the treasure it guards.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2.5
-         }
- ... (41 more removed lines; see GitHub link above)
+       zM = "32451195",
+       LM = "857e8a51f758ec900f900490f2c463bd799d911dd2b4a294f03152ce7b99b1c2",
+       mM = "a9a816420ddd2b17c123be56bc925a7a61f103d3c9f40c3e9562e30426c1f138"
+   },
+   36777: MM => {
+     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFElEQVR42tWVsQrCQAyG+ziCqBR9J8FNF0FxFJ0ddHEsjoKbm+DsO1W+QsIlUlu5Q3RISf/+10v+JHfZbLEuscl0aUzwjMfpMSo3l3453ncqwwerCLABVkXPGBjfKgKrPAEsEYFAwsDCgDWLxjQbCfxyXnRVB3ww1QHA … [truncated]
+   },
+   36783: MM => {
+     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDElEQVR42q1VvQrCMBDu4wiiUvSdBDddBMVRdHbQxbE4Cm5ugrPvFPkqF+7Say7EDNeQy0e/n6NptdrsHWqx3IqifoXH/DwQdXiM3e0z+wGARmPXjEShh7MWAHQIwJvSAVEKU2SSTROwbobta4mC9j4HNI73iTs9ay8S … [truncated]
+   },
+   36787: MM => {
+     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFElEQVR42tVVMQrCQBDMcwRRCfonwU4bQbEUrS20sQyWgp2dYO2fInMwy+4aL4YcosUcd5shmZ1MNtlssS6ByXRpwHqGZbzvlJtLvzw9RgHYoxYIYOOwKnoGqOFaIgKe6QmoBQKEaGFasHRR22YtYV50A3BrgGfxAcXt … [truncated]
+   },
+   36796: MM => {
+     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDUlEQVR42q1VuwrCQBDM5wiiEvSfBDttBMVStLbQxjJYCnZ2grX/dDIHc9x7w+WKTcjusDszS+6aze6oEKv13gnmGzwev4U6vaZqeR05oQFAo3joJk4gh5oGAO0D0LU/IDtCJNlLpghA+203Nq35bXzAB8ld3q06P2c6 … [truncated]
+   },
+ ... (1055 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/232.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/232.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608)

#### 1. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L4` → after: `L4-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L4-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/232.js#L4-L791) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/232.js#L4)

```diff
-   37443: (GG, bG, ZG) => {
+   41906: (MM, rM, iM) => {
+     function OM(MM, rM, iM) {
+       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(MM, rM).getContext("2d", iM);
+       const OM = document.createElement("canvas");
+       return OM.width = MM, OM.height = rM, OM.getContext("2d", iM)
+     }
+ 
+     function SM(MM, rM) {
+       return MM.getContext("2d", rM)
+     }
+     iM.d(rM, {
+       b: () => SM,
+       d: () => OM
+     })
+   },
+   41871: (MM, rM, iM) => {
+ ... (772 more added lines; see GitHub link above)
```
