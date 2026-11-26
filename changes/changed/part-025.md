# Changed — Bundle Modifications Report (Part 025 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `25 / 115` (**311** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 024](part-024.md) · [Part 026 →](part-026.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/141.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/141.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417)

#### 4. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L121-L128` → after: `L21-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L21-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/141.js#L21-L29) · [Before (L121-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/141.js#L121-L128)

```diff
-         if (XU) return;
-         let zU = !1;
-         return QU.c.getFavouriteShaderPacks(UU).then((UU => {
-           zU || yU(new Set(UU))
-         })).catch((UU => {
-           console.error("Failed to get favourite shader packs", UU), zU || yU(new Set)
-         })), () => {
-           zU = !0
+         const BH = SH.currentUrl.getSearchParam("code");
+         SH.currentUrl.removeSearchParam("code"), null === BH && (console.error("No authorization code found in the URL"), window.close());
+         const LH = {
+           type: `oauth_authentication_${HH.providerName}`,
+           code: BH
+         };
+         for (const HH of (rH = window.location.origin) === EH ? [rH, `https://${CH.e}`] : [rH]) {
+           var AH;
+           null === (AH = window.opener) || void 0 === AH || AH.postMessage(LH, HH)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L130-L330` → after: `L31-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L31-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/141.js#L31-L39) · [Before (L130-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/141.js#L130-L330)

```diff
-       }), [UU, XU]), {
-         isFavourite: UU => null === zU ? null : zU.has(UU),
-         toggle: function(XU) {
-           if (null === zU || AU.current.has(XU)) return;
-           AU.current.add(XU);
-           const cU = !zU.has(XU);
-           FU(XU, cU), (cU ? QU.c.favouriteShaderPack(UU, XU) : QU.c.unfavouriteShaderPack(UU, XU)).catch((UU => {
-             console.error("Failed to change a favourite shader pack", UU), FU(XU, !cU)
-           })).finally((() => {
-             AU.current.delete(XU)
-           }))
-         }
-       }
-     }
-   },
-   7150: (UU, XU, zU) => {
- ... (185 more removed lines; see GitHub link above)
+         var rH;
+         setTimeout((() => {
+           window.close()
+         }), 1e3)
+       })), (0, XH.jsx)("div", {
+         className: "AuthCallback",
+         children: (0, XH.jsx)(AH.d, {
+           showFace: !0,
+           loading: !0
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L332-L439` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/141.js#L41) · [Before (L332-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/141.js#L332-L439)

```diff
-       }
-       return UU.listed || QU.push({
-         tone: "info",
-         text: yU("shaderPackListing:ownerUnlisted"),
-         detail: null
-       }), QU
-     }
- 
-     function HU(UU) {
-       return Math.max(1, Math.round(UU / 1024))
-     }
- 
-     function MU(UU, XU, zU) {
-       return UU instanceof yU.e && UU.errorMessageForUser ? UU.errorMessageForUser : XU(zU)
-     }
-   },
- ... (92 more removed lines; see GitHub link above)
+       })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/142.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/142.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088)

#### 1. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/142.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/142.js#L4)

```diff
-   42172: (UU, XU, zU) => {
+   7104: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/142.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/142.js#L6)

```diff
-       ShaderPackCategory: () => OU
+       default: () => qH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L8-L31` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/142.js#L8-L10) · [Before (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/142.js#L8-L31)

```diff
-     var cU = zU(61),
-       yU = zU(1577),
-       QU = zU(1494),
-       AU = zU(1568),
-       FU = zU(1193),
-       oU = zU(97),
-       DU = zU(27),
-       EU = zU(1680),
-       YU = zU(7209),
-       NU = zU(316),
-       IU = zU(7251),
-       pU = zU(7242),
-       aU = zU(7253),
-       tU = zU(7150),
-       gU = zU(5540),
-       kU = zU(5597),
- ... (8 more removed lines; see GitHub link above)
+     var AH = LH(45),
+       rH = LH(1520),
+       SH = LH(1038),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L33-L52` → after: `L12-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L12-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/142.js#L12-L32) · [Before (L33-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/142.js#L33-L52)

```diff
-       WU = zU(5603),
-       dU = zU(1390),
-       LU = zU(7198),
-       eU = zU(1305);
-     const CU = {
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
- ... (4 more removed lines; see GitHub link above)
+       tH = LH(304),
+       zH = LH(7114),
+       CH = LH(1315),
+       EH = LH(1509),
+       XH = LH(4969),
+       GH = LH(1455),
+       YH = LH(3473),
+       uH = LH(4973),
+       QH = LH(1706),
+       WH = LH(4961),
+       MH = LH(1061),
+       xH = LH(15),
+       vH = LH(1502),
+       PH = LH(1131),
+       TH = LH(81),
+       UH = LH(1123),
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L56-L60` → after: `L36-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L36-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/142.js#L36-L108) · [Before (L56-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/142.js#L56-L60)

```diff
-         stored: XU,
-         checking: zU,
-         webGpuUsable: cU,
-         changePending: yU,
-         compiler: QU,
+         pack: BH,
+         view: LH,
+         favourite: AH,
+         notice: rH
+       } = HH;
+       const {
+         width: SH,
+         height: tH
+       } = zH.w.thumb, {
+         live: XH
+       } = BH;
+       return (0, mH.jsx)("div", {
+         className: "ShaderPackCard",
+         children: (0, mH.jsxs)("div", {
+           className: "ShaderPackCardTile",
+           children: [(0, mH.jsxs)(EH.LinkPreserveSearch, {
+ ... (57 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L62-L82` → after: `L110-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L110-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/142.js#L110-L122) · [Before (L62-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/142.js#L62-L82)

```diff
-       } = UU;
-       const FU = function(UU, XU, zU, cU, yU) {
-           const QU = (0, IU.storedPackOutcome)(UU, yU);
-           return "none" === QU.kind ? "noCompiler" === QU.reason ? XU ? "checking" : "noCompiler" : "otherApiVersion" === QU.reason ? "wrongApiVersion" : "failed" : (0, BU.d)() ? "harnessBuild" : "blocked" === QU.kind ? (0, IU.shaderPackNeedsCheck)(UU, yU) ? XU ? "checking" : !1  … [truncated]
-         }(XU, zU, cU, yU, QU),
-         oU = "failed" === FU || "failedRecheck" === FU,
-         DU = oU || "wrongApiVersion" === FU || "noCompiler" === FU,
-         EU = "ready" === FU || "readyAfterReload" === FU ? XU.validation.offInStrict : [];
-       return (0, eU.jsxs)(eU.Fragment, {
-         children: [(0, eU.jsxs)("div", {
-           className: PU()("ShaderPackStatus", {
-             Ready: "ready" === FU,
-             Failed: DU
-           }),
-           children: ["ready" === FU && (0, eU.jsx)(dU.d, {
-             name: "circle-check"
- ... (5 more removed lines; see GitHub link above)
+       } = (0, UH.B)(), CH = (0, IH.k)(), EH = Date.now(), XH = null === BH ? 0 : "owned" === BH.kind ? BH.packs.length : BH.page.results.length;
+       return (0, mH.jsxs)("div", {
+         className: hH()("ShaderPackBrowseResults", {
+           Loading: LH && null !== BH
+         }),
+         children: [LH && null === BH && (0, mH.jsx)("div", {
+           className: "ShaderPackBrowseMessage",
+           children: (0, mH.jsx)(VH.d, {})
+         }), AH && (0, mH.jsxs)("div", {
+           className: "ShaderPackBrowseMessage",
+           children: [zH("shaderPackListing:loadFailed"), (0, mH.jsx)(GH.i, {
+             onClick: rH,
+             children: zH("general:tryAgain")
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L84-L97` → after: `L124-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L124-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/142.js#L124-L152) · [Before (L84-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/142.js#L84-L97)

```diff
-         }), oU && (0, eU.jsx)(LU.d, {
-           diagnostics: XU.validation.errors,
-           more: XU.validation.moreErrors,
-           t: AU
-         }), EU.length > 0 && (0, eU.jsxs)(eU.Fragment, {
-           children: [(0, eU.jsxs)("div", {
-             className: "ShaderPackStatus OffInStrict",
-             children: [(0, eU.jsx)(dU.d, {
-               name: "triangle-exclamation"
-             }), AU("shaderPack:offInStrict")]
-           }), (0, eU.jsx)(LU.d, {
-             diagnostics: EU,
-             t: AU
-           })]
+         }), "listing" === (null === BH || void 0 === BH ? void 0 : BH.kind) && XH > 0 && (0, mH.jsx)("div", {
+           className: "ShaderPackBrowseGrid",
+           children: BH.page.results.map((HH => (0, mH.jsx)(oH, {
+             pack: {
+               packId: HH.packId,
+               name: HH.name,
+               live: HH
+             },
+             view: tH,
+             favourite: {
+               isFavourite: CH.isFavourite(HH.packId),
+               onToggle: () => {
+                 CH.toggle(HH.packId)
+               }
+             }
+           }, HH.packId)))
+ ... (13 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L103-L105` → after: `L158-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L158-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/142.js#L158-L168) · [Before (L103-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/142.js#L103-L105)

```diff
-       let {
-         setApplySettingsCallback: XU
-       } = UU;
+       return "mine" === HH.section ? "shaderPackListing:noOwnPacks" : (0, bH.q)(HH) ? "general:noResults" : "favourites" === HH.section ? "shaderPackListing:noFavourites" : "general:noResults"
+     }
+     var KH = LH(7141);
+     const cH = 24,
+       eH = {
+         favourites: "general:favourites",
+         mine: "shaderPackListing:mine"
+       };
+ 
+     function qH() {
+       var HH, BH, LH, SH;
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L108-L124` → after: `L171-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L171-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/142.js#L171-L186) · [Before (L108-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/142.js#L108-L124)

```diff
-       } = (0, FU.I)(), [yU, AU] = (0, cU.useState)(null), [DU, EU] = (0, cU.useState)(null), [BU, RU] = (0, cU.useState)(null), [PU] = (0, cU.useState)(NU.l), [WU, dU] = (0, cU.useState)(!0), [LU, CU] = (0, cU.useState)(!1), {
-         loading: wU,
-         error: OU,
-         setError: rU,
-         onFiles: uU
-       } = (0, GU.f)((async UU => {
-         const XU = await (0, YU.loadPageShaderPackCompiler)();
-         if (!XU) return void rU(zU("shaderPack:compilerUnavailable"));
-         EU(XU);
-         const cU = (0, IU.toStoredShaderPack)(UU, await (0, pU.h)(XU, UU.files));
-         await (0, IU.saveShaderPack)(cU, XU) ? (AU(cU), fU(yU, cU, XU)) : rU(zU("shaderPack:saveFailed"))
-       }));
- 
-       function fU(UU, zU, cU) {
-         (function(UU, XU, zU, cU) {
-           return zU || ZU(UU, cU) || ZU(XU, cU)
- ... (1 more removed lines; see GitHub link above)
+       } = (0, UH.B)(), OH = (0, EH.useNavigatePreserveSearch)(), kH = (0, rH.s)(), {
+         userContext: oH,
+         isUserContextUpdating: lH
+       } = (0, MH.e)(), [qH, gH] = (0, IH.i)(), [NH, RH] = (0, IH.g)(), jH = (0, AH.useRef)(!1), [nH, FH] = (0, XH.p)(), DH = (0, bH.B)(nH), [wH, ZH] = (0, AH.useState)(null !== (HH = DH.searchQuery) && void 0 !== HH ? HH : ""), dH = (0, AH.useRef)(null), {
+         searchQuery: aH
+       } = DH;
+       (0, AH.useEffect)((() => {
+         ZH(null !== aH && void 0 !== aH ? aH : ""), dH.current && (dH.current.value = null !== aH && void 0 !== aH ? aH : "")
+       }), [aH]);
+       const [sH, JH] = (0, AH.useState)(null), [iH, pH] = (0, AH.useState)(!1), [yH, HB] = (0, AH.useState)(!1), [BB, LB] = (0, AH.useState)(0), AB = (0, AH.useRef)(0), rB = JSON.stringify(DH), SB = (0, bH.m)();
+ 
+       function hB() {
+         null !== SB ? (OH(SB), xH.c.set({
+           openEverythingMenuName: tH.o.SETTINGS,
+           openSettingsCategory: "Cu"
+         })) : OH("/")
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L126-L140` → after: `L188-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L188-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/142.js#L188-L205) · [Before (L126-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/142.js#L126-L140)

```diff
-       return (0, cU.useEffect)((() => {
-         let UU = !1;
-         return async function() {
-           const XU = (0, oU.hasUsableWebGpuAdapter)(),
-             zU = await (0, aU.f)();
-           if (UU) return;
-           AU(zU), CU(!0), dU(!1);
-           const cU = null !== zU ? (0, YU.loadPageShaderPackCompiler)() : null,
-             yU = await XU;
-           if (UU) return;
-           RU(yU);
-           const QU = await cU;
-           if (!UU && (EU(QU), null !== zU && yU && null !== QU && (0, IU.shaderPackNeedsCheck)(zU, QU))) {
-             const XU = await (0, pU.d)(zU, QU);
-             UU || AU((UU => UU === zU ? XU : UU))
+ 
+       function tB(HH) {
+         FH((BH => {
+           (0, bH.bb)(BH, {
+             ...DH,
+             pageNumber: 1,
+             ...HH
+           })
+         }))
+       }
+ 
+       function zB() {
+         const HH = wH.trim() || null;
+         tB({
+           searchQuery: HH,
+           ...null !== HH && !jH.current && (0, bH.n)(DH) && {
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L142-L143` → after: `L207-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L207-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/142.js#L207-L236) · [Before (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/142.js#L142-L143)

```diff
-         }().catch((XU => {
-           console.error("Failed to load the stored shader pack", XU), UU || rU(zU("shaderPack:unexpectedError"))
+         })
+       }(0, WH.c)(hB), (0, IH.d)(), (0, AH.useEffect)((() => {
+         if (lH) return;
+         const HH = ++AB.current,
+           BH = JSON.parse(rB);
+         pH(!0), HB(!1), async function(HH) {
+           if ("mine" === HH.section) return {
+             kind: "owned",
+             packs: await vH.d.getOwnedShaderPacks(oH)
+           };
+           const BH = "favourites" === HH.section,
+             LH = BH && (0, bH.n)(HH),
+             AH = await vH.d.getShaderPacks(oH, {
+               sort: BH ? bH.h : HH.sort,
+               features: LH ? [] : HH.withFeatures,
+               withoutFeatures: LH ? [] : HH.withoutFeatures,
+ ... (14 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L145-L153` → after: `L238-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L238-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/142.js#L238-L401) · [Before (L145-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/142.js#L145-L153)

```diff
-           UU || (dU(!1), CU(!1))
-         })), () => {
-           UU = !0
-         }
-       }), []), (0, eU.jsxs)("div", {
-         className: "ShaderPackCategory SettingsMenuRightInner",
-         children: [(0, eU.jsx)("div", {
-           className: "ShaderPackIntro",
-           children: zU("shaderPack:intro")
+           AB.current === HH && pH(!1)
+         }))
+       }), [rB, oH, lH, BB]);
+       const [CB, EB] = (0, AH.useState)(null), XB = null !== (LH = null === (SH = ("listing" === (null === sH || void 0 === sH ? void 0 : sH.kind) ? sH.page.results : (null !== (BH = null === sH || void 0 === sH ? void 0 : sH.packs) && void 0 !== BH ? BH : []).flatMap((HH => HH.l … [truncated]
+       (0, AH.useEffect)((() => {
+         null !== XB && EB(XB)
+       }), [XB]);
+       const GB = "mine" === DH.section,
+         YB = (0, bH.p)(oH),
+         uB = HH => {
+           "explore" !== DH.section && (HH.stopPropagation(), HH.preventDefault(), tB({
+             section: "explore"
+           }))
+         };
+       return (0, mH.jsxs)("div", {
+         className: "ShaderPackBrowse AnimFadeIn",
+ ... (148 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L155-L209` → after: `L403-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L403-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/142.js#L403-L425) · [Before (L155-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/142.js#L155-L209)

```diff
-           to: tU.T,
-           className: "ShaderPackBrowseLink",
-           children: (0, eU.jsx)(QU.l, {
-             className: "ShaderPackBrowseButton",
-             children: zU("shaderPackListing:browse")
-           })
-         }), !1 === BU && (0, eU.jsx)("div", {
-           className: "SettingsBoxWarning",
-           children: zU(PU ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
-         }), null !== OU && (0, eU.jsxs)("div", {
-           className: "ShaderPackCategoryError",
-           children: [zU("general:error"), ": ", OU]
-         }), yU && (0, eU.jsxs)("div", {
-           className: "SettingBox ShaderPackSummary",
-           children: [(0, eU.jsxs)("div", {
-             className: "ShaderPackSummaryHeader",
- ... (39 more removed lines; see GitHub link above)
+           results: sH,
+           loading: iH,
+           failed: yH,
+           onRetry: () => {
+             LB((HH => HH + 1))
+           },
+           view: DH,
+           previewView: qH
+         }), "listing" === (null === sH || void 0 === sH ? void 0 : sH.kind) && (0, mH.jsx)(uH.e, {
+           className: "ShaderPackBrowsePagination",
+           page: sH.page.pageNumber,
+           totalPages: sH.page.totalPages,
+           onSetPage: HH => {
+             FH((BH => {
+               (0, XH.m)(BH, HH)
+             }))
+ ... (7 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/143.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/143.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/143.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/143.js#L2)

```diff
- export const ids = [143, 150, 151];
+ export const ids = [143];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L4-L20` → after: `L4-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L4-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/143.js#L4-L205) · [Before (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/143.js#L4-L20)

```diff
-   41575: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => YU,
-       installListedShaderPack: () => EU
-     });
-     var cU = zU(7158),
-       yU = zU(5608),
-       QU = zU(1203),
-       AU = zU(7209),
-       FU = zU(5603),
-       oU = zU(7251),
-       DU = zU(7242);
-     async function EU(UU) {
-       const XU = await (0, AU.loadPageShaderPackCompiler)();
-       if (null === XU) return {
-         kind: "failed",
- ... (1 more removed lines; see GitHub link above)
+   7121: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => tH
+     });
+     var AH = LH(1038),
+       rH = LH.n(AH),
+       SH = LH(1123),
+       hH = LH(1225);
+ 
+     function tH(HH) {
+       let {
+         item: BH,
+         className: LH
+       } = HH;
+       const {
+         t: AH
+ ... (186 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L22-L25` → after: `L207-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L207-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/143.js#L207-L225) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/143.js#L22-L25)

```diff
-       const zU = await YU(UU, XU);
-       return "failed" === zU.kind ? zU : await (0, oU.saveShaderPack)(zU.stored, XU) ? ((0, oU.markShaderPackChangePending)(), zU) : {
-         kind: "failed",
-         reason: "save"
+ 
+     function WH(HH, BH) {
+       return HH.withFeatures.includes(BH) ? "with" : HH.withoutFeatures.includes(BH) ? "without" : null
+     }
+ 
+     function MH(HH) {
+       return null === HH ? "with" : "with" === HH ? "without" : null
+     }
+ 
+     function xH(HH) {
+       return "with" === HH ? "only" : null === HH ? "include" : void 0
+     }
+ 
+     function vH(HH, BH) {
+       const LH = WH(HH, BH),
+         AH = HH => HH.filter((HH => HH !== BH));
+ ... (3 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L28-L38` → after: `L228-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L228-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/143.js#L228-L325) · [Before (L28-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/143.js#L28-L38)

```diff
-     async function YU(UU, XU) {
-       const zU = await async function(UU) {
-         let {
-           packId: XU,
-           sourceHash: zU
-         } = UU;
-         try {
-           const UU = await fetch(`${QU.clientSideServerUrls.s3Url}/${(0,cU.M)(XU,zU)}`, {
-             headers: {
-               Accept: "application/json"
-             }
+     const PH = "section",
+       TH = "sort",
+       UH = "filters",
+       VH = "q",
+       OH = "banned",
+       bH = "popular",
+       kH = "strict";
+ 
+     function mH(HH) {
+       var BH, LH, rH;
+       const hH = HH.get(PH),
+         tH = (null !== (BH = HH.get(UH)) && void 0 !== BH ? BH : kH).split(","),
+         zH = HH.get(OH);
+       return {
+         section: "favourites" === hH || "mine" === hH ? hH : "explore",
+         sort: null !== (LH = AH.B.find((BH => BH === HH.get(TH)))) && void 0 !== LH ? LH : bH,
+ ... (82 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L40-L79` → after: `L327-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/143.js#L327-L330) · [Before (L40-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/143.js#L40-L79)

```diff
-           if (!UU.ok) return console.error(`Failed to download shader pack ${XU} (${UU.status})`), null;
-           const yU = await UU.json();
-           return "object" !== typeof yU || null === yU ? (console.error(`Shader pack ${XU}'s source isn't an object`), null) : yU
-         } catch (yU) {
-           return console.error(`Failed to download shader pack ${XU}`, yU), null
-         }
-       }(UU);
-       if (null === zU) return {
-         kind: "failed",
-         reason: "download"
-       };
-       if (!(0, FU.i)(zU.apiVersion)) return {
-         kind: "failed",
-         reason: "apiVersion"
-       };
-       const AU = (0, yU.r)(zU.files);
- ... (24 more removed lines; see GitHub link above)
+         SH.push({
+           tone: "info",
+           text: tH,
+           detail: null
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L84-L177` → after: `L348-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L348-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/143.js#L348-L360) · [Before (L84-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/143.js#L84-L177)

```diff
-   43994: (UU, XU, zU) => {
-     zU.d(XU, {
-       followListingUpdates: () => NU
-     });
-     var cU = zU(220),
-       yU = zU(27),
-       QU = zU(1545),
-       AU = zU(1131),
-       FU = zU(7209),
-       oU = zU(5603),
-       DU = zU(41575),
-       EU = zU(7251);
-     const YU = ["apiVersion", "invalid", "errors"];
-     async function NU(UU, XU) {
-       const zU = await AU.userContextManager.getCurrentUserContext(),
-         NU = await QU.c.getShaderPackVersions(zU, [XU.packId]),
- ... (78 more removed lines; see GitHub link above)
+   7138: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => SH
+     });
+     var AH = LH(45),
+       rH = LH(30);
+ 
+     function SH(HH, BH) {
+       var LH;
+       const [SH, hH] = (0, AH.useState)(null !== (LH = rH.e.getItem(HH)) && void 0 !== LH ? LH : BH);
+       return [SH, BH => {
+         rH.e.setItem(HH, BH), hH(BH)
+       }]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L180-L341` → after: `L363-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L363-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/143.js#L363-L373) · [Before (L180-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/143.js#L180-L341)

```diff
-   7251: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       forgetShaderPackActiveHint: () => CU,
-       isOtherApiVersion: () => WU,
-       isShaderPackActive: () => BU,
-       isShaderPackChangePending: () => PU,
-       markShaderPackChangePending: () => RU,
-       pageShaderPackValidationVersion: () => dU,
-       reconcileStoredShaderPackHint: () => eU,
-       removeShaderPack: () => GU,
-       replaceShaderPack: () => tU,
-       saveShaderPack: () => aU,
-       shaderPackNeedsCheck: () => LU,
-       storedPackOutcome: () => ZU,
-       storedShaderPackFiles: () => NU,
-       toStoredShaderPack: () => YU
- ... (146 more removed lines; see GitHub link above)
+   7114: (HH, BH, LH) => {
+     LH.d(BH, {
+       B: () => SH,
+       F: () => tH,
+       H: () => hH,
+       L: () => AH,
+       M: () => GH,
+       P: () => EH,
+       Q: () => PH,
+       R: () => XH,
+       V: () => CH,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L343-L433` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/143.js#L375) · [Before (L343-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/143.js#L343-L433)

```diff
-       h: () => FU
-     });
-     var cU = zU(7251),
-       yU = zU(7219),
-       QU = zU(123);
-     const AU = 100;
-     async function FU(UU, XU) {
-       var zU;
-       let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (zU = navigator.gpu) && void 0 !== zU ? zU : null;
-       const AU = UU.bUU(XU, (0, yU.shaderPackTextures)());
-       if (AU.errors.length > 0) return DU(UU, AU.errors, AU.offInStrict);
-       const FU = await async function(UU) {
-         if (!UU) return null;
-         try {
-           const XU = await (0, QU.q)(UU);
-           return XU ? await XU.requestDevice() : null
- ... (75 more removed lines; see GitHub link above)
+       g: () => WH,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L435` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/143.js#L377) · [Before (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/143.js#L435)

```diff
-       l: () => GU,
+       m: () => YH,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L440` → after: `L381-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L381-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/143.js#L381-L382) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/143.js#L440)

```diff
-       z: () => QU
+       w: () => rH,
+       x: () => TH
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L478` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/143.js#L420) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/143.js#L478)

```diff
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(UU)}`
+       return `https://bloxdhub.com/workshop/${encodeURIComponent(HH)}`
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L489` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/143.js#L431) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/143.js#L489)

```diff
-       return `shaderPacks/${UU}/${XU}.json`
+       return `shaderPacks/${HH}/${BH}.json`
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L493` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/143.js#L435) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/143.js#L493)

```diff
-       return null === XU.renderId ? RU(UU, XU.baselineVersion, zU, cU) : `${UU}/${function(UU,XU,zU,cU){return`shaderPacks/${UU}/${XU}/${zU}-${cU}.webp`}(XU.packId,XU.renderId,zU,cU)}`
+       return null === BH.renderId ? UH(HH, BH.baselineVersion, LH, AH) : `${HH}/${function(HH,BH,LH,AH){return`shaderPacks/${HH}/${BH}/${LH}-${AH}.webp`}(BH.packId,BH.renderId,LH,AH)}`
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L497` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/143.js#L439) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/143.js#L497)

```diff
-       return `${UU}/${function(UU,XU,zU){return`shaderPacks/baseline/${UU}/${XU}-${zU}.webp`}(XU,zU,cU)}`
+       return `${HH}/${function(HH,BH,LH){return`shaderPacks/baseline/${HH}/${BH}-${LH}.webp`}(BH,LH,AH)}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/144.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/144.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/144.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/144.js#L4-L6)

```diff
-   44448: (UU, XU, zU) => {
-     zU.d(XU, {
-       startHarnessShaderPack: () => YU
+   42378: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       ShaderPackCategory: () => lH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L8-L10` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/144.js#L8-L19) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/144.js#L8-L10)

```diff
-     var cU = zU(7158),
-       yU = zU(5608),
-       QU = zU(7233),
+     var AH = LH(45),
+       rH = LH(1520),
+       SH = LH(1455),
+       hH = LH(1509),
+       tH = LH(1123),
+       zH = LH(81),
+       CH = LH(15),
+       EH = LH(1659),
+       XH = LH(7165),
+       GH = LH(293),
+       YH = LH(7201),
+       uH = LH(7196),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L12-L16` → after: `L21-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L21-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/144.js#L21-L105) · [Before (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/144.js#L12-L16)

```diff
-       FU = zU(5603),
-       oU = zU(40071),
-       DU = zU(7219),
-       EU = zU(7242);
-     async function YU(UU, XU) {
+       WH = LH(7111),
+       MH = LH(5478),
+       xH = LH(5520),
+       vH = LH(7161),
+       PH = LH(3835);
+ 
+     function TH(HH, BH) {
+       const LH = (0, YH.storedPackOutcome)(HH, BH);
+       return "none" !== LH.kind || "noCompiler" === LH.reason
+     }
+     var UH = LH(1038),
+       VH = LH.n(UH),
+       OH = LH(5523),
+       bH = LH(1315),
+       kH = LH(7155),
+       mH = LH(1225);
+ ... (69 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L18-L55` → after: `L107-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L107-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/144.js#L107-L113) · [Before (L18-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/144.js#L18-L55)

```diff
-         stored: zU,
-         info: YU
-       } = await async function(UU, XU) {
-         const zU = await async function(UU) {
-           const XU = await fetch(UU);
-           if (!XU.ok) throw new Error(`Couldn't fetch the shader pack at ${UU}: HTTP ${XU.status}`);
-           const zU = await XU.json();
-           if (!(0, cU.i)(zU)) throw new Error(`The shader pack at ${UU} isn't a shader pack listing source`);
-           return zU
-         }(UU);
-         if (!(0, FU.i)(zU.apiVersion)) throw new Error(`The pack is for shader pack API version ${zU.apiVersion}; this build runs version ${FU.d}`);
-         const oU = {
-             manifest: {
-               apiVersion: zU.apiVersion,
-               name: zU.name,
-               author: zU.author,
- ... (22 more removed lines; see GitHub link above)
+         t: LH
+       } = (0, tH.B)(), [rH, hH] = (0, AH.useState)(null), [CH, EH] = (0, AH.useState)(null), [PH, UH] = (0, AH.useState)(null), [VH] = (0, AH.useState)(GH.l), [OH, bH] = (0, AH.useState)(!0), [kH, oH] = (0, AH.useState)(!1), {
+         loading: IH,
+         error: lH,
+         setError: cH,
+         onFiles: eH
+       } = (0, vH.f)((async HH => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L57-L62` → after: `L115-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L115-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/144.js#L115-L147) · [Before (L57-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/144.js#L57-L62)

```diff
-         if (!IU) throw new Error("The shader pack compiler couldn't load");
-         const pU = await (0, EU.h)(IU, NU);
-         if (!pU) throw new Error("No WebGPU device could validate the shader pack");
-         if (YU.errors = [...pU.errors], pU.ok) {
-           const UU = IU.bUU(NU, (0, DU.shaderPackTextures)());
-           YU.features = (0, yU.q)(UU), YU.runsInMode = (0, QU.j)(UU.variants, XU)
+         if (!BH) return void cH(LH("shaderPack:compilerUnavailable"));
+         EH(BH);
+         const AH = (0, YH.toStoredShaderPack)(HH, await (0, uH.d)(BH, HH.files));
+         await (0, YH.saveShaderPack)(AH, BH) ? (hH(AH), qH(rH, AH, BH)) : cH(LH("shaderPack:saveFailed"))
+       }));
+ 
+       function qH(HH, LH, AH) {
+         (function(HH, BH, LH, AH) {
+           return LH || TH(HH, AH) || TH(BH, AH)
+         })(HH, LH, (0, YH.isShaderPackChangePending)(), AH) && ((0, YH.markShaderPackChangePending)(), BH((() => MH.i)))
+       }
+       return (0, AH.useEffect)((() => {
+         let HH = !1;
+         return async function() {
+           const BH = (0, zH.hasUsableWebGpuAdapter)(),
+             LH = await (0, QH.e)();
+ ... (17 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L64-L86` → after: `L149-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L149-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/144.js#L149-L234) · [Before (L64-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/144.js#L64-L86)

```diff
-         return {
-           stored: {
-             ...oU,
-             validation: pU
-           },
-           info: YU
-         }
-       }(UU, XU), [NU] = YU.errors;
-       if (NU) {
-         const UU = null === NU.file ? "" : `${NU.file}:${NU.line}: `,
-           XU = YU.errors.length > 1 ? ` (${YU.errors.length-1} more)` : "";
-         return {
-           info: YU,
-           problem: `The shader pack doesn't compile: ${UU}${NU.message}${XU}`
-         }
-       }
- ... (7 more removed lines; see GitHub link above)
+       }), []), (0, mH.jsxs)("div", {
+         className: "ShaderPackCategory SettingsMenuRightInner",
+         children: [(0, mH.jsx)("div", {
+           className: "ShaderPackIntro",
+           children: LH("shaderPack:intro")
+         }), (0, mH.jsx)(KH, {
+           to: WH.P,
+           className: "ShaderPackBrowseLink",
+           children: (0, mH.jsx)(SH.u, {
+             className: "ShaderPackBrowseButton",
+             children: LH("shaderPackListing:browse")
+           })
+         }), !1 === PH && (0, mH.jsx)("div", {
+           className: "SettingsBoxWarning",
+           children: LH(VH ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
+         }), null !== lH && (0, mH.jsxs)("div", {
+ ... (70 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L89-L305` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/144.js#L237) · [Before (L89-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/144.js#L89-L305)

```diff
-   7251: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       forgetShaderPackActiveHint: () => CU,
-       isOtherApiVersion: () => WU,
-       isShaderPackActive: () => BU,
-       isShaderPackChangePending: () => PU,
-       markShaderPackChangePending: () => RU,
-       pageShaderPackValidationVersion: () => dU,
-       reconcileStoredShaderPackHint: () => eU,
-       removeShaderPack: () => GU,
-       replaceShaderPack: () => tU,
-       saveShaderPack: () => aU,
-       shaderPackNeedsCheck: () => LU,
-       storedPackOutcome: () => ZU,
-       storedShaderPackFiles: () => NU,
-       toStoredShaderPack: () => YU
- ... (201 more removed lines; see GitHub link above)
+   7111: (HH, BH, LH) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L308-L310` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/144.js#L240) · [Before (L308-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/144.js#L308-L310)

```diff
-       C: () => AU,
-       E: () => cU,
-       H: () => NU,
+       F: () => EH,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L314-L316` → after: `L245-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L245-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/144.js#L245-L253) · [Before (L314-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/144.js#L314-L316)

```diff
-       O: () => DU,
-       c: () => pU,
-       f: () => tU,
+       P: () => hH,
+       R: () => gH,
+       S: () => zH,
+       T: () => tH,
+       X: () => cH,
+       _: () => eH,
+       ab: () => vH,
+       bb: () => oH,
+       e: () => xH,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L319` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/144.js#L454) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/144.js#L319)

```diff
-       l: () => GU,
+       m: () => YH,
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L324` → after: `L458-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/144.js#L458-L459) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/144.js#L324)

```diff
-       z: () => QU
+       w: () => rH,
+       x: () => TH
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L362` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/144.js#L497) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/144.js#L362)

```diff
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(UU)}`
+       return `https://bloxdhub.com/workshop/${encodeURIComponent(HH)}`
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L373` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/144.js#L508) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/144.js#L373)

```diff
-       return `shaderPacks/${UU}/${XU}.json`
+       return `shaderPacks/${HH}/${BH}.json`
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L377` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/144.js#L512) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/144.js#L377)

```diff
-       return null === XU.renderId ? RU(UU, XU.baselineVersion, zU, cU) : `${UU}/${function(UU,XU,zU,cU){return`shaderPacks/${UU}/${XU}/${zU}-${cU}.webp`}(XU.packId,XU.renderId,zU,cU)}`
+       return null === BH.renderId ? UH(HH, BH.baselineVersion, LH, AH) : `${HH}/${function(HH,BH,LH,AH){return`shaderPacks/${HH}/${BH}/${LH}-${AH}.webp`}(BH.packId,BH.renderId,LH,AH)}`
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L381` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/144.js#L516) · [Before (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/144.js#L381)

```diff
-       return `${UU}/${function(UU,XU,zU){return`shaderPacks/baseline/${UU}/${XU}-${zU}.webp`}(XU,zU,cU)}`
+       return `${HH}/${function(HH,BH,LH){return`shaderPacks/baseline/${HH}/${BH}-${LH}.webp`}(BH,LH,AH)}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/145.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/145.js` (61 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31)

#### 1. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L2)

```diff
- export const ids = [145, 210];
+ export const ids = [145, 152, 153];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L4)

```diff
-   34868: (UU, XU, zU) => {
+   41811: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L6)

```diff
-       c: () => QU
+       c: () => XH,
+       installListedShaderPack: () => EH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L8-L25` → after: `L9-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L9-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L9-L25) · [Before (L8-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L8-L25)

```diff
-     var cU = zU(344),
-       yU = zU(34875);
- 
-     function QU(UU, XU, zU) {
-       const QU = Object.entries(XU).sort(((UU, XU) => XU[1] - UU[1])),
-         AU = (0, cU.tb)(UU);
-       AU.push(UU ? "\n\n" : "\n");
-       for (const [yU, pU] of QU) {
-         var FU, oU, DU;
-         const UU = null !== (FU = null === zU || void 0 === zU || null === (oU = zU[yU]) || void 0 === oU ? void 0 : oU.icon) && void 0 !== FU ? FU : `${yU} Enchantment`;
-         AU.push({
-           icon: UU,
-           style: {
-             fontSize: "1.5rem"
-           }
-         }), AU.push({
- ... (2 more removed lines; see GitHub link above)
+     var AH = LH(7114),
+       rH = LH(5531),
+       SH = LH(1131),
+       hH = LH(7165),
+       tH = LH(5523),
+       zH = LH(7201),
+       CH = LH(7196);
+     async function EH(HH) {
+       const BH = await (0, hH.loadPageShaderPackCompiler)();
+       if (null === BH) return {
+         kind: "failed",
+         reason: "compiler"
+       };
+       const LH = await XH(HH, BH);
+       return "failed" === LH.kind ? LH : await (0, zH.saveShaderPack)(LH.stored, BH) ? ((0, zH.markShaderPackChangePending)(), LH) : {
+         kind: "failed",
+ ... (1 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L27-L48` → after: `L27-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L27-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L27-L79) · [Before (L27-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L27-L48)

```diff
-       AU.push({
-         str: "\n"
-       });
-       for (const [cU, pU] of QU) {
-         var EU, YU, NU, IU;
-         const UU = null !== (EU = null === zU || void 0 === zU || null === (YU = zU[cU]) || void 0 === YU ? void 0 : YU.icon) && void 0 !== EU ? EU : `${cU} Enchantment`,
-           XU = null !== (NU = null === zU || void 0 === zU || null === (IU = zU[cU]) || void 0 === IU ? void 0 : IU.description) && void 0 !== NU ? NU : (0, yU.o)(cU);
-         AU.push({
-           icon: UU,
-           style: {
-             fontSize: "1.25rem",
-             opacity: .75
-           }
-         }), AU.push({
-           str: XU,
-           style: {
- ... (6 more removed lines; see GitHub link above)
+     }
+     async function XH(HH, BH) {
+       const LH = await async function(HH) {
+         let {
+           packId: BH,
+           sourceHash: LH
+         } = HH;
+         try {
+           const HH = await fetch(`${SH.clientSideServerUrls.s3Url}/${(0,AH.Q)(BH,LH)}`, {
+             headers: {
+               Accept: "application/json"
+             }
+           });
+           if (!HH.ok) return console.error(`Failed to download shader pack ${BH} (${HH.status})`), null;
+           const rH = await HH.json();
+           return "object" !== typeof rH || null === rH ? (console.error(`Shader pack ${BH}'s source isn't an object`), null) : rH
+ ... (37 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L54` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L84) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L54)

```diff
-   34878: (UU, XU, zU) => {
+   44803: (HH, BH, LH) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L56-L64` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L86) · [Before (L56-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L56-L64)

```diff
-       d: () => DU,
-       g: () => kU,
-       i: () => tU,
-       k: () => oU,
-       m: () => gU,
-       p: () => EU,
-       t: () => NU,
-       x: () => aU,
-       z: () => YU
+       followListingUpdates: () => GH
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L66-L203` → after: `L88-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L88-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L88-L129) · [Before (L66-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L66-L203)

```diff
-     var cU = zU(320),
-       yU = zU(646),
-       QU = zU(344),
-       AU = zU(4598),
-       FU = zU(34868);
- 
-     function oU(UU, XU) {
-       var zU;
-       let {
-         player: cU,
-         chestOrCreative: yU
-       } = UU;
-       var QU;
-       return XU < cU.length ? null !== (QU = cU[XU]) && void 0 !== QU ? QU : null : null !== (zU = yU[XU - cU.length]) && void 0 !== zU ? zU : null
-     }
- 
- ... (122 more removed lines; see GitHub link above)
+     var AH = LH(186),
+       rH = LH(15),
+       SH = LH(1502),
+       hH = LH(1070),
+       tH = LH(7165),
+       zH = LH(5523),
+       CH = LH(41811),
+       EH = LH(7201);
+     const XH = ["apiVersion", "invalid", "errors"];
+     async function GH(HH, BH) {
+       const LH = await hH.userContextManager.getCurrentUserContext(),
+         GH = await SH.d.getShaderPackVersions(LH, [BH.packId]),
+         YH = function(HH, BH, LH) {
+           var AH;
+           if (void 0 === LH || "unlisted" === LH.status) return {
+             kind: "none"
+ ... (26 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L205-L293` → after: `L131-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L131-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L131-L148) · [Before (L205-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L205-L293)

```diff
-         });
-         if (wU.push({
-             str: "\n"
-           }), wU.push({
-             str: "\n"
-           }), UU.petInfo && null !== (qU = UU.tameInfo) && void 0 !== qU && qU.supportsFriendship) {
-           const XU = AU.e.getIconsFromFriendshipPoints(UU.petInfo.friendshipPoints);
-           for (const UU of XU) wU.push({
-             icon: UU,
-             style: {
-               fontSize: "1.5em"
-             }
-           });
-           wU.push({
-             str: "\n"
-           });
- ... (73 more removed lines; see GitHub link above)
+         }(HH, BH, (0, AH.d)(GH, BH.packId));
+       if ("update" === YH.kind && "landingPage" !== rH.c.get("gameState")) return !1;
+       const uH = "update" === YH.kind || "rename" === YH.kind,
+         QH = uH ? await (0, tH.loadPageShaderPackCompiler)() : null;
+       if (uH && null === QH) return console.warn(`Didn't follow shader pack ${BH.packId}'s listing: the shader pack compiler couldn't load`), !0;
+       const WH = await async function(HH, BH, LH, AH) {
+         switch (LH.kind) {
+           case "none":
+             return;
+           case "remove":
+             return null;
+           case "rename":
+             return {
+               ...HH, manifest: {
+                 ...HH.manifest,
+                 name: LH.name,
+ ... (2 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L295-L313` → after: `L150-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L150-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L150-L171) · [Before (L295-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L295-L313)

```diff
-             })
-           }
-           wU.push({
-             str: "\n"
-           }), wU.push({
-             icon: "Pixelated Heart",
-             style: {
-               fontSize: "1.5em",
-               color: AU.e.feedTextColours[AU.e.MobFoodType.Disliked]
-             }
-           }), wU.push({
-             str: " "
-           });
-           for (const zU of null !== (HU = UU.tameInfo.dislikedFoods) && void 0 !== HU ? HU : []) {
-             var HU;
-             wU.push({
- ... (3 more removed lines; see GitHub link above)
+             };
+           case "update": {
+             if (null === AH) return;
+             const {
+               sourceHash: rH,
+               name: SH,
+               ownerName: hH,
+               description: tH
+             } = LH, zH = await (0, CH.c)({
+               packId: BH.packId,
+               sourceHash: rH,
+               name: SH,
+               ownerName: hH,
+               description: tH
+             }, AH);
+             if ("loaded" === zH.kind && null !== zH.stored.validation) return zH.stored;
+ ... (6 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L315` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L173) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L315)

```diff
-             })
+             } : void 0
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L318-L352` → after: `L176-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L176-L177) · [Before (L318-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L318-L352)

```diff
-         wU.length > 0 ? (wU.shift(), wU.unshift(...(0, QU.tb)(CU))) : wU = (0, QU.tb)(CU)
-       }
-       return {
-         name: LU,
-         desc: wU,
-         fontStyle: null !== (RU = PU.customAttributes) && void 0 !== RU && RU.author ? "italic" : "normal"
-       }
-     }
- 
-     function gU(UU, XU, zU, cU) {
-       const yU = oU(UU, zU),
-         QU = oU(UU, cU);
-       if (!yU) return !1;
-       const AU = XU[yU.name].armourReduction,
-         FU = XU[QU.name].armourReduction;
-       if (FU === AU) {
- ... (19 more removed lines; see GitHub link above)
+       }(HH, BH, YH, QH);
+       return void 0 === WH || (await (0, EH.replaceShaderPack)(HH, WH, QH) ? (null !== WH && WH.files === HH.files || (0, EH.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L355-L358` → after: `L180-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L180-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L180-L195) · [Before (L355-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L355-L358)

```diff
-   9475: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => LU,
-       d: () => wU
+   7201: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       forgetShaderPackActiveHint: () => oH,
+       isOtherApiVersion: () => OH,
+       isShaderPackActive: () => PH,
+       isShaderPackChangePending: () => VH,
+       markShaderPackChangePending: () => UH,
+       pageShaderPackValidationVersion: () => bH,
+       reconcileStoredShaderPackHint: () => mH,
+       removeShaderPack: () => vH,
+       replaceShaderPack: () => WH,
+       saveShaderPack: () => QH,
+       shaderPackNeedsCheck: () => kH,
+       storedPackOutcome: () => TH,
+       storedShaderPackFiles: () => GH,
+       toStoredShaderPack: () => XH
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L360-L366` → after: `L197-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L197-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L197-L204) · [Before (L360-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L360-L366)

```diff
-     var cU = zU(61),
-       yU = zU(31),
-       QU = zU(2668),
-       AU = zU(3796);
-     const FU = 6,
-       oU = 4,
-       DU = ["HudMove-inventory", "HudLocked-inventory"];
+     var AH = LH(5531),
+       rH = LH(5523),
+       SH = LH(30),
+       hH = LH(3831),
+       tH = LH(7209),
+       zH = LH(7179);
+     const CH = "shaderPackChangePending";
+     let EH = null;
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L368-L382` → after: `L206-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L206-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L206-L213) · [Before (L368-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L368-L382)

```diff
-     function EU(UU) {
-       let {
-         left: XU,
-         right: zU,
-         height: cU,
-         rowTop: yU,
-         besideBottom: QU,
-         obstacles: AU
-       } = UU;
-       const DU = AU.filter((UU => UU.left < zU + FU && UU.right > XU - FU));
-       let EU = QU;
-       for (let FU = 0; FU <= DU.length; FU++) {
-         const UU = DU.filter((UU => UU.top < EU + oU && UU.bottom > EU - cU - oU));
-         if (0 === UU.length) break;
-         EU = Math.min(...UU.map((UU => UU.top))) - oU
+     function XH(HH, BH, LH) {
+       return {
+         manifest: HH.manifest,
+         files: (0, AH.t)(HH.files),
+         validation: BH,
+         ...LH && {
+           listing: LH
+         }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L388` → after: `L218-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L218-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L218-L221) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L388)

```diff
-       return Array.from(UU.children).filter((UU => !UU.classList.contains("HotBarRow")))
+       return Object.keys(HH.files).map((BH => ({
+         path: BH,
+         source: HH.files[BH]
+       })))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L392-L402` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L226-L227) · [Before (L392-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L392-L402)

```diff
-       return function(UU) {
-         const XU = [],
-           zU = (UU, cU) => {
-             const yU = UU.getBoundingClientRect();
-             if (yU.width > 0 && yU.height > 0) XU.push(UU);
-             else if (cU < 2)
-               for (const XU of Array.from(UU.children)) zU(XU, cU + 1)
-           };
-         for (const cU of UU) zU(cU, 0);
-         return XU
-       }(YU(UU).flatMap((UU => UU.classList.contains("AuraBarWrapper") ? [] : UU.classList.contains("BottomScreenStatBarList") ? Array.from(UU.children) : [UU])))
+       const BH = YH.then(HH);
+       return YH = BH.catch((() => {})), BH
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L406-L408` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L231) · [Before (L406-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L406-L408)

```diff
-       var zU;
-       const cU = null === (zU = UU.querySelector(":scope > .AuraBarWrapper")) || void 0 === zU ? void 0 : zU.getBoundingClientRect();
-       return (cU && cU.height > 0 ? cU.top : XU) - oU
+       return uH((() => MH(HH, BH)))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L412-L431` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L234-L235) · [Before (L412-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L412-L431)

```diff
-     function aU(UU, XU, zU, cU, yU) {
-       const QU = UU => UU.map((UU => UU.getBoundingClientRect())),
-         AU = EU({
-           ...zU,
-           obstacles: QU(zU.obstacles.filter((UU => !UU.matches(pU))))
-         }),
-         FU = XU.ownerDocument.defaultView,
-         oU = `${null===FU||void 0===FU?void 0:FU.innerWidth}x${null===FU||void 0===FU?void 0:FU.innerHeight}:${cU}:${Math.round(zU.rowTop)}`,
-         DU = UU.get(XU),
-         YU = (null === DU || void 0 === DU ? void 0 : DU.at) === oU ? (NU = DU.rise, IU = AU, null === NU ? IU : null === IU ? NU : Math.max(NU, IU)) : AU;
-       var NU, IU;
-       const aU = EU({
-         ...zU,
-         besideBottom: null === YU ? zU.besideBottom : zU.rowTop - YU,
-         obstacles: QU(zU.obstacles)
-       });
- ... (4 more removed lines; see GitHub link above)
+     function WH(HH, BH, LH) {
+       return uH((async () => JSON.stringify(await (0, tH.e)()) === JSON.stringify(HH) && (null === BH ? (await xH(), !0) : MH(BH, LH))))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L433-L435` → after: `L237-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L237-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L237-L242) · [Before (L433-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L433-L435)

```diff
- 
-     function tU(UU, XU, zU, cU) {
-       UU.classList.toggle(XU, null !== cU), null === cU ? UU.style.removeProperty(zU) : UU.style.setProperty(zU, `${cU}px`)
+     async function MH(HH, BH) {
+       const LH = await SH.c.setItem(tH.c, HH);
+       return LH && IH(HH, BH), LH
+     }
+     async function xH() {
+       await SH.c.removeItem(tH.c), SH.e.removeItem(hH.d)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L441-L450` → after: `L245-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L245-L246) · [Before (L441-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L441-L450)

```diff
-     function BU(UU, XU) {
-       const zU = UU.getBoundingClientRect();
-       if (0 === zU.width) return null;
-       const cU = [zU, ...Array.from(UU.children).filter((UU => !(UU => XU.contains(UU.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(UU))).map((UU => UU.getBoundingClientRect())).filter((UU => UU.width > 0))];
-       return {
-         left: Math.min(...cU.map((UU => UU.left))),
-         top: Math.min(...cU.map((UU => UU.top))),
-         right: Math.max(...cU.map((UU => UU.right))),
-         bottom: Math.max(...cU.map((UU => UU.bottom)))
-       }
+     function vH() {
+       return uH(xH)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L453-L461` → after: `L249-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L249-L250) · [Before (L453-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L453-L461)

```diff
-     function ZU(UU) {
-       let {
-         slotsLeft: XU,
-         slotsRight: zU,
-         width: cU,
-         zoneRight: yU
-       } = UU;
-       const QU = Math.max(0, Math.floor(zU - XU - cU));
-       return null === yU ? 0 : Math.min(QU, Math.max(0, Math.ceil(yU + FU - XU)))
+     function PH(HH, BH) {
+       return "active" === TH(HH, BH).kind
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L464` → after: `L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L253) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L464)

```diff
-     function RU(UU) {
+     function TH(HH, BH) {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L466-L469` → after: `L255-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L255-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L255-L275) · [Before (L466-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L466-L469)

```diff
-       const zU = UU.getBoundingClientRect();
-       if (0 === zU.width) return null;
-       const cU = null === (XU = UU.parentElement) || void 0 === XU ? void 0 : XU.getBoundingClientRect();
-       return cU && cU.width > 0 ? Math.min(zU.right, cU.left + cU.width * PU) : zU.right
+       return null === HH ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : OH(HH) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (LH = HH.validation) || void 0 === LH ? void 0 : LH.ok) || HH.validation.fromRecheck ? null === BH ? {
+         kind: "none",
+         reason: "noCompiler"
+       } : kH(HH, BH) ? {
+         kind: "blocked",
+         messageKey: "shaderPack:failedUnchecked"
+       } : HH.validation.ok ? {
+         kind: "active"
+       } : {
+         kind: "blocked",
+ ... (5 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L475-L496` → after: `L278-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L278-L279) · [Before (L475-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L475-L496)

```diff
-     function LU(UU) {
-       eU(UU) && eU(UU),
-         function(UU) {
-           var XU, zU;
-           const cU = UU.documentElement.classList;
-           if (!cU.contains("TouchHotbar") || !cU.contains("TouchHotbarKeysAbove") || DU.some((UU => cU.contains(UU))) || !1 !== (null === (XU = UU.defaultView) || void 0 === XU || null === (zU = XU.matchMedia) || void 0 === zU ? void 0 : zU.call(XU, GU).matches)) return;
-           const yU = UU.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
-             QU = null === yU || void 0 === yU ? void 0 : yU.closest(".BottomMiddleElements"),
-             AU = null === yU || void 0 === yU ? void 0 : yU.parentElement;
-           if (!yU || !QU || !AU || QU.classList.contains("TouchInventoryOpen") || yU.querySelector("[data-pressing]")) return;
-           const FU = BU(yU, cU),
-             oU = AU.getBoundingClientRect().top,
-             EU = FU && aU(gU, QU, {
-               left: FU.left,
-               right: FU.right,
-               height: FU.bottom - FU.top,
- ... (6 more removed lines; see GitHub link above)
+     function UH() {
+       SH.f.setItem(CH, performance.timeOrigin)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L499-L532` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L282-L283) · [Before (L499-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L499-L532)

```diff
-     function eU(UU) {
-       var XU, zU, cU, yU;
-       const QU = UU.documentElement.classList;
-       if (!QU.contains("TouchHotbar") || QU.contains("TouchHotbarKeysAbove") || DU.some((UU => QU.contains(UU))) || null === (XU = UU.defaultView) || void 0 === XU || null === (zU = XU.matchMedia) || void 0 === zU || !zU.call(XU, CU).matches) return !1;
-       const AU = UU.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
-         FU = null === AU || void 0 === AU ? void 0 : AU.parentElement,
-         oU = null === AU || void 0 === AU ? void 0 : AU.closest(".BottomMiddleElements"),
-         EU = null === oU || void 0 === oU ? void 0 : oU.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
-       if (!AU || !FU || !oU || !EU || oU.classList.contains("TouchInventoryOpen")) return !1;
-       const YU = AU.getBoundingClientRect();
-       if (0 === YU.width) return !1;
-       const pU = UU.querySelector(".JoystickZone"),
-         gU = EU.getBoundingClientRect(),
-         kU = FU.getBoundingClientRect().top,
-         GU = ZU({
-           slotsLeft: gU.left,
- ... (18 more removed lines; see GitHub link above)
+     function VH() {
+       return SH.f.getItem(CH) === performance.timeOrigin
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L536-L582` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L286-L287) · [Before (L536-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L536-L582)

```diff
-     function wU(UU, XU, zU) {
-       (0, cU.useLayoutEffect)((() => {
-         var XU;
-         const cU = null === (XU = UU.current) || void 0 === XU ? void 0 : XU.closest(".BottomMiddleElements");
-         if (!cU || zU) return;
-         const FU = new ResizeObserver((() => {
-             IU(!1)
-           })),
-           oU = () => {
-             FU.disconnect();
-             const UU = document.querySelector(".JoystickZone");
-             for (const XU of [UU, cU, cU.querySelector(".HotBarGameItemsContainer"), ...NU(cU)]) XU && FU.observe(XU)
-           };
-         let DU = null,
-           EU = !1;
-         const IU = UU => {
- ... (31 more removed lines; see GitHub link above)
+     function OH(HH) {
+       return !(0, rH.g)(HH.manifest.apiVersion)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L603-L635` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L291) · [Before (L603-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L603-L635)

```diff
-       let {
-         show: XU,
-         onClose: zU
-       } = UU;
-       const {
-         requestedGameNameWithVariation: cU,
-         lobbyName: yU,
-         shownLobbyName: QU
-       } = (0, EU.i)("connectedGame"), oU = (0, FU.d)(cU, yU, !1);
-       return DU.featureFlags.canUseInviteLinks && (0, NU.jsx)(AU.c, {
-         show: XU,
-         close: zU,
-         padShowsHud: !0,
-         togglePointerLock: !1,
-         globallyUniqueKey: "InviteLinkBox",
-         doGameplayStartStopOnShow: !0,
- ... (17 more removed lines; see GitHub link above)
+       return EH ??= HH.kN((0, zH.shaderPackTextures)()), EH
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L638` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L294) · [Before (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L638)

```diff
-     function pU() {
+     function kH(HH, BH) {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L640-L665` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L296) · [Before (L640-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L640-L665)

```diff
-       const {
-         t: XU
-       } = (0, oU.I)(), zU = null !== (UU = aU(DU.featureFlags.canUseInviteLinks)) && void 0 !== UU ? UU : "Loading Link...", [QU, AU] = (0, yU.useState)(0), [FU, EU] = (0, yU.useReducer)((UU => UU + 1), 0);
-       return (0, yU.useEffect)((() => {
-         const UU = setTimeout((() => {
-           EU()
-         }), 1100);
-         return () => {
-           clearTimeout(UU)
-         }
-       }), [QU]), DU.featureFlags.canUseInviteLinks && (0, NU.jsxs)("div", {
-         className: "InviteLinkInnerWrapper",
-         children: [(0, NU.jsx)("div", {
-           className: "InviteLinkInner",
-           children: zU
-         }), (0, NU.jsx)(cU.f, {
- ... (10 more removed lines; see GitHub link above)
+       return (null === (LH = HH.validation) || void 0 === LH ? void 0 : LH.headerVersion) !== bH(BH)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L669-L680` → after: `L300-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L300-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L300-L302) · [Before (L669-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L669-L680)

```diff
-       const [XU, zU] = (0, yU.useState)(null);
-       return (0, yU.useEffect)((() => {
-         if (!UU) return;
-         let XU = !0;
-         return (0, QU.v)().then((UU => {
-           XU && zU(UU)
-         })).catch((UU => {
-           console.error("Failed to get invite link:", UU)
-         })), () => {
-           XU = !1
-         }
-       }), [UU]), XU
+       return uH((async () => {
+         IH(await (0, tH.e)(!0), HH)
+       }))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L693-L698` → after: `L305-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L305-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L305-L308) · [Before (L693-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L693-L698)

```diff
-     function oU(UU) {
-       const XU = Math.floor(UU / 3600),
-         zU = Math.floor(UU % 3600 / 60),
-         cU = Math.floor(UU % 60),
-         yU = `${zU.toString().padStart(2,"0")}:${cU.toString().padStart(2,"0")}`;
-       return XU > 0 ? `${XU}:${yU}` : yU
+     function oH() {
+       return uH((async () => {
+         SH.e.removeItem(hH.d)
+       }))
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L736-L794` → after: `L311-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L311-L312) · [Before (L736-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L736-L794)

```diff
-     function oU(UU) {
-       let {
-         tier: XU,
-         state: zU,
-         progress: cU,
-         size: oU = "large"
-       } = UU;
-       const DU = yU()("SeasonPassTierNode", {
-         SeasonPassTierNodeSmall: "small" === oU,
-         SeasonPassTierNodeLarge: "large" === oU,
-         SeasonPassTierNodeReached: "reached" === zU,
-         SeasonPassTierNodeEarning: "earning" === zU
-       });
-       if ("earning" !== zU || "large" === oU) return (0, QU.jsx)("span", {
-         className: DU,
-         children: (0, QU.jsx)("span", {
- ... (43 more removed lines; see GitHub link above)
+     function IH(HH, BH) {
+       PH(HH, BH) ? SH.e.setItem(hH.d, !0) : SH.e.removeItem(hH.d)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L797-L799` → after: `L315-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L315-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L315-L318) · [Before (L797-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L797-L799)

```diff
-   34859: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => QU
+   7179: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       loadShaderPackTextures: () => hH,
+       shaderPackTextures: () => tH
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L801-L802` → after: `L320-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L320-L322) · [Before (L801-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L801-L802)

```diff
-     var cU = zU(4977),
-       yU = zU(4982);
+     var AH = LH(5531);
+     let rH = null,
+       SH = null;
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L804-L813` → after: `L324-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L324-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L324-L332) · [Before (L804-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L804-L813)

```diff
-     function QU(UU) {
-       let {
-         children: XU,
-         showing: zU,
-         globallyUniqueKey: QU,
-         alwaysMountChildren: AU = !1,
-         doGameplayStartStopOnShow: FU = !0,
-         keepsMovement: oU = !1
-       } = UU;
-       return (0, yU.c)(!0, zU, QU, oU), (0, cU.d)(FU, zU), zU || AU ? XU : null
+     function hH() {
+       return SH ??= Promise.all([LH.e(84), LH.e(206)]).then((() => LH(41802))).then((HH => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: BH,
+           textureNameToIndex: LH,
+           textureAnimationData: SH
+         } = HH;
+         return rH ??= (0, AH.f)(LH, SH, BH), rH
+       })), SH
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L823-L828` → after: `L335-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L335-L337) · [Before (L823-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L823-L828)

```diff
-     function QU(UU, XU) {
-       var zU;
-       const [QU, AU] = (0, cU.useState)(null !== (zU = yU.k.getItem(UU)) && void 0 !== zU ? zU : XU);
-       return [QU, XU => {
-         yU.k.setItem(UU, XU), AU(XU)
-       }]
+     function tH() {
+       if (null === rH) throw new Error("Shader pack textures read before loadShaderPackTextures");
+       return rH
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L831` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L340) · [Before (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L831)

```diff
-   9461: (UU, XU, zU) => {
+   7196: (HH, BH, LH) => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L839-L852` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L343) · [Before (L839-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L839-L852)

```diff
-       f: () => FU,
-       j: () => cU,
-       n: () => aU,
-       o: () => IU,
-       s: () => EU,
-       u: () => AU,
-       x: () => tU,
-       z: () => YU
-     });
-     const cU = UU => ({
-       left: UU.left,
-       top: UU.top,
-       right: UU.right,
-       bottom: UU.bottom
+       d: () => tH
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L854-L901` → after: `L345-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L345-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L345-L360) · [Before (L854-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L854-L901)

```diff
- 
-     function yU(UU) {
-       return {
-         x: (UU.left + UU.right) / 2,
-         y: (UU.top + UU.bottom) / 2
-       }
-     }
- 
-     function QU(UU) {
-       return 0 === UU.length ? null : UU.reduce(((UU, XU) => ({
-         left: Math.min(UU.left, XU.left),
-         top: Math.min(UU.top, XU.top),
-         right: Math.max(UU.right, XU.right),
-         bottom: Math.max(UU.bottom, XU.bottom)
-       })))
-     }
- ... (32 more removed lines; see GitHub link above)
+     var AH = LH(7201),
+       rH = LH(7179),
+       SH = LH(105);
+     const hH = 100;
+     async function tH(HH, BH) {
+       var LH;
+       let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (LH = navigator.gpu) && void 0 !== LH ? LH : null;
+       const hH = HH.YBH(BH, (0, rH.shaderPackTextures)());
+       if (hH.errors.length > 0) return CH(HH, hH.errors, hH.offInStrict);
+       const tH = await async function(HH) {
+         if (!HH) return null;
+         try {
+           const BH = await (0, SH.y)(HH);
+           return BH ? await BH.requestDevice() : null
+         } catch (BH) {
+           return console.error("Couldn't get a WebGPU device to validate the shader pack.", BH), null
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L903-L935` → after: `L362-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L362-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L362-L392) · [Before (L903-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L903-L935)

```diff
-         of XU) {
-         if (!FU(AU(EU, zU), UU)) continue;
-         const XU = yU(EU),
-           QU = Math.hypot(UU.x - XU.x, UU.y - XU.y);
-         QU < oU && (oU = QU, cU = DU)
-       }
-       return cU
-     }
- 
-     function DU(UU, XU, zU) {
-       return {
-         left: zU.left,
-         top: zU.top,
-         right: UU - zU.right,
-         bottom: XU - zU.bottom
-       }
- ... (17 more removed lines; see GitHub link above)
+       }(AH);
+       if (!tH) return null;
+       let zH = !1;
+       tH.lost.then((() => {
+         zH = !0
+       }));
+       try {
+         const BH = await Promise.all(hH.validationModules.map((BH => async function(HH, BH, LH) {
+           BH.pushErrorScope("validation");
+           const AH = BH.createShaderModule({
+               code: LH.code
+             }),
+             rH = BH.popErrorScope(),
+             {
+               messages: SH
+             } = await AH.getCompilationInfo(),
+ ... (15 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L938-L940` → after: `L395-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L395-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L395-L408) · [Before (L938-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L938-L940)

```diff
- 
-     function NU(UU, XU, zU, cU) {
-       return XU <= 0 || zU <= 0 ? 1 : Math.max(.05, Math.min(1, UU / XU, cU / zU))
+     async function zH(HH, BH) {
+       var LH;
+       if (!(0, AH.shaderPackNeedsCheck)(HH, BH) || (0, AH.isOtherApiVersion)(HH)) return HH;
+       const rH = await tH(BH, (0, AH.storedShaderPackFiles)(HH));
+       if (!rH) return HH;
+       const SH = !1 === (null === (LH = HH.validation) || void 0 === LH ? void 0 : LH.ok) && !HH.validation.fromRecheck,
+         hH = {
+           ...HH,
+           validation: SH ? rH : {
+             ...rH,
+             fromRecheck: !0
+           }
+         };
+       return await (0, AH.replaceShaderPack)(HH, hH, BH) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), hH
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L950-L951` → after: `L413-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L413-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L413-L417) · [Before (L950-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L950-L951)

```diff
-         x: zU(UU.left, UU.right, XU.left, XU.right),
-         y: zU(UU.top, UU.bottom, XU.top, XU.bottom)
+         headerVersion: (0, AH.pageShaderPackValidationVersion)(HH),
+         ok: 0 === BH.length,
+         errors: BH.slice(0, hH),
+         moreErrors: Math.max(0, BH.length - hH),
+         offInStrict: LH
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L977` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L421) · [Before (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L977)

```diff
-   9459: (UU, XU, zU) => {
+   7114: (HH, BH, LH) => {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L981-L983` → after: `L425-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L425-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L425-L432) · [Before (L981-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L981-L983)

```diff
-       G: () => NU,
-       J: () => YU,
-       e: () => FU,
+       H: () => hH,
+       L: () => AH,
+       M: () => GH,
+       P: () => EH,
+       Q: () => PH,
+       R: () => XH,
+       V: () => CH,
+       d: () => uH,
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L986-L989` → after: `L435-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L435-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L435-L437) · [Before (L986-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L986-L989)

```diff
-       l: () => kU,
-       p: () => oU,
-       q: () => pU,
-       t: () => EU,
+       m: () => YH,
+       o: () => vH,
+       s: () => UH,
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L991` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L439-L440) · [Before (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L991)

```diff
-       y: () => ZU
+       w: () => rH,
+       x: () => TH
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L993-L994` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L442) · [Before (L993-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L993-L994)

```diff
-     var cU = zU(9461),
-       yU = zU(2645);
+     const AH = ["forest", "desert", "water", "night", "cave"];
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L996-L1130` → after: `L444-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L444-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L444-L446) · [Before (L996-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L996-L1130)

```diff
-         sprint: "joystick",
-         jump: "cluster",
-         crouch: "cluster",
-         attack: "cluster",
-         use: "cluster",
-         extra: "cluster",
-         game: "cluster",
-         arrows: "hotbar",
-         inventory: "hotbar",
-         shop: "inventory",
-         bag: "inventory",
-         ...Object.fromEntries(yU.A.map((UU => [UU, "menu"])))
-       },
-       AU = UU => yU.w.filter((XU => QU[XU] === UU)),
-       FU = new Set(AU("cluster")),
-       oU = new Set(AU("inventory")),
- ... (119 more removed lines; see GitHub link above)
+         full: {
+           width: 3840,
+           height: 2160
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L1132-L1192` → after: `L448-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L448-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L448-L450) · [Before (L1132-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L1132-L1192)

```diff
-         YU = [...UU.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((UU => UU.cloneNode(!0)));
-       return {
-         faces: Object.keys(QU).length > 0 ? QU : null,
-         names: AU,
-         shop: EU(".TouchInventoryKey.ShopKey"),
-         bag: EU(".TouchInventoryKey.BagKey"),
-         sprint: EU(".TouchSprintHit"),
-         items: YU.length > 0 ? YU : null,
-         rowIcons: XU,
-         pinnedIcons: zU
-       }
-     }
- 
-     function DU(UU, XU) {
-       const zU = {};
-       for (const cU of [...AU(XU), "G"]) {
- ... (45 more removed lines; see GitHub link above)
+         large: {
+           width: 1920,
+           height: 1080
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L1194-L1273` → after: `L452-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L452-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L452-L460) · [Before (L1194-L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L1194-L1273)

```diff
-         NU = yU.q.get(UU),
-         IU = XU.filter((XU => {
-           let {
-             id: zU
-           } = XU;
-           return NU ? NU.has(zU) && !EU(zU) : zU === UU
-         })),
-         pU = new Set;
-       for (const yU of XU) yU.id === UU || null !== NU && void 0 !== NU && NU.has(yU.id) || pU.has(yU.id) || EU(yU.id) || IU.some((UU => {
-         let {
-           id: XU,
-           box: QU
-         } = UU;
-         return !oU(XU, yU.id, zU) && (YU(XU) || YU(yU.id)) && (0, cU.o)(QU, yU.box, FU)
-       })) && pU.add(yU.id);
-       return [...pU]
- ... (64 more removed lines; see GitHub link above)
+         thumb: {
+           width: 640,
+           height: 360
+         }
+       },
+       SH = ["popular", "updated", "newest"],
+       hH = 3,
+       tH = 32,
+       zH = 300;
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L1275-L1278` → after: `L462-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L462-L463) · [Before (L1275-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L1275-L1278)

```diff
-     function DU() {
-       (0, QU.f)(), cU.e.set({
-         screenshotMode: !0
-       })
+     function CH(HH, BH) {
+       return HH.slice(0, BH).replace(/[\uD800-\uDBFF]$/, "")
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L1281-L1345` → after: `L469-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L469-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L469-L472) · [Before (L1281-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L1281-L1345)

```diff
-     function EU() {
-       cU.e.set({
-         screenshotMode: !1
-       })
-     }
-     async function YU() {
-       const {
-         width: UU,
-         height: XU,
-         scale: zU
-       } = function(UU, XU, zU) {
-         const cU = Math.max(1, UU),
-           yU = Math.max(1, XU),
-           QU = Math.min(Math.max(1, zU), Math.sqrt(FU / (cU * yU)));
-         return {
-           width: Math.round(cU * QU),
- ... (49 more removed lines; see GitHub link above)
+     function YH(HH) {
+       const BH = HH,
+         LH = null === BH || void 0 === BH ? void 0 : BH.files;
+       return "number" === typeof(null === BH || void 0 === BH ? void 0 : BH.apiVersion) && "string" === typeof BH.name && (null === BH.author || "string" === typeof BH.author) && (void 0 === BH.keepCircleShadows || "boolean" === typeof BH.keepCircleShadows) && "object" === typeof … [truncated]
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L1347-L1391` → after: `L474-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L474-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L474-L475) · [Before (L1347-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L1347-L1391)

```diff
-     const oU = new class {
-         constructor() {
-           this.loadHost = FU, this.tools = AU
-         }
-         setHost(UU) {
-           this.tools = null === UU ? AU : UU.tools, this.loadHost = null === UU ? FU : async () => UU
-         }
-         supports(UU) {
-           return this.tools.has(UU)
-         }
-         async downloadScene(UU, XU) {
-           const zU = await this.loadHost();
-           await zU.downloadScene(UU, XU)
-         }
-         async setAmbientLightIntensity(UU) {
-           const XU = await this.loadHost();
- ... (29 more removed lines; see GitHub link above)
+     const uH = "Bloxdhub",
+       QH = "https://bloxdhub.com/shaders";
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L1394-L1398` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L478) · [Before (L1394-L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L1394-L1398)

```diff
-       var XU;
-       return {
-         ...AU.store,
-         yaw: AU.store.yaw + (null !== (XU = cU.d[UU].previewYaw) && void 0 !== XU ? XU : 0)
-       }
+       return `https://bloxdhub.com/workshop/${encodeURIComponent(HH)}`
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L1400-L1413` → after: `L480-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L480-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L480-L481) · [Before (L1400-L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L1400-L1413)

```diff
-     const QU = {
-         yaw: .61 * Math.PI,
-         pitch: Math.PI / 2.05,
-         radius: 30,
-         target: [0, 0, 0]
-       },
-       AU = {
-         player: QU,
-         store: {
-           ...QU,
-           radius: 33,
-           target: [0, 3.9, 0]
-         }
-       };
+     const MH = "Screenshot generation failed.",
+       xH = "Its screenshots couldn't be generated:";
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L1415-L1561` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L483) · [Before (L1415-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L1415-L1561)

```diff
-     function FU(UU, XU) {
-       UU instanceof Promise ? UU.then(XU).catch((UU => {
-         console.error("Couldn't open the preview", UU)
-       })) : XU(UU)
-     }
-     class oU {
-       constructor(UU) {
-         this.opened = null, this.view = null, this.size = null, this.closed = !1, FU(UU, (UU => {
-           this.closed ? UU.close() : (this.opened = UU, null !== this.size && UU.resize(this.size.width, this.size.height), null !== this.view && UU.show(this.view))
-         }))
-       }
-       show(UU) {
-         var XU;
-         this.view = UU, null === (XU = this.opened) || void 0 === XU || XU.show(UU)
-       }
-       resize(UU, XU) {
- ... (131 more removed lines; see GitHub link above)
+     function vH(HH) {
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L1563-L1564` → after: `L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L485) · [Before (L1563-L1564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L1563-L1564)

```diff
-       let XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (UU = await cU.g.getItem(yU, XU)) && void 0 !== UU ? UU : null
+       return HH === MH || null !== (BH = null === HH || void 0 === HH ? void 0 : HH.startsWith(xH)) && void 0 !== BH && BH
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L1644-L1648` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L489) · [Before (L1644-L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L1644-L1648)

```diff
-       return !UU.hidden && (XU || !UU.isRewardedAd)
-     }
- 
-     function yU(UU) {
-       return "object" === typeof UU ? UU.option : UU
+       return `shaderPacks/${HH}/${BH}.json`
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L1651-L1658` → after: `L492-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L492-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L492-L493) · [Before (L1651-L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L1651-L1658)

```diff
-     function QU(UU, XU) {
-       var zU;
-       if ("dropdown" === (null === (zU = UU.userInput) || void 0 === zU ? void 0 : zU.type) && "object" === typeof UU.userInput.dropdownOptions[0]) {
-         for (const zU of UU.userInput.dropdownOptions)
-           if (yU(zU) === XU) return "object" === typeof zU ? zU.cost : UU.cost;
-         console.error("Didn't find matching option for dropdown item. Item:", UU, "input:", XU)
-       }
-       return UU.cost
+     function TH(HH, BH, LH, AH) {
+       return null === BH.renderId ? UH(HH, BH.baselineVersion, LH, AH) : `${HH}/${function(HH,BH,LH,AH){return`shaderPacks/${HH}/${BH}/${LH}-${AH}.webp`}(BH.packId,BH.renderId,LH,AH)}`
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L1661-L1664` → after: `L496-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/145.js#L496-L497) · [Before (L1661-L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/145.js#L1661-L1664)

```diff
-     function AU(UU, XU, zU) {
-       var cU;
-       const yU = null !== (cU = zU.excludedPlayers) && void 0 !== cU ? cU : [XU];
-       return UU.filter((UU => !yU.includes(UU)))
+     function UH(HH, BH, LH, AH) {
+       return `${HH}/${function(HH,BH,LH){return`shaderPacks/baseline/${HH}/${BH}-${LH}.webp`}(BH,LH,AH)}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/146.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/146.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af)

#### 1. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L2)

```diff
- export const ids = [146, 150, 151];
+ export const ids = [146];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L4)

```diff
-   7198: (UU, XU, zU) => {
+   45234: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L6)

```diff
-       d: () => AU
+       startHarnessShaderPack: () => XH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L8-L49` → after: `L8-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L8-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L8-L86) · [Before (L8-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L8-L49)

```diff
-     var cU = zU(5597),
-       yU = zU(1305);
-     const QU = {
-       strict: "shaderPack:variantStrict",
-       nonStrict: "shaderPack:variantNonStrict",
-       terrain: "shaderPack:variantTerrain",
-       liquid: "shaderPack:variantLiquid",
-       model: "shaderPack:variantModel"
-     };
- 
-     function AU(UU) {
-       let {
-         diagnostics: XU,
-         more: zU = 0,
-         t: AU
-       } = UU;
- ... (26 more removed lines; see GitHub link above)
+     var AH = LH(7114),
+       rH = LH(5531),
+       SH = LH(7189),
+       hH = LH(7165),
+       tH = LH(5523),
+       zH = LH(40182),
+       CH = LH(7179),
+       EH = LH(7196);
+     async function XH(HH, BH) {
+       const {
+         stored: LH,
+         info: XH
+       } = await async function(HH, BH) {
+         const LH = await async function(HH) {
+           const BH = await fetch(HH);
+           if (!BH.ok) throw new Error(`Couldn't fetch the shader pack at ${HH}: HTTP ${BH.status}`);
+ ... (63 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L52-L263` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L89) · [Before (L52-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L52-L263)

```diff
-   7203: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => RU,
-       f: () => PU
-     });
-     var cU = zU(61),
-       yU = zU(1106),
-       QU = zU.n(yU),
-       AU = zU(5490),
-       FU = zU(1384),
-       oU = zU(1390),
-       DU = zU(1193),
-       EU = zU(5608),
-       YU = zU(5603),
-       NU = zU(3528);
-     const IU = 33554432,
- ... (196 more removed lines; see GitHub link above)
+   7201: (HH, BH, LH) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L280-L285` → after: `L106-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L106-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L106-L111) · [Before (L280-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L280-L285)

```diff
-     var cU = zU(5608),
-       yU = zU(5603),
-       QU = zU(42),
-       AU = zU(3849),
-       FU = zU(7253),
-       oU = zU(7219);
+     var AH = LH(5531),
+       rH = LH(5523),
+       SH = LH(30),
+       hH = LH(3831),
+       tH = LH(7209),
+       zH = LH(7179);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L292` → after: `L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L118) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L292)

```diff
-         files: (0, cU.u)(UU.files),
+         files: (0, AH.t)(HH.files),
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L318` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L144) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L318)

```diff
-       return pU((async () => JSON.stringify(await (0, FU.f)()) === JSON.stringify(UU) && (null === XU ? (await kU(), !0) : gU(XU, zU))))
+       return uH((async () => JSON.stringify(await (0, tH.e)()) === JSON.stringify(HH) && (null === BH ? (await xH(), !0) : MH(BH, LH))))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L321` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L147) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L321)

```diff
-       const zU = await QU.g.setItem(FU.e, UU);
+       const LH = await SH.c.setItem(tH.c, HH);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L325` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L151) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L325)

```diff
-       await QU.g.removeItem(FU.e), QU.k.removeItem(AU.b)
+       await SH.c.removeItem(tH.c), SH.e.removeItem(hH.d)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L362` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L188) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L362)

```diff
-       QU.n.setItem(DU, performance.timeOrigin)
+       SH.f.setItem(CH, performance.timeOrigin)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L366-L374` → after: `L192-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L192-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L192-L200) · [Before (L366-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L366-L374)

```diff
-       return QU.n.getItem(DU) === performance.timeOrigin
-     }
- 
-     function WU(UU) {
-       return !(0, yU.i)(UU.manifest.apiVersion)
-     }
- 
-     function dU(UU) {
-       return EU ??= UU.mq((0, oU.shaderPackTextures)()), EU
+       return SH.f.getItem(CH) === performance.timeOrigin
+     }
+ 
+     function OH(HH) {
+       return !(0, rH.g)(HH.manifest.apiVersion)
+     }
+ 
+     function bH(HH) {
+       return EH ??= HH.kN((0, zH.shaderPackTextures)()), EH
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L384` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L210) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L384)

```diff
-         wU(await (0, FU.f)(!0), UU)
+         IH(await (0, tH.e)(!0), HH)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L390` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L216) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L390)

```diff
-         QU.k.removeItem(AU.b)
+         SH.e.removeItem(hH.d)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L395` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L221) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L395)

```diff
-       BU(UU, XU) ? QU.k.setItem(AU.b, !0) : QU.k.removeItem(AU.b)
+       PH(HH, BH) ? SH.e.setItem(hH.d, !0) : SH.e.removeItem(hH.d)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L398-L401` → after: `L224-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L224-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L224-L227) · [Before (L398-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L398-L401)

```diff
-   7219: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       loadShaderPackTextures: () => AU,
-       shaderPackTextures: () => FU
+   7196: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => zH,
+       d: () => tH
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L403-L430` → after: `L229-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L229-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L229-L231) · [Before (L403-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L403-L430)

```diff
-     var cU = zU(5608);
-     let yU = null,
-       QU = null;
- 
-     function AU() {
-       return QU ??= Promise.all([zU.e(84), zU.e(202)]).then((() => zU(41573))).then((UU => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: XU,
-           textureNameToIndex: zU,
-           textureAnimationData: QU
-         } = UU;
-         return yU ??= (0, cU.k)(zU, QU, XU), yU
-       })), QU
-     }
- 
-     function FU() {
- ... (12 more removed lines; see GitHub link above)
+     var AH = LH(7201),
+       rH = LH(7179),
+       SH = LH(105);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L434-L435` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L235-L236) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L434-L435)

```diff
-       let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (zU = navigator.gpu) && void 0 !== zU ? zU : null;
-       const AU = UU.bUU(XU, (0, yU.shaderPackTextures)());
+       let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (LH = navigator.gpu) && void 0 !== LH ? LH : null;
+       const hH = HH.YBH(BH, (0, rH.shaderPackTextures)());
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L440` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L241) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L440)

```diff
-           const XU = await (0, QU.q)(UU);
+           const BH = await (0, SH.y)(HH);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L471` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L272) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L471)

```diff
-         return oU ? null : DU(UU, UU.scU(XU.flat()), AU.offInStrict)
+         return zH ? null : CH(HH, HH.rrH(BH.flat()), hH.offInStrict)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L486` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/146.js#L287) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/146.js#L486)

```diff
-           validation: QU ? yU : {
+           validation: SH ? rH : {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/147.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/147.js` (70 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39)

#### 1. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L2)

```diff
- export const ids = [147];
+ export const ids = [147, 214];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L4-L23` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L4-L6) · [Before (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L4-L23)

```diff
-   7209: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       loadPageShaderPackCompiler: () => IX
-     });
-     var cU = {};
-     zU.r(cU), zU.d(cU, {
-       hyU: () => yU,
-       bUU: () => QU,
-       default: () => mU,
-       UQU: () => AU,
-       XQU: () => FU,
-       initSync: () => nU,
-       HD: () => oU,
-       scU: () => DU,
-       zQU: () => EU,
-       cQU: () => YU,
- ... (4 more removed lines; see GitHub link above)
+   34993: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => SH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L25-L67` → after: `L8-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L8-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L8-L25) · [Before (L25-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L25-L67)

```diff
-     class yU {
-       static __wrap(UU) {
-         const XU = Object.create(yU.prototype);
-         return XU.__wbg_ptr = UU, gU.register(XU, XU.__wbg_ptr, XU), XU
-       }
-       __destroy_into_raw() {
-         const UU = this.__wbg_ptr;
-         return this.__wbg_ptr = 0, gU.unregister(this), UU
-       }
-       free() {
-         const UU = this.__destroy_into_raw();
-         vU.Hdv7(UU, 0)
-       }
-       get AQU() {
-         let UU, XU;
-         try {
- ... (27 more removed lines; see GitHub link above)
+     var AH = LH(317),
+       rH = LH(34996);
+ 
+     function SH(HH, BH, LH) {
+       const SH = Object.entries(BH).sort(((HH, BH) => BH[1] - HH[1])),
+         hH = (0, AH.pb)(HH);
+       hH.push(HH ? "\n\n" : "\n");
+       for (const [rH, uH] of SH) {
+         var tH, zH, CH;
+         const HH = null !== (tH = null === LH || void 0 === LH || null === (zH = LH[rH]) || void 0 === zH ? void 0 : zH.icon) && void 0 !== tH ? tH : `${rH} Enchantment`;
+         hH.push({
+           icon: HH,
+           style: {
+             fontSize: "1.5rem"
+           }
+         }), hH.push({
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L69-L81` → after: `L27-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L27-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L27-L49) · [Before (L69-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L69-L81)

```diff
-       get moduleCodes() {
-         const UU = vU.cg1e(this.__wbg_ptr);
-         var XU = GU(UU[0], UU[1]);
-         return vU.sejp(UU[0], 4 * UU[1], 4), XU
-       }
-       get FQU() {
-         let UU, XU;
-         try {
-           const zU = vU.STbB(this.__wbg_ptr);
-           return UU = zU[0], XU = zU[1], PU(zU[0], zU[1])
-         } finally {
-           vU.sejp(UU, XU, 1)
-         }
+       hH.push({
+         str: "\n"
+       });
+       for (const [AH, uH] of SH) {
+         var EH, XH, GH, YH;
+         const HH = null !== (EH = null === LH || void 0 === LH || null === (XH = LH[AH]) || void 0 === XH ? void 0 : XH.icon) && void 0 !== EH ? EH : `${AH} Enchantment`,
+           BH = null !== (GH = null === LH || void 0 === LH || null === (YH = LH[AH]) || void 0 === YH ? void 0 : YH.description) && void 0 !== GH ? GH : (0, rH.k)(AH);
+         hH.push({
+           icon: HH,
+           style: {
+             fontSize: "1.25rem",
+             opacity: .75
+           }
+         }), hH.push({
+           str: BH,
+           style: {
+ ... (7 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L83-L122` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L51) · [Before (L83-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L83-L122)

```diff
-       get reads() {
-         const UU = vU.fqiE(this.__wbg_ptr);
-         var XU = GU(UU[0], UU[1]);
-         return vU.sejp(UU[0], 4 * UU[1], 4), XU
-       }
-       get validationModuleCodes() {
-         const UU = vU.MHlb(this.__wbg_ptr);
-         var XU = GU(UU[0], UU[1]);
-         return vU.sejp(UU[0], 4 * UU[1], 4), XU
-       }
-       get validationModuleKeys() {
-         const UU = vU.zhQ5(this.__wbg_ptr);
-         var XU = BU(UU[0], UU[1]).slice();
-         return vU.sejp(UU[0], 1 * UU[1], 1), XU
-       }
-       get variantFlags() {
- ... (24 more removed lines; see GitHub link above)
+       return hH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L125-L128` → after: `L72-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L72-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L72-L79) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L125-L128)

```diff
-     function AU() {
-       const UU = vU.leKu();
-       var XU = GU(UU[0], UU[1]);
-       return vU.sejp(UU[0], 4 * UU[1], 4), XU
+     function zH(HH, BH) {
+       var LH;
+       let {
+         player: AH,
+         chestOrCreative: rH
+       } = HH;
+       var SH;
+       return BH < AH.length ? null !== (SH = AH[BH]) && void 0 !== SH ? SH : null : null !== (LH = rH[BH - AH.length]) && void 0 !== LH ? LH : null
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L131-L134` → after: `L82-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L82-L84) · [Before (L131-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L131-L134)

```diff
-     function FU() {
-       const UU = vU.SQ1r();
-       var XU = GU(UU[0], UU[1]);
-       return vU.sejp(UU[0], 4 * UU[1], 4), XU
+     function CH(HH) {
+       var BH;
+       return null !== (BH = HH.amount) && void 0 !== BH ? BH : 0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L137-L138` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L87-L88) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L137-L138)

```diff
-     function oU() {
-       vU.muib()
+     function EH(HH) {
+       return 0 === HH.button || void 0 === HH.button
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L141-L163` → after: `L91-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L91-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L91-L323) · [Before (L141-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L141-L163)

```diff
-     function DU(UU, XU, zU, cU, yU) {
-       let QU, AU;
-       try {
-         const DU = OU(UU, vU.qTIs),
-           EU = VU,
-           YU = qU(XU, vU.qTIs),
-           NU = VU,
-           IU = OU(zU, vU.qTIs),
-           pU = VU,
-           aU = qU(cU, vU.qTIs),
-           tU = VU,
-           gU = function(UU, XU) {
-             const zU = XU(1 * UU.length, 1) >>> 0;
-             return LU().set(UU, zU / 1), VU = UU.length, zU
-           }(yU, vU.qTIs),
-           kU = VU,
- ... (7 more removed lines; see GitHub link above)
+     function XH(HH) {
+       return !!HH.shiftKey
+     }
+ 
+     function GH(HH) {
+       return "touches" in HH || "touch" === HH.pointerType || "pen" === HH.pointerType
+     }
+     const YH = new Set,
+       uH = 50;
+ 
+     function QH(HH, BH) {
+       var LH;
+       const AH = null === (LH = HH[BH]) || void 0 === LH ? void 0 : LH.displayName;
+       return (0, rH.M)(AH) ? "string" !== typeof BH ? "" : (!YH.has(BH) && YH.size < uH && (YH.add(BH), console.warn(`No item called "${BH}", so its hover shows the name as given`)), BH) : AH
+     }
+ 
+ ... (217 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L167-L173` → after: `L327-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L327-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L327-L337) · [Before (L167-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L167-L173)

```diff
-     function EU() {
-       let UU, XU;
-       try {
-         const zU = vU.NzsQ();
-         return UU = zU[0], XU = zU[1], PU(zU[0], zU[1])
-       } finally {
-         vU.sejp(UU, XU, 1)
+     function MH(HH, BH, LH, AH) {
+       const rH = zH(HH, LH),
+         SH = zH(HH, AH);
+       if (!rH) return !1;
+       const hH = BH[rH.name].armourReduction,
+         tH = BH[SH.name].armourReduction;
+       if (tH === hH) {
+         var CH, EH, XH, GH;
+         const HH = null !== (CH = null === (EH = rH.attributes.customAttributes) || void 0 === EH ? void 0 : EH.enchantmentTier) && void 0 !== CH ? CH : "Tier 0",
+           BH = null !== (XH = null === (GH = SH.attributes.customAttributes) || void 0 === GH ? void 0 : GH.enchantmentTier) && void 0 !== XH ? XH : "Tier 0";
+         return parseInt(HH.replace("Tier ", "")) >= parseInt(BH.replace("Tier ", ""))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L178-L186` → after: `L343-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L343-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L343-L351) · [Before (L178-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L178-L186)

```diff
-       let XU, zU;
-       try {
-         const QU = vU.LLUC(UU);
-         var cU = QU[0],
-           yU = QU[1];
-         if (QU[3]) throw cU = 0, yU = 0, SU(QU[2]);
-         return XU = cU, zU = yU, PU(cU, yU)
-       } finally {
-         vU.sejp(XU, zU, 1)
+       let BH;
+       if ("number" === typeof HH) {
+         const LH = document.querySelector(`[data-inven-idx="${HH}"]`);
+         if (!LH) return null;
+         BH = LH.getBoundingClientRect()
+       } else BH = HH.getBoundingClientRect();
+       return {
+         x: BH.left + BH.width / 2,
+         y: BH.top + BH.height / 2
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L190-L191` → after: `L368-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L368-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L368-L384) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L190-L191)

```diff
-     function NU() {
-       return vU.NkPf() >>> 0
+     function EH(HH) {
+       let {
+         left: BH,
+         right: LH,
+         height: AH,
+         rowTop: rH,
+         besideBottom: SH,
+         obstacles: hH
+       } = HH;
+       const CH = hH.filter((HH => HH.left < LH + tH && HH.right > BH - tH));
+       let EH = SH;
+       for (let tH = 0; tH <= CH.length; tH++) {
+         const HH = CH.filter((HH => HH.top < EH + zH && HH.bottom > EH - AH - zH));
+         if (0 === HH.length) break;
+         EH = Math.min(...HH.map((HH => HH.top))) - zH
+       }
+ ... (1 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L194-L201` → after: `L387-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L387-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L387-L402) · [Before (L194-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L194-L201)

```diff
-     function IU() {
-       let UU, XU;
-       try {
-         const zU = vU.snxa();
-         return UU = zU[0], XU = zU[1], PU(zU[0], zU[1])
-       } finally {
-         vU.sejp(UU, XU, 1)
-       }
+     function XH(HH) {
+       return Array.from(HH.children).filter((HH => !HH.classList.contains("HotBarRow")))
+     }
+ 
+     function GH(HH) {
+       return function(HH) {
+         const BH = [],
+           LH = (HH, AH) => {
+             const rH = HH.getBoundingClientRect();
+             if (rH.width > 0 && rH.height > 0) BH.push(HH);
+             else if (AH < 2)
+               for (const BH of Array.from(HH.children)) LH(BH, AH + 1)
+           };
+         for (const AH of HH) LH(AH, 0);
+         return BH
+       }(XH(HH).flatMap((HH => HH.classList.contains("AuraBarWrapper") ? [] : HH.classList.contains("BottomScreenStatBarList") ? Array.from(HH.children) : [HH])))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L205-L218` → after: `L406-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L406-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L406-L408) · [Before (L205-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L205-L218)

```diff
-       let zU, cU;
-       try {
-         const AU = OU(UU, vU.qTIs),
-           FU = VU,
-           oU = qU(XU, vU.qTIs),
-           DU = VU,
-           EU = vU.oaTN(AU, FU, oU, DU);
-         var yU = EU[0],
-           QU = EU[1];
-         if (EU[3]) throw yU = 0, QU = 0, SU(EU[2]);
-         return zU = yU, cU = QU, PU(yU, QU)
-       } finally {
-         vU.sejp(zU, cU, 1)
-       }
+       var LH;
+       const AH = null === (LH = HH.querySelector(":scope > .AuraBarWrapper")) || void 0 === LH ? void 0 : LH.getBoundingClientRect();
+       return (AH && AH.height > 0 ? AH.top : BH) - zH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L221-L231` → after: `L412-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L412-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L412-L431) · [Before (L221-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L221-L231)

```diff
-     function aU(UU) {
-       let XU, zU;
-       try {
-         const QU = vU.gpq4(kU(UU));
-         var cU = QU[0],
-           yU = QU[1];
-         if (QU[3]) throw cU = 0, yU = 0, SU(QU[2]);
-         return XU = cU, zU = yU, PU(cU, yU)
-       } finally {
-         vU.sejp(XU, zU, 1)
-       }
+     function QH(HH, BH, LH, AH, rH) {
+       const SH = HH => HH.map((HH => HH.getBoundingClientRect())),
+         hH = EH({
+           ...LH,
+           obstacles: SH(LH.obstacles.filter((HH => !HH.matches(uH))))
+         }),
+         tH = BH.ownerDocument.defaultView,
+         zH = `${null===tH||void 0===tH?void 0:tH.innerWidth}x${null===tH||void 0===tH?void 0:tH.innerHeight}:${AH}:${Math.round(LH.rowTop)}`,
+         CH = HH.get(BH),
+         XH = (null === CH || void 0 === CH ? void 0 : CH.at) === zH ? (GH = CH.rise, YH = hH, null === GH ? YH : null === YH ? GH : Math.max(GH, YH)) : hH;
+       var GH, YH;
+       const QH = EH({
+         ...LH,
+         besideBottom: null === XH ? LH.besideBottom : LH.rowTop - XH,
+         obstacles: SH(LH.obstacles)
+       });
+ ... (4 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L234` → after: `L434-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L434-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L434-L444) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L234)

```diff
-     function tU() {
+     function WH(HH, BH, LH, AH) {
+       HH.classList.toggle(BH, null !== AH), null === AH ? HH.style.removeProperty(LH) : HH.style.setProperty(LH, `${AH}px`)
+     }
+     const MH = new WeakMap,
+       xH = new WeakMap,
+       vH = "(orientation: portrait) and (max-width: 600px)";
+ 
+     function PH(HH, BH) {
+       const LH = HH.getBoundingClientRect();
+       if (0 === LH.width) return null;
+       const AH = [LH, ...Array.from(HH.children).filter((HH => !(HH => BH.contains(HH.classList.contains("ShopKey") ? "HudMove-shop" : "HudMove-bag"))(HH))).map((HH => HH.getBoundingClientRect())).filter((HH => HH.width > 0))];
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L236-L294` → after: `L446-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L446-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L446-L449) · [Before (L236-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L236-L294)

```diff
-         __proto__: null,
-         CIXG: {
-           __proto__: null,
-           mrwc: function(UU, XU) {
-             return kU(Error(PU(UU, XU)))
-           },
-           nzwD: function(UU) {
-             return null === eU(UU)
-           },
-           MdWd: function(UU) {
-             return "string" === typeof eU(UU)
-           },
-           rh4o: function(UU, XU) {
-             const zU = eU(XU),
-               cU = "string" === typeof zU ? zU : void 0;
-             var yU, QU = void 0 === (yU = cU) || null === yU ? 0 : function(UU, XU, zU) {
- ... (43 more removed lines; see GitHub link above)
+         left: Math.min(...AH.map((HH => HH.left))),
+         top: Math.min(...AH.map((HH => HH.top))),
+         right: Math.max(...AH.map((HH => HH.right))),
+         bottom: Math.max(...AH.map((HH => HH.bottom)))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L304-L306` → after: `L454-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L454-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L454-L461) · [Before (L304-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L304-L306)

```diff
-       wU === CU.length && CU.push(CU.length + 1);
-       const XU = wU;
-       return wU = CU[XU], CU[XU] = UU, XU
+       let {
+         slotsLeft: BH,
+         slotsRight: LH,
+         width: AH,
+         zoneRight: rH
+       } = HH;
+       const SH = Math.max(0, Math.floor(LH - BH - AH));
+       return null === rH ? 0 : Math.min(SH, Math.max(0, Math.ceil(rH + tH - BH)))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L309-L314` → after: `L464-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L464-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L464-L469) · [Before (L309-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L309-L314)

```diff
-     function GU(UU, XU) {
-       UU >>>= 0;
-       const zU = RU(),
-         cU = [];
-       for (let yU = UU; yU < UU + 4 * XU; yU += 4) cU.push(SU(zU.getUint32(yU, !0)));
-       return cU
+     function UH(HH) {
+       var BH;
+       const LH = HH.getBoundingClientRect();
+       if (0 === LH.width) return null;
+       const AH = null === (BH = HH.parentElement) || void 0 === BH ? void 0 : BH.getBoundingClientRect();
+       return AH && AH.width > 0 ? Math.min(LH.right, AH.left + AH.width * VH) : LH.right
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L317-L318` → after: `L475-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L475-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L475-L496) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L317-L318)

```diff
-     function BU(UU, XU) {
-       return UU >>>= 0, LU().subarray(UU / 1, UU / 1 + XU)
+     function kH(HH) {
+       mH(HH) && mH(HH),
+         function(HH) {
+           var BH, LH;
+           const AH = HH.documentElement.classList;
+           if (!AH.contains("TouchHotbar") || !AH.contains("TouchHotbarKeysAbove") || CH.some((HH => AH.contains(HH))) || !1 !== (null === (BH = HH.defaultView) || void 0 === BH || null === (LH = BH.matchMedia) || void 0 === LH ? void 0 : LH.call(BH, vH).matches)) return;
+           const rH = HH.querySelector(".HotBarContainer.Touch.KeysAbove .TouchInventoryKeys"),
+             SH = null === rH || void 0 === rH ? void 0 : rH.closest(".BottomMiddleElements"),
+             hH = null === rH || void 0 === rH ? void 0 : rH.parentElement;
+           if (!rH || !SH || !hH || SH.classList.contains("TouchInventoryOpen") || rH.querySelector("[data-pressing]")) return;
+           const tH = PH(rH, AH),
+             zH = hH.getBoundingClientRect().top,
+             EH = tH && QH(MH, SH, {
+               left: tH.left,
+               right: tH.right,
+               height: tH.bottom - tH.top,
+ ... (6 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L322-L323` → after: `L499-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L499-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L499-L532) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L322-L323)

```diff
-     function RU() {
-       return null !== ZU && ZU.buffer === vU.memory.buffer || (ZU = new DataView(vU.memory.buffer)), ZU
+     function mH(HH) {
+       var BH, LH, AH, rH;
+       const SH = HH.documentElement.classList;
+       if (!SH.contains("TouchHotbar") || SH.contains("TouchHotbarKeysAbove") || CH.some((HH => SH.contains(HH))) || null === (BH = HH.defaultView) || void 0 === BH || null === (LH = BH.matchMedia) || void 0 === LH || !LH.call(BH, oH).matches) return !1;
+       const hH = HH.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
+         tH = null === hH || void 0 === hH ? void 0 : hH.parentElement,
+         zH = null === hH || void 0 === hH ? void 0 : hH.closest(".BottomMiddleElements"),
+         EH = null === zH || void 0 === zH ? void 0 : zH.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
+       if (!hH || !tH || !zH || !EH || zH.classList.contains("TouchInventoryOpen")) return !1;
+       const XH = hH.getBoundingClientRect();
+       if (0 === XH.width) return !1;
+       const uH = HH.querySelector(".JoystickZone"),
+         MH = EH.getBoundingClientRect(),
+         xH = tH.getBoundingClientRect().top,
+         vH = TH({
+           slotsLeft: MH.left,
+ ... (18 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L326-L333` → after: `L536-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L536-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L536-L634) · [Before (L326-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L326-L333)

```diff
-     function PU(UU, XU) {
-       return function(UU, XU) {
-         fU += XU, fU >= uU && (rU = new TextDecoder("utf-8", {
-           ignoreBOM: !0,
-           fatal: !0
-         }), rU.decode(), fU = XU);
-         return rU.decode(LU().subarray(UU, UU + XU))
-       }(UU >>> 0, XU)
+     function IH(HH, BH, LH) {
+       (0, AH.useLayoutEffect)((() => {
+         var BH;
+         const AH = null === (BH = HH.current) || void 0 === BH ? void 0 : BH.closest(".BottomMiddleElements");
+         if (!AH || LH) return;
+         const tH = new ResizeObserver((() => {
+             YH(!1)
+           })),
+           zH = () => {
+             tH.disconnect();
+             const HH = document.querySelector(".JoystickZone");
+             for (const BH of [HH, AH, AH.querySelector(".HotBarGameItemsContainer"), ...GH(AH)]) BH && tH.observe(BH)
+           };
+         let CH = null,
+           EH = !1;
+         const YH = HH => {
+ ... (83 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L339` → after: `L638-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L638-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L638-L642) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L339)

```diff
-       return null !== dU && 0 !== dU.byteLength || (dU = new Uint8Array(vU.memory.buffer)), dU
+       var HH;
+       const BH = null !== (HH = uH(zH.featureFlags.canUseInviteLinks)) && void 0 !== HH ? HH : "Loading Link...";
+       return zH.featureFlags.canUseInviteLinks && (0, XH.jsx)(rH.e, {
+         text: BH
+       })
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L343` → after: `L646-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L646-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L646-L657) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L343)

```diff
-       return CU[UU]
+       const [BH, LH] = (0, AH.useState)(null);
+       return (0, AH.useEffect)((() => {
+         if (!HH) return;
+         let BH = !0;
+         return (0, SH.x)().then((HH => {
+           BH && LH(HH)
+         })).catch((HH => {
+           console.error("Failed to get invite link:", HH)
+         })), () => {
+           BH = !1
+         }
+       }), [HH]), BH
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L345-L347` → after: `L659-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L659-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L659-L668) · [Before (L345-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L345-L347)

```diff
-     let CU = new Array(1024).fill(void 0);
-     CU.push(void 0, null, !0, !1);
-     let wU = CU.length;
+   },
+   34977: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => CH
+     });
+     var AH = LH(45),
+       rH = LH(1038),
+       SH = LH.n(rH),
+       hH = LH(2051),
+       tH = LH(1225);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L349-L351` → after: `L670-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L670-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L670-L675) · [Before (L349-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L349-L351)

```diff
-     function qU(UU, XU) {
-       const zU = XU(4 * UU.length, 4) >>> 0;
-       return (null !== WU && 0 !== WU.byteLength || (WU = new Uint32Array(vU.memory.buffer)), WU).set(UU, zU / 4), VU = UU.length, zU
+     function zH(HH) {
+       const BH = Math.floor(HH / 3600),
+         LH = Math.floor(HH % 3600 / 60),
+         AH = Math.floor(HH % 60),
+         rH = `${LH.toString().padStart(2,"0")}:${AH.toString().padStart(2,"0")}`;
+       return BH > 0 ? `${BH}:${rH}` : rH
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L354-L358` → after: `L713-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L713-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L713-L771) · [Before (L354-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L354-L358)

```diff
-     function OU(UU, XU) {
-       const zU = XU(4 * UU.length, 4) >>> 0,
-         cU = RU();
-       for (let yU = 0; yU < UU.length; yU++) cU.setUint32(zU + 4 * yU, kU(UU[yU]), !0);
-       return VU = UU.length, zU
+     function zH(HH) {
+       let {
+         tier: BH,
+         state: LH,
+         progress: AH,
+         size: zH = "large"
+       } = HH;
+       const CH = rH()("SeasonPassTierNode", {
+         SeasonPassTierNodeSmall: "small" === zH,
+         SeasonPassTierNodeLarge: "large" === zH,
+         SeasonPassTierNodeReached: "reached" === LH,
+         SeasonPassTierNodeEarning: "earning" === LH
+       });
+       if ("earning" !== LH || "large" === zH) return (0, SH.jsx)("span", {
+         className: CH,
+         children: (0, SH.jsx)("span", {
+ ... (43 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L362-L365` → after: `L785-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L785-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L785-L806) · [Before (L362-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L362-L365)

```diff
-       const XU = eU(UU);
-       return function(UU) {
-         UU < 1028 || (CU[UU] = wU, wU = UU)
-       }(UU), XU
+       let {
+         text: BH
+       } = HH;
+       const {
+         t: LH
+       } = (0, rH.B)(), [zH, CH] = (0, SH.j)();
+       return (0, tH.jsxs)("div", {
+         className: "CopyTextRow",
+         children: [(0, tH.jsx)("div", {
+           className: "CopyTextRowText",
+           children: BH
+         }), (0, tH.jsx)(hH.i, {
+           className: "CopyTextRowButton",
+           onClick: () => {
+             (0, AH.c)(BH).catch((HH => {
+               console.error("Failed to copy text:", HH)
+ ... (6 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L367-L369` → after: `L808-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L808-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L808-L811) · [Before (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L367-L369)

```diff
-     let rU = new TextDecoder("utf-8", {
-       ignoreBOM: !0,
-       fatal: !0
+   },
+   34986: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => SH
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L371-L380` → after: `L813-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L813-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L813-L830) · [Before (L371-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L371-L380)

```diff
-     rU.decode();
-     const uU = 2146435072;
-     let fU = 0;
-     const iU = new TextEncoder;
-     "encodeInto" in iU || (iU.encodeInto = function(UU, XU) {
-       const zU = iU.encode(UU);
-       return XU.set(zU), {
-         read: UU.length,
-         written: zU.length
-       }
+     var AH = LH(4947),
+       rH = LH(4951);
+ 
+     function SH(HH) {
+       let {
+         children: BH,
+         showing: LH,
+         globallyUniqueKey: SH,
+         alwaysMountChildren: hH = !1,
+         doGameplayStartStopOnShow: tH = !0,
+         keepsMovement: zH = !1
+       } = HH;
+       return (0, rH.c)(!0, LH, SH, zH), (0, AH.e)(tH, LH), LH || hH ? BH : null
+     }
+   },
+   7138: (HH, BH, LH) => {
+ ... (2 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L382` → after: `L832-L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L832-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L832-L833) · [Before (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L382)

```diff
-     let HU, MU, vU, VU = 0;
+     var AH = LH(45),
+       rH = LH(30);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L385` → after: `L836-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L836-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L836-L840) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L385)

```diff
-       return MU = UU, vU = UU.exports, HU = XU, ZU = null, WU = null, dU = null, vU.eJRw(), vU
+       var LH;
+       const [SH, hH] = (0, AH.useState)(null !== (LH = rH.e.getItem(HH)) && void 0 !== LH ? LH : BH);
+       return [SH, BH => {
+         rH.e.setItem(HH, BH), hH(BH)
+       }]
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L389-L395` → after: `L868-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L868-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L868-L871) · [Before (L389-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L389-L395)

```diff
-       if (void 0 !== vU) return vU;
-       void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
-         module: UU
-       } = UU) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
-       const XU = tU();
-       UU instanceof WebAssembly.Module || (UU = new WebAssembly.Module(UU));
-       return sU(new WebAssembly.Instance(UU, XU), UU)
+       return {
+         x: (HH.left + HH.right) / 2,
+         y: (HH.top + HH.bottom) / 2
+       }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L397-L434` → after: `L873-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L873-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L873-L880) · [Before (L397-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L397-L434)

```diff
-     async function mU(UU) {
-       if (void 0 !== vU) return vU;
-       void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
-         module_or_path: UU
-       } = UU) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
-       const XU = tU();
-       ("string" === typeof UU || "function" === typeof Request && UU instanceof Request || "function" === typeof URL && UU instanceof URL) && (UU = fetch(UU));
-       const {
-         instance: zU,
-         module: cU
-       } = await async function(UU, XU) {
-         if ("function" === typeof Response && UU instanceof Response) {
-           if (!UU.ok) throw new Error(`failed to fetch Wasm: ${UU.status} ${UU.statusText} fetching '${UU.url}'`);
-           if ("function" === typeof WebAssembly.instantiateStreaming) try {
-             return await WebAssembly.instantiateStreaming(UU, XU)
-           } catch (zU) {
- ... (22 more removed lines; see GitHub link above)
+ 
+     function SH(HH) {
+       return 0 === HH.length ? null : HH.reduce(((HH, BH) => ({
+         left: Math.min(HH.left, BH.left),
+         top: Math.min(HH.top, BH.top),
+         right: Math.max(HH.right, BH.right),
+         bottom: Math.max(HH.bottom, BH.bottom)
+       })))
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L436-L443` → after: `L882-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L882-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L882-L890) · [Before (L436-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L436-L443)

```diff
-     var lU = zU(3176),
-       xU = zU(7213);
-     class JU extends Error {
-       stage;
-       constructor(UU, XU) {
-         super((0, lU.J)(UU, XU), {
-           cause: XU
-         }), this.name = "BloxdShaderPackWasmLoadError", this.stage = UU
+ 
+     function hH(HH, BH) {
+       const LH = Math.max(0, (BH - (HH.right - HH.left)) / 2),
+         AH = Math.max(0, (BH - (HH.bottom - HH.top)) / 2);
+       return {
+         left: HH.left - LH,
+         top: HH.top - AH,
+         right: HH.right + LH,
+         bottom: HH.bottom + AH
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L449-L455` → after: `L894-L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L894-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L894-L903) · [Before (L449-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L449-L455)

```diff
-     function bU() {
-       return jU ? Promise.resolve(jU) : (KU || (KU = async function() {
-         let UU;
-         try {
-           UU = await (0, lU.M)(new zU.U(zU(7217)), (0, xU.e)("bloxd_wasm_shader_pack"))
-         } catch (XU) {
-           throw new JU((0, lU.T)(XU), XU)
+     function tH(HH, BH) {
+       return BH.x >= HH.left && BH.x <= HH.right && BH.y >= HH.top && BH.y <= HH.bottom
+     }
+ 
+     function zH(HH, BH, LH) {
+       let AH = null,
+         SH = 1 / 0;
+       for (const {
+           id: rH,
+           box: hH
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L457-L462` → after: `L905-L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L905-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L905-L913) · [Before (L457-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L457-L462)

```diff
-         try {
-           await mU({
-             module_or_path: UU
-           })
-         } catch (XU) {
-           throw new JU("instantiate", XU)
+         of BH) {
+         const BH = (hH.right - hH.left) * (hH.bottom - hH.top);
+         tH(hH, HH) && BH < SH && (SH = BH, AH = rH)
+       }
+       if (null !== AH) return AH;
+       let zH = 1 / 0;
+       for (const {
+           id: CH,
+           box: EH
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L464-L467` → after: `L915-L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L915-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L915-L921) · [Before (L464-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L464-L467)

```diff
-         return jU = cU, jU
-       }(), KU.then(void 0, (() => {
-         KU = null
-       }))), KU)
+         of BH) {
+         if (!tH(hH(EH, LH), HH)) continue;
+         const BH = rH(EH),
+           SH = Math.hypot(HH.x - BH.x, HH.y - BH.y);
+         SH < zH && (zH = SH, AH = CH)
+       }
+       return AH
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L471-L478` → after: `L924-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L924-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L924-L930) · [Before (L471-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L471-L478)

```diff
-     function hU(UU) {
-       let [XU, zU, cU, yU] = UU;
-       const QU = {
-         file: XU,
-         line: zU,
-         message: cU
-       };
-       return yU && (QU.variants = yU.map(TU.h)), QU
+     function CH(HH, BH, LH) {
+       return {
+         left: LH.left,
+         top: LH.top,
+         right: HH - LH.right,
+         bottom: BH - LH.bottom
+       }
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L481-L482` → after: `L933-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L933-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L933-L938) · [Before (L481-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L481-L482)

```diff
-     function UX(UU) {
-       return JSON.parse(UU).map(hU)
+     function EH(HH, BH, LH, AH) {
+       const rH = (HH, BH, LH) => Math.max(Math.min(BH, 0), Math.min(Math.max(LH, 0), HH));
+       return {
+         x: rH(BH, AH.left - HH.left, AH.right - HH.right),
+         y: rH(LH, AH.top - HH.top, AH.bottom - HH.bottom)
+       }
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L485-L487` → after: `L941-L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L941-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L941-L948) · [Before (L485-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L485-L487)

```diff
-     function XX(UU, XU) {
-       if (!Number.isInteger(UU) || UU < 0 || UU > 4294967295) throw new Error(`${XU} ${UU} is not a whole number from 0 to 4294967295`);
-       return UU
+     function XH(HH, BH, LH, AH, rH) {
+       const SH = HH.dx * AH + BH,
+         hH = HH.dy * rH + LH,
+         tH = HH => Math.max(-1, Math.min(1, HH));
+       return {
+         dx: tH(SH / AH),
+         dy: tH(hH / rH)
+       }
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L490-L491` → after: `L951-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L951-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L951-L956) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L490-L491)

```diff
-     function zX(UU) {
-       return [UU.named.map((UU => UU.name)), Uint32Array.from(UU.named, (UU => XX(UU.id, "Texture ID")))]
+     function GH(HH, BH, LH, AH) {
+       return BH <= 0 || LH <= 0 ? 1 : Math.max(.05, Math.min(1, HH / BH, AH / LH))
+     }
+ 
+     function YH(HH, BH, LH) {
+       return Math.min(HH.right, BH.right) - Math.max(HH.left, BH.left) > LH && Math.min(HH.bottom, BH.bottom) - Math.max(HH.top, BH.top) > LH
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L498-L502` → after: `L960-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L960-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L960-L963) · [Before (L498-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L498-L502)

```diff
-       if (QX.has(UU)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
-       try {
-         return XU()
-       } catch (zU) {
-         throw zU instanceof WebAssembly.RuntimeError && QX.add(UU), zU
+       const LH = (HH, BH, LH, AH) => BH - HH > AH - LH ? LH - HH > BH - AH ? AH - BH : LH - HH : HH < LH ? LH - HH : BH > AH ? AH - BH : 0;
+       return {
+         x: LH(HH.left, HH.right, BH.left, BH.right),
+         y: LH(HH.top, HH.bottom, BH.top, BH.bottom)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L507-L566` → after: `L1110-L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1110-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1110-L1161) · [Before (L507-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L507-L566)

```diff
-       let XU = yX.get(UU);
-       if (!XU) {
-         let zU, cU;
-         XU = {
-           bUU: (XU, zU) => AX(UU, (() => function(UU, XU, zU) {
-             const cU = UU.bUU(XU.map((UU => UU.path)), XU.map((UU => UU.source)), ...zX(zU), zU.aliases.map((UU => UU.name)), zU.aliases.map((UU => UU.texture)), zU.aliases.map((UU => UU.kind)));
-             let yU = !1;
-             try {
-               const UU = cU.validationModuleCodes,
-                 XU = Array.from(cU.validationModuleKeys, ((XU, zU) => ({
-                   key: (0, TU.h)(XU),
-                   code: UU[zU]
-                 }))),
-                 zU = {
-                   errors: UX(cU.AQU),
-                   offInStrict: UX(cU.FQU),
- ... (44 more removed lines; see GitHub link above)
+       return HH ? ["X"] : ["P", "X"]
+     }
+     const tH = Object.freeze({
+       faces: null,
+       names: Object.freeze({}),
+       shop: !0,
+       bag: !0,
+       sprint: !0,
+       items: null,
+       rowIcons: AH.A,
+       pinnedIcons: Object.freeze({
+         rightOfCamera: null,
+         leftEnd: null
+       })
+     });
+ 
+ ... (36 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L576-L591` → after: `L1166-L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1166-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1166-L1172) · [Before (L576-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L576-L591)

```diff
-     function IX() {
-       return NX ??= async function() {
-         if ("undefined" === typeof WebAssembly) return pX("unsupported", "This browser has no WebAssembly"), null;
-         const UU = (0, EX.loadShaderPackTextures)().then((() => !0), (UU => (console.error("Could not load the shader pack textures, so shader packs can't run", UU), !1)));
-         try {
-           await (0, DX.j)();
-           const XU = await async function() {
-             let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bU;
-             return FX(await UU())
-           }();
-           return await UU ? XU : null
-         } catch (XU) {
-           const UU = XU instanceof Error ? XU.message : String(XU);
-           return pX(oX.d[XU instanceof JU ? XU.stage : "instantiate"], UU), null
-         }
-       }(), NX
+     function EH(HH, BH) {
+       const {
+         faces: LH
+       } = HH;
+       if (null === LH) return [];
+       const AH = new Set(Object.keys(LH).map((HH => SH[HH])));
+       return hH(BH).filter((HH => !AH.has(SH[HH])))
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L595` → after: `L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1176) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L595)

```diff
-       (0, oX.g)(YX, `Shader pack wasm ${UU}, so shader packs can't run: ${XU}`, XU, `shader_pack_${UU}`)
+       HH.replaceChildren(...[...BH.childNodes].map((HH => HH.cloneNode(!0))))
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L598-L599` → after: `L1179-L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1179-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1179-L1222) · [Before (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L598-L599)

```diff
-   7217: (UU, XU, zU) => {
-     UU.exports = zU.p + "static/media/bloxd_wasm_shader_pack_bg.45f1ccf688d095d246ba.wasm"
+   9592: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => tH,
+       g: () => CH
+     });
+     var AH = LH(9590),
+       rH = LH(9588),
+       SH = LH(2659),
+       hH = LH(2661);
+     const tH = 2,
+       zH = (HH, BH, LH) => {
+         const AH = (0, rH.x)(BH).includes(HH) ? HH : (0, rH.x)(HH).includes(BH) ? BH : null;
+         if (null === AH || "joystick" === AH) return !1;
+         const tH = AH === HH ? BH : HH;
+         if ("menu" === AH) return (0, hH.t)(tH, LH.hudElements[tH]);
+         if ("hotbar" !== AH || !(0, rH.D)(tH)) return !0;
+ ... (28 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L601` → after: `L1224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1224) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L601)

```diff
-   7213: (UU, XU, zU) => {
+   34890: (HH, BH, LH) => {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L603` → after: `L1226-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1226-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1226-L1227) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L603)

```diff
-       e: () => AU
+       d: () => rH,
+       f: () => AH
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L605-L620` → after: `L1229-L1242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1229-L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1229-L1242) · [Before (L605-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L605-L620)

```diff
-     var cU = zU(3176);
-     const yU = {
-       bloxd_wasm: () => "7f53022eec2cb692d1cd79c2eeeb6f8a7607270973e0f6e0c72df23cc86c2b9f",
-       bloxd_wasm_client: () => "57b44b4e08ce6b959c851fa76e413083d1b9237ff788a96d3931877841e31e3b",
-       bloxd_wasm_workers: () => "e095c7f514df56db3ce2e1ace2484bbfab4bed79f4fe2840e3f351e25bef8126",
-       bloxd_wasm_models: () => "d264f0be9eaf7df40aab32e155f7170e6a2029f73e36b3aa879f2b238d2f98c1",
-       bloxd_wasm_webgpu: () => "45fb92410826d4556fb1610a55c96252dff22810c6b27376d120613e28fb722d",
-       bloxd_wasm_webgl: () => "b3808b20b91fd2d43a5bb7c9219998b24db293acd36599f3cfc217aa2f03b9ee",
-       bloxd_wasm_webgl1: () => "955dabc5322d1e4788a42fc358c9d0d686dca5eaafd1809064b6bbdc73e56b76",
-       bloxd_wasm_replay: () => "13f05b235e8455220553f84808d39e41289fbb259c59a2477b25fa31ba963b54",
-       bloxd_wasm_recorder: () => "a55faba2add92e1697c15223e522d87ba7631a7aaeb806e24cd4da91de455075",
-       bloxd_wasm_anim: () => "9fd10823eecbab78e8d130701ec44bc31691f897e4963312a2cef80080a0b854",
-       bloxd_wasm_textures: () => "659ffb2c9bc8159fee909f52c433ec6a1a8921210ad3488ef78dfd6ff1c90774",
-       bloxd_wasm_shader_pack: () => "adccd38b5fea7520e10f50666ef79fc0704d8a73746e668ac8e591ff0037f1dc"
-     };
-     var QU = zU(5179);
+     const AH = "image/jpeg",
+       rH = "jpg"
+   },
+   34898: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => zH,
+       f: () => CH,
+       h: () => EH
+     });
+     var AH = LH(1714),
+       rH = LH(3562),
+       SH = LH(81),
+       hH = LH(1807),
+       tH = LH(34890);
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L622-L628` → after: `L1244-L1271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1244-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1244-L1271) · [Before (L622-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L622-L628)

```diff
-     function AU(UU) {
-       const XU = Object.prototype.hasOwnProperty.call(yU, UU) ? yU[UU]() : void 0;
-       if (void 0 !== XU) return {
-         sha256: XU,
-         onMismatch: QU.v
-       };
-       throw new cU.i(`${UU} has no release digest, so this build refuses it`)
+     function zH() {
+       return !(0, SH.isMobileApp)() || AH.b.supports("photos")
+     }
+     async function CH(HH) {
+       var BH, LH;
+       if ((0, SH.isMobileApp)()) {
+         const {
+           saved: BH
+         } = await AH.b.request("photos.save", {
+           data: await (0, rH.h)(HH),
+           mimeType: tH.f
+         });
+         return BH ? "saved" : "denied"
+       }
+       return (0, SH.isIOS)() && null !== (BH = (LH = navigator).canShare) && void 0 !== BH && BH.call(LH, {
+         files: [HH]
+ ... (12 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L631` → after: `L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1274) · [Before (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L631)

```diff
-   7226: (UU, XU, zU) => {
+   34883: (HH, BH, LH) => {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L636` → after: `L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1278) · [Before (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L636)

```diff
-       h: () => gU
+       k: () => XH
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L638-L649` → after: `L1280-L1285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1280-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1280-L1285) · [Before (L638-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L638-L649)

```diff
-     var cU = zU(7233);
-     const yU = 6,
-       QU = 3,
-       AU = 1,
-       FU = 2,
-       oU = 4,
-       DU = 8,
-       EU = 16,
-       YU = 32,
-       NU = 64,
-       IU = 128,
-       pU = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];
+     var AH = LH(15),
+       rH = LH(34856),
+       SH = LH(1659),
+       hH = LH(34890);
+     const tH = 8294400,
+       zH = .92;
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L651-L655` → after: `L1287-L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1287-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1287-L1290) · [Before (L651-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L651-L655)

```diff
-     function aU(UU) {
-       if (!UU) return 0;
-       const XU = pU.indexOf(UU);
-       if (XU <= 0) throw new Error(`"${UU}" is not a shader pack hook function`);
-       return XU
+     function CH() {
+       (0, SH.g)(), AH.c.set({
+         screenshotMode: !0
+       })
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L658-L661` → after: `L1293-L1356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1293-L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1293-L1356) · [Before (L658-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L658-L661)

```diff
-     function tU(UU) {
-       if (0 === UU) return null;
-       const XU = pU[UU];
-       if (void 0 === XU) throw new Error(`${UU} is not a shader pack hook function id`);
+     function EH() {
+       AH.c.set({
+         screenshotMode: !1
+       })
+     }
+     async function XH() {
+       const {
+         width: HH,
+         height: BH,
+         scale: LH
+       } = function(HH, BH, LH) {
+         const AH = Math.max(1, HH),
+           rH = Math.max(1, BH),
+           SH = Math.min(Math.max(1, LH), Math.sqrt(tH / (AH * rH)));
+         return {
+           width: Math.round(AH * SH),
+ ... (48 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L666` → after: `L1406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1406) · [Before (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L666)

```diff
-       const XU = cU.e.length;
+       var BH;
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L668-L669` → after: `L1408-L1409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1408-L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1408-L1409) · [Before (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L668-L669)

```diff
-         strict: UU >= XU,
-         program: cU.e[UU % XU]
+         ...hH.store,
+         yaw: hH.store.yaw + (null !== (BH = AH.c[HH].previewYaw) && void 0 !== BH ? BH : 0)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L673-L674` → after: `L1427-L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1427-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1427-L1430) · [Before (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L673-L674)

```diff
-     function kU(UU) {
-       return Number(UU.strict) * cU.e.length + cU.e.indexOf(UU.program)
+     function tH(HH, BH) {
+       HH instanceof Promise ? HH.then(BH).catch((HH => {
+         console.error("Couldn't open the preview", HH)
+       })) : BH(HH)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L676-L678` → after: `L1432-L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1432-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1432-L1452) · [Before (L676-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L676-L678)

```diff
- 
-     function GU(UU) {
-       return "" === UU ? [] : UU.split(" ")
+     class zH {
+       constructor(HH) {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, tH(HH, (HH => {
+           this.closed ? HH.close() : (this.opened = HH, null !== this.size && HH.resize(this.size.width, this.size.height), null !== this.view && HH.show(this.view))
+         }))
+       }
+       show(HH) {
+         var BH;
+         this.view = HH, null === (BH = this.opened) || void 0 === BH || BH.show(HH)
+       }
+       resize(HH, BH) {
+         var LH;
+         this.size = {
+           width: HH,
+           height: BH
+         }, null === (LH = this.opened) || void 0 === LH || LH.resize(HH, BH)
+ ... (5 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L680-L691` → after: `L1454-L1496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1454-L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1454-L1496) · [Before (L680-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L680-L691)

```diff
- 
-     function BU(UU) {
-       const XU = {
-         variantFlags: new Uint8Array(yU),
-         hooks: new Uint8Array(yU * QU),
-         moduleCodes: Array(yU).fill(""),
-         reads: Array(2 * yU).fill("")
-       };
-       for (const zU of UU) {
-         const UU = kU(zU.key),
-           cU = (UU, XU) => null === zU.hooks.surface || zU.reads.fragment.includes(UU) ? 0 : XU;
-         XU.variantFlags[UU] = (zU.sceneDepth ? AU : 0) | (zU.movesVertices ? FU : 0) | (zU.sunShadow ? oU : 0) | (zU.airShadow ? DU : 0) | (zU.discards ? EU : 0) | cU("localPosition", YU) | cU("enchantSpeed", NU) | cU("enchantTier", IU), XU.hooks[UU * QU] = aU(zU.hooks.vertex), X … [truncated]
+     class CH {
+       constructor(HH) {
+         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(HH).then((HH => HH.ready)), tH(HH, (HH => {
+           this.closed ? HH.close() : (this.opened = HH, null !== this.size && HH.resize(this.size.width, this.size.height))
+         }))
+       }
+       get dev() {
+         return this.opened.dev
+       }
+       isReady() {
+         var HH, BH;
+         return null !== (HH = null === (BH = this.opened) || void 0 === BH ? void 0 : BH.isReady()) && void 0 !== HH && HH
+       }
+       setCosmetic(HH, BH) {
+         var LH;
+         null === (LH = this.opened) || void 0 === LH || LH.setCosmetic(HH, BH)
+ ... (27 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L695-L720` → after: `L1499-L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1499-L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1499-L1512) · [Before (L695-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L695-L720)

```diff
- 
-     function ZU(UU) {
-       const {
-         hooks: XU,
-         moduleCodes: zU,
-         reads: cU
-       } = UU;
-       return Array.from(UU.variantFlags, ((UU, yU) => {
-         const YU = yU * QU;
-         return {
-           key: gU(yU),
-           hooks: {
-             vertex: tU(XU[YU]),
-             surface: tU(XU[YU + 1]),
-             light: tU(XU[YU + 2])
-           },
- ... (10 more removed lines; see GitHub link above)
+     const EH = new class {
+       constructor() {
+         this.host = null, this.makeDefault = null
+       }
+       setHost(HH) {
+         this.host = HH
+       }
+       setDefaultHost(HH) {
+         this.makeDefault = HH
+       }
+       current() {
+         if (null === this.host) {
+           if (null === this.makeDefault) throw new Error("no preview host");
+           this.host = this.makeDefault()
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L722` → after: `L1514-L1527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1514-L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1514-L1527) · [Before (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L722)

```diff
-       }))
+         return this.host
+       }
+       openMob(HH) {
+         return new zH(this.current().openMob(HH))
+       }
+       openPet(HH) {
+         return new zH(this.current().openPet(HH))
+       }
+       openMobLineup(HH) {
+         return new zH(this.current().openMobLineup(HH))
+       }
+       openCharacter(HH, BH) {
+         return new CH(this.current().openCharacter(HH, BH))
+       }
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L725` → after: `L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1530) · [Before (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L725)

```diff
-   7233: (UU, XU, zU) => {
+   35016: (HH, BH, LH) => {
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L727-L731` → after: `L1532-L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1532-L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1532-L1534) · [Before (L727-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L727-L731)

```diff
-       e: () => cU,
-       f: () => AU,
-       j: () => FU,
-       k: () => yU,
-       o: () => QU
+       e: () => AH.d,
+       g: () => AH.h,
+       h: () => AH.j
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L733` → after: `L1536-L1628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1536-L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1536-L1628) · [Before (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L733)

```diff
-     const cU = ["terrain", "liquid", "model"];
+     var AH = LH(35018);
+     class rH {
+       constructor(HH) {
+         this.load = HH, this.loaded = null, this.loading = null
+       }
+       run(HH) {
+         return null !== this.loaded ? HH(this.loaded) : (this.loading ??= this.load().then((HH => (this.loaded = HH, HH)), (HH => {
+           throw this.loading = null, HH
+         })), this.loading.then(HH))
+       }
+     }
+     class SH {
+       constructor() {
+         this.mobScene = new rH((() => Promise.all([LH.e(84), LH.e(259), LH.e(258), LH.e(283), LH.e(111), LH.e(284), LH.e(87), LH.e(281), LH.e(85), LH.e(86), LH.e(291), LH.e(285), LH.e(290), LH.e(288), LH.e(280), LH.e(303), LH.e(255), LH.e(272), LH.e(286), LH.e(289), LH.e(89), LH. … [truncated]
+       }
+       openMob(HH) {
+ ... (77 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L736-L742` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1631) · [Before (L736-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L736-L742)

```diff
-       const UU = [];
-       for (const XU of [!1, !0])
-         for (const zU of cU) UU.push({
-           strict: XU,
-           program: zU
-         });
-       return UU
+       return (0, SH.isMobile)() && "function" === typeof navigator.vibrate
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L744-L746` → after: `L1633-L1656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1633-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1633-L1656) · [Before (L744-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L744-L746)

```diff
- 
-     function QU(UU) {
-       return `${UU.strict?"strict":"allow"}.${UU.program}`
+     const zH = new class {
+       constructor(HH) {
+         this.deps = HH, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
+       }
+       play(HH, BH) {
+         var LH;
+         if (!this.deps.enabled()) return;
+         const AH = hH[HH],
+           rH = null !== BH && void 0 !== BH ? BH : AH.pattern;
+         if (null === rH) return void console.warn("No vibration pattern for", HH);
+         const SH = this.deps.now();
+         SH - this.lastAnyAt < 40 && AH.priority < this.playingPriority || SH - (null !== (LH = this.lastAt.get(HH)) && void 0 !== LH ? LH : -1 / 0) < AH.minGapMs || SH < this.playingUntil && AH.priority < this.playingPriority || (this.lastAt.set(HH, SH), this.lastAnyAt = SH, this … [truncated]
+       }
+     }({
+       vibrate: HH => {
+         navigator.vibrate([...HH])
+ ... (8 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L750` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1660) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L750)

```diff
-       return !UU.hooks.vertex && !UU.hooks.surface && !UU.hooks.light
+       return "object" === typeof HH ? HH.option : HH
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L754` → after: `L1664-L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1664-L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/147.js#L1664-L1676) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/147.js#L754)

```diff
-       return "off" !== XU && (null === UU || UU.some((UU => UU.key.strict === ("strict" === XU) && !AU(UU))))
+       var LH;
+       if ("dropdown" === (null === (LH = HH.userInput) || void 0 === LH ? void 0 : LH.type) && "object" === typeof HH.userInput.dropdownOptions[0]) {
+         for (const LH of HH.userInput.dropdownOptions)
+           if (rH(LH) === BH) return "object" === typeof LH ? LH.cost : HH.cost;
+         console.error("Didn't find matching option for dropdown item. Item:", HH, "input:", BH)
+       }
+       return HH.cost
+     }
+ 
+     function hH(HH, BH, LH) {
+       var AH;
+       const rH = null !== (AH = LH.excludedPlayers) && void 0 !== AH ? AH : [BH];
+       return HH.filter((HH => !rH.includes(HH)))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/148.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/148.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/148.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/148.js#L2)

```diff
- export const ids = [148];
+ export const ids = [148, 152, 153];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/148.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/148.js#L4)

```diff
-   39586: (UU, XU, zU) => {
+   7155: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L6-L13` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/148.js#L6) · [Before (L6-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/148.js#L6-L13)

```diff
-       e: () => DU,
-       h: () => NU,
-       k: () => IU,
-       m: () => tU,
-       q: () => YU,
-       r: () => EU,
-       s: () => AU,
-       v: () => pU
+       d: () => hH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L15-L36` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/148.js#L8-L9) · [Before (L15-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/148.js#L15-L36)

```diff
-     var cU = zU(318),
-       yU = zU(1769);
-     const QU = "A valid external Instance reference no longer exists.";
- 
-     function AU(UU) {
-       return UU.includes(QU)
-     }
-     const FU = [
-         [1e4, "<10s", "lt10s"],
-         [6e4, "<1m", "lt1m"],
-         [3e5, "<5m", "lt5m"],
-         [18e5, "<30m", "lt30m"],
-         [1 / 0, "30m+", "ge30m"]
-       ],
-       oU = [
-         [1e3, "lt1s"],
- ... (6 more removed lines; see GitHub link above)
+     var AH = LH(5520),
+       rH = LH(1225);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L38-L39` → after: `L11-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L11-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/148.js#L11-L15) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/148.js#L38-L39)

```diff
-       WebGPU: "WebGPU device lost",
-       WebGL2: "WebGL2 context lost"
+       strict: "shaderPack:variantStrict",
+       nonStrict: "shaderPack:variantNonStrict",
+       terrain: "shaderPack:variantTerrain",
+       liquid: "shaderPack:variantLiquid",
+       model: "shaderPack:variantModel"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L43-L60` → after: `L175-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L175-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/148.js#L175-L287) · [Before (L43-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/148.js#L43-L60)

```diff
-       return UU ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(UU) {
-         var XU;
-         const zU = null !== (XU = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(UU)) && void 0 !== XU ? XU : /failed with ([A-Z][A-Z0-9_]+)/.exec(UU);
-         return zU ? zU[1] : AU(UU) ? "gpu_process_lost" : "other"
-       }(XU)
-     }
- 
-     function YU(UU) {
-       return `${(null===UU||void 0===UU?void 0:UU.vendor)||"unknown vendor"} ${(null===UU||void 0===UU?void 0:UU.architecture)||"unknown architecture"}`
-     }
- 
-     function NU(UU) {
-       return gU(UU)[1]
-     }
- 
-     function IU(UU) {
- ... (2 more removed lines; see GitHub link above)
+       try {
+         return new TextDecoder("utf-8", {
+           fatal: !0
+         }).decode(HH)
+       } catch (LH) {
+         throw new GH.d("shaderPack:loadNotUtf8", {
+           path: BH
+         }, {
+           cause: LH
+         })
+       }
+     }
+     var vH = LH(5520),
+       PH = LH(5539),
+       TH = LH(1225);
+ 
+ ... (97 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L68-L84` → after: `L291-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L291-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/148.js#L291-L333) · [Before (L68-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/148.js#L68-L84)

```diff
-         page: null === FU ? AU : `${AU}${NU(FU)}`,
-         code: `${UU}_${null===FU?AU:`${AU}_${IU(FU)}`}_${aU(zU)}`
-       }
-     }
- 
-     function aU(UU) {
-       if ((0, yU.e)()) return "ad_open";
-       const XU = (0, yU.b)();
-       return null === XU ? "ad_none" : `ad_${IU(UU-XU.endedAt)}_${XU.pageHid?"h":"v"}`
-     }
- 
-     function tU(UU) {
-       return kU(oU, UU)[1]
-     }
- 
-     function gU(UU) {
- ... (1 more removed lines; see GitHub link above)
+         manifest: HH.manifest,
+         files: (0, AH.t)(HH.files),
+         validation: BH,
+         ...LH && {
+           listing: LH
+         }
+       }
+     }
+ 
+     function GH(HH) {
+       return Object.keys(HH.files).map((BH => ({
+         path: BH,
+         source: HH.files[BH]
+       })))
+     }
+     let YH = Promise.resolve();
+ ... (27 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L89-L92` → after: `L338-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L338-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/148.js#L338-L395) · [Before (L89-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/148.js#L89-L92)

```diff
-       return null !== (zU = UU.find((UU => {
-         let [zU] = UU;
-         return XU < zU
-       }))) && void 0 !== zU ? zU : UU[UU.length - 1]
+       return null === HH ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : OH(HH) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (LH = HH.validation) || void 0 === LH ? void 0 : LH.ok) || HH.validation.fromRecheck ? null === BH ? {
+         kind: "none",
+         reason: "noCompiler"
+       } : kH(HH, BH) ? {
+         kind: "blocked",
+         messageKey: "shaderPack:failedUnchecked"
+       } : HH.validation.ok ? {
+         kind: "active"
+       } : {
+         kind: "blocked",
+ ... (42 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L95-L97` → after: `L398-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L398-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/148.js#L398-L401) · [Before (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/148.js#L95-L97)

```diff
-   39876: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => oU
+   7179: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       loadShaderPackTextures: () => hH,
+       shaderPackTextures: () => tH
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L99-L126` → after: `L403-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L403-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/148.js#L403-L420) · [Before (L99-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/148.js#L99-L126)

```diff
-     var cU = zU(9493),
-       yU = zU(37201),
-       QU = zU(39882);
-     const AU = {
-         seat: "seat_timeout",
-         socket_unopened: "socket_timeout_unopened",
-         socket: "socket_timeout"
-       },
-       FU = {
-         seat: "seat_lost",
-         socket_unopened: "socket_unopened",
-         socket: "socket_closed"
-       };
- 
-     function oU(UU, XU) {
-       if (UU instanceof yU.c) return {
- ... (12 more removed lines; see GitHub link above)
+     var AH = LH(5531);
+     let rH = null,
+       SH = null;
+ 
+     function hH() {
+       return SH ??= Promise.all([LH.e(84), LH.e(206)]).then((() => LH(41802))).then((HH => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: BH,
+           textureNameToIndex: LH,
+           textureAnimationData: SH
+         } = HH;
+         return rH ??= (0, AH.f)(LH, SH, BH), rH
+       })), SH
+     }
+ 
+     function tH() {
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L129-L163` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/148.js#L423) · [Before (L129-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/148.js#L129-L163)

```diff
-   9493: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => QU,
-       f: () => AU,
-       h: () => FU,
-       j: () => DU,
-       n: () => oU
-     });
-     var cU = zU(212),
-       yU = zU(5057);
- 
-     function QU(UU) {
-       return AU(UU) === cU.e.gameOrPluginOnPlayerAuthRejected.code
-     }
- 
-     function AU(UU) {
- ... (19 more removed lines; see GitHub link above)
+   7196: (HH, BH, LH) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L166-L170` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/148.js#L426) · [Before (L166-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/148.js#L166-L170)

```diff
-       f: () => QU,
-       i: () => FU,
-       l: () => EU,
-       p: () => oU,
-       r: () => AU
+       d: () => tH
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L172-L191` → after: `L428-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L428-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/148.js#L428-L432) · [Before (L172-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/148.js#L172-L191)

```diff
-     var cU = zU(212);
-     const yU = 3e3,
-       QU = 15e3;
- 
-     function AU(UU) {
-       const XU = UU.endsWith(cU.m);
-       return {
-         text: (XU ? UU.slice(0, -cU.m.length) : UU) || null,
-         dropsCache: XU
-       }
-     }
-     const FU = "Either your internet isn't working or this is a bug.";
- 
-     function oU(UU, XU) {
-       const zU = EU(UU);
-       return null !== zU.name && "" === cU.e[zU.name].text && null !== XU ? XU : zU.reason
- ... (4 more removed lines; see GitHub link above)
+     var AH = LH(7201),
+       rH = LH(7179),
+       SH = LH(105);
+     const hH = 100;
+     async function tH(HH, BH) {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L193-L287` → after: `L434-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L434-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/148.js#L434-L491) · [Before (L193-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/148.js#L193-L287)

```diff
-       let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       const yU = null !== (XU = Object.keys(cU.e).find((XU => cU.e[XU].code === UU))) && void 0 !== XU ? XU : null;
-       if (null === yU) return {
-         code: UU,
-         name: yU,
-         reason: null !== zU && void 0 !== zU ? zU : `${FU}\nCode: ${UU}`,
-         canReconnect: !1,
-         automaticallyReconnect: !1,
-         requiresRefresh: !1
-       };
-       const {
-         text: QU,
-         canReconnect: AU = !1
-       } = cU.e[yU], oU = UU === cU.e.outdatedVersion.code || UU === cU.e.loadRecaptchaError.code;
-       return {
-         code: UU,
- ... (79 more removed lines; see GitHub link above)
+       let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (LH = navigator.gpu) && void 0 !== LH ? LH : null;
+       const hH = HH.YBH(BH, (0, rH.shaderPackTextures)());
+       if (hH.errors.length > 0) return CH(HH, hH.errors, hH.offInStrict);
+       const tH = await async function(HH) {
+         if (!HH) return null;
+         try {
+           const BH = await (0, SH.y)(HH);
+           return BH ? await BH.requestDevice() : null
+         } catch (BH) {
+           return console.error("Couldn't get a WebGPU device to validate the shader pack.", BH), null
+         }
+       }(AH);
+       if (!tH) return null;
+       let zH = !1;
+       tH.lost.then((() => {
+         zH = !0
+ ... (42 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L292-L890` → after: `L496-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L496-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/148.js#L496-L501) · [Before (L292-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/148.js#L292-L890)

```diff
-         icon: "wifi",
-         title: "wasmScreens:disconnectedTitle",
-         help: zU ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
-         helpValues: {
-           reason: UU.reason
-         },
-         discordLink: null === UU.name,
-         confirm: XU ? "general:reconnect" : UU.requiresRefresh ? "general:reload" : "general:ok",
-         cancel: null
-       }
-     }
-   },
-   37014: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => hU,
-       g: () => cX,
- ... (583 more removed lines; see GitHub link above)
+         headerVersion: (0, AH.pageShaderPackValidationVersion)(HH),
+         ok: 0 === BH.length,
+         errors: BH.slice(0, hH),
+         moreErrors: Math.max(0, BH.length - hH),
+         offInStrict: LH
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/149.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/149.js` (50 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L4)

```diff
-   36957: (UU, XU, zU) => {
+   7165: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L6)

```diff
-       WasmTextureWorker: () => kU
+       loadPageShaderPackCompiler: () => YB
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L8-L11` → after: `L8-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L8-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L8-L123) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L8-L11)

```diff
-     var cU = zU(633),
-       yU = zU(3560),
-       QU = zU(36961),
-       AU = zU.n(QU);
+     var AH = {};
+     LH.r(AH), LH.d(AH, {
+       uSH: () => rH,
+       YBH: () => SH,
+       default: () => wH,
+       QSH: () => hH,
+       WSH: () => tH,
+       initSync: () => DH,
+       LC: () => zH,
+       rrH: () => CH,
+       MSH: () => EH,
+       xSH: () => XH,
+       mN: () => GH,
+       vSH: () => YH,
+       kN: () => uH,
+       PSH: () => QH
+ ... (100 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L14` → after: `L126-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L126-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L126-L128) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L14)

```diff
-       return AU()('(()=>{var UU={d:(XU,zU)=>{for(var cU in zU)UU.o(zU,cU)&&!UU.o(XU,cU)&&Object.defineProperty(XU,cU,{enumerable:!0,get:zU[cU]})},o:(UU,XU)=>Object.prototype.hasOwnProperty.call(UU,XU),r:UU=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(U … [truncated]
+       const HH = jH.wa2i();
+       var BH = vH(HH[0], HH[1]);
+       return jH.yknf(HH[0], 4 * HH[1], 4), BH
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L22-L23` → after: `L131-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L131-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L131-L174) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L22-L23)

```diff
-     function IU(UU) {
-       return "" === UU ? [] : UU.split("\0")
+     function tH() {
+       const HH = jH.UsjA();
+       var BH = vH(HH[0], HH[1]);
+       return jH.yknf(HH[0], 4 * HH[1], 4), BH
+     }
+ 
+     function zH() {
+       jH.Qqsh()
+     }
+ 
+     function CH(HH, BH, LH, AH, rH) {
+       let SH, hH;
+       try {
+         const CH = lH(HH, jH.VXKa),
+           EH = nH,
+           XH = fH(BH, jH.VXKa),
+ ... (28 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L27-L28` → after: `L178-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L178-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L178-L187) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L27-L28)

```diff
-       if ("" !== UU)
-         for (const XU of UU.split("\n")) console.error(XU)
+       let BH, LH;
+       try {
+         const SH = jH.SwqP(HH);
+         var AH = SH[0],
+           rH = SH[1];
+         if (SH[3]) throw AH = 0, rH = 0, KH(SH[2]);
+         return BH = AH, LH = rH, VH(AH, rH)
+       } finally {
+         jH.yknf(BH, LH, 1)
+       }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L31-L76` → after: `L190-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L190-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L190-L201) · [Before (L31-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L31-L76)

```diff
-     function aU(UU, XU) {
-       return async function(UU, XU) {
-         const zU = Object.keys(UU),
-           cU = [],
-           yU = new Map,
-           QU = new Uint32Array(zU.length);
-         for (const [AU, FU] of zU.entries()) {
-           const {
-             url: XU
-           } = UU[FU];
-           yU.has(XU) || (yU.set(XU, cU.length), cU.push(XU)), QU[AU] = yU.get(XU)
-         }
-         return {
-           sources: await XU(cU),
-           names: zU.join("\0"),
-           sourceOfName: QU
- ... (30 more removed lines; see GitHub link above)
+     function GH() {
+       return jH.Xtdm() >>> 0
+     }
+ 
+     function YH() {
+       let HH, BH;
+       try {
+         const LH = jH.kZzI();
+         return HH = LH[0], BH = LH[1], VH(LH[0], LH[1])
+       } finally {
+         jH.yknf(HH, BH, 1)
+       }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L80-L81` → after: `L205-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L205-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L205-L218) · [Before (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L80-L81)

```diff
-       const zU = EU.q.from(UU, XU ? EU.m.Optional : EU.m.Error);
-       return zU.code !== EU.m.Fetch && zU.code !== EU.m.Error && (0, DU.e)(zU.message), zU
+       let LH, AH;
+       try {
+         const hH = lH(HH, jH.VXKa),
+           tH = nH,
+           zH = fH(BH, jH.VXKa),
+           CH = nH,
+           EH = jH.QXYa(hH, tH, zH, CH);
+         var rH = EH[0],
+           SH = EH[1];
+         if (EH[3]) throw rH = 0, SH = 0, KH(EH[2]);
+         return LH = rH, AH = SH, VH(rH, SH)
+       } finally {
+         jH.yknf(LH, AH, 1)
+       }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L85-L91` → after: `L222-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L222-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L222-L230) · [Before (L85-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L85-L91)

```diff
-       return UU.message ? new Error(`the texture worker failed: ${UU.message}`) : new EU.q(EU.m.Load, "the texture worker failed to start")
-     }
-     class kU {
-       constructor(UU) {
-         this.worker = UU, this.failure = void 0, this.abandonStep = null, UU.addEventListener("error", (UU => {
-           UU.preventDefault(), this.failure ??= gU(UU)
-         }))
+       let BH, LH;
+       try {
+         const SH = jH.eLzA(xH(HH));
+         var AH = SH[0],
+           rH = SH[1];
+         if (SH[3]) throw AH = 0, rH = 0, KH(SH[2]);
+         return BH = AH, LH = rH, VH(AH, rH)
+       } finally {
+         jH.yknf(BH, LH, 1)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L93-L128` → after: `L232-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L232-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L232-L259) · [Before (L93-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L93-L128)

```diff
-       static async generateRequired(UU, XU, zU, QU) {
-         let AU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : EU.e,
-           DU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-         const NU = (0, oU.l)();
-         if (null !== NU) throw tU(new EU.q(EU.m.Load, NU), !1);
-         let IU;
-         const gU = new AbortController;
-         try {
-           IU = new kU(function() {
-             try {
-               return new FU
-             } catch (UU) {
-               throw new EU.q(EU.m.Load, `the texture worker failed to start: ${(0,YU.e)(UU)}`)
-             }
-           }());
-           const NU = (0, oU.d)().catch((UU => {
- ... (20 more removed lines; see GitHub link above)
+     }
+ 
+     function WH() {
+       return {
+         __proto__: null,
+         BaWg: {
+           __proto__: null,
+           njkq: function(HH, BH) {
+             return xH(Error(VH(HH, BH)))
+           },
+           HkDD: function(HH) {
+             return null === mH(HH)
+           },
+           cHO0: function(HH) {
+             return "string" === typeof mH(HH)
+           },
+ ... (12 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L130-L147` → after: `L261-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L261-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L261-L264) · [Before (L130-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L130-L147)

```diff
-                 for (const IU in UU) {
-                   const XU = UU[IU];
-                   AU.push(QU(IU));
-                   const zU = (XU.transTex ? 1 : 0) | (XU.BI ? 2 : 0) | (XU.particlesIgnoreBlack ? 4 : 0),
-                     cU = "string" === typeof XU.itemTexture ? QU(XU.itemTexture) : 4294967295,
-                     yU = `${zU},${cU}`,
-                     YU = XU.textureInfo,
-                     NU = oU.get(YU);
-                   if ((null === NU || void 0 === NU ? void 0 : NU.fields) !== yU)
-                     if (oU.set(YU, {
-                         entry: EU++,
-                         fields: yU
-                       }), AU.push(1, zU, cU), "string" === typeof YU) AU.push(1, QU(YU));
-                     else if (Array.isArray(YU)) {
-                     AU.push(3, YU.length);
-                     for (const UU of YU) "string" === typeof UU ? AU.push(0, QU(UU)) : "number" === typeof UU ? (AU.push(2, FU.length), FU.push(UU)) : (AU.push(1), DU(UU, IU))
- ... (2 more removed lines; see GitHub link above)
+                 for (; hH < AH; hH++) {
+                   const BH = HH.charCodeAt(hH);
+                   if (BH > 127) break;
+                   SH[rH + hH] = BH
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L149-L157` → after: `L266-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L266-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L266-L269) · [Before (L149-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L149-L157)

```diff
-                 const YU = [];
-                 for (const IU in XU) YU.push(QU(IU), XU[IU]);
-                 const NU = new Uint32Array(zU.map(QU));
-                 return {
-                   strings: cU.join("\0"),
-                   blocks: new Uint32Array(AU),
-                   numbers: new Float64Array(FU),
-                   index: new Uint32Array(YU),
-                   armour: NU
+                 if (hH !== AH) {
+                   0 !== hH && (HH = HH.slice(hH)), rH = LH(rH, AH, AH = hH + 3 * HH.length, 1) >>> 0;
+                   const BH = kH().subarray(rH + hH, rH + AH);
+                   hH += gH.encodeInto(HH, BH).written, rH = LH(rH, AH, hH, 1) >>> 0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L159-L198` → after: `L271-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L271-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L271-L292) · [Before (L159-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L159-L198)

```diff
-               }(UU, XU, cU.e.map(yU.f));
-               return {
-                 inputs: QU,
-                 sources: await aU(zU, gU.signal)
-               }
-             })(),
-             [GU, {
-               inputs: BU,
-               sources: ZU
-             }] = await Promise.all([NU, tU]),
-             RU = [BU.blocks.buffer, BU.numbers.buffer, BU.index.buffer, BU.armour.buffer, ZU.sourceOfName.buffer];
-           for (const UU of ZU.sources) RU.push(UU.buffer);
-           const PU = [],
-             {
-               assets: WU,
-               layerCap: dU,
- ... (24 more removed lines; see GitHub link above)
+                 return nH = hH, rH
+               }(AH, jH.VXKa, jH.JKnJ),
+               hH = nH;
+             UH().setInt32(HH + 4, hH, !0), UH().setInt32(HH + 0, SH, !0)
+           },
+           NA8v: function(HH, BH) {
+             throw new Error(VH(HH, BH))
+           },
+           N5jM: function(HH, BH) {
+             return mH(HH).charCodeAt(BH >>> 0)
+           },
+           gx4C: function(HH, BH) {
+             console.error(VH(HH, BH))
+           },
+           DvWL: function(HH) {
+             return mH(HH).length
+ ... (6 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L205-L279` → after: `L296-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L296-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L296-L306) · [Before (L205-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L205-L279)

```diff
-       async generateOptional() {
-         let UU;
-         try {
-           UU = await this.request({
-             type: "optional"
-           }, [])
-         } catch (XU) {
-           throw tU(XU, !0)
-         } finally {
-           this.terminate()
-         }
-         return pU(UU.warnings),
-           function(UU) {
-             let {
-               blocks: XU,
-               counts: zU,
- ... (59 more removed lines; see GitHub link above)
+     }
+     Symbol.dispose && (rH.prototype[Symbol.dispose] = rH.prototype.free);
+     const MH = "undefined" === typeof FinalizationRegistry ? {
+       register: () => {},
+       unregister: () => {}
+     } : new FinalizationRegistry((HH => jH.yXy6(HH, 1)));
+ 
+     function xH(HH) {
+       IH === oH.length && oH.push(oH.length + 1);
+       const BH = IH;
+       return IH = oH[BH], oH[BH] = HH, BH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L283` → after: `L310-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L310-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L310-L314) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L283)

```diff
-       return XU > 0 ? `${UU}, its module's memory ${Math.round(XU/2**20)} MiB` : UU
+       HH >>>= 0;
+       const LH = UH(),
+         AH = [];
+       for (let rH = HH; rH < HH + 4 * BH; rH += 4) AH.push(KH(LH.getUint32(rH, !0)));
+       return AH
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L296-L297` → after: `L317-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L317-L318) · [Before (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L296-L297)

```diff
-     function QU(UU) {
-       return 2 ** Math.floor(Math.log2(Math.max(1, UU / yU)))
+     function PH(HH, BH) {
+       return HH >>>= 0, kH().subarray(HH / 1, HH / 1 + BH)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L300-L301` → after: `L322-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L322-L323) · [Before (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L300-L301)

```diff
-     function AU(UU) {
-       return (UU / yU).toFixed(1)
+     function UH() {
+       return null !== TH && TH.buffer === jH.memory.buffer || (TH = new DataView(jH.memory.buffer)), TH
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L303-L325` → after: `L325-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L325-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L325-L339) · [Before (L303-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L303-L325)

```diff
-   },
-   36961: UU => {
-     UU.exports = function(UU, XU, zU, cU) {
-       var yU = self || window;
-       try {
-         try {
-           var QU;
-           try {
-             QU = new yU.Blob([UU])
-           } catch (DU) {
-             (QU = new(yU.BlobBuilder || yU.WebKitBlobBuilder || yU.MozBlobBuilder || yU.MSBlobBuilder)).append(UU), QU = QU.getBlob()
-           }
-           var AU = yU.URL || yU.webkitURL,
-             FU = AU.createObjectURL(QU),
-             oU = new yU[XU](FU, zU);
-           return AU.revokeObjectURL(FU), oU
- ... (7 more removed lines; see GitHub link above)
+ 
+     function VH(HH, BH) {
+       return function(HH, BH) {
+         qH += BH, qH >= eH && (cH = new TextDecoder("utf-8", {
+           ignoreBOM: !0,
+           fatal: !0
+         }), cH.decode(), qH = BH);
+         return cH.decode(kH().subarray(HH, HH + BH))
+       }(HH >>> 0, BH)
+     }
+     let OH = null;
+     let bH = null;
+ 
+     function kH() {
+       return null !== bH && 0 !== bH.byteLength || (bH = new Uint8Array(jH.memory.buffer)), bH
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L347` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L343) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L347)

```diff
-       return UU.pathname.slice(UU.pathname.lastIndexOf("/") + 1)
+       return oH[HH]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L350-L357` → after: `L349-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L349-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L349-L351) · [Before (L350-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L350-L357)

```diff
-     function NU() {
-       try {
-         if ("undefined" === typeof localStorage) return null;
-         const UU = JSON.parse(localStorage.getItem(DU) ?? "[]");
-         return Array.isArray(UU) ? UU.filter((UU => "string" === typeof UU)) : []
-       } catch (UU) {
-         return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", UU), null
-       }
+     function fH(HH, BH) {
+       const LH = BH(4 * HH.length, 4) >>> 0;
+       return (null !== OH && 0 !== OH.byteLength || (OH = new Uint32Array(jH.memory.buffer)), OH).set(HH, LH / 4), nH = HH.length, LH
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L375-L376` → after: `L354-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L354-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L354-L358) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L375-L376)

```diff
-     function RU() {
-       return BU && !ZU
+     function lH(HH, BH) {
+       const LH = BH(4 * HH.length, 4) >>> 0,
+         AH = UH();
+       for (let rH = 0; rH < HH.length; rH++) AH.setUint32(LH + 4 * rH, xH(HH[rH]), !0);
+       return nH = HH.length, LH
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L378-L397` → after: `L360-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L360-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L360-L379) · [Before (L378-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L378-L397)

```diff
-     class PU {
-       worker = null;
-       failed = !1;
-       constructor() {
-         if (RU()) try {
-           this.worker = dU(), IU(gU, this.worker, ["error", () => {
-             this.failed = !0
-           }])
-         } catch {
-           this.stop()
-         }
-       }
-       take() {
-         const UU = this.worker;
-         if (this.worker = null, null !== UU && this.failed) throw IU(tU, UU, []), new Error("it did not run");
-         return UU
- ... (4 more removed lines; see GitHub link above)
+ 
+     function KH(HH) {
+       const BH = mH(HH);
+       return function(HH) {
+         HH < 1028 || (oH[HH] = IH, IH = HH)
+       }(HH), BH
+     }
+     let cH = new TextDecoder("utf-8", {
+       ignoreBOM: !0,
+       fatal: !0
+     });
+     cH.decode();
+     const eH = 2146435072;
+     let qH = 0;
+     const gH = new TextEncoder;
+     "encodeInto" in gH || (gH.encodeInto = function(HH, BH) {
+ ... (4 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L400-L408` → after: `L387-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L387-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L387-L431) · [Before (L400-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L400-L408)

```diff
-     class WU {
-       decoded;
-       worker;
-       reject;
-       constructor(UU, XU, zU, cU, QU) {
-         try {
-           this.worker = QU?.take() ?? dU()
-         } catch (DU) {
-           throw ZU = !0, new Error(`The zstd decoder's worker did not start: ${(0,FU.i)(DU)}`)
+ 
+     function DH(HH) {
+       if (void 0 !== jH) return jH;
+       void 0 !== HH && (Object.getPrototypeOf(HH) === Object.prototype ? ({
+         module: HH
+       } = HH) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
+       const BH = WH();
+       HH instanceof WebAssembly.Module || (HH = new WebAssembly.Module(HH));
+       return FH(new WebAssembly.Instance(HH, BH), HH)
+     }
+     async function wH(HH) {
+       if (void 0 !== jH) return jH;
+       void 0 !== HH && (Object.getPrototypeOf(HH) === Object.prototype ? ({
+         module_or_path: HH
+       } = HH) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
+       const BH = WH();
+ ... (29 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L410-L450` → after: `L433-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L433-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L433-L443) · [Before (L410-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L410-L450)

```diff
-         const AU = this.worker;
-         this.decoded = (0, yU.l)(((XU, yU) => {
-           this.reject = yU;
-           const QU = (UU, XU) => {
-             IU(gU, AU, [UU, XU])
-           };
-           QU("message", (UU => {
-             cU();
-             try {
-               const cU = IU(kU, UU, []);
-               if (!0 === cU) XU();
-               else {
-                 if ("string" === typeof cU) throw cU.startsWith(FU.e) && (ZU = !0), new Error(cU);
-                 zU(cU, IU(oU.B, cU, []))
-               }
-             } catch (DU) {
- ... (25 more removed lines; see GitHub link above)
+       }(await HH, BH);
+       return FH(LH, AH)
+     }
+     var ZH = LH(3171),
+       dH = LH(7172);
+     class aH extends Error {
+       stage;
+       constructor(HH, BH) {
+         super((0, ZH.F)(HH, BH), {
+           cause: BH
+         }), this.name = "BloxdShaderPackWasmLoadError", this.stage = HH
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L455-L465` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L450) · [Before (L455-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L455-L465)

```diff
-       if (globalThis.Worker !== pU) throw new Error("Worker is not the one the page loaded with");
-       return new Worker(new URL(zU.p + zU.u(79), zU.b), {
-         name: "wasmZstdDecoder",
-         type: "module"
-       })
-     }
-     const LU = Reflect.apply,
-       eU = ArrayBuffer,
-       CU = "undefined" === typeof Response ? void 0 : Response,
-       wU = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
-       qU = function() {
+       return sH ? Promise.resolve(sH) : (JH || (JH = async function() {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L488-L490` → after: `L453-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L453-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L453-L455) · [Before (L488-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L488-L490)

```diff
-           return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== qU && (0, AU.i)(CU, "Response", !0) && (0, AU.i)(wU, "ReadableStream", !0) && (0, AU.i)(qU.enqueue, "enqueue") && (0, AU.i)(qU.close, "close") && (0, AU.i)(qU.e … [truncated]
-         } catch {
-           return !1
+           HH = await (0, ZH.J)(new LH.U(LH(7175)), (0, dH.c)("bloxd_wasm_shader_pack"))
+         } catch (BH) {
+           throw new aH((0, ZH.O)(BH), BH)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L539-L562` → after: `L458-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L458-L459) · [Before (L539-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L539-L562)

```diff
-           LU(IU, YU, [new oU.l(EU, gU, cU)])
-         } catch {}
-         gU += cU
-       };
-       let GU, BU;
-       try {
-         GU = new WU(UU, XU, kU, cU, DU)
-       } catch (dU) {
-         throw tU(dU), dU
-       }
-       const ZU = UU => {
-         GU.fail(UU), void 0 !== BU && rU(BU)
-       };
-       let RU = !1;
-       zU.addEventListener("abort", (() => {
-         RU && GU.markWorkerFailed(), ZU(new Error(`${UU} stalled`))
- ... (8 more removed lines; see GitHub link above)
+           await wH({
+             module_or_path: HH
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L565-L601` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L462) · [Before (L565-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L565-L601)

```diff
-           throw new Error(`Fetching ${UU} failed: ${(0,FU.i)(dU)}`)
-         }
-         const {
-           ok: DU,
-           status: EU,
-           body: YU
-         } = function(UU, XU) {
-           try {
-             const {
-               ok: UU,
-               status: zU
-             } = XU;
-             return {
-               ok: UU,
-               status: zU,
-               body: LU(oU.fb, XU, [])
- ... (21 more removed lines; see GitHub link above)
+           throw new aH("instantiate", BH)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L603-L615` → after: `L464-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L464-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L464-L467) · [Before (L603-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L603-L615)

```diff
-         if (RU = !0, GU.end(), await GU.decoded, QU(), gU !== XU) throw new Error(`${UU} ended before its module did`)
-       } catch (dU) {
-         throw tU(dU), ZU(dU), dU
-       }
-       GU.terminate();
-       try {
-         LU(pU, YU, [])
-       } catch {}
-       const PU = await NU;
-       return void 0 !== AU && await (0, oU.D)(UU, new oU.l(EU), {
-         sha256: AU.sha256,
-         onMismatch: () => {}
-       }), PU
+         return sH = AH, sH
+       }(), JH.then(void 0, (() => {
+         JH = null
+       }))), JH)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L619-L621` → after: `L472-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L472-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L472-L478) · [Before (L619-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L619-L621)

```diff
-       try {
-         (0, oU.cb)(UU.cancel())
-       } catch {}
+       let [BH, LH, AH, rH] = HH;
+       const SH = {
+         file: BH,
+         line: LH,
+         message: AH
+       };
+       return rH && (SH.variants = rH.map(pH.p)), SH
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L628-L687` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L482) · [Before (L628-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L628-L687)

```diff
-       return iU ??= function() {
-         const UU = new Map,
-           XU = "bloxd_wasm_webgpu:5162616,bloxd_wasm_webgl:5545132,bloxd_wasm_webgl1:4878547,bloxd_wasm_workers:203635,bloxd_wasm_models:478484,bloxd_wasm_client:3732288";
-         for (const zU of XU?.split(",") ?? []) {
-           const [XU = "", cU] = zU.split(":"), yU = Number(cU);
-           Number.isInteger(yU) && yU > 0 && UU.set(XU, yU)
-         }
-         return UU
-       }(), iU.get(UU)
-     }
-     async function MU(UU, XU) {
-       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const cU = HU(UU.name);
-       if (void 0 === cU) return vU(await VU(UU, XU, zU), "cold-wasm");
-       const QU = OU ? new PU : null;
-       let AU;
- ... (44 more removed lines; see GitHub link above)
+       return JSON.parse(HH).map(yH)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L691-L695` → after: `L486-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L486-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L486-L487) · [Before (L691-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L691-L695)

```diff
-       return {
-         __proto__: null,
-         module: UU,
-         path: XU
-       }
+       if (!Number.isInteger(HH) || HH < 0 || HH > 4294967295) throw new Error(`${BH} ${HH} is not a whole number from 0 to 4294967295`);
+       return HH
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L698-L716` → after: `L490-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L490-L491) · [Before (L698-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L698-L716)

```diff
-     function VU(UU, XU, zU) {
-       return void 0 === HU(UU.name) ? (0, oU.M)(UU.url(), XU, zU) : (0, oU.M)(UU.url(), XU, {
-         ...zU,
-         hideThen: !0,
-         onDownloaded: () => {
-           ! function(UU) {
-             const XU = NU();
-             if (null === XU) return;
-             const zU = YU(UU),
-               cU = XU.filter((UU => UU !== zU));
-             cU.push(zU);
-             try {
-               localStorage.setItem(DU, JSON.stringify(cU.slice(-EU)))
-             } catch (yU) {
-               console.warn(`Bloxd wasm: ${zU} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, yU)
-             }
- ... (3 more removed lines; see GitHub link above)
+     function LB(HH) {
+       return [HH.named.map((HH => HH.name)), Uint32Array.from(HH.named, (HH => BB(HH.id, "Texture ID")))]
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L718-L721` → after: `L493-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L493-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L493-L498) · [Before (L718-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L718-L721)

```diff
-     async function sU(UU, XU, zU, cU) {
-       if (!OU || !RU()) return null;
-       const yU = UU.url(),
-         QU = `${yU.href}${uU}`;
+     const AB = new WeakMap;
+     const rB = new WeakMap,
+       SB = new WeakSet;
+ 
+     function hB(HH, BH) {
+       if (SB.has(HH)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L723` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L500) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L723)

```diff
-         return await (0, oU.jb)(QU, ((UU, yU, AU) => SU(QU, XU, UU, yU, AU, zU, cU)))
+         return BH()
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L725` → after: `L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L502) · [Before (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L725)

```diff
-         return console.warn(`${(0,FU.i)(AU)}: loading ${yU.href} instead`), null
+         throw LH instanceof WebAssembly.RuntimeError && SB.add(HH), LH
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L735-L737` → after: `L507-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L507-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L507-L568) · [Before (L735-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L735-L737)

```diff
-       const XU = XU => UU.filter((UU => lU.get(UU)?.state === XU)).length,
-         zU = XU("compiled");
-       return zU > 0 && zU === UU.length ? "compiled" : zU + XU("compiling") > 0 ? "compiling" : "none"
+       let BH = rB.get(HH);
+       if (!BH) {
+         let LH, AH;
+         BH = {
+           YBH: (BH, LH) => hB(HH, (() => function(HH, BH, LH) {
+             const AH = HH.YBH(BH.map((HH => HH.path)), BH.map((HH => HH.source)), ...LB(LH), LH.aliases.map((HH => HH.name)), LH.aliases.map((HH => HH.texture)), LH.aliases.map((HH => HH.kind)));
+             let rH = !1;
+             try {
+               const HH = AH.validationModuleCodes,
+                 BH = Array.from(AH.validationModuleKeys, ((BH, LH) => ({
+                   key: (0, pH.p)(BH),
+                   code: HH[LH]
+                 }))),
+                 LH = {
+                   errors: HB(AH.TSH),
+                   offInStrict: HB(AH.USH),
+ ... (46 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L741` → after: `L577-L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L577-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L577-L591) · [Before (L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L741)

```diff
-       return JU ?? jU([...lU.keys()])
+       return GB ??= async function() {
+         if ("undefined" === typeof WebAssembly) return uB("unsupported", "This browser has no WebAssembly"), null;
+         const HH = (0, EB.loadShaderPackTextures)().then((() => !0), (HH => (console.error("Could not load the shader pack textures, so shader packs can't run", HH), !1)));
+         try {
+           await (0, CB.l)();
+           const BH = await async function() {
+             let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iH;
+             return tB(await HH())
+           }();
+           return await HH ? BH : null
+         } catch (BH) {
+           const HH = BH instanceof Error ? BH.message : String(BH);
+           return uB(zB.e[BH instanceof aH ? BH.stage : "instantiate"], HH), null
+         }
+       }(), GB
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L744-L745` → after: `L594-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L594-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L594-L595) · [Before (L744-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L744-L745)

```diff
-     function bU(UU, XU, zU) {
-       return null === nU ? nU = UX(UU, XU, zU?.memoryMaximumBytes) : UU !== nU.build ? console.warn(`Bloxd wasm: ${UU.name} was asked for after ${nU.build.name} started loading, which this thread keeps`) : XU.name !== nU.workers.name && console.warn(`Bloxd wasm: ${XU.name} was as … [truncated]
+     function uB(HH, BH) {
+       (0, zB.l)(XB, `Shader pack wasm ${HH}, so shader packs can't run: ${BH}`, BH, `shader_pack_${HH}`)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L749-L751` → after: `L623-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L623-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L623-L628) · [Before (L749-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L749-L751)

```diff
-       return null === nU ? (0, yU.l)((UU => {
-         UU(!1)
-       })) : ((0, cU.cb)() && (nU = UX(nU.build, nU.workers, UU ?? nU.memoryMaximumBytes)), nU.loaded)
+       const BH = Object.prototype.hasOwnProperty.call(rH, HH) ? rH[HH]() : void 0;
+       if (void 0 !== BH) return {
+         sha256: BH,
+         onMismatch: SH.v
+       };
+       throw new AH.j(`${HH} has no release digest, so this build refuses it`)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L754-L803` → after: `L651-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L651-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L651-L666) · [Before (L754-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L754-L803)

```diff
-     function hU(UU, XU) {
-       if (null !== nU) return (0, yU.h)([]);
-       const zU = UU.filter((UU => !lU.has(UU.name))).map((UU => {
-         const zU = new AbortController,
-           cU = {
-             compiled: VU(UU, (0, QU.e)(UU.name), {
-               priority: XU,
-               QU: zU.signal,
-               onDownloaded: () => {
-                 cU.downloaded = !0
-               },
-               retries: {
-                 onRetry: () => {
-                   cU.downloaded = !1, null !== nU && zU.abort()
-                 }
-               }
- ... (34 more removed lines; see GitHub link above)
+     function QH(HH) {
+       if (!HH) return 0;
+       const BH = uH.indexOf(HH);
+       if (BH <= 0) throw new Error(`"${HH}" is not a shader pack hook function`);
+       return BH
+     }
+ 
+     function WH(HH) {
+       if (0 === HH) return null;
+       const BH = uH[HH];
+       if (void 0 === BH) throw new Error(`${HH} is not a shader pack hook function id`);
+       return BH
+     }
+ 
+     function MH(HH) {
+       const BH = AH.d.length;
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L805-L808` → after: `L668-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L668-L669) · [Before (L805-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L805-L808)

```diff
-         build: UU,
-         workers: XU,
-         memoryMaximumBytes: zU,
-         loaded: QU
+         strict: HH >= BH,
+         program: AH.d[HH % BH]
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L813` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L674) · [Before (L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L813)

```diff
-       return xU.get(UU)
+       return Number(HH.strict) * AH.d.length + AH.d.indexOf(HH.program)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L817-L840` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L678) · [Before (L817-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L817-L840)

```diff
-       const XU = performance.now(),
-         zU = lU.get(UU.name);
-       lU.delete(UU.name);
-       const cU = !0 === zU?.downloaded ? zU : void 0;
-       return void 0 !== zU && void 0 === cU && zU.cancel.abort(), (0, yU.l)(((zU, QU) => {
-         const AU = (cU, yU) => {
-             xU.set(UU.name, {
-               path: yU,
-               ms: performance.now() - XU
-             }), zU(cU)
-           },
-           FU = () => {
-             (0, yU.x)(yX(UU), (UU => {
-               let {
-                 module: XU,
-                 path: zU
- ... (8 more removed lines; see GitHub link above)
+       return "" === HH ? [] : HH.split(" ")
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L842-L847` → after: `L680-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L680-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L680-L692) · [Before (L842-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L842-L847)

```diff
-     async function cX(UU, XU) {
-       const {
-         module: zU
-       } = await yX(UU, {
-         retries: XU
-       });
+ 
+     function PH(HH) {
+       const BH = {
+         variantFlags: new Uint8Array(rH),
+         hooks: new Uint8Array(rH * SH),
+         moduleCodes: Array(rH).fill(""),
+         reads: Array(2 * rH).fill("")
+       };
+       for (const LH of HH) {
+         const HH = xH(LH.key),
+           AH = (HH, BH) => null === LH.hooks.surface || LH.reads.fragment.includes(HH) ? 0 : BH;
+         BH.variantFlags[HH] = (LH.sceneDepth ? hH : 0) | (LH.movesVertices ? tH : 0) | (LH.sunShadow ? zH : 0) | (LH.airShadow ? CH : 0) | (LH.discards ? EH : 0) | AH("localPosition", XH) | AH("enchantSpeed", GH) | AH("enchantTier", YH), BH.hooks[HH * SH] = QH(LH.hooks.vertex), B … [truncated]
+       }
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L850-L852` → after: `L695-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L695-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L695-L722) · [Before (L850-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L850-L852)

```diff
-     async function yX(UU) {
-       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       return await MU(UU, (0, QU.e)(UU.name), XU)
+ 
+     function TH(HH) {
+       const {
+         hooks: BH,
+         moduleCodes: LH,
+         reads: AH
+       } = HH;
+       return Array.from(HH.variantFlags, ((HH, rH) => {
+         const XH = rH * SH;
+         return {
+           key: MH(rH),
+           hooks: {
+             vertex: WH(BH[XH]),
+             surface: WH(BH[XH + 1]),
+             light: WH(BH[XH + 2])
+           },
+ ... (12 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L855` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L725) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L855)

```diff
-   7213: (UU, XU, zU) => {
+   7189: (HH, BH, LH) => {
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L857` → after: `L727-L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L727-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L727-L731) · [Before (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L857)

```diff
-       e: () => AU
+       d: () => AH,
+       g: () => hH,
+       i: () => tH,
+       j: () => rH,
+       k: () => SH
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L859-L874` → after: `L733-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L733-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L733-L743) · [Before (L859-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L859-L874)

```diff
-     var cU = zU(3176);
-     const yU = {
-       bloxd_wasm: () => "7f53022eec2cb692d1cd79c2eeeb6f8a7607270973e0f6e0c72df23cc86c2b9f",
-       bloxd_wasm_client: () => "57b44b4e08ce6b959c851fa76e413083d1b9237ff788a96d3931877841e31e3b",
-       bloxd_wasm_workers: () => "e095c7f514df56db3ce2e1ace2484bbfab4bed79f4fe2840e3f351e25bef8126",
-       bloxd_wasm_models: () => "d264f0be9eaf7df40aab32e155f7170e6a2029f73e36b3aa879f2b238d2f98c1",
-       bloxd_wasm_webgpu: () => "45fb92410826d4556fb1610a55c96252dff22810c6b27376d120613e28fb722d",
-       bloxd_wasm_webgl: () => "b3808b20b91fd2d43a5bb7c9219998b24db293acd36599f3cfc217aa2f03b9ee",
-       bloxd_wasm_webgl1: () => "955dabc5322d1e4788a42fc358c9d0d686dca5eaafd1809064b6bbdc73e56b76",
-       bloxd_wasm_replay: () => "13f05b235e8455220553f84808d39e41289fbb259c59a2477b25fa31ba963b54",
-       bloxd_wasm_recorder: () => "a55faba2add92e1697c15223e522d87ba7631a7aaeb806e24cd4da91de455075",
-       bloxd_wasm_anim: () => "9fd10823eecbab78e8d130701ec44bc31691f897e4963312a2cef80080a0b854",
-       bloxd_wasm_textures: () => "659ffb2c9bc8159fee909f52c433ec6a1a8921210ad3488ef78dfd6ff1c90774",
-       bloxd_wasm_shader_pack: () => "adccd38b5fea7520e10f50666ef79fc0704d8a73746e668ac8e591ff0037f1dc"
-     };
-     var QU = zU(5179);
+     const AH = ["terrain", "liquid", "model"];
+ 
+     function rH() {
+       const HH = [];
+       for (const BH of [!1, !0])
+         for (const LH of AH) HH.push({
+           strict: BH,
+           program: LH
+         });
+       return HH
+     }
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L877-L882` → after: `L746-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L746-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/149.js#L746-L754) · [Before (L877-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/149.js#L877-L882)

```diff
-       const XU = Object.prototype.hasOwnProperty.call(yU, UU) ? yU[UU]() : void 0;
-       if (void 0 !== XU) return {
-         sha256: XU,
-         onMismatch: QU.v
-       };
-       throw new cU.i(`${UU} has no release digest, so this build refuses it`)
+       return `${HH.strict?"strict":"allow"}.${HH.program}`
+     }
+ 
+     function hH(HH) {
+       return !HH.hooks.vertex && !HH.hooks.surface && !HH.hooks.light
+     }
+ 
+     function tH(HH, BH) {
+       return "off" !== BH && (null === HH || HH.some((HH => HH.key.strict === ("strict" === BH) && !hH(HH))))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/150.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/150.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L4-L7` → after: `L4-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/150.js#L4-L13) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/150.js#L4-L7)

```diff
-   7219: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       loadShaderPackTextures: () => AU,
-       shaderPackTextures: () => FU
+   39689: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => CH,
+       e: () => GH,
+       f: () => YH,
+       j: () => WH,
+       l: () => XH,
+       p: () => EH,
+       q: () => hH,
+       r: () => uH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L9` → after: `L15-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L15-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/150.js#L15-L719) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/150.js#L9)

```diff
-     var cU = zU(5608);
+     var AH = LH(297),
+       rH = LH(1757);
+     const SH = "A valid external Instance reference no longer exists.";
+ 
+     function hH(HH) {
+       return HH.includes(SH)
+     }
+     const tH = [
+         [1e4, "<10s", "lt10s"],
+         [6e4, "<1m", "lt1m"],
+         [3e5, "<5m", "lt5m"],
+         [18e5, "<30m", "lt30m"],
+         [1 / 0, "30m+", "ge30m"]
+       ],
+       zH = [
+         [1e3, "lt1s"],
+ ... (689 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L11` → after: `L721-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L721-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/150.js#L721-L730) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/150.js#L11)

```diff
-       QU = null;
+       wH = !1;
+     const ZH = new Map,
+       dH = new Map;
+     let aH = null;
+ 
+     function sH(HH) {
+       const BH = BH => HH.filter((HH => ZH.get(HH)?.state === BH)).length,
+         LH = BH("compiled");
+       return LH > 0 && LH === HH.length ? "compiled" : LH + BH("compiling") > 0 ? "compiling" : "none"
+     }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L14-L22` → after: `L733-L885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L733-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/150.js#L733-L885) · [Before (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/150.js#L14-L22)

```diff
-       return QU ??= Promise.all([zU.e(84), zU.e(202)]).then((() => zU(41573))).then((UU => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: XU,
-           textureNameToIndex: zU,
-           textureAnimationData: QU
-         } = UU;
-         return yU ??= (0, cU.k)(zU, QU, XU), yU
-       })), QU
-     }
+       return aH ?? sH([...ZH.keys()])
+     }
+ 
+     function iH(HH, BH, LH) {
+       return null === DH ? DH = HB(HH, BH, LH?.memoryMaximumBytes) : HH !== DH.build ? console.warn(`Bloxd wasm: ${HH.name} was asked for after ${DH.build.name} started loading, which this thread keeps`) : BH.name !== DH.workers.name && console.warn(`Bloxd wasm: ${BH.name} was as … [truncated]
+     }
+ 
+     function pH(HH) {
+       return null === DH ? (0, rH.i)((HH => {
+         HH(!1)
+       })) : ((0, AH.$)() && (DH = HB(DH.build, DH.workers, HH ?? DH.memoryMaximumBytes)), DH.loaded)
+     }
+ 
+     function yH(HH, BH) {
+       if (null !== DH) return (0, rH.g)([]);
+       const LH = HH.filter((HH => !ZH.has(HH.name))).map((HH => {
+ ... (137 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L25` → after: `L888-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L888-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/150.js#L888-L893) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/150.js#L25)

```diff
-       if (null === yU) throw new Error("Shader pack textures read before loadShaderPackTextures");
+       const HH = [];
+       for (const BH of [!1, !0])
+         for (const LH of AH) HH.push({
+           strict: BH,
+           program: LH
+         });
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/151.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/151.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L2)

```diff
- export const ids = [150, 151];
+ export const ids = [151];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L4)

```diff
-   7251: (UU, XU, zU) => {
+   37012: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L6-L19` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L6) · [Before (L6-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L6-L19)

```diff
-       forgetShaderPackActiveHint: () => CU,
-       isOtherApiVersion: () => WU,
-       isShaderPackActive: () => BU,
-       isShaderPackChangePending: () => PU,
-       markShaderPackChangePending: () => RU,
-       pageShaderPackValidationVersion: () => dU,
-       reconcileStoredShaderPackHint: () => eU,
-       removeShaderPack: () => GU,
-       replaceShaderPack: () => tU,
-       saveShaderPack: () => aU,
-       shaderPackNeedsCheck: () => LU,
-       storedPackOutcome: () => ZU,
-       storedShaderPackFiles: () => NU,
-       toStoredShaderPack: () => YU
+       WasmTextureWorker: () => xH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L21-L28` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L8-L11) · [Before (L21-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L21-L28)

```diff
-     var cU = zU(5608),
-       yU = zU(5603),
-       QU = zU(42),
-       AU = zU(3849),
-       FU = zU(7253),
-       oU = zU(7219);
-     const DU = "shaderPackChangePending";
-     let EU = null;
+     var AH = LH(609),
+       rH = LH(3549),
+       SH = LH(37014),
+       hH = LH.n(SH);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L30-L38` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L13-L14) · [Before (L30-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L30-L38)

```diff
-     function YU(UU, XU, zU) {
-       return {
-         manifest: UU.manifest,
-         files: (0, cU.u)(UU.files),
-         validation: XU,
-         ...zU && {
-           listing: zU
-         }
-       }
+     function tH() {
+       return hH()('(()=>{var HH={d:(BH,LH)=>{for(var AH in LH)HH.o(LH,AH)&&!HH.o(BH,AH)&&Object.defineProperty(BH,AH,{enumerable:!0,get:LH[AH]})},o:(HH,BH)=>Object.prototype.hasOwnProperty.call(HH,BH),r:HH=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(H … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L42-L45` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L23) · [Before (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L42-L45)

```diff
-       return Object.keys(UU.files).map((XU => ({
-         path: XU,
-         source: UU.files[XU]
-       })))
+       return "" === HH ? [] : HH.split("\0")
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L50-L51` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L27-L28) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L50-L51)

```diff
-       const XU = IU.then(UU);
-       return IU = XU.catch((() => {})), XU
+       if ("" !== HH)
+         for (const BH of HH.split("\n")) console.error(BH)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L55` → after: `L32-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L32-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L32-L76) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L55)

```diff
-       return pU((() => gU(UU, XU)))
+       return async function(HH, BH) {
+         const LH = Object.keys(HH),
+           AH = [],
+           rH = new Map,
+           SH = new Uint32Array(LH.length);
+         for (const [hH, tH] of LH.entries()) {
+           const {
+             url: BH
+           } = HH[tH];
+           rH.has(BH) || (rH.set(BH, AH.length), AH.push(BH)), SH[hH] = rH.get(BH)
+         }
+         return {
+           sources: await BH(AH),
+           names: LH.join("\0"),
+           sourceOfName: SH
+         }
+ ... (29 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L58-L59` → after: `L79-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L79-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L79-L81) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L58-L59)

```diff
-     function tU(UU, XU, zU) {
-       return pU((async () => JSON.stringify(await (0, FU.f)()) === JSON.stringify(UU) && (null === XU ? (await kU(), !0) : gU(XU, zU))))
+     function WH(HH, BH) {
+       const LH = EH.t.from(HH, BH ? EH.p.Optional : EH.p.Error);
+       return LH.code !== EH.p.Fetch && LH.code !== EH.p.Error && (0, CH.h)(LH.message), LH
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L61-L63` → after: `L83-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L83-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L83-L85) · [Before (L61-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L61-L63)

```diff
-     async function gU(UU, XU) {
-       const zU = await QU.g.setItem(FU.e, UU);
-       return zU && wU(UU, XU), zU
+ 
+     function MH(HH) {
+       return HH.message ? new Error(`the texture worker failed: ${HH.message}`) : new EH.t(EH.p.Load, "the texture worker failed to start")
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L65-L66` → after: `L87-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L87-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L87-L279) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L65-L66)

```diff
-     async function kU() {
-       await QU.g.removeItem(FU.e), QU.k.removeItem(AU.b)
+     class xH {
+       constructor(HH) {
+         this.worker = HH, this.failure = void 0, this.abandonStep = null, HH.addEventListener("error", (HH => {
+           HH.preventDefault(), this.failure ??= MH(HH)
+         }))
+       }
+       static async generateRequired(HH, BH, LH, SH) {
+         let hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : EH.d,
+           CH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
+         const GH = (0, zH.m)();
+         if (null !== GH) throw WH(new EH.t(EH.p.Load, GH), !1);
+         let YH;
+         const MH = new AbortController;
+         try {
+           YH = new xH(function() {
+             try {
+ ... (177 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L69-L70` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L282-L283) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L69-L70)

```diff
-     function GU() {
-       return pU(kU)
+     function vH(HH, BH) {
+       return BH > 0 ? `${HH}, its module's memory ${Math.round(BH/2**20)} MiB` : HH
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L73-L74` → after: `L296-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L296-L297) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L73-L74)

```diff
-     function BU(UU, XU) {
-       return "active" === ZU(UU, XU).kind
+     function SH(HH) {
+       return 2 ** Math.floor(Math.log2(Math.max(1, HH / rH)))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L77-L98` → after: `L300-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L300-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L300-L324) · [Before (L77-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L77-L98)

```diff
-     function ZU(UU, XU) {
-       var zU;
-       return null === UU ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : WU(UU) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (zU = UU.validation) || void 0 === zU ? void 0 : zU.ok) || UU.validation.fromRecheck ? null === XU ? {
-         kind: "none",
-         reason: "noCompiler"
-       } : LU(UU, XU) ? {
-         kind: "blocked",
-         messageKey: "shaderPack:failedUnchecked"
-       } : UU.validation.ok ? {
-         kind: "active"
- ... (6 more removed lines; see GitHub link above)
+     function hH(HH) {
+       return (HH / rH).toFixed(1)
+     }
+   },
+   37014: HH => {
+     HH.exports = function(HH, BH, LH, AH) {
+       var rH = self || window;
+       try {
+         try {
+           var SH;
+           try {
+             SH = new rH.Blob([HH])
+           } catch (CH) {
+             (SH = new(rH.BlobBuilder || rH.WebKitBlobBuilder || rH.MozBlobBuilder || rH.MSBlobBuilder)).append(HH), SH = SH.getBlob()
+           }
+           var hH = rH.URL || rH.webkitURL,
+ ... (9 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L103` → after: `L351-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L351-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L351-L451) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L103)

```diff
-       QU.n.setItem(DU, performance.timeOrigin)
+       try {
+         if ("undefined" === typeof localStorage) return null;
+         const HH = JSON.parse(localStorage.getItem(CH) ?? "[]");
+         return Array.isArray(HH) ? HH.filter((HH => "string" === typeof HH)) : []
+       } catch (HH) {
+         return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", HH), null
+       }
+     }
+     const YH = Reflect.apply,
+       uH = "undefined" === typeof Worker ? void 0 : Worker,
+       QH = uH?.prototype.postMessage,
+       WH = uH?.prototype.terminate,
+       MH = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
+       xH = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
+       vH = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
+       PH = function() {
+ ... (85 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L107` → after: `L455-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L455-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L455-L615) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L107)

```diff
-       return QU.n.getItem(DU) === performance.timeOrigin
+       if (globalThis.Worker !== uH) throw new Error("Worker is not the one the page loaded with");
+       return new Worker(new URL(LH.p + LH.u(79), LH.b), {
+         name: "wasmZstdDecoder",
+         type: "module"
+       })
+     }
+     const kH = Reflect.apply,
+       mH = ArrayBuffer,
+       oH = "undefined" === typeof Response ? void 0 : Response,
+       IH = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
+       fH = function() {
+         let HH;
+         void 0 !== IH && new IH({
+           __proto__: null,
+           start(BH) {
+             const {
+ ... (145 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L111` → after: `L619-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L619-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L619-L621) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L111)

```diff
-       return !(0, yU.i)(UU.manifest.apiVersion)
+       try {
+         (0, zH.W)(HH.cancel())
+       } catch {}
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L115` → after: `L628-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L628-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L628-L687) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L115)

```diff
-       return EU ??= UU.mq((0, oU.shaderPackTextures)()), EU
+       return gH ??= function() {
+         const HH = new Map,
+           BH = "bloxd_wasm_webgpu:5163087,bloxd_wasm_webgl:5546226,bloxd_wasm_webgl1:4879736,bloxd_wasm_workers:203635,bloxd_wasm_models:478484,bloxd_wasm_client:3732760";
+         for (const LH of BH?.split(",") ?? []) {
+           const [BH = "", AH] = LH.split(":"), rH = Number(AH);
+           Number.isInteger(rH) && rH > 0 && HH.set(BH, rH)
+         }
+         return HH
+       }(), gH.get(HH)
+     }
+     async function RH(HH, BH) {
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+       const AH = NH(HH.name);
+       if (void 0 === AH) return jH(await nH(HH, BH, LH), "cold-wasm");
+       const SH = lH ? new VH : null;
+       let hH;
+ ... (44 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L119-L120` → after: `L691-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L691-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L691-L726) · [Before (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L119-L120)

```diff
-       var zU;
-       return (null === (zU = UU.validation) || void 0 === zU ? void 0 : zU.headerVersion) !== dU(XU)
+       return {
+         __proto__: null,
+         module: HH,
+         path: BH
+       }
+     }
+ 
+     function nH(HH, BH, LH) {
+       return void 0 === NH(HH.name) ? (0, zH.J)(HH.url(), BH, LH) : (0, zH.J)(HH.url(), BH, {
+         ...LH,
+         hideThen: !0,
+         onDownloaded: () => {
+           ! function(HH) {
+             const BH = GH();
+             if (null === BH) return;
+             const LH = XH(HH),
+ ... (20 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L124-L126` → after: `L735-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L735-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L735-L737) · [Before (L124-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L124-L126)

```diff
-       return pU((async () => {
-         wU(await (0, FU.f)(!0), UU)
-       }))
+       const BH = BH => HH.filter((HH => ZH.get(HH)?.state === BH)).length,
+         LH = BH("compiled");
+       return LH > 0 && LH === HH.length ? "compiled" : LH + BH("compiling") > 0 ? "compiling" : "none"
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L130-L132` → after: `L741-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L741-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L741-L751) · [Before (L130-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L130-L132)

```diff
-       return pU((async () => {
-         QU.k.removeItem(AU.b)
-       }))
+       return aH ?? sH([...ZH.keys()])
+     }
+ 
+     function iH(HH, BH, LH) {
+       return null === DH ? DH = HB(HH, BH, LH?.memoryMaximumBytes) : HH !== DH.build ? console.warn(`Bloxd wasm: ${HH.name} was asked for after ${DH.build.name} started loading, which this thread keeps`) : BH.name !== DH.workers.name && console.warn(`Bloxd wasm: ${BH.name} was as … [truncated]
+     }
+ 
+     function pH(HH) {
+       return null === DH ? (0, rH.i)((HH => {
+         HH(!1)
+       })) : ((0, AH.$)() && (DH = HB(DH.build, DH.workers, HH ?? DH.memoryMaximumBytes)), DH.loaded)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L136` → after: `L755-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L755-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L755-L783) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L136)

```diff
-       BU(UU, XU) ? QU.k.setItem(AU.b, !0) : QU.k.removeItem(AU.b)
+       if (null !== DH) return (0, rH.g)([]);
+       const LH = HH.filter((HH => !ZH.has(HH.name))).map((HH => {
+         const LH = new AbortController,
+           AH = {
+             compiled: nH(HH, (0, SH.c)(HH.name), {
+               priority: BH,
+               xB: LH.signal,
+               onDownloaded: () => {
+                 AH.downloaded = !0
+               },
+               retries: {
+                 onRetry: () => {
+                   AH.downloaded = !1, null !== DH && LH.abort()
+                 }
+               }
+             }),
+ ... (13 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L148-L156` → after: `L786-L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L786-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L786-L809) · [Before (L148-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L148-L156)

```diff
-     function AU() {
-       return QU ??= Promise.all([zU.e(84), zU.e(202)]).then((() => zU(41573))).then((UU => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: XU,
-           textureNameToIndex: zU,
-           textureAnimationData: QU
-         } = UU;
-         return yU ??= (0, cU.k)(zU, QU, XU), yU
-       })), QU
+     function HB(HH, BH, LH) {
+       aH ??= sH(BH.name === HH.name ? [HH.name] : [HH.name, BH.name]);
+       const SH = (0, AH.K)((async () => {
+         (0, hH.x)(), dH.clear();
+         const LH = LB(HH),
+           AH = BH.name === HH.name ? LH : LB(BH);
+         for (const {
+             cancel: HH
+           }
+           of ZH.values()) HH.abort();
+         ZH.clear(), await (0, rH.g)([LH, AH]);
+         const SH = await LH,
+           tH = await AH;
+         return (0, hH.x)(), {
+           module: SH,
+           workerModule: tH
+ ... (8 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L159-L160` → after: `L812-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L812-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/151.js#L812-L847) · [Before (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/151.js#L159-L160)

```diff
-     function FU() {
-       if (null === yU) throw new Error("Shader pack textures read before loadShaderPackTextures");
+     function BB(HH) {
+       return dH.get(HH)
+     }
+ 
+     function LB(HH) {
+       const BH = performance.now(),
+         LH = ZH.get(HH.name);
+       ZH.delete(HH.name);
+       const AH = !0 === LH?.downloaded ? LH : void 0;
+       return void 0 !== LH && void 0 === AH && LH.cancel.abort(), (0, rH.i)(((LH, SH) => {
+         const hH = (AH, rH) => {
+             dH.set(HH.name, {
+               path: rH,
+               ms: performance.now() - BH
+             }), LH(AH)
+           },
+ ... (20 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/152.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/152.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27)

#### 1. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L4-L9` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/152.js#L4-L7) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/152.js#L4-L9)

```diff
-   7226: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => BU,
-       f: () => ZU,
-       g: () => kU,
-       h: () => gU
+   7179: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       loadShaderPackTextures: () => hH,
+       shaderPackTextures: () => tH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L11-L22` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/152.js#L9-L11) · [Before (L11-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/152.js#L11-L22)

```diff
-     var cU = zU(7233);
-     const yU = 6,
-       QU = 3,
-       AU = 1,
-       FU = 2,
-       oU = 4,
-       DU = 8,
-       EU = 16,
-       YU = 32,
-       NU = 64,
-       IU = 128,
-       pU = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];
+     var AH = LH(5531);
+     let rH = null,
+       SH = null;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L24-L27` → after: `L13-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L13-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/152.js#L13-L25) · [Before (L24-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/152.js#L24-L27)

```diff
-     function aU(UU) {
-       if (!UU) return 0;
-       const XU = pU.indexOf(UU);
-       if (XU <= 0) throw new Error(`"${UU}" is not a shader pack hook function`);
+     function hH() {
+       return SH ??= Promise.all([LH.e(84), LH.e(206)]).then((() => LH(41802))).then((HH => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: BH,
+           textureNameToIndex: LH,
+           textureAnimationData: SH
+         } = HH;
+         return rH ??= (0, AH.f)(LH, SH, BH), rH
+       })), SH
+     }
+ 
+     function tH() {
+       if (null === rH) throw new Error("Shader pack textures read before loadShaderPackTextures");
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/153.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/153.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L2)

```diff
- export const ids = [153];
+ export const ids = [152, 153];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L4-L2728` → after: `L4-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L4-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L4-L28) · [Before (L4-L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L4-L2728)

```diff
-   34715: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => FU,
-       g: () => AU
-     });
-     var cU = zU(281),
-       yU = zU(134),
-       QU = zU(34719);
- 
-     function AU() {
-       var UU, XU, zU;
-       return null !== (UU = (0, cU.k)(null !== (XU = null === (zU = (0, yU.o)()) || void 0 === zU ? void 0 : zU.renderer) && void 0 !== XU ? XU : null, (0, yU.l)())) && void 0 !== UU ? UU : "unknown"
-     }
- 
-     function FU(UU, XU, zU, cU, yU) {
-       const AU = null === XU ? "untimed" : `${Math.round(XU)} ms`;
- ... (2709 more removed lines; see GitHub link above)
+   7201: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       forgetShaderPackActiveHint: () => oH,
+       isOtherApiVersion: () => OH,
+       isShaderPackActive: () => PH,
+       isShaderPackChangePending: () => VH,
+       markShaderPackChangePending: () => UH,
+       pageShaderPackValidationVersion: () => bH,
+       reconcileStoredShaderPackHint: () => mH,
+       removeShaderPack: () => vH,
+       replaceShaderPack: () => WH,
+       saveShaderPack: () => QH,
+       shaderPackNeedsCheck: () => kH,
+       storedPackOutcome: () => TH,
+       storedShaderPackFiles: () => GH,
+       toStoredShaderPack: () => XH
+ ... (9 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L2730-L2735` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L30-L37) · [Before (L2730-L2735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L2730-L2735)

```diff
-     function uU() {
-       if (null === gU) {
-         oU.k.removeItem("wasmLastPick"), oU.k.removeItem("wasmGuessVerdict");
-         try {
-           localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
-         } catch {}(0, FU.m)(), gU = (0, DU.F)(NU.g).then((UU => (null === UU || (0, DU.r)(UU) || (kU = IU.e[UU.backend], yU.e.followGameGpu("webgpu" === UU.backend ? UU.adapter : null), "webgpu" === UU.backend && (0, pU.f)()), UU)))
+     function XH(HH, BH, LH) {
+       return {
+         manifest: HH.manifest,
+         files: (0, AH.t)(HH.files),
+         validation: BH,
+         ...LH && {
+           listing: LH
+         }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L2745-L2748` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L42-L45) · [Before (L2745-L2748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L2745-L2748)

```diff
-       return UU ? UU.load() : Promise.resolve().then((function() {
-         var UU = new Error("Cannot find module '@bloxd/wasm/client'");
-         throw UU.code = "MODULE_NOT_FOUND", UU
-       })).then((UU => UU.bloxdWasmClient))
+       return Object.keys(HH.files).map((BH => ({
+         path: BH,
+         source: HH.files[BH]
+       })))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L2752` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L50-L51) · [Before (L2752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L2752)

```diff
-       oU.k.setItem(tU, UU)
+       const BH = YH.then(HH);
+       return YH = BH.catch((() => {})), BH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L2756-L2791` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L55) · [Before (L2756-L2791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L2756-L2791)

```diff
-       const zU = oU.k.getItem(tU);
-       return null === zU ? function(UU) {
-         if (void 0 !== (0, cU.b)(UU, "webgpu") && (0, DU.D)()) return "webgpu";
-         return !1 === (0, AU.t)() ? "webgl1" : "webgl"
-       }(UU) : "none" === zU ? null : "string" === typeof zU && void 0 !== (0, cU.b)(UU, zU) ? zU : (XU && console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(zU)}, is none of this client's: guessing WebGL2's`), "webgl")
-     }
-     async function vU() {
-       if (null === NU.g) return iU(null);
-       const UU = MU(NU.g, !0);
-       return null === UU ? null : NU.g[UU]()
-     }
- 
-     function VU() {
-       null === gU && null !== NU.g && "webgl" === MU(NU.g, !1) && (0, aU.b)()
-     }
-     let sU = null,
- ... (20 more removed lines; see GitHub link above)
+       return uH((() => MH(HH, BH)))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L2794-L2803` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L58-L59) · [Before (L2794-L2803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L2794-L2803)

```diff
-     function xU() {
-       return nU
-     }
- 
-     function JU() {
-       return mU
-     }
-     async function jU() {
-       const UU = null === gU ? null : await gU;
-       return null !== UU && (0, DU.r)(UU) && (gU = null, sU = null, nU = null, mU = null), uU()
+     function WH(HH, BH, LH) {
+       return uH((async () => JSON.stringify(await (0, tH.e)()) === JSON.stringify(HH) && (null === BH ? (await xH(), !0) : MH(BH, LH))))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L2817-L2820` → after: `L62-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L62-L63) · [Before (L2817-L2820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L2817-L2820)

```diff
-       return await Promise.all([(0, QU.h)(void 0, !0), (0, AU.j)()]), (0, cU.n)(UU, yU.g, {
-         ...XU,
-         memoryMaximumBytes: (0, FU.k)()
-       })
+       const LH = await SH.c.setItem(tH.c, HH);
+       return LH && IH(HH, BH), LH
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L2823-L3117` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L66) · [Before (L2823-L3117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L2823-L3117)

```diff
-       return await (0, QU.h)(void 0, !0), (0, cU.q)((0, FU.k)())
-     }
-   },
-   41814: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => FU,
-       f: () => QU
-     });
-     var cU = zU(281);
-     const yU = "provokingVertex";
- 
-     function QU(UU, XU) {
-       if ("webgl" !== UU) return;
-       const zU = new URLSearchParams(XU).get(yU);
-       return "first" === zU || "last" !== zU && null
-     }
- ... (279 more removed lines; see GitHub link above)
+       await SH.c.removeItem(tH.c), SH.e.removeItem(hH.d)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L3121` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L70) · [Before (L3121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L3121)

```diff
-       LU.clear()
+       return uH(xH)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L3171-L3172` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L74) · [Before (L3171-L3172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L3171-L3172)

```diff
-       const zU = (0, FU.e)(XU.variants);
-       return UU.setShaderPack(zU.variantFlags, zU.hooks, zU.moduleCodes, (0, oU.D)(XU.layers), oU.o[XU.policy], XU.keepCircleShadows)
+       return "active" === TH(HH, BH).kind
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L3183-L3189` → after: `L79-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L79-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L79-L92) · [Before (L3183-L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L3183-L3189)

```diff
-       const cU = null !== (zU = null === UU || void 0 === UU ? void 0 : UU.reason) && void 0 !== zU ? zU : "none";
-       return pU.has(cU) ? {
-         messageKey: XU ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
-         noAdapter: !0
-       } : "not_requested" === cU && "override" === (null === UU || void 0 === UU ? void 0 : UU.source) ? {
-         messageKey: "shaderPack:failedRendererOverride",
-         noAdapter: !1
+       return null === HH ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : OH(HH) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (LH = HH.validation) || void 0 === LH ? void 0 : LH.ok) || HH.validation.fromRecheck ? null === BH ? {
+         kind: "none",
+         reason: "noCompiler"
+       } : kH(HH, BH) ? {
+         kind: "blocked",
+         messageKey: "shaderPack:failedUnchecked"
+       } : HH.validation.ok ? {
+         kind: "active"
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L3191-L3773` → after: `L94-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L94-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L94-L98) · [Before (L3191-L3773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L3191-L3773)

```diff
-         messageKey: aU.has(cU) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
-         noAdapter: !1
-       }
-     }
-     class gU extends Error {
-       constructor(UU) {
-         super(`the shader pack can't run in this game: ${UU}`), this.messageKey = UU, this.name = "ShaderPackJoinError"
-       }
-     }
-     const kU = "strict";
-     class GU {
-       constructor(UU) {
-         this.deps = UU, this.pagePack = void 0, this.loaded = null, this.policy = kU, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, t … [truncated]
-           status: "none"
-         }))).then((UU => (this.loaded = UU, "active" === UU.status && (this.handOverToPreviews(UU), null !== UU.harnessPolicy && (this.policy = UU.harnessPolicy, this.handOver())), UU)))
-       }
- ... (567 more removed lines; see GitHub link above)
+         kind: "blocked",
+         messageKey: "shaderPack:failedValidation"
+       } : {
+         kind: "none",
+         reason: "failedWhenLoaded"
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L3778-L3782` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L103) · [Before (L3778-L3782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L3778-L3782)

```diff
-       "hidden" === document.visibilityState && (yU = !1, document.removeEventListener("visibilitychange", AU))
-     }
- 
-     function FU() {
-       yU || "visible" !== document.visibilityState || !(0, cU.q)() && !QU() || (yU = !0, document.addEventListener("visibilitychange", AU))
+       SH.f.setItem(CH, performance.timeOrigin)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L3786-L3852` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L107) · [Before (L3786-L3852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L3786-L3852)

```diff
-       return yU || QU()
-     }
-   },
-   41974: (UU, XU, zU) => {
-     UU.exports = zU.p + "static/media/bloxd_wasm_models_bg.2bf764b975051a969c78.wasm"
-   },
-   41967: (UU, XU, zU) => {
-     UU.exports = zU.p + "static/media/bloxd_wasm_workers_bg.8d69bfc9c0063cf52d1d.wasm"
-   },
-   41959: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => yU,
-       g: () => cU
-     });
-     const cU = {
-       name: "bloxd_wasm_workers",
- ... (51 more removed lines; see GitHub link above)
+       return SH.f.getItem(CH) === performance.timeOrigin
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L3856` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L111) · [Before (L3856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L3856)

```diff
-       return Number(UU.strict) * cU.e.length + cU.e.indexOf(UU.program)
+       return !(0, rH.g)(HH.manifest.apiVersion)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L3860` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/153.js#L115) · [Before (L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/153.js#L3860)

```diff
-       return "" === UU ? [] : UU.split(" ")
+       return EH ??= HH.kN((0, zH.shaderPackTextures)()), EH
```
