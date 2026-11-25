# Changed — Bundle Modifications Report (Part 004 / 056)

- **Updated at**: `2026-11-26T01:26 JST`
- **Part**: `4 / 56` (**299** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 003](part-003.md) · [Part 005 →](part-005.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/130.js` (8104he.3820eae0 → fo1voe.f743fbcf · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/130.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66)

#### 5. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L19-L29` → after: `L14-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L14-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/130.js#L14-L97) · [Before (L19-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/130.js#L19-L29)

```diff
-       const QQ = (0, zQ.E)();
-       return (0, qQ.useEffect)((() => {
-         const WQ = TQ.currentUrl.getSearchParam("code");
-         TQ.currentUrl.removeSearchParam("code"), null === WQ && (console.error("No authorization code found in the URL"), window.close());
-         const XQ = {
-           type: `oauth_authentication_${QQ.providerName}`,
-           code: WQ
-         };
-         for (const QQ of (qQ = window.location.origin) === gQ ? [qQ, `https://${PQ.c}`] : [qQ]) {
-           var wQ;
-           null === (wQ = window.opener) || void 0 === wQ || wQ.postMessage(XQ, QQ)
+       return jM ??= Promise.all([iM.e(84), iM.e(204)]).then((() => iM(41585))).then((MM => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: rM,
+           textureNameToIndex: iM,
+           textureAnimationData: jM
+         } = MM;
+         return SM ??= (0, OM.j)(iM, jM, rM), SM
+       })), jM
+     }
+ 
+     function PM() {
+       if (null === SM) throw new Error("Shader pack textures read before loadShaderPackTextures");
+       return SM
+     }
+   },
+   5442: (MM, rM, iM) => {
+ ... (68 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L31-L41` → after: `L99-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L99-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/130.js#L99-L208) · [Before (L31-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/130.js#L31-L41)

```diff
-         var qQ;
-         setTimeout((() => {
-           window.close()
-         }), 1e3)
-       })), (0, JQ.jsx)("div", {
-         className: "AuthCallback",
-         children: (0, JQ.jsx)(wQ.e, {
-           showFace: !0,
-           loading: !0
-         })
-       })
+         of MM) iM += rM.encode(OM).byteLength;
+       return iM
+     }
+ 
+     function HM(MM) {
+       if (!MM.toLowerCase().endsWith(".wgsl")) return `${MM} isn't a .wgsl file.`;
+       if (MM.length > nM) return `A file path is over ${nM} characters.`;
+       if (MM.includes("\\") || /[\u0000-\u001f]/.test(MM)) return `${MM} isn't a valid file path.`;
+       return MM.split("/").some((MM => "" === MM || "." === MM || ".." === MM)) ? `${MM} isn't a valid file path.` : null
+     }
+     const hM = /^(.*)\[rot\[([1-4])$/;
+ 
+     function JM(MM, rM) {
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const OM = new Map;
+       rM.forEach(((MM, rM) => {
+ ... (94 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/131.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/131.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703)

#### 1. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L4-L40` → after: `L4-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L4-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/131.js#L4-L582) · [Before (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/131.js#L4-L40)

```diff
-   6944: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       default: () => uQ
-     });
-     var wQ = XQ(61),
-       qQ = XQ(1581),
-       TQ = XQ(1081),
-       zQ = XQ.n(TQ),
-       sQ = XQ(382),
-       FQ = XQ(6952),
-       PQ = XQ(1094),
-       gQ = XQ(1567),
-       JQ = XQ(4879),
-       rQ = XQ(1507),
-       IQ = XQ(3398),
-       jQ = XQ(4882),
- ... (21 more removed lines; see GitHub link above)
+   34641: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => QM
+     });
+     var OM = iM(2590);
+     const SM = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];
+ 
+     function jM(MM) {
+       return new Promise(((rM, iM) => {
+         MM.onsuccess = () => {
+           rM(MM.result)
+         }, MM.onerror = () => {
+           iM(MM.error)
+         }
+       }))
+     }
+ ... (563 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L42-L161` → after: `L584-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L584-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/131.js#L584-L685) · [Before (L42-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/131.js#L42-L161)

```diff
-         width: TQ,
-         height: sQ
-       } = FQ.p.thumb, {
-         live: JQ
-       } = WQ;
-       return (0, lQ.jsx)("div", {
-         className: "ShaderPackCard",
-         children: (0, lQ.jsxs)("div", {
-           className: "ShaderPackCardTile",
-           children: [(0, lQ.jsxs)(gQ.LinkPreserveSearch, {
-             to: (0, HQ.V)(WQ.packId),
-             className: "ShaderPackCardLink",
-             children: [JQ && (0, lQ.jsx)("img", {
-               className: "ShaderPackCardImage",
-               src: (0, FQ.r)(GQ.clientSideServerUrls.s3Url, JQ, XQ, "thumb"),
-               width: TQ,
- ... (104 more removed lines; see GitHub link above)
+         domSegments: PM,
+         ...nM
+       } = MM.manifest, QM = () => ({
+         ...MM,
+         manifest: {
+           ...nM,
+           videoSegments: [],
+           telemetrySegments: [],
+           games: []
+         },
+         creatorGrants: []
+       }), zM = (0, OM.k)(JSON.stringify(QM())), LM = [];
+       let mM = {
+           request: QM(),
+           items: []
+         },
+ ... (86 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L163-L164` → after: `L687-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L687-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/131.js#L687-L696) · [Before (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/131.js#L163-L164)

```diff
-         favourites: "general:favourites",
-         mine: "shaderPackListing:mine"
+         ...OM,
+         maxFps: 15,
+         bitrate: 5e5,
+         maxMacroblocks: 2040,
+         softwareEncoderOnWindows: !1
+       },
+       jM = {
+         desktop: OM,
+         mobile: SM,
+         tablet: SM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L167-L428` → after: `L699-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L699-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/131.js#L699-L745) · [Before (L167-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/131.js#L167-L428)

```diff
-     function uQ() {
-       var QQ, WQ, XQ, TQ;
-       const {
-         t: vQ
-       } = (0, bQ.C)(), dQ = (0, gQ.useNavigatePreserveSearch)(), aQ = (0, qQ.w)(), {
-         userContext: hQ,
-         isUserContextUpdating: AQ
-       } = (0, VQ.c)(), [uQ, LQ] = (0, iQ.j)(), [kQ, fQ] = (0, iQ.g)(), SQ = (0, wQ.useRef)(!1), [tQ, oQ] = (0, JQ.p)(), eQ = (0, HQ.D)(tQ), [nQ, xQ] = (0, wQ.useState)(null !== (QQ = eQ.searchQuery) && void 0 !== QQ ? QQ : ""), YQ = (0, wQ.useRef)(null), {
-         searchQuery: NQ
-       } = eQ;
-       (0, wQ.useEffect)((() => {
-         xQ(null !== NQ && void 0 !== NQ ? NQ : ""), YQ.current && (YQ.current.value = null !== NQ && void 0 !== NQ ? NQ : "")
-       }), [NQ]);
-       const [ZQ, OQ] = (0, wQ.useState)(null), [KQ, mQ] = (0, wQ.useState)(!1), [MQ, QW] = (0, wQ.useState)(!1), [WW, XW] = (0, wQ.useState)(0), wW = (0, wQ.useRef)(0), qW = JSON.stringify(eQ), TW = (0, HQ.m)();
- 
-       function zW() {
- ... (246 more removed lines; see GitHub link above)
+     function aM(MM, rM) {
+       return {
+         ...jM[rM],
+         ...MM
+       }
+     }
+     const PM = "/index/replay/segment-upload-url",
+       nM = "/index/replay/manifest",
+       QM = 65536;
+ 
+     function zM(MM) {
+       return {
+         count: Math.ceil(MM.segmentDurationMs / MM.partDurationMs) + 1,
+         maxBytes: Math.ceil(1.5 * MM.bitrate / 8 * (MM.partDurationMs / 1e3)) + 32768
+       }
+     }
+ ... (31 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/132.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/132.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L4` → after: `L5-L15523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L5-L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L5-L15523) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L4)

```diff
-   6954: (QQ, WQ, XQ) => {
+   6665: function(MM, rM, iM) {
+     var OM;
+     ! function() {
+       var SM, jM = 1e9,
+         aM = {
+           precision: 20,
+           rounding: 4,
+           toExpNeg: -7,
+           toExpPos: 21,
+           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
+         },
+         PM = !0,
+         nM = "[DecimalError] ",
+         QM = nM + "Invalid argument: ",
+         zM = nM + "Exponent out of range: ",
+         LM = Math.floor,
+ ... (15503 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L6` → after: `L15525-L18148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R15525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L15525-L18148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L15525-L18148) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L6)

```diff
-       d: () => sQ
+       d: () => GM,
+       e: () => yM,
+       h: () => CM,
+       j: () => EM,
+       k: () => lM
+     });
+     var OM = iM(6709),
+       SM = iM.n(OM),
+       jM = iM(6716),
+       aM = iM.n(jM),
+       PM = iM(6598),
+       nM = iM(5876),
+       QM = iM(5595),
+       zM = iM(6733);
+ 
+     function LM(MM) {
+ ... (2608 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L8` → after: `L18150-L18170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R18150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L18150-L18170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L18150-L18170) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L8)

```diff
-     var wQ = XQ(1081),
+     var dj = iM(6686),
+       yj = iM(6563);
+ 
+     function lj(MM) {
+       for (var rM = MM.length, iM = new Array(rM); --rM >= 0;) iM[rM] = rM;
+       return iM
+     }
+ 
+     function Ej(MM, rM) {
+       return MM[rM]
+     }
+ 
+     function Uj(MM) {
+       const rM = [];
+       return rM.key = MM, rM
+     }
+ ... (5 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L10-L11` → after: `L18172-L18189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R18172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L18172-L18189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L18172-L18189) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L10-L11)

```diff
-       TQ = XQ(1226),
-       zQ = XQ(1145);
+       gj = iM(5712),
+       uj = iM.n(gj),
+       Rj = iM(5603),
+       pj = iM.n(Rj),
+       Wj = iM(5625),
+       sj = iM.n(Wj),
+       Dj = iM(6645),
+       kj = iM.n(Dj),
+       Zj = iM(5618),
+       oj = iM.n(Zj),
+       fj = iM(6523),
+       Yj = iM.n(fj),
+       Nj = iM(6657),
+       Aj = iM.n(Nj),
+       xj = iM(5952),
+       vj = iM.n(xj),
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L14-L24` → after: `L18192-L19183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R18192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L18192-L19183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L18192-L19183) · [Before (L14-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L14-L24)

```diff
-       let {
-         item: WQ,
-         className: XQ
-       } = QQ;
-       const {
-         t: wQ
-       } = (0, TQ.C)();
-       return null === WQ.renderId || WQ.previewsOutdated ? (0, zQ.jsx)("div", {
-         className: qQ()("ShaderPackPreviewsNotice", XQ),
-         children: (0, zQ.jsx)("span", {
-           children: wQ(null === WQ.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
+       return function(MM) {
+         if (Array.isArray(MM)) return Ij(MM)
+       }(MM) || function(MM) {
+         if ("undefined" !== typeof Symbol && Symbol.iterator in Object(MM)) return Array.from(MM)
+       }(MM) || function(MM, rM) {
+         if (!MM) return;
+         if ("string" === typeof MM) return Ij(MM, rM);
+         var iM = Object.prototype.toString.call(MM).slice(8, -1);
+         "Object" === iM && MM.constructor && (iM = MM.constructor.name);
+         if ("Map" === iM || "Set" === iM) return Array.from(MM);
+         if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return Ij(MM, rM)
+       }(MM) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
+     }
+ 
+ ... (976 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L26` → after: `L19185-L19425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19185-L19425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19185-L19425) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L26)

```diff
-       }) : null
+       }
+   },
+   6589: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => mM,
+       f: () => LM
+     });
+     var OM = iM(6438);
+ 
+     function SM(MM) {
+       return SM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
+         return typeof MM
+       } : function(MM) {
+         return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
+       }, SM(MM)
+     }
+ ... (225 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L29` → after: `L19428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19428) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L29)

```diff
-   6964: (QQ, WQ, XQ) => {
+   5873: (MM, rM, iM) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L33-L73` → after: `L19432-L19433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19432-L19433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19432-L19433) · [Before (L33-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L33-L73)

```diff
-     var wQ = XQ(1081),
-       qQ = XQ.n(wQ),
-       TQ = XQ(6952),
-       zQ = XQ(1226),
-       sQ = XQ(6946),
-       FQ = XQ(1145);
- 
-     function PQ(QQ) {
-       let {
-         selected: WQ,
-         onSelect: XQ,
-         imageUrl: wQ
-       } = QQ;
-       const {
-         t: PQ
-       } = (0, zQ.C)();
- ... (25 more removed lines; see GitHub link above)
+     var OM = function(MM, rM) {
+       for (var iM = arguments.length, OM = new Array(iM > 2 ? iM - 2 : 0), SM = 2; SM < iM; SM++) OM[SM - 2] = arguments[SM]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L76` → after: `L19436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19436) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L76)

```diff
-   6957: (QQ, WQ, XQ) => {
+   6695: (MM, rM, iM) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L78-L81` → after: `L19438-L19440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19438-L19440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19438-L19440) · [Before (L78-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L78-L81)

```diff
-       c: () => rQ,
-       g: () => IQ,
-       j: () => JQ,
-       m: () => jQ
+       d: () => PM,
+       h: () => mM,
+       i: () => QM
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L83-L90` → after: `L19442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19442) · [Before (L83-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L83-L90)

```diff
-     var wQ = XQ(61),
-       qQ = XQ(6952),
-       TQ = XQ(1548),
-       zQ = XQ(6946),
-       sQ = XQ(6960),
-       FQ = XQ(1162);
-     const PQ = "shaderPackListingView",
-       gQ = "shaderPackListingFilterOpen";
+     iM(5864), iM(44), iM(5712);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L92-L95` → after: `L19444-L19449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19444-L19449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19444-L19449) · [Before (L92-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L92-L95)

```diff
-     function JQ() {
-       var QQ;
-       const [WQ, XQ] = (0, sQ.d)(PQ, qQ.A[0]);
-       return [null !== (QQ = qQ.A.find((QQ => QQ === WQ))) && void 0 !== QQ ? QQ : qQ.A[0], XQ]
+     function OM(MM) {
+       return OM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
+         return typeof MM
+       } : function(MM) {
+         return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
+       }, OM(MM)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L98-L101` → after: `L19452-L19460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19452-L19460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19452-L19460) · [Before (L98-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L98-L101)

```diff
-     function rQ() {
-       (0, wQ.useEffect)((() => () => {
-         window.location.pathname.startsWith(zQ.R) || (0, zQ.l)()
-       }), [])
+     function SM(MM, rM) {
+       var iM = Object.keys(MM);
+       if (Object.getOwnPropertySymbols) {
+         var OM = Object.getOwnPropertySymbols(MM);
+         rM && (OM = OM.filter((function(rM) {
+           return Object.getOwnPropertyDescriptor(MM, rM).enumerable
+         }))), iM.push.apply(iM, OM)
+       }
+       return iM
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L104-L105` → after: `L19463-L19472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19463-L19472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19463-L19472) · [Before (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L104-L105)

```diff
-     function IQ() {
-       return (0, sQ.d)(gQ, !1)
+     function jM(MM) {
+       for (var rM = 1; rM < arguments.length; rM++) {
+         var iM = null != arguments[rM] ? arguments[rM] : {};
+         rM % 2 ? SM(Object(iM), !0).forEach((function(rM) {
+           aM(MM, rM, iM[rM])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : SM(Object(iM)).forEach((function(rM) {
+           Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
+         }))
+       }
+       return MM
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L108-L128` → after: `L19475-L19502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19475-L19502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19475-L19502) · [Before (L108-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L108-L128)

```diff
-     function jQ() {
-       const {
-         userContext: QQ,
-         isUserContextUpdating: WQ
-       } = (0, FQ.c)(), [XQ, qQ] = (0, wQ.useState)(null), zQ = (0, wQ.useRef)(new Set);
- 
-       function sQ(QQ, WQ) {
-         qQ((XQ => {
-           const wQ = new Set(XQ);
-           return WQ ? wQ.add(QQ) : wQ.delete(QQ), wQ
-         }))
-       }
-       return (0, wQ.useEffect)((() => {
-         if (WQ) return;
-         let XQ = !1;
-         return TQ.e.getFavouriteShaderPacks(QQ).then((QQ => {
- ... (5 more removed lines; see GitHub link above)
+     function aM(MM, rM, iM) {
+       return (rM = function(MM) {
+         var rM = function(MM, rM) {
+           if ("object" != OM(MM) || !MM) return MM;
+           var iM = MM[Symbol.toPrimitive];
+           if (void 0 !== iM) {
+             var SM = iM.call(MM, rM || "default");
+             if ("object" != OM(SM)) return SM;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === rM ? String : Number)(MM)
+         }(MM, "string");
+         return "symbol" == OM(rM) ? rM : rM + ""
+       }(rM)) in MM ? Object.defineProperty(MM, rM, {
+         value: iM,
+         enumerable: !0,
+ ... (12 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L130-L140` → after: `L19504-L19575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19504-L19575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19504-L19575) · [Before (L130-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L130-L140)

```diff
-       }), [QQ, WQ]), {
-         isFavourite: QQ => null === XQ ? null : XQ.has(QQ),
-         toggle: function(WQ) {
-           if (null === XQ || zQ.current.has(WQ)) return;
-           zQ.current.add(WQ);
-           const wQ = !XQ.has(WQ);
-           sQ(WQ, wQ), (wQ ? TQ.e.favouriteShaderPack(QQ, WQ) : TQ.e.unfavouriteShaderPack(QQ, WQ)).catch((QQ => {
-             console.error("Failed to change a favourite shader pack", QQ), sQ(WQ, !wQ)
-           })).finally((() => {
-             zQ.current.delete(WQ)
-           }))
+       },
+       zM = function(MM, rM) {
+         var iM = MM.x,
+           OM = MM.y,
+           SM = rM.cx,
+           jM = rM.cy,
+           aM = function(MM, rM) {
+             var iM = MM.x,
+               OM = MM.y,
+               SM = rM.x,
+               jM = rM.y;
+             return Math.sqrt(Math.pow(iM - SM, 2) + Math.pow(OM - jM, 2))
+           }({
+             x: iM,
+             y: OM
+           }, {
+ ... (56 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L145` → after: `L19583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19583) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L145)

```diff
-   6946: (QQ, WQ, XQ) => {
+   5876: (MM, rM, iM) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L150-L162` → after: `L19586-L19588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19586-L19588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19586-L19588) · [Before (L150-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L150-L162)

```diff
-       D: () => lQ,
-       E: () => gQ,
-       H: () => iQ,
-       I: () => BQ,
-       L: () => kQ,
-       O: () => uQ,
-       R: () => zQ,
-       S: () => LQ,
-       V: () => FQ,
-       Z: () => sQ,
-       cb: () => CQ,
-       d: () => DQ,
-       eb: () => pQ,
+       F: () => oM,
+       G: () => RM,
+       b: () => DM,
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L164-L165` → after: `L19590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19590) · [Before (L164-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L164-L165)

```diff
-       hb: () => hQ,
-       j: () => yQ,
+       h: () => uM,
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L167-L171` → after: `L19592-L19594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19592-L19594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19592-L19594) · [Before (L167-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L167-L171)

```diff
-       m: () => JQ,
-       q: () => cQ,
-       s: () => IQ,
-       v: () => AQ,
-       y: () => fQ
+       p: () => fM,
+       t: () => sM,
+       x: () => kM
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L173-L186` → after: `L19596-L19612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19596-L19612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19596-L19612) · [Before (L173-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L173-L186)

```diff
-     var wQ = XQ(6952),
-       qQ = XQ(193),
-       TQ = XQ(4879);
-     const zQ = "/shader-packs",
-       sQ = `${zQ}/publish`;
- 
-     function FQ(QQ) {
-       return `${zQ}/${encodeURIComponent(QQ)}`
-     }
-     let PQ = null;
- 
-     function gQ(QQ) {
-       PQ = QQ
-     }
+     var OM = iM(5625),
+       SM = iM.n(OM),
+       jM = iM(5864),
+       aM = iM.n(jM),
+       PM = iM(5603),
+       nM = iM.n(PM),
+       QM = iM(5712),
+       zM = iM.n(QM),
+       LM = iM(5514),
+       mM = iM.n(LM),
+       HM = iM(44),
+       hM = iM(5880),
+       JM = iM(5595),
+       dM = iM(5889),
+       yM = iM(5898),
+       lM = ["children"],
+ ... (1 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L188` → after: `L19614-L19628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19614-L19628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19614-L19628) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L188)

```diff
-     function JQ() {
+     function UM(MM, rM) {
+       if (null == MM) return {};
+       var iM, OM, SM = function(MM, rM) {
+         if (null == MM) return {};
+         var iM = {};
+         for (var OM in MM)
+           if (Object.prototype.hasOwnProperty.call(MM, OM)) {
+             if (rM.indexOf(OM) >= 0) continue;
+             iM[OM] = MM[OM]
+           } return iM
+       }(MM, rM);
+       if (Object.getOwnPropertySymbols) {
+         var jM = Object.getOwnPropertySymbols(MM);
+         for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
+       }
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L197` → after: `L19633-L19637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19633-L19637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19633-L19637) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L197)

```diff
-       return QQ.playerHasRank("developer") || QQ.playerHasRank("admin")
+       return GM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
+         return typeof MM
+       } : function(MM) {
+         return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
+       }, GM(MM)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L199-L205` → after: `L19639-L19665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19639-L19665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19639-L19665) · [Before (L199-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L199-L205)

```diff
-     const jQ = ["terrain", "water", "models", "sunShadows", "strict"],
-       BQ = {
-         terrain: "shaderPackListing:filterTerrain",
-         water: "shaderPackListing:filterWater",
-         models: "shaderPackListing:filterModels",
-         sunShadows: "shaderPackListing:filterShadows",
-         strict: "shaderPackListing:filterAllGames"
+     var CM = {
+         click: "onClick",
+         mousedown: "onMouseDown",
+         mouseup: "onMouseUp",
+         mouseover: "onMouseOver",
+         mousemove: "onMouseMove",
+         mouseout: "onMouseOut",
+         mouseenter: "onMouseEnter",
+         mouseleave: "onMouseLeave",
+         touchcancel: "onTouchCancel",
+         touchend: "onTouchEnd",
+         touchmove: "onTouchMove",
+         touchstart: "onTouchStart",
+         contextmenu: "onContextMenu",
+         dblclick: "onDoubleClick"
+       },
+ ... (11 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L209` → after: `L19669-L19675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19669-L19675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19669-L19675) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L209)

```diff
-       return QQ.withFeatures.includes(WQ) ? "with" : QQ.withoutFeatures.includes(WQ) ? "without" : null
+       var iM = [],
+         OM = [];
+       return OM = Array.isArray(rM) ? rM.map((function(MM) {
+         return eM(MM)
+       })) : [eM(rM)], tM(MM).forEach((function(MM) {
+         var rM = SM()(MM, "type.displayName") || SM()(MM, "type.name"); - 1 !== OM.indexOf(rM) && iM.push(MM)
+       })), iM
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L212-L213` → after: `L19678-L19768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19678-L19768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19678-L19768) · [Before (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L212-L213)

```diff
-     function VQ(QQ) {
-       return null === QQ ? "with" : "with" === QQ ? "without" : null
+     function uM(MM, rM) {
+       var iM = gM(MM, rM);
+       return iM && iM[0]
+     }
+     var RM = function(MM) {
+         if (!MM || !MM.props) return !1;
+         var rM = MM.props,
+           iM = rM.width,
+           OM = rM.height;
+         return !(!(0, JM.y)(iM) || iM <= 0 || !(0, JM.y)(OM) || OM <= 0)
+       },
+       pM = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMat … [truncated]
+       WM = function(MM) {
+         return MM && MM.type && nM()(MM.type) && pM.indexOf(MM.type) >= 0
+       },
+       sM = function(MM) {
+ ... (75 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L217` → after: `L19783-L19787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19783-L19787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19783-L19787) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L217)

```diff
-       return "with" === QQ ? "only" : null === QQ ? "include" : void 0
+       return aM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
+         return typeof MM
+       } : function(MM) {
+         return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
+       }, aM(MM)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L221-L225` → after: `L19791-L19796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19791-L19796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19791-L19796) · [Before (L221-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L221-L225)

```diff
-       const XQ = yQ(QQ, WQ),
-         wQ = QQ => QQ.filter((QQ => QQ !== WQ));
-       return {
-         withFeatures: null === XQ ? [...QQ.withFeatures, WQ] : wQ(QQ.withFeatures),
-         withoutFeatures: "with" === XQ ? [...QQ.withoutFeatures, WQ] : wQ(QQ.withoutFeatures)
+       var iM = Object.keys(MM);
+       if (Object.getOwnPropertySymbols) {
+         var OM = Object.getOwnPropertySymbols(MM);
+         rM && (OM = OM.filter((function(rM) {
+           return Object.getOwnPropertyDescriptor(MM, rM).enumerable
+         }))), iM.push.apply(iM, OM)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L237-L248` → after: `L19802-L19808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19802-L19808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19802-L19808) · [Before (L237-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L237-L248)

```diff
-       var WQ, XQ, qQ;
-       const zQ = QQ.get(GQ),
-         sQ = (null !== (WQ = QQ.get(bQ)) && void 0 !== WQ ? WQ : aQ).split(","),
-         FQ = QQ.get(dQ);
-       return {
-         section: "favourites" === zQ || "mine" === zQ ? zQ : "explore",
-         sort: null !== (XQ = wQ.u.find((WQ => WQ === QQ.get(UQ)))) && void 0 !== XQ ? XQ : HQ,
-         withFeatures: jQ.filter((QQ => sQ.includes(QQ) && !sQ.includes(`-${QQ}`))),
-         withoutFeatures: jQ.filter((QQ => sQ.includes(`-${QQ}`))),
-         searchQuery: (null === (qQ = QQ.get(vQ)) || void 0 === qQ ? void 0 : qQ.slice(0, wQ.G)) || null,
-         pageNumber: (0, TQ.f)(QQ.get(TQ.e)),
-         banned: "only" === FQ ? "with" : "include" === FQ ? null : "without"
+       for (var rM = 1; rM < arguments.length; rM++) {
+         var iM = null != arguments[rM] ? arguments[rM] : {};
+         rM % 2 ? PM(Object(iM), !0).forEach((function(rM) {
+           QM(MM, rM, iM[rM])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : PM(Object(iM)).forEach((function(rM) {
+           Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
+         }))
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L252-L255` → after: `L19813-L19831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19813-L19831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19813-L19831) · [Before (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L252-L255)

```diff
-     function hQ(QQ, WQ) {
-       var XQ;
-       const wQ = RQ(WQ);
-       (0, TQ.i)(QQ, GQ, "explore" === WQ.section ? null : WQ.section), (0, TQ.i)(QQ, UQ, WQ.sort === HQ ? null : WQ.sort), (0, TQ.i)(QQ, bQ, wQ === aQ ? null : wQ), (0, TQ.i)(QQ, vQ, WQ.searchQuery), (0, TQ.i)(QQ, dQ, null !== (XQ = DQ(WQ.banned)) && void 0 !== XQ ? XQ : null), ( … [truncated]
+     function QM(MM, rM, iM) {
+       return (rM = function(MM) {
+         var rM = function(MM, rM) {
+           if ("object" != aM(MM) || !MM) return MM;
+           var iM = MM[Symbol.toPrimitive];
+           if (void 0 !== iM) {
+             var OM = iM.call(MM, rM || "default");
+             if ("object" != aM(OM)) return OM;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === rM ? String : Number)(MM)
+         }(MM, "string");
+         return "symbol" == aM(rM) ? rM : rM + ""
+       }(rM)) in MM ? Object.defineProperty(MM, rM, {
+         value: iM,
+         enumerable: !0,
+ ... (3 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L257-L268` → after: `L19833-L19872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19833-L19872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19833-L19872) · [Before (L257-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L257-L268)

```diff
- 
-     function iQ(QQ) {
-       const WQ = new URLSearchParams;
-       return hQ(WQ, {
-         section: "explore",
-         sort: HQ,
-         withFeatures: "strict" === QQ ? [QQ] : [QQ, "strict"],
-         withoutFeatures: [],
-         searchQuery: null,
-         pageNumber: 1,
-         banned: "without"
-       }), `${zQ}?${WQ.toString()}`
+     var zM = function(MM) {
+       var rM = MM.children,
+         iM = MM.formattedGraphicalItems,
+         aM = MM.legendWidth,
+         PM = MM.legendContent,
+         QM = (0, jM.h)(rM, OM.d);
+       if (!QM) return null;
+       var zM, LM = OM.d.defaultProps,
+         mM = void 0 !== LM ? nM(nM({}, LM), QM.props) : {};
+       return zM = QM.props && QM.props.payload ? QM.props && QM.props.payload : "children" === PM ? (iM || []).reduce((function(MM, rM) {
+         var iM = rM.item,
+           OM = rM.props,
+           SM = OM.sectors || OM.data || [];
+         return MM.concat(SM.map((function(MM) {
+           return {
+             type: QM.props.iconType || iM.props.legendType,
+ ... (24 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L271-L272` → after: `L19884-L19885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19884-L19885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19884-L19885) · [Before (L271-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L271-L272)

```diff
-     function cQ(QQ) {
-       return RQ(QQ) === aQ
+     function PM(MM, rM, iM) {
+       return !0 === rM ? SM()(MM, iM) : aM()(rM) ? SM()(MM, rM) : MM
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L276` → after: `L19901-L19905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19901-L19905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19901-L19905) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L276)

```diff
-       return null !== QQ.searchQuery || "with" === QQ.banned || RQ(QQ) !== aQ
+       return aM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
+         return typeof MM
+       } : function(MM) {
+         return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
+       }, aM(MM)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L280-L283` → after: `L19956-L19983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19956-L19983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19956-L19983) · [Before (L280-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L280-L283)

```diff
-       return jQ.flatMap((WQ => {
-         const XQ = yQ(QQ, WQ);
-         return "with" === XQ ? [WQ] : "without" === XQ ? [`-${WQ}`] : []
-       })).join(",")
+       if ("object" === typeof MM && null !== MM) {
+         var rM = MM.$$typeof;
+         switch (rM) {
+           case OM:
+             switch (MM = MM.type) {
+               case jM:
+               case PM:
+               case aM:
+               case mM:
+               case HM:
+                 return MM;
+               default:
+                 switch (MM = MM && MM.$$typeof) {
+                   case zM:
+                   case QM:
+                   case LM:
+ ... (12 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L285-L297` → after: `L19985-L19992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19985-L19992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19985-L19992) · [Before (L285-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L285-L297)

```diff
-     const EQ = {
-         popular: "shaderPackListing:sortPopular",
-         updated: "shaderPackListing:sortUpdated",
-         newest: "shaderPackListing:sortNewest"
-       },
-       CQ = {
-         forest: "shaderPackListing:viewForest",
-         desert: "shaderPackListing:viewDesert",
-         water: "shaderPackListing:viewWater",
-         night: "shaderPackListing:viewNight",
-         cave: "shaderPackListing:viewCave"
-       };
- 
+     iM = Symbol.for("react.module.reference"), rM.isFragment = function(MM) {
+       return yM(MM) === jM
+     }
+   },
+   5880: (MM, rM, iM) => {
+     MM.exports = iM(5884)
+   },
+   5491: (MM, rM, iM) => {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L299` → after: `L19994-L20009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R19994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L19994-L20009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L19994-L20009) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L299)

```diff
-       return Math.round(100 * Math.max(0, 1 - 1 / QQ))
+       var rM, iM, SM = "";
+       if ("string" == typeof MM || "number" == typeof MM) SM += MM;
+       else if ("object" == typeof MM)
+         if (Array.isArray(MM)) {
+           var jM = MM.length;
+           for (rM = 0; rM < jM; rM++) MM[rM] && (iM = OM(MM[rM])) && (SM && (SM += " "), SM += iM)
+         } else
+           for (iM in MM) MM[iM] && (SM && (SM += " "), SM += iM);
+       return SM
+     }
+     iM.d(rM, {
+       b: () => SM
+     });
+     const SM = function() {
+       for (var MM, rM, iM = 0, SM = "", jM = arguments.length; iM < jM; iM++)(MM = arguments[iM]) && (rM = OM(MM)) && (SM && (SM += " "), SM += rM);
+       return SM
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L302-L331` → after: `L20020-L20044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R20020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L20020-L20044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L20020-L20044) · [Before (L302-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L302-L331)

```diff
-     function LQ(QQ, WQ, XQ, qQ) {
-       const TQ = [];
-       QQ.isBanned && TQ.push({
-         tone: "warning",
-         text: qQ("shaderPackListing:ownerBanned"),
-         detail: null
-       });
-       const {
-         pending: zQ
-       } = QQ;
-       if (null === QQ.brokenError || zQ && !zQ.error || TQ.push({
-           tone: "warning",
-           text: qQ("shaderPackListing:ownerBroken"),
-           detail: QQ.brokenError
-         }), null !== zQ && void 0 !== zQ && zQ.error) TQ.push({
-         tone: "warning",
- ... (14 more removed lines; see GitHub link above)
+     function jM() {
+       var MM, rM, iM = (0, SM.c)().unknown(void 0),
+         aM = iM.domain,
+         PM = iM.range,
+         nM = 0,
+         QM = 1,
+         zM = !1,
+         LM = 0,
+         mM = 0,
+         HM = .5;
+ 
+       function hM() {
+         var iM = aM().length,
+           OM = QM < nM,
+           SM = OM ? QM : nM,
+           jM = OM ? nM : QM;
+ ... (9 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L333-L337` → after: `L20046-L20068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R20046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L20046-L20068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L20046-L20068) · [Before (L333-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L333-L337)

```diff
-       return QQ.listed || TQ.push({
-         tone: "info",
-         text: qQ("shaderPackListing:ownerUnlisted"),
-         detail: null
-       }), TQ
+       return delete iM.unknown, iM.domain = function(MM) {
+         return arguments.length ? (aM(MM), hM()) : aM()
+       }, iM.range = function(MM) {
+         return arguments.length ? ([nM, QM] = MM, nM = +nM, QM = +QM, hM()) : [nM, QM]
+       }, iM.rangeRound = function(MM) {
+         return [nM, QM] = MM, nM = +nM, QM = +QM, zM = !0, hM()
+       }, iM.bandwidth = function() {
+         return rM
+       }, iM.step = function() {
+         return MM
+       }, iM.round = function(MM) {
+         return arguments.length ? (zM = !!MM, hM()) : zM
+       }, iM.padding = function(MM) {
+         return arguments.length ? (LM = Math.min(1, mM = +MM), hM()) : LM
+       }, iM.paddingInner = function(MM) {
+         return arguments.length ? (LM = Math.min(1, MM), hM()) : LM
+ ... (7 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L341` → after: `L20072-L20075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R20072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L20072-L20075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L20072-L20075) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L341)

```diff
-       return Math.max(1, Math.round(QQ / 1024))
+       var rM = MM.copy;
+       return MM.padding = MM.paddingOuter, delete MM.paddingInner, delete MM.paddingOuter, MM.copy = function() {
+         return aM(rM())
+       }, MM
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L344-L345` → after: `L20078-L20079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R20078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L20078-L20079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L20078-L20079) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L344-L345)

```diff
-     function fQ(QQ, WQ, XQ) {
-       return QQ instanceof qQ.b && QQ.errorMessageForUser ? QQ.errorMessageForUser : WQ(XQ)
+     function PM() {
+       return aM(jM.apply(null, arguments).paddingInner(1))
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L348-L353` → after: `L20082-L20094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R20082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L20082-L20094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L20082-L20094) · [Before (L348-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L348-L353)

```diff
-   6960: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => TQ
-     });
-     var wQ = XQ(61),
-       qQ = XQ(43);
+   6615: (MM, rM, iM) => {
+     function OM(MM, rM) {
+       switch (arguments.length) {
+         case 0:
+           break;
+         case 1:
+           this.range(MM);
+           break;
+         default:
+           this.range(rM).domain(MM)
+       }
+       return this
+     }
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L356-L360` → after: `L20097-L20106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R20097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L20097-L20106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L20097-L20106) · [Before (L356-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L356-L360)

```diff
-       var XQ;
-       const [TQ, zQ] = (0, wQ.useState)(null !== (XQ = qQ.i.getItem(QQ)) && void 0 !== XQ ? XQ : WQ);
-       return [TQ, WQ => {
-         qQ.i.setItem(QQ, WQ), zQ(WQ)
-       }]
+       switch (arguments.length) {
+         case 0:
+           break;
+         case 1:
+           "function" === typeof MM ? this.interpolator(MM) : this.range(MM);
+           break;
+         default:
+           this.domain(MM), "function" === typeof rM ? this.interpolator(rM) : this.range(rM)
+       }
+       return this
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L363` → after: `L20113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R20113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L20113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L20113) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L363)

```diff
-   6952: (QQ, WQ, XQ) => {
+   6620: (MM, rM, iM) => {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L372-L382` → after: `L20116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R20116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L20116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L20116) · [Before (L372-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L372-L382)

```diff
-       f: () => yQ,
-       i: () => BQ,
-       j: () => IQ,
-       l: () => pQ,
-       m: () => bQ,
-       o: () => FQ,
-       p: () => qQ,
-       r: () => UQ,
-       u: () => TQ,
-       w: () => sQ,
-       z: () => zQ
+       f: () => QM
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L384-L402` → after: `L20118-L20144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R20118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L20118-L20144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L20118-L20144) · [Before (L384-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L384-L402)

```diff
-     const wQ = ["forest", "desert", "water", "night", "cave"];
-     const qQ = {
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
-       TQ = ["popular", "updated", "newest"],
- ... (3 more removed lines; see GitHub link above)
+     class OM extends Map {
+       constructor(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PM;
+         if (super(), Object.defineProperties(this, {
+             _intern: {
+               value: new Map
+             },
+             _key: {
+               value: rM
+             }
+           }), null != MM)
+           for (const [iM, OM] of MM) this.set(iM, OM)
+       }
+       get(MM) {
+         return super.get(SM(this, MM))
+       }
+ ... (11 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L405` → after: `L20147-L20152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R20147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L20147-L20152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L20147-L20152) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L405)

```diff
-       return QQ.slice(0, WQ).replace(/[\uD800-\uDBFF]$/, "")
+       let {
+         _intern: iM,
+         _key: OM
+       } = MM;
+       const SM = OM(rM);
+       return iM.has(SM) ? iM.get(SM) : rM
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L411-L414` → after: `L20155-L20170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R20155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L20155-L20170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L20155-L20170) · [Before (L411-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L411-L414)

```diff
-     function IQ(QQ) {
-       const WQ = QQ,
-         XQ = null === WQ || void 0 === WQ ? void 0 : WQ.files;
-       return "number" === typeof(null === WQ || void 0 === WQ ? void 0 : WQ.apiVersion) && "string" === typeof WQ.name && (null === WQ.author || "string" === typeof WQ.author) && (void 0 === WQ.keepCircleShadows || "boolean" === typeof WQ.keepCircleShadows) && "object" === typeof … [truncated]
+     function jM(MM, rM) {
+       let {
+         _intern: iM,
+         _key: OM
+       } = MM;
+       const SM = OM(rM);
+       return iM.has(SM) ? iM.get(SM) : (iM.set(SM, rM), rM)
+     }
+ 
+     function aM(MM, rM) {
+       let {
+         _intern: iM,
+         _key: OM
+       } = MM;
+       const SM = OM(rM);
+       return iM.has(SM) && (rM = iM.get(SM), iM.delete(SM)), rM
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L420` → after: `L20174-L20204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R20174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L20174-L20204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L20174-L20204) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L420)

```diff
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(QQ)}`
+       return null !== MM && "object" === typeof MM ? MM.valueOf() : MM
+     }
+     var nM = iM(6615);
+     const QM = Symbol("implicit");
+ 
+     function zM() {
+       var MM = new OM,
+         rM = [],
+         iM = [],
+         SM = QM;
+ 
+       function jM(OM) {
+         let jM = MM.get(OM);
+         if (void 0 === jM) {
+           if (SM !== QM) return SM;
+           MM.set(OM, jM = rM.push(OM) - 1)
+ ... (15 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L422-L423` → after: `L20206-L20211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R20206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L20206-L20211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L20206-L20211) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L422-L423)

```diff
-     const VQ = "Screenshot generation failed.",
-       DQ = "Its screenshots couldn't be generated:";
+   },
+   6686: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => OM
+     });
+     Array.prototype.slice;
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L426-L427` → after: `L20214-L20221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R20214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L20214-L20221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L20214-L20221) · [Before (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L426-L427)

```diff
-       var WQ;
-       return QQ === VQ || null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.startsWith(DQ)) && void 0 !== WQ && WQ
+       return "object" === typeof MM && "length" in MM ? MM : Array.from(MM)
+     }
+   },
+   6563: (MM, rM, iM) => {
+     function OM(MM) {
+       return function() {
+         return MM
+       }
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L430-L431` → after: `L20236-L20308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R20236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L20236-L20308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L20236-L20308) · [Before (L430-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L430-L431)

```diff
-     function GQ(QQ, WQ) {
-       return `shaderPacks/${QQ}/${WQ}.json`
+     function PM(MM) {
+       this._ += MM[0];
+       for (let rM = 1, iM = MM.length; rM < iM; ++rM) this._ += arguments[rM] + MM[rM]
+     }
+     class nM {
+       constructor(MM) {
+         this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == MM ? PM : function(MM) {
+           let rM = Math.floor(MM);
+           if (!(rM >= 0)) throw new Error(`invalid digits: ${MM}`);
+           if (rM > 15) return PM;
+           const iM = 10 ** rM;
+           return function(MM) {
+             this._ += MM[0];
+             for (let rM = 1, OM = MM.length; rM < OM; ++rM) this._ += Math.round(arguments[rM] * iM) / iM + MM[rM]
+           }
+         }(MM)
+ ... (57 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L434-L435` → after: `L20311-L20322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R20311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L20311-L20322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L20311-L20322) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L434-L435)

```diff
-     function UQ(QQ, WQ, XQ, wQ) {
-       return null === WQ.renderId ? bQ(QQ, WQ.baselineVersion, XQ, wQ) : `${QQ}/${function(QQ,WQ,XQ,wQ){return`shaderPacks/${QQ}/${WQ}/${XQ}-${wQ}.webp`}(WQ.packId,WQ.renderId,XQ,wQ)}`
+     function QM(MM) {
+       let rM = 3;
+       return MM.digits = function(iM) {
+         if (!arguments.length) return rM;
+         if (null == iM) rM = null;
+         else {
+           const MM = Math.floor(iM);
+           if (!(MM >= 0)) throw new RangeError(`invalid digits: ${iM}`);
+           rM = MM
+         }
+         return MM
+       }, () => new nM(rM)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L438-L439` → after: `L20333-L20339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R20333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L20333-L20339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/132.js#L20333-L20339) · [Before (L438-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/132.js#L438-L439)

```diff
-     function bQ(QQ, WQ, XQ, wQ) {
-       return `${QQ}/${function(QQ,WQ,XQ){return`shaderPacks/baseline/${QQ}/${WQ}-${XQ}.webp`}(WQ,XQ,wQ)}`
+     function jM(MM, rM) {
+       if (!MM) {
+         if (OM) throw new Error(SM);
+         var iM = "function" === typeof rM ? rM() : rM,
+           jM = iM ? "".concat(SM, ": ").concat(iM) : SM;
+         throw new Error(jM)
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/133.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/133.js` (43 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61)

#### 1. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L4)

```diff
-   41284: (QQ, WQ, XQ) => {
+   6888: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L6` → after: `L7-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L7-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L7-L13) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L6)

```diff
-       ShaderPackCategory: () => AQ
+       Graph: () => NM,
+       debug: () => Wi,
+       default: () => Di,
+       graphlib: () => jM,
+       layout: () => Hi,
+       util: () => si,
+       version: () => jr
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L8-L25` → after: `L15-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L15-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L15-L242) · [Before (L8-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L8-L25)

```diff
-     var wQ = XQ(61),
-       qQ = XQ(1581),
-       TQ = XQ(1507),
-       zQ = XQ(1567),
-       sQ = XQ(1226),
-       FQ = XQ(105),
-       PQ = XQ(26),
-       gQ = XQ(1698),
-       JQ = XQ(6984),
-       rQ = XQ(367),
-       IQ = XQ(7024),
-       jQ = XQ(7018),
-       BQ = XQ(7026),
-       yQ = XQ(6946),
-       VQ = XQ(5349),
-       DQ = XQ(5386),
- ... (2 more removed lines; see GitHub link above)
+     var OM = Object.defineProperty,
+       SM = (MM, rM, iM) => ((MM, rM, iM) => rM in MM ? OM(MM, rM, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: iM
+       }) : MM[rM] = iM)(MM, "symbol" != typeof rM ? rM + "" : rM, iM),
+       jM = {};
+     ((MM, rM) => {
+       for (var iM in rM) OM(MM, iM, {
+         get: rM[iM],
+         enumerable: !0
+       })
+     })(jM, {
+       Graph: () => NM,
+       alg: () => yM
+ ... (212 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L28-L48` → after: `L245-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L245-L246) · [Before (L28-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L28-L48)

```diff
-       const XQ = (0, IQ.storedPackOutcome)(QQ, WQ);
-       return "none" !== XQ.kind || "noCompiler" === XQ.reason
-     }
-     var bQ = XQ(1081),
-       vQ = XQ.n(bQ),
-       dQ = XQ(5394),
-       HQ = XQ(1094),
-       aQ = XQ(6972),
-       lQ = XQ(1145);
-     const hQ = {
-       ready: "shaderPack:statusReady",
-       readyAfterReload: "shaderPack:statusReadyAfterReload",
-       noWebGpu: "shaderPack:statusNoWebGpu",
-       offNoWebGpu: "shaderPack:statusOffNoWebGpu",
-       failed: "shaderPack:statusFailed",
-       failedRecheck: "shaderPack:statusFailedRecheck",
- ... (5 more removed lines; see GitHub link above)
+       MM[rM] ? MM[rM]++ : MM[rM] = 1
+     }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L51` → after: `L249-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L249-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L249-L299) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L51)

```diff
-       return "failedRecheck" === QQ && WQ.listing ? "shaderPack:statusFailedRecheckListed" : hQ[QQ]
+       void 0 !== MM[rM] && !--MM[rM] && delete MM[rM]
+     }
+ 
+     function LM(MM, rM, iM, OM) {
+       let SM = "" + rM,
+         jM = "" + iM;
+       if (!MM && SM > jM) {
+         let MM = SM;
+         SM = jM, jM = MM
+       }
+       return SM + "\x01" + jM + "\x01" + (void 0 === OM ? "\0" : OM)
+     }
+ 
+     function mM(MM, rM) {
+       return LM(MM, rM.v, rM.w, rM.name)
+     }
+ ... (35 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L55-L98` → after: `L303-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L303-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L303-L377) · [Before (L55-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L55-L98)

```diff
-       let {
-         stored: WQ,
-         checking: XQ,
-         webGpuUsable: wQ,
-         changePending: qQ,
-         compiler: TQ,
-         t: zQ
-       } = QQ;
-       const sQ = function(QQ, WQ, XQ, wQ, qQ) {
-           const TQ = (0, IQ.storedPackOutcome)(QQ, qQ);
-           return "none" === TQ.kind ? "noCompiler" === TQ.reason ? WQ ? "checking" : "noCompiler" : "otherApiVersion" === TQ.reason ? "wrongApiVersion" : "failed" : (0, GQ.f)() ? "harnessBuild" : "blocked" === TQ.kind ? (0, IQ.shaderPackNeedsCheck)(QQ, qQ) ? WQ ? "checking" : !1  … [truncated]
-         }(WQ, XQ, wQ, qQ, TQ),
-         FQ = "failed" === sQ || "failedRecheck" === sQ,
-         PQ = FQ || "wrongApiVersion" === sQ || "noCompiler" === sQ,
-         gQ = "ready" === sQ || "readyAfterReload" === sQ ? WQ.validation.offInStrict : [];
-       return (0, lQ.jsxs)(lQ.Fragment, {
- ... (28 more removed lines; see GitHub link above)
+       let rM = new nM(MM.options);
+       return void 0 !== MM.value && rM.setGraph(MM.value), MM.nodes.forEach((MM => {
+         rM.setNode(MM.v, MM.value), MM.parent && rM.setParent(MM.v, MM.parent)
+       })), MM.edges.forEach((MM => {
+         rM.setEdge({
+           v: MM.v,
+           w: MM.w,
+           name: MM.name
+         }, MM.value)
+       })), rM
+     }
+     PM({}, {
+       read: () => dM,
+       write: () => HM
+     });
+     var yM = {};
+ ... (59 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L103-L119` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L382-L383) · [Before (L103-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L103-L119)

```diff
-       let {
-         setApplySettingsCallback: WQ
-       } = QQ;
-       const {
-         t: XQ
-       } = (0, sQ.C)(), [qQ, zQ] = (0, wQ.useState)(null), [PQ, gQ] = (0, wQ.useState)(null), [GQ, bQ] = (0, wQ.useState)(null), [vQ] = (0, wQ.useState)(rQ.j), [dQ, HQ] = (0, wQ.useState)(!0), [aQ, hQ] = (0, wQ.useState)(!1), {
-         loading: iQ,
-         error: AQ,
-         setError: EQ,
-         onFiles: CQ
-       } = (0, pQ.d)((async QQ => {
-         const WQ = await (0, JQ.loadPageShaderPackCompiler)();
-         if (!WQ) return void EQ(XQ("shaderPack:compilerUnavailable"));
-         gQ(WQ);
-         const wQ = (0, IQ.toStoredShaderPack)(QQ, await (0, jQ.g)(WQ, QQ.files));
-         await (0, IQ.saveShaderPack)(wQ, WQ) ? (zQ(wQ), uQ(qQ, wQ, WQ)) : EQ(XQ("shaderPack:saveFailed"))
- ... (1 more removed lines; see GitHub link above)
+       let rM, iM = {},
+         OM = [];
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L121-L124` → after: `L385-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L385-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L385-L387) · [Before (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L121-L124)

```diff
-       function uQ(QQ, XQ, wQ) {
-         (function(QQ, WQ, XQ, wQ) {
-           return XQ || UQ(QQ, wQ) || UQ(WQ, wQ)
-         })(QQ, XQ, (0, IQ.isShaderPackChangePending)(), wQ) && ((0, IQ.markShaderPackChangePending)(), WQ((() => VQ.i)))
+       function SM(OM) {
+         var jM, aM;
+         OM in iM || (iM[OM] = !0, rM.push(OM), null == (jM = MM.successors(OM)) || jM.forEach(SM), null == (aM = MM.predecessors(OM)) || aM.forEach(SM))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L126-L140` → after: `L389-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L389-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L389-L423) · [Before (L126-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L126-L140)

```diff
-       return (0, wQ.useEffect)((() => {
-         let QQ = !1;
-         return async function() {
-           const WQ = (0, FQ.hasUsableWebGpuAdapter)(),
-             XQ = await (0, BQ.f)();
-           if (QQ) return;
-           zQ(XQ), hQ(!0), HQ(!1);
-           const wQ = null !== XQ ? (0, JQ.loadPageShaderPackCompiler)() : null,
-             qQ = await WQ;
-           if (QQ) return;
-           bQ(qQ);
-           const TQ = await wQ;
-           if (!QQ && (gQ(TQ), null !== XQ && qQ && null !== TQ && (0, IQ.shaderPackNeedsCheck)(XQ, TQ))) {
-             const WQ = await (0, jQ.e)(XQ, TQ);
-             QQ || zQ((QQ => QQ === XQ ? WQ : QQ))
+       return MM.nodes().forEach((function(MM) {
+         rM = [], SM(MM), rM.length && OM.push(rM)
+       })), OM
+     }
+     var GM = class {
+         constructor() {
+           this._arr = [], this._keyIndices = {}
+         }
+         size() {
+           return this._arr.length
+         }
+         keys() {
+           return this._arr.map((MM => MM.key))
+         }
+         has(MM) {
+           return MM in this._keyIndices
+ ... (19 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L142-L147` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L425) · [Before (L142-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L142-L147)

```diff
-         }().catch((WQ => {
-           console.error("Failed to load the stored shader pack", WQ), QQ || EQ(XQ("shaderPack:unexpectedError"))
-         })).finally((() => {
-           QQ || (HQ(!1), hQ(!1))
-         })), () => {
-           QQ = !0
+           return !1
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L149-L210` → after: `L427-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L427-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L427-L490) · [Before (L149-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L149-L210)

```diff
-       }), []), (0, lQ.jsxs)("div", {
-         className: "ShaderPackCategory SettingsMenuRightInner",
-         children: [(0, lQ.jsx)("div", {
-           className: "ShaderPackIntro",
-           children: XQ("shaderPack:intro")
-         }), (0, lQ.jsx)(RQ, {
-           to: yQ.R,
-           className: "ShaderPackBrowseLink",
-           children: (0, lQ.jsx)(TQ.s, {
-             className: "ShaderPackBrowseButton",
-             children: XQ("shaderPackListing:browse")
-           })
-         }), !1 === GQ && (0, lQ.jsx)("div", {
-           className: "SettingsBoxWarning",
-           children: XQ(vQ ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
-         }), null !== AQ && (0, lQ.jsxs)("div", {
- ... (46 more removed lines; see GitHub link above)
+         removeMin() {
+           if (0 === this.size()) throw new Error("Queue underflow");
+           this._swap(0, this._arr.length - 1);
+           let MM = this._arr.pop();
+           return delete this._keyIndices[MM.key], this._heapify(0), MM.key
+         }
+         decrease(MM, rM) {
+           let iM = this._keyIndices[MM];
+           if (void 0 === iM) throw new Error(`Key not found: ${MM}`);
+           let OM = this._arr[iM].priority;
+           if (rM > OM) throw new Error(`New priority is greater than current priority. Key: ${MM} Old: ${OM} New: ${rM}`);
+           this._arr[iM].priority = rM, this._decrease(iM)
+         }
+         _heapify(MM) {
+           let rM = this._arr,
+             iM = 2 * MM,
+ ... (48 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L215-L233` → after: `L501-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L501-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L501-L585) · [Before (L215-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L215-L233)

```diff
-       let {
-         to: WQ,
-         className: XQ,
-         children: wQ
-       } = QQ;
-       const {
-         gameState: TQ
-       } = (0, PQ.n)(["gameState"]), {
-         pathname: sQ,
-         search: FQ
-       } = (0, qQ.w)(), JQ = "landingPage" !== TQ && "studio" !== TQ;
-       return (0, lQ.jsx)(zQ.LinkPreserveSearch, {
-         to: WQ,
-         className: XQ,
-         target: JQ ? "_blank" : void 0,
-         onClick: () => {
- ... (3 more removed lines; see GitHub link above)
+       let rM = 0,
+         iM = [],
+         OM = {},
+         SM = [];
+ 
+       function jM(aM) {
+         var PM;
+         let nM = OM[aM] = {
+           onStack: !0,
+           lowlink: rM,
+           index: rM++
+         };
+         if (iM.push(aM), null == (PM = MM.successors(aM)) || PM.forEach((function(MM) {
+             if (MM in OM) {
+               let rM = OM[MM];
+               null != rM && rM.onStack && (nM.lowlink = Math.min(nM.lowlink, rM.index))
+ ... (69 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L236-L269` → after: `L588-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L588-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L588-L592) · [Before (L236-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L236-L269)

```diff
-   },
-   6946: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       $: () => EQ,
-       A: () => jQ,
-       B: () => VQ,
-       D: () => lQ,
-       E: () => gQ,
-       H: () => iQ,
-       I: () => BQ,
-       L: () => kQ,
-       O: () => uQ,
-       R: () => zQ,
-       S: () => LQ,
-       V: () => FQ,
-       Z: () => sQ,
- ... (18 more removed lines; see GitHub link above)
+     var RM = class extends Error {
+       constructor(MM) {
+         super(MM), this.name = "CycleException"
+       }
+     };
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L272` → after: `L595-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L595-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L595-L603) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L272)

```diff
-       return `${zQ}/${encodeURIComponent(QQ)}`
+       let rM = {},
+         iM = {},
+         OM = [];
+       if (MM.sinks().forEach((function SM(jM) {
+           var aM;
+           if (jM in iM) throw new RM;
+           jM in rM || (iM[jM] = !0, rM[jM] = !0, null == (aM = MM.predecessors(jM)) || aM.forEach(SM), delete iM[jM], OM.push(jM))
+         })), Object.keys(rM).length !== MM.nodeCount()) throw new RM;
+       return OM
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L277` → after: `L607-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L607-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L607-L646) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L277)

```diff
-       PQ = QQ
+       try {
+         pM(MM)
+       } catch (rM) {
+         if (rM instanceof RM) return !1;
+         throw rM
+       }
+       return !0
+     }
+ 
+     function sM(MM, rM, iM, OM, SM) {
+       Array.isArray(rM) || (rM = [rM]);
+       let jM = rM => {
+           var iM;
+           return null != (iM = MM.isDirected() ? MM.successors(rM) : MM.neighbors(rM)) ? iM : []
+         },
+         aM = {};
+ ... (24 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L280` → after: `L649-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L649-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L649-L677) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L280)

```diff
-     function JQ() {
+     function fM(MM, rM) {
+       var iM;
+       let OM, SM = new nM,
+         jM = {},
+         aM = new GM;
+ 
+       function PM(MM) {
+         let iM = MM.v === OM ? MM.w : MM.v,
+           SM = aM.priority(iM);
+         if (void 0 !== SM) {
+           let PM = rM(MM);
+           PM < SM && (jM[iM] = OM, aM.decrease(iM, PM))
+         }
+       }
+       if (0 === MM.nodeCount()) return SM;
+       MM.nodes().forEach((function(MM) {
+ ... (13 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L284-L285` → after: `L681-L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L681-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L681-L712) · [Before (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L284-L285)

```diff
-     function rQ() {
-       PQ = null
+     function YM(MM, rM, iM, OM) {
+       return function(MM, rM, iM, OM) {
+         if (void 0 === iM) return eM(MM, rM, iM, OM);
+         let SM = !1,
+           jM = MM.nodes();
+         for (let aM = 0; aM < jM.length; aM++) {
+           let PM = jM[aM];
+           if (void 0 === PM) continue;
+           let nM = OM(PM);
+           for (let MM = 0; MM < nM.length; MM++) {
+             let rM = nM[MM];
+             if (!rM) continue;
+             let OM = rM.v === PM ? rM.v : rM.w;
+             iM({
+               v: OM,
+               w: OM === rM.v ? rM.w : rM.v
+ ... (16 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L289` → after: `L716-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L716-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L716-L723) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L289)

```diff
-       return QQ.playerHasRank("developer") || QQ.playerHasRank("admin")
+       let rM = new NM({
+         multigraph: MM.isMultigraph()
+       }).setGraph(MM.graph());
+       return MM.nodes().forEach((iM => {
+         MM.children(iM).length || rM.setNode(iM, MM.node(iM))
+       })), MM.edges().forEach((iM => {
+         rM.setEdge(iM, MM.edge(iM))
+       })), rM
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L301` → after: `L727-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L727-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L727-L737) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L301)

```diff
-       return QQ.withFeatures.includes(WQ) ? "with" : QQ.withoutFeatures.includes(WQ) ? "without" : null
+       let iM, OM, SM = MM.x,
+         jM = MM.y,
+         aM = rM.x - SM,
+         PM = rM.y - jM,
+         nM = MM.width / 2,
+         QM = MM.height / 2;
+       if (!aM && !PM) throw new Error("Not possible to find intersection inside of the rectangle");
+       return Math.abs(PM) * nM > Math.abs(aM) * QM ? (PM < 0 && (QM = -QM), iM = QM * aM / PM, OM = QM) : (aM < 0 && (nM = -nM), iM = nM, OM = nM * PM / aM), {
+         x: SM + iM,
+         y: jM + OM
+       }
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L305` → after: `L741-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L741-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L741-L771) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L305)

```diff
-       return null === QQ ? "with" : "with" === QQ ? "without" : null
+       let rM = Mr(KM(MM) + 1).map((() => []));
+       return MM.nodes().forEach((iM => {
+         let OM = MM.node(iM),
+           SM = OM.rank;
+         void 0 !== SM && (rM[SM] || (rM[SM] = []), rM[SM][OM.order] = iM)
+       })), rM
+     }
+ 
+     function BM(MM, rM, iM, OM) {
+       let SM = {
+         width: 0,
+         height: 0
+       };
+       return arguments.length >= 4 && (SM.rank = iM, SM.order = OM), AM(MM, "border", SM, rM)
+     }
+     var XM = 65535;
+ ... (15 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L309` → after: `L775-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L775-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L775-L779) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L309)

```diff
-       return "with" === QQ ? "only" : null === QQ ? "include" : void 0
+       let rM = MM.nodes().map((rM => {
+         let iM = MM.node(rM).rank;
+         return void 0 === iM ? Number.MIN_VALUE : iM
+       }));
+       return IM(Math.max, rM)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L313-L317` → after: `L783-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L783-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L783-L787) · [Before (L313-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L313-L317)

```diff
-       const XQ = yQ(QQ, WQ),
-         wQ = QQ => QQ.filter((QQ => QQ !== WQ));
-       return {
-         withFeatures: null === XQ ? [...QQ.withFeatures, WQ] : wQ(QQ.withFeatures),
-         withoutFeatures: "with" === XQ ? [...QQ.withoutFeatures, WQ] : wQ(QQ.withoutFeatures)
+       let iM = Date.now();
+       try {
+         return rM()
+       } finally {
+         console.log(MM + " time: " + (Date.now() - iM) + "ms")
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L320-L326` → after: `L790-L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L790-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L790-L844) · [Before (L320-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L320-L326)

```diff
-     const GQ = "section",
-       UQ = "sort",
-       bQ = "filters",
-       vQ = "q",
-       dQ = "banned",
-       HQ = "popular",
-       aQ = "strict";
+ 
+     function TM(MM, rM) {
+       return rM()
+     }
+     var VM = 0;
+ 
+     function cM(MM) {
+       return MM + "" + ++VM
+     }
+ 
+     function Mr(MM, rM) {
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+       null == rM && (rM = MM, MM = 0);
+       let OM = MM => MM < rM;
+       iM < 0 && (OM = MM => rM < MM);
+       let SM = [];
+ ... (39 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L330-L341` → after: `L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L952) · [Before (L330-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L330-L341)

```diff
-       const zQ = QQ.get(GQ),
-         sQ = (null !== (WQ = QQ.get(bQ)) && void 0 !== WQ ? WQ : aQ).split(","),
-         FQ = QQ.get(dQ);
-       return {
-         section: "favourites" === zQ || "mine" === zQ ? zQ : "explore",
-         sort: null !== (XQ = wQ.u.find((WQ => WQ === QQ.get(UQ)))) && void 0 !== XQ ? XQ : HQ,
-         withFeatures: jQ.filter((QQ => sQ.includes(QQ) && !sQ.includes(`-${QQ}`))),
-         withoutFeatures: jQ.filter((QQ => sQ.includes(`-${QQ}`))),
-         searchQuery: (null === (qQ = QQ.get(vQ)) || void 0 === qQ ? void 0 : qQ.slice(0, wQ.G)) || null,
-         pageNumber: (0, TQ.f)(QQ.get(TQ.e)),
-         banned: "only" === FQ ? "with" : "include" === FQ ? null : "without"
-       }
+       iM.out ? iM.in ? null == (jM = MM[iM.out - iM.in + rM]) || jM.enqueue(iM) : null == (SM = MM[MM.length - 1]) || SM.enqueue(iM) : null == (OM = MM[0]) || OM.enqueue(iM)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L346-L347` → after: `L957-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L957-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L957-L992) · [Before (L346-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L346-L347)

```diff
-       const wQ = RQ(WQ);
-       (0, TQ.i)(QQ, GQ, "explore" === WQ.section ? null : WQ.section), (0, TQ.i)(QQ, UQ, WQ.sort === HQ ? null : WQ.sort), (0, TQ.i)(QQ, bQ, wQ === aQ ? null : wQ), (0, TQ.i)(QQ, vQ, WQ.searchQuery), (0, TQ.i)(QQ, dQ, null !== (XQ = DQ(WQ.banned)) && void 0 !== XQ ? XQ : null), ( … [truncated]
+       ("greedy" === MM.graph().acyclicer ? zr(MM, (iM = MM, MM => iM.edge(MM).weight)) : function(MM, rM) {
+         let iM = [],
+           OM = {},
+           SM = {};
+ 
+         function jM(rM) {
+           Object.hasOwn(SM, rM) || (SM[rM] = !0, OM[rM] = !0, MM.outEdges(rM).forEach((MM => {
+             Object.hasOwn(OM, MM.w) ? iM.push(MM) : jM(MM.w)
+           })), delete OM[rM])
+         }
+ 
+         function aM(jM) {
+           var PM;
+           Object.hasOwn(SM, jM) || (SM[jM] = !0, OM[jM] = !0, null == (PM = MM.outEdges(jM)) || PM.forEach((SM => {
+             var PM, nM;
+             Object.hasOwn(OM, SM.w) || (null == (PM = rM.node(jM)) ? void 0 : PM.rank) > (null == (nM = rM.node(SM.w)) ? void 0 : nM.rank) && function(MM, rM, iM) {
+ ... (20 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L351-L360` → after: `L996-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L996-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L996-L1017) · [Before (L351-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L351-L360)

```diff
-       const WQ = new URLSearchParams;
-       return hQ(WQ, {
-         section: "explore",
-         sort: HQ,
-         withFeatures: "strict" === QQ ? [QQ] : [QQ, "strict"],
-         withoutFeatures: [],
-         searchQuery: null,
-         pageNumber: 1,
-         banned: "without"
-       }), `${zQ}?${WQ.toString()}`
+       MM.graph().dummyChains = [], MM.edges().forEach((rM => function(MM, rM) {
+         let iM, OM, SM, jM = rM.v,
+           aM = MM.node(jM).rank,
+           PM = rM.w,
+           nM = MM.node(PM).rank,
+           QM = rM.name,
+           zM = MM.edge(rM),
+           LM = zM.labelRank;
+         if (nM === aM + 1) return;
+         for (MM.removeEdge(rM), SM = 0, ++aM; aM < nM; ++SM, ++aM) zM.points = [], OM = {
+           width: 0,
+           height: 0,
+           edgeLabel: zM,
+           edgeObj: rM,
+           rank: aM
+         }, iM = AM(MM, "edge", OM, "_d"), aM === LM && (OM.width = zM.width, OM.height = zM.height, OM.dummy = "edge-label", OM.labelpos = zM.labelpos), MM.setEdge(jM, iM, {
+ ... (6 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L364` → after: `L1021-L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1021-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L1021-L1030) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L364)

```diff
-       return RQ(QQ) === aQ
+       let rM = {};
+       MM.sources().forEach((function iM(OM) {
+         let SM = MM.node(OM);
+         if (Object.hasOwn(rM, OM)) return SM.rank;
+         rM[OM] = !0;
+         let jM = MM.outEdges(OM),
+           aM = jM ? jM.map((rM => null == rM ? Number.POSITIVE_INFINITY : iM(rM.w) - MM.edge(rM).minlen)) : [],
+           PM = IM(Math.min, aM);
+         return PM === Number.POSITIVE_INFINITY && (PM = 0), SM.rank = PM
+       }))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L367-L368` → after: `L1033-L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1033-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L1033-L1034) · [Before (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L367-L368)

```diff
-     function AQ(QQ) {
-       return null !== QQ.searchQuery || "with" === QQ.banned || RQ(QQ) !== aQ
+     function dr(MM, rM) {
+       return MM.node(rM.w).rank - MM.node(rM.v).rank - MM.edge(rM).minlen
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L372-L388` → after: `L1075-L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1075-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L1075-L1137) · [Before (L372-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L372-L388)

```diff
-       return jQ.flatMap((WQ => {
-         const XQ = yQ(QQ, WQ);
-         return "with" === XQ ? [WQ] : "without" === XQ ? [`-${WQ}`] : []
-       })).join(",")
-     }
-     const EQ = {
-         popular: "shaderPackListing:sortPopular",
-         updated: "shaderPackListing:sortUpdated",
-         newest: "shaderPackListing:sortNewest"
-       },
-       CQ = {
-         forest: "shaderPackListing:viewForest",
-         desert: "shaderPackListing:viewDesert",
-         water: "shaderPackListing:viewWater",
-         night: "shaderPackListing:viewNight",
-         cave: "shaderPackListing:viewCave"
- ... (1 more removed lines; see GitHub link above)
+       MM = function(MM) {
+         let rM = (new NM).setGraph(MM.graph());
+         return MM.nodes().forEach((iM => rM.setNode(iM, MM.node(iM)))), MM.edges().forEach((iM => {
+           let OM = rM.edge(iM.v, iM.w) || {
+               weight: 0,
+               minlen: 1
+             },
+             SM = MM.edge(iM);
+           rM.setEdge(iM.v, iM.w, {
+             weight: OM.weight + SM.weight,
+             minlen: Math.max(OM.minlen, SM.minlen)
+           })
+         })), rM
+       }(MM), Jr(MM);
+       let rM, iM, OM = yr(MM);
+       for (gr(OM), wr(OM, MM); rM = Rr(OM);) iM = pr(OM, MM, rM), Wr(OM, MM, rM, iM)
+ ... (47 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L391` → after: `L1140-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1140-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L1140-L1151) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L391)

```diff
-       return Math.round(100 * Math.max(0, 1 - 1 / QQ))
+       return MM.edges().find((rM => MM.edge(rM).cutvalue < 0))
+     }
+ 
+     function pr(MM, rM, iM) {
+       let OM = iM.v,
+         SM = iM.w;
+       rM.hasEdge(OM, SM) || (OM = iM.w, SM = iM.v);
+       let jM = MM.node(OM),
+         aM = MM.node(SM),
+         PM = jM,
+         nM = !1;
+       return jM.lim > aM.lim && (PM = aM, nM = !0), rM.edges().filter((rM => nM === sr(MM, MM.node(rM.v), PM) && nM !== sr(MM, MM.node(rM.w), PM))).reduce(((MM, iM) => dr(rM, iM) < dr(rM, MM) ? iM : MM))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L395-L422` → after: `L1155-L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1155-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L1155-L1303) · [Before (L395-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L395-L422)

```diff
-       const TQ = [];
-       QQ.isBanned && TQ.push({
-         tone: "warning",
-         text: qQ("shaderPackListing:ownerBanned"),
-         detail: null
-       });
-       const {
-         pending: zQ
-       } = QQ;
-       if (null === QQ.brokenError || zQ && !zQ.error || TQ.push({
-           tone: "warning",
-           text: qQ("shaderPackListing:ownerBroken"),
-           detail: QQ.brokenError
-         }), null !== zQ && void 0 !== zQ && zQ.error) TQ.push({
-         tone: "warning",
-         text: qQ(WQ ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
- ... (12 more removed lines; see GitHub link above)
+       let SM = iM.v,
+         jM = iM.w;
+       MM.removeEdge(SM, jM), MM.setEdge(OM.v, OM.w, {}), gr(MM), wr(MM, rM),
+         function(MM, rM) {
+           let iM = MM.nodes().find((rM => !MM.node(rM).parent));
+           if (!iM) return;
+           let OM = Gr(MM, [iM]);
+           OM = OM.slice(1), OM.forEach((iM => {
+             let OM = MM.node(iM).parent,
+               SM = rM.edge(iM, OM),
+               jM = !1;
+             SM || (SM = rM.edge(OM, iM), jM = !0), rM.node(iM).rank = rM.node(OM).rank + (jM ? SM.minlen : -SM.minlen)
+           }))
+         }(MM, rM)
+     }
+ 
+ ... (133 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L425-L428` → after: `L1503-L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1503-L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L1503-L1607) · [Before (L425-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L425-L428)

```diff
-       return QQ.listed || TQ.push({
-         tone: "info",
-         text: qQ("shaderPackListing:ownerUnlisted"),
-         detail: null
+       JM = cr(mM, LM, JM), zM.forEach((MM => {
+         JM += MM.vs.length, mM.push(MM.vs), HM += MM.barycenter * MM.weight, hM += MM.weight, JM = cr(mM, LM, JM)
+       }));
+       let dM = {
+         vs: mM.flat(1)
+       };
+       return hM && (dM.barycenter = HM / hM, dM.weight = hM), dM
+     }
+ 
+     function cr(MM, rM, iM) {
+       let OM;
+       for (; rM.length && (OM = rM[rM.length - 1]).i <= iM;) rM.pop(), MM.push(OM.vs), iM++;
+       return iM
+     }
+ 
+     function Mi(MM, rM, iM, OM, SM) {
+ ... (89 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L433` → after: `L1645-L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1645-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L1645-L1660) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L433)

```diff
-       return Math.max(1, Math.round(QQ / 1024))
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       if ("function" == typeof rM.customOrder) return void rM.customOrder(MM, ii);
+       let OM = KM(MM),
+         SM = Oi(MM, Mr(1, OM + 1), "inEdges"),
+         jM = Oi(MM, Mr(OM - 1, -1, -1), "outEdges"),
+         aM = Ir(MM, iM);
+       if (ji(MM, aM), rM.disableOptimalOrderHeuristic) return;
+       let PM, nM = Number.POSITIVE_INFINITY,
+         QM = rM.constraints || [];
+       for (let zM = 0, LM = 0; LM < 4; ++zM, ++LM) {
+         Si(zM % 2 ? SM : jM, zM % 4 >= 2, QM, iM), aM = FM(MM);
+         let rM = Kr(MM, aM);
+         rM < nM ? (LM = 0, PM = Object.assign({}, aM), nM = rM) : rM === nM && (PM = structuredClone(aM))
+       }
+       ji(MM, PM)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L437-L473` → after: `L1664-L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1664-L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L1664-L1781) · [Before (L437-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L437-L473)

```diff
-       return QQ instanceof qQ.b && QQ.errorMessageForUser ? QQ.errorMessageForUser : WQ(XQ)
-     }
-   },
-   6952: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       A: () => wQ,
-       E: () => rQ,
-       G: () => gQ,
-       J: () => GQ,
-       K: () => JQ,
-       M: () => PQ,
-       c: () => jQ,
-       f: () => yQ,
-       i: () => BQ,
-       j: () => IQ,
-       l: () => pQ,
- ... (21 more removed lines; see GitHub link above)
+       let OM = new Map,
+         SM = (MM, rM) => {
+           OM.has(MM) || OM.set(MM, []), OM.get(MM).push(rM)
+         };
+       for (let jM of MM.nodes()) {
+         let rM = MM.node(jM);
+         if ("number" == typeof rM.rank && SM(rM.rank, jM), "number" == typeof rM.minRank && "number" == typeof rM.maxRank)
+           for (let MM = rM.minRank; MM <= rM.maxRank; MM++) MM !== rM.rank && SM(MM, jM)
+       }
+       return rM.map((function(rM) {
+         return ri(MM, rM, iM, OM.get(rM) || [])
+       }))
+     }
+ 
+     function Si(MM, rM, iM, OM) {
+       let SM = !0,
+ ... (102 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L475-L479` → after: `L1783-L1811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1783-L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L1783-L1811) · [Before (L475-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L475-L479)

```diff
-       },
-       TQ = ["popular", "updated", "newest"],
-       zQ = 3,
-       sQ = 32,
-       FQ = 300;
+       }
+       return nM((function(MM) {
+         let rM = aM.inEdges(MM);
+         jM[MM] = rM ? rM.reduce(((MM, rM) => {
+           var iM;
+           let OM = null != (iM = jM[rM.v]) ? iM : 0,
+             SM = aM.edge(rM);
+           return Math.max(MM, OM + (void 0 !== SM ? SM : 0))
+         }), 0) : 0
+       }), (function(MM) {
+         return aM.predecessors(MM) || []
+       })), nM((function(rM) {
+         let iM = aM.outEdges(rM),
+           OM = Number.POSITIVE_INFINITY;
+         iM && (OM = iM.reduce(((MM, rM) => {
+           let iM = jM[rM.w],
+ ... (13 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L482` → after: `L1814-L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1814-L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L1814-L1967) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L482)

```diff
-       return QQ.slice(0, WQ).replace(/[\uD800-\uDBFF]$/, "")
+       let iM, OM = FM(MM),
+         SM = Object.assign(function(MM, rM) {
+           let iM = {};
+           return rM.length && rM.reduce((function(rM, OM) {
+             let SM = 0,
+               jM = 0,
+               aM = rM.length,
+               PM = OM[OM.length - 1];
+             return OM.forEach(((rM, nM) => {
+               let QM = function(MM, rM) {
+                   if (MM.node(rM).dummy) {
+                     let iM = MM.predecessors(rM);
+                     if (iM) return iM.find((rM => MM.node(rM).dummy))
+                   }
+                 }(MM, rM),
+                 zM = QM ? MM.node(QM).order : aM;
+ ... (138 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L488-L491` → after: `L1970-L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1970-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L1970-L1977) · [Before (L488-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L488-L491)

```diff
-     function IQ(QQ) {
-       const WQ = QQ,
-         XQ = null === WQ || void 0 === WQ ? void 0 : WQ.files;
-       return "number" === typeof(null === WQ || void 0 === WQ ? void 0 : WQ.apiVersion) && "string" === typeof WQ.name && (null === WQ.author || "string" === typeof WQ.author) && (void 0 === WQ.keepCircleShadows || "boolean" === typeof WQ.keepCircleShadows) && "object" === typeof … [truncated]
+     function zi(MM, rM, iM) {
+       var OM;
+       if (!iM) return !1;
+       let SM = null == (OM = rM.node(MM)) ? void 0 : OM.edgeObj;
+       if (!SM || rM.node(MM).edgeLabel.reversed) return !1;
+       let jM = iM.indexOf(null == SM ? void 0 : SM.v),
+         aM = iM.indexOf(null == SM ? void 0 : SM.w);
+       return -1 !== jM && -1 !== aM && jM === (aM + 1) % iM.length || jM === (aM - 1) % iM.length
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L496-L497` → after: `L1980-L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1980-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L1980-L2001) · [Before (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L496-L497)

```diff
-     function yQ(QQ) {
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(QQ)}`
+     function Li(MM, rM) {
+       (function(MM) {
+         let rM = FM(MM),
+           iM = MM.graph(),
+           OM = iM.ranksep,
+           SM = iM.rankalign,
+           jM = 0;
+         rM.forEach((rM => {
+           let iM = rM.reduce(((rM, iM) => {
+             var OM;
+             let SM = null != (OM = MM.node(iM).height) ? OM : 0;
+             return rM > SM ? rM : SM
+           }), 0);
+           rM.forEach((rM => {
+             let OM = MM.node(rM);
+             OM.y = "top" === SM ? jM + OM.height / 2 : "bottom" === SM ? jM + iM - OM.height / 2 : jM + iM / 2
+ ... (6 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L499-L500` → after: `L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L2003) · [Before (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L499-L500)

```diff
-     const VQ = "Screenshot generation failed.",
-       DQ = "Its screenshots couldn't be generated:";
+     var mi = new WeakMap;
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L504` → after: `L2020-L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2020-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L2020-L2494) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L504)

```diff
-       return QQ === VQ || null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.startsWith(DQ)) && void 0 !== WQ && WQ
+       let SM = MM.nodes().filter((rM => MM.children(rM).length)),
+         jM = {};
+       SM.forEach((OM => {
+         let SM = MM.node(OM);
+         if (SM && SM.rankdir) {
+           let aM = new NM({
+             multigraph: !0,
+             compound: !0
+           });
+           aM.setGraph({
+             rankdir: SM.rankdir
+           });
+           let PM = MM.children(OM);
+           PM.forEach((rM => {
+             let iM = {
+               ...MM.node(rM)
+ ... (459 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L508` → after: `L2498-L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2498-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L2498-L2506) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L508)

```diff
-       return `shaderPacks/${QQ}/${WQ}.json`
+       MM.nodes().forEach((iM => {
+         let OM = MM.node(iM),
+           SM = rM.node(iM);
+         OM && (OM.x = SM.x, OM.y = SM.y, OM.order = SM.order, OM.rank = SM.rank, rM.children(iM).length && (OM.width = SM.width, OM.height = SM.height))
+       })), MM.edges().forEach((iM => {
+         let OM = MM.edge(iM),
+           SM = rM.edge(iM);
+         OM.points = SM.points, Object.hasOwn(SM, "x") && (OM.x = SM.x, OM.y = SM.y)
+       })), MM.graph().width = rM.graph().width, MM.graph().height = rM.graph().height
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L511-L512` → after: `L2533-L2549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2533-L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L2533-L2549) · [Before (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L511-L512)

```diff
-     function UQ(QQ, WQ, XQ, wQ) {
-       return null === WQ.renderId ? bQ(QQ, WQ.baselineVersion, XQ, wQ) : `${QQ}/${function(QQ,WQ,XQ,wQ){return`shaderPacks/${QQ}/${WQ}/${XQ}-${wQ}.webp`}(WQ.packId,WQ.renderId,XQ,wQ)}`
+     function gi(MM) {
+       let rM = new NM({
+           multigraph: !0,
+           compound: !0
+         }),
+         iM = Ri(MM.graph());
+       return rM.setGraph(Object.assign({}, Ui, ui(iM, Ei), rr(iM, Gi))), MM.nodes().forEach((iM => {
+         let OM = ui(Ri(MM.node(iM)), Ci);
+         Object.keys(ei).forEach((MM => {
+           void 0 === OM[MM] && (OM[MM] = ei[MM])
+         })), rM.setNode(iM, OM);
+         let SM = MM.parent(iM);
+         void 0 !== SM && rM.setParent(iM, SM)
+       })), MM.edges().forEach((iM => {
+         let OM = Ri(MM.edge(iM));
+         rM.setEdge(iM, Object.assign({}, wi, ui(OM, bi), rr(OM, ti)))
+ ... (1 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L515-L516` → after: `L2552-L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2552-L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/133.js#L2552-L2581) · [Before (L515-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/133.js#L515-L516)

```diff
-     function bQ(QQ, WQ, XQ, wQ) {
-       return `${QQ}/${function(QQ,WQ,XQ){return`shaderPacks/baseline/${QQ}/${WQ}-${XQ}.webp`}(WQ,XQ,wQ)}`
+     function ui(MM, rM) {
+       return ir(rr(MM, rM), Number)
+     }
+ 
+     function Ri(MM) {
+       let rM = {};
+       return MM && Object.entries(MM).forEach((MM => {
+         let [iM, OM] = MM;
+         "string" == typeof iM && (iM = iM.toLowerCase()), rM[iM] = OM
+       })), rM
+     }
+ 
+     function Wi(MM) {
+       let rM = FM(MM),
+         iM = new NM({
+           compound: !0,
+ ... (14 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/134.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/134.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/134.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85eR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/134.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/134.js#L2)

```diff
- export const ids = [134, 140, 141];
+ export const ids = [134];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/134.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/134.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/134.js#L4)

```diff
-   40743: (QQ, WQ, XQ) => {
+   6950: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/134.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/134.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/134.js#L6-L7)

```diff
-       b: () => JQ,
-       installListedShaderPack: () => gQ
+       e: () => OM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/134.js` (Changed code · before: `L444-L454` → after: `L9-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e) · [After (L9-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/134.js#L9-L46) · [Before (L444-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/134.js#L444-L454)

```diff
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
+ ... (22 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/134.js` (Changed code · before: `L457-L497` → after: `L49-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85eR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e) · [After (L49-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/134.js#L49-L167) · [Before (L457-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/134.js#L457-L497)

```diff
-       TQ = ["popular", "updated", "newest"],
-       zQ = 3,
-       sQ = 32,
-       FQ = 300;
- 
-     function PQ(QQ, WQ) {
-       return QQ.slice(0, WQ).replace(/[\uD800-\uDBFF]$/, "")
-     }
-     const gQ = 64,
-       JQ = 512,
-       rQ = 18e5;
- 
-     function IQ(QQ) {
-       const WQ = QQ,
-         XQ = null === WQ || void 0 === WQ ? void 0 : WQ.files;
-       return "number" === typeof(null === WQ || void 0 === WQ ? void 0 : WQ.apiVersion) && "string" === typeof WQ.name && (null === WQ.author || "string" === typeof WQ.author) && (void 0 === WQ.keepCircleShadows || "boolean" === typeof WQ.keepCircleShadows) && "object" === typeof … [truncated]
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
+       canUseZoomKey: !0,
+       canAltAction: !0,
+       canSeeNametagsThroughWalls: !0,
+       showBasicMovementControls: !0,
+       middleTextTop: "",
+       middleTextUpper: "",
+       middleTextLower: "",
+ ... (103 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/135.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/135.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L2)

```diff
- export const ids = [135];
+ export const ids = [135, 705];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L4-L89` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L4) · [Before (L4-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L4-L89)

```diff
-   41999: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       startHarnessShaderPack: () => JQ
-     });
-     var wQ = XQ(6952),
-       qQ = XQ(5396),
-       TQ = XQ(7015),
-       zQ = XQ(6984),
-       sQ = XQ(5394),
-       FQ = XQ(39494),
-       PQ = XQ(7002),
-       gQ = XQ(7018);
-     async function JQ(QQ, WQ) {
-       const {
-         stored: XQ,
-         info: JQ
- ... (70 more removed lines; see GitHub link above)
+   37278: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L91-L104` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L6) · [Before (L91-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L91-L104)

```diff
-       forgetShaderPackActiveHint: () => hQ,
-       isOtherApiVersion: () => dQ,
-       isShaderPackActive: () => GQ,
-       isShaderPackChangePending: () => vQ,
-       markShaderPackChangePending: () => bQ,
-       pageShaderPackValidationVersion: () => HQ,
-       reconcileStoredShaderPackHint: () => lQ,
-       removeShaderPack: () => pQ,
-       replaceShaderPack: () => yQ,
-       saveShaderPack: () => BQ,
-       shaderPackNeedsCheck: () => aQ,
-       storedPackOutcome: () => UQ,
-       storedShaderPackFiles: () => rQ,
-       toStoredShaderPack: () => JQ
+       default: () => kr
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L106-L113` → after: `L8-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L8-L40) · [Before (L106-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L106-L113)

```diff
-     var wQ = XQ(5396),
-       qQ = XQ(5394),
-       TQ = XQ(43),
-       zQ = XQ(3716),
-       sQ = XQ(7026),
-       FQ = XQ(7002);
-     const PQ = "shaderPackChangePending";
-     let gQ = null;
+     var OM = iM(313),
+       SM = iM(3902),
+       jM = iM(3945),
+       aM = iM(3938),
+       PM = iM(3934),
+       nM = iM(1188),
+       QM = iM(30),
+       zM = iM(1830),
+       LM = iM(1440),
+       mM = iM(1520),
+       HM = iM(1116),
+       hM = iM.n(HM),
+       JM = iM(1763),
+       dM = iM(44),
+       yM = iM(65),
+       lM = iM(2482),
+ ... (17 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L115-L121` → after: `L42-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L42-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L42-L89) · [Before (L115-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L115-L121)

```diff
-     function JQ(QQ, WQ, XQ) {
-       return {
-         manifest: QQ.manifest,
-         files: (0, wQ.w)(QQ.files),
-         validation: WQ,
-         ...XQ && {
-           listing: XQ
+     function oM(MM) {
+       var rM;
+       let {
+         eventName: iM
+       } = MM;
+       const {
+         t: OM
+       } = (0, nM.A)(), SM = gM.e[iM], [jM, aM] = (0, dM.useState)((() => Date.now() >= SM.endsAt.getTime())), [PM, QM] = (0, dM.useState)("overall"), zM = function(MM, rM) {
+         const {
+           userContext: iM,
+           isUserContextUpdating: OM
+         } = (0, GM.b)(), SM = `${MM}:${rM}`, [jM, aM] = (0, dM.useState)({
+           requestKey: SM,
+           leaderboard: {
+             status: "loading"
+           }
+ ... (32 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L123` → after: `L91-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L91-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L91-L245) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L123)

```diff
-       }
+       }(iM, PM), LM = function(MM) {
+         const rM = (0, dM.useRef)(null),
+           iM = (0, dM.useRef)(0),
+           OM = (0, dM.useRef)(),
+           [SM, jM] = (0, dM.useState)({});
+         return (0, dM.useEffect)((() => {
+           const SM = null === MM || void 0 === MM ? void 0 : MM.entries;
+           if (!SM) return;
+           const aM = new Map(SM.map((MM => [MM.player.name, MM.value]))),
+             PM = rM.current;
+           if (rM.current = aM, null === PM) return;
+           const nM = {};
+           for (const [MM, rM] of aM) {
+             const OM = PM.get(MM);
+             void 0 !== OM && rM > OM && (nM[MM] = {
+               amount: rM - OM,
+ ... (139 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L127-L130` → after: `L249-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L249-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L249-L292) · [Before (L127-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L127-L130)

```diff
-       return Object.keys(QQ.files).map((WQ => ({
-         path: WQ,
-         source: QQ.files[WQ]
-       })))
+       let {
+         event: rM,
+         progress: iM
+       } = MM;
+       const {
+         t: OM
+       } = (0, nM.A)(), SM = null !== iM && rM.prizeGoals.some(((MM, rM) => iM[rM] >= MM.target));
+       return (0, DM.jsxs)("div", {
+         className: "GameEventPanelGoals",
+         children: [(0, DM.jsx)("div", {
+           className: "GameEventPanelGoalsHeading",
+           children: OM(SM ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
+         }), (0, DM.jsx)("div", {
+           className: "GameEventPanelGoalRow",
+           children: rM.prizeGoals.map(((MM, rM) => {
+             const SM = null === iM ? null : Math.min(iM[rM], MM.target);
+ ... (28 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L132` → after: `L294-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L294-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L294-L298) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L132)

```diff
-     let IQ = Promise.resolve();
+     var YM = iM(1630),
+       NM = iM(1675),
+       AM = iM(1099),
+       xM = iM(783),
+       vM = iM(3875);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L135-L140` → after: `L301-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L301-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L301-L394) · [Before (L135-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L135-L140)

```diff
-       const WQ = IQ.then(QQ);
-       return IQ = WQ.catch((() => {})), WQ
-     }
- 
-     function BQ(QQ, WQ) {
-       return jQ((() => VQ(QQ, WQ)))
+       let {
+         gameNameWithVariation: rM
+       } = MM;
+       const iM = (0, YM.F)(rM),
+         [OM, SM] = (0, dM.useState)(null);
+       if ((0, dM.useEffect)((() => {
+           if (!iM) return;
+           let MM = !0;
+           return (0, NM.h)(iM).then((rM => {
+             MM && SM(rM)
+           })).catch((MM => {
+             console.error(`Failed to load the page copy for ${iM.name}`, MM)
+           })), () => {
+             MM = !1
+           }
+         }), [iM]), !iM || !OM || OM.name !== iM.name) return null;
+ ... (78 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L143-L151` → after: `L420-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L420-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L420-L442) · [Before (L143-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L143-L151)

```diff
-     function yQ(QQ, WQ, XQ) {
-       return jQ((async () => JSON.stringify(await (0, sQ.f)()) === JSON.stringify(QQ) && (null === WQ ? (await DQ(), !0) : VQ(WQ, XQ))))
-     }
-     async function VQ(QQ, WQ) {
-       const XQ = await TQ.f.setItem(sQ.b, QQ);
-       return XQ && iQ(QQ, WQ), XQ
-     }
-     async function DQ() {
-       await TQ.f.removeItem(sQ.b), TQ.i.removeItem(zQ.c)
+     function Jr(MM) {
+       let {
+         preview: rM,
+         isBroken: iM
+       } = MM;
+       const OM = null === rM ? null : (0, jM.g)(rM, "small"),
+         aM = (0, SM.c)(null !== OM && void 0 !== OM ? OM : jM.t);
+       return null === rM ? (0, DM.jsx)("div", {
+         className: hM()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
+           FeaturedGamesPopupSlotThumbnailBroken: iM
+         }),
+         children: (0, DM.jsx)(BM.b, {
+           name: iM ? "triangle-exclamation" : "star"
+         })
+       }) : (0, DM.jsx)("div", {
+         className: hM()("FeaturedGamesPopupSlotThumbnail", PM.k),
+ ... (7 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L154-L155` → after: `L445-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L445-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L445-L551) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L154-L155)

```diff
-     function pQ() {
-       return jQ(DQ)
+     function dr(MM) {
+       let {
+         schematicId: rM,
+         gameName: iM
+       } = MM;
+       const {
+         userContext: SM
+       } = (0, GM.b)(), jM = (0, hr.b)(), [aM, PM] = (0, dM.useState)(null), [nM, QM] = (0, dM.useState)(null), [zM, LM] = (0, dM.useState)(!1), HM = (0, dM.useCallback)((() => {
+         QM(null), uM.c.getFeaturedGames(SM).then((MM => {
+           jM.current && PM(MM.slots)
+         })).catch((MM => {
+           console.error("Failed to get featured games", MM), jM.current && QM("Failed to load featured games")
+         }))
+       }), [SM, jM]);
+       (0, dM.useEffect)((() => {
+         HM()
+ ... (91 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L158-L159` → after: `L559-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L559-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L559-L582) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L158-L159)

```diff
-     function GQ(QQ, WQ) {
-       return "active" === UQ(QQ, WQ).kind
+     function Cr(MM) {
+       let {
+         customLobbies: rM,
+         favouriteLobbies: iM,
+         toggleLikeLobby: OM,
+         showReport: SM
+       } = MM;
+       const [jM, aM] = (0, dM.useState)(Ur);
+       return (0, dM.useEffect)((() => {
+         if (jM >= rM.length) return;
+         let MM = !0;
+         return (0, Er.e)().then((() => {
+           MM && aM(jM + Gr)
+         })), () => {
+           MM = !1
+         }
+ ... (8 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L163-L183` → after: `L613-L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L613-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L613-L629) · [Before (L163-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L163-L183)

```diff
-       var XQ;
-       return null === QQ ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : dQ(QQ) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.ok) || QQ.validation.fromRecheck ? null === WQ ? {
-         kind: "none",
-         reason: "noCompiler"
-       } : aQ(QQ, WQ) ? {
-         kind: "blocked",
-         messageKey: "shaderPack:failedUnchecked"
-       } : QQ.validation.ok ? {
-         kind: "active"
-       } : {
- ... (5 more removed lines; see GitHub link above)
+       const iM = Lr.g[MM.schematicId];
+       return {
+         listedVariations: [],
+         backgroundImage: (0, jM.g)(MM, "large"),
+         badges: [],
+         category: MM.gameCategory,
+         title: void 0 !== (null === iM || void 0 === iM ? void 0 : iM.title) ? rM(iM.title) : MM.name,
+         variationTitle: null,
+         description: void 0 !== (null === iM || void 0 === iM ? void 0 : iM.description) ? rM(iM.description) : MM.description,
+         ownerSocialPreviewWithoutLocation: "owner" in MM ? MM.owner : null,
+         ccu: MM.ccu,
+         favourites: MM.favourites,
+         isFavourite: null,
+         useRejoinLastLobbyButton: "persistWorld" in MM ? MM.persistWorld : null,
+         showWorldsInsteadOfCustomLobbies: !1,
+         canCreateCustomLobbies: !0,
+ ... (1 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L187-L188` → after: `L633-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L633-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L633-L641) · [Before (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L187-L188)

```diff
-     function bQ() {
-       TQ.m.setItem(PQ, performance.timeOrigin)
+     function Dr(MM) {
+       var rM, iM, OM;
+       return null !== (rM = null !== (iM = (0, ur.m)() ? function(MM) {
+         for (const [rM, iM] of Object.entries(Rr)) {
+           const OM = [rM, ...iM.map((MM => (0, jr.Kb)(rM, MM)))];
+           if (OM.includes(MM)) return OM
+         }
+         return null
+       }(MM) : null) && void 0 !== iM ? iM : null === (OM = Lr.e[MM]) || void 0 === OM ? void 0 : OM.listedVariations) && void 0 !== rM ? rM : null
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L192` → after: `L645-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L645-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L645-L652) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L192)

```diff
-       return TQ.m.getItem(PQ) === performance.timeOrigin
+       const {
+         gameNameWithVariation: MM
+       } = (0, TM.D)();
+       if ((0, dM.useEffect)(tr.r, []), MM && (0, Or.r)(MM)) return (0, DM.jsx)(Zr, {
+         urlId: MM
+       }, MM);
+       const rM = MM && (0, Sr.m)(MM) ? MM : "firstParty";
+       return (0, DM.jsx)(or, {}, rM)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L196` → after: `L656-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L656-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L656-L689) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L196)

```diff
-       return !(0, qQ.g)(QQ.manifest.apiVersion)
+       let {
+         urlId: rM
+       } = MM;
+       const {
+         userContext: iM,
+         isUserContextUpdating: OM
+       } = (0, GM.b)(), SM = (0, dM.useMemo)((() => (0, qM.g)(rM)), [rM]);
+       (0, dM.useMemo)((() => {
+         if (null === SM) return;
+         const MM = IM.userContextManager.peekCurrentUserContext();
+         (null !== MM ? uM.c.getGame(MM, SM.schematicId) : IM.userContextManager.getCurrentUserContext().then((MM => uM.c.getGame(MM, SM.schematicId)))).catch((MM => {
+           console.error(`Failed to get the custom game ${SM.schematicId}`, MM), (0, qM.f)(rM)
+         }))
+       }), [SM, rM]);
+       const [jM, aM] = (0, dM.useState)(null), PM = (0, KM.d)();
+       (0, dM.useEffect)((() => {
+ ... (18 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L200` → after: `L693-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L693-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L693-L1269) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L200)

```diff
-       return gQ ??= QQ.WE((0, FQ.shaderPackTextures)()), gQ
+       var rM, iM, aM, HM, gM, RM, pM, sM;
+       let {
+         gameNameWithVariation: kM,
+         knownCustomGame: ZM = null
+       } = MM;
+       const {
+         t: fM
+       } = (0, nM.A)();
+       (0, zr.j)();
+       const NM = (0, zr.q)(),
+         {
+           userContext: AM,
+           isUserContextUpdating: xM
+         } = (0, GM.b)(),
+         vM = (0, wr.d)(),
+         IM = (0, VM.useNavigatePreserveSearch)(),
+ ... (561 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L203-L205` → after: `L1272-L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1272-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L1272-L1301) · [Before (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L203-L205)

```diff
-     function aQ(QQ, WQ) {
-       var XQ;
-       return (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.headerVersion) !== HQ(WQ)
+     function fr(MM) {
+       let {
+         variation: rM,
+         isSelected: iM,
+         children: OM
+       } = MM;
+       const nM = Lr.e[rM],
+         zM = (0, jM.m)(rM, (0, jM.p)(nM)),
+         LM = (0, SM.c)(zM),
+         mM = (0, aM.e)([(0, jM.j)(rM, (0, jM.d)(nM))]);
+       return (0, DM.jsxs)(VM.LinkPreserveSearch, {
+         to: (0, YM.x)(rM),
+         replace: !0,
+         className: hM()("GameInformationVariation", PM.k, {
+           SelectedGameInformationVariation: iM
+         }),
+ ... (14 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L209-L211` → after: `L1322-L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1322-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L1322-L1363) · [Before (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L209-L211)

```diff
-       return jQ((async () => {
-         iQ(await (0, sQ.f)(!0), QQ)
-       }))
+       let {
+         info: rM,
+         className: iM
+       } = MM;
+       const {
+         statusText: OM,
+         rowText: SM
+       } = (0, HM.f)();
+       return (0, hM.jsxs)("div", {
+         className: mM()("GameApprovalInfoDetails", iM),
+         children: [(0, hM.jsxs)("div", {
+           className: mM()("GameApprovalInfoSummary", rM.overallPassed ? "Passed" : "Failed"),
+           children: [(0, hM.jsx)(zM.b, {
+             name: rM.overallPassed ? "circle-check" : "circle-xmark"
+           }), (0, hM.jsx)("span", {
+             children: OM(rM.status)
+ ... (26 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L214-L217` → after: `L1368-L1376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1368-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L1368-L1376) · [Before (L214-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L214-L217)

```diff
-     function hQ() {
-       return jQ((async () => {
-         TQ.i.removeItem(zQ.c)
-       }))
+     function lM(MM) {
+       yM.NotificationProvider.showCustomPopup({
+         body: () => (0, hM.jsx)(EM, {
+           ...MM
+         }),
+         middleScreenPopupClassName: "ApprovalInfoPopup",
+         onClose: () => {},
+         unlockPointerKey: "approvalInfoPopup"
+       })
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L220-L221` → after: `L1379-L1469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1379-L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L1379-L1469) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L220-L221)

```diff
-     function iQ(QQ, WQ) {
-       GQ(QQ, WQ) ? TQ.i.setItem(zQ.c, !0) : TQ.i.removeItem(zQ.c)
+     function EM(MM) {
+       let {
+         schematicId: rM,
+         canOverride: iM,
+         onApprovalChanged: LM
+       } = MM;
+       const {
+         t: mM
+       } = (0, dM.A)(), {
+         userContext: HM
+       } = (0, PM.b)(), yM = (0, aM.b)(), [lM, EM] = (0, OM.useState)(null), [UM, GM] = (0, OM.useState)(null), [CM, eM] = (0, OM.useState)(!1), bM = (0, OM.useCallback)((() => {
+         GM(null), jM.c.getGameApprovalInfo(HM, rM).then((MM => {
+           yM.current && EM(MM)
+         })).catch((MM => {
+           console.error("Failed to get game approval info", MM), yM.current && GM(mM("studio:approvalLoadFailed"))
+         }))
+ ... (75 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L224` → after: `L1472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L1472) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L224)

```diff
-   7018: (QQ, WQ, XQ) => {
+   6975: (MM, rM, iM) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L227` → after: `L1475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L1475) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L227)

```diff
-       g: () => sQ
+       f: () => aM
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L229-L244` → after: `L1477-L1545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1477-L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L1477-L1545) · [Before (L229-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L229-L244)

```diff
-     var wQ = XQ(7024),
-       qQ = XQ(7002),
-       TQ = XQ(134);
-     const zQ = 100;
-     async function sQ(QQ, WQ) {
-       var XQ;
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (XQ = navigator.gpu) && void 0 !== XQ ? XQ : null;
-       const zQ = QQ.JQQ(WQ, (0, qQ.shaderPackTextures)());
-       if (zQ.errors.length > 0) return PQ(QQ, zQ.errors, zQ.offInStrict);
-       const sQ = await async function(QQ) {
-         if (!QQ) return null;
-         try {
-           const WQ = await (0, TQ.q)(QQ);
-           return WQ ? await WQ.requestDevice() : null
-         } catch (WQ) {
-           return console.error("Couldn't get a WebGPU device to validate the shader pack.", WQ), null
+     var OM = iM(332),
+       SM = iM(1188);
+     const jM = {
+       manuallyApproved: "studio:approvalStatusManuallyApproved",
+       manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
+       manuallyDenied: "studio:approvalStatusManuallyDenied",
+       autoApproved: "studio:approvalStatusAutoApproved",
+       notApproved: "studio:approvalStatusNotApproved",
+       notIndexed: "studio:approvalStatusNotIndexed"
+     };
+ 
+     function aM() {
+       const {
+         t: MM,
+         selectedLanguage: rM
+       } = (0, SM.A)();
+ ... (53 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L295-L302` → after: `L1550-L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1550-L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L1550-L1551) · [Before (L295-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L295-L302)

```diff
-     function PQ(QQ, WQ, XQ) {
-       return {
-         headerVersion: (0, wQ.pageShaderPackValidationVersion)(QQ),
-         ok: 0 === WQ.length,
-         errors: WQ.slice(0, zQ),
-         moreErrors: Math.max(0, WQ.length - zQ),
-         offInStrict: XQ
-       }
+     function PM(MM) {
+       return null === MM.manualOverride && MM.rows.some((MM => "reportHold" === MM.kind && !MM.passed))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L305` → after: `L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L1554) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L305)

```diff
-   6952: (QQ, WQ, XQ) => {
+   35064: (MM, rM, iM) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L307-L324` → after: `L1556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L1556) · [Before (L307-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L307-L324)

```diff
-       A: () => wQ,
-       E: () => rQ,
-       G: () => gQ,
-       J: () => GQ,
-       K: () => JQ,
-       M: () => PQ,
-       c: () => jQ,
-       f: () => yQ,
-       i: () => BQ,
-       j: () => IQ,
-       l: () => pQ,
-       m: () => bQ,
-       o: () => FQ,
-       p: () => qQ,
-       r: () => UQ,
-       u: () => TQ,
- ... (2 more removed lines; see GitHub link above)
+       d: () => jM
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L326-L359` → after: `L1558-L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1558-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L1558-L1559) · [Before (L326-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L326-L359)

```diff
-     const wQ = ["forest", "desert", "water", "night", "cave"];
-     const qQ = {
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
-       TQ = ["popular", "updated", "newest"],
- ... (18 more removed lines; see GitHub link above)
+     var OM = iM(44),
+       SM = iM(3839);
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L361-L362` → after: `L1561-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1561-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L1561-L1570) · [Before (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L361-L362)

```diff
-     function yQ(QQ) {
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(QQ)}`
+     function jM() {
+       const [MM, rM] = (0, OM.useState)(!1);
+       return (0, OM.useLayoutEffect)((() => {
+         let MM = !0;
+         return (0, SM.e)().then((() => {
+           MM && rM(!0)
+         })), () => {
+           MM = !1
+         }
+       }), []), MM
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L364-L365` → after: `L1572-L1579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1572-L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L1572-L1579) · [Before (L364-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L364-L365)

```diff
-     const VQ = "Screenshot generation failed.",
-       DQ = "Its screenshots couldn't be generated:";
+   },
+   9525: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => aM
+     });
+     var OM = iM(1382),
+       SM = iM(1229),
+       jM = iM(625);
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L368-L373` → after: `L1582-L1603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1582-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L1582-L1603) · [Before (L368-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L368-L373)

```diff
-       var WQ;
-       return QQ === VQ || null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.startsWith(DQ)) && void 0 !== WQ && WQ
-     }
- 
-     function GQ(QQ, WQ) {
-       return `shaderPacks/${QQ}/${WQ}.json`
+       return MM = function(MM, rM) {
+         var iM;
+         const OM = new URLSearchParams(rM),
+           SM = OM.get("lobby"),
+           jM = OM.get("vm"),
+           aM = null !== (iM = SM) && void 0 !== iM ? iM : MM.lobbyName,
+           PM = null !== jM && void 0 !== jM ? jM : MM.directJoinVmUrl;
+         if (aM === MM.lobbyName && PM === MM.directJoinVmUrl) return MM;
+         return {
+           ...MM,
+           lobbyName: aM,
+           directJoinVmUrl: PM
+         }
+       }(MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), MM = function(MM) {
+         if ((0, jM.J)(MM.directJoinVmUrl)) return MM;
+         const rM = (0, SM.bb)(MM.directJoinVmUrl);
+ ... (6 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L376-L377` → after: `L1613-L1614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1613-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L1613-L1614) · [Before (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L376-L377)

```diff
-     function UQ(QQ, WQ, XQ, wQ) {
-       return null === WQ.renderId ? bQ(QQ, WQ.baselineVersion, XQ, wQ) : `${QQ}/${function(QQ,WQ,XQ,wQ){return`shaderPacks/${QQ}/${WQ}/${XQ}-${wQ}.webp`}(WQ.packId,WQ.renderId,XQ,wQ)}`
+     function SM() {
+       OM = !0
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L380-L381` → after: `L1617-L1618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1617-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/135.js#L1617-L1618) · [Before (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/135.js#L380-L381)

```diff
-     function bQ(QQ, WQ, XQ, wQ) {
-       return `${QQ}/${function(QQ,WQ,XQ){return`shaderPacks/baseline/${QQ}/${WQ}-${XQ}.webp`}(WQ,XQ,wQ)}`
+     function jM() {
+       return OM
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/136.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/136.js` (45 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00)

#### 1. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L2)

```diff
- export const ids = [136, 201];
+ export const ids = [136];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L4)

```diff
-   34507: (QQ, WQ, XQ) => {
+   9349: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L6)

```diff
-       b: () => TQ
+       c: () => aM,
+       d: () => jM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L8-L52` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L9-L12) · [Before (L8-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L8-L52)

```diff
-     var wQ = XQ(402),
-       qQ = XQ(34516);
- 
-     function TQ(QQ, WQ, XQ) {
-       const TQ = Object.entries(WQ).sort(((QQ, WQ) => WQ[1] - QQ[1])),
-         zQ = (0, wQ.nb)(QQ);
-       zQ.push(QQ ? "\n\n" : "\n");
-       for (const [qQ, jQ] of TQ) {
-         var sQ, FQ, PQ;
-         const QQ = null !== (sQ = null === XQ || void 0 === XQ || null === (FQ = XQ[qQ]) || void 0 === FQ ? void 0 : FQ.icon) && void 0 !== sQ ? sQ : `${qQ} Enchantment`;
-         zQ.push({
-           icon: QQ,
-           style: {
-             fontSize: "1.5rem"
-           }
-         }), zQ.push({
- ... (29 more removed lines; see GitHub link above)
+     var OM = iM(2099);
+     const SM = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
+       jM = MM => "string" === typeof MM.icon && "" !== MM.icon && "string" === typeof MM.keycode && SM.test(MM.keycode),
+       aM = MM => "Space" === MM ? "_" : OM.k[MM]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L54` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L14) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L54)

```diff
-   34523: (QQ, WQ, XQ) => {
+   34822: (MM, rM, iM) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L56-L64` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L16-L17) · [Before (L56-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L56-L64)

```diff
-       c: () => PQ,
-       g: () => DQ,
-       i: () => yQ,
-       m: () => FQ,
-       p: () => VQ,
-       q: () => gQ,
-       t: () => rQ,
-       v: () => BQ,
-       y: () => JQ
+       b: () => SM,
+       d: () => jM
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L66-L99` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L19) · [Before (L66-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L66-L99)

```diff
-     var wQ = XQ(382),
-       qQ = XQ(663),
-       TQ = XQ(402),
-       zQ = XQ(4526),
-       sQ = XQ(34507);
- 
-     function FQ(QQ, WQ) {
-       var XQ;
-       let {
-         player: wQ,
-         chestOrCreative: qQ
-       } = QQ;
-       var TQ;
-       return WQ < wQ.length ? null !== (TQ = wQ[WQ]) && void 0 !== TQ ? TQ : null : null !== (XQ = qQ[WQ - wQ.length]) && void 0 !== XQ ? XQ : null
-     }
- 
- ... (18 more removed lines; see GitHub link above)
+     let OM = !1;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L101-L339` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L21-L22) · [Before (L101-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L101-L339)

```diff
-     function BQ(QQ, WQ) {
-       var XQ;
-       const wQ = null === (XQ = QQ[WQ]) || void 0 === XQ ? void 0 : XQ.displayName;
-       return (0, qQ.G)(wQ) ? "string" !== typeof WQ ? "" : (!IQ.has(WQ) && IQ.size < jQ && (IQ.add(WQ), console.warn(`No item called "${WQ}", so its hover shows the name as given`)), WQ) : wQ
-     }
- 
-     function yQ(QQ, WQ, XQ) {
-       var FQ, PQ, gQ, JQ, rQ, IQ, jQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ;
-       const vQ = QQ.attributes,
-         dQ = null !== (FQ = null === (PQ = WQ[QQ.name]) || void 0 === PQ ? void 0 : PQ.rootName) && void 0 !== FQ ? FQ : QQ.name,
-         HQ = null !== (gQ = null !== (JQ = vQ.customDisplayName) && void 0 !== JQ ? JQ : null === (rQ = WQ[QQ.name]) || void 0 === rQ ? void 0 : rQ.displayName) && void 0 !== gQ ? gQ : BQ(WQ, dQ);
-       let aQ = HQ;
-       const lQ = null === (IQ = vQ.customAttributes) || void 0 === IQ ? void 0 : IQ.enchantmentTier;
-       lQ && (aQ = (0, TQ.nb)(HQ, {
-         colour: TQ.kb[lQ]
-       }));
- ... (223 more removed lines; see GitHub link above)
+     function SM() {
+       return OM
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L343-L352` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L26) · [Before (L343-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L343-L352)

```diff
-       let WQ;
-       if ("number" === typeof QQ) {
-         const XQ = document.querySelector(`[data-inven-idx="${QQ}"]`);
-         if (!XQ) return null;
-         WQ = XQ.getBoundingClientRect()
-       } else WQ = QQ.getBoundingClientRect();
-       return {
-         x: WQ.left + WQ.width / 2,
-         y: WQ.top + WQ.height / 2
-       }
+       return OM !== MM && (OM = MM, !0)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L355` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L29) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L355)

```diff
-   9268: (QQ, WQ, XQ) => {
+   34833: (MM, rM, iM) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L357-L358` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L31) · [Before (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L357-L358)

```diff
-       b: () => VQ,
-       c: () => GQ
+       e: () => OM
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L360-L387` → after: `L33-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L33-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L33-L65) · [Before (L360-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L360-L387)

```diff
-     var wQ = XQ(61),
-       qQ = XQ(31),
-       TQ = XQ(2585),
-       zQ = XQ(3678);
-     const sQ = 6,
-       FQ = 4;
- 
-     function PQ(QQ) {
-       let {
-         slotsLeft: WQ,
-         slotsRight: XQ,
-         width: wQ,
-         height: qQ,
-         zoneRight: TQ,
-         rowTop: zQ,
-         besideBottom: PQ,
- ... (12 more removed lines; see GitHub link above)
+     class OM {
+       constructor(MM) {
+         this.events = MM, this.recent = [], this.episode = null, this.sampleSum = 0, this.sampleCount = 0, this.minWindowAvg = null
+       }
+       addSample(MM, rM) {
+         if (null === MM) return this.recent.length = 0, void this.endEpisode(rM);
+         if (this.sampleSum += MM, this.sampleCount++, this.recent.push(MM), this.recent.length > 5 && this.recent.shift(), null !== this.episode && (this.episode.minFps = Math.min(this.episode.minFps, MM), this.episode.sum += MM, this.episode.count++), this.recent.length < 5) ret … [truncated]
+         const iM = function(MM) {
+           let rM = 0;
+           for (const iM of MM) rM += iM;
+           return rM / MM.length
+         }(this.recent);
+         this.minWindowAvg = null === this.minWindowAvg ? iM : Math.min(this.minWindowAvg, iM), null === this.episode && iM < 20 ? (this.episode = {
+           startedAtMs: rM - 5e3,
+           minFps: Math.min(...this.recent),
+           sum: 5 * iM,
+ ... (17 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L389-L391` → after: `L67-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L67-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L67-L71) · [Before (L389-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L389-L391)

```diff
-       return {
-         shift: rQ,
-         rise: yQ === PQ ? null : Math.ceil(zQ - yQ)
+       getTags() {
+         return null === this.minWindowAvg ? null : {
+           fps_min_bucket: SM(this.minWindowAvg),
+           fps_avg_bucket: SM(this.sampleSum / this.sampleCount)
+         }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L396-L426` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L76) · [Before (L396-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L396-L426)

```diff
-       return Array.from(QQ.children).filter((QQ => !QQ.classList.contains("HotBarRow")))
-     }
- 
-     function JQ(QQ) {
-       return function(QQ) {
-         const WQ = [],
-           XQ = (QQ, wQ) => {
-             const qQ = QQ.getBoundingClientRect();
-             if (qQ.width > 0 && qQ.height > 0) WQ.push(QQ);
-             else if (wQ < 2)
-               for (const WQ of Array.from(QQ.children)) XQ(WQ, wQ + 1)
-           };
-         for (const wQ of QQ) XQ(wQ, 0);
-         return WQ
-       }(gQ(QQ).flatMap((QQ => QQ.classList.contains("AuraBarWrapper") ? [] : QQ.classList.contains("BottomScreenStatBarList") ? Array.from(QQ.children) : [QQ])))
-     }
- ... (15 more removed lines; see GitHub link above)
+       return MM < 15 ? "<15" : MM < 30 ? "15-30" : MM < 50 ? "30-50" : "50+"
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L430-L519` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L80) · [Before (L430-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L430-L519)

```diff
-       var WQ, XQ, wQ, qQ, TQ, zQ;
-       const sQ = QQ.documentElement.classList;
-       if (!sQ.contains("TouchHotbar") || sQ.contains("TouchHotbarKeysAbove") || sQ.contains("HudMove-inventory") || sQ.contains("HudLocked-inventory") || null === (WQ = QQ.defaultView) || void 0 === WQ || null === (XQ = WQ.matchMedia) || void 0 === XQ || !XQ.call(WQ, pQ).matches) … [truncated]
-       const gQ = QQ.querySelector(".HotBarContainer.Touch .TouchInventoryKey.ShopKey"),
-         IQ = null === gQ || void 0 === gQ ? void 0 : gQ.parentElement,
-         VQ = null === gQ || void 0 === gQ ? void 0 : gQ.closest(".BottomMiddleElements"),
-         DQ = null === VQ || void 0 === VQ ? void 0 : VQ.querySelector(".HotBarContainer.Touch .HotBarGameItemsContainer");
-       if (!gQ || !IQ || !VQ || !DQ || VQ.classList.contains("TouchInventoryOpen")) return !1;
-       const GQ = gQ.getBoundingClientRect();
-       if (0 === GQ.width) return !1;
-       const UQ = QQ.querySelector(".JoystickZone"),
-         bQ = DQ.getBoundingClientRect(),
-         vQ = IQ.getBoundingClientRect().top,
-         dQ = null === (wQ = VQ.querySelector(":scope > .AuraBarWrapper")) || void 0 === wQ ? void 0 : wQ.getBoundingClientRect(),
-         HQ = JQ(VQ),
-         aQ = {
- ... (74 more removed lines; see GitHub link above)
+       return Math.round(10 * MM) / 10
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L522` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L83) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L522)

```diff
-   34408: (QQ, WQ, XQ) => {
+   34841: (MM, rM, iM) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L528-L628` → after: `L88-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L88-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L88-L91) · [Before (L528-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L528-L628)

```diff
-     var wQ = XQ(1507),
-       qQ = XQ(61),
-       TQ = XQ(1360),
-       zQ = XQ(4851),
-       sQ = XQ(2444),
-       FQ = XQ(1226),
-       PQ = XQ(105),
-       gQ = XQ(2052),
-       JQ = XQ(1391),
-       rQ = XQ(1145);
- 
-     function IQ(QQ) {
-       let {
-         show: WQ,
-         onClose: XQ
-       } = QQ;
- ... (85 more removed lines; see GitHub link above)
+     var OM = iM(1073),
+       SM = iM(1573),
+       jM = iM(1144);
+     const aM = 5e3;
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L631-L635` → after: `L94-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L94-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L94-L103) · [Before (L631-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L631-L635)

```diff
-       const WQ = Math.floor(QQ / 3600),
-         XQ = Math.floor(QQ % 3600 / 60),
-         wQ = Math.floor(QQ % 60),
-         qQ = `${XQ.toString().padStart(2,"0")}:${wQ.toString().padStart(2,"0")}`;
-       return WQ > 0 ? `${WQ}:${qQ}` : qQ
+       let rM;
+       const iM = jM.userContextManager.getCurrentUserContext().then((rM => SM.c.getGame(rM, MM))).then((MM => MM.name)).catch((rM => (console.warn(`Session replay: couldn't fetch the title of custom game ${MM}.`, rM), null))),
+         OM = new Promise((MM => {
+           rM = setTimeout((() => {
+             MM(null)
+           }), aM)
+         }));
+       return Promise.race([iM, OM]).finally((() => {
+         clearTimeout(rM)
+       }))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L687-L690` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L108) · [Before (L687-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L687-L690)

```diff
-       const [TQ, zQ] = (0, wQ.useState)(null !== (XQ = qQ.i.getItem(QQ)) && void 0 !== XQ ? XQ : WQ);
-       return [TQ, WQ => {
-         qQ.i.setItem(QQ, WQ), zQ(WQ)
-       }]
+       return !0 !== MM.is_custom_game ? String(MM.game_name) : `custom: ${String(null!==(rM=MM.game_display_name)&&void 0!==rM?rM:MM.game_analytics_id)}`
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L692-L787` → after: `L110-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L110-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L110-L112) · [Before (L692-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L692-L787)

```diff
-   },
-   9257: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => qQ,
-       c: () => sQ,
-       f: () => wQ,
-       h: () => BQ,
-       j: () => IQ,
-       k: () => gQ,
-       l: () => zQ,
-       m: () => yQ,
-       p: () => JQ,
-       r: () => FQ,
-       s: () => rQ,
-       t: () => PQ,
-       u: () => jQ,
- ... (80 more removed lines; see GitHub link above)
+     class QM {
+       constructor(MM) {
+         this.replay = MM, this.pending = null
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L789-L797` → after: `L114-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L114-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L114-L129) · [Before (L789-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L789-L797)

```diff
-     }
- 
-     function JQ(QQ, WQ, XQ, wQ, qQ) {
-       const TQ = QQ.dx * wQ + WQ,
-         zQ = QQ.dy * qQ + XQ,
-         sQ = QQ => Math.max(-1, Math.min(1, QQ));
-       return {
-         dx: sQ(TQ / wQ),
-         dy: sQ(zQ / qQ)
+       send(MM, rM, iM) {
+         if (this.flush(), !(0, OM.m)(MM)) return this.replay.capture("game_joined", rM), void this.replay.capture("$screen", {
+           $screen_name: nM(rM)
+         });
+         const SM = {
+           properties: rM,
+           joinedAtMs: iM
+         };
+         this.pending = SM, PM((0, OM.p)(MM)).then((MM => {
+           this.pending === SM && (null !== MM && (SM.properties = {
+             ...rM,
+             game_display_name: MM
+           }, this.replay.addGameContext({
+             game_display_name: MM
+           })), this.flush())
+         }))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L799-L813` → after: `L131-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L131-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L131-L142) · [Before (L799-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L799-L813)

```diff
-     }
- 
-     function rQ(QQ, WQ, XQ, wQ) {
-       return WQ <= 0 || XQ <= 0 ? 1 : Math.max(.05, Math.min(1, QQ / WQ, wQ / XQ))
-     }
- 
-     function IQ(QQ, WQ, XQ) {
-       return Math.min(QQ.right, WQ.right) - Math.max(QQ.left, WQ.left) > XQ && Math.min(QQ.bottom, WQ.bottom) - Math.max(QQ.top, WQ.top) > XQ
-     }
- 
-     function jQ(QQ, WQ) {
-       const XQ = (QQ, WQ, XQ, wQ) => WQ - QQ > wQ - XQ ? XQ - QQ > WQ - wQ ? wQ - WQ : XQ - QQ : QQ < XQ ? XQ - QQ : WQ > wQ ? wQ - WQ : 0;
-       return {
-         x: XQ(QQ.left, QQ.right, WQ.left, WQ.right),
-         y: XQ(QQ.top, QQ.bottom, WQ.top, WQ.bottom)
+       flush() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (null === this.pending) return;
+         const {
+           properties: rM,
+           joinedAtMs: iM
+         } = this.pending;
+         this.pending = null;
+         const OM = {
+           $screen_name: nM(rM)
+         };
+         MM ? (this.replay.captureOnExit("game_joined", rM, iM), this.replay.captureOnExit("$screen", OM, iM)) : (this.replay.captureAt("game_joined", rM, iM), this.replay.captureAt("$screen", OM, iM))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L839` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L146) · [Before (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L839)

```diff
-   9262: (QQ, WQ, XQ) => {
+   34820: (MM, rM, iM) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L841-L848` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L148) · [Before (L841-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L841-L848)

```diff
-       d: () => sQ,
-       f: () => TQ,
-       j: () => qQ,
-       m: () => zQ,
-       o: () => JQ,
-       r: () => gQ,
-       s: () => PQ,
-       u: () => FQ
+       e: () => tM
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L850-L851` → after: `L150-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L150-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L150-L170) · [Before (L850-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L850-L851)

```diff
-     var wQ = XQ(2563);
-     const qQ = ["J", "C", "A", "P", "U", "X", "G"],
+     var OM = iM(19),
+       SM = iM(2067),
+       jM = iM(34822),
+       aM = iM(22),
+       PM = iM(1717),
+       nM = iM(34831),
+       QM = iM(9349),
+       zM = iM(1830),
+       LM = iM(2093),
+       mM = iM(30),
+       HM = iM(34785),
+       hM = iM(2096),
+       JM = iM(7006);
+     const dM = [...Object.values(hM.h).flat(), "ShiftLeft", "ShiftRight", "Enter", "KeyT", "Slash", "Escape", "Tab", "MetaLeft", "MetaRight", "ContextMenu", "PrintScreen", "ScrollLock", "Pause", "NumLock", "F1", "F5", "F6", "F7", "F11", "F12", "Mouse4", "Mouse5"],
+       yM = [
+         [1, "Mouse1"],
+ ... (5 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L853-L859` → after: `L172-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L172-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L172-L181) · [Before (L853-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L853-L859)

```diff
-         J: "jump",
-         C: "crouch",
-         A: "attack",
-         P: "attack",
-         U: "use",
-         X: "extra",
-         G: "game"
+         forward: "forward",
+         backward: "backward",
+         left: "left",
+         right: "right",
+         jump: "jump",
+         sprint: "sprint",
+         crouch: "crouch",
+         "primary-fire": "primary",
+         "alt-fire": "secondary",
+         "mid-fire": "middle"
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L861-L890` → after: `L183-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L183-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L183-L252) · [Before (L861-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L861-L890)

```diff
- 
-     function zQ(QQ) {
-       return QQ ? ["X"] : ["P", "X"]
-     }
-     const sQ = Object.freeze({
-       faces: null,
-       names: Object.freeze({}),
-       shop: !0,
-       bag: !0,
-       sprint: !0,
-       items: null,
-       rowIcons: wQ.E,
-       pinnedIcons: Object.freeze({
-         rightOfCamera: null,
-         leftEnd: null
-       })
- ... (14 more removed lines; see GitHub link above)
+     class EM {
+       constructor(MM) {
+         this.source = MM, this.keyListeners = [], this.actionsListeners = [], this.pointerLockListeners = [], this.sQ = new Uint8Array(JM.e.length), this.heldCount = 0, this.actionBits = 0, this.typing = !1, this.pointerLocked = !1, this.mouseButtons = 0, this.keyTable = null, MM … [truncated]
+           this.keyTable = null
+         }))
+       }
+       onKey(MM) {
+         return GM(this.keyListeners, MM)
+       }
+       onUnboundKey(MM) {
+         return this.onKey(((rM, iM, OM, SM, jM) => {
+           iM && SM && !OM && MM(rM, jM)
+         }))
+       }
+       onActions(MM) {
+         return GM(this.actionsListeners, MM)
+ ... (54 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L893-L906` → after: `L255-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L255-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L255-L300) · [Before (L893-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L893-L906)

```diff
-       const gQ = WQ => {
-           const XQ = QQ.querySelector(`.InGameUi ${WQ}`);
-           return null !== XQ && !XQ.classList.contains("Hidden")
-         },
-         JQ = [...QQ.querySelectorAll(".InGameUi .HotBarContainer.Touch .HotBarGameItemsContainer .InvenItem")].map((QQ => QQ.cloneNode(!0)));
-       return {
-         faces: Object.keys(TQ).length > 0 ? TQ : null,
-         names: zQ,
-         shop: gQ(".TouchInventoryKey.ShopKey"),
-         bag: gQ(".TouchInventoryKey.BagKey"),
-         sprint: gQ(".TouchSprintHit"),
-         items: JQ.length > 0 ? JQ : null,
-         rowIcons: WQ,
-         pinnedIcons: XQ
+       releaseAll() {
+         let MM = !1;
+         for (let rM = 0; this.heldCount > 0 && rM < this.sQ.length; rM++) MM = this.release(rM) || MM;
+         this.mouseButtons = 0, MM && this.updateActionBits()
+       }
+       release(MM) {
+         const rM = this.sQ[MM];
+         if (0 === rM) return !1;
+         this.sQ[MM] = 0, this.heldCount--;
+         const iM = 0 !== (rM - 1 & 2);
+         return this.emit(MM, !1, 0 !== (rM - 1 & 1), iM), iM
+       }
+       updateActionBits() {
+         let MM = 0;
+         if (this.heldCount > 0) {
+           const rM = this.getKeyTable().actionBits;
+ ... (30 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L908-L914` → after: `L302-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L302-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L302-L308) · [Before (L908-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L908-L914)

```diff
-     }
- 
-     function PQ(QQ, WQ) {
-       const XQ = {};
-       for (const wQ of [...zQ(WQ), "G"]) {
-         const WQ = QQ.names[wQ];
-         WQ && (XQ[TQ[wQ]] = WQ)
+       setTyping(MM) {
+         MM && !this.typing && (this.typing = !0, this.releaseAll()), this.typing = MM
+       }
+       emit(MM, rM, iM, OM) {
+         const SM = JM.e[MM],
+           jM = this.source.now();
+         for (const aM of this.keyListeners) aM(SM, rM, iM, OM, jM)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L919-L925` → after: `L312-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L312-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L312-L314) · [Before (L919-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L919-L925)

```diff
-     function gQ(QQ, WQ) {
-       const {
-         faces: XQ
-       } = QQ;
-       if (null === XQ) return [];
-       const wQ = new Set(Object.keys(XQ).map((QQ => TQ[QQ])));
-       return zQ(WQ).filter((QQ => !wQ.has(TQ[QQ])))
+     function UM(MM) {
+       var rM;
+       return null !== (rM = MM.composedPath()[0]) && void 0 !== rM ? rM : MM.target
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L929-L978` → after: `L318-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L318-L319) · [Before (L929-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L929-L978)

```diff
-       QQ.replaceChildren(...[...WQ.childNodes].map((QQ => QQ.cloneNode(!0))))
-     }
-   },
-   34415: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => qQ,
-       d: () => wQ
-     });
-     const wQ = "image/jpeg",
-       qQ = "jpg"
-   },
-   34417: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => FQ,
-       h: () => PQ,
-       l: () => gQ
- ... (34 more removed lines; see GitHub link above)
+       return MM.push(rM), () => {
+         const iM = MM.indexOf(rM); - 1 !== iM && MM.splice(iM, 1)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L981-L993` → after: `L322-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L322-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L322-L324) · [Before (L981-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L981-L993)

```diff
-   },
-   34413: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => PQ,
-       f: () => gQ,
-       j: () => JQ
-     });
-     var wQ = XQ(26),
-       qQ = XQ(34393),
-       TQ = XQ(1698),
-       zQ = XQ(34415);
-     const sQ = 8294400,
-       FQ = .92;
+     const CM = "replayInput",
+       eM = new Set([...LM.A, ...LM.k].filter((MM => "replayViewerOpen" !== MM && "toggleFreeCam" !== MM)));
+     let bM = null;
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L996-L998` → after: `L327-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L327-L328) · [Before (L996-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L996-L998)

```diff
-       (0, TQ.e)(), wQ.b.set({
-         screenshotMode: !0
-       })
+       var MM;
+       return (null !== (MM = SM.d.get("customButtons")) && void 0 !== MM ? MM : []).filter(QM.d).map((MM => MM.keycode))
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L1002-L1095` → after: `L332-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L332-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L332-L342) · [Before (L1002-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L1002-L1095)

```diff
-       wQ.b.set({
-         screenshotMode: !1
-       })
-     }
-     async function JQ() {
-       const {
-         width: QQ,
-         height: WQ,
-         scale: XQ
-       } = function(QQ, WQ, XQ) {
-         const wQ = Math.max(1, QQ),
-           qQ = Math.max(1, WQ),
-           TQ = Math.min(Math.max(1, XQ), Math.sqrt(sQ / (wQ * qQ)));
-         return {
-           width: Math.round(wQ * TQ),
-           height: Math.round(qQ * TQ),
- ... (78 more removed lines; see GitHub link above)
+       return null === bM && "0" !== String(mM.g.getItem(CM)) && (bM = new EM({
+         isInPlay: () => "inGame" === OM.d.get("gameState") && !(0, PM.r)() && !(0, jM.b)(),
+         isTyping: zM.isTextEntry,
+         getBindings: () => ({
+           ...LM.v,
+           customButtons: wM(),
+           pageKeys: (0, nM.e)()
+         }),
+         ignoredActions: eM,
+         onBindingsChanged: MM => {
+           aM.i.subscribe("customBindingsChanged", MM), SM.d.subscribe("customButtons", MM), SM.d.subscribeReset(MM), (0, nM.f)(MM)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L1097-L1103` → after: `L344-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L344-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L344-L346) · [Before (L1097-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L1097-L1103)

```diff
-         capturePhoto: async () => {
-           throw new Error("No game is drawing yet")
-         }
-       };
-     wQ.x && FQ.setHost(PQ), (0, qQ.t)((() => {
-       FQ.setHost(PQ)
-     }))
+         now: HM.e
+       }), bM.listen(window, document)), bM
+     }
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L1105` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L348) · [Before (L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L1105)

```diff
-   34548: (QQ, WQ, XQ) => {
+   34831: (MM, rM, iM) => {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L1111` → after: `L354-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L354-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L354-L359) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L1111)

```diff
-     var wQ = XQ(1626);
+     const OM = new Map,
+       SM = [];
+ 
+     function jM() {
+       for (const MM of SM) MM()
+     }
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L1115-L1117` → after: `L363-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L363-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L363-L365) · [Before (L1115-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L1115-L1117)

```diff
-       return {
-         ...zQ.store,
-         yaw: zQ.store.yaw + (null !== (WQ = wQ.c[QQ].previewYaw) && void 0 !== WQ ? WQ : 0)
+       return OM.set(MM, (null !== (rM = OM.get(MM)) && void 0 !== rM ? rM : 0) + 1), jM(), () => {
+         const rM = OM.get(MM) - 1;
+         0 === rM ? OM.delete(MM) : OM.set(MM, rM), jM()
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L1135-L1270` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L369-L370) · [Before (L1135-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L1135-L1270)

```diff
-     function sQ(QQ, WQ) {
-       QQ instanceof Promise ? QQ.then(WQ).catch((QQ => {
-         console.error("Couldn't open the preview", QQ)
-       })) : WQ(QQ)
-     }
-     class FQ {
-       constructor(QQ) {
-         this.opened = null, this.view = null, this.size = null, this.closed = !1, sQ(QQ, (QQ => {
-           this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height), null !== this.view && QQ.show(this.view))
-         }))
-       }
-       show(QQ) {
-         var WQ;
-         this.view = QQ, null === (WQ = this.opened) || void 0 === WQ || WQ.show(QQ)
-       }
-       resize(QQ, WQ) {
- ... (120 more removed lines; see GitHub link above)
+     function PM() {
+       return [...OM.keys()]
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L1272-L1284` → after: `L372-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L372-L374) · [Before (L1272-L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L1272-L1284)

```diff
-     wQ.f.setDefaultHost((() => new TQ))
-   },
-   7026: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => qQ,
-       f: () => TQ
-     });
-     var wQ = XQ(43);
-     const qQ = "shaderPack";
-     async function TQ() {
-       var QQ;
-       let WQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (QQ = await wQ.f.getItem(qQ, WQ)) && void 0 !== QQ ? QQ : null
+ 
+     function nM(MM) {
+       SM.push(MM)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L1287` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L377) · [Before (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L1287)

```diff
-   9246: (QQ, WQ, XQ) => {
+   7006: (MM, rM, iM) => {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L1289-L1290` → after: `L379-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L379-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L379-L381) · [Before (L1289-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L1289-L1290)

```diff
-       d: () => sQ,
-       e: () => FQ
+       e: () => OM,
+       f: () => jM,
+       h: () => PM
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L1292-L1365` → after: `L383-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L383-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L383-L390) · [Before (L1292-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L1292-L1365)

```diff
-     var wQ = XQ(26),
-       qQ = XQ(1376),
-       TQ = XQ(105);
-     const zQ = {
-       blockMined: {
-         pattern: [18],
-         priority: 1,
-         minGapMs: 120
-       },
-       hitLanded: {
-         pattern: [20],
-         priority: 2,
-         minGapMs: 80
-       },
-       damageTaken: {
-         pattern: [45],
- ... (58 more removed lines; see GitHub link above)
+     const OM = ["Unidentified", ...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((MM => `Key${MM}`)), ...Array.from({
+         length: 10
+       }, ((MM, rM) => `Digit${rM}`)), ...Array.from({
+         length: 12
+       }, ((MM, rM) => `F${rM+1}`)), "Escape", "Tab", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "Space", "Enter", "Backspace", "Delete", "Insert", "Home", "End", "PageUp", "PageDown", "ArrowUp", "ArrowDown … [truncated]
+         length: 10
+       }, ((MM, rM) => `Numpad${rM}`)), "NumpadAdd", "NumpadSubtract", "NumpadMultiply", "NumpadDivide", "NumpadDecimal", "NumpadEnter", "Mouse1", "Mouse2", "Mouse3", "Mouse4", "Mouse5"],
+       SM = new Map(OM.map(((MM, rM) => [MM, rM])));
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L1373-L1378` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L394) · [Before (L1373-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L1373-L1378)

```diff
-       if ("dropdown" === (null === (XQ = QQ.userInput) || void 0 === XQ ? void 0 : XQ.type) && "object" === typeof QQ.userInput.dropdownOptions[0]) {
-         for (const XQ of QQ.userInput.dropdownOptions)
-           if (qQ(XQ) === WQ) return "object" === typeof XQ ? XQ.cost : QQ.cost;
-         console.error("Didn't find matching option for dropdown item. Item:", QQ, "input:", WQ)
-       }
-       return QQ.cost
+       return null !== (rM = SM.get(MM)) && void 0 !== rM ? rM : 0
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L1381-L1384` → after: `L398-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L398-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/136.js#L398-L399) · [Before (L1381-L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/136.js#L1381-L1384)

```diff
-     function zQ(QQ, WQ, XQ) {
-       var wQ;
-       const qQ = null !== (wQ = XQ.excludedPlayers) && void 0 !== wQ ? wQ : [WQ];
-       return QQ.filter((QQ => !qQ.includes(QQ)))
+     function PM(MM) {
+       return 1 << aM.indexOf(MM)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/137.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/137.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L2)

```diff
- export const ids = [137, 140, 141];
+ export const ids = [137, 138];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L4)

```diff
-   6972: (QQ, WQ, XQ) => {
+   7031: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L6)

```diff
-       e: () => zQ
+       b: () => SM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L8-L16` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L8) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L8-L16)

```diff
-     var wQ = XQ(5386),
-       qQ = XQ(1145);
-     const TQ = {
-       strict: "shaderPack:variantStrict",
-       nonStrict: "shaderPack:variantNonStrict",
-       terrain: "shaderPack:variantTerrain",
-       liquid: "shaderPack:variantLiquid",
-       model: "shaderPack:variantModel"
-     };
+     var OM = iM(1303);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L20-L22` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L12-L13) · [Before (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L20-L22)

```diff
-         diagnostics: WQ,
-         more: XQ = 0,
-         t: zQ
+         href: rM,
+         children: iM
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L24-L47` → after: `L15-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L15-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L15-L22) · [Before (L24-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L24-L47)

```diff
-       return (0, qQ.jsxs)("ul", {
-         className: "ShaderPackDiagnostics",
-         children: [WQ.map(((QQ, WQ) => {
-           const XQ = (0, wQ.i)(QQ),
-             sQ = function(QQ, WQ) {
-               const XQ = (0, wQ.e)(null !== QQ && void 0 !== QQ ? QQ : []);
-               if (0 === XQ.length) return null;
-               return XQ.map((QQ => QQ.map((QQ => WQ(TQ[QQ]))).join(", "))).join("; ")
-             }(QQ.variants, zQ);
-           return (0, qQ.jsxs)("li", {
-             children: [XQ && (0, qQ.jsx)("span", {
-               className: "ShaderPackDiagnosticLocation",
-               children: XQ
-             }), QQ.message, sQ && (0, qQ.jsx)("span", {
-               className: "ShaderPackDiagnosticVariants",
-               children: zQ("shaderPack:onlyIn", {
- ... (8 more removed lines; see GitHub link above)
+       return (0, OM.jsxs)("a", {
+         className: "WorldCodeAiExternalLink",
+         href: rM,
+         target: "_blank",
+         rel: "noreferrer noopener",
+         children: [iM, " ", (0, OM.jsx)("span", {
+           "aria-hidden": "true",
+           children: "\u2197"
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L52` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L27) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L52)

```diff
-   6979: (QQ, WQ, XQ) => {
+   7023: (MM, rM, iM) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L54-L55` → after: `L29-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L29-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L29-L33) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L54-L55)

```diff
-       b: () => bQ,
-       d: () => vQ
+       WorldCodeAiChatGptNotice: () => zM,
+       WorldCodeAiDeepSeekNotice: () => QM,
+       e: () => aM,
+       g: () => nM,
+       j: () => PM
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L57-L172` → after: `L35-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L35-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L35-L40) · [Before (L57-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L57-L172)

```diff
-     var wQ = XQ(61),
-       qQ = XQ(1081),
-       TQ = XQ.n(qQ),
-       zQ = XQ(5310),
-       sQ = XQ(1391),
-       FQ = XQ(1094),
-       PQ = XQ(1226),
-       gQ = XQ(5396),
-       JQ = XQ(5394),
-       rQ = XQ(3435);
-     const IQ = 33554432,
-       jQ = 1024,
-       BQ = 65536;
-     async function yQ(QQ) {
-       const WQ = (0, rQ.m)(QQ);
-       if (WQ) {
- ... (100 more removed lines; see GitHub link above)
+     var OM = iM(1188),
+       SM = iM(7031),
+       jM = iM(1303);
+     const aM = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
+       PM = "https://openai.com/policies/terms-of-use/",
+       nM = "https://openai.com/policies/privacy-policy/";
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L174-L196` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L42) · [Before (L174-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L174-L196)

```diff
-     function DQ(QQ, WQ) {
-       try {
-         return new TextDecoder("utf-8", {
-           fatal: !0
-         }).decode(QQ)
-       } catch (XQ) {
-         throw new rQ.c("shaderPack:loadNotUtf8", {
-           path: WQ
-         }, {
-           cause: XQ
-         })
-       }
-     }
-     var pQ = XQ(5386),
-       GQ = XQ(5398),
-       UQ = XQ(1145);
- ... (7 more removed lines; see GitHub link above)
+     function QM() {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L199-L235` → after: `L45-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L45-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L45-L49) · [Before (L199-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L199-L235)

```diff
-       } = (0, PQ.C)(), {
-         getRootProps: gQ,
-         getInputProps: JQ,
-         isDragActive: rQ,
-         open: IQ
-       } = (0, zQ.c)({
-         onDrop: wQ,
-         noClick: !0,
-         noKeyboard: !0,
-         useFsAccessApi: !1,
-         disabled: XQ
-       });
-       return (0, UQ.jsxs)("div", {
-         ...gQ({
-           className: TQ()("ShaderPackDropZone", {
-             ActiveDrag: rQ,
- ... (21 more removed lines; see GitHub link above)
+       } = (0, OM.A)();
+       return (0, jM.jsxs)(jM.Fragment, {
+         children: [MM("superBotXd:deepSeekNotice"), " ", (0, jM.jsx)(SM.b, {
+           href: aM,
+           children: MM("superBotXd:deepSeekPrivacyPolicy")
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L240` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L54) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L240)

```diff
-     function vQ(QQ) {
+     function zM() {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L243-L395` → after: `L57-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L57-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L57-L66) · [Before (L243-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L243-L395)

```diff
-       } = (0, PQ.C)(), [XQ, qQ] = (0, wQ.useState)(!1), [TQ, zQ] = (0, wQ.useState)(null), sQ = (0, wQ.useRef)(!1);
-       return {
-         loading: XQ,
-         error: TQ,
-         setError: zQ,
-         onFiles: async function(XQ) {
-           if (!sQ.current) {
-             sQ.current = !0, qQ(!0), zQ(null);
-             try {
-               await QQ(await yQ(XQ))
-             } catch (wQ) {
-               wQ instanceof rQ.c ? zQ((0, pQ.l)(WQ, wQ.translationKey, wQ.params)) : (console.error("Failed to load the shader pack", wQ), zQ(WQ("shaderPack:unexpectedError")))
-             } finally {
-               sQ.current = !1, qQ(!1)
-             }
-           }
- ... (137 more removed lines; see GitHub link above)
+       } = (0, OM.A)();
+       return (0, jM.jsxs)(jM.Fragment, {
+         children: [MM("aiHelperChatGpt:notice"), " ", (0, jM.jsx)(SM.b, {
+           href: PM,
+           children: MM("aiHelperChatGpt:terms")
+         }), " ", (0, jM.jsx)(SM.b, {
+           href: nM,
+           children: MM("aiHelperChatGpt:privacyPolicy")
+         })]
+       })
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L398` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L69) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L398)

```diff
-   7002: (QQ, WQ, XQ) => {
+   7016: (MM, rM, iM) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L400-L401` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L71) · [Before (L400-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L400-L401)

```diff
-       loadShaderPackTextures: () => zQ,
-       shaderPackTextures: () => sQ
+       default: () => dM
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L403-L405` → after: `L73-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L73-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L73-L83) · [Before (L403-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L403-L405)

```diff
-     var wQ = XQ(5396);
-     let qQ = null,
-       TQ = null;
+     var OM = iM(1188),
+       SM = iM(119),
+       jM = iM(212),
+       aM = iM(1520),
+       PM = iM(1360),
+       nM = iM(19),
+       QM = iM(1771),
+       zM = iM(3807),
+       LM = iM(3526),
+       mM = iM(7023),
+       HM = iM(1303);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L408-L415` → after: `L86-L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L86-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L86-L1202) · [Before (L408-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L408-L415)

```diff
-       return TQ ??= Promise.all([XQ.e(75), XQ.e(192)]).then((() => XQ(40738))).then((QQ => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: WQ,
-           textureNameToIndex: XQ,
-           textureAnimationData: TQ
-         } = QQ;
-         return qQ ??= (0, wQ.l)(XQ, TQ, WQ), qQ
-       })), TQ
+       const {
+         t: MM
+       } = (0, OM.A)(), rM = !(0, jM.shouldUseUkPrivacyPolicy)();
+       return (0, HM.jsxs)("div", {
+         className: "LegalText",
+         children: [(0, HM.jsx)("div", {
+           className: "BloxdInformationHeader FullyFancyText",
+           children: MM("homePage:privacyPolicy")
+         }), (0, HM.jsx)("p", {
+           children: (0, HM.jsxs)("em", {
+             children: ["Last updated: ", zM.h.toLocaleDateString()]
+           })
+         }), (0, HM.jsx)("p", {
+           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
+         }), (0, HM.jsx)("h2", {
+           children: "1. Who We Are"
+ ... (1101 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L419-L445` → after: `L1206-L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1206-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L1206-L1208) · [Before (L419-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L419-L445)

```diff
-       if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
-       return qQ
-     }
-   },
-   7018: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => FQ,
-       g: () => sQ
-     });
-     var wQ = XQ(7024),
-       qQ = XQ(7002),
-       TQ = XQ(134);
-     const zQ = 100;
-     async function sQ(QQ, WQ) {
-       var XQ;
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (XQ = navigator.gpu) && void 0 !== XQ ? XQ : null;
- ... (11 more removed lines; see GitHub link above)
+       const {
+         adMobPrivacyOptionsRequired: MM
+       } = (0, nM.m)(["adMobPrivacyOptionsRequired"]);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L447-L491` → after: `L1210-L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1210-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L1210-L1222) · [Before (L447-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L447-L491)

```diff
-       let FQ = !1;
-       sQ.lost.then((() => {
-         FQ = !0
-       }));
-       try {
-         const WQ = await Promise.all(zQ.validationModules.map((WQ => async function(QQ, WQ, XQ) {
-           WQ.pushErrorScope("validation");
-           const wQ = WQ.createShaderModule({
-               code: XQ.code
-             }),
-             qQ = WQ.popErrorScope(),
-             {
-               messages: TQ
-             } = await wQ.getCompilationInfo(),
-             zQ = TQ.filter((QQ => "error" === QQ.type)).map((WQ => QQ.mapValidationMessage(XQ, WQ))),
-             sQ = await qQ;
- ... (29 more removed lines; see GitHub link above)
+       return (0, HM.jsx)(aM.e, {
+         className: "PrivacyChoicesButton",
+         onClick: () => {
+           (async () => {
+             try {
+               await QM.e.request("ads.showPrivacyOptions", {})
+             } catch (MM) {
+               console.error("Failed to open AdMob privacy options:", MM)
+             }
+           })()
+         },
+         children: "Manage Privacy Choices"
+       })
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L494-L501` → after: `L1225-L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L1225-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/137.js#L1225-L1238) · [Before (L494-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/137.js#L494-L501)

```diff
-     function PQ(QQ, WQ, XQ) {
-       return {
-         headerVersion: (0, wQ.pageShaderPackValidationVersion)(QQ),
-         ok: 0 === WQ.length,
-         errors: WQ.slice(0, zQ),
-         moreErrors: Math.max(0, WQ.length - zQ),
-         offInStrict: XQ
-       }
+     function dM() {
+       return (0, HM.jsxs)(HM.Fragment, {
+         children: [(0, SM.isDiscordClient)() && (0, HM.jsx)(HM.Fragment, {
+           children: (0, HM.jsx)(aM.e, {
+             className: "PrivacyChoicesButton",
+             onClick: () => {
+               (0, PM.q)()
+             },
+             children: "Adjust Discord Privacy Choices"
+           })
+         }), (0, HM.jsx)(JM, {}), (0, HM.jsx)(LM.b, {
+           className: "PrivacyPolicyLinks"
+         }), (0, HM.jsx)(hM, {})]
+       })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/138.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/138.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L4-L6` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/138.js#L4-L10) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/138.js#L4-L6)

```diff
-   6984: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       loadPageShaderPackCompiler: () => rW
+   7023: (MM, rM, iM) => {
+     iM.d(rM, {
+       WorldCodeAiChatGptNotice: () => zM,
+       WorldCodeAiDeepSeekNotice: () => QM,
+       e: () => aM,
+       g: () => nM,
+       j: () => PM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L8-L103` → after: `L12-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/138.js#L12-L17) · [Before (L8-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/138.js#L8-L103)

```diff
-     var wQ = {};
-     XQ.r(wQ), XQ.d(wQ, {
-       HqQ: () => qQ,
-       JQQ: () => TQ,
-       default: () => nQ,
-       aqQ: () => zQ,
-       lqQ: () => sQ,
-       initSync: () => eQ,
-       QJ: () => FQ,
-       gwQ: () => PQ,
-       hqQ: () => gQ,
-       iqQ: () => JQ,
-       XE: () => rQ,
-       cqQ: () => IQ,
-       WE: () => jQ,
-       RqQ: () => BQ
- ... (80 more removed lines; see GitHub link above)
+     var OM = iM(1188),
+       SM = iM(7031),
+       jM = iM(1303);
+     const aM = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
+       PM = "https://openai.com/policies/terms-of-use/",
+       nM = "https://openai.com/policies/privacy-policy/";
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L105-L122` → after: `L19-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L19-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/138.js#L19-L28) · [Before (L105-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/138.js#L105-L122)

```diff
-     function TQ(QQ, WQ, XQ, wQ, TQ, zQ, sQ) {
-       const FQ = AQ(QQ, SQ.Ah0U),
-         PQ = tQ,
-         gQ = AQ(WQ, SQ.Ah0U),
-         JQ = tQ,
-         rQ = AQ(XQ, SQ.Ah0U),
-         IQ = tQ,
-         jQ = cQ(wQ, SQ.Ah0U),
-         BQ = tQ,
-         yQ = AQ(TQ, SQ.Ah0U),
-         VQ = tQ,
-         DQ = AQ(zQ, SQ.Ah0U),
-         pQ = tQ,
-         GQ = AQ(sQ, SQ.Ah0U),
-         UQ = tQ,
-         bQ = SQ.f4EM(FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ);
- ... (2 more removed lines; see GitHub link above)
+     function QM() {
+       const {
+         t: MM
+       } = (0, OM.A)();
+       return (0, jM.jsxs)(jM.Fragment, {
+         children: [MM("superBotXd:deepSeekNotice"), " ", (0, jM.jsx)(SM.b, {
+           href: aM,
+           children: MM("superBotXd:deepSeekPrivacyPolicy")
+         })]
+       })
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L405-L752` → after: `L33-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L33-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/138.js#L33-L43) · [Before (L405-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/138.js#L405-L752)

```diff
-         instance: XQ,
-         module: wQ
-       } = await async function(QQ, WQ) {
-         if ("function" === typeof Response && QQ instanceof Response) {
-           if (!QQ.ok) throw new Error(`failed to fetch Wasm: ${QQ.status} ${QQ.statusText} fetching '${QQ.url}'`);
-           if ("function" === typeof WebAssembly.instantiateStreaming) try {
-             return await WebAssembly.instantiateStreaming(QQ, WQ)
-           } catch (XQ) {
-             if (! function(QQ) {
-                 switch (QQ) {
-                   case "basic":
-                   case "cors":
-                   case "default":
-                     return !0
-                 }
-                 return !1
- ... (332 more removed lines; see GitHub link above)
+         t: MM
+       } = (0, OM.A)();
+       return (0, jM.jsxs)(jM.Fragment, {
+         children: [MM("aiHelperChatGpt:notice"), " ", (0, jM.jsx)(SM.b, {
+           href: PM,
+           children: MM("aiHelperChatGpt:terms")
+         }), " ", (0, jM.jsx)(SM.b, {
+           href: nM,
+           children: MM("aiHelperChatGpt:privacyPolicy")
+         })]
+       })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/139.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/139.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226)

#### 1. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L4-L9` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/139.js#L4-L6) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/139.js#L4-L9)

```diff
-   36608: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => ZQ,
-       g: () => MQ,
-       h: () => KQ,
-       k: () => NQ
+   7033: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => jM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L11-L22` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/139.js#L8-L9) · [Before (L11-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/139.js#L11-L22)

```diff
-     var wQ = XQ(3107),
-       qQ = XQ(3122),
-       TQ = XQ(6987),
-       zQ = XQ(5002),
-       sQ = XQ(3117),
-       FQ = XQ(3110);
-     const PQ = "bloxd-wasmDownloaded",
-       gQ = 12;
- 
-     function JQ(QQ) {
-       return QQ.pathname.slice(QQ.pathname.lastIndexOf("/") + 1)
-     }
+     var OM = iM(1188),
+       SM = iM(1303);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L25-L132` → after: `L12-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L12-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/139.js#L12-L220) · [Before (L25-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/139.js#L25-L132)

```diff
-       try {
-         if ("undefined" === typeof localStorage) return null;
-         const QQ = JSON.parse(localStorage.getItem(PQ) ?? "[]");
-         return Array.isArray(QQ) ? QQ.filter((QQ => "string" === typeof QQ)) : []
-       } catch (QQ) {
-         return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", QQ), null
-       }
-     }
-     const IQ = Reflect.apply,
-       jQ = "undefined" === typeof Worker ? void 0 : Worker,
-       BQ = jQ?.prototype.postMessage,
-       yQ = jQ?.prototype.terminate,
-       VQ = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
-       DQ = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
-       pQ = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
-       GQ = function() {
- ... (92 more removed lines; see GitHub link above)
+       const {
+         t: MM
+       } = (0, OM.A)();
+       return (0, SM.jsxs)("div", {
+         className: "LegalText",
+         children: [(0, SM.jsx)("div", {
+           className: "BloxdInformationHeader FullyFancyText",
+           children: MM("homePage:termsOfService")
+         }), (0, SM.jsx)("p", {
+           children: (0, SM.jsx)("em", {
+             children: "Last updated: July 15, 2025"
+           })
+         }), (0, SM.jsx)("p", {
+           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
+         }), (0, SM.jsx)("h3", {
+           children: "1. General Information"
+ ... (193 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/140.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/140.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/140.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/140.js#L4)

```diff
-   7002: (QQ, WQ, XQ) => {
+   7042: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/140.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/140.js#L6-L7)

```diff
-       loadShaderPackTextures: () => zQ,
-       shaderPackTextures: () => sQ
+       default: () => JM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L9-L11` → after: `L8-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L8-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/140.js#L8-L52) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/140.js#L9-L11)

```diff
-     var wQ = XQ(5396);
-     let qQ = null,
-       TQ = null;
+     var OM = iM(1608),
+       SM = iM(1641),
+       jM = iM(3358),
+       aM = iM(2412),
+       PM = iM(1520),
+       nM = iM(1591),
+       QM = iM(1142),
+       zM = iM(44),
+       LM = iM(1398),
+       mM = iM(1303);
+ 
+     function HM(MM) {
+       let {
+         iconName: rM,
+         iconCountPerGroup: iM,
+         animation: OM,
+ ... (29 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L14-L26` → after: `L55-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L55-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/140.js#L55-L104) · [Before (L14-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/140.js#L14-L26)

```diff
-       return TQ ??= Promise.all([XQ.e(75), XQ.e(192)]).then((() => XQ(40738))).then((QQ => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: WQ,
-           textureNameToIndex: XQ,
-           textureAnimationData: TQ
-         } = QQ;
-         return qQ ??= (0, wQ.l)(XQ, TQ, WQ), qQ
-       })), TQ
-     }
- 
-     function sQ() {
-       if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
-       return qQ
+       var MM;
+       const {
+         t: rM
+       } = (0, hM.A)(), {
+         pack: iM
+       } = (0, OM.D)(), {
+         userContext: zM
+       } = (0, QM.b)();
+       if (iM) {
+         const MM = SM.d[iM];
+         if (null === MM || void 0 === MM || !MM.purchasable) return (0, mM.jsx)(nM.NavigatePreserveSearch, {
+           to: "/"
+         })
+       }
+       const JM = iM ? SM.d[iM] : null,
+         dM = iM ? jM.k[(0, aM.j)(iM)] : null,
+ ... (34 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/141.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/141.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417)

#### 1. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/141.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/141.js#L2)

```diff
- export const ids = [140, 141];
+ export const ids = [141];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/141.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/141.js#L4)

```diff
-   7024: (QQ, WQ, XQ) => {
+   7046: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L6-L19` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/141.js#L6) · [Before (L6-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/141.js#L6-L19)

```diff
-       forgetShaderPackActiveHint: () => hQ,
-       isOtherApiVersion: () => dQ,
-       isShaderPackActive: () => GQ,
-       isShaderPackChangePending: () => vQ,
-       markShaderPackChangePending: () => bQ,
-       pageShaderPackValidationVersion: () => HQ,
-       reconcileStoredShaderPackHint: () => lQ,
-       removeShaderPack: () => pQ,
-       replaceShaderPack: () => yQ,
-       saveShaderPack: () => BQ,
-       shaderPackNeedsCheck: () => aQ,
-       storedPackOutcome: () => UQ,
-       storedShaderPackFiles: () => rQ,
-       toStoredShaderPack: () => JQ
+       default: () => mM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L21-L67` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/141.js#L8-L16) · [Before (L21-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/141.js#L21-L67)

```diff
-     var wQ = XQ(5396),
-       qQ = XQ(5394),
-       TQ = XQ(43),
-       zQ = XQ(3716),
-       sQ = XQ(7026),
-       FQ = XQ(7002);
-     const PQ = "shaderPackChangePending";
-     let gQ = null;
- 
-     function JQ(QQ, WQ, XQ) {
-       return {
-         manifest: QQ.manifest,
-         files: (0, wQ.w)(QQ.files),
-         validation: WQ,
-         ...XQ && {
-           listing: XQ
- ... (31 more removed lines; see GitHub link above)
+     var OM = iM(1396),
+       SM = iM(44),
+       jM = iM(94),
+       aM = iM(1608),
+       PM = iM(1232),
+       nM = iM(313),
+       QM = iM(656);
+     const zM = new URL(PM.o[nM.d.PRODUCTION]).origin;
+     var LM = iM(1303);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L70-L161` → after: `L19-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L19-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/141.js#L19-L41) · [Before (L70-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/141.js#L70-L161)

```diff
-       return jQ(DQ)
-     }
- 
-     function GQ(QQ, WQ) {
-       return "active" === UQ(QQ, WQ).kind
-     }
- 
-     function UQ(QQ, WQ) {
-       var XQ;
-       return null === QQ ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : dQ(QQ) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.ok) || QQ.validation.fromRecheck ? null === WQ ? {
- ... (76 more removed lines; see GitHub link above)
+       const MM = (0, aM.D)();
+       return (0, SM.useEffect)((() => {
+         const rM = jM.currentUrl.getSearchParam("code");
+         jM.currentUrl.removeSearchParam("code"), null === rM && (console.error("No authorization code found in the URL"), window.close());
+         const iM = {
+           type: `oauth_authentication_${MM.providerName}`,
+           code: rM
+         };
+         for (const MM of (SM = window.location.origin) === zM ? [SM, `https://${QM.e}`] : [SM]) {
+           var OM;
+           null === (OM = window.opener) || void 0 === OM || OM.postMessage(iM, MM)
+         }
+         var SM;
+         setTimeout((() => {
+           window.close()
+         }), 1e3)
+ ... (7 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/142.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/142.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088)

#### 1. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L4-L2936` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/142.js#L4-L6) · [Before (L4-L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/142.js#L4-L2936)

```diff
-   34346: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => sQ,
-       e: () => zQ
-     });
-     var wQ = XQ(307),
-       qQ = XQ(150),
-       TQ = XQ(34354);
- 
-     function zQ() {
-       var QQ, WQ, XQ;
-       return null !== (QQ = (0, wQ.h)(null !== (WQ = null === (XQ = (0, qQ.n)()) || void 0 === XQ ? void 0 : XQ.renderer) && void 0 !== WQ ? WQ : null, (0, qQ.j)())) && void 0 !== QQ ? QQ : "unknown"
-     }
- 
-     function sQ(QQ, WQ, XQ, wQ, qQ) {
-       const zQ = null === WQ ? "untimed" : `${Math.round(WQ)} ms`;
- ... (2917 more removed lines; see GitHub link above)
+   7048: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => ZM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L2938-L3126` → after: `L8-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/142.js#L8-L32) · [Before (L2938-L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/142.js#L2938-L3126)

```diff
-     var wQ = XQ(5140),
-       qQ = XQ(40975),
-       TQ = XQ(34354);
-     const zQ = 1,
-       sQ = 18,
-       FQ = 19,
-       PQ = 20,
-       gQ = 21,
-       JQ = {
-         [zQ]: "link",
-         2: "draw",
-         3: "draw base vertex",
-         4: "draw no index buffer",
-         7: "draw missing block",
-         8: "draw small binding",
-         9: "draw missing texture",
- ... (173 more removed lines; see GitHub link above)
+     var OM = iM(44),
+       SM = iM(1608),
+       jM = iM(1116),
+       aM = iM.n(jM),
+       PM = iM(313),
+       nM = iM(7054),
+       QM = iM(1398),
+       zM = iM(1591),
+       LM = iM(4937),
+       mM = iM(1520),
+       HM = iM(3530),
+       hM = iM(4945),
+       JM = iM(1763),
+       dM = iM(4934),
+       yM = iM(1142),
+       lM = iM(19),
+ ... (9 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L3130-L3329` → after: `L36-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L36-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/142.js#L36-L93) · [Before (L3130-L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/142.js#L3130-L3329)

```diff
-         group: WQ,
-         instance: XQ
-       } = QQ, wQ = aQ.get(WQ);
-       return void 0 === wQ && (wQ = [], aQ.set(WQ, wQ)), !wQ.includes(XQ) && (wQ.length >= HQ || (wQ.push(XQ), !1))
-     }
- 
-     function hQ() {
-       return aQ.size > 0
-     }
- 
-     function iQ() {
-       aQ.clear()
-     }
-   },
-   40961: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
- ... (184 more removed lines; see GitHub link above)
+         pack: rM,
+         view: iM,
+         favourite: OM,
+         notice: SM
+       } = MM;
+       const {
+         width: jM,
+         height: PM
+       } = nM.v.thumb, {
+         live: LM
+       } = rM;
+       return (0, gM.jsx)("div", {
+         className: "ShaderPackCard",
+         children: (0, gM.jsxs)("div", {
+           className: "ShaderPackCardTile",
+           children: [(0, gM.jsxs)(zM.LinkPreserveSearch, {
+ ... (42 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L3366-L3453` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/142.js#L97) · [Before (L3366-L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/142.js#L3366-L3453)

```diff
-     async function bQ() {
-       const [{
-         shaderPackPage: QQ,
-         harnessShaderPackMode: WQ
-       }, {
-         shaderPackTextures: wQ
-       }] = await Promise.all([XQ.e(119).then((() => XQ(39494))), XQ.e(120).then((() => XQ(7002)))]), qQ = await QQ.load();
-       return "active" !== qQ.status ? qQ : {
-         status: "active",
-         pack: {
-           variants: qQ.pack.variants,
-           layers: wQ().layers,
-           keepCircleShadows: qQ.pack.keepCircleShadows
-         },
-         harnessPolicy: WQ()
-       }
- ... (72 more removed lines; see GitHub link above)
+     var RM = iM(7068);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L3457-L3592` → after: `L109-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L109-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/142.js#L109-L130) · [Before (L3457-L3592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/142.js#L3457-L3592)

```diff
-         width: WQ,
-         height: XQ
-       } = QQ, qQ = Math.max(1, Math.min(XQ, JQ)), TQ = (0, wQ.g)(WQ, qQ, {
-         willReadFrequently: !0
-       });
-       if (!TQ) throw new Error("no 2D context to read the texture back");
-       TQ.globalCompositeOperation = "copy";
-       const zQ = new Uint8Array(WQ * XQ * 4);
-       for (let wQ = 0; wQ < XQ; wQ += qQ) {
-         const sQ = Math.min(qQ, XQ - wQ);
-         TQ.drawImage(QQ, 0, wQ, WQ, sQ, 0, 0, WQ, sQ), zQ.set(TQ.getImageData(0, 0, WQ, sQ).data, wQ * WQ * 4)
-       }
-       return {
-         width: WQ,
-         height: XQ,
-         pixels: zQ
- ... (120 more removed lines; see GitHub link above)
+         t: nM
+       } = (0, CM.A)(), QM = (0, RM.l)(), zM = Date.now(), LM = null === rM ? 0 : "owned" === rM.kind ? rM.packs.length : rM.page.results.length;
+       return (0, gM.jsxs)("div", {
+         className: aM()("ShaderPackBrowseResults", {
+           Loading: iM && null !== rM
+         }),
+         children: [iM && null === rM && (0, gM.jsx)("div", {
+           className: "ShaderPackBrowseMessage",
+           children: (0, gM.jsx)(eM.d, {})
+         }), OM && (0, gM.jsxs)("div", {
+           className: "ShaderPackBrowseMessage",
+           children: [nM("shaderPackListing:loadFailed"), (0, gM.jsx)(mM.e, {
+             onClick: SM,
+             children: nM("general:tryAgain")
+           })]
+         }), "listing" === (null === rM || void 0 === rM ? void 0 : rM.kind) && LM > 0 && (0, gM.jsx)("div", {
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L3594-L3642` → after: `L132-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L132-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/142.js#L132-L136) · [Before (L3594-L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/142.js#L3594-L3642)

```diff
-             zQ = await this.loadAndHandOver(QQ.sources, QQ.load, qQ, XQ, wQ);
-           if (!1 !== zQ || void 0 === WQ || this.stopped()) return zQ;
-           if (qQ = BQ, await new Promise((QQ => {
-               setTimeout(QQ, WQ)
-             })), XQ()) return null
-         }
-       }
-       stopped() {
-         return !0 === this.core.isStopped
-       }
-       async loadAndHandOver(QQ, WQ, XQ, wQ) {
-         let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
-         if (this.stopped()) return null;
-         const TQ = this.core.terrainTextureNames();
-         var zQ;
-         if (0 === TQ.length) return null === (zQ = qQ.onTaken) || void 0 === zQ || zQ.call(qQ, null, new Set), !0;
- ... (33 more removed lines; see GitHub link above)
+             view: PM,
+             favourite: {
+               isFavourite: QM.isFavourite(MM.packId),
+               onToggle: () => {
+                 QM.toggle(MM.packId)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L3649-L3777` → after: `L139-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L139-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/142.js#L139-L154) · [Before (L3649-L3777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/142.js#L3649-L3777)

```diff
-           }(JQ.textures, sQ.heldUntil)
-         });
-         if (jQ) {
-           var BQ;
-           const QQ = new Set(PQ.failures.flatMap((QQ => {
-             let {
-               name: WQ
-             } = QQ;
-             return null === WQ ? [] : [WQ]
-           })));
-           null === (BQ = qQ.onTaken) || void 0 === BQ || BQ.call(qQ, rQ ? JQ : null, QQ)
-         }
-         return jQ
-       }
-     }
-   },
- ... (113 more removed lines; see GitHub link above)
+           }, MM.packId)))
+         }), "owned" === (null === rM || void 0 === rM ? void 0 : rM.kind) && LM > 0 && (0, gM.jsx)("div", {
+           className: "ShaderPackBrowseGrid",
+           children: rM.packs.map((MM => {
+             var rM;
+             return (0, gM.jsx)(uM, {
+               pack: MM,
+               view: PM,
+               notice: MM.owner ? (0, wM.S)(MM.owner, !(null === (rM = MM.live) || void 0 === rM || !rM.renderId), zM, nM)[0] : void 0
+             }, MM.packId)
+           }))
+         }), null !== rM && 0 === LM && (0, gM.jsx)("div", {
+           className: "ShaderPackBrowseMessage",
+           children: nM(WM(jM))
+         })]
+       })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L3790` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/142.js#L158) · [Before (L3790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/142.js#L3790)

```diff
-       return QQ.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
+       return "mine" === MM.section ? "shaderPackListing:noOwnPacks" : (0, wM.r)(MM) ? "general:noResults" : "favourites" === MM.section ? "shaderPackListing:noFavourites" : "general:noResults"
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L3792` → after: `L160-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L160-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/142.js#L160-L165) · [Before (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/142.js#L3792)

```diff
-     let sQ = null;
+     var sM = iM(7081);
+     const DM = 24,
+       kM = {
+         favourites: "general:favourites",
+         mine: "shaderPackListing:mine"
+       };
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L3801-L3844` → after: `L169-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L169-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/142.js#L169-L195) · [Before (L3801-L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/142.js#L3801-L3844)

```diff
-       return sQ
-     }
- 
-     function PQ() {
-       let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
-       const WQ = `WGPU-${FQ()}`,
-         wQ = (QQ, wQ) => {
-           const {
-             reason: zQ,
-             message: sQ
-           } = wQ;
-           if ((0, qQ.v)(String(sQ))) return;
-           const FQ = {
-             pipeline: null !== QQ && void 0 !== QQ ? QQ : "",
-             reason: String(zQ),
-             browserMessage: String(sQ)
- ... (28 more removed lines; see GitHub link above)
+       const {
+         t: eM
+       } = (0, CM.A)(), bM = (0, zM.useNavigatePreserveSearch)(), tM = (0, SM.u)(), {
+         userContext: uM,
+         isUserContextUpdating: WM
+       } = (0, yM.b)(), [ZM, oM] = (0, RM.h)(), [fM, YM] = (0, RM.e)(), NM = (0, OM.useRef)(!1), [AM, xM] = (0, LM.k)(), vM = (0, wM.z)(AM), [FM, BM] = (0, OM.useState)(null !== (MM = vM.searchQuery) && void 0 !== MM ? MM : ""), XM = (0, OM.useRef)(null), {
+         searchQuery: IM
+       } = vM;
+       (0, OM.useEffect)((() => {
+         BM(null !== IM && void 0 !== IM ? IM : ""), XM.current && (XM.current.value = null !== IM && void 0 !== IM ? IM : "")
+       }), [IM]);
+       const [KM, qM] = (0, OM.useState)(null), [TM, VM] = (0, OM.useState)(!1), [cM, Mr] = (0, OM.useState)(!1), [rr, ir] = (0, OM.useState)(0), Or = (0, OM.useRef)(0), Sr = JSON.stringify(vM), jr = (0, wM.j)();
+ 
+       function ar() {
+         null !== jr ? (bM(jr), lM.d.set({
+           openEverythingMenuName: PM.m.SETTINGS,
+ ... (11 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L3972-L3985` → after: `L199-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L199-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/142.js#L199-L418) · [Before (L3972-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/142.js#L3972-L3985)

```diff
-     function UQ(QQ) {
-       const {
-         hooks: WQ,
-         moduleCodes: XQ,
-         reads: wQ
-       } = QQ;
-       return Array.from(QQ.variantFlags, ((QQ, qQ) => {
-         const JQ = qQ * TQ;
-         return {
-           key: VQ(qQ),
-           hooks: {
-             vertex: yQ(WQ[JQ]),
-             surface: yQ(WQ[JQ + 1]),
-             light: yQ(WQ[JQ + 2])
+       function nr() {
+         const MM = FM.trim() || null;
+         Pr({
+           searchQuery: MM,
+           ...null !== MM && !NM.current && (0, wM.n)(vM) && {
+             withFeatures: [],
+             withoutFeatures: []
+           }
+         })
+       }(0, dM.e)(ar), (0, RM.c)(), (0, OM.useEffect)((() => {
+         if (WM) return;
+         const MM = ++Or.current,
+           rM = JSON.parse(Sr);
+         VM(!0), Mr(!1), async function(MM) {
+           if ("mine" === MM.section) return {
+             kind: "owned",
+ ... (204 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L3987-L3995` → after: `L420-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L420-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/142.js#L420-L424) · [Before (L3987-L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/142.js#L3987-L3995)

```diff
-           moduleCode: XQ[qQ],
-           sceneDepth: 0 !== (QQ & zQ),
-           sunShadow: 0 !== (QQ & FQ),
-           airShadow: 0 !== (QQ & PQ),
-           movesVertices: 0 !== (QQ & sQ),
-           discards: 0 !== (QQ & gQ),
-           reads: {
-             vertex: pQ(wQ[2 * qQ]),
-             fragment: pQ(wQ[2 * qQ + 1])
+           getPageHref: function(MM) {
+             const rM = new URLSearchParams(AM);
+             (0, LM.h)(rM, MM);
+             const iM = rM.toString();
+             return iM ? `${tM.pathname}?${iM}` : tM.pathname
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L3997-L4122` → after: `L426-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/142.js#L426-L427) · [Before (L3997-L4122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/142.js#L3997-L4122)

```diff
-         }
-       }))
-     }
-   },
-   40917: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       A: () => jQ,
-       b: () => qQ,
-       d: () => wQ,
-       h: () => rQ,
-       i: () => gQ,
-       k: () => yQ,
-       n: () => TQ,
-       p: () => sQ,
-       r: () => FQ,
-       t: () => zQ,
- ... (110 more removed lines; see GitHub link above)
+         })]
+       })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/143.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/143.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L4-L5` → after: `L4-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L4-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/143.js#L4-L78) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/143.js#L4-L5)

```diff
-   7007: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
+   7061: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => PM
+     });
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(1188),
+       aM = iM(1303);
+ 
+     function PM(MM) {
+       let {
+         item: rM,
+         className: iM
+       } = MM;
+       const {
+         t: OM
+ ... (59 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L7` → after: `L80-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L80-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/143.js#L80-L374) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/143.js#L7)

```diff
-       i: () => UQ,
+       h: () => LM,
+       l: () => hM
+     });
+     var OM = iM(44),
+       SM = iM(7054),
+       jM = iM(1573),
+       aM = iM(7051),
+       PM = iM(7077),
+       nM = iM(1142);
+     const QM = "shaderPackListingView",
+       zM = "shaderPackListingFilterOpen";
+ 
+     function LM() {
+       var MM;
+       const [rM, iM] = (0, PM.e)(QM, SM.E[0]);
+       return [null !== (MM = SM.E.find((MM => MM === rM))) && void 0 !== MM ? MM : SM.E[0], iM]
+ ... (279 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L9-L12` → after: `L376-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L376-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/143.js#L376-L399) · [Before (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/143.js#L9-L12)

```diff
-       n: () => VQ
-     });
-     var wQ = XQ(7015);
-     const qQ = 6,
+       m: () => EM,
+       q: () => CM,
+       t: () => nM,
+       v: () => SM,
+       w: () => GM,
+       y: () => jM,
+       z: () => PM
+     });
+     const OM = ["forest", "desert", "water", "night", "cave"];
+     const SM = {
+         full: {
+           width: 3840,
+           height: 2160
+         },
+         large: {
+           width: 1920,
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L20-L245` → after: `L402-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L402-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/143.js#L402-L440) · [Before (L20-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/143.js#L20-L245)

```diff
-       rQ = 64,
-       IQ = 128,
-       jQ = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];
- 
-     function BQ(QQ) {
-       if (!QQ) return 0;
-       const WQ = jQ.indexOf(QQ);
-       if (WQ <= 0) throw new Error(`"${QQ}" is not a shader pack hook function`);
-       return WQ
-     }
- 
-     function yQ(QQ) {
-       if (0 === QQ) return null;
-       const WQ = jQ[QQ];
-       if (void 0 === WQ) throw new Error(`${QQ} is not a shader pack hook function id`);
-       return WQ
- ... (210 more removed lines; see GitHub link above)
+       nM = 300;
+ 
+     function QM(MM, rM) {
+       return MM.slice(0, rM).replace(/[\uD800-\uDBFF]$/, "")
+     }
+     const zM = 64,
+       LM = 512,
+       mM = 18e5;
+ 
+     function HM(MM) {
+       const rM = MM,
+         iM = null === rM || void 0 === rM ? void 0 : rM.files;
+       return "number" === typeof(null === rM || void 0 === rM ? void 0 : rM.apiVersion) && "string" === typeof rM.name && (null === rM.author || "string" === typeof rM.author) && (void 0 === rM.keepCircleShadows || "boolean" === typeof rM.keepCircleShadows) && "object" === typeof … [truncated]
+     }
+     const hM = "Bloxdhub",
+       JM = "https://bloxdhub.com/shaders";
+ ... (23 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/144.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/144.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/144.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/144.js#L4)

```diff
-   41988: (QQ, WQ, XQ) => {
+   42177: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/144.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/144.js#L6-L8)

```diff
-       compilePagePack: () => PQ,
-       prefetchCompiler: () => sQ,
-       reconcileHint: () => FQ
+       ShaderPackCategory: () => WM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L10-L13` → after: `L8-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L8-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/144.js#L8-L278) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/144.js#L10-L13)

```diff
-     var wQ = XQ(6984),
-       qQ = XQ(7024),
-       TQ = XQ(7002),
-       zQ = XQ(7018);
+     var OM = iM(44),
+       SM = iM(1608),
+       jM = iM(1520),
+       aM = iM(1591),
+       PM = iM(1188),
+       nM = iM(83),
+       QM = iM(19),
+       zM = iM(1717),
+       LM = iM(7111),
+       mM = iM(308),
+       HM = iM(7142),
+       hM = iM(7134),
+       JM = iM(7148),
+       dM = iM(7051),
+       yM = iM(5401),
+       lM = iM(5430),
+ ... (255 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L16-L25` → after: `L281-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L281-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/144.js#L281-L297) · [Before (L16-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/144.js#L16-L25)

```diff
-       (0, wQ.loadPageShaderPackCompiler)()
-     }
-     async function FQ() {
-       const QQ = await (0, wQ.loadPageShaderPackCompiler)();
-       await (QQ ? (0, qQ.reconcileStoredShaderPackHint)(QQ) : (0, qQ.forgetShaderPackActiveHint)())
-     }
-     async function PQ(QQ) {
-       const WQ = await (0, wQ.loadPageShaderPackCompiler)();
-       if (!WQ) return {
-         status: "none"
+       return QM
+     }
+ 
+     function mM() {
+       QM = null
+     }
+ 
+     function HM(MM) {
+       return MM.playerHasRank("developer") || MM.playerHasRank("admin")
+     }
+     const hM = ["terrain", "water", "models", "sunShadows", "strict"],
+       JM = {
+         terrain: "shaderPackListing:filterTerrain",
+         water: "shaderPackListing:filterWater",
+         models: "shaderPackListing:filterModels",
+         sunShadows: "shaderPackListing:filterShadows",
+ ... (1 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L27-L30` → after: `L299-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L299-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/144.js#L299-L387) · [Before (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/144.js#L27-L30)

```diff
-       const XQ = await (0, zQ.e)(QQ, WQ),
-         sQ = (0, qQ.storedPackOutcome)(XQ, WQ);
-       if ("none" === sQ.kind) return {
-         status: "none"
+ 
+     function dM(MM, rM) {
+       return MM.withFeatures.includes(rM) ? "with" : MM.withoutFeatures.includes(rM) ? "without" : null
+     }
+ 
+     function yM(MM) {
+       return null === MM ? "with" : "with" === MM ? "without" : null
+     }
+ 
+     function lM(MM) {
+       return "with" === MM ? "only" : null === MM ? "include" : void 0
+     }
+ 
+     function EM(MM, rM) {
+       const iM = dM(MM, rM),
+         OM = MM => MM.filter((MM => MM !== rM));
+ ... (73 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L32-L40` → after: `L389-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L389-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/144.js#L389-L400) · [Before (L32-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/144.js#L32-L40)

```diff
-       const FQ = WQ.JQQ((0, qQ.storedShaderPackFiles)(XQ), (0, TQ.shaderPackTextures)());
-       if ("blocked" === sQ.kind) return {
-         status: "blocked",
-         messageKey: sQ.messageKey,
-         variants: 0 === FQ.errors.length ? FQ.variants : null
-       };
-       if (FQ.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", FQ.errors), {
-         status: "none"
-       };
+ 
+     function ZM(MM) {
+       return Math.round(100 * Math.max(0, 1 - 1 / MM))
+     }
+ 
+     function oM(MM, rM, iM, SM) {
+       const jM = [];
+       MM.isBanned && jM.push({
+         tone: "warning",
+         text: SM("shaderPackListing:ownerBanned"),
+         detail: null
+       });
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L42-L50` → after: `L402-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L402-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/144.js#L402-L473) · [Before (L42-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/144.js#L42-L50)

```diff
-         name: PQ,
-         keepCircleShadows: gQ
-       } = XQ.manifest;
-       return {
-         status: "active",
-         pack: {
-           name: PQ,
-           variants: FQ.variants,
-           keepCircleShadows: !0 === gQ
+         pending: aM
+       } = MM;
+       if (null === MM.brokenError || aM && !aM.error || jM.push({
+           tone: "warning",
+           text: SM("shaderPackListing:ownerBroken"),
+           detail: MM.brokenError
+         }), null !== aM && void 0 !== aM && aM.error) jM.push({
+         tone: "warning",
+         text: SM(rM ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
+         detail: (0, OM.m)(aM.error) ? null : aM.error
+       });
+       else if (aM) {
+         const MM = null === aM.renderNotBefore ? 0 : aM.renderNotBefore - iM,
+           OM = String(Math.ceil(MM / 6e4)),
+           PM = SM(rM ? MM > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : MM > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
+             minutes: OM
+ ... (56 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L52-L128` → after: `L475-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L475-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/144.js#L475-L502) · [Before (L52-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/144.js#L52-L128)

```diff
-       }
-     }
-   },
-   7024: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       forgetShaderPackActiveHint: () => hQ,
-       isOtherApiVersion: () => dQ,
-       isShaderPackActive: () => GQ,
-       isShaderPackChangePending: () => vQ,
-       markShaderPackChangePending: () => bQ,
-       pageShaderPackValidationVersion: () => HQ,
-       reconcileStoredShaderPackHint: () => lQ,
-       removeShaderPack: () => pQ,
-       replaceShaderPack: () => yQ,
-       saveShaderPack: () => BQ,
-       shaderPackNeedsCheck: () => aQ,
- ... (61 more removed lines; see GitHub link above)
+       },
+       jM = ["popular", "updated", "newest"],
+       aM = 3,
+       PM = 32,
+       nM = 300;
+ 
+     function QM(MM, rM) {
+       return MM.slice(0, rM).replace(/[\uD800-\uDBFF]$/, "")
+     }
+     const zM = 64,
+       LM = 512,
+       mM = 18e5;
+ 
+     function HM(MM) {
+       const rM = MM,
+         iM = null === rM || void 0 === rM ? void 0 : rM.files;
+ ... (12 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L130-L268` → after: `L504-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L504-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/144.js#L504-L516) · [Before (L130-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/144.js#L130-L268)

```diff
-       return null === QQ ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : dQ(QQ) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.ok) || QQ.validation.fromRecheck ? null === WQ ? {
-         kind: "none",
-         reason: "noCompiler"
-       } : aQ(QQ, WQ) ? {
-         kind: "blocked",
-         messageKey: "shaderPack:failedUnchecked"
-       } : QQ.validation.ok ? {
-         kind: "active"
-       } : {
-         kind: "blocked",
- ... (123 more removed lines; see GitHub link above)
+       return MM === yM || null !== (rM = null === MM || void 0 === MM ? void 0 : MM.startsWith(lM)) && void 0 !== rM && rM
+     }
+ 
+     function UM(MM, rM) {
+       return `shaderPacks/${MM}/${rM}.json`
+     }
+ 
+     function GM(MM, rM, iM, OM) {
+       return null === rM.renderId ? CM(MM, rM.baselineVersion, iM, OM) : `${MM}/${function(MM,rM,iM,OM){return`shaderPacks/${MM}/${rM}/${iM}-${OM}.webp`}(rM.packId,rM.renderId,iM,OM)}`
+     }
+ 
+     function CM(MM, rM, iM, OM) {
+       return `${MM}/${function(MM,rM,iM){return`shaderPacks/baseline/${MM}/${rM}-${iM}.webp`}(rM,iM,OM)}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/145.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/145.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31)

#### 1. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/145.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/145.js#L3)

```diff
- export const ids = [145];
+ export const ids = [145, 151, 152];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L5-L2461` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/145.js#L4) · [Before (L5-L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/145.js#L5-L2461)

```diff
-   7067: (QQ, WQ, XQ) => {
-     var wQ = XQ(7075);
-     WQ.c = {
-       prefix: wQ.prefix,
-       iconName: wQ.iconName,
-       icon: [wQ.width, wQ.height, wQ.aliases, wQ.unicode, wQ.svgPathData]
-     }, WQ.d = WQ.c, wQ.prefix, wQ.iconName, wQ.width, wQ.height, wQ.aliases, wQ.unicode, wQ.svgPathData, wQ.aliases
-   },
-   7077: (QQ, WQ, XQ) => {
-     var wQ = XQ(7086);
-     WQ.c = {
-       prefix: wQ.prefix,
-       iconName: wQ.iconName,
-       icon: [wQ.width, wQ.height, wQ.aliases, wQ.unicode, wQ.svgPathData]
-     }, WQ.f = WQ.c, wQ.prefix, wQ.iconName, wQ.width, wQ.height, wQ.aliases, wQ.unicode, wQ.svgPathData, wQ.aliases
-   },
- ... (2441 more removed lines; see GitHub link above)
+   41591: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L2463-L2469` → after: `L6-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L6-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/145.js#L6-L455) · [Before (L2463-L2469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/145.js#L2463-L2469)

```diff
-       c: () => qQ,
-       g: () => TQ
-     });
-     var wQ = {
-         prefix: "fas",
-         iconName: "shirt",
-         icon: [640, 512, [128085, "t-shirt", "tshirt"], "f553", "M320.2 112c44.2 0 80-35.8 80-80l53.5 0c17 0 33.3 6.7 45.3 18.7L617.6 169.4c12.5 12.5 12.5 32.8 0 45.3l-50.7 50.7c-12.5 12.5-32.8 12.5-45.3 0l-41.4-41.4 0 224c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-224-4 … [truncated]
+       b: () => LM,
+       installListedShaderPack: () => zM
+     });
+     var OM = iM(7054),
+       SM = iM(5442),
+       jM = iM(1202),
+       aM = iM(7111),
+       PM = iM(5435),
+       nM = iM(7142),
+       QM = iM(7134);
+     async function zM(MM) {
+       const rM = await (0, aM.loadPageShaderPackCompiler)();
+       if (null === rM) return {
+         kind: "failed",
+         reason: "compiler"
+       };
+ ... (434 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L2471-L2472` → after: `L457-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L457-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/145.js#L457-L498) · [Before (L2471-L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/145.js#L2471-L2472)

```diff
-       qQ = wQ,
-       TQ = wQ
+       jM = ["popular", "updated", "newest"],
+       aM = 3,
+       PM = 32,
+       nM = 300;
+ 
+     function QM(MM, rM) {
+       return MM.slice(0, rM).replace(/[\uD800-\uDBFF]$/, "")
+     }
+     const zM = 64,
+       LM = 512,
+       mM = 18e5;
+ 
+     function HM(MM) {
+       const rM = MM,
+         iM = null === rM || void 0 === rM ? void 0 : rM.files;
+       return "number" === typeof(null === rM || void 0 === rM ? void 0 : rM.apiVersion) && "string" === typeof rM.name && (null === rM.author || "string" === typeof rM.author) && (void 0 === rM.keepCircleShadows || "boolean" === typeof rM.keepCircleShadows) && "object" === typeof … [truncated]
+ ... (26 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/146.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/146.js` (44 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af)

#### 1. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L4-L81` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L4) · [Before (L4-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L4-L81)

```diff
-   8443: (QQ, WQ) => {
-     var XQ = "youtube",
-       wQ = [61802],
-       qQ = "f167",
-       TQ = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
-     WQ.d = {
-       prefix: "fab",
-       iconName: XQ,
-       icon: [576, 512, wQ, qQ, TQ]
-     }, WQ.g = WQ.d
-   },
-   7213: (QQ, WQ) => {
-     Object.defineProperty(WQ, "__esModule", {
-       value: !0
-     });
-     var XQ = "bolt",
- ... (62 more removed lines; see GitHub link above)
+   44398: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L83-L84` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L6) · [Before (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L83-L84)

```diff
-       d: () => sQ,
-       g: () => zQ
+       startHarnessShaderPack: () => LM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L86-L103` → after: `L8-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L8-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L8-L25) · [Before (L86-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L86-L103)

```diff
-     var wQ = XQ(3559);
-     let qQ = null,
-       TQ = null;
- 
-     function zQ() {
-       return TQ ??= XQ.e(220).then((() => XQ(36619))).then((QQ => {
-         let {
-           ITEM_SPRITES: WQ,
-           ITEM_SPRITES_WITHOUT_FILE: XQ,
-           ITEM_FILES_WITHOUT_SPRITE: TQ
-         } = QQ;
-         qQ = function(QQ, WQ, XQ) {
-           const qQ = new Set,
-             TQ = (0, wQ.D)(WQ);
-           let zQ = 0;
-           for (const [wQ, sQ] of QQ.entries()) wQ === TQ[zQ] ? zQ++ : qQ.add(sQ);
- ... (2 more removed lines; see GitHub link above)
+     var OM = iM(7054),
+       SM = iM(5442),
+       jM = iM(7131),
+       aM = iM(7111),
+       PM = iM(5435),
+       nM = iM(40300),
+       QM = iM(7120),
+       zM = iM(7134);
+     async function LM(MM, rM) {
+       const {
+         stored: iM,
+         info: LM
+       } = await async function(MM, rM) {
+         const iM = await async function(MM) {
+           const rM = await fetch(MM);
+           if (!rM.ok) throw new Error(`Couldn't fetch the shader pack at ${MM}: HTTP ${rM.status}`);
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L105-L137` → after: `L27-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L27-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L27-L86) · [Before (L105-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L105-L137)

```diff
-         }(WQ.split(wQ.v), XQ, TQ)
-       }), (QQ => {
-         throw TQ = null, QQ
-       })), TQ
-     }
- 
-     function sQ(QQ) {
-       var WQ, XQ;
-       return null !== (WQ = null === (XQ = qQ) || void 0 === XQ ? void 0 : XQ.has(QQ)) && void 0 !== WQ && WQ
-     }
-   },
-   41248: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ,
-       f: () => sQ
-     });
- ... (17 more removed lines; see GitHub link above)
+         }(MM);
+         if (!(0, PM.k)(iM.apiVersion)) throw new Error(`The pack is for shader pack API version ${iM.apiVersion}; this build runs version ${PM.e}`);
+         const nM = {
+             manifest: {
+               apiVersion: iM.apiVersion,
+               name: iM.name,
+               author: iM.author,
+               description: null,
+               keepCircleShadows: !0 === iM.keepCircleShadows
+             },
+             files: iM.files,
+             validation: null
+           },
+           LM = {
+             url: MM,
+             name: iM.name,
+ ... (44 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L140-L149` → after: `L89-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L89-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L89-L104) · [Before (L140-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L140-L149)

```diff
-   42878: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => xQ,
-       g: () => mQ,
-       i: () => oQ,
-       m: () => eQ,
-       o: () => nQ,
-       s: () => WW,
-       w: () => tQ,
-       z: () => SQ
+   7142: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       forgetShaderPackActiveHint: () => uM,
+       isOtherApiVersion: () => bM,
+       isShaderPackActive: () => UM,
+       isShaderPackChangePending: () => eM,
+       markShaderPackChangePending: () => CM,
+       pageShaderPackValidationVersion: () => wM,
+       reconcileStoredShaderPackHint: () => gM,
+       removeShaderPack: () => EM,
+       replaceShaderPack: () => dM,
+       saveShaderPack: () => JM,
+       shaderPackNeedsCheck: () => tM,
+       storedPackOutcome: () => GM,
+       storedShaderPackFiles: () => mM,
+       toStoredShaderPack: () => LM
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L151-L175` → after: `L106-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L106-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L106-L113) · [Before (L151-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L151-L175)

```diff
-     var wQ = XQ(4780),
-       qQ = XQ(4806),
-       TQ = XQ(34529),
-       zQ = XQ(3555),
-       sQ = XQ(3547),
-       FQ = XQ(1137),
-       PQ = XQ(41028),
-       gQ = XQ(105),
-       JQ = XQ(1296),
-       rQ = XQ(41170),
-       IQ = XQ(41248),
-       jQ = XQ(8443),
-       BQ = XQ(7947),
-       yQ = XQ(8061),
-       VQ = XQ(8168),
-       DQ = XQ(8299),
- ... (9 more removed lines; see GitHub link above)
+     var OM = iM(5442),
+       SM = iM(5435),
+       jM = iM(30),
+       aM = iM(3855),
+       PM = iM(7148),
+       nM = iM(7120);
+     const QM = "shaderPackChangePending";
+     let zM = null;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L177-L178` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L115) · [Before (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L177-L178)

```diff
-     function UQ(QQ) {
-       const [WQ, XQ, , , wQ] = QQ.icon;
+     function LM(MM, rM, iM) {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L180-L255` → after: `L117-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L117-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L117-L121) · [Before (L180-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L180-L255)

```diff
-         width: WQ,
-         height: XQ,
-         path: "string" === typeof wQ ? wQ : wQ.join(" ")
-       }
-     }
-     const bQ = new Map(Object.entries(GQ).map((QQ => {
-       let [WQ, XQ] = QQ;
-       return [WQ, UQ(XQ)]
-     })));
-     let vQ = !1;
-     const dQ = new Set;
-     var HQ = XQ(41056);
-     const aQ = "Jetbrains Mono",
-       lQ = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2248,U+26A1,U+2713,U+FEFF,U+FFFD",
-       hQ = "U+0100-0130,U+0132-0151,U+0154-017F,U+018F-0190,U+0192,U+019B,U+01A0-01A1,U+01AF-01B0,U+01CD-01CE,U+01D0,U+01D2,U+01D4,U+01D6,U+01D8,U+01DA,U+01DC,U+01E6-01E7,U+01EA-01EB,U+01F4-01F5,U+01FC-01FF,U+0218-021B,U+0232-0233,U+0237,U+0259,U+02B9-02BA,U+02C7,U+02C9,U+02D8-02 … [truncated]
- 
- ... (60 more removed lines; see GitHub link above)
+         manifest: MM.manifest,
+         files: (0, OM.w)(MM.files),
+         validation: rM,
+         ...iM && {
+           listing: iM
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L273` → after: `L127-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L127-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L127-L130) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L273)

```diff
-       QQ !== LQ && (LQ = QQ, tQ())
+       return Object.keys(MM.files).map((rM => ({
+         path: rM,
+         source: MM.files[rM]
+       })))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L277-L278` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L135-L136) · [Before (L277-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L277-L278)

```diff
-       if ("none" === fQ || null === QQ) return;
-       QQ(EQ, "all" === fQ ? 0 : CQ, new Uint8Array(0)) && (fQ = "none")
+       const rM = HM.then(MM);
+       return HM = rM.catch((() => {})), rM
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L324-L325` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L139-L140) · [Before (L324-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L324-L325)

```diff
-     function mQ() {
-       (0, IQ.f)().catch((() => {}))
+     function JM(MM, rM) {
+       return hM((() => yM(MM, rM)))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L328-L332` → after: `L143-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L143-L144) · [Before (L328-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L328-L332)

```diff
-     function MQ(QQ) {
-       return OQ.has(QQ) ? ZQ(`icon:${QQ}`, (async () => {
-         var WQ, XQ;
-         return null !== (WQ = null === (XQ = (0, rQ.j)()) || void 0 === XQ ? void 0 : XQ.textureUrl(QQ)) && void 0 !== WQ ? WQ : (await (0, IQ.c)()).ingameIconUrl(QQ)
-       })) : null
+     function dM(MM, rM, iM) {
+       return hM((async () => JSON.stringify(await (0, PM.d)()) === JSON.stringify(MM) && (null === rM ? (await lM(), !0) : yM(rM, iM))))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L334-L385` → after: `L146-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L146-L148) · [Before (L334-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L334-L385)

```diff
-     let QW = "unasked";
-     const WW = {
-       get canSeeRealPlayerNames() {
-         return gQ.featureFlags.canSeeRealPlayerNames
-       },
-       get canSeePlayerWrittenText() {
-         return gQ.featureFlags.canSeePlayerWrittenText
-       },
-       get localPlayerDbId() {
-         return LQ
-       },
-       shownPlayerName: QQ => (0, JQ.f)(QQ, uQ.hiddenNames),
-       translate: (QQ, WQ) => {
-         const XQ = "object" === typeof WQ && null !== WQ ? WQ : void 0;
-         return uQ.translate(QQ, (0, JQ.j)(XQ, uQ.hiddenNames))
-       },
- ... (36 more removed lines; see GitHub link above)
+     async function yM(MM, rM) {
+       const iM = await jM.f.setItem(PM.b, MM);
+       return iM && RM(MM, rM), iM
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L387-L410` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L150-L151) · [Before (L387-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L387-L410)

```diff
-   },
-   42871: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => bW,
-       f: () => BW
-     });
-     var wQ = XQ(37041),
-       qQ = XQ(41028),
-       TQ = XQ(39143),
-       zQ = XQ(646),
-       sQ = XQ(382);
-     const FQ = {
-         DEFAULT_FONT_SIZE: 47,
-         DEFAULT_SUBTITLE_FONT_SIZE: 30,
-         HORIZONTAL_PADDING: 30,
-         VERTICAL_PADDING: 22,
- ... (8 more removed lines; see GitHub link above)
+     async function lM() {
+       await jM.f.removeItem(PM.b), jM.g.removeItem(aM.c)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L413-L414` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L154-L155) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L413-L414)

```diff
-     function JQ(QQ) {
-       return "object" === typeof QQ && null !== QQ
+     function EM() {
+       return hM(lM)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L418-L419` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L159) · [Before (L418-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L418-L419)

```diff
-       const XQ = "number" === typeof QQ ? QQ : "string" === typeof QQ ? Number(QQ.replace("px", "")) : NaN;
-       return Number.isFinite(XQ) && XQ > 0 ? XQ : WQ
+       return "active" === GM(MM, rM).kind
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L422-L423` → after: `L162-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L162-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L162-L184) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L422-L423)

```diff
-     function IQ(QQ) {
-       return JQ(QQ) ? QQ : void 0
+     function GM(MM, rM) {
+       var iM;
+       return null === MM ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : bM(MM) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (iM = MM.validation) || void 0 === iM ? void 0 : iM.ok) || MM.validation.fromRecheck ? null === rM ? {
+         kind: "none",
+         reason: "noCompiler"
+       } : tM(MM, rM) ? {
+         kind: "blocked",
+         messageKey: "shaderPack:failedUnchecked"
+       } : MM.validation.ok ? {
+         kind: "active"
+ ... (7 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L426-L428` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L187-L188) · [Before (L426-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L426-L428)

```diff
-     function jQ(QQ) {
-       const WQ = "number" === typeof QQ ? zQ.u[QQ] : QQ;
-       return "string" === typeof WQ && Object.hasOwn(zQ.i, WQ) ? zQ.i[WQ] : void 0
+     function CM() {
+       jM.k.setItem(QM, performance.timeOrigin)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L431-L432` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L191-L192) · [Before (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L431-L432)

```diff
-     function BQ(QQ, WQ) {
-       return "string" === typeof QQ ? QQ : JQ(QQ) ? "string" === typeof QQ.translationKey ? WQ.translate(QQ.translationKey, QQ.params).map((QQ => "string" === typeof QQ ? QQ : QQ.icon)).join("") : "string" === typeof QQ.entityName ? WQ.shownPlayerName(QQ.entityName) : "" : void 0 … [truncated]
+     function eM() {
+       return jM.k.getItem(QM) === performance.timeOrigin
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L435-L492` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L195-L196) · [Before (L435-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L435-L492)

```diff
-     function yQ(QQ, WQ, XQ, wQ) {
-       if (!Array.isArray(QQ)) return [];
-       const qQ = [];
-       for (const gQ of QQ) {
-         var TQ, zQ;
-         if (JQ(gQ) && "chatTag" in gQ) {
-           qQ.push({
-             kind: "rank",
-             rank: gQ
-           });
-           continue
-         }
-         if (JQ(gQ) && "icon" in gQ && !("mainRGB" in gQ)) {
-           var PQ;
-           qQ.push({
-             kind: "icon",
- ... (42 more removed lines; see GitHub link above)
+     function bM(MM) {
+       return !(0, SM.k)(MM.manifest.apiVersion)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L496` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L200) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L496)

```diff
-       return void 0 !== QQ && "rank" !== QQ.kind
+       return zM ??= MM.KD((0, nM.shaderPackTextures)()), zM
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L500-L502` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L204-L205) · [Before (L500-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L500-L502)

```diff
-       const XQ = VQ(QQ),
-         wQ = VQ(WQ);
-       return void 0 === QQ && !wQ || !XQ && void 0 === WQ ? 0 : XQ !== wQ ? .5 * FQ.HORIZONTAL_PADDING : 0
+       var iM;
+       return (null === (iM = MM.validation) || void 0 === iM ? void 0 : iM.headerVersion) !== wM(rM)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L506-L513` → after: `L209-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L209-L211) · [Before (L506-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L506-L513)

```diff
-       return "rank" === QQ.kind ? FQ.DEFAULT_FONT_SIZE : QQ.size
-     }
- 
-     function GQ(QQ, WQ, XQ) {
-       return "icon" === QQ.kind ? QQ.size : "rank" === QQ.kind ? function(QQ, WQ) {
-         const XQ = WQ.rankIcon(QQ.rank.icon);
-         return XQ ? PQ * (XQ.width / XQ.height) : PQ
-       }(QQ, XQ) + FQ.HORIZONTAL_PADDING : (XQ.glyphsShown(QQ.text), WQ.font = gQ(QQ.size), WQ.measureText(QQ.text).width)
+       return hM((async () => {
+         RM(await (0, PM.d)(!0), MM)
+       }))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L516-L537` → after: `L214-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L214-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L214-L217) · [Before (L516-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L516-L537)

```diff
-     function UQ(QQ, WQ, XQ) {
-       if (0 === QQ.length) return {
-         width: 0,
-         height: 0,
-         sizes: []
-       };
-       let wQ = 0;
-       for (const zQ of QQ) wQ = Math.max(wQ, pQ(zQ));
-       const qQ = [];
-       let TQ = DQ(void 0, QQ[0]);
-       for (let zQ = 0; zQ < QQ.length; zQ++) {
-         const wQ = TQ;
-         TQ += GQ(QQ[zQ], WQ, XQ), TQ += DQ(QQ[zQ], QQ[zQ + 1]), qQ.push({
-           x: wQ,
-           width: TQ - wQ
-         })
- ... (6 more removed lines; see GitHub link above)
+     function uM() {
+       return hM((async () => {
+         jM.g.removeItem(aM.c)
+       }))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L540-L545` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L220-L221) · [Before (L540-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L540-L545)

```diff
-     function bQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
-       WQ += DQ(void 0, QQ[0]);
-       for (let sQ = 0; sQ < QQ.length; sQ++) {
-         const FQ = vQ(QQ[sQ], WQ, XQ, wQ, qQ, TQ, zQ);
-         WQ += 0 === FQ ? 0 : FQ + DQ(QQ[sQ], QQ[sQ + 1])
-       }
+     function RM(MM, rM) {
+       UM(MM, rM) ? jM.g.setItem(aM.c, !0) : jM.g.removeItem(aM.c)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L547-L548` → after: `L223-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L223-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L223-L233) · [Before (L547-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L547-L548)

```diff
- 
-     function vQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
+   },
+   7134: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => nM,
+       f: () => PM
+     });
+     var OM = iM(7142),
+       SM = iM(7120),
+       jM = iM(106);
+     const aM = 100;
+     async function PM(MM, rM) {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L550-L598` → after: `L235-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L235-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L235-L244) · [Before (L550-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L550-L598)

```diff
-       if ("icon" === QQ.kind) {
-         const wQ = TQ.iconImage(QQ.icon);
-         return wQ && zQ.push({
-           image: wQ,
-           x: WQ,
-           y: XQ + FQ.VERTICAL_PADDING / 2,
-           size: QQ.size
-         }), QQ.size
-       }
-       if ("rank" === QQ.kind) {
-         const zQ = null !== sQ && void 0 !== sQ ? sQ : GQ(QQ, qQ, TQ);
-         return function(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
-           var sQ, gQ;
-           const {
-             rank: JQ
-           } = QQ;
- ... (33 more removed lines; see GitHub link above)
+       let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (iM = navigator.gpu) && void 0 !== iM ? iM : null;
+       const aM = MM.zMM(rM, (0, SM.shaderPackTextures)());
+       if (aM.errors.length > 0) return QM(MM, aM.errors, aM.offInStrict);
+       const PM = await async function(MM) {
+         if (!MM) return null;
+         try {
+           const rM = await (0, jM.z)(MM);
+           return rM ? await rM.requestDevice() : null
+         } catch (rM) {
+           return console.error("Couldn't get a WebGPU device to validate the shader pack.", rM), null
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L600-L661` → after: `L246-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L246-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L246-L269) · [Before (L600-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L600-L661)

```diff
-         of QQ) WQ.imageSmoothingEnabled = !1, WQ.drawImage(XQ, wQ, qQ, TQ, TQ)
-     }
- 
-     function HQ(QQ, WQ, XQ, wQ, qQ, TQ) {
-       QQ.save(), QQ.translate(XQ, wQ), QQ.scale(qQ, qQ), QQ.fillStyle = TQ, QQ.fill(WQ), QQ.restore()
-     }
- 
-     function aQ(QQ, WQ, XQ) {
-       const wQ = "object" === typeof QQ && null !== QQ ? QQ : {},
-         qQ = function(QQ, WQ, XQ) {
-           if (!Array.isArray(QQ) || 0 === QQ.length) return [];
-           const wQ = [{
-             width: 0,
-             height: 0,
-             y: 0,
-             items: []
- ... (46 more removed lines; see GitHub link above)
+       }(OM);
+       if (!PM) return null;
+       let nM = !1;
+       PM.lost.then((() => {
+         nM = !0
+       }));
+       try {
+         const rM = await Promise.all(aM.validationModules.map((rM => async function(MM, rM, iM) {
+           rM.pushErrorScope("validation");
+           const OM = rM.createShaderModule({
+               code: iM.code
+             }),
+             SM = rM.popErrorScope(),
+             {
+               messages: jM
+             } = await OM.getCompilationInfo(),
+ ... (8 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L663-L692` → after: `L271-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L271-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L271-L276) · [Before (L663-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L663-L692)

```diff
-         }(wQ.content, WQ, XQ);
-       let zQ = 0,
-         sQ = FQ.VERTICAL_PADDING,
-         PQ = 0;
-       for (const TQ of qQ) {
-         zQ = Math.max(zQ, TQ.width + 2 * FQ.HORIZONTAL_PADDING), sQ += TQ.height + FQ.LINE_SPACING;
-         for (const QQ of TQ.items) PQ += QQ.chars
-       }
-       const gQ = "string" === typeof wQ.backgroundColor ? wQ.backgroundColor : "#22283b";
-       return {
-         width: zQ,
-         height: sQ,
-         chars: PQ,
-         draw: (QQ, WQ) => {
-           const wQ = [];
-           if (QQ.fillStyle = gQ, QQ.fillRect(0, 0, zQ, sQ), null === WQ)
- ... (14 more removed lines; see GitHub link above)
+         }(MM, PM, rM))));
+         return nM ? null : QM(MM, MM.ciM(rM.flat()), aM.offInStrict)
+       } catch (zM) {
+         return console.error("Couldn't validate the shader pack on WebGPU.", zM), null
+       } finally {
+         PM.destroy()
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L695-L737` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L279) · [Before (L695-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L695-L737)

```diff
-     var lQ = XQ(4780),
-       hQ = XQ(1302),
-       iQ = XQ(2104);
-     const cQ = 10,
-       AQ = 3,
-       RQ = 3,
-       EQ = [{
-         healthFraction: .25,
-         colour: "#ff0000"
-       }, {
-         healthFraction: .5,
-         colour: "#ffaa00"
-       }, {
-         healthFraction: 1,
-         colour: "#00ff00"
-       }],
- ... (27 more removed lines; see GitHub link above)
+     async function nM(MM, rM) {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L739-L745` → after: `L281-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L281-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L281-L292) · [Before (L739-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L739-L745)

```diff
-       const wQ = null !== (XQ = QQ.applyTo) && void 0 !== XQ ? XQ : "both";
-       return "both" === wQ || wQ === WQ
-     }
- 
-     function eQ(QQ) {
-       const WQ = tQ(QQ);
-       return "glow" === QQ.style ? WQ * RQ : Math.ceil(WQ / 2) + 1
+       if (!(0, OM.shaderPackNeedsCheck)(MM, rM) || (0, OM.isOtherApiVersion)(MM)) return MM;
+       const SM = await PM(rM, (0, OM.storedShaderPackFiles)(MM));
+       if (!SM) return MM;
+       const jM = !1 === (null === (iM = MM.validation) || void 0 === iM ? void 0 : iM.ok) && !MM.validation.fromRecheck,
+         aM = {
+           ...MM,
+           validation: jM ? SM : {
+             ...SM,
+             fromRecheck: !0
+           }
+         };
+       return await (0, OM.replaceShaderPack)(MM, aM, rM) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), aM
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L814-L883` → after: `L297-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L297-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L297-L301) · [Before (L814-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L814-L883)

```diff
-         width: mQ,
-         height: MQ,
-         draw: QQ => {
-           const WQ = [];
-           if (QQ.fillStyle = pQ, QQ.fillRect(wW, qW, XW, iQ.height), bQ(VQ, (mQ - QW) / 2 + FQ.HORIZONTAL_PADDING / 2, qW, iQ.height, QQ, XQ, WQ), DQ) {
-             const wQ = qW + iQ.height;
-             QQ.fillStyle = GQ, QQ.fillRect(wW, wQ, XW, AQ.height), bQ(DQ, (mQ - WW) / 2 + FQ.HORIZONTAL_PADDING / 2, wQ, AQ.height, QQ, XQ, WQ)
-           }
-           let wQ = null;
-           if (null !== lQ) {
-             const WQ = MQ - YQ - NQ;
-             null !== vQ && void 0 !== vQ && vQ.backgroundColour && (QQ.fillStyle = vQ.backgroundColour, QQ.fillRect(wW, WQ, XW, YQ)), QQ.fillStyle = function(QQ, WQ) {
-               const XQ = null === QQ || void 0 === QQ ? void 0 : QQ.foregroundColour;
-               if ("string" === typeof XQ) return XQ;
-               const wQ = [...Array.isArray(XQ) && XQ.length > 0 ? XQ : EQ].sort(((QQ, WQ) => QQ.healthFraction - WQ.healthFraction)),
-                 qQ = wQ.find((QQ => WQ <= QQ.healthFraction));
- ... (54 more removed lines; see GitHub link above)
+         headerVersion: (0, OM.pageShaderPackValidationVersion)(MM),
+         ok: 0 === rM.length,
+         errors: rM.slice(0, aM),
+         moreErrors: Math.max(0, rM.length - aM),
+         offInStrict: iM
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L886-L897` → after: `L304-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L304-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L304-L326) · [Before (L886-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L886-L897)

```diff
-     var xQ = XQ(38936);
-     const YQ = 256,
-       NQ = 1024,
-       ZQ = {
-         width: 1,
-         height: 7 / 8
-       };
-     var OQ = XQ(38942);
-     const KQ = {
-       leaderboard: ""
-     };
-     var mQ = XQ(42878);
+   },
+   7054: (MM, rM, iM) => {
+     iM.d(rM, {
+       D: () => aM,
+       E: () => OM,
+       I: () => mM,
+       M: () => zM,
+       Q: () => UM,
+       U: () => LM,
+       V: () => QM,
+       b: () => hM,
+       e: () => dM,
+       g: () => JM,
+       k: () => HM,
+       m: () => EM,
+       q: () => CM,
+ ... (7 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L899-L902` → after: `L328-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L328-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L328-L339) · [Before (L899-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L899-L902)

```diff
-         Nametag: 1,
-         MultilineText: 2,
-         Board: 3,
-         Leaderboard: 4
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
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L904-L915` → after: `L341-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L341-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L341-L344) · [Before (L904-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L904-L915)

```diff
-       QW = 2048,
-       WW = 256,
-       XW = 10,
-       wW = 4,
-       qW = 65536,
-       TW = new TextDecoder;
-     let zW = mQ.s,
-       sW = -1;
-     const FW = new Map,
-       PW = new Map;
-     let gW = 0;
-     const JW = new TextEncoder;
+       jM = ["popular", "updated", "newest"],
+       aM = 3,
+       PM = 32,
+       nM = 300;
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L918-L920` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L347) · [Before (L918-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L918-L920)

```diff
-       const XQ = JW.encode(JSON.stringify(WQ)),
-         wQ = new Uint8Array(XQ.length + 1);
-       return wQ[0] = QQ, wQ.set(XQ, 1), wQ
+       return MM.slice(0, rM).replace(/[\uD800-\uDBFF]$/, "")
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L922-L952` → after: `L349-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L349-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L349-L351) · [Before (L922-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L922-L952)

```diff
-     const IW = {
-         name: "Ag",
-         info: null,
-         colour: "default",
-         ranks: [],
-         effects: [],
-         health: .5,
-         Az: null,
-         hideNameSeed: null
-       },
-       jW = [rW(MQ.Nametag, IW), rW(MQ.Nametag, {
-         ...IW,
-         info: {
-           content: [{
-             str: "Ag"
-           }],
- ... (15 more removed lines; see GitHub link above)
+     const zM = 64,
+       LM = 512,
+       mM = 18e5;
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L955-L962` → after: `L354-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L354-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L354-L356) · [Before (L955-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L955-L962)

```diff
-       mQ.i.load().then((() => {
-         if (QQ()) return;
-         const WQ = (0, qQ.g)(1, 1, {
-           willReadFrequently: !0
-         });
-         var XQ;
-         WQ && (XQ = WQ.canvas, jW.map((QQ => bW(QQ, XQ))))
-       }))
+       const rM = MM,
+         iM = null === rM || void 0 === rM ? void 0 : rM.files;
+       return "number" === typeof(null === rM || void 0 === rM ? void 0 : rM.apiVersion) && "string" === typeof rM.name && (null === rM.author || "string" === typeof rM.author) && (void 0 === rM.keepCircleShadows || "boolean" === typeof rM.keepCircleShadows) && "object" === typeof … [truncated]
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L964` → after: `L358-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L358-L359) · [Before (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L964)

```diff
-     let yW = mQ.z;
+     const hM = "Bloxdhub",
+       JM = "https://bloxdhub.com/shaders";
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L966-L967` → after: `L361-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L361-L362) · [Before (L966-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L966-L967)

```diff
-     function VW() {
-       FW.clear(), PW.clear()
+     function dM(MM) {
+       return `https://bloxdhub.com/workshop/${encodeURIComponent(MM)}`
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L970-L972` → after: `L367-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L367-L369) · [Before (L970-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L970-L972)

```diff
-     function DW(QQ, WQ) {
-       const XQ = QQ.get(WQ);
-       return void 0 !== XQ && (QQ.delete(WQ), QQ.set(WQ, XQ)), XQ
+     function EM(MM) {
+       var rM;
+       return MM === yM || null !== (rM = null === MM || void 0 === MM ? void 0 : MM.startsWith(lM)) && void 0 !== rM && rM
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L975-L976` → after: `L372-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L372-L373) · [Before (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L975-L976)

```diff
-     function pW(QQ, WQ, XQ) {
-       QQ.set(WQ, XQ), QQ.size > WW && QQ.delete(QQ.keys().next().value)
+     function UM(MM, rM) {
+       return `shaderPacks/${MM}/${rM}.json`
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L979-L1056` → after: `L376-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L376-L377) · [Before (L979-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L979-L1056)

```diff
-     function GW(QQ, WQ, XQ) {
-       if (QQ === MQ.Nametag) {
-         let QQ = DW(FW, WQ);
-         return void 0 === QQ && (QQ = nQ(JSON.parse(WQ), XQ, zW), pW(FW, WQ, QQ)), QQ
-       }
-       if (QQ === MQ.MultilineText) {
-         var qQ;
-         const QQ = JSON.parse(WQ),
-           wQ = JSON.stringify(null !== (qQ = QQ.box) && void 0 !== qQ ? qQ : null),
-           TQ = "number" === typeof QQ.shown ? QQ.shown : null;
-         let zQ = DW(PW, wQ);
-         void 0 === zQ && (zQ = aQ(QQ.box, XQ, zW), pW(PW, wQ, zQ));
-         const sQ = null === TQ ? null : Math.min(Math.max(0, Math.floor(TQ)), zQ.chars),
-           FQ = zQ;
-         return {
-           width: FQ.width,
- ... (62 more removed lines; see GitHub link above)
+     function GM(MM, rM, iM, OM) {
+       return null === rM.renderId ? CM(MM, rM.baselineVersion, iM, OM) : `${MM}/${function(MM,rM,iM,OM){return`shaderPacks/${MM}/${rM}/${iM}-${OM}.webp`}(rM.packId,rM.renderId,iM,OM)}`
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L1060-L1106` → after: `L380-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/146.js#L380-L381) · [Before (L1060-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/146.js#L1060-L1106)

```diff
-     function bW(QQ, WQ) {
-       let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       try {
-         if (QQ.length < 2) return [0, 0];
-         const TQ = (0, qQ.e)(WQ);
-         if (!TQ) return [0, 0];
-         const zQ = yW();
-         zQ !== sW && (sW = zQ, VW());
-         const [sQ] = QQ, FQ = TW.decode(QQ.subarray(1));
-         let PQ;
-         sQ !== MQ.Board && sQ !== MQ.Leaderboard || !zW.canSeePlayerWrittenText || zW.glyphsShown(FQ), TQ.save();
-         try {
-           PQ = GW(sQ, FQ, TQ)
-         } finally {
-           TQ.restore()
- ... (31 more removed lines; see GitHub link above)
+     function CM(MM, rM, iM, OM) {
+       return `${MM}/${function(MM,rM,iM){return`shaderPacks/baseline/${MM}/${rM}-${iM}.webp`}(rM,iM,OM)}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/147.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/147.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39)

#### 1. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/147.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/147.js#L2)

```diff
- export const ids = [147];
+ export const ids = [147, 220];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/147.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/147.js#L4)

```diff
-   8449: (QQ, WQ, XQ) => {
+   35026: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/147.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/147.js#L6)

```diff
-       encodeBinaryMessageWithMetricsCookies: () => qQ
+       e: () => jM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L8` → after: `L8-L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L8-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/147.js#L8-L1641) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/147.js#L8)

```diff
-     var wQ = XQ(3984);
+     var OM = iM(332),
+       SM = iM(35029);
+ 
+     function jM(MM, rM, iM) {
+       const jM = Object.entries(rM).sort(((MM, rM) => rM[1] - MM[1])),
+         aM = (0, OM.ob)(MM);
+       aM.push(MM ? "\n\n" : "\n");
+       for (const [SM, hM] of jM) {
+         var PM, nM, QM;
+         const MM = null !== (PM = null === iM || void 0 === iM || null === (nM = iM[SM]) || void 0 === nM ? void 0 : nM.icon) && void 0 !== PM ? PM : `${SM} Enchantment`;
+         aM.push({
+           icon: MM,
+           style: {
+             fontSize: "1.5rem"
+           }
+         }), aM.push({
+ ... (1618 more added lines; see GitHub link above)
```
